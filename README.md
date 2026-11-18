# website-neah

Landing page de **CommitLine** migrada del mockup de Stitch (`code.html`) a React + Vite + TypeScript + Tailwind CSS v4.

## Comandos

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # chequeo de tipos + build de producción
npm test         # Vitest + React Testing Library
npm run preview  # servir el build
```

## Estructura

```
src/
  App.tsx                  # composición de la landing
  data/site.ts             # todo el texto y las listas del mockup
  styles/index.css         # design tokens (DESIGN.md) + animaciones
  components/
    ui/                    # primitivas reutilizables
    layout/                # header, footer, rail, contenedor de sección
    sections/              # una sección por bloque del mockup
  test/setup.ts
```


## link de plataforma usada para el css 
https://stitch.google.com/projects/14164242377883386247

Para cambiar textos, métricas o listas, editar `src/data/site.ts`; los componentes solo consumen props.

## websiteV2 — Nexora Labs

App independiente en `websiteV2/` con React + Vite + TypeScript + Tailwind CSS v4, basada en `websiteV2/DESIGN.md` (*Modern Technical Studio*). Mantiene la visual técnica del mockup pero con funcionalidad real.

```bash
cd websiteV2
npm install
npm run dev
npm run build
npm test
```

- 5 secciones en español: Hero, Servicios, Telemetría, Proceso y CTA final, más header y footer.
- Todos los CTAs de contacto dicen **“Enviar mensaje”** y abren el mismo diálogo accesible.
- El formulario envía por `fetch` a Formspree: `https://formspree.io/f/mgakydlg`. Se puede sobrescribir con `VITE_FORMSPREE_ENDPOINT`. El éxito solo se muestra si la respuesta es correcta.
- No se incluyen estadísticas ni garantías no verificables; la consola del hero y el tablero CI/CD están marcados como demo/simulación.
- Ver `websiteV2/README.md` para detalles de estructura y contenido simulado.

## Demos en GitHub Pages

Un único workflow (`.github/workflows/deploy-pages.yml`) compila y publica ambas apps:

- `https://hstrelowdev.github.io/website-neah/` — portada con enlaces a las dos versiones.
- `https://hstrelowdev.github.io/website-neah/v1/` — websiteV1 (CommitLine).
- `https://hstrelowdev.github.io/website-neah/v2/` — websiteV2 (Nexora Labs).

Requisito: en `Settings → Pages → Source` elegir **GitHub Actions**. Cada push a `main` actualiza las demos. Ambas apps usan `base: './'` en `vite.config.ts` para que los assets carguen dentro de `/v1/` y `/v2/`.
