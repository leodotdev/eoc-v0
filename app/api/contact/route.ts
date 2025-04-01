import { NextResponse } from 'next/server';

// Using top-level await to dynamically import Resend
// This helps prevent bundling issues during development
async function sendEmail(formData: {
  name: string;
  email: string;
  company?: string;
  message: string;
  source: string;
}) {
  try {
    // Dynamically import Resend to avoid bundling issues
    const { Resend } = await import('resend');
    
    // Ensure API key is defined
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error('RESEND_API_KEY is not defined in environment variables');
    }
    
    const resend = new Resend(apiKey);
    const timestamp = new Date().toISOString();
    
    const { data, error } = await resend.emails.send({
      from: 'EOC Website <onboarding@resend.dev>',
      to: ['leo@leo.dev'],
      subject: `New contact form submission from ${formData.name}`,
      reply_to: formData.email,
      text: `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Source: ${formData.source}
Timestamp: ${timestamp}

Message:
${formData.message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333;">New Contact Form Submission</h2>
  <p><strong>From:</strong> ${formData.name}</p>
  <p><strong>Email:</strong> ${formData.email}</p>
  <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
  <p><strong>Source:</strong> ${formData.source}</p>
  <p><strong>Time:</strong> ${timestamp}</p>
  
  <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 20px;">
    <p><strong>Message:</strong></p>
    <p>${formData.message.replace(/\n/g, '<br>')}</p>
  </div>
</div>
      `,
    });

    if (error) {
      console.error('Error sending email with Resend:', error);
      return { success: false, error };
    } 
    
    console.log('Email sent successfully with Resend ID:', data?.id);
    return { success: true, data };
  } catch (error) {
    console.error('Error in email sending function:', error);
    return { success: false, error };
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const message = formData.get('message') as string;
    const source = formData.get('source') || 'Contact Page';
    
    // Log form submission
    console.log('==== Form submission received ====');
    console.log('Source:', source);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Company:', company || 'Not provided');
    console.log('Message:', message);
    console.log('================================');
    
    // Send email (don't await to avoid blocking if there are Resend issues)
    // This ensures the form submission is successful even if email fails
    sendEmail({
      name,
      email,
      company,
      message,
      source: source as string
    }).catch(error => {
      console.error('Unhandled email sending error:', error);
    });
    
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your message. We will be in touch soon!' 
    });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { success: false, message: 'There was an error submitting your form. Please try again.' },
      { status: 500 }
    );
  }
} 