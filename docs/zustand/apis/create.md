
# create

Zustand의 메인 엔트리 포인트. React 훅을 반환하는 스토어를 생성합니다.

## 시그니처

```typescript
function create<T>(initializer: StateCreator<T>): UseBoundStore<StoreApi<T>>
```

## 사용법

```javascript
import { create } from 'zustand'

const useStore = create((set, get, api) => ({
  // 초기 상태 및 액션
}))
```

- **set**: 상태 병합 함수
- **get**: 현재 상태 조회 함수
- **api**: `getState`, `setState`, `subscribe`, `destroy` 등을 포함하는 스토어 API
