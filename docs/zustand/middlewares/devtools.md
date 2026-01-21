
# devtools

Redux DevTools 확장 프로그램과 연동하는 미들웨어.

## 사용법

```javascript
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const useStore = create(
  devtools(
    (set) => ({
      bears: 0,
      increase: () => set((state) => ({ bears: state.bears + 1 })),
    }),
    {
      name: 'BearStore',
      store: 'my-store',
    }
  )
)
```
