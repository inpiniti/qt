# Important Defaults

React Query comes with aggressive but sane defaults. It's important to know them to avoid confusion.

## Stale Time is 0
By default, cached data is considered **stale** immediately.
- `staleTime: 0`
- This means queries will refetch in the background whenever the window is refocused, or when you mount a new component using the same query.

## Refetch on Window Focus
By default, stale queries will refetch automatically when the browser window is refocused.
- `refetchOnWindowFocus: true`

## Retry on Error
Query failures are retried **3 times** (with exponential backoff) before capturing the error.
- `retry: 3`

## Cache Time (gcTime)
Unused/inactive cache data remains in memory for **5 minutes** before being garbage collected.
- `gcTime: 1000 * 60 * 5` (5 minutes)
