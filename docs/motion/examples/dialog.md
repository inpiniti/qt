
# Dialog Examples

Modals, overlays, accordions and more.

## Modal Dialog
Using `AnimatePresence` for entrance and exit animations.

```jsx
import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

export function ModalExample() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white p-6 rounded-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent close on content click
            >
              <h2>Hello!</h2>
              <p>This is a modal.</p>
              <button onClick={() => setIsOpen(false)}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
```

## Accordion
Smooth height animation using `layout`.

```jsx
import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

export function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left p-4">
        {title}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-gray-50">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
```

## References
- [Modal Dialog](https://motion.dev/examples/react-modal)
- [Accordion](https://motion.dev/examples/react-accordion)
