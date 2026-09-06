/* ==========================================================================
   Full Master Mobile Application Engine (تطبيق_الهاتف/www/js/app.js)
   Bara El-Sandouq – Smart Green School Field App
   All 10 Pages SPA Router, Global Search & Native Mobile UI Shell
   ========================================================================== */

(function () {
    'use strict';

    // 1. Master Route Map (All 10 Pages)
    const routes = {
        '#home': { render: () => window.renderHomePage ? window.renderHomePage() : '', init: () => window.initHomeLogic && window.initHomeLogic(), title: 'الرئيسية - برة الصندوق' },
        '#about': { render: () => window.renderAboutPage ? window.renderAboutPage() : '', init: () => window.initAboutLogic && window.initAboutLogic(), title: 'عن المشروع والملكية الفكرية' },
        '#how-it-works': { render: () => window.renderHowItWorksPage ? window.renderHowItWorksPage() : '', init: () => window.initHowItWorksLogic && window.initHowItWorksLogic(), title: 'كيف نعمل والمراحل الـ 8' },
        '#impact': { render: () => window.renderImpactPage ? window.renderImpactPage() : '', init: () => window.initImpactLogic && window.initImpactLogic(), title: 'لوحة الأثر والشفافية' },
        '#smart-platform': { render: () => window.renderSmartPlatformPage ? window.renderSmartPlatformPage() : '', init: () => window.initSmartPlatformLogic && window.initSmartPlatformLogic(), title: 'المنصة الذكية (NISGP 2026)' },
        '#calculators': { render: () => window.renderCalculatorsPage ? window.renderCalculatorsPage() : '', init: () => window.initCalculatorsLogic && window.initCalculatorsLogic(), title: 'حاسبة الكربون والمالية' },
        '#knowledge': { render: () => window.renderKnowledgePage ? window.renderKnowledgePage() : '', init: () => window.initKnowledgeLogic && window.initKnowledgeLogic(), title: 'مكتبة الوسائل التعليمية' },
        '#forms': { render: () => window.renderFormsPage ? window.renderFormsPage() : '', init: () => window.initFormsLogic && window.initFormsLogic(), title: 'نماذج التسجيل والانضمام' },
        '#policy': { render: () => window.renderPolicyPage ? window.renderPolicyPage() : '', init: () => window.initPolicyLogic && window.initPolicyLogic(), title: 'سياسة الحماية والأمان' },
        '#admin': { render: () => window.renderAdminPage ? window.renderAdminPage() : '', init: () => window.initAdminLogic && window.initAdminLogic(), title: 'لوحة تحكم المشرف' }
    };

    // 2. Global Search Database (Index across everything in the app)
    const searchIndex = [
        { title: 'الرئيسية - من مخلفات إلى فرص خضراء', category: 'صفحة', hash: '#home', keywords: 'الرئيسية الشركاء المعرض الصور فاطمة راضي جمعية الإسراء دمنهور' },
        { title: 'عن المشروع والملكية الفكرية', category: 'صفحة', hash: '#about', keywords: 'الملكية الفكرية فاطمة عبد المجيد راضي براءة اختراع إشهار 1124 الخط الزمني' },
        { title: 'كيف نعمل - المراحل التشغيلية الـ 8', category: 'صفحة', hash: '#how-it-works', keywords: 'مراحل العمل الفرز الحاويات الجمع النقل التدريب التحويل العوائد' },
        { title: 'لوحة الأثر ودليل المدارس الـ 26', category: 'صفحة', hash: '#impact', keywords: 'الأثر الشفافية المدارس دمنهور كفر الدوار 180 طن 217 سيدة العوائد 40% 25%' },
        { title: 'المنصة الذكية (NISGP 2026)', category: 'صفحة', hash: '#smart-platform', keywords: 'المنصة الذكية النضج الرقمي DML الذكاء الاصطناعي المشروعات الخضراء' },
        { title: 'حاسبة الكربون EPA WARM v16', category: 'حاسبة', hash: '#calculators', keywords: 'حاسبة كربون انبعاثات WARM v16 مكافئ CO2 أشجار سيارات طاقة' },
        { title: 'حاسبة توزيع العوائد المالية (40/25/10/25)', category: 'حاسبة', hash: '#calculators', keywords: 'حاسبة عوائد مالية 40% سيدات 25% مدرسة 10% جمعية 25% فائض' },
        { title: 'مكتبة الأنشطة والدليل البيئي التطبيقي', category: 'أنشطة', hash: '#knowledge', keywords: 'أنشطة وسائل تعليمية ورش إعادة تدوير مجسمات كرتون ورق' },
        { title: 'نماذج التسجيل والانضمام وواتساب', category: 'نماذج', hash: '#forms', keywords: 'تسجيل مدرسة جمعية متطوعين تمكين سيدات شركاء تدوير واتساب' },
        { title: 'سياسة الحماية وعدم التمييز (15 مادة)', category: 'سياسة', hash: '#policy', keywords: 'سياسة حماية كرامة عدم تمييز شكاوى سرية إقرار PDF أمان أطفال' },
        { title: 'مدرسة الشهيد أحمد عفت الإعدادية بنات', category: 'مدارس', hash: '#impact', keywords: 'مدرسة دمنهور الشهيد أحمد عفت بنات فرز كرتون' },
        { title: 'مدرسة معاذ بن جبل الثانوية بنات', category: 'مدارس', hash: '#impact', keywords: 'مدرسة دمنهور معاذ بن جبل بنات ثانوي فرز' },
        { title: 'مدرسة عمر مكرم الثانوية بنين', category: 'مدارس', hash: '#impact', keywords: 'مدرسة دمنهور عمر مكرم ثانوي بنين' },
        { title: 'مدرسة الأقباط الإعدادية بنين', category: 'مدارس', hash: '#impact', keywords: 'مدرسة دمنهور الأقباط إعدادي بنين' },
        { title: 'جمعية الإسراء الخيرية بدمنهور (إشهار 1124)', category: 'شركاء', hash: '#about', keywords: 'جمعية الإسراء دمنهور إشهار 1124 الشريك الميداني' },
        { title: 'وزارة التربية والتعليم - مديرية البحيرة', category: 'شركاء', hash: '#home', keywords: 'وزارة التربية والتعليم مديرية البحيرة موافقة رسمية' }
    ];

    // 3. Global DOM References
    let mainContent;
    let mobileDrawer;
    let drawerBackdrop;
    let offlinePill;
    let searchModal;
    let searchInput;
    let searchResults;
    let scrollTopBtn;

    function initApp() {
        mainContent = document.getElementById('main-content') || document.getElementById('appContent');
        mobileDrawer = document.getElementById('mobileDrawer');
        drawerBackdrop = document.getElementById('drawerBackdrop');
        offlinePill = document.getElementById('networkStatusPill');
        searchModal = document.getElementById('searchModal');
        searchInput = document.getElementById('searchInput');
        searchResults = document.getElementById('searchResults');
        scrollTopBtn = document.getElementById('scrollTopBtn');

        setupDrawerHandlers();
        setupNetworkListeners();
        setupBottomNavHandlers();
        setupSearchHandlers();
        setupScrollTopHandler();

        // Listen for Hash Changes
        window.addEventListener('hashchange', handleRouting);

        // Immediate Route Render (Synchronous execution)
        if (!window.location.hash || !routes[window.location.hash]) {
            window.location.hash = '#home';
        }
        handleRouting();

        // Register Service Worker for 100% Offline App Caching
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./sw.js')
                .then(() => console.log('🌿 Mobile Offline ServiceWorker Active'))
                .catch(err => console.log('SW registration note:', err));
        }
    }

    // 4. Routing Engine
    function handleRouting() {
        const hash = window.location.hash || '#home';
        const route = routes[hash] || routes['#home'];

        if (!mainContent) {
            mainContent = document.getElementById('main-content') || document.getElementById('appContent');
        }
        if (!mainContent) return;

        // Render Page Content
        mainContent.innerHTML = route.render();
        document.title = route.title + ' | برة الصندوق';

        // Initialize Page Interactivity
        if (typeof route.init === 'function') {
            try {
                route.init();
            } catch (e) {
                console.warn('Page init notice:', e);
            }
        }

        // Render Lucide Icons
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
            window.lucide.createIcons();
        }

        // Update Active Nav Tabs and Drawer Links
        updateActiveNavState(hash);

        // Scroll to Top Smoothly on route change
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Close Drawer if open
        window.closeMobileMenu();
    }

    // 5. Update Bottom Navigation & Drawer Active States
    function updateActiveNavState(hash) {
        document.querySelectorAll('.bottom-nav-bar .nav-tab-btn').forEach(btn => {
            const href = btn.getAttribute('href');
            if (href === hash) {
                btn.classList.add('active');
            } else if (href) {
                btn.classList.remove('active');
            }
        });

        document.querySelectorAll('.drawer-link').forEach(link => {
            const page = link.getAttribute('data-page');
            if ('#' + page === hash) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    
    // 6. Global Navigation Menu / Sheet Controller (100% Fail-Proof)
    window.openMobileMenu = function() {
        var sheet = document.getElementById('navSheetBackdrop');
        var drawer = document.getElementById('mobileDrawer');
        var backdrop = document.getElementById('drawerBackdrop');
        if (sheet) {
            sheet.classList.add('show');
            sheet.style.display = 'flex';
            sheet.style.opacity = '1';
        }
        if (drawer) {
            drawer.classList.add('open', 'is-open');
            drawer.style.setProperty('right', '0px', 'important');
        }
        if (backdrop) {
            backdrop.classList.add('open', 'is-open');
        }
        document.body.style.overflow = 'hidden';
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
            window.lucide.createIcons();
        }
    };

    window.closeMobileMenu = function() {
        var sheet = document.getElementById('navSheetBackdrop');
        var drawer = document.getElementById('mobileDrawer');
        var backdrop = document.getElementById('drawerBackdrop');
        if (sheet) {
            sheet.classList.remove('show');
            sheet.style.display = 'none';
            sheet.style.opacity = '0';
        }
        if (drawer) {
            drawer.classList.remove('open', 'is-open');
            drawer.style.setProperty('right', '-330px', 'important');
        }
        if (backdrop) {
            backdrop.classList.remove('open', 'is-open');
        }
        document.body.style.overflow = '';
    };

    window.toggleMobileDrawer = function() {
        var sheet = document.getElementById('navSheetBackdrop');
        var drawer = document.getElementById('mobileDrawer');
        if ((sheet && (sheet.classList.contains('show') || sheet.style.display === 'flex')) || 
            (drawer && (drawer.classList.contains('open') || drawer.classList.contains('is-open')))) {
            window.closeMobileMenu();
        } else {
            window.openMobileMenu();
        }
    };

    window.openNavSheet = window.openMobileMenu;
    window.closeNavSheet = window.closeMobileMenu;


    function setupDrawerHandlers() {
        const triggers = document.querySelectorAll('#drawerOpenBtn, #optionsMenuBtn, #tab-menu, .mobile-toggle');
        triggers.forEach(btn => {
            if (btn) {
                btn.onclick = function(e) {
                    if (e) e.preventDefault();
                    window.toggleMobileDrawer();
                };
            }
        });

        const closeBtn = document.getElementById('drawerCloseBtn');
        if (closeBtn) {
            closeBtn.onclick = function(e) {
                if (e) e.preventDefault();
                window.closeMobileMenu();
            };
        }

        const backdrop = document.getElementById('drawerBackdrop');
        if (backdrop) {
            backdrop.onclick = function(e) {
                if (e) e.preventDefault();
                window.closeMobileMenu();
            };
        }

        const drawerLinks = document.querySelectorAll('.drawer-link');
        drawerLinks.forEach(link => {
            link.addEventListener('click', () => {
                window.closeMobileMenu();
            });
        });
    }

    // 7. Network Status Listener (Online / Offline Mode)
    function setupNetworkListeners() {
        function updateStatus() {
            if (!offlinePill) return;
            if (navigator.onLine) {
                offlinePill.innerHTML = '<i data-lucide="check-circle-2" style="width:12px; height:12px;"></i> متصل';
                offlinePill.classList.remove('offline');
            } else {
                offlinePill.innerHTML = '<i data-lucide="wifi-off" style="width:12px; height:12px;"></i> وضع أوفلاين';
                offlinePill.classList.add('offline');
            }
            if (window.lucide) window.lucide.createIcons();
        }

        window.addEventListener('online', updateStatus);
        window.addEventListener('offline', updateStatus);
        updateStatus();
    }

    // 8. Bottom Navigation Handlers
    function setupBottomNavHandlers() {
        const tabMenu = document.getElementById('tab-menu');
        if (tabMenu) {
            tabMenu.onclick = function(e) {
                if (e) e.preventDefault();
                window.toggleMobileDrawer();
            };
        }
    }

    // 9. Global Search Handlers
    window.openGlobalSearch = function() {
        const modal = document.getElementById('searchModal');
        const input = document.getElementById('searchInput');
        if (modal) modal.classList.add('open');
        if (input) {
            input.value = '';
            input.focus();
            renderSearchResults('');
        }
    };

    window.closeGlobalSearch = function() {
        const modal = document.getElementById('searchModal');
        if (modal) modal.classList.remove('open');
    };

    function setupSearchHandlers() {
        const searchBtn = document.getElementById('globalSearchBtn');
        const closeBtn = document.getElementById('closeSearchBtn');
        const input = document.getElementById('searchInput');
        const modal = document.getElementById('searchModal');

        if (searchBtn) searchBtn.addEventListener('click', window.openGlobalSearch);
        if (closeBtn) closeBtn.addEventListener('click', window.closeGlobalSearch);

        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) window.closeGlobalSearch();
            });
        }

        if (input) {
            input.addEventListener('input', (e) => {
                renderSearchResults(e.target.value.trim());
            });
        }
    }

    function renderSearchResults(query) {
        const resultsBox = document.getElementById('searchResults');
        if (!resultsBox) return;

        if (!query) {
            resultsBox.innerHTML = `
                <div style="padding: 1.5rem; text-align: center; color: #64748B; font-size: 0.9rem;">
                    <i data-lucide="search" style="width: 32px; height: 32px; margin-bottom: 0.5rem; opacity: 0.4;"></i>
                    <p>اكتب اسم مدرسة، أو حاسبة، أو مادة في السياسة، أو شريك للبحث الفوري...</p>
                </div>
            `;
            if (window.lucide) window.lucide.createIcons();
            return;
        }

        const q = query.toLowerCase();
        const matches = searchIndex.filter(item => 
            item.title.toLowerCase().includes(q) || 
            item.category.toLowerCase().includes(q) || 
            item.keywords.toLowerCase().includes(q)
        );

        if (matches.length === 0) {
            resultsBox.innerHTML = `
                <div style="padding: 2rem; text-align: center; color: #94A3B8;">
                    <i data-lucide="alert-circle" style="width: 32px; height: 32px; margin-bottom: 0.5rem; opacity: 0.5;"></i>
                    <p>لم يتم العثور على نتائج تطابق "<strong>${query}</strong>"</p>
                </div>
            `;
            if (window.lucide) window.lucide.createIcons();
            return;
        }

        resultsBox.innerHTML = matches.map(item => `
            <a href="${item.hash}" class="search-result-item" onclick="window.closeGlobalSearch()" style="display: flex; align-items: center; justify-content: space-between; padding: 0.85rem 1.25rem; border-bottom: 1px solid #F1F5F9; text-decoration: none; color: inherit; transition: background 150ms;">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <span style="font-size: 0.75rem; background: rgba(31,122,90,0.1); color: #1F7A5A; padding: 2px 8px; border-radius: 6px; font-weight: 700;">${item.category}</span>
                    <span style="font-size: 0.95rem; font-weight: 600; color: #0F172A;">${item.title}</span>
                </div>
                <i data-lucide="chevron-left" style="width: 16px; height: 16px; color: #94A3B8;"></i>
            </a>
        `).join('');

        if (window.lucide) window.lucide.createIcons();
    }

    // 10. Scroll To Top Handler
    function setupScrollTopHandler() {
        const btn = document.getElementById('scrollTopBtn');
        if (!btn) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                btn.style.opacity = '1';
                btn.style.pointerEvents = 'auto';
                btn.style.transform = 'translateY(0)';
            } else {
                btn.style.opacity = '0';
                btn.style.pointerEvents = 'none';
                btn.style.transform = 'translateY(12px)';
            }
        });

        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 11. Global Toast Helper
    window.showToast = function(message, type = 'success') {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.style.cssText = `
            background: ${type === 'success' ? '#064E3B' : '#7F1D1D'};
            color: #FFFFFF;
            padding: 0.75rem 1.25rem;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.6rem;
            font-size: 0.9rem;
            font-weight: 600;
            animation: toastSlide 200ms ease;
            pointer-events: auto;
        `;
        toast.innerHTML = `
            <i data-lucide="${type === 'success' ? 'check-circle' : 'alert-circle'}" style="width: 18px; height: 18px; flex-shrink: 0;"></i>
            <span>${message}</span>
        `;
        container.appendChild(toast);
        if (window.lucide) window.lucide.createIcons();

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(-10px)';
            toast.style.transition = 'all 200ms ease';
            setTimeout(() => toast.remove(), 220);
        }, 3500);
    };

    // Initialize on DOM Ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initApp);
    } else {
        initApp();
    }

})();
