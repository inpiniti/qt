
# Radix UI Integration

Radix UI primitives are unstyled and headless, making them perfect candidates for Motion animations.

## Setup
Radix uses the `asChild` prop pattern. Pass a `motion` component as the child to animate it.

```jsx
import * as Toast from "@radix-ui/react-toast"
import { motion } from "motion/react"

<Toast.Root asChild>
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  />
</Toast.Root>
```

## Exit Animations
For components like Dialogs or Tooltips, integrate with `AnimatePresence`. You typically need to `forceMount` the Radix portal content so Motion can handle the unmounting.

```jsx
<AnimatePresence>
  {isOpen && (
    <Dialog.Portal forceMount>
      <Dialog.Content asChild>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      </Dialog.Content>
    </Dialog.Portal>
  )}
</AnimatePresence>
```

Ensure you handle the open state (e.g. `open={isOpen}`) to coordinate with `AnimatePresence`.
