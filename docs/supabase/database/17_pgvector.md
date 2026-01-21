# pgvector: Embeddings and Vector Similarity

pgvector 확장으로 AI 임베딩과 벡터 유사도 검색을 수행할 수 있습니다.

## 확장 활성화

```sql
CREATE EXTENSION IF NOT EXISTS vector;
```

## 테이블 생성

```sql
CREATE TABLE documents (
  id BIGSERIAL PRIMARY KEY,
  content TEXT,
  embedding vector(1536)  -- OpenAI ada-002 차원
);
```

## 임베딩 저장

```javascript
import { createClient } from '@supabase/supabase-js'
import OpenAI from 'openai'

const openai = new OpenAI()
const supabase = createClient(url, key)

// 임베딩 생성
const response = await openai.embeddings.create({
  model: 'text-embedding-ada-002',
  input: 'Your text here',
})

const embedding = response.data[0].embedding

// Supabase에 저장
await supabase
  .from('documents')
  .insert({ content: 'Your text', embedding })
```

## 유사도 검색

```sql
-- 코사인 유사도
SELECT content
FROM documents
ORDER BY embedding <=> '[0.1, 0.2, ...]'::vector
LIMIT 5;
```

## 인덱스 생성 (성능 향상)

```sql
CREATE INDEX ON documents
USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 100);
```

## Supabase Client

```javascript
const { data } = await supabase.rpc('match_documents', {
  query_embedding: embedding,
  match_threshold: 0.78,
  match_count: 10
})
```
