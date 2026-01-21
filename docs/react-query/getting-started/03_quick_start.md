# Quick Start

This guide will show you how to get up and running with React Query in a few minutes.

## 1. Create a Query Client

First, create a `QueryClient` instance and wrap your application with `QueryClientProvider`.

```jsx
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  )
}
```

## 2. Global State vs Server State

Don't use React Query for local state (like `useState` or `useReducer`). It is designed for **Server State**.

## 3. Fetching Data (`useQuery`)

```jsx
import { useQuery } from '@tanstack/react-query'

function Todos() {
  // Queries
  const { isPending, error, data } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}
```

## 4. Updates (`useMutation`)

```jsx
import { useMutation, useQueryClient } from '@tanstack/react-query'

function AddTodo() {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  return (
    <button
      onClick={() => {
        mutation.mutate({
          id: Date.now(),
          title: 'Do Laundry',
        })
      }}
    >
      Add Todo
    </button>
  )
}
```
