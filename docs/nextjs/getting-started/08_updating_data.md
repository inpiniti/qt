
# Updating Data (Server Actions)

Server Actions allow you to run asynchronous code directly on the server. They remove the need to create API endpoints to mutate data.

```jsx
// app/actions.js
'use server'

export async function createItem(formData) {
  const itemId = await db.create(formData)
}

// app/page.js
import { createItem } from './actions'

export default function Page() {
  return (
    <form action={createItem}>
      <input type="text" name="name" />
      <button type="submit">Add</button>
    </form>
  )
}
```
