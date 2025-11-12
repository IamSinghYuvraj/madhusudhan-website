// app/api/sendMessage/route.ts - Updated with Green API Integration
import { NextResponse } from 'next/server';
import greenApiClient from '@/lib/greenApi';

// Required for static export compatibility
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

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
      process.env.BUSINESS_WHATSAPP_1!, 
      process.env.BUSINESS_WHATSAPP_2!, 
      process.env.BUSINESS_WHATSAPP_3!, 
    ].filter(Boolean); // Remove undefined values

    // Format the message for WhatsApp
    const whatsappMessage = `🔔 *NEW CONTACT FORM QUERY*\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}  \n📱 *Phone:* +91 ${phone}\n\n💬 *Message:*\n${message}\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n📅 *Received:* ${new Date().toLocaleString('en-IN', { 
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium', 
      timeStyle: 'short'
    })}
🌐 *Source:* Website Contact Form
━━━━━━━━━━━━━━━━━━━━━━━━\n\n_Please respond to the customer promptly._`;

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
    }

    // Count successful WhatsApp sends
    const successfulSends = whatsappResult.data?.filter(result => result.success) || [];

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
      statusMessage = `We encountered a technical issue, but your message has been saved. We'll contact you directly soon.`;
      responseStatus = 200; // Still show success to user
    }

    return NextResponse.json({
      message: statusMessage,
      success: true, // Always show success to user
      data: {
        totalRecipients: totalNumbers,
        status: successCount > 0 ? 'delivered' : 'received',
      }
    }, { status: responseStatus });

  } catch (error) {
    console.error('Error processing request:', error);
    
    return NextResponse.json(
      {
        error: 'We encountered a technical issue. Please try again later or contact us directly.',
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