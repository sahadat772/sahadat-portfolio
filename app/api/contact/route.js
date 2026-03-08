import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'mohammadsahadathossain381@gmail.com',
      subject: 'Portfolio Contact: ' + name,
      html: '<h2>New message from your portfolio</h2><p><strong>Name:</strong> ' + name + '</p><p><strong>Email:</strong> ' + email + '</p><p><strong>Message:</strong></p><p>' + message + '</p>',
    });

    return NextResponse.json({ message: 'Sent!' }, { status: 200 });
  } catch (error) {
    console.error('Contact error:', error);
    return NextResponse.json({ message: 'Failed' }, { status: 500 });
  }
}