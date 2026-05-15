# 🎨 DESIGN SYSTEM UI SKILL (ANTIGRAVITY)

## 🧠 Propósito

Esta skill guía la generación de interfaces de usuario de alta calidad visual, manteniendo consistencia estricta con el sistema de diseño definido.

El objetivo NO es explorar estilos arbitrarios, sino construir interfaces coherentes dentro del design system.

---

## 🔗 RELACIÓN CON REGLAS

Esta skill debe cumplir obligatoriamente la regla:

👉 DESIGN SYSTEM USAGE RULE

Si existe conflicto, la regla tiene prioridad.

---

## 🎯 ENFOQUE DE DISEÑO

Antes de generar código, la IA debe:

1. Entender el propósito de la interfaz
2. Identificar jerarquía visual
3. Definir layout (estructura)
4. Seleccionar componentes existentes
5. Aplicar estilos usando tokens

---

## 🧩 FLUJO DE GENERACIÓN (OBLIGATORIO)

La interfaz debe construirse en este orden:

1. Layout base (contenedores, grid, spacing)
2. Selección de componentes existentes
3. Composición de componentes
4. Aplicación de clases Tailwind
5. Ajustes de jerarquía visual

No saltarse pasos  
No generar UI directamente sin estructura

---

## 🎨 USO DEL SISTEMA DE DISEÑO

La interfaz debe construirse usando exclusivamente:

- componentes existentes
- clases de Tailwind basadas en tokens
- estructura modular del proyecto

---

## 🚫 RESTRICCIÓN FUNDAMENTAL

NO se permite:

- definir nuevos colores
- modificar tipografía base
- usar estilos inline
- usar clases fuera del sistema (ej: bg-red-500)
- usar variables CSS directamente en JSX

---

## 🧱 COMPONENTES

- SIEMPRE reutilizar componentes existentes
- NUNCA crear componentes automáticamente

Si un componente no existe:

1. Detener la implementación
2. Proponer el componente
3. NO implementarlo

---

## ✨ CALIDAD VISUAL

La interfaz debe garantizar:

- jerarquía clara
- spacing consistente
- tipografía correcta
- alineación visual

---

## 🎯 DIFERENCIACIÓN CONTROLADA

La diferenciación se logra mediante:

- composición
- layout
- jerarquía

NO mediante:

- nuevos estilos
- nuevos colores
- nuevas variantes

---

## ⚙️ GENERACIÓN DE CÓDIGO

El código debe:

- usar React + Next.js
- usar Tailwind
- respetar estructura modular
- ser limpio y tipado

---

## 🧪 VALIDACIÓN FINAL (OBLIGATORIA)

Antes de entregar, verificar:

✔ ¿Se usaron solo componentes existentes?  
✔ ¿Se usaron solo clases de Tailwind del sistema?  
✔ ¿Se evitó inline styling?  
✔ ¿Se respetó DESIGN.md?  
✔ ¿Se respetó la regla?  

Si alguna respuesta es NO → regenerar

---

## 🧠 COMPORTAMIENTO DE LA IA

La IA debe actuar como:

👉 ensamblador de interfaces, no diseñador creativo

---

## 🧱 PRINCIPIO CLAVE

"La creatividad ocurre en la composición, no en la invención de estilos."