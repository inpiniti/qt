
# Scripts

Optimizing third-party scripts with the `next/script` component.

## Usage
Import `Script` from `next/script`.

```jsx
import Script from 'next/script'

export default function Dashboard() {
  return (
    <>
      <Script src="https://example.com/script.js" />
    </>
  )
}
```

## Strategies
- `beforeInteractive`: Load before any Next.js code hydrates (critical scripts).
- `afterInteractive`: (Default) Load after some hydration.
- `lazyOnload`: Load during idle time.
- `worker`: (Experimental) Load in a web worker.

```jsx
<Script 
  src="https://..." 
  strategy="lazyOnload" 
  onLoad={() => console.log('Loaded!')} 
/>
```
