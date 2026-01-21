
# useTransform

## Value Mapping
`useTransform` allows you to map a Motion Value from one range to another.

```jsx
const x = useMotionValue(0)
// Map x from [0, 100] to opacity [1, 0]
const opacity = useTransform(x, [0, 100], [1, 0])

return <motion.div style={{ x, opacity }} />
```

## Functional Transform
You can also use a function to transform the value. The function runs whenever the input Motion Value changes.

```jsx
const y = useTransform(() => x.get() * 2)
```

## Options
- **`clamp`**: If `true` (default), the output value will be clamped to the output range. If `false`, it will extrapolate indefinitely.

```jsx
// Rotates 360deg for every 100px scrolled, indefinitely
const rotate = useTransform(scrollY, [0, 100], [0, 360], { clamp: false })
```
