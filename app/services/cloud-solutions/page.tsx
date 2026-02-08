import { ServicePage } from '@/components/services/ServicePage'

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
