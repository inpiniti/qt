
# useSelectedLayoutSegment

A Client Component hook that lets you read the active route segment one level below the layout calling it.

## Usage

```jsx
'use client'
 
import { useSelectedLayoutSegment } from 'next/navigation'
 
export default function ExampleClientComponent() {
  const segment = useSelectedLayoutSegment()
 
  return <p>Active segment: {segment}</p>
}
```

Useful for creating active states in navigation menus (e.g., highlighting a tab).
