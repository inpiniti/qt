
# Memory Usage

Optimizing memory usage in Next.js applications, especially during build and in production.

## Build Optimization
- **Disable Source Maps**: `productionBrowserSourceMaps: false` (default) saves memory.
- **Type Checking**: Run type checking separately in CI/CD to offload memory usage from the build process.
- **Modularize Imports**: Use `optimizePackageImports` in `next.config.js` for large libraries.

## Runtime Optimization
- **Image Optimization**: Excessive `next/image` usage with external loaders can consume memory; ensure proper caching headers.
- **Node.js Memory Limit**: Increase memory limit if needed using `NODE_OPTIONS="--max-old-space-size=4096"`.
