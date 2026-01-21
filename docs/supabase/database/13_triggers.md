# Managing Database Triggers

트리거는 특정 이벤트 발생 시 자동으로 함수를 실행합니다.

## 트리거 함수 생성

```sql
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER
LANGUAGE PLPGSQL
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;
```

## 트리거 생성

```sql
CREATE TRIGGER set_updated_at
BEFORE UPDATE ON posts
FOR EACH ROW
EXECUTE FUNCTION update_modified_column();
```

## 트리거 타이밍

- **BEFORE**: 작업 전 실행
- **AFTER**: 작업 후 실행
- **INSTEAD OF**: 작업 대신 실행 (View에서만)

## 트리거 이벤트

- **INSERT**: 새 행 삽입 시
- **UPDATE**: 행 수정 시
- **DELETE**: 행 삭제 시

## 실용 예제: 자동 타임스탬프

```sql
CREATE TABLE posts (
  id BIGSERIAL PRIMARY KEY,
  title TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER set_updated_at
BEFORE UPDATE ON posts
FOR EACH ROW
EXECUTE FUNCTION update_modified_column();
```

## 트리거 삭제

```sql
DROP TRIGGER set_updated_at ON posts;
```
