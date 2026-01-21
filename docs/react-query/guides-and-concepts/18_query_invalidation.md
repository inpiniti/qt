# Query Invalidation

Invalidating a query marks it as stale and triggers a refetch if it is currently active.

## `invalidateQueries`

```jsx
import { useQueryClient } from '@tanstack/react-query'

const queryClient = useQueryClient()

// Invalidate every query in the cache
queryClient.invalidateQueries()

// Invalidate every query with a key that starts with `todos`
queryClient.invalidateQueries({ queryKey: ['todos'] })
```

## Matching
Invalidation uses fuzzy matching. `['todos']` matches `['todos', 1]`, `['todos', { filter: 'all' }]`, etc.
