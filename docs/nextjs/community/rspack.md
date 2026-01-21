
# Rspack

Rspack은 Rust 기반의 고성능 웹 번들러로, Webpack과 호환되는 API를 제공합니다.

## 개요

Rspack은 다음을 목표로 합니다:
- **고성능**: Rust로 작성되어 빠른 빌드 속도
- **Webpack 호환**: 기존 Webpack 설정 재사용 가능
- **모던 아키텍처**: 병렬 처리 및 증분 컴파일

## Next.js와 Rspack

### 현재 상태
Next.js는 기본적으로 다음을 사용합니다:
- **개발**: Turbopack (권장)
- **프로덕션**: Webpack 또는 Turbopack

Rspack은 커뮤니티에서 실험적으로 지원됩니다.

### 실험적 사용

Rspack을 Next.js와 함께 사용하려면:

```bash
npm install @rspack/core @rspack/cli
```

**주의**: 공식적으로 지원되지 않으며, 일부 기능이 작동하지 않을 수 있습니다.

## Turbopack vs Rspack

| 특징 | Turbopack | Rspack |
|------|-----------|--------|
| 언어 | Rust | Rust |
| Webpack 호환 | 제한적 | 높음 |
| Next.js 통합 | 공식 지원 | 커뮤니티 |
| 성능 | 매우 빠름 | 빠름 |
| 성숙도 | 개발 중 | 개발 중 |

## 권장사항

Next.js 프로젝트에서는:
1. **개발**: `next dev --turbo` 사용
2. **프로덕션**: 기본 설정 사용

Rspack은 다음 경우에 고려:
- Webpack에서 마이그레이션 중
- 특정 Webpack 플러그인 필요
- 커뮤니티 실험에 참여

## 대안

### Turbopack
Next.js의 공식 번들러:
```bash
next dev --turbo
```

### Webpack
안정적이고 성숙한 옵션:
```javascript
// next.config.js
module.exports = {
  webpack: (config) => {
    // 커스텀 설정
    return config
  },
}
```

## 커뮤니티 리소스

- [Rspack 공식 문서](https://www.rspack.dev/)
- [Rspack GitHub](https://github.com/web-infra-dev/rspack)
- [Next.js Discussions](https://github.com/vercel/next.js/discussions)

## 미래 전망

Rspack과 Turbopack 모두 활발히 개발 중입니다. 
Next.js 팀은 Turbopack을 공식 번들러로 발전시키고 있습니다.

## 기여

Rspack 프로젝트에 기여하려면:
1. [Rspack GitHub](https://github.com/web-infra-dev/rspack) 방문
2. 이슈 및 PR 확인
3. 커뮤니티 참여
