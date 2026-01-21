
# 지원되는 브라우저

Next.js는 설정 없이 모던 브라우저를 지원합니다.

## 지원 브라우저

### 프로덕션 빌드
- **Chrome** 64+
- **Edge** 79+
- **Firefox** 67+
- **Opera** 51+
- **Safari** 12+

### 개발 모드
최신 버전의 모던 브라우저를 권장합니다.

## Browserslist

Next.js는 다음 Browserslist 설정을 사용합니다:

```json
{
  "browserslist": [
    "chrome 64",
    "edge 79",
    "firefox 67",
    "opera 51",
    "safari 12"
  ]
}
```

## 폴리필

### 자동 폴리필
Next.js는 자동으로 다음을 폴리필합니다:
- **fetch()**: 모든 환경에서 사용 가능
- **URL**: URL API
- **Object.assign**: ES6 메서드

### 커스텀 폴리필
추가 폴리필이 필요한 경우 `app/layout.js`에서 import:

```javascript
// app/layout.js
import 'core-js/stable'
import 'regenerator-runtime/runtime'

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
```

## Internet Explorer 11

Next.js는 더 이상 IE11을 지원하지 않습니다.
- Next.js 12 이하 버전에서는 IE11 지원
- Next.js 13+에서는 IE11 지원 중단

## JavaScript 언어 기능

Next.js는 다음 ES6+ 기능을 지원합니다:
- **Async/Await** (ES2017)
- **Object Rest/Spread** (ES2018)
- **Dynamic import()** (ES2020)
- **Optional Chaining** (ES2020)
- **Nullish Coalescing** (ES2020)
- **Class Fields** (ES2022)

## TypeScript

TypeScript는 모든 지원 브라우저에서 작동합니다.

## CSS

### 모던 CSS 기능
- **CSS Grid**
- **CSS Flexbox**
- **CSS Custom Properties** (CSS Variables)
- **CSS Modules**

### PostCSS
Next.js는 자동으로 PostCSS를 사용하여 CSS를 변환합니다.

## 브라우저 타겟 변경

커스텀 브라우저 타겟이 필요한 경우:

```javascript
// next.config.js
module.exports = {
  // 레거시 브라우저 지원 (권장하지 않음)
  experimental: {
    browsersListForSwc: true,
  },
}
```

그리고 `package.json`에 추가:

```json
{
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead"
  ]
}
```

## 모바일 브라우저

모바일 브라우저도 동일한 버전 요구사항을 따릅니다:
- **iOS Safari** 12+
- **Chrome for Android** 64+
- **Samsung Internet** 9+
