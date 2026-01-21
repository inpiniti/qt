# Importing Data

Supabase로 데이터를 가져오는 여러 방법이 있습니다.

## CSV Import (Dashboard)

1. Supabase Dashboard의 Table Editor로 이동
2. "Import data via spreadsheet" 클릭
3. CSV 파일 업로드

## SQL Script

SQL 파일을 직접 실행할 수 있습니다.

```sql
-- SQL Editor에서 실행
INSERT INTO users (name, email) VALUES
  ('Alice', 'alice@example.com'),
  ('Bob', 'bob@example.com');
```

## pg_dump & pg_restore

기존 Postgres 데이터베이스에서 마이그레이션:

```bash
# 기존 DB에서 덤프
pg_dump -h old-host -U postgres -d mydb > dump.sql

# Supabase로 복원
psql -h db.xxx.supabase.co -U postgres -d postgres < dump.sql
```

## Supabase CLI

```bash
supabase db push
```
