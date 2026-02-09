import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getJobBySlug, getAllJobSlugs } from '@/lib/jobs'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const job = getJobBySlug(slug)
  if (!job) return { title: 'Job Not Found' }
  const descSnippet = job.description ? `${job.description.slice(0, 120)}...` : 'Apply via contact.'
  return {
    title: `${job.title} | Careers`,
    description: `${job.title} at ${job.company} – ${job.location}, ${job.type}. ${descSnippet}`,
    openGraph: {
      title: `${job.title} – QuantumBridge Innovations Careers`,
      description: `${job.title} – ${job.location}, ${job.type}. Apply via contact.`,
    },
  }
}

export default async function JobDetailPage({ params }: PageProps) {
  const { slug } = await params
  const job = getJobBySlug(slug)
  if (!job) notFound()

  return (
    <div className="bg-accent-cream min-h-screen">
      <section className="relative overflow-hidden border-b border-navy-200/40 bg-navy-900 py-16 sm:py-20">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/jobs" className="inline-flex items-center gap-2 text-sm font-medium text-gold-400 hover:text-gold-300 transition focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 focus:ring-offset-navy-900 rounded">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
            All jobs
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-gold-400">{job.category}</p>
          <h1 className="font-display mt-2 text-4xl font-bold text-white sm:text-5xl">{job.title}</h1>
          <p className="mt-3 text-lg text-slate-300">{job.company}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">{job.type}</span>
            <span className="text-slate-400">{job.location}</span>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-navy-600">
            <p className="leading-relaxed">{job.description}</p>
          </div>
          <div className="mt-14 rounded-3xl bg-navy-900 p-10 text-center text-white sm:p-12">
            <p className="font-semibold text-lg">Ready to apply?</p>
            <p className="mt-2 text-sm text-slate-300">Contact us with the job title and your details; we’ll get back to you quickly.</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-gold rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-4 font-bold text-navy-900 shadow-glow-gold transition focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 focus:ring-offset-navy-900">
                Apply via Contact
              </Link>
              <Link href="/jobs" className="rounded-full border-2 border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy-900">
                Back to jobs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export function generateStaticParams() {
  return getAllJobSlugs().map((slug) => ({ slug }))
}
