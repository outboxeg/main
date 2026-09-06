/* ==========================================================================
   Page Component: Policy & Protection View (pages/policy.js)
   Bara El-Sandouq – Smart Green School Project
   Document: سياسة الحماية وعدم التمييز وتلقي الشكاوى (الإصدار 1.0 / 2026)
   ========================================================================== */

function renderPolicyPage() {
    return `
        <!-- Policy Hero Header Section -->
        <section class="section" style="background: linear-gradient(135deg, rgba(11, 79, 63, 0.95), rgba(19, 78, 74, 0.98)), url('./assets/images/field-women.png') center/cover no-repeat; color: #FFFFFF; padding: 4.5rem 0 3.5rem; border-bottom: 1px solid var(--color-border); position: relative;">
            <div class="container" style="position: relative; z-index: 2;">
                <div style="max-width: 900px; margin: 0 auto; text-align: center;">
                    <!-- Accreditation Badges -->
                    <div style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(220, 252, 231, 0.18); color: #DCFCE7; border: 1px solid rgba(220, 252, 231, 0.35); padding: 0.45rem 1.25rem; font-size: 0.88rem; margin-bottom: 1.25rem; border-radius: var(--radius-full); backdrop-filter: blur(8px); flex-wrap: wrap; justify-content: center;">
                        <span style="display: flex; align-items: center; gap: 0.35rem; font-weight: 700;">
                            <i data-lucide="shield-check" style="width: 16px; height: 16px; color: #34D399;"></i>
                            وثيقة سياسة داخلية معتمدة للعمل بالمشروع
                        </span>
                        <span style="opacity: 0.5;">|</span>
                        <span>الإصدار 1.0 — عام 2026</span>
                    </div>

                    <h1 class="section-title" style="font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-family: 'Noto Naskh Arabic', serif; font-weight: 700; color: #FFFFFF; margin-bottom: 1rem; line-height: 1.35; text-shadow: 0 4px 16px rgba(0,0,0,0.3);">
                        سياسة الحماية وعدم التمييز وتلقي الشكاوى
                    </h1>

                    <p class="section-desc" style="color: #E2ECE9; font-size: 1.15rem; line-height: 1.8; max-width: 780px; margin: 0 auto 2rem;">
                        الميثاق الإداري والمهني الشامل لضمان بيئة عمل وتدريب آمنة، عادلة ومحترمة، وتكافؤ الفرص، وحماية حقوق المشاركات والعاملات والمتدربات في مبادرة «برة الصندوق – المدرسة الخضراء الذكية».
                    </p>

                    <!-- Official Accreditation Strip -->
                    <div style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: var(--radius-md); padding: 0.9rem 1.25rem; margin: 0 auto 2rem; max-width: 820px; display: flex; align-items: center; justify-content: center; gap: 1.5rem; flex-wrap: wrap; font-size: 0.9rem; color: #F4F1E8;">
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <i data-lucide="building-2" style="color: #34D399; width: 18px; height: 18px; flex-shrink: 0;"></i>
                            <span><strong>الجهة المنفذة والشريك الميداني:</strong> جمعية الإسراء الخيرية بدمنهور (إشهار #1124)</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <i data-lucide="award" style="color: #FDBA74; width: 18px; height: 18px; flex-shrink: 0;"></i>
                            <span><strong>صاحبة المبادرة والملكية الفكرية:</strong> أ. فاطمة عبد المجيد راضي</span>
                        </div>
                    </div>

                    <!-- Quick Actions Buttons -->
                    <div style="display: flex; gap: 0.85rem; justify-content: center; flex-wrap: wrap;">
                        <a href="./docs/guides/outbox-safety-policy.pdf" download="outbox-safety-policy-2026.pdf" target="_blank" class="btn btn-accent spring-hover" style="padding: 0.75rem 1.6rem; font-size: 0.98rem; text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem;">
                            <i data-lucide="download" style="width: 18px; height: 18px;"></i>
                            <span>تحميل وثيقة الـ PDF الرسمية</span>
                        </a>
                        <button onclick="switchPolicyTab('grievanceTab')" class="btn btn-outline spring-hover" style="padding: 0.75rem 1.5rem; font-size: 0.98rem; border-color: rgba(255,255,255,0.6); color: #FFFFFF; background: rgba(255,255,255,0.1); backdrop-filter: blur(8px); display: inline-flex; align-items: center; gap: 0.5rem;">
                            <i data-lucide="lock" style="width: 18px; height: 18px; color: #FDBA74;"></i>
                            <span>تقديم شكوى أو بلاغ سري</span>
                        </button>
                        <button onclick="switchPolicyTab('ackTab')" class="btn btn-outline spring-hover" style="padding: 0.75rem 1.5rem; font-size: 0.98rem; border-color: rgba(255,255,255,0.6); color: #FFFFFF; background: rgba(255,255,255,0.1); backdrop-filter: blur(8px); display: inline-flex; align-items: center; gap: 0.5rem;">
                            <i data-lucide="check-square" style="width: 18px; height: 18px; color: #34D399;"></i>
                            <span>توقيع إقرار الالتزام الرقمي</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Governance Highlights & Core Commitments (6 Cards) -->
        <section class="section" style="background: var(--color-surface); padding: 3.5rem 0 3rem; border-bottom: 1px solid var(--color-border);">
            <div class="container">
                <div class="section-header" style="text-align: center; margin-bottom: 2.5rem;">
                    <div class="section-subtitle" style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--color-primary); font-weight: 700;">
                        <i data-lucide="sparkles"></i> ركائز الأمان والحوكمة النسائية
                    </div>
                    <h2 class="section-title" style="font-size: 2rem; color: var(--color-primary-dark); margin-top: 0.4rem;">أبرز مؤشرات وضمانات السياسة المعتمدة</h2>
                    <p class="section-desc" style="color: var(--color-text-secondary); max-width: 650px; margin: 0.4rem auto 0;">التزام تطبيقي صارم بأعلى معايير الشفافية، تكافؤ الفرص والشمول المالي والاجتماعي.</p>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
                    <!-- Card 1 -->
                    <div class="card glass-card spring-hover" style="background: var(--color-bg); padding: 1.75rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); border-top: 4px solid #1F7A5A;">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                            <div style="width: 44px; height: 44px; background: rgba(31, 122, 90, 0.15); color: #1F7A5A; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                <i data-lucide="users" style="width: 22px; height: 22px;"></i>
                            </div>
                            <span class="badge badge-certified" style="font-size: 0.78rem;">100% قيادة نسائية</span>
                        </div>
                        <h3 style="font-size: 1.2rem; color: var(--color-primary-dark); margin-bottom: 0.5rem; font-weight: 700;">هيكل تنفيذي وإداري نسائي</h3>
                        <p style="color: var(--color-text-secondary); font-size: 0.92rem; line-height: 1.6; margin: 0;">
                            10 فرق عمل ميدانية نسائية بالكامل (10 سيدات لكل فريق)، وإدارة تنفيذية نسائية متكاملة مع قصر دور الرجال على الاستشارات المؤقتة فقط.
                        </p>
                    </div>

                    <!-- Card 2 -->
                    <div class="card glass-card spring-hover" style="background: var(--color-bg); padding: 1.75rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); border-top: 4px solid #1C9A8B;">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                            <div style="width: 44px; height: 44px; background: rgba(28, 154, 139, 0.15); color: #1C9A8B; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                <i data-lucide="graduation-cap" style="width: 22px; height: 22px;"></i>
                            </div>
                            <span class="badge badge-certified" style="font-size: 0.78rem;">217 متدربة</span>
                        </div>
                        <h3 style="font-size: 1.2rem; color: var(--color-primary-dark); margin-bottom: 0.5rem; font-weight: 700;">6 برامج تدريب وبناء قدرات</h3>
                        <p style="color: var(--color-text-secondary); font-size: 0.92rem; line-height: 1.6; margin: 0;">
                            متوسط 30 ساعة تدريبية لكل برنامج، شملت تدريب المعلمات وخريجات التربية الفنية في التدوير الورقي، التسويق الرقمي، والتصميم بالذكاء الاصطناعي.
                        </p>
                    </div>

                    <!-- Card 3 -->
                    <div class="card glass-card spring-hover" style="background: var(--color-bg); padding: 1.75rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); border-top: 4px solid #D97706;">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                            <div style="width: 44px; height: 44px; background: rgba(217, 119, 6, 0.15); color: #D97706; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                <i data-lucide="credit-card" style="width: 22px; height: 22px;"></i>
                            </div>
                            <span class="badge badge-certified" style="font-size: 0.78rem;">65% محافظ رقمية</span>
                        </div>
                        <h3 style="font-size: 1.2rem; color: var(--color-primary-dark); margin-bottom: 0.5rem; font-weight: 700;">الشمول المالي والتمكين</h3>
                        <p style="color: var(--color-text-secondary); font-size: 0.92rem; line-height: 1.6; margin: 0;">
                            تشجيع استقلالية المرأة والدفع الإلكتروني، وتوفير أجور عادلة متساوية عن العمل المتساوي القيمة ودعم التحول الرقمي للتحصيل.
                        </p>
                    </div>

                    <!-- Card 4 -->
                    <div class="card glass-card spring-hover" style="background: var(--color-bg); padding: 1.75rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); border-top: 4px solid #2563EB;">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                            <div style="width: 44px; height: 44px; background: rgba(37, 99, 235, 0.15); color: #2563EB; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                <i data-lucide="clock" style="width: 22px; height: 22px;"></i>
                            </div>
                            <span class="badge badge-certified" style="font-size: 0.78rem;">5–6 ساعات يومياً</span>
                        </div>
                        <h3 style="font-size: 1.2rem; color: var(--color-primary-dark); margin-bottom: 0.5rem; font-weight: 700;">بيئة عمل مرنة وآمنة</h3>
                        <p style="color: var(--color-text-secondary); font-size: 0.92rem; line-height: 1.6; margin: 0;">
                            مراعاة تامة للظروف الأسرية والاجتماعية للسيدات، وتوفير بيئة تدريب محترمة وشاملة تدعم التوازن بين العمل والحياة.
                        </p>
                    </div>

                    <!-- Card 5 -->
                    <div class="card glass-card spring-hover" style="background: var(--color-bg); padding: 1.75rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); border-top: 4px solid #DC2626;">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                            <div style="width: 44px; height: 44px; background: rgba(220, 38, 38, 0.15); color: #DC2626; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                <i data-lucide="shield-alert" style="width: 22px; height: 22px;"></i>
                            </div>
                            <span class="badge badge-certified" style="font-size: 0.78rem; background: #FEE2E2; color: #991B1B; border-color: #FCA5A5;">صفر تسامح (Zero Tolerance)</span>
                        </div>
                        <h3 style="font-size: 1.2rem; color: var(--color-primary-dark); margin-bottom: 0.5rem; font-weight: 700;">حظر التحرش والتمييز</h3>
                        <p style="color: var(--color-text-secondary); font-size: 0.92rem; line-height: 1.6; margin: 0;">
                            حظر مطلق لأي سلوك مسيء أو تحرش أو استغلال للسلطة، وحماية كاملة للمبلّغات من أي إجراء انتقامي أو إقصاء.
                        </p>
                    </div>

                    <!-- Card 6 -->
                    <div class="card glass-card spring-hover" style="background: var(--color-bg); padding: 1.75rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); border-top: 4px solid #059669;">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                            <div style="width: 44px; height: 44px; background: rgba(5, 150, 105, 0.15); color: #059669; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                <i data-lucide="lock" style="width: 22px; height: 22px;"></i>
                            </div>
                            <span class="badge badge-certified" style="font-size: 0.78rem;">سرية وحماية مشددة</span>
                        </div>
                        <h3 style="font-size: 1.2rem; color: var(--color-primary-dark); margin-bottom: 0.5rem; font-weight: 700;">مسار شكاوى عادل وسري</h3>
                        <p style="color: var(--color-text-secondary); font-size: 0.92rem; line-height: 1.6; margin: 0;">
                            سجل مؤمّن ومحدود الوصول، استماع محايد بدون افتراض إدانة، واتخاذ إجراءات تصحيحية رادعة مع احترام خصوصية جميع الأطراف.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Main Interactive Tabs Section -->
        <section class="section" style="background: var(--color-bg); padding: 3.5rem 0 5rem;">
            <div class="container">
                <!-- Navigation Tabs Bar -->
                <div class="touch-scroll-wrapper">
                    <div class="policy-tabs-nav" role="tablist">
                        <button class="policy-tab-btn active" id="btn-articlesTab" onclick="switchPolicyTab('articlesTab')" role="tab" aria-selected="true">
                            <i data-lucide="book-open" style="width: 18px; height: 18px;"></i>
                            <span>نص السياسة الكامل (15 مادة)</span>
                        </button>
                        <button class="policy-tab-btn" id="btn-workflowTab" onclick="switchPolicyTab('workflowTab')" role="tab" aria-selected="false">
                            <i data-lucide="workflow" style="width: 18px; height: 18px;"></i>
                            <span>مسار وضمانات الشكاوى</span>
                        </button>
                        <button class="policy-tab-btn" id="btn-grievanceTab" onclick="switchPolicyTab('grievanceTab')" role="tab" aria-selected="false">
                            <i data-lucide="shield-alert" style="width: 18px; height: 18px; color: #DC2626;"></i>
                            <span>تقديم بلاغ / شكوى سرية</span>
                        </button>
                        <button class="policy-tab-btn" id="btn-ackTab" onclick="switchPolicyTab('ackTab')" role="tab" aria-selected="false">
                            <i data-lucide="file-check" style="width: 18px; height: 18px; color: #059669;"></i>
                            <span>إقرار الالتزام الرقمي</span>
                        </button>
                        <button class="policy-tab-btn" id="btn-pdfTab" onclick="switchPolicyTab('pdfTab')" role="tab" aria-selected="false">
                            <i data-lucide="file-text" style="width: 18px; height: 18px; color: #2563EB;"></i>
                            <span>الوثيقة الرسمية (PDF)</span>
                        </button>
                    </div>
                </div>

                <!-- TAB 1: Complete Articles Accordion & Full Text -->
                <div class="policy-tab-pane" id="articlesTab" style="display: block;">
                    <div style="max-width: 900px; margin: 0 auto;">
                        <!-- Search & Quick Filter inside Policy Articles -->
                        <div style="background: var(--color-surface); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); margin-bottom: 2rem; display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
                            <div style="position: relative; flex: 1; min-width: 260px;">
                                <i data-lucide="search" style="position: absolute; right: 12px; top: 50%; transform: translateY(-50%); width: 18px; height: 18px; color: var(--color-text-muted);"></i>
                                <input type="text" id="policySearchInput" placeholder="ابحث في نصوص ومواد السياسة (مثل: تمكين، تحرش، شكاوى، شمول مالي)..." oninput="filterPolicyArticles()" style="width: 100%; padding: 0.65rem 2.5rem 0.65rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--color-border); background: var(--color-bg); font-family: inherit; font-size: 0.95rem; outline: none;">
                            </div>
                            <button onclick="expandAllArticles(true)" class="btn btn-outline" style="padding: 0.6rem 1rem; font-size: 0.85rem;">توسيع الكل</button>
                            <button onclick="expandAllArticles(false)" class="btn btn-outline" style="padding: 0.6rem 1rem; font-size: 0.85rem;">طي الكل</button>
                        </div>

                        <!-- Articles List -->
                        <div class="articles-list" id="articlesList" style="display: flex; flex-direction: column; gap: 1rem;">
                            
                            <!-- Article 1 -->
                            <div class="article-card card glass-card" style="background: var(--color-surface); border-radius: var(--radius-md); border: 1px solid var(--color-border); overflow: hidden;">
                                <button class="article-toggle-btn" onclick="toggleArticle(this)" style="width: 100%; padding: 1.25rem 1.5rem; text-align: right; background: transparent; border: none; display: flex; align-items: center; justify-content: space-between; cursor: pointer; font-family: inherit;">
                                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                                        <span class="article-num" style="background: rgba(31, 122, 90, 0.12); color: #1F7A5A; font-weight: 700; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">1</span>
                                        <h3 style="margin: 0; font-size: 1.15rem; color: var(--color-primary-dark); font-weight: 700;">أولاً: الغرض من السياسة</h3>
                                    </div>
                                    <i data-lucide="chevron-down" class="toggle-icon" style="transition: transform 200ms ease; color: var(--color-text-secondary);"></i>
                                </button>
                                <div class="article-body" style="padding: 0 1.5rem 1.5rem; color: var(--color-text); font-size: 0.98rem; line-height: 1.8; border-top: 1px solid var(--color-border); padding-top: 1.25rem;">
                                    <p>
                                        تهدف هذه السياسة إلى ضمان بيئة عمل وتدريب آمنة، عادلة، محترمة وشاملة داخل مبادرة «برة الصندوق – المدرسة الخضراء الذكية»، مع ضمان تكافؤ الفرص وعدم التمييز، وحماية جميع المشاركات والعاملات والمتدربات من أي إساءة أو تحرش أو استغلال أو انتقام، ووضع مسار واضح وسري وعادل لتلقي الشكاوى ودراستها واتخاذ الإجراءات المناسبة.
                                    </p>
                                </div>
                            </div>

                            <!-- Article 2 -->
                            <div class="article-card card glass-card" style="background: var(--color-surface); border-radius: var(--radius-md); border: 1px solid var(--color-border); overflow: hidden;">
                                <button class="article-toggle-btn" onclick="toggleArticle(this)" style="width: 100%; padding: 1.25rem 1.5rem; text-align: right; background: transparent; border: none; display: flex; align-items: center; justify-content: space-between; cursor: pointer; font-family: inherit;">
                                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                                        <span class="article-num" style="background: rgba(31, 122, 90, 0.12); color: #1F7A5A; font-weight: 700; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">2</span>
                                        <h3 style="margin: 0; font-size: 1.15rem; color: var(--color-primary-dark); font-weight: 700;">ثانياً: نطاق التطبيق</h3>
                                    </div>
                                    <i data-lucide="chevron-down" class="toggle-icon" style="transition: transform 200ms ease; color: var(--color-text-secondary);"></i>
                                </button>
                                <div class="article-body" style="padding: 0 1.5rem 1.5rem; color: var(--color-text); font-size: 0.98rem; line-height: 1.8; border-top: 1px solid var(--color-border); padding-top: 1.25rem;">
                                    <ul style="padding-right: 1.5rem; margin: 0;">
                                        <li style="margin-bottom: 0.5rem;">تسري السياسة على الإدارة، وفريق المشروع، وفرق العمل الميدانية، والمدربات، والمتدربات، والمتطوعات، والمتعاونات، وأي شخص يشارك في أنشطة المشروع أو يمثل المشروع أمام الشركاء والمجتمع.</li>
                                        <li style="margin-bottom: 0.5rem;">تشمل السياسة أنشطة التدريب، والإنتاج، والتسويق، والزيارات الميدانية، والفعاليات، والاجتماعات، والاتصالات الرقمية، وأي نشاط مرتبط بالمشروع.</li>
                                        <li>تُطبق السياسة داخل مقرات الجمعيات والمدارس وأماكن التدريب والعمل، وكذلك في قنوات التواصل الإلكترونية المستخدمة لأغراض المشروع.</li>
                                    </ul>
                                </div>
                            </div>

                            <!-- Article 3 -->
                            <div class="article-card card glass-card" style="background: var(--color-surface); border-radius: var(--radius-md); border: 1px solid var(--color-border); overflow: hidden;">
                                <button class="article-toggle-btn" onclick="toggleArticle(this)" style="width: 100%; padding: 1.25rem 1.5rem; text-align: right; background: transparent; border: none; display: flex; align-items: center; justify-content: space-between; cursor: pointer; font-family: inherit;">
                                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                                        <span class="article-num" style="background: rgba(31, 122, 90, 0.12); color: #1F7A5A; font-weight: 700; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">3</span>
                                        <h3 style="margin: 0; font-size: 1.15rem; color: var(--color-primary-dark); font-weight: 700;">ثالثاً: التزام المشروع بالتمكين وتكافؤ الفرص</h3>
                                    </div>
                                    <i data-lucide="chevron-down" class="toggle-icon" style="transition: transform 200ms ease; color: var(--color-text-secondary);"></i>
                                </button>
                                <div class="article-body" style="padding: 0 1.5rem 1.5rem; color: var(--color-text); font-size: 0.98rem; line-height: 1.8; border-top: 1px solid var(--color-border); padding-top: 1.25rem;">
                                    <p style="margin-bottom: 0.75rem;">
                                        يعتمد المشروع على مشاركة نسائية واسعة في الإدارة والتنفيذ، حيث تتولى السيدات كامل الأدوار الإدارية والتشغيلية الأساسية، بينما يقتصر وجود الرجال في نطاق المشروع على أدوار استشارية مؤقتة، بما يدعم قيادة المرأة ومشاركتها الفعلية في صنع القرار.
                                    </p>
                                    <ul style="padding-right: 1.5rem; margin: 0;">
                                        <li style="margin-bottom: 0.5rem;">لا يجوز التمييز على أساس النوع الاجتماعي أو العمر أو الحالة الاجتماعية أو الخلفية التعليمية أو محل الإقامة أو أي سبب غير مرتبط مباشرة بمتطلبات الدور أو النشاط.</li>
                                        <li style="margin-bottom: 0.5rem;">تُتاح فرص التدريب والتطوير واكتساب المهارات على أساس الكفاءة والاحتياج الفعلي وطبيعة الدور.</li>
                                        <li style="margin-bottom: 0.5rem;">يلتزم المشروع بمبدأ الأجر أو المقابل العادل عن العمل المتساوي في القيمة، متى كان هناك مقابل مالي للعمل.</li>
                                        <li>تُشجع السياسة مشاركة النساء في الأدوار القيادية والفنية والتقنية والتسويقية والإدارية، وليس فقط الأدوار التنفيذية.</li>
                                    </ul>
                                </div>
                            </div>

                            <!-- Article 4 -->
                            <div class="article-card card glass-card" style="background: var(--color-surface); border-radius: var(--radius-md); border: 1px solid var(--color-border); overflow: hidden;">
                                <button class="article-toggle-btn" onclick="toggleArticle(this)" style="width: 100%; padding: 1.25rem 1.5rem; text-align: right; background: transparent; border: none; display: flex; align-items: center; justify-content: space-between; cursor: pointer; font-family: inherit;">
                                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                                        <span class="article-num" style="background: rgba(31, 122, 90, 0.12); color: #1F7A5A; font-weight: 700; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">4</span>
                                        <h3 style="margin: 0; font-size: 1.15rem; color: var(--color-primary-dark); font-weight: 700;">رابعاً: بيئة العمل الآمنة والمرنة</h3>
                                    </div>
                                    <i data-lucide="chevron-down" class="toggle-icon" style="transition: transform 200ms ease; color: var(--color-text-secondary);"></i>
                                </button>
                                <div class="article-body" style="padding: 0 1.5rem 1.5rem; color: var(--color-text); font-size: 0.98rem; line-height: 1.8; border-top: 1px solid var(--color-border); padding-top: 1.25rem;">
                                    <ul style="padding-right: 1.5rem; margin: 0;">
                                        <li style="margin-bottom: 0.5rem;">يعتمد المشروع ساعات عمل مرنة تتناسب مع طبيعة التنفيذ والظروف الأسرية والاجتماعية للمشاركات، ويبلغ متوسط ساعات العمل الفعلية لفريق المشروع نحو <strong>5–6 ساعات يومياً</strong>.</li>
                                        <li style="margin-bottom: 0.5rem;">يُحظر أي سلوك يتضمن تحرشاً أو تهديداً أو إساءة لفظية أو بدنية أو نفسية أو استغلالاً للسلطة أو الابتزاز أو الإهانة.</li>
                                        <li style="margin-bottom: 0.5rem;">يلتزم المسؤولون عن الأنشطة باتخاذ إجراءات وقائية مناسبة أثناء التدريب والفعاليات والعمل الميداني، مع احترام الخصوصية والكرامة الشخصية.</li>
                                        <li>يجوز للمشاركة أو العاملة الإبلاغ عن أي واقعة مقلقة دون الحاجة إلى مواجهة الشخص المشكو في حقه بنفسها.</li>
                                    </ul>
                                </div>
                            </div>

                            <!-- Article 5 -->
                            <div class="article-card card glass-card" style="background: var(--color-surface); border-radius: var(--radius-md); border: 1px solid var(--color-border); overflow: hidden;">
                                <button class="article-toggle-btn" onclick="toggleArticle(this)" style="width: 100%; padding: 1.25rem 1.5rem; text-align: right; background: transparent; border: none; display: flex; align-items: center; justify-content: space-between; cursor: pointer; font-family: inherit;">
                                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                                        <span class="article-num" style="background: rgba(220, 38, 38, 0.12); color: #DC2626; font-weight: 700; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">5</span>
                                        <h3 style="margin: 0; font-size: 1.15rem; color: var(--color-primary-dark); font-weight: 700;">خامساً: الحماية من التحرش والعنف والاستغلال</h3>
                                    </div>
                                    <i data-lucide="chevron-down" class="toggle-icon" style="transition: transform 200ms ease; color: var(--color-text-secondary);"></i>
                                </button>
                                <div class="article-body" style="padding: 0 1.5rem 1.5rem; color: var(--color-text); font-size: 0.98rem; line-height: 1.8; border-top: 1px solid var(--color-border); padding-top: 1.25rem;">
                                    <ul style="padding-right: 1.5rem; margin: 0;">
                                        <li style="margin-bottom: 0.5rem;">يُعتبر التحرش أو العنف أو التهديد أو الاستغلال أو أي سلوك جنسي غير مرغوب فيه <strong>مخالفة جسيمة</strong> لسياسة المشروع.</li>
                                        <li style="margin-bottom: 0.5rem;">يُحظر استغلال أي علاقة إدارية أو تدريبية أو إشرافية للحصول على منفعة شخصية أو ممارسة ضغط على أي مشاركة.</li>
                                        <li>تتعامل إدارة المشروع مع البلاغات المتعلقة بالحماية بجدية وسرية، وتعمل على منع تكرار الضرر وحماية المبلّغة من الانتقام.</li>
                                    </ul>
                                </div>
                            </div>

                            <!-- Article 6 -->
                            <div class="article-card card glass-card" style="background: var(--color-surface); border-radius: var(--radius-md); border: 1px solid var(--color-border); overflow: hidden;">
                                <button class="article-toggle-btn" onclick="toggleArticle(this)" style="width: 100%; padding: 1.25rem 1.5rem; text-align: right; background: transparent; border: none; display: flex; align-items: center; justify-content: space-between; cursor: pointer; font-family: inherit;">
                                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                                        <span class="article-num" style="background: rgba(31, 122, 90, 0.12); color: #1F7A5A; font-weight: 700; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">6</span>
                                        <h3 style="margin: 0; font-size: 1.15rem; color: var(--color-primary-dark); font-weight: 700;">سادساً: سياسة عدم الانتقام</h3>
                                    </div>
                                    <i data-lucide="chevron-down" class="toggle-icon" style="transition: transform 200ms ease; color: var(--color-text-secondary);"></i>
                                </button>
                                <div class="article-body" style="padding: 0 1.5rem 1.5rem; color: var(--color-text); font-size: 0.98rem; line-height: 1.8; border-top: 1px solid var(--color-border); padding-top: 1.25rem;">
                                    <p>
                                        يُحظر اتخاذ أي إجراء انتقامي ضد أي شخص يقدم شكوى بحسن نية، أو يشارك في فحص شكوى، أو يقدم معلومات أو شهادة مرتبطة بها. ويشمل الانتقام التهديد، أو الإقصاء، أو التضييق، أو حرمان الشخص من فرصة تدريب أو مشاركة دون سبب موضوعي، أو أي معاملة سلبية بسبب الإبلاغ.
                                    </p>
                                </div>
                            </div>

                            <!-- Article 7 -->
                            <div class="article-card card glass-card" style="background: var(--color-surface); border-radius: var(--radius-md); border: 1px solid var(--color-border); overflow: hidden;">
                                <button class="article-toggle-btn" onclick="toggleArticle(this)" style="width: 100%; padding: 1.25rem 1.5rem; text-align: right; background: transparent; border: none; display: flex; align-items: center; justify-content: space-between; cursor: pointer; font-family: inherit;">
                                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                                        <span class="article-num" style="background: rgba(31, 122, 90, 0.12); color: #1F7A5A; font-weight: 700; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">7</span>
                                        <h3 style="margin: 0; font-size: 1.15rem; color: var(--color-primary-dark); font-weight: 700;">سابعاً: آلية تلقي الشكاوى</h3>
                                    </div>
                                    <i data-lucide="chevron-down" class="toggle-icon" style="transition: transform 200ms ease; color: var(--color-text-secondary);"></i>
                                </button>
                                <div class="article-body" style="padding: 0 1.5rem 1.5rem; color: var(--color-text); font-size: 0.98rem; line-height: 1.8; border-top: 1px solid var(--color-border); padding-top: 1.25rem;">
                                    <ul style="padding-right: 1.5rem; margin: 0;">
                                        <li style="margin-bottom: 0.5rem;">يجوز تقديم الشكوى شفهياً أو كتابياً إلى مسؤولة الإدارة أو الشخص المحدد من إدارة المشروع لاستقبال الشكاوى.</li>
                                        <li style="margin-bottom: 0.5rem;">تُسجل الشكوى بالقدر اللازم لدراستها، مع احترام سرية بيانات مقدم الشكوى وطبيعة الواقعة.</li>
                                        <li style="margin-bottom: 0.5rem;">يتم تقييم الشكوى مبدئياً لتحديد درجة الخطورة والحاجة إلى إجراء عاجل لحماية أي شخص معرض للضرر.</li>
                                        <li style="margin-bottom: 0.5rem;">يتم الاستماع إلى الأطراف ذات الصلة بصورة مهنية ومحايدة، مع عدم افتراض الإدانة قبل استكمال الفحص.</li>
                                        <li style="margin-bottom: 0.5rem;">عند ثبوت المخالفة، تتخذ الإدارة الإجراء الإداري المناسب وفق طبيعة الواقعة، مع إحالة الوقائع التي تستلزم تدخلاً قانونياً أو رسمياً إلى الجهات المختصة.</li>
                                        <li>يتم الاحتفاظ بسجل للشكاوى والإجراءات المتخذة بصورة آمنة ومحدودة الوصول.</li>
                                    </ul>
                                </div>
                            </div>

                            <!-- Article 8 -->
                            <div class="article-card card glass-card" style="background: var(--color-surface); border-radius: var(--radius-md); border: 1px solid var(--color-border); overflow: hidden;">
                                <button class="article-toggle-btn" onclick="toggleArticle(this)" style="width: 100%; padding: 1.25rem 1.5rem; text-align: right; background: transparent; border: none; display: flex; align-items: center; justify-content: space-between; cursor: pointer; font-family: inherit;">
                                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                                        <span class="article-num" style="background: rgba(31, 122, 90, 0.12); color: #1F7A5A; font-weight: 700; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">8</span>
                                        <h3 style="margin: 0; font-size: 1.15rem; color: var(--color-primary-dark); font-weight: 700;">ثامناً: السرية وحماية البيانات</h3>
                                    </div>
                                    <i data-lucide="chevron-down" class="toggle-icon" style="transition: transform 200ms ease; color: var(--color-text-secondary);"></i>
                                </button>
                                <div class="article-body" style="padding: 0 1.5rem 1.5rem; color: var(--color-text); font-size: 0.98rem; line-height: 1.8; border-top: 1px solid var(--color-border); padding-top: 1.25rem;">
                                    <ul style="padding-right: 1.5rem; margin: 0;">
                                        <li style="margin-bottom: 0.5rem;">تتعامل إدارة المشروع مع معلومات الشكاوى باعتبارها معلومات حساسة ولا يتم تداولها إلا مع الأشخاص الذين تقتضي مسؤولياتهم ذلك.</li>
                                        <li style="margin-bottom: 0.5rem;">لا تُستخدم تفاصيل الشكاوى لأغراض إعلامية أو دعائية.</li>
                                        <li style="margin-bottom: 0.5rem;">تُراعى الموافقات اللازمة عند استخدام الصور أو بيانات المشاركات والمتدربات في التوثيق أو النشر.</li>
                                        <li>يتم حفظ المستندات والسجلات المتعلقة بالشكاوى في مكان أو نظام وصوله مقيد.</li>
                                    </ul>
                                </div>
                            </div>

                            <!-- Article 9 -->
                            <div class="article-card card glass-card" style="background: var(--color-surface); border-radius: var(--radius-md); border: 1px solid var(--color-border); overflow: hidden;">
                                <button class="article-toggle-btn" onclick="toggleArticle(this)" style="width: 100%; padding: 1.25rem 1.5rem; text-align: right; background: transparent; border: none; display: flex; align-items: center; justify-content: space-between; cursor: pointer; font-family: inherit;">
                                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                                        <span class="article-num" style="background: rgba(31, 122, 90, 0.12); color: #1F7A5A; font-weight: 700; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">9</span>
                                        <h3 style="margin: 0; font-size: 1.15rem; color: var(--color-primary-dark); font-weight: 700;">تاسعاً: التدريب وبناء القدرات</h3>
                                    </div>
                                    <i data-lucide="chevron-down" class="toggle-icon" style="transition: transform 200ms ease; color: var(--color-text-secondary);"></i>
                                </button>
                                <div class="article-body" style="padding: 0 1.5rem 1.5rem; color: var(--color-text); font-size: 0.98rem; line-height: 1.8; border-top: 1px solid var(--color-border); padding-top: 1.25rem;">
                                    <p style="margin-bottom: 0.75rem;">
                                        يلتزم المشروع بتوفير فرص متخصصة لبناء قدرات النساء والمشاركات، وقد تم تنفيذ برامج تدريبية متنوعة تشمل التدريب الفني على استخدام الورق في تنفيذ الوسائل التعليمية، والتسويق الإلكتروني للمنتجات، والتصميم الفني باستخدام أدوات الذكاء الاصطناعي. بلغ عدد البرامج التدريبية <strong>6 برامج</strong>، بمتوسط <strong>30 ساعة تدريبية</strong> لكل برنامج.
                                    </p>
                                    <p style="margin: 0;">
                                        كما شملت المشاركة التدريبية فريق المشروع، إضافة إلى <strong>217 متدربة</strong> من المدرسات بالمدارس، وفرق التنسيق بالجمعيات الشريكة، وطلاب وخريجات التربية الفنية، بما يعزز نقل المعرفة ورفع قدرة النساء على المشاركة في الاقتصاد الأخضر والاقتصاد الدائري.
                                    </p>
                                </div>
                            </div>

                            <!-- Article 10 -->
                            <div class="article-card card glass-card" style="background: var(--color-surface); border-radius: var(--radius-md); border: 1px solid var(--color-border); overflow: hidden;">
                                <button class="article-toggle-btn" onclick="toggleArticle(this)" style="width: 100%; padding: 1.25rem 1.5rem; text-align: right; background: transparent; border: none; display: flex; align-items: center; justify-content: space-between; cursor: pointer; font-family: inherit;">
                                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                                        <span class="article-num" style="background: rgba(31, 122, 90, 0.12); color: #1F7A5A; font-weight: 700; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">10</span>
                                        <h3 style="margin: 0; font-size: 1.15rem; color: var(--color-primary-dark); font-weight: 700;">عاشراً: الهيكل النسائي للمشروع</h3>
                                    </div>
                                    <i data-lucide="chevron-down" class="toggle-icon" style="transition: transform 200ms ease; color: var(--color-text-secondary);"></i>
                                </button>
                                <div class="article-body" style="padding: 0 1.5rem 1.5rem; color: var(--color-text); font-size: 0.98rem; line-height: 1.8; border-top: 1px solid var(--color-border); padding-top: 1.25rem;">
                                    <ul style="padding-right: 1.5rem; margin: 0;">
                                        <li style="margin-bottom: 0.5rem;">يتكون التنفيذ الميداني من <strong>10 فرق عمل إجمالاً</strong>، بواقع فريقين لكل جمعية شريكة.</li>
                                        <li style="margin-bottom: 0.5rem;">يتكون كل فريق من <strong>10 سيدات وفتيات</strong>، بما يجعل فرق التنفيذ الميداني نسائية بالكامل (100%).</li>
                                        <li style="margin-bottom: 0.5rem;">الإدارة الأساسية للمشروع من السيدات، بينما يقتصر وجود الرجال على الاستشارة المؤقتة، دون أن يشكل ذلك جزءاً من الإدارة التنفيذية اليومية.</li>
                                        <li>تُشكل خريجات التربية الفنية والمؤهلات متوسطات التعليم نسبة تقارب <strong>45%</strong> من إجمالي المشاركات، بما يعكس توجيه المشروع إلى فئات قادرة على اكتساب مهارات عملية وتحويلها إلى فرص اقتصادية.</li>
                                    </ul>
                                </div>
                            </div>

                            <!-- Article 11 -->
                            <div class="article-card card glass-card" style="background: var(--color-surface); border-radius: var(--radius-md); border: 1px solid var(--color-border); overflow: hidden;">
                                <button class="article-toggle-btn" onclick="toggleArticle(this)" style="width: 100%; padding: 1.25rem 1.5rem; text-align: right; background: transparent; border: none; display: flex; align-items: center; justify-content: space-between; cursor: pointer; font-family: inherit;">
                                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                                        <span class="article-num" style="background: rgba(31, 122, 90, 0.12); color: #1F7A5A; font-weight: 700; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">11</span>
                                        <h3 style="margin: 0; font-size: 1.15rem; color: var(--color-primary-dark); font-weight: 700;">الحادي عشر: الشمول المالي والتمكين الاقتصادي</h3>
                                    </div>
                                    <i data-lucide="chevron-down" class="toggle-icon" style="transition: transform 200ms ease; color: var(--color-text-secondary);"></i>
                                </button>
                                <div class="article-body" style="padding: 0 1.5rem 1.5rem; color: var(--color-text); font-size: 0.98rem; line-height: 1.8; border-top: 1px solid var(--color-border); padding-top: 1.25rem;">
                                    <p>
                                        يدعم المشروع استقلالية المرأة وقدرتها على الاستفادة الاقتصادية من المهارات المكتسبة، ويشجع على استخدام أدوات الدفع والتحصيل الرقمي. وتُشير بيانات المشروع إلى امتلاك نحو <strong>65% من إجمالي فريق العمل محافظ إلكترونية</strong>، بما يمثل خطوة عملية نحو تعزيز الشمول المالي.
                                    </p>
                                </div>
                            </div>

                            <!-- Article 12 -->
                            <div class="article-card card glass-card" style="background: var(--color-surface); border-radius: var(--radius-md); border: 1px solid var(--color-border); overflow: hidden;">
                                <button class="article-toggle-btn" onclick="toggleArticle(this)" style="width: 100%; padding: 1.25rem 1.5rem; text-align: right; background: transparent; border: none; display: flex; align-items: center; justify-content: space-between; cursor: pointer; font-family: inherit;">
                                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                                        <span class="article-num" style="background: rgba(31, 122, 90, 0.12); color: #1F7A5A; font-weight: 700; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">12</span>
                                        <h3 style="margin: 0; font-size: 1.15rem; color: var(--color-primary-dark); font-weight: 700;">الثاني عشر: المسؤوليات</h3>
                                    </div>
                                    <i data-lucide="chevron-down" class="toggle-icon" style="transition: transform 200ms ease; color: var(--color-text-secondary);"></i>
                                </button>
                                <div class="article-body" style="padding: 0 1.5rem 1.5rem; color: var(--color-text); font-size: 0.98rem; line-height: 1.8; border-top: 1px solid var(--color-border); padding-top: 1.25rem;">
                                    <ul style="padding-right: 1.5rem; margin: 0;">
                                        <li style="margin-bottom: 0.5rem;"><strong>الإدارة:</strong> اعتماد السياسة، ضمان تطبيقها، وتوفير الموارد والإجراءات اللازمة.</li>
                                        <li style="margin-bottom: 0.5rem;"><strong>مسؤولة / مسؤول الشكاوى:</strong> استقبال البلاغات، توثيقها، حماية السرية، ورفع التوصيات للإدارة.</li>
                                        <li style="margin-bottom: 0.5rem;"><strong>قائدات فرق العمل:</strong> نشر السياسة، منع السلوكيات المخالفة، والإبلاغ عن أي واقعة تستدعي التدخل.</li>
                                        <li><strong>جميع أعضاء المشروع:</strong> الالتزام بالسياسة واحترام حقوق وكرامة الآخرين والإبلاغ عن المخاطر أو المخالفات بحسن نية.</li>
                                    </ul>
                                </div>
                            </div>

                            <!-- Article 13 -->
                            <div class="article-card card glass-card" style="background: var(--color-surface); border-radius: var(--radius-md); border: 1px solid var(--color-border); overflow: hidden;">
                                <button class="article-toggle-btn" onclick="toggleArticle(this)" style="width: 100%; padding: 1.25rem 1.5rem; text-align: right; background: transparent; border: none; display: flex; align-items: center; justify-content: space-between; cursor: pointer; font-family: inherit;">
                                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                                        <span class="article-num" style="background: rgba(31, 122, 90, 0.12); color: #1F7A5A; font-weight: 700; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">13</span>
                                        <h3 style="margin: 0; font-size: 1.15rem; color: var(--color-primary-dark); font-weight: 700;">الثالث عشر: المخالفات والإجراءات التصحيحية</h3>
                                    </div>
                                    <i data-lucide="chevron-down" class="toggle-icon" style="transition: transform 200ms ease; color: var(--color-text-secondary);"></i>
                                </button>
                                <div class="article-body" style="padding: 0 1.5rem 1.5rem; color: var(--color-text); font-size: 0.98rem; line-height: 1.8; border-top: 1px solid var(--color-border); padding-top: 1.25rem;">
                                    <p>
                                        تتعامل إدارة المشروع مع المخالفات وفق مبدأ التناسب والعدالة، وقد تشمل الإجراءات: <strong>التنبيه، أو الإنذار، أو إيقاف المشاركة في النشاط، أو إنهاء التعاون</strong>، أو الإحالة إلى الجهات المختصة عند وجود شبهة مخالفة قانونية، بحسب طبيعة الواقعة ونتائج الفحص.
                                    </p>
                                </div>
                            </div>

                            <!-- Article 14 -->
                            <div class="article-card card glass-card" style="background: var(--color-surface); border-radius: var(--radius-md); border: 1px solid var(--color-border); overflow: hidden;">
                                <button class="article-toggle-btn" onclick="toggleArticle(this)" style="width: 100%; padding: 1.25rem 1.5rem; text-align: right; background: transparent; border: none; display: flex; align-items: center; justify-content: space-between; cursor: pointer; font-family: inherit;">
                                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                                        <span class="article-num" style="background: rgba(31, 122, 90, 0.12); color: #1F7A5A; font-weight: 700; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">14</span>
                                        <h3 style="margin: 0; font-size: 1.15rem; color: var(--color-primary-dark); font-weight: 700;">الرابع عشر: المتابعة والمراجعة</h3>
                                    </div>
                                    <i data-lucide="chevron-down" class="toggle-icon" style="transition: transform 200ms ease; color: var(--color-text-secondary);"></i>
                                </button>
                                <div class="article-body" style="padding: 0 1.5rem 1.5rem; color: var(--color-text); font-size: 0.98rem; line-height: 1.8; border-top: 1px solid var(--color-border); padding-top: 1.25rem;">
                                    <p>
                                        تتم مراجعة تطبيق هذه السياسة بصورة دورية، وتُستخدم الملاحظات والشكاوى ونتائج المتابعة لتحسين بيئة العمل والتدريب. ويجوز تحديث السياسة كلما استدعت طبيعة المشروع أو متطلبات الشركاء أو التطور التنظيمي ذلك.
                                    </p>
                                </div>
                            </div>

                            <!-- Article 15 -->
                            <div class="article-card card glass-card" style="background: var(--color-surface); border-radius: var(--radius-md); border: 1px solid var(--color-border); overflow: hidden;">
                                <button class="article-toggle-btn" onclick="toggleArticle(this)" style="width: 100%; padding: 1.25rem 1.5rem; text-align: right; background: transparent; border: none; display: flex; align-items: center; justify-content: space-between; cursor: pointer; font-family: inherit;">
                                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                                        <span class="article-num" style="background: rgba(31, 122, 90, 0.12); color: #1F7A5A; font-weight: 700; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">15</span>
                                        <h3 style="margin: 0; font-size: 1.15rem; color: var(--color-primary-dark); font-weight: 700;">الخامس عشر: إقرار واعتماد السياسة</h3>
                                    </div>
                                    <i data-lucide="chevron-down" class="toggle-icon" style="transition: transform 200ms ease; color: var(--color-text-secondary);"></i>
                                </button>
                                <div class="article-body" style="padding: 0 1.5rem 1.5rem; color: var(--color-text); font-size: 0.98rem; line-height: 1.8; border-top: 1px solid var(--color-border); padding-top: 1.25rem;">
                                    <p style="margin-bottom: 1rem;">
                                        تقر إدارة مبادرة «برة الصندوق – المدرسة الخضراء الذكية» بالتزامها بهذه السياسة، وباتخاذ التدابير اللازمة لنشرها وتعريف العاملات والمتدربات والشركاء بها، وبتوفير قناة واضحة وسرية لتلقي الشكاوى ومعالجة المخالفات.
                                    </p>
                                    <div style="background: var(--color-bg); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
                                        <div style="font-weight: 700; color: var(--color-primary-dark); margin-bottom: 0.4rem;">جمعية الإسراء الخيرية لتنمية المجتمع بدمنهور</div>
                                        <div style="font-size: 0.9rem; color: var(--color-text-secondary);">الجهة المنفذة / الشريك المجتمعي المضيف للمبادرة (إشهار رقم 1124 لسنة 2006)</div>
                                        <div style="font-size: 0.9rem; color: var(--color-text-secondary); margin-top: 0.25rem;">صاحبة المبادرة والملكية الفكرية: الأستاذة / فاطمة عبد المجيد راضي</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <!-- TAB 2: Grievance Workflow & Anti-Retaliation Safeguards -->
                <div class="policy-tab-pane" id="workflowTab" style="display: none;">
                    <div style="max-width: 860px; margin: 0 auto;">
                        <div class="section-header" style="text-align: center; margin-bottom: 2.5rem;">
                            <h3 style="font-size: 1.8rem; color: var(--color-primary-dark); margin-bottom: 0.5rem; font-family: 'Noto Naskh Arabic', serif;">مسار فحص ومعالجة الشكاوى (5 خطوات مؤمّنة)</h3>
                            <p style="color: var(--color-text-secondary); max-width: 600px; margin: 0 auto;">آلية احترافية ومحايدة تضمن حماية مقدم البلاغ وسرية البيانات واتخاذ الإجراءات العادلة.</p>
                        </div>

                        <!-- 5 Steps Flow -->
                        <div style="display: flex; flex-direction: column; gap: 1.5rem; position: relative;">
                            <!-- Step 1 -->
                            <div class="card glass-card" style="background: var(--color-surface); padding: 1.5rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); display: flex; gap: 1.25rem; align-items: flex-start;">
                                <div style="width: 48px; height: 48px; background: #1F7A5A; color: #FFFFFF; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.2rem; flex-shrink: 0;">1</div>
                                <div>
                                    <h4 style="font-size: 1.15rem; color: var(--color-primary-dark); margin-bottom: 0.35rem; font-weight: 700;">تقديم البلاغ / الشكوى</h4>
                                    <p style="color: var(--color-text-secondary); font-size: 0.95rem; line-height: 1.6; margin: 0;">
                                        يتم تقديم الشكوى عبر النموذج الإلكتروني السري، أو شفهياً/كتابياً لمسؤولة الشكاوى دون الحاجة لمواجهة المشكو في حقه، مع إمكانية عدم الإفصاح عن الاسم.
                                    </p>
                                </div>
                            </div>

                            <!-- Step 2 -->
                            <div class="card glass-card" style="background: var(--color-surface); padding: 1.5rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); display: flex; gap: 1.25rem; align-items: flex-start;">
                                <div style="width: 48px; height: 48px; background: #1C9A8B; color: #FFFFFF; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.2rem; flex-shrink: 0;">2</div>
                                <div>
                                    <h4 style="font-size: 1.15rem; color: var(--color-primary-dark); margin-bottom: 0.35rem; font-weight: 700;">التوثيق وحفظ السرية</h4>
                                    <p style="color: var(--color-text-secondary); font-size: 0.95rem; line-height: 1.6; margin: 0;">
                                        توليد كود تتبع مشفر للشكوى وتسجيلها في سجل مؤمّن ومحدود الوصول، مع تشفير بيانات الشاكي ومنع تداولها لأي غرض دعائي أو إعلامي.
                                    </p>
                                </div>
                            </div>

                            <!-- Step 3 -->
                            <div class="card glass-card" style="background: var(--color-surface); padding: 1.5rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); display: flex; gap: 1.25rem; align-items: flex-start;">
                                <div style="width: 48px; height: 48px; background: #D97706; color: #FFFFFF; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.2rem; flex-shrink: 0;">3</div>
                                <div>
                                    <h4 style="font-size: 1.15rem; color: var(--color-primary-dark); margin-bottom: 0.35rem; font-weight: 700;">التقييم المبدئي والتدابير العاجلة</h4>
                                    <p style="color: var(--color-text-secondary); font-size: 0.95rem; line-height: 1.6; margin: 0;">
                                        تحديد درجة خطورة الواقعة فوراً، واتخاذ إجراءات فورية لحماية أي مشاركة أو متدربة معرضة لأي تهديد أو ضرر محتمل.
                                    </p>
                                </div>
                            </div>

                            <!-- Step 4 -->
                            <div class="card glass-card" style="background: var(--color-surface); padding: 1.5rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); display: flex; gap: 1.25rem; align-items: flex-start;">
                                <div style="width: 48px; height: 48px; background: #2563EB; color: #FFFFFF; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.2rem; flex-shrink: 0;">4</div>
                                <div>
                                    <h4 style="font-size: 1.15rem; color: var(--color-primary-dark); margin-bottom: 0.35rem; font-weight: 700;">الاستماع المحايد والفحص المهني</h4>
                                    <p style="color: var(--color-text-secondary); font-size: 0.95rem; line-height: 1.6; margin: 0;">
                                        الاستماع للأطراف والشهود بحيادية تامة دون افتراض الإدانة، وجمع الأدلة الموضوعية مع الالتزام الكامل بميثاق عدم الانتقام.
                                    </p>
                                </div>
                            </div>

                            <!-- Step 5 -->
                            <div class="card glass-card" style="background: var(--color-surface); padding: 1.5rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); display: flex; gap: 1.25rem; align-items: flex-start;">
                                <div style="width: 48px; height: 48px; background: #059669; color: #FFFFFF; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.2rem; flex-shrink: 0;">5</div>
                                <div>
                                    <h4 style="font-size: 1.15rem; color: var(--color-primary-dark); margin-bottom: 0.35rem; font-weight: 700;">القرار العادل والإجراء التصحيحي</h4>
                                    <p style="color: var(--color-text-secondary); font-size: 0.95rem; line-height: 1.6; margin: 0;">
                                        تطبيق الإجراء المناسب (تنبيه، إنذار، استبعاد، إنهاء تعاون، أو إحالة قانونية للجهات المختصة) وإغلاق الشكوى مع توثيق الأثر.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Anti-Retaliation Callout -->
                        <div class="card" style="margin-top: 2.5rem; background: rgba(220, 252, 231, 0.4); border: 1.5px solid #86EFAC; border-radius: var(--radius-lg); padding: 1.75rem; text-align: center;">
                            <div style="display: inline-flex; align-items: center; gap: 0.5rem; color: #166534; font-weight: 700; font-size: 1.15rem; margin-bottom: 0.5rem;">
                                <i data-lucide="shield-check" style="width: 22px; height: 22px;"></i>
                                ضمانة صارمة بعدم الانتقام (Anti-Retaliation Guarantee)
                            </div>
                            <p style="color: #14532D; font-size: 0.95rem; line-height: 1.7; max-width: 680px; margin: 0 auto;">
                                يحظر المشروع تماماً أي مضايقة أو تضييق أو حرمان من الفرص التدريبية أو الاجتماعية لأي شخص يتقدم بشكوى أو يشهد بحسن نية. حمايتكم مضمونة وموثقة قانونياً.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- TAB 3: Confidential Grievance Submission Form -->
                <div class="policy-tab-pane" id="grievanceTab" style="display: none;">
                    <div style="max-width: 760px; margin: 0 auto;">
                        <div class="card glass-card" style="background: var(--color-surface); padding: 2.5rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); box-shadow: var(--shadow-default);">
                            <div style="text-align: center; margin-bottom: 2rem;">
                                <div style="width: 56px; height: 56px; background: rgba(220, 38, 38, 0.12); color: #DC2626; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                                    <i data-lucide="lock" style="width: 28px; height: 28px;"></i>
                                </div>
                                <h3 style="font-size: 1.6rem; color: var(--color-primary-dark); font-weight: 700; font-family: 'Noto Naskh Arabic', serif;">تقديم بلاغ أو شكوى سرية ومحمية</h3>
                                <p style="color: var(--color-text-secondary); font-size: 0.95rem; max-width: 550px; margin: 0.4rem auto 0;">
                                    هذه القناة مؤمّنة ومشفرة بالكامل. يمكنك تقديم البلاغ دون ذكر اسمك إن رغبت في ذلك، مع ضمان السرية وعدم الانتقام.
                                </p>
                            </div>

                            <form id="grievanceForm" onsubmit="handleGrievanceSubmit(event)">
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-bottom: 1.25rem;" class="form-responsive-grid">
                                    <div class="form-group">
                                        <label class="form-label" style="display: block; font-weight: 600; margin-bottom: 0.4rem; color: var(--color-text);">الاسم (اختياري - يمكنك تركه فارغاً):</label>
                                        <input type="text" id="grvName" placeholder="فاعل/ة خير أو الاسم الكامل" class="form-input" style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-sm); background: var(--color-bg); font-family: inherit;">
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label" style="display: block; font-weight: 600; margin-bottom: 0.4rem; color: var(--color-text);">رقم الهاتف أو وسيلة للتواصل السري:</label>
                                        <input type="text" id="grvPhone" placeholder="01xxxxxxxxx (اختياري للمتابعة)" class="form-input" style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-sm); background: var(--color-bg); font-family: inherit;">
                                    </div>
                                </div>

                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-bottom: 1.25rem;" class="form-responsive-grid">
                                    <div class="form-group">
                                        <label class="form-label" style="display: block; font-weight: 600; margin-bottom: 0.4rem; color: var(--color-text);">نوع الواقعة أو المخالفة: <span style="color: #DC2626;">*</span></label>
                                        <select id="grvType" required class="form-input" style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-sm); background: var(--color-bg); font-family: inherit;">
                                            <option value="">اختر نوع البلاغ...</option>
                                            <option value="تمييز أو استبعاد غير عادل">تمييز أو استبعاد غير عادل</option>
                                            <option value="مضايقة أو إساءة لفظية أو سلوكية">مضايقة أو إساءة لفظية أو سلوكية</option>
                                            <option value="ساعات العمل أو ظروف بيئة التدريب">ساعات العمل أو ظروف بيئة التدريب</option>
                                            <option value="استغلال للسلطة أو إخلال بالمقابل">استغلال للسلطة أو إخلال بالمقابل المالي</option>
                                            <option value="انتهاك الخصوصية أو سرية البيانات">انتهاك الخصوصية أو سرية البيانات</option>
                                            <option value="أخرى">ملاحظة أو شكوى أخرى</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label" style="display: block; font-weight: 600; margin-bottom: 0.4rem; color: var(--color-text);">مكان / نطاق حدوث الواقعة:</label>
                                        <input type="text" id="grvLocation" placeholder="مثال: مدرسة، مقر جمعية، ورشة تدريبية..." class="form-input" style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-sm); background: var(--color-bg); font-family: inherit;">
                                    </div>
                                </div>

                                <div class="form-group" style="margin-bottom: 1.5rem;">
                                    <label class="form-label" style="display: block; font-weight: 600; margin-bottom: 0.4rem; color: var(--color-text);">تفاصيل الواقعة أو البلاغ: <span style="color: #DC2626;">*</span></label>
                                    <textarea id="grvDetails" required rows="5" placeholder="يرجى كتابة التفاصيل بوضوح (ماذا حدث، التوقيت إن أمكن، وأي أطراف ذات صلة)..." class="form-input" style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-sm); background: var(--color-bg); font-family: inherit; resize: vertical;"></textarea>
                                </div>

                                <div class="form-group" style="margin-bottom: 1.5rem; background: var(--color-bg); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
                                    <label style="display: flex; align-items: center; gap: 0.6rem; cursor: pointer; font-size: 0.92rem; color: var(--color-text);">
                                        <input type="checkbox" id="grvConsent" required style="width: 18px; height: 18px; accent-color: var(--color-primary);">
                                        <span>أقر بأن هذه الشكوى مقدمة بحسن نية ولأغراض حماية بيئة العمل والتدريب، وأطلب معالجتها بالسرية التامة وفق السياسة المعتمدة.</span>
                                    </label>
                                </div>

                                <button type="submit" class="btn btn-accent spring-hover" style="width: 100%; padding: 0.9rem; font-size: 1.05rem; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                                    <i data-lucide="send"></i>
                                    <span>إرسال البلاغ السري وتوليد كود التتبع</span>
                                </button>
                            </form>

                            <!-- Success Tracking Code Box -->
                            <div id="grvSuccessBox" style="display: none; margin-top: 1.5rem; background: #ECFDF5; border: 1.5px solid #6EE7B7; border-radius: var(--radius-md); padding: 1.5rem; text-align: center;">
                                <div style="color: #065F46; font-size: 1.15rem; font-weight: 700; margin-bottom: 0.5rem;">
                                    <i data-lucide="check-circle-2" style="display: inline-block; vertical-align: middle; width: 22px; height: 22px;"></i>
                                    تم استلام الشكوى بنجاح وتوثيقها بسرية تامة!
                                </div>
                                <p style="color: #047857; font-size: 0.92rem; margin-bottom: 1rem;">
                                    تم تسجيل البلاغ في السجل المشفر لإدارة المشروع وسوف يتم فحصه من قبل مسؤولة الشكاوى والإدارة فوراً.
                                </p>
                                <div style="display: inline-block; background: #FFFFFF; border: 1px dashed #059669; padding: 0.5rem 1.25rem; border-radius: var(--radius-sm); font-family: monospace; font-size: 1.15rem; font-weight: 700; color: #065F46;" id="grvTrackingCodeDisplay">
                                    GRV-2026-XXXXX
                                </div>
                                <div style="font-size: 0.8rem; color: #047857; margin-top: 0.5rem;">احتفظ بهذا الرقم كمرجع سري لمتابعة الشكوى.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- TAB 4: Digital Acknowledgment & Compliance Sign-off Form -->
                <div class="policy-tab-pane" id="ackTab" style="display: none;">
                    <div style="max-width: 760px; margin: 0 auto;">
                        <div class="card glass-card" style="background: var(--color-surface); padding: 2.5rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); box-shadow: var(--shadow-default);">
                            <div style="text-align: center; margin-bottom: 2rem;">
                                <div style="width: 56px; height: 56px; background: rgba(5, 150, 105, 0.12); color: #059669; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                                    <i data-lucide="file-check-2" style="width: 28px; height: 28px;"></i>
                                </div>
                                <h3 style="font-size: 1.6rem; color: var(--color-primary-dark); font-weight: 700; font-family: 'Noto Naskh Arabic', serif;">مرفق إقرار بالاطلاع والالتزام بالسياسة</h3>
                                <p style="color: var(--color-text-secondary); font-size: 0.95rem; max-width: 550px; margin: 0.4rem auto 0;">
                                    خاص بفرق العمل الميدانية، المتدربات، المدرسات، ممثلي الجمعيات الشريكة والشركاء المؤسسيين.
                                </p>
                            </div>

                            <!-- Policy Oath Block -->
                            <div style="background: var(--color-bg); border-right: 4px solid var(--color-primary); padding: 1.25rem; border-radius: var(--radius-sm); margin-bottom: 1.75rem; font-style: italic; color: var(--color-primary-dark); line-height: 1.8; font-size: 0.98rem; border: 1px solid var(--color-border);">
                                «أقر أنا الموقع/ة أدناه بأنني اطلعت على "سياسة الحماية وعدم التمييز وتلقي الشكاوى" الخاصة بمبادرة "برة الصندوق – المدرسة الخضراء الذكية"، وفهمت ما ورد بها، وألتزم باحترامها والإبلاغ عن أي مخالفة أو خطر وفق القنوات المعتمدة.»
                            </div>

                            <form id="ackForm" onsubmit="handleAckSubmit(event)">
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-bottom: 1.25rem;" class="form-responsive-grid">
                                    <div class="form-group">
                                        <label class="form-label" style="display: block; font-weight: 600; margin-bottom: 0.4rem; color: var(--color-text);">الاسم الرباعي: <span style="color: #DC2626;">*</span></label>
                                        <input type="text" id="ackFullName" required placeholder="أدخل اسمك الرباعي الكامل" class="form-input" style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-sm); background: var(--color-bg); font-family: inherit;">
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label" style="display: block; font-weight: 600; margin-bottom: 0.4rem; color: var(--color-text);">الصفة / الدور في المشروع: <span style="color: #DC2626;">*</span></label>
                                        <select id="ackRole" required class="form-input" style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-sm); background: var(--color-bg); font-family: inherit;">
                                            <option value="">اختر صفتك...</option>
                                            <option value="عضوة فريق عمل ميداني">عضوة فريق عمل ميداني (10 فرق عمل)</option>
                                            <option value="قائدة فريق عمل">قائدة فريق عمل</option>
                                            <option value="معلمة / مدرسة مستفيدة">معلمة / مدرسة مستفيدة</option>
                                            <option value="متدربة بناء قدرات (217 متدربة)">متدربة بناء قدرات (217 متدربة)</option>
                                            <option value="ممثلة جمعية أهلية شريكة">ممثلة جمعية أهلية شريكة</option>
                                            <option value="طالبة / خريجة تربية فنية">طالبة / خريجة تربية فنية</option>
                                            <option value="متطوعة أو شريك مجتمعي">متطوعة أو شريك مجتمعي</option>
                                            <option value="عضو إدارة المشروع">عضو إدارة المشروع</option>
                                        </select>
                                    </div>
                                </div>

                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-bottom: 1.25rem;" class="form-responsive-grid">
                                    <div class="form-group">
                                        <label class="form-label" style="display: block; font-weight: 600; margin-bottom: 0.4rem; color: var(--color-text);">الجهة / الجمعية / المدرسة:</label>
                                        <input type="text" id="ackEntity" placeholder="مثال: جمعية الإسراء / مدرسة..." class="form-input" style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-sm); background: var(--color-bg); font-family: inherit;">
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label" style="display: block; font-weight: 600; margin-bottom: 0.4rem; color: var(--color-text);">رقم الهاتف / واتساب للتأكيد:</label>
                                        <input type="tel" id="ackPhone" required placeholder="01xxxxxxxxx" class="form-input" style="width: 100%; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-sm); background: var(--color-bg); font-family: inherit;">
                                    </div>
                                </div>

                                <div class="form-group" style="margin-bottom: 1.5rem; background: var(--color-bg); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
                                    <label style="display: flex; align-items: center; gap: 0.6rem; cursor: pointer; font-size: 0.92rem; color: var(--color-text);">
                                        <input type="checkbox" id="ackAgreed" required style="width: 18px; height: 18px; accent-color: var(--color-primary);">
                                        <span>أوافق وألتزم بكافة مواد السياسة الـ 15، وأقر بأن هذا التوقيع الرقمي بمثابة توقيع رسمي معتمد.</span>
                                    </label>
                                </div>

                                <button type="submit" class="btn btn-primary spring-hover" style="width: 100%; padding: 0.9rem; font-size: 1.05rem; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                                    <i data-lucide="check-circle"></i>
                                    <span>تسجيل وتأكيد إقرار الالتزام الرقمي</span>
                                </button>
                            </form>

                            <!-- Certificate / Acknowledgment Receipt Box -->
                            <div id="ackReceiptBox" style="display: none; margin-top: 1.75rem; background: #F0FDF4; border: 2px solid #34D399; border-radius: var(--radius-md); padding: 1.5rem; text-align: center;">
                                <div style="color: #065F46; font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem;">
                                    <i data-lucide="award" style="display: inline-block; vertical-align: middle; width: 24px; height: 24px; color: #10B981;"></i>
                                    تم تسجيل إقرار الالتزام بنجاح!
                                </div>
                                <p style="color: #047857; font-size: 0.95rem; margin-bottom: 1rem;">
                                    شكراً لكِ، تم توثيق إقرارك الرسمي في سجل الالتزام المؤسسي لمشروع برة الصندوق 2026.
                                </p>
                                <div style="background: #FFFFFF; border: 1px solid #A7F3D0; border-radius: var(--radius-sm); padding: 1rem; text-align: right; font-size: 0.9rem; color: var(--color-text); margin-bottom: 1rem;" id="ackReceiptDetails">
                                    <!-- Dynamic details injected here -->
                                </div>
                                <button onclick="window.print()" class="btn btn-outline" style="padding: 0.5rem 1.25rem; font-size: 0.88rem; display: inline-flex; align-items: center; gap: 0.4rem;">
                                    <i data-lucide="printer" style="width: 16px; height: 16px;"></i>
                                    <span>طباعة الإقرار</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- TAB 5: PDF Document Showcase & Download -->
                <div class="policy-tab-pane" id="pdfTab" style="display: none;">
                    <div style="max-width: 900px; margin: 0 auto;">
                        <div class="card glass-card" style="background: var(--color-surface); padding: 2.5rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); text-align: center;">
                            <div style="display: flex; align-items: center; justify-content: center; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
                                <img src="./assets/images/logo-israa.jpg" alt="جمعية الإسراء" style="height: 48px; border-radius: 6px; border: 1px solid var(--color-border); padding: 2px; background: #fff;">
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--color-primary-dark); font-family: 'Noto Naskh Arabic', serif;">وثيقة السياسة الرسمية المعتمدة (نسخة العرض والتوثيق)</div>
                                <img src="./assets/images/logo-bara.png" alt="برة الصندوق" style="height: 44px;">
                            </div>

                            <p style="color: var(--color-text-secondary); max-width: 700px; margin: 0 auto 2rem; font-size: 1rem; line-height: 1.7;">
                                الوثيقة الرسمية الصادرة عن جمعية الإسراء الخيرية بدمنهور (إشهار #1124) للأستاذة / فاطمة عبد المجيد راضي، شاملة المواد الـ 15 كاملة ومرفق الإقرار والتوقيع والاعتماد الرسمي.
                            </p>

                            <!-- Document Meta Grid -->
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem; text-align: right;">
                                <div style="background: var(--color-bg); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
                                    <div style="font-size: 0.8rem; color: var(--color-text-muted);">رقم الإصدار</div>
                                    <div style="font-weight: 700; color: var(--color-primary-dark);">الإصدار 1.0 (2026)</div>
                                </div>
                                <div style="background: var(--color-bg); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
                                    <div style="font-size: 0.8rem; color: var(--color-text-muted);">حجم الملف</div>
                                    <div style="font-weight: 700; color: var(--color-primary-dark);">4 صفحات رسمية (A4)</div>
                                </div>
                                <div style="background: var(--color-bg); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
                                    <div style="font-size: 0.8rem; color: var(--color-text-muted);">الحالة والاعتماد</div>
                                    <div style="font-weight: 700; color: #10B981;">معتمدة وموثقة رسمياً ✅</div>
                                </div>
                            </div>

                            <!-- PDF Actions & Embed -->
                            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem;">
                                <a href="./docs/guides/outbox-safety-policy.pdf" download="outbox-safety-policy-2026.pdf" target="_blank" class="btn btn-accent spring-hover" style="padding: 0.85rem 2rem; font-size: 1.05rem; display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none;">
                                    <i data-lucide="download" style="width: 20px; height: 20px;"></i>
                                    <span>تحميل ملف الـ PDF مباشرة</span>
                                </a>
                                <a href="./docs/guides/outbox-safety-policy.pdf" target="_blank" class="btn btn-outline spring-hover" style="padding: 0.85rem 1.75rem; font-size: 1.05rem; display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none;">
                                    <i data-lucide="external-link" style="width: 20px; height: 20px;"></i>
                                    <span>فتح في نافذة كاملة</span>
                                </a>
                                <button onclick="window.print()" class="btn btn-outline spring-hover" style="padding: 0.85rem 1.75rem; font-size: 1.05rem; display: inline-flex; align-items: center; gap: 0.5rem;">
                                    <i data-lucide="printer" style="width: 20px; height: 20px;"></i>
                                    <span>طباعة الوثيقة</span>
                                </button>
                            </div>

                            <!-- Embedded Preview Object / Fallback -->
                            <div style="border: 1px solid var(--color-border); border-radius: var(--radius-md); overflow: hidden; background: #525659; min-height: 500px;">
                                <iframe src="./docs/guides/outbox-safety-policy.pdf" style="width: 100%; height: 600px; border: none;" title="معاينة وثيقة سياسة الحماية والأمان">
                                    <p>متصفحك لا يدعم عرض ملف الـ PDF المضمن. يمكنك <a href="./docs/guides/outbox-safety-policy.pdf" target="_blank">النقر هنا لتحميله وقراءته</a>.</p>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    `;
}

/* ==========================================================================
   Interactive Handlers & Helper Functions for Policy Page
   ========================================================================== */

// 1. Tab Switching Function
window.switchPolicyTab = function(tabId) {
    const panes = document.querySelectorAll('.policy-tab-pane');
    const btns = document.querySelectorAll('.policy-tab-btn, .segmented-control .tab-btn');

    panes.forEach(pane => {
        if (pane.id === tabId) {
            pane.style.display = 'block';
        } else {
            pane.style.display = 'none';
        }
    });

    btns.forEach(btn => {
        if (btn.id === 'btn-' + tabId) {
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
        } else {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
        }
    });

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
};

// 2. Article Accordion Toggle
window.toggleArticle = function(btn) {
    const card = btn.closest('.article-card');
    if (!card) return;
    const body = card.querySelector('.article-body');
    const icon = btn.querySelector('.toggle-icon');

    if (body.style.display === 'none') {
        body.style.display = 'block';
        if (icon) icon.style.transform = 'rotate(180deg)';
    } else {
        body.style.display = 'none';
        if (icon) icon.style.transform = 'rotate(0deg)';
    }
};

// 3. Expand / Collapse All Articles
window.expandAllArticles = function(expand) {
    const cards = document.querySelectorAll('.article-card');
    cards.forEach(card => {
        const body = card.querySelector('.article-body');
        const icon = card.querySelector('.toggle-icon');
        if (body) body.style.display = expand ? 'block' : 'none';
        if (icon) icon.style.transform = expand ? 'rotate(180deg)' : 'rotate(0deg)';
    });
};

// 4. Live Filter / Search across policy articles
window.filterPolicyArticles = function() {
    const input = document.getElementById('policySearchInput');
    if (!input) return;
    const query = input.value.trim().toLowerCase();
    const cards = document.querySelectorAll('.article-card');

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (!query || text.includes(query)) {
            card.style.display = 'block';
            if (query) {
                const body = card.querySelector('.article-body');
                if (body) body.style.display = 'block';
            }
        } else {
            card.style.display = 'none';
        }
    });
};

// 5. Handle Confidential Grievance Submission
window.handleGrievanceSubmit = function(e) {
    if (e) e.preventDefault();

    const name = document.getElementById('grvName')?.value.trim() || 'بلاغ سري غير مفصح عن الاسم';
    const phone = document.getElementById('grvPhone')?.value.trim() || 'غير محدد';
    const type = document.getElementById('grvType')?.value || 'عام';
    const location = document.getElementById('grvLocation')?.value.trim() || 'المشروع الميداني';
    const details = document.getElementById('grvDetails')?.value.trim() || '';

    if (!details) {
        if (typeof showToast === 'function') showToast('يرجى كتابة تفاصيل الشكوى أولاً');
        return;
    }

    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const trackingCode = `GRV-2026-${randomSuffix}`;

    const grievanceItem = {
        code: trackingCode,
        name,
        phone,
        type,
        location,
        details,
        date: new Date().toISOString(),
        status: 'قيد الفحص السري'
    };

    // Store in localStorage
    try {
        const existing = JSON.parse(localStorage.getItem('outbox_grievances') || '[]');
        existing.unshift(grievanceItem);
        localStorage.setItem('outbox_grievances', JSON.stringify(existing));
    } catch (err) {
        console.warn('LocalStorage error:', err);
    }

    // Update UI
    const form = document.getElementById('grievanceForm');
    const successBox = document.getElementById('grvSuccessBox');
    const codeDisplay = document.getElementById('grvTrackingCodeDisplay');

    if (form) form.style.display = 'none';
    if (successBox) successBox.style.display = 'block';
    if (codeDisplay) codeDisplay.textContent = trackingCode;

    if (typeof showToast === 'function') {
        showToast(`تم استلام الشكوى بنجاح برقم تتبع: ${trackingCode}`);
    }

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
};

// 6. Handle Digital Policy Acknowledgment
window.handleAckSubmit = function(e) {
    if (e) e.preventDefault();

    const fullName = document.getElementById('ackFullName')?.value.trim();
    const role = document.getElementById('ackRole')?.value;
    const entity = document.getElementById('ackEntity')?.value.trim() || 'مبادرة برة الصندوق';
    const phone = document.getElementById('ackPhone')?.value.trim();

    if (!fullName || !role || !phone) {
        if (typeof showToast === 'function') showToast('يرجى استكمال جميع الحقول المطلوبة');
        return;
    }

    const ackItem = {
        fullName,
        role,
        entity,
        phone,
        date: new Date().toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' }),
        timestamp: new Date().toISOString(),
        verified: true
    };

    // Store in localStorage
    try {
        const existing = JSON.parse(localStorage.getItem('outbox_policy_acks') || '[]');
        existing.unshift(ackItem);
        localStorage.setItem('outbox_policy_acks', JSON.stringify(existing));
    } catch (err) {
        console.warn('LocalStorage error:', err);
    }

    // Update UI
    const form = document.getElementById('ackForm');
    const receiptBox = document.getElementById('ackReceiptBox');
    const receiptDetails = document.getElementById('ackReceiptDetails');

    if (form) form.style.display = 'none';
    if (receiptBox) receiptBox.style.display = 'block';

    if (receiptDetails) {
        receiptDetails.innerHTML = `
            <div style="margin-bottom: 0.4rem;"><strong>الموقع/ة:</strong> ${fullName}</div>
            <div style="margin-bottom: 0.4rem;"><strong>الصفة / الدور:</strong> ${role} (${entity})</div>
            <div style="margin-bottom: 0.4rem;"><strong>تاريخ الإقرار:</strong> ${ackItem.date}</div>
            <div style="color: #059669; font-weight: 700;"><strong>حالة الالتزام:</strong> معتمد ومسجل رسمياً ✅</div>
        `;
    }

    if (typeof showToast === 'function') {
        showToast(`شكراً أ. ${fullName}، تم تسجيل إقرار الالتزام بنجاح`);
    }

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
};

// 7. Policy Logic Initializer on Page Load
function initPolicyLogic() {
    // Default open first article
    const firstArticle = document.querySelector('.article-card .article-body');
    if (firstArticle) {
        firstArticle.style.display = 'block';
    }
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
}
