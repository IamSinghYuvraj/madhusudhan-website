import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Initialize Supabase with service role key for server-side operations
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Use service role key for server-side
);

export async function POST(request: Request) {
  let body: any = {};
  try {
    body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone number (10 digits)
    if (phone.length !== 10 || !/^\d+$/.test(phone)) {
      return NextResponse.json(
        { error: 'Phone number must be 10 digits' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: process.env.EMAIL_FROM!, // Your verified sender email
      to: process.env.EMAIL_TO!, // Receiver email
      subject: 'New Contact Form Query',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Sent from your website contact form</em></p>
      `,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });

    // Save to Supabase database
    const { data: dbData, error: dbError } = await supabase
      .from('contact_queries')
      .insert([
        {
          name,
          email,
          phone,
          message,
          resend_id: emailResponse.data?.id || null,
          status: 'sent',
          created_at: new Date().toISOString(),
        }
      ])
      .select();

    if (dbError) {
      console.error('Database error:', dbError);
      // Email was sent but database save failed
      return NextResponse.json(
        { 
          message: 'Message sent successfully, but there was an issue saving to database',
          warning: true 
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { 
        message: 'Message sent successfully!',
        data: { emailId: emailResponse.data?.id, recordId: dbData?.[0]?.id }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing request:', error);
    
    // Try to save error to database for tracking
    try {
      await supabase
        .from('contact_queries')
        .insert([
          {
            name: body?.name || 'Unknown',
            email: body?.email || 'Unknown',
            phone: body?.phone || 'Unknown',
            message: body?.message || 'Unknown',
            status: 'failed',
            error_message: error instanceof Error ? error.message : 'Unknown error',
            created_at: new Date().toISOString(),
          }
        ]);
    } catch (dbError) {
      console.error('Failed to save error to database:', dbError);
    }

    return NextResponse.json(
      { error: 'Failed to send message. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}