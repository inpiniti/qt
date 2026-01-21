
# Progressive Web Apps (PWA)

Next.js can be turned into a PWA to provide an app-like experience.

## Setup
Use `next-pwa` or handle service workers manually.

1. **Manifest**: Create `manifest.json` in `public/` or using the Metadata API.
2. **Service Worker**: Register a service worker to handle offline capabilities.

```javascript
// next.config.js with next-pwa
const withPWA = require('next-pwa')({
  dest: 'public',
})

module.exports = withPWA({
  // config
})
```
