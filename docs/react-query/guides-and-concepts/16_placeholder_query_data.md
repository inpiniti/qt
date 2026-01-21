# Placeholder Query Data

Placeholder data allows you to show "fake" or "preview" data while the real query is fetching. It is **never persisted** to the cache.

## Usage

```jsx
useQuery({
  queryKey: ['blogPost', postId],
  queryFn: () => fetchBlogPost(postId),
  placeholderData: { title: 'Loading...', content: '...' },
})
```

## vs Initial Data
- **Initial Data**: Is persisted to cache. Considered "real" data.
- **Placeholder Data**: Not persisted. Just for UI.
