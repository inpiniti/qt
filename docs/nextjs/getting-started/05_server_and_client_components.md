
# Server and Client Components

Next.js App Router uses Server Components by default.

## Server Components
- **Benefits**: Data fetching, security, caching, performance, implementation size.
- **Default**: All components in `app` directory.

## Client Components
- **Usage**: Interactive UI, state (`useState`, `useEffect`), browser APIs.
- **Directive**: Add `'use client'` at the top of the file.

```jsx
'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```
