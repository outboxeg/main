/* ==========================================================================
   Page Component: Interactive Calculators (pages/calculators.js)
   Bara El-Sandouq – Smart Green School Project
   ========================================================================== */

function renderCalculatorsPage() {
    return `
        <section class="section" style="padding-top: 3rem; padding-bottom: 4rem;">
            <div class="container">
                <div class="section-header text-center" style="margin-bottom: 3rem;">
                    <div class="section-subtitle" style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--color-primary); background: rgba(31, 122, 90, 0.1); padding: 0.4rem 1rem; border-radius: var(--radius-full); font-weight: 700; font-size: 0.9rem; margin-bottom: 0.75rem;">
                        <i data-lucide="calculator" aria-hidden="true"></i> الأدوات التفاعلية المباشرة
                    </div>
                    <h1 class="section-title" style="font-size: clamp(2rem, 1.6rem + 2vw, 3rem); color: var(--color-primary-dark); margin-bottom: 1rem;">حاسبات الأثر البيئي والمالي</h1>
                    <p class="section-desc" style="max-width: 750px; margin: 0 auto; color: var(--color-text-secondary); font-size: 1.05rem; line-height: 1.7;">
                        أدوات تفاعلية فورية لحساب خفض الانبعاثات الكربونية المعتمدة عالمياً (WARM v16) واحتساب التوزيع العادل (40-25-10-25) لمتحصلات بيع الخام.
                    </p>
                </div>

                <!-- 1. Carbon Savings Calculator Card -->
                <div class="calculator-card glass-card spring-hover" id="carbonCalcCard" style="margin-bottom: 3rem; border-radius: var(--radius-lg); padding: 2rem; border: 1px solid var(--color-border); box-shadow: var(--shadow-default); background: var(--color-surface);">
                    <div class="calc-header" style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem; border-bottom: 1px solid var(--color-border-subtle); padding-bottom: 1.25rem;">
                        <div class="calc-icon" style="background: rgba(31, 122, 90, 0.12); color: var(--color-primary); padding: 0.85rem; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center;">
                            <i data-lucide="leaf" style="width: 28px; height: 28px;"></i>
                        </div>
                        <div>
                            <h2 style="font-size: 1.5rem; margin: 0; color: var(--color-primary-dark);">1. حاسبة الأثر الكربوني للورق (WARM v16)</h2>
                            <p style="color: var(--color-text-secondary); font-size: 0.95rem; margin-top: 0.25rem; margin-bottom: 0;">
                                تحسب تقدير الانبعاثات الكربونية المتجنبة (CO₂e) والتكافؤات البيئية عند إعادة تدوير الورق والكرتون والكتب بدلاً من التخلص منها في المدفن.
                            </p>
                        </div>
                    </div>

                    <div class="calc-form-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                        <div class="calc-inputs" style="display: flex; flex-direction: column; gap: 1.25rem;">
                            <div class="form-group">
                                <label class="form-label" for="calcMode" style="font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.5rem; display: block;">طريقة الحساب:</label>
                                <select class="form-select" id="calcMode" style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); background: var(--color-surface); font-family: inherit; font-size: 1rem; color: var(--color-text-dark);">
                                    <option value="weight">إدخال الوزن المباشر (بالكيلوجرام)</option>
                                    <option value="students">إدخال عدد الطلاب (افتراضي 40 كجم/طالب سنوياً)</option>
                                </select>
                            </div>

                            <div class="form-group" id="weightInputGroup" style="display: flex; flex-direction: column;">
                                <label class="form-label" for="paperWeight" style="font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.5rem;">وزن الخامة (كجم):</label>
                                <input type="number" class="form-input" id="paperWeight" value="1000" min="0" step="any" style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit; font-size: 1rem; color: var(--color-text-dark);">
                            </div>

                            <div class="form-group" id="studentsInputGroup" style="display: none; flex-direction: column;">
                                <label class="form-label" for="studentCount" style="font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.5rem;">عدد الطلاب المشاركين:</label>
                                <input type="number" class="form-input" id="studentCount" value="170" min="0" step="1" style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit; font-size: 1rem; color: var(--color-text-dark);">
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="materialType" style="font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.5rem; display: block;">نوع المادة الورقية:</label>
                                <select class="form-select" id="materialType" style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); background: var(--color-surface); font-family: inherit; font-size: 1rem; color: var(--color-text-dark);">
                                    <option value="mixed">ورق مختلط (3.99 كجم CO₂e / كجم)</option>
                                    <option value="notebooks">كراسات ودفاتر كتابة (4.40 كجم CO₂e / كجم)</option>
                                    <option value="textbooks" selected>كتب مدرسية مستعملة (4.66 كجم CO₂e / كجم)</option>
                                    <option value="cardboard">كرتون مموج (3.66 كجم CO₂e / كجم)</option>
                                </select>
                            </div>
                        </div>

                        <div class="calc-result-box" style="background: linear-gradient(135deg, var(--color-primary-dark) 0%, #134E4A 100%); padding: 1.75rem; border-radius: var(--radius-lg); color: #FFFFFF; display: flex; flex-direction: column; justify-content: space-between; text-align: center; box-shadow: var(--shadow-default);">
                            <div>
                                <div style="display: inline-flex; padding: 0.75rem; background: rgba(255, 255, 255, 0.15); border-radius: 50%; margin-bottom: 0.75rem;">
                                    <i data-lucide="cloud-off" style="width: 36px; height: 36px; color: #A7F3D0;"></i>
                                </div>
                                <div style="font-size: 0.95rem; color: #D1E8E2; margin-bottom: 0.25rem;">الانبعاثات المتجنبة تقديرياً</div>
                                <div class="result-big-val" id="carbonResultVal" style="font-size: 2.75rem; font-weight: 800; color: #FFFFFF; font-family: 'Noto Naskh Arabic', serif; line-height: 1.2;">4,662.78</div>
                                <div style="font-size: 1.15rem; font-weight: 700; color: #A7F3D0; margin-top: 0.25rem;">كجم CO₂e متجنب</div>
                            </div>

                            <!-- Environmental Equivalencies -->
                            <div class="equivalencies-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid rgba(255, 255, 255, 0.2);">
                                <div style="background: rgba(255, 255, 255, 0.1); padding: 0.75rem 0.5rem; border-radius: var(--radius-md);">
                                    <i data-lucide="trees" style="width: 20px; height: 20px; color: #A7F3D0;"></i>
                                    <div style="font-size: 0.75rem; color: #D1E8E2; margin-top: 0.25rem;">أشجار محمية</div>
                                    <div id="treesSavedVal" style="font-size: 1.1rem; font-weight: 700; color: #FFFFFF;">17.0</div>
                                </div>
                                <div style="background: rgba(255, 255, 255, 0.1); padding: 0.75rem 0.5rem; border-radius: var(--radius-md);">
                                    <i data-lucide="droplets" style="width: 20px; height: 20px; color: #A7F3D0;"></i>
                                    <div style="font-size: 0.75rem; color: #D1E8E2; margin-top: 0.25rem;">مياه موفرة</div>
                                    <div id="waterSavedVal" style="font-size: 1.1rem; font-weight: 700; color: #FFFFFF;">26,500 L</div>
                                </div>
                                <div style="background: rgba(255, 255, 255, 0.1); padding: 0.75rem 0.5rem; border-radius: var(--radius-md);">
                                    <i data-lucide="trash-2" style="width: 20px; height: 20px; color: #A7F3D0;"></i>
                                    <div style="font-size: 0.75rem; color: #D1E8E2; margin-top: 0.25rem;">مدفن موفر</div>
                                    <div id="landfillSavedVal" style="font-size: 1.1rem; font-weight: 700; color: #FFFFFF;">3.3 m³</div>
                                </div>
                            </div>

                            <p style="font-size: 0.75rem; color: #A7F3D0; margin-top: 1rem; margin-bottom: 0; background: rgba(0,0,0,0.25); padding: 0.5rem; border-radius: var(--radius-sm); text-align: center;">
                                <i data-lucide="info" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle;"></i> نتائج تعليمية وتقديرية تعتمد معاملات نموذج EPA WARM v16 المعتمدة عالمياً.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- 2. Revenue Distribution Calculator Card -->
                <div class="calculator-card glass-card spring-hover" id="revenueCalcCard" style="border-radius: var(--radius-lg); padding: 2rem; border: 1px solid var(--color-border); box-shadow: var(--shadow-default); background: var(--color-surface);">
                    <div class="calc-header" style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem; border-bottom: 1px solid var(--color-border-subtle); padding-bottom: 1.25rem;">
                        <div class="calc-icon" style="background: rgba(28, 154, 139, 0.12); color: var(--color-secondary); padding: 0.85rem; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center;">
                            <i data-lucide="pie-chart" style="width: 28px; height: 28px;"></i>
                        </div>
                        <div>
                            <h2 style="font-size: 1.5rem; margin: 0; color: var(--color-primary-dark);">2. حاسبة توزيع متحصلات بيع الخام (40-25-10-25)</h2>
                            <p style="color: var(--color-text-secondary); font-size: 0.95rem; margin-top: 0.25rem; margin-bottom: 0;">
                                أدخل إجمالي المتحصلات المالية من بيع الخام لرؤية التوزيع الشفاف للنسب وحساب الفائض التشغيلي المتبقي بعد النقل.
                            </p>
                        </div>
                    </div>

                    <div class="calc-form-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                        <div class="calc-inputs" style="display: flex; flex-direction: column; gap: 1.25rem;">
                            <div class="form-group">
                                <label class="form-label" for="totalRevenueInput" style="font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.5rem; display: block;">إجمالي المتحصلات المالية (جنيه مصري):</label>
                                <input type="number" class="form-input" id="totalRevenueInput" value="100000" min="0" step="1000" style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit; font-size: 1rem; color: var(--color-text-dark);">
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="logisticsCostInput" style="font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.5rem; display: block;">تكاليف النقل والفرز والتحميل التقديرية (ج.م):</label>
                                <input type="number" class="form-input" id="logisticsCostInput" value="10200" min="0" step="500" style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit; font-size: 1rem; color: var(--color-text-dark);">
                            </div>

                            <div style="background: var(--color-muted); padding: 1.25rem; border-radius: var(--radius-md); border-right: 4px solid var(--color-secondary);">
                                <h4 style="margin-top: 0; margin-bottom: 0.5rem; color: var(--color-primary-dark); font-size: 1rem;">قواعد التوزيع الشفاف (40-25-10-25):</h4>
                                <ul style="margin: 0; padding-right: 1.25rem; font-size: 0.85rem; color: var(--color-text-secondary); line-height: 1.6;">
                                    <li><strong>40% السيدات والفتيات:</strong> تمكين مستمر وتدريب الحرفيات ومكافآت الإنتاج.</li>
                                    <li><strong>25% صندوق دعم المدارس:</strong> شراء الخامات والأدوات والأنشطة البيئية للطلاب.</li>
                                    <li><strong>10% الجمعية:</strong> مصاريف إدارية وتطوير جمعية الإسراء لتنمية المجتمع.</li>
                                    <li><strong>25% النقل والبحوث والتطوير:</strong> النقل واللوجستيات والفائض لإعادة الاستثمار.</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h4 style="margin-top: 0; margin-bottom: 1.25rem; color: var(--color-primary-dark);">تفاصيل التوزيع المالي المحسوب:</h4>
                            
                            <div class="revenue-bars" style="display: flex; flex-direction: column; gap: 1.25rem;">
                                <div class="revenue-bar-item">
                                    <div class="bar-info" style="display: flex; justify-content: space-between; margin-bottom: 0.35rem; font-size: 0.95rem;">
                                        <span>السيدات والفتيات (40%)</span>
                                        <span id="womenShareVal" style="color: #EC4899; font-weight: 800;">40,000 ج.م</span>
                                    </div>
                                    <div class="bar-track" style="background: var(--color-muted); height: 12px; border-radius: 6px; overflow: hidden;">
                                        <div class="bar-fill" style="width: 40%; background: #EC4899; height: 100%; transition: width 300ms ease;"></div>
                                    </div>
                                </div>

                                <div class="revenue-bar-item">
                                    <div class="bar-info" style="display: flex; justify-content: space-between; margin-bottom: 0.35rem; font-size: 0.95rem;">
                                        <span>المدرسة والعاملون والمشاركة (25%)</span>
                                        <span id="schoolShareVal" style="color: var(--color-primary); font-weight: 800;">25,000 ج.م</span>
                                    </div>
                                    <div class="bar-track" style="background: var(--color-muted); height: 12px; border-radius: 6px; overflow: hidden;">
                                        <div class="bar-fill" style="width: 25%; background: var(--color-primary); height: 100%; transition: width 300ms ease;"></div>
                                    </div>
                                </div>

                                <div class="revenue-bar-item">
                                    <div class="bar-info" style="display: flex; justify-content: space-between; margin-bottom: 0.35rem; font-size: 0.95rem;">
                                        <span>الجمعيات المشاركة (10%)</span>
                                        <span id="assocShareVal" style="color: var(--color-secondary); font-weight: 800;">10,000 ج.م</span>
                                    </div>
                                    <div class="bar-track" style="background: var(--color-muted); height: 12px; border-radius: 6px; overflow: hidden;">
                                        <div class="bar-fill" style="width: 10%; background: var(--color-secondary); height: 100%; transition: width 300ms ease;"></div>
                                    </div>
                                </div>

                                <div class="revenue-bar-item">
                                    <div class="bar-info" style="display: flex; justify-content: space-between; margin-bottom: 0.35rem; font-size: 0.95rem;">
                                        <span>الفائض التشغيلي المتبقي بعد خصم النقل</span>
                                        <span id="surplusShareVal" style="color: var(--color-accent); font-weight: 800;">14,800 ج.م</span>
                                    </div>
                                    <div class="bar-track" style="background: var(--color-muted); height: 12px; border-radius: 6px; overflow: hidden;">
                                        <div class="bar-fill" id="surplusBarFill" style="width: 14.8%; background: var(--color-accent); height: 100%; transition: width 300ms ease;"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    `;
}

/* Event Handler Bindings for Calculators */
function initCalculatorsLogic() {
    // Carbon Calc Elements
    const calcMode = document.getElementById('calcMode');
    const weightGroup = document.getElementById('weightInputGroup');
    const studentsGroup = document.getElementById('studentsInputGroup');
    const paperWeight = document.getElementById('paperWeight');
    const studentCount = document.getElementById('studentCount');
    const materialType = document.getElementById('materialType');
    const carbonResultVal = document.getElementById('carbonResultVal');

    const treesSavedVal = document.getElementById('treesSavedVal');
    const waterSavedVal = document.getElementById('waterSavedVal');
    const landfillSavedVal = document.getElementById('landfillSavedVal');

    const factors = {
        mixed: 3.9903669,
        notebooks: 4.3982221,
        textbooks: 4.6627768,
        cardboard: 3.6596735
    };

    function updateCarbon() {
        if (!carbonResultVal) return;
        let weight = parseFloat(paperWeight ? paperWeight.value : 0) || 0;

        if (calcMode && calcMode.value === 'students') {
            const students = parseFloat(studentCount ? studentCount.value : 0) || 0;
            weight = students * 40; // Default 40 kg per student per year
        }

        const mat = materialType ? materialType.value : 'textbooks';
        const factor = factors[mat] !== undefined ? factors[mat] : 4.6627768;
        const totalCO2 = weight * factor;

        // Format result matching test requirements
        carbonResultVal.textContent = totalCO2.toLocaleString('en-US', { maximumFractionDigits: 2 });

        // Calculate Equivalencies
        const trees = weight * 0.017;
        const water = weight * 26.5;
        const landfill = weight * 0.0033;

        if (treesSavedVal) treesSavedVal.textContent = trees.toLocaleString('en-US', { maximumFractionDigits: 1 });
        if (waterSavedVal) waterSavedVal.textContent = water.toLocaleString('en-US', { maximumFractionDigits: 0 }) + ' L';
        if (landfillSavedVal) landfillSavedVal.textContent = landfill.toLocaleString('en-US', { maximumFractionDigits: 2 }) + ' m³';
    }

    if (calcMode) {
        calcMode.addEventListener('change', () => {
            if (calcMode.value === 'students') {
                if (weightGroup) weightGroup.style.display = 'none';
                if (studentsGroup) studentsGroup.style.display = 'flex';
            } else {
                if (weightGroup) weightGroup.style.display = 'flex';
                if (studentsGroup) studentsGroup.style.display = 'none';
            }
            updateCarbon();
        });
    }

    if (paperWeight) paperWeight.addEventListener('input', updateCarbon);
    if (studentCount) studentCount.addEventListener('input', updateCarbon);
    if (materialType) materialType.addEventListener('change', updateCarbon);
    updateCarbon();

    // Revenue Calc Elements
    const totalRevInput = document.getElementById('totalRevenueInput');
    const logisticsInput = document.getElementById('logisticsCostInput');
    const womenShareVal = document.getElementById('womenShareVal');
    const schoolShareVal = document.getElementById('schoolShareVal');
    const assocShareVal = document.getElementById('assocShareVal');
    const surplusShareVal = document.getElementById('surplusShareVal');
    const surplusBarFill = document.getElementById('surplusBarFill');

    function updateRevenue() {
        if (!totalRevInput) return;
        const rev = parseFloat(totalRevInput.value) || 0;
        const logCost = parseFloat(logisticsInput ? logisticsInput.value : 0) || 0;

        const women = rev * 0.40;
        const school = rev * 0.25;
        const assoc = rev * 0.10;
        const remaining25 = rev * 0.25;
        const surplus = Math.max(0, remaining25 - logCost);

        if (womenShareVal) womenShareVal.textContent = women.toLocaleString('en-US') + ' ج.م';
        if (schoolShareVal) schoolShareVal.textContent = school.toLocaleString('en-US') + ' ج.م';
        if (assocShareVal) assocShareVal.textContent = assoc.toLocaleString('en-US') + ' ج.م';
        if (surplusShareVal) surplusShareVal.textContent = surplus.toLocaleString('en-US') + ' ج.م';

        const surplusPct = rev > 0 ? ((surplus / rev) * 100) : 0;
        if (surplusBarFill) surplusBarFill.style.width = `${Math.min(100, Math.max(0, surplusPct))}%`;
    }

    if (totalRevInput) totalRevInput.addEventListener('input', updateRevenue);
    if (logisticsInput) logisticsInput.addEventListener('input', updateRevenue);
    updateRevenue();
}
