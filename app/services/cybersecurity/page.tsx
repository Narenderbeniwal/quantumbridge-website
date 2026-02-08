import { ServicePage } from '@/components/services/ServicePage'

const content = {
  title: 'Cybersecurity',
  tagline: 'Protect your assets and stay compliant.',
  description: 'We help you assess risk, harden your infrastructure, and respond to incidents. From vulnerability management and compliance to security awareness—we build a security posture that fits your business.',
  benefits: [
    'Risk assessment and penetration testing',
    'Security monitoring and incident response',
    'Compliance (e.g. ISO 27001, SOC 2)',
    'Identity and access management',
    'Security awareness and training',
  ],
  cta: 'Schedule a security assessment or compliance review.',
}

export default function Page() {
  return <ServicePage {...content} />
}
