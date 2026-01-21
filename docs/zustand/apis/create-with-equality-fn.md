
# createWithEqualityFn

상태 비교 함수를 커스터마이징할 수 있는 `create` 변형입니다.

## 사용법

```javascript
import { createWithEqualityFn } from 'zustand/traditional'
import { shallow } from 'zustand/shallow'

const useStore = createWithEqualityFn(
  (set) => ({
    bears: 0,
    increase: () => set((state) => ({ bears: state.bears + 1 })),
  }),
  shallow // 기본 비교 함수로 shallow 사용
)
```

## 주의
v4부터 `create` 함수는 선택자에 대한 비교 함수 인자를 받지 않습니다(대신 `useShallow` 권장). 하지만 `createWithEqualityFn`을 사용하면 이전 방식처럼 비교 함수를 전역 또는 훅 레벨에서 사용할 수 있습니다.
