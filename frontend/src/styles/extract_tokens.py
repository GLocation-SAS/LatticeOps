import json

file_path = r'c:\Users\jmateus\Documents\Proyectos\DesignEngine\frontend\src\styles\variables-colors.json'
with open(file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

def get_colors(primitive_key):
    colors = {}
    if primitive_key in data:
        color_data = data[primitive_key].get('color', {})
        for cat, values in color_data.items():
            if isinstance(values, dict):
                for shade, val_obj in values.items():
                    if isinstance(val_obj, dict) and 'value' in val_obj:
                        colors[f"{cat}-{shade}"] = val_obj['value']
    return colors

light_primitives = get_colors('primitives-light')
dark_primitives = get_colors('primitives-dark')

print("LIGHT PRIMITIVES:")
for k, v in light_primitives.items():
    print(f"  {k}: {v}")

print("\nDARK PRIMITIVES:")
for k, v in dark_primitives.items():
    print(f"  {k}: {v}")

def get_semantics(semantics_key):
    semantics = {}
    if semantics_key in data:
        sem_data = data[semantics_key]
        for group, subgroups in sem_data.items():
            if isinstance(subgroups, dict):
                for sub, values in subgroups.items():
                    if isinstance(values, dict):
                        for item, val_obj in values.items():
                            if isinstance(val_obj, dict) and 'value' in val_obj:
                                semantics[f"{group}-{sub}-{item}"] = val_obj['value']
                            elif isinstance(val_obj, str): # Fallback
                                semantics[f"{group}-{sub}-{item}"] = val_obj
                    elif isinstance(values, str): # Fallback
                         semantics[f"{group}-{sub}"] = values
    return semantics

light_semantics = get_semantics('semantics-light')
print("\nLIGHT SEMANTICS:")
for k, v in light_semantics.items():
    print(f"  {k}: {v}")
