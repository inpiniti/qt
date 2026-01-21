# Database Webhooks

Database Webhooks는 데이터베이스 이벤트 발생 시 HTTP 요청을 보냅니다.

## Webhook 생성 (Dashboard)

1. Database → Webhooks로 이동
2. "Create a new hook" 클릭
3. 설정:
   - **Table**: 모니터링할 테이블
   - **Events**: INSERT, UPDATE, DELETE
   - **Webhook URL**: 호출할 엔드포인트

## SQL로 Webhook 생성

```sql
-- pg_net 확장 필요
CREATE EXTENSION IF NOT EXISTS pg_net;

-- 트리거 함수 생성
CREATE OR REPLACE FUNCTION notify_webhook()
RETURNS TRIGGER
LANGUAGE PLPGSQL
AS $$
BEGIN
  PERFORM net.http_post(
    url := 'https://your-webhook-url.com/endpoint',
    body := jsonb_build_object(
      'table', TG_TABLE_NAME,
      'type', TG_OP,
      'record', row_to_json(NEW)
    )
  );
  RETURN NEW;
END;
$$;

-- 트리거 생성
CREATE TRIGGER on_post_created
AFTER INSERT ON posts
FOR EACH ROW
EXECUTE FUNCTION notify_webhook();
```

## Payload 구조

```json
{
  "table": "posts",
  "type": "INSERT",
  "record": {
    "id": 1,
    "title": "Hello World"
  }
}
```

## 사용 사례

- Slack/Discord 알림
- 이메일 발송
- 외부 시스템 동기화
- 분석 이벤트 전송
