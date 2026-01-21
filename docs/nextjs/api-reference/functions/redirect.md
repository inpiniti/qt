
# redirect

Allows you to redirect the user to another URL.

## Usage
Can be used in Server Components, Client Components, Route Handlers, and Server Actions.

```jsx
import { redirect } from 'next/navigation'
 
async function fetchTeam(id) {
  const res = await fetch('https://...')
  if (!res.ok) return undefined
  return res.json()
}
 
export default async function Profile({ params }) {
  const team = await fetchTeam(params.id)
  if (!team) {
    redirect('/login')
  }
  // ...
}
```

Throws a `NEXT_REDIRECT` error, so it should be called outside of try/catch blocks.
