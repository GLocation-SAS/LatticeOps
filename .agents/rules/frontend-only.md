---
trigger: always_on
---

---
trigger: always_on
---

# ANTIGRAVITY FRONTEND STANDARD (V1)

Este documento define la arquitectura obligatoria para proyectos **frontend-only** bajo el estándar Antigravity.

El objetivo es:
- Consistencia con Design System
- Escalabilidad modular
- Compatibilidad con despliegue estático (GitHub Pages)

---

## 1. ESTRUCTURA DE RAÍZ

El proyecto debe contener únicamente:

- `/frontend`: Aplicación completa en Next.js

No incluir backend  
No incluir lógica de servidor

---

## 2. FRONTEND (Next.js + React + TypeScript + Tailwind CSS)

Se utiliza **Next.js con App Router en modo estático**.

### Restricciones importantes:

- El proyecto debe ser exportable (`output: "export"`)
- No usar SSR ni Server Actions
- No usar rutas dinámicas dependientes de backend

---

## ORGANIZACIÓN DE CARPETAS

### Estructura obligatoria:

```text
frontend/
├── src/
│   ├── app/             # Rutas (Next.js App Router)
│   │   ├── (auth)/login/page.tsx
│   │   ├── (auth)/register/page.tsx
│   │   ├── dashboard/page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   │
│   ├── components/      # Componentes reutilizables globales
│   │   ├── ui/          # Base del design system (Button, Input, Card)
│   │   └── layout/      # Navbar, Sidebar, Footer
│   │
│   ├── modules/         # Organización por dominio funcional
│   │   └── [module-name]/
│   │       ├── pages/       # Vistas completas
│   │       ├── components/  # UI específica del módulo
│   │       ├── hooks/       # Lógica interna
│   │       └── services/    # Consumo de APIs externas (opcional)
│   │
│   ├── lib/             # Helpers, utils, config
│   ├── context/         # Estado global
│   ├── guards/          # Validaciones de acceso (client-side)
│   └── styles/          # Tokens y estilos globales
│
├── public/
├── tailwind.config.ts
├── next.config.js
└── package.json