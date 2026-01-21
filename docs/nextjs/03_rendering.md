
# Next.js Rendering: Server vs Client Components

## Server Components (Default)
In the App Router, all components are **Server Components** by default.

**Benefits:**
- Fetch data close to the source (database).
- Keep sensitive data (API keys) on the server.
- Reduce client-side JavaScript bundle size.

## Client Components
To use Client Components, add the `'use client'` directive at the top of the file.

Use Client Components when you need:
- Interactivity (onClick, onChange).
- React Hooks (useState, useEffect).
- Browser APIs (localStorage, window).

```tsx
'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

## Comparison Table

| Use Case | Server Component | Client Component |
| --- | :---: | :---: |
| Fetch data | ✅ | ❌ (Preferred Server) |
| Access Backend Resources | ✅ | ❌ |
| Add interactivity (onClick) | ❌ | ✅ |
| Use State / Effects | ❌ | ✅ |
| Use Browser APIs | ❌ | ✅ |
