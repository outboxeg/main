/* ==========================================================================
   Page Component: Interactive Mobile App Simulator View (pages/simulator.js)
   Bara El-Sandouq – Smart Green School Project
   ========================================================================== */

function renderSimulatorPage() {
    return `
        <section class="section" style="padding-top: 2.5rem; padding-bottom: 5rem;">
            <div class="container">
                <!-- Section Header -->
                <div class="section-header text-center" style="max-width: 820px; margin: 0 auto 2.5rem auto;">
                    <div class="section-subtitle">
                        <i data-lucide="smartphone"></i> بيئة التجربة التفاعلية المباشرة
                    </div>
                    <h1 class="section-title">محاكي تطبيق برة الصندوق الذكي 📱</h1>
                    <p class="section-desc">
                        جرّب تطبيق الهواتف الذكية الميداني مباشرة داخل المتصفح. يمكنك تصفح الحاسبة السريعة، إرسال طلبات الجمع، وتتبع مخرجات المدارس الخضراء أو تحميل ملف الـ APK وتثبيته على هاتفك فوراً.
                    </p>
                </div>

                <!-- Simulator Layout Grid: Interactive Device Mockup + Download Hub -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 460px), 1fr)); gap: 3rem; align-items: start; max-width: 1100px; margin: 0 auto;">
                    
                    <!-- Left: Interactive Smartphone 3D Frame -->
                    <div style="display: flex; flex-direction: column; align-items: center; width: 100%;">
                        
                        <!-- Toolbar Controls -->
                        <div style="display: flex; align-items: center; justify-content: center; gap: 0.6rem; flex-wrap: wrap; margin-bottom: 1.25rem; width: 100%;">
                            <button class="btn btn-outline" id="rotateSimBtn" onclick="window.toggleSimulatorOrientation()" style="padding: 0.5rem 0.9rem; font-size: 0.85rem; border-radius: var(--radius-md);">
                                <i data-lucide="rotate-cw"></i> <span>تدوير الشاشة</span>
                            </button>
                            <button class="btn btn-outline" id="reloadSimBtn" onclick="window.reloadSimulatorIframe()" style="padding: 0.5rem 0.9rem; font-size: 0.85rem; border-radius: var(--radius-md);">
                                <i data-lucide="refresh-cw"></i> <span>إعادة تشغيل</span>
                            </button>
                            <a href="./simulator.html" target="_blank" class="btn btn-outline" style="padding: 0.5rem 0.9rem; font-size: 0.85rem; border-radius: var(--radius-md); text-decoration: none;">
                                <i data-lucide="external-link"></i> <span>شاشة كاملة ↗</span>
                            </a>
                        </div>

                        <!-- Phone Bezel Container -->
                        <div class="simulator-phone-wrapper" id="simPhoneWrapper" style="position: relative; width: 100%; max-width: 390px; height: 780px; transition: all 300ms cubic-bezier(0.34, 1.56, 0.64, 1); filter: drop-shadow(0 20px 40px rgba(11, 79, 63, 0.25));">
                            
                            <!-- Outer Frame with Hardware Finish -->
                            <div style="width: 100%; height: 100%; background: #18181B; border-radius: 48px; padding: 11px; box-shadow: inset 0 0 4px 2px rgba(255, 255, 255, 0.2), inset 0 0 0 3px #27272A, 0 0 0 2px #09090B, 0 20px 40px rgba(0, 0, 0, 0.4); position: relative; display: flex; flex-direction: column; overflow: hidden;">
                                
                                <!-- Inner Screen Area -->
                                <div style="flex: 1; width: 100%; height: 100%; background: #F8FAF9; border-radius: 38px; overflow: hidden; position: relative; display: flex; flex-direction: column;">
                                    
                                    <!-- Dynamic Island Notch -->
                                    <div style="position: absolute; top: 8px; left: 50%; transform: translateX(-50%); width: 110px; height: 26px; background: #000000; border-radius: 16px; z-index: 50; display: flex; align-items: center; justify-content: space-between; padding: 0 10px; pointer-events: none;">
                                        <div style="width: 7px; height: 7px; background: #0F172A; border-radius: 50%;"></div>
                                        <div style="width: 10px; height: 10px; background: #111827; border-radius: 50%; border: 1.5px solid #1F2937;"></div>
                                    </div>

                                    <!-- Status Bar -->
                                    <div style="height: 34px; padding: 6px 16px 0; display: flex; justify-content: space-between; align-items: center; font-size: 0.72rem; font-weight: 700; color: #064E3B; background: #FFFFFF; border-bottom: 1px solid #F1F5F9; z-index: 40; pointer-events: none; font-family: monospace;">
                                        <span id="simClock">12:00</span>
                                        <div style="display: flex; align-items: center; gap: 5px;">
                                            <i data-lucide="wifi" style="width: 12px; height: 12px;"></i>
                                            <span style="font-size: 0.68rem;">5G</span>
                                            <i data-lucide="battery-charging" style="width: 14px; height: 14px;"></i>
                                        </div>
                                    </div>

                                    <!-- Live Embedded WebApp Iframe -->
                                    <iframe src="./تطبيق_الهاتف/www/index.html" id="simAppIframe" style="width: 100%; height: calc(100% - 34px); border: none; background: #F8FAF9;" title="تطبيق برة الصندوق الميداني"></iframe>

                                    <!-- Bottom Home Bar -->
                                    <div style="position: absolute; bottom: 6px; left: 50%; transform: translateX(-50%); width: 120px; height: 4px; background: rgba(0,0,0,0.35); border-radius: 10px; z-index: 50; pointer-events: none;"></div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- Right: Download Hub, QR Code & Technical Specs -->
                    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                        
                        <!-- Primary Download Card -->
                        <div class="card glass-card" style="padding: 2rem; border-radius: var(--radius-lg); background: var(--color-surface); border: 1px solid var(--color-border); box-shadow: var(--shadow-default);">
                            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.25rem;">
                                <div style="width: 52px; height: 52px; background: linear-gradient(135deg, #10B981, #047857); color: #FFFFFF; border-radius: 14px; display: flex; align-items: center; justify-content: center; box-shadow: 0 6px 16px rgba(16, 185, 129, 0.35);">
                                    <i data-lucide="download" style="width: 26px; height: 26px;"></i>
                                </div>
                                <div>
                                    <h3 style="margin: 0; font-size: 1.25rem; color: var(--color-primary-dark);">تحميل تطبيق برة الصندوق (APK)</h3>
                                    <span style="font-size: 0.82rem; color: var(--color-primary-light); font-weight: 700;">الإصدار الميداني الرسمي v2.1 • أندرويد</span>
                                </div>
                            </div>

                            <p style="font-size: 0.92rem; color: var(--color-text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">
                                ثبّت التطبيق الميداني مباشرة على هاتفك الذكي للوصول الفوري للحاسبات البيئية دون الحاجة لاتصال بالإنترنت مع إرسال الطلبات المباشرة عبر واتساب.
                            </p>

                            <!-- Download Action Buttons -->
                            <div style="display: flex; flex-direction: column; gap: 0.85rem;">
                                <a href="./BaraElSandouq.apk" download="BaraElSandouq.apk" class="btn btn-primary" style="width: 100%; justify-content: center; padding: 0.9rem 1.5rem; font-size: 1.05rem; font-weight: 700; text-decoration: none; box-shadow: 0 6px 20px rgba(31, 122, 90, 0.35);">
                                    <i data-lucide="download"></i> <span>تحميل ملف APK المباشر (BaraElSandouq.apk)</span>
                                </a>

                                <a href="./تطبيق_الهاتف/www/index.html" target="_blank" class="btn btn-outline" style="width: 100%; justify-content: center; padding: 0.8rem 1.25rem; font-size: 0.95rem; font-weight: 700; text-decoration: none;">
                                    <i data-lucide="smartphone"></i> <span>فتح الـ Web App والتثبيت كـ PWA 🚀</span>
                                </a>
                            </div>

                            <!-- Trust Badges -->
                            <div style="display: flex; align-items: center; justify-content: space-around; margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--color-border); font-size: 0.78rem; color: var(--color-text-secondary);">
                                <span style="display: flex; align-items: center; gap: 4px;"><i data-lucide="shield-check" style="color: #10B981; width: 15px; height: 15px;"></i> آمن 100% وخالٍ من الإعلانات</span>
                                <span style="display: flex; align-items: center; gap: 4px;"><i data-lucide="wifi-off" style="color: #3B82F6; width: 15px; height: 15px;"></i> يعمل بالكامل بدون إنترنت</span>
                            </div>
                        </div>

                        <!-- Instant QR Code Installation Card -->
                        <div class="card glass-card" style="padding: 1.75rem; border-radius: var(--radius-lg); background: var(--color-surface); border: 1px solid var(--color-border); text-align: center;">
                            <h4 style="margin: 0 0 0.5rem 0; font-size: 1.05rem; color: var(--color-primary-dark); display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                                <i data-lucide="qr-code" style="color: var(--color-primary);"></i> التثبيت الفوري عبر رمز QR
                            </h4>
                            <p style="font-size: 0.85rem; color: var(--color-text-secondary); margin-bottom: 1rem;">
                                امسح رمز الاستجابة السريعة بكاميرا هاتفك لفتح وتثبيت التطبيق مباشرة:
                            </p>

                            <div style="background: #FFFFFF; padding: 12px; border-radius: 16px; display: inline-block; box-shadow: var(--shadow-sm); border: 1px solid var(--color-border);">
                                <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://outboxeg.github.io/main/simulator.html" alt="رمز QR لتثبيت تطبيق برة الصندوق" style="width: 150px; height: 150px; display: block;">
                            </div>
                            <div style="margin-top: 0.6rem; font-family: monospace; font-size: 0.78rem; color: var(--color-primary); direction: ltr;">
                                https://outboxeg.github.io/main/
                            </div>
                        </div>

                        <!-- App Features & Specifications Matrix -->
                        <div class="card glass-card" style="padding: 1.75rem; border-radius: var(--radius-lg); background: var(--color-surface); border: 1px solid var(--color-border);">
                            <h4 style="margin: 0 0 1rem 0; font-size: 1.05rem; color: var(--color-primary-dark); display: flex; align-items: center; gap: 0.5rem;">
                                <i data-lucide="cpu" style="color: var(--color-primary);"></i> مواصفات ومزايا التطبيق الميداني:
                            </h4>
                            <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.65rem; font-size: 0.88rem; color: var(--color-text-secondary);">
                                <li style="display: flex; align-items: flex-start; gap: 0.5rem;">
                                    <i data-lucide="check-circle-2" style="color: var(--color-primary-light); width: 17px; height: 17px; flex-shrink: 0; margin-top: 2px;"></i>
                                    <span><strong>حاسبة WARM v16 التفاعلية:</strong> حساب فوري لكميات الأشجار والمياه والطاقة المحفوظة في جيبك.</span>
                                </li>
                                <li style="display: flex; align-items: flex-start; gap: 0.5rem;">
                                    <i data-lucide="check-circle-2" style="color: var(--color-primary-light); width: 17px; height: 17px; flex-shrink: 0; margin-top: 2px;"></i>
                                    <span><strong>استمارة التوريد والجمع السريع:</strong> طلب مندوب وسيارات جمع الكرتون والمخلفات الورقية للمدارس والجمعيات.</span>
                                </li>
                                <li style="display: flex; align-items: flex-start; gap: 0.5rem;">
                                    <i data-lucide="check-circle-2" style="color: var(--color-primary-light); width: 17px; height: 17px; flex-shrink: 0; margin-top: 2px;"></i>
                                    <span><strong>معرض الوسائل والألعاب الـ 9:</strong> استعراض صور وتفاصيل أدوات التعليم البيئي المصنوعة من الكرتون.</span>
                                </li>
                                <li style="display: flex; align-items: flex-start; gap: 0.5rem;">
                                    <i data-lucide="check-circle-2" style="color: var(--color-primary-light); width: 17px; height: 17px; flex-shrink: 0; margin-top: 2px;"></i>
                                    <span><strong>تكامل واتساب المباشر:</strong> تجهيز الرسائل والتقارير تلقائياً وإرسالها لإدارة الجمعية.</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    `;
}

function initSimulatorLogic() {
    // Clock in simulator status bar
    function updateSimClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const mins = String(now.getMinutes()).padStart(2, '0');
        const clockEl = document.getElementById('simClock');
        if (clockEl) clockEl.textContent = `${hours}:${mins}`;
    }
    updateSimClock();

    window.toggleSimulatorOrientation = function() {
        const phone = document.getElementById('simPhoneWrapper');
        if (phone) {
            if (phone.style.maxWidth === '700px') {
                phone.style.maxWidth = '390px';
                phone.style.height = '780px';
            } else {
                phone.style.maxWidth = '700px';
                phone.style.height = '420px';
            }
        }
    };

    window.reloadSimulatorIframe = function() {
        const iframe = document.getElementById('simAppIframe');
        if (iframe) {
            iframe.src = './تطبيق_الهاتف/www/index.html?t=' + Date.now();
        }
    };
}
