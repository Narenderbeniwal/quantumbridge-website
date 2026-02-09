import Link from 'next/link'
import Image from 'next/image'
import { IMAGES } from '@/lib/images'
import { SITE } from '@/lib/constants'

export function ContactCTA() {
  return (
    <section className="bg-accent-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-navy-200/60 bg-white p-8 shadow-card sm:p-12 lg:p-16 overflow-hidden">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-2 lg:order-1 min-h-[240px]">
              <Image src={IMAGES.contact} alt="Professional contact" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">Get in touch</p>
                <h2 className="font-display mt-3 text-4xl font-bold text-navy-900 sm:text-5xl">
                  Ready to grow with us?
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-navy-600">
                  Whether you need IT services, talent outsourcing, or want to post a job—we’re here to help. Drop us a line and we’ll get back quickly.
                </p>
                <Link
                  href="/contact"
                  className="btn-gold mt-10 inline-flex rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-4 font-bold text-navy-900 shadow-glow-gold transition hover:shadow-[0_0_40px_-10px_rgba(234,179,8,0.4)]"
                >
                  Contact Us
                </Link>
              </div>
              <div className="rounded-2xl bg-navy-50 p-6 sm:p-8">
                <h3 className="font-display text-lg font-bold text-navy-900">Quick links</h3>
                <ul className="mt-4 space-y-3">
                  <li><Link href="/jobs" className="text-navy-600 font-medium hover:text-gold-600 transition">Find Jobs</Link></li>
                  <li><Link href="/hire-talent" className="text-navy-600 font-medium hover:text-gold-600 transition">Hire Talent</Link></li>
                  <li><Link href="/services/managed-it" className="text-navy-600 font-medium hover:text-gold-600 transition">IT Services</Link></li>
                  <li><a href={`mailto:${SITE.email}`} className="text-navy-600 font-medium hover:text-gold-600 transition">{SITE.email}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
