
# Slices Pattern

큰 스토어를 작고 관리하기 쉬운 '슬라이스'로 나누는 패턴.

## 구현
각 슬라이스는 `set`, `get`, `store`를 인자로 받는 함수입니다.

```javascript
// bearSlice.js
export const createBearSlice = (set) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: state.bears + 1 })),
})

// fishSlice.js
export const createFishSlice = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
})

// store.js
import { create } from 'zustand'
import { createBearSlice } from './bearSlice'
import { createFishSlice } from './fishSlice'

export const useBoundStore = create((...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a),
}))
```
