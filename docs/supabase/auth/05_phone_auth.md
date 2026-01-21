# Phone Auth

SMS를 통한 휴대폰 인증을 지원합니다. (Twilio, MessageBird, Vonage 등 제공업체 설정 필요)

## 설정

Dashboard -> Authentication -> Providers -> Phone에서 제공업체 정보를 입력해야 합니다.

## 로그인 / 회원가입

```javascript
const { data, error } = await supabase.auth.signInWithOtp({
  phone: '+821012345678',
})
```

## OTP 검증

사용자가 문자로 받은 코드를 입력합니다.

```javascript
const { data, session, error } = await supabase.auth.verifyOtp({
  phone: '+821012345678',
  token: '123456',
  type: 'sms',
})
```
