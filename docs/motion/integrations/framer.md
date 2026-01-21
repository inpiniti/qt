
# Framer Integration

Motion powering Framer sites means you can easily move between the no-code prowess of Framer and the code flexibility of Motion.

## Import
When working in a Framer code override or component, import from `framer-motion` instead of `motion/react`.

```jsx
import { motion } from "framer-motion"
```

## Overrides
You can return a component from an override that fully supports the Motion API (`animate`, `whileHover`, etc.).

```jsx
export function withRotateAnimation(Component): ComponentType {
  return (props) => {
    return (
      <Component
        {...props}
        animate={{ rotate: 90 }}
        transition={{ duration: 2 }}
      />
    )
  }
}
```
