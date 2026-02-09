import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { SITE } from '@/lib/constants'

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000 // 15 minutes
const RATE_LIMIT_MAX = 5

const rateLimitStore = new Map<
  string,
  { count: number; resetAt: number }
>()

function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIp = request.headers.get('x-real-ip')
  if (forwarded) return forwarded.split(',')[0].trim()
  if (realIp) return realIp
  return 'unknown'
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitStore.get(ip)
  if (!entry) return false
  if (now >= entry.resetAt) {
    rateLimitStore.delete(ip)
    return false
  }
  return entry.count >= RATE_LIMIT_MAX
}

function recordRequest(ip: string): void {
  const now = Date.now()
  const entry = rateLimitStore.get(ip)
  if (!entry || now >= entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return
  }
  entry.count++
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function sanitizeString(value: unknown, maxLen: number): string {
  const s = typeof value === 'string' ? value.trim() : ''
  return s.slice(0, maxLen)
}

const SUBJECT_VALUES = new Set(['services', 'talent', 'jobs', 'other'])
const MAX_NAME = 120
const MAX_MESSAGE = 5000

export async function POST(request: Request) {
  const ip = getClientIp(request)
  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        success: false,
        error: 'Too many requests. Please try again in 15 minutes.',
      },
      { status: 429 }
    )
  }

  try {
    const body = await request.json()
    const rawName = body.name
    const rawEmail = body.email
    const rawSubject = body.subject
    const rawMessage = body.message

    const name = sanitizeString(rawName, MAX_NAME)
    const email = sanitizeString(rawEmail, 254)
    const subject = SUBJECT_VALUES.has(String(rawSubject).trim()) ? String(rawSubject).trim() : 'other'
    const message = sanitizeString(rawMessage, MAX_MESSAGE)

    if (!name) {
      return NextResponse.json(
        { success: false, error: 'Name is required.' },
        { status: 400 }
      )
    }
    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required.' },
        { status: 400 }
      )
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address.' },
        { status: 400 }
      )
    }
    if (!message) {
      return NextResponse.json(
        { success: false, error: 'Message is required.' },
        { status: 400 }
      )
    }

    const gmailUser = process.env.GMAIL_USER
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD
    const recipient = process.env.CONTACT_RECIPIENT_EMAIL || SITE.email

    if (!gmailUser || !gmailAppPassword) {
      console.error('Missing GMAIL_USER or GMAIL_APP_PASSWORD in .env.local')
      return NextResponse.json(
        {
          success: false,
          error:
            'Email is not configured. Please set GMAIL_USER and GMAIL_APP_PASSWORD.',
        },
        { status: 500 }
      )
    }

    recordRequest(ip)

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
    const subjectLabel = subjectLabels[subject] || 'Other'

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>')

    await transporter.sendMail({
      from: `"${SITE.name} Contact" <${gmailUser}>`,
      to: recipient,
      replyTo: email,
      subject: `[${SITE.name}] ${subjectLabel} – from ${name}`,
      text: [
        `From: ${name} <${email}>`,
        `Subject: ${subjectLabel}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      html: [
        `<p><strong>From:</strong> ${safeName} &lt;<a href="mailto:${safeEmail}">${safeEmail}</a>&gt;</p>`,
        `<p><strong>Subject:</strong> ${subjectLabel}</p>`,
        '<hr/>',
        '<p><strong>Message:</strong></p>',
        `<p>${safeMessage}</p>`,
      ].join(''),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form send error:', err)
    return NextResponse.json(
      {
        success: false,
        error:
          'Failed to send message. Please try again or email us directly.',
      },
      { status: 500 }
    )
  }
}
