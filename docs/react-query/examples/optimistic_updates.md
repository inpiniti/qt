# Optimistic Updates Example

```jsx
import { useMutation, useQueryClient } from '@tanstack/react-query'

function TodoList() {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: updateTodo,
    onMutate: async (newTodo) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ['todos'] })

      // Snapshot the previous value
      const previousTodos = queryClient.getQueryData(['todos'])

      // Optimistically update to the new value
      queryClient.setQueryData(['todos'], (old) => [...old, newTodo])

      // Return a context with the previous and new todo
      return { previousTodos }
    },
    onError: (err, newTodo, context) => {
      // Rollback to the previous value
      queryClient.setQueryData(['todos'], context.previousTodos)
    },
    onSettled: () => {
      // Always refetch after error or success:
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  return (
    <button onClick={() => mutation.mutate({ id: 1, text: 'New Text' })}>
      Update
    </button>
  )
}
```
