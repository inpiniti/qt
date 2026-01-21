
# Cursor Examples

Dynamic and playful cursor effects.

## Follow Cursor (Simple)
An element that follows the mouse position excessively.

```jsx
import { motion, useMotionValue, useSpring } from "motion/react"
import { useEffect } from "react"

export function FollowCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }
    window.addEventListener("mousemove", moveCursor)
    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-black pointer-events-none"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    />
  )
}
```

## References
- [Floating Target](https://motion.dev/examples/react-cursor-floating-target)
- [Cursor Trail](https://motion.dev/examples/react-cursor-trail)
