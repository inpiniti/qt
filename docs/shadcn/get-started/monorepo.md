# Monorepo

shadcn/ui는 Monorepo 환경을 지원합니다.

## 시작하기

Monorepo 프로젝트를 생성하려면 `init` 명령을 실행할 때 **Next.js (Monorepo)** 옵션을 선택하세요.

```bash
npx shadcn@latest init
```

이 옵션은 Turborepo를 빌드 시스템으로 사용하여 `web`과 `ui` 두 개의 작업 공간을 가진 프로젝트를 생성합니다.

- **`apps/web`**: Next.js 애플리케이션
- **`packages/ui`**: 공유 UI 컴포넌트 패키지

## 파일 구조

```
apps
  └── web
      ├── app
      │   └── page.tsx
      ├── components
      │   └── login-form.tsx  <-- 앱 전용 컴포넌트
      ├── components.json
      └── package.json
packages
  └── ui
      ├── src
      │   ├── components
      │   │   └── button.tsx  <-- 공유 UI 컴포넌트
      │   ├── hooks
      │   ├── lib
      │   │   └── utils.ts
      │   └── styles
      │       └── globals.css
      ├── components.json
      └── package.json
package.json
turbo.json
```

## 컴포넌트 추가

컴포넌트를 추가할 때는 앱의 경로에서 `add` 명령을 실행하면 CLI가 자동으로 `packages/ui`에 컴포넌트를 설치하고 필요한 경우 의존성을 업데이트합니다.

```bash
cd apps/web
npx shadcn@latest add button
```

위 명령은 `button` 컴포넌트를 `packages/ui/src/components/button.tsx`에 설치합니다.

## 컴포넌트 사용

`@workspace/ui` 패키지에서 컴포넌트를 임포트하여 사용합니다.

```tsx
import { Button } from "@workspace/ui/components/button"
```

## 참고 자료

- [공식 Monorepo 문서](https://ui.shadcn.com/docs/monorepo)
