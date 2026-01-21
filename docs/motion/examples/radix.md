
# Radix UI Integration Examples

Integrate Motion with Radix components (headless UI primitives).

## Animated Dialog
Example wrapping Radix Dialog content.

```jsx
import * as Dialog from "@radix-ui/react-dialog"
import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

export function RadixDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>Open Dialog</Dialog.Trigger>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 bg-black/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <Dialog.Title>Motion + Radix</Dialog.Title>
                <Dialog.Close>Close</Dialog.Close>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}
```

## References
- [Dialog](https://motion.dev/examples/react-radix-dialog)
- [Tabs](https://motion.dev/examples/react-radix-tabs)
