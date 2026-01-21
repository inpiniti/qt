
# Supabase Overview

## Getting Started
Supabase is an open source Firebase alternative.

1. **Create a Project**: Go to [database.new](https://database.new) to create a new project.
2. **Table Editor**: Create tables and relationships.
3. **API**: Supabase automatically generates a RESTful API.

## Client Library
Install the client:
```bash
npm install @supabase/supabase-js
```

Initialize:
```js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xyzcompany.supabase.co'
const supabaseKey = 'public-anon-key'
const supabase = createClient(supabaseUrl, supabaseKey)
```

## Resources
- [Official Docs](https://supabase.com/docs)
