# Auth Overview

Supabase Auth는 완전한 사용자 인증 시스템을 제공합니다.

## 주요 기능

- **이메일/비밀번호 인증**
- **Magic Link (비밀번호 없는 로그인)**
- **OAuth (Google, GitHub 등)**
- **전화번호 인증 (SMS OTP)**
- **Multi-Factor Authentication (MFA)**
- **Row Level Security 통합**

## 아키텍처

Supabase Auth는 GoTrue를 기반으로 합니다:
- JWT 토큰 발급
- 자동 토큰 갱신
- 세션 관리
- RLS와 완벽한 통합

## 빠른 시작

```javascript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://your-project.supabase.co',
  'your-anon-key'
)

// 회원가입
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'password123'
})

// 로그인
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password123'
})

// 현재 사용자
const { data: { user } } = await supabase.auth.getUser()

// 로그아웃
await supabase.auth.signOut()
```

## 보안

- 비밀번호는 bcrypt로 해시
- JWT는 HS256으로 서명
- PKCE 플로우 지원
- Rate limiting 내장
