
# Gesture Animation Overview

## Supported Gestures
Motion supports a wide range of gestures:

- **Hover**: Detects pointer hover.
- **Tap**: Detects press and release on the same component.
- **Pan**: Detects pointer movement (> 3px) after pressing down.
- **Drag**: Applies pointer movement to the component's axes.
- **Focus**: Detects when a component gains/loses focus.

## Animation Props
Each gesture has a shortcut `while` prop to animate to a specific state while the gesture is active.

```jsx
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  whileFocus={{ scale: 1.2 }}
/>
```

## Event Propagation
Motion's gesture events propagate up the React tree. You can stop propagation using standard `event.stopPropagation()`.
