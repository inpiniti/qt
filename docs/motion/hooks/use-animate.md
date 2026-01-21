
# useAnimate

`useAnimate` provides a way to use the `animate` function scoped to the elements within your component. It returns a `scope` ref and an `animate` function.

## Usage

```jsx
import { useAnimate } from "motion/react"

function Component() {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    // This "li" selector will only select children of the element that receives `scope`
    animate("li", { opacity: 1 })
  }, [])

  return (
    <ul ref={scope}>
      <li />
    </ul>
  )
}
```

## Features
- **Scoped Animations**: The `animate` function is scoped to the component, preventing style clashes.
- **Cleanup**: Animations are automatically cleaned up when the component unmounts.
- **Selectors**: Supports CSS selectors (e.g., `"li"`, `".class"`) to target children.

## Scroll-Triggered Animations
Combine with `useInView` to trigger animations on scroll.

```jsx
const isInView = useInView(scope)

useEffect(() => {
  if (isInView) {
    animate(scope.current, { opacity: 1 })
  }
}, [isInView])
```
