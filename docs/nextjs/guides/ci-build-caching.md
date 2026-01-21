
# CI Build Caching

To improve build performance in Continuous Integration (CI) environments, Next.js supports caching the `.next/cache` folder.

## Configuration
Configure your CI provider to cache the following directories:

- **npm**: `~/.npm`
- **yarn**: `~/.cache/yarn`
- **pnpm**: `~/.pnpm-store`
- **Next.js**: `.next/cache`

## GitHub Actions Example

```yaml
- name: Cache Next.js build
  uses: actions/cache@v3
  with:
    path: .next/cache
    key: ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json') }}
```
