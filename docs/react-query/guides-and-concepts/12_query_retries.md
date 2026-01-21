# Query Retries

When a query fails, React Query will retry it 3 times by default.

## Configuration

### `retry`
- `false`: No retries.
- `true`: Infinite retries.
- `Number`: Specific number of retries (e.g. `3`).
- `Function`: Custom logic `(failureCount, error) => boolean`.

```jsx
useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodos,
  retry: 10, // Retry 10 times
})
```

### `retryDelay`
You can configure the delay between retries. Default is exponential backoff.

```jsx
useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodos,
  retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
})
```
