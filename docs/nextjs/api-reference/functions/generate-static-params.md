
# generateStaticParams

Statically generates routes at build time instead of on-demand at request time.

## Usage

```tsx
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
 
export default function Page({ params }) {
  const { slug } = params
  // ...
}
```

Replaces `getStaticPaths` from Pages Router.
