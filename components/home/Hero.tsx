import Link from 'next/link'
import Image from 'next/image'
import { IMAGES } from '@/lib/images'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden hero-bg hero-grid">
      <div className="absolute inset-0">
        <Image src={IMAGES.hero} alt="" fill className="object-cover opacity-30" priority sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/70 via-navy-900/50 to-navy-950/90" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p
            className="animate-fade-in text-sm font-semibold uppercase tracking-[0.2em] text-gold-400 opacity-90"
            style={{ animationDelay: '0ms' }}
          >
            IT Services & Talent Solutions
          </p>
          <h1
            className="font-display mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl animate-slide-up"
            style={{ animationDelay: '100ms' }}
          >
            <span className="text-white">Build your team.</span>
            <br />
            <span className="text-gradient-gold">Scale your business.</span>
          </h1>
          <p
            className="animate-slide-up mt-8 text-lg leading-relaxed text-slate-300 sm:text-xl max-w-2xl mx-auto"
            style={{ animationDelay: '250ms' }}
          >
            QuantumBridge Innovations delivers managed IT, cloud, cybersecurity, and recruitment—so you can focus on what matters.
          </p>
          <div
            className="animate-slide-up mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5"
            style={{ animationDelay: '400ms' }}
          >
            <Link
              href="/jobs"
              className="btn-gold w-full rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-10 py-4 text-center font-bold text-navy-900 shadow-glow-gold transition hover:shadow-[0_0_50px_-10px_rgba(234,179,8,0.5)] sm:w-auto"
            >
              Find Jobs
            </Link>
            <Link
              href="/hire-talent"
              className="w-full rounded-full border-2 border-white/30 bg-white/5 px-10 py-4 text-center font-semibold text-white backdrop-blur-sm transition hover:border-gold-400/50 hover:bg-white/10 hover:text-gold-400 sm:w-auto"
            >
              Hire Talent
            </Link>
          </div>
          <div className="animate-fade-in mt-16 flex items-center justify-center gap-8 text-sm text-slate-500" style={{ animationDelay: '600ms' }}>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              99.9% Uptime
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gold-500" />
              &lt;3s Load
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-500" />
              10K+ Users
            </span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-accent-cream to-transparent pointer-events-none" />
    </section>
  )
}
