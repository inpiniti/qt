
# create-next-app

새로운 Next.js 애플리케이션을 생성하는 CLI 도구입니다.

## 사용법

```bash
npx create-next-app@latest
```

## 옵션

### 대화형 모드
기본적으로 대화형 모드로 실행됩니다:

```bash
npx create-next-app@latest
```

질문:
- 프로젝트 이름
- TypeScript 사용 여부
- ESLint 사용 여부
- Tailwind CSS 사용 여부
- `src/` 디렉토리 사용 여부
- App Router 사용 여부
- import alias 커스터마이징

### 비대화형 모드
플래그를 사용하여 비대화형으로 실행:

```bash
npx create-next-app@latest my-app --typescript --tailwind --app --src-dir
```

## 플래그

- `--typescript`, `--ts`: TypeScript 프로젝트 초기화
- `--javascript`, `--js`: JavaScript 프로젝트 초기화
- `--tailwind`: Tailwind CSS 설정 포함
- `--eslint`: ESLint 설정 포함
- `--app`: App Router 사용
- `--src-dir`: `src/` 디렉토리 내부에 코드 초기화
- `--import-alias <alias>`: import alias 지정 (기본값: `@/*`)
- `--use-npm`: npm 사용
- `--use-pnpm`: pnpm 사용
- `--use-yarn`: Yarn 사용
- `--use-bun`: Bun 사용

## 예제

```bash
# TypeScript + Tailwind + App Router
npx create-next-app@latest my-app --typescript --tailwind --app

# JavaScript + src 디렉토리
npx create-next-app@latest my-app --javascript --src-dir

# 특정 패키지 매니저 사용
npx create-next-app@latest my-app --use-pnpm
```
