
# useRouter

Allows you to explicitly change routes inside Client Components.

## Usage
Import from `next/navigation` (App Router) or `next/router` (Pages Router).

**App Router**:
```jsx
'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
 
  return (
    <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
  )
}
```

## Methods (App Router)
- `push(href)`
- `replace(href)`
- `refresh()`
- `back()`
- `forward()`
- `prefetch(href)`
