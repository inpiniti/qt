# Render Optimizations

React Query is heavily optimized for performance.

## Structural Sharing
React Query keeps the identity of data references stable if the data hasn't changed.

## Tracked Properties (v5)
In v5, `useQuery` tracks which fields you access from the result object (`isLoading`, `data`, etc.) and solely re-renders the component when those specific fields change.

## `notifyOnChangeProps`
You can manually configure when to re-render.
`notifyOnChangeProps: ['data']` will only re-render if data changes.
