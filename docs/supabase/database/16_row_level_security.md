# Row Level Security (RLS)

RLS는 Postgres의 핵심 보안 기능으로, 행 단위로 접근을 제어합니다.

## RLS 활성화

```sql
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
```

## Policy 생성

### SELECT Policy

```sql
-- 사용자는 자신의 게시물만 볼 수 있음
CREATE POLICY "Users can view own posts"
ON posts FOR SELECT
USING (auth.uid() = user_id);
```

### INSERT Policy

```sql
-- 사용자는 자신의 ID로만 게시물 생성 가능
CREATE POLICY "Users can create own posts"
ON posts FOR INSERT
WITH CHECK (auth.uid() = user_id);
```

### UPDATE Policy

```sql
-- 사용자는 자신의 게시물만 수정 가능
CREATE POLICY "Users can update own posts"
ON posts FOR UPDATE
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);
```

### DELETE Policy

```sql
-- 사용자는 자신의 게시물만 삭제 가능
CREATE POLICY "Users can delete own posts"
ON posts FOR DELETE
USING (auth.uid() = user_id);
```

## 복잡한 Policy

```sql
-- 공개 게시물은 모두 볼 수 있고, 비공개는 작성자만
CREATE POLICY "Public posts are viewable by everyone"
ON posts FOR SELECT
USING (
  is_public = true 
  OR auth.uid() = user_id
);
```

## Helper 함수

```sql
-- 현재 사용자 ID
auth.uid()

-- 현재 사용자 Role
auth.role()

-- JWT 클레임
auth.jwt() -> 'email'
```

## Policy 비활성화

```sql
ALTER TABLE posts DISABLE ROW LEVEL SECURITY;
```
