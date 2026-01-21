const fs = require('fs');
const path = require('path');

const componentsDir = 'c:\\Users\\USER\\git\\qt\\docs\\shadcn\\components';

const components = [
    'Accordion', 'Alert', 'Alert Dialog', 'Aspect Ratio', 'Avatar', 'Badge', 'Breadcrumb',
    'Button', 'Button Group', 'Calendar', 'Card', 'Carousel', 'Chart', 'Checkbox',
    'Collapsible', 'Combobox', 'Command', 'Context Menu', 'Data Table', 'Date Picker',
    'Dialog', 'Drawer', 'Dropdown Menu', 'Empty', 'Field', 'Hover Card', 'Input',
    'Input Group', 'Input OTP', 'Item', 'Kbd', 'Label', 'Menubar', 'Native Select',
    'Navigation Menu', 'Pagination', 'Popover', 'Progress', 'Radio Group', 'Resizable',
    'Scroll Area', 'Select', 'Separator', 'Sheet', 'Sidebar', 'Skeleton', 'Slider',
    'Sonner', 'Spinner', 'Switch', 'Table', 'Tabs', 'Textarea', 'Toast', 'Toggle',
    'Toggle Group', 'Tooltip', 'Typography'
];

if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
}

components.forEach(component => {
    const filename = component.toLowerCase().replace(/ /g, '-').replace(/\./g, '-') + '.md';
    const filePath = path.join(componentsDir, filename);
    const componentName = component.replace(/ /g, ''); // Simple PascalCase guess
    const componentKebab = component.toLowerCase().replace(/ /g, '-');

    const content = `# ${component}

${component} 컴포넌트에 대한 문서입니다.

## Installation

CLI를 사용하여 프로젝트에 컴포넌트를 추가합니다.

\`\`\`bash
npx shadcn@latest add ${componentKebab}
\`\`\`

## Usage

\`\`\`tsx
import { ${componentName} } from "@/components/ui/${componentKebab}"

export default function ${componentName}Demo() {
  return (
    <${componentName} />
  )
}
\`\`\`

## 문서

자세한 Props 및 API 정보는 공식 문서를 참조하세요:
[공식 ${component} 문서](https://ui.shadcn.com/docs/components/${componentKebab})
`;

    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${filePath}`);
});
