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
