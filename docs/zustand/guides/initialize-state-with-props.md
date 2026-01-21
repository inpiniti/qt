
# Initialize state with props

컴포넌트 Props로 스토어 초기화하기. (예: SSR, 의존성 주입)

## React Context 활용
전역 스토어 대신 Context를 통해 스토어 인스턴스를 제공해야 합니다.

1. **Store Creator**: `create` 대신 `createStore`를 사용하여 바닐라 스토어 생성 함수를 만듭니다.
2. **Context**: React Context를 생성합니다.
3. **Provider**: 컴포넌트 내부에서 `useRef`로 스토어를 생성(한 번만)하고 Context로 내러줍니다.
4. **Hook**: `useContext`와 `useStore` 훅을 사용하여 스토어를 소비합니다.

```jsx
// Provider
function StoreProvider({ initialBears, children }) {
  const storeRef = useRef()
  if (!storeRef.current) {
    storeRef.current = createStore((set) => ({ bears: initialBears }))
  }
  
  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  )
}
```
