
# error.js

Error UI for a segment and its children.

Wraps the segment in a React Error Boundary.

## Props
- `error`: The error object.
- `reset`: A function to reset the error boundary.

**Must be a Client Component.**

```jsx
'use client'
 
export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
```
