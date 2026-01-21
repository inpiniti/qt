# Installation

프로젝트에 shadcn/ui를 설치하고 구성하는 방법을 안내합니다.

## Quick Start

다음 명령을 실행하여 shadcn/ui로 새 프로젝트를 생성합니다:

```bash
pnpm dlx shadcn@latest create
```

또는

```bash
npx shadcn@latest create
```

이 명령은 선호하는 프레임워크, 아이콘 라이브러리 및 테마로 shadcn/ui를 사용하여 새 프로젝트를 만드는 과정을 안내합니다.

## 프레임워크 선택

shadcn/ui는 모든 React 프레임워크와 함께 작동하도록 구축되었습니다. 다음 프레임워크를 지원합니다:

### 지원 프레임워크

- **Next.js** - 권장 프레임워크
- **Vite** - 빠른 개발 환경
- **Laravel** - PHP 프레임워크와 통합
- **React Router** - 클라이언트 사이드 라우팅
- **Astro** - 콘텐츠 중심 사이트
- **TanStack Start** - 풀스택 React 프레임워크
- **TanStack Router** - 타입 세이프 라우팅
- **Manual** - 수동 설정

## 기존 프로젝트에 추가

기존 프로젝트에 shadcn/ui를 추가하려면:

### 1. CLI 초기화

```bash
pnpm dlx shadcn@latest init
```

이 명령은 프로젝트를 구성하고 `components.json` 파일을 생성합니다.

### 2. 컴포넌트 추가

```bash
pnpm dlx shadcn@latest add button
```

특정 컴포넌트를 프로젝트에 추가합니다.

### 3. 컴포넌트 사용

```tsx
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
```

## 필수 종속성

shadcn/ui는 다음 종속성이 필요합니다:

### 1. Tailwind CSS

```bash
pnpm add -D tailwindcss postcss autoprefixer
pnpm dlx tailwindcss init -p
```

### 2. 기타 종속성

```bash
pnpm add class-variance-authority clsx tailwind-merge
pnpm add lucide-react  # 아이콘 라이브러리 (선택사항)
```

## 프로젝트 구조

shadcn/ui를 설치한 후 프로젝트 구조는 다음과 같습니다:

```
.
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   └── ...
├── lib/
│   └── utils.ts
├── components.json
├── tailwind.config.js
└── package.json
```

### 주요 디렉토리

- **`components/ui/`** - shadcn/ui 컴포넌트가 저장되는 위치
- **`lib/`** - 유틸리티 함수 (예: `cn()` 헬퍼)
- **`components.json`** - shadcn/ui 설정 파일

## 설정 파일

### tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
}
```

### globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    /* ... 기타 CSS 변수 */
  }

  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    /* ... 기타 CSS 변수 */
  }
}
```

## 다음 단계

- [components.json 설정](./components-json.md)
- [테마 커스터마이징](./theming.md)
- [다크 모드 설정](./dark-mode.md)
- [CLI 사용법](./cli.md)

## 참고 자료

- [공식 설치 가이드](https://ui.shadcn.com/docs/installation)
- [Next.js 설치](https://ui.shadcn.com/docs/installation/next)
- [Vite 설치](https://ui.shadcn.com/docs/installation/vite)
