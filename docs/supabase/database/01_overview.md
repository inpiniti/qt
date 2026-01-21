# Database Overview

Supabase는 모든 프로젝트에 완전한 **Postgres 데이터베이스**를 제공합니다.

## 주요 특징

- **완전한 Postgres**: 표준 PostgreSQL 데이터베이스로, 모든 Postgres 기능 사용 가능
- **확장 가능**: pgvector, PostGIS 등 다양한 Postgres 확장 지원
- **실시간 기능**: 데이터베이스 변경사항을 실시간으로 구독 가능
- **자동 API**: 데이터베이스 테이블이 자동으로 RESTful API로 노출
- **보안**: Row Level Security (RLS)로 세밀한 접근 제어

## Postgres의 장점

- 오픈소스이며 30년 이상의 개발 역사
- ACID 트랜잭션 지원
- JSON, 배열, 전문 검색 등 고급 데이터 타입
- 강력한 쿼리 최적화 엔진
- 확장 생태계

## Supabase에서 제공하는 추가 기능

- **자동 백업**: 매일 자동 백업 및 Point-in-Time Recovery
- **Connection Pooling**: Supavisor를 통한 연결 풀링
- **Dashboard**: 웹 기반 데이터베이스 관리 도구
- **Migration 도구**: 버전 관리 가능한 마이그레이션
