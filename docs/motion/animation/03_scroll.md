
# Scroll Animation

## Scroll-triggered Animations (`whileInView`)
Animate elements when they enter the viewport.

```jsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }} // Only animate once
/>
```

## Scroll-linked Animations (`useScroll`)
Link values directly to the scroll progress using `useScroll` and `useTransform`.

```jsx
import { useScroll, motion } from "motion/react"

export const MyComponent = () => {
  const { scrollYProgress } = useScroll()
  
  return <motion.div style={{ scaleX: scrollYProgress }} />
}
```

### `useScroll` Returns
- `scrollX` / `scrollY`: Scroll offset in pixels.
- `scrollXProgress` / `scrollYProgress`: Scroll progress between 0 and 1.
