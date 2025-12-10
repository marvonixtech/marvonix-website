import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Extract form data
  const { name, email, company, budget, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  try {
    // Create SMTP transporter using Gmail
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // use TLS
      auth: {
        user: process.env.SMTP_USER || 'marvonix.tech@gmail.com',
        pass: process.env.SMTP_PASSWORD, // App password from environment variable
      },
    });

    // Format email content
    const emailContent = `
New Contact Form Submission from MARVONIX Website

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

From: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}
${budget ? `Budget: ${budget}` : ''}

Message:
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sent from: marvonix.com/contact
Time: ${new Date().toLocaleString('en-US', { timeZone: 'UTC' })} UTC
    `.trim();

    // Send email
    await transporter.sendMail({
      from: '"MARVONIX Team" <marvonix.tech@gmail.com>',
      to: 'marvonix.tech@gmail.com',
      replyTo: email,
      subject: `New Contact Form: ${name} - ${company || 'No Company'}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #1A3CE4; margin-top: 0;">New Contact Form Submission</h2>
            <hr style="border: none; border-top: 2px solid #e5e7eb; margin: 20px 0;">
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #0A0F2C;">Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong style="color: #0A0F2C;">Email:</strong> <a href="mailto:${email}" style="color: #1A3CE4;">${email}</a></p>
              ${company ? `<p style="margin: 10px 0;"><strong style="color: #0A0F2C;">Company:</strong> ${company}</p>` : ''}
              ${budget ? `<p style="margin: 10px 0;"><strong style="color: #0A0F2C;">Budget:</strong> ${budget}</p>` : ''}
            </div>

            <hr style="border: none; border-top: 2px solid #e5e7eb; margin: 20px 0;">
            
            <div style="margin: 20px 0;">
              <p style="margin: 0 0 10px 0;"><strong style="color: #0A0F2C;">Message:</strong></p>
              <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; border-left: 4px solid #1A3CE4;">
                <p style="margin: 0; white-space: pre-wrap; color: #374151;">${message}</p>
              </div>
            </div>

            <hr style="border: none; border-top: 2px solid #e5e7eb; margin: 20px 0;">
            
            <p style="font-size: 12px; color: #6b7280; margin: 10px 0;">
              Sent from: <a href="https://marvonix.com/contact" style="color: #1A3CE4;">marvonix.com/contact</a><br>
              Time: ${new Date().toLocaleString('en-US', { timeZone: 'UTC' })} UTC
            </p>
          </div>
        </div>
      `,
    });

    // Success response
    return res.status(200).json({ 
      success: true, 
      message: 'Your message has been sent successfully! We\'ll get back to you within 1-2 business days.' 
    });

  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ 
      error: 'Failed to send message. Please try again or contact us directly at marvonix.tech@gmail.com' 
    });
  }
}
