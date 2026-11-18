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
