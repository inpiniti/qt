# Parallel Queries

Fetching multiple queries in parallel is easy with React Query.

## Manual Parallelism

Just use multiple `useQuery` hooks.

```jsx
function App () {
  const usersQuery = useQuery({ queryKey: ['users'], queryFn: fetchUsers })
  const teamsQuery = useQuery({ queryKey: ['teams'], queryFn: fetchTeams })
  const projectsQuery = useQuery({ queryKey: ['projects'], queryFn: fetchProjects })
  // ...
}
```

## Dynamic Parallelism (`useQueries`)

If the number of queries is dynamic (e.g., fetching a list of IDs), use `useQueries`.
**Do not loop `useQuery`**, as hooks cannot be called in loops.

```jsx
import { useQueries } from '@tanstack/react-query'

function App({ ids }) {
  const results = useQueries({
    queries: ids.map((id) => ({
      queryKey: ['post', id],
      queryFn: () => fetchPost(id),
    })),
  })
}
```
