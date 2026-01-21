
# Vitest

Unit Testing with Vitest (alternative to Jest).

## Setup
1. **Install**: `npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react`
2. **Config**: Create `vitest.config.ts`.

```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
 
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
})
```

## Writing Tests
Compatible with Jest API mostly.
```jsx
import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
 
test('Page', () => {
  render(<Page />)
  expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
})
```
