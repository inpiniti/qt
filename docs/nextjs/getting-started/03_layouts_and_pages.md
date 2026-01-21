
# Layouts and Pages

Next.js uses a file-system based router where folders are used to define routes.

- **Pages**: A `page.js` file is the entry point for the route.
- **Layouts**: A `layout.js` file is an UI that is shared between multiple routes.

```jsx
// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

// app/page.js
export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
```
