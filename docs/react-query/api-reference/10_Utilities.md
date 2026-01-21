# Utilities

## options helpers
Helper functions to create query option objects, useful for sharing between `useQuery` and `prefetchQuery`.

```jsx
import { queryOptions } from '@tanstack/react-query'

const todoOptions = queryOptions({
  queryKey: ['todos'],
  queryFn: fetchTodos,
})

useQuery(todoOptions)
queryClient.prefetchQuery(todoOptions)
```

## onlineManager
Manages online/offline state.

## focusManager
Manages window focus state.
