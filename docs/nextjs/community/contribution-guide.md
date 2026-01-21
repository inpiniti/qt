
# 기여 가이드

Next.js에 기여하는 방법을 안내합니다.

## 시작하기

### 저장소 포크
1. [Next.js GitHub 저장소](https://github.com/vercel/next.js) 방문
2. "Fork" 버튼 클릭
3. 로컬에 클론:
```bash
git clone https://github.com/YOUR_USERNAME/next.js.git
cd next.js
```

### 개발 환경 설정
```bash
# 의존성 설치
pnpm install

# 개발 빌드
pnpm dev

# 테스트 실행
pnpm test
```

## 기여 유형

### 버그 리포트
버그를 발견했다면:
1. [Issues](https://github.com/vercel/next.js/issues) 검색하여 중복 확인
2. 새 이슈 생성
3. 재현 가능한 예제 제공 (CodeSandbox 등)
4. 환경 정보 포함 (OS, Node.js 버전 등)

### 기능 제안
새로운 기능을 제안하려면:
1. [Discussions](https://github.com/vercel/next.js/discussions) 확인
2. 새 Discussion 생성
3. 사용 사례와 이점 설명

### 코드 기여
1. **이슈 선택**: "good first issue" 라벨 확인
2. **브랜치 생성**:
```bash
git checkout -b fix/issue-description
```
3. **변경 사항 작성**
4. **테스트 추가**
5. **커밋**:
```bash
git commit -m "fix: description of fix"
```
6. **푸시 및 PR 생성**

## 코딩 스타일

### TypeScript
- 타입 안전성 유지
- `any` 사용 최소화
- 명확한 타입 정의

### 포맷팅
```bash
# Prettier 실행
pnpm format

# ESLint 실행
pnpm lint
```

### 커밋 메시지
Conventional Commits 사용:
```
feat: add new feature
fix: resolve bug
docs: update documentation
test: add tests
chore: update dependencies
```

## 테스트

### 단위 테스트
```bash
pnpm test-unit
```

### 통합 테스트
```bash
pnpm test-integration
```

### E2E 테스트
```bash
pnpm test-e2e
```

## 문서 기여

문서는 `/docs` 디렉토리에 있습니다:
```bash
cd docs
pnpm install
pnpm dev
```

## Pull Request 가이드라인

### PR 체크리스트
- [ ] 관련 이슈 링크
- [ ] 변경 사항 설명
- [ ] 테스트 추가/업데이트
- [ ] 문서 업데이트 (필요시)
- [ ] 모든 테스트 통과
- [ ] 코드 리뷰 준비

### PR 템플릿
```markdown
## 변경 사항
<!-- 무엇을 변경했는지 설명 -->

## 동기
<!-- 왜 이 변경이 필요한지 설명 -->

## 테스트
<!-- 어떻게 테스트했는지 설명 -->

## 관련 이슈
Closes #123
```

## 리뷰 프로세스

1. **자동 검사**: CI/CD 파이프라인 통과
2. **코드 리뷰**: 메인테이너의 리뷰
3. **수정**: 피드백 반영
4. **승인**: 최종 승인 후 머지

## 커뮤니티

### Discord
[Next.js Discord](https://discord.gg/nextjs)에서 질문하고 토론하세요.

### GitHub Discussions
[Discussions](https://github.com/vercel/next.js/discussions)에서 아이디어를 공유하세요.

### Twitter
[@nextjs](https://twitter.com/nextjs)를 팔로우하세요.

## 행동 강령

모든 기여자는 [Code of Conduct](https://github.com/vercel/next.js/blob/canary/CODE_OF_CONDUCT.md)를 준수해야 합니다.

## 라이선스

기여한 코드는 MIT 라이선스로 배포됩니다.
