const fs = require('fs');
const path = require('path');
const dir = 'src/modules/uikit/components';
const files = [
  'BadgeMatrix.tsx', 'CheckboxMatrix.tsx', 'DialogModalMatrix.tsx', 'DropdownMatrix.tsx',
  'ErrorButtonMatrix.tsx', 'InfoButtonMatrix.tsx', 'ModalMatrix.tsx', 'NeutralButtonMatrix.tsx',
  'NotificationMatrix.tsx', 'PrimaryButtonMatrix.tsx', 'RadioButtonMatrix.tsx',
  'SecondaryButtonMatrix.tsx', 'SuccessButtonMatrix.tsx', 'TableMatrix.tsx', 'TabsMatrix.tsx',
  'TagMatrix.tsx', 'TextareaMatrix.tsx', 'TextInputMatrix.tsx', 'ToastMatrix.tsx',
  'ToggleMatrix.tsx', 'TooltipMatrix.tsx', 'WarningButtonMatrix.tsx'
];

files.forEach(file => {
  const fullPath = path.join(dir, file);
  if (!fs.existsSync(fullPath)) return;
  let content = fs.readFileSync(fullPath, 'utf8');
  if (!content.includes('import { SpecFooter }')) {
    // Add import after "use client"; if it exists, otherwise at the top
    if (content.includes('"use client";')) {
      content = content.replace('"use client";', '"use client";\n\nimport { SpecFooter } from "./SpecFooter";');
    } else {
      content = 'import { SpecFooter } from "./SpecFooter";\n' + content;
    }
    fs.writeFileSync(fullPath, content);
    console.log(`Updated ${file}`);
  }
});
