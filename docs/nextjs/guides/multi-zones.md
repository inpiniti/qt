
# Multi-zones

Multi-zones allow you to merge multiple independent Next.js applications into a single unified application.

## Configuration
Use `rewrites` in `next.config.js` to route traffic to different "zones" (separate Next.js apps deployed on different URLs/Ports).

```javascript
// next.config.js for Main App
module.exports = {
  async rewrites() {
    return [
      {
        source: '/blog/:path*',
        destination: 'https://blog.my-app.com/blog/:path*',
      },
    ]
  },
}
```

This ensures the user sees a single domain, while the backend serves content from different apps.
