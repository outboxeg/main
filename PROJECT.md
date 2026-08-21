# Project: برة الصندوق – المدرسة الخضراء الذكية

## Architecture
- Architecture: Vanilla HTML5 / CSS3 / ES6 Modules SPA (Single Page Application).
- Entry Point: index.html + styles.css + app.js.
- Modular Component Pages:
  - pages/home.js (R3: Hero with real photo background, metric counters, value chain, proof section, CTA)
  - pages/about.js (R4: Institutional identity, IP owner Fatima Abdulmajeed Radi, El-Israa Charity Association #1124, MoE Beheira approval, 40% women empowerment photo, field activities, dual logos)
  - pages/knowledge.js (R5: Upcycling hub with 9 real product photo cards, filter chips, guide download)
  - pages/how-it-works.js (R6: 8-stage operational workflow, partner roles)
  - pages/impact.js (R6: Filterable impact dashboard, revenue split visualization 40/25/10/25)
  - pages/calculators.js (R6: EPA WARM v16 carbon calculator, revenue split calculator)
  - pages/forms.js (R6: 5 registration smart forms, LocalStorage persistence, toast alert feedback)
  - pages/smart-platform.js (R6: NISGP 2026 4-level digital maturity simulator, AI advisory roadmap)

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | R1 Design System & Styles | Apple-grade CSS design system (tokens, WCAG AAA contrast, spring physics, glassmorphism, Noto fonts, RTL layout, status badges, dark mode, reduced motion) | M1 | Survey |
| 2 | R2 Shell & Navigation | Accessible HTML shell, Google Fonts preconnect, official transparent logo in header, skip link, JSON-LD structured data, El-Israa logo in footer | M1 | Survey |
| 3 | R3 Homepage & Counters | Dynamic home page with real hero background (برة 13.png), stagger headline, IntersectionObserver animated counters, 6-stage value chain, proof banner, CTAs | M2 | Survey |
| 4 | R4 About & Institutional | Institutional proof page, IP attribution (Fatima Abdulmajeed Radi), El-Israa Association #1124, MoE Beheira approval, 40% women photo (برة 12.png), kids activity photos (برة 10/11), dual logos, 10 values | M2 | Survey |
| 5 | R5 Knowledge Hub & 9 Activities | Upcycling gallery featuring all 9 real product photos (برة 1 to 9), 4/3 aspect ratio, spring lift effect, live subject filter chips, guide download button | M3 | Survey |
| 6 | R6 Operational Workflow & Impact | How it works (8 stages, partner cards) & Impact Dashboard (status filters, revenue split breakdown) | M3 | Survey |
| 7 | R7 Calculators, Forms & Smart Platform | EPA WARM v16 Carbon Calculator, Revenue Split Calculator (40/25/10/25), 5 Smart Forms with LocalStorage, NISGP 2026 4-Level Digital Maturity Simulator | M4 | Survey |
| 8 | R8 Server Launch & Verification | Python HTTP server daemon on port 8080, reachability verification, zero console errors, E2E validation | M5 | Survey |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Core Design & HTML Shell | Rewrite styles.css & index.html with Apple Design, WCAG AAA tokens, Noto Fonts, ARIA shell, logos | none | DONE |
| M2 | Home & About Pages | Rewrite pages/home.js & pages/about.js with real hero/field photos, IntersectionObserver counters, IP & institutional proofs | M1 | DONE |
| M3 | Knowledge Hub & Operational Impact | Rewrite pages/knowledge.js (9 real activity cards + filters) & pages/how-it-works.js & pages/impact.js | M1 | DONE |
| M4 | Calculators, Forms & Smart Platform | Rewrite pages/calculators.js (WARM v16), pages/forms.js (5 forms + LocalStorage), pages/smart-platform.js (NISGP 2026 simulator) & app.js router | M1 | DONE |
| M5 | E2E Testing & Server Launch | Pass 100% E2E test suite, launch Python server on port 8080, verify HTTP reachability | M1, M2, M3, M4 | DONE |

## Code Layout
- `index.html`: SPA HTML shell, head meta/fonts, header logo, main container, footer
- `styles.css`: CSS tokens, WCAG AAA colors, typography, spring motion, glassmorphism, responsive grid, status badges
- `app.js`: SPA HashRouter, navigation active state, mobile drawer toggle, modal/toast utilities
- `pages/home.js`: Home view builder (hero, counters observer, value chain, proof banner)
- `pages/about.js`: About view builder (IP & association proof, photo cards, values, timeline)
- `pages/knowledge.js`: Knowledge hub builder (9 photo cards, filter bar, card renderer)
- `pages/how-it-works.js`: Workflow view builder (8 stages, partner cards)
- `pages/impact.js`: Impact dashboard builder (status filters, revenue split visualizer)
- `pages/calculators.js`: WARM v16 carbon calculator + 40/25/10/25 revenue split calculator
- `pages/forms.js`: 5 registration forms + validation + LocalStorage engine
- `pages/smart-platform.js`: NISGP 2026 digital maturity simulator + AI advisory engine
