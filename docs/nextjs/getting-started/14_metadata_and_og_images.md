
# Metadata and OG Images

Next.js has a Metadata API that can be used to define your application metadata (e.g. `meta` and `link` tags inside your HTML head element) for improved SEO and web shareability.

## Static Metadata

```jsx
export const metadata = {
  title: 'My Project',
  description: 'The best project'
}

export default function Page() {}
```

## Dynamic Metadata

```jsx
export async function generateMetadata({ params }) {
  return {
    title: `Product ${params.id}`
  }
}
```
