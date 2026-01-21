
# TypeScript Guide (Beginner)

TypeScript와 함께 Zustand 사용하기 (기초).

## 기본 타입 정의

`create` 함수에 제네릭으로 상태 타입을 전달합니다.

```typescript
import { create } from 'zustand'

interface BearState {
  bears: number
  increase: (by: number) => void
}

const useStore = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}))
```

타입 추론을 위해 커링(currying) 방식 `create<T>()(...)`을 사용하는 것이 좋습니다.

## Combine 미들웨어 사용
`combine` 미들웨어를 사용하면 타입을 자동으로 추론할 수 있습니다.

```typescript
import { create } from 'zustand'
import { combine } from 'zustand/middleware'

const useStore = create(
  combine({ bears: 0 }, (set) => ({
    increase: (by: number) => set((state) => ({ bears: state.bears + by })),
  }))
)
```
