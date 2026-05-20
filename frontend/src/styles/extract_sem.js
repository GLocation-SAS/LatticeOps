const fs = require('fs');
const data = JSON.parse(fs.readFileSync('c:/Users/jmateus/Documents/Proyectos/DesignEngine/frontend/src/styles/variables-colors.json', 'utf8'));

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

const semLight = getSemantics('semantics-light');
Object.entries(semLight).forEach(([k, v]) => {
    // Convert {color.primary.500} to var(--color-primary-500)
    let val = v.replace(/\{color\.(.*?)\}/g, 'var(--color-$1)').replace(/\./g, '-');
    // Also handle {base.white} -> var(--color-neutral-white) ?
    // I'll assume base.white is neutral-white for now based on common patterns
    val = val.replace(/\{base\.white\}/g, 'var(--color-neutral-white)');
    val = val.replace(/\{base\.black\}/g, 'var(--color-neutral-black)');
    
    console.log(`--semantic-${k}: ${val};`);
});
