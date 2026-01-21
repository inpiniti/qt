# Paginated Queries

Rendering paginated data is a common UI pattern.

## The `keepPreviousData` Pattern
In previous versions, this was a separate flag. In v5, use `placeholderData: keepPreviousData`.

This allows the UI to show the *previous page's data* while the *new page* is loading, preventing layout shift or loading spinners.

```jsx
import { keepPreviousData, useQuery } from '@tanstack/react-query'

const [page, setPage] = useState(0)

const { data, isPlaceholderData } = useQuery({
  queryKey: ['projects', page],
  queryFn: () => fetchProjects(page),
  placeholderData: keepPreviousData,
})

return (
  <div>
    {/* Display data */}
    <button onClick={() => setPage(old => old - 1)} disabled={page === 0}>
      Previous
    </button>
    <button onClick={() => setPage(old => old + 1)}>
      Next
    </button>
  </div>
)
```
