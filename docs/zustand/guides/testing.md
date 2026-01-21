
# Testing

Zustand 스토어 테스트하기.

## Jest / Vitest
단위 테스트 시 스토어 상태를 초기화하는 것이 중요합니다.

```javascript
import { create } from 'zustand'

const useStore = create((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
}))

describe('useStore', () => {
  // 각 테스트 전에 스토어 초기화 필요
  const initialState = useStore.getState()
  beforeEach(() => {
    useStore.setState(initialState, true)
  })

  it('should increase population', () => {
    const { increase } = useStore.getState()
    increase()
    expect(useStore.getState().bears).toBe(1)
  })
})
```

## React Component Testing
`renderHook` 등을 사용하여 훅으로서 테스트할 수도 있습니다.
Mocking이 필요한 경우 `jest.mock`을 사용하여 스토어 생성 함수를 모킹할 수 있습니다.
