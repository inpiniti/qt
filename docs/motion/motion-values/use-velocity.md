
# useVelocity

`useVelocity` creates a Motion Value that tracks the velocity of another Motion Value.

## Usage

```jsx
import { useMotionValue, useVelocity, useMotionValueEvent } from "motion/react"

function Component() {
  const x = useMotionValue(0)
  const xVelocity = useVelocity(x)

  useMotionValueEvent(xVelocity, "change", (latestVelocity) => {
    console.log("Current velocity:", latestVelocity)
  })

  return <motion.div style={{ x }} animate={{ x: 100 }} />
}
```

## Common Use Case: Parallax/Skew
You can map velocity to skew or rotation to create dynamic effects based on how fast the user is scrolling or dragging.

```jsx
const velocity = useVelocity(x)
const opacity = useTransform(velocity, [-1000, 0, 1000], [0, 1, 0])
```
