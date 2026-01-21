# Window Focus Refetching

If a user leaves your application and returns, the data may be stale. React Query automatically refetches stale queries in the background when the window is refocused.

## Configuration

You can disable this globally or per-query.

### Global
```jsx
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
})
```

### Per Query
```jsx
useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodos,
  refetchOnWindowFocus: false,
})
```

## "Window" Focus
"Window Focus" events are triggered by `visibilitychange` and `focus` events. In dev, switching between the devtools and app will trigger it.
