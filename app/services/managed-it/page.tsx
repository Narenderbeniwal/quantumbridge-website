import { ServicePage } from '@/components/services/ServicePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Managed IT',
  description:
    'End-to-end IT operations, support, and infrastructure management. Clear SLAs and predictable costs.',
  openGraph: {
    title: 'Managed IT – QuantumBridge Innovations',
    description: 'End-to-end IT operations so you can focus on your business.',
  },
}

const content = {
  title: 'Managed IT',
  tagline: 'End-to-end IT operations so you can focus on your business.',
  description: 'We handle your infrastructure, support, and day-to-day IT operations with clear SLAs and predictable costs. From help desk and monitoring to patch management and backup—we keep your systems running so your team can focus on what matters.',
  benefits: [
    '24/7 monitoring and proactive support',
    'Help desk and user support',
    'Patch management and security updates',
    'Backup, disaster recovery, and business continuity',
    'Clear SLAs and predictable monthly costs',
  ],
  cta: 'Get a tailored Managed IT proposal for your organization.',
}

export default function Page() {
  return <ServicePage {...content} />
}
