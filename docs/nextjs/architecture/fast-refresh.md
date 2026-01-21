
# Fast Refresh

Fast Refresh는 React 컴포넌트 편집에 대한 즉각적인 피드백을 제공하는 Next.js 기능입니다.

## 작동 방식

Fast Refresh는 다음과 같이 작동합니다:
1. 파일을 편집하고 저장
2. 변경 사항이 1초 이내에 브라우저에 반영
3. 컴포넌트 상태가 유지됨

## 특징

### 상태 유지
React 컴포넌트를 편집해도 상태가 유지됩니다:

```jsx
'use client'
 
import { useState } from 'react'
 
export default function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        증가
      </button>
    </div>
  )
}
```

버튼 스타일을 변경해도 `count` 상태는 유지됩니다.

### 에러 복구
런타임 에러가 발생하면:
1. 에러 오버레이가 표시됨
2. 에러를 수정하면 자동으로 재시도
3. 페이지 새로고침 불필요

## 제한사항

### 클래스 컴포넌트
클래스 컴포넌트는 상태가 유지되지 않습니다. 함수형 컴포넌트 사용을 권장합니다.

### 익명 화살표 함수
```jsx
// ❌ Fast Refresh가 작동하지 않음
export default () => <div>Hello</div>

// ✅ 올바른 방법
export default function Page() {
  return <div>Hello</div>
}
```

### 고차 컴포넌트 (HOC)
HOC를 사용할 때는 명명된 함수를 사용하세요:

```jsx
// ❌ 나쁜 예
export default withAuth(() => <div>Protected</div>)

// ✅ 좋은 예
function ProtectedPage() {
  return <div>Protected</div>
}

export default withAuth(ProtectedPage)
```

## 문제 해결

### Fast Refresh가 작동하지 않는 경우

1. **파일 확인**: `.js`, `.jsx`, `.ts`, `.tsx` 파일인지 확인
2. **구문 에러**: 구문 에러가 있으면 작동하지 않음
3. **브라우저 캐시**: 브라우저 캐시 삭제 시도
4. **재시작**: 개발 서버 재시작

### 전체 새로고침이 필요한 경우

다음 경우에는 전체 페이지 새로고침이 발생합니다:
- React가 아닌 파일 편집 (예: CSS 모듈)
- React 컴포넌트가 아닌 파일에서 export하는 경우
- `getServerSideProps` 또는 `getStaticProps` 편집

## 비활성화

Fast Refresh를 비활성화하려면 (권장하지 않음):

```javascript
// next.config.js
module.exports = {
  reactStrictMode: true,
  // Fast Refresh 비활성화
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    return config
  },
}
```
