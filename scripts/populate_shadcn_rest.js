const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\Users\\USER\\git\\qt\\docs\\shadcn';

const files = {
    'get-started/open-in-v0.md': {
        title: 'Open in v0',
        content: `v0는 텍스트 프롬프트로 UI를 생성하는 AI 도구입니다.\n\nshadcn/ui 컴포넌트는 v0와 호환됩니다.\n\n[공식 문서](https://ui.shadcn.com/docs/open-in-v0)`
    },
    'get-started/javascript.md': {
        title: 'JavaScript',
        content: `shadcn/ui는 TypeScript로 작성되었지만 JavaScript 프로젝트에서도 사용할 수 있습니다.\n\nCLI를 사용하여 컴포넌트를 추가할 때 TypeScript 코드를 JavaScript로 변환합니다.\n\n[공식 문서](https://ui.shadcn.com/docs/javascript)`
    },
    'get-started/blocks.md': {
        title: 'Blocks',
        content: `Blocks는 대시보드, 인증 폼 등과 같은 더 큰 UI 조각입니다.\n\n[공식 문서](https://ui.shadcn.com/docs/blocks)`
    },
    'get-started/figma.md': {
        title: 'Figma',
        content: `shadcn/ui를 위한 Figma 디자인 키트가 있습니다.\n\n[공식 문서](https://ui.shadcn.com/docs/figma)`
    },
    'get-started/llms-txt.md': {
        title: 'llms.txt',
        content: `LLM(Large Language Models)을 위한 문서 포맷입니다.\n\n[공식 문서](https://ui.shadcn.com/docs/llms-txt)`
    },
    'get-started/legacy-docs.md': {
        title: 'Legacy Docs',
        content: `이전 버전의 문서입니다.\n\n[공식 문서](https://ui.shadcn.com/docs/legacy)`
    },
    'forms/react-hook-form.md': {
        title: 'React Hook Form',
        content: `React Hook Form과 Zod를 사용하여 폼을 구축하는 방법입니다.\n\n[공식 문서](https://ui.shadcn.com/docs/forms/react-hook-form)`
    },
    'forms/tanstack-form.md': {
        title: 'TanStack Form',
        content: `TanStack Form을 사용하는 방법입니다.\n\n[공식 문서](https://ui.shadcn.com/docs/forms/tanstack-form)`
    },
    'registry/introduction.md': {
        title: 'Registry Introduction',
        content: `shadcn/ui 레지스트리 시스템에 대한 소개입니다.\n\n[공식 문서](https://ui.shadcn.com/docs/registry)`
    },
    'registry/getting-started.md': {
        title: 'Registry Getting Started',
        content: `레지스트리 시작하기 가이드입니다.\n\n[공식 문서](https://ui.shadcn.com/docs/registry/getting-started)`
    },
    'changelog.md': {
        title: 'Changelog',
        content: `shadcn/ui의 변경 로그입니다.\n\n[공식 문서](https://ui.shadcn.com/docs/changelog)`
    }
};

Object.keys(files).forEach(relativePath => {
    const filePath = path.join(baseDir, relativePath);
    const data = files[relativePath];

    const content = `# ${data.title}

${data.content}

## 참고

이 문서는 요약본입니다. 자세한 내용은 위 링크를 참조하세요.
`;

    // Ensure directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${filePath}`);
});
