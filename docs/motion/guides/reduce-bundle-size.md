
# Reduce Bundle Size

## `useAnimate` Mini
`useAnimate` comes in a "mini" version (~2.3kb) for pure WAAPI animations.

```jsx
import { useAnimate } from "motion/react-mini"
```

## `LazyMotion`
The standard `motion` component is ~34kb because it includes all features. To optimize:

1. Use the `m` component instead of `motion`.
2. Wrap your app (or section) in `LazyMotion`.
3. Load features dynamically.

```jsx
import { LazyMotion, m } from "motion/react"

const loadFeatures = () => import("./features.js").then(res => res.default)

function App() {
  return (
    <LazyMotion features={loadFeatures}>
      <m.div animate={{ opacity: 1 }} />
    </LazyMotion>
  )
}
```

## Feature Packages
- **`domAnimation`**: No drag, no layout animations. Smaller.
- **`domMax`**: Everything included.

Choose the one that fits your needs to keep your bundle light.
