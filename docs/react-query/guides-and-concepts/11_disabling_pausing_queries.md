# Disabling/Pausing Queries

If you want to disable a query from automatically running, use the `enabled` option.

## `enabled`

- `true`: The query runs automatically (default).
- `false`: The query will not run automatically.

```jsx
useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodos,
  enabled: false,
})
```

## Lazy Queries
To run the query manually (like a "lazy" query), you can use `enabled: false` and then call `refetch()` returned from `useQuery`.

However, usually it's better to use `enabled` dependent on some state:

```jsx
const [filter, setFilter] = useState('')

useQuery({
  queryKey: ['todos', filter],
  queryFn: () => fetchTodos(filter),
  // Only fetch when filter is not empty
  enabled: !!filter,
})
```
