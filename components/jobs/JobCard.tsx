import Link from 'next/link'

interface JobCardProps {
  job: {
    id: string
    title: string
    company: string
    location: string
    type: string
    category: string
    slug: string
  }
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Link
      href={`/jobs/${job.slug}`}
      className="hover-lift group block rounded-3xl border border-navy-200/80 bg-white p-8 shadow-card transition hover:border-gold-300/50 sm:p-10"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold text-navy-900 group-hover:text-gold-700 transition">{job.title}</h2>
          <p className="mt-2 text-navy-600 font-medium">{job.company}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-gold-100 px-4 py-1.5 text-xs font-semibold text-gold-700">{job.category}</span>
            <span className="rounded-full bg-navy-100 px-4 py-1.5 text-xs font-medium text-navy-700">{job.type}</span>
            <span className="text-sm text-navy-500">{job.location}</span>
          </div>
        </div>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 group-hover:gap-3 transition-all sm:mt-0">
          View details
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </span>
      </div>
    </Link>
  )
}
