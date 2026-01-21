# Manage Files

JavaScript 클라이언트를 사용하여 파일을 업로드하고 관리하는 방법입니다.

## 파일 업로드

```javascript
const avatarFile = event.target.files[0]
const { data, error } = await supabase
  .storage
  .from('avatars')
  .upload('public/avatar1.png', avatarFile, {
    cacheControl: '3600',
    upsert: false
  })
```

## 파일 다운로드

```javascript
const { data, error } = await supabase
  .storage
  .from('avatars')
  .download('public/avatar1.png')

// data는 Blob 객체입니다.
```

## Signed URL 생성 (Private Bucket)

비공개 버킷의 파일에 대해 제한된 시간 동안 접근 가능한 URL을 생성합니다.

```javascript
const { data, error } = await supabase
  .storage
  .from('avatars')
  .createSignedUrl('private/avatar1.png', 60) // 60초 유효
```

## Public URL 가져오기

공개 버킷의 파일 URL을 가져옵니다.

```javascript
const { data } = supabase
  .storage
  .from('avatars')
  .getPublicUrl('public/avatar1.png')

// data.publicUrl 사용
```

## 파일 목록 조회

```javascript
const { data, error } = await supabase
  .storage
  .from('avatars')
  .list('public', {
    limit: 100,
    offset: 0,
    sortBy: { column: 'name', order: 'asc' },
  })
```

## 파일 삭제

```javascript
const { data, error } = await supabase
  .storage
  .from('avatars')
  .remove(['public/avatar1.png'])
```
