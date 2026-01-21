
# Lazy Loading

Lazy loading helps improve initial loading performance by loading Client Components and libraries only when needed.

## next/dynamic
Using `next/dynamic` to lazy load a component.

```jsx
import dynamic from 'next/dynamic'
 
const ComponentA = dynamic(() => import('../components/A'))
const ComponentB = dynamic(() => import('../components/B'), {
  loading: () => <p>Loading...</p>,
})
 
export default function Page() {
  return (
    <div>
      <ComponentA />
      <ComponentB />
    </div>
  )
}
```

## React.lazy
For loading components inside Client Components, you can also use `React.lazy` and `Suspense`.
