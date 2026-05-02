document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Initialize Lenis Smooth Scrolling
    if (window.Lenis) {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ease out quart
            smoothWheel: true,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }

    // 3. Active Nav Link Logic
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('text-[#ff4fa3]');
            link.classList.remove('text-slate-600');
            if (link.classList.contains('mobile-nav-link')) {
                link.classList.add('bg-[#fff0f7]');
            }
        } else {
            link.classList.remove('text-[#ff4fa3]');
            link.classList.add('text-slate-600');
            if (link.classList.contains('mobile-nav-link')) {
                link.classList.remove('bg-[#fff0f7]');
            }
        }
    });
});

// 4. Mobile Menu Toggle Logic
window.toggleMobileMenu = function () {
    const menu = document.getElementById('mobile-menu');
    const iconMenu = document.getElementById('mobile-menu-icon-menu');
    const iconClose = document.getElementById('mobile-menu-icon-close');

    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        iconMenu.classList.add('hidden');
        iconClose.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
        iconMenu.classList.remove('hidden');
        iconClose.classList.add('hidden');
    }
};

// 5. Live Chat Toggle Logic
window.toggleChat = function () {
    const chatWin = document.getElementById('chat-window');
    const chatBtn = document.getElementById('chat-toggle-btn');

    if (chatWin.classList.contains('hidden')) {
        chatWin.classList.remove('hidden');
        chatBtn.classList.add('bg-slate-800', 'rotate-90', 'scale-0');
        chatBtn.classList.remove('bg-[#ff4fa3]', 'hover:scale-110');
    } else {
        chatWin.classList.add('hidden');
        chatBtn.classList.remove('bg-slate-800', 'rotate-90', 'scale-0');
        chatBtn.classList.add('bg-[#ff4fa3]', 'hover:scale-110');
    }
};