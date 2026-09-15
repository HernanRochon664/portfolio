import { MetadataRoute } from 'next'
import { projects } from '@/data/projects'
import { locales, localizedPath } from '@/lib/i18n'
import { SITE_URL } from '@/lib/seo'

const routes = [
  { path: '/', priority: 1 },
  { path: '/projects', priority: 0.9 },
  { path: '/lab', priority: 0.7 },
  { path: '/about', priority: 0.6 },
  { path: '/resume', priority: 0.6 },
  ...projects.map((project) => ({ path: `/projects/${project.slug}`, priority: 0.8 })),
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap(({ path, priority }) =>
    locales.map((locale) => ({
      url: `${SITE_URL}${localizedPath(path, locale)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority,
      alternates: {
        languages: {
          en: `${SITE_URL}${localizedPath(path, 'en')}`,
          es: `${SITE_URL}${localizedPath(path, 'es')}`,
        },
      },
    })),
  )
}
