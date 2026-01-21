
# Drag Animation

## Usage
Add the `drag` prop to make an element draggable.

```jsx
<motion.div drag />
```

## Use Cases

### Axis Locking
Lock dragging to a specific axis (`x` or `y`).
```jsx
<motion.div drag="x" />
```

### Constraints
Constrain movement within a specific area or bounding box.

**Pixel Object:**
```jsx
<motion.div drag dragConstraints={{ left: 0, right: 300 }} />
```

**Ref-based:**
```jsx
const constraintsRef = useRef(null)

return (
  <motion.div ref={constraintsRef}>
    <motion.div drag dragConstraints={constraintsRef} />
  </motion.div>
)
```

### Drag Elastic
Control the "rubber band" effect when dragging outside constraints.
```jsx
<motion.div drag dragElastic={0.2} />
```
