import Link from 'next/link'

interface ServicePageProps {
  title: string
  tagline: string
  description: string
  benefits: string[]
  cta: string
}

export function ServicePage({ title, tagline, description, benefits, cta }: ServicePageProps) {
  return (
    <div className="bg-accent-cream min-h-screen">
      <section className="relative overflow-hidden border-b border-navy-200/40 bg-navy-900 py-20 sm:py-28">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">Service</p>
          <h1 className="font-display mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 text-xl text-slate-300">{tagline}</p>
        </div>
      </section>
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-navy-600">{description}</p>
          <h2 className="font-display mt-14 text-2xl font-bold text-navy-900">What we deliver</h2>
          <ul className="mt-6 space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-4">
                <span className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-600">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </span>
                <span className="text-navy-600">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-16 rounded-3xl bg-navy-900 p-10 text-center text-white sm:p-12">
            <p className="text-lg font-medium text-slate-200">{cta}</p>
            <Link
              href="/contact"
              className="btn-gold mt-8 inline-flex rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-4 font-bold text-navy-900 shadow-glow-gold transition hover:shadow-[0_0_40px_-10px_rgba(234,179,8,0.4)]"
            >
              Contact Us
            </Link>
          </div>
          <p className="mt-10 text-center">
            <Link href="/services" className="font-semibold text-gold-600 hover:text-gold-700 transition inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 rounded">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
              All services
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
