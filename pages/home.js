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
