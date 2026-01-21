
# TypeScript

Next.js는 TypeScript를 기본적으로 지원합니다.

## 설정

### tsconfig.json
Next.js는 자동으로 `tsconfig.json`을 생성합니다.

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## 타입 정의

### Page Props
```typescript
export default function Page({ params, searchParams }: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return <h1>My Page</h1>
}
```

### Layout Props
```typescript
export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug: string }
}) {
  return <section>{children}</section>
}
```

### API Route
```typescript
import { NextRequest, NextResponse } from 'next/server'
 
export async function GET(request: NextRequest) {
  return NextResponse.json({ data: 'hello' })
}
```

## 타입 체크
```bash
# 타입 체크 실행
npx tsc --noEmit
```
