import Link from 'next/link'
import { JobCard } from '@/components/jobs/JobCard'
import { JOBS_LIST } from '@/lib/jobs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers | Open Positions',
  description:
    'Find your next role at QuantumBridge Innovations. Browse open positions in cloud, cybersecurity, software development, and IT. Apply via contact and we’ll get back to you.',
  openGraph: {
    title: 'Careers | Open Positions – QuantumBridge Innovations',
    description:
      'Find your next role. Browse open positions and apply via contact.',
  },
}

export default function JobsPage() {
  return (
    <div className="bg-accent-cream min-h-screen">
      <section className="relative overflow-hidden border-b border-navy-200/40 bg-navy-900 py-20 sm:py-28">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">Careers</p>
          <h1 className="font-display mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Open positions
          </h1>
          <p className="mt-6 text-xl text-slate-300">
            Find your next role. Apply by contacting us and we’ll respond promptly.
          </p>
        </div>
      </section>
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {JOBS_LIST.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          <p className="mt-14 text-center text-navy-600">
            More roles are added regularly.{' '}
            <Link href="/contact" className="font-semibold text-gold-600 hover:text-gold-700 transition">Contact us</Link> to post a job.
          </p>
        </div>
      </section>
    </div>
  )
}
