# Dark Mode

사이트에 다크 모드를 추가하는 방법입니다.

## Next.js

Next.js에서 다크 모드를 구현하려면 `next-themes` 패키지를 사용하는 것이 좋습니다.

### 1. next-themes 설치

```bash
pnpm add next-themes
```

### 2. Theme Provider 생성

`components/theme-provider.tsx` 파일을 생성합니다:

```tsx
"use client"
 
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
 
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
```

### 3. Root Layout 감싸기

`app/layout.tsx` 파일에 `ThemeProvider`를 추가합니다. `html` 태그에 `suppressHydrationWarning` prop을 추가하여 hydration mismatch 경고를 방지하세요.

```tsx
import { ThemeProvider } from "@/components/theme-provider"
 
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
```

### 4. 모드 토글 버튼 추가

다크/라이트 모드를 전환하는 토글 버튼 컴포넌트 예시입니다.

```tsx
"use client"
 
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
 
export function ModeToggle() {
  const { setTheme } = useTheme()
 
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

## 다른 프레임워크

- [Vite](https://ui.shadcn.com/docs/dark-mode/vite)
- [Astro](https://ui.shadcn.com/docs/dark-mode/astro)
- [Remix](https://ui.shadcn.com/docs/dark-mode/remix)

## 참고 자료

- [공식 Dark Mode 문서](https://ui.shadcn.com/docs/dark-mode)
- [Next.js Dark Mode 가이드](https://ui.shadcn.com/docs/dark-mode/next)
