
# Experimental Examples

Explorative UI concepts pushing what's possible with Motion.

## Apple Watch Grid (Concept)
Using `layout` to animate positions in a specialized grid.

```jsx
import { motion } from "motion/react"

// This requires complex math for the honeycomb layout, 
// basically you map an array of icon positions and animate them based on pan/drag.
export function HoneycombGrid() {
  return (
    <motion.div className="relative w-full h-full overflow-hidden" drag>
      {/* Grid items would go here with absolute positioning */}
      <motion.div className="w-12 h-12 bg-red-500 rounded-full" />
    </motion.div>
  )
}
```

## References
- [Apple Intelligence Ripple](https://motion.dev/examples/react-apple-intelligence)
- [Apple Watch Home Screen](https://motion.dev/examples/react-apple-watch-home-screen)
