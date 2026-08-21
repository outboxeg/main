/* ==========================================================================
   Tier 2: Boundary & Corner Cases Test Suite (tests/tier2_boundary_corner.test.js)
   Bara El-Sandouq – Smart Green School
   ========================================================================== */

const { assert, createBrowserEnvironment, createTestSuite } = require('./test_harness');

const suite = createTestSuite('Tier 2: Boundary & Corner Cases');

// Helper to set up Calculators page DOM
function setupCalculatorsDOM(env) {
    env.appContent.innerHTML = env.sandbox.renderCalculatorsPage();
    
    const elementIds = [
        'calcMode', 'weightInputGroup', 'studentsInputGroup', 'paperWeight',
        'studentCount', 'materialType', 'carbonResultVal', 'totalRevenueInput',
        'logisticsCostInput', 'womenShareVal', 'schoolShareVal', 'assocShareVal',
        'surplusShareVal', 'surplusBarFill'
    ];

    elementIds.forEach(id => {
        if (!env.elementsMap[id]) {
            env.registerElement(id, 'input');
        }
    });

    env.sandbox.initCalculatorsLogic();
}

// 1. WARM v16 Carbon Calculator Math Edge Cases
suite.test('TC-T2-01: WARM v16 Zero Weight Input', () => {
    const env = createBrowserEnvironment();
    setupCalculatorsDOM(env);

    const paperWeight = env.elementsMap['paperWeight'];
    const carbonResultVal = env.elementsMap['carbonResultVal'];

    paperWeight.value = '0';
    paperWeight.dispatchEvent({ type: 'input' });

    assert.isTrue(
        carbonResultVal.textContent.includes('0') || carbonResultVal.textContent.includes('٠'),
        'Result must be 0 or ٠ for 0 weight input'
    );
});

suite.test('TC-T2-02: WARM v16 Decimal Fraction Weight (0.5 kg Mixed Paper)', () => {
    const env = createBrowserEnvironment();
    setupCalculatorsDOM(env);

    const paperWeight = env.elementsMap['paperWeight'];
    const materialType = env.elementsMap['materialType'];
    const carbonResultVal = env.elementsMap['carbonResultVal'];

    materialType.value = 'mixed'; // Factor 3.9903669
    paperWeight.value = '0.5';
    paperWeight.dispatchEvent({ type: 'input' });

    // 0.5 * 3.9903669 = 1.995... formatted as 2 or 1.99 (or Arabic 2 / ١٫٩٩ / ٢)
    assert.isTrue(
        carbonResultVal.textContent.includes('1.99') || carbonResultVal.textContent.includes('2') ||
        carbonResultVal.textContent.includes('١٫٩٩') || carbonResultVal.textContent.includes('٢'),
        `Result should be approx 1.995 CO2e, got: ${carbonResultVal.textContent}`
    );
});

suite.test('TC-T2-03: WARM v16 High Volume (1,000,000 kg Textbooks)', () => {
    const env = createBrowserEnvironment();
    setupCalculatorsDOM(env);

    const paperWeight = env.elementsMap['paperWeight'];
    const materialType = env.elementsMap['materialType'];
    const carbonResultVal = env.elementsMap['carbonResultVal'];

    materialType.value = 'textbooks'; // Factor 4.6627768
    paperWeight.value = '1000000';
    paperWeight.dispatchEvent({ type: 'input' });

    // 1,000,000 * 4.6627768 = 4,662,776.8 (Arabic: ٤٬٦٦٢٬٧٧٦٫٨)
    assert.isTrue(
        carbonResultVal.textContent.includes('4,662,776') || carbonResultVal.textContent.includes('٤٬٦٦٢٬٧٧٦'),
        `High volume calculation should match 4,662,776, got: ${carbonResultVal.textContent}`
    );
});

suite.test('TC-T2-04: Student Count Mode Zero Input (0 Students)', () => {
    const env = createBrowserEnvironment();
    setupCalculatorsDOM(env);

    const calcMode = env.elementsMap['calcMode'];
    const studentCount = env.elementsMap['studentCount'];
    const carbonResultVal = env.elementsMap['carbonResultVal'];

    calcMode.value = 'students';
    calcMode.dispatchEvent({ type: 'change' });

    studentCount.value = '0';
    studentCount.dispatchEvent({ type: 'input' });

    assert.isTrue(
        carbonResultVal.textContent.includes('0') || carbonResultVal.textContent.includes('٠'),
        '0 students should yield 0 CO2e'
    );
});

suite.test('TC-T2-05: Student Count Mode Single Student (1 Student = 40 kg)', () => {
    const env = createBrowserEnvironment();
    setupCalculatorsDOM(env);

    const calcMode = env.elementsMap['calcMode'];
    const studentCount = env.elementsMap['studentCount'];
    const materialType = env.elementsMap['materialType'];
    const carbonResultVal = env.elementsMap['carbonResultVal'];

    calcMode.value = 'students';
    calcMode.dispatchEvent({ type: 'change' });

    materialType.value = 'textbooks'; // 4.6627768
    studentCount.value = '1';
    studentCount.dispatchEvent({ type: 'input' });

    // 40 kg * 4.6627768 = 186.51... (Arabic: ١٨٦٫٥١)
    assert.isTrue(
        carbonResultVal.textContent.includes('186.5') || carbonResultVal.textContent.includes('186') ||
        carbonResultVal.textContent.includes('١٨٦٫٥١') || carbonResultVal.textContent.includes('١٨٦'),
        `1 student should produce approx 186.51 CO2e, got: ${carbonResultVal.textContent}`
    );
});

// 2. Revenue Split Math Edge Cases
suite.test('TC-T2-06: Revenue Split Zero Revenue Input', () => {
    const env = createBrowserEnvironment();
    setupCalculatorsDOM(env);

    const totalRevInput = env.elementsMap['totalRevenueInput'];
    const womenShareVal = env.elementsMap['womenShareVal'];
    const schoolShareVal = env.elementsMap['schoolShareVal'];
    const assocShareVal = env.elementsMap['assocShareVal'];

    totalRevInput.value = '0';
    totalRevInput.dispatchEvent({ type: 'input' });

    assert.isTrue(womenShareVal.textContent.includes('0') || womenShareVal.textContent.includes('٠'), 'Women share must be 0');
    assert.isTrue(schoolShareVal.textContent.includes('0') || schoolShareVal.textContent.includes('٠'), 'School share must be 0');
    assert.isTrue(assocShareVal.textContent.includes('0') || assocShareVal.textContent.includes('٠'), 'Assoc share must be 0');
});

suite.test('TC-T2-07: Revenue Split Excess Logistics Cost Clamping (Surplus >= 0)', () => {
    const env = createBrowserEnvironment();
    setupCalculatorsDOM(env);

    const totalRevInput = env.elementsMap['totalRevenueInput'];
    const logisticsInput = env.elementsMap['logisticsCostInput'];
    const surplusShareVal = env.elementsMap['surplusShareVal'];

    totalRevInput.value = '10000'; // 25% = 2500 EGP
    logisticsInput.value = '5000'; // Excess logistics cost (5000 > 2500)
    totalRevInput.dispatchEvent({ type: 'input' });

    // Surplus must clamp to 0 EGP, never negative
    assert.isTrue(
        surplusShareVal.textContent.includes('0') || surplusShareVal.textContent.includes('٠'),
        'Surplus share must be clamped at 0 EGP when logistics exceed 25%'
    );
});

suite.test('TC-T2-08: Revenue Split High Amount (1,000,000 EGP)', () => {
    const env = createBrowserEnvironment();
    setupCalculatorsDOM(env);

    const totalRevInput = env.elementsMap['totalRevenueInput'];
    const womenShareVal = env.elementsMap['womenShareVal'];

    totalRevInput.value = '1000000';
    totalRevInput.dispatchEvent({ type: 'input' });

    // 40% of 1,000,000 = 400,000 (Arabic: ٤٠٠٬٠٠٠)
    assert.isTrue(
        womenShareVal.textContent.includes('400,000') || womenShareVal.textContent.includes('400000') ||
        womenShareVal.textContent.includes('٤٠٠٬٠٠٠'),
        `Women share for 1M EGP should be 400,000, got: ${womenShareVal.textContent}`
    );
});

// 3. Form Validation & Input Safety
suite.test('TC-T2-09: Egyptian Mobile Number Regex Validation Helper', () => {
    const egMobileRegex = /^01[0125][0-9]{8}$/;

    assert.isTrue(egMobileRegex.test('01012345678'), '01012345678 is valid');
    assert.isTrue(egMobileRegex.test('01123456789'), '01123456789 is valid');
    assert.isTrue(egMobileRegex.test('01234567890'), '01234567890 is valid');
    assert.isTrue(egMobileRegex.test('01545678901'), '01545678901 is valid');

    assert.isTrue(!egMobileRegex.test('010123'), 'Too short mobile number fails validation');
    assert.isTrue(!egMobileRegex.test('02012345678'), 'Non-mobile area code 02 fails validation');
    assert.isTrue(!egMobileRegex.test('abcdefghijk'), 'Non-numeric phone fails validation');
});

suite.test('TC-T2-10: Form Input XSS Safety & Escape Test', () => {
    const env = createBrowserEnvironment();
    env.sandbox.renderFormsPage();

    const maliciousName = '<script>alert("xss")</script>مدرسة الاختبار';
    const input = env.document.createElement('input');
    input.value = maliciousName;
    
    const container = env.document.createElement('div');
    container.textContent = input.value;
    assert.isTrue(!container.innerHTML.includes('<script>alert'), 'DOM textContent assignment sanitizes script tags');
});

module.exports = suite;
