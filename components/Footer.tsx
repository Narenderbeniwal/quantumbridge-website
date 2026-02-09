import Link from 'next/link'
import { SITE } from '@/lib/constants'

const services = [
  { href: '/services', label: 'All Services' },
  { href: '/services/managed-it', label: 'Managed IT' },
  { href: '/services/cloud-solutions', label: 'Cloud Solutions' },
  { href: '/services/cybersecurity', label: 'Cybersecurity' },
  { href: '/services/it-consulting', label: 'IT Consulting' },
  { href: '/services/software-development', label: 'Software Development' },
]

const company = [
  { href: '/about', label: 'About Us' },
  { href: '/hire-talent', label: 'Hire Talent' },
  { href: '/jobs', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 border-t border-white/5">
      <div className="absolute inset-0 hero-grid opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="font-display text-2xl font-bold text-white">
              QuantumBridge <span className="text-gold-400">Innovations</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              IT services and talent solutions for the modern enterprise. Managed IT, cloud, cybersecurity, and recruitment—so you can focus on growth.
            </p>
            <div className="mt-6 flex gap-4">
              <a href={`mailto:${SITE.email}`} className="text-slate-400 hover:text-gold-400 transition" aria-label="Email">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="text-slate-400 hover:text-gold-400 transition" aria-label="Phone">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-400/90">Services</h3>
            <ul className="mt-4 space-y-3">
              {services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-gold-400 transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-400/90">Company</h3>
            <ul className="mt-4 space-y-3">
              {company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-gold-400 transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-400/90">Connect</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li><a href={`mailto:${SITE.email}`} className="hover:text-gold-400 transition">{SITE.email}</a></li>
              <li><a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="hover:text-gold-400 transition">{SITE.phone}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="/contact" className="hover:text-gold-400 transition">Contact</Link>
            <Link href="/jobs" className="hover:text-gold-400 transition">Careers</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
