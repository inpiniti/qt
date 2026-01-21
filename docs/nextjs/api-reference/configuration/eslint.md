
# ESLint

Next.js는 통합 ESLint 경험을 제공합니다.

## 설정

### .eslintrc.json
```json
{
  "extends": "next/core-web-vitals"
}
```

## 사용 가능한 설정

### next/core-web-vitals
엄격한 Core Web Vitals 규칙 세트를 포함합니다.

```json
{
  "extends": "next/core-web-vitals"
}
```

### next
기본 Next.js ESLint 설정입니다.

```json
{
  "extends": "next"
}
```

## 커스텀 규칙 추가

```json
{
  "extends": "next/core-web-vitals",
  "rules": {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off"
  }
}
```

## 특정 디렉토리 무시

```json
{
  "extends": "next/core-web-vitals",
  "ignorePatterns": ["scripts/", "public/"]
}
```

## 명령어

```bash
# ESLint 실행
npm run lint

# 자동 수정
npm run lint -- --fix
```

## 플러그인

Next.js ESLint 플러그인은 다음을 포함합니다:
- `@next/next/no-html-link-for-pages`: `<a>` 대신 `<Link>` 사용 권장
- `@next/next/no-img-element`: `<img>` 대신 `next/image` 사용 권장
- `@next/next/no-sync-scripts`: 동기 스크립트 사용 방지
