
# Base UI Integration Examples

Integrate Motion with Base UI components.

## Animated Select
Concept key: Use `render` prop or `slots` to inject Motion components.

```jsx
// Conceptual example (API may vary by Base UI version)
import { Select } from "@base-ui-components/react/select"
import { motion } from "motion/react"

export function AnimatedSelect() {
  return (
    <Select.Root>
      <Select.Trigger />
      <Select.Popup
        render={(props) => (
           <motion.div
             {...props}
             initial={{ opacity: 0, y: -10 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -10 }}
           >
             <Select.Options />
           </motion.div>
        )}
      />
    </Select.Root>
  )
}
```

## References
- [Dropdown Menu](https://motion.dev/examples/react-base-menu)
- [Tabs](https://motion.dev/examples/react-base-tabs)
