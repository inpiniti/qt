
# useAnimationFrame

`useAnimationFrame` runs a callback once every animation frame. It is the React equivalent of `requestAnimationFrame`.

## Usage

```jsx
import { useAnimationFrame } from "motion/react"
import { useRef } from "react"

function Component() {
  const ref = useRef(null)

  useAnimationFrame((time, delta) => {
    // time: Total duration since callback was first called
    // delta: Duration since last frame
    ref.current.style.transform = `rotateY(${time}deg)`
  })

  return <div ref={ref} />
}
```

## Arguments
The callback receives two arguments:
1.  **time**: The total duration of time (in ms) since the callback was first called.
2.  **delta**: The duration of time (in ms) since the last animation frame.
