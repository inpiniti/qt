
# Fetching Data

Next.js extends the native `fetch` API to allow each request on the server to set its own persistent caching semantics.

```jsx
async function getData() {
  const res = await fetch('https://api.example.com/data')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <main>{/* ... */}</main>
}
```
