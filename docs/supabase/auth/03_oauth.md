# Social Login (OAuth)

Google, GitHub 등 소셜 로그인을 쉽게 구현할 수 있습니다.

## Provider 설정 (Dashboard)

1. Authentication → Providers로 이동
2. 원하는 Provider 활성화
3. Client ID와 Secret 입력

## 지원 Providers

- Google
- GitHub
- GitLab
- Bitbucket
- Azure
- Facebook
- Twitter
- Discord
- Slack
- Spotify
- Twitch
- LinkedIn
- 등 20개 이상

## 로그인 구현

```javascript
// Google 로그인
const { data, error } = await supabase.auth.signInWithOAuth({
  provider: 'google',
  options: {
    redirectTo: 'http://localhost:3000/auth/callback'
  }
})

// GitHub 로그인
await supabase.auth.signInWithOAuth({
  provider: 'github'
})
```

## Redirect URL 설정

Dashboard → Authentication → URL Configuration에서 설정:
- `http://localhost:3000/auth/callback` (개발)
- `https://yourdomain.com/auth/callback` (프로덕션)

## Callback 처리

```typescript
// app/auth/callback/route.ts (Next.js)
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const supabase = createRouteHandlerClient({ cookies })
    await supabase.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(requestUrl.origin)
}
```

## 추가 스코프 요청

```javascript
await supabase.auth.signInWithOAuth({
  provider: 'github',
  options: {
    scopes: 'repo gist'
  }
})
```
