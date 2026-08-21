/* ==========================================================================
   Page Component: Home Page View (pages/home.js)
   Bara El-Sandouq – Smart Green School Project
   ========================================================================== */

function renderHomePage() {
    return `
        <!-- Hero Section with Real Field Photo Background & Translucent Overlay -->
        <section class="hero-section" style="position: relative; background: linear-gradient(rgba(11, 79, 63, 0.90), rgba(19, 78, 74, 0.95)), url('./محتوي/برة 13.png') center/cover no-repeat; color: #ffffff; padding: 4.5rem 0 4rem; overflow: hidden; border-bottom: 1px solid var(--color-border);">
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
                            <img src="./محتوي/لوجو_برة_الصندوق_1-removebg-preview.png" alt="شعار برة الصندوق – المدرسة الخضراء الذكية" style="max-height: 80px; max-width: 100%; object-fit: contain; display: block; margin: 0 auto;">
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
                            <img src="./محتوي/لوجو جمعية الاسراء.jpg" alt="شعار جمعية الإسراء الخيرية لتنمية المجتمع بدمنهور" style="max-height: 80px; max-width: 100%; object-fit: contain; display: block; margin: 0 auto; border-radius: 6px;">
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
                            <img src="./محتوي/برة 12.png" alt="ورشة عمل تمكين المرأة والتوعية المجتمعية" style="width: 100%; height: 100%; object-fit: cover; display: block;">
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
                            <img src="./محتوي/برة 13.png" alt="صورة جماعية لقيادات مشروع برة الصندوق والأسر" style="width: 100%; height: 100%; object-fit: cover; display: block;">
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
                            <img src="./محتوي/برة 10.png" alt="نشاط الفنون والرسومات بالورق المعاد استخدامه" style="width: 100%; height: 100%; object-fit: cover; display: block;">
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
                            <img src="./محتوي/بانر برة الصندوق.jpeg" alt="البانر الميداني الحكومي المعتمد للمشروع" style="width: 100%; height: 100%; object-fit: cover; display: block;">
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
