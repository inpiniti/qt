
# useReducedMotion

`useReducedMotion` detects if the user has enabled strict "Reduced Motion" settings on their device associated with accessibility or motion sickness.

## Usage

```jsx
import { useReducedMotion } from "motion/react"

function Component() {
  const shouldReduceMotion = useReducedMotion()

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: shouldReduceMotion ? 0 : "-100%" }
  }

  return <motion.div animate={isOpen ? "open" : "closed"} variants={variants} />
}
```

## Accessibility
Use this hook to provide alternative, simpler animations (like opacity fades instead of large movements) for users who prefer reduced motion.
