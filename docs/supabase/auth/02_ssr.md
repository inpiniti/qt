# Server-Side Rendering (SSR)

Next.js 등 SSR 프레임워크에서 Supabase Auth를 사용하는 방법입니다.

## Next.js App Router

### 설치

```bash
npm install @supabase/ssr @supabase/supabase-js
```

### 서버 컴포넌트

```typescript
// app/page.tsx
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = cookies()
  
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )

  const { data: { user } } = await supabase.auth.getUser()

  return <div>Hello {user?.email}</div>
}
```

### 클라이언트 컴포넌트

```typescript
// app/login/page.tsx
'use client'

import { createBrowserClient } from '@supabase/ssr'

export default function Login() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const handleLogin = async () => {
    await supabase.auth.signInWithPassword({
      email: 'user@example.com',
      password: 'password'
    })
  }

  return <button onClick={handleLogin}>Login</button>
}
```

### Middleware

```typescript
// middleware.ts
import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'

export async function middleware(request) {
  const response = NextResponse.next()
  
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name) {
          return request.cookies.get(name)?.value
        },
        set(name, value, options) {
          response.cookies.set({ name, value, ...options })
        },
      },
    }
  )

  await supabase.auth.getUser()
  return response
}
```
