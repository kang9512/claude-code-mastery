// 다크모드 토글 기능
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeToggleMobile = document.getElementById('darkModeToggleMobile');
    const html = document.documentElement;

    // 저장된 다크모드 설정 확인
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        html.classList.add('dark');
    }

    // 다크모드 토글 클릭 핸들러
    const toggleDarkMode = () => {
        html.classList.toggle('dark');
        const isDark = html.classList.contains('dark');
        localStorage.setItem('darkMode', isDark);
    };

    darkModeToggle?.addEventListener('click', toggleDarkMode);
    darkModeToggleMobile?.addEventListener('click', toggleDarkMode);
}

// 모바일 메뉴 토글
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    menuToggle?.addEventListener('click', () => {
        mobileMenu?.classList.toggle('hidden');
    });

    // 메뉴 항목 클릭 시 메뉴 닫기
    const navLinks = mobileMenu?.querySelectorAll('a');
    navLinks?.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// 활성 네비게이션 링크 업데이트
function updateActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        // 각 섹션 확인
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        // 활성 링크 업데이트
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Smooth Scroll 네비게이션
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // 유효한 섹션 ID 확인
            if (href === '#' || !document.querySelector(href)) return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Intersection Observer - 섹션 페이드인 애니메이션
function initScrollAnimation() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-animate', 'in-view');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// 스킬 배지 애니메이션
function initSkillBadgesAnimation() {
    const skillBadges = document.querySelectorAll('span[class*="bg-"][class*="px-4"]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('skill-badge');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    skillBadges.forEach(badge => {
        observer.observe(badge);
    });
}

// 스크롤 시 navbar 배경 투명도 변경
function initNavbarScroll() {
    const navbar = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar?.classList.add('shadow-lg');
        } else {
            navbar?.classList.remove('shadow-lg');
        }
    });
}

// 프로젝트 카드 호버 효과
function initProjectCards() {
    const projectCards = document.querySelectorAll('.bg-slate-50[class*="dark:bg-slate-800"]');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// 페이지 로드 완료
function initPageLoadAnimation() {
    // 페이지 로드 완료 시 애니메이션 시작
    window.addEventListener('load', () => {
        document.body.style.opacity = '1';
    });
}

// SNS 링크 외부 창 열기 확인 (선택사항)
function initSocialLinks() {
    const socialLinks = document.querySelectorAll('a[target="_blank"]');

    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // href가 실제 URL이 아닐 경우 기본 동작 방지
            if (link.getAttribute('href') === '#' ||
                link.getAttribute('href').startsWith('https://') === false) {
                e.preventDefault();
            }
        });
    });
}

// 모든 초기화 함수 실행
function initializeApp() {
    initDarkMode();
    initMobileMenu();
    updateActiveNavLink();
    initSmoothScroll();
    initScrollAnimation();
    initSkillBadgesAnimation();
    initNavbarScroll();
    initProjectCards();
    initPageLoadAnimation();
    initSocialLinks();
}

// DOM 로드 완료 후 초기화
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
