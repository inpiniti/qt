
# AnimatePresence

## Exit Animations
`AnimatePresence` allows you to animate components when they are removed from the React tree. The direct children of `AnimatePresence` must have a unique `key`.

```jsx
<AnimatePresence>
  {isVisible && (
    <motion.div
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  )}
</AnimatePresence>
```

## Modes
The `mode` prop controls how entering and exiting components interact.

### `mode="sync"` (Default)
Children animate in and out simultaneously.

### `mode="wait"`
The entering child will wait until the exiting child has finished animating out. Excellent for page transitions.

```jsx
<AnimatePresence mode="wait">
  <motion.div key={router.route} ... />
</AnimatePresence>
```

### `mode="popLayout"`
Exiting children are taken out of the layout flow (using `position: absolute`), allowing entering children to immediately occupy the space.
