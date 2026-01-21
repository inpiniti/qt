# Caches

## QueryCache
The `QueryCache` is the storage mechanism for queries.

```jsx
const queryCache = new QueryCache({
  onError: (error) => {
    console.log(error)
  },
  onSuccess: (data) => {
    console.log(data)
  },
})

const queryClient = new QueryClient({ queryCache })
```

## MutationCache
The `MutationCache` is the storage mechanism for mutations.

```jsx
const mutationCache = new MutationCache({
  onError: (error) => {
    console.log(error)
  },
})

const queryClient = new QueryClient({ mutationCache })
```
