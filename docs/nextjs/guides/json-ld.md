
# JSON-LD

Structured data (JSON-LD) helps search engines understand your content.

## Implementation
Add a `<script>` tag with `type="application/ld+json"` to your layout or page.

```jsx
export default function Page({ data }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: data.name,
    image: data.image,
    description: data.description,
  }

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ... page content */}
    </section>
  )
}
```
