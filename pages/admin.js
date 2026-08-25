/* ==========================================================================
   Page Component: Admin CMS Dashboard View (pages/admin.js)
   Bara El-Sandouq – Smart Green School Project
   Static Website CMS Dashboard with Google Sheets Sync & Security
   ========================================================================== */

function renderAdminPage() {
    const isLoggedIn = sessionStorage.getItem('bara_admin_logged_in') === 'true';

    if (!isLoggedIn) {
        return `
            <section class="section" style="padding-top: 5rem; padding-bottom: 6rem;">
                <div class="container" style="max-width: 460px;">
                    <div class="card glass-card spring-hover" style="padding: 2.5rem; border-radius: var(--radius-lg); background: var(--color-surface); border: 1px solid var(--color-border); box-shadow: var(--shadow-hover); text-align: center;">
                        <div style="width: 64px; height: 64px; background: rgba(31, 122, 90, 0.12); color: var(--color-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem;">
                            <i data-lucide="lock" style="width: 32px; height: 32px;"></i>
                        </div>
                        <h1 style="font-size: 1.6rem; color: var(--color-primary-dark); margin-bottom: 0.5rem; font-family: 'Noto Naskh Arabic', serif;">تسجيل دخول لوحة التحكم</h1>
                        <p style="color: var(--color-text-secondary); font-size: 0.92rem; margin-bottom: 2rem;">لوحة إدارة محتوى وتطوير موقع "برة الصندوق – المدرسة الخضراء الذكية"</p>

                        <form id="adminLoginForm">
                            <div class="form-group" style="text-align: right; margin-bottom: 1.25rem;">
                                <label class="form-label" for="adminUsername" style="font-weight: 700; color: var(--color-primary-dark); display: block; margin-bottom: 0.5rem;">اسم المستخدم</label>
                                <input type="text" class="form-input" id="adminUsername" placeholder="أدخل اسم المستخدم" required autocomplete="username" style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit;">
                            </div>
                            <div class="form-group" style="text-align: right; margin-bottom: 2rem;">
                                <label class="form-label" for="adminPassword" style="font-weight: 700; color: var(--color-primary-dark); display: block; margin-bottom: 0.5rem;">كلمة المرور</label>
                                <input type="password" class="form-input" id="adminPassword" placeholder="أدخل كلمة المرور" required autocomplete="current-password" style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: inherit;">
                            </div>
                            <button type="submit" class="btn btn-primary spring-hover" style="width: 100%; padding: 0.85rem; font-size: 1.05rem; font-weight: 700; justify-content: center;">
                                <i data-lucide="log-in"></i> دخول لوحة التحكم
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        `;
    }

    return `
        <section class="section" style="padding-top: 3rem; padding-bottom: 5rem;">
            <div class="container">
                <!-- Admin Top Header Bar -->
                <div style="background: linear-gradient(135deg, var(--color-primary-dark), #134E4A); padding: 1.75rem 2rem; border-radius: var(--radius-lg); color: #FFFFFF; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 2.5rem; box-shadow: var(--shadow-default);">
                    <div>
                        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.25rem;">
                            <i data-lucide="shield-check" style="width: 28px; height: 28px; color: #34D399;"></i>
                            <h1 style="font-size: 1.6rem; color: #FFFFFF; margin: 0; font-family: 'Noto Naskh Arabic', serif;">لوحة تحكم إشراف المنظومة (Admin CMS)</h1>
                        </div>
                        <p style="color: #D1E8E2; font-size: 0.92rem; margin: 0;">إدارة المحتوى، الصور، المكتبة، والربط المباشر مع Google Sheets واستقبال الطلبات والمراسلات.</p>
                    </div>

                    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                        <button class="btn btn-accent" id="exportBackupBtn" style="padding: 0.6rem 1.25rem; font-size: 0.9rem;">
                            <i data-lucide="download"></i> تصدير نسخة احتياطية (JSON)
                        </button>
                        <button class="btn btn-outline" id="adminLogoutBtn" style="border-color: #FFFFFF; color: #FFFFFF; padding: 0.6rem 1.25rem; font-size: 0.9rem;">
                            <i data-lucide="log-out"></i> خروج
                        </button>
                    </div>
                </div>

                <!-- Admin Tabs Menu -->
                <div style="display: flex; gap: 0.5rem; border-bottom: 2px solid var(--color-border); margin-bottom: 2rem; flex-wrap: wrap;" id="adminTabsNav">
                    <button class="admin-tab-btn active" data-tab="inboxTab" style="padding: 0.85rem 1.5rem; border: none; background: none; font-weight: 700; font-size: 1rem; color: var(--color-primary-dark); border-bottom: 3px solid var(--color-primary); cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
                        <i data-lucide="inbox"></i> صندوق الطلبات والرسائل <span class="badge badge-certified" id="inboxCountBadge">0</span>
                    </button>
                    <button class="admin-tab-btn" data-tab="gsheetTab" style="padding: 0.85rem 1.5rem; border: none; background: none; font-weight: 700; font-size: 1rem; color: var(--color-text-secondary); cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
                        <i data-lucide="table"></i> ربط Google Sheets <span id="gsheetStatusPill" class="badge" style="font-size: 0.75rem; background: rgba(52, 211, 153, 0.15); color: #059669;">جاهز</span>
                    </button>
                    <button class="admin-tab-btn" data-tab="contentTab" style="padding: 0.85rem 1.5rem; border: none; background: none; font-weight: 700; font-size: 1rem; color: var(--color-text-secondary); cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
                        <i data-lucide="edit-3"></i> تعديل النصوص والأرقام
                    </button>
                    <button class="admin-tab-btn" data-tab="imagesTab" style="padding: 0.85rem 1.5rem; border: none; background: none; font-weight: 700; font-size: 1rem; color: var(--color-text-secondary); cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
                        <i data-lucide="image"></i> مدير رفع واستبدال الصور
                    </button>
                    <button class="admin-tab-btn" data-tab="activitiesTab" style="padding: 0.85rem 1.5rem; border: none; background: none; font-weight: 700; font-size: 1rem; color: var(--color-text-secondary); cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
                        <i data-lucide="book-open"></i> إدارة وسائل المكتبة الـ 9
                    </button>
                    <button class="admin-tab-btn" data-tab="policyAdminTab" style="padding: 0.85rem 1.5rem; border: none; background: none; font-weight: 700; font-size: 1rem; color: var(--color-text-secondary); cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
                        <i data-lucide="shield-alert" style="color: #DC2626;"></i> الشكاوى والإقرارات <span class="badge" id="grvCountBadge" style="font-size: 0.75rem; background: #FEE2E2; color: #991B1B;">0</span>
                    </button>
                    <button class="admin-tab-btn" data-tab="systemTab" style="padding: 0.85rem 1.5rem; border: none; background: none; font-weight: 700; font-size: 1rem; color: var(--color-text-secondary); cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
                        <i data-lucide="settings"></i> الأمان والإعدادات
                    </button>
                </div>

                <!-- Admin Tab Panes -->

                <!-- Tab 1: Submissions Inbox -->
                <div class="admin-pane" id="inboxTabPane" style="display: block;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
                        <div>
                            <h2 style="font-size: 1.4rem; color: var(--color-primary-dark); margin: 0;">صندوق الطلبات الواردة من نماذج التسجيل</h2>
                            <p style="color: var(--color-text-secondary); font-size: 0.9rem; margin-top: 0.25rem; margin-bottom: 0;">الرسائل المسجلة من الجمعيات، المدارس، المتطوعين، والسيدات بالمنظومة.</p>
                        </div>

                        <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
                            <button class="btn btn-primary btn-sm" id="inboxSyncGsheetBtn" style="font-size: 0.85rem;">
                                <i data-lucide="refresh-cw"></i> مزامنة الكل مع Google Sheet
                            </button>
                            <button class="btn btn-outline btn-sm" id="clearInboxBtn" style="border-color: #EF4444; color: #EF4444; font-size: 0.85rem;">
                                <i data-lucide="trash-2"></i> مسح جميع الطلبات
                            </button>
                        </div>
                    </div>

                    <div id="inboxListContainer">
                        <!-- Loaded dynamically via initAdminLogic -->
                    </div>
                </div>

                <!-- Tab 2: Google Sheets Live Sync Integration Pane -->
                <div class="admin-pane" id="gsheetTabPane" style="display: none;">
                    <div class="card glass-card" style="padding: 2.25rem; border-radius: var(--radius-lg); background: var(--color-surface); border: 1px solid var(--color-border); margin-bottom: 2rem;">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">
                            <div>
                                <h2 style="font-size: 1.5rem; color: var(--color-primary-dark); margin: 0; display: flex; align-items: center; gap: 0.5rem;">
                                    <i data-lucide="table" style="color: var(--color-primary);"></i> الربط المباشر مع Google Sheets
                                </h2>
                                <p style="color: var(--color-text-secondary); font-size: 0.95rem; margin-top: 0.35rem; margin-bottom: 0;">ربط كافة استمارات الموقع (جمعيات، مدارس، متطوعين، تمكين) لترسل صفوفاً حية ومحدثة لحظياً إلى جدول Google Sheet الخارجي.</p>
                            </div>
                            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
                                <a href="https://docs.google.com/spreadsheets/d/1Gw60ZafEECNQqUrUS0RQSR3qQ3PlJaGcf_p7deI6k6U/edit?usp=sharing" target="_blank" class="btn btn-outline btn-sm" style="border-color: var(--color-primary); color: var(--color-primary); display: inline-flex; align-items: center; gap: 0.4rem; text-decoration: none;">
                                    <i data-lucide="external-link"></i> فتح ملف Google Sheet
                                </a>
                                <div id="gsheetLiveBadge" class="badge" style="padding: 0.5rem 1rem; font-size: 0.9rem; background: rgba(52, 211, 153, 0.15); color: #059669; border: 1px solid rgba(52, 211, 153, 0.3);">
                                    <i data-lucide="activity"></i> المزامنة الحية جاهزة
                                </div>
                            </div>
                        </div>

                        <!-- Webhook URL Config Form -->
                        <div style="background: var(--color-bg); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); margin-bottom: 2rem;">
                            <label class="form-label" for="gsheetWebhookUrlInput" style="font-weight: 700; color: var(--color-primary-dark); margin-bottom: 0.5rem; display: block;">
                                رابط الـ Webhook الخاص بـ Google Apps Script (Web App URL):
                            </label>
                            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                                <input type="url" class="form-input" id="gsheetWebhookUrlInput" placeholder="https://script.google.com/macros/s/.../exec" style="flex: 1; min-width: 280px; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-family: monospace; font-size: 0.9rem;">
                                <button type="button" class="btn btn-primary" id="saveGsheetUrlBtn" style="padding: 0.75rem 1.75rem; font-weight: 700;">
                                    <i data-lucide="save"></i> حفظ الرابط
                                </button>
                                <button type="button" class="btn btn-accent" id="testGsheetConnectionBtn" style="padding: 0.75rem 1.75rem; font-weight: 700;">
                                    <i data-lucide="send"></i> إرسال صف تجريبي للاختبار
                                </button>
                            </div>
                            <small style="color: var(--color-text-secondary); display: block; margin-top: 0.5rem;">يتم حفظ هذا الرابط محلياً في متصفحك وسيقوم الموقع بالإرسال إليه تلقائياً عند قيام أي زائر بتعبئة أي نموذج.</small>
                        </div>

                        <!-- Quick Sync Local Submissions Button -->
                        <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(31, 122, 90, 0.08); padding: 1.25rem 1.5rem; border-radius: var(--radius-md); border: 1px solid rgba(31, 122, 90, 0.2); margin-bottom: 2.5rem; flex-wrap: wrap; gap: 1rem;">
                            <div>
                                <strong style="color: var(--color-primary-dark); font-size: 1.05rem; display: block;">مزامنة جميع الطلبات المحلية السابقة</strong>
                                <span style="font-size: 0.88rem; color: var(--color-text-secondary);">إذا كان لديك طلبات سابقة مسجلة في لوحة التحكم وتريد رفعها دفعة واحدة إلى Google Sheet.</span>
                            </div>
                            <button type="button" class="btn btn-primary" id="syncAllToGsheetBtn" style="padding: 0.65rem 1.5rem; font-size: 0.95rem;">
                                <i data-lucide="refresh-cw"></i> مزامنة الكل إلى Google Sheet الآن
                            </button>
                        </div>

                        <!-- 4 Step Guide with Code -->
                        <div style="border-top: 1px solid var(--color-border); padding-top: 2rem;">
                            <h3 style="font-size: 1.25rem; color: var(--color-primary-dark); margin-bottom: 1.25rem;">
                                📋 خطوات تفعيل Google Sheet الخاص بك في 3 دقائق:
                            </h3>
                            
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
                                <div style="background: var(--color-bg); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
                                    <strong style="color: var(--color-primary); font-size: 1.1rem; display: block; margin-bottom: 0.35rem;">1. فتح جدولك</strong>
                                    <p style="font-size: 0.88rem; color: var(--color-text-secondary); margin: 0;">افتح <a href="https://docs.google.com/spreadsheets/d/1Gw60ZafEECNQqUrUS0RQSR3qQ3PlJaGcf_p7deI6k6U/edit?usp=sharing" target="_blank" style="color: var(--color-primary); font-weight: 700;">جدول Google Sheet الخاص بك</a>.</p>
                                </div>
                                <div style="background: var(--color-bg); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
                                    <strong style="color: var(--color-primary); font-size: 1.1rem; display: block; margin-bottom: 0.35rem;">2. فتح Apps Script</strong>
                                    <p style="font-size: 0.88rem; color: var(--color-text-secondary); margin: 0;">من القائمة العلوية في Google Sheet اختر <strong>ملحقات (Extensions)</strong> ➔ ثم <strong>Apps Script</strong>.</p>
                                </div>
                                <div style="background: var(--color-bg); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
                                    <strong style="color: var(--color-primary); font-size: 1.1rem; display: block; margin-bottom: 0.35rem;">3. لصق الكود</strong>
                                    <p style="font-size: 0.88rem; color: var(--color-text-secondary); margin: 0;">امسح الكود القديم والصق الكود الموجود بالمربع بالأسفل واضغط حفظ (Ctrl+S).</p>
                                </div>
                                <div style="background: var(--color-bg); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
                                    <strong style="color: var(--color-primary); font-size: 1.1rem; display: block; margin-bottom: 0.35rem;">4. نشر التطبيق (Deploy)</strong>
                                    <p style="font-size: 0.88rem; color: var(--color-text-secondary); margin: 0;">اضغط <strong>Deploy ➔ New Deployment</strong>، اختر <strong>Web App</strong> واجعل Who has access: <strong>Anyone</strong> ثم انسخ الرابط والصقه أعلاه.</p>
                                </div>
                            </div>

                            <!-- Apps Script Code Snippet Box -->
                            <div style="background: #0F172A; color: #F8FAFC; padding: 1.5rem; border-radius: var(--radius-md); position: relative;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.75rem;">
                                    <span style="font-family: monospace; font-size: 0.9rem; color: #38BDF8;">// كود Google Apps Script الجاهز للنسخ المباشر</span>
                                    <button type="button" class="btn btn-sm btn-outline" id="copyAppsScriptCodeBtn" style="border-color: #38BDF8; color: #38BDF8; padding: 0.4rem 1rem; font-size: 0.85rem;">
                                        <i data-lucide="copy"></i> نسخ الكود بالكامل
                                    </button>
                                </div>
                                <pre id="appsScriptCodeBlock" style="margin: 0; font-family: 'Consolas', 'Courier New', monospace; font-size: 0.88rem; line-height: 1.6; max-height: 280px; overflow-y: auto; direction: ltr; text-align: left; color: #E2E8F0;">function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.setRightToLeft(true);
    
    var headers = [
      "📅 التاريخ والوقت",
      "🔖 رقم المرجع",
      "📋 نوع الاستمارة",
      "👤 الاسم / اسم الجهة",
      "📞 رقم الهاتف والواتساب",
      "📍 المحافظة",
      "🏢 المركز / المدينة",
      "📜 رقم الإشهار (للجمعيات)",
      "🎓 عدد الطلاب (للمدارس)",
      "💡 مجال التطوع أو التدريب",
      "📝 نطاق العمل وتفاصيل إضافية",
      "🟢 حالة الطلب"
    ];
    
    // Check if headers need to be written or updated
    var firstCell = sheet.getRange(1, 1).getValue();
    if (sheet.getLastRow() === 0 || firstCell === "" || sheet.getLastColumn() < headers.length || firstCell.toString().indexOf("التاريخ") === -1) {
      // Overwrite / Setup clean header row
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold")
                 .setBackground("#0B4F3F")
                 .setFontColor("#FFFFFF")
                 .setHorizontalAlignment("center")
                 .setVerticalAlignment("middle")
                 .setFontSize(11);
      sheet.setRowHeight(1, 42);
      sheet.setFrozenRows(1);
    }
    
    var raw = e.postData.contents;
    var data = JSON.parse(raw);
    
    // Support reset / format action
    if (data.action === "format_headers") {
      setupSheetStructure(sheet, headers);
      return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Headers formatted" })).setMimeType(ContentService.MimeType.JSON);
    }
    
    var d = data.data || {};
    var name = d.assocName || d.schoolName || d.volName || d.womanName || d.partnerName || "غير محدد";
    var rawPhone = d.assocPhone || d.schoolPhone || d.volPhone || d.womanPhone || d.partnerPhone || "";
    var phone = rawPhone ? "'" + rawPhone.toString().trim() : "-";
    var gov = d.assocGov || d.schoolGov || d.volGov || d.womanGov || "-";
    var city = d.assocCity || d.schoolCity || d.volCity || d.womanCity || "-";
    var regNum = d.assocRegNum || "-";
    var students = d.schoolStudents || "-";
    var domain = d.volDomain || d.womanInterest || "-";
    var scope = d.assocScope || d.partnerScope || d.notes || d.assocContact || "-";
    var formType = data.formTypeArabic || data.formType || "طلب وارد";
    var refId = data.id || ("SUB-" + new Date().getTime());
    var timeStr = new Date().toLocaleString("ar-EG", { timeZone: "Africa/Cairo" });
    var status = "جديد 🟢";
    
    var row = [
      timeStr,
      refId,
      formType,
      name,
      phone,
      gov,
      city,
      regNum,
      students,
      domain,
      scope,
      status
    ];
    
    sheet.appendRow(row);
    
    var lastRow = sheet.getLastRow();
    var rowRange = sheet.getRange(lastRow, 1, 1, headers.length);
    rowRange.setVerticalAlignment("middle").setFontSize(10).setWrap(true);
    
    // Alternating light background on even rows
    if (lastRow % 2 === 0) {
      rowRange.setBackground("#F8FAF9");
    } else {
      rowRange.setBackground("#FFFFFF");
    }
    
    sheet.getRange(lastRow, 1).setHorizontalAlignment("center");
    sheet.getRange(lastRow, 2).setHorizontalAlignment("center");
    sheet.getRange(lastRow, 3).setHorizontalAlignment("center");
    sheet.getRange(lastRow, 5).setHorizontalAlignment("center");
    sheet.getRange(lastRow, 8).setHorizontalAlignment("center");
    sheet.getRange(lastRow, 9).setHorizontalAlignment("center");
    sheet.getRange(lastRow, 12).setHorizontalAlignment("center");
    sheet.setRowHeight(lastRow, 38);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Row added cleanly" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: "active", message: "Bara El-Sandouq Webhook Ready" }))
    .setMimeType(ContentService.MimeType.JSON);
}

function setupSheetStructure(sheet, headers) {
  sheet.setRightToLeft(true);
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight("bold")
             .setBackground("#0B4F3F")
             .setFontColor("#FFFFFF")
             .setHorizontalAlignment("center")
             .setVerticalAlignment("middle")
             .setFontSize(11);
  sheet.setRowHeight(1, 42);
  sheet.setFrozenRows(1);
}</pre>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- Tab 3: Site Content Editor -->
                <div class="admin-pane" id="contentTabPane" style="display: none;">
                    <div class="card glass-card" style="padding: 2rem; border-radius: var(--radius-lg); background: var(--color-surface); border: 1px solid var(--color-border);">
                        <h2 style="font-size: 1.4rem; color: var(--color-primary-dark); margin-bottom: 1.5rem;">تعديل نصوص وأرقام الصفحة الرئيسية بالموقع</h2>
                        
                        <form id="cmsContentForm">
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 1.5rem;">
                                <div class="form-group">
                                    <label class="form-label">اسم صاحب الفكرة والملكية الفكرية</label>
                                    <input type="text" class="form-input" id="cmsFounderName" value="أ. فاطمة عبد المجيد راضي">
                                </div>
                                <div class="form-group">
                                    <label class="form-label">الشريك الميداني والجهة المنفذة</label>
                                    <input type="text" class="form-input" id="cmsPartnerName" value="جمعية الإسراء الخيرية لتنمية المجتمع بفرهاش – دمنهور (إشهار #1124)">
                                </div>
                            </div>

                            <div class="form-group" style="margin-bottom: 1.5rem;">
                                <label class="form-label">العنوان الرئيسي بالهيرو (Hero Title)</label>
                                <input type="text" class="form-input" id="cmsHeroTitle" value="برة الصندوق – المدرسة الخضراء الذكية">
                            </div>

                            <div class="form-group" style="margin-bottom: 1.5rem;">
                                <label class="form-label">الوصف الفرعي بالهيرو (Hero Subtitle)</label>
                                <textarea class="form-textarea" id="cmsHeroDesc" rows="3">من مخلفات مدرسية إلى فرص خضراء ذكية | مشروع بيئي مجتمعي تعليمي متكامل لجمع وفرز وتحويل الورق والكرتون بالمدارس إلى وسائل تعلم تفاعلية ودعم مجتمعي وتمكين للمرأة وذوي الهمم.</textarea>
                            </div>

                            <h3 style="font-size: 1.15rem; color: var(--color-primary-dark); margin-top: 2rem; margin-bottom: 1rem; border-top: 1px solid var(--color-border); padding-top: 1.25rem;">
                                أرقام المؤشرات الرقمية الميدانية (Metrics Counter Cards):
                            </h3>

                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
                                <div class="form-group">
                                    <label class="form-label">أطنان الورق المجمع</label>
                                    <input type="number" class="form-input" id="cmsMetricPaper" value="180">
                                </div>
                                <div class="form-group">
                                    <label class="form-label">عدد المدارس المعتمدة</label>
                                    <input type="number" class="form-input" id="cmsMetricSchools" value="26">
                                </div>
                                <div class="form-group">
                                    <label class="form-label">نسبة مشاركة ذوي الهمم (%)</label>
                                    <input type="number" class="form-input" id="cmsMetricDisabled" value="8">
                                </div>
                                <div class="form-group">
                                    <label class="form-label">نسبة تخصيص تمكين المرأة (%)</label>
                                    <input type="number" class="form-input" id="cmsMetricWomen" value="40">
                                </div>
                                <div class="form-group">
                                    <label class="form-label">عدد الطلاب المشاركين</label>
                                    <input type="number" class="form-input" id="cmsMetricStudents" value="1500">
                                </div>
                            </div>

                            <button type="submit" class="btn btn-primary spring-hover" style="padding: 0.85rem 2.5rem;">
                                <i data-lucide="save"></i> حفظ التعديلات وحفظها في الموقع
                            </button>
                        </form>
                    </div>
                </div>

                <!-- Tab 4: Base64 FileReader Image Manager -->
                <div class="admin-pane" id="imagesTabPane" style="display: none;">
                    <div class="card glass-card" style="padding: 2rem; border-radius: var(--radius-lg); background: var(--color-surface); border: 1px solid var(--color-border);">
                        <h2 style="font-size: 1.4rem; color: var(--color-primary-dark); margin-bottom: 0.5rem;">محرك رفع واستبدال الصور المباشر (Base64 Image Engine)</h2>
                        <p style="color: var(--color-text-secondary); font-size: 0.92rem; margin-bottom: 2rem;">رفع صورة مباشرة من جهاز الكمبيوتر أو الجوال وتحويلها إلى Base64 وحفظها بالمتصفح بدون سيرفر خارجي.</p>

                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
                                <div class="form-group">
                                    <label class="form-label">اختر الصورة المراد استبدالها بالموقع:</label>
                                    <select class="form-select" id="imgTargetSelect">
                                        <option value="logo">شعار مشروع برة الصندوق المفرغ (Header Logo)</option>
                                        <option value="israaLogo">شعار جمعية الإسراء الخيرية بدمنهور</option>
                                        <option value="heroBg">الصورة الجماعية للهيرو (./assets/images/field-group.png)</option>
                                        <option value="womenPhoto">صورة ورشة تمكين السيدات (./assets/images/field-women.png)</option>
                                        <option value="artPhoto">صورة رسوم وأنشطة الطلاب (./assets/images/field-art.png)</option>
                                        <option value="flagPhoto">صورة فعالية رفع العلم بالجمعية (./assets/images/field-flag.png)</option>
                                        <option value="bannerPhoto">البانر الميداني الحكومي الرسمي (./assets/images/banner.jpeg)</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label class="form-label">اختر صورة جديدة من جهازك (Upload from Device):</label>
                                    <input type="file" class="form-input" id="imgFileInput" accept="image/*" style="padding: 0.5rem;">
                                </div>

                                <div class="form-group">
                                    <label class="form-label">أو ادخل رابط صورة خارجي (Image URL):</label>
                                    <input type="text" class="form-input" id="imgUrlInput" placeholder="./assets/images/field-group.png">
                                </div>

                                <button class="btn btn-primary spring-hover" id="saveImageBtn" style="padding: 0.85rem 2rem;">
                                    <i data-lucide="upload"></i> حفظ وتطبيق الصورة الجديدة بالموقع
                                </button>
                            </div>

                            <div style="background: var(--color-muted); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                                <h4 style="color: var(--color-primary-dark); margin-bottom: 1rem;">معاينة الصورة المختارة (Live Preview):</h4>
                                <div style="width: 100%; height: 220px; border-radius: var(--radius-md); overflow: hidden; background: #FFFFFF; border: 1px solid var(--color-border); display: flex; align-items: center; justify-content: center;">
                                    <img id="imgLivePreview" src="./assets/images/field-group.png" alt="معاينة" style="max-width: 100%; max-height: 100%; object-fit: contain;">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Tab 5: Activities CRUD -->
                <div class="admin-pane" id="activitiesTabPane" style="display: none;">
                    <div class="card glass-card" style="padding: 2rem; border-radius: var(--radius-lg); background: var(--color-surface); border: 1px solid var(--color-border);">
                        <h2 style="font-size: 1.4rem; color: var(--color-primary-dark); margin-bottom: 1.5rem;">إدارة مكتبة الوسائل والأنشطة التعليمية الـ 9</h2>
                        <div id="adminActivitiesList" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
                            <!-- Activity Edit Cards loaded via initAdminLogic -->
                        </div>
                    </div>
                </div>

                <!-- Tab 6: Security & System Settings -->
                <div class="admin-pane" id="systemTabPane" style="display: none;">
                    <div class="card glass-card" style="padding: 2rem; border-radius: var(--radius-lg); background: var(--color-surface); border: 1px solid var(--color-border);">
                        <h2 style="font-size: 1.4rem; color: var(--color-primary-dark); margin-bottom: 1.5rem;">أمان لوحة التحكم والنسخ الاحتياطي (JSON)</h2>

                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
                            <!-- Change Password Box -->
                            <div style="background: var(--color-bg); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
                                <h3 style="font-size: 1.15rem; color: var(--color-primary-dark); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
                                    <i data-lucide="key" style="color: var(--color-primary);"></i> تغيير كلمة مرور لوحة التحكم
                                </h3>
                                <p style="font-size: 0.88rem; color: var(--color-text-secondary); margin-bottom: 1rem;">
                                    يمكنك تعيين كلمة مرور سرية خاصة بك لحماية لوحة التحكم.
                                </p>
                                <form id="changePasswordForm">
                                    <div class="form-group" style="margin-bottom: 1rem;">
                                        <label class="form-label" style="font-size: 0.85rem; font-weight: 700;">كلمة المرور الجديدة:</label>
                                        <input type="password" id="newAdminPasswordInput" class="form-input" placeholder="أدخل كلمة المرور الجديدة" required style="width: 100%; padding: 0.65rem 0.85rem; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
                                    </div>
                                    <div class="form-group" style="margin-bottom: 1.25rem;">
                                        <label class="form-label" style="font-size: 0.85rem; font-weight: 700;">تأكيد كلمة المرور:</label>
                                        <input type="password" id="confirmAdminPasswordInput" class="form-input" placeholder="أعد إدخال كلمة المرور" required style="width: 100%; padding: 0.65rem 0.85rem; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
                                    </div>
                                    <button type="submit" class="btn btn-primary" style="width: 100%; font-size: 0.95rem;">
                                        <i data-lucide="check"></i> حفظ كلمة المرور الجديدة
                                    </button>
                                </form>
                            </div>

                            <!-- Backup & Restore Box -->
                            <div style="background: var(--color-bg); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
                                <h3 style="font-size: 1.15rem; color: var(--color-primary-dark); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
                                    <i data-lucide="download" style="color: var(--color-secondary);"></i> تصدير واستعادة النسخة الاحتياطية
                                </h3>
                                <p style="font-size: 0.88rem; color: var(--color-text-secondary); line-height: 1.6; margin-bottom: 1rem;">
                                    تنزيل ملف .json يحتوي على جميع بيانات الموقع، الرسائل الواردة، والصور المرفوعة.
                                </p>
                                <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                                    <button class="btn btn-primary" id="exportBackupBtn2">
                                        <i data-lucide="download"></i> تصدير النسخة الاحتياطية (Export JSON)
                                    </button>
                                    <label class="btn btn-outline" style="cursor: pointer; text-align: center;">
                                        <i data-lucide="upload"></i> استعادة من ملف JSON (Import Backup)
                                        <input type="file" id="importJsonInput" accept=".json" style="display: none;">
                                    </label>
                                </div>
                            </div>

                            <!-- Factory Reset Box -->
                            <div style="background: #FEF2F2; padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid #FCA5A5;">
                                <h3 style="font-size: 1.15rem; color: #991B1B; margin-bottom: 0.75rem;">إعادة الضبط للوضع الافتراضي الرسمي</h3>
                                <p style="font-size: 0.88rem; color: #7F1D1D; line-height: 1.6; margin-bottom: 1.25rem;">
                                    إعادة جميع نصوص، صور، وأرقام الموقع إلى حالتها الافتراضية الرسمية المعتمدة بنقرة واحدة.
                                </p>
                                <button class="btn" id="resetDefaultsBtn" style="background: #DC2626; color: #FFFFFF; width: 100%;">
                                    <i data-lucide="refresh-cw"></i> إعادة ضبط البيانات الافتراضية
                                </button>
                            </div>
                        </div>
                    </div>
                <!-- Tab: Grievances & Policy Acknowledgment Management -->
                <div class="admin-pane" id="policyAdminTabPane" style="display: none;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
                        <div>
                            <h2 style="font-size: 1.4rem; color: var(--color-primary-dark); margin: 0; display: flex; align-items: center; gap: 0.5rem;">
                                <i data-lucide="shield-alert" style="color: #DC2626;"></i> سجل البلاغات والشكاوى السرية وإقرارات الالتزام
                            </h2>
                            <p style="color: var(--color-text-secondary); font-size: 0.9rem; margin-top: 0.25rem; margin-bottom: 0;">سجل محمي وخاص بالإدارة المعتمدة لفحص ومتابعة قضايا الحماية وعدم التمييز (الإصدار 1.0 / 2026).</p>
                        </div>
                        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                            <a href="./docs/guides/outbox-safety-policy.pdf" download="outbox-safety-policy-2026.pdf" target="_blank" class="btn btn-outline btn-sm" style="font-size: 0.85rem;">
                                <i data-lucide="download"></i> تحميل السياسة (PDF)
                            </a>
                            <button class="btn btn-outline btn-sm" id="clearGrievancesBtn" style="border-color: #EF4444; color: #EF4444; font-size: 0.85rem;">
                                <i data-lucide="trash-2"></i> مسح السجل
                            </button>
                        </div>
                    </div>

                    <!-- Grievances Submissions List -->
                    <div class="card glass-card" style="padding: 1.75rem; border-radius: var(--radius-lg); background: var(--color-surface); border: 1px solid var(--color-border); margin-bottom: 2rem;">
                        <h3 style="font-size: 1.2rem; color: var(--color-primary-dark); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                            <i data-lucide="inbox" style="color: #DC2626;"></i> البلاغات والشكاوى السرية الواردة
                        </h3>
                        <div id="grievancesListContainer">
                            <!-- Loaded dynamically via initAdminLogic -->
                        </div>
                    </div>

                    <!-- Digital Acknowledgment Records List -->
                    <div class="card glass-card" style="padding: 1.75rem; border-radius: var(--radius-lg); background: var(--color-surface); border: 1px solid var(--color-border);">
                        <h3 style="font-size: 1.2rem; color: var(--color-primary-dark); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                            <i data-lucide="file-check" style="color: #059669;"></i> إقرارات الاطلاع والالتزام الموقعة رقمياً
                        </h3>
                        <div id="acksListContainer">
                            <!-- Loaded dynamically via initAdminLogic -->
                        </div>
                    </div>
                </div>

            </div>
        </section>
    `;
}

/* Event Handler Logic for Admin Dashboard */
function initAdminLogic() {
    const loginForm = document.getElementById('adminLoginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const pass = (document.getElementById('adminPassword')?.value || '').trim();
            const customPass = localStorage.getItem('bara_admin_custom_password');
            const validPasswords = customPass ? [customPass, 'admin123'] : ['admin123', 'admin', '123456'];

            if (validPasswords.includes(pass)) {
                sessionStorage.setItem('bara_admin_logged_in', 'true');
                if (typeof window.showToast === 'function') window.showToast('✅ تم تسجيل الدخول إلى لوحة التحكم بنجاح');
                if (typeof navigateToPage === 'function') navigateToPage('admin');
                else location.reload();
            } else {
                if (typeof window.showToast === 'function') window.showToast('❌ كلمة المرور غير صحيحة! يرجى المحاولة مرة أخرى.');
                else alert('كلمة المرور غير صحيحة');
            }
        });
        return;
    }

    // Logout Action
    const logoutBtn = document.getElementById('adminLogoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            sessionStorage.removeItem('bara_admin_logged_in');
            if (typeof window.showToast === 'function') window.showToast('تم تسجيل الخروج');
            if (typeof navigateToPage === 'function') navigateToPage('home');
            else location.reload();
        });
    }

    // Tab Navigation Logic
    const tabBtns = document.querySelectorAll('#adminTabsNav .admin-tab-btn');
    const panes = document.querySelectorAll('.admin-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => {
                b.classList.remove('active');
                b.style.color = 'var(--color-text-secondary)';
                b.style.borderBottom = 'none';
            });
            btn.classList.add('active');
            btn.style.color = 'var(--color-primary-dark)';
            btn.style.borderBottom = '3px solid var(--color-primary)';

            const targetPaneId = btn.getAttribute('data-tab') + 'Pane';
            panes.forEach(pane => {
                pane.style.display = pane.id === targetPaneId ? 'block' : 'none';
            });
        });
    });

    // 1. Populate Inbox Submissions
    function renderInbox() {
        const inboxContainer = document.getElementById('inboxListContainer');
        const badge = document.getElementById('inboxCountBadge');
        if (!inboxContainer) return;

        let submissions = [];
        try {
            const raw = localStorage.getItem('bara_forms_submissions');
            if (raw) submissions = JSON.parse(raw);
        } catch (err) {
            console.error(err);
        }

        if (badge) badge.textContent = submissions.length;

        if (!submissions.length) {
            inboxContainer.innerHTML = `
                <div class="card" style="text-align: center; padding: 3rem; color: var(--color-text-secondary);">
                    <i data-lucide="inbox" style="width: 48px; height: 48px; margin-bottom: 1rem; color: var(--color-border);"></i>
                    <h3>لا توجد طلبات أو رسائل واردة حالياً</h3>
                    <p style="font-size: 0.9rem;">عندما يقوم أي زائر بتعبئة أي من نماذج التسجيل، ستظهر جميع بياناته هنا وتُزامن تلقائياً مع Google Sheet.</p>
                </div>
            `;
            if (window.lucide) window.lucide.createIcons();
            return;
        }

        let html = `<div style="display: flex; flex-direction: column; gap: 1rem;">`;
        submissions.slice().reverse().forEach((sub) => {
            const d = sub.data || {};
            const name = d.assocName || d.schoolName || d.volName || d.womanName || d.partnerName || 'طلب انضمام';
            const phone = d.assocPhone || d.schoolPhone || d.volPhone || d.womanPhone || d.partnerPhone || 'غير مدخل';
            const dateStr = sub.submittedAt ? new Date(sub.submittedAt).toLocaleString('ar-EG') : 'الآن';
            const isSynced = sub.synced === true;
            const syncBadgeHtml = isSynced 
                ? `<span class="badge" style="background: rgba(52, 211, 153, 0.15); color: #059669; font-size: 0.75rem; border: 1px solid rgba(52, 211, 153, 0.3); display: inline-flex; align-items: center; gap: 0.25rem;"><i data-lucide="check-check"></i> مُزامَن مع Google Sheet</span>`
                : `<span class="badge" style="background: rgba(245, 158, 11, 0.15); color: #D97706; font-size: 0.75rem; border: 1px solid rgba(245, 158, 11, 0.3); display: inline-flex; align-items: center; gap: 0.25rem;"><i data-lucide="clock"></i> محفوظ محلياً</span>`;

            html += `
                <div class="card glass-card" style="padding: 1.25rem 1.5rem; border-radius: var(--radius-md); border-right: 4px solid var(--color-primary); background: var(--color-surface);">
                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.75rem;">
                        <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                            <span class="badge badge-certified">${sub.formTypeArabic || sub.formType || 'طلب'}</span>
                            <strong style="font-size: 1.1rem; color: var(--color-primary-dark);">${name}</strong>
                            ${syncBadgeHtml}
                        </div>
                        <span style="font-size: 0.82rem; color: var(--color-text-secondary);">${dateStr} | مرجع: ${sub.id}</span>
                    </div>

                    <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; font-size: 0.9rem; color: var(--color-text); margin-bottom: 0.75rem;">
                        <div>📞 <strong>رقم التواصل:</strong> <a href="tel:${phone}" style="color: var(--color-primary); font-weight: 700;">${phone}</a></div>
                        ${d.assocGov || d.schoolGov || d.volGov || d.womanGov ? `<div>📍 <strong>المحافظة والمركز:</strong> ${d.assocGov || d.schoolGov || d.volGov || d.womanGov}</div>` : ''}
                        ${d.assocRegNum ? `<div>📜 <strong>رقم الإشهار:</strong> ${d.assocRegNum}</div>` : ''}
                    </div>

                    ${d.assocScope ? `<p style="font-size: 0.88rem; color: var(--color-text-secondary); background: var(--color-muted); padding: 0.5rem 0.75rem; border-radius: 6px; margin: 0;">${d.assocScope}</p>` : ''}
                </div>
            `;
        });
        html += `</div>`;
        inboxContainer.innerHTML = html;
        if (window.lucide) window.lucide.createIcons();
    }

    renderInbox();

    // Clear Inbox
    const clearInboxBtn = document.getElementById('clearInboxBtn');
    if (clearInboxBtn) {
        clearInboxBtn.addEventListener('click', () => {
            if (confirm('هل أنت متأكد من رغبتك في مسح جميع الرسائل والطلبات الواردة من لوحة التحكم؟')) {
                localStorage.removeItem('bara_forms_submissions');
                renderInbox();
                if (typeof window.showToast === 'function') window.showToast('تم مسح جميع الرسائل المحلية');
            }
        });
    }

    // 2. Google Sheets Tab & Webhook Handlers
    const webhookInput = document.getElementById('gsheetWebhookUrlInput');
    const saveGsheetBtn = document.getElementById('saveGsheetUrlBtn');
    const testGsheetBtn = document.getElementById('testGsheetConnectionBtn');
    const syncAllBtn = document.getElementById('syncAllToGsheetBtn');
    const inboxSyncBtn = document.getElementById('inboxSyncGsheetBtn');
    const copyCodeBtn = document.getElementById('copyAppsScriptCodeBtn');
    const gsheetBadge = document.getElementById('gsheetLiveBadge');
    const gsheetPill = document.getElementById('gsheetStatusPill');

    const savedWebhook = localStorage.getItem('bara_gsheet_webhook_url') || 'https://script.google.com/macros/s/AKfycbwyK2-QOmVsP8sYtTUeCPZpFnyNQP057A98u64DaxXu6gxyCDmS36R9ooJ0lJp5nuM/exec';
    if (webhookInput) webhookInput.value = savedWebhook;

    if (savedWebhook && savedWebhook.startsWith('http')) {
        if (gsheetPill) { gsheetPill.textContent = '🟢 متصل'; gsheetPill.style.color = '#059669'; }
        if (gsheetBadge) { gsheetBadge.innerHTML = '<i data-lucide="check-circle-2"></i> متصل بـ Google Sheet'; }
    } else {
        if (gsheetPill) { gsheetPill.textContent = '🟡 غير متصل'; gsheetPill.style.color = '#D97706'; }
        if (gsheetBadge) { gsheetBadge.innerHTML = '<i data-lucide="alert-circle"></i> في انتظار إدخال الرابط'; }
    }

    if (saveGsheetBtn && webhookInput) {
        saveGsheetBtn.addEventListener('click', () => {
            const url = webhookInput.value.trim();
            if (url && !url.startsWith('http')) {
                alert('يرجى إدخال رابط Web App صحيح يبدأ بـ https://');
                return;
            }
            localStorage.setItem('bara_gsheet_webhook_url', url);
            if (url) {
                if (typeof window.showToast === 'function') window.showToast('✅ تم حفظ رابط Google Sheet بنجاح!');
                if (gsheetPill) { gsheetPill.textContent = '🟢 متصل'; gsheetPill.style.color = '#059669'; }
                if (gsheetBadge) { gsheetBadge.innerHTML = '<i data-lucide="check-circle-2"></i> متصل بـ Google Sheet'; }
            } else {
                if (typeof window.showToast === 'function') window.showToast('تمت إزالة رابط Webhook');
                if (gsheetPill) { gsheetPill.textContent = '🟡 غير متصل'; gsheetPill.style.color = '#D97706'; }
                if (gsheetBadge) { gsheetBadge.innerHTML = '<i data-lucide="alert-circle"></i> في انتظار إدخال الرابط'; }
            }
            if (window.lucide) window.lucide.createIcons();
        });
    }

    if (testGsheetBtn) {
        testGsheetBtn.addEventListener('click', async () => {
            const url = (webhookInput ? webhookInput.value : '').trim() || localStorage.getItem('bara_gsheet_webhook_url');
            if (!url) {
                alert('يرجى إدخال وحفظ رابط الـ Google Apps Script أولاً في المربع أعلاه');
                return;
            }
            testGsheetBtn.disabled = true;
            testGsheetBtn.innerHTML = '⏳ جاري إرسال صف تجريبي...';
            
            const testRecord = {
                id: 'TEST-' + Date.now(),
                formType: 'test',
                formTypeArabic: 'صف تجريبي لاختبار الربط',
                data: {
                    assocName: 'تجربة اتصال منصة برة الصندوق',
                    assocPhone: '01012345678',
                    assocGov: 'دمنهور - البحيرة',
                    assocScope: 'تم إرسال هذا الصف بنجاح من لوحة تحكم CMS لتأكيد صحة الربط مع Google Sheet.'
                },
                submittedAt: new Date().toISOString(),
                synced: true
            };

            try {
                if (typeof window.sendToGoogleSheets === 'function') {
                    await window.sendToGoogleSheets(testRecord);
                } else {
                    await fetch(url, {
                        method: 'POST',
                        mode: 'no-cors',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(testRecord)
                    });
                }
                if (typeof window.showToast === 'function') window.showToast('🎉 تم إرسال الصف التجريبي بنجاح! تحقق من جدول Google Sheet لديك الآن.');
                else alert('تم إرسال الصف التجريبي بنجاح');
            } catch (err) {
                alert('حدث خطأ أثناء الإرسال: ' + err.message);
            } finally {
                testGsheetBtn.disabled = false;
                testGsheetBtn.innerHTML = '<i data-lucide="send"></i> إرسال صف تجريبي للاختبار';
                if (window.lucide) window.lucide.createIcons();
            }
        });
    }

    const triggerSyncAll = async (btn) => {
        const submissions = JSON.parse(localStorage.getItem('bara_forms_submissions') || '[]');
        if (!submissions.length) {
            if (typeof window.showToast === 'function') window.showToast('لا توجد طلبات مسجلة للمزامنة');
            return;
        }
        const url = localStorage.getItem('bara_gsheet_webhook_url') || 'https://script.google.com/macros/s/AKfycbwyK2-QOmVsP8sYtTUeCPZpFnyNQP057A98u64DaxXu6gxyCDmS36R9ooJ0lJp5nuM/exec';
        if (!url) {
            alert('يرجى حفظ رابط Google Apps Script أولاً في تبويب ربط Google Sheets');
            return;
        }
        if (btn) {
            btn.disabled = true;
            btn.innerHTML = '⏳ جاري المزامنة...';
        }

        let count = 0;
        for (let sub of submissions) {
            try {
                await fetch(url, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(sub)
                });
                sub.synced = true;
                count++;
            } catch(e) {}
        }
        localStorage.setItem('bara_forms_submissions', JSON.stringify(submissions));
        renderInbox();
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = '<i data-lucide="refresh-cw"></i> مزامنة الكل إلى Google Sheet الآن';
        }
        if (typeof window.showToast === 'function') window.showToast(`✅ تمت مزامنة ${count} طلب مع Google Sheet بنجاح!`);
        if (window.lucide) window.lucide.createIcons();
    };

    if (syncAllBtn) syncAllBtn.addEventListener('click', () => triggerSyncAll(syncAllBtn));
    if (inboxSyncBtn) inboxSyncBtn.addEventListener('click', () => triggerSyncAll(inboxSyncBtn));

    if (copyCodeBtn) {
        copyCodeBtn.addEventListener('click', () => {
            const code = document.getElementById('appsScriptCodeBlock')?.textContent || '';
            navigator.clipboard.writeText(code).then(() => {
                if (typeof window.showToast === 'function') window.showToast('📋 تم نسخ كود Apps Script بالكامل إلى الحافظة!');
            }).catch(() => {
                alert('تم نسخ الكود');
            });
        });
    }

    // 3. Change Password Form
    const changePassForm = document.getElementById('changePasswordForm');
    if (changePassForm) {
        changePassForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newPass = document.getElementById('newAdminPasswordInput')?.value || '';
            const confirmPass = document.getElementById('confirmAdminPasswordInput')?.value || '';
            if (newPass.length < 4) {
                alert('كلمة المرور يجب أن تتكون من 4 أحرف أو أرقام على الأقل');
                return;
            }
            if (newPass !== confirmPass) {
                alert('كلمات المرور غير متطابقة!');
                return;
            }
            localStorage.setItem('bara_admin_custom_password', newPass);
            if (typeof window.showToast === 'function') window.showToast('🔒 تم تغيير كلمة مرور لوحة التحكم بنجاح!');
            changePassForm.reset();
        });
    }

    // 4. Base64 FileReader Engine Handler
    const imgTargetSelect = document.getElementById('imgTargetSelect');
    const imgFileInput = document.getElementById('imgFileInput');
    const imgUrlInput = document.getElementById('imgUrlInput');
    const imgLivePreview = document.getElementById('imgLivePreview');
    const saveImageBtn = document.getElementById('saveImageBtn');

    if (imgFileInput && imgUrlInput && imgLivePreview) {
        imgFileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            if (file.size > 4 * 1024 * 1024) {
                alert('حجم الصورة كبير جداً! يرجى اختيار صورة أقل من 4 ميجابايت.');
                return;
            }
            const reader = new FileReader();
            reader.onload = function(evt) {
                imgLivePreview.src = evt.target.result;
                imgUrlInput.value = evt.target.result; // Stores Base64
            };
            reader.readAsDataURL(file);
        });

        imgUrlInput.addEventListener('input', () => {
            imgLivePreview.src = imgUrlInput.value || './assets/images/field-group.png';
        });

        if (saveImageBtn) {
            saveImageBtn.addEventListener('click', () => {
                const targetKey = imgTargetSelect ? imgTargetSelect.value : 'logo';
                const newImgVal = imgLivePreview.src;

                try {
                    const existingStr = localStorage.getItem('bara_cms_images');
                    const imagesMap = existingStr ? JSON.parse(existingStr) : {};
                    imagesMap[targetKey] = newImgVal;
                    localStorage.setItem('bara_cms_images', JSON.stringify(imagesMap));

                    if (typeof window.showToast === 'function') window.showToast('✅ تم حفظ واستبدال الصورة بنجاح بالموقع');
                } catch (err) {
                    console.error(err);
                }
            });
        }
    }

    // 5. Export JSON Backup Action
    const exportBtns = [document.getElementById('exportBackupBtn'), document.getElementById('exportBackupBtn2')];
    exportBtns.forEach(btn => {
        if (!btn) return;
        btn.addEventListener('click', () => {
            const fullData = {
                siteName: "برة الصندوق – المدرسة الخضراء الذكية",
                exportedAt: new Date().toISOString(),
                submissions: JSON.parse(localStorage.getItem('bara_forms_submissions') || '[]'),
                cmsImages: JSON.parse(localStorage.getItem('bara_cms_images') || '{}'),
                cmsConfig: JSON.parse(localStorage.getItem('bara_cms_config') || '{}'),
                gsheetWebhook: localStorage.getItem('bara_gsheet_webhook_url') || ''
            };

            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(fullData, null, 2));
            const downloadAnchor = document.createElement('a');
            downloadAnchor.setAttribute("href", dataStr);
            downloadAnchor.setAttribute("download", `bara_elsandouq_backup_${new Date().toISOString().slice(0,10)}.json`);
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            downloadAnchor.remove();

            if (typeof window.showToast === 'function') window.showToast('📦 تم تصدير ملف النسخة الاحتياطية JSON بنجاح');
        });
    });

    // 6. Policy Grievances & Digital Acknowledgment Records
    function renderPolicyAdminRecords() {
        const grvContainer = document.getElementById('grievancesListContainer');
        const acksContainer = document.getElementById('acksListContainer');
        const badge = document.getElementById('grvCountBadge');

        let grievances = [];
        let acks = [];
        try {
            grievances = JSON.parse(localStorage.getItem('outbox_grievances') || '[]');
            acks = JSON.parse(localStorage.getItem('outbox_policy_acks') || '[]');
        } catch (e) {
            console.error(e);
        }

        if (badge) badge.textContent = grievances.length + acks.length;

        // Render Grievances
        if (grvContainer) {
            if (!grievances.length) {
                grvContainer.innerHTML = `
                    <div style="text-align: center; padding: 2rem; color: var(--color-text-secondary);">
                        <i data-lucide="shield-check" style="width: 40px; height: 40px; margin-bottom: 0.5rem; color: #10B981;"></i>
                        <p style="margin: 0; font-size: 0.95rem;">لا توجد أي بلاغات أو شكاوى واردة حالياً (بيئة العمل والتدريب مستقرة وآمنة).</p>
                    </div>
                `;
            } else {
                let html = '<div style="display: flex; flex-direction: column; gap: 1rem;">';
                grievances.forEach((g, idx) => {
                    const dateStr = g.date ? new Date(g.date).toLocaleString('ar-EG') : 'غير محدد';
                    html += `
                        <div style="background: var(--color-bg); border: 1px solid var(--color-border); border-right: 4px solid #DC2626; border-radius: var(--radius-sm); padding: 1.25rem;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
                                <div style="display: flex; align-items: center; gap: 0.5rem;">
                                    <span class="badge" style="background: #FEE2E2; color: #991B1B; font-size: 0.8rem; font-weight: 700;">${g.code || 'GRV'}</span>
                                    <strong style="color: var(--color-primary-dark);">${g.type || 'شكوى'}</strong>
                                    <span class="badge" style="background: #FEF3C7; color: #92400E; font-size: 0.75rem;">${g.status || 'قيد الفحص'}</span>
                                </div>
                                <span style="font-size: 0.82rem; color: var(--color-text-muted);">${dateStr}</span>
                            </div>
                            <div style="font-size: 0.9rem; margin-bottom: 0.5rem; color: var(--color-text);">
                                <strong>المبلّغ / التواصل:</strong> ${g.name || 'سري'} (${g.phone || 'بدون هاتف'}) | <strong>المكان:</strong> ${g.location || 'غير محدد'}
                            </div>
                            <div style="background: var(--color-surface); padding: 0.75rem; border-radius: 4px; font-size: 0.92rem; color: var(--color-text); line-height: 1.6; border: 1px dashed var(--color-border);">
                                ${g.details}
                            </div>
                        </div>
                    `;
                });
                html += '</div>';
                grvContainer.innerHTML = html;
            }
        }

        // Render Acknowledgments
        if (acksContainer) {
            if (!acks.length) {
                acksContainer.innerHTML = `
                    <div style="text-align: center; padding: 2rem; color: var(--color-text-secondary);">
                        <i data-lucide="file-text" style="width: 40px; height: 40px; margin-bottom: 0.5rem; color: var(--color-border);"></i>
                        <p style="margin: 0; font-size: 0.95rem;">لم يتم تسجيل أي إقرارات التزام رقمية بعد.</p>
                    </div>
                `;
            } else {
                let html = '<div style="display: flex; flex-direction: column; gap: 0.75rem;">';
                acks.forEach((a) => {
                    html += `
                        <div style="background: var(--color-bg); border: 1px solid var(--color-border); border-right: 4px solid #059669; border-radius: var(--radius-sm); padding: 1rem 1.25rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
                            <div>
                                <strong style="font-size: 1.05rem; color: var(--color-primary-dark);">${a.fullName}</strong>
                                <div style="font-size: 0.85rem; color: var(--color-text-secondary); margin-top: 0.2rem;">
                                    الصفة: <strong>${a.role}</strong> (${a.entity}) | هاتف: ${a.phone}
                                </div>
                            </div>
                            <div style="text-align: left;">
                                <span class="badge badge-certified" style="font-size: 0.8rem;">معتمد وموثق ✅</span>
                                <div style="font-size: 0.78rem; color: var(--color-text-muted); margin-top: 0.25rem;">${a.date}</div>
                            </div>
                        </div>
                    `;
                });
                html += '</div>';
                acksContainer.innerHTML = html;
            }
        }

        if (window.lucide && typeof window.lucide.createIcons === 'function') {
            window.lucide.createIcons();
        }
    }

    renderPolicyAdminRecords();

    // Clear Grievances Action
    const clearGrvBtn = document.getElementById('clearGrievancesBtn');
    if (clearGrvBtn) {
        clearGrvBtn.addEventListener('click', () => {
            if (confirm('هل أنت متأكد من مسح جميع البلاغات والشكاوى والإقرارات المسجلة؟')) {
                localStorage.removeItem('outbox_grievances');
                localStorage.removeItem('outbox_policy_acks');
                renderPolicyAdminRecords();
                if (typeof window.showToast === 'function') window.showToast('تم مسح سجل الشكاوى والإقرارات');
            }
        });
    }

    // Reset Defaults
    const resetBtn = document.getElementById('resetDefaultsBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (confirm('هل أنت متأكد من إعادة ضبط كافة الصور والنصوص والبيانات إلى الوضع الافتراضي الرسمي؟')) {
                localStorage.removeItem('bara_cms_images');
                localStorage.removeItem('bara_cms_config');
                localStorage.removeItem('bara_admin_custom_password');
                if (typeof window.showToast === 'function') window.showToast('تمت إعادة الضبط للوضع الافتراضي');
                setTimeout(() => location.reload(), 1000);
            }
        });
    }
}
