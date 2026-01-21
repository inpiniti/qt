# Securing Your Data

Supabase는 Row Level Security (RLS)를 통해 데이터를 보호합니다.

## Row Level Security (RLS)

RLS는 Postgres의 네이티브 기능으로, 각 행에 대한 접근을 제어합니다.

### RLS 활성화

```sql
ALTER TABLE todos ENABLE ROW LEVEL SECURITY;
```

### Policy 생성

```sql
-- 사용자는 자신의 todo만 볼 수 있음
CREATE POLICY "Users can view their own todos"
ON todos FOR SELECT
USING (auth.uid() = user_id);

-- 사용자는 자신의 todo만 삽입 가능
CREATE POLICY "Users can insert their own todos"
ON todos FOR INSERT
WITH CHECK (auth.uid() = user_id);
```

## 기본 보안 설정

1. **모든 테이블에 RLS 활성화**: 기본적으로 모든 접근 차단
2. **명시적 Policy 생성**: 필요한 접근만 허용
3. **anon key 사용**: 클라이언트에서는 anon key만 사용
4. **service_role key 보호**: 서버에서만 사용

## 보안 체크리스트

- [ ] 모든 public 테이블에 RLS 활성화
- [ ] 각 테이블에 적절한 Policy 설정
- [ ] service_role key를 환경변수로 관리
- [ ] HTTPS만 사용
