# Initial Query Data

Initial data is used to pre-populate the cache with data you already have synchronously.

## Usage

Use `initialData` to provide data that is already available (e.g., from a server-side render, or passed from a parent component).

```jsx
useQuery({
  queryKey: ['todo', todoId],
  queryFn: () => fetchTodo(todoId),
  initialData: initialTodos.find(d => d.id === todoId),
})
```

## Stale Time
`initialData` is considered fresh by default relative to `staleTime`. If you want it to be immediately stale (so it refetches in background), you can set `staleTime: 0` (default) but `initialDataUpdatedAt` default is `Date.now()`.
