
# Instrumentation

Instrumentation allows you to run code when your Next.js application starts up. This is useful for initializing monitoring tools like OpenTelemetry.

## Setup
Create a file named `instrumentation.js` (or `.ts`) in the root directory (or inside `src` if using it).

```javascript
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./instrumentation-node')
  }
}
```

This functions runs once when the server starts.
