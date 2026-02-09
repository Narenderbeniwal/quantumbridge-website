'use client'

import { useState } from 'react'
import { SITE } from '@/lib/constants'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const MAX_NAME = 120
  const MAX_MESSAGE = 5000

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const subject = formData.get('subject')
    const message = String(formData.get('message') ?? '').trim()

    if (!name || name.length > MAX_NAME) {
      setError(name ? `Name must be under ${MAX_NAME} characters.` : 'Please enter your name.')
      setLoading(false)
      return
    }
    if (!EMAIL_REGEX.test(email)) {
      setError('Please enter a valid email address.')
      setLoading(false)
      return
    }
    if (!message || message.length > MAX_MESSAGE) {
      setError(message ? `Message must be under ${MAX_MESSAGE} characters.` : 'Please enter your message.')
      setLoading(false)
      return
    }

    const data = { name, email, subject: subject ?? 'other', message }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()

      if (!res.ok) {
        setError(json.error || 'Something went wrong.')
        setLoading(false)
        return
      }

      setSubmitted(true)
      form.reset()
    } catch {
      setError('Failed to send. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-accent-cream min-h-screen">
      <section className="relative overflow-hidden border-b border-navy-200/40 bg-navy-900 py-20 sm:py-28">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">Contact</p>
          <h1 className="font-display mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Get in touch
          </h1>
          <p className="mt-6 text-xl text-slate-300">
            Whether you need IT services, talent, or want to post a job—we’re here to help.
          </p>
        </div>
      </section>
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="rounded-3xl border border-navy-200 bg-white p-12 text-center shadow-card">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-100 text-gold-600">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="mt-6 text-xl font-semibold text-navy-900">Thanks for your message.</p>
              <p className="mt-2 text-navy-600">We’ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-navy-200/60 bg-white p-8 shadow-card sm:p-10">
              {error && (
                <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
                  {error}
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-navy-800">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  maxLength={MAX_NAME}
                  disabled={loading}
                  className="mt-2 block w-full rounded-xl border border-navy-200 bg-white px-4 py-3.5 text-navy-900 shadow-sm focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 disabled:opacity-70"
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-navy-800">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  disabled={loading}
                  className="mt-2 block w-full rounded-xl border border-navy-200 bg-white px-4 py-3.5 text-navy-900 shadow-sm focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 disabled:opacity-70"
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-navy-800">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  disabled={loading}
                  className="mt-2 block w-full rounded-xl border border-navy-200 bg-white px-4 py-3.5 text-navy-900 shadow-sm focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 disabled:opacity-70"
                >
                  <option value="services">IT Services</option>
                  <option value="talent">Hire Talent</option>
                  <option value="jobs">Post a Job</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy-800">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  maxLength={MAX_MESSAGE}
                  disabled={loading}
                  className="mt-2 block w-full rounded-xl border border-navy-200 bg-white px-4 py-3.5 text-navy-900 shadow-sm focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 disabled:opacity-70"
                  aria-describedby="message-hint"
                />
                <p id="message-hint" className="mt-1 text-xs text-navy-500">Max {MAX_MESSAGE.toLocaleString()} characters.</p>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn-gold w-full rounded-full bg-gradient-to-r from-gold-500 to-gold-400 py-4 font-bold text-navy-900 shadow-glow-gold transition disabled:opacity-70 sm:w-auto sm:px-10 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
              >
                {loading ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
          <div className="mt-14 rounded-2xl bg-navy-50 p-8 sm:p-10">
            <h3 className="font-display text-lg font-bold text-navy-900">Other ways to reach us</h3>
            <ul className="mt-4 space-y-3 text-navy-600">
              <li><strong>Email:</strong> <a href={`mailto:${SITE.email}`} className="font-medium text-gold-600 hover:text-gold-700 transition">{SITE.email}</a></li>
              <li><strong>Phone:</strong> <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="font-medium text-gold-600 hover:text-gold-700 transition">{SITE.phone}</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
