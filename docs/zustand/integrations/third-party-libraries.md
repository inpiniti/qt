
# Third-party Libraries

Zustand와 함께 사용할 수 있는 서드파티 라이브러리 목록.

## 공식/준공식 라이브러리
- `immer`: 불변성 관리
- `optics-ts`: 렌즈 라이브러리
- `ramda`: 함수형 유틸리티
- `xstate`: 상태 머신

## 커뮤니티 라이브러리
- `zustand-persist`: 상태 지속성 (공식 미들웨어 `persist`가 더 권장됨)
- `auto-zustand-selectors-hook`: 자동 선택자 생성
- `simple-zustand-devtools`: React DevTools와 유사한 간단한 디버깅 도구

## 통합 예시 (XState)
Zustand 스토어 내부에서 XState 머신을 실행하고 상태를 동기화할 수 있습니다.
