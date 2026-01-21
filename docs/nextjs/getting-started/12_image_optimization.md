
# Image Optimization

The Next.js Image component extends the HTML `<img>` element with features for automatic image optimization.

## Usage

```jsx
import Image from 'next/image'

export default function Page() {
  return (
    <Image
      src="/profile.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  )
}
```

## Features
- **Size Optimization**: Automatically serve correctly sized images for each device.
- **Visual Stability**: Prevent Cumulative Layout Shift automatically.
- **Lazy Loading**: Images are only loaded when they enter the viewport.
