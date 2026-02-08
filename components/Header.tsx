'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services/managed-it', label: 'Services' },
  { href: '/hire-talent', label: 'Hire Talent' },
  { href: '/about', label: 'About' },
  { href: '/jobs', label: 'Jobs' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-navy-900/98 backdrop-blur-xl border-b border-white/5 shadow-xl' : 'bg-navy-900/80 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight sm:text-2xl text-white"
        >
          QuantumBridge <span className="text-gold-400">Innovations</span>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-gold text-sm font-medium text-white/90 hover:text-gold-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex md:items-center md:gap-3">
          <Link
            href="/jobs"
            className="rounded-full border border-gold-500/60 px-5 py-2.5 text-sm font-semibold text-gold-400 transition hover:bg-gold-500/10 hover:border-gold-400"
          >
            Find Jobs
          </Link>
          <Link
            href="/contact"
            className="btn-gold rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-5 py-2.5 text-sm font-semibold text-navy-900 transition hover:shadow-glow-gold"
          >
            Get in Touch
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2.5 text-white hover:bg-white/10 md:hidden transition"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-900 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-white/90 hover:bg-white/5 hover:text-gold-400 transition"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-3">
              <Link
                href="/jobs"
                className="rounded-full border border-gold-500/60 px-4 py-3 text-center text-sm font-semibold text-gold-400"
                onClick={() => setOpen(false)}
              >
                Find Jobs
              </Link>
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-4 py-3 text-center text-sm font-semibold text-navy-900"
                onClick={() => setOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
