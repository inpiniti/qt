
# Text Examples

Animate letters and numbers individually.

## Typewriter Effect
Revealing text character by character.

```jsx
import { motion } from "motion/react"

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
}

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export function Typewriter() {
  const text = "Hello World"
  return (
    <motion.h1
      variants={sentence}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, index) => (
        <motion.span key={`${char}-${index}`} variants={letter}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  )
}
```

## Moving Numbers
Animating value changes.

```jsx
import { motion, useSpring, useTransform } from "motion/react"
import { useEffect, useState } from "react"

export function Counter() {
  const [value, setValue] = useState(0)
  const springValue = useSpring(0, { bounce: 0 })
  const displayValue = useTransform(springValue, (current) => Math.round(current))

  useEffect(() => {
    springValue.set(value)
  }, [value, springValue])

  return (
    <div>
      <motion.span>{displayValue}</motion.span>
      <button onClick={() => setValue(value + 100)}>Add 100</button>
    </div>
  )
}
```

## References
- [Split Text](https://motion.dev/examples/react-split-text)
- [Number Counter](https://motion.dev/examples/react-number-counter)
