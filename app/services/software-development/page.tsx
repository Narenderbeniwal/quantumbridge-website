import { ServicePage } from '@/components/services/ServicePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Software Development',
  description:
    'Custom applications, integrations, and product engineering.',
  openGraph: {
    title: 'Software Development – QuantumBridge Innovations',
    description: 'Custom applications, integrations, and product engineering.',
  },
}

const content = {
  title: 'Software Development',
  tagline: 'Custom applications, integrations, and product engineering.',
  description: 'We build web and mobile applications, APIs, and integrations using modern stacks. From MVP to scale—we follow best practices in architecture, security, and DevOps so your product is maintainable and reliable.',
  benefits: [
    'Web and mobile application development',
    'API design and integration',
    'Legacy modernization',
    'Product discovery and UX',
    'Agile delivery and ongoing support',
  ],
  cta: 'Describe your product idea and get a proposal.',
}

export default function Page() {
  return <ServicePage {...content} />
}
