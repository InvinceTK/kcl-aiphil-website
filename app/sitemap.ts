import type { MetadataRoute } from 'next'

const BASE = 'https://kcl-aiphi.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                    lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/events`,        lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/journal`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/fellowship`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/join`,          lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.7 },
  ]
}
