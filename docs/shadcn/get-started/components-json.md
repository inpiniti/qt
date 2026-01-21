# components.json

프로젝트의 shadcn/ui 설정 파일입니다.

## 개요

`components.json` 파일은 프로젝트의 설정을 보관합니다. 이 파일을 사용하여 프로젝트가 어떻게 설정되어 있는지 이해하고 프로젝트에 맞게 커스터마이징된 컴포넌트를 생성합니다.

**중요**: CLI를 사용하여 프로젝트에 컴포넌트를 추가하는 경우에만 필요합니다. 복사 및 붙여넣기 방법을 사용하는 경우 이 파일이 필요하지 않습니다.

## 파일 생성

다음 명령을 실행하여 프로젝트에 `components.json` 파일을 생성할 수 있습니다:

```bash
pnpm dlx shadcn@latest init
```

이 명령은 대화형 프롬프트를 통해 프로젝트를 설정합니다.

## 설정 스키마

JSON 스키마는 [여기](https://ui.shadcn.com/schema.json)에서 확인할 수 있습니다.

```json
{
  "$schema": "https://ui.shadcn.com/schema.json"
}
```

## 설정 옵션

### $schema

JSON 스키마 URL을 지정합니다.

```json
{
  "$schema": "https://ui.shadcn.com/schema.json"
}
```

### style

컴포넌트의 스타일을 지정합니다. **초기화 후에는 변경할 수 없습니다.**

```json
{
  "style": "new-york"
}
```

**사용 가능한 스타일:**
- `new-york` - 권장 스타일 (기본 스타일은 deprecated)
- `default` - 더 이상 사용되지 않음

### rsc

React Server Components를 사용하는지 여부를 지정합니다.

```json
{
  "rsc": true
}
```

### tsx

TypeScript를 사용하는지 여부를 지정합니다.

```json
{
  "tsx": true
}
```

### tailwind

Tailwind CSS가 프로젝트에서 어떻게 설정되어 있는지 CLI가 이해하도록 돕는 설정입니다.

#### tailwind.config

Tailwind 설정 파일의 경로입니다.

```json
{
  "tailwind": {
    "config": "tailwind.config.js"
  }
}
```

#### tailwind.css

CSS 파일의 경로입니다.

```json
{
  "tailwind": {
    "css": "app/globals.css"
  }
}
```

#### tailwind.baseColor

기본 색상을 지정합니다.

```json
{
  "tailwind": {
    "baseColor": "neutral"
  }
}
```

**사용 가능한 기본 색상:**
- `neutral`
- `slate`
- `gray`
- `zinc`
- `stone`

#### tailwind.cssVariables

테마에 CSS 변수를 사용할지 여부를 지정합니다.

```json
{
  "tailwind": {
    "cssVariables": true
  }
}
```

- `true` - CSS 변수 사용 (권장)
- `false` - Tailwind 유틸리티 클래스 사용

#### tailwind.prefix

Tailwind 유틸리티 클래스의 접두사를 지정합니다.

```json
{
  "tailwind": {
    "prefix": "tw-"
  }
}
```

### aliases

프로젝트의 경로 별칭을 지정합니다.

```json
{
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

#### 주요 별칭

- **`aliases.utils`** - 유틸리티 함수의 경로
- **`aliases.components`** - 컴포넌트의 경로
- **`aliases.ui`** - UI 컴포넌트의 경로
- **`aliases.lib`** - 라이브러리 파일의 경로
- **`aliases.hooks`** - React hooks의 경로

### iconLibrary

사용할 아이콘 라이브러리를 지정합니다.

```json
{
  "iconLibrary": "lucide"
}
```

**사용 가능한 아이콘 라이브러리:**
- `lucide` - Lucide React (권장)
- 기타 아이콘 라이브러리도 지원

### registries

사용자 정의 컴포넌트 레지스트리를 지정합니다.

```json
{
  "registries": [
    {
      "name": "my-registry",
      "url": "https://my-registry.com"
    }
  ]
}
```

## 전체 설정 예제

### CSS 변수 사용 (권장)

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

### 유틸리티 클래스 사용

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": false,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

## 설정 업데이트

설정을 업데이트하려면 `components.json` 파일을 직접 편집하면 됩니다. 일부 설정(예: `style`)은 초기화 후 변경할 수 없으므로 주의하세요.

## 다음 단계

- [테마 설정](./theming.md)
- [CLI 사용법](./cli.md)
- [컴포넌트 추가](../components/)

## 참고 자료

- [공식 components.json 문서](https://ui.shadcn.com/docs/components-json)
- [JSON 스키마](https://ui.shadcn.com/schema.json)
