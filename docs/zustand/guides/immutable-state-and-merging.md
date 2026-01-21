
# Immutable State and Merging

Zustand는 React와 마찬가지로 불변 상태(Immutable State) 모델을 사용합니다.

## 불변성 규칙
상태를 직접 수정하면 안 됩니다.

```javascript
// ❌ 나쁜 예
state.count++

// ✅ 좋은 예
set((state) => ({ count: state.count + 1 }))
```

## 병합 동작
`create`로 만든 기본 스토어는 `set` 호출 시 1단계 깊이(flat) 병합을 수행합니다.

## 중첩된 상태 (Deeply Nested State)
깊게 중첩된 상태를 관리하는 것은 복잡할 수 있습니다.
- **전개 연산자(...):** 수동으로 복사
- **Immer:** 불변성 관리를 쉽게 도와줌 (추천)
- **Optics-ts:** 함수형 렌즈 라이브러리

Immer 사용 예시:
```javascript
import { produce } from 'immer'

const useStore = create((set) => ({
  nested: { structure: { contains: { a: 'value' } } },
  update: () => set(produce((state) => {
    state.nested.structure.contains.a = 'newValue'
  }))
}))
```
