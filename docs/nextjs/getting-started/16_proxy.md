
# Proxy

*Note: This might refer to rewrite configuration or the experimental proxy features.*

## Rewrites
Rewrites allow you to map an incoming request path to a different destination path.

```js
// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.example.com/:path*',
      },
    ]
  },
}
```
