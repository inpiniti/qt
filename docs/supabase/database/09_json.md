# JSON and Unstructured Data

Postgres의 JSONB 타입으로 유연한 데이터 구조를 저장할 수 있습니다.

## JSONB 컬럼 생성

```sql
CREATE TABLE events (
  id BIGSERIAL PRIMARY KEY,
  name TEXT,
  metadata JSONB
);
```

## 데이터 삽입

```sql
INSERT INTO events (name, metadata)
VALUES (
  'user_signup',
  '{"user_id": 123, "source": "google", "tags": ["new", "premium"]}'::JSONB
);
```

## JSONB 쿼리

```sql
-- 특정 키 값 조회
SELECT * FROM events WHERE metadata->>'source' = 'google';

-- 중첩된 값 조회
SELECT * FROM events WHERE metadata->'user'->'id' = '123';

-- 배열 포함 여부
SELECT * FROM events WHERE metadata->'tags' ? 'premium';

-- JSONB 키 존재 여부
SELECT * FROM events WHERE metadata ? 'user_id';
```

## Supabase Client

```javascript
// JSONB 필터링
const { data } = await supabase
  .from('events')
  .select('*')
  .eq('metadata->source', 'google')

// JSONB 삽입
const { data } = await supabase
  .from('events')
  .insert({
    name: 'user_signup',
    metadata: { user_id: 123, source: 'google' }
  })
```

## 인덱싱

```sql
-- GIN 인덱스로 JSONB 쿼리 성능 향상
CREATE INDEX idx_metadata ON events USING GIN(metadata);
```
