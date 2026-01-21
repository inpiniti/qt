
# Linking and Navigating

There are four ways to navigate between routes in Next.js:

1. **`<Link>` Component**: The primary way to navigate.
2. **`useRouter` Hook**: For programmatic navigation (Client Components).
3. **`redirect` Function**: For Server Components.
4. **Native History API**: using `window.history.pushState`.

```jsx
import Link from 'next/link'

export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>
}
```
