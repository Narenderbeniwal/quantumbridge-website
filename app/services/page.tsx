import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IT Services',
  description:
    'Managed IT, Cloud Solutions, Cybersecurity, IT Consulting, and Software Development. Scale with QuantumBridge Innovations.',
  openGraph: {
    title: 'IT Services – QuantumBridge Innovations',
    description: 'From infrastructure to security and software—we cover the full stack so your business can grow with confidence.',
  },
}

const services = [
  {
    title: 'Managed IT',
    href: '/services/managed-it',
    short: 'End-to-end IT operations, support, and infrastructure management.',
  },
  {
    title: 'Cloud Solutions',
    href: '/services/cloud-solutions',
    short: 'Migration, architecture, and optimization on AWS, Azure, and GCP.',
  },
  {
    title: 'Cybersecurity',
    href: '/services/cybersecurity',
    short: 'Protection, compliance, and incident response for your assets.',
  },
  {
    title: 'IT Consulting',
    href: '/services/it-consulting',
    short: 'Strategy, digital transformation, and technology roadmaps.',
  },
  {
    title: 'Software Development',
    href: '/services/software-development',
    short: 'Custom applications, integrations, and product engineering.',
  },
]

export default function ServicesIndexPage() {
  return (
    <div className="bg-accent-cream min-h-screen">
      <section className="relative overflow-hidden border-b border-navy-200/40 bg-navy-900 py-20 sm:py-28">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">Services</p>
          <h1 className="font-display mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            IT Services that scale with you
          </h1>
          <p className="mt-6 text-xl text-slate-300">
            From infrastructure to security and software—we cover the full stack so your business can grow with confidence.
          </p>
        </div>
      </section>
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="hover-lift group block rounded-3xl border border-navy-200/80 bg-white p-8 shadow-card transition hover:border-gold-300/50 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
              >
                <h2 className="font-display text-xl font-bold text-navy-900 group-hover:text-gold-700 transition">
                  {s.title}
                </h2>
                <p className="mt-3 text-navy-600 leading-relaxed">{s.short}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-600 group-hover:gap-3 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-14 text-center">
            <Link
              href="/contact"
              className="link-gold inline-flex items-center gap-2 font-semibold text-navy-800 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 rounded"
            >
              Get in touch
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
