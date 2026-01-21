
# Base UI Integration

Base UI provides unstyled accessible components. You can animate them easily with Motion.

## Setup
Use the `render` prop (available on most Base UI components) to swap the underlying element for a `motion` component.

```jsx
import { Menu } from "@base-ui-components/react/menu"
import { motion } from "motion/react"

<Menu.Trigger
  render={
    <motion.button
      whilePress={{ scale: 0.95 }}
    />
  }
/>
```

## Exit Animations
For components that unmount (like Menus or Popovers), wrap them in `AnimatePresence`.

For **Portals** (like in `ContextMenu`), you need to:
1. Control the open state (`open`, `onOpenChange`).
2. Add `keepMounted` to the Portal.
3. Conditionally render the Portal inside `AnimatePresence`.

```jsx
<AnimatePresence>
  {open && (
    <ContextMenu.Portal keepMounted>
       <ContextMenu.Popup 
         render={<motion.div exit={{ opacity: 0 }} />} 
       />
    </ContextMenu.Portal>
  )}
</AnimatePresence>
```
