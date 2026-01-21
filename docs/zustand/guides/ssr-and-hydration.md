
# SSR and Hydration

Next.js 등 SSR 환경에서 Zustand 사용 시 Hydration 불일치 문제 해결.

## 문제점
서버에서 생성된 HTML과 클라이언트 초기 상태가 다르면 Text content mismatch 에러가 발생합니다.

## 해결책 1: useEffect
클라이언트에서만 컴포넌트를 렌더링하도록 강제합니다.

## 해결책 2: skipHydration
`persist` 미들웨어 사용 시 `skipHydration: true` 옵션을 사용하고, 클라이언트 마운트 후 수동으로 `rehydrate` 할 수 있습니다.

## Next.js App Router
App Router에서는 보통 스토어를 **클라이언트 컴포넌트** 내부나 Context Provider로 감싸서 사용합니다. 서버 컴포넌트에서는 상태를 공유하지 않는 것이 원칙입니다.
