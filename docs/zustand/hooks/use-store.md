
# useStore

바닐라 스토어를 React 컴포넌트에서 구독할 때 사용하는 훅.

## 시그니처

```typescript
const state = useStore(store, selector?, equalityFn?)
```

## 사용법

```javascript
import { useStore } from 'zustand'
import { createStore } from 'zustand/vanilla'

const store = createStore(...)

function Component() {
  const bears = useStore(store, (state) => state.bears)
}
```
