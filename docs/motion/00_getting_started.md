
# Motion for React (Framer Motion)

## Installation
```bash
npm install motion
```

## Basic Usage
```jsx
import { motion } from "motion/react"

export const MyComponent = () => (
    <motion.div
        animate={{ x: 100 }}
        transition={{ duration: 0.5 }}
    />
)
```

## Key Features
- **Enter Animation**: `initial={false}` or specific values.
- **Gestures**: `whileHover`, `whileTap`.
- **Scroll**: `whileInView`, `useScroll`.
- **Layout**: `layout` prop for auto-layout animations.
- **Exit**: Wrap in `<AnimatePresence>` and use `exit` prop.

## Resources
- [Official Docs](https://motion.dev/docs/react)
- [Deep Dive](https://motion.dev/docs/react#why-motion-for-react)
