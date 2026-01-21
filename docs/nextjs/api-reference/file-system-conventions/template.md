
# template.js

Similar to layouts, but creates a new instance for each of its children on navigation (does not persist state).

```jsx
export default function Template({ children }) {
  return <div>{children}</div>
}
```
