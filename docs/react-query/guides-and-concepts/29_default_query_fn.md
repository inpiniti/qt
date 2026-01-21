# Default Query Function

If you share the same fetching logic for most queries, you can set a default query function.

## Global Configuration

```jsx
const defaultQueryFn = async ({ queryKey }) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com${queryKey[0]}`
  )
  return data
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <YourApp />
    </QueryClientProvider>
  )
}
```

Now you can just pass the key:

```jsx
useQuery({ queryKey: ['/posts'] })
```
