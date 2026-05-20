const fs = require('fs');
const data = JSON.parse(fs.readFileSync('c:/Users/jmateus/Documents/Proyectos/DesignEngine/frontend/src/styles/variables-colors.json', 'utf8'));

const getDarkSemantics = () => {
    const semantics = {};
    const darkNode = data['+theme-dark'];
    if (darkNode) {
        Object.entries(darkNode).forEach(([group, subgroups]) => {
            if (typeof subgroups === 'object') {
                Object.entries(subgroups).forEach(([sub, items]) => {
                    if (typeof items === 'object') {
                        Object.entries(items).forEach(([item, valObj]) => {
                            if (valObj && valObj.value) {
                                semantics[`${group}-${sub}-${item}`] = valObj.value;
                            } else if (typeof valObj === 'object') {
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

const formatValue = (v) => {
    if (v === '#FFFFFFFF' || v === '{base.white}') return 'var(--color-neutral-white)';
    if (v === '#000000FF' || v === '{base.black}' || v === '#111111FF') return 'var(--color-neutral-black)';
    return v.replace(/\{color\.(.*?)\}/g, 'var(--color-$1)').replace(/\./g, '-');
};

const semDark = getDarkSemantics();
Object.entries(semDark).forEach(([k, v]) => {
    console.log(`    --semantic-${k}: ${formatValue(v)};`);
});
