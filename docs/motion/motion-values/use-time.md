
# useTime

`useTime` returns a Motion Value that creates a continuous stream of time (in milliseconds) since it was created. It updates every animation frame.

## Usage

```jsx
import { useTime, useTransform, motion } from "motion/react"

function Component() {
  const time = useTime()
  
  // Rotate 360 degrees every 4000ms
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false })

  return <motion.div style={{ rotate }} />
}
```

Use `useTime` for perpetual animations like rotating loaders, clocks, or moving backgrounds.
