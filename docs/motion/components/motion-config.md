
# MotionConfig

`MotionConfig` allows you to set configuration options for all child motion components, such as global transitions.

## Usage

```jsx
import { MotionConfig, motion } from "motion/react"

export const MyComponent = () => (
  <MotionConfig 
    transition={{ duration: 0.5 }} 
    reducedMotion="user"
  >
    <motion.div animate={{ opacity: 1 }} />
    <motion.div animate={{ x: 100 }} />
  </MotionConfig>
)
```

## Props
- **`transition`**: Defines a fallback transition for all children.
- **`reducedMotion`**:
    - `"user"` (default): Reference the user's device setting.
    - `"always"`: Force reduced motion (disable transforms/layout animations).
    - `"never"`: Ignore user preference.
- **`nonce`**: Pass a CSP nonce to generated style blocks.
