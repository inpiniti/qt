# Network Mode

React Query has a `networkMode` to determine how queries behave when the network is disconnected.

## Modes

### `online` (default)
In this mode, queries and mutations will not fire unless you have network connection.
- If offline, the query stays in `pending` state with `fetchStatus: 'paused'`.
- It will automatically resume when online.

### `always`
The query will always fire, regardless of network status. Useful if you are firing requests to a local destination (like AsyncStorage) that doesn't need network.

```jsx
new QueryClient({
  defaultOptions: {
    queries: {
      networkMode: 'always',
    },
  },
})
```

### `offlineFirst`
The query will fire once before checking connection.
