
# after

Allocates a task to run after the response has finished streaming.

*(Experimental)*

## Usage

```jsx
import { after } from 'next/server'

export default function Page() {
    after(() => {
        console.log('Response finished')
        // Perform cleanup or logging
    })
    
    return <h1>Hello</h1>
}
```
