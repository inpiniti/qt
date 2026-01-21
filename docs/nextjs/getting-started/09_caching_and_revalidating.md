
# Caching and Revalidating

Next.js comes with a built-in Data Cache.

## Revalidating
You can revalidate data at a specific interval (Time-based) or when content changes (On-demand).

### Time-based
```js
fetch('https://...', { next: { revalidate: 3600 } })
```

### On-demand
Use `revalidatePath` or `revalidateTag`.
```js
import { revalidatePath } from 'next/cache'

revalidatePath('/blog')
```
