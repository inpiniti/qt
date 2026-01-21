# Suspense

React Query supports React Suspense with dedicated hooks.

## `useSuspenseQuery`
This hook initiates the fetch and suspends the component if data is missing. It **never returns undefined data** and doesn't need loading states.

```jsx
import { useSuspenseQuery } from '@tanstack/react-query'

function Todos() {
  const { data } = useSuspenseQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  })

  // data is guaranteed to be defined here
  return <div>{data.title}</div>
}

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Todos />
    </Suspense>
  )
}
```
