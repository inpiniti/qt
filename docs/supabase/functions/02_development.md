# Developing Functions

## 환경 설정

1. Supabase CLI 설치
2. 프로젝트 초기화: `supabase init`

## 함수 생성

```bash
supabase functions new hello-world
```

`supabase/functions/hello-world/index.ts` 파일이 생성됩니다.

## 코드 작성 (Deno)

```typescript
// Deno의 serve API 사용
Deno.serve(async (req) => {
  const { name } = await req.json()
  const data = {
    message: `Hello ${name}!`,
  }

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  })
})
```

## 로컬 실행 및 테스트

```bash
supabase start
supabase functions serve
```

로컬 서버가 실행되면 `http://localhost:54321/functions/v1/hello-world`로 테스트할 수 있습니다.

## 환경 변수

`.env.local` 파일이나 `config.toml` 대신, CLI를 통해 설정하거나 Dashboard에서 설정합니다.

로컬 테스트를 위해 `.env` 파일을 생성하고:
```bash
supabase functions serve --env-file ./supabase/.env.local
```
