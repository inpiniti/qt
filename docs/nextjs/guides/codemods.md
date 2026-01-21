
# Codemods

Next.js provides codemods to automatically upgrade your codebase.

## Usage
Run codemods using `npx @next/codemod <transform> <path>`.

## Available Transformations

### v15.0
- `next-image-to-legacy-image`: Migrates `next/image` imports.
- `next-link-to-legacy-link`: Migrates `next/link`.

### v14.0
- `metadata-to-viewport-export`: Migrates viewport metadata to strict export.
- `built-in-next-font`: Defines `next/font` as built-in.

### v13.2
- `use-search-params-to-use-params`: Updates usage of `useSearchParams`? No, wait - `useParams` separation.

*(Refer to official documentation for the latest specific codemod commands as they change frequently)*
