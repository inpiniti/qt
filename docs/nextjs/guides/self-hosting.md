
# Self-Hosting

Next.js can be self-hosted on any provider that supports Node.js.

## Build and Run
1. **Build**: `npm run build`
2. **Start**: `npm run start`

## Docker
You can containerize your application using Docker.
Next.js provides a "standalone" output mode that significantly reduces the size of the deployment by only including necessary files.

**next.config.js**:
```javascript
module.exports = {
  output: 'standalone',
}
```

This creates a `.next/standalone` folder which can be deployed independently.

## Node.js Server
You can also use a custom Node.js server (like Express or Fastify) if you need specific middleware, though this is generally not required with Next.js Middleware.
