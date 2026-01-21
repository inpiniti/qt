
# redux

Redux와 유사한 리듀서 패턴을 적용하는 미들웨어.

## 사용법

```javascript
import { create } from 'zustand'
import { redux } from 'zustand/middleware'

const types = { increase: 'INCREASE', decrease: 'DECREASE' }

const reducer = (state, { type }) => {
  switch (type) {
    case types.increase: return { count: state.count + 1 }
    case types.decrease: return { count: state.count - 1 }
    default: return state
  }
}

const useStore = create(redux(reducer, { count: 0 }))
```

컴포넌트에서 `dispatch`를 사용할 수 있습니다.

```jsx
const dispatch = useStore((state) => state.dispatch)
dispatch({ type: 'INCREASE' })
```
