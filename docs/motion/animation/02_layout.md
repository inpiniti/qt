
# Layout Animation

## The `layout` Prop
To enable layout animations, simply add the `layout` prop to a motion component. 
Any layout change (width, height, position, flexbox changes) that happens as a result of a React render will be automatically animated.

```jsx
<motion.div layout />
```

This is powerful for animating changes like:
- Reordering lists
- Flexbox alignment changes (`justify-content`)
- Adding/removing items

## Shared Element Transitions (`layoutId`)
You can animate between two different components by assigning them the same `layoutId`.

```jsx
// Component A
<motion.div layoutId="underline" />

// Component B (rendered later or elsewhere)
<motion.div layoutId="underline" />
```

Motion will automatically morph Component A into Component B.
