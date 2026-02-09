import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hire Talent',
  description:
    'Scale your team with vetted IT professionals. Staff augmentation and dedicated teams from QuantumBridge Innovations.',
  openGraph: {
    title: 'Hire Talent – QuantumBridge Innovations',
    description: 'Scale your team with vetted IT professionals—on demand, without the overhead of full-time hiring.',
  },
}

export default function HireTalentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
