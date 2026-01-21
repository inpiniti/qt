
# Flux Inspired Practice

Redux와 유사한 Flux 패턴으로 Zustand 사용하기.

## 단일 스토어 vs 다중 스토어
Zustand는 단일 스토어를 권장하지만, 필요에 따라 여러 스토어로 나눌 수 있습니다.

## Action 분리
상태와 액션을 분리하여 코드를 구조화할 수 있습니다.

```javascript
export const useBoundStore = create((set) => ({
  count: 0,
  text: 'hello',
  // Actions
  inc: () => set((state) => ({ count: state.count + 1 })),
  setText: (text) => set({ text }),
}))
```

## Reducer 패턴
`dispatch`와 `reducer`를 사용하여 더 엄격한 Flux 패턴을 구현할 수도 있습니다.

```javascript
const types = { increase: 'INCREASE', decrease: 'DECREASE' }

const reducer = (state, { type, by = 1 }) => {
  switch (type) {
    case types.increase: return { count: state.count + by }
    case types.decrease: return { count: state.count - by }
  }
}

const useStore = create((set) => ({
  count: 0,
  dispatch: (args) => set((state) => reducer(state, args)),
}))
```
