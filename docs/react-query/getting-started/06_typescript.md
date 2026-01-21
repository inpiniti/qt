# TypeScript

React Query is written in TypeScript and provides first-class support for it.

## Type Inference

Types are generally inferred from the return type of your query function.

```tsx
const { data } = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodos,
})
// 'data' will be inferred as the return type of fetchTodos
```

## Explicit Types

You can explicitly provide types for the Query Data and Error.

```tsx
import { useQuery } from '@tanstack/react-query'

interface Todo {
  id: number
  title: string
}

const { data } = useQuery<Todo[], Error>({
  queryKey: ['todos'],
  queryFn: fetchTodos,
})
```

## Generics for useQuery

`useQuery` accepts 4 generics: `TQueryFnData`, `TError`, `TData`, `TQueryKey`.

- `TQueryFnData`: The type returned by the query function.
- `TError`: The type of error expected.
- `TData`: The type of data the query hooks returns (useful when using `select`).
- `TQueryKey`: The type of the query key.

```tsx
useQuery<Todo[], Error, number, string[]>({
  queryKey: ['todos'],
  queryFn: fetchTodos,
  select: (todos) => todos.length // returns number
})
```
