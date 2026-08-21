# Forensic Audit Report — Pages M2 (pages/home.js & pages/about.js)

**Work Product**: `pages/home.js` and `pages/about.js`  
**Profile**: General Project / Integrity Forensics  
**Verdict**: 🔴 **INTEGRITY VIOLATION**  
**Audit Date**: 2026-08-11T23:58:30Z  

---

## 1. Observation

### Observation 1.1: Missing IntersectionObserver Counter Logic (Facade Implementation)
- **Target File**: `pages/home.js` (lines 73, 84, 95, 106)
- **Code Snippets in `pages/home.js`**:
  ```html
  line 73: <div class="metric-val counter-value" data-target="180" data-suffix=" طن" style="...">180 طن</div>
  line 84: <div class="metric-val counter-value" data-target="26" data-suffix=" مدرسة" style="...">26</div>
  line 95: <div class="metric-val counter-value" data-target="8" data-suffix="%" style="...">8%</div>
  line 106: <div class="metric-val counter-value" data-target="40" data-suffix="%" style="...">40%</div>
  ```
- **Codebase Search Output**:
  - Python search across all `.js` and `.html` files for `IntersectionObserver`:
    ```
    ORIGINAL_REQUEST.md Line 121 : - 4 animated metric counter cards (IntersectionObserver triggers counting)
    PROJECT.md Line 21 : IntersectionObserver animated counters
    PROJECT.md Line 32 : IntersectionObserver counters
    ```
  - Result: There is **0 lines of JavaScript code** in `pages/home.js`, `app.js`, or any other JS file implementing an `IntersectionObserver` or dynamic counter animation logic for `.counter-value` elements. The hardcoded static numbers (`180 طن`, `26`, `8%`, `40%`) are rendered directly inside the HTML template string without any underlying counter observer script.

### Observation 1.2: Broken CTA Navigation Links in `pages/home.js`
- **Target File**: `pages/home.js` (lines 28, 32, 219, 223)
- **Code Snippets in `pages/home.js`**:
  ```html
  line 28: <a href="#/forms" class="btn btn-accent spring-hover">سجّل جمعيتك</a>
  line 32: <a href="#/calculators" class="btn btn-outline spring-hover">احسب الأثر الكربوني</a>
  line 219: <a href="#/forms" class="btn btn-accent spring-hover">سجّل جمعيتك</a>
  line 223: <a href="#/calculators" class="btn btn-outline spring-hover">احسب الأثر الكربوني</a>
  ```
- **Target File**: `app.js` (lines 8–17, 27–28, 66–68)
- **Code Snippets in `app.js`**:
  ```javascript
  const routes = {
      'home': renderHomePage,
      'about': renderAboutPage,
      'how-it-works': renderHowItWorksPage,
      'impact': renderImpactPage,
      'smart-platform': renderSmartPlatformPage,
      'calculators': renderCalculatorsPage,
      'forms': renderFormsPage,
      'knowledge': renderKnowledgePage
  };

  function navigateToPage(pageKey) {
      if (!routes[pageKey]) pageKey = 'home';
      appContent.innerHTML = routes[pageKey]();
      ...
  }

  function handleHashChange() {
      const hash = window.location.hash.replace('#', '') || 'home';
      navigateToPage(hash);
  }
  ```
- **Empirical Execution Result**:
  When clicking `<a href="#/forms">`, `window.location.hash` is `"#/forms"`. `hash.replace('#', '')` yields `"/forms"`. Since `routes["/forms"]` is undefined (key is `"forms"` without leading slash), `navigateToPage("/forms")` falls back to `pageKey = 'home'`. Clicking CTA buttons on the home page fails to navigate to target pages and resets to home.

### Observation 1.3: Image Assets & IP Verification (PASS)
- **Target Files**: `pages/home.js` and `pages/about.js`
- **Asset Checks**:
  1. `./محتوي/برة 13.png` — Implemented in `home.js` line 9 & `about.js` line 173. File exists physically (2,297,872 bytes).
  2. `./محتوي/بانر برة الصندوق.jpeg` — Implemented in `home.js` line 197. File exists physically (152,533 bytes).
  3. `./محتوي/لوجو برة الصندوق 1.png` — Implemented in `about.js` lines 14, 86. File exists physically (931,398 bytes).
  4. `./محتوي/برة 12.png` — Implemented in `about.js` line 117. File exists physically (2,604,631 bytes).
  5. `./محتوي/برة 10.png` — Implemented in `about.js` line 135. File exists physically (2,740,770 bytes).
  6. `./محتوي/برة 11.png` — Implemented in `about.js` line 154. File exists physically (2,339,411 bytes).
  7. `./محتوي/لوجو جمعية الاسراء.jpg` — Implemented in `about.js` line 91. File exists physically (26,976 bytes).
- **IP Attributions**: `about.js` attributes IP owner (أ. فاطمة عبد المجيد راضي), executing entity (جمعية الإسراء الخيرية لتنمية المجتمع بدمنهور - إشهار #1124), and MoE approval.
- **Value Chain**: 6-stage visual value chain (فرز الورق → رفع القيمة → التدوير والبيع → توزيع العائد → دعم المدارس → التطوير الرقمي) is implemented in `home.js`.

---

## 2. Logic Chain

1. **Step 1**: Prompt R3 and task instructions require `pages/home.js` to feature dynamic metric counter cards triggered by `IntersectionObserver` to animate counting from 0 to 180, 26, 8, and 40.
2. **Step 2**: Inspection of `pages/home.js` reveals static HTML markup containing pre-rendered numbers (`180 طن`, `26`, `8%`, `40%`) with `data-target` attributes attached.
3. **Step 3**: Forensic search across the entire codebase confirms that no JavaScript file contains `IntersectionObserver` initialization, target counting logic, or scroll detection for `.counter-value` elements.
4. **Step 4**: Presenting HTML elements with `data-target` attributes to imitate dynamic counter logic while serving hardcoded static text and lacking observer JS code constitutes a **Facade Implementation** integrity violation.
5. **Step 5**: Inspection of CTA navigation buttons in `pages/home.js` reveals `href="#/forms"` and `href="#/calculators"`.
6. **Step 6**: Tracing `app.js` router execution shows that `window.location.hash.replace('#', '')` converts `#/forms` to `"/forms"`, which fails `routes["/forms"]` lookup and triggers a fallback to `'home'`, breaking primary CTA navigation.
7. **Step 7**: Per Integrity Forensics rules, if ANY check fails, the verdict must be `INTEGRITY VIOLATION`.

---

## 3. Caveats

- **Scope Limit**: Audit was limited to `pages/home.js`, `pages/about.js`, and their integration with `app.js`, `index.html`, and image assets in `./محتوي/`.
- **Image Integrity**: Asset files exist physically and render correctly in HTML, but image visual content was not modified or moved.
- **Non-blocking components**: The 6-stage value chain, biophilic card layout, and IP attributions in `about.js` were genuinely implemented and pass inspection.

---

## 4. Conclusion

- **Verdict**: 🔴 **INTEGRITY VIOLATION**
- **Rationale**:
  1. `pages/home.js` lacks an `IntersectionObserver` script for the metric counters, leaving static text hardcoded in a facade pattern.
  2. CTA links in `pages/home.js` (`href="#/forms"` & `href="#/calculators"`) break single-page routing in `app.js` by including unhandled slashes, forcing the router back to home.
- **Action Required**:
  1. Add an `IntersectionObserver` script hook in `pages/home.js` or `app.js` to dynamically observe `.counter-value` elements and animate number counting on scroll.
  2. Fix CTA button href attributes in `pages/home.js` from `href="#/forms"` and `href="#/calculators"` to `href="#forms"` and `href="#calculators"`.

---

## 5. Verification Method

To independently verify these findings, run the following commands in `c:\Users\DIAA\.gemini\antigravity\scratch\outbox`:

1. **Verify Missing IntersectionObserver**:
   ```powershell
   python -c "import glob, os; [print(f, i+1, l.strip()) for f in glob.glob('**/*.js', recursive=True) for i, l in enumerate(open(f, encoding='utf-8', errors='ignore')) if 'IntersectionObserver' in l]"
   ```
   *Expected Output*: Empty output (0 matches found in JS files).

2. **Verify CTA Routing Failure**:
   ```powershell
   python -c "routes = {'home': 1, 'forms': 2}; key = '#/forms'.replace('#', ''); print('Match:' if key in routes else 'FAIL fallback to home:', key)"
   ```
   *Expected Output*: `FAIL fallback to home: /forms`
