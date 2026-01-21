
# Static Exports

Next.js enables starting as a static site or Single-Page Application (SPA), then later optionally upgrading to use features that require a server.

## Configuration
To enable a static export, change the output mode inside `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
}
 
module.exports = nextConfig
```

## Running
Run `next build`. Next.js will produce an `out` folder containing the HTML/CSS/JS assets.

## Supported Features
- Server Components (render at build time)
- Client Components
- Image Optimization (with a custom loader)
- Route Handlers (static only)

## Unsupported Features
- Dynamic Routes (without `generateStaticParams`)
- Cookies / Headers (dynamic)
- Middleware
- ISP / On-Demand Revalidation
