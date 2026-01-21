# Working with Arrays

Postgres는 배열 타입을 네이티브로 지원합니다.

## 배열 컬럼 생성

```sql
CREATE TABLE posts (
  id BIGSERIAL PRIMARY KEY,
  title TEXT,
  tags TEXT[]  -- 문자열 배열
);
```

## 배열 데이터 삽입

```sql
INSERT INTO posts (title, tags)
VALUES ('My Post', ARRAY['javascript', 'react', 'supabase']);

-- 또는
INSERT INTO posts (title, tags)
VALUES ('My Post', '{"javascript", "react", "supabase"}');
```

## 배열 쿼리

```sql
-- 특정 값 포함 여부
SELECT * FROM posts WHERE 'react' = ANY(tags);

-- 모든 값 포함 여부
SELECT * FROM posts WHERE tags @> ARRAY['react', 'supabase'];

-- 배열 길이
SELECT title, array_length(tags, 1) FROM posts;
```

## Supabase Client에서 사용

```javascript
// 배열 필터링
const { data } = await supabase
  .from('posts')
  .select('*')
  .contains('tags', ['react'])

// 배열 삽입
const { data } = await supabase
  .from('posts')
  .insert({ title: 'My Post', tags: ['javascript', 'react'] })
```
