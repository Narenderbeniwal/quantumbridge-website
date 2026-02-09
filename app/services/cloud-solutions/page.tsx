import { ServicePage } from '@/components/services/ServicePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cloud Solutions',
  description:
    'Migration, architecture, and optimization on AWS, Azure, and GCP.',
  openGraph: {
    title: 'Cloud Solutions – QuantumBridge Innovations',
    description: 'Migrate, build, and optimize on AWS, Azure, and GCP.',
  },
}

const content = {
  title: 'Cloud Solutions',
  tagline: 'Migrate, build, and optimize on AWS, Azure, and GCP.',
  description: 'We design and implement cloud strategies—migration, architecture, cost optimization, and DevOps—so you get reliability, scale, and security without the learning curve.',
  benefits: [
    'Cloud strategy and roadmap',
    'Migration and lift-and-shift',
    'Architecture and best practices',
    'Cost optimization and FinOps',
    'DevOps, CI/CD, and automation',
  ],
  cta: 'Discuss your cloud goals and get a roadmap.',
}

export default function Page() {
  return <ServicePage {...content} />
}
