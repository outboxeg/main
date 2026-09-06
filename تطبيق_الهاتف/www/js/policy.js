/* ==========================================================================
   Bara El-Sandouq Mobile Policy & Safety Engine (policy.js)
   15 Approved Protection Articles & Confidential Complaint Access
   ========================================================================== */

const POLICY_ARTICLES = [
  { num: 1, title: 'الغرض من السياسة', text: 'ضمان بيئة عمل وتدريب آمنة وعادلة ومحترمة وشاملة داخل مبادرة برة الصندوق، وحظر أي شكل من أشكال الإساءة أو التمييز أو التحرش.' },
  { num: 2, title: 'نطاق التطبيق', text: 'تسري السياسة على جميع أعضاء فريق المشروع، المتدربات، الشركاء، والمنسقين أثناء جميع الأنشطة الميدانية والتدريبية.' },
  { num: 3, title: 'تكافؤ الفرص والتمكين', text: 'المشروع قائم على إدارة وتشغيل نسائي كامل بنسبة 100% لفرق العمل، مع إتاحة الفرص العادلة دون أي تمييز بسبب السن أو الإعاقة.' },
  { num: 4, title: 'بيئة العمل المرنة والآمنة', text: 'ساعات العمل اليومية تتراوح بين 5 إلى 6 ساعات لتلائم الظروف الأسرية والاجتماعية للسيدات وتضمن التوازن الصحي.' },
  { num: 5, title: 'حظر التحرش والعنف', text: 'حظر مطلق لكافة أشكال الإساءة اللفظية أو الجسدية أو النفسية، وتصنيف التحرش كمخالفة جسيمة تستوجب الاستبعاد الفوري والإحالة للمساءلة.' },
  { num: 6, title: 'حماية المبلّغات وعدم الانتقام', text: 'حماية كاملة لأي شخص يتقدم بشكوى أو يدلي بشهادة بحسن نية من أي إجراء انتقامي أو تضييق وظيفي أو تدريبي.' },
  { num: 7, title: 'آلية تلقي الشكاوى', text: 'مسار آمن ومحايد لتلقي البلاغات عبر مسؤولة الشكاوى أو النموذج المشفر المباشر وفحصها خلال مدة أقصاها 48 ساعة.' },
  { num: 8, title: 'السرية وحماية البيانات', text: 'التعامل مع جميع البلاغات والمعلومات الشخصية بسرية تامة ومحدودية الوصول للجهات المخولة فقط.' },
  { num: 9, title: 'التدريب وبناء القدرات', text: 'تنفيذ 6 برامج تدريبية متخصصة (بمعدل 30 ساعة لكل برنامج) استهدفت 217 متدربة من خريجات التربية الفنية والمؤهلات المتوسطة.' },
  { num: 10, title: 'الهيكل النسائي للمشروع', text: '10 فرق عمل ميدانية نسائية بالكامل (10 سيدات لكل فريق)، مع اقتصار دور الرجال على الاستشارات المؤقتة غير التنفيذية.' },
  { num: 11, title: 'الشمول المالي والتمكين', text: 'تشجيع استخدام المحافظ الإلكترونية والدفع الرقمي، حيث تمتلك 65% من المشاركات محافظ إلكترونية لتحصيل مستحقاتهن.' },
  { num: 12, title: 'مسؤوليات الإدارة والفرق', text: 'التزام الإدارة بتطبيق السياسة، والتزام قائدات الفرق بنشر الوعي ومنع المخالفات وتوفير الحماية.' },
  { num: 13, title: 'المخالفات والإجراءات التصحيحية', text: 'تدرج الجزاءات من التنبيه والإنذار إلى إنهاء التعاون النهائي والإحالة القانونية بحسب جسامة الفعل.' },
  { num: 14, title: 'المتابعة والمراجعة', text: 'مراجعة السياسة وتحديثها سنوياً بما يضمن مواكبة أفضل ممارسات الحوكمة المؤسسية والعمل الأهلي.' },
  { num: 15, title: 'إقرار واعتماد السياسة', text: 'وثيقة معتمدة ومسجلة بجمعية الإسراء الخيرية بدمنهور (إشهار 1124 لسنة 2006) للأستاذة / فاطمة عبد المجيد راضي.' }
];

function renderMobilePolicyArticles(filterText = '') {
  const container = document.getElementById('mPolicyAccordionContainer');
  if (!container) return;

  const filtered = filterText
    ? POLICY_ARTICLES.filter(a => a.title.includes(filterText) || a.text.includes(filterText))
    : POLICY_ARTICLES;

  if (!filtered.length) {
    container.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary); padding: 1rem;">لا توجد مواد تطابق كلمة البحث.</p>';
    return;
  }

  let html = '';
  filtered.forEach(art => {
    html += `
      <div class="m-accordion-item">
        <button class="m-accordion-header" onclick="this.parentElement.classList.toggle('open')">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="width: 24px; height: 24px; background: rgba(31, 122, 90, 0.12); color: var(--color-primary); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 700;">${art.num}</span>
            <span>${art.title}</span>
          </div>
          <i data-lucide="chevron-down" style="width: 18px; height: 18px;"></i>
        </button>
        <div class="m-accordion-body">
          <p>${art.text}</p>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  if (window.lucide) window.lucide.createIcons();
}

function initMobilePolicySearch() {
  const searchInput = document.getElementById('mPolicySearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderMobilePolicyArticles(e.target.value.trim());
    });
  }
}
