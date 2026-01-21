
# Comparison

다른 상태 관리 라이브러리와의 비교.

## Redux와 비교
- **단순함**: Zustand는 Redux보다 훨씬 적은 코드로 동일한 기능을 수행합니다.
- **컨텍스트 없음**: React Context Provider로 앱을 감쌀 필요가 없습니다.
- **불필요한 렌더링**: 상태의 일부를 선택(select)하여 렌더링을 최적화할 수 있습니다.

## Context API와 비교
- **보일러플레이트**: Context보다 설정이 간편합니다.
- **렌더링 최적화**: Context는 값이 변경되면 모든 소비자가 리렌더링되지만, Zustand는 선택자(selector)를 통해 변경된 부분만 리렌더링합니다.
- **중앙 집중화**: Context 지옥 없이 스토어를 분리하거나 결합할 수 있습니다.

## Jotai / Recoil과 비교
- **멘탈 모델**: Jotai/Recoil은 원자(Atom) 기반의 상향식(bottom-up) 접근, Zustand는 스토어 기반의 하향식(top-down) 접근(Flux와 유사)입니다.
- **사용 사례**: 복잡한 파생 상태가 많으면 Jotai/Recoil이 유리할 수 있고, 전역 상태 관리가 주 목적이면 Zustand가 간편합니다.
