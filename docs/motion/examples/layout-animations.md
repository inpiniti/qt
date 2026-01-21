
# Layout Animation Examples

Stunning animations made with Motion's layout animations.

## Shared Layout Animation
Elements morphing from one place to another using `layoutId`.

```jsx
import { motion } from "motion/react"
import { useState } from "react"

const items = ["Apple", "Banana", "Orange"]

export function SegmentedControl() {
  const [selected, setSelected] = useState(items[0])

  return (
    <div className="flex bg-gray-100 p-1 rounded">
      {items.map((item) => (
        <button
          key={item}
          onClick={() => setSelected(item)}
          className="relative px-4 py-2 text-sm z-10"
        >
          {selected === item && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 bg-white shadow rounded"
              style={{ zIndex: -1 }}
            />
          )}
          {item}
        </button>
      ))}
    </div>
  )
}
```

## References
- [iOS App Store](https://motion.dev/examples/react-app-store)
- [Notifications List](https://motion.dev/examples/react-notifications-list)
