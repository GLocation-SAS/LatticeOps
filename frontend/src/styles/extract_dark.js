const fs = require('fs');
const data = JSON.parse(fs.readFileSync('c:/Users/jmateus/Documents/Proyectos/DesignEngine/frontend/src/styles/variables-colors.json', 'utf8'));

const getColors = (key) => {
    const colors = {};
    if (data[key] && data[key].color) {
        Object.entries(data[key].color).forEach(([cat, shades]) => {
            if (typeof shades === 'object') {
                Object.entries(shades).forEach(([shade, valObj]) => {
                    if (valObj && valObj.value) colors[`${cat}-${shade}`] = valObj.value;
                });
            }
        });
    }
    return colors;
};

const dark = getColors('primitives-dark');
Object.entries(dark).forEach(([k, v]) => {
    console.log(`--color-${k}: ${v};`);
});
