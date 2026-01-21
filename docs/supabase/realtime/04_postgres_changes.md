# Postgres Changes

데이터베이스의 변경 사항을 실시간으로 구독합니다.

## 전제 조건

1. Dashboard -> Table Editor에서 해당 테이블의 'Enable Realtime'이 켜져 있어야 합니다. (또는 SQL로 Publication 추가)
2. 테이블에 Primary Key가 있어야 UPDATE/DELETE 이벤트를 정확히 수신할 수 있습니다.

## 이벤트 리스닝

```javascript
const channel = supabase
  .channel('table-db-changes')
  .on(
    'postgres_changes',
    {
      event: '*', // 'INSERT', 'UPDATE', 'DELETE', or '*'
      schema: 'public',
      table: 'todos',
      filter: 'user_id=eq.123' // 선택적 필터
    },
    (payload) => {
      console.log('Change received!', payload)
      // payload.new: 새로 들어온/변경된 데이터
      // payload.old: 변경 전/삭제된 데이터 (PK만 포함될 수 있음)
      // payload.eventType: 'INSERT' | 'UPDATE' | 'DELETE'
    }
  )
  .subscribe()
```

## RLS (보안)

Realtime은 RLS 정책을 준수합니다.
- 구독하는 사용자(클라이언트의 Auth 토큰 기준)가 **볼 권한이 있는 행**의 변경 사항만 전달됩니다.
- 정책에 따라 `select` 권한이 없으면 이벤트를 받지 못합니다.

따라서 클라이언트에서 별도로 필터링할 필요 없이, 보안 정책만 잘 설정하면 됩니다.
