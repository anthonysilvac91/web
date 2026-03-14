# CoreMetrics Media - Landing Page Project

Este documento sirve como la fuente de verdad inicial y la documentación central para el desarrollo de la landing page de **CoreMetrics Media**. Detalla la dirección de diseño seleccionada y la arquitectura técnica escalable acordada para el proyecto.

## 1. Visión y Dirección de Diseño

CoreMetrics Media es una agencia moderna enfocada en marketing de performance, IA y datos.

*   **Identidad Visual Seleccionada:** "Concepto B: Estilo Moderno Start-Up / AI Company".
*   **Atmósfera:** Tecnológica, dinámica, disruptiva, de alto rendimiento y "premium".
*   **Estética Core:** 
    *   Fondos oscuros profundos (`#0b0f19`).
    *   Acentos brillantes en verde neón (`#00ff66`).
    *   Uso extensivo de *Glassmorphism* (tarjetas y menús translúcidos con efecto de cristal esmerilado).
    *   Tipografía moderna sin remates (ej. *Inter* o *Outfit*).

## 2. Arquitectura Técnica y Entorno (Scale-Ready)

Para asegurar que la web sea ultrarrápida, SEO-friendly y preparada para escalar (CMS futuro, multi-página, analítica compleja), el proyecto se construirá sobre las siguientes bases:

### Stack Principal
*   **Framework:** Next.js (App Router)
*   **Lenguaje:** TypeScript (Para seguridad de tipos y mejor DX)
*   **Estilos y Layout:** Tailwind CSS
*   **Efectos Premium (Glass/Neon):** CSS Custom Modules o clases utilitarias extendidas en `globals.css`
*   **Iconografía:** `lucide-react`

### Herramientas de Escalabilidad y UX Avanzada
*   **Animaciones y Microinteracciones:** `framer-motion` (imprescindible para el "efecto WOW" y las transiciones fluidas de las tarjetas *glass*).
*   **Manejo de Formularios:** `react-hook-form` (para rendimiento óptimo sin re-renders).
*   **Validación de Datos:** `zod` (esquemas de validación potentes integrados con el formulario de contacto).
*   **Optimización de Medios:** `next/image` (para carga perezosa y redimensionamiento automático de assets gráficos pesados).

## 3. Estructura del Proyecto (Estructura de Directorios)

El proyecto se organizará en el directorio `/home/anthony/Escritorio/Proyectos/coremetrics_media/web` siguiendo la convención de `src/` de Next.js:

```text
web/
├── public/                 # Assets estáticos (logos, fuentes, imágenes para next/image)
├── src/
│   ├── app/                # Enrutador principal de Next.js
│   │   ├── layout.tsx      # Estructura global (Navbar, Footer, Meta SEO)
│   │   ├── page.tsx        # Homepage (Ensamblaje de la Landing)
│   │   └── globals.css     # CSS Global (Tailwind base + utilidades Glass/Neon)
│   ├── components/         # Sistema de Diseño UI
│   │   ├── ui/             # Componentes atómicos (Button, GlassCard, input)
│   │   ├── layout/         # Componentes de envoltura estructural
│   │   └── sections/       # Bloques grandes de la página (Hero, Servicios, Pipeline)
│   ├── content/            # Contenido Desacoplado
│   │   └── landing.ts      # (Diccionario JSON/TS con todos los textos y datos)
│   └── lib/                # Lógica pura de negocio y utilidades
│       ├── utils.ts        # Ej. merge de clases para Tailwind (clsx)
│       └── tracking.ts     # Stubs y abstracciones para GTM, Pixel, Posthog
├── tailwind.config.ts      # Extensión del tema con colores corporativos
└── tsconfig.json           # Configuración Typescript
```

## 4. Filosofía de Implementación Clave

1.  **Contenido Desacoplado (`src/content/`):** Ningún título o párrafo de marketing debe estar *hardcodeado* dentro de los componentes React. Todo se consumirá de un archivo de datos. Esto prepara la web para un Headless CMS en Fase 2.
2.  **Tracking First (`src/lib/tracking.ts`):** Todos los botones clave (CTAs) deberán llamar a un método genérico de tracking (ej. `trackConversion('hero_cta_click')`) que temporalmente enviará un `console.log`, pero dejará el proyecto listo para inyectar Google Tag Manager.
3.  **Client/Server Component Split:** Mantendremos la mayor cantidad de componentes como "Server Components" por defecto en Next.js para cuidar el tamaño del bundle, y solo usaremos `'use client'` estrictamente donde se requiera `framer-motion`, estado de React (`useState`), o manejadores de eventos (botones y formularios).

*Documento generado en la fase de planificación inicial (arquitectura aprobada).*
