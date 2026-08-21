## 2026-08-11T23:48:56Z

You are Worker M1 (Core Design System & Accessible HTML Shell).
Your working directory is: c:\Users\DIAA\.gemini\antigravity\scratch\outbox\.agents\worker_m1
Project workspace: c:\Users\DIAA\.gemini\antigravity\scratch\outbox
Files you own exclusively: styles.css and index.html.

Required Inputs to read first:
1. c:\Users\DIAA\.gemini\antigravity\scratch\outbox\ORIGINAL_REQUEST.md
2. c:\Users\DIAA\.gemini\antigravity\scratch\outbox\.agents\explorer_survey_1\survey_report.md
3. c:\Users\DIAA\.gemini\antigravity\scratch\outbox\.agents\explorer_survey_2\asset_report.md
4. c:\Users\DIAA\.gemini\antigravity\scratch\outbox\.agents\explorer_survey_3\ux_spec_report.md

Your tasks:
1. Complete rewrite of styles.css implementing:
   - Full CSS Custom Properties tokens (--color-primary: #1F7A5A, --color-primary-dark: #0B4F3F, --color-secondary: #1C9A8B, --color-accent: #EA580C, --color-bg: #F4F1E8, --color-surface: #FFFFFF, --color-muted: #E8F1F4, --color-text: #134E4A, --color-border: #D1E8E2, --color-text-secondary: #2D5E52).
   - High-contrast WCAG AAA contrast compliance (7:1 normal text, 4.5:1 large text).
   - Arabic typography: Google Fonts Noto Naskh Arabic (headings 700) and Noto Sans Arabic (body 400/500/700) with line-height: 1.7.
   - Apple design spring physics: .spring-hover { transition: transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 300ms cubic-bezier(0.34, 1.56, 0.64, 1); }, .btn:active { transform: scale(0.97); transition: transform 100ms ease-out; }.
   - Glassmorphism utility: .glass-card, .glass-nav with backdrop-filter: blur(16px) and translucent background.
   - Spatial Consistency: RTL drawer navigation sliding from right translateX(100%) to translateX(0).
   - Status Badges: .badge-certified (#DCFCE7 / #15803D), .badge-estimated (#FEF3C7 / #B45309), .badge-planned (#E0F2FE / #0284C7), .badge-locked (#F1F5F9 / #475569).
   - Responsive breakpoints (375px, 768px, 1024px, 1440px).
   - Dark mode tokens @media (prefers-color-scheme: dark) and reduced motion overrides @media (prefers-reduced-motion: reduce).
   - High contrast visible focus ring :focus-visible { outline: 3px solid #1F7A5A; outline-offset: 2px; }.

2. Complete rewrite of index.html implementing:
   - <html dir="rtl" lang="ar">.
   - Google Fonts preconnect & stylesheet links for Noto Naskh Arabic & Noto Sans Arabic.
   - Header with official transparent logo <img src="./محتوي/لوجو_برة_الصندوق_1-removebg-preview.png" alt="شعار برة الصندوق – المدرسة الخضراء الذكية" height="56">.
   - Accessibility skip link <a href="#main-content" class="skip-link">الانتقال إلى المحتوى الرئيسي</a>.
   - Complete SEO & OpenGraph meta tags + JSON-LD structured data for EducationalOrganization, Fatima Abdulmajeed Radi, El-Israa Association #1124.
   - Main container <main id="main-content" tabIndex="-1" role="main"></main>.
   - Toast container <div id="toast-container" role="status" aria-live="polite"></div>.
   - Footer featuring El-Israa Association logo <img src="./محتوي/لوجو جمعية الاسراء.jpg" height="48"> side-by-side with project copyright 2026.

3. Verify your work by inspecting the rewritten files and running basic syntax/structure checks.

DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Output your handoff report to c:\Users\DIAA\.gemini\antigravity\scratch\outbox\.agents\worker_m1\handoff.md.
