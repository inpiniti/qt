
# Introduction

Zustand: 작고 빠르며 확장 가능한 베어본 상태 관리 솔루션.

## 특징
- **단순함 & 비독단적**: 보일러플레이트가 거의 없음.
- **Hooks 기반**: React Hooks를 사용하여 상태를 소비.
- **유연성**: Redux DevTools 및 미들웨어 지원.
- **성능**: 불필요한 리렌더링 방지.

## 설치

```bash
npm install zustand
```

## 첫 번째 Store 만들기

```jsx
import { create } from 'zustand'

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
```

## 컴포넌트 바인딩

```jsx
function BearCounter() {
  const bears = useStore((state) => state.bears)
  return <h1>{bears} around here...</h1>
}

function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}
```
