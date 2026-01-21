# Caching

React Query's caching mechanism is what makes it so powerful.

## Lifecycle of a Query

1. **Active**: The query is being used by a component.
2. **Fetching**: The query is currently requesting data.
3. **Fresh**: The data is within its `staleTime`.
4. **Stale**: The data is older than its `staleTime`. It will be refetched if triggered.
5. **Inactive**: The query is not being used by any component. It moves to the "Garbage Collection" timer.
6. **Deleted**: After `gcTime` (default 5 mins), inactive queries are removed from memory.

## Configuration
- `staleTime`: How long data is fresh.
- `gcTime`: How long inactive data is kept.
