# Comparison

## VS Redux / MobX / Zustand

Traditional state management libraries (Redux, MobX, Zustand) are general-purpose "Client State" libraries. They are excellent for managing ui-state or non-server data. However, for "Server State", you often end up writing a lot of boilerplate code to handle loading, error, and success states, as well as caching and deduplication.

**React Query** replaces the need for this boilerplate. It essentially acts as a cache layer for your server data.

| Feature | React Query | Redux (Manual) |
| :--- | :--- | :--- |
| **Backend Agnostic** | ✅ | ✅ |
| **Dedicated Devtools** | ✅ | ✅ |
| **Auto Caching** | ✅ | ❌ |
| **Auto Refetching** | ✅ | ❌ |
| **Window Focus Refetching** | ✅ | ❌ |
| **Polling/Realtime** | ✅ | ❌ |
| **Pagination/Cursor Support** | ✅ | ❌ (Manual) |

## VS SWR

SWR and React Query are very similar. Both are excellent choices.
- **SWR**: Lighter weight, simpler API, great for simple use cases.
- **React Query**: More features (e.g., proper Devtools, Mutation support, Infinite Queries, Selectors), better for complex applications.

## VS Apollo Client

- **Apollo**: Best if you are strictly using GraphQL and want a normalized cache.
- **React Query**: Better if you want a simpler document-based cache, or if you use REST, or a mix of REST and GraphQL.
