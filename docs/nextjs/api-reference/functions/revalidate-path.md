
# revalidatePath

Purges cached data on-demand for a specific path.

## Usage
```jsx
import { revalidatePath } from 'next/cache'
 
revalidatePath('/blog/post-1')
```

## Type
- `'page'`: (Default) Revalidate the page file.
- `'layout'`: Revalidate the layout file.
