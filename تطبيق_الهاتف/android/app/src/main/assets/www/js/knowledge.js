/* ==========================================================================
   Bara El-Sandouq Mobile Knowledge & Educational Hub (knowledge.js)
   Practical Activities & Green School Field Guidelines
   ========================================================================== */

const MOBILE_ACTIVITIES = [
  {
    id: 1,
    title: 'سلة الفرز المدرسية التعليمية',
    target: 'المرحلة الابتدائية والإعدادية',
    duration: '45 دقيقة',
    icon: 'trash-2',
    color: '#1F7A5A',
    summary: 'نشاط تطبيقي لتدريب الطلاب على تصنيف المخلفات الورقية وفصلها عن البلاستيك وبقايا الأطعمة لضمان نقاء خامة الورق.',
    steps: [
      'تجهيز حاويتين ملونتين داخل الفصل (خضراء للورق، وزرقاء للبلاستيك).',
      'شرح أنواع الورق المقبول (دفاتر، كراسات، كتب قديمة) وغير المقبول (مناديل، ورق ملوث بالزيوت).',
      'مسابقة سرعة بين المجموعات لفرز 20 عنصراً مختلفاً بدقة.'
    ]
  },
  {
    id: 2,
    title: 'مسرح العرائس وتدوير الورق',
    target: 'رياض الأطفال والصفوف الأولى',
    duration: '60 دقيقة',
    icon: 'smile',
    color: '#EA580C',
    summary: 'صناعة دمى وعرائس ورقية من عجينة الورق المرتجع وسرد قصص تفاعلية عن حماية الأشجار وتوفير المياه والطاقة.',
    steps: [
      'نقع قصاصات الورق والكرتون في ماء دافئ وتفتيتها لصنع عجينة يدوية.',
      'تشكيل شخصيات مستدامة (شجرة، قطرة ماء، صندوق ذكي).',
      'تقديم عرض مسرحي قصير يبرز أثر إعادة تدوير 1 طن ورق في حماية 17 شجرة.'
    ]
  },
  {
    id: 3,
    title: 'جدول السلوك البيئي الأخضر',
    target: 'كافة المراحل المدرسية',
    duration: 'مستمر أسبوعياً',
    icon: 'calendar-check',
    color: '#1C9A8B',
    summary: 'لوحة تفاعلية لمتابعة سلوك الطلاب في ترشيد استخدام الورق داخل المدرسة والمنزل ومنح أوسمة التميز.',
    steps: [
      'تعليق جدول النقاط الخضراء في ركن البيئة بكل فصل.',
      'تسجيل النقاط للطلاب الملتزمين بالطباعة على الوجهين وجمع الدفاتر المستعملة.',
      'تكريم الطالب والفصل الأكثر حفاظاً على الموارد شهرياً.'
    ]
  },
  {
    id: 4,
    title: 'ورشة تشكيل الكرتون المضلع والإكسسوارات',
    target: 'المعلمات وخريجات التربية الفنية',
    duration: '120 دقيقة',
    icon: 'palette',
    color: '#8B5CF6',
    summary: 'تدريب حرفي احترافي لتحويل الكرتون المضلع المستهلك إلى منظمات مكتبية وهدايا بيئية ذات قيمة تسويقية عالية.',
    steps: [
      'قص ألواح الكرتون المضلع باتجاه الألياف الصحيح لزيادة المتانة.',
      'تجميع القطع باستخدام غراء مائي صديق للبيئة.',
      'التشطيب بألوان طبيعية وتبطين داخلي لعرض المنتجات في المعارض.'
    ]
  }
];

function renderMobileActivities() {
  const container = document.getElementById('mActivitiesContainer');
  if (!container) return;

  let html = '';
  MOBILE_ACTIVITIES.forEach((act) => {
    html += `
      <div class="m-card" style="border-right: 4px solid ${act.color};">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <div style="width: 34px; height: 34px; background: rgba(31, 122, 90, 0.12); color: ${act.color}; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
              <i data-lucide="${act.icon}" style="width: 18px; height: 18px;"></i>
            </div>
            <strong style="font-size: 0.98rem; color: var(--color-primary-dark);">${act.title}</strong>
          </div>
          <span class="m-badge m-badge-primary" style="font-size: 0.72rem;">${act.duration}</span>
        </div>
        <p style="font-size: 0.85rem; color: var(--color-text-secondary); line-height: 1.5; margin-bottom: 0.75rem;">${act.summary}</p>
        <div style="background: var(--color-bg); padding: 0.6rem 0.75rem; border-radius: var(--radius-sm); border: 1px dashed var(--color-border); font-size: 0.8rem;">
          <strong style="color: var(--color-primary-dark); display: block; margin-bottom: 0.3rem;">خطوات التنفيذ الميداني:</strong>
          <ol style="padding-right: 1.2rem; margin: 0; color: var(--color-text);">
            ${act.steps.map(s => `<li style="margin-bottom: 0.25rem;">${s}</li>`).join('')}
          </ol>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  if (window.lucide) window.lucide.createIcons();
}
