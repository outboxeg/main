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
                        <img src="./محتوي/برة 12.png" alt="ورشة تمكين المرأة والفتيات" style="width: 120px; height: 90px; object-fit: cover; border-radius: var(--radius-md); border: 2px solid var(--color-border);">
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
