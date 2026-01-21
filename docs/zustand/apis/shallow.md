
# shallow

얕은 비교(shallow comparison)를 수행하는 비교 함수.

## 위치
`zustand/shallow` 또는 `zustand/vanilla/shallow`에서 가져올 수 있습니다.

## 사용법
주로 `useStore` 훅의 커스텀 비교 함수로 사용되거나 `useShallow` 훅 내부에서 사용됩니다.

```javascript
import { shallow } from 'zustand/shallow'

// 직접 비교
const isEqual = shallow({ a: 1 }, { a: 1 }) // true
```
