# Broadcast

서버(데이터베이스)에 저장하지 않고 클라이언트끼리 데이터를 실시간으로 주고받는 가장 빠른 방법입니다.

## 채널 구독 및 전송

```javascript
const channel = supabase.channel('room-1')

channel
  .on(
    'broadcast',
    { event: 'cursor-pos' }, // 이벤트 이름
    (payload) => console.log(payload)
  )
  .subscribe((status) => {
    if (status === 'SUBSCRIBED') {
      // 메시지 전송
      channel.send({
        type: 'broadcast',
        event: 'cursor-pos',
        payload: { x: 120, y: 300 },
      })
    }
  })
```

## 보안

RLS 정책이나 데이터베이스 권한과 무관하게 작동하므로, 민감한 정보 전송 시 주의가 필요합니다. 하지만 인증된 사용자만 채널에 접속하도록 서버 측에서 제한할 수 있는 기능은 없습니다. (현재는 클라이언트 사이드 제한만 가능)
