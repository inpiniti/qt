# Mutations

Mutations are used to create/update/delete data or perform server side-effects.

## `useMutation`

```jsx
const mutation = useMutation({
  mutationFn: (newTodo) => {
    return axios.post('/todos', newTodo)
  },
})

// Usage
<button onClick={() => {
  mutation.mutate({ id: 1, title: 'Do laundry' })
}}>
  Create Todo
</button>
```

## Status
Mutations have `isIdle`, `isPending`, `isError`, `isSuccess`.

## Reset
You can clear the `data` or `error` of a mutation state by calling `mutation.reset()`.
