# useSuspenseQuery

Identical to `useQuery`, but suspends when data is loading and throws when error occurs.

```jsx
const { data } = useSuspenseQuery({
  queryKey,
  queryFn,
})
```

## useSuspenseInfiniteQuery
Also available.

```jsx
const { data } = useSuspenseInfiniteQuery({ ... })
```

## useSuspenseQueries
Also available.
