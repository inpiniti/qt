
# Connect to state with URL

URL 쿼리 파라미터와 상태 동기화하기.

## 기본 아이디어
상태가 변경될 때 URL을 업데이트하고, URL이 변경될 때 상태를 업데이트합니다.

## 구현 예시
`subscribe`를 사용하여 상태 변경 시 URL 업데이트.

```javascript
// 상태 -> URL
useStore.subscribe((state) => {
  const params = new URLSearchParams(window.location.search)
  params.set('bears', state.bears)
  window.history.replaceState(null, '', `?${params.toString()}`)
})
```

초기화 시 URL에서 상태 읽기:

```javascript
const params = new URLSearchParams(window.location.search)
const bears = Number(params.get('bears')) || 0
// create store with bears...
```
