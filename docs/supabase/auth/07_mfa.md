# Multi-Factor Authentication (MFA)

보안 강화를 위해 2단계 인증(TOTP)을 지원합니다. (Google Authenticator 등 앱 사용)

## 등록 흐름

1. **Enroll**: 팩터 등록 API 호출
   ```javascript
   const { data, error } = await supabase.auth.mfa.enroll({
     factorType: 'totp',
   })
   // data.id: 팩터 ID
   // data.totp.qr_code: QR 코드 이미지 URL
   // data.totp.secret: 시크릿 키
   ```

2. **Challenge**: 사용자가 앱에 등록 후 생성된 코드로 챌린지 요청
   ```javascript
   const { data, error } = await supabase.auth.mfa.challenge({
     factorId: factorId,
   })
   // data.id: 챌린지 ID
   ```

3. **Verify**: 코드 검증 및 활성화
   ```javascript
   const { data, error } = await supabase.auth.mfa.verify({
     factorId: factorId,
     challengeId: challengeId,
     code: '123456', // 사용자 입력 코드
   })
   ```

## 로그인 시 검증

로그인 성공 후, 사용자의 MFA 레벨이 `aal2`인지 확인해야 합니다.

1. 로그인 (aal1 상태)
2. 등록된 팩터 확인
   ```javascript
   const factors = await supabase.auth.mfa.listFactors()
   ```
3. 챌린지 및 검증 (위와 동일)

## 레벨 확인

```javascript
/*
  aal1: 1단계 인증 (이메일/비밀번호 등)
  aal2: 2단계 인증 완료
*/
const { data: { user } } = await supabase.auth.getUser()
// user.app_metadata.aal 확인
```

## RLS 정책 활용

MFA가 완료된 사용자만 접근 가능하도록 설정할 수 있습니다.

```sql
create policy "MFA required"
  on sensitive_table
  to authenticated
  using (auth.jwt()->>'aal' = 'aal2');
```
