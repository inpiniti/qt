
# Font Component

Optimizes fonts and removes layout shift.

## Usage
Using `next/font/google`.

```jsx
import { Inter } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] })
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
```

## Local Fonts
Using `next/font/local`.

```jsx
import localFont from 'next/font/local'
 
const myFont = localFont({ src: './my-font.woff2' })
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myFont.className}>
      <body>{children}</body>
    </html>
  )
}
```
