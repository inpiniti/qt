# Theming

CSS 변수 또는 유틸리티 클래스를 사용하여 테마를 설정할 수 있습니다.

## CSS 변수 (권장)

CSS 변수를 사용하면 스타일을 재정의하지 않고도 쉽게 테마를 변경할 수 있습니다.

```tsx
<div className="bg-background text-foreground" />
```

`components.json` 파일에서 `tailwind.cssVariables`를 `true`로 설정해야 합니다.

### 변수 규칙

저희는 색상에 대해 간단한 `background`와 `foreground` 규칙을 사용합니다.
- `background` 변수: 컴포넌트의 배경색
- `foreground` 변수: 텍스트 색상

```css
--primary: 222.2 47.4% 11.2%;
--primary-foreground: 210 40% 98%;
```

활용 예시:
```tsx
<div className="bg-primary text-primary-foreground">Hello</div>
```

### 변수 목록

다음은 기본적으로 제공되는 CSS 변수 목록입니다.

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
  --radius: 0.5rem;
}
 
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... 나머지 다크 모드 변수들 */
}
```

## 유틸리티 클래스

CSS 변수 대신 유틸리티 클래스를 사용할 수도 있습니다.

```tsx
<div className="bg-zinc-950 dark:bg-white" />
```

`components.json` 파일에서 `tailwind.cssVariables`를 `false`로 설정해야 합니다.

## 색상 추가

새로운 색상을 추가하려면 CSS 파일의 `:root`와 `.dark` 섹션에 변수를 추가하고, `tailwind.config.js`에 해당 변수를 등록하면 됩니다.

```css
:root {
  --warning: 38 92% 50%;
  --warning-foreground: 48 96% 89%;
}
 
.dark {
  --warning: 48 96% 89%;
  --warning-foreground: 38 92% 50%;
}
```

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        warning: "hsl(var(--warning))",
        "warning-foreground": "hsl(var(--warning-foreground))",
      },
    },
  },
}
```

이제 컴포넌트에서 `bg-warning`, `text-warning-foreground` 클래스를 사용할 수 있습니다.

## 참고 자료

- [공식 Theming 문서](https://ui.shadcn.com/docs/theming)
