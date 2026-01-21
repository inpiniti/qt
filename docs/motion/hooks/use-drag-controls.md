
# useDragControls

`useDragControls` allows you to manually start drag gestures from any pointer event, not just on the draggable element itself.

## Usage

```jsx
import { useDragControls, motion } from "motion/react"

function Component() {
  const controls = useDragControls()

  function startDrag(event) {
    controls.start(event, { snapToCursor: true })
  }

  return (
    <>
      <div onPointerDown={startDrag} />
      <motion.div drag dragControls={controls} />
    </>
  )
}
```

## Methods
- `start(event, options)`: Starts the drag gesture.
    - `snapToCursor`: If `true`, the element snaps its center to the cursor.
- `stop()`: Manually stops the drag.

## Touch Support
To support touch screens, ensure the triggering element has `touch-action: none`.

```jsx
<div style={{ touchAction: "none" }} onPointerDown={startDrag} />
```
