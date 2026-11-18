---
name: Modern Technical Studio
colors:
  surface: '#001231'
  surface-dim: '#001231'
  surface-bright: '#27395a'
  surface-container-lowest: '#000d27'
  surface-container-low: '#061b3b'
  surface-container: '#0b1f3f'
  surface-container-high: '#172a4a'
  surface-container-highest: '#233455'
  on-surface: '#d7e2ff'
  on-surface-variant: '#c3c5d8'
  inverse-surface: '#d7e2ff'
  inverse-on-surface: '#1e3051'
  outline: '#8d90a1'
  outline-variant: '#434655'
  surface-tint: '#b5c4ff'
  primary: '#b5c4ff'
  on-primary: '#00297a'
  primary-container: '#2f6bff'
  on-primary-container: '#000318'
  inverse-primary: '#0051e0'
  secondary: '#51dad4'
  on-secondary: '#003735'
  secondary-container: '#00b0ab'
  on-secondary-container: '#003c3a'
  tertiary: '#49dfa2'
  on-tertiary: '#003824'
  tertiary-container: '#00885d'
  on-tertiary-container: '#000703'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b5c4ff'
  on-primary-fixed: '#00174d'
  on-primary-fixed-variant: '#003cac'
  secondary-fixed: '#72f7f1'
  secondary-fixed-dim: '#51dad4'
  on-secondary-fixed: '#00201f'
  on-secondary-fixed-variant: '#00504d'
  tertiary-fixed: '#6bfcbd'
  tertiary-fixed-dim: '#49dfa2'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#001231'
  on-background: '#d7e2ff'
  surface-variant: '#233455'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  code-snippet:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2rem
  margin: 1.25rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
This design system establishes an architectural, high-precision identity for modern software engineering studios and deep-tech incubators. The aesthetic synthesizes strict technical minimalism with sophisticated, luminous accents—evoking the atmosphere of high-performance developer tooling, cryptographic infrastructure, and algorithmic clarity.

The interface leverages rich, atmospheric depths through disciplined whitespace, subtle structural glassmorphism, crisp hairline boundaries, and controlled radiant gradients. Surfaces are quiet, giving visual priority to code artifacts, technical telemetry, and structured typography. Interactions communicate instantaneous responsiveness, exactness, and institutional dependability.

## Colors
The chromatic palette balances deep abyssal midnight tones with a triumvirate of spectral electric hues:

- **Primary (`#2F6BFF` - Royal Blue):** Anchors core actions, primary interactive states, and high-fidelity navigation marks.
- **Secondary (`#12B5B0` - Electric Teal):** Signals system health, inline links, active statuses, and bridge tones.
- **Tertiary (`#22C58B` - Emerald):** Deployed for deployment success vectors, uptime metrics, and growth indicators.
- **Neutral Canvas (`#0B1F3F` - Abyssal Navy):** The structural foundation. Surfaces shift upward through translucent overlays (`rgba(255, 255, 255, 0.03)` to `0.08)` rather than pure flat tints.
- **Pale Blue Accent (`#EEF6FB`):** Delivers clean contrast for inverted or secondary daytime panels and badge substrates.
- **Radiant Accent Gradient:** `linear-gradient(135deg, #2F6BFF 0%, #12B5B0 50%, #22C58B 100%)` reserved for high-impact hero CTA anchors, focus states, and precision typography knockouts (`background-clip: text`).

Borders on dark modes must strictly utilize `rgba(255, 255, 255, 0.10)`. For rare alternate light-ground containers, utilize slate `#E2E8F0`.

## Typography
The system executes a tri-font hierarchy to communicate technical authority:

1. **Space Grotesk (Headings & Display):** Imparts geometric tension, architectural weight, and algorithmic character. Keyword accents within major headlines leverage the multi-stop gradient with `-webkit-background-clip: text` and transparent fill.
2. **Inter (Body Copy & Interface Context):** Ensures neutral, fatigue-free readability across technical documentation, mission statements, and feature descriptions.
3. **JetBrains Mono (Metadata, Metrics, & Code):** Formulates tags, release hashes, latency statistics, terminal interfaces, and technical labels. All labels and mini badges must be set in uppercase with proportional letter tracking.

## Layout & Spacing
The layout model employs a fluid 12-column grid constrained to a 1280px maximum content shell, centering structural balance:

- **Desktop (1024px+):** 12 columns with 32px (`gutter-desktop`) separation and 64px (`margin-desktop`) canvas padding.
- **Tablet (768px - 1023px):** 8 columns with 24px (`gutter`) separation and 32px canvas margins.
- **Mobile (<767px):** 4 columns with 16px horizontal gutter and 20px (`margin`) outer edge inset.

Vertical rhythm adheres strictly to an 8px grid scale. Sectional transitions require broad breathing room (`space-xl` scaled up to `5rem` or `6rem` via vertical padding), enforcing a calm, confident spatial distribution that eschews clutter.

## Elevation & Depth
Depth is realized through structural glassmorphism and ambient atmospheric glows rather than opaque dropshadows:

- **Base Layer:** Deep abyssal navy `#0B1F3F`.
- **Raised Glass Plate (Cards, Popovers, Modules):** Background set to `rgba(11, 31, 63, 0.65)` layered beneath a `backdrop-filter: blur(16px)` and bounded by a razor-thin 1px border of `rgba(255, 255, 255, 0.1)`.
- **Hover & Highlight Elevation:** Surface opacity shifts to `rgba(255, 255, 255, 0.06)`, accompanied by a diffuse ambient shadow: `0 16px 36px -12px rgba(47, 107, 255, 0.15)`.
- **Interactive Focus & Modals:** Crisp 1px active outline set to `#2F6BFF` supplemented by an outer glow: `0 0 0 3px rgba(47, 107, 255, 0.25)`.

## Shapes
Geometry is disciplined, refined, and uniform. 

- Large structural surface panels, hero containers, and feature showcases apply an exact 24px corner radius (`rounded-xl` / 1.5rem).
- Standard components—such as interactive cards, terminal windows, code sandboxes, and modal dialogues—use a 16px radius (`rounded-lg` / 1rem).
- Small controls, including text inputs, dropdown triggers, and status chips, use an 8px radius (`rounded` / 0.5rem).
- Buttons use either a matching 8px technical radius or a full capsule format when serving strictly as external links or status badges.

## Components

### Buttons
- **Primary CTA:** Styled with the 3-stop signature gradient `linear-gradient(135deg, #2F6BFF, #12B5B0, #22C58B)`, pure white (`#FFFFFF`) bold text, 16px or pill corner radii, and a faint outer glow `0 4px 20px rgba(18, 181, 176, 0.3)`. Hover states expand the glow and subtly shift brightness.
- **Secondary Button:** Translucent glass fill `rgba(255, 255, 255, 0.05)`, 1px border `rgba(255, 255, 255, 0.15)`, text color `#EEF6FB`. On hover, border transitions to `#2F6BFF` with background `rgba(47, 107, 255, 0.1)`.

### Cards & Feature Containers
Constructed with a 16–24px rounded radius, a 1px border of `rgba(255, 255, 255, 0.1)`, and `backdrop-filter: blur(12px)`. Internal padding follows `space-lg` (24px) or `space-xl` (40px). Ambient lighting effects on mouse hover expose a faint, moving linear gradient along the border stroke.

### Input Fields & Controls
- **Inputs:** JetBrains Mono or Inter text, height of 44px, filled with `rgba(255, 255, 255, 0.03)`, bordered by `rgba(255, 255, 255, 0.12)`, corner radius of 8px. Placeholder color set to `rgba(238, 246, 251, 0.4)`. Focus switches border color to `#12B5B0` with an outer ring of `0 0 0 2px rgba(18, 181, 176, 0.2)`.
- **Checkboxes & Radios:** 18px square or circle with an 8px technical corner, border `rgba(255, 255, 255, 0.2)`, filled with `#2F6BFF` upon activation featuring a crisp white SVG checkmark.

### Chips & Technical Status Badges
Rendered using `label-mono-sm` (JetBrains Mono, 11px uppercase). Height of 24px with 8px horizontal padding. Accompanied by a pulsing status indicator dot (e.g., `#22C58B` for live/operational systems) against a tinted background `rgba(34, 197, 139, 0.1)`.

### Terminal & Code Blocks
Specialized container styled with macOS/Linux header dots, dark solid inset background `rgba(6, 17, 36, 0.95)`, 1px border `rgba(255, 255, 255, 0.08)`, and syntax highlighting utilizing `#2F6BFF`, `#12B5B0`, `#22C58B`, and `#EEF6FB`.