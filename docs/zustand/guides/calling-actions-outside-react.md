
# Calling actions outside React

React 컴포넌트 외부에서 액션 호출하기.

## getState / setState
Zustand 훅은 바닐라 스토어 객체를 가지고 있습니다. 이를 통해 컴포넌트 외부에서 상태에 접근하거나 변경할 수 있습니다.

```javascript
import { useStore } from './store'

// 읽기 (비반응형)
const bears = useStore.getState().bears

// 쓰기
useStore.setState({ bears: bears + 1 })

// 구독
const unsub = useStore.subscribe((state, prevState) => {
  console.log('State changed', state)
})
```

이 방법은 유틸리티 함수나 이벤트 핸들러 등 React 훅을 사용할 수 없는 곳에서 유효합니다.
