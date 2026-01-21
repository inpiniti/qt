# Querying Joins and Nested Tables

Supabase는 복잡한 JOIN 쿼리를 간단하게 만들어줍니다.

## SQL JOIN

```sql
SELECT 
  posts.title,
  users.email
FROM posts
INNER JOIN auth.users ON posts.user_id = users.id;
```

## Supabase Client로 JOIN

```javascript
// 외래 키 관계를 자동으로 따라감
const { data } = await supabase
  .from('posts')
  .select(`
    title,
    user:users (
      email,
      name
    )
  `)
```

## 중첩 관계

```javascript
// posts -> comments -> users
const { data } = await supabase
  .from('posts')
  .select(`
    title,
    comments (
      content,
      user:users (
        name
      )
    )
  `)
```

## Many-to-Many 관계

```sql
-- 테이블 구조
CREATE TABLE posts (id BIGSERIAL PRIMARY KEY, title TEXT);
CREATE TABLE tags (id BIGSERIAL PRIMARY KEY, name TEXT);
CREATE TABLE post_tags (
  post_id BIGINT REFERENCES posts(id),
  tag_id BIGINT REFERENCES tags(id),
  PRIMARY KEY (post_id, tag_id)
);
```

```javascript
// 조회
const { data } = await supabase
  .from('posts')
  .select(`
    title,
    post_tags (
      tag:tags (name)
    )
  `)
```
