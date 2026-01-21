
# Migrating to v4

Zustand v3에서 v4로 마이그레이션 가이드.

## 주요 변경 사항

### create 함수
`create` 함수는 이제 훅을 반환합니다. 이전에는 스토어 API를 반환했습니다.

```javascript
// v3
import create from 'zustand'
const useStore = create((set) => ({ ... }))

// v4
import { create } from 'zustand' // named import 사용!
const useStore = create((set) => ({ ... }))
```

### TypeScript
제네릭 순서나 정의 방식이 변경되었을 수 있습니다. 커링 방식을 사용하는 것이 좋습니다.

```typescript
const useStore = create<State>()(...)
```

### Context
`zustand/context`는 deprecated 되었습니다. React Context를 직접 사용하세요.
