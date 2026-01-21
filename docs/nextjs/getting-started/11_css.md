
# CSS

Next.js supports multiple ways to add styles to your application.

## CSS Modules
Next.js has built-in support for CSS Modules using the `.module.css` extension.

```jsx
import styles from './styles.module.css'

export default function Dashboard() {
  return <div className={styles.dashboard}>Dashboard</div>
}
```

## Global CSS
You can import global CSS files in your layout.

```jsx
// app/layout.js
import './globals.css'
```

## Tailwind CSS
Next.js has built-in support for Tailwind CSS.
