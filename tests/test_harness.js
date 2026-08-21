/* ==========================================================================
   E2E Test Harness & Shared Utilities (tests/test_harness.js)
   Bara El-Sandouq – Smart Green School E2E Test Suite
   ========================================================================== */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT_DIR = path.resolve(__dirname, '..');

/**
 * Lightweight assertion library
 */
const assert = {
    isTrue(value, message) {
        if (!value) throw new Error(message || `Expected ${value} to be truthy`);
    },
    equal(actual, expected, message) {
        if (actual !== expected) {
            throw new Error(message || `Expected ${JSON.stringify(actual)} to equal ${JSON.stringify(expected)}`);
        }
    },
    almostEqual(actual, expected, precision = 2, message) {
        const diff = Math.abs(actual - expected);
        const tolerance = Math.pow(10, -precision);
        if (diff > tolerance) {
            throw new Error(message || `Expected ${actual} to be close to ${expected} (diff: ${diff})`);
        }
    },
    includes(haystack, needle, message) {
        if (typeof haystack === 'string' || Array.isArray(haystack)) {
            if (!haystack.includes(needle)) {
                throw new Error(message || `Expected ${JSON.stringify(haystack)} to include ${JSON.stringify(needle)}`);
            }
        } else {
            throw new Error(`Invalid haystack type for includes: ${typeof haystack}`);
        }
    },
    matches(str, regex, message) {
        if (!regex.test(str)) {
            throw new Error(message || `Expected string to match ${regex}`);
        }
    },
    greaterThan(actual, min, message) {
        if (actual <= min) {
            throw new Error(message || `Expected ${actual} > ${min}`);
        }
    }
};

/**
 * Asset Existence Verifier
 */
function verifyAssetExists(relativePath) {
    const fullPath = path.join(ROOT_DIR, relativePath.replace(/^\.\\/, '').replace(/^\.\//, ''));
    return fs.existsSync(fullPath);
}

/**
 * Browser Environment Mock for Node VM execution
 */
function createBrowserEnvironment() {
    const storage = {};
    const windowEventListeners = {};
    const documentEventListeners = {};
    const elementsMap = {};

    class MockClassList {
        constructor(initialStr = '') {
            this.classes = new Set(initialStr.split(' ').filter(Boolean));
        }
        add(...cls) { cls.forEach(c => this.classes.add(c)); }
        remove(...cls) { cls.forEach(c => this.classes.delete(c)); }
        contains(c) { return this.classes.has(c); }
        has(c) { return this.classes.has(c); }
        toggle(c) { if (this.contains(c)) this.remove(c); else this.add(c); }
        toString() { return Array.from(this.classes).join(' '); }
    }

    class MockElement {
        constructor(tagName = 'div') {
            this.tagName = tagName.toUpperCase();
            this.id = '';
            this.className = '';
            this.classList = new MockClassList();
            this.attributes = {};
            this.children = [];
            this._innerHTML = '';
            this.textContent = '';
            this.style = {};
            this.listeners = {};
            this.value = '';
            this.display = 'block';
        }

        get innerHTML() {
            return this._innerHTML;
        }

        set innerHTML(html) {
            this._innerHTML = html;
            this.textContent = html.replace(/<[^>]*>/g, '');
            // Auto parse child elements with IDs
            const idMatches = [...html.matchAll(/id=["']([^"']+)["']/gi)];
            idMatches.forEach(match => {
                const id = match[1];
                if (!elementsMap[id]) {
                    const tagMatch = html.match(new RegExp(`<([a-zA-Z0-9-]+)[^>]*id=["']${id}["']`, 'i'));
                    const tag = tagMatch ? tagMatch[1] : 'div';
                    const el = new MockElement(tag);
                    el.setAttribute('id', id);
                    const valMatch = html.match(new RegExp(`id=["']${id}["'][^>]*value=["']([^"']*)["']`, 'i'));
                    if (valMatch) el.value = valMatch[1];
                    elementsMap[id] = el;
                }
            });
        }

        setAttribute(key, val) {
            this.attributes[key] = String(val);
            if (key === 'id') {
                this.id = String(val);
                elementsMap[this.id] = this;
            }
            if (key === 'class') {
                this.className = String(val);
                this.classList = new MockClassList(String(val));
            }
            if (key === 'value') {
                this.value = String(val);
            }
        }

        getAttribute(key) {
            if (key === 'class') return this.classList.toString();
            return this.attributes[key] || null;
        }

        hasAttribute(key) {
            return key in this.attributes;
        }

        removeAttribute(key) {
            delete this.attributes[key];
        }

        addEventListener(evt, fn) {
            if (!this.listeners[evt]) this.listeners[evt] = [];
            this.listeners[evt].push(fn);
        }

        dispatchEvent(evt) {
            const eventName = typeof evt === 'string' ? evt : evt.type;
            const handlers = this.listeners[eventName] || [];
            handlers.forEach(fn => fn(evt));
        }

        querySelector(sel) {
            return querySelectorMock(this, sel);
        }

        querySelectorAll(sel) {
            return querySelectorAllMock(this, sel);
        }

        appendChild(child) {
            this.children.push(child);
            return child;
        }

        remove() {
            if (this.id && elementsMap[this.id]) {
                delete elementsMap[this.id];
            }
        }

        reset() {
            this.value = '';
        }
    }

    function parseSimpleSelector(sel) {
        if (sel.startsWith('#')) return { type: 'id', val: sel.slice(1) };
        if (sel.startsWith('.')) return { type: 'class', val: sel.slice(1) };
        return { type: 'tag', val: sel.toUpperCase() };
    }

    function querySelectorMock(root, sel) {
        const results = querySelectorAllMock(root, sel);
        return results.length > 0 ? results[0] : null;
    }

    function querySelectorAllMock(root, sel) {
        const parsed = parseSimpleSelector(sel);
        const matches = [];

        // Check registered elements map
        Object.values(elementsMap).forEach(el => {
            if (parsed.type === 'id' && el.id === parsed.val) matches.push(el);
            if (parsed.type === 'class' && el.classList.has(parsed.val)) matches.push(el);
            if (parsed.type === 'tag' && el.tagName === parsed.val) matches.push(el);
        });

        // Also check raw innerHTML search if elements not in map
        if (matches.length === 0 && root && root.innerHTML) {
            const html = root.innerHTML;
            if (parsed.type === 'class') {
                const classRegex = new RegExp(`<([a-zA-Z0-9-]+)[^>]*class=["'][^"']*\\b${parsed.val}\\b[^"']*["'][^>]*>`, 'gi');
                const classMatches = [...html.matchAll(classRegex)];
                classMatches.forEach(m => {
                    const tag = m[1];
                    const el = new MockElement(tag);
                    el.setAttribute('class', parsed.val);
                    const filterMatch = m[0].match(/data-filter=["']([^"']+)["']/i);
                    if (filterMatch) el.setAttribute('data-filter', filterMatch[1]);
                    const typeMatch = m[0].match(/data-type=["']([^"']+)["']/i);
                    if (typeMatch) el.setAttribute('data-type', typeMatch[1]);
                    matches.push(el);
                });
            }
        }

        return matches;
    }

    function registerElement(id, tag = 'div', className = '') {
        if (elementsMap[id]) return elementsMap[id];
        const el = new MockElement(tag);
        el.setAttribute('id', id);
        if (className) el.setAttribute('class', className);
        elementsMap[id] = el;
        return el;
    }

    const appContent = registerElement('app-content', 'main', 'main-content');
    const toastContainer = registerElement('toastContainer', 'div', 'toast-container');
    const modalOverlay = registerElement('modalOverlay', 'div', 'modal-overlay');
    const modalClose = registerElement('modalClose', 'button', 'modal-close');
    const modalBody = registerElement('modalBody', 'div', 'modal-body');
    const mobileToggle = registerElement('mobileToggle', 'button', 'mobile-toggle');
    const navMenu = registerElement('navMenu', 'nav', 'nav-menu');
    const menuOpenIcon = registerElement('menuOpenIcon', 'i');
    const menuCloseIcon = registerElement('menuCloseIcon', 'i');

    const documentMock = {
        createElement(tag) {
            return new MockElement(tag);
        },
        getElementById(id) {
            if (elementsMap[id]) return elementsMap[id];
            // If inside appContent innerHTML, dynamic register
            if (appContent.innerHTML && appContent.innerHTML.includes(`id="${id}"`)) {
                const el = new MockElement('div');
                el.setAttribute('id', id);
                return el;
            }
            return null;
        },
        querySelector(sel) {
            return querySelectorMock(appContent, sel);
        },
        querySelectorAll(sel) {
            return querySelectorAllMock(appContent, sel);
        },
        addEventListener(evt, fn) {
            if (!documentEventListeners[evt]) documentEventListeners[evt] = [];
            documentEventListeners[evt].push(fn);
        },
        dispatchEvent(evt) {
            const eventName = typeof evt === 'string' ? evt : evt.type;
            const handlers = documentEventListeners[eventName] || [];
            handlers.forEach(fn => fn(evt));
        },
        body: new MockElement('body'),
        documentElement: new MockElement('html')
    };

    documentMock.body.appendChild(appContent);

    const localStorageMock = {
        getItem(key) {
            return storage[key] || null;
        },
        setItem(key, val) {
            storage[key] = String(val);
        },
        removeItem(key) {
            delete storage[key];
        },
        clear() {
            Object.keys(storage).forEach(k => delete storage[k]);
        }
    };

    const lucideMock = { createIcons: () => {} };

    const windowMock = {
        document: documentMock,
        localStorage: localStorageMock,
        location: { hash: '#home', href: 'http://localhost:8080/' },
        scrollTo: () => {},
        addEventListener(evt, fn) {
            if (!windowEventListeners[evt]) windowEventListeners[evt] = [];
            windowEventListeners[evt].push(fn);
        },
        dispatchEvent(evt) {
            const eventName = typeof evt === 'string' ? evt : evt.type;
            const handlers = windowEventListeners[eventName] || [];
            handlers.forEach(fn => fn(evt));
        },
        lucide: lucideMock
    };

    const sandbox = vm.createContext({
        window: windowMock,
        document: documentMock,
        localStorage: localStorageMock,
        lucide: lucideMock,
        console: console,
        setTimeout: setTimeout,
        clearTimeout: clearTimeout,
        parseFloat: parseFloat,
        parseInt: parseInt,
        Math: Math,
        JSON: JSON,
        Object: Object,
        Array: Array,
        Set: Set,
        String: String,
        Number: Number,
        RegExp: RegExp
    });

    const pageFiles = [
        'pages/home.js',
        'pages/about.js',
        'pages/how-it-works.js',
        'pages/impact.js',
        'pages/smart-platform.js',
        'pages/calculators.js',
        'pages/forms.js',
        'pages/knowledge.js',
        'app.js'
    ];

    pageFiles.forEach(file => {
        const fullPath = path.join(ROOT_DIR, file);
        if (fs.existsSync(fullPath)) {
            const code = fs.readFileSync(fullPath, 'utf8');
            vm.runInContext(code, sandbox);
        }
    });

    // Trigger DOMContentLoaded so app.js initializes handlers and router
    documentMock.dispatchEvent({ type: 'DOMContentLoaded' });

    return {
        sandbox,
        document: documentMock,
        window: windowMock,
        localStorage: localStorageMock,
        appContent,
        elementsMap,
        registerElement
    };
}

/**
 * Suite Runner Framework
 */
function createTestSuite(suiteName) {
    const tests = [];
    return {
        name: suiteName,
        test(testName, fn) {
            tests.push({ testName, fn });
        },
        async run() {
            console.log(`\n==================================================`);
            console.log(`RUNNING SUITE: ${suiteName}`);
            console.log(`==================================================`);
            let passed = 0;
            let failed = 0;
            const results = [];

            for (const { testName, fn } of tests) {
                try {
                    await fn();
                    console.log(`  ✅ PASS: ${testName}`);
                    passed++;
                    results.push({ testName, status: 'PASS' });
                } catch (err) {
                    console.error(`  ❌ FAIL: ${testName}`);
                    console.error(`     Error: ${err.message}`);
                    failed++;
                    results.push({ testName, status: 'FAIL', error: err.message });
                }
            }

            console.log(`--------------------------------------------------`);
            console.log(`Suite Summary: ${passed} passed, ${failed} failed (${tests.length} total)\n`);
            return { suiteName, passed, failed, total: tests.length, results };
        }
    };
}

module.exports = {
    ROOT_DIR,
    assert,
    verifyAssetExists,
    createBrowserEnvironment,
    createTestSuite
};
