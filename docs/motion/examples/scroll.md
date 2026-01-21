
# Scroll Examples

Scroll-linked and scroll-triggered animations.

## Progress Bar
A progress bar indicating how far you've scrolled the page.

```jsx
import { motion, useScroll, useSpring } from "motion/react"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 bg-blue-500 origin-left"
      style={{ scaleX }}
    />
  )
}
```

## Reveal on Scroll
Elements fading in as they enter the viewport.

```jsx
import { motion } from "motion/react"

export function RevealImg() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="w-full h-64 bg-gray-200"
    />
  )
}
```

## References
- [Scroll-triggered animations](https://motion.dev/examples/react-scroll-triggered)
- [Parallax](https://motion.dev/examples/react-parallax)
