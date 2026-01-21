
# Analytics

Next.js has built-in support for measuring and reporting performance metrics (Core Web Vitals).

## Usage
You can use `useReportWebVitals` to handle metrics.

```jsx
'use client'
 
import { useReportWebVitals } from 'next/web-vitals'
 
export function WebVitals() {
  useReportWebVitals((metric) => {
    console.log(metric)
  })
  
  return null
}
```
