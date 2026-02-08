import Link from 'next/link'
import Image from 'next/image'
import { IMAGES } from '@/lib/images'

const stats = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '<3s', label: 'Page load' },
  { value: '10K+', label: 'Concurrent users' },
  { value: '<2%', label: 'Application abandonment' },
]

export function AboutSection() {
  return (
    <section className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-navy-200/60 shadow-card">
              <Image src={IMAGES.about} alt="Modern office workspace" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">About us</p>
            <h2 className="font-display mt-4 text-4xl font-bold text-navy-900 sm:text-5xl">
              Where IT meets talent
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-navy-600">
              QuantumBridge Innovations is a dual-purpose platform: we offer enterprise IT services—managed IT, cloud, cybersecurity, and software development—and run a full recruitment lifecycle so companies find the right people and candidates find the right roles.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-navy-600">
              Transparent application tracking, interview management, and HR automation are at the heart of what we do. We aim for &lt;3s page load, 99.9% uptime, and WCAG 2.1 AA compliance so everyone gets a smooth, accessible experience.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-gold-600 hover:text-gold-700 transition"
            >
              Our story
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-navy-100 bg-accent-cream/50 p-6 sm:p-8 text-center shadow-card hover:shadow-card-hover hover:border-gold-200/50 transition">
                  <p className="font-display text-3xl font-bold text-gradient-gold sm:text-4xl">{stat.value}</p>
                  <p className="mt-2 text-sm font-semibold text-navy-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
