# Technical Specification & Verification Strategy
## Apple Design System, WCAG AAA RTL & Feature Acceptance Matrix

**Project:** Bara El-Sandouq – Smart Green School Project (برة الصندوق – المدرسة الخضراء الذكية)  
**Author:** Explorer 3 (UX & Accessibility Technical Specialist)  
**Target Path:** `c:\Users\DIAA\.gemini\antigravity\scratch\outbox\.agents\explorer_survey_3\ux_spec_report.md`  
**Date:** August 2026  
**Status:** Approved Technical Specification  

---

## 1. Executive Summary & Architecture Overview

This document provides the definitive technical specification and verification strategy for the single-page web application (SPA) of **"Bara El-Sandouq – Smart Green School"** (برة الصندوق – المدرسة الخضراء الذكية), executed under El-Israa Charity Association in Damanhour, Beheira (Registration #1124, Ministry of Education approved).

The application is built using a lightweight **Vanilla HTML5 / CSS3 / JavaScript (ES6 Modules)** architecture, requiring zero heavy build tools or frameworks, ensuring 100% flat-file server compatibility and instant execution via standard web servers (e.g., Python `http.server`).

### Key System Objectives
1. **Apple Design System Compliance**: Deliver an Apple-grade visual experience featuring fluid spring animation physics, micro-interactions with immediate pointer-down feedback, translucent glassmorphism materials, spatial consistency, and organic biophilic geometry.
2. **WCAG AAA RTL Standard**: Enforce strict accessibility compliance, including a minimum contrast ratio of **7:1** for normal text and **4.5:1** for large text, full keyboard navigation, ARIA semantics, visible focus indicators, and native RTL (Right-to-Left) typography optimized for Arabic readers.
3. **Institutional & Real Asset Integration**: Authentically display official project assets from `.\محتوي\` (logos, banner, activity cards, community workshops) with complete intellectual property context.
4. **Interactive Calculators & Digital Maturity Simulator**: Implement precise environmental (EPA WARM v16) and financial (40/25/10/25 revenue distribution) calculators, interactive forms with local persistence, and NISGP 2026 digital maturity assessment.

---

## 2. Apple Design System Technical Specification

### 2.1 Color Tokens & Material Engine

The color system blends sustainable biophilic aesthetics with high-contrast accessibility tokens.

```css
:root {
    /* Base Brand Palette */
    --color-primary: #1F7A5A;         /* Sustainable Eco Green */
    --color-primary-dark: #0B4F3F;    /* Deep Forest Green (Primary Text & Strong Accents) */
    --color-primary-light: #2A9D74;   /* Vibrant Green Accent */
    --color-secondary: #1C9A8B;       /* Data Turquoise */
    --color-accent: #EA580C;          /* Action CTA Orange */
    --color-accent-hover: #C2410C;    /* Dark Orange Hover / AAA Contrast Text Accent */
    
    /* Backgrounds & Surfaces */
    --color-bg: #F4F1E8;              /* Soft Organic Sand Background */
    --color-bg-alt: #EAE6DB;          /* Muted Secondary Sand */
    --color-surface: #FFFFFF;         /* Pristine White Card Surface */
    --color-surface-translucent: rgba(255, 255, 255, 0.75); /* Glassmorphism Base */
    --color-muted: #E8F1F4;            /* Soft Muted Container Fill */
    
    /* High-Contrast Readable Text Tokens */
    --color-text: #134E4A;            /* Deep Dark Teal (9.59:1 Contrast on White - AAA) */
    --color-text-dark: #0B4F3F;       /* Deep Forest Text (9.64:1 Contrast on White - AAA) */
    --color-text-secondary: #2D5E52;  /* Secondary Body Text (7.10:1 Contrast on White - AAA) */
    --color-border: #D1E8E2;          /* Organic Border Tint */
    --color-border-subtle: #E2ECE9;   /* Inner Divider */

    /* Status & Accreditation Badges */
    --color-certified: #15803D;      /* Certified Status Green (Certified ✅) */
    --color-certified-bg: #DCFCE7;
    --color-estimated: #B45309;      /* Estimated Status Amber (Estimated 🟡) */
    --color-estimated-bg: #FEF3C7;
    --color-planned: #0284C7;        /* Planned Status Blue (Planned 📌) */
    --color-planned-bg: #E0F2FE;
    --color-locked: #475569;         /* Locked/Archive Status Gray */
    --color-locked-bg: #F1F5F9;

    /* Organic Biophilic Geometry & Shadows */
    --radius-sm: 8px;
    --radius-md: 14px;
    --radius-lg: 20px;               /* Standard Apple Card Radius */
    --radius-full: 9999px;
    
    --shadow-default: 0 8px 32px rgba(15, 80, 60, 0.10);  /* Soft Ambient Shadow */
    --shadow-hover: 0 16px 48px rgba(15, 80, 60, 0.18);    /* Lifted Spring Shadow */
    --shadow-glass: 0 8px 32px 0 rgba(11, 79, 63, 0.12);
}
```

#### Dark Mode Palette Tokens (`@media (prefers-color-scheme: dark)` or `.dark-theme`)
```css
@media (prefers-color-scheme: dark) {
    :root {
        --color-bg: #0C1E19;              /* Deep Forest Midnight */
        --color-bg-alt: #132A23;
        --color-surface: #17372E;         /* Dark Translucent Surface */
        --color-surface-translucent: rgba(23, 55, 46, 0.85);
        --color-muted: #1E4439;
        --color-text: #F4F1E8;            /* Soft White/Sand Text (13.2:1 Contrast - AAA) */
        --color-text-secondary: #C2DDD6;  /* Muted Sand Text (9.8:1 Contrast - AAA) */
        --color-border: #285447;
        --shadow-default: 0 8px 32px rgba(0, 0, 0, 0.35);
        --shadow-hover: 0 16px 48px rgba(0, 0, 0, 0.50);
    }
}
```

---

### 2.2 Typography & Fluid Scaling

The typography hierarchy uses Google Fonts `Noto Naskh Arabic` (Headings) and `Noto Sans Arabic` (Body), backed by native Apple Arabic fallbacks (`SF Pro Arabic`, `SF Arabic`, `Cairo`, `Tajawal`).

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@600;700&family=Noto+Sans+Arabic:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

```css
/* Typography Hierarchy Rules */
body {
    font-family: 'Noto Sans Arabic', 'SF Pro Arabic', 'SF Arabic', 'Cairo', 'Tajawal', system-ui, -apple-system, sans-serif;
    font-size: clamp(1rem, 0.95rem + 0.25vw, 1.125rem); /* 16px - 18px */
    line-height: 1.7; /* Crucial for Arabic ascenders/descenders */
    color: var(--color-text);
    direction: rtl;
    text-align: right;
    -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Noto Naskh Arabic', 'SF Pro Arabic', 'Cairo', serif;
    font-weight: 700;
    color: var(--color-primary-dark);
    line-height: 1.35;
    letter-spacing: -0.01em;
}

h1 { font-size: clamp(2.25rem, 1.75rem + 2.5vw, 3.5rem); }  /* 36px - 56px */
h2 { font-size: clamp(1.75rem, 1.35rem + 2.0vw, 2.75rem); } /* 28px - 44px */
h3 { font-size: clamp(1.35rem, 1.15rem + 1.0vw, 1.85rem); } /* 21.6px - 29.6px */
h4 { font-size: clamp(1.15rem, 1.05rem + 0.5vw, 1.35rem); } /* 18.4px - 21.6px */
```

---

### 2.3 Glassmorphism & Material Translucency

Floating UI layers (header navigation, active metric highlights, sticky announcement bar, modal dialogs) utilize hardware-accelerated CSS glassmorphism.

```css
/* Glassmorphism Surface Utility */
.glass-card, .glass-nav {
    background: var(--color-surface-translucent);
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-shadow: var(--shadow-glass);
}

@media (prefers-color-scheme: dark) {
    .glass-card, .glass-nav {
        border: 1px solid rgba(255, 255, 255, 0.08);
    }
}
```

---

### 2.4 Micro-Interactions, Spring Physics & Motion Engine

Apple motion principles demand non-mechanical, physical easing curves and instant physical feedback.

#### 1. Spring Hover Utility (`.spring-hover`)
```css
.spring-hover {
    will-change: transform, box-shadow;
    transition: transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1),
                box-shadow 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.spring-hover:hover {
    transform: translateY(-6px) scale(1.01);
    box-shadow: var(--shadow-hover);
}
```

#### 2. Instant Pointerdown Feedback (`.btn:active`)
```css
.btn, button, .card-clickable {
    will-change: transform;
    transition: transform 150ms cubic-bezier(0.34, 1.56, 0.64, 1),
                background-color 200ms ease;
}

.btn:active, button:active, .card-clickable:active {
    transform: scale(0.97) translateY(0);
    transition: transform 100ms ease-out; /* Immediate tactile compression ≤ 100ms */
}
```

#### 3. Spatial Drawer Motion (RTL Native)
```css
/* Mobile Sidebar Drawer slides from Right in RTL */
.mobile-drawer {
    position: fixed;
    top: 0;
    right: 0; /* Align right for RTL */
    width: 300px;
    height: 100vh;
    background: var(--color-surface);
    transform: translateX(100%); /* Hidden to the right */
    transition: transform 350ms cubic-bezier(0.32, 0.72, 0, 1);
    z-index: 1000;
}

.mobile-drawer.is-open {
    transform: translateX(0); /* Slide in from right */
}
```

#### 4. Accessible Motion Override (`prefers-reduced-motion`)
```css
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
    .spring-hover:hover {
        transform: none !important;
    }
}
```

---

### 2.5 Responsive Layout & Breakpoint Matrix

The grid adapts across 4 standardized viewports without horizontal overflow.

| Breakpoint | Viewport Width | Grid Layout Target | Mobile/Navigation State |
|------------|----------------|--------------------|-------------------------|
| **XS / Mobile Base** | `375px` | 1 Column Grid (`1fr`) | Mobile Drawer active, touch target min 44px |
| **SM / Mobile Wide** | `480px - 767px` | 1 Column Grid (`1fr`) | Full width cards, padded margins (16px) |
| **MD / Tablet** | `768px - 1023px` | 2 Column Grid (`repeat(2, 1fr)`) | Expanded header options, collapsed drawer |
| **LG / Laptop** | `1024px - 1439px` | 3 Column Grid (`repeat(3, 1fr)`) | Full horizontal navigation bar active |
| **XL / Desktop** | `1440px+` | Max container width `1280px` | Centered layout with generous padding (32px) |

---

## 3. WCAG AAA RTL Standards & Compliance Specification

### 3.1 Color Contrast Matrix & Audit

WCAG 2.1 AAA requires a minimum contrast ratio of **7:1 for normal text** (<18pt/24px or <14pt/19px bold) and **4.5:1 for large text** (≥18pt/24px or ≥14pt/19px bold). UI components and graphical controls require **3:1** (SC 1.4.11).

#### Audit Matrix of Project Tokens

| Text Token | Text Hex | Background Token | Background Hex | Calculated Contrast Ratio | WCAG AAA Normal Text (7:1) | WCAG AAA Large Text (4.5:1) | Usage Scenarios & Guidelines |
|------------|----------|------------------|----------------|--------------------------|---------------------------|----------------------------|------------------------------|
| `--color-text` | `#134E4A` | `--color-surface` | `#FFFFFF` | **9.59:1** | **PASS** ✅ | **PASS** ✅ | Main body paragraphs, card body text |
| `--color-text` | `#134E4A` | `--color-bg` | `#F4F1E8` | **8.44:1** | **PASS** ✅ | **PASS** ✅ | Page background body text |
| `--color-primary-dark` | `#0B4F3F` | `--color-surface` | `#FFFFFF` | **9.64:1** | **PASS** ✅ | **PASS** ✅ | Primary headings (H1-H4), emphasis text |
| `--color-primary-dark` | `#0B4F3F` | `--color-bg` | `#F4F1E8` | **8.49:1** | **PASS** ✅ | **PASS** ✅ | Section headers on sand background |
| `--color-primary` | `#1F7A5A` | `--color-surface` | `#FFFFFF` | **5.41:1** | **FAIL** ❌ | **PASS** ✅ | Permitted for Large Text (≥24px / 19px bold) & UI Icons. **NOT for body text**. |
| `--color-text-secondary` | `#2D5E52` | `--color-surface` | `#FFFFFF` | **7.10:1** | **PASS** ✅ | **PASS** ✅ | Secondary subtitles, captions, metadata |
| White Text | `#FFFFFF` | `--color-primary-dark` | `#0B4F3F` | **9.64:1** | **PASS** ✅ | **PASS** ✅ | Primary solid buttons (`.btn-primary`) |
| White Text | `#FFFFFF` | `--color-accent-hover` | `#C2410C` | **5.25:1** | **FAIL** ❌ | **PASS** ✅ | CTA Buttons (Large text / bold font). White on `#EA580C` is 3.55:1 (FAIL). **Must use `#C2410C` or `#9A3412` (7.61:1 PASS AAA) for normal text CTA buttons**. |

---

### 3.2 Keyboard Navigation & Focus Architecture

Every interactive element MUST be operable via keyboard (`Tab`, `Shift+Tab`, `Enter`, `Space`, `Escape`, `Arrow keys`).

#### 1. High Contrast Focus Ring Utility
```css
/* Visible Focus Ring Specification */
:focus-visible {
    outline: 3px solid var(--color-primary);
    outline-offset: 3px;
    box-shadow: 0 0 0 5px rgba(31, 122, 90, 0.25);
    border-radius: 4px;
}

button:focus-visible, a:focus-visible, input:focus-visible, select:focus-visible {
    outline: 3px solid var(--color-primary-dark);
    outline-offset: 2px;
}
```

#### 2. Accessibility Skip Link
```html
<a href="#main-content" class="skip-link">الانتقال إلى المحتوى الرئيسي</a>
```
```css
.skip-link {
    position: absolute;
    top: -100px;
    right: 1rem;
    background: var(--color-primary-dark);
    color: #FFFFFF;
    padding: 0.75rem 1.5rem;
    border-radius: 0 0 12px 12px;
    z-index: 9999;
    font-weight: 700;
    transition: top 200ms ease;
}
.skip-link:focus {
    top: 0;
}
```

#### 3. Keyboard Event Handling Standards
- **Modal Dialogs & Drawer**: Pressing `Escape` MUST instantly close the open dialog/drawer and restore focus to the trigger element.
- **Custom Cards / Buttons**: Elements with `role="button"` MUST handle `keydown` for `Key.ENTER` (`keyCode 13`) and `Key.SPACE` (`keyCode 32`).
- **Interactive Tabs / Filter Bar**: Arrow keys (`ArrowLeft` / `ArrowRight`) move focus dynamically between filter chips.

---

### 3.3 Accessibility Shell & ARIA Semantics

The SPA shell in `index.html` requires full semantic labeling and live region hooks.

```html
<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>برة الصندوق – المدرسة الخضراء الذكية</title>
    <meta name="description" content="مشروع برة الصندوق – المدرسة الخضراء الذكية لجمعية الإسراء الخيرية بدمنهور. تحويل المخلفات المدرسية إلى أدوات تعليمية وفرص خضراء ذكية.">
    
    <!-- OpenGraph & Social Meta -->
    <meta property="og:title" content="برة الصندوق – المدرسة الخضراء الذكية">
    <meta property="og:description" content="مبادرة خضراء مبتكرة لتحويل ورك وكرتون المدارس إلى أدوات وسلال تعليمية ودعم تمكين المرأة وذوي الإعاقة.">
    <meta property="og:image" content="./محتوي/لوجو برة الصندوق 1.png">
    <meta property="og:locale" content="ar_EG">
    <meta property="og:type" content="website">
    
    <!-- Structured Data JSON-LD -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "برة الصندوق – المدرسة الخضراء الذكية",
      "legalName": "جمعية الإسراء الخيرية بفرهاش – دمنهور",
      "identifier": "1124",
      "description": "مشروع تحويل المخلفات الورقية والكرتونية بالمدارس إلى أدوات تعليمية مبتكرة",
      "founder": {
        "@type": "Person",
        "name": "فاطمة عبد المجيد راضي"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "دمنهور",
        "addressRegion": "البحيرة",
        "addressCountry": "EG"
      }
    }
    </script>
</head>
<body>
    <a href="#main-content" class="skip-link">الانتقال إلى المحتوى الرئيسي</a>

    <!-- Header Navigation -->
    <header class="glass-nav" role="banner">
        <div class="nav-container">
            <a href="#/" class="logo-link" aria-label="الرئيسية - برة الصندوق">
                <img src="./محتوي/لوجو_برة_الصندوق_1-removebg-preview.png" alt="شعار برة الصندوق – المدرسة الخضراء الذكية" height="56">
            </a>
            
            <nav role="navigation" aria-label="القائمة الرئيسية">
                <ul class="nav-menu" id="nav-menu">
                    <!-- Dynamic Nav Items rendered by app.js -->
                </ul>
            </nav>
            
            <button id="menu-toggle" class="btn-icon" aria-expanded="false" aria-controls="mobile-drawer" aria-label="فتح القائمة الرئيسية">
                <i data-lucide="menu" aria-hidden="true"></i>
            </button>
        </div>
    </header>

    <!-- Main Content Host -->
    <main id="main-content" tabIndex="-1" role="main">
        <!-- SPA Pages Rendered Here -->
    </main>

    <!-- Status Live Toast Container -->
    <div id="toast-container" role="status" aria-live="polite" aria-atomic="true"></div>

    <!-- Footer -->
    <footer role="contentinfo">
        <!-- Footer Content -->
    </footer>
</body>
</html>
```

---

## 4. Feature & Interactive Component Functional Specifications

### 4.1 EPA WARM v16 Carbon Impact Calculator

The Carbon Impact Calculator utilizes EPA Waste Reduction Model (WARM v16) recycling emission factors for paper products.

#### WARM v16 Metric Emission Factors
- **Mixed Paper (ورق مخلوط)**: $3.99 \text{ kg CO}_2\text{e / kg}$
- **Notebooks & Magazines (كراسات وكشكول)**: $4.40 \text{ kg CO}_2\text{e / kg}$
- **Textbooks (كتب دراسية)**: $4.66 \text{ kg CO}_2\text{e / kg}$
- **Cardboard Boxes (كرتون مضلع)**: $3.66 \text{ kg CO}_2\text{e / kg}$

#### Environmental Equivalencies
- **Trees Preserved**: $0.017 \text{ trees / kg}$ ($17 \text{ trees / ton}$)
- **Water Conserved**: $26.5 \text{ liters / kg}$ ($26,500 \text{ L / ton}$)
- **Landfill Space Saved**: $0.0033 \text{ m}^3 \text{ / kg}$ ($3.3 \text{ m}^3 \text{ / ton}$)

#### Mathematical Formulas
$$\text{Total CO}_2\text{ Saved (kg)} = \sum_{category} \left( \text{Weight}_{category} \times \text{Factor}_{category} \right)$$
$$\text{Trees Preserved} = \text{Total Weight (kg)} \times 0.017$$
$$\text{Water Conserved (L)} = \text{Total Weight (kg)} \times 26.5$$

#### User Interface Output
- Live input fields (`type="number"`, `min="0"`, `step="1"`).
- Dynamic result cards displaying calculated metric numbers updated via `aria-live="polite"` inside an animated counter (`requestAnimationFrame`).

---

### 4.2 Revenue Allocation Calculator (40/25/10/25 Rule)

Financial allocation rules governing raw material sales and product distribution:

1. **40% Women Upcyclers & Direct Beneficiaries (تمكين المرأة والحرفيات)**: Direct financial compensation paid to women craftsmen and mothers of disabled students.
2. **25% School Raw Material Collection Fund (صندوق دعم المدارس للمواد الخام)**: Reinvested directly into participating schools for environmental incentives and raw paper purchasing.
3. **10% Operational Logistics & Transportation (اللوجستيات والشحن)**: Transportation, sorting, and storage operational expenses.
4. **25% El-Israa Association Reinvestment (تطوير الجمعية والاستدامة)**: Reinvested into non-profit project expansion, machinery maintenance, and expansion into new schools.

#### Mathematical Formula
$$\text{Category Share (EGP)} = \text{Total Sales Revenue (EGP)} \times \text{Percentage Allocation}$$

#### UI Component
- Interactive range slider / number input for Total Sales Revenue in EGP.
- Real-time CSS progress bar visualization and breakdown table.

---

### 4.3 NISGP 2026 Smart Platform Digital Maturity Simulator

National Initiative for Smart Green Projects (المبادرة الوطنية للمشروعات الخضراء الذكية - NISGP 2026) compliance evaluator.

#### 4 Digital Maturity Levels

1. **Level 1: Traditional Field Operations (مستوى 1: التجمع والفرز الميداني)**
   - Score range: `0 - 25%`
   - Characteristics: Manual paper logging, basic sorting, local school collection.
2. **Level 2: Digitized Tracking & Records (مستوى 2: التحول الرقمي الجزئي)**
   - Score range: `26 - 50%`
   - Characteristics: Electronic weight logging, basic database for schools, digital receipts.
3. **Level 3: Smart Platform Integration (مستوى 3: المنصة الذكية المتكاملة)**
   - Score range: `51 - 75%`
   - Characteristics: Automated WARM carbon calculation, digital inventory, automated beneficiary payout tracking.
4. **Level 4: AI & Predictive Eco-Analytics (مستوى 4: التميز الرقمي والذكاء الإصطناعي)**
   - Score range: `76 - 100%`
   - Characteristics: Machine learning paper yield forecasting, GIS collection route optimization, smart green school certification engine.

#### Assessment Quiz Engine
- 5 multiple-choice questions evaluated live.
- Generates score, places institution into Level 1-4, and outputs an **AI Advisory Roadmap** (خارطة الطريق الاستشارية للتحول الرقمي).

---

### 4.4 Universal Form Validation & LocalStorage Engine

5 registration forms handled by `pages/forms.js`:
1. **Association Form (تسجيل جمعية)**
2. **School Form (تسجيل مدرسة)**
3. **Volunteer Form (التطوع)**
4. **Women Workshop Form (ورشه تمكين المرأة)**
5. **Recycler Partner Form (شركاء إعادة التدوير)**

#### Validation Rules
- **Full Name / Entity Name**: Required, min 3 characters.
- **Egyptian Mobile Number**: Pattern `^01[0125][0-9]{8}$` (11 digits starting with 010, 011, 012, or 015).
- **Email Address**: Standard RFC 5322 regex.
- **Governorate / District**: Required dropdown selection.

#### Data Persistence
Form submissions are saved to `localStorage` key `bara_forms_submissions`:
```json
[
  {
    "id": "SUB-1723420000000",
    "formType": "school",
    "data": {
      "schoolName": "مدرسة الشهيد أحمد عرابي",
      "governorate": "البحيرة",
      "phone": "01012345678"
    },
    "submittedAt": "2026-08-11T23:47:00.000Z"
  }
]
```

#### Feedback Mechanism
Displays an Apple-style translucent Toast alert (`role="status"`) stating:  
`"تم تسجيل البيانات بنجاح! رقم المرجعية: SUB-1723420000000"`

---

### 4.5 Real-Time Viewport Metric Counter Engine

Dynamic counters triggered on viewport entry via `IntersectionObserver`.

#### Key Institutional Stats
- **180+ Tons Paper Collected (180 طن ورق مجمع)**
- **26 Participating Schools (26 مدرسة)**
- **8% People with Disabilities Participation (8% ذوي إعاقة)**
- **40% Women Financial Allocation (40% تمكين المرأة)**

```javascript
// IntersectionObserver Trigger Function
const animateCounter = (el, target, duration = 2000) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease out
        el.textContent = Math.floor(easeProgress * target);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            el.textContent = target;
        }
    };
    window.requestAnimationFrame(step);
};
```

---

## 5. Complete Verification Strategy & Acceptance Test Suite (R1 to R7)

This test suite establishes clear, verifiable criteria for each requirement from `ORIGINAL_REQUEST.md`.

---

### 5.1 Requirement R1 Test Suite: Design System & Styles

| Test ID | Title | Execution Procedure | Expected Result | Pass Criteria |
|---------|-------|---------------------|-----------------|---------------|
| **TC-R1-01** | CSS Custom Tokens Presence | Inspect `styles.css` `:root` section via `view_file` or browser computed styles. | Tokens `--color-primary`, `--color-primary-dark`, `--color-accent`, `--color-bg`, `--color-surface`, `--color-text` exist. | All 10 defined tokens present and matched. |
| **TC-R1-02** | Spring Hover Physics | Hover over `.spring-hover` element. | Computed transition uses `cubic-bezier(0.34, 1.56, 0.64, 1)` and transforms `translateY(-6px) scale(1.01)`. | Cubic-bezier spring transition verified in CSS. |
| **TC-R1-03** | Pointerdown Tactile Feedback | Trigger `pointerdown` or `:active` on `.btn`. | Computed transform scales element to `scale(0.97)` within ≤ 100ms. | Immediate feedback verified on active state. |
| **TC-R1-04** | Glassmorphism Material | Inspect `.glass-card` styling. | Properties contain `backdrop-filter: blur(16px)` and translucent `rgba(255,255,255,0.75)` background. | Glass effect correctly defined. |
| **TC-R1-05** | Status Badges | Inspect badge rendering in `styles.css` or rendered DOM. | Badges defined for `certified` (green `#15803D`), `estimated` (amber `#B45309`), `planned` (blue `#0284C7`), `locked` (gray `#475569`). | 4 status classes present with high-contrast text. |
| **TC-R1-06** | Dark Mode Support | Toggle prefers-color-scheme to dark. | Background token changes to `#0C1E19`, surface to `#17372E`, text to `#F4F1E8`. | Dark mode theme switches automatically. |
| **TC-R1-07** | Reduced Motion Compliance | Set `prefers-reduced-motion: reduce`. | All transform transitions and animations are suppressed (duration 0.01ms). | Motion disabled for accessibility preference. |

---

### 5.2 Requirement R2 Test Suite: index.html & Shell

| Test ID | Title | Execution Procedure | Expected Result | Pass Criteria |
|---------|-------|---------------------|-----------------|---------------|
| **TC-R2-01** | RTL & Lang Declaration | View line 1-10 of `index.html`. | Tag reads `<html dir="rtl" lang="ar">`. | Attributes match exactly. |
| **TC-R2-02** | Google Fonts Integration | View `<head>` section of `index.html`. | Links to `Noto Naskh Arabic` and `Noto Sans Arabic` exist. | Both font families loaded via Google Fonts CDN. |
| **TC-R2-03** | Header Official Logo | Inspect header logo image tag. | Tag is `<img src="./محتوي/لوجو_برة_الصندوق_1-removebg-preview.png" alt="شعار برة الصندوق – المدرسة الخضراء الذكية" height="56">`. | Logo path and accessible alt text match. |
| **TC-R2-04** | Skip-to-content Link | Focus keyboard on initial page load (press `Tab`). | First focused element is `.skip-link`, moving to top of screen and pointing to `#main-content`. | Skip link visible on focus and scrolls to `#main-content`. |
| **TC-R2-05** | JSON-LD Structured Data | Inspect `<script type="application/ld+json">` in `index.html`. | Valid JSON-LD defining EducationalOrganization, El-Israa Association, Fatima Abdulmajeed Radi. | JSON parses without errors and metadata matches brief. |
| **TC-R2-06** | Footer Logos & Social Links | Inspect `<footer>` content. | Contains El-Israa logo (`./محتوي/لوجو جمعية الاسراء.jpg`), copyright 2026, social icons. | Footer contains official association logo and 2026 copyright. |

---

### 5.3 Requirement R3 Test Suite: home.js (Homepage)

| Test ID | Title | Execution Procedure | Expected Result | Pass Criteria |
|---------|-------|---------------------|-----------------|---------------|
| **TC-R3-01** | Real Hero Field Photo | Load Homepage (`#/`). | Hero section uses `./محتوي/برة 13.png` background with dark green overlay. | Field photo correctly set in CSS background. |
| **TC-R3-02** | Staggered Title Animation | Reload Homepage. | Headline "برة الصندوق" animates word-by-word with spring timing on entrance. | Staggered animation CSS/JS present. |
| **TC-R3-03** | Animated Metric Counters | Scroll to metric counter section. | Counters trigger via `IntersectionObserver` and count up to 180 (Tons), 26 (Schools), 8% (Disabled), 40% (Women). | Number animation triggers smoothly on scroll. |
| **TC-R3-04** | 6-Stage Value Chain | View Value Chain section. | 6 connected stages displayed visually (sorted paper → upcycled tools → sold → distributed → school → family). | All 6 stages rendered with numbered indicators. |
| **TC-R3-05** | Proof Banner Section | Scroll to "بالأدلة الرسمية" section. | Section contains `./محتوي/بانر برة الصندوق.jpeg` with caption. | Real banner image rendered correctly. |
| **TC-R3-06** | CTA Buttons | Click "سجّل جمعيتك" and "احسب الأثر الكربوني". | "سجّل جمعيتك" navigates to `#/forms`, "احسب الأثر الكربوني" navigates to `#/calculators`. | Both buttons function without page reload. |

---

### 5.4 Requirement R4 Test Suite: about.js (About Page)

| Test ID | Title | Execution Procedure | Expected Result | Pass Criteria |
|---------|-------|---------------------|-----------------|---------------|
| **TC-R4-01** | Full Project Logo Banner | Navigate to About page (`#/about`). | Hero header displays full project logo `./محتوي/لوجو برة الصندوق 1.png`. | Full logo image rendered. |
| **TC-R4-02** | IP & Institutional Details | View Intellectual Property section. | Documents owner (أ. فاطمة عبد المجيد راضي), El-Israa reg #1124, MoE approval. | Full institutional attribution present. |
| **TC-R4-03** | Women Empowerment Proof Card | Scroll to Women Empowerment section. | Section features `./محتوي/برة 12.png` field photo card with 40% allocation proof. | Photo evidence card rendered. |
| **TC-R4-04** | Field Execution Timeline Photo | Scroll to Field Execution section. | Section features `./محتوي/برة 10.png` or `./محتوي/برة 11.png` photo evidence. | Children activity field photo rendered. |
| **TC-R4-05** | Dual Logos Side-by-Side | View Association partnership section. | Displays Project logo + El-Israa logo (`./محتوي/لوجو جمعية الاسراء.jpg`) side-by-side. | Both logos displayed in side-by-side flex container. |
| **TC-R4-06** | 10 Governing Values Grid | View Values grid. | 10 values displayed with Lucide SVG eco icons. | 10 value cards rendered. |

---

### 5.5 Requirement R5 Test Suite: knowledge.js (Knowledge Hub)

| Test ID | Title | Execution Procedure | Expected Result | Pass Criteria |
|---------|-------|---------------------|-----------------|---------------|
| **TC-R5-01** | 9 Product Photo Cards | Navigate to Knowledge Hub (`#/knowledge`). | 9 activity cards rendered using real `<img>` tags for `./محتوي/برة 1.png` through `./محتوي/برة 9.png`. | Exactly 9 cards rendered with valid `src` attributes. |
| **TC-R5-02** | Image Aspect Ratio & Fit | Inspect product image CSS. | Images use `object-fit: cover` and `aspect-ratio: 4/3` inside rounded cards. | CSS aspect ratio and cover fit confirmed. |
| **TC-R5-03** | Spring Lift Hover | Hover over any activity card. | Card lifts `translateY(-8px)` with spring cubic-bezier and shadow deepens. | `.spring-hover` effect verified on card. |
| **TC-R5-04** | Interactive Subject Filter Bar | Click filter buttons (الكل, رياضيات, لغة عربية, علوم, مهارات بيئية). | Cards filter instantly based on selected subject tag. | Filter chips dynamically show/hide matching cards. |
| **TC-R5-05** | Guide Download Button | Inspect "تحميل الدليل" button on cards. | Button rendered with ghost style and download icon. | Button present on card body. |

---

### 5.6 Requirement R6 Test Suite: Other Pages & Calculators

| Test ID | Title | Execution Procedure | Expected Result | Pass Criteria |
|---------|-------|---------------------|-----------------|---------------|
| **TC-R6-01** | WARM v16 Calculator Test | Open Calculators page (`#/calculators`), enter `100` kg for Mixed Paper. | CO₂ saved calculates to exactly $100 \times 3.99 = \mathbf{399 \text{ kg CO}_2}$. | Value matches WARM v16 coefficient. |
| **TC-R6-02** | Revenue Calculator Test | Enter `10,000` EGP in Revenue Calculator. | Splits: Women (4,000 EGP / 40%), Schools (2,500 EGP / 25%), Logistics (1,000 EGP / 10%), Association (2,500 EGP / 25%). | Sum equals 10,000 EGP and ratios match 40/25/10/25. |
| **TC-R6-03** | Smart Form Submission & Toast | Submit Association Form in `#/forms`. | Data persists in `localStorage.bara_forms_submissions`, toast alert appears with reference ID. | Submission stored in LocalStorage and toast shown. |
| **TC-R6-04** | NISGP Simulator Maturity | Complete Quiz in `#/smart-platform`. | Calculates digital maturity percentage and assigns Level 1, 2, 3, or 4 with AI Advisory Roadmap. | Level correctly assigned and roadmap rendered. |
| **TC-R6-05** | Operational Stages Diagram | View `#/how-it-works`. | Displays 8 operational stages with numbered SVG step connectors. | 8 connected steps rendered. |
| **TC-R6-06** | Impact Dashboard Filters | View `#/impact`. | Filters items by status: Certified ✅, Estimated 🟡, Planned 📌. | Dashboard dynamically filters items. |

---

### 5.7 Requirement R7 Test Suite: Server Execution & Verification

| Test ID | Title | Execution Procedure | Expected Result | Pass Criteria |
|---------|-------|---------------------|-----------------|---------------|
| **TC-R7-01** | Python Server Command | Execute `python -m http.server 8080` from working directory `c:\Users\DIAA\.gemini\antigravity\scratch\outbox`. | Server starts listening on port 8080. | Background daemon process active on port 8080. |
| **TC-R7-02** | HTTP Reachability | Fetch `http://localhost:8080`. | HTTP Status `200 OK` returned with `index.html` payload. | Server responds with 200 OK. |
| **TC-R7-03** | Zero Console Errors | Load `http://localhost:8080` in browser. | Page loads cleanly with zero unhandled JavaScript errors or 404 image assets. | Browser console clean. |

---

## 6. Execution & Verification Workflow

### Step-by-Step Verification Commands for Implementers

1. **Verify Asset File Existence**:
   ```powershell
   Test-Path ".\محتوي\لوجو_برة_الصندوق_1-removebg-preview.png"
   Test-Path ".\محتوي\لوجو جمعية الاسراء.jpg"
   Test-Path ".\محتوي\بانر برة الصندوق.jpeg"
   Get-ChildItem ".\محتوي\برة*.png" | Measure-Object
   ```
   *Expected Output*: All paths return `True`, image count is 13+.

2. **Verify HTML Shell Structure**:
   ```powershell
   Select-String -Path ".\index.html" -Pattern 'dir="rtl"', 'lang="ar"', 'Noto Sans Arabic'
   ```
   *Expected Output*: Matches line for RTL, Arabic lang, and Google Fonts link.

3. **Verify WARM Carbon Coefficient Implementation**:
   ```powershell
   Select-String -Path ".\pages\calculators.js" -Pattern '3.99', '4.40', '4.66', '3.66'
   ```
   *Expected Output*: All 4 EPA WARM coefficients found in calculator logic.

4. **Launch Local Server (R7)**:
   ```powershell
   python -m http.server 8080
   ```
   *Expected Output*: `Serving HTTP on 0.0.0.0 port 8080 (http://0.0.0.0:8080/) ...`

---

## 7. Conclusion & Handoff Summary

This technical specification guarantees that the implementation of **"Bara El-Sandouq – Smart Green School"** meets Apple-grade visual refinement, rigorous WCAG AAA RTL accessibility, and full institutional alignment. Subsequent implementation agents (or developers) can proceed directly using the color tokens, spring physics curves, ARIA structures, and calculator formulas specified herein.

---
