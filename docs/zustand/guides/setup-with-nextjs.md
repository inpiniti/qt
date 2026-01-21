
# Setup with Next.js

Next.js (App Router)에서 Zustand 설정하기.

## 원칙
- **전역 스토어 주의**: 서버 사이드 렌더링 시 전역 변수 스토어는 요청 간에 상태가 공유될 수 있어 위험합니다.
- **요청별 스토어**: 각 요청(또는 컴포넌트 트리)마다 독립적인 스토어를 생성해야 합니다.

## 권장 패턴: Context + Store Creator

```tsx
// store.ts
export const createCounterStore = (initState) => createStore(...)

// counter-store-provider.tsx
'use client'
import { createContext, useRef, useContext } from 'react'

export const CounterStoreContext = createContext(null)

export const CounterStoreProvider = ({ children, initialCount }) => {
  const storeRef = useRef()
  if (!storeRef.current) {
    storeRef.current = createCounterStore({ count: initialCount })
  }
  return (
    <CounterStoreContext.Provider value={storeRef.current}>
      {children}
    </CounterStoreContext.Provider>
  )
}

// useCounterStore 훅
export const useCounterStore = (selector) => {
  const store = useContext(CounterStoreContext)
  if (!store) throw new Error('Missing Provider')
  return useStore(store, selector)
}
```

## 페이지 사용

```tsx
// page.tsx (Server Component)
import { CounterStoreProvider } from './provider'

export default function Page() {
  return (
    <CounterStoreProvider initialCount={10}>
      <ClientComponent />
    </CounterStoreProvider>
  )
}
```
