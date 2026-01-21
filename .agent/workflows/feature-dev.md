---
description: Agile/Lean 방법론 기반의 역할 분담형 기능 개발 워크플로우
---

# 🚀 Agile & Lean 기능 개발 워크플로우

이 워크플로우는 **애자일(Agile)**과 **린(Lean)** 방법론을 적용하여 효율적이고 반복적인 기능 개발을 수행합니다. 사용자의 요청을 분석하여 적절한 **전문가(Skill)**를 배정하고, 단계별로 개발을 진행합니다.

## 👥 1. 역할 배정 및 팀 구성 (Team Formation)

가장 먼저 요청 사항을 분석하여 필요한 전문가(Skill)를 소집하세요. 다음 역할 중에서 프로젝트 성격에 맞는 멤버를 선정하고, 각자의 책임을 명시합니다.

**가용 전문가 풀 (Available Skills):**

*   **기획 및 관리 (Planning & Management)**
    *   `product-manager`: 제품 전략, 로드맵, 시장 적합성 확인
    *   `product-owner`: 백로그 관리, 이해관계자 커뮤니케이션, 가치 극대화
    *   `service-planner`: 상세 기획서, 화면 설계, 비즈니스 로직 정의
    *   `ux-planner`: 사용자 경험 설계, 사용성 흐름 정의

*   **설계 및 데이터 (Design & Data)**
    *   `data-planner`: 데이터 분류 체계, 이벤트 트래킹 설계
    *   `data-engineer`: 데이터 파이프라인 구축
    *   `dba`: 데이터베이스 모델링, 성능 최적화, 무결성

*   **개발 (Development)**
    *   `frontend-developer`: 모던 웹 인터페이스 개발
    *   `backend-developer`: API 개발, 비즈니스 로직, 데이터 처리
    *   `mobile-developer`: iOS/Android 네이티브 앱 개발
    *   `cross-platform-developer`: Flutter/React Native 개발
    *   `web-publisher`: 시맨틱 HTML, CSS 스타일링, 웹 표준 준수
    *   `functional-programming`: 함수형 프로그래밍 기법 적용 (Python/JS/TS)

*   **특화 기술 전문가 (Specialists)**
    *   `nextjs-expert`: App Router, SSR/CSR 최적화
    *   `react-query-expert`: 서버 상태 관리 및 비동기 데이터 처리
    *   `zustand-expert`: 클라이언트 전역 상태 관리
    *   `tailwind-expert`: 유틸리티 퍼스트 스타일링
    *   `shadcn-expert`: Shadcn UI 컴포넌트 활용 및 커스텀
    *   `motion-expert`: Framer Motion 애니메이션 및 인터랙션
    *   `supabase-expert`: Supabase 백엔드 및 DB 통합

*   **운영 및 품질 (Ops & QA)**
    *   `devops-engineer`: CI/CD, 인프라 자동화
    *   `sre-engineer`: 사이트 신뢰성, 장애 대응
    *   `security-engineer`: 보안 감사, 취약점 점검
    *   `qa-engineer`: 기능 테스트, 품질 보증

**실행 지침:**
1.  사용자의 요청을 분석합니다.
2.  **"이 작업을 위해 [Role 1], [Role 2]... 의 전문성이 필요합니다"**라고 명시하고, 해당 Skill의 `SKILL.md`를 참고한다고 가정합니다.
3.  각 역할에게 할당될 구체적인 **Task**를 정의합니다.

---

## 💡 2. 발견 및 정의 (Discovery & Definition) - *Lean Start*

**담당**: `product-owner`, `service-planner`

무엇을 만들지 정의하고, **MVP (Minimum Viable Product)** 범위를 설정합니다. "만들 수 있는가?"보다 "만들어야 하는가?"를 먼저 고민하여 낭비를 줄입니다.

- **기능 명세**: 무엇을 개발할 것인가? (User Stories 작성)
- **가치 제안**: 왜 개발하는가? (사용자 가치)
- **MVP 범위**: 핵심 가치를 전달하는 최소한의 기능은 무엇인가?

---

## 🎨 3. 디자인 및 설계 (Design & Architecture)

**담당**: `ux-planner`, `frontend-developer`, `backend-developer`

개발 전에 사용자 경험과 시스템 구조를 설계합니다.

- **UX/UI 흐름**: 사용자가 어떻게 상호작용하는가? (Wireframes, User Flows)
- **기술 스택 결정**: 어떤 도구를 사용할 것인가? (Next.js, Shadcn UI, Zustand 등)
- **데이터 모델링**: 어떤 데이터가 필요한가? (Schema Design using `dba` skill)

---

## ⚡ 4. 반복적 개발 (Iterative Development) - *Agile Sprints*

**담당**: `frontend-developer`, `backend-developer` 및 각 `expert`

작고 관리 가능한 단위로 나누어 개발을 진행합니다. 한 번에 모든 것을 완성하려 하지 말고, 동작하는 코드를 점진적으로 개선합니다.

### Sprint 1: 핵심 로직 및 데이터 (Core & Logic)
- `backend-developer`, `dba`, `supabase-expert`, `react-query-expert`
- 데이터 스키마 적용, API 연동, 상태 관리(Zustand) 설정.

### Sprint 2: UI 구조 및 컴포넌트 (Structure & Components)
- `frontend-developer`, `shadcn-expert`, `tailwind-expert`, `web-publisher`
- 레이아웃 구성, Shadcn UI 컴포넌트 조립, 반응형 스타일링.

### Sprint 3: 인터랙션 및 고도화 (Polish & Motion)
- `motion-expert`, `nextjs-expert`
- 애니메이션 효과, 마이크로 인터랙션, 성능 최적화, UX 개선.

---

## 🧪 5. 검증 및 배포 (Validation & Release)

**담당**: `qa-engineer`, `product-manager`, `security-engineer`

- **기능 테스트**: 요구사항(User Stories)을 충족하는지 확인.
- **코드 품질**: 린트 에러 없음, 규칙 준수 확인.
- **문서화**: `README.md` 및 `docs/` 업데이트.

---

## 체크리스트 (Definition of Done)

- [ ] 필요한 전문가(Role)가 적절히 할당되었는가?
- [ ] MVP 범위가 명확히 정의되었는가?
- [ ] 각 스프린트 단계별로 동작하는 결과물이 나왔는가?
- [ ] 사용자(User)의 피드백을 반영할 준비가 되었는가?
- [ ] 최종 문서화가 완료되었는가?
