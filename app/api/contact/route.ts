import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const RECIPIENT_EMAIL = 'narenderbeniwal1234@gmail.com'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    const gmailUser = process.env.GMAIL_USER
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD

    if (!gmailUser || !gmailAppPassword) {
      console.error('Missing GMAIL_USER or GMAIL_APP_PASSWORD in .env.local')
      return NextResponse.json(
        { success: false, error: 'Email is not configured. Please set GMAIL_USER and GMAIL_APP_PASSWORD.' },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    })

    const subjectLabels: Record<string, string> = {
      services: 'IT Services',
      talent: 'Hire Talent',
      jobs: 'Post a Job',
      other: 'Other',
    }
    const subjectLabel = subjectLabels[subject] || subject || 'Other'

    await transporter.sendMail({
      from: `"QuantumBridge Innovations Contact" <${gmailUser}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `[QuantumBridge Innovations] ${subjectLabel} – from ${name}`,
      text: [
        `From: ${name} <${email}>`,
        `Subject: ${subjectLabel}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      html: [
        `<p><strong>From:</strong> ${name} &lt;<a href="mailto:${email}">${email}</a>&gt;</p>`,
        `<p><strong>Subject:</strong> ${subjectLabel}</p>`,
        '<hr/>',
        '<p><strong>Message:</strong></p>',
        `<p>${message.replace(/\n/g, '<br/>')}</p>`,
      ].join(''),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form send error:', err)
    return NextResponse.json(
      { success: false, error: 'Failed to send message. Please try again or email us directly.' },
      { status: 500 }
    )
  }
}
