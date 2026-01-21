# Email Auth

이메일 기반 인증은 가장 일반적인 인증 방식입니다. 

## Magic Link

비밀번호 없이 이메일로 전송된 링크를 클릭하여 로그인합니다.

```javascript
const { data, error } = await supabase.auth.signInWithOtp({
  email: 'example@email.com',
  options: {
    // 로그인 후 리다이렉트될 URL
    emailRedirectTo: 'https://example.com/welcome'
  }
})
```

사용자는 이메일의 링크를 클릭하면 `emailRedirectTo` URL로 이동하며 세션이 생성됩니다.

## Email OTP

링크 대신 6자리 코드를 입력하여 로그인할 수도 있습니다.

1. OTP 발송
```javascript
const { data, error } = await supabase.auth.signInWithOtp({
  email: 'example@email.com',
})
```

2. OTP 검증
```javascript
const { data, session, error } = await supabase.auth.verifyOtp({
  email: 'example@email.com',
  token: '123456',
  type: 'email',
})
```

## 비밀번호 변경

로그인한 사용자의 비밀번호를 변경합니다.

```javascript
const { data, error } = await supabase.auth.updateUser({
  password: 'new password'
})
```

## 비밀번호 재설정 (Forgot Password)

1. 재설정 이메일 발송
```javascript
const { data, error } = await supabase.auth.resetPasswordForEmail(
  'user@example.com', {
  redirectTo: 'https://example.com/update-password',
})
```

2. 사용자가 링크 클릭 후 새 비밀번호 설정 페이지로 이동하면, 세션이 생성된 상태이므로 `updateUser`로 비밀번호 업데이트 가능
