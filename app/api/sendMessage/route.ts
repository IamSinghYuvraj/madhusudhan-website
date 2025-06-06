"use server";
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Send email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'developeruv07@gmail.com',
        pass: process.env.EMAIL_PASSWORD || 'rqdu fbgz xcrs jllx',
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || 'developeruv07@gmail.com',
      to: process.env.EMAIL_RECEIVER || 'developeruv07@gmail.com',
      subject: 'New Query',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}