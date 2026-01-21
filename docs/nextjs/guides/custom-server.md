
# Custom Server

You can use a custom server (e.g., Express, Fastify) with Next.js, but **it removes some performance optimizations** like Automatic Static Optimization.

## Usage
Typically used when you need to integrate into an existing server or need advanced routing not supported by Next.js.

```javascript
// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
 
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
 
app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
```
