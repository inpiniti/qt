
# Immer middleware

Zustand는 기본적으로 불변성을 유지해야 합니다. Immer 미들웨어를 사용하면 가변(mutable) API처럼 상태를 업데이트할 수 있습니다.

## 설치

```bash
npm install immer
```

## 사용법

```javascript
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

const useStore = create(
  immer((set) => ({
    bees: 0,
    addBees: (by) =>
      set((state) => {
        state.bees += by // 직접 수정 가능
      }),
  }))
)
```

## 타입스크립트
타입 정의 시에도 편리합니다.

```typescript
type State = {
  bees: number
}
type Actions = {
  addBees: (by: number) => void
}

const useStore = create<State & Actions>()(
  immer((set) => ({
    bees: 0,
    addBees: (by) =>
      set((state) => {
        state.bees += by
      }),
  }))
)
```
