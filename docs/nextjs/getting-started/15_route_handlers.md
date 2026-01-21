
# Route Handlers

Route Handlers allow you to create custom request handlers for a given route using the Web Request and Response APIs.

```jsx
// app/api/route.js
export async function GET(request) {
  return Response.json({ message: 'Hello World' })
}
```
