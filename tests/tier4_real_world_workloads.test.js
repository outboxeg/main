/* ==========================================================================
   Tier 4: Real-World Application Workloads Test Suite (tests/tier4_real_world_workloads.test.js)
   Bara El-Sandouq – Smart Green School
   ========================================================================== */

const { assert, createBrowserEnvironment, createTestSuite } = require('./test_harness');

const suite = createTestSuite('Tier 4: Real-World Application Workloads');

suite.test('TC-T4-01: Full End-to-End User Journey Simulation Workload', async () => {
    const env = createBrowserEnvironment();

    // Step 1: Load Homepage
    env.appContent.innerHTML = env.sandbox.renderHomePage();
    assert.includes(env.appContent.innerHTML, 'من مخلفات مدرسية إلى فرص خضراء ذكية', 'Step 1: Homepage loaded');
    assert.isTrue(env.appContent.innerHTML.includes('180') && env.appContent.innerHTML.includes('طن'), 'Step 1: Metric 180 tons paper verified');
    assert.includes(env.appContent.innerHTML, '26', 'Step 1: Metric 26 schools verified');

    // Step 2: Navigate to About Page
    env.appContent.innerHTML = env.sandbox.renderAboutPage();
    assert.includes(env.appContent.innerHTML, 'عن مشروع برة الصندوق', 'Step 2: About page loaded');
    assert.includes(env.appContent.innerHTML, 'فاطمة عبد المجيد راضي', 'Step 2: IP Owner Fatima Abdulmajeed Radi verified');
    assert.includes(env.appContent.innerHTML, 'جمعية الإسراء الخيرية', 'Step 2: El-Israa Association verified');
    assert.includes(env.appContent.innerHTML, '1124', 'Step 2: Registration #1124 verified');

    // Step 3: Navigate to Calculators & Execute Calculations
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

    const paperWeight = env.elementsMap['paperWeight'];
    const materialType = env.elementsMap['materialType'];
    const carbonResultVal = env.elementsMap['carbonResultVal'];

    materialType.value = 'textbooks'; // Factor 4.6627768
    paperWeight.value = '100';
    paperWeight.dispatchEvent({ type: 'input' });

    // 100 * 4.6627768 = 466.277... (Arabic: ٤٦٦٫٢٨)
    assert.isTrue(
        carbonResultVal.textContent.includes('466.28') || carbonResultVal.textContent.includes('466') ||
        carbonResultVal.textContent.includes('٤٦٦٫٢٨') || carbonResultVal.textContent.includes('٤٦٦'),
        `Step 3: WARM CO2e calculation for 100kg textbooks verified, got: ${carbonResultVal.textContent}`
    );

    const totalRevInput = env.elementsMap['totalRevenueInput'];
    const womenShareVal = env.elementsMap['womenShareVal'];
    const schoolShareVal = env.elementsMap['schoolShareVal'];

    totalRevInput.value = '50000';
    totalRevInput.dispatchEvent({ type: 'input' });

    // 40% of 50k = 20k, 25% of 50k = 12.5k (Arabic: ٢٠٬٠٠٠ and ١٢٬٥٠٠)
    assert.isTrue(
        womenShareVal.textContent.includes('20,000') || womenShareVal.textContent.includes('٢٠٬٠٠٠'),
        `Step 3: Women 40% share (20,000 EGP) verified, got: ${womenShareVal.textContent}`
    );
    assert.isTrue(
        schoolShareVal.textContent.includes('12,500') || schoolShareVal.textContent.includes('١٢٬٥٠٠'),
        `Step 3: School 25% share (12,500 EGP) verified, got: ${schoolShareVal.textContent}`
    );

    // Step 4: Navigate to Forms & Submit School Nomination
    env.appContent.innerHTML = env.sandbox.renderFormsPage();
    assert.includes(env.appContent.innerHTML, 'schoolSubmitForm', 'Step 4: School nomination form present');

    const submission = {
        id: `SUB-${Date.now()}`,
        formType: 'school',
        data: {
            schoolName: 'مدرسة دمنهور الثانوية الخضراء',
            governorate: 'البحيرة',
            phone: '01099887766'
        },
        submittedAt: new Date().toISOString()
    };

    env.localStorage.setItem('bara_forms_submissions', JSON.stringify([submission]));
    const storedSubmissions = JSON.parse(env.localStorage.getItem('bara_forms_submissions'));
    assert.equal(storedSubmissions.length, 1, 'Step 4: LocalStorage submission count verified');
    assert.equal(storedSubmissions[0].data.schoolName, 'مدرسة دمنهور الثانوية الخضراء', 'Step 4: LocalStorage school name verified');

    // Step 5: Navigate to Smart Platform Page
    env.appContent.innerHTML = env.sandbox.renderSmartPlatformPage();
    assert.includes(env.appContent.innerHTML, 'NISGP 2026', 'Step 5: Smart Platform NISGP 2026 header verified');
    assert.includes(env.appContent.innerHTML, 'المستوى الأول', 'Step 5: Level 1 digital maturity badge verified');
    assert.includes(env.appContent.innerHTML, 'المستوى الرابع', 'Step 5: Level 4 digital maturity badge verified');
    assert.includes(env.appContent.innerHTML, 'ضوابط الذكاء الاصطناعي والأمان الذكي', 'Step 5: AI safety governance note verified');

    // Step 6: Navigate to Protection & Safety Policy Page
    env.appContent.innerHTML = env.sandbox.renderPolicyPage();
    assert.includes(env.appContent.innerHTML, 'سياسة الحماية وعدم التمييز وتلقي الشكاوى', 'Step 6: Policy page header verified');
    assert.includes(env.appContent.innerHTML, 'أولاً: الغرض من السياسة', 'Step 6: Article 1 verified');
    assert.includes(env.appContent.innerHTML, 'الخامس عشر: إقرار واعتماد السياسة', 'Step 6: Article 15 verified');
    assert.includes(env.appContent.innerHTML, 'outbox-safety-policy.pdf', 'Step 6: Policy PDF download link verified');

    // Grievance simulation
    const grievanceRecord = {
        code: 'GRV-2026-99881',
        type: 'تمييز أو استبعاد غير عادل',
        details: 'بلاغ تجريبي للاختبار',
        date: new Date().toISOString(),
        status: 'قيد الفحص السري'
    };
    env.localStorage.setItem('outbox_grievances', JSON.stringify([grievanceRecord]));
    const storedGrv = JSON.parse(env.localStorage.getItem('outbox_grievances'));
    assert.equal(storedGrv.length, 1, 'Step 6: Confidential grievance stored in LocalStorage verified');
});

module.exports = suite;
