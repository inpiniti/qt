# Server Rendering & Hydration

To support SSR, we need to:
1. Prefetch data on the server.
2. Dehydrate the cache to JSON.
3. Pass it to the client.
4. Rehydrate the cache on the client.

## Standard Approach (Next.js Pages Router)

```jsx
import { dehydrate, QueryClient, HydrationBoundary } from '@tanstack/react-query'

export async function getServerSideProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </HydrationBoundary>
    </QueryClientProvider>
  )
}
```
