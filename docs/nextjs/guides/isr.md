
# Incremental Static Regeneration (ISR)

ISR allows you to update static pages after you've built your site, without rebuilding the entire site.

## Time-based Revalidation
Add `revalidate` to your page or fetch call.

```javascript
// Revalidate this page every 60 seconds
export const revalidate = 60

export default async function Page() {
  const data = await fetch('https://api/data')
  return <main>...</main>
}
```

## On-demand Revalidation
Manually trigger revalidation using `revalidatePath` or `revalidateTag`.

```javascript
// app/api/revalidate/route.js
import { revalidatePath } from 'next/cache'

export async function POST(request) {
  revalidatePath('/blog/[slug]')
  return Response.json({ revalidated: true })
}
```
