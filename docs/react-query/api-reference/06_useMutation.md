# useMutation

```jsx
const {
  data,
  error,
  isError,
  isIdle,
  isPending,
  isSuccess,
  mutate,
  mutateAsync,
  reset,
  status,
} = useMutation({
  mutationFn,
  onMutate,
  onSuccess,
  onError,
  onSettled,
  retry,
})

// Usage
mutate(variables, {
  onSuccess,
  onError,
  onSettled,
})
```
