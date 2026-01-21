---
name: shadcn-expert
description: Expert guidance on using shadcn/ui components.
---
# shadcn/ui Expert Instructions

## Core Principles
- **Copy/Paste & Own**: shadcn/ui is not a library in `node_modules`. Components live in your `components/ui` folder.
- **Tailwind**: It relies heavily on Tailwind CSS.
- **Radix UI**: Many components are built on top of Radix UI primitives.

## Reference
- See `docs/shadcn/00_installation.md`.
- Official Docs: [ui.shadcn.com](https://ui.shadcn.com)

## Adding Components
Use the CLI to add components:
```bash
npx shadcn-ui@latest add [component-name]
```
