# Storage Security (RLS)

Storage도 Postgres Database와 마찬가지로 Row Level Security (RLS) 정책을 통해 접근을 제어합니다. `storage.objects`와 `storage.buckets` 테이블에 정책을 적용합니다.

## 정책 예시

Dashboard의 Storage -> Policies 탭에서 쉽게 설정할 수 있으며, SQL로도 가능합니다.

### 1. 누구나 보기 허용 (Public)

```sql
create policy "Public Access"
on storage.objects for select
to public
using ( bucket_id = 'avatars' );
```

### 2. 로그인한 사용자만 업로드 허용

```sql
create policy "Authenticated users can upload"
on storage.objects for insert
to authenticated
with check ( bucket_id = 'avatars' );
```

### 3. 자신의 폴더에만 업로드 허용

사용자가 자신의 `user_id` 폴더에만 파일을 올릴 수 있게 제한합니다.

```sql
create policy "User can upload own folder"
on storage.objects for insert
to authenticated
with check (
  bucket_id = 'avatars' and
  (storage.foldername(name))[1] = auth.uid()::text
);
```

### 4. 자신의 파일만 삭제/수정 허용

```sql
create policy "User can update/delete own files"
on storage.objects for update
to authenticated
using (
  bucket_id = 'avatars' and
  owner = auth.uid()
);

-- Delete도 동일하게
```

## Helper 함수

Supabase는 Storage 정책 작성을 위한 헬퍼 함수를 제공합니다.
- `storage.foldername(name)`: 경로 배열 반환
- `storage.filename(name)`: 파일명 반환
- `storage.extension(name)`: 확장자 반환 (예: `jpg`)
