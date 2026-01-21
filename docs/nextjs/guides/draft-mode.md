
# Draft Mode

Draft Mode allows you to bypass static generation to view draft content from your headless CMS.

## Enabling Draft Mode
Create a Route Handler that sets a cookie.

```javascript
// app/api/draft/route.js
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request) {
  // Check for a secret to prevent unauthorized access
  const { searchParams } = new URL(request.url)
  if (searchParams.get('secret') !== 'MY_SECRET') {
    return new Response('Invalid token', { status: 401 })
  }

  draftMode().enable()
  redirect('/')
}
```

## Usage in Page
```javascript
import { draftMode } from 'next/headers'

export default function Page() {
  const { isEnabled } = draftMode()
  // Fetch draft data if isEnabled is true
}
```
