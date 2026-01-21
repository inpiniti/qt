
# The `<motion />` Component

## Optimized for Performance
Motion components animate values outside of the React render cycle to ensure high performance (60/120fps). 
Using `MotionValues` allows you to update visual state without triggering React re-renders.

```jsx
const x = useMotionValue(0)
// Updates the DOM directly, bypassing React render
x.set(100) 

return <motion.div style={{ x }} />
```

## Server-Side Rendering (SSR)
Motion components are fully compatible with SSR. The standard `initial` and `animate` props function correctly during server rendering.

```jsx
// Server outputs: style="transform: translateX(100px)"
<motion.div initial={false} animate={{ x: 100 }} />
```

## Custom Components
You can convert any React component into a Motion component using `motion.create()`.
**Important**: The custom component must forward its `ref` to the DOM element you want to animate.

```jsx
const MyComponent = React.forwardRef((props, ref) => (
  <div ref={ref} {...props} />
))

const MotionComponent = motion.create(MyComponent)
```
