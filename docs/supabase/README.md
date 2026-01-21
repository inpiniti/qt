# Supabase Documentation

이 문서는 Supabase의 주요 기능을 5개의 핵심 섹션으로 나누어 설명합니다.

## 1. Database
PostgreSQL 기반의 강력한 데이터베이스 기능입니다.
- [Overview](./database/01_overview.md)
- [Connecting](./database/02_connecting.md)
- [Importing Data](./database/03_importing_data.md)
- [Managing Tables](./database/05_managing_tables.md)
- [Querying & Joins](./database/08_joins.md)
- **Advanced Features**:
  - [Securing Data (RLS)](./database/04_securing_data.md)
  - [Functions & Triggers](./database/12_functions.md)
  - [Full Text Search](./database/15_full_text_search.md)
  - [Vector Search (AI)](./database/17_pgvector.md)

## 2. Authentication
사용자 가입, 로그인 및 접근 제어를 관리합니다.
- [Overview](./auth/01_overview.md)
- [Email Auth](./auth/04_email_auth.md)
- [Social Login (OAuth)](./auth/03_oauth.md)
- [Phone Auth](./auth/05_phone_auth.md)
- [User Management](./auth/06_management.md)
- [SSR (Next.js)](./auth/02_ssr.md)
- [MFA](./auth/07_mfa.md)

## 3. Storage
이미지, 비디오 등 대용량 파일을 저장하고 제공합니다.
- [Overview](./storage/01_overview.md)
- [Manage Files](./storage/02_manage_files.md)
- [Security (RLS)](./storage/03_security.md)
- [Image Transformations](./storage/04_image_transformations.md)

## 4. Realtime
실시간 데이터 동기화 및 메시징 기능을 제공합니다.
- [Overview](./realtime/01_overview.md)
- [Broadcast (Chat/Game)](./realtime/02_broadcast.md)
- [Presence (Status)](./realtime/03_presence.md)
- [Postgres Changes (DB Sync)](./realtime/04_postgres_changes.md)

## 5. Edge Functions
서버리스 Deno 런타임에서 커스텀 로직을 실행합니다.
- [Overview](./functions/01_overview.md)
- [Development](./functions/02_development.md)
- [Deployment](./functions/03_deployment.md)
- [Integrations & Examples](./functions/04_integrations.md)
