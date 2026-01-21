# Image Transformations

Supabase Storage는 이미지를 요청 시 실시간으로 변환(리사이징, 압축 등)하여 제공하는 기능을 내장하고 있습니다. 원본 이미지만 저장하고, 필요한 크기에 맞춰 동적으로 받아올 수 있습니다.

## 사용법

Public URL 뒤에 `transform` query parameter를 사용하거나, SDK 메소드를 사용합니다.

### JavaScript SDK

`getPublicUrl` 메소드에 옵션을 전달합니다.

```javascript
const { data } = supabase
  .storage
  .from('bucket')
  .getPublicUrl('image.jpg', {
    transform: {
      width: 500,
      height: 300,
      resize: 'cover', // 'cover' | 'contain' | 'fill'
      quality: 80,
      format: 'webp',  // 'origin' | 'webp' | 'jpeg' | 'png'
    },
  })
```

### URL Parameter 직접 사용

```
https://[project-ref].supabase.co/storage/v1/object/public/[bucket]/[image.jpg]?width=500&height=300
```

## 지원 옵션

- `width`, `height`: 픽셀 단위 크기
- `resize`: 리사이징 모드 (`cover`, `contain`, `fill`)
- `format`: 출력 포맷 (`origin` (기본값), `webp`, `jpeg`, `png`, `avif`)
- `quality`: 압축 품질 (0-100)

## 주의사항

- Pro 플랜 이상에서 사용 가능합니다.
- 변환된 이미지는 CDN에 캐시되므로 다음 요청부터는 매우 빠릅니다.
