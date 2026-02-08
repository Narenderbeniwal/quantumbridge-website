import Link from 'next/link'
import Image from 'next/image'
import { IMAGES } from '@/lib/images'

export function TalentSection() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 sm:py-32">
      <div className="absolute inset-0 hero-grid opacity-30" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] max-w-lg rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image src={IMAGES.talent} alt="Team collaboration meeting" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">Talent Outsourcing</p>
            <h2 className="font-display mt-5 text-4xl font-bold text-white sm:text-5xl">
              Staff augmentation and dedicated teams
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Scale your capacity without the overhead. We provide vetted IT talent—developers, DevOps, security experts—on demand, so you can deliver projects on time and on budget.
            </p>
            <ul className="mt-8 space-y-4">
              {['Vetted technical talent', 'Flexible engagement models', 'Faster time-to-hire', 'Reduced recruitment cost'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-200">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/hire-talent"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-4 font-bold text-navy-900 shadow-glow-gold transition hover:shadow-[0_0_50px_-10px_rgba(234,179,8,0.5)]"
            >
              Hire Talent
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10">
              <svg className="h-10 w-10 text-gold-400/80" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              <blockquote className="mt-6 text-xl leading-relaxed text-slate-200 italic">
                “QuantumBridge Innovations helped us onboard three senior developers in under two weeks. The quality and fit were exactly what we needed.”
              </blockquote>
              <p className="mt-6 text-sm font-semibold text-gold-400/90">— Enterprise client, Riyadh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
