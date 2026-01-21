
# Authentication

Next.js supports various authentication patterns.

## NextAuth.js (Auth.js)
A popular solution for authentication in Next.js applications.

## Server-Side Authentication
You can verify sessions in Server Components or Middleware.

```jsx
import { cookies } from 'next/headers'

export default function Page() {
  const cookieStore = cookies()
  const token = cookieStore.get('token')
  // ... verify token
}
```
