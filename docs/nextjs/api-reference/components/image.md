
# Image Component

Extends the HTML `<img>` element with automatic image optimization features.

## Usage
Import `Image` from `next/image`.

```jsx
import Image from 'next/image'
import profilePic from './me.png'
 
export default function Page() {
  return (
    <Image
      src={profilePic}
      alt="Picture of the author"
      // width={500} automatically provided for static imports
      // height={500} automatically provided for static imports
      // blurDataURL="data:..." automatically provided for static imports
      placeholder="blur" // Optional blur-up while loading
    />
  )
}
```

## Remote Images
For remote images, you must provide `width` and `height`, and configure `remotePatterns` in `next.config.js`.

```jsx
<Image
  src="https://s3.amazonaws.com/my-bucket/profile.png"
  alt="Picture of the author"
  width={500}
  height={500}
/>
```
