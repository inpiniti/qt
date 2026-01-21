
# draftMode

Allows you to switch between static rendering and dynamic rendering for Draft Mode (e.g. previewing content from a headless CMS).

## Usage

```jsx
import { draftMode } from 'next/headers'
 
export default function Page() {
  const { isEnabled } = draftMode()
 
  if (isEnabled) {
    return 'Draft Mode is on!'
  }
  return 'Draft Mode is off'
}
```
