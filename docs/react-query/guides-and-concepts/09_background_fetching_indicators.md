# Background Fetching Indicators

A global loading indicator is often useful for users to know if something is happening in the background.

## `useIsFetching`

React Query provides a hook `useIsFetching` that returns the number of queries that are currently fetching in the background.

```jsx
import { useIsFetching } from '@tanstack/react-query'

function GlobalLoadingIndicator() {
  const isFetching = useIsFetching()

  return isFetching ? (
    <div>Queries are fetching in the background...</div>
  ) : null
}
```

You can also filter by query keys:

```jsx
const isFetchingPosts = useIsFetching({ queryKey: ['posts'] })
```
