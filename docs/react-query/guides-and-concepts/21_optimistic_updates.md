# Optimistic Updates

Optimistic updates update the UI *before* the mutation finishes, assuming it will succeed.

## Workflow
1. Cancel outgoing refetches (so they don't overwrite our optimistic update).
2. Snapshot the previous value.
3. Optimistically update the cache.
4. Return a context with the previous value.
5. If error, roll back to previous value.
6. Always settle (invalidate) after error or success.

```jsx
useMutation({
  mutationFn: updateTodo,
  onMutate: async (newTodo) => {
    await queryClient.cancelQueries({ queryKey: ['todos'] })
    const previousTodos = queryClient.getQueryData(['todos'])
    queryClient.setQueryData(['todos'], (old) => [...old, newTodo])
    return { previousTodos }
  },
  onError: (err, newTodo, context) => {
    queryClient.setQueryData(['todos'], context.previousTodos)
  },
  onSettled: () => {
    queryClient.invalidateQueries({ queryKey: ['todos'] })
  },
})
```
