
# MDX

MDX allows you to use JSX in your markdown content. You can import components, such as interactive charts or alerts, and embed them within your content.

## Configuration
Use `@next/mdx` to handle MDX files.

```javascript
// next.config.js
const withMDX = require('@next/mdx')()
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}
 
module.exports = withMDX(nextConfig)
```

## Remote MDX
For content stored in a database or CMS, use `next-mdx-remote` to render MDX on the server.
