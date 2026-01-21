
# Deploying

Next.js can be deployed to any hosting provider that supports Node.js.

## Vercel
The easiest way to deploy Next.js is to use the Vercel Platform from the creators of Next.js.

## Self-Hosting
You can self-host Next.js on any server with Node.js.

```bash
npm run build
npm run start
```

## Static Export
You can export your app as static HTML files.

```js
// next.config.js
const nextConfig = {
  output: 'export',
}
```
