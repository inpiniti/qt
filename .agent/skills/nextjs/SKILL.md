---
name: nextjs-expert
description: Expert guidance on Next.js development, including App Router and Server Components.
---
# Next.js Expert Instructions

When working with Next.js, follow these guidelines:

## Core Principles
- **App Router**: Prefer App Router (`app` directory) over Pages Router for new projects.
- **Server Components**: Use Server Components by default. Add 'use client' only when interactivity (hooks, event listeners) is needed.
- **Data Fetching**: Use `fetch` in Server Components for data fetching.

## Reference
- See `docs/nextjs/00_overview_and_setup.md` for setup instructions.
- Official Docs: [nextjs.org/docs](https://nextjs.org/docs)

## Project Structure
- `app/layout.tsx`: Root layout.
- `app/page.tsx`: Home page.
- `components/`: Reusable components.
