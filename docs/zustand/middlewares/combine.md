
# combine

상태 초기값과 액션 정의를 분리하고 타입을 자동 추론하는 미들웨어.

## 사용법

```javascript
import { create } from 'zustand'
import { combine } from 'zustand/middleware'

const useStore = create(
  combine(
    { bears: 0 }, // 초기 상태 (타입 추론됨)
    (set) => ({
      increase: () => set((state) => ({ bears: state.bears + 1 })),
    })
  )
)
```
