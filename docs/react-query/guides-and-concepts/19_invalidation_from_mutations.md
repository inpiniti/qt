# Invalidation from Mutations

The most common workflow is to invalidate queries after a successful mutation.

```jsx
const mutation = useMutation({
  mutationFn: postTodo,
  onSuccess: () => {
    // When the mutation succeeds, invalidate the queries
    queryClient.invalidateQueries({ queryKey: ['todos'] })
  },
})
```

This ensures that the user sees the most up-to-date data after performing an action.
