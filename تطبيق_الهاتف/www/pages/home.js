/* ==========================================================================
   Page Component: Curated Home Page View (pages/home.js)
   Bara El-Sandouq – Smart Green School Project
   Clean, Lightweight Gateway with Top 4 Metrics & Partner Highlights
   ========================================================================== */

function renderHomePage() {
    return `
        <!-- Hero Section with Real Field Photo Background & Translucent Overlay -->
        <section class="hero-section" style="position: relative; background: linear-gradient(rgba(11, 79, 63, 0.90), rgba(19, 78, 74, 0.95)), url('./assets/images/برة 13.png') center/cover no-repeat; color: #ffffff; padding: 4.5rem 0 3.5rem; overflow: hidden; border-bottom: 1px solid var(--color-border);">
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
                    
                    <h1 class="hero-title" style="font-size: clamp(2rem, 4vw, 3.2rem); font-family: 'Noto Naskh Arabic', serif; font-weight: 700; line-height: 1.3; margin-bottom: 1.25rem; color: #ffffff; text-shadow: 0 4px 20px rgba(0,0,0,0.3);">
                        <span class="hero-stagger-word">برة الصندوق</span>
                        <span class="hero-stagger-word" style="color: #FDBA74;">–</span>
                        <span class="hero-stagger-word">المدرسة الخضراء الذكية</span>
                    </h1>
                    
                    <p class="hero-desc" style="font-size: clamp(1.05rem, 1.8vw, 1.25rem); color: #E2ECE9; line-height: 1.8; margin-bottom: 2rem; font-weight: 400; max-width: 820px; margin-right: auto; margin-left: auto;">
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
                            <span><strong>الجهة المنفذة:</strong> جمعية الإسراء الخيرية بدمنهور (إشهار #1124)</span>
                        </div>
                    </div>

                    <div class="hero-btns" style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 1.5rem;">
                        <a href="#forms" class="btn btn-accent spring-hover" style="padding: 0.85rem 2rem; font-size: 1.05rem; display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none;">
                            <i data-lucide="user-plus" style="width: 18px; height: 18px;"></i>
                            <span>سجّل جمعيتك / انضم</span>
                        </a>
                        <a href="#calculators" class="btn btn-outline spring-hover" style="padding: 0.85rem 2rem; font-size: 1.05rem; border-color: rgba(255,255,255,0.7); color: #ffffff; display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none; backdrop-filter: blur(8px); background: rgba(255,255,255,0.1);">
                            <i data-lucide="calculator" style="width: 18px; height: 18px;"></i>
                            <span>جرب الحاسبات المباشرة</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Concise Key Verified Metrics (Top 4 Numbers Only) -->
        <section class="section" style="background: var(--color-bg); padding: 3.5rem 0 3rem;">
            <div class="container">
                <div class="section-header" style="text-align: center; margin-bottom: 2.25rem;">
                    <div class="section-subtitle" style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--color-primary); font-weight: 700;">
                        <i data-lucide="bar-chart-2"></i> مؤشرات الأثر الميداني الأساسية
                    </div>
                    <h2 class="section-title" style="font-size: 1.9rem; color: var(--color-primary-dark); margin-top: 0.3rem;">أبرز نتائج الميدان الموثقة</h2>
                    <p class="section-desc" style="color: var(--color-text-secondary); max-width: 600px; margin: 0.3rem auto 0;">ملخص موجز لنتائج المنظومة بالتعاون مع مدارس وسيدات محافظة البحيرة.</p>
                </div>

                <div class="metrics-grid" id="homeMetricsGrid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
                    <!-- Metric 1: Paper Saved -->
                    <div class="card glass-card spring-hover metric-card" style="text-align: center; padding: 1.75rem 1.25rem; border-radius: var(--radius-lg); background: var(--color-surface); border: 1px solid var(--color-border);">
                        <div style="width: 50px; height: 50px; margin: 0 auto 0.75rem; background: rgba(31, 122, 90, 0.12); color: var(--color-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                            <i data-lucide="file-text" style="width: 24px; height: 24px;"></i>
                        </div>
                        <div class="metric-val counter-value" data-target="180" data-suffix=" طن" style="font-size: 2.2rem; font-weight: 800; color: var(--color-primary-dark); font-family: 'Noto Naskh Arabic', serif; line-height: 1.2;">180 طن</div>
                        <div class="metric-lbl" style="font-size: 0.95rem; font-weight: 700; color: var(--color-text); margin-top: 0.4rem;">
                            ورق وكرتون مجمع <span class="badge badge-certified" style="font-size: 0.7rem;">✅ موثق</span>
                        </div>
                    </div>

                    <!-- Metric 2: Participating Schools -->
                    <div class="card glass-card spring-hover metric-card" style="text-align: center; padding: 1.75rem 1.25rem; border-radius: var(--radius-lg); background: var(--color-surface); border: 1px solid var(--color-border);">
                        <div style="width: 50px; height: 50px; margin: 0 auto 0.75rem; background: rgba(28, 154, 139, 0.12); color: var(--color-secondary); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                            <i data-lucide="school" style="width: 24px; height: 24px;"></i>
                        </div>
                        <div class="metric-val counter-value" data-target="26" data-suffix=" مدرسة" style="font-size: 2.2rem; font-weight: 800; color: var(--color-primary-dark); font-family: 'Noto Naskh Arabic', serif; line-height: 1.2;">26 مدرسة</div>
                        <div class="metric-lbl" style="font-size: 0.95rem; font-weight: 700; color: var(--color-text); margin-top: 0.4rem;">
                            مدرسة منفذ بها <span class="badge badge-certified" style="font-size: 0.7rem;">✅ موثق</span>
                        </div>
                    </div>

                    <!-- Metric 3: Women Empowerment (40%) -->
                    <div class="card glass-card spring-hover metric-card" style="text-align: center; padding: 1.75rem 1.25rem; border-radius: var(--radius-lg); background: var(--color-surface); border: 1px solid var(--color-border);">
                        <div style="width: 50px; height: 50px; margin: 0 auto 0.75rem; background: rgba(236, 72, 153, 0.12); color: #EC4899; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                            <i data-lucide="users" style="width: 24px; height: 24px;"></i>
                        </div>
                        <div class="metric-val counter-value" data-target="40" data-suffix="%" style="font-size: 2.2rem; font-weight: 800; color: var(--color-primary-dark); font-family: 'Noto Naskh Arabic', serif; line-height: 1.2;">40%</div>
                        <div class="metric-lbl" style="font-size: 0.95rem; font-weight: 700; color: var(--color-text); margin-top: 0.4rem;">
                            تمكين المرأة والعائد <span class="badge badge-certified" style="font-size: 0.7rem;">(10 فرق / 217 سيدة)</span>
                        </div>
                    </div>

                    <!-- Metric 4: Disability Inclusion (8%) -->
                    <div class="card glass-card spring-hover metric-card" style="text-align: center; padding: 1.75rem 1.25rem; border-radius: var(--radius-lg); background: var(--color-surface); border: 1px solid var(--color-border);">
                        <div style="width: 50px; height: 50px; margin: 0 auto 0.75rem; background: rgba(234, 88, 12, 0.12); color: var(--color-accent); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                            <i data-lucide="heart" style="width: 24px; height: 24px;"></i>
                        </div>
                        <div class="metric-val counter-value" data-target="8" data-suffix="%" style="font-size: 2.2rem; font-weight: 800; color: var(--color-primary-dark); font-family: 'Noto Naskh Arabic', serif; line-height: 1.2;">8%</div>
                        <div class="metric-lbl" style="font-size: 0.95rem; font-weight: 700; color: var(--color-text); margin-top: 0.4rem;">
                            مشاركة ذوي الهمم <span class="badge badge-certified" style="font-size: 0.7rem;">✅ موثق</span>
                        </div>
                    </div>
                </div>

                <!-- Link to Full Detailed Impact Page -->
                <div style="text-align: center;">
                    <a href="#impact" class="btn btn-primary spring-hover" style="padding: 0.75rem 2rem; font-size: 0.98rem; text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem;">
                        <span>استعرض لوحة الأثر والشفافية ودليل المدارس الـ 26 كاملاً</span>
                        <i data-lucide="arrow-left" style="width: 18px; height: 18px;"></i>
                    </a>
                </div>
            </div>
        </section>

        <!-- 4-Stage Value Chain Summary -->
        <section class="section" style="background: var(--color-surface); padding: 3.5rem 0; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
            <div class="container">
                <div class="section-header" style="text-align: center; margin-bottom: 2.25rem;">
                    <div class="section-subtitle" style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--color-primary); font-weight: 700;">
                        <i data-lucide="workflow"></i> دورة عمل المنظومة
                    </div>
                    <h2 class="section-title" style="font-size: 1.9rem; color: var(--color-primary-dark); margin-top: 0.3rem;">كيف نحول الهدر إلى قيمة مستدامة؟</h2>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
                    <div class="card spring-hover" style="background: var(--color-bg); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
                        <div style="font-size: 1.3rem; font-weight: 800; color: var(--color-primary); margin-bottom: 0.4rem;">01. الفرز المدرسي</div>
                        <p style="font-size: 0.88rem; color: var(--color-text-secondary); line-height: 1.6;">حاويات مخصصة ونقاط جمع آمنة داخل المدارس بمشاركة الطلاب وفريق GCT.</p>
                    </div>
                    <div class="card spring-hover" style="background: var(--color-bg); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
                        <div style="font-size: 1.3rem; font-weight: 800; color: var(--color-secondary); margin-bottom: 0.4rem;">02. الجمع واللوجستيات</div>
                        <p style="font-size: 0.88rem; color: var(--color-text-secondary); line-height: 1.6;">نقل وتجميع موثق عبر الجمعيات الأهلية الشريكة بنظام التتبع الرقمي.</p>
                    </div>
                    <div class="card spring-hover" style="background: var(--color-bg); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
                        <div style="font-size: 1.3rem; font-weight: 800; color: #EC4899; margin-bottom: 0.4rem;">03. التدريب والتحويل</div>
                        <p style="font-size: 0.88rem; color: var(--color-text-secondary); line-height: 1.6;">إنتاج مجسمات وألعاب تفاعلية ووسائل تعلم وورق يدوي بأيدي السيدات.</p>
                    </div>
                    <div class="card spring-hover" style="background: var(--color-bg); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
                        <div style="font-size: 1.3rem; font-weight: 800; color: var(--color-accent); margin-bottom: 0.4rem;">04. التوزيع العادل</div>
                        <p style="font-size: 0.88rem; color: var(--color-text-secondary); line-height: 1.6;">عائد مالي عادل: 40% للسيدات، 25% للمدرسة، 10% للجمعية، 25% فائض وتطوير.</p>
                    </div>
                </div>

                <div style="text-align: center;">
                    <a href="#how-it-works" style="color: var(--color-primary); font-weight: 700; text-decoration: none; font-size: 0.95rem; display: inline-flex; align-items: center; gap: 0.4rem;">
                        <span>اطلع على تفاصيل المراحل التشغيلية الـ 8 الكاملة</span>
                        <i data-lucide="arrow-left" style="width: 16px; height: 16px;"></i>
                    </a>
                </div>
            </div>
        </section>

        <!-- Concise Core Partners Highlight (3 Main Anchors Only) -->
        <section class="section" style="background: var(--color-bg); padding: 3.5rem 0;">
            <div class="container">
                <div class="section-header" style="text-align: center; margin-bottom: 2rem;">
                    <div class="section-subtitle" style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--color-primary); font-weight: 700;">
                        <i data-lucide="shield-check"></i> الشركاء والجهات الداعمة
                    </div>
                    <h2 class="section-title" style="font-size: 1.9rem; color: var(--color-primary-dark); margin-top: 0.3rem;">شركاء الاستدامة والأثر</h2>
                    <p class="section-desc" style="color: var(--color-text-secondary); max-width: 600px; margin: 0.3rem auto 0;">تعاون مؤسسي وثيق يضمن استدامة التنفيذ والامتثال لأعلى معايير الحوكمة.</p>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; max-width: 950px; margin: 0 auto 2rem;">
                    <!-- Partner 1 -->
                    <div class="card spring-hover" style="background: var(--color-surface); padding: 1.5rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); text-align: center;">
                        <div style="height: 70px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                            <img src="./assets/images/لوجو جمعية الاسراء.jpg" alt="جمعية الإسراء الخيرية" style="max-height: 60px; max-width: 100%; object-fit: contain; border-radius: 6px;">
                        </div>
                        <h3 style="font-size: 1.1rem; color: var(--color-primary-dark); margin-bottom: 0.3rem;">جمعية الإسراء الخيرية بدمنهور</h3>
                        <p style="font-size: 0.84rem; color: var(--color-text-secondary); margin-bottom: 0.5rem;">الجهة المنفذة المعتمدة (إشهار #1124 لسنة 2006)</p>
                        <span class="badge badge-certified" style="font-size: 0.72rem;">الشريك الميداني الرسمي</span>
                    </div>

                    <!-- Partner 2 -->
                    <div class="card spring-hover" style="background: var(--color-surface); padding: 1.5rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); text-align: center;">
                        <div style="height: 70px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                            <img src="./assets/images/logo-edu.png" alt="مديرية التربية والتعليم بالبحيرة" style="max-height: 60px; max-width: 100%; object-fit: contain;">
                        </div>
                        <h3 style="font-size: 1.1rem; color: var(--color-primary-dark); margin-bottom: 0.3rem;">مديرية التربية والتعليم بالبحيرة</h3>
                        <p style="font-size: 0.84rem; color: var(--color-text-secondary); margin-bottom: 0.5rem;">موافقة رسمية وتنفيذ بـ 26 مدرسة معتمدة</p>
                        <span class="badge badge-certified" style="font-size: 0.72rem;">المظلة التعليمية المعتمدة</span>
                    </div>

                    <!-- Partner 3 -->
                    <div class="card spring-hover" style="background: var(--color-surface); padding: 1.5rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); text-align: center;">
                        <div style="height: 70px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                            <img src="./assets/images/logo-nisgp.png" alt="المبادرة الوطنية للمشروعات الخضراء الذكية" style="max-height: 60px; max-width: 100%; object-fit: contain;">
                        </div>
                        <h3 style="font-size: 1.1rem; color: var(--color-primary-dark); margin-bottom: 0.3rem;">المبادرة الوطنية للمشروعات الخضراء الذكية</h3>
                        <p style="font-size: 0.84rem; color: var(--color-text-secondary); margin-bottom: 0.5rem;">دورة 2026 – محافظة البحيرة</p>
                        <span class="badge badge-certified" style="font-size: 0.72rem;">المبادرة الوطنية NISGP</span>
                    </div>
                </div>

                <div style="text-align: center;">
                    <a href="#about" class="btn btn-outline spring-hover" style="padding: 0.75rem 2rem; font-size: 0.95rem; text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem;">
                        <span>استعرض كامل ملفات الملكية الفكرية وتفاصيل الشركاء والخط الزمني</span>
                        <i data-lucide="arrow-left" style="width: 16px; height: 16px;"></i>
                    </a>
                </div>
            </div>
        </section>

        <!-- Quick Access Gateways Section -->
        <section class="section" style="background: var(--color-surface); padding: 3rem 0 4rem; border-top: 1px solid var(--color-border);">
            <div class="container">
                <div class="section-header" style="text-align: center; margin-bottom: 2rem;">
                    <h2 class="section-title" style="font-size: 1.8rem; color: var(--color-primary-dark);">بوابات الوصول والخدمات السريعة</h2>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.25rem;">
                    <a href="#calculators" class="card spring-hover" style="background: var(--color-bg); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); text-decoration: none; color: inherit; display: block;">
                        <div style="color: var(--color-primary); margin-bottom: 0.5rem;"><i data-lucide="calculator" style="width: 32px; height: 32px;"></i></div>
                        <h3 style="font-size: 1.15rem; color: var(--color-primary-dark); margin-bottom: 0.3rem;">حاسبة الكربون والمالية</h3>
                        <p style="font-size: 0.85rem; color: var(--color-text-secondary); line-height: 1.5;">احسب الوفر الكربوني EPA WARM v16 وتوزيع العوائد بالأرقام.</p>
                    </a>

                    <a href="#forms" class="card spring-hover" style="background: var(--color-bg); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); text-decoration: none; color: inherit; display: block;">
                        <div style="color: #25D366; margin-bottom: 0.5rem;"><i data-lucide="send" style="width: 32px; height: 32px;"></i></div>
                        <h3 style="font-size: 1.15rem; color: var(--color-primary-dark); margin-bottom: 0.3rem;">نماذج التسجيل وواتساب</h3>
                        <p style="font-size: 0.85rem; color: var(--color-text-secondary); line-height: 1.5;">سجّل جمعيتك أو مدرستك أو انضم كمتطوع مباشرة عبر WhatsApp.</p>
                    </a>

                    <a href="#knowledge" class="card spring-hover" style="background: var(--color-bg); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); text-decoration: none; color: inherit; display: block;">
                        <div style="color: var(--color-secondary); margin-bottom: 0.5rem;"><i data-lucide="book-open" style="width: 32px; height: 32px;"></i></div>
                        <h3 style="font-size: 1.15rem; color: var(--color-primary-dark); margin-bottom: 0.3rem;">مكتبة الأنشطة المدرسية</h3>
                        <p style="font-size: 0.85rem; color: var(--color-text-secondary); line-height: 1.5;">دليل الأنشطة التفاعلية، تصنيع الورق، وتدوير الكرتون.</p>
                    </a>

                    <a href="#policy" class="card spring-hover" style="background: var(--color-bg); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); text-decoration: none; color: inherit; display: block;">
                        <div style="color: #EC4899; margin-bottom: 0.5rem;"><i data-lucide="shield-check" style="width: 32px; height: 32px;"></i></div>
                        <h3 style="font-size: 1.15rem; color: var(--color-primary-dark); margin-bottom: 0.3rem;">سياسة الحماية والأمان</h3>
                        <p style="font-size: 0.85rem; color: var(--color-text-secondary); line-height: 1.5;">ميثاق عدم التمييز الـ 15 مادة، الشكاوى السرية، وتحميل PDF.</p>
                    </a>
                </div>
            </div>
        </section>
    `;
}

function initHomeLogic() {
    // Animate Counters if in viewport
    const counters = document.querySelectorAll('#homeMetricsGrid .counter-value');
    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target')) || 0;
        const suffix = counter.getAttribute('data-suffix') || '';
        counter.textContent = target.toLocaleString('ar-EG') + suffix;
    });
}
