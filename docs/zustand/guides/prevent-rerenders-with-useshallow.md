
# Prevent rerenders with useShallow

`useShallow` 훅을 사용하여 불필요한 리렌더링 방지하기.

## 문제점
기본적으로 선택자 결과의 참조가 변경되면 리렌더링됩니다. 배열이나 객체를 반환하면 매번 새로운 참조가 되어 리렌더링이 발생할 수 있습니다.

```javascript
// ❌ 매 렌더링마다 새로운 배열 생성 -> 무한 렌더링 위험
const [nuts, honey] = useStore((state) => [state.nuts, state.honey])
```

## 해결책: useShallow
얕은 비교를 수행하여 내용이 같으면 리렌더링하지 않습니다.

```javascript
import { useShallow } from 'zustand/react/shallow'

const [nuts, honey] = useStore(
  useShallow((state) => [state.nuts, state.honey])
)
```

## 객체 선택 시
```javascript
const { nuts, honey } = useStore(
  useShallow((state) => ({
    nuts: state.nuts,
    honey: state.honey,
  }))
)
```
