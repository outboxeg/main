/* ==========================================================================
   Bara El-Sandouq Mobile Calculators Engine (calculators.js)
   EPA WARM v16 Scientific Carbon Equations & 40/25/10/25 Revenue Split
   ========================================================================== */

// 1. Emission Factors from EPA WARM v16 (MTCO2E / Ton) -> Converted to kg CO2e / kg
const WARM_FACTORS = {
  textbooks: 4.6627768,      // كتب دراسية
  corrugated: 3.1257444,     // كرتون مضلع
  mixed_paper: 3.5413158,    // ورق مختلط
  magazines: 3.0898516,      // مجلات وورق ملون
  office_paper: 2.8624108    // ورق مكاتب أبيض
};

// 2. WARM v16 Calculator
function calculateCarbonImpact() {
  const mode = document.getElementById('calcInputMode')?.value || 'weight';
  const material = document.getElementById('materialType')?.value || 'textbooks';
  const factor = WARM_FACTORS[material] || WARM_FACTORS.textbooks;

  let weightKg = 0;
  if (mode === 'weight') {
    weightKg = parseFloat(document.getElementById('paperWeightInput')?.value) || 0;
  } else {
    const students = parseFloat(document.getElementById('studentsCountInput')?.value) || 0;
    // Standard factor: 40 kg per student per academic season
    weightKg = students * 40;
    const estDisplay = document.getElementById('estimatedWeightDisplay');
    if (estDisplay) {
      estDisplay.textContent = `(الوزن المقدر: ${weightKg.toLocaleString('ar-EG')} كجم)`;
    }
  }

  // Result in kg CO2e saved
  const co2Kg = weightKg * factor;
  const treesEquiv = weightKg * 0.017; // 17 trees per ton (0.017 per kg)
  const energyKwh = weightKg * 4.1;    // 4.1 kWh per kg paper recycled
  const waterLiters = weightKg * 26;   // 26 liters per kg

  const co2ResultEl = document.getElementById('co2ResultVal');
  const treesResultEl = document.getElementById('treesResultVal');
  const energyResultEl = document.getElementById('energyResultVal');
  const waterResultEl = document.getElementById('waterResultVal');

  if (co2ResultEl) co2ResultEl.textContent = `${co2Kg.toLocaleString('ar-EG', { maximumFractionDigits: 1 })} كجم`;
  if (treesResultEl) treesResultEl.textContent = `${treesEquiv.toLocaleString('ar-EG', { maximumFractionDigits: 1 })} شجرة`;
  if (energyResultEl) energyResultEl.textContent = `${energyKwh.toLocaleString('ar-EG', { maximumFractionDigits: 0 })} ك.و.س`;
  if (waterResultEl) waterResultEl.textContent = `${waterLiters.toLocaleString('ar-EG', { maximumFractionDigits: 0 })} لتر`;
}

// 3. Revenue Distribution Calculator (40 / 25 / 10 / 25)
function calculateRevenueSplit() {
  const totalRev = parseFloat(document.getElementById('totalRevenueInput')?.value) || 0;
  const logistics = parseFloat(document.getElementById('logisticsCostInput')?.value) || 0;

  const women40 = totalRev * 0.40;
  const school25 = totalRev * 0.25;
  const assoc10 = totalRev * 0.10;
  const grossSurplus25 = totalRev * 0.25;
  const netSurplus = Math.max(0, grossSurplus25 - logistics);

  const womenEl = document.getElementById('womenShareDisplay');
  const schoolEl = document.getElementById('schoolShareDisplay');
  const assocEl = document.getElementById('assocShareDisplay');
  const surplusEl = document.getElementById('surplusShareDisplay');

  if (womenEl) womenEl.textContent = `${women40.toLocaleString('ar-EG')} ج.م`;
  if (schoolEl) schoolEl.textContent = `${school25.toLocaleString('ar-EG')} ج.م`;
  if (assocEl) assocEl.textContent = `${assoc10.toLocaleString('ar-EG')} ج.م`;
  if (surplusEl) surplusEl.textContent = `${netSurplus.toLocaleString('ar-EG')} ج.م`;
}

// 4. Initialize Calculators Event Listeners
function initMobileCalculators() {
  const modeSelect = document.getElementById('calcInputMode');
  const weightGroup = document.getElementById('weightInputGroup');
  const studentsGroup = document.getElementById('studentsInputGroup');

  if (modeSelect) {
    modeSelect.addEventListener('change', () => {
      if (modeSelect.value === 'weight') {
        if (weightGroup) weightGroup.style.display = 'block';
        if (studentsGroup) studentsGroup.style.display = 'none';
      } else {
        if (weightGroup) weightGroup.style.display = 'none';
        if (studentsGroup) studentsGroup.style.display = 'block';
      }
      calculateCarbonImpact();
    });
  }

  const carbonInputs = ['paperWeightInput', 'studentsCountInput', 'materialType'];
  carbonInputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', calculateCarbonImpact);
      el.addEventListener('change', calculateCarbonImpact);
    }
  });

  const revInputs = ['totalRevenueInput', 'logisticsCostInput'];
  revInputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', calculateRevenueSplit);
      el.addEventListener('change', calculateRevenueSplit);
    }
  });

  // Run initial calculation
  calculateCarbonImpact();
  calculateRevenueSplit();
}
