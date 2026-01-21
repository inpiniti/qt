
# notFound

The `notFound` function renders the `not-found.js` file within a route segment as well as injects a `<meta name="robots" content="noindex" />` tag.

## Usage
```jsx
import { notFound } from 'next/navigation'
 
async function fetchUser(id) {
  const res = await fetch('https://...')
  if (!res.ok) return undefined
  return res.json()
}
 
export default async function Profile({ params }) {
  const user = await fetchUser(params.id)
 
  if (!user) {
    notFound()
  }
 
  return <div>{user.name}</div>
}
```
