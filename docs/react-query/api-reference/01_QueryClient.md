# QueryClient

The `QueryClient` can be used to interact with a cache:

```jsx
import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})
```

## Methods
- `queryClient.fetchQuery`
- `queryClient.prefetchQuery`
- `queryClient.invalidateQueries`
- `queryClient.resetQueries`
- `queryClient.cancelQueries`
- `queryClient.removeQueries`
- `queryClient.setQueryData`
- `queryClient.getQueryData`
