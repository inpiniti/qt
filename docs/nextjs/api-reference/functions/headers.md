
# headers

Allows you to read the HTTP incoming request headers.

## Usage
Import from `next/headers`.

```jsx
import { headers } from 'next/headers'
 
export default function Page() {
  const headersList = headers()
  const referer = headersList.get('referer')
 
  return <div>Referer: {referer}</div>
}
```

This function is read-only.
