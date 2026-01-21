# Query Keys

At its core, React Query manages query caching for you based on query keys.

## Array Keys
Query keys must be an **Array** at the top level.

```jsx
// Simple
useQuery({ queryKey: ['todos'], ... })

// With variables
useQuery({ queryKey: ['todos', 5], ... })

// With objects (order doesn't matter for objects inside arrays)
useQuery({ queryKey: ['todos', { type: 'done' }], ... })
```

## Deterministic Hashing
Objects inside keys are hashed deterministically.
`['todos', { a: 1, b: 2 }]` is the same as `['todos', { b: 2, a: 1 }]`.

## Dependencies
If your query function depends on a variable, **include it in your query key**.

```jsx
function Todos({ todoId }) {
  const result = useQuery({
    queryKey: ['todos', todoId],
    queryFn: () => fetchTodoById(todoId),
  })
}
```
If `todoId` changes, the query will automatically refetch.
