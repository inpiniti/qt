
# Figma Integration

## Figma Make
Figma Make is an AI code generator. You can use it to generate Motion code directly from your Figma designs.

1. Select your frame in Figma.
2. Use Figma Make to "Animate this using Motion".
3. It will generate React code with `motion` components.

## Imports
If the generated code is missing imports, simply add:

```jsx
import { motion } from "motion/react"
```
