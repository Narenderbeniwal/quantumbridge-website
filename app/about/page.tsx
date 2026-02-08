import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="bg-accent-cream min-h-screen">
      <section className="relative overflow-hidden border-b border-navy-200/40 bg-navy-900 py-20 sm:py-28">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">About</p>
          <h1 className="font-display mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Where IT meets talent
          </h1>
          <p className="mt-6 text-xl text-slate-300">
            We combine enterprise IT services with a full recruitment lifecycle—so companies and candidates both win.
          </p>
        </div>
      </section>
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-navy-600 leading-relaxed">
              QuantumBridge Innovations is a dual-purpose platform. On one side, we offer IT services: managed IT, cloud solutions, cybersecurity, IT consulting, and software development. On the other, we run a job portal and candidate management system so companies can post roles, manage applications, schedule interviews, and extend offers—while candidates get transparent tracking and a smooth application experience.
            </p>
            <h2 className="font-display mt-14 text-2xl font-bold text-navy-900">Our approach</h2>
            <p className="text-navy-600 leading-relaxed">
              We aim for high performance and accessibility: page load under 3 seconds, 99.9% uptime, support for 10,000+ concurrent users, and WCAG 2.1 Level AA compliance. Our architecture is three-tier with a microservices-style API, so we can scale and evolve without compromising reliability or security.
            </p>
            <h2 className="font-display mt-14 text-2xl font-bold text-navy-900">What we stand for</h2>
            <ul className="mt-6 space-y-4">
              {['Transparent application tracking for candidates', 'Efficient HR operations through automation', 'Security and compliance by design', 'Continuous improvement based on user feedback'].map((item) => (
                <li key={item} className="flex items-center gap-4 text-navy-600">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-600">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-4">
            <Link href="/jobs" className="btn-gold rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-4 font-bold text-navy-900 shadow-glow-gold transition">
              Find Jobs
            </Link>
            <Link href="/contact" className="rounded-full border-2 border-navy-800 px-8 py-4 font-semibold text-navy-800 transition hover:bg-navy-50">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
