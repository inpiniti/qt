
# useMotionValueEvent

`useMotionValueEvent` is a hook to subscribe to events on a `MotionValue`. It handles the subscription cleanup automatically.

## Usage

```jsx
import { useMotionValue, useMotionValueEvent } from "motion/react"

function Component() {
  const x = useMotionValue(0)

  useMotionValueEvent(x, "change", (latest) => {
    console.log("x changed to:", latest)
  })

  useMotionValueEvent(x, "animationStart", () => {
    console.log("animation started")
  })

  return <motion.div animate={{ x: 100 }} style={{ x }} />
}
```

## Events
- **`change`**: Fires every time the value updates.
- **`animationStart`**: Fires when an animation on this value starts.
- **`animationComplete`**: Fires when an animation on this value completes.
- **`animationCancel`**: Fires when an animation is cancelled.
