
# Updating State

상태를 업데이트하는 다양한 방법.

## 기본 업데이트
`set` 함수는 이전 상태를 받아 병합(merge)합니다.

```javascript
set((state) => ({ count: state.count + 1 }))
```

## 객체 병합
Zustand는 기본적으로 얕은 병합(shallow merge)을 수행합니다. (최상위 레벨만)

```javascript
// state: { count: 0, text: 'hello' }
set({ count: 1 })
// state: { count: 1, text: 'hello' }
```

## 중첩 객체 업데이트
깊은 단계의 객체를 업데이트할 때는 불변성을 유지하며 전체 객체를 교체해야 합니다.

```javascript
set((state) => ({
  nested: { ...state.nested, field: 'value' }
}))
```
또는 Immer 미들웨어를 사용하세요.

## 상태 교체 (Replace)
병합하지 않고 상태를 완전히 교체하려면 `set`의 두 번째 인자로 `true`를 전달합니다.

```javascript
set({ count: 1 }, true) // 이전 상태의 다른 키들은 모두 사라짐
```
