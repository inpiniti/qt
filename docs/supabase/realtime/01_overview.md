# Realtime Overview

Supabase Realtime은 웹소켓을 통해 실시간 기능을 제공합니다.

## 주요 기능

### 1. Broadcast
클라이언트 간에 메시지를 주고받습니다. 채팅, 마우스 커서 추적, 게임 상태 동기화 등에 적합합니다. 데이터베이스를 거치지 않아 지연 시간이 매우 낮습니다.

### 2. Presence
사용자의 온라인 상태를 추적하고 공유합니다. "누가 접속 중인지", "누가 타이핑 중인지" 같은 기능을 구현할 때 사용합니다.

### 3. Postgres Changes
Postgres 데이터베이스의 변경 사항(INSERT, UPDATE, DELETE)을 실시간으로 감지하고 클라이언트에 전송합니다. Replication 기능을 기반으로 작동합니다.

## 설정

Dashboard -> Database -> Replication에서 `supabase_realtime` Publication에 원하는 테이블을 추가해야 합니다. 기본적으로 비활성화되어 있습니다.

```sql
-- 모든 테이블 활성화 (주의: 보안 및 성능 이슈)
alter publication supabase_realtime add table schema.table_name;
```

## 클라이언트 초기화

별도 설정 없이 `supabase-js` 클라이언트가 자동으로 WebSocket 연결을 관리합니다.
