# Deployment & Scaling

## 배포하기

```bash
supabase functions deploy hello-world
# 또는 모든 함수 배포
supabase functions deploy
```

배포 시 자동으로 TypeScript 컴파일 및 번들링이 수행됩니다.

## 보안 설정

### JWT 검증

기본적으로 Edge Functions는 **유효한 Supabase JWT**가 Authorization 헤더에 있어야 실행됩니다. (Anon Key 또는 User Token)
누구나 호출하게 하려면 `--no-verify-jwt` 플래그를 사용하여 배포해야 합니다.

```bash
supabase functions deploy hello-world --no-verify-jwt
```

## Scaling

Supabase Edge Functions는 요청 수에 따라 자동으로 스케일링됩니다.
- **Cold Start**: 오랫동안 요청이 없으면 인스턴스가 내려가고, 다음 요청 시 약간의 지연(Cold Start)이 발생할 수 있습니다 (수백 ms 수준).
- **Regions**: 기본적으로 전 세계 모든 리전(30개 이상)에 배포됩니다.

## 제한 사항

- **실행 시간**: 무료 플랜은 CPU 시간 제한이 타이트할 수 있습니다. (Wall clock time 제한도 존재)
- **메모리**: 인스턴스 당 메모리 제한이 있습니다 (기본 128MB ~ 2GB 등 플랜에 따라 다름).
- **패키지**: Deno 호환 모듈만 사용 가능합니다 (NPM 패키지는 `npm:` 프리픽스로 사용 가능).
