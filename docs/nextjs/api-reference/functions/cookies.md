
# cookies

Allows you to read and write HTTP incoming request cookies.

## Usage
Import from `next/headers`.

```jsx
import { cookies } from 'next/headers'
 
export default function Page() {
  const cookieStore = cookies()
  const theme = cookieStore.get('theme')
  return '...'
}
```

In Server Actions and Route Handlers, you can also set cookies:

```jsx
'use server'
 
import { cookies } from 'next/headers'
 
async function create(data) {
  cookies().set('name', 'lee')
  // or
  cookies().set({
    name: 'name',
    value: 'lee',
    httpOnly: true,
    path: '/',
  })
}
```
