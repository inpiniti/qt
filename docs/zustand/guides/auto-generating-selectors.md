
# Auto Generating Selectors

스토어의 모든 속성에 대한 선택자를 자동으로 생성하는 방법.

## 구현

```javascript
const createSelectors = (store) => {
  let store = store
  for (let k of Object.keys(store.getState())) {
    (store)[k] = () => store((s) => s[k])
  }
  return store
}
```

## 사용법

```javascript
const useBaseStore = create(() => ({ bears: 0 }))
const useStore = createSelectors(useBaseStore)

// Component
const bears = useStore.bears()
```
