
# Script Component

Extends the HTML `<script>` element to optimize critical rendering path.

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

## Props
- `src`: Path to external script.
- `strategy`: Loading strategy (`beforeInteractive`, `afterInteractive`, `lazyOnload`, `worker`).
- `onLoad`: Callback when the script finishes loading.
- `onReady`: Callback using the script load status.
- `onError`: Callback if script fails to load.
