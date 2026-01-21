
# Next.js Data Fetching, Caching, and Streaming

## Fetching Data using `fetch`
Next.js extends the native `fetch` API to allow you to configure the caching and revalidating behavior for each request on the server.

```tsx
export default async function Page() {
  const res = await fetch('https://api.example.com/data')
  const data = await res.json()

  return <main>{/* ... */}</main>
}
```

## Caching Strategies

### Force Cache (Default)
By default, Next.js automatically caches the returned values of `fetch` in the Data Cache.
```ts
fetch('https://...', { cache: 'force-cache' })
```

### No Store (Dynamic)
To fetch fresh data on every request, use `no-store`.
```ts
fetch('https://...', { cache: 'no-store' })
```

## Streaming and Suspense

### `loading.js`
Create a `loading.js` file to show an instant loading state while the content of a route segment loads.

```tsx
// app/dashboard/loading.tsx
export default function Loading() {
  return <p>Loading...</p>
}
```

### `<Suspense>`
You can also use React's `Suspense` boundary for more granular loading states.

```tsx
import { Suspense } from 'react'
import PostList from './PostList'

export default function Page() {
  return (
    <section>
      <h1>Blog</h1>
      <Suspense fallback={<p>Loading posts...</p>}>
        <PostList />
      </Suspense>
    </section>
  )
}
```
