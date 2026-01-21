# Query Options

React Query provides many options to customize query behavior.

## Common Options

- **`enabled`**: Boolean. Set to `false` to disable automatic fetching.
- **`retry`**: Number | Function. How many times to retry on error.
- **`retryDelay`**: Number | Function. Delay between retries.
- **`staleTime`**: Number. Time in ms after which data is considered stale.
- **`gcTime`**: Number. Time in ms unused data remains in cache.
- **`refetchOnWindowFocus`**: Boolean | 'always'.
- **`refetchOnReconnect`**: Boolean | 'always'.
- **`refetchInterval`**: Number. Polling interval.
- **`select`**: Function. Transform or select a part of the data.
- **`placeholderData`**: Data to show while loading.

```jsx
useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodos,
  staleTime: 5000,
  select: (data) => data.map(todo => todo.title),
})
```
