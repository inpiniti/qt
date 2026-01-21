
# Data Security

Best practices for securing your data fetching and mutation in Next.js.

## Server Actions
Server Actions are secure endpoint equivalents.
- **Input Validation**: Always validate `formData` (e.g., using `zod`).
- **Authentication**: Check user session inside the action.
- **Authorization**: Verify if the user has permission to perform the action.

```javascript
'use server'

import { z } from 'zod'
import { auth } from './auth'

const schema = z.object({
  id: z.string(),
})

export async function deletePost(formData) {
  const session = await auth()
  if (!session) throw new Error('Unauthorized')

  const data = schema.parse({
    id: formData.get('id'),
  })

  // ... delete logic
}
```

## Tainting
Use `experimental_taintObjectReference` or `experimental_taintUniqueValue` to prevent sensitive objects from being passed to Client Components.
