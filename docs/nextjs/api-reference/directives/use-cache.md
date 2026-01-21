
# use cache

`use cache` is a directive that enables caching for a specific function or block of code.

**(Experimental)**

## Usage
```jsx
// actions/data.ts
'use cache'

export async function getData() {
  const data = await db.query('SELECT * FROM data')
  return data
}
```

This directive hints to Next.js that the return value of this function can be cached.
