
# LayoutGroup

`LayoutGroup` allow you to group multiple components that technically share a layout context but aren't direct siblings or don't share a common re-rendering parent.

## Usage

```jsx
import { LayoutGroup, motion } from "motion/react"

function Accordion() {
  return (
    <LayoutGroup>
      <ToggleContent />
      <ToggleContent />
    </LayoutGroup>
  )
}

function ToggleContent() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <motion.div layout onClick={() => setIsOpen(!isOpen)}>
      <motion.h2 layout>Header</motion.h2>
      {isOpen ? <Content /> : null}
    </motion.div>
  )
}
```

By wrapping in `LayoutGroup`, when one item expands, the others will animate their layout changes to make room, even if they are separate components.

## Namespace (`id`)
You can pass an `id` to `LayoutGroup` to namespace shared layout animations (like `layoutId`) so they don't conflict with other groups.
