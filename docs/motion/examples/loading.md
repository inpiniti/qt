
# Loading Examples

Fun loading visualizations.

## Jumping Dots
Simple looping animation.

```jsx
import { motion } from "motion/react"

const dotVariants = {
  initial: { y: 0 },
  animate: { y: -10 }
}

const transition = {
  duration: 0.5,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeInOut"
}

export function JumpingDots() {
  return (
    <div className="flex gap-2">
      <motion.div
        variants={dotVariants}
        initial="initial"
        animate="animate"
        transition={{ ...transition, delay: 0 }}
        className="w-3 h-3 bg-black rounded-full"
      />
      <motion.div
        variants={dotVariants}
        initial="initial"
        animate="animate"
        transition={{ ...transition, delay: 0.1 }}
        className="w-3 h-3 bg-black rounded-full"
      />
      <motion.div
        variants={dotVariants}
        initial="initial"
        animate="animate"
        transition={{ ...transition, delay: 0.2 }}
        className="w-3 h-3 bg-black rounded-full"
      />
    </div>
  )
}
```

## References
- [Loading Ripple](https://motion.dev/examples/react-loading-ripple)
- [Circle Spinner](https://motion.dev/examples/react-loading-circle-spinner)
