
# Lists Examples

Animate lists with gestures, staggers, and infinite loading.

## Staggered Entrance
Animating list items appearing one by one.

```jsx
import { motion } from "motion/react"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function StaggeredList() {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-2"
    >
      {[1, 2, 3, 4].map((index) => (
        <motion.li key={index} variants={item} className="p-4 bg-gray-100 rounded">
          Item {index}
        </motion.li>
      ))}
    </motion.ul>
  )
}
```

## Reorder List
Drag and drop reordering.

```jsx
import { Reorder } from "motion/react"
import { useState } from "react"

export function ReorderExample() {
  const [items, setItems] = useState([1, 2, 3, 4])

  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems} className="space-y-2">
      {items.map((item) => (
        <Reorder.Item key={item} value={item} className="p-4 bg-white border rounded shadow">
          Item {item}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  )
}
```

## References
- [To-do List](https://motion.dev/examples/react-todo-list)
- [Reorder](https://motion.dev/examples/react-reorder-items)
