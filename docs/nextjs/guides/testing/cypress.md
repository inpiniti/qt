
# Cypress

End-to-End (E2E) and Component Testing with Cypress.

## Setup
1. **Install**: `npm install -D cypress`
2. **Open**: `npx cypress open`
3. **Configure**: `cypress.config.ts`

```typescript
import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
})
```

## Running Tests
Add to `package.json`:
```json
"scripts": {
  "test:e2e": "cypress run"
}
```
