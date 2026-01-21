
# Next.js Compiler

Next.js Compiler는 Rust로 작성되어 SWC를 사용하여 프로덕션용 JavaScript 코드를 변환하고 최소화합니다.

## SWC란?

SWC (Speedy Web Compiler)는 Rust 기반의 빠른 JavaScript/TypeScript 컴파일러입니다.

### 성능
- Babel보다 **17배 빠른** 컴파일
- Terser보다 **7배 빠른** 최소화

## 지원되는 기능

### JavaScript/TypeScript 변환
```javascript
// next.config.js
module.exports = {
  swcMinify: true, // 기본값 (Next.js 13+)
}
```

### Styled Components
```javascript
// next.config.js
module.exports = {
  compiler: {
    styledComponents: true,
  },
}
```

### Emotion
```javascript
// next.config.js
module.exports = {
  compiler: {
    emotion: true,
  },
}
```

### React 속성 제거
프로덕션에서 테스트 관련 속성 제거:

```javascript
// next.config.js
module.exports = {
  compiler: {
    reactRemoveProperties: true,
    // 또는 커스텀 패턴
    reactRemoveProperties: { properties: ['^data-test'] },
  },
}
```

### Console 제거
프로덕션에서 `console.*` 제거:

```javascript
// next.config.js
module.exports = {
  compiler: {
    removeConsole: true,
    // 또는 특정 메서드만 제거
    removeConsole: {
      exclude: ['error'],
    },
  },
}
```

### 레거시 데코레이터
```javascript
// next.config.js
module.exports = {
  compiler: {
    // TypeScript 레거시 데코레이터 활성화
    experimentalDecorators: true,
  },
}
```

### Import 경로 변환
```javascript
// next.config.js
module.exports = {
  compiler: {
    // lodash import를 최적화
    modularizeImports: {
      lodash: {
        transform: 'lodash/{{member}}',
      },
    },
  },
}
```

## 최소화 (Minification)

### JavaScript 최소화
기본적으로 활성화되어 있습니다:

```javascript
// next.config.js
module.exports = {
  swcMinify: true, // 기본값
}
```

### CSS 최소화
CSS도 자동으로 최소화됩니다.

## 디버깅

### 소스맵
프로덕션 소스맵 생성:

```javascript
// next.config.js
module.exports = {
  productionBrowserSourceMaps: true,
}
```

## Babel과의 비교

| 기능 | Babel | SWC |
|------|-------|-----|
| 컴파일 속도 | 느림 | 17배 빠름 |
| 최소화 속도 | 느림 (Terser) | 7배 빠름 |
| 설정 | 복잡 | 간단 |
| 플러그인 생태계 | 방대함 | 성장 중 |

## 마이그레이션

Babel에서 SWC로 마이그레이션:

1. `.babelrc` 제거 (있는 경우)
2. `next.config.js`에서 SWC 옵션 설정
3. 커스텀 Babel 플러그인이 있다면 SWC 대안 찾기

대부분의 경우 추가 설정 없이 자동으로 작동합니다.
