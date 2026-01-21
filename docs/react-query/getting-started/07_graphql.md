# GraphQL

React Query is backend agnostic, meaning it doesn't care if you use REST, GraphQL, or anything else. It works with any function that returns a Promise.

## Using fetch

```jsx
useQuery({
  queryKey: ['posts'],
  queryFn: async () => {
    const response = await fetch('https://api.graphql.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `{ posts { title } }` }),
    })
    const { data } = await response.json()
    return data
  },
})
```

## Using graphql-request

Libraries like `graphql-request` simplify the fetching logic.

```jsx
import { request, gql } from 'graphql-request'

const endpoint = 'https://api.graphql.com'

useQuery({
  queryKey: ['posts'],
  queryFn: async () => {
    return await request(
      endpoint,
      gql`
        query {
          posts {
            title
          }
        }
      `
    )
  },
})
```

## Type Safety with Code Generation

For the best experience, use GraphQL Code Generator to generate typed hooks or typed SDKs, and wrap them in React Query.
