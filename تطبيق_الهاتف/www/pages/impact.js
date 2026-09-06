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
