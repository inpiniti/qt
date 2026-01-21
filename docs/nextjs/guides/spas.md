
# Single Page Applications (SPAs)

Next.js can be used to build SPAs, typically by strictly using client-side navigation.

## Static Export for SPAs
If you are building a pure SPA that doesn't need a Node.js server, you can use Static Exports.

```javascript
// next.config.js
const nextConfig = {
  output: 'export',
}
```

However, you lose features like Server Actions, ISR, and dynamic headers.

## Client-Side Routing
Use `next/link` and `useRouter` for all navigation to ensure a smooth SPA-like experience.

## Data Fetching
In a pure SPA context within Next.js, you might rely heavily on libraries like **React Query** (TanStack Query) or **SWR** to fetch data from Client Components.
