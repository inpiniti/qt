
# CSS-in-JS

Next.js supports various CSS-in-JS libraries. Some require specific configuration to work with Server Components.

## Supported Libraries
- **Styled Components**: Fully supported with registry configuration.
- **Emotion**: Supported.
- **Panda CSS**: Zero-runtime CSS-in-JS (recommended for performance).
- **Vanilla Extract**: Zero-runtime.

## Registry Configuration (Styled Components)
For libraries like `styled-components`, you need to wrap your app in a registry to handle server-side style collection.

```jsx
// app/registry.jsx
'use client'
 
import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
 
export default function StyledComponentsRegistry({ children }) {
  // ... implementation details
}
```
