import json
import os

file_path = r'c:\Users\jmateus\Documents\Proyectos\DesignEngine\frontend\src\styles\variables-colors.json'
with open(file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

def find_key(d, key, path=""):
    if isinstance(d, dict):
        for k, v in d.items():
            if k == key:
                print(f"Found '{key}' at path: {path}.{k}")
            find_key(v, key, f"{path}.{k}")

find_key(data, "base")
