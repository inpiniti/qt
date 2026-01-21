
# AnimateActivity

`AnimateActivity` allows you to orchestrate enter and exit animations with React's `Activity` component. It handles exit animations before an element is hidden, interacting with `display: none` rather than unmounting.

## Install
Requires `motion-plus` which is a premium feature or requires a private token.

```bash
npm install "https://api.motion.dev/registry.tgz?package=motion-plus&version=2.0.2&token=YOUR_AUTH_TOKEN"
```

## Usage

```jsx
import { AnimateActivity } from "motion-plus/animate-activity"

function Component({ isVisible }) {
  return (
    <AnimateActivity mode={isVisible ? "visible" : "hidden"}>
      <Tab />
    </AnimateActivity>
  )
}

function Tab() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
    />
  )
}
```

When `mode` switches to "hidden", the child component performs its `exit` animation. Once complete, `AnimateActivity` applies `display: none`.
