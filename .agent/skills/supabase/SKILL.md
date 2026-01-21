---
name: supabase-expert
description: Expert guidance on Supabase backend and database integration.
---
# Supabase Expert Instructions

## Core Principles
- **PostgreSQL**: It's just Postgres.
- **Row Level Security (RLS)**: ALWAYS enable RLS on public tables to secure data.
- **Realtime**: Subscribe to database changes if needed.

## Reference
- See `docs/supabase/00_getting_started.md`.
- Official Docs: [supabase.com/docs](https://supabase.com/docs)

## Data Fetching
```js
const { data, error } = await supabase
  .from('table_name')
  .select('*')
```
