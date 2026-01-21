
# layout.js

Shared UI for a segment and its children.

## Props
- `children`: React component(s) to be wrapped by the layout.
- `params`: Dynamic route parameters object.

```jsx
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

## Root Layout
The top-level layout in the `app` directory. Must contain `html` and `body` tags.
