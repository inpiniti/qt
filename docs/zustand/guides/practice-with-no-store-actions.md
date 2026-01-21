
# Practice with no store actions

액션을 스토어 내부에 정의하지 않고 외부에 정의하는 패턴.

## 장점
- 스토어 객체가 더 가벼워짐.
- 코드 스플리팅이 더 쉬울 수 있음.
- 액션을 모듈로 분리 가능.

## 예시

```javascript
// store.js
import { create } from 'zustand'

export const useStore = create(() => ({ bears: 0 }))

// actions.js
import { useStore } from './store'

export const inc = () => useStore.setState((state) => ({ bears: state.bears + 1 }))
```

## 컴포넌트 사용

```jsx
import { useStore } from './store'
import { inc } from './actions'

function BearCounter() {
  const bears = useStore((state) => state.bears)
  return <button onClick={inc}>{bears}</button>
}
```
