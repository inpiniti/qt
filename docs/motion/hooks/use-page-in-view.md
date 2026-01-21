
# usePageInView

`usePageInView` returns `true` when the current page is the user's active tab. This is useful for pausing animations or videos when the user switches tabs to save resources.

## Usage

```jsx
import { usePageInView } from "motion/react"

function Component() {
  const isPageInView = usePageInView()

  useEffect(() => {
    if (isPageInView) {
      video.play()
    } else {
      video.pause()
    }
  }, [isPageInView])

  return <video />
}
```

## Default Behavior
Defaults to `true` on the server and initial client render.
