# Query Cancellation

React Query automatically cancels requests if you unmount a component or change a query key before the request finishes.

## How it works

React Query passes an `AbortSignal` to your query function. You must use it.

```jsx
useQuery({
  queryKey: ['todos'],
  queryFn: ({ signal }) =>
    fetch('/todos', { signal }).then((res) => res.json()),
})
```

If you use `axios` v0.22.0+, it supports `signal`.

```jsx
import axios from 'axios'

useQuery({
  queryKey: ['todos'],
  queryFn: ({ signal }) =>
    axios.get('/todos', { signal }).then((res) => res.data),
})
```
