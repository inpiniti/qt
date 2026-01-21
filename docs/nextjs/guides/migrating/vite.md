
# Migrating from Vite

Migrating a Vite-based React app to Next.js.

## Differences
- **Routing**: Vite often uses client-side routing (React Router). Next.js uses file-system based routing.
- **Entry Point**: Vite uses `index.html`. Next.js uses `layout.js` and `page.js`.
- **SSR**: Next.js provides SSR by default, whereas Vite is primarily CSR (unless using Vite SSR).

## Migration Steps
1. Install `next`, `react`, `react-dom`.
2. Move static assets to `public/`.
3. Create `app/layout.tsx` (Root Layout).
4. Create `app/page.tsx` (Home Page).
5. Ensure environment variables start with `NEXT_PUBLIC_` instead of `VITE_`.
