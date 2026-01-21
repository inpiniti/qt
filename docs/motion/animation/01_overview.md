
# React Animation Overview

## Animate with `<motion />`
The core of Motion is the `<motion />` component. It extends standard HTML/SVG elements with animation capabilities.

```jsx
import { motion } from "motion/react"

export const MyComponent = () => (
  <motion.div animate={{ opacity: 1 }} />
)
```

## Key Props

### `animate`
Defines the target state. When values change, the element animates to them.

```jsx
<motion.div animate={{ x: 100, opacity: 1 }} />
```

### `transition`
Configures *how* the animation happens (duration, ease, spring physics).

```jsx
<motion.div
  animate={{ x: 100 }}
  transition={{ ease: "easeOut", duration: 2 }}
/>
```

### `initial`
Sets the starting state. Set to `false` to disable the initial entry animation.

```jsx
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
```

### `exit`
Defines the state to animate to when the component is removed. Requires `<AnimatePresence>`.

```jsx
import { AnimatePresence, motion } from "motion/react"

export const MyComponent = ({ isVisible }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    )}
  </AnimatePresence>
)
```

## Keyframes
You can pass an array of values to `animate` to create a sequence.

```jsx
<motion.div animate={{ x: [0, 100, 0] }} />
```
