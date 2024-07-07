import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email } = await request.json();

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '465'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'info@edgeble.ai',
    subject: 'New Subscription',
    text: `Name: ${name}\nEmail: ${email}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Subscription successful.' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Subscription failed.' }, { status: 500 });
  }
}
