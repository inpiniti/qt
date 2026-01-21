---
name: motion-expert
description: Expert guidance on animations with Framer Motion (Motion for React).
---
# Motion Expert Instructions

## Core Principles
- **Declarative**: Use `animate`, `initial`, `exit` props.
- **Layout Animations**: Use `layout` prop for smooth structural changes.
- **AnimatePresence**: Use for exit animations of unmounting components.

## Reference
- See `docs/motion/00_getting_started.md`.
- Official Docs: [motion.dev](https://motion.dev)

## Common Usage
```jsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
/>
```
