
# How to reset state

상태를 초기값으로 리셋하는 패턴.

## 패턴 1: reset 함수 정의
초기 상태 객체를 분리하고 이를 활용합니다.

```javascript
const initialState = {
  bears: 0,
  fishes: 0,
}

const useStore = create((set) => ({
  ...initialState,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
  reset: () => set(initialState),
}))
```

## 패턴 2: 전체 스토어 리셋 (Slice 패턴)
여러 슬라이스를 사용하는 경우 루트 레벨에서 리셋 로직을 구현할 수 있습니다.
