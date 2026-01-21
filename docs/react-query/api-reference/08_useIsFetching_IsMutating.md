# useIsFetching & useIsMutating

## useIsFetching
Returns the number of fetching queries.

```jsx
const isFetching = useIsFetching({ queryKey: ['todos'] })
```

## useIsMutating
Returns the number of mutating mutations.

```jsx
const isMutating = useIsMutating({ mutationKey: ['todo'] })
```
