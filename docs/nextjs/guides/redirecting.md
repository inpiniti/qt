
# Redirecting

Handling redirects in Next.js.

## `redirect` function
Used in Server Components, Route Handlers, and Server Actions.

```javascript
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

## `next.config.js` redirects
For permanent or temporary redirects based on paths.

```javascript
module.exports = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
```

## Middleware redirects
For conditional logic based on request properties (cookies, headers).

```javascript
import { NextResponse } from 'next/server'

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/home', request.url))
  }
}
```
