
# Motion Values Overview

## Why Motion Values?
Motion values track the state and velocity of an animating value. Unlike React state, updating a Motion Value **does not trigger a re-render**. This is critical for high-frequency updates like scroll or drag interactions.

## Basic Usage (`useMotionValue`)

```jsx
import { useMotionValue, motion } from "motion/react"

export const MyComponent = () => {
  const x = useMotionValue(0)

  return <motion.div style={{ x }} />
}
```

## API

- **`get()`**: Returns the current value.
- **`set(value)`**: Updates the value instantly.
- **`on(event, callback)`**: Subscribe to changes.

```jsx
x.set(100)
console.log(x.get()) // 100

// Subscribe to updates
useEffect(() => {
  const unsubscribe = x.on("change", (latest) => console.log(latest))
  return unsubscribe
}, [])
```
