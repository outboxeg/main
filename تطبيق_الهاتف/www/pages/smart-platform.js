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
