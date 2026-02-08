import { ServicePage } from '@/components/services/ServicePage'

const content = {
  title: 'IT Consulting',
  tagline: 'Strategy, digital transformation, and technology roadmaps.',
  description: 'Our consultants work with your leadership to align technology with business goals. We deliver strategy, vendor selection, digital transformation programs, and implementation oversight so investments pay off.',
  benefits: [
    'IT strategy and digital transformation',
    'Technology selection and vendor evaluation',
    'Process optimization and change management',
    'Program and project oversight',
    'Interim IT leadership (CTO/CIO advisory)',
  ],
  cta: 'Book a strategy or transformation workshop.',
}

export default function Page() {
  return <ServicePage {...content} />
}
