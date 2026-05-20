# DESIGN SYSTEM - DESIGNENGINE

Este documento es la fuente de verdad para los estilos, componentes y decisiones visuales del proyecto. Está directamente alineado con los tokens exportados desde Figma.

---

## 1. COLORES

Los valores expuestos provienen de los tokens base y semánticos, usando la estructura simplificada para frontend (`variables-colors.json`).

### Colores principales

| Token | Valor (500) | Uso |
|------|------|-----|
| primary | `#1E99C4FF` | Acciones principales, botones primarios, enlaces destacados |
| secondary | `#114063FF` | Elementos secundarios, acciones de soporte, componentes menos prominentes |
| white | `#FFFFFFFF` | Fondo principal, color de texto invertido |
| black | `#18181BFF` | Texto principal (neutral-900), fondos oscuros |

**Escala Primary (Sky Blue):**

| Nivel | Valor | Uso |
|-------|-------|-----|
| 50 | `#EAF6FA` | Fondos de acento sutiles |
| 100 | `#D5EDF5` | Fondos de componentes secundarios, badges de acción |
| 200 | `#ABE1F0` | Bordes decorativos, estados activos suaves |
| 300 | `#81D5EB` | Iconos secundarios |
| 400 | `#57C9E6` | Acentos interactivos |
| 500 | `#1E99C4` | **Color base**, CTAs secundarios, iconos activos |
| 600 | `#187BA1` | Hover de elementos secundarios |
| 700 | `#125D7E` | Active/Pressed de elementos secundarios |
| 800 | `#0D4056` | Texto sobre fondos claros de acento |
| 900 | `#07222F` | Subrayados y detalles destacados |

**Escala Secondary (Navy Blue):**

| Nivel | Valor | Uso |
|-------|-------|-----|
| 50 | `#E8F2F9` | Fondos muy sutiles, estados hover ligeros |
| 100 | `#D1E5F3` | Fondos de componentes, badges |
| 200 | `#A3CCE7` | Bordes secundarios, estados activos suaves |
| 300 | `#75B3DB` | Elementos decorativos, ilustraciones |
| 400 | `#479ACF` | Iconos secundarios, estados hover de texto |
| 500 | `#114063` | **Color base**, botones principales, headings |
| 600 | `#0D334F` | Hover de botones primarios |
| 700 | `#0A263B` | Active/Pressed de botones primarios |
| 800 | `#071927` | Texto sobre fondos muy claros |
| 900 | `#030D14` | Detalles de máxima jerarquía, textos oscuros |

*Nota: Se lista el valor 500 como color de base para `primary` y `secondary`. Las escalas completas van del 50 al 900.*

---

### Colores de estado

Las siguientes escalas se utilizan para dar retroalimentación visual al usuario en toda la interfaz.

| Nivel | Success | Warning | Error | Info |
|-------|---------|---------|-------|------|
| 50 | `#ECFDF5FF` | `#FFFBEBFF` | `#FEF2F2FF` | `#F5F3FFFF` |
| 100 | `#D1FAE5FF` | `#FEF3C7FF` | `#FEE2E2FF` | `#EDE9FEFF` |
| 200 | `#A7F3D0FF` | `#FDE68AFF` | `#FECACAFF` | `#DDD6FEFF` |
| 300 | `#6EE7B7FF` | `#FCD34DFF` | `#FCA5A5FF` | `#C4B5FDFF` |
| 400 | `#34D399FF` | `#FBBF24FF` | `#F87171FF` | `#A78BFAFF` |
| 500 | `#359669FF` | `#F59E0BFF` | `#EF4444FF` | `#7C3AEDFF` |
| 600 | `#2B7A55FF` | `#D97706FF` | `#DC2626FF` | `#6D28D9FF` |
| 700 | `#205D42FF` | `#B45309FF` | `#B91C1CFF` | `#5B21B6FF` |
| 800 | `#16412EFF` | `#92400EFF` | `#991B1BFF` | `#4C1D95FF` |
| 900 | `#0C241AFF` | `#78350FFF` | `#7F1D1DFF` | `#2E1065FF` |

**Uso por tipo:**
- **success**: Mensajes de éxito, confirmaciones, estados positivos.
- **warning**: Alertas, acciones que requieren atención.
- **error**: Mensajes de error, acciones destructivas, validaciones fallidas.
- **info**: Información neutra, mensajes de estado, badges informativos.

*Nota: Los tonos claros (ej. 50/100) son ideales para fondos, los medios (200-400) para bordes, el 500 para el elemento principal, y los oscuros (700-900) para iconos o texto.*

---

### Escala neutral

Utilizada para fondos, bordes, divisiones, y textos de menor jerarquía.

| Token | Valor |
|------|------|
| 50 | `#F8FAFCFF` |
| 100 | `#F1F5F9FF` |
| 200 | `#E2E8F0FF` |
| 300 | `#CBD5E1FF` |
| 400 | `#94A3B8FF` |
| 500 | `#64748BFF` |
| 600 | `#475569FF` |
| 700 | `#334155FF` |
| 800 | `#1E293BFF` |
| 900 | `#0F172AFF` |

---

### Uso de color

- **Primary**: Utilizar para el flujo principal de la aplicación. Botones de llamada a la acción (CTA) y elementos que guían al usuario.
- **Secondary**: Opciones alternativas o de menor prioridad visual frente a las primarias.
- **Neutrales**: Tonos del 50 al 200 para fondos de aplicación o tarjetas. Tonos del 300 al 500 para bordes y estados deshabilitados. Tonos del 600 al 900 para jerarquía tipográfica (textos secundarios y primarios).
- **Estados**: Exclusivos para retroalimentación al usuario. No usarlos como decoración (ej. no usar `error` solo porque se quiere un botón rojo sin que sea una acción destructiva).

---

## 2. TIPOGRAFÍA

### Fuentes

| Rol | Fuente | Uso |
|-----|--------|-----|
| Primaria | **Montserrat** | Encabezados (`h1`–`h6`), elementos UI, etiquetas, títulos |
| Secundaria | **Nunito** | Cuerpo de texto, párrafos, descripciones |

### Pesos disponibles

| Fuente | Pesos |
|--------|-------|
| Montserrat | 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold) |
| Nunito | 400 (Regular), 600 (SemiBold), 700 (Bold) |

### Variables CSS

| Variable | Valor |
|----------|-------|
| `--font-montserrat` | Fuente primaria (headings/UI) |
| `--font-nunito` | Fuente secundaria (body text) |

### Reglas de uso

- Usar `font-family: var(--font-montserrat)` para toda jerarquía de encabezados y etiquetas de componentes.
- Usar `font-family: var(--font-nunito)` para párrafos, descripciones y cuerpo de texto.
- No usar fuentes externas al sistema sin validación en Figma.

---

## 3. ESPACIADO

Sistema métrico para márgenes, paddings y distancias entre elementos, extraído de los tokens primarios, permitiendo consistencia visual.

| Token | Valor | Equivalencia |
|------|------|-------------|
| 0 | 0 | 0px |
| 1 | 4 | 4px |
| 2 | 8 | 8px |
| 3 | 12 | 12px |
| 4 | 16 | 16px |
| 5 | 20 | 20px |
| 6 | 24 | 24px |
| 8 | 32 | 32px |
| 10 | 40 | 40px |
| 12 | 48 | 48px |

---

## 4. RADIOS, BORDES, OPACIDAD Y SOMBRAS

### Border Radius (Radios)

| Token | Valor |
|------|------|
| none | 0px |
| sm | 4px |
| md | 8px |
| lg | 12px |
| xl | 16px |
| full | 9999px |

### Border Width (Ancho de Borde)

| Token | Valor |
|------|------|
| 0 | 0px |
| 1 | 1px |
| 2 | 2px |
| 4 | 4px |

### Opacidad

| Token | Valor |
|------|------|
| 0 | 0 (0%) |
| 25 | 0.25 (25%) |
| 50 | 0.5 (50%) |
| 75 | 0.75 (75%) |
| 100 | 1 (100%) |

### Elevación (Sombras)

| Token | Valor |
|------|------|
| 0 | none |
| 1 | 0px 1px 2px 0px rgba(0, 0, 0, 0.1) |
| 2 | 0px 4px 8px 0px rgba(0, 0, 0, 0.12) |
| 3 | 0px 8px 16px 0px rgba(0, 0, 0, 0.14) |
| 4 | 0px 12px 24px 0px rgba(0, 0, 0, 0.16) |
| 5 | 0px 16px 32px 0px rgba(0, 0, 0, 0.18) |

---

## 5. COMPONENTES BASE

### Button

**Variantes:**
- `primary`: Fondo primary-500, texto white.
- `secondary`: Fondo secondary-500, texto white.
- `success`: Fondo success-500, texto white.
- `error`: Fondo error-500, texto white.
- `info`: Fondo info-500, texto white.
- `warning`: Fondo warning-500, texto white.
- `outline`: Borde primary-500 o secondary-500, fondo transparente.
- `ghost`: Sin fondo ni borde inicial, fondo sutil al interactuar.

**Estados:**
- `default`: Estado base.
- `hover`: Oscurecer el fondo ligeramente (ej. de 500 a 600).
- `active`: Clic presionado (ej. de 600 a 700).
- `disabled`: Fondo neutral-200, texto neutral-600. Inactivo.

**Reglas de uso:**
- Utilizar componentes predefinidos sin sobrescribir estilos inline.
- Solo puede haber un botón primary por sección principal.

### Relación con Figma

Este componente debe corresponder exactamente con su equivalente en Figma, incluyendo:

- proporciones
- spacing
- tipografía
- comportamiento visual
---

### Input

**Estados:**
- `default`: Borde neutral-300, fondo blanco.
- `focus`: Borde primary-500, sin outline de navegador.
- `error`: Borde error-500, texto de ayuda en error-500.
- `disabled`: Fondo neutral-100, texto neutral-600.

**Reglas de uso:**
- Deben incluir siempre una etiqueta visual clara.
- El ancho debe ser consistente con la cuadrícula de diseño.

### Documentación de Estados para Campos de Texto (Input & Textarea)

Cada campo de texto en el sistema debe responder a los siguientes estados para garantizar una usabilidad superior:

- **Estado Default**: Estado base antes de la interacción. Se usa para campos no tocados.
- **Estado Hover**: Se activa al pasar el cursor. Resalta el campo de manera sutil con un cambio suave de borde y la aparición del resplandor inferior.
- **Estado Focus**: Activado por clic o teclado. Es visualmente distinto al hover, reforzando la presencia del cursor dentro del campo mediante un borde más definido y una sombra de acento.
- **Estado Disabled**: Campo no interactuable. Utiliza un fondo gris claro (`neutral-100/200`) para indicar que no es editable por falta de permisos o lógica de negocio.
- **Estado Error**: Se activa ante validaciones fallidas. El borde cambia a rojo (`error-500`), se añade un icono de advertencia y se muestra un mensaje descriptivo debajo del campo.
- **Estado Success**: Indica una validación exitosa. El campo se resalta en verde (`success-500`) e incluye un icono de check para confirmar la acción positiva.

---

### Textarea (Área de Texto)

El componente `Textarea` permite la entrada de múltiples líneas de texto, manteniendo la coherencia visual con los campos de entrada estándar.

- **Dimensiones**: Altura mínima de `120px` para asegurar espacio suficiente de redacción.
- **Padding**: `px-6 py-4` para un equilibrio visual entre el borde y el contenido.
- **Funcionalidad Especial**: Soporta un icono de `Sparkles` (autocompletado/IA) en la esquina superior derecha para indicar ayudas inteligentes o sugerencias disponibles.
- **Estados**: Sigue la lógica estándar de los campos de texto, con transiciones de `0.3s`.

---

---

### Modal (Diálogos)

Los modales proporcionan un plano de interacción superior para retroalimentación crítica, confirmaciones y flujos de trabajo detallados.

- **Jerarquía de Tamaños**:
    - **Large (L)**: `max-w-[640px]`. Para formularios complejos y visualización de datos.
    - **Medium (M)**: `max-w-[540px]`. Estándar para la mayoría de avisos y configuraciones rápidas.
    - **Small (S)**: `max-w-[400px]`. Ideal para confirmaciones binarias (Sí/No) y alertas cortas.
- **Configuración Visual**:
    - **Radio de Borde**: `rounded-[48px]`. Curvatura pronunciada para un aspecto orgánico y premium.
    - **Overlay**: Fondo `bg-black/60` con `backdrop-blur-md` para aislar el contenido.
    - **Sombra**: `shadow-2xl` para profundidad máxima.
- **Documentación de Estados Semánticos**:
    - **Success**: Icono de check, resplandor verde suave. Indica éxito total.
    - **Error**: Icono de alerta, resplandor rojo suave. Indica fallos o prohibiciones.
    - **Warning**: Icono de triángulo, resplandor ámbar suave. Requiere atención o precaución.
    - **Info**: Icono de información, resplandor azul/violeta suave. Proporciona contexto adicional.

---

---

### Buscador (Search Input)

El `Buscador` es una variante especializada del componente `Input` diseñada para filtrar y localizar información rápidamente.

- **Configuración de Iconos**:
    - **Icono Primario**: Lupa (`Search`) ubicada a la derecha.
    - **Botón de Limpieza**: Una `X` que aparece a la izquierda de la lupa cuando el campo contiene texto.
    - **Separador**: Una línea vertical sutil entre la `X` y la lupa para mejorar la jerarquía visual de los controles.
- **Tamaños**: Disponible en 4 variantes (XS, S, M, L) para adaptarse a diferentes contextos.
- **Interacción**: Al limpiar el campo, el foco vuelve automáticamente al input para continuar la búsqueda.

---

### Badge (Indicadores)

Los badges son pequeños elementos de UI utilizados para categorizar información y mostrar estados rápidos.

- **Estilo Visual**:
    - **Forma**: Cápsula (`rounded-full`).
    - **Tipografía**: `text-[10px]`, peso `black`, tracking expandido.
    - **Padding**: `py-1.5 px-3` para un aspecto elevado.
- **Variaciones**:
    - **Core**: Primary y Secondary.
    - **Semánticas**: Success, Error, Warning e Info.
    - **Funcional**: Soporta un punto de estado (`showDot`) opcional para reforzar la visibilidad.

---

### Dropdown (Selector)

El componente `Dropdown` gestiona selecciones únicas de una lista predefinida, con soporte para filtrado y estados complejos.

- **Jerarquía de Tamaños**:
    - **Large (56px)**: Formularios de alto impacto.
    - **Medium (44px)**: Estándar administrativo.
    - **Small (40px)**: Control de filtros.
    - **Extra Small (36px)**: Micro-menús.
- **Configuración Visual**:
    - **Radio de Borde**: `rounded-xl` (16px).
    - **Sombras**: Utiliza `shadow-2xl` en la lista desplegable para elevar el componente sobre el plano base.
    - **Iconografía**: Soporta iconos a la izquierda para contextualizar la selección (ej: bandera para países, avatar para usuarios).
- **Documentación de Estados**:
    - **Default**: Estado inactivo, borde neutral-300.
    - **Active**: Se resalta el borde en `primary-500` y se despliega el menú con un `z-index` elevado.
    - **Disabled**: Bloquea toda interacción y visuales de hover.
    - **Error/Success**: Proporciona feedback semántico inmediato mediante colores de borde y fondos suaves.

---

### Card

**Variantes:**
- `default`: Contenedor básico.
- `interactive`: Tarjeta que actúa como enlace o botón.

**Estados (Interactive):**
- `hover`: Aumentar sutilmente la sombra o cambiar borde a primary-500.

**Reglas de uso:**
- Fondo blanco (`#FFFFFFFF`).
- Bordes redondeados según escala de radius de los tokens predefinidos (ej. `md` = 8px, `lg` = 12px).
- Usar tokens de espaciado para padding interno (ej. `4` = 16px).

---

## 6. PRINCIPIOS DE DISEÑO

- **Consistencia sobre creatividad**: Respetar los tokens establecidos en Figma por encima de invenciones espontáneas.
- **Reutilización sobre duplicación**: Emplear los componentes del Design System en lugar de construir UI de un solo uso.
- **Claridad sobre complejidad**: Las interfaces deben ser intuitivas y el uso de los colores debe guiar, no distraer al usuario.

---

## 7. RESTRICCIONES

- **No usar colores fuera del sistema**: Prohibido usar hex o rgb sueltos (ej. `color: #ff0000`). Utilizar siempre referencias a los tokens.
- **No usar estilos inline**: Todo debe gestionarse mediante clases utilitarias integradas con los tokens.
- **No crear componentes sin validación**: Si un patrón se repite, debe validarse su diseño en Figma antes de programarlo.
- **No modificar la escala de espaciado**: No añadir espacios intermedios (ej. un `14px` manual) si no existe en la tabla de espaciados.

---

## 8. PRINCIPIO CLAVE

"El diseño se define en este documento. El código lo implementa."

---

## 9. TAMAÑOS Y PROPORCIONES DE COMPONENTES

Define dimensiones explícitas para garantizar consistencia visual y evitar variaciones arbitrarias.

> **Regla General Obligatoria:** Todos los componentes de interfaz deben utilizar el tamaño `md` (Medium) por defecto. Solo se aplicarán otros tamaños (`xs`, `sm`, `lg`) cuando el usuario lo solicite explícitamente o el contexto del diseño lo requiera de forma ineludible.

---

### 🔘 Button

#### Tamaños

| Tamaño | Altura | Padding horizontal | Padding vertical | Font size | Gap (icono–texto) |
|--------|--------|-------------------|-----------------|-----------|-------------------|
| `xs`   | 36px   | 16px (`px-4`)     | 8px (`py-2`)    | `text-sm` (14px) | 8px (`gap-2`) |
| `sm`   | 40px   | 20px (`px-5`)     | 10px (`py-2.5`) | `text-sm` (14px) | 8px (`gap-2`) |
| `md`   | 44px   | 20px (`px-5`)     | 10px (`py-2.5`) | `text-base` (16px) | 8px (`gap-2`) |
| `lg`   | 56px   | 24px (`px-6`)     | 12px (`py-3`)   | `text-lg` (18px)   | 8px (`gap-2`) |
| `icon` | 40px   | — (cuadrado)      | —               | —         | — |

> El tamaño `icon` produce un botón cuadrado de **40×40px** (`h-10 w-10`), pensado exclusivamente para botones de un solo icono sin texto.

#### Reglas

- La **altura es fija** (`h-[Xpx]`) y no depende del contenido. Nunca usar `auto` ni dejar que el contenido defina la altura.
- Los **iconos** deben tener un tamaño coherente con el texto del botón:
  - `xs` / `sm` → icono de **16px** (`size-4`)
  - `md` → icono de **18px** (`size-[18px]`) o **20px** (`size-5`)
  - `lg` → icono de **20px** (`size-5`) o **24px** (`size-6`)
- El **espaciado entre icono y texto** es siempre `gap-2` (**8px**), controlado por el CVA en todos los tamaños con texto.
- El botón ocupa el **100% del ancho** de su contenedor por defecto (`w-full`). Para ancho automático, usar la prop `fullWidth={false}` o sobreescribir con `w-auto` vía `className`.

---

### ⌨️ Input

#### Tamaños

| Tamaño | Altura | Font size |
|--------|--------|-----------|
| `xs`   | 36px   | `text-xs` (12px) |
| `sm`   | 40px   | `text-sm` (14px) |
| `md`   | 44px   | `text-sm` (14px) |
| `lg`   | 56px   | `text-base` (16px) |

#### Reglas

- La **altura es fija** (`h-[Xpx]`) e incluye el borde de 2.5px.
- El **padding horizontal** del contenedor es fijo a **24px** (`px-6`).
- El **espaciado interno** (gap) entre el texto, iconos y elementos de feedback es de **16px** (`gap-4`).
- El componente se adapta al ancho de su contenido o contenedor con `w-fit` de base, pero sus elementos internos usan `flex-1` para ocupar el espacio disponible.

---

### 🔽 Dropdown

#### Tamaños (Contenedor principal)

| Tamaño | Altura | Font size |
|--------|--------|-----------|
| `xs`   | 36px   | `text-xs` (12px) |
| `sm`   | 40px   | `text-sm` (14px) |
| `md`   | 44px   | `text-sm` (14px) |
| `lg`   | 56px   | `text-base` (16px) |

#### Reglas del selector

- La **altura es fija** e incluye un borde de **2.5px**.
- El **padding horizontal** es de **24px** (`px-6`).
- El **espaciado general interno** es de **16px** (`gap-4`), mientras que el grupo de iconos de la derecha (limpiar selección, error, flecha) mantiene un espaciado de **5px** (`gap-[5px]`).
- Los separadores de los iconos en el bloque derecho tienen un tamaño de **1.5px × 14px**.

#### Menú desplegable (Lista de opciones)

- **Separación** con el selector principal: **8px** (top: `calc(100% + 8px)`).
- **Border-radius**: **8px** (`rounded-[8px]`).
- **Grosor del borde**: **2.5px**.
- **Altura máxima del menú**: **240px** (`max-h-[240px]`) con scroll interno.
- **Opciones de la lista**: Padding de **16px horizontal** y **12px vertical** (`px-[16px] py-[12px]`) con fuente tamaño 14px (`text-[14px]`).

---

*Si no está en DESIGN.md, no existe en el diseño.*