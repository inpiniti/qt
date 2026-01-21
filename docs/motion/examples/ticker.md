
# Ticker Examples

Standout infinite scrolling animations.

## Basic Marquee
Infinite scrolling text using CSS transform in a loop.

```jsx
import { motion } from "motion/react"

export function Marquee({ children }) {
  return (
    <div className="overflow-hidden whitespace-nowrap flex">
      <motion.div
        className="flex gap-8"
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 10,
        }}
      >
        {/* Duplicate content to create seamless loop */}
        <span>{children}</span>
        <span>{children}</span>
      </motion.div>
    </div>
  )
}
```
*Note: For a perfect loop, ensure the content is duplicated enough times to cover the screen width, or use `x: "-100%"` on the first child while the second follows.*

## References
- [Ticker](https://motion.dev/examples/react-ticker)
