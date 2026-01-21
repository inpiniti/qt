
# Migrating to App Router

Strategies for incrementally adopting the App Router.

## Incremental Adoption
1. **Coexistence**: The `app` directory can coexist with the `pages` directory.
2. **Component Migration**: Move reusable components to a shared folder (e.g., `components/`).
3. **Route Migration**: Move pages one by one from `pages/` to `app/`.

## Key Changes
- **Data Fetching**: Replace `getServerSideProps` / `getStaticProps` with `async` Server Components and `fetch`.
- **Routing**: `_app.js` and `_document.js` are replaced by `app/layout.js`.
- **Head**: `<Head>` is replaced by the Metadata API.
