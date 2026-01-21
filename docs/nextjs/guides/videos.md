
# Videos

Best practices for using video in Next.js.

## Hosting
- **Self-hosted**: Store video files in `public/` (for small videos).
- **External**: Use services like YouTube, Vimeo, Mux, or Cloudinary (recommended for performance).

## `<video>` Tag
Standard HTML5 tag works as expected.

```jsx
<video width="320" height="240" controls preload="none">
  <source src="/path/to/video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

## `next-video`
For easier video integration, you can use the community package `next-video` which helps with hosting and optimization.
