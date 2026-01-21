# Testing

When testing components that use React Query, you need to wrap them in a `QueryClientProvider` with a fresh `QueryClient` for each test.

## Example with React Testing Library

```jsx
import { render, screen, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false, // Turn off retries for testing
      },
    },
  })
  return ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

test('my component', async () => {
  render(<MyComponent />, { wrapper: createWrapper() })
  await waitFor(() => expect(screen.getByText('Todo')).toBeInTheDocument())
})
```
