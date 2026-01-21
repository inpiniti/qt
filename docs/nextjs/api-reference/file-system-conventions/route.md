
# route.js

Allows you to create custom request handlers for a given route (API Routes).

## Supported Methods
`GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, `OPTIONS`.

## Usage

```typescript
export async function GET(request: Request) {
  return Response.json({ data: 'hello' })
}
```

If a `GET` method is defined, `HEAD` is automatically supported.
If `OPTIONS` is not defined, Next.js implements a default one.
