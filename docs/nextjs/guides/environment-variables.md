
# Environment Variables

Next.js has built-in support for loading environment variables from `.env*` files into `process.env`.

## Loading Order
1. `process.env`
2. `.env.$(NODE_ENV).local`
3. `.env.local`
4. `.env.$(NODE_ENV)`
5. `.env`

## Exposing to Client
Prefix variables with `NEXT_PUBLIC_` to expose them to the browser.
```bash
NEXT_PUBLIC_ANALYTICS_ID=123
```

## Type Safety
You can use `experimental.typedRoutes` or external libraries like `t3-env` for type-safe environment variables.
