
# persist

상태를 스토리지(localStorage, sessionStorage, AsyncStorage 등)에 저장하고 복원하는 미들웨어.

## 사용법

```javascript
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useStore = create(
  persist(
    (set) => ({
      bears: 0,
      increase: () => set((state) => ({ bears: state.bears + 1 })),
    }),
    {
      name: 'bear-storage', // 필수: 유니크한 키
      storage: createJSONStorage(() => sessionStorage), // 옵션: 스토리지 엔진
    }
  )
)
```
