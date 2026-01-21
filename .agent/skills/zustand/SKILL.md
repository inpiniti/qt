---
name: zustand-expert
description: Expert guidance on client-side state management with Zustand.
---
# Zustand Expert Instructions

## Core Principles
- **Simplicity**: Create small, focused stores.
- **No Provider**: Direct hook usage in components.
- **Actions**: Define actions (functions to modify state) *inside* the store.

## Reference
- See `docs/zustand/00_overview_and_setup.md`.
- Official Docs: [zustand.docs.pmnd.rs](https://zustand.docs.pmnd.rs)

## Pattern
```js
const useStore = create((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))
```
