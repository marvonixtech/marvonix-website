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
      from: '"MARVONIX Contact Form" <marvonix.tech@gmail.com>',
      to: 'marvonix.tech@gmail.com',
      replyTo: `"${name}" <${email}>`,
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

    // Send auto-reply to visitor with professional template
    await transporter.sendMail({
      from: '"MARVONIX TECH" <marvonix.tech@gmail.com>',
      to: email,
      subject: 'We received your message - MARVONIX TECH',
      text: `Thank you for reaching out! We've received your message. Please view this email in HTML format to see the full message. If you have urgent questions, contact marvonix.tech@gmail.com.`,
      html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { margin: 0; padding: 0; background-color: #f9fafb; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .email-wrapper { background-color: #ffffff; border-radius: 12px; padding: 40px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
    .header { text-align: center; margin-bottom: 40px; }
    .logo { font-size: 32px; font-weight: bold; color: #0A0F2C; margin: 0; display: flex; align-items: center; justify-content: center; gap: 6px; }
    .logo-dot { width: 8px; height: 8px; background-color: #1A3CE4; border-radius: 50%; display: inline-block; }
    .tagline { color: #6b7280; font-size: 14px; margin: 5px 0 0 0; }
    .divider { border: none; border-top: 2px solid #e5e7eb; margin: 30px 0; }
    h2 { color: #0A0F2C; font-size: 24px; margin: 0 0 20px 0; }
    p { color: #374151; line-height: 1.6; margin: 15px 0; }
    .info-box { background-color: #f0f4ff; padding: 20px; border-radius: 8px; border-left: 4px solid #1A3CE4; margin: 25px 0; }
    .info-box-title { color: #0A0F2C; font-weight: 600; margin: 0 0 10px 0; }
    .info-box-text { color: #374151; font-size: 14px; margin: 0; }
    .footer { text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: 12px; }
    a { color: #1A3CE4; text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="container">
    <div class="email-wrapper">
      <div class="header">
        <p class="logo">MARVONIX<span class="logo-dot"></span></p>
        <p class="tagline">Software Engineering & Development</p>
      </div>
      
      <hr class="divider">
      
      <h2>Thank you for reaching out, ${name}! 👋</h2>
      
      <p>We've received your message and truly appreciate your interest in working with us.</p>
      
      <div class="info-box">
        <p class="info-box-title">📋 What happens next?</p>
        <p class="info-box-text">Our team typically responds within <strong>1-2 business days</strong>. We'll review your requirements and reach out with next steps.</p>
      </div>
      
      <p>If you have any urgent questions in the meantime, feel free to reach out directly at <a href="mailto:marvonix.tech@gmail.com">marvonix.tech@gmail.com</a>.</p>
      
      <p style="margin-top: 30px;">
        Best regards,<br>
        <strong style="color: #0A0F2C;">The MARVONIX Team</strong>
      </p>
      
      <hr class="divider">
      
      <div class="footer">
        <p style="margin: 0;">© 2025 MARVONIX. All rights reserved.</p>
        <p style="margin: 5px 0 0 0;"><a href="https://marvonix.com">Visit our website</a></p>
      </div>
    </div>
  </div>
</body>
</html>`,
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
