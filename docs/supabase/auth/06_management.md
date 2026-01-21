# User Management

사용자 정보를 관리하고 어드민 작업을 수행합니다.

## 사용자 정보 업데이트

로그인한 사용자는 자신의 정보를 수정할 수 있습니다.

```javascript
const { data, error } = await supabase.auth.updateUser({
  email: 'new@email.com',
  password: 'new-password',
  data: { hello: 'world' } // 메타데이터
})
```

## Admin API (Server-side Only)

`service_role` 키를 사용하여 관리자 권한으로 사용자를 관리합니다. **절대 클라이언트 측에 노출하면 안 됩니다.**

```javascript
import { createClient } from '@supabase/supabase-js'

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

// 사용자 목록 조회
const { data: { users }, error } = await supabaseAdmin.auth.admin.listUsers()

// 사용자 생성
const { data: user, error } = await supabaseAdmin.auth.admin.createUser({
  email: 'user@email.com',
  password: 'password',
  email_confirm: true
})

// 사용자 삭제
const { data, error } = await supabaseAdmin.auth.admin.deleteUser(
  'user_uuid'
)

// 사용자 초대 (이메일 발송)
const { data, error } = await supabaseAdmin.auth.admin.inviteUserByEmail(
  'user@email.com'
)
```
