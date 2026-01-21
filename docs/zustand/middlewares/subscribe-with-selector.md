
# subscribeWithSelector

상태의 일부분만 구독할 수 있는 기능을 추가하는 미들웨어.

## 사용법

```javascript
import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

const useStore = create(
  subscribeWithSelector((set) => ({
    bears: 0,
    increase: () => set((state) => ({ bears: state.bears + 1 })),
  }))
)

// 특정 상태만 구독 (값이 변경될 때만 실행)
const unsub = useStore.subscribe(
  (state) => state.bears,
  (bears, previousBears) => console.log('Bears changed:', bears)
)
```
