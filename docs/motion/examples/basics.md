
# Basics Examples

Fundamental animation concepts and techniques.

## Animation & Transitions

### Simple Animation
Basic x/y/scale/rotate animation using props.

```jsx
import { motion } from "motion/react"

export function BasicAnimation() {
  return (
    <motion.div
      animate={{ x: 100, scale: 1.1 }}
      initial={{ x: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
    />
  )
}
```

### Keyframes
Animating through a sequence of values.

```jsx
import { motion } from "motion/react"

export function KeyframeAnimation() {
  return (
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}
    />
  )
}
```

## Gestures
Interactions like Hover and Tap.

```jsx
import { motion } from "motion/react"

export function GestureAnimation() {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      Click me
    </motion.button>
  )
}
```

## References
- [Keyframes](https://motion.dev/examples/react-keyframes)
- [Gestures](https://motion.dev/examples/react-gestures)
- [Enter Animation](https://motion.dev/examples/react-enter-animation)
