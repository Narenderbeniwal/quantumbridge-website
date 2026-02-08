import Link from 'next/link'

export default function HireTalentPage() {
  return (
    <div className="bg-accent-cream min-h-screen">
      <section className="relative overflow-hidden border-b border-navy-200/40 bg-navy-900 py-20 sm:py-28">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">Talent Outsourcing</p>
          <h1 className="font-display mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Hire Talent
          </h1>
          <p className="mt-6 text-xl text-slate-300">
            Scale your team with vetted IT professionals—on demand, without the overhead of full-time hiring.
          </p>
        </div>
      </section>
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-navy-600">
            QuantumBridge Innovations provides staff augmentation and dedicated teams so you can deliver projects on time and on budget. We handle sourcing, vetting, and onboarding so you get the right skills without the recruitment burden.
          </p>
          <h2 className="font-display mt-14 text-2xl font-bold text-navy-900">How it works</h2>
          <ul className="mt-6 space-y-5">
            {[
              'Tell us your requirements (role, skills, duration, location).',
              'We shortlist and present vetted candidates.',
              'You interview and select; we handle contracts and onboarding.',
              'Ongoing support and replacement if needed.',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 text-lg font-bold text-navy-900">
                  {i + 1}
                </span>
                <span className="pt-1.5 text-navy-600">{step}</span>
              </li>
            ))}
          </ul>
          <h2 className="font-display mt-14 text-2xl font-bold text-navy-900">Why choose us</h2>
          <ul className="mt-6 space-y-3">
            {['Vetted technical talent', 'Flexible engagement models', 'Faster time-to-hire', 'Reduced recruitment cost', 'Dedicated account management'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-navy-600">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-600">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-20 rounded-3xl bg-navy-900 p-10 text-center text-white sm:p-12">
            <p className="text-lg font-semibold">Ready to scale your team?</p>
            <Link
              href="/contact"
              className="btn-gold mt-8 inline-flex rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-4 font-bold text-navy-900 shadow-glow-gold transition hover:shadow-[0_0_40px_-10px_rgba(234,179,8,0.4)]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
