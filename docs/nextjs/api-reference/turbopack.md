
# Turbopack

Turbopack은 Rust 기반의 차세대 번들러로, Webpack의 후속작입니다.

## 사용법

### 개발 모드
```bash
next dev --turbo
```

또는 `package.json`에서:
```json
{
  "scripts": {
    "dev": "next dev --turbo"
  }
}
```

## 특징

### 성능
- **증분 컴파일**: 변경된 부분만 재컴파일
- **병렬 처리**: Rust의 멀티스레딩 활용
- **메모리 효율성**: 최적화된 캐싱

### 호환성
대부분의 Webpack 로더와 플러그인을 지원합니다.

## 설정

### next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      // Turbopack 설정
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
}
 
module.exports = nextConfig
```

## 지원되는 기능

- ✅ CSS Modules
- ✅ Global CSS
- ✅ PostCSS
- ✅ Sass
- ✅ TypeScript
- ✅ JSX/TSX
- ✅ Fast Refresh
- ✅ 이미지 최적화
- ✅ 폰트 최적화

## 현재 제한사항

일부 고급 Webpack 기능은 아직 지원되지 않을 수 있습니다. 
최신 상태는 공식 문서를 참조하세요.

## 성능 비교

Turbopack은 다음보다 빠릅니다:
- Webpack보다 최대 700배 빠른 업데이트
- Vite보다 최대 10배 빠른 업데이트
- Webpack보다 최대 4배 빠른 초기 컴파일
