
# useShallow

선택자(selector)의 반환값을 얕은 비교하여 리렌더링을 방지하는 훅.

## 사용법

```javascript
import { create } from 'zustand'
import { useShallow } from 'zustand/react/shallow'

const useStore = create((set) => ({
  bears: 0,
  fishes: 0,
}))

function Component() {
  // 객체를 반환해도 내용이 같으면 리렌더링 안 함
  const { bears, fishes } = useStore(
    useShallow((state) => ({
      bears: state.bears,
      fishes: state.fishes,
    }))
  )
  
  return <div>Bears: {bears}, Fishes: {fishes}</div>
}
```
