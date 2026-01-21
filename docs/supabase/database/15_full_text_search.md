# Full Text Search

Postgres의 강력한 전문 검색 기능을 활용할 수 있습니다.

## 기본 전문 검색

```sql
-- to_tsvector: 텍스트를 검색 가능한 형태로 변환
-- to_tsquery: 검색어를 쿼리로 변환
SELECT *
FROM posts
WHERE to_tsvector('english', title || ' ' || content) 
  @@ to_tsquery('english', 'supabase & postgres');
```

## tsvector 컬럼 추가

성능 향상을 위해 미리 계산된 tsvector 컬럼을 추가합니다.

```sql
-- 컬럼 추가
ALTER TABLE posts ADD COLUMN fts tsvector
GENERATED ALWAYS AS (
  to_tsvector('english', title || ' ' || content)
) STORED;

-- 인덱스 생성
CREATE INDEX idx_fts ON posts USING GIN(fts);

-- 검색
SELECT * FROM posts
WHERE fts @@ to_tsquery('english', 'supabase & postgres');
```

## Supabase Client

```javascript
const { data } = await supabase
  .from('posts')
  .select('*')
  .textSearch('fts', 'supabase & postgres')
```

## 다국어 지원

```sql
-- 한국어 검색 (PGroonga 확장 사용)
CREATE EXTENSION pgroonga;

CREATE INDEX idx_content_pgroonga ON posts
USING pgroonga(content);

SELECT * FROM posts
WHERE content &@~ '검색어';
```

## 검색 랭킹

```sql
SELECT 
  title,
  ts_rank(fts, query) AS rank
FROM posts, to_tsquery('english', 'supabase') query
WHERE fts @@ query
ORDER BY rank DESC;
```
