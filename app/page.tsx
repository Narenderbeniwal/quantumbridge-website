import Link from 'next/link'
import { Hero } from '@/components/home/Hero'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { TalentSection } from '@/components/home/TalentSection'
import { AboutSection } from '@/components/home/AboutSection'
import { JobsCTA } from '@/components/home/JobsCTA'
import { ContactCTA } from '@/components/home/ContactCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <TalentSection />
      <AboutSection />
      <JobsCTA />
      <ContactCTA />
    </>
  )
}
