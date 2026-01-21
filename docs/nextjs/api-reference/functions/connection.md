
# connection

Allows you to enforce connection properties in Server Components.

*(Experimental)*

## Usage

```jsx
import { connection } from 'next/server'

async function Page() {
    await connection()
    // ...
}
```

This ensures the component/function has access to the request context.
