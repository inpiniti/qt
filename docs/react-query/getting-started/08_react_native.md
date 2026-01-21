# React Native

React Query works great with React Native. The setup is almost identical to the web.

## Online Status Management

React Query needs to know when the app is online/offline to handle `refetchOnReconnect`.
In React Native, you need to configure the `onlineManager`.

```tsx
import { onlineManager } from '@tanstack/react-query'
import NetInfo from '@react-native-community/netinfo'

onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    setOnline(!!state.isConnected)
  })
})
```

## App Sustainability (Focus)

To handle `refetchOnWindowFocus` (which corresponds to App State changes in React Native), use the `focusManager`.

```tsx
import { AppState, Platform } from 'react-native'
import { focusManager } from '@tanstack/react-query'
import type { AppStateStatus } from 'react-native'
import { useEffect } from 'react'

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active')
  }
}

useEffect(() => {
  const subscription = AppState.addEventListener('change', onAppStateChange)
  return () => subscription.remove()
}, [])
```

## Refresh on Pull (RefreshControl)

You can use `useRefresh` or manually handle `refetch` in `RefreshControl`.

```tsx
const { data, refetch, isRefetching } = useQuery({ ... })

<ScrollView
  refreshControl={
    <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
  }
>
  {/* ... */}
</ScrollView>
```
