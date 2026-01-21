
# Accessibility

## Automatic Control
You can set a site-wide policy for reduced motion using `MotionConfig`.

```jsx
import { MotionConfig } from "motion/react"

export function App({ children }) {
  // "user" respects system settings
  return (
    <MotionConfig reducedMotion="user">
       {children}
    </MotionConfig>
  )
}
```

When set to `"user"`, if the user has "Reduce Motion" enabled, Motion will strictly disable transforms and layout animations, but keep opacity changes.

## Manual Control
For more fine-grained control, use the `useReducedMotion` hook.

```jsx
const shouldReduce = useReducedMotion()

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: shouldReduce ? 0 : "-100%" }
}
```

## Best Practices
- **Replace transform with opacity**: Avoid large movements.
- **Disable auto-playing video**: Use `useReducedMotion` to toggle `autoplay`.
- **Disable parallax**: Flatten scroll-linked effects.
