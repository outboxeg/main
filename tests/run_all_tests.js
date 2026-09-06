/* ==========================================================================
   Master E2E Test Suite Runner (tests/run_all_tests.js)
   Bara El-Sandouq – Smart Green School E2E Test Suite
   ========================================================================== */

const tier1Suite = require('./tier1_feature_coverage.test.js');
const tier2Suite = require('./tier2_boundary_corner.test.js');
const tier3Suite = require('./tier3_cross_feature.test.js');
const tier4Suite = require('./tier4_real_world_workloads.test.js');
const tier5Suite = require('./tier5_mobile_app_apk.test.js');

async function runAllTests() {
    console.log(`\n==================================================================`);
    console.log(`  BARA EL-SANDOUQ – SMART GREEN SCHOOL E2E TEST SUITE RUNNER  `);
    console.log(`==================================================================\n`);

    const suites = [tier1Suite, tier2Suite, tier3Suite, tier4Suite, tier5Suite];
    const summary = [];
    let totalPassed = 0;
    let totalFailed = 0;
    let totalTests = 0;

    for (const suite of suites) {
        const res = await suite.run();
        summary.push(res);
        totalPassed += res.passed;
        totalFailed += res.failed;
        totalTests += res.total;
    }

    console.log(`\n==================================================================`);
    console.log(`                      FINAL MASTER TEST SUMMARY                   `);
    console.log(`==================================================================`);
    summary.forEach(res => {
        const statusIcon = res.failed === 0 ? '✅ PASS' : '❌ FAIL';
        console.log(`  ${statusIcon} | ${res.suiteName.padEnd(42)} | ${res.passed}/${res.total} Passed`);
    });
    console.log(`------------------------------------------------------------------`);
    console.log(`  TOTAL: ${totalPassed} Passed, ${totalFailed} Failed (${totalTests} Total Tests)`);
    console.log(`==================================================================\n`);

    if (totalFailed > 0) {
        console.error(`❌ Test suite finished with ${totalFailed} failure(s).`);
        process.exit(1);
    } else {
        console.log(`✅ ALL TEST SUITES PASSED SUCCESSFULLY!`);
        process.exit(0);
    }
}

runAllTests().catch(err => {
    console.error('Fatal error executing test runner:', err);
    process.exit(1);
});
