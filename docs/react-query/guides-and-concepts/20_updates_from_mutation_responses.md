# Updates from Mutation Responses

If your mutation returns the new object, you can update the query cache directly instead of refetching.

```jsx
const mutation = useMutation({
  mutationFn: editTodo,
  onSuccess: (data) => {
    // data is the response from the server (the updated todo)
    queryClient.setQueryData(['todo', data.id], data)
  },
})
```

This saves a network round-trip.
