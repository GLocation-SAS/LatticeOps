---
trigger: always_on
---

---
trigger: always_on
---

# DESIGN SYSTEM USAGE RULE (V1)

Esta regla define el uso obligatorio del sistema de diseño en proyectos Antigravity.

---

## 1. FUENTE DE VERDAD

Figma es la única fuente de verdad visual para:

- Componentes
- Variantes
- Estados
- Tokens (colores, tipografía, spacing)

El documento `DESIGN.md` es la fuente de verdad conceptual.

El código debe reflejar ambos, sin reinterpretación.

---

## 2. USO DEL SISTEMA DE DISEÑO

Toda interfaz debe construirse utilizando:

- Componentes existentes
- Tokens definidos
- Clases de Tailwind configuradas

---

## 3. USO DE COMPONENTES

### Regla principal:

SIEMPRE usar componentes existentes antes de crear nuevos.

---

### Permitido:

- Importar componentes desde:
  - `/components/ui`
  - `/components/layout`
  - `/modules/[module]/components`

- Componer interfaces usando componentes existentes

---

### Prohibido:

- Crear nuevos componentes automáticamente
- Duplicar componentes existentes con otro nombre
- Crear variantes fuera del sistema definido
- Modificar estilos base sin autorización

---

## 4. CREACIÓN DE NUEVOS COMPONENTES

Si un componente NO existe:

### OBLIGATORIO:

1. NO crearlo automáticamente
2. Proponer su creación indicando:

- nombre sugerido
- propósito
- variantes necesarias
- relación con el sistema

---

## 5. USO DE ESTILOS

### Prohibido:

- Colores hardcodeados (`#fff`, `rgb`, etc.)
- Estilos inline
- Clases fuera del sistema (ej: `bg-red-500`)
- Uso directo de variables CSS en JSX (ej: `bg-[--color-primary]`)

---

### Obligatorio:

- Usar clases de Tailwind basadas en tokens (ej: `bg-primary`)
- Respetar tipografía, spacing y colores definidos
- Mantener consistencia con DESIGN.md

---

## 6. CONSISTENCIA CON DESIGN.md

Toda interfaz debe:

- respetar las reglas definidas en `DESIGN.md`
- seguir variantes y estados definidos
- mantener coherencia visual

Si hay conflicto:

priorizar Figma y DESIGN.md

---

## 7. COMPORTAMIENTO DE LA IA

La IA debe actuar como:

ensamblador de interfaces, no diseñador creativo

---

### La IA NO debe:

- inventar componentes
- redefinir estilos
- ignorar tokens
- generar UI fuera del sistema

---

### La IA SÍ debe:

- reutilizar componentes
- respetar tokens
- mantener coherencia visual
- proponer mejoras sin implementarlas automáticamente

---

## 8. VALIDACIÓN OBLIGATORIA

Antes de entregar cualquier interfaz, se debe verificar:

✔ ¿Se usaron solo componentes existentes?  
✔ ¿Se usaron solo clases de Tailwind del sistema?  
✔ ¿Se evitaron estilos inline?  
✔ ¿Se respetaron tokens?  
✔ ¿Se respetó DESIGN.md?  

Si alguna respuesta es NO → la implementación es inválida

---

## 9. PRINCIPIO CLAVE

"Si no existe en Figma o en DESIGN.md, no debe existir en el código."