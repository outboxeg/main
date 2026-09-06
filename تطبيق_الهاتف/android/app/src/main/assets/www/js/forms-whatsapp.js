/* ==========================================================================
   Bara El-Sandouq Mobile Forms & Direct WhatsApp Dispatcher (forms-whatsapp.js)
   Enables Direct WhatsApp Messaging & Offline Storage for All Mobile Submissions
   ========================================================================== */

const OFFICIAL_WHATSAPP_PHONE = '201064376377'; // رقم واتساب المعتمد لمشروع برة الصندوق

// Helper: Get Form Data Object
function getFormData(formElement) {
  const formData = new FormData(formElement);
  const data = {};
  for (let [key, value] of formData.entries()) {
    data[key] = value.trim();
  }
  return data;
}

// Helper: Open WhatsApp with Formatted Message
function sendToWhatsApp(messageText) {
  const encoded = encodeURIComponent(messageText);
  
  // Try native whatsapp URL scheme first, then fallback to web/app URL
  const waUrl = `https://wa.me/${OFFICIAL_WHATSAPP_PHONE}?text=${encoded}`;
  
  // Open in browser/app
  window.open(waUrl, '_blank');
  
  if (typeof showMobileToast === 'function') {
    showMobileToast('💬 جاري فتح تطبيق واتساب لإرسال طلبك...');
  }
}

// Helper: Save Submission in LocalStorage
function saveSubmissionLocally(formType, data) {
  try {
    const records = JSON.parse(localStorage.getItem('outbox_mobile_submissions') || '[]');
    const newRecord = {
      id: 'MOB-' + Date.now(),
      formType: formType,
      data: data,
      date: new Date().toISOString(),
      timestamp: new Date().toLocaleString('ar-EG')
    };
    records.push(newRecord);
    localStorage.setItem('outbox_mobile_submissions', JSON.stringify(records));
    
    // Also store in general submission store if available
    const genRecords = JSON.parse(localStorage.getItem('bara_forms_submissions') || '[]');
    genRecords.push({
      id: newRecord.id,
      formType: formType,
      data: data,
      submittedAt: newRecord.date,
      synced: false
    });
    localStorage.setItem('bara_forms_submissions', JSON.stringify(genRecords));
    
    renderSavedSubmissionsList();
    return true;
  } catch (err) {
    console.error('LocalStorage error:', err);
    return false;
  }
}

// 1. Association Form Dispatcher (طلب انضمام جمعية)
function dispatchAssociationForm(isWhatsApp) {
  const form = document.getElementById('mAssocForm');
  if (!form) return;
  const d = getFormData(form);

  if (!d.assocName || !d.assocPhone) {
    alert('يرجى كتابة اسم الجمعية ورقم الهاتف للتواصل');
    return;
  }

  saveSubmissionLocally('association', d);

  if (isWhatsApp) {
    const text = 
`🌿 *طلب انضمام جمعية شريكة – برة الصندوق* 🌿
━━━━━━━━━━━━━━━━━━
🏢 *اسم الجمعية:* ${d.assocName}
📜 *رقم الإشهار:* ${d.assocLicense || 'غير محدد'}
📍 *المركز / المحافظة:* ${d.assocLocation || 'البحيرة'}
👤 *المسؤول / رئيس مجلس الإدارة:* ${d.assocLeader || 'غير محدد'}
📞 *رقم الهاتف:* ${d.assocPhone}
📦 *طاقة التجميع الشهرية المتوقعة:* ${d.assocCapacity || 'غير محدد'} كجم
📝 *ملاحظات:* ${d.assocNotes || 'لا توجد'}
━━━━━━━━━━━━━━━━━━
📅 *التاريخ:* ${new Date().toLocaleDateString('ar-EG')}`;

    sendToWhatsApp(text);
  } else {
    showMobileToast('✅ تم حفظ طلب الجمعية بنجاح على الهاتف!');
  }
  form.reset();
}

// 2. School Form Dispatcher (ترشيح مدرسة)
function dispatchSchoolForm(isWhatsApp) {
  const form = document.getElementById('mSchoolForm');
  if (!form) return;
  const d = getFormData(form);

  if (!d.schoolName || !d.schoolPhone) {
    alert('يرجى كتابة اسم المدرسة ورقم هاتف منسق البيئة/المسؤول');
    return;
  }

  saveSubmissionLocally('school', d);

  if (isWhatsApp) {
    const text = 
`🏫 *ترشيح مدرسة خضراء ذكية – برة الصندوق* 🏫
━━━━━━━━━━━━━━━━━━
🎒 *اسم المدرسة:* ${d.schoolName}
📍 *الإدارة التعليمية / المركز:* ${d.schoolAdmin || 'البحيرة'}
👥 *عدد الطلاب التقريبي:* ${d.studentsCount || 'غير محدد'} طالب
👤 *اسم منسق التربية البيئية / المسؤول:* ${d.coordinatorName || 'غير محدد'}
📞 *رقم الهاتف:* ${d.schoolPhone}
📝 *أنشطة بيئية سابقة بالمدرسة:* ${d.schoolActivities || 'لا توجد'}
━━━━━━━━━━━━━━━━━━
📅 *التاريخ:* ${new Date().toLocaleDateString('ar-EG')}`;

    sendToWhatsApp(text);
  } else {
    showMobileToast('✅ تم حفظ ترشيح المدرسة بنجاح على الهاتف!');
  }
  form.reset();
}

// 3. Volunteer Form Dispatcher (تسجيل متطوع)
function dispatchVolunteerForm(isWhatsApp) {
  const form = document.getElementById('mVolunteerForm');
  if (!form) return;
  const d = getFormData(form);

  if (!d.volName || !d.volPhone) {
    alert('يرجى كتابة اسم المتطوع ورقم الهاتف');
    return;
  }

  saveSubmissionLocally('volunteer', d);

  if (isWhatsApp) {
    const text = 
`🤝 *طلب تطوع ميداني – برة الصندوق* 🤝
━━━━━━━━━━━━━━━━━━
👤 *الاسم الثلاثي:* ${d.volName}
🎂 *العمر:* ${d.volAge || 'غير محدد'} سنة
🎓 *المؤهل / التخصص:* ${d.volDegree || 'غير محدد'}
📍 *محل السكن / المركز:* ${d.volAddress || 'البحيرة'}
📞 *رقم الهاتف:* ${d.volPhone}
✨ *مجال التطوع المفضل:* ${d.volInterest || 'التوعية والفرز بالمدارس'}
━━━━━━━━━━━━━━━━━━
📅 *التاريخ:* ${new Date().toLocaleDateString('ar-EG')}`;

    sendToWhatsApp(text);
  } else {
    showMobileToast('✅ تم تسجيل بيانات التطوع بنجاح على الهاتف!');
  }
  form.reset();
}

// 4. Women Empowerment Form Dispatcher (تمكين وتدريب سيدات)
function dispatchWomenForm(isWhatsApp) {
  const form = document.getElementById('mWomenForm');
  if (!form) return;
  const d = getFormData(form);

  if (!d.womanName || !d.womanPhone) {
    alert('يرجى كتابة الاسم ورقم الهاتف للتواصل');
    return;
  }

  saveSubmissionLocally('women', d);

  if (isWhatsApp) {
    const text = 
`👩‍💼 *طلب تدريب وفرصة عمل نسائية – برة الصندوق* 👩‍💼
━━━━━━━━━━━━━━━━━━
🌸 *الاسم:* ${d.womanName}
🎂 *السن:* ${d.womanAge || 'غير محدد'}
🎓 *المؤهل الدراسي:* ${d.womanEdu || 'تربية فنية / مؤهل متوسط'}
📍 *القرية / المركز:* ${d.womanLocation || 'دمنهور / البحيرة'}
📞 *رقم الهاتف / واتساب:* ${d.womanPhone}
💳 *هل تمتلك محفظة إلكترونية (فودافون كاش وغيرها):* ${d.hasWallet || 'نعم'}
🎨 *المهارات الحرفية السابقة:* ${d.craftSkills || 'أعمال يدوية ورقية'}
━━━━━━━━━━━━━━━━━━
📅 *التاريخ:* ${new Date().toLocaleDateString('ar-EG')}`;

    sendToWhatsApp(text);
  } else {
    showMobileToast('✅ تم حفظ طلب التدريب والتمكين بنجاح!');
  }
  form.reset();
}

// 5. Partner / Sponsor Form Dispatcher (شراكة ومسؤولية مجتمعية)
function dispatchPartnerForm(isWhatsApp) {
  const form = document.getElementById('mPartnerForm');
  if (!form) return;
  const d = getFormData(form);

  if (!d.partnerEntity || !d.partnerPhone) {
    alert('يرجى كتابة اسم المؤسسة ورقم الهاتف');
    return;
  }

  saveSubmissionLocally('partner', d);

  if (isWhatsApp) {
    const text = 
`💼 *طلب شراكة ومسؤولية مجتمعية (CSR) – برة الصندوق* 💼
━━━━━━━━━━━━━━━━━━
🏢 *اسم الجهة / المؤسسة:* ${d.partnerEntity}
👤 *ممثل الجهة:* ${d.partnerRep || 'غير محدد'}
📞 *رقم الهاتف:* ${d.partnerPhone}
✉️ *البريد الإلكتروني:* ${d.partnerEmail || 'غير محدد'}
🤝 *نوع الشراكة المقترحة:* ${d.partnerType || 'رعاية مدارس / دعم لوجستي'}
📝 *تفاصيل العرض:* ${d.partnerDetails || 'يرجى التواصل لمناقشة التعاون'}
━━━━━━━━━━━━━━━━━━
📅 *التاريخ:* ${new Date().toLocaleDateString('ar-EG')}`;

    sendToWhatsApp(text);
  } else {
    showMobileToast('✅ تم حفظ طلب الشراكة بنجاح على الهاتف!');
  }
  form.reset();
}

// 6. Confidential Grievance Dispatcher (بلاغ أو شكوى سرية)
function dispatchGrievanceForm(isWhatsApp) {
  const form = document.getElementById('mGrievanceForm');
  if (!form) return;
  const d = getFormData(form);

  if (!d.grvDetails) {
    alert('يرجى كتابة تفاصيل الشكوى أو البلاغ');
    return;
  }

  const grvCode = 'GRV-' + new Date().getFullYear() + '-' + Math.floor(10000 + Math.random() * 90000);
  d.grvCode = grvCode;

  // Save in grievances localStorage
  try {
    const grvs = JSON.parse(localStorage.getItem('outbox_grievances') || '[]');
    grvs.push({
      code: grvCode,
      name: d.grvName || 'سري / مجهول',
      phone: d.grvPhone || 'غير مدخل',
      type: d.grvType || 'شكوى عامة',
      details: d.grvDetails,
      date: new Date().toISOString(),
      status: 'قيد الفحص السري'
    });
    localStorage.setItem('outbox_grievances', JSON.stringify(grvs));
  } catch(e) {
    console.error(e);
  }

  if (isWhatsApp) {
    const text = 
`🔒 *بلاغ / شكوى سرية مشفرة (سياسة الحماية 2026)* 🔒
━━━━━━━━━━━━━━━━━━
🔑 *كود التتبع السري:* ${grvCode}
📌 *تصنيف الواقعة:* ${d.grvType || 'شكوى حماية وعدم تمييز'}
👤 *المبلّغ:* ${d.grvName || 'سري (طلب عدم ذكر الاسم)'}
📞 *هاتف التواصل:* ${d.grvPhone || 'بدون هاتف (مجهول)'}
📝 *تفاصيل البلاغ:*
${d.grvDetails}
━━━━━━━━━━━━━━━━━━
🛡️ *ملاحظة:* يخضع هذا البلاغ لميثاق السرية وحظر الانتقام التام المعتمد لجمعية الإسراء.`;

    sendToWhatsApp(text);
  } else {
    showMobileToast(`✅ تم تسجيل البلاغ السري برقم تتبع: ${grvCode}`);
  }
  form.reset();
}

// Render Local Saved Submissions in Mobile App
function renderSavedSubmissionsList() {
  const container = document.getElementById('mSavedSubmissionsContainer');
  if (!container) return;

  let records = [];
  try {
    records = JSON.parse(localStorage.getItem('outbox_mobile_submissions') || '[]');
  } catch(e) {
    console.error(e);
  }

  if (!records.length) {
    container.innerHTML = `
      <div style="text-align: center; padding: 1.5rem; color: var(--color-text-secondary); font-size: 0.88rem;">
        <i data-lucide="inbox" style="width: 32px; height: 32px; margin-bottom: 0.5rem; color: var(--color-border);"></i>
        <p>لا توجد طلبات محفوظة محلياً بعد.</p>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  let html = '<div style="display: flex; flex-direction: column; gap: 0.6rem;">';
  records.slice().reverse().forEach((r) => {
    const d = r.data || {};
    const title = d.assocName || d.schoolName || d.volName || d.womanName || d.partnerEntity || 'طلب';
    html += `
      <div style="background: var(--color-bg); border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: 0.75rem; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="font-size: 0.9rem; color: var(--color-primary-dark);">${title}</strong>
          <div style="font-size: 0.75rem; color: var(--color-text-secondary); margin-top: 0.2rem;">${r.formType} • ${r.timestamp || 'الآن'}</div>
        </div>
        <span class="m-badge m-badge-primary" style="font-size: 0.7rem;">محفوظ 💾</span>
      </div>
    `;
  });
  html += '</div>';
  container.innerHTML = html;
  if (window.lucide) window.lucide.createIcons();
}
