# Managing Enums

Enum은 미리 정의된 값 집합을 강제하는 데이터 타입입니다.

## Enum 생성

```sql
CREATE TYPE mood AS ENUM ('happy', 'sad', 'neutral');
```

## 테이블에서 사용

```sql
CREATE TABLE person (
  id BIGSERIAL PRIMARY KEY,
  name TEXT,
  current_mood mood
);

INSERT INTO person (name, current_mood)
VALUES ('Alice', 'happy');
```

## Enum 값 추가

```sql
ALTER TYPE mood ADD VALUE 'excited';
```

## Enum 값 조회

```sql
SELECT enum_range(NULL::mood);
```

## Supabase Client

```javascript
const { data } = await supabase
  .from('person')
  .insert({ name: 'Bob', current_mood: 'happy' })
```

## 주의사항

- Enum 값은 삭제할 수 없음 (재생성 필요)
- 값 순서가 중요 (정렬에 영향)
- 대안: CHECK 제약 조건 사용
