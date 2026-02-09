// Single source of truth for job listings

export interface Job {
  id: string
  title: string
  company: string
  location: string
  type: string
  category: string
  slug: string
  description?: string
}

export const JOBS_LIST: Job[] = [
  {
    id: '1',
    title: 'Senior Cloud Engineer',
    company: 'QuantumBridge Innovations',
    location: 'Riyadh',
    type: 'Full-time',
    category: 'Cloud',
    slug: 'senior-cloud-engineer',
    description:
      'We are looking for a Senior Cloud Engineer to design and maintain cloud infrastructure on AWS/Azure. You will work with development and operations teams to ensure scalability, security, and cost efficiency. Requirements: 5+ years in cloud engineering, strong IaC (Terraform/CloudFormation), and experience with Kubernetes.',
  },
  {
    id: '2',
    title: 'Cybersecurity Analyst',
    company: 'QuantumBridge Innovations',
    location: 'Remote',
    type: 'Full-time',
    category: 'Security',
    slug: 'cybersecurity-analyst',
    description:
      'Join our security team to monitor, analyze, and respond to security events. You will help maintain our security posture and support compliance efforts. Requirements: 3+ years in security operations, familiarity with SIEM and incident response, and relevant certifications (e.g. CEH, CompTIA Security+).',
  },
  {
    id: '3',
    title: 'Full Stack Developer',
    company: 'QuantumBridge Innovations',
    location: 'Jeddah',
    type: 'Full-time',
    category: 'Software Development',
    slug: 'full-stack-developer',
    description:
      'Build and maintain web applications using modern stacks (e.g. React, Node.js). You will work on both frontend and backend, and collaborate with product and design. Requirements: 4+ years full-stack experience, strong JavaScript/TypeScript, and experience with REST APIs and databases.',
  },
  {
    id: '4',
    title: 'IT Support Specialist',
    company: 'QuantumBridge Innovations',
    location: 'Riyadh',
    type: 'Full-time',
    category: 'Managed IT',
    slug: 'it-support-specialist',
    description:
      'Provide first-line IT support to internal and client users. You will handle tickets, troubleshoot hardware and software, and escalate when needed. Requirements: 2+ years in IT support, strong communication skills, and experience with Windows/Mac and common business applications.',
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    company: 'QuantumBridge Innovations',
    location: 'Remote',
    type: 'Contract',
    category: 'Cloud',
    slug: 'devops-engineer',
    description:
      'Design and maintain CI/CD pipelines, infrastructure as code, and monitoring. You will work with development teams to automate deployments and improve reliability. Requirements: 4+ years in DevOps/SRE, experience with Jenkins/GitHub Actions, Docker, Kubernetes, and cloud providers.',
  },
]

const bySlug = new Map(JOBS_LIST.map((j) => [j.slug, j]))

export function getJobBySlug(slug: string): Job | undefined {
  return bySlug.get(slug)
}

export function getAllJobSlugs(): string[] {
  return JOBS_LIST.map((j) => j.slug)
}
