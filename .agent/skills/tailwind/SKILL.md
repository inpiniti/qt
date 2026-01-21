---
name: tailwind-expert
description: Expert guidance on styling with Tailwind CSS.
---
# Tailwind CSS Expert Instructions

## Core Principles
- **Utility-First**: Use utility classes directly in `className`.
- **Arbitrary Values**: Use `[]` syntax sparingly; prefer theme configuration.
- **Responsiveness**: Use `sm:`, `md:`, `lg:` prefixes.
- **Dark Mode**: Use `dark:` prefix.

## Reference
- See `docs/tailwind/00_installation_vite.md`.
- Official Docs: [tailwindcss.com](https://tailwindcss.com)

## Component Pattern
Use `clsx` or `tailwind-merge` for conditional class names if needed.
