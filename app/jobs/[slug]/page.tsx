import Link from 'next/link'
import { notFound } from 'next/navigation'

const jobs: Record<string, { title: string; company: string; location: string; type: string; category: string; description: string }> = {
  'senior-cloud-engineer': {
    title: 'Senior Cloud Engineer',
    company: 'QuantumBridge Innovations',
    location: 'Riyadh',
    type: 'Full-time',
    category: 'Cloud',
    description: 'We are looking for a Senior Cloud Engineer to design and maintain cloud infrastructure on AWS/Azure. You will work with development and operations teams to ensure scalability, security, and cost efficiency. Requirements: 5+ years in cloud engineering, strong IaC (Terraform/CloudFormation), and experience with Kubernetes.',
  },
  'cybersecurity-analyst': {
    title: 'Cybersecurity Analyst',
    company: 'QuantumBridge Innovations',
    location: 'Remote',
    type: 'Full-time',
    category: 'Security',
    description: 'Join our security team to monitor, analyze, and respond to security events. You will help maintain our security posture and support compliance efforts. Requirements: 3+ years in security operations, familiarity with SIEM and incident response, and relevant certifications (e.g. CEH, CompTIA Security+).',
  },
  'full-stack-developer': {
    title: 'Full Stack Developer',
    company: 'QuantumBridge Innovations',
    location: 'Jeddah',
    type: 'Full-time',
    category: 'Software Development',
    description: 'Build and maintain web applications using modern stacks (e.g. React, Node.js). You will work on both frontend and backend, and collaborate with product and design. Requirements: 4+ years full-stack experience, strong JavaScript/TypeScript, and experience with REST APIs and databases.',
  },
  'it-support-specialist': {
    title: 'IT Support Specialist',
    company: 'QuantumBridge Innovations',
    location: 'Riyadh',
    type: 'Full-time',
    category: 'Managed IT',
    description: 'Provide first-line IT support to internal and client users. You will handle tickets, troubleshoot hardware and software, and escalate when needed. Requirements: 2+ years in IT support, strong communication skills, and experience with Windows/Mac and common business applications.',
  },
  'devops-engineer': {
    title: 'DevOps Engineer',
    company: 'QuantumBridge Innovations',
    location: 'Remote',
    type: 'Contract',
    category: 'Cloud',
    description: 'Design and maintain CI/CD pipelines, infrastructure as code, and monitoring. You will work with development teams to automate deployments and improve reliability. Requirements: 4+ years in DevOps/SRE, experience with Jenkins/GitHub Actions, Docker, Kubernetes, and cloud providers.',
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function JobDetailPage({ params }: PageProps) {
  const { slug } = await params
  const job = jobs[slug]
  if (!job) notFound()

  return (
    <div className="bg-accent-cream min-h-screen">
      <section className="relative overflow-hidden border-b border-navy-200/40 bg-navy-900 py-16 sm:py-20">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/jobs" className="inline-flex items-center gap-2 text-sm font-medium text-gold-400 hover:text-gold-300 transition">
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
            <p className="mt-2 text-sm text-slate-300">Create an account or sign in to submit your application and track its status.</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-gold rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-4 font-bold text-navy-900 shadow-glow-gold transition">
                Apply via Contact
              </Link>
              <Link href="/jobs" className="rounded-full border-2 border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10">
                Back to jobs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
