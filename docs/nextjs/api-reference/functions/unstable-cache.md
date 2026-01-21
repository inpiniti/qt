
# unstable_cache

Allows you to cache the return value of an expensive operation (e.g., database query) across requests.

## Usage
```jsx
import { unstable_cache } from 'next/cache'
 
const getCachedUser = unstable_cache(
  async (id) => getUser(id),
  ['my-app-user'],
  {
    revalidate: 3600,
    tags: ['user'],
  }
)
```
