
# Navigation Examples

Unique navigational UI elements.

## Underlined Tabs
Moving underline animation.

```jsx
import { motion } from "motion/react"
import { useState } from "react"

const tabs = ["Home", "About", "Contact"]

export function TabsExample() {
  const [selectedTab, setSelectedTab] = useState(tabs[0])

  return (
    <div className="flex gap-4 border-b">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setSelectedTab(tab)}
          className="relative px-4 py-2"
        >
          {tab}
          {selectedTab === tab && (
            <motion.div
              layoutId="underline"
              className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500"
            />
          )}
        </button>
      ))}
    </div>
  )
}
```

## References
- [Smooth Tabs](https://motion.dev/examples/react-smooth-tabs)
- [Tab Select](https://motion.dev/examples/react-tab-select)
