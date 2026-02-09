import Link from 'next/link'
import Image from 'next/image'
import { IMAGES } from '@/lib/images'

export function JobsCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 sm:py-32">
      <div className="absolute inset-0">
        <Image src={IMAGES.jobs} alt="" fill className="object-cover opacity-20" sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 via-navy-900/80 to-navy-900/90" />
      <div className="absolute inset-0 hero-grid opacity-20" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          Find your next role
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
          Browse open positions and apply by contacting us—we’ll respond promptly.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <Link
            href="/jobs"
            className="btn-gold w-full rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-10 py-4 text-center font-bold text-navy-900 shadow-glow-gold transition hover:shadow-[0_0_50px_-10px_rgba(234,179,8,0.5)] sm:w-auto"
          >
            Browse Jobs
          </Link>
          <Link
            href="/contact"
            className="w-full rounded-full border-2 border-white/30 bg-white/5 px-10 py-4 text-center font-semibold text-white backdrop-blur-sm transition hover:border-gold-400/50 hover:bg-white/10 hover:text-gold-400 sm:w-auto"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
