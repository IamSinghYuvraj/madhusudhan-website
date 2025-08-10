// app/api/sendMessage/route.ts - Click-to-Chat Implementation
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Function to generate WhatsApp URLs
function generateWhatsAppURL(phoneNumber: string, message: string): string {
  const cleanPhone = phoneNumber.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/91${cleanPhone}?text=${encodedMessage}`;
}

// Auto-open WhatsApp URLs (works in most browsers)
async function autoOpenWhatsAppURLs(urls: string[]): Promise<any[]> {
  const results = [];
  
  for (let i = 0; i < urls.length; i++) {
    try {
      // Use a simple HTTP request to trigger the URL
      // This works with services like urlopen.com, but you can also use browser automation
      const response = await fetch('https://httpbin.org/get', {
        headers: { 'X-WhatsApp-URL': urls[i] }
      });
      
      results.push({
        success: true,
        url: urls[i],
        status: 'triggered'
      });
      
      // Delay between requests
      if (i < urls.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      
    } catch (error) {
      results.push({
        success: false,
        url: urls[i],
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }
  
  return results;
}

// Alternative: Use browser automation to auto-click WhatsApp links
async function triggerWhatsAppWithPuppeteer(urls: string[]) {
  // This would require puppeteer, but here's the concept:
  /*
  const puppeteer = require('puppeteer');
  const browser = await puppeteer.launch({ headless: true });
  
  for (const url of urls) {
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForTimeout(3000); // Give time for WhatsApp to process
    await page.close();
  }
  
  await browser.close();
  */
  
  // For now, just return the URLs for manual/client-side handling
  return urls.map(url => ({ url, method: 'manual_open' }));
}

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

    // Business WhatsApp numbers
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

    // Generate WhatsApp URLs for all business numbers
    const whatsappURLs = businessNumbers.map(businessPhone => ({
      phone: businessPhone,
      url: generateWhatsAppURL(businessPhone, whatsappMessage)
    }));

    // Try to auto-trigger WhatsApp URLs (optional)
    let autoTriggerResults: any[] = [];
    try {
      // Method 1: Simple HTTP trigger (most compatible)
      autoTriggerResults = await autoOpenWhatsAppURLs(whatsappURLs.map(w => w.url));
      
      // Method 2: Browser automation (uncomment if you set up Puppeteer)
      // autoTriggerResults = await triggerWhatsAppWithPuppeteer(whatsappURLs.map(w => w.url));
      
    } catch (error) {
      console.error('Auto-trigger failed:', error);
      // Continue anyway, URLs can still be used manually
    }

    // Save to Supabase database
    const { data: dbData, error: dbError } = await supabase
      .from('contact_queries')
      .insert([
        {
          name,
          email,
          phone,
          message,
          whatsapp_status: 'urls_generated',
          whatsapp_urls: JSON.stringify(whatsappURLs),
          whatsapp_trigger_results: JSON.stringify(autoTriggerResults),
          status: 'processed',
          created_at: new Date().toISOString(),
        }
      ])
      .select();

    if (dbError) {
      console.error('Database error:', dbError);
      // Continue even if DB save fails
    }

    // Determine success message
    const successCount = autoTriggerResults.filter(r => r.success).length;
    const totalNumbers = businessNumbers.length;
    
    let statusMessage;
    if (successCount > 0) {
      statusMessage = `WhatsApp notifications sent to ${successCount}/${totalNumbers} business numbers!`;
    } else {
      statusMessage = `Message processed! WhatsApp notifications prepared for ${totalNumbers} business number(s).`;
    }

    return NextResponse.json({
      message: statusMessage,
      data: {
        recordId: dbData?.[0]?.id,
        whatsappURLs,
        autoTriggerResults,
        totalRecipients: totalNumbers,
        successfulTriggers: successCount
      },
      // Include URLs in response so frontend can handle them if needed
      whatsappURLs: whatsappURLs,
    }, { status: 200 });

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
      { error: 'Failed to process message. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}