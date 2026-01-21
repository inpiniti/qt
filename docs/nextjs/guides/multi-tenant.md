
# Multi-tenant Applications

Building multi-tenant applications (SaaS) with Next.js.

## Dynamic Routing
Use dynamic segments to handle tenant subdomains or paths.

```
app/[tenant]/page.js
```

## Middleware Rewrite
Rewrite requests based on hostname (subdomain) to specific tenant paths.

```javascript
// middleware.ts
import { NextResponse } from 'next/server'

export function middleware(req) {
  const hostname = req.headers.get('host')
  const tenant = hostname.split('.')[0] // e.g. "tenant1" from "tenant1.example.com"
  
  // Rewrite to internal tenant route
  return NextResponse.rewrite(new URL(`/${tenant}${req.nextUrl.pathname}`, req.url))
}
```
