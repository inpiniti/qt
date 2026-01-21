# Devtools

React Query comes with dedicated devtools that help you visualize your query states, cache, and more.

## Installation

The devtools are provided via a separate package in v5.

```bash
npm i @tanstack/react-query-devtools
```

## Usage

Import the `ReactQueryDevtools` component and place it inside your `QueryClientProvider`.

```jsx
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* The rest of your application */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
```

By default, the devtools are only included in the development bundle.

## Features

- **Query Status**: See if queries are fresh, fetching, stale, or inactive.
- **Data Explorer**: View the data associated with each query key.
- **Query Actions**: Manually refetch, invalidate, or reset queries.
- **Persisted State**: Check how queries are persisted (if configured).
