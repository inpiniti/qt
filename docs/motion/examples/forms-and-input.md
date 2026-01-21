
# Forms & Input Examples

Interesting and dynamic input effects.

## Toggle Switch
A common UI pattern animated with layout transitions.

```jsx
import { motion } from "motion/react"
import { useState } from "react"

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false)

  return (
    <div
      className={`w-16 h-8 rounded-full flex items-center p-1 cursor-pointer ${
        isOn ? "bg-green-500 justify-end" : "bg-gray-300 justify-start"
      }`}
      onClick={() => setIsOn(!isOn)}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className="w-6 h-6 bg-white rounded-full shadow-md"
      />
    </div>
  )
}
```

## References
- [iOS Slider](https://motion.dev/examples/react-ios-slider)
- [Color Picker](https://motion.dev/examples/react-color-picker)
