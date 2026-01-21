
# useInView

`useInView` is a tiny hook (< 1kb) that detects when an element enters the viewport.

## Usage

```jsx
import { useInView } from "motion/react"
import { useRef } from "react"

function Component() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <div ref={ref}>
      {isInView ? "Hello!" : "Bye!"}
    </div>
  )
}
```

## Options
Pass an options object as the second argument:

```jsx
const isInView = useInView(ref, {
  once: true,    // Only true once
  amount: 0.5,   // Amount of element visible (0-1)
  margin: "0px 0px -200px 0px" // CSS margin
})
```

- **once**: If `true`, `useInView` will return `true` once the element enters the viewport and then stop listening.
- **amount**: The amount of the element that must be visible to trigger.
