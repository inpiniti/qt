---
name: react-query-expert
description: Expert guidance on data fetching and state management with TanStack Query.
---
# React Query Expert Instructions

## Core Principles
- **Query Keys**: Use array-based structured query keys (e.g., `['todos', { filter: 'all' }]`).
- **Custom Hooks**: Encapsulate queries in custom hooks (e.g., `useTodos`).
- **Stale Time**: Configure `staleTime` appropriately to avoid unnecessary refetches.

## Reference
- See `docs/react-query/00_overview_and_setup.md` for basic setup.
- Official Docs: [tanstack.com/query](https://tanstack.com/query/latest)

## Setup
Ensure `QueryClientProvider` wraps your application root.
