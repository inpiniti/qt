# Filters

Query Filters are distinct from Query Keys. They are objects used to match queries when using methods like `cancelQueries`, `removeQueries`, `refetchQueries`, etc.

## Properties

- `exact`: boolean. If true, match key exactly.
- `type`: 'active' | 'inactive' | 'all'.
- `stale`: boolean.
- `fetching`: boolean.
- `predicate`: (query) => boolean. Use for custom matching logic.

```jsx
// Cancel all queries that are currently fetching
queryClient.cancelQueries({ fetching: true })

// Refetch all stale queries
queryClient.refetchQueries({ stale: true })
```
