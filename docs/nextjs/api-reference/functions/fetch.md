
# fetch

Extends the Web `fetch()` API for caching and revalidating data on the server.

## Usage
```jsx
fetch('https://...', { next: { revalidate: 3600 } })
```

## Options
- `cache`: `force-cache` (default), `no-store`.
- `next.revalidate`: Time in seconds to cache the resource. `false` to cache indefinitely, `0` to prevent caching.
- `next.tags`: Array of tags for on-demand revalidation.
