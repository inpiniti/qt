
# Buttons Examples

Interesting and dynamic button effects.

## Scale & Tap Effect
A button that creates a satisfying click feel.

```jsx
import { motion } from "motion/react"

export function ScaleButton() {
  return (
    <motion.button
      className="px-4 py-2 bg-blue-500 text-white rounded"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      Press Me
    </motion.button>
  )
}
```

## Visual Feedback (Variants)
Changing color and state on hover.

```jsx
import { motion } from "motion/react"

const buttonVariants = {
  idle: { scale: 1, backgroundColor: "#3b82f6" },
  hover: { scale: 1.1, backgroundColor: "#2563eb" },
  tap: { scale: 0.9, backgroundColor: "#1d4ed8" }
}

export function VariantButton() {
  return (
    <motion.button
      variants={buttonVariants}
      initial="idle"
      whileHover="hover"
      whileTap="tap"
      className="px-4 py-2 text-white rounded"
    >
      Click Me
    </motion.button>
  )
}
```

## References
- [Material Design: Ripple](https://motion.dev/examples/react-material-design-ripple)
- [Hold to Confirm](https://motion.dev/examples/react-hold-to-confirm)
