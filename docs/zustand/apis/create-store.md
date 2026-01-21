
# createStore

바닐라(Vanilla) 스토어를 생성합니다. React에 종속되지 않습니다.

## 사용법

```javascript
import { createStore } from 'zustand/vanilla'

const store = createStore((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
}))

const { getState, setState, subscribe } = store

subscribe((state) => console.log('New state:', state))
setState({ bears: 1 })
```

이 스토어를 React에서 사용하려면 `useStore` 훅을 사용합니다.

```javascript
import { useStore } from 'zustand'

const bears = useStore(store, (state) => state.bears)
```
