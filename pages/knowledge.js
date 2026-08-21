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
