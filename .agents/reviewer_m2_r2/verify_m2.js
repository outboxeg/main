const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '../..');
const homeJS = fs.readFileSync(path.join(root, 'pages/home.js'), 'utf8');
const appJS = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const stylesCSS = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');

console.log('--- 1. Counter Logic Checks ---');
console.log('initHomeCounters function present:', homeJS.includes('function initHomeCounters()'));
console.log('IntersectionObserver present:', homeJS.includes('new IntersectionObserver'));
console.log('requestAnimationFrame present:', homeJS.includes('requestAnimationFrame(step)'));
console.log('Cubic ease-out present:', homeJS.includes('1 - Math.pow(1 - progress, 3)'));
console.log('Initial HTML starts at 0:', homeJS.includes('>0 طن</div>') && homeJS.includes('>0 مدرسة</div>') && homeJS.includes('>0%</div>'));
console.log('app.js initializes counters on page navigate:', appJS.includes("pageKey === 'home' && typeof initHomeCounters === 'function'"));

console.log('\n--- 2. Router CTA Link Checks ---');
console.log('Hero section CTA href #forms:', homeJS.includes('href="#forms"'));
console.log('Hero section CTA href #calculators:', homeJS.includes('href="#calculators"'));
console.log('Old href #/forms absent:', !homeJS.includes('href="#/forms"'));
console.log('Old href #/calculators absent:', !homeJS.includes('href="#/calculators"'));
console.log('Defensive hash regex in app.js:', appJS.includes("replace(/^#\\/?/, '')"));

console.log('\n--- 3. Hero Headline Stagger Animation Checks ---');
console.log('@keyframes heroWordStagger present:', stylesCSS.includes('@keyframes heroWordStagger'));
console.log('.hero-stagger-word class present:', stylesCSS.includes('.hero-stagger-word'));
console.log('Cubic-bezier spring easing present:', stylesCSS.includes('cubic-bezier(0.34, 1.56, 0.64, 1)'));
console.log('prefers-reduced-motion media query present:', stylesCSS.includes('prefers-reduced-motion: reduce'));
console.log('hero-stagger-word applied to headline spans:', homeJS.includes('<span class="hero-stagger-word">برة الصندوق</span>'));
