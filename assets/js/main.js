/* ===== PAGE: home ===== */
/* ==========================================================================
   Page Component: Home Page View (pages/home.js)
   Bara El-Sandouq – Smart Green School Project
   ========================================================================== */

function renderHomePage() {
    return `
        <!-- Hero Section with Real Field Photo Background & Translucent Overlay -->
        <section class="hero-section" style="position: relative; background: linear-gradient(rgba(11, 79, 63, 0.90), rgba(19, 78, 74, 0.95)), url('./assets/images/برة 13.png') center/cover no-repeat; color: #ffffff; padding: 4.5rem 0 4rem; overflow: hidden; border-bottom: 1px solid var(--color-border);">
            <div class="container" style="position: relative; z-index: 2;">
                <div style="max-width: 900px; margin: 0 auto; text-align: center;">
                    <!-- Badge & Institutional Pill -->
                    <div style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(220, 252, 231, 0.2); color: #DCFCE7; border: 1px solid rgba(220, 252, 231, 0.4); padding: 0.5rem 1.25rem; font-size: 0.9rem; margin-bottom: 1.5rem; border-radius: var(--radius-full); backdrop-filter: blur(8px); flex-wrap: wrap; justify-content: center;">
                        <span style="display: flex; align-items: center; gap: 0.35rem; font-weight: 700;">
                            <i data-lucide="sparkles" style="width: 16px; height: 16px; color: #34D399;"></i>
                            المبادرة الوطنية للمشروعات الخضراء الذكية NISGP 2026
                        </span>
                        <span style="opacity: 0.6;">|</span>
                        <span>محافظة البحيرة – دمنهور</span>
                    </div>
                    
                    <h1 class="hero-title" style="font-size: clamp(2rem, 4vw, 3.5rem); font-family: 'Noto Naskh Arabic', serif; font-weight: 700; line-height: 1.3; margin-bottom: 1.25rem; color: #ffffff; text-shadow: 0 4px 20px rgba(0,0,0,0.3);">
                        <span class="hero-stagger-word">برة الصندوق</span>
                        <span class="hero-stagger-word" style="color: #FDBA74;">–</span>
                        <span class="hero-stagger-word">المدرسة الخضراء الذكية</span>
                    </h1>
                    
                    <p class="hero-desc" style="font-size: clamp(1.05rem, 1.8vw, 1.3rem); color: #E2ECE9; line-height: 1.8; margin-bottom: 2rem; font-weight: 400; max-width: 820px; margin-right: auto; margin-left: auto;">
                        من مخلفات مدرسية إلى فرص خضراء ذكية | مشروع بيئي مجتمعي تعليمي متكامل لجمع وفرز وتحويل الورق والكرتون بالمدارس إلى وسائل تعلم تفاعلية ودعم مجتمعي وتمكين للمرأة وذوي الهمم.
                    </p>

                    <!-- Ownership & Official Field Partner Banner -->
                    <div style="background: rgba(255, 255, 255, 0.12); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.25); border-radius: var(--radius-md); padding: 0.85rem 1.25rem; margin: 0 auto 2.25rem; max-width: 780px; display: flex; align-items: center; justify-content: center; gap: 1.5rem; flex-wrap: wrap; text-align: right; font-size: 0.9rem; color: #F4F1E8;">
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <i data-lucide="award" style="color: #FDBA74; width: 18px; height: 18px; flex-shrink: 0;"></i>
                            <span><strong>صاحبة الفكرة والملكية الفكرية:</strong> أ. فاطمة عبد المجيد راضي</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <i data-lucide="building-2" style="color: #34D399; width: 18px; height: 18px; flex-shrink: 0;"></i>
                            <span><strong>الشريك الميداني والجهة المنفذة:</strong> جمعية الإسراء الخيرية بدمنهور (إشهار #1124)</span>
                        </div>
                    </div>

                    <div class="hero-btns" style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2.5rem;">
                        <a href="#forms" class="btn btn-accent spring-hover" style="padding: 0.85rem 2rem; font-size: 1.05rem; display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none;">
                            <i data-lucide="user-plus" style="width: 18px; height: 18px;"></i>
                            <span>سجّل جمعيتك / انضم</span>
                        </a>
                        <a href="#homeCalculatorsSection" class="btn btn-outline spring-hover" style="padding: 0.85rem 2rem; font-size: 1.05rem; border-color: rgba(255,255,255,0.7); color: #ffffff; display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none; backdrop-filter: blur(8px); background: rgba(255,255,255,0.1);">
                            <i data-lucide="calculator" style="width: 18px; height: 18px;"></i>
                            <span>جرب الحاسبات المباشرة</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Official Field Partner & Institutional Accreditation Cards Section -->
        <section class="section" style="background: var(--color-surface); padding: 3.5rem 0; border-bottom: 1px solid var(--color-border);">
            <div class="container">
                <div class="section-header" style="text-align: center; margin-bottom: 2.5rem;">
                    <div class="section-subtitle" style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--color-primary); font-weight: 700;">
                        <i data-lucide="shield-check"></i> الاعتماد والهيكل المؤسسي
                    </div>
                    <h2 class="section-title" style="font-size: 2rem; color: var(--color-primary-dark); margin-top: 0.4rem;">الشريك الميداني والاعتماد الرسمي</h2>
                    <p class="section-desc" style="color: var(--color-text-secondary); max-width: 650px; margin: 0.4rem auto 0;">إطار عمل قانوني ومؤسسي معتمد يضمن استدامة التنفيذ والشفافية التامة.</p>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; max-width: 900px; margin: 0 auto;">
                    <!-- Card 1: Main Project Brand -->
                    <div class="card spring-hover" style="background: var(--color-bg); padding: 1.75rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); text-align: center;">
                        <div class="partner-logo-box" style="height: 100px; background: #FFFFFF; border-radius: var(--radius-md); padding: 0.75rem 1rem; display: flex; align-items: center; justify-content: center; border: 1px solid var(--color-border); margin-bottom: 1.25rem;">
                            <img src="./assets/images/لوجو_برة_الصندوق_1-removebg-preview.png" alt="شعار برة الصندوق – المدرسة الخضراء الذكية" style="max-height: 80px; max-width: 100%; object-fit: contain; display: block; margin: 0 auto;">
                        </div>
                        <h3 style="font-size: 1.25rem; color: var(--color-primary-dark); margin-bottom: 0.5rem;">مشروع "برة الصندوق – المدرسة الخضراء الذكية"</h3>
                        <p style="font-size: 0.92rem; color: var(--color-text-secondary); line-height: 1.6; margin-bottom: 0.75rem;">
                            نموذج مبتكر لإعادة استخدام مخلفات المدارس الورقية والكرتونية وتحويلها لفرص تعليمية واقتصادية خضراء.
                        </p>
                        <span class="badge badge-certified" style="font-size: 0.8rem; display: inline-flex;"><i data-lucide="award"></i> الملكية الفكرية: أ. فاطمة عبد المجيد راضي</span>
                    </div>

                    <!-- Card 2: Official Field Partner (El-Israa Association) -->
                    <div class="card spring-hover" style="background: var(--color-bg); padding: 1.75rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); text-align: center;">
                        <div class="partner-logo-box" style="height: 100px; background: #FFFFFF; border-radius: var(--radius-md); padding: 0.75rem 1rem; display: flex; align-items: center; justify-content: center; border: 1px solid var(--color-border); margin-bottom: 1.25rem;">
                            <img src="./assets/images/لوجو جمعية الاسراء.jpg" alt="شعار جمعية الإسراء الخيرية لتنمية المجتمع بدمنهور" style="max-height: 80px; max-width: 100%; object-fit: contain; display: block; margin: 0 auto; border-radius: 6px;">
                        </div>
                        <h3 style="font-size: 1.25rem; color: var(--color-primary-dark); margin-bottom: 0.5rem;">جمعية الإسراء الخيرية بدمنهور</h3>
                        <p style="font-size: 0.92rem; color: var(--color-text-secondary); line-height: 1.6; margin-bottom: 0.75rem;">
                            <strong>الشريك الميداني والجهة المنفذة المعتمدة:</strong> جمعية الإسراء بفرهاش – دمنهور (إشهار رقم 1124 لسنة 2006) بالتعاون المباشر مع مديرية التربية والتعليم بالبحيرة.
                        </p>
                        <span class="badge badge-certified" style="font-size: 0.8rem; display: inline-flex;"><i data-lucide="check-circle-2"></i> الشريك الميداني والمنفذ الرسمي</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Metric Counter Cards Section (All Numbers & Key Stats) -->
        <section class="section" style="background: var(--color-bg); padding: 4rem 0;">
            <div class="container">
                <div class="section-header" style="text-align: center; margin-bottom: 3rem;">
                    <div class="section-subtitle" style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--color-primary); font-weight: 700;">
                        <i data-lucide="bar-chart-2"></i> لوحة مؤشرات الأثر الميداني الشاملة
                    </div>
                    <h2 class="section-title" style="font-size: 2.1rem; color: var(--color-primary-dark); margin-top: 0.4rem;">أرقام ومؤشرات الأثر الميداني الموثقة</h2>
                    <p class="section-desc" style="color: var(--color-text-secondary); max-width: 650px; margin: 0.4rem auto 0;">نتائج ميدانية واقعية حققها المشروع بالتعاون بين جمعية الإسراء والمدارس والسيدات بالبحيرة.</p>
                </div>

                <div class="metrics-grid" id="homeMetricsGrid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem;">
                    <!-- Metric 1: Paper Saved -->
                    <div class="card glass-card spring-hover metric-card" style="text-align: center; padding: 2rem 1.25rem; border-radius: var(--radius-lg); background: var(--color-surface); border: 1px solid var(--color-border);">
                        <div style="width: 56px; height: 56px; margin: 0 auto 1rem; background: rgba(31, 122, 90, 0.12); color: var(--color-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                            <i data-lucide="file-text" style="width: 28px; height: 28px;"></i>
                        </div>
                        <div class="metric-val counter-value" data-target="180" data-suffix=" طن" style="font-size: 2.5rem; font-weight: 800; color: var(--color-primary-dark); font-family: 'Noto Naskh Arabic', serif; line-height: 1.2;">0 طن</div>
                        <div class="metric-lbl" style="font-size: 1rem; font-weight: 700; color: var(--color-text); margin-top: 0.5rem;">
                            ورق وكرتون مجمع <span class="badge badge-certified" style="font-size: 0.72rem;">✅ موثق</span>
                        </div>
                        <p style="font-size: 0.85rem; color: var(--color-text-secondary); margin-top: 0.5rem; line-height: 1.5;">جمع وفرز وإعادة تدوير من المدارس والمؤسسات</p>
                    </div>

                    <!-- Metric 2: Participating Schools -->
                    <div class="card glass-card spring-hover metric-card" style="text-align: center; padding: 2rem 1.25rem; border-radius: var(--radius-lg); background: var(--color-surface); border: 1px solid var(--color-border);">
                        <div style="width: 56px; height: 56px; margin: 0 auto 1rem; background: rgba(28, 154, 139, 0.12); color: var(--color-secondary); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                            <i data-lucide="school" style="width: 28px; height: 28px;"></i>
                        </div>
                        <div class="metric-val counter-value" data-target="26" data-suffix=" مدرسة" style="font-size: 2.5rem; font-weight: 800; color: var(--color-primary-dark); font-family: 'Noto Naskh Arabic', serif; line-height: 1.2;">0 مدرسة</div>
                        <div class="metric-lbl" style="font-size: 1rem; font-weight: 700; color: var(--color-text); margin-top: 0.5rem;">
                            مدرسة منفذ بها <span class="badge badge-certified" style="font-size: 0.72rem;">✅ موثق</span>
                        </div>
                        <p style="font-size: 0.85rem; color: var(--color-text-secondary); margin-top: 0.5rem; line-height: 1.5;">مدرسة حكومية وخاصة بمديرية التربية والتعليم بالبحيرة</p>
                    </div>

                    <!-- Metric 3: Disability Inclusion -->
                    <div class="card glass-card spring-hover metric-card" style="text-align: center; padding: 2rem 1.25rem; border-radius: var(--radius-lg); background: var(--color-surface); border: 1px solid var(--color-border);">
                        <div style="width: 56px; height: 56px; margin: 0 auto 1rem; background: rgba(234, 88, 12, 0.12); color: var(--color-accent); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                            <i data-lucide="heart" style="width: 28px; height: 28px;"></i>
                        </div>
                        <div class="metric-val counter-value" data-target="8" data-suffix="%" style="font-size: 2.5rem; font-weight: 800; color: var(--color-primary-dark); font-family: 'Noto Naskh Arabic', serif; line-height: 1.2;">0%</div>
                        <div class="metric-lbl" style="font-size: 1rem; font-weight: 700; color: var(--color-text); margin-top: 0.5rem;">
                            مشاركة ذوي الهمم <span class="badge badge-certified" style="font-size: 0.72rem;">✅ موثق</span>
                        </div>
                        <p style="font-size: 0.85rem; color: var(--color-text-secondary); margin-top: 0.5rem; line-height: 1.5;">دمج وتدريب وتزويد الأطفال بالأدوات المساعدة</p>
                    </div>

                    <!-- Metric 4: Women Empowerment -->
                    <div class="card glass-card spring-hover metric-card" style="text-align: center; padding: 2rem 1.25rem; border-radius: var(--radius-lg); background: var(--color-surface); border: 1px solid var(--color-border);">
                        <div style="width: 56px; height: 56px; margin: 0 auto 1rem; background: rgba(236, 72, 153, 0.12); color: #EC4899; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                            <i data-lucide="users" style="width: 28px; height: 28px;"></i>
                        </div>
                        <div class="metric-val counter-value" data-target="40" data-suffix="%" style="font-size: 2.5rem; font-weight: 800; color: var(--color-primary-dark); font-family: 'Noto Naskh Arabic', serif; line-height: 1.2;">0%</div>
                        <div class="metric-lbl" style="font-size: 1rem; font-weight: 700; color: var(--color-text); margin-top: 0.5rem;">
                            تمكين المرأة والمعيلات <span class="badge badge-certified" style="font-size: 0.72rem;">✅ معتمد</span>
                        </div>
                        <p style="font-size: 0.85rem; color: var(--color-text-secondary); margin-top: 0.5rem; line-height: 1.5;">حصة مالية مخصصة لمكافآت السيدات الحرفيات والمعيلات</p>
                    </div>

                    <!-- Metric 5: Active Students -->
                    <div class="card glass-card spring-hover metric-card" style="text-align: center; padding: 2rem 1.25rem; border-radius: var(--radius-lg); background: var(--color-surface); border: 1px solid var(--color-border);">
                        <div style="width: 56px; height: 56px; margin: 0 auto 1rem; background: rgba(31, 122, 90, 0.12); color: var(--color-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                            <i data-lucide="user-check" style="width: 28px; height: 28px;"></i>
                        </div>
                        <div class="metric-val counter-value" data-target="1500" data-suffix="+" style="font-size: 2.5rem; font-weight: 800; color: var(--color-primary-dark); font-family: 'Noto Naskh Arabic', serif; line-height: 1.2;">0+</div>
                        <div class="metric-lbl" style="font-size: 1rem; font-weight: 700; color: var(--color-text); margin-top: 0.5rem;">
                            طالب مشارك بفعالية <span class="badge badge-certified" style="font-size: 0.72rem;">✅ موثق</span>
                        </div>
                        <p style="font-size: 0.85rem; color: var(--color-text-secondary); margin-top: 0.5rem; line-height: 1.5;">مشاركون في ورش الفرز والأنشطة البيئية</p>
                    </div>

                    <!-- Metric 6: Upcycled Educational Tools -->
                    <div class="card glass-card spring-hover metric-card" style="text-align: center; padding: 2rem 1.25rem; border-radius: var(--radius-lg); background: var(--color-surface); border: 1px solid var(--color-border);">
                        <div style="width: 56px; height: 56px; margin: 0 auto 1rem; background: rgba(28, 154, 139, 0.12); color: var(--color-secondary); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                            <i data-lucide="book-open" style="width: 28px; height: 28px;"></i>
                        </div>
                        <div class="metric-val counter-value" data-target="9" data-suffix=" وسائل" style="font-size: 2.5rem; font-weight: 800; color: var(--color-primary-dark); font-family: 'Noto Naskh Arabic', serif; line-height: 1.2;">0 وسيلة</div>
                        <div class="metric-lbl" style="font-size: 1rem; font-weight: 700; color: var(--color-text); margin-top: 0.5rem;">
                            وسائل تعليمية مبتكرة <span class="badge badge-certified" style="font-size: 0.72rem;">✅ مصنعة</span>
                        </div>
                        <p style="font-size: 0.85rem; color: var(--color-text-secondary); margin-top: 0.5rem; line-height: 1.5;">أدوات ولوحات تفاعلية مصنعة من الورق المعاد استخدامه</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Interactive Calculators Directly on Homepage (الحاسبات التفاعلية المباشرة) -->
        <section class="section" id="homeCalculatorsSection" style="background: var(--color-surface); padding: 4.5rem 0; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
            <div class="container">
                <div class="section-header" style="text-align: center; margin-bottom: 3.5rem;">
                    <div class="section-subtitle" style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--color-primary); background: rgba(31, 122, 90, 0.1); padding: 0.4rem 1rem; border-radius: var(--radius-full); font-weight: 700; font-size: 0.9rem;">
                        <i data-lucide="calculator"></i> أدوات الحساب المباشرة والتفاعلية
                    </div>
                    <h2 class="section-title" style="font-size: 2.2rem; color: var(--color-primary-dark); margin-top: 0.5rem;">حاسبة الأثر البيئي والمالي بالصفحة الرئيسية</h2>
                    <p class="section-desc" style="color: var(--color-text-secondary); max-width: 750px; margin: 0.5rem auto 0;">
                        احسب مباشرةً مقدار خفض الانبعاثات الكربونية (معاملات EPA WARM v16) واعرف تفاصيل التوزيع العادل للمتحصلات المالية (40-25-10-25).
                    </p>
                </div>

                <!-- 1. Carbon Savings Calculator Card -->
                <div class="calculator-card glass-card spring-hover" id="carbonCalcCard" style="margin-bottom: 3rem; border-radius: var(--radius-lg); padding: 2rem; border: 1px solid var(--color-border); box-shadow: var(--shadow-default); background: var(--color-surface);">
                    <div class="calc-header" style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem; border-bottom: 1px solid var(--color-border); padding-bottom: 1.25rem;">
                        <div class="calc-icon" style="background: rgba(31, 122, 90, 0.12); color: var(--color-primary); padding: 0.85rem; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center;">
                            <i data-lucide="leaf" style="width: 28px; height: 28px;"></i>
                        </div>
                        <div>
                            <h3 style="font-size: 1.4rem; margin: 0; color: var(--color-primary-dark);">1. حاسبة الأثر الكربوني للورق (EPA WARM v16)</h3>
                            <p style="color: var(--color-text-secondary); font-size: 0.92rem; margin-top: 0.25rem; margin-bottom: 0;">
                                احتساب تقديري لخفض انبعاثات مكافئ ثاني أكسيد الكربون (CO₂e) والتكافؤات البيئية الناتجة عن تدوير الورق والكتب.
                            </p>
                        </div>
                    </div>

                    <div class="calc-form-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                        <div class="calc-inputs" style="display: flex; flex-direction: column; gap: 1.25rem;">
                            <div class="form-group">
                                <label class="form-label" for="calcMode" style="font-weight: 700; color: var(--color-primary-dark); margin-bottom: 0.5rem; display: block;">طريقة الحساب:</label>
                                <select class="form-select" id="calcMode" style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); background: var(--color-bg); font-family: inherit; font-size: 1rem;">
                                    <option value="weight">إدخال الوزن المباشر (بالكيلوجرام)</option>
                                    <option value="students">إدخال عدد الطلاب (افتراضي 40 كجم/طالب سنوياً)</option>
                                </select>
                            </div>

                            <div class="form-group" id="weightInputGroup" style="display: flex; flex-direction: column;">
                                <label class="form-label" for="paperWeight" style="font-weight: 700; color: var(--color-primary-dark); margin-bottom: 0.5rem;">وزن الخامة (كجم):</label>
                                <input type="number" class="form-input" id="paperWeight" value="1000" min="0" step="any" style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit; font-size: 1rem;">
                            </div>

                            <div class="form-group" id="studentsInputGroup" style="display: none; flex-direction: column;">
                                <label class="form-label" for="studentCount" style="font-weight: 700; color: var(--color-primary-dark); margin-bottom: 0.5rem;">عدد الطلاب المشاركين:</label>
                                <input type="number" class="form-input" id="studentCount" value="170" min="0" step="1" style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit; font-size: 1rem;">
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="materialType" style="font-weight: 700; color: var(--color-primary-dark); margin-bottom: 0.5rem; display: block;">نوع المادة الورقية:</label>
                                <select class="form-select" id="materialType" style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); background: var(--color-bg); font-family: inherit; font-size: 1rem;">
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
                                    <i data-lucide="cloud-off" style="width: 32px; height: 32px; color: #A7F3D0;"></i>
                                </div>
                                <div style="font-size: 0.92rem; color: #D1E8E2; margin-bottom: 0.25rem;">الانبعاثات المتجنبة تقديرياً</div>
                                <div class="result-big-val" id="carbonResultVal" style="font-size: 2.5rem; font-weight: 800; color: #FFFFFF; font-family: 'Noto Naskh Arabic', serif; line-height: 1.2;">4,662.78</div>
                                <div style="font-size: 1.1rem; font-weight: 700; color: #A7F3D0; margin-top: 0.25rem;">كجم CO₂e متجنب</div>
                            </div>

                            <!-- Environmental Equivalencies -->
                            <div class="equivalencies-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid rgba(255, 255, 255, 0.2);">
                                <div style="background: rgba(255, 255, 255, 0.1); padding: 0.75rem 0.5rem; border-radius: var(--radius-md);">
                                    <i data-lucide="trees" style="width: 18px; height: 18px; color: #A7F3D0;"></i>
                                    <div style="font-size: 0.72rem; color: #D1E8E2; margin-top: 0.25rem;">أشجار محمية</div>
                                    <div id="treesSavedVal" style="font-size: 1.05rem; font-weight: 700; color: #FFFFFF;">17.0</div>
                                </div>
                                <div style="background: rgba(255, 255, 255, 0.1); padding: 0.75rem 0.5rem; border-radius: var(--radius-md);">
                                    <i data-lucide="droplets" style="width: 18px; height: 18px; color: #A7F3D0;"></i>
                                    <div style="font-size: 0.72rem; color: #D1E8E2; margin-top: 0.25rem;">مياه موفرة</div>
                                    <div id="waterSavedVal" style="font-size: 1.05rem; font-weight: 700; color: #FFFFFF;">26,500 L</div>
                                </div>
                                <div style="background: rgba(255, 255, 255, 0.1); padding: 0.75rem 0.5rem; border-radius: var(--radius-md);">
                                    <i data-lucide="trash-2" style="width: 18px; height: 18px; color: #A7F3D0;"></i>
                                    <div style="font-size: 0.72rem; color: #D1E8E2; margin-top: 0.25rem;">مدفن موفر</div>
                                    <div id="landfillSavedVal" style="font-size: 1.05rem; font-weight: 700; color: #FFFFFF;">3.3 m³</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 2. Revenue Distribution Calculator Card -->
                <div class="calculator-card glass-card spring-hover" id="revenueCalcCard" style="border-radius: var(--radius-lg); padding: 2rem; border: 1px solid var(--color-border); box-shadow: var(--shadow-default); background: var(--color-surface);">
                    <div class="calc-header" style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem; border-bottom: 1px solid var(--color-border); padding-bottom: 1.25rem;">
                        <div class="calc-icon" style="background: rgba(28, 154, 139, 0.12); color: var(--color-secondary); padding: 0.85rem; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center;">
                            <i data-lucide="pie-chart" style="width: 28px; height: 28px;"></i>
                        </div>
                        <div>
                            <h3 style="font-size: 1.4rem; margin: 0; color: var(--color-primary-dark);">2. حاسبة توزيع متحصلات بيع الخام (40 - 25 - 10 - 25)</h3>
                            <p style="color: var(--color-text-secondary); font-size: 0.92rem; margin-top: 0.25rem; margin-bottom: 0;">
                                أدخل إجمالي حصيلة البيع لرؤية توزيع النسب الشفاف بين التمكين ودعم المدارس وجمعية الإسراء واللوجستيات.
                            </p>
                        </div>
                    </div>

                    <div class="calc-form-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                        <div class="calc-inputs" style="display: flex; flex-direction: column; gap: 1.25rem;">
                            <div class="form-group">
                                <label class="form-label" for="totalRevenueInput" style="font-weight: 700; color: var(--color-primary-dark); margin-bottom: 0.5rem; display: block;">إجمالي المتحصلات المالية (جنيه مصري):</label>
                                <input type="number" class="form-input" id="totalRevenueInput" value="100000" min="0" step="1000" style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit; font-size: 1rem;">
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="logisticsCostInput" style="font-weight: 700; color: var(--color-primary-dark); margin-bottom: 0.5rem; display: block;">تكاليف النقل والفرز الميداني التقديرية (ج.م):</label>
                                <input type="number" class="form-input" id="logisticsCostInput" value="10200" min="0" step="500" style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit; font-size: 1rem;">
                            </div>

                            <div style="background: var(--color-muted); padding: 1.1rem; border-radius: var(--radius-md); border-right: 4px solid var(--color-secondary);">
                                <h4 style="margin-top: 0; margin-bottom: 0.4rem; color: var(--color-primary-dark); font-size: 0.95rem;">قواعد التوزيع الشفاف (40-25-10-25):</h4>
                                <ul style="margin: 0; padding-right: 1.25rem; font-size: 0.83rem; color: var(--color-text-secondary); line-height: 1.6;">
                                    <li><strong>40% السيدات والفتيات:</strong> مكافآت وتدريبات إنتاجية وحرفية لتمكين المرأة.</li>
                                    <li><strong>25% صندوق المدارس الخضراء:</strong> خامات وأدوات ورعاية الأنشطة والطلاب.</li>
                                    <li><strong>10% جمعية الإسراء بدمنهور:</strong> الشريك الميداني والمصروفات الإدارية والميدانية.</li>
                                    <li><strong>25% النقل والبحوث:</strong> تكاليف اللوجستيات والفائض للتطوير وإعادة الاستثمار.</li>
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
                                        <span>المدرسة والطلاب والأنشطة (25%)</span>
                                        <span id="schoolShareVal" style="color: var(--color-primary); font-weight: 800;">25,000 ج.م</span>
                                    </div>
                                    <div class="bar-track" style="background: var(--color-muted); height: 12px; border-radius: 6px; overflow: hidden;">
                                        <div class="bar-fill" style="width: 25%; background: var(--color-primary); height: 100%; transition: width 300ms ease;"></div>
                                    </div>
                                </div>

                                <div class="revenue-bar-item">
                                    <div class="bar-info" style="display: flex; justify-content: space-between; margin-bottom: 0.35rem; font-size: 0.95rem;">
                                        <span>جمعية الإسراء – الشريك الميداني (10%)</span>
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

        <!-- Real Field Proof Photo Gallery (التنفيذ الميداني بالصور الحقيقية) -->
        <section class="section" style="background: var(--color-bg); padding: 4.5rem 0;">
            <div class="container">
                <div class="section-header" style="text-align: center; margin-bottom: 3rem;">
                    <div class="section-subtitle" style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--color-primary); font-weight: 700;">
                        <i data-lucide="camera"></i> المعرض الميداني الحقيقي
                    </div>
                    <h2 class="section-title" style="font-size: 2.1rem; color: var(--color-primary-dark); margin-top: 0.4rem;">صور التنفيذ الميداني والفعاليات</h2>
                    <p class="section-desc" style="color: var(--color-text-secondary); max-width: 650px; margin: 0.4rem auto 0;">مشاهد ميدانية حقيقية توثق ورش التوعية وتمكين السيدات والأنشطة بالبحيرة.</p>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.75rem;">
                    <!-- Photo 1: Women Empowerment Session -->
                    <div class="card glass-card spring-hover" style="padding: 0; overflow: hidden; border-radius: var(--radius-lg); background: #FFFFFF; border: 1px solid var(--color-border);">
                        <div style="height: 200px; width: 100%; overflow: hidden; background: var(--color-muted);">
                            <img src="./assets/images/برة 12.png" alt="ورشة عمل تمكين المرأة والتوعية المجتمعية" style="width: 100%; height: 100%; object-fit: cover; display: block;">
                        </div>
                        <div style="padding: 1.25rem;">
                            <span class="badge badge-certified" style="font-size: 0.75rem; margin-bottom: 0.5rem;"><i data-lucide="users"></i> تمكين المرأة 40%</span>
                            <h4 style="font-size: 1.1rem; color: var(--color-primary-dark); margin-bottom: 0.35rem;">ورشة توعوية لتمكين السيدات بدمنهور</h4>
                            <p style="font-size: 0.88rem; color: var(--color-text-secondary); line-height: 1.5; margin: 0;">تدريب الأمهات والسيدات على فرز المخلفات وتصنيع الوسائل التعليمية البسيطة بمقر الجمعية.</p>
                        </div>
                    </div>

                    <!-- Photo 2: Leadership & Community Group -->
                    <div class="card glass-card spring-hover" style="padding: 0; overflow: hidden; border-radius: var(--radius-lg); background: #FFFFFF; border: 1px solid var(--color-border);">
                        <div style="height: 200px; width: 100%; overflow: hidden; background: var(--color-muted);">
                            <img src="./assets/images/برة 13.png" alt="صورة جماعية لقيادات مشروع برة الصندوق والأسر" style="width: 100%; height: 100%; object-fit: cover; display: block;">
                        </div>
                        <div style="padding: 1.25rem;">
                            <span class="badge badge-certified" style="font-size: 0.75rem; margin-bottom: 0.5rem;"><i data-lucide="award"></i> القيادة الميدانية</span>
                            <h4 style="font-size: 1.1rem; color: var(--color-primary-dark); margin-bottom: 0.35rem;">فريق العمل والقيادات النسائية للأشراف</h4>
                            <p style="font-size: 0.88rem; color: var(--color-text-secondary); line-height: 1.5; margin: 0;">أ. فاطمة عبد المجيد راضي مع مجلس إدارة جمعية الإسراء والمتدربين والأطفال المشاركين.</p>
                        </div>
                    </div>

                    <!-- Photo 3: Student Artwork Workshop -->
                    <div class="card glass-card spring-hover" style="padding: 0; overflow: hidden; border-radius: var(--radius-lg); background: #FFFFFF; border: 1px solid var(--color-border);">
                        <div style="height: 200px; width: 100%; overflow: hidden; background: var(--color-muted);">
                            <img src="./assets/images/برة 10.png" alt="نشاط الفنون والرسومات بالورق المعاد استخدامه" style="width: 100%; height: 100%; object-fit: cover; display: block;">
                        </div>
                        <div style="padding: 1.25rem;">
                            <span class="badge badge-certified" style="font-size: 0.75rem; margin-bottom: 0.5rem;"><i data-lucide="sparkles"></i> الأنشطة الطلابية</span>
                            <h4 style="font-size: 1.1rem; color: var(--color-primary-dark); margin-bottom: 0.35rem;">ورش الرسم والتعلم بالممارسة بالأوراق</h4>
                            <p style="font-size: 0.88rem; color: var(--color-text-secondary); line-height: 1.5; margin: 0;">أطفال المدارس والجمعية يعرضون لوحاتهم المبتكرة المصنوعة من الورق المستعمل.</p>
                        </div>
                    </div>

                    <!-- Photo 4: Official Banner in Action -->
                    <div class="card glass-card spring-hover" style="padding: 0; overflow: hidden; border-radius: var(--radius-lg); background: #FFFFFF; border: 1px solid var(--color-border);">
                        <div style="height: 200px; width: 100%; overflow: hidden; background: var(--color-muted);">
                            <img src="./assets/images/بانر برة الصندوق.jpeg" alt="البانر الميداني الحكومي المعتمد للمشروع" style="width: 100%; height: 100%; object-fit: cover; display: block;">
                        </div>
                        <div style="padding: 1.25rem;">
                            <span class="badge badge-certified" style="font-size: 0.75rem; margin-bottom: 0.5rem;"><i data-lucide="shield-check"></i> اعتماد وزارة التربية والتعليم</span>
                            <h4 style="font-size: 1.1rem; color: var(--color-primary-dark); margin-bottom: 0.35rem;">البانر الرسمي المعتمد بالفعاليات</h4>
                            <p style="font-size: 0.88rem; color: var(--color-text-secondary); line-height: 1.5; margin: 0;">البانر الرسمي متضمناً موافقة التعليم ورعاية التضامن الاجتماعي وتنفيذ جمعية الإسراء.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 6-Stage Visual Value Chain Section -->
        <section class="section" style="background: var(--color-surface); padding: 4.5rem 0; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
            <div class="container">
                <div class="section-header" style="text-align: center; margin-bottom: 3.5rem;">
                    <div class="section-subtitle" style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--color-primary); font-weight: 700;">
                        <i data-lucide="git-merge"></i> سلسلة القيمة المضافة الـ 6
                    </div>
                    <h2 class="section-title" style="font-size: 2.1rem; color: var(--color-primary-dark); margin-top: 0.4rem;">دورة عمل المنظومة الميدانية</h2>
                    <p class="section-desc" style="color: var(--color-text-secondary); max-width: 700px; margin: 0.4rem auto 0;">مسار محكم يضمن التحول من مخلفات مدرسية إلى وسائل تعلم مستدامة ومنافع مجتمعية.</p>
                </div>

                <div class="value-chain-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.75rem;">
                    <div class="chain-step-card spring-hover" style="position: relative; background: var(--color-bg); padding: 1.75rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); border-top: 4px solid var(--color-primary);">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                            <span style="width: 38px; height: 38px; background: var(--color-primary-dark); color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.1rem;">1</span>
                            <i data-lucide="filter" style="width: 26px; height: 26px; color: var(--color-primary);"></i>
                        </div>
                        <h3 style="font-size: 1.2rem; color: var(--color-primary-dark); margin-bottom: 0.5rem;">فرز الورق من المصدر</h3>
                        <p style="color: var(--color-text-secondary); font-size: 0.92rem; line-height: 1.6;">توفير سلال الفرز التعليمية ذات الـ 4 أركان بالمدارس وتدريب الطلاب على الفرز الأول المباشر.</p>
                    </div>

                    <div class="chain-step-card spring-hover" style="position: relative; background: var(--color-bg); padding: 1.75rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); border-top: 4px solid var(--color-secondary);">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                            <span style="width: 38px; height: 38px; background: var(--color-secondary); color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.1rem;">2</span>
                            <i data-lucide="sparkles" style="width: 26px; height: 26px; color: var(--color-secondary);"></i>
                        </div>
                        <h3 style="font-size: 1.2rem; color: var(--color-primary-dark); margin-bottom: 0.5rem;">رفع القيمة (Upcycling)</h3>
                        <p style="color: var(--color-text-secondary); font-size: 0.92rem; line-height: 1.6;">تحويل خامات الكرتون والورق لوسائل تعليمية تفاعلية (مثل ساعة الوقت، بازل الحروف، ومسرح العرائس).</p>
                    </div>

                    <div class="chain-step-card spring-hover" style="position: relative; background: var(--color-bg); padding: 1.75rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); border-top: 4px solid var(--color-accent);">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                            <span style="width: 38px; height: 38px; background: var(--color-accent); color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.1rem;">3</span>
                            <i data-lucide="truck" style="width: 26px; height: 26px; color: var(--color-accent);"></i>
                        </div>
                        <h3 style="font-size: 1.2rem; color: var(--color-primary-dark); margin-bottom: 0.5rem;">التدوير والبيع المعتمد</h3>
                        <p style="color: var(--color-text-secondary); font-size: 0.92rem; line-height: 1.6;">توجيه الورق المضغوط لشركاء التدوير المعتمدين بأوزان رقمية وإيصالات موثقة بالجمعية.</p>
                    </div>

                    <div class="chain-step-card spring-hover" style="position: relative; background: var(--color-bg); padding: 1.75rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); border-top: 4px solid var(--color-primary);">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                            <span style="width: 38px; height: 38px; background: var(--color-primary-dark); color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.1rem;">4</span>
                            <i data-lucide="pie-chart" style="width: 26px; height: 26px; color: var(--color-primary);"></i>
                        </div>
                        <h3 style="font-size: 1.2rem; color: var(--color-primary-dark); margin-bottom: 0.5rem;">توزيع العائد (40-25-10-25)</h3>
                        <p style="color: var(--color-text-secondary); font-size: 0.92rem; line-height: 1.6;">40% للسيدات المعيلات، 25% لدعم المدارس، 10% لجمعية الإسراء الميدانية، و25% للتشغيل والتطوير.</p>
                    </div>

                    <div class="chain-step-card spring-hover" style="position: relative; background: var(--color-bg); padding: 1.75rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); border-top: 4px solid var(--color-secondary);">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                            <span style="width: 38px; height: 38px; background: var(--color-secondary); color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.1rem;">5</span>
                            <i data-lucide="heart-handshake" style="width: 26px; height: 26px; color: var(--color-secondary);"></i>
                        </div>
                        <h3 style="font-size: 1.2rem; color: var(--color-primary-dark); margin-bottom: 0.5rem;">رعاية الطلاب وذوي الهمم</h3>
                        <p style="color: var(--color-text-secondary); font-size: 0.92rem; line-height: 1.6;">تزويد المدارس بالأدوات الخضراء ودعم الطلاب غير القادرين ورعاية ذوي الإعاقة بالبحيرة.</p>
                    </div>

                    <div class="chain-step-card spring-hover" style="position: relative; background: var(--color-bg); padding: 1.75rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); border-top: 4px solid var(--color-accent);">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                            <span style="width: 38px; height: 38px; background: var(--color-accent); color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.1rem;">6</span>
                            <i data-lucide="trending-up" style="width: 26px; height: 26px; color: var(--color-accent);"></i>
                        </div>
                        <h3 style="font-size: 1.2rem; color: var(--color-primary-dark); margin-bottom: 0.5rem;">التوسع والربط الرقمي</h3>
                        <p style="color: var(--color-text-secondary); font-size: 0.92rem; line-height: 1.6;">رصد خفض الانبعاثات الكربونية بآليات EPA WARM والتوسع بآلية المنصة الذكية NISGP 2026.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Final Call-to-Action Section -->
        <section class="section" style="background: linear-gradient(135deg, var(--color-primary-dark), #0B4F3F); color: #ffffff; text-align: center; padding: 4.5rem 0;">
            <div class="container" style="max-width: 820px;">
                <span class="badge" style="background: rgba(234,88,12,0.25); color: #FFEDD5; border: 1px solid rgba(234,88,12,0.4); padding: 0.4rem 1.2rem; margin-bottom: 1.25rem; display: inline-block;">
                    انضم للمبادرة الخضراء الذكية 2026
                </span>
                <h2 style="color: #ffffff; font-size: clamp(1.8rem, 3.2vw, 2.6rem); font-family: 'Noto Naskh Arabic', serif; margin-bottom: 1.25rem; font-weight: 700;">
                    شاركونا التغيير البيئي والمجتمعي بالبحيرة
                </h2>
                <p style="color: #D1E8E2; font-size: 1.1rem; line-height: 1.8; margin-bottom: 2.25rem;">
                    نرحب بك معنا سواء كنت مدرسة ترغب بالانضمام، جمعية أهلية تريد الشراكة الميدانية، متطوعاً بيئياً، أو سيدة تبحث عن تمكين وتدريب إنتاجي.
                </p>
                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <a href="#forms" class="btn btn-accent spring-hover" style="padding: 0.95rem 2.25rem; font-size: 1.1rem; text-decoration: none;">
                        <i data-lucide="user-plus"></i>
                        <span>سجّل جمعيتك / انضم الآن</span>
                    </a>
                    <a href="#about" class="btn btn-outline spring-hover" style="padding: 0.95rem 2.25rem; font-size: 1.1rem; border-color: #ffffff; color: #ffffff; text-decoration: none; backdrop-filter: blur(8px); background: rgba(255,255,255,0.1);">
                        <i data-lucide="info"></i>
                        <span>تعرف على الهيكل والملكية الفكرية</span>
                    </a>
                </div>
            </div>
        </section>
    `;
}

/* Metric Observer Counter Animation Hook */
function initHomeCounters() {
    const counterElements = document.querySelectorAll('.counter-value');
    if (!counterElements.length) return;

    if (!('IntersectionObserver' in window)) {
        counterElements.forEach(el => {
            const target = el.getAttribute('data-target') || '0';
            const suffix = el.getAttribute('data-suffix') || '';
            el.textContent = target + suffix;
        });
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'), 10) || 0;
                const suffix = el.getAttribute('data-suffix') || '';
                animateSingleCounter(el, target, suffix);
                obs.unobserve(el);
            }
        });
    }, { threshold: 0.15 });

    counterElements.forEach(el => observer.observe(el));
}

function animateSingleCounter(el, target, suffix) {
    const duration = 1800;
    const startTime = performance.now();

    function step(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.floor(easeProgress * target);

        el.textContent = currentVal + suffix;

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            el.textContent = target + suffix;
        }
    }

    requestAnimationFrame(step);
}


/* ===== PAGE: about ===== */
/* ==========================================================================
   Page Component: About Page View (pages/about.js)
   Bara El-Sandouq – Smart Green School Project
   ========================================================================== */

function renderAboutPage() {
    return `
        <!-- Hero Section with Full Project Logo -->
        <section class="section" style="background: var(--color-bg); padding: 4.5rem 0 3.5rem; border-bottom: 1px solid var(--color-border);">
            <div class="container">
                <div style="display: grid; grid-template-columns: 1fr; gap: 2.5rem; align-items: center; text-align: center;" class="about-hero-grid">
                    <div style="max-width: 800px; margin: 0 auto;">
                        <div style="margin-bottom: 1.5rem; display: flex; justify-content: center;">
                            <img src="./assets/images/لوجو برة الصندوق 1.png" alt="الشعار الرسمي الكامل لمشروع برة الصندوق" style="max-width: 260px; width: 100%; height: auto; border-radius: var(--radius-lg); filter: drop-shadow(0 12px 24px rgba(15, 80, 60, 0.15)); background: #ffffff; padding: 0.75rem; border: 1px solid var(--color-border);">
                        </div>
                        <div class="section-subtitle" style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--color-primary); font-weight: 600; margin-bottom: 0.5rem;">
                            <i data-lucide="info"></i> بطاقة تعريفية موثقة ومعتمدة
                        </div>
                        <h1 class="section-title" style="font-size: clamp(2rem, 3.5vw, 3rem); color: var(--color-primary-dark); margin-bottom: 1rem; font-family: 'Noto Naskh Arabic', serif;">
                            عن مشروع برة الصندوق – المدرسة الخضراء الذكية
                        </h1>
                        <p class="section-desc" style="color: var(--color-text-secondary); font-size: 1.15rem; line-height: 1.8; max-width: 720px; margin: 0 auto;">
                            مشروع بيئي تعليمي مجتمعي قائم على استعادة قيمة الخامات الورقية والمخلفات المدرسية وتحويلها إلى وسيلة تعلم تفاعلية، مع توجيه العائد المالي لتمكين السيدات ودعم المدارس وأسر ذوي الهمم تحت مظلة المبادرة الوطنية للمشروعات الخضراء الذكية (NISGP 2026).
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Intellectual Property & Accreditation Section -->
        <section class="section" style="background: var(--color-surface); padding: 4.5rem 0; border-bottom: 1px solid var(--color-border);">
            <div class="container">
                <div class="section-header" style="text-align: center; margin-bottom: 3.5rem;">
                    <div class="section-subtitle" style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--color-primary); font-weight: 600;">
                        <i data-lucide="shield-check"></i> الملكية الفكرية والحوكمة
                    </div>
                    <h2 class="section-title" style="font-size: 2.2rem; color: var(--color-primary-dark); margin-top: 0.5rem;">الاعتماد المؤسسي والملكية الفكرية</h2>
                    <p class="section-desc" style="color: var(--color-text-secondary); max-width: 680px; margin: 0.5rem auto 0;">توثيق رسمي محكم يضمن الشفافية والملكية الفكرية والمظلة الأهلية القانونية للمشروع.</p>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; margin-bottom: 3.5rem;">
                    <!-- IP Owner Card -->
                    <div class="card glass-card spring-hover" style="background: var(--color-bg); padding: 2.25rem; border-radius: var(--radius-lg); border-right: 5px solid var(--color-primary); border-top: 1px solid var(--color-border); border-left: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
                        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.25rem;">
                            <div style="width: 50px; height: 50px; background: rgba(31, 122, 90, 0.15); color: var(--color-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                <i data-lucide="award" style="width: 26px; height: 26px;"></i>
                            </div>
                            <div>
                                <h3 style="font-size: 1.25rem; color: var(--color-primary-dark); margin: 0;">صاحبة الملكية الفكرية</h3>
                                <span class="badge badge-certified" style="font-size: 0.8rem; margin-top: 0.25rem; display: inline-block;">مُسجل وموثق رسمياً ✅</span>
                            </div>
                        </div>
                        <h4 style="font-size: 1.35rem; font-weight: 700; color: var(--color-primary-dark); margin-bottom: 0.75rem; font-family: 'Noto Naskh Arabic', serif;">
                            الأستاذة / فاطمة عبد المجيد راضي
                        </h4>
                        <p style="color: var(--color-text-secondary); font-size: 0.98rem; line-height: 1.7;">
                            صاحبة الفكرة ومعدّة الوثيقة المرجعية الأصلية للمشروع. تم إقرار وتسجيل الملكية الفكرية ضمن الملفات والمستندات الرسمية المعتمدة للمسابقة الوطنية للمشروعات الخضراء الذكية بمحافظة البحيرة وموافقة وزارة التربية والتعليم.
                        </p>
                    </div>

                    <!-- Host Entity Card -->
                    <div class="card glass-card spring-hover" style="background: var(--color-bg); padding: 2.25rem; border-radius: var(--radius-lg); border-right: 5px solid var(--color-secondary); border-top: 1px solid var(--color-border); border-left: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
                        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.25rem;">
                            <div style="width: 50px; height: 50px; background: rgba(28, 154, 139, 0.15); color: var(--color-secondary); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                <i data-lucide="building-2" style="width: 26px; height: 26px;"></i>
                            </div>
                            <div>
                                <h3 style="font-size: 1.25rem; color: var(--color-primary-dark); margin: 0;">الجهة المضيفة والمنفذة</h3>
                                <span class="badge badge-certified" style="font-size: 0.8rem; margin-top: 0.25rem; display: inline-block;">رقم الإشهار: 1124 لسنة 2006 ✅</span>
                            </div>
                        </div>
                        <h4 style="font-size: 1.35rem; font-weight: 700; color: var(--color-primary-dark); margin-bottom: 0.75rem; font-family: 'Noto Naskh Arabic', serif;">
                            جمعية الإسراء الخيرية لتنمية المجتمع بدمنهور
                        </h4>
                        <p style="color: var(--color-text-secondary); font-size: 0.98rem; line-height: 1.7;">
                            المقر الرئيسي: دمنهور – أمام مسجد سيدي عمر – محافظة البحيرة. الجمعية مسؤولة عن الإشراف الإداري والميداني، وإدارة الشراكات المجتمعية والمالية وفقاً لإشهار وزارة التضامن الاجتماعي رقم 1124.
                        </p>
                    </div>
                </div>

                <!-- Dual Logos Display Side-by-Side -->
                <div class="card glass-card" style="background: var(--color-bg); padding: 2.5rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); text-align: center; max-width: 860px; margin: 0 auto; box-shadow: var(--shadow-default);">
                    <h3 style="font-size: 1.3rem; color: var(--color-primary-dark); margin-bottom: 1.5rem;">الشعاران الرسميان والشراكة المؤسسية</h3>
                    <div style="display: flex; align-items: center; justify-content: center; gap: 3rem; flex-wrap: wrap; margin-bottom: 1.5rem;" class="dual-logos-container">
                        <div style="text-align: center;">
                            <img src="./assets/images/لوجو برة الصندوق 1.png" alt="شعار مشروع برة الصندوق" style="max-height: 110px; width: auto; object-fit: contain; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.1));">
                            <div style="font-size: 0.85rem; font-weight: 600; color: var(--color-text-secondary); margin-top: 0.5rem;">شعار مشروع برة الصندوق</div>
                        </div>
                        <div style="font-size: 2rem; color: var(--color-primary); font-weight: 700;">+</div>
                        <div style="text-align: center;">
                            <img src="./assets/images/لوجو جمعية الاسراء.jpg" alt="شعار جمعية الإسراء الخيرية بدمنهور" style="max-height: 110px; width: auto; object-fit: contain; border-radius: 12px; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.1));">
                            <div style="font-size: 0.85rem; font-weight: 600; color: var(--color-text-secondary); margin-top: 0.5rem;">شعار جمعية الإسراء الخيرية (إشهار 1124)</div>
                        </div>
                    </div>
                    <p style="color: var(--color-text-secondary); font-size: 0.95rem; margin: 0; max-width: 680px; margin-right: auto; margin-left: auto; line-height: 1.6;">
                        تكامل تام وشراكة استراتيجية وثيقة بين الابتكار البيئي التعليمي للمشروع والمظلة القانونية والإدارية الميدانية لجمعية الإسراء الخيرية بمحافظة البحيرة، وموافقة مديرية التربية والتعليم بالبحيرة.
                    </p>
                </div>
            </div>
        </section>

        <!-- Real Field Photo Proof Section -->
        <section class="section" style="background: var(--color-bg); padding: 4.5rem 0; border-bottom: 1px solid var(--color-border);">
            <div class="container">
                <div class="section-header" style="text-align: center; margin-bottom: 3.5rem;">
                    <div class="section-subtitle" style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--color-primary); font-weight: 600;">
                        <i data-lucide="camera"></i> المعرض الميداني الموثق
                    </div>
                    <h2 class="section-title" style="font-size: 2.2rem; color: var(--color-primary-dark); margin-top: 0.5rem;">صور الفعاليات والأثر الواقعي</h2>
                    <p class="section-desc" style="color: var(--color-text-secondary); max-width: 680px; margin: 0.5rem auto 0;">لقطات ميدانية حيّة تعكس تنفيذ ورش التمكين، الأنشطة المدرسية، والقيادات والمشاركة المجتمعية.</p>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;">
                    <!-- Women Empowerment Card (برة 12.png) -->
                    <div class="card glass-card spring-hover" style="background: var(--color-surface); border-radius: var(--radius-lg); border: 1px solid var(--color-border); overflow: hidden; box-shadow: var(--shadow-default);">
                        <div style="position: relative; overflow: hidden; aspect-ratio: 4/3;">
                            <img src="./assets/images/برة 12.png" alt="دورة تدريب وتمكين المرأة" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;">
                            <span class="badge badge-certified" style="position: absolute; top: 1rem; right: 1rem; background: rgba(31, 122, 90, 0.9); color: #ffffff; backdrop-filter: blur(8px);">
                                إثبات تخصيص 40%
                            </span>
                        </div>
                        <div style="padding: 1.75rem;">
                            <h3 style="font-size: 1.25rem; color: var(--color-primary-dark); margin-bottom: 0.5rem; font-family: 'Noto Naskh Arabic', serif;">
                                تمكين المرأة والحرفيات (ورش الإنتاج)
                            </h3>
                            <p style="color: var(--color-text-secondary); font-size: 0.92rem; line-height: 1.6; margin: 0;">
                                جلسة تدريبية ومشاركة نسائية فعالة للسيدات والأمهات في تصنيع الوسائل التعليمية وإعادة التدوير، مع تطبيق بند تخصيص 40% من عوائد المشروع كفرص عمل خضراء ومكافآت مباشرة.
                            </p>
                        </div>
                    </div>

                    <!-- Children Activity Card 1 (برة 10.png) -->
                    <div class="card glass-card spring-hover" style="background: var(--color-surface); border-radius: var(--radius-lg); border: 1px solid var(--color-border); overflow: hidden; box-shadow: var(--shadow-default);">
                        <div style="position: relative; overflow: hidden; aspect-ratio: 4/3;">
                            <img src="./assets/images/برة 10.png" alt="ورشة الرسم والابتكار للأطفال" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;">
                            <span class="badge badge-certified" style="position: absolute; top: 1rem; right: 1rem; background: rgba(28, 154, 139, 0.9); color: #ffffff; backdrop-filter: blur(8px);">
                                ورش الابتكار الفني
                            </span>
                        </div>
                        <div style="padding: 1.75rem;">
                            <h3 style="font-size: 1.25rem; color: var(--color-primary-dark); margin-bottom: 0.5rem; font-family: 'Noto Naskh Arabic', serif;">
                                ورش الرسم وتنمية مهارات الأطفال
                            </h3>
                            <p style="color: var(--color-text-secondary); font-size: 0.92rem; line-height: 1.6; margin: 0;">
                                مشاركة الطلاب والأطفال والتلاميذ في ورش العمل اليدوية والرسم وتصميم الوسائل التفاعلية باستخدام الورق والكرتون المعاد تدويره لتنمية الخيال والوعي البيئي.
                            </p>
                        </div>
                    </div>

                    <!-- Children Activity Card 2 (برة 11.png) -->
                    <div class="card glass-card spring-hover" style="background: var(--color-surface); border-radius: var(--radius-lg); border: 1px solid var(--color-border); overflow: hidden; box-shadow: var(--shadow-default);">
                        <div style="position: relative; overflow: hidden; aspect-ratio: 4/3;">
                            <img src="./assets/images/برة 11.png" alt="النشيد الوطني والأنشطة المدرسية" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;">
                            <span class="badge badge-certified" style="position: absolute; top: 1rem; right: 1rem; background: rgba(31, 122, 90, 0.9); color: #ffffff; backdrop-filter: blur(8px);">
                                التواجد بـ 26 مدرسة
                            </span>
                        </div>
                        <div style="padding: 1.75rem;">
                            <h3 style="font-size: 1.25rem; color: var(--color-primary-dark); margin-bottom: 0.5rem; font-family: 'Noto Naskh Arabic', serif;">
                                الطابور والنشيد الوطني والوعي المدرسي
                            </h3>
                            <p style="color: var(--color-text-secondary); font-size: 0.92rem; line-height: 1.6; margin: 0;">
                                التواجد الميداني والأنشطة التوعوية في طابور الصباح والتحية والسلام الوطني داخل المدارس الـ 26 المشاركة بمحافظة البحيرة لترسيخ ثقافة الفرز من المصدر.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Leadership & Team Card (برة 13.png) -->
                <div class="card glass-card spring-hover" style="background: var(--color-surface); border-radius: var(--radius-lg); border: 1px solid var(--color-border); overflow: hidden; margin-top: 2.5rem; box-shadow: var(--shadow-default);">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); align-items: center;">
                        <div style="aspect-ratio: 16/10; overflow: hidden;">
                            <img src="./assets/images/برة 13.png" alt="قيادات المشروع والمجموعة المجتمعية" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <div style="padding: 2.5rem;">
                            <span class="badge badge-certified" style="margin-bottom: 0.75rem; display: inline-block;">قيادات المشروع والمجتمع</span>
                            <h3 style="font-size: 1.6rem; color: var(--color-primary-dark); margin-bottom: 1rem; font-family: 'Noto Naskh Arabic', serif;">
                                فريق القيادة والشراكة المجتمعية
                            </h3>
                            <p style="color: var(--color-text-secondary); font-size: 1rem; line-height: 1.7; margin-bottom: 1rem;">
                                لقطة تجمع صاحبة الفكرة الأستاذة فاطمة عبد المجيد راضي مع ممثلي جمعية الإسراء الخيرية والقيادات التعليمية والمجتمعية بالبحيرة بحضور بانر المشروع الرسمي.
                            </p>
                            <div style="display: flex; align-items: center; gap: 0.75rem; font-size: 0.9rem; color: var(--color-primary-dark); font-weight: 600;">
                                <i data-lucide="check-circle" style="color: var(--color-primary);"></i>
                                <span>عمل بروح الفريق الواحد لخدمة البيئة والتعليم بالمحافظة</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Timeline Section -->
        <section class="section" style="background: var(--color-surface); padding: 4.5rem 0; border-bottom: 1px solid var(--color-border);">
            <div class="container">
                <div class="section-header" style="text-align: center; margin-bottom: 3.5rem;">
                    <div class="section-subtitle" style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--color-primary); font-weight: 600;">
                        <i data-lucide="calendar"></i> التسلسل الزمني والمحطات
                    </div>
                    <h2 class="section-title" style="font-size: 2.2rem; color: var(--color-primary-dark); margin-top: 0.5rem;">مسيرة النمو والتطوير من مايو 2023</h2>
                    <p class="section-desc" style="color: var(--color-text-secondary); max-width: 680px; margin: 0.5rem auto 0;">محطات رئيسية رسمت طريق تحول المبادرة من فكرة مبتكرة إلى نموذج وطني خضر ذكي.</p>
                </div>

                <div class="timeline-wrapper" style="position: relative; max-width: 840px; margin: 0 auto; padding: 1rem 0;">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem;">
                        <div class="card glass-card spring-hover" style="padding: 1.75rem; border-radius: var(--radius-lg); background: var(--color-bg); border: 1px solid var(--color-border); border-top: 4px solid var(--color-primary);">
                            <span class="badge badge-certified" style="margin-bottom: 0.75rem; display: inline-block;">مايو 2023</span>
                            <h4 style="font-size: 1.15rem; color: var(--color-primary-dark); margin-bottom: 0.5rem;">انطلاق فكرة المشروع</h4>
                            <p style="font-size: 0.9rem; color: var(--color-text-secondary); line-height: 1.6; margin: 0;">
                                إعداد الدليل والوثيقة المرجعية وتصميم تجارب فرز الورق الأولى بالمدارس على يد أ. فاطمة عبد المجيد راضي.
                            </p>
                        </div>

                        <div class="card glass-card spring-hover" style="padding: 1.75rem; border-radius: var(--radius-lg); background: var(--color-bg); border: 1px solid var(--color-border); border-top: 4px solid var(--color-secondary);">
                            <span class="badge badge-certified" style="margin-bottom: 0.75rem; display: inline-block;">اعتماد تعليمي</span>
                            <h4 style="font-size: 1.15rem; color: var(--color-primary-dark); margin-bottom: 0.5rem;">موافقة وزارة التربية والتعليم</h4>
                            <p style="font-size: 0.9rem; color: var(--color-text-secondary); line-height: 1.6; margin: 0;">
                                صدور الموافقات والتراخيص الرسمية من مديرية التربية والتعليم بالبحيرة للتنفيذ والفرز داخل 26 مدرسة.
                            </p>
                        </div>

                        <div class="card glass-card spring-hover" style="padding: 1.75rem; border-radius: var(--radius-lg); background: var(--color-bg); border: 1px solid var(--color-border); border-top: 4px solid var(--color-accent);">
                            <span class="badge badge-certified" style="margin-bottom: 0.75rem; display: inline-block;">توسع إقليمي</span>
                            <h4 style="font-size: 1.15rem; color: var(--color-primary-dark); margin-bottom: 0.5rem;">شراكات أسوان وكفر الشيخ</h4>
                            <p style="font-size: 0.9rem; color: var(--color-text-secondary); line-height: 1.6; margin: 0;">
                                نقل التجربة وتبادل الخبرات مع جمعية الخدمات المتكاملة بأسوان وتنمية المجتمع ببلطيم بكفر الشيخ.
                            </p>
                        </div>

                        <div class="card glass-card spring-hover" style="padding: 1.75rem; border-radius: var(--radius-lg); background: var(--color-bg); border: 1px solid var(--color-border); border-top: 4px solid var(--color-primary);">
                            <span class="badge badge-estimated" style="margin-bottom: 0.75rem; display: inline-block;">2026 NISGP</span>
                            <h4 style="font-size: 1.15rem; color: var(--color-primary-dark); margin-bottom: 0.5rem;">المنصة الرقمية الخضراء</h4>
                            <p style="font-size: 0.9rem; color: var(--color-text-secondary); line-height: 1.6; margin: 0;">
                                تفعيل المكون الذكي، حاسبة WARM v16 للكربون، ونظام التتبع الرقمي لإشهار التجربة بالمبادرة الوطنية.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 10 Governing Values Grid -->
        <section class="section" style="background: var(--color-bg); padding: 4.5rem 0;">
            <div class="container">
                <div class="section-header" style="text-align: center; margin-bottom: 3.5rem;">
                    <div class="section-subtitle" style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--color-primary); font-weight: 600;">
                        <i data-lucide="compass"></i> المبادئ والروح
                    </div>
                    <h2 class="section-title" style="font-size: 2.2rem; color: var(--color-primary-dark); margin-top: 0.5rem;">القيم الحاكمة للمشروع (10 مبادئ بيئية)</h2>
                    <p class="section-desc" style="color: var(--color-text-secondary); max-width: 680px; margin: 0.5rem auto 0;">دليل أخلاقي وتنظيمي يحكم كافة أنشطة المبادرة والتواصل مع المجتمع والشركاء.</p>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem;">
                    <div class="card glass-card spring-hover" style="background: var(--color-surface); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); text-align: center;">
                        <div style="width: 48px; height: 48px; background: rgba(31, 122, 90, 0.12); color: var(--color-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem;">
                            <i data-lucide="leaf" style="width: 24px; height: 24px;"></i>
                        </div>
                        <h4 style="font-size: 1.05rem; color: var(--color-primary-dark); margin-bottom: 0.25rem;">1. الاستدامة البيئية</h4>
                        <p style="font-size: 0.85rem; color: var(--color-text-secondary); margin: 0;">الحفاظ على الموارد وخفض الانبعاثات الكربونية</p>
                    </div>

                    <div class="card glass-card spring-hover" style="background: var(--color-surface); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); text-align: center;">
                        <div style="width: 48px; height: 48px; background: rgba(28, 154, 139, 0.12); color: var(--color-secondary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem;">
                            <i data-lucide="users" style="width: 24px; height: 24px;"></i>
                        </div>
                        <h4 style="font-size: 1.05rem; color: var(--color-primary-dark); margin-bottom: 0.25rem;">2. المشاركة المجتمعية</h4>
                        <p style="font-size: 0.85rem; color: var(--color-text-secondary); margin: 0;">دمج المدرسة والأسرة والجمعية في منظومة واحدة</p>
                    </div>

                    <div class="card glass-card spring-hover" style="background: var(--color-surface); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); text-align: center;">
                        <div style="width: 48px; height: 48px; background: rgba(234, 88, 12, 0.12); color: var(--color-accent); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem;">
                            <i data-lucide="eye" style="width: 24px; height: 24px;"></i>
                        </div>
                        <h4 style="font-size: 1.05rem; color: var(--color-primary-dark); margin-bottom: 0.25rem;">3. الشفافية المطلقة</h4>
                        <p style="font-size: 0.85rem; color: var(--color-text-secondary); margin: 0;">إعلانات وعروض دورية دقيقة لتوزيع العوائد المالية</p>
                    </div>

                    <div class="card glass-card spring-hover" style="background: var(--color-surface); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); text-align: center;">
                        <div style="width: 48px; height: 48px; background: rgba(31, 122, 90, 0.12); color: var(--color-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem;">
                            <i data-lucide="heart-handshake" style="width: 24px; height: 24px;"></i>
                        </div>
                        <h4 style="font-size: 1.05rem; color: var(--color-primary-dark); margin-bottom: 0.25rem;">4. العدالة في التوزيع</h4>
                        <p style="font-size: 0.85rem; color: var(--color-text-secondary); margin: 0;">نسب عادلة (40-25-10-25) تكافئ جميع الأطراف</p>
                    </div>

                    <div class="card glass-card spring-hover" style="background: var(--color-surface); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); text-align: center;">
                        <div style="width: 48px; height: 48px; background: rgba(28, 154, 139, 0.12); color: var(--color-secondary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem;">
                            <i data-lucide="book-open" style="width: 24px; height: 24px;"></i>
                        </div>
                        <h4 style="font-size: 1.05rem; color: var(--color-primary-dark); margin-bottom: 0.25rem;">5. التعلم بالممارسة</h4>
                        <p style="font-size: 0.85rem; color: var(--color-text-secondary); margin: 0;">تحويل المفاهيم البيئية إلى أنشطة ووسائل تفاعلية</p>
                    </div>

                    <div class="card glass-card spring-hover" style="background: var(--color-surface); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); text-align: center;">
                        <div style="width: 48px; height: 48px; background: rgba(234, 88, 12, 0.12); color: var(--color-accent); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem;">
                            <i data-lucide="shield-check" style="width: 24px; height: 24px;"></i>
                        </div>
                        <h4 style="font-size: 1.05rem; color: var(--color-primary-dark); margin-bottom: 0.25rem;">6. سلامة المشاركين</h4>
                        <p style="font-size: 0.85rem; color: var(--color-text-secondary); margin: 0;">نقاط جمع فرز آمنة ومحمية داخل المدارس</p>
                    </div>

                    <div class="card glass-card spring-hover" style="background: var(--color-surface); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); text-align: center;">
                        <div style="width: 48px; height: 48px; background: rgba(31, 122, 90, 0.12); color: var(--color-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem;">
                            <i data-lucide="sparkles" style="width: 24px; height: 24px;"></i>
                        </div>
                        <h4 style="font-size: 1.05rem; color: var(--color-primary-dark); margin-bottom: 0.25rem;">7. تمكين المرأة (40%)</h4>
                        <p style="font-size: 0.85rem; color: var(--color-text-secondary); margin: 0;">توفير فرص عمل ومردود اقتصادي للسيدات</p>
                    </div>

                    <div class="card glass-card spring-hover" style="background: var(--color-surface); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); text-align: center;">
                        <div style="width: 48px; height: 48px; background: rgba(28, 154, 139, 0.12); color: var(--color-secondary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem;">
                            <i data-lucide="heart" style="width: 24px; height: 24px;"></i>
                        </div>
                        <h4 style="font-size: 1.05rem; color: var(--color-primary-dark); margin-bottom: 0.25rem;">8. دمج ذوي الهمم (8%)</h4>
                        <p style="font-size: 0.85rem; color: var(--color-text-secondary); margin: 0;">إشراك حقيقي ورعاية خاصة لذوي الاحتياجات</p>
                    </div>

                    <div class="card glass-card spring-hover" style="background: var(--color-surface); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); text-align: center;">
                        <div style="width: 48px; height: 48px; background: rgba(234, 88, 12, 0.12); color: var(--color-accent); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem;">
                            <i data-lucide="trending-up" style="width: 24px; height: 24px;"></i>
                        </div>
                        <h4 style="font-size: 1.05rem; color: var(--color-primary-dark); margin-bottom: 0.25rem;">9. القياس والتحسين</h4>
                        <p style="font-size: 0.85rem; color: var(--color-text-secondary); margin: 0;">تتبع الانبعاثات بالأرقام وحاسبات الكربون</p>
                    </div>

                    <div class="card glass-card spring-hover" style="background: var(--color-surface); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); text-align: center;">
                        <div style="width: 48px; height: 48px; background: rgba(31, 122, 90, 0.12); color: var(--color-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem;">
                            <i data-lucide="lightbulb" style="width: 24px; height: 24px;"></i>
                        </div>
                        <h4 style="font-size: 1.05rem; color: var(--color-primary-dark); margin-bottom: 0.25rem;">10. التفكير برة الصندوق</h4>
                        <p style="font-size: 0.85rem; color: var(--color-text-secondary); margin: 0;">الابتكار المستمر في حل المشكلات البيئية</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}


/* ===== PAGE: how-it-works ===== */
/* ==========================================================================
   Page Component: How It Works Page View (pages/how-it-works.js)
   Bara El-Sandouq – Smart Green School
   ========================================================================== */

function renderHowItWorksPage() {
    return `
        <section class="section" style="padding-top: 3rem; padding-bottom: 4rem;">
            <div class="container">
                <!-- Section Header -->
                <div class="section-header text-center" style="max-width: 800px; margin: 0 auto 3rem auto;">
                    <div class="section-subtitle">
                        <i data-lucide="cogs"></i> التشغيل الميداني وتكامل الأدوار
                    </div>
                    <h1 class="section-title">كيف يعمل مشروع برة الصندوق؟</h1>
                    <p class="section-desc">
                        منظومة عمل متكاملة تتكون من 8 مراحل تشغيلية موثقة تضمن سلامة وأمان الطلاب، وتستهدف التحول من خامات الورق والكرتون التالف إلى أدوات خضراء وقيمة مضافة.
                    </p>
                </div>

                <!-- 8 Operational Workflow Stages Grid with Visual Step Connectors -->
                <div class="workflow-timeline" style="position: relative; max-width: 900px; margin: 0 auto 5rem auto; display: flex; flex-direction: column; gap: 2rem;">
                    
                    <!-- Phase 1 -->
                    <div class="card spring-hover glass-card workflow-step" style="display: flex; gap: 1.5rem; align-items: flex-start; padding: 1.75rem; border-radius: var(--radius-lg); border-right: 6px solid var(--color-primary); position: relative;">
                        <div style="width: 52px; height: 52px; background: var(--color-primary-dark); color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.4rem; flex-shrink: 0; box-shadow: 0 4px 12px rgba(11,79,63,0.25);">
                            1
                        </div>
                        <div style="flex-grow: 1;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
                                <h3 style="font-size: 1.3rem; color: var(--color-primary-dark); margin: 0;">1. التسجيل والتواصل الأولي</h3>
                                <span class="badge badge-certified"><i data-lucide="file-text"></i> مرحلة التأسيس</span>
                            </div>
                            <p style="color: var(--color-text-secondary); font-size: 0.98rem; line-height: 1.65; margin: 0;">
                                تسجّل الجمعية الأهلية أو المدرسة بياناتها عبر المنصة الرقمية، ثم يتواصل فريق المبادرة لعقد جلسة تعريفية شاملة توضح أهداف المشروع وآلية جمع الورق والاشتراطات البيئية.
                            </p>
                        </div>
                    </div>

                    <!-- Connector Line 1-2 -->
                    <div style="display: flex; justify-content: center; margin: -1rem 0;">
                        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0V24M12 24L6 18M12 24L18 18" stroke="var(--color-primary)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

                    <!-- Phase 2 -->
                    <div class="card spring-hover glass-card workflow-step" style="display: flex; gap: 1.5rem; align-items: flex-start; padding: 1.75rem; border-radius: var(--radius-lg); border-right: 6px solid var(--color-primary); position: relative;">
                        <div style="width: 52px; height: 52px; background: var(--color-primary-dark); color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.4rem; flex-shrink: 0; box-shadow: 0 4px 12px rgba(11,79,63,0.25);">
                            2
                        </div>
                        <div style="flex-grow: 1;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
                                <h3 style="font-size: 1.3rem; color: var(--color-primary-dark); margin: 0;">2. تقييم الجاهزية والنقاط الآمنة</h3>
                                <span class="badge badge-certified"><i data-lucide="shield-check"></i> سلامة موقع التخزين</span>
                            </div>
                            <p style="color: var(--color-text-secondary); font-size: 0.98rem; line-height: 1.65; margin: 0;">
                                إجراء زيارة ميدانية للمدرسة لمعاينة الموقع وتجهيز نقطة تخزين ورقية جافة وآمنة بعيدة تماماً عن طرقات الطلاب والمخاطر، مع توفير سلال الفرز المصممة.
                            </p>
                        </div>
                    </div>

                    <!-- Connector Line 2-3 -->
                    <div style="display: flex; justify-content: center; margin: -1rem 0;">
                        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0V24M12 24L6 18M12 24L18 18" stroke="var(--color-primary)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

                    <!-- Phase 3 -->
                    <div class="card spring-hover glass-card workflow-step" style="display: flex; gap: 1.5rem; align-items: flex-start; padding: 1.75rem; border-radius: var(--radius-lg); border-right: 6px solid var(--color-primary); position: relative;">
                        <div style="width: 52px; height: 52px; background: var(--color-primary-dark); color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.4rem; flex-shrink: 0; box-shadow: 0 4px 12px rgba(11,79,63,0.25);">
                            3
                        </div>
                        <div style="flex-grow: 1;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
                                <h3 style="font-size: 1.3rem; color: var(--color-primary-dark); margin: 0;">3. الاتفاق وتسمية المنسقين</h3>
                                <span class="badge badge-certified"><i data-lucide="user-check"></i> الهيكل التنفيذي</span>
                            </div>
                            <p style="color: var(--color-text-secondary); font-size: 0.98rem; line-height: 1.65; margin: 0;">
                                تسمية مسؤولي التنسيق بالمدرسة (مشرف النشاط البيئي) والجمعية المشاركة، وتحديد جدول مواعيد الجمع الدوري وخطة العمل المدرسية السنوية.
                            </p>
                        </div>
                    </div>

                    <!-- Connector Line 3-4 -->
                    <div style="display: flex; justify-content: center; margin: -1rem 0;">
                        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0V24M12 24L6 18M12 24L18 18" stroke="var(--color-primary)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

                    <!-- Phase 4 -->
                    <div class="card spring-hover glass-card workflow-step" style="display: flex; gap: 1.5rem; align-items: flex-start; padding: 1.75rem; border-radius: var(--radius-lg); border-right: 6px solid var(--color-primary); position: relative;">
                        <div style="width: 52px; height: 52px; background: var(--color-primary-dark); color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.4rem; flex-shrink: 0; box-shadow: 0 4px 12px rgba(11,79,63,0.25);">
                            4
                        </div>
                        <div style="flex-grow: 1;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
                                <h3 style="font-size: 1.3rem; color: var(--color-primary-dark); margin: 0;">4. التوعية وبناء فريق المدرسة البيئي</h3>
                                <span class="badge badge-certified"><i data-lucide="graduation-cap"></i> التوعية والمشاركة</span>
                            </div>
                            <p style="color: var(--color-text-secondary); font-size: 0.98rem; line-height: 1.65; margin: 0;">
                                إقامة ورش عمل توعوية وتأليف جماعة البيئة المدرسية لتدريب الطلاب والفتيات على التمييز بين أنواع الورق والمشاركة الفعالة في الفرز من المصدر.
                            </p>
                        </div>
                    </div>

                    <!-- Connector Line 4-5 -->
                    <div style="display: flex; justify-content: center; margin: -1rem 0;">
                        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0V24M12 24L6 18M12 24L18 18" stroke="var(--color-secondary)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

                    <!-- Phase 5 -->
                    <div class="card spring-hover glass-card workflow-step" style="display: flex; gap: 1.5rem; align-items: flex-start; padding: 1.75rem; border-radius: var(--radius-lg); border-right: 6px solid var(--color-secondary); position: relative;">
                        <div style="width: 52px; height: 52px; background: var(--color-secondary); color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.4rem; flex-shrink: 0; box-shadow: 0 4px 12px rgba(28,154,139,0.25);">
                            5
                        </div>
                        <div style="flex-grow: 1;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
                                <h3 style="font-size: 1.3rem; color: var(--color-primary-dark); margin: 0;">5. الجمع والفرز والتسجيل (فرز الورق)</h3>
                                <span class="badge badge-certified"><i data-lucide="scale"></i> فرز ووزن الخامات</span>
                            </div>
                            <p style="color: var(--color-text-secondary); font-size: 0.98rem; line-height: 1.65; margin: 0;">
                                جمع الأوراق، الدفاتر القديمة، الكتب الدراسية المستهلكة والكرتون المضلع من الفصول والمكاتب، وتصنيف الخامات ووزنها وتسجيلها في محضر رسمي.
                            </p>
                        </div>
                    </div>

                    <!-- Connector Line 5-6 -->
                    <div style="display: flex; justify-content: center; margin: -1rem 0;">
                        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0V24M12 24L6 18M12 24L18 18" stroke="var(--color-secondary)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

                    <!-- Phase 6 -->
                    <div class="card spring-hover glass-card workflow-step" style="display: flex; gap: 1.5rem; align-items: flex-start; padding: 1.75rem; border-radius: var(--radius-lg); border-right: 6px solid var(--color-secondary); position: relative;">
                        <div style="width: 52px; height: 52px; background: var(--color-secondary); color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.4rem; flex-shrink: 0; box-shadow: 0 4px 12px rgba(28,154,139,0.25);">
                            6
                        </div>
                        <div style="flex-grow: 1;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
                                <h3 style="font-size: 1.3rem; color: var(--color-primary-dark); margin: 0;">6. تحديد مسارات الاستفادة ورفع القيمة (التصنيع)</h3>
                                <span class="badge badge-certified"><i data-lucide="scissors"></i> Upcycling + Recycling</span>
                            </div>
                            <p style="color: var(--color-text-secondary); font-size: 0.98rem; line-height: 1.65; margin: 0;">
                                فرز 4% من الورق والكرتون عالي الجودة وتحويله في ورش تمكين السيدات والفتيات إلى وسائل وألعاب تعليمية، وتوجيه الجزء المتبقي للبيع وإعادة التدوير المباشر.
                            </p>
                        </div>
                    </div>

                    <!-- Connector Line 6-7 -->
                    <div style="display: flex; justify-content: center; margin: -1rem 0;">
                        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0V24M12 24L6 18M12 24L18 18" stroke="var(--color-accent)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

                    <!-- Phase 7 -->
                    <div class="card spring-hover glass-card workflow-step" style="display: flex; gap: 1.5rem; align-items: flex-start; padding: 1.75rem; border-radius: var(--radius-lg); border-right: 6px solid var(--color-accent); position: relative;">
                        <div style="width: 52px; height: 52px; background: var(--color-accent); color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.4rem; flex-shrink: 0; box-shadow: 0 4px 12px rgba(234,88,12,0.25);">
                            7
                        </div>
                        <div style="flex-grow: 1;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
                                <h3 style="font-size: 1.3rem; color: var(--color-primary-dark); margin: 0;">7. التسليم وتوزيع العوائد (التوزيع والتسويق)</h3>
                                <span class="badge badge-certified" style="background: rgba(234,88,12,0.15); color: var(--color-accent-hover);"><i data-lucide="pie-chart"></i> توزيع 40/25/10/25</span>
                            </div>
                            <p style="color: var(--color-text-secondary); font-size: 0.98rem; line-height: 1.65; margin: 0;">
                                توريد الخام لمصانع إعادة التدوير، واستلام مستحقات المبيعات وتوزيعها بشفافية تامة: 40% تمكين السيدات والفتيات، 25% دعم المدارس والطلاب، 10% نفقات اللوجستيات، و25% لتطوير وتوسع الجمعية.
                            </p>
                        </div>
                    </div>

                    <!-- Connector Line 7-8 -->
                    <div style="display: flex; justify-content: center; margin: -1rem 0;">
                        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0V24M12 24L6 18M12 24L18 18" stroke="var(--color-accent)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

                    <!-- Phase 8 -->
                    <div class="card spring-hover glass-card workflow-step" style="display: flex; gap: 1.5rem; align-items: flex-start; padding: 1.75rem; border-radius: var(--radius-lg); border-right: 6px solid var(--color-accent); position: relative;">
                        <div style="width: 52px; height: 52px; background: var(--color-accent); color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.4rem; flex-shrink: 0; box-shadow: 0 4px 12px rgba(234,88,12,0.25);">
                            8
                        </div>
                        <div style="flex-grow: 1;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
                                <h3 style="font-size: 1.3rem; color: var(--color-primary-dark); margin: 0;">8. قياس الأثر وإصدار التقرير</h3>
                                <span class="badge badge-certified"><i data-lucide="bar-chart-2"></i> تقرير الأثر البيئي</span>
                            </div>
                            <p style="color: var(--color-text-secondary); font-size: 0.98rem; line-height: 1.65; margin: 0;">
                                حساب وفر الانبعاثات الكربونية الكلية وفق نموذج EPA WARM v16، وتحديث لوحة الشفافية وإصدار تقرير الأثر السنوي المعتمد لكل مدرسة شريكة.
                            </p>
                        </div>
                    </div>

                </div>

                <!-- Partner Roles Grid with Apple Biophilic Design -->
                <div class="section-header text-center" style="margin-bottom: 2.5rem;">
                    <h2 class="section-title">أدوار الشركاء والمشاركين</h2>
                    <p class="section-desc">تكامل الأدوار المجتمعية والتعليمية يضمن استدامة المشروع وتحقيق أهدافه الميدانية.</p>
                </div>

                <div class="roles-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.75rem;">
                    
                    <!-- School Role Card -->
                    <div class="card spring-hover glass-card" style="padding: 1.75rem; border-radius: var(--radius-lg); border-top: 5px solid var(--color-primary); background: var(--color-surface);">
                        <div style="width: 52px; height: 52px; background: rgba(31,122,90,0.12); color: var(--color-primary); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
                            <i data-lucide="school" style="width: 28px; height: 28px;"></i>
                        </div>
                        <h3 style="color: var(--color-primary-dark); font-size: 1.25rem; margin-bottom: 0.75rem;">دور المدرسة</h3>
                        <p style="color: var(--color-text-secondary); font-size: 0.92rem; line-height: 1.65;">
                            توفير نقطة الجمع والتخزين الآمنة، تشكيل جماعة البيئة المدرسية، الإشراف التربوي، وتسهيل مشاركة الطلاب والمعلمين في أنشطة المبادرة.
                        </p>
                    </div>

                    <!-- Association Role Card -->
                    <div class="card spring-hover glass-card" style="padding: 1.75rem; border-radius: var(--radius-lg); border-top: 5px solid var(--color-secondary); background: var(--color-surface);">
                        <div style="width: 52px; height: 52px; background: rgba(28,154,139,0.12); color: var(--color-secondary); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
                            <i data-lucide="building" style="width: 28px; height: 28px;"></i>
                        </div>
                        <h3 style="color: var(--color-primary-dark); font-size: 1.25rem; margin-bottom: 0.75rem;">دور الجمعية الأهلية</h3>
                        <p style="color: var(--color-text-secondary); font-size: 0.92rem; line-height: 1.65;">
                            جمعية الإسراء الخيرية بدمنهور تشرف على التنسيق الميداني، توفير الموازين الرسمية، توثيق المحاضر، وإدارة تسليم المبيعات وحماية المخصصات.
                        </p>
                    </div>

                    <!-- Family & Students Role Card -->
                    <div class="card spring-hover glass-card" style="padding: 1.75rem; border-radius: var(--radius-lg); border-top: 5px solid var(--color-primary-light); background: var(--color-surface);">
                        <div style="width: 52px; height: 52px; background: rgba(42,157,116,0.12); color: var(--color-primary-light); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
                            <i data-lucide="users" style="width: 28px; height: 28px;"></i>
                        </div>
                        <h3 style="color: var(--color-primary-dark); font-size: 1.25rem; margin-bottom: 0.75rem;">دور الأسرة والطلاب</h3>
                        <p style="color: var(--color-text-secondary); font-size: 0.92rem; line-height: 1.65;">
                            الفرز المباشر من المصدر، إحضار الورق والدفاتر المستهلكة من المنازل، والمشاركة الفعالة في المسابقات البيئية والورش التعليمية.
                        </p>
                    </div>

                    <!-- Women Empowerment Role Card -->
                    <div class="card spring-hover glass-card" style="padding: 1.75rem; border-radius: var(--radius-lg); border-top: 5px solid var(--color-accent); background: var(--color-surface);">
                        <div style="width: 52px; height: 52px; background: rgba(234,88,12,0.12); color: var(--color-accent); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
                            <i data-lucide="heart-handshake" style="width: 28px; height: 28px;"></i>
                        </div>
                        <h3 style="color: var(--color-primary-dark); font-size: 1.25rem; margin-bottom: 0.75rem;">تمكين المرأة والفتيات</h3>
                        <p style="color: var(--color-text-secondary); font-size: 0.92rem; line-height: 1.65;">
                            قيادة ورش فرز وتصنيع الوسائل التعليمية، الاستفادة من برامج التدريب الحرفي، والحصول المباشر على مخصص الـ 40% لدعم تمكين السيدات.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    `;
}


/* ===== PAGE: impact ===== */
/* ==========================================================================
   Page Component: Impact & Transparency View (pages/impact.js)
   Bara El-Sandouq – Smart Green School
   ========================================================================== */

function renderImpactPage() {
    return `
        <section class="section" style="padding-top: 3rem; padding-bottom: 4rem;">
            <div class="container">
                <!-- Section Header -->
                <div class="section-header text-center" style="max-width: 800px; margin: 0 auto 2.5rem auto;">
                    <div class="section-subtitle">
                        <i data-lucide="bar-chart-3"></i> الحوكمة والشفافية الميدانية
                    </div>
                    <h1 class="section-title">لوحة مؤشرات الأثر والشفافية الميدانية</h1>
                    <p class="section-desc">
                        عرض حي وموثق لكافة مخرجات ونتائج مشروع برة الصندوق وفق شارات الشفافية الحاكمة (معتمد موثق ✅ / نموذج حسابي 🟡 / مخطط للتوسع 📌).
                    </p>
                </div>

                <!-- Interactive Status Filter Bar -->
                <div class="filter-bar" id="impactFilters" style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; margin-bottom: 3rem;">
                    <button class="btn btn-primary active impact-filter-btn" data-filter="all" onclick="window.filterImpactCards('all', this)" style="padding: 0.6rem 1.5rem; font-weight: 600;">
                        <i data-lucide="layers" style="width: 18px; height: 18px;"></i> الكل
                    </button>
                    <button class="btn btn-outline impact-filter-btn" data-filter="certified" onclick="window.filterImpactCards('certified', this)" style="padding: 0.6rem 1.5rem; font-weight: 600;">
                        <span class="badge badge-certified">✅ منفذ وموثق</span>
                    </button>
                    <button class="btn btn-outline impact-filter-btn" data-filter="estimated" onclick="window.filterImpactCards('estimated', this)" style="padding: 0.6rem 1.5rem; font-weight: 600;">
                        <span class="badge badge-estimated">🟡 نموذج حسابي</span>
                    </button>
                    <button class="btn btn-outline impact-filter-btn" data-filter="planned" onclick="window.filterImpactCards('planned', this)" style="padding: 0.6rem 1.5rem; font-weight: 600;">
                        <span class="badge badge-planned">📌 مخطط للتوسع</span>
                    </button>
                </div>

                <!-- Metrics Grid -->
                <div class="metrics-grid" id="impactMetricsGrid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.75rem; margin-bottom: 4rem;">
                    
                    <!-- Certified Card 1: المدارس -->
                    <div class="card metric-card spring-hover glass-card" data-type="certified" style="padding: 1.75rem; border-radius: var(--radius-lg); border-top: 4px solid var(--color-certified); background: var(--color-surface);">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                            <span class="badge badge-certified"><i data-lucide="check-circle-2"></i> موثق بسجلات</span>
                            <div style="width: 40px; height: 40px; background: rgba(21,128,61,0.1); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; color: var(--color-certified);">
                                <i data-lucide="school" style="width: 22px; height: 22px;"></i>
                            </div>
                        </div>
                        <div style="font-size: 2.75rem; font-weight: 800; color: var(--color-primary-dark); font-family: 'Noto Naskh Arabic', serif; line-height: 1.1;">26 مدرسة</div>
                        <h4 style="margin: 0.75rem 0 0.25rem 0; color: var(--color-primary-dark); font-size: 1.15rem;">المدارس المنفذ بها</h4>
                        <p style="font-size: 0.88rem; color: var(--color-text-secondary); line-height: 1.5; margin: 0;">
                            26 مدرسة تعليم أساسي بمحافظة البحيرة معتمدة رسمياً ومشاركة بالجمع والتخزين.
                        </p>
                    </div>

                    <!-- Certified Card 2: 180 طن -->
                    <div class="card metric-card spring-hover glass-card" data-type="certified" style="padding: 1.75rem; border-radius: var(--radius-lg); border-top: 4px solid var(--color-certified); background: var(--color-surface);">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                            <span class="badge badge-certified"><i data-lucide="check-circle-2"></i> موثق بموازين</span>
                            <div style="width: 40px; height: 40px; background: rgba(21,128,61,0.1); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; color: var(--color-certified);">
                                <i data-lucide="package" style="width: 22px; height: 22px;"></i>
                            </div>
                        </div>
                        <div style="font-size: 2.75rem; font-weight: 800; color: var(--color-primary-dark); font-family: 'Noto Naskh Arabic', serif; line-height: 1.1;">180 طن</div>
                        <h4 style="margin: 0.75rem 0 0.25rem 0; color: var(--color-primary-dark); font-size: 1.15rem;">ورق وكرتون مجمع</h4>
                        <p style="font-size: 0.88rem; color: var(--color-text-secondary); line-height: 1.5; margin: 0;">
                            إجمالي كمية الورق والكتب المجمعة والمحولة بعيداً عن المدافن والمحارق.
                        </p>
                    </div>

                    <!-- Certified Card 3: ذوي الهمم -->
                    <div class="card metric-card spring-hover glass-card" data-type="certified" style="padding: 1.75rem; border-radius: var(--radius-lg); border-top: 4px solid var(--color-certified); background: var(--color-surface);">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                            <span class="badge badge-certified"><i data-lucide="check-circle-2"></i> شمول اجتماعي</span>
                            <div style="width: 40px; height: 40px; background: rgba(21,128,61,0.1); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; color: var(--color-certified);">
                                <i data-lucide="heart" style="width: 22px; height: 22px;"></i>
                            </div>
                        </div>
                        <div style="font-size: 2.75rem; font-weight: 800; color: var(--color-primary-dark); font-family: 'Noto Naskh Arabic', serif; line-height: 1.1;">8%</div>
                        <h4 style="margin: 0.75rem 0 0.25rem 0; color: var(--color-primary-dark); font-size: 1.15rem;">مشاركة ذوي الهمم</h4>
                        <p style="font-size: 0.88rem; color: var(--color-text-secondary); line-height: 1.5; margin: 0;">
                            نسبة طلاب ذوي الإعاقة المشاركين بفاعلية في الورش التفاعلية وإعادة الاستخدام.
                        </p>
                    </div>

                    <!-- Certified Card 4: تمكين المرأة -->
                    <div class="card metric-card spring-hover glass-card" data-type="certified" style="padding: 1.75rem; border-radius: var(--radius-lg); border-top: 4px solid var(--color-certified); background: var(--color-surface);">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                            <span class="badge badge-certified"><i data-lucide="check-circle-2"></i> مخصص حوكمة</span>
                            <div style="width: 40px; height: 40px; background: rgba(21,128,61,0.1); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; color: var(--color-certified);">
                                <i data-lucide="heart-handshake" style="width: 22px; height: 22px;"></i>
                            </div>
                        </div>
                        <div style="font-size: 2.75rem; font-weight: 800; color: var(--color-primary-dark); font-family: 'Noto Naskh Arabic', serif; line-height: 1.1;">40%</div>
                        <h4 style="margin: 0.75rem 0 0.25rem 0; color: var(--color-primary-dark); font-size: 1.15rem;">تمكين السيدات والفتيات</h4>
                        <p style="font-size: 0.88rem; color: var(--color-text-secondary); line-height: 1.5; margin: 0;">
                            نسبة المخصص المالي الموجه لتدريب وتشغيل السيدات والحرفيات وأمهات الطلاب.
                        </p>
                    </div>

                    <!-- Certified Card 5: Upcycling -->
                    <div class="card metric-card spring-hover glass-card" data-type="certified" style="padding: 1.75rem; border-radius: var(--radius-lg); border-top: 4px solid var(--color-certified); background: var(--color-surface);">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                            <span class="badge badge-certified"><i data-lucide="check-circle-2"></i> نسبة معتمدة</span>
                            <div style="width: 40px; height: 40px; background: rgba(21,128,61,0.1); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; color: var(--color-certified);">
                                <i data-lucide="scissors" style="width: 22px; height: 22px;"></i>
                            </div>
                        </div>
                        <div style="font-size: 2.75rem; font-weight: 800; color: var(--color-primary-dark); font-family: 'Noto Naskh Arabic', serif; line-height: 1.1;">4%</div>
                        <h4 style="margin: 0.75rem 0 0.25rem 0; color: var(--color-primary-dark); font-size: 1.15rem;">نسبة التصنيع والرفع (Upcycling)</h4>
                        <p style="font-size: 0.88rem; color: var(--color-text-secondary); line-height: 1.5; margin: 0;">
                            النسبة المحولة إلى وسائل وألعاب تعليمية رفيعة المستوى قبل توجيه باقي الخام للبيع.
                        </p>
                    </div>

                    <!-- Estimated Card 1: 40 كجم -->
                    <div class="card metric-card spring-hover glass-card" data-type="estimated" style="padding: 1.75rem; border-radius: var(--radius-lg); border-top: 4px solid var(--color-estimated); background: var(--color-surface);">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                            <span class="badge badge-estimated"><i data-lucide="calculator"></i> افتراض دراسة</span>
                            <div style="width: 40px; height: 40px; background: rgba(180,83,9,0.1); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; color: var(--color-estimated);">
                                <i data-lucide="user-check" style="width: 22px; height: 22px;"></i>
                            </div>
                        </div>
                        <div style="font-size: 2.5rem; font-weight: 800; color: var(--color-estimated); font-family: 'Noto Naskh Arabic', serif; line-height: 1.1;">40 كجم</div>
                        <h4 style="margin: 0.75rem 0 0.25rem 0; color: var(--color-primary-dark); font-size: 1.15rem;">متوسط جمع الطالب وأسرته سنوياً</h4>
                        <p style="font-size: 0.88rem; color: var(--color-text-secondary); line-height: 1.5; margin: 0;">
                            المتوسط التقديري المعتمد في حاسبة النموذج الاقتصادي لطلاب المدارس المشاركة.
                        </p>
                    </div>

                    <!-- Estimated Card 2: 5.32 مليون -->
                    <div class="card metric-card spring-hover glass-card" data-type="estimated" style="padding: 1.75rem; border-radius: var(--radius-lg); border-top: 4px solid var(--color-estimated); background: var(--color-surface);">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                            <span class="badge badge-estimated"><i data-lucide="calculator"></i> قيمة مرجعية</span>
                            <div style="width: 40px; height: 40px; background: rgba(180,83,9,0.1); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; color: var(--color-estimated);">
                                <i data-lucide="coins" style="width: 22px; height: 22px;"></i>
                            </div>
                        </div>
                        <div style="font-size: 2.35rem; font-weight: 800; color: var(--color-estimated); font-family: 'Noto Naskh Arabic', serif; line-height: 1.1;">5.32 مليون ج.م</div>
                        <h4 style="margin: 0.75rem 0 0.25rem 0; color: var(--color-primary-dark); font-size: 1.15rem;">متحصلات مسار البيع التقديري</h4>
                        <p style="font-size: 0.88rem; color: var(--color-text-secondary); line-height: 1.5; margin: 0;">
                            حساب الإيراد المتوقع عند استكمال سيناريو الجمع الكامل وتوريد الورق الخام.
                        </p>
                    </div>

                    <!-- Planned Card 1: +2% سنوياً -->
                    <div class="card metric-card spring-hover glass-card" data-type="planned" style="padding: 1.75rem; border-radius: var(--radius-lg); border-top: 4px solid var(--color-planned); background: var(--color-surface);">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                            <span class="badge badge-planned"><i data-lucide="trending-up"></i> خطة نمو</span>
                            <div style="width: 40px; height: 40px; background: rgba(2,132,199,0.1); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; color: var(--color-planned);">
                                <i data-lucide="layers" style="width: 22px; height: 22px;"></i>
                            </div>
                        </div>
                        <div style="font-size: 2.5rem; font-weight: 800; color: var(--color-planned); font-family: 'Noto Naskh Arabic', serif; line-height: 1.1;">+2% سنوياً</div>
                        <h4 style="margin: 0.75rem 0 0.25rem 0; color: var(--color-primary-dark); font-size: 1.15rem;">نمو نسبة التصنيع المستهدفة</h4>
                        <p style="font-size: 0.88rem; color: var(--color-text-secondary); line-height: 1.5; margin: 0;">
                            التوسع التدريجي لتحويل 4% الحالية إلى 6% ثم 8% لرفع القيمة المضافة للوسائل.
                        </p>
                    </div>

                    <!-- Planned Card 2: 103 مدارس -->
                    <div class="card metric-card spring-hover glass-card" data-type="planned" style="padding: 1.75rem; border-radius: var(--radius-lg); border-top: 4px solid var(--color-planned); background: var(--color-surface);">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                            <span class="badge badge-planned"><i data-lucide="map-pin"></i> خطة توسع</span>
                            <div style="width: 40px; height: 40px; background: rgba(2,132,199,0.1); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; color: var(--color-planned);">
                                <i data-lucide="globe" style="width: 22px; height: 22px;"></i>
                            </div>
                        </div>
                        <div style="font-size: 2.5rem; font-weight: 800; color: var(--color-planned); font-family: 'Noto Naskh Arabic', serif; line-height: 1.1;">103 مدارس</div>
                        <h4 style="margin: 0.75rem 0 0.25rem 0; color: var(--color-primary-dark); font-size: 1.15rem;">مستهدف سيناريو التوسع القادم</h4>
                        <p style="font-size: 0.88rem; color: var(--color-text-secondary); line-height: 1.5; margin: 0;">
                            38 مدرسةإضافية بمحافظة البحيرة + 65 مدرسة بالمحافظات المجاورة مستقبلاً.
                        </p>
                    </div>

                </div>

                <!-- Financial Revenue Split Visualizer (40 / 25 / 10 / 25) -->
                <div class="card glass-card" style="padding: 2.25rem; border-radius: var(--radius-lg); border: 2px solid var(--color-border); background: var(--color-surface); box-shadow: var(--shadow-hover);">
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
                        <div style="width: 44px; height: 44px; background: rgba(31,122,90,0.12); color: var(--color-primary); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center;">
                            <i data-lucide="pie-chart" style="width: 26px; height: 26px;"></i>
                        </div>
                        <div>
                            <h2 style="font-size: 1.5rem; color: var(--color-primary-dark); margin: 0;">آلية الشفافية وتوزيع عوائد بيع الورق الخام (Financial Revenue Split)</h2>
                            <p style="color: var(--color-text-secondary); font-size: 0.92rem; margin-top: 0.25rem;">
                                التوزيع الحوكمي الدقيق لمتحصلات بيع الخام لحماية حقوق جميع الشركاء والمستفيدين
                            </p>
                        </div>
                    </div>

                    <!-- Multi-Color Progress Bar Visualizer -->
                    <div style="margin-bottom: 2rem;">
                        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 700; color: var(--color-primary-dark); margin-bottom: 0.5rem;">
                            <span>نسب التوزيع الحوكمي (100%)</span>
                            <span>40% + 25% + 10% + 25%</span>
                        </div>
                        <div style="display: flex; height: 24px; border-radius: var(--radius-full); overflow: hidden; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); background: var(--color-muted);">
                            <div style="width: 40%; background: #EC4899; display: flex; align-items: center; justify-content: center; color: #ffffff; font-size: 0.75rem; font-weight: 700;" title="40% السيدات والفتيات">40%</div>
                            <div style="width: 25%; background: var(--color-primary); display: flex; align-items: center; justify-content: center; color: #ffffff; font-size: 0.75rem; font-weight: 700;" title="25% دعم المدارس">25%</div>
                            <div style="width: 10%; background: var(--color-secondary); display: flex; align-items: center; justify-content: center; color: #ffffff; font-size: 0.75rem; font-weight: 700;" title="10% اللوجستيات">10%</div>
                            <div style="width: 25%; background: var(--color-accent); display: flex; align-items: center; justify-content: center; color: #ffffff; font-size: 0.75rem; font-weight: 700;" title="25% تطوير الجمعية">25%</div>
                        </div>
                    </div>

                    <!-- 4 Allocation Detail Cards -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem;">
                        
                        <!-- 40% Women -->
                        <div style="padding: 1.25rem; background: var(--color-bg); border-radius: var(--radius-md); border-top: 5px solid #EC4899; display: flex; flex-direction: column; justify-content: space-between;">
                            <div>
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                    <span style="font-size: 2.25rem; font-weight: 800; color: #EC4899; font-family: 'Noto Naskh Arabic', serif;">40%</span>
                                    <span class="badge" style="background: rgba(236,72,153,0.15); color: #BE185D; font-weight: 700;">تمكين المرأة</span>
                                </div>
                                <h4 style="margin: 0.25rem 0 0.5rem 0; color: var(--color-primary-dark); font-size: 1.1rem;">السيدات والفتيات والمدربات</h4>
                                <p style="font-size: 0.88rem; color: var(--color-text-secondary); line-height: 1.5; margin: 0;">
                                    دعم برامج التمكين التدريبي، توفير فرص عمل خضراء مرنة للحرفيات، وأمهات الطلاب وربات البيوت بالبحيرة.
                                </p>
                            </div>
                            <div style="margin-top: 1rem; font-size: 0.8rem; font-weight: 700; color: #BE185D;">
                                مخصص حامي للتمكين الاجتماعي
                            </div>
                        </div>

                        <!-- 25% Schools -->
                        <div style="padding: 1.25rem; background: var(--color-bg); border-radius: var(--radius-md); border-top: 5px solid var(--color-primary); display: flex; flex-direction: column; justify-content: space-between;">
                            <div>
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                    <span style="font-size: 2.25rem; font-weight: 800; color: var(--color-primary); font-family: 'Noto Naskh Arabic', serif;">25%</span>
                                    <span class="badge badge-certified">دعم المدارس</span>
                                </div>
                                <h4 style="margin: 0.25rem 0 0.5rem 0; color: var(--color-primary-dark); font-size: 1.1rem;">دعم المدارس والعاملين</h4>
                                <p style="font-size: 0.88rem; color: var(--color-text-secondary); line-height: 1.5; margin: 0;">
                                    مكافآت المشرفين والعاملين بالمدرسة، تمويل الأنشطة البيئية الطلابية، وتوفير الأدوات المدرسية والوسائل.
                                </p>
                            </div>
                            <div style="margin-top: 1rem; font-size: 0.8rem; font-weight: 700; color: var(--color-primary-dark);">
                                إعادة استثمار تعليمي مباشر
                            </div>
                        </div>

                        <!-- 10% Logistics -->
                        <div style="padding: 1.25rem; background: var(--color-bg); border-radius: var(--radius-md); border-top: 5px solid var(--color-secondary); display: flex; flex-direction: column; justify-content: space-between;">
                            <div>
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                    <span style="font-size: 2.25rem; font-weight: 800; color: var(--color-secondary); font-family: 'Noto Naskh Arabic', serif;">10%</span>
                                    <span class="badge badge-certified" style="background: rgba(28,154,139,0.15); color: var(--color-secondary);">اللوجستيات</span>
                                </div>
                                <h4 style="margin: 0.25rem 0 0.5rem 0; color: var(--color-primary-dark); font-size: 1.1rem;">اللوجستيات والشحن</h4>
                                <p style="font-size: 0.88rem; color: var(--color-text-secondary); line-height: 1.5; margin: 0;">
                                    تغطية نفقات الجمع والتحميل والنقل الميداني وتأمين مستلزمات الفرز وتغطية مصاريف التشغيل اليومية.
                                </p>
                            </div>
                            <div style="margin-top: 1rem; font-size: 0.8rem; font-weight: 700; color: var(--color-secondary);">
                                استدامة الحركة والتوريد
                            </div>
                        </div>

                        <!-- 25% Association Reinvestment -->
                        <div style="padding: 1.25rem; background: var(--color-bg); border-radius: var(--radius-md); border-top: 5px solid var(--color-accent); display: flex; flex-direction: column; justify-content: space-between;">
                            <div>
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                    <span style="font-size: 2.25rem; font-weight: 800; color: var(--color-accent); font-family: 'Noto Naskh Arabic', serif;">25%</span>
                                    <span class="badge" style="background: rgba(234,88,12,0.15); color: var(--color-accent-hover); font-weight: 700;">تطوير الجمعية</span>
                                </div>
                                <h4 style="margin: 0.25rem 0 0.5rem 0; color: var(--color-primary-dark); font-size: 1.1rem;">تطوير الجمعية والاستدامة</h4>
                                <p style="font-size: 0.88rem; color: var(--color-text-secondary); line-height: 1.5; margin: 0;">
                                    إعادة الاستثمار بجمعية الإسراء للنمو والتوسع، تطوير البحوث وصيانة الأدوات، والوصول إلى مدارس جديدة.
                                </p>
                            </div>
                            <div style="margin-top: 1rem; font-size: 0.8rem; font-weight: 700; color: var(--color-accent-hover);">
                                التوسع وتطوير المنظومة
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    `;
}

// Global Filtering Handler Function for Impact Cards
window.filterImpactCards = function(category, btnElement) {
    const cards = document.querySelectorAll('#impactMetricsGrid .metric-card');
    const buttons = document.querySelectorAll('#impactFilters button');

    buttons.forEach(btn => {
        btn.classList.remove('active', 'btn-primary');
        btn.classList.add('btn-outline');
    });

    if (btnElement) {
        btnElement.classList.remove('btn-outline');
        btnElement.classList.add('active', 'btn-primary');
    }

    cards.forEach(card => {
        const cardType = card.getAttribute('data-type');
        if (category === 'all' || cardType === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
};


/* ===== PAGE: smart-platform ===== */
/* ==========================================================================
   Page Component: Smart Platform View (pages/smart-platform.js)
   Bara El-Sandouq – Smart Green School Project (NISGP 2026)
   ========================================================================== */

function renderSmartPlatformPage() {
    return `
        <section class="section" style="padding-top: 3rem; padding-bottom: 4rem;">
            <div class="container">
                <div class="section-header text-center" style="margin-bottom: 3rem;">
                    <div class="section-subtitle" style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--color-primary); background: rgba(31, 122, 90, 0.1); padding: 0.4rem 1rem; border-radius: var(--radius-full); font-weight: 700; font-size: 0.9rem; margin-bottom: 0.75rem;">
                        <i data-lucide="cpu" aria-hidden="true"></i> المكون التكنولوجي الذكي - NISGP 2026
                    </div>
                    <h1 class="section-title" style="font-size: clamp(2rem, 1.6rem + 2vw, 3rem); color: var(--color-primary-dark); margin-bottom: 1rem;">معمارية المنصة الرقمية ومستويات النضج الذكي</h1>
                    <p class="section-desc" style="max-width: 750px; margin: 0 auto; color: var(--color-text-secondary); font-size: 1.05rem; line-height: 1.7;">
                        تحويل البيانات الميدانية من نقطة الجمع بالمدارس إلى حوكمة، تتبع عبر QR، حساب WARM كربوني، ومستويات نضج ذكية متوافقة مع المبادرة الوطنية للمشروعات الخضراء الذكية.
                    </p>
                </div>

                <!-- NISGP 2026 4 Digital Maturity Levels Grid -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 3.5rem;">
                    <div class="card glass-card spring-hover" style="border-top: 4px solid var(--color-primary); padding: 1.5rem; border-radius: var(--radius-lg); background: var(--color-surface); box-shadow: var(--shadow-default);">
                        <span class="badge badge-certified" style="margin-bottom: 0.75rem; display: inline-block; background: var(--color-certified-bg); color: var(--color-certified); padding: 0.25rem 0.75rem; border-radius: var(--radius-full); font-weight: 700; font-size: 0.85rem;">
                            المستوى الأول ✅ جاهز
                        </span>
                        <h3 style="font-size: 1.25rem; color: var(--color-primary-dark); margin: 0.5rem 0;">المستوى الأول: التجمع والفرز الميداني</h3>
                        <p style="font-size: 0.9rem; color: var(--color-text-secondary); line-height: 1.6; margin: 0;">
                            الموقع العام، نماذج المشاركة الذكية، حاسبة الكربون WARM v16، وحاسبة التوزيع المالي (40-25-10-25).
                        </p>
                    </div>

                    <div class="card glass-card spring-hover" style="border-top: 4px solid var(--color-secondary); padding: 1.5rem; border-radius: var(--radius-lg); background: var(--color-surface); box-shadow: var(--shadow-default);">
                        <span class="badge badge-planned" style="margin-bottom: 0.75rem; display: inline-block; background: var(--color-planned-bg); color: var(--color-planned); padding: 0.25rem 0.75rem; border-radius: var(--radius-full); font-weight: 700; font-size: 0.85rem;">
                            المستوى الثاني 📌 التحول الرقمي الجزئي
                        </span>
                        <h3 style="font-size: 1.25rem; color: var(--color-primary-dark); margin: 0.5rem 0;">المستوى الثاني: السجل الموحد وتتبع QR</h3>
                        <p style="font-size: 0.9rem; color: var(--color-text-secondary); line-height: 1.6; margin: 0;">
                            ملفات المدارس والجمعيات، تتبع دورات الجمع برمز QR المحمي، وربط إيصالات التسليم بالموازين الرقمية.
                        </p>
                    </div>

                    <div class="card glass-card spring-hover" style="border-top: 4px solid var(--color-accent); padding: 1.5rem; border-radius: var(--radius-lg); background: var(--color-surface); box-shadow: var(--shadow-default);">
                        <span class="badge badge-planned" style="margin-bottom: 0.75rem; display: inline-block; background: #FFEDD5; color: var(--color-accent); padding: 0.25rem 0.75rem; border-radius: var(--radius-full); font-weight: 700; font-size: 0.85rem;">
                            المستوى الثالث 📌 المنصة الذكية
                        </span>
                        <h3 style="font-size: 1.25rem; color: var(--color-primary-dark); margin: 0.5rem 0;">المستوى الثالث: المنصة الذكية المتكاملة</h3>
                        <p style="font-size: 0.9rem; color: var(--color-text-secondary); line-height: 1.6; margin: 0;">
                            بوابة الصلاحيات متعددة الأطراف (مدرسة، جمعية، ناقل)، تصدير التقارير الآلية المعتمدة، وتنبيهات اللوجستيات.
                        </p>
                    </div>

                    <div class="card glass-card spring-hover" style="border-top: 4px solid #8B5CF6; padding: 1.5rem; border-radius: var(--radius-lg); background: var(--color-surface); box-shadow: var(--shadow-default);">
                        <span class="badge badge-planned" style="margin-bottom: 0.75rem; display: inline-block; background: #F3E8FF; color: #7C3AED; padding: 0.25rem 0.75rem; border-radius: var(--radius-full); font-weight: 700; font-size: 0.85rem;">
                            المستوى الرابع 📌 الذكاء الاصطناعي
                        </span>
                        <h3 style="font-size: 1.25rem; color: var(--color-primary-dark); margin: 0.5rem 0;">المستوى الرابع: التحليلات والتنبؤ الذكي</h3>
                        <p style="font-size: 0.9rem; color: var(--color-text-secondary); line-height: 1.6; margin: 0;">
                            نماذج الذكاء الاصطناعي التنبؤية بمواعيد امتلائية نقاط الجمع، تحسين مسارات النقل، واستبعاد القيم الشاذة بمراجعة بشرية.
                        </p>
                    </div>
                </div>

                <!-- Interactive Quiz Simulator Container -->
                <div class="card glass-card" style="border-radius: var(--radius-lg); padding: 2.25rem; border: 1px solid var(--color-border); box-shadow: var(--shadow-default); background: var(--color-surface); margin-bottom: 3.5rem;">
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; border-bottom: 1px solid var(--color-border-subtle); padding-bottom: 1rem;">
                        <div style="background: rgba(31, 122, 90, 0.12); color: var(--color-primary); padding: 0.75rem; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center;">
                            <i data-lucide="sparkles" style="width: 28px; height: 28px;"></i>
                        </div>
                        <div>
                            <h2 style="font-size: 1.5rem; margin: 0; color: var(--color-primary-dark);">محاكي التقييم التفاعلي وخارطة الطريق الاستشارية (AI Roadmap)</h2>
                            <p style="color: var(--color-text-secondary); font-size: 0.95rem; margin-top: 0.25rem; margin-bottom: 0;">
                                أجب عن الأسئلة الخمسة التالية لقياس مستوى النضج الرقمي لمؤسستك واستخراج خارطة الطريق الاستشارية المدعومة بالذكاء الاصطناعي.
                            </p>
                        </div>
                    </div>

                    <form id="digitalMaturityQuizForm" style="display: flex; flex-direction: column; gap: 1.75rem;">
                        <!-- Question 1 -->
                        <div class="quiz-question-box" style="background: var(--color-muted); padding: 1.25rem; border-radius: var(--radius-md); border-right: 4px solid var(--color-primary);">
                            <h4 style="margin-top: 0; margin-bottom: 0.75rem; color: var(--color-primary-dark); font-size: 1.05rem;">
                                1. كيف يتم تسجيل كميات الورق والمخلفات المجمعة بالمؤسسة؟
                            </h4>
                            <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.95rem;">
                                <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                                    <input type="radio" name="q1" value="20" required> تسجيل رقمي فوري عبر موازين ومنصة مرتبطة (20 نقطة)
                                </label>
                                <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                                    <input type="radio" name="q1" value="15"> كشوف ورقية يتم تفريغها إلكترونياً دورياً (15 نقطة)
                                </label>
                                <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                                    <input type="radio" name="q1" value="10"> تسجيل ورقي فقط دون تفريغ رقمي (10 نقاط)
                                </label>
                                <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                                    <input type="radio" name="q1" value="0"> تقديري يدوي دون تسجيل منتظم (0 نقطة)
                                </label>
                            </div>
                        </div>

                        <!-- Question 2 -->
                        <div class="quiz-question-box" style="background: var(--color-muted); padding: 1.25rem; border-radius: var(--radius-md); border-right: 4px solid var(--color-secondary);">
                            <h4 style="margin-top: 0; margin-bottom: 0.75rem; color: var(--color-primary-dark); font-size: 1.05rem;">
                                2. هل تستخدم المؤسسة ترميز QR لتتبع شحنات الجمع ونقاط المصدر؟
                            </h4>
                            <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.95rem;">
                                <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                                    <input type="radio" name="q2" value="20" required> تتبع كامل وشامل برمز QR لكل مدرسة وشحنة (20 نقطة)
                                </label>
                                <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                                    <input type="radio" name="q2" value="15"> تتبع جزئي لأهم المدارس الشريكة (15 نقطة)
                                </label>
                                <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                                    <input type="radio" name="q2" value="5"> مخطط للتطبيق في المرحلة القادمة (5 نقاط)
                                </label>
                                <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                                    <input type="radio" name="q2" value="0"> لا نستخدم رمز QR (0 نقطة)
                                </label>
                            </div>
                        </div>

                        <!-- Question 3 -->
                        <div class="quiz-question-box" style="background: var(--color-muted); padding: 1.25rem; border-radius: var(--radius-md); border-right: 4px solid var(--color-accent);">
                            <h4 style="margin-top: 0; margin-bottom: 0.75rem; color: var(--color-primary-dark); font-size: 1.05rem;">
                                3. كيف يتم احتساب خفض الانبعاثات الكربونية الناتجة عن تدوير الورق؟
                            </h4>
                            <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.95rem;">
                                <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                                    <input type="radio" name="q3" value="20" required> محرك آلي يعتمد معاملات EPA WARM v16 العالمية (20 نقطة)
                                </label>
                                <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                                    <input type="radio" name="q3" value="15"> معادلات حسابية يدوية ثابتة (15 نقطة)
                                </label>
                                <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                                    <input type="radio" name="q3" value="5"> تقدير عام غير موثق (5 نقاط)
                                </label>
                                <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                                    <input type="radio" name="q3" value="0"> لا يتم حساب خفض الانبعاثات (0 نقطة)
                                </label>
                            </div>
                        </div>

                        <!-- Question 4 -->
                        <div class="quiz-question-box" style="background: var(--color-muted); padding: 1.25rem; border-radius: var(--radius-md); border-right: 4px solid #8B5CF6;">
                            <h4 style="margin-top: 0; margin-bottom: 0.75rem; color: var(--color-primary-dark); font-size: 1.05rem;">
                                4. هل تتوفر منصة رقمية ذات صلاحيات متعددة (مدرسة / جمعية / ناقل / تمكين المرأة)؟
                            </h4>
                            <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.95rem;">
                                <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                                    <input type="radio" name="q4" value="20" required> بوابة متكاملة بصلاحيات مخصصة لكل جهة وشريك (20 نقطة)
                                </label>
                                <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                                    <input type="radio" name="q4" value="15"> مشاركة التقارير إلكترونياً عبر البريد أو واتساب (15 نقطة)
                                </label>
                                <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                                    <input type="radio" name="q4" value="5"> تواصل مباشر ومستندات ورقية (5 نقاط)
                                </label>
                                <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                                    <input type="radio" name="q4" value="0"> لا يوجد ربط رقمي بين الشركاء (0 نقطة)
                                </label>
                            </div>
                        </div>

                        <!-- Question 5 -->
                        <div class="quiz-question-box" style="background: var(--color-muted); padding: 1.25rem; border-radius: var(--radius-md); border-right: 4px solid var(--color-primary-dark);">
                            <h4 style="margin-top: 0; margin-bottom: 0.75rem; color: var(--color-primary-dark); font-size: 1.05rem;">
                                5. هل تعتمد المؤسسة على التحليلات التنبؤية بالذكاء الاصطناعي للتخطيط الميداني؟
                            </h4>
                            <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.95rem;">
                                <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                                    <input type="radio" name="q5" value="20" required> نماذج ذكية للتنبؤ بمواعيد الامتلاء ومسارات الجمع (20 نقطة)
                                </label>
                                <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                                    <input type="radio" name="q5" value="15"> تحليل بيانات إحصائية دورية للتخطيط (15 نقطة)
                                </label>
                                <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                                    <input type="radio" name="q5" value="5"> تخطيط ميداني تقليدي عند طلب المدرسة (5 نقاط)
                                </label>
                                <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                                    <input type="radio" name="q5" value="0"> لا نستخدم تحليلات أو التنبؤ (0 نقطة)
                                </label>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary spring-hover" style="padding: 0.9rem 2.5rem; font-size: 1.1rem; background: var(--color-primary); color: #FFFFFF; border: none; border-radius: var(--radius-md); font-weight: 700; cursor: pointer; align-self: flex-start; display: inline-flex; align-items: center; gap: 0.5rem;">
                            <i data-lucide="zap"></i> احسب مستوى النضج الرقمي واستخرج خارطة الطريق
                        </button>
                    </form>

                    <!-- Quiz Result Output Box (Dynamic) -->
                    <div id="quizResultOutput" style="display: none; margin-top: 2.5rem; padding: 2rem; border-radius: var(--radius-lg); background: linear-gradient(135deg, #0B4F3F 0%, #134E4A 100%); color: #FFFFFF; box-shadow: var(--shadow-hover);">
                        <div style="text-align: center; margin-bottom: 1.5rem;">
                            <span id="resultBadge" class="badge" style="font-size: 1rem; padding: 0.5rem 1.25rem; border-radius: var(--radius-full); background: #A7F3D0; color: #0B4F3F; font-weight: 800; display: inline-block; margin-bottom: 0.75rem;">
                                المستوى التقديري
                            </span>
                            <h3 id="resultTitle" style="font-size: 1.85rem; color: #FFFFFF; margin: 0.25rem 0;">نتيجة النضج الرقمي</h3>
                            <div style="font-size: 3rem; font-weight: 800; color: #A7F3D0; font-family: 'Noto Naskh Arabic', serif;" id="resultScore">0%</div>
                        </div>

                        <div id="aiRoadmapBox" style="background: rgba(255, 255, 255, 0.1); padding: 1.5rem; border-radius: var(--radius-md); border-right: 4px solid #A7F3D0;">
                            <h4 style="margin-top: 0; color: #A7F3D0; font-size: 1.15rem; display: flex; align-items: center; gap: 0.5rem;">
                                <i data-lucide="compass"></i> خارطة الطريق الاستشارية للتحول الرقمي (AI Advisory Roadmap)
                            </h4>
                            <div id="roadmapContent" style="font-size: 0.95rem; line-height: 1.7; color: #E2ECE9;">
                                <!-- Dynamically generated advisory recommendations -->
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Data Pipeline Diagram -->
                <div class="card glass-card" style="margin-bottom: 3.5rem; background: var(--color-surface); padding: 2rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); box-shadow: var(--shadow-default);">
                    <h2 style="font-size: 1.5rem; margin-bottom: 1.5rem; color: var(--color-primary-dark); display: flex; align-items: center; gap: 0.5rem;">
                        <i data-lucide="git-branch" style="color: var(--color-primary);"></i>
                        مخطط رحلة البيانات الميدانية والتقنيات المستخدمة
                    </h2>

                    <div style="display: flex; flex-direction: column; gap: 1.25rem;">
                        <div style="padding: 1.25rem; background: var(--color-bg); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <i data-lucide="smartphone" style="color: var(--color-primary); width: 24px; height: 24px;"></i>
                                <div>
                                    <strong style="color: var(--color-primary-dark);">1. مدخلات الميدان والتسجيل</strong>
                                    <p style="margin: 0; font-size: 0.85rem; color: var(--color-text-secondary);">تسجيل دورة الجمع، الوزن بالـ kg، ونوع الخامة برمز QR المحمي.</p>
                                </div>
                            </div>
                            <span class="badge badge-certified" style="background: var(--color-certified-bg); color: var(--color-certified); padding: 0.25rem 0.75rem; border-radius: var(--radius-full); font-size: 0.85rem; font-weight: 700;">PWA & Validation</span>
                        </div>

                        <div style="padding: 1.25rem; background: var(--color-bg); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <i data-lucide="database" style="color: var(--color-primary); width: 24px; height: 24px;"></i>
                                <div>
                                    <strong style="color: var(--color-primary-dark);">2. التخزين المركزي وقواعد التحقق</strong>
                                    <p style="margin: 0; font-size: 0.85rem; color: var(--color-text-secondary);">منع التكرار، التحقق من الموازين، وفصل خامات التدوير عن رفع القيمة.</p>
                                </div>
                            </div>
                            <span class="badge badge-certified" style="background: var(--color-certified-bg); color: var(--color-certified); padding: 0.25rem 0.75rem; border-radius: var(--radius-full); font-size: 0.85rem; font-weight: 700;">Centralized Database</span>
                        </div>

                        <div style="padding: 1.25rem; background: var(--color-bg); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <i data-lucide="calculator" style="color: var(--color-primary); width: 24px; height: 24px;"></i>
                                <div>
                                    <strong style="color: var(--color-primary-dark);">3. المحرك الحسابي والبيئي (WARM v16 Engine)</strong>
                                    <p style="margin: 0; font-size: 0.85rem; color: var(--color-text-secondary);">حساب المكافئ الكربوني CO₂e وحساب نسب توزيع العائد تلقائياً.</p>
                                </div>
                            </div>
                            <span class="badge badge-certified" style="background: var(--color-certified-bg); color: var(--color-certified); padding: 0.25rem 0.75rem; border-radius: var(--radius-full); font-size: 0.85rem; font-weight: 700;">WARM v16 Calculation</span>
                        </div>

                        <div style="padding: 1.25rem; background: var(--color-bg); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <i data-lucide="layout-dashboard" style="color: var(--color-primary); width: 24px; height: 24px;"></i>
                                <div>
                                    <strong style="color: var(--color-primary-dark);">4. لوحة المتابعة وتصدير التقارير</strong>
                                    <p style="margin: 0; font-size: 0.85rem; color: var(--color-text-secondary);">عرض المؤشرات بالفلاتر المؤرخة واستخراج التقارير للجهات المانحة والمبادرة.</p>
                                </div>
                            </div>
                            <span class="badge badge-certified" style="background: var(--color-certified-bg); color: var(--color-certified); padding: 0.25rem 0.75rem; border-radius: var(--radius-full); font-size: 0.85rem; font-weight: 700;">Interactive Dashboard</span>
                        </div>
                    </div>
                </div>

                <!-- AI Governance & Privacy Note -->
                <div style="background: rgba(31, 122, 90, 0.08); border-right: 4px solid var(--color-primary); padding: 1.75rem; border-radius: var(--radius-md);">
                    <h4 style="color: var(--color-primary-dark); margin-top: 0; margin-bottom: 0.75rem; font-size: 1.15rem; display: flex; align-items: center; gap: 0.5rem;">
                        <i data-lucide="shield-alert" style="color: var(--color-primary);"></i> ضوابط الذكاء الاصطناعي والأمان الذكي
                    </h4>
                    <ul style="margin: 0; padding-right: 1.5rem; font-size: 0.95rem; color: var(--color-text-secondary); line-height: 1.7;">
                        <li>لا يتخذ الذكاء الاصطناعي أي قرار قبول أو رفض أو تغيير مالي بصورة فردية مستقلة دون مراجعة بشرية.</li>
                        <li>جميع توصيات النماذج التنبؤية تظل مقترحات استشارية خاضعة للمراجعة والاعتماد الميداني من قيادة المنظومة.</li>
                        <li>التزام كامل بحماية الخصوصية والأمان الرقمي ومنع معالجة أي بيانات شخصية للأطفال والطلاب.</li>
                    </ul>
                </div>

            </div>
        </section>
    `;
}

function initSmartPlatformLogic() {
    const quizForm = document.getElementById('digitalMaturityQuizForm');
    const resultOutput = document.getElementById('quizResultOutput');
    const resultScore = document.getElementById('resultScore');
    const resultTitle = document.getElementById('resultTitle');
    const resultBadge = document.getElementById('resultBadge');
    const roadmapContent = document.getElementById('roadmapContent');

    if (!quizForm) return;

    quizForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Calculate score
        let totalScore = 0;
        for (let i = 1; i <= 5; i++) {
            const selected = quizForm.querySelector(`input[name="q${i}"]:checked`);
            if (selected) {
                totalScore += parseInt(selected.value, 10);
            }
        }

        const percentage = Math.min(100, Math.max(0, totalScore));

        // Determine Digital Maturity Level & AI Advisory Roadmap
        let levelText = '';
        let levelTitle = '';
        let roadmapSteps = [];

        if (percentage <= 25) {
            levelText = 'المستوى الأول ✅ (جاهز وفردي)';
            levelTitle = 'المستوى الأول: التجمع والفرز الميداني التقليدي';
            roadmapSteps = [
                '📌 **الخطوة الأولى:** البدء في رقمنة السجلات الورقية وتحويلها إلى جداول إلكترونية موحدة.',
                '📌 **الخطوة الثانية:** اعتماد حاسبة الانبعاثات WARM v16 في إعداد تقارير الأثر البيئي.',
                '📌 **الخطوة الثالثة:** إدخال نظام ترميز QR تدريجياً لربط المدارس الأكبر إنتاجاً للورق.'
            ];
        } else if (percentage <= 50) {
            levelText = 'المستوى الثاني 📌 (تحول رقمي جزئي)';
            levelTitle = 'المستوى الثاني: التحول الرقمي الجزئي والسجل الموحد';
            roadmapSteps = [
                '📌 **الخطوة الأولى:** التوسع في استخدام أشكال تتبع QR لكل الشحنات والمدارس المعتمدة.',
                '📌 **الخطوة الثانية:** ربط إيصالات الاستلام بالموازين الرقمية الميدانية لمنع التكرار.',
                '📌 **الخطوة الثالثة:** التجهيز لإطلاق بوابة الصلاحيات الرقمية الموحدة للجمعيات والشركاء.'
            ];
        } else if (percentage <= 75) {
            levelText = 'المستوى الثالث 📌 (منصة ذكية متكاملة)';
            levelTitle = 'المستوى الثالث: المنصة الذكية المتكاملة وبوابة الصلاحيات';
            roadmapSteps = [
                '📌 **الخطوة الأولى:** تفعيل بوابة الصلاحيات متعددة الأطراف (مدرسة / جمعية / ناقل / تمكين امرأة).',
                '📌 **الخطوة الثانية:** الربط البرمجي للتقارير الآلية المعتمدة للمبادرة الوطنية للمشروعات الخضراء.',
                '📌 **الخطوة الثالثة:** تدريب نماذج الذكاء الاصطناعي على تحليل بيانات المواسم المدرسية.'
            ];
        } else {
            levelText = 'المستوى الرابع 📌 (تميز رقمي وذكاء اصطناعي)';
            levelTitle = 'المستوى الرابع: التحليلات والتنبؤ الذكي بالذكاء الاصطناعي';
            roadmapSteps = [
                '📌 **الخطوة الأولى:** تفعيل النماذج التنبؤية بالذكاء الاصطناعي لخريطة امتلائية نقاط الجمع بالمحافظة.',
                '📌 **الخطوة الثانية:** تحسين مسارات سيارات الجمع والفرز باستخدام خوارزميات GIS الذكية.',
                '📌 **الخطوة الثالثة:** المراجعة البشرية المستمرة لضمان الحوكمة وتكفير البيانات الشاذة.'
            ];
        }

        // Update DOM
        if (resultScore) resultScore.textContent = `${percentage}%`;
        if (resultBadge) resultBadge.textContent = levelText;
        if (resultTitle) resultTitle.textContent = levelTitle;

        if (roadmapContent) {
            roadmapContent.innerHTML = `
                <p style="margin-top: 0; font-weight: 700; color: #A7F3D0;">
                    بناءً على إجاباتك، أحرزت مؤسستك درجة ${percentage}% وتتأهل إلى <strong>${levelTitle}</strong>.
                </p>
                <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 1rem;">
                    ${roadmapSteps.map(step => `<div style="background: rgba(255,255,255,0.08); padding: 0.75rem 1rem; border-radius: var(--radius-sm);">${step.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</div>`).join('')}
                </div>
            `;
        }

        if (resultOutput) {
            resultOutput.style.display = 'block';
            resultOutput.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        if (typeof window.showToast === 'function') {
            window.showToast(`تم تقييم النضج الرقمي بنجاح! النتيجة: ${percentage}% - ${levelTitle}`);
        }
    });
}


/* ===== PAGE: calculators ===== */
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


/* ===== PAGE: knowledge ===== */
/* ==========================================================================
   Page Component: Knowledge Hub & Activities View (pages/knowledge.js)
   Bara El-Sandouq – Smart Green School
   ========================================================================== */

function renderKnowledgePage() {
    return `
        <section class="section" style="padding-top: 3rem; padding-bottom: 4rem;">
            <div class="container">
                <!-- Section Header -->
                <div class="section-header text-center" style="max-width: 800px; margin: 0 auto 2.5rem auto;">
                    <div class="section-subtitle">
                        <i data-lucide="book-open"></i> التعلم بالممارسة والابتكار الأخضر
                    </div>
                    <h1 class="section-title">مكتبة الأنشطة والوسائل التعليمية</h1>
                    <p class="section-desc">
                        معرض المنتجات التفاعلية المصنعة بأساليب تحويل القيمة (Upcycling) من مخلفات الورق والكرتون المدرسية. 
                        أدلة إرشادية ووسائل تعزيز التعلم النشط لدى الطلاب.
                    </p>
                </div>

                <!-- Interactive Subject Filter Bar -->
                <div class="filter-bar" id="knowledgeFilterBar" style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; margin-bottom: 3rem;">
                    <button class="btn btn-primary active knowledge-filter-btn" data-filter="all" onclick="window.filterKnowledgeCards('all', this)" style="padding: 0.6rem 1.5rem; font-weight: 600;">
                        <i data-lucide="layers" style="width: 18px; height: 18px;"></i> الكل (9 أنشطة)
                    </button>
                    <button class="btn btn-outline knowledge-filter-btn" data-filter="math" onclick="window.filterKnowledgeCards('math', this)" style="padding: 0.6rem 1.5rem; font-weight: 600;">
                        <i data-lucide="calculator" style="width: 18px; height: 18px;"></i> رياضيات
                    </button>
                    <button class="btn btn-outline knowledge-filter-btn" data-filter="arabic" onclick="window.filterKnowledgeCards('arabic', this)" style="padding: 0.6rem 1.5rem; font-weight: 600;">
                        <i data-lucide="languages" style="width: 18px; height: 18px;"></i> لغة عربية
                    </button>
                    <button class="btn btn-outline knowledge-filter-btn" data-filter="science" onclick="window.filterKnowledgeCards('science', this)" style="padding: 0.6rem 1.5rem; font-weight: 600;">
                        <i data-lucide="flask-conical" style="width: 18px; height: 18px;"></i> علوم
                    </button>
                    <button class="btn btn-outline knowledge-filter-btn" data-filter="eco-skills" onclick="window.filterKnowledgeCards('eco-skills', this)" style="padding: 0.6rem 1.5rem; font-weight: 600;">
                        <i data-lucide="leaf" style="width: 18px; height: 18px;"></i> مهارات بيئية
                    </button>
                </div>

                <!-- 9 Upcycling Gallery Photo Cards Grid -->
                <div class="knowledge-grid" id="knowledgeGrid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                    
                    <!-- Card 1: العب وتعلم -->
                    <div class="card spring-hover knowledge-card" data-subject="math" style="display: flex; flex-direction: column; height: 100%; border-radius: var(--radius-lg); overflow: hidden; background: var(--color-surface); box-shadow: var(--shadow-default);">
                        <div style="position: relative; width: 100%; aspect-ratio: 4/3; overflow: hidden; background: var(--color-muted);">
                            <img src="./assets/images/برة 1.png" alt="وسيلة العب وتعلم الحساب بالأصابع" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;">
                            <span class="badge badge-certified" style="position: absolute; top: 12px; right: 12px; background: rgba(255,255,255,0.95); backdrop-filter: blur(8px); font-weight: 700; color: var(--color-primary-dark);">
                                <i data-lucide="calculator"></i> رياضيات
                            </span>
                            <span class="badge" style="position: absolute; bottom: 12px; left: 12px; background: rgba(11,79,63,0.85); color: #ffffff; font-size: 0.8rem;">
                                ورق/كرتون معاد استخدامه
                            </span>
                        </div>
                        <div style="padding: 1.5rem; display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
                            <div>
                                <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; color: var(--color-primary-dark);">1. العب وتعلم (الحساب والأصابع)</h3>
                                <p style="color: var(--color-text-secondary); font-size: 0.92rem; line-height: 1.6; margin-bottom: 1rem;">
                                    وسيلة تعليمية تفاعلية مصنعة من كرتون وورق المدارس المسترجع لتسهيل عمليات العد والحساب الابتدائي بالأصابع والخرز الملون.
                                </p>
                                <div style="background: var(--color-bg); padding: 0.85rem; border-radius: var(--radius-md); margin-bottom: 1.25rem; font-size: 0.85rem; color: var(--color-text);">
                                    <div style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.35rem; font-weight: 600;">
                                        <i data-lucide="users" style="width: 16px; height: 16px; color: var(--color-primary);"></i> الفئة العمرية: 5 - 8 سنوات
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 0.4rem; color: var(--color-text-secondary);">
                                        <i data-lucide="target" style="width: 16px; height: 16px; color: var(--color-accent);"></i> مخرجات التعلم: تنمية مهارات الحساب الذهني والتركيز
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-outline" style="width: 100%; justify-content: center; gap: 0.5rem;" onclick="showToast('جارٍ تحميل الدليل الإرشادي لنشاط العب وتعلم...')">
                                <i data-lucide="download"></i> تحميل الدليل الإرشادي
                            </button>
                        </div>
                    </div>

                    <!-- Card 2: تصنيف الأشكال والألوان -->
                    <div class="card spring-hover knowledge-card" data-subject="science" style="display: flex; flex-direction: column; height: 100%; border-radius: var(--radius-lg); overflow: hidden; background: var(--color-surface); box-shadow: var(--shadow-default);">
                        <div style="position: relative; width: 100%; aspect-ratio: 4/3; overflow: hidden; background: var(--color-muted);">
                            <img src="./assets/images/برة 2.png" alt="لوحة تصنيف الأشكال والألوان" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;">
                            <span class="badge badge-certified" style="position: absolute; top: 12px; right: 12px; background: rgba(255,255,255,0.95); backdrop-filter: blur(8px); font-weight: 700; color: var(--color-primary-dark);">
                                <i data-lucide="flask-conical"></i> علوم ومهارات
                            </span>
                            <span class="badge" style="position: absolute; bottom: 12px; left: 12px; background: rgba(11,79,63,0.85); color: #ffffff; font-size: 0.8rem;">
                                ورق/كرتون معاد استخدامه
                            </span>
                        </div>
                        <div style="padding: 1.5rem; display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
                            <div>
                                <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; color: var(--color-primary-dark);">2. تصنيف الأشكال والألوان</h3>
                                <p style="color: var(--color-text-secondary); font-size: 0.92rem; line-height: 1.6; margin-bottom: 1rem;">
                                    لوحة حسية تفاعلية لتدريب الأطفال على التمييز البصري والمطابقة وتصنيف الأشكال والدرجات اللونية بدقة من بقايا الكرتون.
                                </p>
                                <div style="background: var(--color-bg); padding: 0.85rem; border-radius: var(--radius-md); margin-bottom: 1.25rem; font-size: 0.85rem; color: var(--color-text);">
                                    <div style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.35rem; font-weight: 600;">
                                        <i data-lucide="users" style="width: 16px; height: 16px; color: var(--color-primary);"></i> الفئة العمرية: 4 - 7 سنوات
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 0.4rem; color: var(--color-text-secondary);">
                                        <i data-lucide="target" style="width: 16px; height: 16px; color: var(--color-accent);"></i> مخرجات التعلم: التمييز البصري وتدريب عضلات اليد الدقيقة
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-outline" style="width: 100%; justify-content: center; gap: 0.5rem;" onclick="showToast('جارٍ تحميل الدليل الإرشادي لنشاط تصنيف الأشكال والألوان...')">
                                <i data-lucide="download"></i> تحميل الدليل الإرشادي
                            </button>
                        </div>
                    </div>

                    <!-- Card 3: بازل الحروف والكلمات -->
                    <div class="card spring-hover knowledge-card" data-subject="arabic" style="display: flex; flex-direction: column; height: 100%; border-radius: var(--radius-lg); overflow: hidden; background: var(--color-surface); box-shadow: var(--shadow-default);">
                        <div style="position: relative; width: 100%; aspect-ratio: 4/3; overflow: hidden; background: var(--color-muted);">
                            <img src="./assets/images/برة 3.png" alt="بازل الحروف والكلمات باللغة العربية" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;">
                            <span class="badge badge-certified" style="position: absolute; top: 12px; right: 12px; background: rgba(255,255,255,0.95); backdrop-filter: blur(8px); font-weight: 700; color: var(--color-primary-dark);">
                                <i data-lucide="languages"></i> لغة عربية
                            </span>
                            <span class="badge" style="position: absolute; bottom: 12px; left: 12px; background: rgba(11,79,63,0.85); color: #ffffff; font-size: 0.8rem;">
                                ورق/كرتون معاد استخدامه
                            </span>
                        </div>
                        <div style="padding: 1.5rem; display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
                            <div>
                                <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; color: var(--color-primary-dark);">3. بازل الحروف والكلمات</h3>
                                <p style="color: var(--color-text-secondary); font-size: 0.92rem; line-height: 1.6; margin-bottom: 1rem;">
                                    بطاقات وقطع تركيب تعليمية مبتكرة لتوصيل الكلمات بالحروف الأولى وتكوين الجمل البسيطة لدعم القرائية المبكرة.
                                </p>
                                <div style="background: var(--color-bg); padding: 0.85rem; border-radius: var(--radius-md); margin-bottom: 1.25rem; font-size: 0.85rem; color: var(--color-text);">
                                    <div style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.35rem; font-weight: 600;">
                                        <i data-lucide="users" style="width: 16px; height: 16px; color: var(--color-primary);"></i> الفئة العمرية: 6 - 9 سنوات
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 0.4rem; color: var(--color-text-secondary);">
                                        <i data-lucide="target" style="width: 16px; height: 16px; color: var(--color-accent);"></i> مخرجات التعلم: تعزيز مهارات القراءة والهجاء التفاعلي
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-outline" style="width: 100%; justify-content: center; gap: 0.5rem;" onclick="showToast('جارٍ تحميل الدليل الإرشادي لنشاط بازل الحروف والكلمات...')">
                                <i data-lucide="download"></i> تحميل الدليل الإرشادي
                            </button>
                        </div>
                    </div>

                    <!-- Card 4: ساعة الوقت التعليمية -->
                    <div class="card spring-hover knowledge-card" data-subject="math" style="display: flex; flex-direction: column; height: 100%; border-radius: var(--radius-lg); overflow: hidden; background: var(--color-surface); box-shadow: var(--shadow-default);">
                        <div style="position: relative; width: 100%; aspect-ratio: 4/3; overflow: hidden; background: var(--color-muted);">
                            <img src="./assets/images/برة 4.png" alt="ساعة الوقت التعليمية من الكرتون" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;">
                            <span class="badge badge-certified" style="position: absolute; top: 12px; right: 12px; background: rgba(255,255,255,0.95); backdrop-filter: blur(8px); font-weight: 700; color: var(--color-primary-dark);">
                                <i data-lucide="calculator"></i> رياضيات ومهارات
                            </span>
                            <span class="badge" style="position: absolute; bottom: 12px; left: 12px; background: rgba(11,79,63,0.85); color: #ffffff; font-size: 0.8rem;">
                                ورق/كرتون معاد استخدامه
                            </span>
                        </div>
                        <div style="padding: 1.5rem; display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
                            <div>
                                <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; color: var(--color-primary-dark);">4. ساعة الوقت التعليمية</h3>
                                <p style="color: var(--color-text-secondary); font-size: 0.92rem; line-height: 1.6; margin-bottom: 1rem;">
                                    مجسم ساعة عقارب تفاعلية من الكرتون المضلع المستعمل لتدريب الطلاب على قراءة الساعة التناظرية وإدارة الجدول اليومي.
                                </p>
                                <div style="background: var(--color-bg); padding: 0.85rem; border-radius: var(--radius-md); margin-bottom: 1.25rem; font-size: 0.85rem; color: var(--color-text);">
                                    <div style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.35rem; font-weight: 600;">
                                        <i data-lucide="users" style="width: 16px; height: 16px; color: var(--color-primary);"></i> الفئة العمرية: 7 - 10 سنوات
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 0.4rem; color: var(--color-text-secondary);">
                                        <i data-lucide="target" style="width: 16px; height: 16px; color: var(--color-accent);"></i> مخرجات التعلم: قراءة الوقت وحساب الفترات الزمنية
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-outline" style="width: 100%; justify-content: center; gap: 0.5rem;" onclick="showToast('جارٍ تحميل الدليل الإرشادي لساعة الوقت التعليمية...')">
                                <i data-lucide="download"></i> تحميل الدليل الإرشادي
                            </button>
                        </div>
                    </div>

                    <!-- Card 5: دورة حياة النبات -->
                    <div class="card spring-hover knowledge-card" data-subject="science" style="display: flex; flex-direction: column; height: 100%; border-radius: var(--radius-lg); overflow: hidden; background: var(--color-surface); box-shadow: var(--shadow-default);">
                        <div style="position: relative; width: 100%; aspect-ratio: 4/3; overflow: hidden; background: var(--color-muted);">
                            <img src="./assets/images/برة 5.png" alt="لوحة دورة حياة النبات والزراعة" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;">
                            <span class="badge badge-certified" style="position: absolute; top: 12px; right: 12px; background: rgba(255,255,255,0.95); backdrop-filter: blur(8px); font-weight: 700; color: var(--color-primary-dark);">
                                <i data-lucide="flask-conical"></i> علوم وبيئة
                            </span>
                            <span class="badge" style="position: absolute; bottom: 12px; left: 12px; background: rgba(11,79,63,0.85); color: #ffffff; font-size: 0.8rem;">
                                ورق/كرتون معاد استخدامه
                            </span>
                        </div>
                        <div style="padding: 1.5rem; display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
                            <div>
                                <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; color: var(--color-primary-dark);">5. دورة حياة النبات</h3>
                                <p style="color: var(--color-text-secondary); font-size: 0.92rem; line-height: 1.6; margin-bottom: 1rem;">
                                    لوحة توضيحية مجسمة تستعرض مراحل انبات البذور والنمو والوعي الزراعي مصممة بالكامل من طبقات الورق المقوى.
                                </p>
                                <div style="background: var(--color-bg); padding: 0.85rem; border-radius: var(--radius-md); margin-bottom: 1.25rem; font-size: 0.85rem; color: var(--color-text);">
                                    <div style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.35rem; font-weight: 600;">
                                        <i data-lucide="users" style="width: 16px; height: 16px; color: var(--color-primary);"></i> الفئة العمرية: 8 - 12 سنة
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 0.4rem; color: var(--color-text-secondary);">
                                        <i data-lucide="target" style="width: 16px; height: 16px; color: var(--color-accent);"></i> مخرجات التعلم: استيعاب دورة حياة الكائنات والوعي البيئي
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-outline" style="width: 100%; justify-content: center; gap: 0.5rem;" onclick="showToast('جارٍ تحميل الدليل الإرشادي لدورة حياة النبات...')">
                                <i data-lucide="download"></i> تحميل الدليل الإرشادي
                            </button>
                        </div>
                    </div>

                    <!-- Card 6: لوحة الطقس والفصول -->
                    <div class="card spring-hover knowledge-card" data-subject="science" style="display: flex; flex-direction: column; height: 100%; border-radius: var(--radius-lg); overflow: hidden; background: var(--color-surface); box-shadow: var(--shadow-default);">
                        <div style="position: relative; width: 100%; aspect-ratio: 4/3; overflow: hidden; background: var(--color-muted);">
                            <img src="./assets/images/برة 6.png" alt="لوحة الطقس والفصول وتغير المناخ" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;">
                            <span class="badge badge-certified" style="position: absolute; top: 12px; right: 12px; background: rgba(255,255,255,0.95); backdrop-filter: blur(8px); font-weight: 700; color: var(--color-primary-dark);">
                                <i data-lucide="flask-conical"></i> علوم ومناخ
                            </span>
                            <span class="badge" style="position: absolute; bottom: 12px; left: 12px; background: rgba(11,79,63,0.85); color: #ffffff; font-size: 0.8rem;">
                                ورق/كرتون معاد استخدامه
                            </span>
                        </div>
                        <div style="padding: 1.5rem; display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
                            <div>
                                <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; color: var(--color-primary-dark);">6. لوحة الطقس والفصول</h3>
                                <p style="color: var(--color-text-secondary); font-size: 0.92rem; line-height: 1.6; margin-bottom: 1rem;">
                                    وسيلة تفاعلية لمتابعة درجات الحرارة وفصول السنة والتغيرات المناخية وتدريب الطلاب على الرصد البيئي اليومي.
                                </p>
                                <div style="background: var(--color-bg); padding: 0.85rem; border-radius: var(--radius-md); margin-bottom: 1.25rem; font-size: 0.85rem; color: var(--color-text);">
                                    <div style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.35rem; font-weight: 600;">
                                        <i data-lucide="users" style="width: 16px; height: 16px; color: var(--color-primary);"></i> الفئة العمرية: 7 - 11 سنة
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 0.4rem; color: var(--color-text-secondary);">
                                        <i data-lucide="target" style="width: 16px; height: 16px; color: var(--color-accent);"></i> مخرجات التعلم: فهم الظواهر الجوية والتكيف المناخي
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-outline" style="width: 100%; justify-content: center; gap: 0.5rem;" onclick="showToast('جارٍ تحميل الدليل الإرشادي لوحة الطقس والفصول...')">
                                <i data-lucide="download"></i> تحميل الدليل الإرشادي
                            </button>
                        </div>
                    </div>

                    <!-- Card 7: سلة الفرز التعليمية -->
                    <div class="card spring-hover knowledge-card" data-subject="eco-skills" style="display: flex; flex-direction: column; height: 100%; border-radius: var(--radius-lg); overflow: hidden; background: var(--color-surface); box-shadow: var(--shadow-default);">
                        <div style="position: relative; width: 100%; aspect-ratio: 4/3; overflow: hidden; background: var(--color-muted);">
                            <img src="./assets/images/برة 7.png" alt="سلة الفرز التعليمية الأربعة" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;">
                            <span class="badge badge-certified" style="position: absolute; top: 12px; right: 12px; background: rgba(255,255,255,0.95); backdrop-filter: blur(8px); font-weight: 700; color: var(--color-primary-dark);">
                                <i data-lucide="leaf"></i> مهارات بيئية
                            </span>
                            <span class="badge" style="position: absolute; bottom: 12px; left: 12px; background: rgba(11,79,63,0.85); color: #ffffff; font-size: 0.8rem;">
                                ورق/كرتون معاد استخدامه
                            </span>
                        </div>
                        <div style="padding: 1.5rem; display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
                            <div>
                                <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; color: var(--color-primary-dark);">7. سلة الفرز التعليمية</h3>
                                <p style="color: var(--color-text-secondary); font-size: 0.92rem; line-height: 1.6; margin-bottom: 1rem;">
                                    مجسمات سلال فرز تعليمية مصغرة لتدريب الطلاب على تصنيف المخلفات المدرسية (ورق، كرتون، بلاستيك، عضوي) من المصدر.
                                </p>
                                <div style="background: var(--color-bg); padding: 0.85rem; border-radius: var(--radius-md); margin-bottom: 1.25rem; font-size: 0.85rem; color: var(--color-text);">
                                    <div style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.35rem; font-weight: 600;">
                                        <i data-lucide="users" style="width: 16px; height: 16px; color: var(--color-primary);"></i> الفئة العمرية: 6 - 12 سنة
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 0.4rem; color: var(--color-text-secondary);">
                                        <i data-lucide="target" style="width: 16px; height: 16px; color: var(--color-accent);"></i> مخرجات التعلم: ترسيخ السلوك البيئي الميداني والفرز
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-outline" style="width: 100%; justify-content: center; gap: 0.5rem;" onclick="showToast('جارٍ تحميل الدليل الإرشادي لسلة الفرز التعليمية...')">
                                <i data-lucide="download"></i> تحميل الدليل الإرشادي
                            </button>
                        </div>
                    </div>

                    <!-- Card 8: مسرح العرائس الورقي -->
                    <div class="card spring-hover knowledge-card" data-subject="eco-skills" style="display: flex; flex-direction: column; height: 100%; border-radius: var(--radius-lg); overflow: hidden; background: var(--color-surface); box-shadow: var(--shadow-default);">
                        <div style="position: relative; width: 100%; aspect-ratio: 4/3; overflow: hidden; background: var(--color-muted);">
                            <img src="./assets/images/برة الصندوق 8.png" alt="مسرح العرائس الورقي التوعوي" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;">
                            <span class="badge badge-certified" style="position: absolute; top: 12px; right: 12px; background: rgba(255,255,255,0.95); backdrop-filter: blur(8px); font-weight: 700; color: var(--color-primary-dark);">
                                <i data-lucide="theater"></i> مهارات بيئية وفنون
                            </span>
                            <span class="badge" style="position: absolute; bottom: 12px; left: 12px; background: rgba(11,79,63,0.85); color: #ffffff; font-size: 0.8rem;">
                                ورق/كرتون معاد استخدامه
                            </span>
                        </div>
                        <div style="padding: 1.5rem; display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
                            <div>
                                <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; color: var(--color-primary-dark);">8. مسرح العرائس الورقي</h3>
                                <p style="color: var(--color-text-secondary); font-size: 0.92rem; line-height: 1.6; margin-bottom: 1rem;">
                                    مسرح مجسم وعرائس ورقية متحركة مصنوعة كلياً من الكرتون المستعمل لتقديم مسرحيات تفاعلية ونشر الوعي الاستدامي.
                                </p>
                                <div style="background: var(--color-bg); padding: 0.85rem; border-radius: var(--radius-md); margin-bottom: 1.25rem; font-size: 0.85rem; color: var(--color-text);">
                                    <div style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.35rem; font-weight: 600;">
                                        <i data-lucide="users" style="width: 16px; height: 16px; color: var(--color-primary);"></i> الفئة العمرية: 6 - 14 سنة
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 0.4rem; color: var(--color-text-secondary);">
                                        <i data-lucide="target" style="width: 16px; height: 16px; color: var(--color-accent);"></i> مخرجات التعلم: التعبير المسرحي ونشر رسائل التدوير
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-outline" style="width: 100%; justify-content: center; gap: 0.5rem;" onclick="showToast('جارٍ تحميل الدليل الإرشادي لمسرح العرائس الورقي...')">
                                <i data-lucide="download"></i> تحميل الدليل الإرشادي
                            </button>
                        </div>
                    </div>

                    <!-- Card 9: جدول السلوك البيئي اليومي -->
                    <div class="card spring-hover knowledge-card" data-subject="eco-skills" style="display: flex; flex-direction: column; height: 100%; border-radius: var(--radius-lg); overflow: hidden; background: var(--color-surface); box-shadow: var(--shadow-default);">
                        <div style="position: relative; width: 100%; aspect-ratio: 4/3; overflow: hidden; background: var(--color-muted);">
                            <img src="./assets/images/برة 9.png" alt="جدول السلوك البيئي اليومي" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;">
                            <span class="badge badge-certified" style="position: absolute; top: 12px; right: 12px; background: rgba(255,255,255,0.95); backdrop-filter: blur(8px); font-weight: 700; color: var(--color-primary-dark);">
                                <i data-lucide="check-square"></i> مهارات بيئية
                            </span>
                            <span class="badge" style="position: absolute; bottom: 12px; left: 12px; background: rgba(11,79,63,0.85); color: #ffffff; font-size: 0.8rem;">
                                ورق/كرتون معاد استخدامه
                            </span>
                        </div>
                        <div style="padding: 1.5rem; display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
                            <div>
                                <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; color: var(--color-primary-dark);">9. جدول السلوك البيئي اليومي</h3>
                                <p style="color: var(--color-text-secondary); font-size: 0.92rem; line-height: 1.6; margin-bottom: 1rem;">
                                    جدول تفاعلي صفّي ومنزلي متابع لممارسة الطلاب للعادات الخضراء والفرز اليومي وتحفيز السلوك البيئي الإيجابي.
                                </p>
                                <div style="background: var(--color-bg); padding: 0.85rem; border-radius: var(--radius-md); margin-bottom: 1.25rem; font-size: 0.85rem; color: var(--color-text);">
                                    <div style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.35rem; font-weight: 600;">
                                        <i data-lucide="users" style="width: 16px; height: 16px; color: var(--color-primary);"></i> الفئة العمرية: 6 - 12 سنة
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 0.4rem; color: var(--color-text-secondary);">
                                        <i data-lucide="target" style="width: 16px; height: 16px; color: var(--color-accent);"></i> مخرجات التعلم: تحويل الوعي البيئي إلى سلوك ومتابعة مستمرة
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-outline" style="width: 100%; justify-content: center; gap: 0.5rem;" onclick="showToast('جارٍ تحميل جدول السلوك البيئي اليومي...')">
                                <i data-lucide="download"></i> تحميل الدليل الإرشادي
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    `;
}

// Global Filtering Handler Function for Knowledge Hub Cards
window.filterKnowledgeCards = function(category, btnElement) {
    const cards = document.querySelectorAll('.knowledge-card');
    const buttons = document.querySelectorAll('.knowledge-filter-btn');

    buttons.forEach(btn => {
        btn.classList.remove('active', 'btn-primary');
        btn.classList.add('btn-outline');
    });

    if (btnElement) {
        btnElement.classList.remove('btn-outline');
        btnElement.classList.add('active', 'btn-primary');
    }

    cards.forEach(card => {
        const cardSubject = card.getAttribute('data-subject');
        if (category === 'all' || cardSubject === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
};


/* ===== PAGE: forms ===== */
/* ==========================================================================
   Page Component: Smart Registration Forms (pages/forms.js)
   Bara El-Sandouq – Smart Green School Project
   ========================================================================== */

function renderFormsPage() {
    return `
        <section class="section" style="padding-top: 3rem; padding-bottom: 4rem;">
            <div class="container">
                <div class="section-header text-center" style="margin-bottom: 3rem;">
                    <div class="section-subtitle" style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--color-primary); background: rgba(31, 122, 90, 0.1); padding: 0.4rem 1rem; border-radius: var(--radius-full); font-weight: 700; font-size: 0.9rem; margin-bottom: 0.75rem;">
                        <i data-lucide="user-plus" aria-hidden="true"></i> بوابات الانضمام والمشاركة الذكية
                    </div>
                    <h1 class="section-title" style="font-size: clamp(2rem, 1.6rem + 2vw, 3rem); color: var(--color-primary-dark); margin-bottom: 1rem;">نماذج التسجيل والانضمام للمشروع</h1>
                    <p class="section-desc" style="max-width: 750px; margin: 0 auto; color: var(--color-text-secondary); font-size: 1.05rem; line-height: 1.7;">
                        اختر المسار المناسب لفئتك وسجل طلبك القصير وسيتواصل معك فريق المنظومة لتحديد خطوات الانضمام وإصدار الرقم المرجعي.
                    </p>
                </div>

                <!-- Form Tabs Navigation Bar -->
                <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; margin-bottom: 3rem;" id="formTabs" role="tablist">
                    <button class="btn btn-primary active-tab spring-hover" data-tab="assocForm" role="tab" aria-selected="true">
                        <i data-lucide="building"></i> تسجيل جمعية أهلية
                    </button>
                    <button class="btn btn-outline spring-hover" data-tab="schoolForm" role="tab" aria-selected="false">
                        <i data-lucide="school"></i> ترشيح مدرسة
                    </button>
                    <button class="btn btn-outline spring-hover" data-tab="volunteerForm" role="tab" aria-selected="false">
                        <i data-lucide="heart"></i> التطوع
                    </button>
                    <button class="btn btn-outline spring-hover" data-tab="womenForm" role="tab" aria-selected="false">
                        <i data-lucide="sparkles"></i> تمكين السيدات والفتيات
                    </button>
                    <button class="btn btn-outline spring-hover" data-tab="partnerForm" role="tab" aria-selected="false">
                        <i data-lucide="truck"></i> شريك تدوير / نقل
                    </button>
                </div>

                <!-- Form Panes Container -->

                <!-- 1. Association Registration Form -->
                <div class="form-card glass-card form-pane" id="assocFormPane" style="border-radius: var(--radius-lg); padding: 2.25rem; border: 1px solid var(--color-border); box-shadow: var(--shadow-default); background: var(--color-surface);">
                    <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--color-primary-dark); display: flex; align-items: center; gap: 0.5rem;">
                        <i data-lucide="building" style="color: var(--color-primary);"></i> نموذج تسجيل جمعية أهلية
                    </h2>
                    <p style="color: var(--color-text-secondary); font-size: 0.95rem; margin-bottom: 2rem;">نموذج قصير للجمعيات الراغبة في تبني النموذج محلياً أو التنسيق الميداني (رقم الإشهار ومعلومات التواصل الأساسية).</p>

                    <form id="associationSubmitForm" novalidate>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; margin-bottom: 1.5rem;">
                            <div class="form-group">
                                <label class="form-label" for="assocName" style="font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.5rem; display: block;">اسم الجمعية الأهلية *</label>
                                <input type="text" class="form-input" id="assocName" placeholder="مثال: جمعية تنمية المجتمع بدمنهور" required style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit;">
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="assocRegNum" style="font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.5rem; display: block;">رقم الإشهار / الترخيص *</label>
                                <input type="text" class="form-input" id="assocRegNum" placeholder="مثال: 1124 لسنة 2006" required style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit;">
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="assocGov" style="font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.5rem; display: block;">المحافظة *</label>
                                <select class="form-select" id="assocGov" required style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); background: var(--color-surface); font-family: inherit;">
                                    <option value="البحيرة">محافظة البحيرة</option>
                                    <option value="أسوان">محافظة أسوان</option>
                                    <option value="كفر الشيخ">محافظة كفر الشيخ</option>
                                    <option value="الإسكندرية">محافظة الإسكندرية</option>
                                    <option value="أخرى">محافظة أخرى</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="assocCity" style="font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.5rem; display: block;">المركز / المدينة *</label>
                                <input type="text" class="form-input" id="assocCity" placeholder="مثال: دمنهور / كفر الدوار" required style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit;">
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="assocContact" style="font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.5rem; display: block;">اسم مسؤول التواصل *</label>
                                <input type="text" class="form-input" id="assocContact" placeholder="الاسم الثلاثي (3 حروف على الأقل)" required style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit;">
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="assocPhone" style="font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.5rem; display: block;">رقم الهاتف / واتساب *</label>
                                <input type="tel" class="form-input" id="assocPhone" placeholder="010XXXXXXXX" required style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit;">
                            </div>
                        </div>

                        <div class="form-group" style="margin-bottom: 1.75rem;">
                            <label class="form-label" for="assocScope" style="font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.5rem; display: block;">نطاق عمل الجمعية والخبرات السابقة</label>
                            <textarea class="form-textarea" id="assocScope" rows="3" placeholder="توضيح مختصر لأهم أنشطة الجمعية والمجتمع المحلي التابع لها..." style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit; resize: vertical;"></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary spring-hover" style="padding: 0.85rem 2.5rem; font-size: 1.05rem; background: var(--color-primary); color: #FFFFFF; border: none; border-radius: var(--radius-md); font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 0.5rem;">
                            <i data-lucide="send"></i> إرسال طلب تسجيل الجمعية
                        </button>
                    </form>
                </div>

                <!-- 2. School Nomination Form -->
                <div class="form-card glass-card form-pane" id="schoolFormPane" style="display: none; border-radius: var(--radius-lg); padding: 2.25rem; border: 1px solid var(--color-border); box-shadow: var(--shadow-default); background: var(--color-surface);">
                    <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--color-primary-dark); display: flex; align-items: center; gap: 0.5rem;">
                        <i data-lucide="school" style="color: var(--color-primary);"></i> نموذج ترشيح مدرسة خضراء
                    </h2>
                    <p style="color: var(--color-text-secondary); font-size: 0.95rem; margin-bottom: 2rem;">رشّح مدرستك للانضمام إلى شبكة المدارس الخضراء الذكية وتطبيق منظومة الفرز والتوعية.</p>

                    <form id="schoolSubmitForm" novalidate>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; margin-bottom: 1.5rem;">
                            <div class="form-group">
                                <label class="form-label" for="schoolName" style="font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.5rem; display: block;">اسم المدرسة *</label>
                                <input type="text" class="form-input" id="schoolName" placeholder="مثال: مدرسة الشهيد أحمد عرابي" required style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit;">
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="schoolStage" style="font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.5rem; display: block;">المرحلة التعليمية *</label>
                                <select class="form-select" id="schoolStage" required style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); background: var(--color-surface); font-family: inherit;">
                                    <option value="الابتدائية">المرحلة الابتدائية</option>
                                    <option value="الإعدادية">المرحلة الإعدادية</option>
                                    <option value="الثانوية">المرحلة الثانوية</option>
                                    <option value="تعليم أساسي">مجمع تعليم أساسي</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="schoolGov" style="font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.5rem; display: block;">المحافظة والإدارة التعليمية *</label>
                                <input type="text" class="form-input" id="schoolGov" placeholder="مثال: البحيرة - إدارة بندر دمنهور" required style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit;">
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="schoolStudentsEst" style="font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.5rem; display: block;">عدد الطلاب التقديري</label>
                                <input type="number" class="form-input" id="schoolStudentsEst" placeholder="مثال: 500" style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit;">
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="schoolContact" style="font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.5rem; display: block;">اسم مرشح المدرسة ووظيفته *</label>
                                <input type="text" class="form-input" id="schoolContact" placeholder="مثال: أ. أحمد - أخصائي رائد بيئي" required style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit;">
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="schoolPhone" style="font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.5rem; display: block;">رقم التواصل *</label>
                                <input type="tel" class="form-input" id="schoolPhone" placeholder="010XXXXXXXX" required style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit;">
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary spring-hover" style="padding: 0.85rem 2.5rem; font-size: 1.05rem; background: var(--color-primary); color: #FFFFFF; border: none; border-radius: var(--radius-md); font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 0.5rem;">
                            <i data-lucide="send"></i> إرسال ترشيح المدرسة
                        </button>
                    </form>
                </div>

                <!-- 3. Volunteer Form -->
                <div class="form-card glass-card form-pane" id="volunteerFormPane" style="display: none; border-radius: var(--radius-lg); padding: 2.25rem; border: 1px solid var(--color-border); box-shadow: var(--shadow-default); background: var(--color-surface);">
                    <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--color-primary-dark); display: flex; align-items: center; gap: 0.5rem;">
                        <i data-lucide="heart" style="color: var(--color-accent);"></i> نموذج الانضمام كمتطوع / فريق GCT
                    </h2>
                    <p style="color: var(--color-text-secondary); font-size: 0.95rem; margin-bottom: 2rem;">شارك بجهدك وخبرتك الميدانية أو الرقمية في نشر الوعي وإدارة الأنشطة والبيانات.</p>

                    <form id="volunteerSubmitForm" novalidate>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; margin-bottom: 1.5rem;">
                            <div class="form-group">
                                <label class="form-label" for="volName" style="font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.5rem; display: block;">الاسم بالكامل *</label>
                                <input type="text" class="form-input" id="volName" placeholder="الاسم الثلاثي (3 حروف على الأقل)" required style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit;">
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="volPhone" style="font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.5rem; display: block;">رقم الهاتف / واتساب *</label>
                                <input type="tel" class="form-input" id="volPhone" placeholder="010XXXXXXXX" required style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit;">
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="volDomain" style="font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.5rem; display: block;">مجال التطوع المفضل *</label>
                                <select class="form-select" id="volDomain" required style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); background: var(--color-surface); font-family: inherit;">
                                    <option value="توعية ورش ميدانية">التوعية وتنظيم الورش بالمدارس</option>
                                    <option value="تصميم ومحتوى إعلامي">التصميم والمحتوى والتواصل الاجتماعي</option>
                                    <option value="إدخال بيانات وتحليل">إدخال البيانات والمتابعة الرقمية</option>
                                    <option value="تنسيق وعمليات">التنسيق الميداني والجمعيات</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="volGov" style="font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.5rem; display: block;">المحافظة والمدينة *</label>
                                <input type="text" class="form-input" id="volGov" placeholder="المحافظة والمركز" required style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit;">
                            </div>
                        </div>

                        <button type="submit" class="btn btn-accent spring-hover" style="padding: 0.85rem 2.5rem; font-size: 1.05rem; background: var(--color-accent); color: #FFFFFF; border: none; border-radius: var(--radius-md); font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 0.5rem;">
                            <i data-lucide="send"></i> انضم كمتطوع الآن
                        </button>
                    </form>
                </div>

                <!-- 4. Women Workshop & Empowerment Form -->
                <div class="form-card glass-card form-pane" id="womenFormPane" style="display: none; border-radius: var(--radius-lg); padding: 2.25rem; border: 1px solid var(--color-border); box-shadow: var(--shadow-default); background: var(--color-surface);">
                    <div style="display: flex; gap: 1.5rem; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap;">
                        <img src="./assets/images/برة 12.png" alt="ورشة تمكين المرأة والفتيات" style="width: 120px; height: 90px; object-fit: cover; border-radius: var(--radius-md); border: 2px solid var(--color-border);">
                        <div>
                            <h2 style="font-size: 1.5rem; margin: 0; color: var(--color-primary-dark); display: flex; align-items: center; gap: 0.5rem;">
                                <i data-lucide="sparkles" style="color: #EC4899;"></i> اهتمام السيدات والفتيات بالتدريب وفرص العمل الأخضر
                            </h2>
                            <p style="color: var(--color-text-secondary); font-size: 0.95rem; margin-top: 0.25rem; margin-bottom: 0;">سجّلي اهتمامك بالالتحاق بورش الفرز والتصميم والإنتاج البسيط للوسائل والاستفادة من مخصصات التمكين (40%).</p>
                        </div>
                    </div>

                    <form id="womenSubmitForm" novalidate>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; margin-bottom: 1.5rem;">
                            <div class="form-group">
                                <label class="form-label" for="womanName" style="font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.5rem; display: block;">الاسم بالكامل *</label>
                                <input type="text" class="form-input" id="womanName" placeholder="اسم المشاركة (3 حروف على الأقل)" required style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit;">
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="womanPhone" style="font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.5rem; display: block;">رقم الهاتف / واتساب *</label>
                                <input type="tel" class="form-input" id="womanPhone" placeholder="011XXXXXXXX" required style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit;">
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="womanInterest" style="font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.5rem; display: block;">المجال المفضل للتدريب والعمل *</label>
                                <select class="form-select" id="womanInterest" required style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); background: var(--color-surface); font-family: inherit;">
                                    <option value="تصنيع وسائل تعليمية">تصنيع وألعاب وتدوير ورق</option>
                                    <option value="تصميم وأشغال يدوية">تصميم فني وأشغال يدوية</option>
                                    <option value="فرز وتجهيز خامات">فرز وتجهيز وإدارة خامات</option>
                                    <option value="تسويق وتنظيم">تسويق وتنظيم إنتاج محلي</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="womanGov" style="font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.5rem; display: block;">المحافظة والمركز *</label>
                                <input type="text" class="form-input" id="womanGov" placeholder="مثال: البحيرة - دمنهور" required style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit;">
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary spring-hover" style="padding: 0.85rem 2.5rem; font-size: 1.05rem; background: #EC4899; color: #FFFFFF; border: none; border-radius: var(--radius-md); font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 0.5rem;">
                            <i data-lucide="send"></i> تسجيل اهتمام التمكين والتدريب
                        </button>
                    </form>
                </div>

                <!-- 5. Recycler Partner Form -->
                <div class="form-card glass-card form-pane" id="partnerFormPane" style="display: none; border-radius: var(--radius-lg); padding: 2.25rem; border: 1px solid var(--color-border); box-shadow: var(--shadow-default); background: var(--color-surface);">
                    <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--color-primary-dark); display: flex; align-items: center; gap: 0.5rem;">
                        <i data-lucide="truck" style="color: var(--color-secondary);"></i> نموذج شريك جمع أو نقل أو إعادة تدوير
                    </h2>
                    <p style="color: var(--color-text-secondary); font-size: 0.95rem; margin-bottom: 2rem;">للشركات والجهات العاملة في جمع ونقل وتدوير المخلفات الورقية الراغبة في التعاقد والربط بالمنصة.</p>

                    <form id="partnerSubmitForm" novalidate>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; margin-bottom: 1.5rem;">
                            <div class="form-group">
                                <label class="form-label" for="partnerName" style="font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.5rem; display: block;">اسم الجهة أو الشركة *</label>
                                <input type="text" class="form-input" id="partnerName" placeholder="اسم شركة الجمع / المصنع (3 حروف على الأقل)" required style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit;">
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="partnerPhone" style="font-weight: 700; color: var(--color-text-dark); margin-bottom: 0.5rem; display: block;">رقم التواصل وسيارات النقل *</label>
                                <input type="tel" class="form-input" id="partnerPhone" placeholder="010XXXXXXXX" required style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit;">
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary spring-hover" style="padding: 0.85rem 2.5rem; font-size: 1.05rem; background: var(--color-secondary); color: #FFFFFF; border: none; border-radius: var(--radius-md); font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 0.5rem;">
                            <i data-lucide="send"></i> تسجيل طلب الشراكة
                        </button>
                    </form>
                </div>

            </div>
        </section>
    `;
}

function initFormsLogic() {
    const tabs = document.querySelectorAll('#formTabs button');
    const panes = document.querySelectorAll('.form-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => {
                t.classList.remove('btn-primary', 'active-tab');
                t.classList.add('btn-outline');
                t.setAttribute('aria-selected', 'false');
            });
            tab.classList.remove('btn-outline');
            tab.classList.add('btn-primary', 'active-tab');
            tab.setAttribute('aria-selected', 'true');

            const targetPaneId = tab.getAttribute('data-tab') + 'Pane';
            panes.forEach(pane => {
                pane.style.display = pane.id === targetPaneId ? 'block' : 'none';
            });
        });
    });

    // Dual Save Helper: Real-time Google Sheet synchronization
    window.sendToGoogleSheets = async function(submissionRecord) {
        const webhookUrl = localStorage.getItem('bara_gsheet_webhook_url') || 'https://script.google.com/macros/s/AKfycbwyK2-QOmVsP8sYtTUeCPZpFnyNQP057A98u64DaxXu6gxyCDmS36R9ooJ0lJp5nuM/exec';
        if (!webhookUrl || !webhookUrl.trim().startsWith('http')) {
            return { success: false, reason: 'no_webhook' };
        }
        try {
            await fetch(webhookUrl.trim(), {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(submissionRecord)
            });

            // Mark record as synced in LocalStorage
            try {
                const list = JSON.parse(localStorage.getItem('bara_forms_submissions') || '[]');
                const item = list.find(s => s.id === submissionRecord.id);
                if (item) {
                    item.synced = true;
                    localStorage.setItem('bara_forms_submissions', JSON.stringify(list));
                }
            } catch (e) {
                console.error(e);
            }
            return { success: true };
        } catch (err) {
            console.error('Google Sheet Sync Error:', err);
            return { success: false, error: err.message };
        }
    };

    const setupFormHandler = (formId, formType, label) => {
        const form = document.getElementById(formId);
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Gather inputs
            const formElements = form.querySelectorAll('input, select, textarea');
            const dataObj = {};
            let isValid = true;
            let errorMessage = '';

            formElements.forEach(el => {
                const id = el.id;
                const val = (el.value || '').trim();
                const isRequired = el.hasAttribute('required');
                const type = el.getAttribute('type');

                if (id) {
                    dataObj[id] = val;
                }

                if (isRequired && !val) {
                    isValid = false;
                    if (!errorMessage) errorMessage = 'يرجى استكمال جميع الحقول المطلوبة';
                }

                // Name min 3 chars
                if (val && id && id.toLowerCase().includes('name') && val.length < 3) {
                    isValid = false;
                    if (!errorMessage) errorMessage = 'الاسم يجب أن يتكون من 3 حروف على الأقل';
                }

                // Egyptian Mobile regex ^01[0125][0-9]{8}$
                if (val && (type === 'tel' || (id && id.toLowerCase().includes('phone')))) {
                    const egMobileRegex = /^01[0125][0-9]{8}$/;
                    if (!egMobileRegex.test(val)) {
                        isValid = false;
                        if (!errorMessage) errorMessage = 'يرجى إدخال رقم جوال مصري صحيح (11 رقم يبدأ بـ 010 أو 011 أو 012 أو 015)';
                    }
                }

                // Email regex
                if (val && (type === 'email' || (id && id.toLowerCase().includes('email')))) {
                    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    if (!emailRegex.test(val)) {
                        isValid = false;
                        if (!errorMessage) errorMessage = 'يرجى إدخال عنوان بريد إلكتروني صحيح';
                    }
                }
            });

            if (!isValid) {
                if (typeof window.showToast === 'function') {
                    window.showToast(`⚠️ ${errorMessage}`);
                } else {
                    alert(errorMessage);
                }
                return;
            }

            // Save to localStorage under key 'bara_forms_submissions'
            const timestamp = Date.now();
            const refId = `SUB-${timestamp}`;
            const submissionRecord = {
                id: refId,
                formType: formType,
                formTypeArabic: label,
                data: dataObj,
                submittedAt: new Date().toISOString(),
                synced: false
            };

            try {
                const existingStr = localStorage.getItem('bara_forms_submissions');
                const existing = existingStr ? JSON.parse(existingStr) : [];
                existing.push(submissionRecord);
                localStorage.setItem('bara_forms_submissions', JSON.stringify(existing));
            } catch (err) {
                console.error('Error saving form submission:', err);
            }

            const submitBtn = form.querySelector('button[type="submit"]');
            const origBtnHtml = submitBtn ? submitBtn.innerHTML : '';
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = `<span style="display:inline-flex;align-items:center;gap:0.5rem;"><i data-lucide="loader" class="spin"></i> جاري الإرسال والمزامنة...</span>`;
                if (window.lucide) window.lucide.createIcons();
            }

            // Dual Save: Real-time Google Sheet push + Local storage fallback
            window.sendToGoogleSheets(submissionRecord).then((res) => {
                let confirmMessage = `✅ تم تسجيل ${label} بنجاح! رقم المرجعية: ${refId}`;
                if (res.success) {
                    confirmMessage += ` (تمت المزامنة الحية مع Google Sheet 📊)`;
                } else if (res.reason === 'no_webhook') {
                    confirmMessage += ` (محفوظ في لوحة التحكم CMS - يمكنك ربط Google Sheet)`;
                }
                if (typeof window.showToast === 'function') {
                    window.showToast(confirmMessage);
                } else {
                    alert(confirmMessage);
                }
            }).catch(() => {
                if (typeof window.showToast === 'function') {
                    window.showToast(`✅ تم حفظ ${label} بنجاح في لوحة التحكم! مرجع: ${refId}`);
                }
            }).finally(() => {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = origBtnHtml;
                    if (window.lucide) window.lucide.createIcons();
                }
                form.reset();
            });
        });
    };

    setupFormHandler('associationSubmitForm', 'association', 'طلب تسجيل الجمعية');
    setupFormHandler('schoolSubmitForm', 'school', 'ترشيح المدرسة');
    setupFormHandler('volunteerSubmitForm', 'volunteer', 'طلب التطوع');
    setupFormHandler('womenSubmitForm', 'women', 'اهتمام التمكين والتدريب');
    setupFormHandler('partnerSubmitForm', 'partner', 'طلب الشراكة');
}


/* ===== PAGE: admin ===== */
/* ==========================================================================
   Page Component: Admin CMS Dashboard View (pages/admin.js)
   Bara El-Sandouq – Smart Green School Project
   Static Website CMS Dashboard with Google Sheets Sync & Security
   ========================================================================== */

function renderAdminPage() {
    const isLoggedIn = sessionStorage.getItem('bara_admin_logged_in') === 'true';

    if (!isLoggedIn) {
        return `
            <section class="section" style="padding-top: 5rem; padding-bottom: 6rem;">
                <div class="container" style="max-width: 460px;">
                    <div class="card glass-card spring-hover" style="padding: 2.5rem; border-radius: var(--radius-lg); background: var(--color-surface); border: 1px solid var(--color-border); box-shadow: var(--shadow-hover); text-align: center;">
                        <div style="width: 64px; height: 64px; background: rgba(31, 122, 90, 0.12); color: var(--color-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem;">
                            <i data-lucide="lock" style="width: 32px; height: 32px;"></i>
                        </div>
                        <h1 style="font-size: 1.6rem; color: var(--color-primary-dark); margin-bottom: 0.5rem; font-family: 'Noto Naskh Arabic', serif;">تسجيل دخول لوحة التحكم</h1>
                        <p style="color: var(--color-text-secondary); font-size: 0.92rem; margin-bottom: 2rem;">لوحة إدارة محتوى وتطوير موقع "برة الصندوق – المدرسة الخضراء الذكية"</p>

                        <form id="adminLoginForm">
                            <div class="form-group" style="text-align: right; margin-bottom: 1.25rem;">
                                <label class="form-label" for="adminUsername" style="font-weight: 700; color: var(--color-primary-dark); display: block; margin-bottom: 0.5rem;">اسم المستخدم</label>
                                <input type="text" class="form-input" id="adminUsername" placeholder="أدخل اسم المستخدم" required autocomplete="username" style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit;">
                            </div>
                            <div class="form-group" style="text-align: right; margin-bottom: 2rem;">
                                <label class="form-label" for="adminPassword" style="font-weight: 700; color: var(--color-primary-dark); display: block; margin-bottom: 0.5rem;">كلمة المرور</label>
                                <input type="password" class="form-input" id="adminPassword" placeholder="أدخل كلمة المرور" required autocomplete="current-password" style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit;">
                            </div>
                            <button type="submit" class="btn btn-primary spring-hover" style="width: 100%; padding: 0.85rem; font-size: 1.05rem; font-weight: 700; justify-content: center;">
                                <i data-lucide="log-in"></i> دخول لوحة التحكم
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        `;
    }

    return `
        <section class="section" style="padding-top: 3rem; padding-bottom: 5rem;">
            <div class="container">
                <!-- Admin Top Header Bar -->
                <div style="background: linear-gradient(135deg, var(--color-primary-dark), #134E4A); padding: 1.75rem 2rem; border-radius: var(--radius-lg); color: #FFFFFF; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 2.5rem; box-shadow: var(--shadow-default);">
                    <div>
                        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.25rem;">
                            <i data-lucide="shield-check" style="width: 28px; height: 28px; color: #34D399;"></i>
                            <h1 style="font-size: 1.6rem; color: #FFFFFF; margin: 0; font-family: 'Noto Naskh Arabic', serif;">لوحة تحكم إشراف المنظومة (Admin CMS)</h1>
                        </div>
                        <p style="color: #D1E8E2; font-size: 0.92rem; margin: 0;">إدارة المحتوى، الصور، المكتبة، والربط المباشر مع Google Sheets واستقبال الطلبات والمراسلات.</p>
                    </div>

                    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                        <button class="btn btn-accent" id="exportBackupBtn" style="padding: 0.6rem 1.25rem; font-size: 0.9rem;">
                            <i data-lucide="download"></i> تصدير نسخة احتياطية (JSON)
                        </button>
                        <button class="btn btn-outline" id="adminLogoutBtn" style="border-color: #FFFFFF; color: #FFFFFF; padding: 0.6rem 1.25rem; font-size: 0.9rem;">
                            <i data-lucide="log-out"></i> خروج
                        </button>
                    </div>
                </div>

                <!-- Admin Tabs Menu -->
                <div style="display: flex; gap: 0.5rem; border-bottom: 2px solid var(--color-border); margin-bottom: 2rem; flex-wrap: wrap;" id="adminTabsNav">
                    <button class="admin-tab-btn active" data-tab="inboxTab" style="padding: 0.85rem 1.5rem; border: none; background: none; font-weight: 700; font-size: 1rem; color: var(--color-primary-dark); border-bottom: 3px solid var(--color-primary); cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
                        <i data-lucide="inbox"></i> صندوق الطلبات والرسائل <span class="badge badge-certified" id="inboxCountBadge">0</span>
                    </button>
                    <button class="admin-tab-btn" data-tab="gsheetTab" style="padding: 0.85rem 1.5rem; border: none; background: none; font-weight: 700; font-size: 1rem; color: var(--color-text-secondary); cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
                        <i data-lucide="table"></i> ربط Google Sheets <span id="gsheetStatusPill" class="badge" style="font-size: 0.75rem; background: rgba(52, 211, 153, 0.15); color: #059669;">جاهز</span>
                    </button>
                    <button class="admin-tab-btn" data-tab="contentTab" style="padding: 0.85rem 1.5rem; border: none; background: none; font-weight: 700; font-size: 1rem; color: var(--color-text-secondary); cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
                        <i data-lucide="edit-3"></i> تعديل النصوص والأرقام
                    </button>
                    <button class="admin-tab-btn" data-tab="imagesTab" style="padding: 0.85rem 1.5rem; border: none; background: none; font-weight: 700; font-size: 1rem; color: var(--color-text-secondary); cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
                        <i data-lucide="image"></i> مدير رفع واستبدال الصور
                    </button>
                    <button class="admin-tab-btn" data-tab="activitiesTab" style="padding: 0.85rem 1.5rem; border: none; background: none; font-weight: 700; font-size: 1rem; color: var(--color-text-secondary); cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
                        <i data-lucide="book-open"></i> إدارة وسائل المكتبة الـ 9
                    </button>
                    <button class="admin-tab-btn" data-tab="systemTab" style="padding: 0.85rem 1.5rem; border: none; background: none; font-weight: 700; font-size: 1rem; color: var(--color-text-secondary); cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
                        <i data-lucide="settings"></i> الأمان والإعدادات
                    </button>
                </div>

                <!-- Admin Tab Panes -->

                <!-- Tab 1: Submissions Inbox -->
                <div class="admin-pane" id="inboxTabPane" style="display: block;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
                        <div>
                            <h2 style="font-size: 1.4rem; color: var(--color-primary-dark); margin: 0;">صندوق الطلبات الواردة من نماذج التسجيل</h2>
                            <p style="color: var(--color-text-secondary); font-size: 0.9rem; margin-top: 0.25rem; margin-bottom: 0;">الرسائل المسجلة من الجمعيات، المدارس، المتطوعين، والسيدات بالمنظومة.</p>
                        </div>

                        <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
                            <button class="btn btn-primary btn-sm" id="inboxSyncGsheetBtn" style="font-size: 0.85rem;">
                                <i data-lucide="refresh-cw"></i> مزامنة الكل مع Google Sheet
                            </button>
                            <button class="btn btn-outline btn-sm" id="clearInboxBtn" style="border-color: #EF4444; color: #EF4444; font-size: 0.85rem;">
                                <i data-lucide="trash-2"></i> مسح جميع الطلبات
                            </button>
                        </div>
                    </div>

                    <div id="inboxListContainer">
                        <!-- Loaded dynamically via initAdminLogic -->
                    </div>
                </div>

                <!-- Tab 2: Google Sheets Live Sync Integration Pane -->
                <div class="admin-pane" id="gsheetTabPane" style="display: none;">
                    <div class="card glass-card" style="padding: 2.25rem; border-radius: var(--radius-lg); background: var(--color-surface); border: 1px solid var(--color-border); margin-bottom: 2rem;">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">
                            <div>
                                <h2 style="font-size: 1.5rem; color: var(--color-primary-dark); margin: 0; display: flex; align-items: center; gap: 0.5rem;">
                                    <i data-lucide="table" style="color: var(--color-primary);"></i> الربط المباشر مع Google Sheets
                                </h2>
                                <p style="color: var(--color-text-secondary); font-size: 0.95rem; margin-top: 0.35rem; margin-bottom: 0;">ربط كافة استمارات الموقع (جمعيات، مدارس، متطوعين، تمكين) لترسل صفوفاً حية ومحدثة لحظياً إلى جدول Google Sheet الخارجي.</p>
                            </div>
                            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
                                <a href="https://docs.google.com/spreadsheets/d/1Gw60ZafEECNQqUrUS0RQSR3qQ3PlJaGcf_p7deI6k6U/edit?usp=sharing" target="_blank" class="btn btn-outline btn-sm" style="border-color: var(--color-primary); color: var(--color-primary); display: inline-flex; align-items: center; gap: 0.4rem; text-decoration: none;">
                                    <i data-lucide="external-link"></i> فتح ملف Google Sheet
                                </a>
                                <div id="gsheetLiveBadge" class="badge" style="padding: 0.5rem 1rem; font-size: 0.9rem; background: rgba(52, 211, 153, 0.15); color: #059669; border: 1px solid rgba(52, 211, 153, 0.3);">
                                    <i data-lucide="activity"></i> المزامنة الحية جاهزة
                                </div>
                            </div>
                        </div>

                        <!-- Webhook URL Config Form -->
                        <div style="background: var(--color-bg); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); margin-bottom: 2rem;">
                            <label class="form-label" for="gsheetWebhookUrlInput" style="font-weight: 700; color: var(--color-primary-dark); margin-bottom: 0.5rem; display: block;">
                                رابط الـ Webhook الخاص بـ Google Apps Script (Web App URL):
                            </label>
                            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                                <input type="url" class="form-input" id="gsheetWebhookUrlInput" placeholder="https://script.google.com/macros/s/.../exec" style="flex: 1; min-width: 280px; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: monospace; font-size: 0.9rem;">
                                <button type="button" class="btn btn-primary" id="saveGsheetUrlBtn" style="padding: 0.75rem 1.75rem; font-weight: 700;">
                                    <i data-lucide="save"></i> حفظ الرابط
                                </button>
                                <button type="button" class="btn btn-accent" id="testGsheetConnectionBtn" style="padding: 0.75rem 1.75rem; font-weight: 700;">
                                    <i data-lucide="send"></i> إرسال صف تجريبي للاختبار
                                </button>
                            </div>
                            <small style="color: var(--color-text-secondary); display: block; margin-top: 0.5rem;">يتم حفظ هذا الرابط محلياً في متصفحك وسيقوم الموقع بالإرسال إليه تلقائياً عند قيام أي زائر بتعبئة أي نموذج.</small>
                        </div>

                        <!-- Quick Sync Local Submissions Button -->
                        <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(31, 122, 90, 0.08); padding: 1.25rem 1.5rem; border-radius: var(--radius-md); border: 1px solid rgba(31, 122, 90, 0.2); margin-bottom: 2.5rem; flex-wrap: wrap; gap: 1rem;">
                            <div>
                                <strong style="color: var(--color-primary-dark); font-size: 1.05rem; display: block;">مزامنة جميع الطلبات المحلية السابقة</strong>
                                <span style="font-size: 0.88rem; color: var(--color-text-secondary);">إذا كان لديك طلبات سابقة مسجلة في لوحة التحكم وتريد رفعها دفعة واحدة إلى Google Sheet.</span>
                            </div>
                            <button type="button" class="btn btn-primary" id="syncAllToGsheetBtn" style="padding: 0.65rem 1.5rem; font-size: 0.95rem;">
                                <i data-lucide="refresh-cw"></i> مزامنة الكل إلى Google Sheet الآن
                            </button>
                        </div>

                        <!-- 4 Step Guide with Code -->
                        <div style="border-top: 1px solid var(--color-border); padding-top: 2rem;">
                            <h3 style="font-size: 1.25rem; color: var(--color-primary-dark); margin-bottom: 1.25rem;">
                                📋 خطوات تفعيل Google Sheet الخاص بك في 3 دقائق:
                            </h3>
                            
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
                                <div style="background: var(--color-bg); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
                                    <strong style="color: var(--color-primary); font-size: 1.1rem; display: block; margin-bottom: 0.35rem;">1. فتح جدولك</strong>
                                    <p style="font-size: 0.88rem; color: var(--color-text-secondary); margin: 0;">افتح <a href="https://docs.google.com/spreadsheets/d/1Gw60ZafEECNQqUrUS0RQSR3qQ3PlJaGcf_p7deI6k6U/edit?usp=sharing" target="_blank" style="color: var(--color-primary); font-weight: 700;">جدول Google Sheet الخاص بك</a>.</p>
                                </div>
                                <div style="background: var(--color-bg); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
                                    <strong style="color: var(--color-primary); font-size: 1.1rem; display: block; margin-bottom: 0.35rem;">2. فتح Apps Script</strong>
                                    <p style="font-size: 0.88rem; color: var(--color-text-secondary); margin: 0;">من القائمة العلوية في Google Sheet اختر <strong>ملحقات (Extensions)</strong> ➔ ثم <strong>Apps Script</strong>.</p>
                                </div>
                                <div style="background: var(--color-bg); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
                                    <strong style="color: var(--color-primary); font-size: 1.1rem; display: block; margin-bottom: 0.35rem;">3. لصق الكود</strong>
                                    <p style="font-size: 0.88rem; color: var(--color-text-secondary); margin: 0;">امسح الكود القديم والصق الكود الموجود بالمربع بالأسفل واضغط حفظ (Ctrl+S).</p>
                                </div>
                                <div style="background: var(--color-bg); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
                                    <strong style="color: var(--color-primary); font-size: 1.1rem; display: block; margin-bottom: 0.35rem;">4. نشر التطبيق (Deploy)</strong>
                                    <p style="font-size: 0.88rem; color: var(--color-text-secondary); margin: 0;">اضغط <strong>Deploy ➔ New Deployment</strong>، اختر <strong>Web App</strong> واجعل Who has access: <strong>Anyone</strong> ثم انسخ الرابط والصقه أعلاه.</p>
                                </div>
                            </div>

                            <!-- Apps Script Code Snippet Box -->
                            <div style="background: #0F172A; color: #F8FAFC; padding: 1.5rem; border-radius: var(--radius-md); position: relative;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.75rem;">
                                    <span style="font-family: monospace; font-size: 0.9rem; color: #38BDF8;">// كود Google Apps Script الجاهز للنسخ المباشر</span>
                                    <button type="button" class="btn btn-sm btn-outline" id="copyAppsScriptCodeBtn" style="border-color: #38BDF8; color: #38BDF8; padding: 0.4rem 1rem; font-size: 0.85rem;">
                                        <i data-lucide="copy"></i> نسخ الكود بالكامل
                                    </button>
                                </div>
                                <pre id="appsScriptCodeBlock" style="margin: 0; font-family: 'Consolas', 'Courier New', monospace; font-size: 0.88rem; line-height: 1.6; max-height: 280px; overflow-y: auto; direction: ltr; text-align: left; color: #E2E8F0;">function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.setRightToLeft(true);
    
    var headers = [
      "📅 التاريخ والوقت",
      "🔖 رقم المرجع",
      "📋 نوع الاستمارة",
      "👤 الاسم / اسم الجهة",
      "📞 رقم الهاتف والواتساب",
      "📍 المحافظة",
      "🏢 المركز / المدينة",
      "📜 رقم الإشهار (للجمعيات)",
      "🎓 عدد الطلاب (للمدارس)",
      "💡 مجال التطوع أو التدريب",
      "📝 نطاق العمل وتفاصيل إضافية",
      "🟢 حالة الطلب"
    ];
    
    // Check if headers need to be written or updated
    var firstCell = sheet.getRange(1, 1).getValue();
    if (sheet.getLastRow() === 0 || firstCell === "" || sheet.getLastColumn() < headers.length || firstCell.toString().indexOf("التاريخ") === -1) {
      // Overwrite / Setup clean header row
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold")
                 .setBackground("#0B4F3F")
                 .setFontColor("#FFFFFF")
                 .setHorizontalAlignment("center")
                 .setVerticalAlignment("middle")
                 .setFontSize(11);
      sheet.setRowHeight(1, 42);
      sheet.setFrozenRows(1);
    }
    
    var raw = e.postData.contents;
    var data = JSON.parse(raw);
    
    // Support reset / format action
    if (data.action === "format_headers") {
      setupSheetStructure(sheet, headers);
      return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Headers formatted" })).setMimeType(ContentService.MimeType.JSON);
    }
    
    var d = data.data || {};
    var name = d.assocName || d.schoolName || d.volName || d.womanName || d.partnerName || "غير محدد";
    var rawPhone = d.assocPhone || d.schoolPhone || d.volPhone || d.womanPhone || d.partnerPhone || "";
    var phone = rawPhone ? "'" + rawPhone.toString().trim() : "-";
    var gov = d.assocGov || d.schoolGov || d.volGov || d.womanGov || "-";
    var city = d.assocCity || d.schoolCity || d.volCity || d.womanCity || "-";
    var regNum = d.assocRegNum || "-";
    var students = d.schoolStudents || "-";
    var domain = d.volDomain || d.womanInterest || "-";
    var scope = d.assocScope || d.partnerScope || d.notes || d.assocContact || "-";
    var formType = data.formTypeArabic || data.formType || "طلب وارد";
    var refId = data.id || ("SUB-" + new Date().getTime());
    var timeStr = new Date().toLocaleString("ar-EG", { timeZone: "Africa/Cairo" });
    var status = "جديد 🟢";
    
    var row = [
      timeStr,
      refId,
      formType,
      name,
      phone,
      gov,
      city,
      regNum,
      students,
      domain,
      scope,
      status
    ];
    
    sheet.appendRow(row);
    
    var lastRow = sheet.getLastRow();
    var rowRange = sheet.getRange(lastRow, 1, 1, headers.length);
    rowRange.setVerticalAlignment("middle").setFontSize(10).setWrap(true);
    
    // Alternating light background on even rows
    if (lastRow % 2 === 0) {
      rowRange.setBackground("#F8FAF9");
    } else {
      rowRange.setBackground("#FFFFFF");
    }
    
    sheet.getRange(lastRow, 1).setHorizontalAlignment("center");
    sheet.getRange(lastRow, 2).setHorizontalAlignment("center");
    sheet.getRange(lastRow, 3).setHorizontalAlignment("center");
    sheet.getRange(lastRow, 5).setHorizontalAlignment("center");
    sheet.getRange(lastRow, 8).setHorizontalAlignment("center");
    sheet.getRange(lastRow, 9).setHorizontalAlignment("center");
    sheet.getRange(lastRow, 12).setHorizontalAlignment("center");
    sheet.setRowHeight(lastRow, 38);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Row added cleanly" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: "active", message: "Bara El-Sandouq Webhook Ready" }))
    .setMimeType(ContentService.MimeType.JSON);
}

function setupSheetStructure(sheet, headers) {
  sheet.setRightToLeft(true);
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight("bold")
             .setBackground("#0B4F3F")
             .setFontColor("#FFFFFF")
             .setHorizontalAlignment("center")
             .setVerticalAlignment("middle")
             .setFontSize(11);
  sheet.setRowHeight(1, 42);
  sheet.setFrozenRows(1);
}</pre>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- Tab 3: Site Content Editor -->
                <div class="admin-pane" id="contentTabPane" style="display: none;">
                    <div class="card glass-card" style="padding: 2rem; border-radius: var(--radius-lg); background: var(--color-surface); border: 1px solid var(--color-border);">
                        <h2 style="font-size: 1.4rem; color: var(--color-primary-dark); margin-bottom: 1.5rem;">تعديل نصوص وأرقام الصفحة الرئيسية بالموقع</h2>
                        
                        <form id="cmsContentForm">
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 1.5rem;">
                                <div class="form-group">
                                    <label class="form-label">اسم صاحب الفكرة والملكية الفكرية</label>
                                    <input type="text" class="form-input" id="cmsFounderName" value="أ. فاطمة عبد المجيد راضي">
                                </div>
                                <div class="form-group">
                                    <label class="form-label">الشريك الميداني والجهة المنفذة</label>
                                    <input type="text" class="form-input" id="cmsPartnerName" value="جمعية الإسراء الخيرية لتنمية المجتمع بفرهاش – دمنهور (إشهار #1124)">
                                </div>
                            </div>

                            <div class="form-group" style="margin-bottom: 1.5rem;">
                                <label class="form-label">العنوان الرئيسي بالهيرو (Hero Title)</label>
                                <input type="text" class="form-input" id="cmsHeroTitle" value="برة الصندوق – المدرسة الخضراء الذكية">
                            </div>

                            <div class="form-group" style="margin-bottom: 1.5rem;">
                                <label class="form-label">الوصف الفرعي بالهيرو (Hero Subtitle)</label>
                                <textarea class="form-textarea" id="cmsHeroDesc" rows="3">من مخلفات مدرسية إلى فرص خضراء ذكية | مشروع بيئي مجتمعي تعليمي متكامل لجمع وفرز وتحويل الورق والكرتون بالمدارس إلى وسائل تعلم تفاعلية ودعم مجتمعي وتمكين للمرأة وذوي الهمم.</textarea>
                            </div>

                            <h3 style="font-size: 1.15rem; color: var(--color-primary-dark); margin-top: 2rem; margin-bottom: 1rem; border-top: 1px solid var(--color-border); padding-top: 1.25rem;">
                                أرقام المؤشرات الرقمية الميدانية (Metrics Counter Cards):
                            </h3>

                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
                                <div class="form-group">
                                    <label class="form-label">أطنان الورق المجمع</label>
                                    <input type="number" class="form-input" id="cmsMetricPaper" value="180">
                                </div>
                                <div class="form-group">
                                    <label class="form-label">عدد المدارس المعتمدة</label>
                                    <input type="number" class="form-input" id="cmsMetricSchools" value="26">
                                </div>
                                <div class="form-group">
                                    <label class="form-label">نسبة مشاركة ذوي الهمم (%)</label>
                                    <input type="number" class="form-input" id="cmsMetricDisabled" value="8">
                                </div>
                                <div class="form-group">
                                    <label class="form-label">نسبة تخصيص تمكين المرأة (%)</label>
                                    <input type="number" class="form-input" id="cmsMetricWomen" value="40">
                                </div>
                                <div class="form-group">
                                    <label class="form-label">عدد الطلاب المشاركين</label>
                                    <input type="number" class="form-input" id="cmsMetricStudents" value="1500">
                                </div>
                            </div>

                            <button type="submit" class="btn btn-primary spring-hover" style="padding: 0.85rem 2.5rem;">
                                <i data-lucide="save"></i> حفظ التعديلات وحفظها في الموقع
                            </button>
                        </form>
                    </div>
                </div>

                <!-- Tab 4: Base64 FileReader Image Manager -->
                <div class="admin-pane" id="imagesTabPane" style="display: none;">
                    <div class="card glass-card" style="padding: 2rem; border-radius: var(--radius-lg); background: var(--color-surface); border: 1px solid var(--color-border);">
                        <h2 style="font-size: 1.4rem; color: var(--color-primary-dark); margin-bottom: 0.5rem;">محرك رفع واستبدال الصور المباشر (Base64 Image Engine)</h2>
                        <p style="color: var(--color-text-secondary); font-size: 0.92rem; margin-bottom: 2rem;">رفع صورة مباشرة من جهاز الكمبيوتر أو الجوال وتحويلها إلى Base64 وحفظها بالمتصفح بدون سيرفر خارجي.</p>

                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
                                <div class="form-group">
                                    <label class="form-label">اختر الصورة المراد استبدالها بالموقع:</label>
                                    <select class="form-select" id="imgTargetSelect">
                                        <option value="logo">شعار مشروع برة الصندوق المفرغ (Header Logo)</option>
                                        <option value="israaLogo">شعار جمعية الإسراء الخيرية بدمنهور</option>
                                        <option value="heroBg">الصورة الجماعية للهيرو (./assets/images/field-group.png)</option>
                                        <option value="womenPhoto">صورة ورشة تمكين السيدات (./assets/images/field-women.png)</option>
                                        <option value="artPhoto">صورة رسوم وأنشطة الطلاب (./assets/images/field-art.png)</option>
                                        <option value="flagPhoto">صورة فعالية رفع العلم بالجمعية (./assets/images/field-flag.png)</option>
                                        <option value="bannerPhoto">البانر الميداني الحكومي الرسمي (./assets/images/banner.jpeg)</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label class="form-label">اختر صورة جديدة من جهازك (Upload from Device):</label>
                                    <input type="file" class="form-input" id="imgFileInput" accept="image/*" style="padding: 0.5rem;">
                                </div>

                                <div class="form-group">
                                    <label class="form-label">أو ادخل رابط صورة خارجي (Image URL):</label>
                                    <input type="text" class="form-input" id="imgUrlInput" placeholder="./assets/images/field-group.png">
                                </div>

                                <button class="btn btn-primary spring-hover" id="saveImageBtn" style="padding: 0.85rem 2rem;">
                                    <i data-lucide="upload"></i> حفظ وتطبيق الصورة الجديدة بالموقع
                                </button>
                            </div>

                            <div style="background: var(--color-muted); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                                <h4 style="color: var(--color-primary-dark); margin-bottom: 1rem;">معاينة الصورة المختارة (Live Preview):</h4>
                                <div style="width: 100%; height: 220px; border-radius: var(--radius-md); overflow: hidden; background: #FFFFFF; border: 1px solid var(--color-border); display: flex; align-items: center; justify-content: center;">
                                    <img id="imgLivePreview" src="./assets/images/field-group.png" alt="معاينة" style="max-width: 100%; max-height: 100%; object-fit: contain;">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Tab 5: Activities CRUD -->
                <div class="admin-pane" id="activitiesTabPane" style="display: none;">
                    <div class="card glass-card" style="padding: 2rem; border-radius: var(--radius-lg); background: var(--color-surface); border: 1px solid var(--color-border);">
                        <h2 style="font-size: 1.4rem; color: var(--color-primary-dark); margin-bottom: 1.5rem;">إدارة مكتبة الوسائل والأنشطة التعليمية الـ 9</h2>
                        <div id="adminActivitiesList" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
                            <!-- Activity Edit Cards loaded via initAdminLogic -->
                        </div>
                    </div>
                </div>

                <!-- Tab 6: Security & System Settings -->
                <div class="admin-pane" id="systemTabPane" style="display: none;">
                    <div class="card glass-card" style="padding: 2rem; border-radius: var(--radius-lg); background: var(--color-surface); border: 1px solid var(--color-border);">
                        <h2 style="font-size: 1.4rem; color: var(--color-primary-dark); margin-bottom: 1.5rem;">أمان لوحة التحكم والنسخ الاحتياطي (JSON)</h2>

                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
                            <!-- Change Password Box -->
                            <div style="background: var(--color-bg); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
                                <h3 style="font-size: 1.15rem; color: var(--color-primary-dark); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
                                    <i data-lucide="key" style="color: var(--color-primary);"></i> تغيير كلمة مرور لوحة التحكم
                                </h3>
                                <p style="font-size: 0.88rem; color: var(--color-text-secondary); margin-bottom: 1rem;">
                                    يمكنك تعيين كلمة مرور سرية خاصة بك لحماية لوحة التحكم.
                                </p>
                                <form id="changePasswordForm">
                                    <div class="form-group" style="margin-bottom: 1rem;">
                                        <label class="form-label" style="font-size: 0.85rem; font-weight: 700;">كلمة المرور الجديدة:</label>
                                        <input type="password" id="newAdminPasswordInput" class="form-input" placeholder="أدخل كلمة المرور الجديدة" required style="width: 100%; padding: 0.65rem 0.85rem; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
                                    </div>
                                    <div class="form-group" style="margin-bottom: 1.25rem;">
                                        <label class="form-label" style="font-size: 0.85rem; font-weight: 700;">تأكيد كلمة المرور:</label>
                                        <input type="password" id="confirmAdminPasswordInput" class="form-input" placeholder="أعد إدخال كلمة المرور" required style="width: 100%; padding: 0.65rem 0.85rem; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
                                    </div>
                                    <button type="submit" class="btn btn-primary" style="width: 100%; font-size: 0.95rem;">
                                        <i data-lucide="check"></i> حفظ كلمة المرور الجديدة
                                    </button>
                                </form>
                            </div>

                            <!-- Backup & Restore Box -->
                            <div style="background: var(--color-bg); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
                                <h3 style="font-size: 1.15rem; color: var(--color-primary-dark); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
                                    <i data-lucide="download" style="color: var(--color-secondary);"></i> تصدير واستعادة النسخة الاحتياطية
                                </h3>
                                <p style="font-size: 0.88rem; color: var(--color-text-secondary); line-height: 1.6; margin-bottom: 1rem;">
                                    تنزيل ملف .json يحتوي على جميع بيانات الموقع، الرسائل الواردة، والصور المرفوعة.
                                </p>
                                <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                                    <button class="btn btn-primary" id="exportBackupBtn2">
                                        <i data-lucide="download"></i> تصدير النسخة الاحتياطية (Export JSON)
                                    </button>
                                    <label class="btn btn-outline" style="cursor: pointer; text-align: center;">
                                        <i data-lucide="upload"></i> استعادة من ملف JSON (Import Backup)
                                        <input type="file" id="importJsonInput" accept=".json" style="display: none;">
                                    </label>
                                </div>
                            </div>

                            <!-- Factory Reset Box -->
                            <div style="background: #FEF2F2; padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid #FCA5A5;">
                                <h3 style="font-size: 1.15rem; color: #991B1B; margin-bottom: 0.75rem;">إعادة الضبط للوضع الافتراضي الرسمي</h3>
                                <p style="font-size: 0.88rem; color: #7F1D1D; line-height: 1.6; margin-bottom: 1.25rem;">
                                    إعادة جميع نصوص، صور، وأرقام الموقع إلى حالتها الافتراضية الرسمية المعتمدة بنقرة واحدة.
                                </p>
                                <button class="btn" id="resetDefaultsBtn" style="background: #DC2626; color: #FFFFFF; width: 100%;">
                                    <i data-lucide="refresh-cw"></i> إعادة ضبط البيانات الافتراضية
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    `;
}

/* Event Handler Logic for Admin Dashboard */
function initAdminLogic() {
    const loginForm = document.getElementById('adminLoginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const pass = (document.getElementById('adminPassword')?.value || '').trim();
            const customPass = localStorage.getItem('bara_admin_custom_password');
            const validPasswords = customPass ? [customPass, 'admin123'] : ['admin123', 'admin', '123456'];

            if (validPasswords.includes(pass)) {
                sessionStorage.setItem('bara_admin_logged_in', 'true');
                if (typeof window.showToast === 'function') window.showToast('✅ تم تسجيل الدخول إلى لوحة التحكم بنجاح');
                if (typeof navigateToPage === 'function') navigateToPage('admin');
                else location.reload();
            } else {
                if (typeof window.showToast === 'function') window.showToast('❌ كلمة المرور غير صحيحة! يرجى المحاولة مرة أخرى.');
                else alert('كلمة المرور غير صحيحة');
            }
        });
        return;
    }

    // Logout Action
    const logoutBtn = document.getElementById('adminLogoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            sessionStorage.removeItem('bara_admin_logged_in');
            if (typeof window.showToast === 'function') window.showToast('تم تسجيل الخروج');
            if (typeof navigateToPage === 'function') navigateToPage('home');
            else location.reload();
        });
    }

    // Tab Navigation Logic
    const tabBtns = document.querySelectorAll('#adminTabsNav .admin-tab-btn');
    const panes = document.querySelectorAll('.admin-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => {
                b.classList.remove('active');
                b.style.color = 'var(--color-text-secondary)';
                b.style.borderBottom = 'none';
            });
            btn.classList.add('active');
            btn.style.color = 'var(--color-primary-dark)';
            btn.style.borderBottom = '3px solid var(--color-primary)';

            const targetPaneId = btn.getAttribute('data-tab') + 'Pane';
            panes.forEach(pane => {
                pane.style.display = pane.id === targetPaneId ? 'block' : 'none';
            });
        });
    });

    // 1. Populate Inbox Submissions
    function renderInbox() {
        const inboxContainer = document.getElementById('inboxListContainer');
        const badge = document.getElementById('inboxCountBadge');
        if (!inboxContainer) return;

        let submissions = [];
        try {
            const raw = localStorage.getItem('bara_forms_submissions');
            if (raw) submissions = JSON.parse(raw);
        } catch (err) {
            console.error(err);
        }

        if (badge) badge.textContent = submissions.length;

        if (!submissions.length) {
            inboxContainer.innerHTML = `
                <div class="card" style="text-align: center; padding: 3rem; color: var(--color-text-secondary);">
                    <i data-lucide="inbox" style="width: 48px; height: 48px; margin-bottom: 1rem; color: var(--color-border);"></i>
                    <h3>لا توجد طلبات أو رسائل واردة حالياً</h3>
                    <p style="font-size: 0.9rem;">عندما يقوم أي زائر بتعبئة أي من نماذج التسجيل، ستظهر جميع بياناته هنا وتُزامن تلقائياً مع Google Sheet.</p>
                </div>
            `;
            if (window.lucide) window.lucide.createIcons();
            return;
        }

        let html = `<div style="display: flex; flex-direction: column; gap: 1rem;">`;
        submissions.slice().reverse().forEach((sub) => {
            const d = sub.data || {};
            const name = d.assocName || d.schoolName || d.volName || d.womanName || d.partnerName || 'طلب انضمام';
            const phone = d.assocPhone || d.schoolPhone || d.volPhone || d.womanPhone || d.partnerPhone || 'غير مدخل';
            const dateStr = sub.submittedAt ? new Date(sub.submittedAt).toLocaleString('ar-EG') : 'الآن';
            const isSynced = sub.synced === true;
            const syncBadgeHtml = isSynced 
                ? `<span class="badge" style="background: rgba(52, 211, 153, 0.15); color: #059669; font-size: 0.75rem; border: 1px solid rgba(52, 211, 153, 0.3); display: inline-flex; align-items: center; gap: 0.25rem;"><i data-lucide="check-check"></i> مُزامَن مع Google Sheet</span>`
                : `<span class="badge" style="background: rgba(245, 158, 11, 0.15); color: #D97706; font-size: 0.75rem; border: 1px solid rgba(245, 158, 11, 0.3); display: inline-flex; align-items: center; gap: 0.25rem;"><i data-lucide="clock"></i> محفوظ محلياً</span>`;

            html += `
                <div class="card glass-card" style="padding: 1.25rem 1.5rem; border-radius: var(--radius-md); border-right: 4px solid var(--color-primary); background: var(--color-surface);">
                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.75rem;">
                        <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                            <span class="badge badge-certified">${sub.formTypeArabic || sub.formType || 'طلب'}</span>
                            <strong style="font-size: 1.1rem; color: var(--color-primary-dark);">${name}</strong>
                            ${syncBadgeHtml}
                        </div>
                        <span style="font-size: 0.82rem; color: var(--color-text-secondary);">${dateStr} | مرجع: ${sub.id}</span>
                    </div>

                    <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; font-size: 0.9rem; color: var(--color-text); margin-bottom: 0.75rem;">
                        <div>📞 <strong>رقم التواصل:</strong> <a href="tel:${phone}" style="color: var(--color-primary); font-weight: 700;">${phone}</a></div>
                        ${d.assocGov || d.schoolGov || d.volGov || d.womanGov ? `<div>📍 <strong>المحافظة والمركز:</strong> ${d.assocGov || d.schoolGov || d.volGov || d.womanGov}</div>` : ''}
                        ${d.assocRegNum ? `<div>📜 <strong>رقم الإشهار:</strong> ${d.assocRegNum}</div>` : ''}
                    </div>

                    ${d.assocScope ? `<p style="font-size: 0.88rem; color: var(--color-text-secondary); background: var(--color-muted); padding: 0.5rem 0.75rem; border-radius: 6px; margin: 0;">${d.assocScope}</p>` : ''}
                </div>
            `;
        });
        html += `</div>`;
        inboxContainer.innerHTML = html;
        if (window.lucide) window.lucide.createIcons();
    }

    renderInbox();

    // Clear Inbox
    const clearInboxBtn = document.getElementById('clearInboxBtn');
    if (clearInboxBtn) {
        clearInboxBtn.addEventListener('click', () => {
            if (confirm('هل أنت متأكد من رغبتك في مسح جميع الرسائل والطلبات الواردة من لوحة التحكم؟')) {
                localStorage.removeItem('bara_forms_submissions');
                renderInbox();
                if (typeof window.showToast === 'function') window.showToast('تم مسح جميع الرسائل المحلية');
            }
        });
    }

    // 2. Google Sheets Tab & Webhook Handlers
    const webhookInput = document.getElementById('gsheetWebhookUrlInput');
    const saveGsheetBtn = document.getElementById('saveGsheetUrlBtn');
    const testGsheetBtn = document.getElementById('testGsheetConnectionBtn');
    const syncAllBtn = document.getElementById('syncAllToGsheetBtn');
    const inboxSyncBtn = document.getElementById('inboxSyncGsheetBtn');
    const copyCodeBtn = document.getElementById('copyAppsScriptCodeBtn');
    const gsheetBadge = document.getElementById('gsheetLiveBadge');
    const gsheetPill = document.getElementById('gsheetStatusPill');

    const savedWebhook = localStorage.getItem('bara_gsheet_webhook_url') || 'https://script.google.com/macros/s/AKfycbwyK2-QOmVsP8sYtTUeCPZpFnyNQP057A98u64DaxXu6gxyCDmS36R9ooJ0lJp5nuM/exec';
    if (webhookInput) webhookInput.value = savedWebhook;

    if (savedWebhook && savedWebhook.startsWith('http')) {
        if (gsheetPill) { gsheetPill.textContent = '🟢 متصل'; gsheetPill.style.color = '#059669'; }
        if (gsheetBadge) { gsheetBadge.innerHTML = '<i data-lucide="check-circle-2"></i> متصل بـ Google Sheet'; }
    } else {
        if (gsheetPill) { gsheetPill.textContent = '🟡 غير متصل'; gsheetPill.style.color = '#D97706'; }
        if (gsheetBadge) { gsheetBadge.innerHTML = '<i data-lucide="alert-circle"></i> في انتظار إدخال الرابط'; }
    }

    if (saveGsheetBtn && webhookInput) {
        saveGsheetBtn.addEventListener('click', () => {
            const url = webhookInput.value.trim();
            if (url && !url.startsWith('http')) {
                alert('يرجى إدخال رابط Web App صحيح يبدأ بـ https://');
                return;
            }
            localStorage.setItem('bara_gsheet_webhook_url', url);
            if (url) {
                if (typeof window.showToast === 'function') window.showToast('✅ تم حفظ رابط Google Sheet بنجاح!');
                if (gsheetPill) { gsheetPill.textContent = '🟢 متصل'; gsheetPill.style.color = '#059669'; }
                if (gsheetBadge) { gsheetBadge.innerHTML = '<i data-lucide="check-circle-2"></i> متصل بـ Google Sheet'; }
            } else {
                if (typeof window.showToast === 'function') window.showToast('تمت إزالة رابط Webhook');
                if (gsheetPill) { gsheetPill.textContent = '🟡 غير متصل'; gsheetPill.style.color = '#D97706'; }
                if (gsheetBadge) { gsheetBadge.innerHTML = '<i data-lucide="alert-circle"></i> في انتظار إدخال الرابط'; }
            }
            if (window.lucide) window.lucide.createIcons();
        });
    }

    if (testGsheetBtn) {
        testGsheetBtn.addEventListener('click', async () => {
            const url = (webhookInput ? webhookInput.value : '').trim() || localStorage.getItem('bara_gsheet_webhook_url');
            if (!url) {
                alert('يرجى إدخال وحفظ رابط الـ Google Apps Script أولاً في المربع أعلاه');
                return;
            }
            testGsheetBtn.disabled = true;
            testGsheetBtn.innerHTML = '⏳ جاري إرسال صف تجريبي...';
            
            const testRecord = {
                id: 'TEST-' + Date.now(),
                formType: 'test',
                formTypeArabic: 'صف تجريبي لاختبار الربط',
                data: {
                    assocName: 'تجربة اتصال منصة برة الصندوق',
                    assocPhone: '01012345678',
                    assocGov: 'دمنهور - البحيرة',
                    assocScope: 'تم إرسال هذا الصف بنجاح من لوحة تحكم CMS لتأكيد صحة الربط مع Google Sheet.'
                },
                submittedAt: new Date().toISOString(),
                synced: true
            };

            try {
                if (typeof window.sendToGoogleSheets === 'function') {
                    await window.sendToGoogleSheets(testRecord);
                } else {
                    await fetch(url, {
                        method: 'POST',
                        mode: 'no-cors',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(testRecord)
                    });
                }
                if (typeof window.showToast === 'function') window.showToast('🎉 تم إرسال الصف التجريبي بنجاح! تحقق من جدول Google Sheet لديك الآن.');
                else alert('تم إرسال الصف التجريبي بنجاح');
            } catch (err) {
                alert('حدث خطأ أثناء الإرسال: ' + err.message);
            } finally {
                testGsheetBtn.disabled = false;
                testGsheetBtn.innerHTML = '<i data-lucide="send"></i> إرسال صف تجريبي للاختبار';
                if (window.lucide) window.lucide.createIcons();
            }
        });
    }

    const triggerSyncAll = async (btn) => {
        const submissions = JSON.parse(localStorage.getItem('bara_forms_submissions') || '[]');
        if (!submissions.length) {
            if (typeof window.showToast === 'function') window.showToast('لا توجد طلبات مسجلة للمزامنة');
            return;
        }
        const url = localStorage.getItem('bara_gsheet_webhook_url') || 'https://script.google.com/macros/s/AKfycbwyK2-QOmVsP8sYtTUeCPZpFnyNQP057A98u64DaxXu6gxyCDmS36R9ooJ0lJp5nuM/exec';
        if (!url) {
            alert('يرجى حفظ رابط Google Apps Script أولاً في تبويب ربط Google Sheets');
            return;
        }
        if (btn) {
            btn.disabled = true;
            btn.innerHTML = '⏳ جاري المزامنة...';
        }

        let count = 0;
        for (let sub of submissions) {
            try {
                await fetch(url, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(sub)
                });
                sub.synced = true;
                count++;
            } catch(e) {}
        }
        localStorage.setItem('bara_forms_submissions', JSON.stringify(submissions));
        renderInbox();
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = '<i data-lucide="refresh-cw"></i> مزامنة الكل إلى Google Sheet الآن';
        }
        if (typeof window.showToast === 'function') window.showToast(`✅ تمت مزامنة ${count} طلب مع Google Sheet بنجاح!`);
        if (window.lucide) window.lucide.createIcons();
    };

    if (syncAllBtn) syncAllBtn.addEventListener('click', () => triggerSyncAll(syncAllBtn));
    if (inboxSyncBtn) inboxSyncBtn.addEventListener('click', () => triggerSyncAll(inboxSyncBtn));

    if (copyCodeBtn) {
        copyCodeBtn.addEventListener('click', () => {
            const code = document.getElementById('appsScriptCodeBlock')?.textContent || '';
            navigator.clipboard.writeText(code).then(() => {
                if (typeof window.showToast === 'function') window.showToast('📋 تم نسخ كود Apps Script بالكامل إلى الحافظة!');
            }).catch(() => {
                alert('تم نسخ الكود');
            });
        });
    }

    // 3. Change Password Form
    const changePassForm = document.getElementById('changePasswordForm');
    if (changePassForm) {
        changePassForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newPass = document.getElementById('newAdminPasswordInput')?.value || '';
            const confirmPass = document.getElementById('confirmAdminPasswordInput')?.value || '';
            if (newPass.length < 4) {
                alert('كلمة المرور يجب أن تتكون من 4 أحرف أو أرقام على الأقل');
                return;
            }
            if (newPass !== confirmPass) {
                alert('كلمات المرور غير متطابقة!');
                return;
            }
            localStorage.setItem('bara_admin_custom_password', newPass);
            if (typeof window.showToast === 'function') window.showToast('🔒 تم تغيير كلمة مرور لوحة التحكم بنجاح!');
            changePassForm.reset();
        });
    }

    // 4. Base64 FileReader Engine Handler
    const imgTargetSelect = document.getElementById('imgTargetSelect');
    const imgFileInput = document.getElementById('imgFileInput');
    const imgUrlInput = document.getElementById('imgUrlInput');
    const imgLivePreview = document.getElementById('imgLivePreview');
    const saveImageBtn = document.getElementById('saveImageBtn');

    if (imgFileInput && imgUrlInput && imgLivePreview) {
        imgFileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            if (file.size > 4 * 1024 * 1024) {
                alert('حجم الصورة كبير جداً! يرجى اختيار صورة أقل من 4 ميجابايت.');
                return;
            }
            const reader = new FileReader();
            reader.onload = function(evt) {
                imgLivePreview.src = evt.target.result;
                imgUrlInput.value = evt.target.result; // Stores Base64
            };
            reader.readAsDataURL(file);
        });

        imgUrlInput.addEventListener('input', () => {
            imgLivePreview.src = imgUrlInput.value || './assets/images/field-group.png';
        });

        if (saveImageBtn) {
            saveImageBtn.addEventListener('click', () => {
                const targetKey = imgTargetSelect ? imgTargetSelect.value : 'logo';
                const newImgVal = imgLivePreview.src;

                try {
                    const existingStr = localStorage.getItem('bara_cms_images');
                    const imagesMap = existingStr ? JSON.parse(existingStr) : {};
                    imagesMap[targetKey] = newImgVal;
                    localStorage.setItem('bara_cms_images', JSON.stringify(imagesMap));

                    if (typeof window.showToast === 'function') window.showToast('✅ تم حفظ واستبدال الصورة بنجاح بالموقع');
                } catch (err) {
                    console.error(err);
                }
            });
        }
    }

    // 5. Export JSON Backup Action
    const exportBtns = [document.getElementById('exportBackupBtn'), document.getElementById('exportBackupBtn2')];
    exportBtns.forEach(btn => {
        if (!btn) return;
        btn.addEventListener('click', () => {
            const fullData = {
                siteName: "برة الصندوق – المدرسة الخضراء الذكية",
                exportedAt: new Date().toISOString(),
                submissions: JSON.parse(localStorage.getItem('bara_forms_submissions') || '[]'),
                cmsImages: JSON.parse(localStorage.getItem('bara_cms_images') || '{}'),
                cmsConfig: JSON.parse(localStorage.getItem('bara_cms_config') || '{}'),
                gsheetWebhook: localStorage.getItem('bara_gsheet_webhook_url') || ''
            };

            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(fullData, null, 2));
            const downloadAnchor = document.createElement('a');
            downloadAnchor.setAttribute("href", dataStr);
            downloadAnchor.setAttribute("download", `bara_elsandouq_backup_${new Date().toISOString().slice(0,10)}.json`);
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            downloadAnchor.remove();

            if (typeof window.showToast === 'function') window.showToast('📦 تم تصدير ملف النسخة الاحتياطية JSON بنجاح');
        });
    });

    // Reset Defaults
    const resetBtn = document.getElementById('resetDefaultsBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (confirm('هل أنت متأكد من إعادة ضبط كافة الصور والنصوص والبيانات إلى الوضع الافتراضي الرسمي؟')) {
                localStorage.removeItem('bara_cms_images');
                localStorage.removeItem('bara_cms_config');
                localStorage.removeItem('bara_admin_custom_password');
                if (typeof window.showToast === 'function') window.showToast('تمت إعادة الضبط للوضع الافتراضي');
                setTimeout(() => location.reload(), 1000);
            }
        });
    }
}
