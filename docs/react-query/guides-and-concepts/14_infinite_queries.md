# Infinite Queries

Infinite scrolling or "Load More" patterns are handled by `useInfiniteQuery`.

## Basic Usage

```jsx
import { useInfiniteQuery } from '@tanstack/react-query'

const {
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
} = useInfiniteQuery({
  queryKey: ['projects'],
  queryFn: fetchProjects,
  initialPageParam: 0,
  getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,
})
```

## Data Structure
The `data` object is different from `useQuery`. It has `pages` and `pageParams`.

```jsx
data.pages.map((page, i) => (
  <React.Fragment key={i}>
    {page.data.map((project) => (
      <p key={project.id}>{project.name}</p>
    ))}
  </React.Fragment>
))
```

## `fetchNextPage`
Call this function when the user scrolls to the bottom or clicks "Load More".
