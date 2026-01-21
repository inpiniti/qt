
# Development Environment

Setting up an optimal development environment for Next.js.

## Fast Refresh
Next.js supports Fast Refresh, which gives you instantaneous feedback on edits made to your React components.

## TypeScript
Next.js provides an integrated TypeScript experience, including zero-configuration support and automatic type checking.
- Using `create-next-app` automatically sets up TypeScript.
- You can add TypeScript to an existing project by renaming files to `.ts` / `.tsx` and running `next dev`.

## ESLint
Next.js provides an integrated ESLint experience out of the box.
- Run `next lint` to check for issues.
- Configuration is in `.eslintrc.json`.

```json
{
  "extends": "next/core-web-vitals"
}
```
