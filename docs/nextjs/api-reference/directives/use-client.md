
# use client

`use client` marks a file as a Client Component.

## Usage
Add `'use client'` at the very top of your file, before any imports.

```jsx
'use client'
 
import { useState } from 'react'
 
export default function Counter() {
  const [count, setCount] = useState(0)
 
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
```

## When to use
- Using React Hooks (`useState`, `useEffect`, `useContext`, etc.)
- Using Event Listeners (`onClick`, `onChange`, etc.)
- Using browser-only APIs (`localStorage`, `window`, etc.)
- Class components
