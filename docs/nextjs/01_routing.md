
# Next.js Routing: Layouts, Pages, and Key Concepts

## Creating a Page
A page is UI that is rendered on a specific route. To create a page, export a React component from a `page.js` or `page.tsx` file.

```tsx
// app/page.tsx
export default function Page() {
  return <h1>Hello Next.js!</h1>
}
```

## Creating a Layout
A layout is UI that is shared between multiple pages. On navigation, layouts preserve state, remain interactive, and do not rerender.

```tsx
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
```

## Nested Routes
Folders define the route structure.
- `app/blog/page.tsx` -> `/blog`
- `app/blog/[slug]/page.tsx` -> `/blog/123` (Dynamic Route)

### Dynamic Segments
Wrap a folder name in square brackets `[folderName]` to create a dynamic route.

```tsx
// app/blog/[slug]/page.tsx
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params
  return <div>Post: {slug}</div>
}
```

## Linking and Navigating
Use the `<Link>` component to navigate between routes.

```tsx
import Link from 'next/link'

export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>
}
```
