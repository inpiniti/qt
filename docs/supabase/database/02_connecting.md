# Connecting to Your Database

Supabase 데이터베이스에 연결하는 여러 방법이 있습니다.

## Supabase Client (권장)

가장 간단한 방법은 Supabase JavaScript 클라이언트를 사용하는 것입니다.

```javascript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://your-project.supabase.co',
  'your-anon-key'
)

// 데이터 조회
const { data, error } = await supabase
  .from('todos')
  .select('*')
```

## Direct Connection (Postgres URI)

직접 Postgres 연결 문자열을 사용할 수도 있습니다.

```javascript
// Node.js with pg
import pg from 'pg'

const pool = new pg.Pool({
  connectionString: 'postgresql://postgres:[password]@db.xxx.supabase.co:5432/postgres'
})
```

## Connection Pooling (Supavisor)

서버리스 환경에서는 Connection Pooler를 사용하세요.

```
postgresql://postgres.[project-ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres
```

## Connection Limits

- **Free tier**: 최대 60개 동시 연결
- **Pro tier**: 최대 200개 동시 연결
- **Pooler 사용 시**: 수천 개의 연결 처리 가능
