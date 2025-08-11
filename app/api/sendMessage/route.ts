// app/api/sendMessage/route.ts - Updated with Green API Integration
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import greenApiClient from '@/lib/greenApi';

// Required for static export compatibility
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
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

    // Business WhatsApp numbers (these should be registered with your Green API instance)
    const businessNumbers = [
      process.env.BUSINESS_WHATSAPP_1!, // e.g., "9820142424"
      process.env.BUSINESS_WHATSAPP_2!, // e.g., "9876543210"
      process.env.BUSINESS_WHATSAPP_3!, // e.g., "9123456789"
    ].filter(Boolean); // Remove undefined values

    // Format the message for WhatsApp
    const whatsappMessage = `🔔 *NEW CONTACT FORM QUERY*

👤 *Name:* ${name}
📧 *Email:* ${email}  
📱 *Phone:* +91 ${phone}

💬 *Message:*
${message}

━━━━━━━━━━━━━━━━━━━━━━━━
📅 *Received:* ${new Date().toLocaleString('en-IN', { 
  timeZone: 'Asia/Kolkata',
  dateStyle: 'medium', 
  timeStyle: 'short'
})}
🌐 *Source:* Website Contact Form
━━━━━━━━━━━━━━━━━━━━━━━━

_Please respond to the customer promptly._`;

    // Check Green API instance state
    const instanceState = await greenApiClient.getStateInstance();
    if (!instanceState.success || instanceState.data?.stateInstance !== 'authorized') {
      console.warn('Green API instance not authorized');
      return NextResponse.json(
        { 
          error: 'WhatsApp messaging service is not available. Please try again later or contact us directly.',
          details: 'Instance not authorized'
        },
        { status: 503 }
      );
    }

    // Send WhatsApp messages to all business numbers
    const whatsappResult = await greenApiClient.sendBulkMessages(
      businessNumbers,
      whatsappMessage,
      2000 // 2 second delay between messages
    );

    if (!whatsappResult.success) {
      console.error('Failed to send WhatsApp messages:', whatsappResult.error);
      // Continue to save in database even if WhatsApp fails
    }

    // Count successful WhatsApp sends
    const successfulSends = whatsappResult.data?.filter(result => result.success) || [];
    const failedSends = whatsappResult.data?.filter(result => !result.success) || [];

    // Save to Supabase database
    const { data: dbData, error: dbError } = await supabase
      .from('contact_queries')
      .insert([
        {
          name,
          email,
          phone,
          message,
          whatsapp_status: whatsappResult.success ? 'sent' : 'failed',
          whatsapp_results: JSON.stringify(whatsappResult.data),
          whatsapp_success_count: successfulSends.length,
          whatsapp_total_attempted: businessNumbers.length,
          status: 'processed',
          created_at: new Date().toISOString(),
        }
      ])
      .select();

    if (dbError) {
      console.error('Database error:', dbError);
      // Continue even if DB save fails
    }

    // Prepare response
    const totalNumbers = businessNumbers.length;
    const successCount = successfulSends.length;
    
    let statusMessage;
    let responseStatus = 200;

    if (successCount === totalNumbers) {
      statusMessage = `Your message has been received successfully! We'll contact you shortly.`;
    } else if (successCount > 0) {
      statusMessage = `Your message has been received! We'll get back to you as soon as possible.`;
      responseStatus = 207; // Multi-status
    } else {
      statusMessage = `Your message has been saved successfully. We'll contact you directly soon.`;
      responseStatus = 200; // Still show success to user
    }

    return NextResponse.json({
      message: statusMessage,
      success: true, // Always show success to user
      data: {
        recordId: dbData?.[0]?.id,
        // Hide internal WhatsApp details from frontend
        totalRecipients: totalNumbers,
        status: successCount > 0 ? 'delivered' : 'received',
      }
    }, { status: responseStatus });

  } catch (error) {
    console.error('Error processing request:', error);
    
    // Save error to database
    try {
      await supabase.from('contact_queries').insert([{
        name: body?.name || 'Unknown',
        email: body?.email || 'Unknown', 
        phone: body?.phone || 'Unknown',
        message: body?.message || 'Unknown',
        status: 'failed',
        whatsapp_status: 'failed',
        error_message: error instanceof Error ? error.message : 'Unknown error',
        created_at: new Date().toISOString(),
      }]);
    } catch (dbError) {
      console.error('Failed to save error to database:', dbError);
    }

    return NextResponse.json(
      { 
        error: 'We encountered a technical issue. Your message has been saved and we will contact you directly.',
        success: false
      },
      { status: 500 }
    );
  }
}

// Health check endpoint for Green API
export async function GET() {
  try {
    const instanceState = await greenApiClient.getStateInstance();
    const settings = await greenApiClient.getSettings();
    
    return NextResponse.json({
      status: 'ok',
      greenApi: {
        instanceState: instanceState.data?.stateInstance || 'unknown',
        instanceAuthorized: instanceState.data?.stateInstance === 'authorized',
        settings: settings.success ? settings.data : null,
        lastChecked: new Date().toISOString(),
      }
    });
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}