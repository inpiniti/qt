
# LazyMotion

`LazyMotion` allows you to reduce your initial bundle size by loading animation features synchronously or asynchronously.

By default, the `motion` component comes pre-bundled with all features (~34kb). `LazyMotion` combined with the `m` component can reduce this to < 5kb.

## Usage

```jsx
import { LazyMotion, domAnimation, m } from "motion/react"

function Component() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div animate={{ opacity: 1 }} />
    </LazyMotion>
  )
}
```

## Features
- **Sync Loading**: Load a subset of features (like `domAnimation`) synchronously to save size.
- **Async Loading**: Load features via `import()` to hydrate the site before loading animations.

```jsx
const loadFeatures = () => import("./features.js").then(res => res.default)

<LazyMotion features={loadFeatures} strict>
  <m.div />
</LazyMotion>
```

- **`strict`**: If `true`, throws an error if a standard `motion` component is used within `LazyMotion`, ensuring you stick to the optimized `m` components.
