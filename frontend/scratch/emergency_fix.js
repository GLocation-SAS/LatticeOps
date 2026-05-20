const fs = require('fs');
const path = require('path');

const dirs = [
  'src/modules/uikit/components',
  'src/components/ui',
  'src/components/layout'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    if (file.endsWith('.tsx')) {
      const fullPath = path.join(dir, file);
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Basic formatting to make it readable for Prettier
      content = content.replace(/([;{}])/g, '$1\n');
      content = content.replace(/([{])/g, '\n$1');
      content = content.replace(/([}])\s*([^{}\s])/g, '$1\n$2');
      
      fs.writeFileSync(fullPath, content);
    }
  });
});
