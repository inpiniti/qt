
# Persisting store data

`persist` 미들웨어를 사용하여 로컬 스토리지 등에 상태를 저장하고 복원합니다.

## 사용법

```javascript
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useStore = create(
  persist(
    (set, get) => ({
      bears: 0,
      addABear: () => set({ bears: get().bears + 1 }),
    }),
    {
      name: 'food-storage', // 고유한 키 이름 필수
      storage: createJSONStorage(() => sessionStorage), // 기본은 localStorage
    }
  )
)
```

## 옵션
- `name`: 스토리지 키 (필수)
- `storage`: 스토리지 엔진 (기본값: `localStorage`)
- `partialize`: 저장할 상태의 일부만 선택
- `onRehydrateStorage`: 수화(hydration) 완료 시 콜백
- `version`: 버전 관리 (마이그레이션 용)
