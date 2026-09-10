import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, subject, message } = body;

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Please provide a valid name (at least 2 characters).' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Please provide a message with at least 10 characters.' },
        { status: 400 }
      );
    }

    // In a production setup with SMTP credentials configured, nodemailer can send this.
    // For now we log and return success.
    console.log('[Contact Form Submission Received]', {
      name: name.trim(),
      email: email.trim(),
      service: service || 'General Inquiry',
      subject: subject || 'Portfolio Contact',
      message: message.trim(),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your message has been received. I will get back to you within 24 hours.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry. Please try emailing directly at muhammadasadullah427@gmail.com' },
      { status: 500 }
    );
  }
}
