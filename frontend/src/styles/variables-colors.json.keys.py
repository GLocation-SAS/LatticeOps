import json
import os

file_path = r'c:\Users\jmateus\Documents\Proyectos\DesignEngine\frontend\src\styles\variables-colors.json'
with open(file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

print(list(data.keys()))
