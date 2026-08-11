/* ==========================================================================
   Main Application Router & Controller (app.js)
   Bara El-Sandouq – Smart Green School Project
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Page View Registry
    const routes = {
        'home': renderHomePage,
        'about': renderAboutPage,
        'how-it-works': renderHowItWorksPage,
        'impact': renderImpactPage,
        'smart-platform': renderSmartPlatformPage,
        'calculators': renderCalculatorsPage,
        'forms': renderFormsPage,
        'knowledge': renderKnowledgePage,
        'admin': renderAdminPage
    };

    const appContent = document.getElementById('main-content') || document.getElementById('app-content');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileToggle = document.getElementById('mobileToggle') || document.getElementById('menu-toggle');
    const navMenu = document.getElementById('navMenu') || document.getElementById('nav-menu') || document.querySelector('.mobile-drawer');
    const menuOpenIcon = document.getElementById('menuOpenIcon');
    const menuCloseIcon = document.getElementById('menuCloseIcon');

    // 2. Client-side Router Logic with Page Transition
    window.navigateToPage = function navigateToPage(pageKey) {
        if (!routes[pageKey]) pageKey = 'home';

        if (!appContent) return;

        // Apply visual fade transition
        appContent.style.opacity = '0';
        appContent.style.transform = 'translateY(8px)';
        appContent.style.transition = 'opacity 150ms ease, transform 150ms ease';

        setTimeout(() => {
            // Render target page view into main app container
            if (typeof routes[pageKey] === 'function') {
                appContent.innerHTML = routes[pageKey]();
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Update Nav Link Active States
            navLinks.forEach(link => {
                const targetPage = link.getAttribute('data-page') || link.getAttribute('href')?.replace(/^#\/?/, '');
                if (targetPage === pageKey) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });

            // Initialize Lucide icons for dynamically injected DOM
            if (window.lucide && typeof window.lucide.createIcons === 'function') {
                window.lucide.createIcons();
            }

            // Close mobile menu if open
            if (navMenu && (navMenu.classList.contains('active') || navMenu.classList.contains('is-open'))) {
                toggleMobileMenu(false);
            }

            // Page-specific initialization hooks upon hash change
            if (pageKey === 'home') {
                if (typeof initHomeCounters === 'function') initHomeCounters();
                if (typeof initCalculatorsLogic === 'function') initCalculatorsLogic();
            }
            if (pageKey === 'calculators' && typeof initCalculatorsLogic === 'function') {
                initCalculatorsLogic();
            }
            if (pageKey === 'forms' && typeof initFormsLogic === 'function') {
                initFormsLogic();
            }
            if (pageKey === 'smart-platform' && typeof initSmartPlatformLogic === 'function') {
                initSmartPlatformLogic();
            }
            if (pageKey === 'impact') {
                initImpactFilters();
            }
            if (pageKey === 'knowledge' && typeof initKnowledgeFilters === 'function') {
                initKnowledgeFilters();
            }
            if (pageKey === 'admin' && typeof initAdminLogic === 'function') {
                initAdminLogic();
            }

            // Fade back in
            appContent.style.opacity = '1';
            appContent.style.transform = 'translateY(0)';
        }, 150);
    }

    // 3. Hash Change Listener & Initial Route Load
    function handleHashChange() {
        const hash = window.location.hash.replace(/^#\/?/, '') || 'home';
        navigateToPage(hash);
    }

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run once on startup

    // 4. Mobile Menu Toggle Logic (Spatial Consistency)
    function toggleMobileMenu(forceState) {
        if (!navMenu) return;
        const isOpen = forceState !== undefined ? forceState : (!navMenu.classList.contains('active') && !navMenu.classList.contains('is-open'));
        if (isOpen) {
            navMenu.classList.add('active', 'is-open');
            if (menuOpenIcon) menuOpenIcon.style.display = 'none';
            if (menuCloseIcon) menuCloseIcon.style.display = 'block';
            if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
        } else {
            navMenu.classList.remove('active', 'is-open');
            if (menuOpenIcon) menuOpenIcon.style.display = 'block';
            if (menuCloseIcon) menuCloseIcon.style.display = 'none';
            if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
        }
    }

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => toggleMobileMenu());
    }

    // 5. Impact Filters Event Delegation Helper
    function initImpactFilters() {
        const filterBtns = document.querySelectorAll('#impactFilters button');
        const metricCards = document.querySelectorAll('#impactMetricsGrid .metric-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                filterBtns.forEach(b => b.classList.remove('active-filter', 'btn-primary'));
                btn.classList.add('active-filter', 'btn-primary');

                metricCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-type') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // 6. Global Modal Helper
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const modalBody = document.getElementById('modalBody');

    window.showModal = function(contentHtml) {
        if (modalBody && modalOverlay) {
            modalBody.innerHTML = contentHtml;
            modalOverlay.style.display = 'flex';
        }
    };

    if (modalClose && modalOverlay) {
        modalClose.addEventListener('click', () => {
            modalOverlay.style.display = 'none';
        });
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) modalOverlay.style.display = 'none';
        });
    }
});

// 7. Global Toast Notification Function (Apple-style Toast)
window.showToast = function(message) {
    const container = document.getElementById('toast-container') || document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast glass-card';
    toast.style.cssText = `
        background: rgba(11, 79, 63, 0.95);
        color: #FFFFFF;
        padding: 0.85rem 1.25rem;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.25);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: 0.95rem;
        margin-top: 0.5rem;
        border: 1px solid rgba(255,255,255,0.2);
        backdrop-filter: blur(12px);
        transition: opacity 300ms ease, transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
    `;
    toast.innerHTML = `<i data-lucide="check-circle-2" style="color: #A7F3D0; width: 20px; height: 20px;"></i> <span>${message}</span>`;
    container.appendChild(toast);

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-100%)';
        setTimeout(() => toast.remove(), 300);
    }, 4500);
};
