import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch for IT services, talent outsourcing, or to post a job. QuantumBridge Innovations.',
  openGraph: {
    title: 'Contact Us – QuantumBridge Innovations',
    description: 'Whether you need IT services, talent, or want to post a job—we’re here to help.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
