# Functions Overview

Supabase Edge Functions는 전 세계에 분산된 엣지 노드(Deno 런타임)에서 실행되는 서버 사이드 TypeScript 함수입니다.

## 주요 특징

- **Edge 배포**: 사용자와 가장 가까운 위치에서 실행되어 응답 속도가 빠릅니다.
- **Deno 런타임**: Node.js 대신 최신 웹 표준을 지원하는 Deno를 사용합니다. (import map, TypeScript 기본 지원)
- **Supabase 연동**: Supabase Auth, DB 클라이언트가 내장되어 있어 쉽게 연동 가능합니다.
- **CORS 내장**: 브라우저에서 직접 호출하기 쉽습니다.

## 사용 사례

- Stripe 결제 처리 (Webhooks)
- OpenAI API 호출 및 응답 스트리밍
- 데이터베이스 이벤트 처리 (DB Webhooks와 연동)
- 일괄 작업 스케줄링
- Auth Hook (회원가입 전/후 커스텀 로직)

## 구조

```
supabase/
  functions/
    my-function/
      index.ts  <-- 엔트리 포인트
```

## 호출 방법

```javascript
/* Client SDK */
const { data, error } = await supabase.functions.invoke('my-function', {
  body: { foo: 'bar' }
})
```

```bash
/* cURL */
curl --request POST 'https://[project].supabase.co/functions/v1/my-function' \
  --header 'Authorization: Bearer [ANON_KEY]' \
  --header 'Content-Type: application/json' \
  --data '{"name":"Functions"}'
```
