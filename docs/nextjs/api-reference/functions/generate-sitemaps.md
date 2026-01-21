
# generateSitemaps

Generate sitemaps for your application.

## Usage
Create a `sitemap.js` or `sitemap.ts` file in your `app` directory.

```ts
import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://acme.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://acme.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://acme.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}
```

For dynamic generation (e.g. multiple sitemaps for thousands of products), you can use the `generateSitemaps` function within `sitemap.ts`.
