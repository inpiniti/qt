# Managing Database Functions

Postgres 함수로 복잡한 로직을 데이터베이스에서 실행할 수 있습니다.

## 함수 생성

```sql
CREATE OR REPLACE FUNCTION hello_world()
RETURNS TEXT
LANGUAGE SQL
AS $$
  SELECT 'Hello, World!';
$$;
```

## 매개변수가 있는 함수

```sql
CREATE OR REPLACE FUNCTION add_numbers(a INT, b INT)
RETURNS INT
LANGUAGE SQL
AS $$
  SELECT a + b;
$$;
```

## PL/pgSQL 함수

```sql
CREATE OR REPLACE FUNCTION get_user_posts(user_id UUID)
RETURNS TABLE (id BIGINT, title TEXT)
LANGUAGE PLPGSQL
AS $$
BEGIN
  RETURN QUERY
  SELECT posts.id, posts.title
  FROM posts
  WHERE posts.user_id = get_user_posts.user_id;
END;
$$;
```

## Supabase Client에서 호출

```javascript
const { data, error } = await supabase
  .rpc('hello_world')

const { data } = await supabase
  .rpc('add_numbers', { a: 5, b: 3 })
```

## 보안

```sql
-- RLS 적용
CREATE FUNCTION get_my_posts()
RETURNS SETOF posts
LANGUAGE SQL
SECURITY DEFINER
AS $$
  SELECT * FROM posts WHERE user_id = auth.uid();
$$;
```
