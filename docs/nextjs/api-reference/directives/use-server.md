
# use server

`use server` marks a server-side function that can be called from the client (Server Actions).

## Usage
Add `'use server'` at the top of an async function body or at the top of a file.

### Function Level
```jsx
// Server Component
export default function Page() {
  async function create() {
    'use server'
    // ...
  }
 
  return (
    // ...
  )
}
```

### Module Level
```javascript
// actions.js
'use server'
 
export async function create() {
  // ...
}
```

## Security
Server Actions are public endpoints. Ensure you validate input and authorize users.
