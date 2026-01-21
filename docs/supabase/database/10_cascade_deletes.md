# Implementing Cascade Deletes

Cascade delete는 부모 레코드 삭제 시 관련 자식 레코드도 자동 삭제합니다.

## Foreign Key with CASCADE

```sql
CREATE TABLE posts (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT
);
```

이제 사용자가 삭제되면 해당 사용자의 모든 게시물도 자동 삭제됩니다.

## CASCADE 옵션

### ON DELETE CASCADE
부모 삭제 시 자식도 삭제

```sql
REFERENCES parent(id) ON DELETE CASCADE
```

### ON DELETE SET NULL
부모 삭제 시 자식의 외래 키를 NULL로 설정

```sql
REFERENCES parent(id) ON DELETE SET NULL
```

### ON DELETE RESTRICT (기본값)
자식이 있으면 부모 삭제 불가

```sql
REFERENCES parent(id) ON DELETE RESTRICT
```

## 기존 테이블 수정

```sql
-- 기존 제약 삭제
ALTER TABLE posts DROP CONSTRAINT posts_user_id_fkey;

-- CASCADE 옵션으로 재생성
ALTER TABLE posts
ADD CONSTRAINT posts_user_id_fkey
FOREIGN KEY (user_id)
REFERENCES auth.users(id)
ON DELETE CASCADE;
```

## 주의사항

- CASCADE는 신중하게 사용 (데이터 손실 위험)
- 중요한 데이터는 soft delete 고려
- 트리거로 더 복잡한 로직 구현 가능
