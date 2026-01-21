
# Map and Set Usage

Zustand 상태로 `Map`이나 `Set` 사용하기.

## 가능하지만 주의 필요
Zustand는 상태 변경을 감지하기 위해 얕은 비교나 불변성 업데이트를 기대합니다. `Map`과 `Set`은 내부가 변경되어도 객체 참조가 유지되므로 리렌더링이 발생하지 않을 수 있습니다.

## 해결법: 새로운 인스턴스 생성
업데이트 시 항상 새로운 Map/Set을 생성해야 합니다.

```javascript
const useStore = create((set) => ({
  myMap: new Map(),
  addItem: (key, value) => set((state) => {
    const newMap = new Map(state.myMap)
    newMap.set(key, value)
    return { myMap: newMap }
  }),
}))
```

## Immer와 함께 사용
Immer는 `enableMapSet()`을 호출하면 Map/Set을 지원합니다.

```javascript
import { enableMapSet } from 'immer'
enableMapSet()

// ... immer middleware ...
addItem: (key, value) => set((state) => {
  state.myMap.set(key, value)
})
```
