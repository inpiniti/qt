
# Jest

Unit and Snapshot Testing with Jest.

## Setup
1. **Install**: `npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/dom`
2. **Config**: Create `jest.config.ts` or `jest.setup.js`.

**jest.config.ts**:
```typescript
import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  dir: './',
})
 
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
}
 
export default createJestConfig(config)
```

## Writing Tests
```jsx
// __tests__/page.test.tsx
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
 
test('renders heading', () => {
  render(<Page />)
  expect(screen.getByRole('heading')).toBeDefined()
})
```
