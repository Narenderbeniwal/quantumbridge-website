import Link from 'next/link'
import { JobCard } from '@/components/jobs/JobCard'

const jobs = [
  { id: '1', title: 'Senior Cloud Engineer', company: 'QuantumBridge Innovations', location: 'Riyadh', type: 'Full-time', category: 'Cloud', slug: 'senior-cloud-engineer' },
  { id: '2', title: 'Cybersecurity Analyst', company: 'QuantumBridge Innovations', location: 'Remote', type: 'Full-time', category: 'Security', slug: 'cybersecurity-analyst' },
  { id: '3', title: 'Full Stack Developer', company: 'QuantumBridge Innovations', location: 'Jeddah', type: 'Full-time', category: 'Software Development', slug: 'full-stack-developer' },
  { id: '4', title: 'IT Support Specialist', company: 'QuantumBridge Innovations', location: 'Riyadh', type: 'Full-time', category: 'Managed IT', slug: 'it-support-specialist' },
  { id: '5', title: 'DevOps Engineer', company: 'QuantumBridge Innovations', location: 'Remote', type: 'Contract', category: 'Cloud', slug: 'devops-engineer' },
]

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
            Find your next role. Apply with one click and track your application in real time.
          </p>
        </div>
      </section>
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {jobs.map((job) => (
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
