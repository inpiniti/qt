
# immer

Immer를 사용하여 불변성을 관리하는 미들웨어.

## 사용법

```javascript
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

const useStore = create(
  immer((set) => ({
    nested: { count: 0 },
    inc: () =>
      set((state) => {
        state.nested.count += 1
      }),
  }))
)
```
