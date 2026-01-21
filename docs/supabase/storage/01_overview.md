# Storage Overview

Supabase Storage는 대용량 파일(이미지, 비디오, 문서 등)을 저장하고 제공하기 위한 객체 스토리지입니다. S3 호환 API를 제공합니다.

## 주요 개념

### Buckets
파일을 담는 컨테이너입니다. 폴더와 유사한 개념입니다.
- **Public Bucket**: 누구나 파일을 다운로드할 수 있습니다. (URL로 접근 가능)
- **Private Bucket**: 인증된 사용자만 RLS 정책에 따라 접근할 수 있습니다.

### Files
버킷 내에 저장되는 실제 데이터입니다. 폴더 구조를 가질 수 있습니다.

## 기능

- **Resumable Uploads**: 대용량 파일 업로드 시 중단된 지점부터 재개 가능 (TUS 프로토콜)
- **CDN**: 전 세계 엣지 네트워크를 통한 빠른 파일 전송 (Smart CDN)
- **Image Transformations**: URL 파라미터로 즉시 이미지 리사이징 및 압축
- **S3 호환성**: AWS S3 SDK 및 도구 사용 가능

## 설정

Dashboard -> Storage에서 새 버킷을 생성하고 정책을 설정할 수 있습니다.
