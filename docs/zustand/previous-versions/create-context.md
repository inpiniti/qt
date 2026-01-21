
# createContext (zustand/context)

`zustand/context`는 v4부터 더 이상 권장되지 않으며 **Deprecated** 되었습니다.

## 대안
React Context와 `createStore`를 직접 사용하여 동일한 패턴을 구현하는 것이 권장됩니다. (참고: [Initialize state with props](../guides/initialize-state-with-props.md))

## 레거시 사용법
이전에 사용하던 방식은 다음과 같습니다:

```jsx
import { createStore } from 'zustand'
import { createContext } from 'zustand/context'

const { Provider, useStore } = createContext()

const createMyStore = () => createStore((set) => ({ ... }))

function App() {
  return (
    <Provider createStore={createMyStore}>
      <Component />
    </Provider>
  )
}
```
