const fs = require('fs');
const path = require('path');

const dirs = ['src/components/ui', 'src/components/layout'];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    if (file.endsWith('.tsx')) {
      const fullPath = path.join(dir, file);
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // 1. Remove uppercase and associated tracking
      content = content.replace(/\buppercase\b/g, '');
      content = content.replace(/\btracking-widest\b/g, '');
      content = content.replace(/\btracking-wider\b/g, '');
      content = content.replace(/\btracking-\[[^\]]+\]/g, '');
      
      // 2. Fix double spaces
      content = content.replace(/\s{2,}/g, ' ');
      
      fs.writeFileSync(fullPath, content);
      console.log(`Processed ${file}`);
    }
  });
});
