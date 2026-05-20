const fs = require('fs');
const path = require('path');
const dir = 'src/modules/uikit/components';

const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const fullPath = path.join(dir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // 1. Remove uppercase and associated tracking
    content = content.replace(/uppercase/g, '');
    content = content.replace(/tracking-widest/g, '');
    content = content.replace(/tracking-wider/g, '');
    content = content.replace(/tracking-\[[^\]]+\]/g, '');
    
    // 2. Remove mx-auto from the main container (usually the first div in return)
    // Looking for max-w-7xl mx-auto
    content = content.replace(/max-w-7xl mx-auto/g, 'max-w-7xl');
    
    // 3. Change centering to left alignment in matrices
    content = content.replace(/text-center/g, 'text-left');
    content = content.replace(/justify-center/g, 'justify-start');
    content = content.replace(/items-center/g, 'items-start'); // Be careful with this, but usually good for "organize to left"
    
    // 4. Fix double spaces that might have been created
    content = content.replace(/\s{2,}/g, ' ');
    
    // 5. Special case: Button components often have 'justify-start' now, 
    // but we might want to keep some icons centered if they are inside a small circle.
    // However, the user request is broad.
    
    fs.writeFileSync(fullPath, content);
    console.log(`Processed ${file}`);
  }
});
