# M2 Remediation Plan: Fixing `pages/home.js`, `app.js`, and `styles.css`

**Target Components**: `pages/home.js`, `app.js`, `styles.css`  
**Target Milestone**: Milestone M2 (Home & About Pages)  
**Author**: Explorer M2 Remediation  
**Date**: 2026-08-11T23:59:30Z  
**Status**: Ready for Worker Execution  

---

## 1. Executive Summary & Root Cause Analysis

During forensic audit (`auditor_m2/handoff.md`) and adversarial review (`reviewer_m2/handoff.md`), `pages/home.js` failed audit due to three key issues:

| Issue | Root Cause | Affected Files | Severity |
|---|---|---|---|
| **1. Missing IntersectionObserver Counter Animation JS** | Hardcoded static text numbers (`180 طن`, `26`, `8%`, `40%`) were rendered in HTML without any JS observer or count-up logic. Flagged as **Facade Implementation / Integrity Violation**. | `pages/home.js`, `app.js` | 🔴 Critical |
| **2. Router CTA `href` Mismatch** | Homepage CTAs used `href="#/forms"` and `href="#/calculators"`. `app.js` stripped `#` yielding `"/forms"`, which failed `routes["/forms"]` lookup and forced route fallback to `'home'`. | `pages/home.js`, `app.js` | 🔴 Major |
| **3. Missing Staggered Spring Headline Animation** | The hero title lacked CSS keyframes (`heroWordStagger`) and staggered animation spans for word-by-word entrance mandated by R3 & Apple Design rules. | `styles.css`, `pages/home.js` | 🟡 Major |

---

## 2. Step-by-Step Actionable Remediation Plan

Worker M2 must follow these precise instructions to fix all three issues.

### Task 1: Staggered Spring Animation for Hero Headline

#### A. Edit `styles.css`
Add `@keyframes heroWordStagger` and `.hero-stagger-word` styles near section 6 (Apple Design Spring Physics) or section 13 (Hero Section) in `styles.css`:

```css
/* Staggered Spring Entrance Animation for Hero Headline */
@keyframes heroWordStagger {
    0% {
        opacity: 0;
        transform: translateY(24px) scale(0.95);
    }
    100% {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.hero-stagger-word {
    display: inline-block;
    animation: heroWordStagger 800ms cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

.hero-stagger-word:nth-child(1) {
    animation-delay: 100ms;
}

.hero-stagger-word:nth-child(2) {
    animation-delay: 250ms;
}

.hero-stagger-word:nth-child(3) {
    animation-delay: 400ms;
}

@media (prefers-reduced-motion: reduce) {
    .hero-stagger-word {
        animation: none !important;
        opacity: 1 !important;
        transform: none !important;
    }
}
```

#### B. Edit `pages/home.js`
Update the `.hero-title` markup (lines 17–21) to attach `.hero-stagger-word`:

```html
<h1 class="hero-title" style="font-size: clamp(2.2rem, 4.5vw, 3.8rem); font-family: 'Noto Naskh Arabic', serif; font-weight: 700; line-height: 1.3; margin-bottom: 1.25rem; color: #ffffff; text-shadow: 0 4px 20px rgba(0,0,0,0.3);">
    <span class="hero-stagger-word">برة الصندوق</span>
    <span class="hero-stagger-word" style="color: #FDBA74;">–</span>
    <span class="hero-stagger-word">المدرسة الخضراء الذكية</span>
</h1>
```

---

### Task 2: IntersectionObserver Metric Counter Animation JS Logic

#### A. Edit `pages/home.js`
1. Update initial HTML for `.counter-value` elements (lines 73, 84, 95, 106) to start at `0` before observer triggers:
   - Card 1: `<div class="metric-val counter-value" data-target="180" data-suffix=" طن" ...>0 طن</div>`
   - Card 2: `<div class="metric-val counter-value" data-target="26" data-suffix=" مدرسة" ...>0 مدرسة</div>`
   - Card 3: `<div class="metric-val counter-value" data-target="8" data-suffix="%" ...>0%</div>`
   - Card 4: `<div class="metric-val counter-value" data-target="40" data-suffix="%" ...>0%</div>`

2. Add global function `initHomeCounters()` at the bottom of `pages/home.js`:

```javascript
/* Metric Observer Counter Animation Hook */
function initHomeCounters() {
    const counterElements = document.querySelectorAll('.counter-value');
    if (!counterElements.length) return;

    // Fallback for environment without IntersectionObserver
    if (!('IntersectionObserver' in window)) {
        counterElements.forEach(el => {
            const target = el.getAttribute('data-target') || '0';
            const suffix = el.getAttribute('data-suffix') || '';
            el.textContent = target + suffix;
        });
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'), 10) || 0;
                const suffix = el.getAttribute('data-suffix') || '';
                animateSingleCounter(el, target, suffix);
                obs.unobserve(el); // Only run once
            }
        });
    }, { threshold: 0.2 });

    counterElements.forEach(el => observer.observe(el));
}

function animateSingleCounter(el, target, suffix) {
    const duration = 1800; // 1.8 seconds smooth count
    const startTime = performance.now();

    function step(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic curve: 1 - Math.pow(1 - progress, 3)
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.floor(easeProgress * target);

        el.textContent = currentVal + suffix;

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            el.textContent = target + suffix; // Ensure final target accuracy
        }
    }

    requestAnimationFrame(step);
}
```

#### B. Edit `app.js`
In `app.js` inside `navigateToPage(pageKey)`, add initialization trigger for `initHomeCounters()`:

```javascript
// Page-specific initialization hooks
if (pageKey === 'home' && typeof initHomeCounters === 'function') {
    initHomeCounters();
}
```

Also, call `initHomeCounters()` on initial load if `pageKey === 'home'`:
```javascript
if ((hash === 'home' || !hash) && typeof initHomeCounters === 'function') {
    initHomeCounters();
}
```

---

### Task 3: Fix Router CTA `href` Navigation Links

#### A. Edit `pages/home.js`
Update CTA `href` attributes in both Hero section and Final CTA section:
- Line 28: Change `<a href="#/forms"...>` to `<a href="#forms"...>`
- Line 32: Change `<a href="#/calculators"...>` to `<a href="#calculators"...>`
- Line 219: Change `<a href="#/forms"...>` to `<a href="#forms"...>`
- Line 223: Change `<a href="#/calculators"...>` to `<a href="#calculators"...>`

#### B. Edit `app.js`
Enhance `handleHashChange` in `app.js` to strip leading slashes defensively:

```javascript
function handleHashChange() {
    // Strip leading # and optional leading / (e.g. #/forms -> forms)
    const hash = window.location.hash.replace(/^#\/?/, '') || 'home';
    navigateToPage(hash);
}
```

---

## 3. Verification & Compliance Matrix

| Check | Target | Verification Method | Expected Outcome |
|---|---|---|---|
| **IntersectionObserver Code Search** | `pages/home.js` | Search JS files for `IntersectionObserver` | Matches found in `pages/home.js` |
| **Counter Initial Value** | `pages/home.js` | Inspect `.counter-value` initial text | Starts at `0 طن`, `0 مدرسة`, `0%` |
| **Hero Title Stagger Animation** | `styles.css` & `pages/home.js` | Check for `@keyframes heroWordStagger` and `.hero-stagger-word` | Class applied to spans, keyframes present in CSS |
| **CTA Navigation Links** | `pages/home.js` & `app.js` | Test link hrefs `#forms`, `#calculators` and router regex | Hash changes navigate to target view without fallback |
| **Automated Test Suite** | Project workspace | Execute `node tests/run_all_tests.js` | 31+ Passed, 0 Failed |

---

## 4. Next Steps for Worker M2

1. Apply CSS edits to `styles.css`.
2. Apply JS & HTML edits to `pages/home.js`.
3. Apply router hook & hash sanitizer to `app.js`.
4. Run `node tests/run_all_tests.js` to verify test suite health.
5. Submit `handoff.md` and request re-audit.
