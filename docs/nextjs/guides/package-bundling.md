
# Package Bundling

Optimizing how external packages are bundled in Next.js.

## Server Components External Packages
Some packages shouldn't be bundled by webpack/Turbopack on the server (e.g., native modules). Use `serverExternalPackages`.

```javascript
// next.config.js
module.exports = {
  serverExternalPackages: ['my-native-package'],
}
```

## Transpile Packages
To bundle local packages or packages from a monorepo workspace.

```javascript
module.exports = {
  transpilePackages: ['@my-workspace/ui'],
}
```
