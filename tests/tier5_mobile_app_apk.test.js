/* ==========================================================================
   Tier 5: Mobile App & Android APK Architecture Test Suite
   (tests/tier5_mobile_app_apk.test.js)
   Bara El-Sandouq – Standalone Mobile Suite
   ========================================================================== */

const fs = require('fs');
const path = require('path');
const { ROOT_DIR, assert, createTestSuite } = require('./test_harness');

const suite = createTestSuite('Tier 5: Mobile App & Android APK Suite');

const MOBILE_DIR = path.join(ROOT_DIR, 'تطبيق_الهاتف');

// 1. Mobile Directory & Files Structure
suite.test('TC-T5-01: Dedicated Mobile Directory (تطبيق_الهاتف) Structure', () => {
    assert.isTrue(fs.existsSync(MOBILE_DIR), 'Directory تطبيق_الهاتف must exist in project root');
    assert.isTrue(fs.existsSync(path.join(MOBILE_DIR, 'www')), 'Directory تطبيق_الهاتف/www must exist');
    assert.isTrue(fs.existsSync(path.join(MOBILE_DIR, 'android')), 'Directory تطبيق_الهاتف/android must exist');
    assert.isTrue(fs.existsSync(path.join(MOBILE_DIR, 'README.md')), 'تطبيق_الهاتف/README.md must exist');
    assert.isTrue(fs.existsSync(path.join(MOBILE_DIR, 'INSTALL_GUIDE.md')), 'تطبيق_الهاتف/INSTALL_GUIDE.md must exist');
    assert.isTrue(fs.existsSync(path.join(MOBILE_DIR, 'build-apk.bat')), 'تطبيق_الهاتف/build-apk.bat must exist');
});

// 2. Mobile WebApp Manifest
suite.test('TC-T5-02: Web App Manifest (manifest.json) Validation', () => {
    const manifestPath = path.join(MOBILE_DIR, 'www', 'manifest.json');
    assert.isTrue(fs.existsSync(manifestPath), 'manifest.json must exist in www/');
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

    assert.equal(manifest.name, 'برة الصندوق – المدرسة الخضراء الذكية', 'Manifest name matches');
    assert.equal(manifest.short_name, 'برة الصندوق', 'Manifest short_name matches');
    assert.equal(manifest.display, 'standalone', 'Manifest display must be standalone for native look');
    assert.equal(manifest.orientation, 'portrait-primary', 'Orientation must be portrait');
    assert.isTrue(Array.isArray(manifest.icons) && manifest.icons.length >= 8, 'Manifest must have multi-res icons');
});

// 3. Service Worker Offline Engine
suite.test('TC-T5-03: Service Worker (sw.js) Offline Cache Validation', () => {
    const swPath = path.join(MOBILE_DIR, 'www', 'sw.js');
    assert.isTrue(fs.existsSync(swPath), 'sw.js must exist in www/');
    const sw = fs.readFileSync(swPath, 'utf8');

    assert.includes(sw, 'CACHE_NAME', 'sw.js must define cache name');
    assert.includes(sw, 'install', 'sw.js must handle install event');
    assert.includes(sw, 'fetch', 'sw.js must handle fetch event for offline fallbacks');
});

// 4. Mobile UI & Bottom Navigation Bar
suite.test('TC-T5-04: Mobile UI Shell & Bottom Navigation in index.html', () => {
    const htmlPath = path.join(MOBILE_DIR, 'www', 'index.html');
    assert.isTrue(fs.existsSync(htmlPath), 'index.html must exist in www/');
    const html = fs.readFileSync(htmlPath, 'utf8');

    assert.includes(html, 'bottom-nav-bar', 'Must contain bottom navigation bar');
    assert.includes(html, 'mobile-drawer', 'Must contain off-canvas drawer with all pages');
    assert.includes(html, 'tab-home', 'Bottom nav must have Home tab');
    assert.includes(html, 'tab-impact', 'Bottom nav must have Impact tab');
    assert.includes(html, 'tab-calculators', 'Bottom nav must have Calculators tab');
    assert.includes(html, 'tab-forms', 'Bottom nav must have Forms tab');
    assert.includes(html, 'tab-menu', 'Bottom nav must have More/Menu tab');
    assert.includes(html, '201064376377', 'Must include official project phone / WhatsApp number');

    // Verify all 10 pages exist
    const pages = ['home.js', 'about.js', 'how-it-works.js', 'impact.js', 'smart-platform.js', 'calculators.js', 'knowledge.js', 'forms.js', 'policy.js', 'admin.js'];
    pages.forEach(p => {
        assert.isTrue(fs.existsSync(path.join(MOBILE_DIR, 'www', 'pages', p)), `Page ${p} must exist in mobile app`);
    });
});

// 5. WhatsApp Direct Integration Engine
suite.test('TC-T5-05: Direct WhatsApp Dispatch Engine in forms-whatsapp.js', () => {
    const jsPath = path.join(MOBILE_DIR, 'www', 'js', 'forms-whatsapp.js');
    assert.isTrue(fs.existsSync(jsPath), 'forms-whatsapp.js must exist');
    const code = fs.readFileSync(jsPath, 'utf8');

    assert.includes(code, 'wa.me', 'Must format WhatsApp URL with wa.me scheme');
    assert.includes(code, 'dispatchAssociationForm', 'Must include association form dispatcher');
    assert.includes(code, 'dispatchSchoolForm', 'Must include school form dispatcher');
    assert.includes(code, 'dispatchWomenForm', 'Must include women empowerment form dispatcher');
    assert.includes(code, 'dispatchVolunteerForm', 'Must include volunteer form dispatcher');
    assert.includes(code, 'dispatchPartnerForm', 'Must include partner form dispatcher');
    assert.includes(code, 'dispatchGrievanceForm', 'Must include confidential grievance dispatcher');
    assert.includes(code, 'saveSubmissionLocally', 'Must support offline local storage fallback');
});

// 6. Mobile Scientific Calculators
suite.test('TC-T5-06: Mobile Calculators Engine (WARM v16 & Revenue Split)', () => {
    const jsPath = path.join(MOBILE_DIR, 'www', 'js', 'calculators.js');
    assert.isTrue(fs.existsSync(jsPath), 'calculators.js must exist');
    const code = fs.readFileSync(jsPath, 'utf8');

    assert.includes(code, '4.6627768', 'Must use EPA WARM v16 factor for textbooks');
    assert.includes(code, '0.40', 'Must calculate 40% women share');
    assert.includes(code, '0.25', 'Must calculate 25% school share');
    assert.includes(code, '0.10', 'Must calculate 10% association share');
});

// 7. Native Android Studio Project Structure
suite.test('TC-T5-07: Native Android Studio Gradle Project Structure', () => {
    const androidDir = path.join(MOBILE_DIR, 'android');
    const manifestPath = path.join(androidDir, 'app', 'src', 'main', 'AndroidManifest.xml');
    const mainActivityPath = path.join(androidDir, 'app', 'src', 'main', 'java', 'eg', 'outbox', 'app', 'MainActivity.java');
    const assetsWwwPath = path.join(androidDir, 'app', 'src', 'main', 'assets', 'www', 'index.html');

    assert.isTrue(fs.existsSync(manifestPath), 'AndroidManifest.xml must exist');
    assert.isTrue(fs.existsSync(mainActivityPath), 'MainActivity.java must exist');
    assert.isTrue(fs.existsSync(assetsWwwPath), 'Embedded offline assets/www/index.html must exist');

    const manifest = fs.readFileSync(manifestPath, 'utf8');
    assert.includes(manifest, 'com.whatsapp', 'AndroidManifest must query WhatsApp package visibility');
    assert.includes(manifest, 'eg.outbox.app', 'AndroidManifest package name verified');

    const mainActivity = fs.readFileSync(mainActivityPath, 'utf8');
    assert.includes(mainActivity, 'file:///android_asset/www/index.html', 'MainActivity must load offline assets');
    assert.includes(mainActivity, 'whatsapp:', 'MainActivity must handle WhatsApp custom URL schemes');
});

module.exports = suite;
