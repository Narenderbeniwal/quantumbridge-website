import type { MetadataRoute } from 'next'
import { getAllJobSlugs } from '@/lib/jobs'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://quantumbridgeinnovations.com'

const staticPaths = [
  '',
  '/about',
  '/contact',
  '/hire-talent',
  '/jobs',
  '/services',
  '/services/managed-it',
  '/services/cloud-solutions',
  '/services/cybersecurity',
  '/services/it-consulting',
  '/services/software-development',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : ('monthly' as const),
    priority: path === '' ? 1 : 0.8,
  }))

  const jobSlugs = getAllJobSlugs()
  const jobEntries: MetadataRoute.Sitemap = jobSlugs.map((slug) => ({
    url: `${baseUrl}/jobs/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticEntries, ...jobEntries]
}
