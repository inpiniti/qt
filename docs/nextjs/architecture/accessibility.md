
# 접근성 (Accessibility)

Next.js는 기본적으로 접근성을 고려한 기능을 제공합니다.

## 시맨틱 HTML

적절한 HTML 요소를 사용하세요:

```jsx
// ❌ 나쁜 예
<div onClick={handleClick}>클릭</div>

// ✅ 좋은 예
<button onClick={handleClick}>클릭</button>
```

## 라우팅 알림

Next.js는 자동으로 페이지 전환 시 스크린 리더에 알립니다.

## 포커스 관리

페이지 전환 후 포커스를 적절히 관리하세요:

```jsx
'use client'
 
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
 
export function FocusManager({ children }) {
  const pathname = usePathname()
  const mainRef = useRef<HTMLElement>(null)
 
  useEffect(() => {
    mainRef.current?.focus()
  }, [pathname])
 
  return (
    <main ref={mainRef} tabIndex={-1}>
      {children}
    </main>
  )
}
```

## 이미지 대체 텍스트

`next/image`를 사용할 때 항상 `alt` 속성을 제공하세요:

```jsx
import Image from 'next/image'
 
export default function Page() {
  return (
    <Image
      src="/profile.jpg"
      alt="사용자 프로필 사진"
      width={500}
      height={500}
    />
  )
}
```

## 폼 접근성

레이블과 입력 필드를 연결하세요:

```jsx
<form>
  <label htmlFor="email">이메일</label>
  <input id="email" type="email" name="email" />
</form>
```

## ARIA 속성

필요한 경우 ARIA 속성을 사용하세요:

```jsx
<button
  aria-label="메뉴 닫기"
  aria-expanded={isOpen}
  onClick={toggleMenu}
>
  <CloseIcon />
</button>
```

## 키보드 내비게이션

모든 인터랙티브 요소가 키보드로 접근 가능한지 확인하세요:

```jsx
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick()
    }
  }}
>
  클릭 가능한 div
</div>
```

## ESLint 플러그인

접근성 문제를 자동으로 감지:

```bash
npm install --save-dev eslint-plugin-jsx-a11y
```

```json
{
  "extends": ["next/core-web-vitals", "plugin:jsx-a11y/recommended"]
}
```

## 테스팅

접근성 테스팅 도구:
- **axe-core**: 자동화된 접근성 테스팅
- **jest-axe**: Jest와 통합
- **Lighthouse**: Chrome DevTools의 접근성 감사
