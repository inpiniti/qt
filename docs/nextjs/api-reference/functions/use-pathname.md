
# usePathname

A Client Component hook that lets you read the current URL's pathname.

## Usage

```jsx
'use client'
 
import { usePathname } from 'next/navigation'
 
export default function ExampleClientComponent() {
  const pathname = usePathname()
  return <p>Current pathname: {pathname}</p>
}
```

## Behavior
- **Client Side**: changes when route changes.
- **Server Side**: returns the pathname of the initial request during server rendering.
