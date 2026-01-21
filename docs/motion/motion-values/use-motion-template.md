
# useMotionTemplate

`useMotionTemplate` allows you to combine multiple Motion Values into a single string motion value. This is useful for CSS properties like `transform`, `filter`, or `box-shadow` that take complex string values.

## Usage

It uses a tagged template literal syntax.

```jsx
import { useMotionTemplate, useMotionValue } from "motion/react"

function Component() {
  const x = useMotionValue(0)
  const shadowX = useMotionValue(0)
  
  // Create a new Motion Value that updates whenever x or shadowX updates
  const transform = useMotionTemplate`translateX(${x}px) drop-shadow(${shadowX}px 5px 5px #000)`

  return <motion.div style={{ transform }} />
}
```

## How it works
- It returns a new **Motion Value**.
- When any input Motion Value changes, the template string is re-evaluated and the returned Motion Value is updated.
- This happens outside the React render cycle for high performance.
