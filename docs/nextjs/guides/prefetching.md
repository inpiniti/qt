
# Prefetching

Next.js automatically prefetches routes in the background to speed up navigation.

## Link Component
The `<Link>` component prefetches by default when it enters the viewport.
- **Production Only**: Prefetching is disabled in development.
- **Static Routes**: Prefetched immediately.
- **Dynamic Routes**: Prefetched up to the first loading boundary.

```jsx
// Disable prefetching
<Link href="/dashboard" prefetch={false}>Dashboard</Link>
```

## Router
Programmatic prefetching via `useRouter`.

```jsx
const router = useRouter()
router.prefetch('/dashboard')
```
