# Managing Tables, Views, and Data

## 테이블 생성

### Dashboard에서

1. Table Editor로 이동
2. "New table" 클릭
3. 컬럼 정의 및 생성

### SQL로

```sql
CREATE TABLE posts (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT,
  user_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

## Views 생성

복잡한 쿼리를 재사용하기 위해 View를 생성할 수 있습니다.

```sql
CREATE VIEW user_posts AS
SELECT 
  posts.id,
  posts.title,
  users.email
FROM posts
JOIN auth.users ON posts.user_id = users.id;
```

## 데이터 조작

### INSERT

```sql
INSERT INTO posts (title, content, user_id)
VALUES ('Hello', 'World', auth.uid());
```

### UPDATE

```sql
UPDATE posts
SET title = 'Updated Title'
WHERE id = 1;
```

### DELETE

```sql
DELETE FROM posts WHERE id = 1;
```

## 제약 조건

```sql
-- UNIQUE 제약
ALTER TABLE users ADD CONSTRAINT unique_email UNIQUE (email);

-- CHECK 제약
ALTER TABLE posts ADD CONSTRAINT check_title_length 
CHECK (LENGTH(title) > 0);
```
