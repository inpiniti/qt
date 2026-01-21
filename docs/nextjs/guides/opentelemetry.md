
# OpenTelemetry

Next.js supports OpenTelemetry for observability (tracing, metrics, logging).

## Setup
1. Enable `instrumentationHook` in `next.config.js`.
2. Create `instrumentation.ts`.
3. Use `@vercel/otel` or manual configuration to export traces.

```javascript
// next.config.ts
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
}
```
