# Queries

A query is a declarative dependency on an asynchronous source of data that is tied to a **unique key**.

## Basic Usage

```jsx
import { useQuery } from '@tanstack/react-query'

const info = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodoList,
})
```

## Query States
The query result contains the state of the query:
- `isPending`: No data yet.
- `isError`: Encountered an error.
- `isSuccess`: Data is available.

You can also check `status`:
- `status === 'pending'`
- `status === 'error'`
- `status === 'success'`

## FetchStatus
Distinct from the data status (success/error), `fetchStatus` tells you if it's currently working:
- `fetchStatus === 'fetching'`: Currently fetching.
- `fetchStatus === 'paused'`: Valid but paused (e.g. offline).
- `fetchStatus === 'idle'`: Not doing anything.
