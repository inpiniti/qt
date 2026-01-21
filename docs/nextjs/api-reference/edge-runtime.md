
# Edge Runtime

Next.js Edge Runtime은 표준 Web API를 기반으로 합니다.

## 사용법

### Middleware
```typescript
export const config = {
  runtime: 'edge',
}
 
export default function middleware(request: Request) {
  // Middleware 로직
}
```

### Route Handlers
```typescript
export const runtime = 'edge'
 
export async function GET(request: Request) {
  return new Response('Hello, Edge!')
}
```

## 지원되는 API

### Fetch API
- `fetch()`
- `Request`
- `Response`
- `Headers`

### Encoding
- `TextEncoder`
- `TextDecoder`
- `atob()`
- `btoa()`

### Web Streams
- `ReadableStream`
- `WritableStream`
- `TransformStream`

### Crypto
- `crypto`
- `SubtleCrypto`

### URL
- `URL`
- `URLSearchParams`

## 제한사항

Edge Runtime에서는 다음이 지원되지 않습니다:
- Node.js API (예: `fs`, `path`)
- Native Node.js 모듈
- 동적 코드 평가 (`eval`, `new Function`)

## 환경 변수

Edge Runtime에서 환경 변수 접근:

```typescript
export const runtime = 'edge'
 
export async function GET() {
  const myVar = process.env.MY_VAR
  return new Response(myVar)
}
```

## 성능

Edge Runtime의 장점:
- **빠른 콜드 스타트**: 밀리초 단위
- **글로벌 배포**: 사용자에게 가까운 위치에서 실행
- **낮은 지연 시간**: 네트워크 왕복 시간 감소
