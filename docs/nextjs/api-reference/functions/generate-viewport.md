
# generateViewport

Customize the initial viewport of the page.

## Usage

```tsx
import type { Viewport } from 'next'
 
export const viewport: Viewport = {
  themeColor: 'black',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Also supported but less recommended for accessibility
}
 
export default function Page() {
  return {}
}
```

Or dynamically:

```tsx
export function generateViewport({ params }) {
  return {
    themeColor: '...',
  }
}
```
