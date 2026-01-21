
# Caching

Next.js provides a robust caching system to improve performance and reduce costs.

## Mechanisms
- **Request Memoization**: Deduplicates requests for the same data within a single render pass.
- **Data Cache**: Persists data fetched via `fetch` across requests.
- **Full Route Cache**: Caches the rendered result of a route (HTML + RSC payload).
- **Router Cache**: In-memory client-side cache for visited routes.

## Configuration
You can control caching behavior using `fetch` options or Route Segment Config.

```jsx
// Revalidate every hour
fetch('https://...', { next: { revalidate: 3600 } })

// Opt out of caching
fetch('https://...', { cache: 'no-store' })
```
