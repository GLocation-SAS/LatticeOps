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

const getSemantics = (key) => {
    const semantics = {};
    if (data[key]) {
        Object.entries(data[key]).forEach(([group, subgroups]) => {
            if (typeof subgroups === 'object') {
                Object.entries(subgroups).forEach(([sub, items]) => {
                    if (typeof items === 'object') {
                        Object.entries(items).forEach(([item, valObj]) => {
                            if (valObj && valObj.value) semantics[`${group}-${sub}-${item}`] = valObj.value;
                            else if (typeof valObj === 'object') {
                                // Nested again? (e.g. background.primary.default.hover?)
                                // Let's just go one more level
                                Object.entries(valObj).forEach(([subitem, v]) => {
                                   if (v && v.value) semantics[`${group}-${sub}-${item}-${subitem}`] = v.value;
                                });
                            }
                        });
                    }
                });
            }
        });
    }
    return semantics;
};

const light = getColors('primitives-light');
const dark = getColors('primitives-dark');
const semLight = getSemantics('semantics-light');

console.log('LIGHT_COLORS:', JSON.stringify(light, null, 2));
console.log('DARK_COLORS:', JSON.stringify(dark, null, 2));
console.log('SEM_LIGHT:', JSON.stringify(semLight, null, 2));
