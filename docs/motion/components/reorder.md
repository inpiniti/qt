
# Reorder

`Reorder` components provide a simple way to create drag-to-reorder lists.

## Usage

```jsx
import { Reorder } from "motion/react"
import { useState } from "react"

function List() {
  const [items, setItems] = useState([0, 1, 2, 3])

  return (
    <Reorder.Group values={items} onReorder={setItems}>
      {items.map(item => (
        <Reorder.Item key={item} value={item}>
          {item}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  )
}
```

## API

### `Reorder.Group`
- **`values`** (Required): The array of items to reorder.
- **`onReorder`** (Required): Callback function to update the state with the new order.
- **`axis`**: "y" (default) or "x".
- **`as`**: HTML element to render (default "ul").

### `Reorder.Item`
- **`value`** (Required): The value this item represents in the `values` array.
- **`as`**: HTML element to render (default "li").
- **`dragListener`**: Set to `false` to disable default drag handling (use with `useDragControls`).
