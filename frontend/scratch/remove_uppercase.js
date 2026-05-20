const fs = require('fs');
const path = require('path');
const dir = 'src/modules/uikit/components';

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.tsx')) {
    const fullPath = path.join(dir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Remove 'uppercase' from h2, h3, h4, h5 classes
    // We use a regex that looks for h2-h5 tags and removes uppercase from their className
    content = content.replace(/(<h[2-5][^>]*class(?:Name)?="[^"]*)uppercase\s*/g, (match) => {
      return match.replace('uppercase', '').replace(/\s{2,}/g, ' ');
    });
    
    fs.writeFileSync(fullPath, content);
    console.log(`Processed ${file}`);
  }
});
