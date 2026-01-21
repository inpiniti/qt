
# useSpring

`useSpring` creates a Motion Value that animates to its target using a spring simulation.

## Usage

```jsx
import { useSpring, motion } from "motion/react"

function Component() {
  const x = useSpring(0, { stiffness: 1000, damping: 10 })

  return <motion.div style={{ x }} />
}
```

## Tracking other values
`useSpring` can also track another Motion Value. When the source value changes, the spring value will animate to the new value of the source.

```jsx
const scrollY = useScroll().scrollY
const y = useSpring(scrollY, { damping: 20 })
```
