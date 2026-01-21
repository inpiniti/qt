
# Third Party Libraries

Optimizing performance when using third-party libraries.

## `@next/third-parties`
Next.js provides a library to load popular third-party scripts efficiently.

```bash
npm install @next/third-parties@latest next@latest
```

## Supported Components

### Google Tag Manager
```jsx
import { GoogleTagManager } from '@next/third-parties/google'
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-XYZ" />
      <body>{children}</body>
    </html>
  )
}
```

### YouTube Embed
```jsx
import { YouTubeEmbed } from '@next/third-parties/google'
 
export default function Page() {
  return <YouTubeEmbed videoid="ogfYd705cRs" height={400} params="controls=0" />
}
```

### Google Maps
```jsx
import { GoogleMapsEmbed } from '@next/third-parties/google'
 
export default function Page() {
  return <GoogleMapsEmbed apiKey="XYZ" height={200} width="100%" mode="place" q="Brooklyn+Bridge,New+York,NY" />
}
```
