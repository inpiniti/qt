
# useSearchParams

A Client Component hook that lets you read the current URL's query string.

## Usage

```jsx
'use client'
 
import { useSearchParams } from 'next/navigation'
 
export default function SearchBar() {
  const searchParams = useSearchParams()
 
  const search = searchParams.get('search')
 
  // URL -> /dashboard?search=my-project
  // `search` -> 'my-project'
  return <>Search: {search}</>
}
```

## Note
Using `useSearchParams` will cause the client component to opt into **Client-Side Rendering** up to the suspense boundary, unless wrapped in a `<Suspense>`.
