# Query Functions

A query function can be literally any function that **returns a promise**. The promise that is returned should either **resolve the data** or **throw an error**.

## Handling Errors

React Query expects the promise to be **rejected** if an error occurs.
Note: default `fetch` does not throw on 4xx/5xx errors. You must handle this manually.

```jsx
useQuery({
  queryKey: ['todos'],
  queryFn: async () => {
    const response = await fetch('/todos')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  },
})
```

## Query Context (QueryKey)

The `queryFn` receives a `context` object, which includes the `queryKey`. This is useful for passing parameters to a generic fetching function.

```jsx
const fetchTodos = async ({ queryKey }) => {
  const [_key, { status, page }] = queryKey
  return await fetch(...)
}
```
