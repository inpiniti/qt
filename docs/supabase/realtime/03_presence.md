# Presence

사용자들의 상태(State)를 실시간으로 공유하고 동기화합니다. 사용자가 들어오고 나가는 것(Join/Leave)을 감지합니다.

## 구현

```javascript
const channel = supabase.channel('room-1')

channel
  .on('presence', { event: 'sync' }, () => {
    // 상태 목록 가져오기
    const newState = channel.presenceState()
    console.log('Online users:', newState)
  })
  .on('presence', { event: 'join' }, ({ key, newPresences }) => {
    console.log('User joined:', newPresences)
  })
  .on('presence', { event: 'leave' }, ({ key, leftPresences }) => {
    console.log('User left:', leftPresences)
  })
  .subscribe(async (status) => {
    if (status === 'SUBSCRIBED') {
      // 내 상태 전송 (Track)
      await channel.track({
        user_id: '123',
        online_at: new Date().toISOString(),
      })
    }
  })
```

## 상태 업데이트

추적 중인 상태를 업데이트할 수 있습니다.

```javascript
await channel.track({
  user_id: '123',
  is_typing: true
})
```

## Unsubscribe

채널 구독을 해제하면 자동으로 Presence에서 'leave' 처리가 됩니다.

```javascript
supabase.removeChannel(channel)
```
