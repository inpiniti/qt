# CLI

shadcn CLI를 사용하여 프로젝트에 컴포넌트를 추가하고 관리합니다.

## init

새 프로젝트를 초기화하거나 기존 프로젝트에 shadcn/ui를 설정합니다.

```bash
npx shadcn@latest init
```

이 명령은 종속성을 설치하고, `cn` 유틸리티를 추가하며, 프로젝트의 CSS 변수를 구성합니다.

### 옵션

- `-c, --cwd <cwd>`: 작업 디렉토리 설정
- `-y, --yes`: 확인 프롬프트 건너뛰기
- `-d, --defaults`: 기본 설정 사용

## add

프로젝트에 컴포넌트와 종속성을 추가합니다.

```bash
npx shadcn@latest add [component]
```

예시:
```bash
npx shadcn@latest add button card
```

### 옵션

- `-y, --yes`: 확인 프롬프트 건너뛰기
- `-o, --overwrite`: 기존 파일 덮어쓰기
- `-a, --all`: 사용 가능한 모든 컴포넌트 추가
- `-p, --path <path>`: 컴포넌트를 추가할 경로 지정

## diff

업데이트가 필요한 컴포넌트의 변경 사항을 확인합니다.

```bash
npx shadcn@latest diff [component]
```

## list

레지스트리의 모든 아이템을 나열합니다.

```bash
npx shadcn@latest list
```

## search

레지스트리에서 아이템을 검색합니다.

```bash
npx shadcn@latest search [query]
```

## view

설치하기 전에 레지스트리 아이템을 확인합니다.

```bash
npx shadcn@latest view [item]
```

## 참고 자료

- [공식 CLI 문서](https://ui.shadcn.com/docs/cli)
