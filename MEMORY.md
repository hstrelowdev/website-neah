# PROJECT MEMORY

## 1. PROJECT IDENTITY

- Organization: Agencia de desarrollo de software.
- Website language: Español.
- Website type: Corporate landing page.
- Target audience: Empresas, startups y emprendedores.
- Main objective: Presentar servicios tecnológicos y captar clientes.

## 2. TECHNOLOGY STACK

- Framework: React.
- Build tool: Vite.
- Styling: Tailwind CSS.
- Icons: Material Symbols Outlined vía Google Fonts (decisión vigente en websiteV2; no añadir `lucide-react`).
- Animations: Framer Motion (cuando sea necesario).

Respetar las versiones existentes y evitar dependencias innecesarias.

## 3. VISUAL IDENTITY

**Style:** Dark / Premium / Tech.

**Color palette:**
- Primary background: #0B1F3F.
- Secondary background: #102A4C.
- Primary blue: #2F6BFF.
- Teal: #12B5B0.
- Emerald: #22C58B.
- White: #FFFFFF.
- Secondary text: #A9B8CC.

**Typography:**
- Headings: Space Grotesk.
- Body: Inter.
- Technical labels: JetBrains Mono.

**Design guidelines:**
- Minimalist interfaces.
- Generous whitespace.
- Rounded corners: 16px–24px.
- Subtle borders and shadows.
- Blue-to-emerald gradients for primary CTAs.
- Subtle animations.
- Consistent responsive layouts.

## 4. BRAND POSITIONING

The organization provides:
- Custom software development.
- Web application development.
- AI and automation.
- E-commerce and integrations.

Brand attributes:
- Professional.
- Innovative.
- Technical.
- Reliable.
- Modern.

## 5. CURRENT DESIGN DECISIONS

- Dark visual identity.
- Máximo cinco secciones en la homepage, además de header y footer (websiteV2).
- Minimalist navigation.
- Technical visual elements instead of generic stock photography.
- No artificial statistics or fabricated testimonials.
- No unnecessary carousels or decorative components.

## 6. PROJECT STATUS

Update this section when relevant decisions, requirements or implementation milestones change.

- `websiteV2`: landing corporativa de **Nexora Labs** implementada y validada; `npm run build` y `npm test` pasan (3 archivos, 6 pruebas).
- Estructura: 5 secciones + header + footer en español, tokens de `websiteV2/DESIGN.md` (*Modern Technical Studio*).
- Contacto: todos los CTAs dicen **“Enviar mensaje”** y abren el mismo diálogo accesible; envío real a Formspree (`https://formspree.io/f/mgakydlg`, sobrescribible con `VITE_FORMSPREE_ENDPOINT`).
- Decisiones de contenido: se eliminaron cifras y garantías no verificables; la consola del hero y el tablero CI/CD están etiquetados como demo/simulación.
- Validación responsive (1440, 768 y 390 px): sin overflow horizontal, sin errores de consola, modal con foco inicial y cierre con Escape, replay del pipeline correcto.
- Skills instaladas: `frontend-design` y `webapp-testing` en `.agents/skills/`, registradas en `skills-lock.json`.
- Demos en GitHub Pages: un workflow publica un portal en la raíz, websiteV1 en `/v1/` y websiteV2 en `/v2/`. Ambas apps usan `base: './'` para rutas relativas. Requiere `Settings → Pages → Source: GitHub Actions`.
- Pendiente: confirmar que el usuario cambió el Source de Pages y verificar los envíos reales a Formspree en la demo pública.

## 7. REGLAS DE FLUJO GIT (VIGENTE)

- **El agente NUNCA hace `git push` ni publica cambios en un remoto**, por ningún motivo, incluso si se le pide explícitamente. Solo opera en local; todo push lo realiza el usuario por su cuenta.
- **El agente NUNCA commitea secretos** (`.env`, API keys, tokens, credenciales). `.env` debe permanecer ignorado por git (ya está en `.gitignore`). Si aparece un secreto en el historial, avisar al usuario para que lo rote y decida cómo purgar el historial.