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
