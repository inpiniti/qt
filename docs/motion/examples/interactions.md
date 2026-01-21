
# Interactions Examples

Stand-out UI widgets.

## Swipe Actions
Swipe list items to reveal actions.

```jsx
import { motion, useMotionValue, useTransform } from "motion/react"

export function SwipeItem() {
  const x = useMotionValue(0)
  const bg = useTransform(x, [-100, 0], ["#ef4444", "#ffffff"])

  return (
    <motion.div
      style={{ background: bg }}
      className="w-full relative overflow-hidden h-16 rounded mb-2"
    >
      <div className="absolute right-0 h-full w-24 flex items-center justify-center text-white">
        Delete
      </div>
      <motion.div
        drag="x"
        dragConstraints={{ left: -100, right: 0 }}
        style={{ x }}
        className="absolute w-full h-full bg-white flex items-center px-4 border"
      >
        Swipe me left
      </motion.div>
    </motion.div>
  )
}
```

## References
- [Swipe Actions](https://motion.dev/examples/react-swipe-actions)
- [Notifications Stack](https://motion.dev/examples/react-notifications-stack)
