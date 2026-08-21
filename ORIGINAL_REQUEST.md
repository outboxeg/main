# Original User Request

## 2026-08-11T20:45:50Z

<USER_REQUEST>
بناء وتحديث شامل لموقع مشروع "برة الصندوق – المدرسة الخضراء الذكية" (SPA بالـ Vanilla HTML/CSS/JS) ليعكس الهوية البصرية الرسمية بالصور والشعارات الحقيقية، ونظام تصميم Apple-grade متقن بالكامل بمعايير الإتاحة WCAG AAA واللغة العربية RTL.

Working directory: c:\Users\DIAA\.gemini\antigravity\scratch\outbox
Integrity mode: development

---

## Context & Real Assets (MUST use these — do NOT skip)

**Project:** برة الصندوق – المدرسة الخضراء الذكية | El-Israa Charity Association, Damanhour, Beheira
**Owner:** أ. فاطمة عبد المجيد راضي | Registration #1124 | MoE-approved | 26 schools | 180 tons collected
**Key stats:** 8% disabled participation, 40% women empowerment financial allocation, WARM v16 carbon coefficients

**Real assets available in `.\محتوي\` folder (paths relative to working directory):**

| Asset | Relative Path | Use location |
|-------|---------|------|
| Official logo (transparent PNG) | `.\محتوي\لوجو_برة_الصندوق_1-removebg-preview.png` | Header, favicon, footer |
| Official logo (full) | `.\محتوي\لوجو برة الصندوق 1.png` | About page |
| El-Israa Association logo | `.\محتوي\لوجو جمعية الاسراء.jpg` | Footer, About page |
| Official banner | `.\محتوي\بانر برة الصندوق.jpeg` | Hero background or proof section |
| Field photo – children drawing workshop | `.\محتوي\برة 10.png` | About / Impact pages |
| Field photo – children singing national anthem | `.\محتوي\برة 11.png` | About / Impact pages |
| Field photo – women empowerment session | `.\محتوي\برة 12.png` | About page (women 40% section) |
| Field photo – leadership + community group | `.\محتوي\برة 13.png` | Hero or About page |
| Activity: Math Counting Hands (العب وتعلم) | `.\محتوي\برة 1.png` | Knowledge Hub card |
| Activity: Shapes & Colors Sorting (تصنيف الأشكال والألوان) | `.\محتوي\برة 2.png` | Knowledge Hub card |
| Activity: Arabic Letters Puzzle (بازل الحروف والكلمات) | `.\محتوي\برة 3.png` | Knowledge Hub card |
| Activity: Educational Clock (ساعة الوقت التعليمية) | `.\محتوي\برة 4.png` | Knowledge Hub card |
| Activity: Plant Life Cycle (دورة حياة النبات) | `.\محتوي\برة 5.png` | Knowledge Hub card |
| Activity: Weather & Seasons Board (لوحة الطقس والفصول) | `.\محتوي\برة 6.png` | Knowledge Hub card |
| Activity: 4-Bin Sorting Board (سلة الفرز التعليمية) | `.\محتوي\برة 7.png` | Knowledge Hub card |
| Activity: Puppet Theater (مسرح العرائس الورقي) | `.\محتوي\برة الصندوق 8.png` | Knowledge Hub card |
| Activity: Daily Eco Behavior Chart (جدول السلوك البيئي اليومي) | `.\محتوي\برة 9.png` | Knowledge Hub card |

---

## Design System (Apply Strictly)

### Color Tokens — Eco-Tech WCAG AAA Palette
```css
--color-primary: #1F7A5A;
--color-primary-dark: #0B4F3F;
--color-secondary: #1C9A8B;
--color-accent: #EA580C;
--color-bg: #F4F1E8;
--color-surface: #FFFFFF;
--color-muted: #E8F1F4;
--color-text: #134E4A;
--color-border: #D1E8E2;
--color-text-light: #5A8A7A;
```

### Typography — Arabic RTL First
- Google Fonts: `https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;600;700&family=Noto+Sans+Arabic:wght@300;400;500;700&display=swap`
- Headings: Noto Naskh Arabic, 700
- Body: Noto Sans Arabic, 400
- Direction: `dir="rtl"` on `<html>`
- Base: 16px, line-height 1.7, fluid scale with `clamp()`

### Apple Design Principles (MUST implement)
1. **Instant Response:** All buttons/cards show visual feedback on `pointerdown` not just click — scale(0.97) transform in ≤100ms
2. **Spring Animations:** Use `cubic-bezier(0.34, 1.56, 0.64, 1)` for card hover lift and entrance animations
3. **Spatial Consistency:** Mobile sidebar/drawer slides from right side and dismisses to right
4. **No mechanical easing:** Replace `ease-in-out` with spring cubic-bezier on interactive elements
5. **Reduced motion:** `@media (prefers-reduced-motion: reduce)` disables all non-essential animations
6. **Interruptible:** CSS transitions (not JS-locked animations) so user can always interact
7. **Depth & materials:** Glassmorphism cards with `backdrop-filter: blur(16px)` for floating elements

### UI/UX Pro Max Rules
- Touch targets: **min 44×44px** on ALL interactive elements
- Transitions: 150-300ms on ALL hover states
- SVG icons only (Lucide CDN) — no emoji as UI icons
- Focus rings: `outline: 3px solid #1F7A5A; outline-offset: 2px`
- No horizontal scroll at 375px viewport
- Breakpoints: 375px, 768px, 1024px, 1440px
- `border-radius: 16-20px` on cards (Organic Biophilic style)
- `box-shadow: 0 8px 32px rgba(15,80,60,0.10)` default card shadow
- Deeper shadow on hover: `0 16px 48px rgba(15,80,60,0.18)`

---

## Requirements

### R1. Rebuild styles.css with complete Apple-grade design system
Completely rewrite `styles.css` to implement the full design system:
- CSS custom properties (all tokens above)
- Organic Biophilic card styles: `border-radius: 20px`, soft shadows, earth tones
- Apple spring hover utility: `.spring-hover:hover { transform: translateY(-6px) scale(1.01); transition: transform 300ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 300ms cubic-bezier(0.34,1.56,0.64,1); }`
- `.btn:active { transform: scale(0.97); transition: transform 100ms ease-out; }` (pointer-down feedback)
- Glassmorphism: `.glass-card { backdrop-filter: blur(16px); background: rgba(255,255,255,0.75); border: 1px solid rgba(255,255,255,0.3); }`
- Hero parallax via CSS transform (subtle, accessible)
- Full RTL layout utilities
- Status badges: certified (green), estimated (amber), planned (blue), locked (gray)
- Responsive grid: 1 col → 2 col → 3 col at breakpoints
- Dark mode: `@media (prefers-color-scheme: dark)` with adjusted tokens
- Smooth page transition animation on router change (fade + slide-up)
- Announcement bar at top with marquee-style scroll
- Navigation active state with animated green underline indicator

### R2. Update index.html with real logos and accessibility shell
Update `index.html`:
- `<html dir="rtl" lang="ar">`
- Google Fonts link in `<head>`
- Real logo in header: `<img src="./محتوي/لوجو_برة_الصندوق_1-removebg-preview.png" alt="شعار برة الصندوق – المدرسة الخضراء الذكية" height="56">`
- SEO meta tags: title (برة الصندوق – المدرسة الخضراء الذكية), description, og:image, og:locale=ar_EG, twitter cards
- Skip-to-content accessibility link
- Structured data JSON-LD for the organization
- Footer with El-Israa logo + copyright 2026 + social icons

### R3. Rebuild pages/home.js with real hero and Apple-grade animations
Rewrite `home.js`:
- Hero with `برة 13.png` (group photo) as full-screen background with dark-green gradient overlay
- Animated headline: "برة الصندوق" fades+slides word-by-word on load (staggered, spring timing)
- Subheadline: "المدرسة الخضراء الذكية | من مخلفات مدرسية إلى فرص خضراء ذكية"
- 4 animated metric counter cards (IntersectionObserver triggers counting): 180+ طن ورق، 26 مدرسة، 8٪ ذوي إعاقة، 40٪ تمكين المرأة
- 6-stage value chain visual (sorted paper → upcycled tools → sold → distributed → school → family)
- Real banner image section ("بالأدلة الرسمية"): show `بانر برة الصندوق.jpeg` with caption
- CTA buttons: "سجّل جمعيتك" (orange) + "احسب الأثر الكربوني" (ghost green)

### R4. Rebuild pages/about.js with real photos and institutional proof
Rewrite `about.js`:
- Hero banner with project full logo
- Intellectual property section: owner name, El-Israa association (reg #1124, Damanhour), MoE approval
- **Women empowerment section** with `برة 12.png` as full photo evidence card — real community session proof
- **Field execution timeline** using `برة 10.png` or `برة 11.png` — children's activities photo proof
- **Leadership & team section** with `برة 13.png` group photo
- Both logos side-by-side: project logo + El-Israa logo with linking caption
- 10 governing values grid with eco-themed SVG icons
- Timeline starting May 2023 with key milestones

### R5. Rebuild pages/knowledge.js with real product photo gallery
Rewrite `knowledge.js` to display all 9 educational activities as premium photo cards:
- Each card: real product `<img>` from `./محتوي/...` as hero image (object-fit: cover, aspect-ratio: 4/3)
- Card body: activity name (Arabic bold headline), 2-3 sentence Arabic description of educational value
- Tags: "ورق/كرتون معاد استخدامه" + subject tag (Math/Arabic/Science/Art)
- Apple spring hover: card lifts `translateY(-8px)`, shadow deepens
- Optional "تحميل الدليل" button (ghost style)
- Filter bar: All | رياضيات | لغة عربية | علوم | مهارات بيئية
- Activity data:
  - برة 1 → العب وتعلم → رياضيات | تعلم العد والحساب بالأصابع والخرز
  - برة 2 → تصنيف الأشكال والألوان → علوم/مهارات | التمييز البصري وتدريب التركيز
  - برة 3 → بازل الحروف والكلمات → لغة عربية | توصيل الكلمات بالحروف الأولى
  - برة 4 → ساعة الوقت التعليمية → رياضيات/مهارات | قراءة الساعة وتنظيم الوقت
  - برة 5 → دورة حياة النبات → علوم | مراحل النمو والوعي البيئي والزراعة
  - برة 6 → لوحة الطقس والفصول → علوم | التغير المناخي وفصول السنة
  - برة 7 → سلة الفرز التعليمية → مهارات بيئية | الفرز من المصدر وتمييز أنواع المخلفات
  - برة الصندوق 8 → مسرح العرائس الورقي → مهارات | التعبير المسرحي ونشر رسائل التدوير
  - برة 9 → جدول السلوك البيئي اليومي → مهارات بيئية | تحويل الوعي البيئي لسلوك يومي

### R6. Polish and complete all other pages
Ensure these pages are complete, RTL-perfect, and visually consistent:
- `how-it-works.js`: 8 operational stages with numbered SVG step connectors, partner roles section
- `impact.js`: filterable impact dashboard (All / Certified ✅ / Estimated 🟡 / Planned 📌), 40-25-10-25 revenue distribution chart visualization
- `calculators.js`: WARM v16 Carbon Calculator (mixed paper 3.99, notebooks 4.40, textbooks 4.66, cardboard 3.66 kg CO₂/kg) + Revenue Distribution Calculator with dynamic progress bars
- `forms.js`: 5 smart forms (Association, School, Volunteer, Women, Recycler) with LocalStorage persistence and toast feedback
- `smart-platform.js`: NISGP 2026 compliance — 4 digital maturity levels, AI advisory roadmap
- All pages: consistent nav active states, footer, responsive at all breakpoints

### R7. Start local development server after completing all changes
After all file edits are complete, start a Python HTTP server on port 8080:
```
python -m http.server 8080
```
Run in background (IsDaemon: true) from the working directory `c:\Users\DIAA\.gemini\antigravity\scratch\outbox`
Report the URL: http://localhost:8080

---

## Acceptance Criteria

### Visual Identity & Real Assets
- [ ] Official transparent logo appears in the header on every page
- [ ] El-Israa logo appears in footer and About page
- [ ] Hero section uses a real field photo as background
- [ ] Knowledge Hub shows all 9 activity product images with real `<img>` tags
- [ ] At least 2 field proof photos appear in About or Impact pages

### Apple Design & Animation
- [ ] Buttons respond visually on `pointerdown` within 100ms
- [ ] Card hover uses spring cubic-bezier (not linear or ease-in-out)
- [ ] Mobile drawer slides from right and exits to right
- [ ] `@media (prefers-reduced-motion: reduce)` disables non-essential animations

### Design System & Accessibility
- [ ] All text meets WCAG 4.5:1 contrast ratio
- [ ] All interactive elements are min 44×44px
- [ ] `<html dir="rtl" lang="ar">` is confirmed set
- [ ] Noto Naskh Arabic font loads — no browser-default Arabic rendering
- [ ] No horizontal scrollbar at 375px viewport

### Functionality
- [ ] WARM v16 Carbon Calculator works (mixed paper = 3.99 kg CO₂/kg)
- [ ] Revenue calculator splits 40/25/10/25 correctly
- [ ] Registration forms save to LocalStorage with success toast
- [ ] SPA router navigates all 8 pages without full reload
- [ ] Metric counters animate on homepage (count up from 0)

### Server
- [ ] Python HTTP server running on http://localhost:8080
- [ ] No console errors on page load
</USER_REQUEST>
