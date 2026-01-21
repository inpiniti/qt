
# Link Component

A React component that extends the HTML `<a>` element to provide prefetching and client-side navigation.

## Usage
Import `Link` from `next/link`.

```jsx
import Link from 'next/link'
 
export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>
}
```

## Props
- `href`: The path or URL to navigate to.
- `replace`: Replace the current history state instead of adding a new one.
- `scroll`: Scroll to the top of the page after navigation (default `true`).
- `prefetch`: Prefetch the page in the background (default `true`).
