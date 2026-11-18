# websiteV2 — Nexora Labs

Landing corporativa en español construida con **React + Vite + TypeScript + Tailwind CSS v4**, siguiendo `DESIGN.md` (*Modern Technical Studio*).

## Comandos

```bash
npm install
npm run dev
npm run build
npm test
npm run preview
```

## Estructura

```
src/
  App.tsx                    # composición y estado del modal de contacto
  data/site.ts               # textos, enlaces y contenido centralizado
  styles/index.css           # tokens de DESIGN.md + utilidades visuales
  components/
    ui/                      # Button, Icon, StatusBadge, TerminalPanel, PipelineBoard, ContactDialog...
    layout/                  # Header, Footer, Container, GitSpine
    sections/                # Hero, Services, Telemetry, Process, FinalCta
  test/setup.ts
```

## Formulario de contacto

Todos los CTAs **“Enviar mensaje”** abren el mismo diálogo accesible. El envío se realiza con `fetch` a Formspree:

- Endpoint por defecto: `https://formspree.io/f/mgakydlg`.
- Se puede sobrescribir con `VITE_FORMSPREE_ENDPOINT` en `.env.local`.
- No se muestra un estado de éxito si la petición falla.
- Incluye `_replyto`, `_subject` y un campo honeypot `_gotcha`.

## Contenido simulado

El tablero CI/CD y la consola del hero están etiquetados explícitamente como demostración. No se muestran métricas de negocio no verificables.
