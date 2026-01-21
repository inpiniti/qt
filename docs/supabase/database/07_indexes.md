# Managing Indexes

인덱스는 쿼리 성능을 크게 향상시킵니다.

## 인덱스 생성

```sql
-- 단일 컬럼 인덱스
CREATE INDEX idx_posts_user_id ON posts(user_id);

-- 복합 인덱스
CREATE INDEX idx_posts_user_created ON posts(user_id, created_at);

-- 부분 인덱스
CREATE INDEX idx_active_posts ON posts(user_id) 
WHERE status = 'active';
```

## 인덱스 타입

### B-tree (기본)
```sql
CREATE INDEX idx_name ON table(column);
```

### GIN (배열, JSONB)
```sql
CREATE INDEX idx_tags ON posts USING GIN(tags);
```

### GiST (지리 데이터)
```sql
CREATE INDEX idx_location ON places USING GIST(location);
```

## 인덱스 확인

```sql
-- 테이블의 모든 인덱스 조회
SELECT * FROM pg_indexes WHERE tablename = 'posts';
```

## 인덱스 삭제

```sql
DROP INDEX idx_posts_user_id;
```

## 성능 팁

- WHERE 절에 자주 사용되는 컬럼에 인덱스 생성
- JOIN에 사용되는 외래 키에 인덱스 생성
- 너무 많은 인덱스는 INSERT/UPDATE 성능 저하
