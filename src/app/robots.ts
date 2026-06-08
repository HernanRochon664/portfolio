import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://portfolio-five-mu-o76n21qfaq.vercel.app/sitemap.xml',
  }
}
