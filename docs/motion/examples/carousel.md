
# Carousel Examples

Beautiful, infinite scrolling carousels.

## Basic Carousel Structure
Concept of a carousel using `x` offset.

```jsx
import { motion } from "motion/react"
import { useState } from "react"

export function Carousel() {
  const [index, setIndex] = useState(0)

  return (
    <div className="overflow-hidden w-64 h-64 bg-gray-200">
      <motion.div
        className="flex"
        animate={{ x: -index * 256 }} // Width of slide
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {[0, 1, 2].map((i) => (
          <div key={i} className="min-w-[256px] h-64 flex items-center justify-center border">
            Slide {i}
          </div>
        ))}
      </motion.div>
      <button onClick={() => setIndex((i) => Math.max(0, i - 1))}>Prev</button>
      <button onClick={() => setIndex((i) => Math.min(2, i + 1))}>Next</button>
    </div>
  )
}
```

## References
- [Carousel](https://motion.dev/examples/react-carousel)
- [Carousel: Vertical](https://motion.dev/examples/vue-carousel-rtl)
