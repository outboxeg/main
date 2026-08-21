/* ==========================================================================
   Tier 1: Feature Coverage Test Suite (tests/tier1_feature_coverage.test.js)
   Bara El-Sandouq – Smart Green School
   ========================================================================== */

const fs = require('fs');
const path = require('path');
const { ROOT_DIR, assert, verifyAssetExists, createBrowserEnvironment, createTestSuite } = require('./test_harness');

const suite = createTestSuite('Tier 1: Feature Coverage');

// 1. CSS Custom Properties & Design System
suite.test('TC-T1-01: CSS Custom Tokens Presence in styles.css', () => {
    const cssPath = path.join(ROOT_DIR, 'styles.css');
    assert.isTrue(fs.existsSync(cssPath), 'styles.css file must exist');
    const css = fs.readFileSync(cssPath, 'utf8');

    const requiredTokens = [
        '--color-primary',
        '--color-primary-dark',
        '--color-secondary',
        '--color-accent',
        '--color-bg',
        '--color-surface',
        '--color-muted',
        '--color-text',
        '--color-border'
    ];

    requiredTokens.forEach(token => {
        assert.includes(css, token, `styles.css must define CSS custom property ${token}`);
    });
});

suite.test('TC-T1-02: Spring Hover Physics & Motion Utility', () => {
    const css = fs.readFileSync(path.join(ROOT_DIR, 'styles.css'), 'utf8');
    assert.includes(css, 'cubic-bezier', 'styles.css must utilize spring cubic-bezier easing curve');
});

suite.test('TC-T1-03: Pointerdown Active Feedback (scale 0.97)', () => {
    const css = fs.readFileSync(path.join(ROOT_DIR, 'styles.css'), 'utf8');
    assert.isTrue(
        css.includes('scale(0.97)') || css.includes('scale(0.98)') || css.includes(':active'),
        'styles.css must include tactile active feedback for buttons'
    );
});

suite.test('TC-T1-04: Glassmorphism Material Utility', () => {
    const css = fs.readFileSync(path.join(ROOT_DIR, 'styles.css'), 'utf8');
    assert.isTrue(
        css.includes('backdrop-filter') || css.includes('glass'),
        'styles.css must define glassmorphism backdrop-filter property'
    );
});

suite.test('TC-T1-05: Status Accreditation Badges (Certified, Estimated, Planned, Locked)', () => {
    const css = fs.readFileSync(path.join(ROOT_DIR, 'styles.css'), 'utf8');
    assert.includes(css, 'badge-certified', 'styles.css must define .badge-certified');
});

// 2. HTML Shell & Accessibility
suite.test('TC-T1-06: HTML Accessibility Shell (dir="rtl", lang="ar", Skip Link, JSON-LD)', () => {
    const htmlPath = path.join(ROOT_DIR, 'index.html');
    assert.isTrue(fs.existsSync(htmlPath), 'index.html file must exist');
    const html = fs.readFileSync(htmlPath, 'utf8');

    assert.includes(html, 'dir="rtl"', 'index.html must specify dir="rtl"');
    assert.includes(html, 'lang="ar"', 'index.html must specify lang="ar"');
    assert.includes(html, 'skip-link', 'index.html must include skip-to-content accessibility link');
    assert.includes(html, 'fonts.googleapis.com', 'index.html must link to Google Fonts');
});

suite.test('TC-T1-07: Footer Information & Attribution', () => {
    const html = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');
    assert.includes(html, 'فاطمة عبد المجيد راضي', 'Footer must mention IP owner Fatima Abdulmajeed Radi');
    assert.includes(html, 'جمعية الإسراء', 'Footer must mention El-Israa Association');
    assert.includes(html, '1124', 'Footer must state registration #1124');
});

// 3. Homepage (home.js)
suite.test('TC-T1-08: Homepage View Rendering & Real Field Photos/Metrics', () => {
    const env = createBrowserEnvironment();
    const html = env.sandbox.renderHomePage();

    assert.includes(html, 'من مخلفات مدرسية إلى فرص خضراء ذكية', 'Hero title must match specification');
    assert.includes(html, '26', 'Homepage must display 26 schools metric');
    assert.includes(html, '180 طن', 'Homepage must display 180 tons metric');
    assert.includes(html, '8%', 'Homepage must display 8% disabled metric');
    assert.includes(html, '40%', 'Homepage must display 40% women empowerment metric');
    assert.includes(html, 'دورة عمل المنظومة', 'Homepage must render value chain section');
});

// 4. About Page (about.js)
suite.test('TC-T1-09: About Page Rendering & IP / Institutional Proofs', () => {
    const env = createBrowserEnvironment();
    const html = env.sandbox.renderAboutPage();

    assert.includes(html, 'عن مشروع برة الصندوق', 'About page title present');
    assert.includes(html, 'فاطمة عبد المجيد راضي', 'IP owner Fatima Abdulmajeed Radi must be attributed');
    assert.includes(html, 'جمعية الإسراء الخيرية', 'El-Israa Association must be listed');
    assert.includes(html, '1124', 'Registration #1124 must be present');
    assert.includes(html, 'مايو 2023', 'Timeline must include May 2023 inception date');
    assert.includes(html, 'القيم الحاكمة', '10 governing values section present');
});

// 5. Knowledge Hub (knowledge.js)
suite.test('TC-T1-10: Knowledge Hub Activity Cards Rendering', () => {
    const env = createBrowserEnvironment();
    const html = env.sandbox.renderKnowledgePage();

    assert.includes(html, 'مكتبة الأنشطة والوسائل التعليمية', 'Knowledge hub header present');
    assert.includes(html, 'سلة الفرز التعليمية', 'Activity 1 present');
    assert.includes(html, 'مسرح العرائس الورقي', 'Activity 2 present');
    assert.includes(html, 'جدول السلوك البيئي', 'Activity 3 present');
});

// 6. How It Works (how-it-works.js)
suite.test('TC-T1-11: How It Works 8 Operational Phases Rendering', () => {
    const env = createBrowserEnvironment();
    const html = env.sandbox.renderHowItWorksPage();

    assert.includes(html, 'كيف يعمل مشروع برة الصندوق؟', 'How It Works title present');
    assert.includes(html, 'التسجيل والتواصل الأولي', 'Phase 1 present');
    assert.includes(html, 'تقييم الجاهزية والنقاط الآمنة', 'Phase 2 present');
    assert.includes(html, 'قياس الأثر وإصدار التقرير', 'Phase 8 present');
    assert.includes(html, 'أدوار الشركاء والمشاركين', 'Partner roles grid present');
});

// 7. Impact Dashboard (impact.js)
suite.test('TC-T1-12: Impact Dashboard Badges & 40/25/10/25 Revenue Split', () => {
    const env = createBrowserEnvironment();
    const html = env.sandbox.renderImpactPage();

    assert.includes(html, 'لوحة مؤشرات الأثر والشفافية الميدانية', 'Impact dashboard title present');
    assert.includes(html, '40%', 'Women share 40% displayed');
    assert.includes(html, '25%', 'School share 25% displayed');
    assert.includes(html, '10%', 'Association share 10% displayed');
    assert.includes(html, 'منفذ وموثق', 'Certified badge filter option present');
});

// 8. Calculators (calculators.js)
suite.test('TC-T1-13: Calculators Page WARM v16 & Revenue Split UI Structure', () => {
    const env = createBrowserEnvironment();
    const html = env.sandbox.renderCalculatorsPage();

    assert.includes(html, 'WARM v16', 'Carbon calculator heading contains WARM v16');
    assert.includes(html, '40-25-10-25', 'Revenue split heading contains 40-25-10-25');
    assert.includes(html, 'paperWeight', 'Paper weight input present');
    assert.includes(html, 'totalRevenueInput', 'Total revenue input present');
});

// 9. Forms Page (forms.js)
suite.test('TC-T1-14: Smart Forms Page 5 Form Panes Rendering', () => {
    const env = createBrowserEnvironment();
    const html = env.sandbox.renderFormsPage();

    assert.includes(html, 'assocFormPane', 'Association form pane present');
    assert.includes(html, 'schoolFormPane', 'School nomination form pane present');
    assert.includes(html, 'volunteerFormPane', 'Volunteer form pane present');
    assert.includes(html, 'womenFormPane', 'Women empowerment form pane present');
    assert.includes(html, 'partnerFormPane', 'Partner form pane present');
});

// 10. Smart Platform (smart-platform.js)
suite.test('TC-T1-15: Smart Platform NISGP 2026 4 Digital Maturity Levels Rendering', () => {
    const env = createBrowserEnvironment();
    const html = env.sandbox.renderSmartPlatformPage();

    assert.includes(html, 'NISGP 2026', 'Smart platform header mentions NISGP 2026');
    assert.includes(html, 'المستوى الأول', 'Level 1 maturity badge present');
    assert.includes(html, 'المستوى الثاني', 'Level 2 maturity badge present');
    assert.includes(html, 'المستوى الثالث', 'Level 3 maturity badge present');
    assert.includes(html, 'المستوى الرابع', 'Level 4 maturity badge present');
    assert.includes(html, 'ضوابط الذكاء الاصطناعي والأمان الذكي', 'AI safety controls section present');
});

// 11. Real Asset File Verification
suite.test('TC-T1-16: Real Asset Images Existence Check', () => {
    const requiredAssets = [
        'محتوي/لوجو_برة_الصندوق_1-removebg-preview.png',
        'محتوي/لوجو برة الصندوق 1.png',
        'محتوي/لوجو جمعية الاسراء.jpg',
        'محتوي/بانر برة الصندوق.jpeg',
        'محتوي/برة 1.png',
        'محتوي/برة 2.png',
        'محتوي/برة 3.png',
        'محتوي/برة 4.png',
        'محتوي/برة 5.png',
        'محتوي/برة 6.png',
        'محتوي/برة 7.png',
        'محتوي/برة الصندوق 8.png',
        'محتوي/برة 9.png',
        'محتوي/برة 10.png',
        'محتوي/برة 11.png',
        'محتوي/برة 12.png',
        'محتوي/برة 13.png'
    ];

    requiredAssets.forEach(asset => {
        assert.isTrue(verifyAssetExists(asset), `Asset file ${asset} must exist in project directory`);
    });
});

module.exports = suite;
