import Link from 'next/link'
import Image from 'next/image'
import { IMAGES } from '@/lib/images'

const services = [
  {
    title: 'Managed IT',
    href: '/services/managed-it',
    short: 'End-to-end IT operations, support, and infrastructure management.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>
    ),
  },
  {
    title: 'Cloud Solutions',
    href: '/services/cloud-solutions',
    short: 'Migration, architecture, and optimization on AWS, Azure, and GCP.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>
    ),
  },
  {
    title: 'Cybersecurity',
    href: '/services/cybersecurity',
    short: 'Protection, compliance, and incident response for your assets.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
    ),
  },
  {
    title: 'IT Consulting',
    href: '/services/it-consulting',
    short: 'Strategy, digital transformation, and technology roadmaps.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>
    ),
  },
  {
    title: 'Software Development',
    href: '/services/software-development',
    short: 'Custom applications, integrations, and product engineering.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>
    ),
  },
]

export function ServicesGrid() {
  return (
    <section className="relative bg-accent-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-navy-200/60 shadow-card order-2 lg:order-1">
            <Image src={IMAGES.services} alt="Technology and digital innovation" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div className="text-center lg:text-left order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">What we offer</p>
            <h2 className="font-display mt-3 text-4xl font-bold text-navy-900 sm:text-5xl">
              IT Services that scale with you
            </h2>
            <p className="mt-5 text-lg text-navy-600 leading-relaxed">
              From infrastructure to security and software—we cover the full stack so your business can grow with confidence.
            </p>
          </div>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Link
              key={s.href}
              href={s.href}
              className="hover-lift group relative rounded-3xl border border-navy-200/80 bg-white p-8 shadow-card transition hover:border-gold-300/50"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400/20 to-gold-500/10 text-gold-600 group-hover:from-gold-500/30 group-hover:to-gold-400/20 transition">
                {s.icon}
              </div>
              <h3 className="font-display mt-6 text-xl font-bold text-navy-900 group-hover:text-gold-700 transition">
                {s.title}
              </h3>
              <p className="mt-3 text-navy-600 leading-relaxed">{s.short}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-600 group-hover:gap-3 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link href="/services/managed-it" className="link-gold inline-flex items-center gap-2 font-semibold text-navy-800">
            View all services
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
