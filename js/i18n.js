// Internationalization (i18n) for English and Korean
const translations = {
    en: {
        // Navigation
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.portfolio': 'Portfolio',
        'nav.stack': 'Tech Stack',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.title': 'Indie Mobile App Studio from Korea',
        'hero.description': 'CrazyCat Lab designs and ships practical mobile apps with a clean UX and solid engineering. We focus on Flutter for cross‑platform speed, and Kotlin/Swift when native experiences are required.',
        'hero.cta.primary': 'Start a conversation',
        'hero.cta.secondary': 'See what we build',
        'hero.meta.location': '📍 Based in Korea',
        'hero.meta.platforms': '📱 iOS & Android',
        'hero.meta.quality': '🧪 CI-ready, testable code',
        'hero.highlights.title': 'Highlights',
        'hero.highlights.item1': 'Product-minded development: quick experiments → reliable releases',
        'hero.highlights.item2': 'Monetization: AdMob / AppLovin MAX mediation, IAP subscriptions',
        'hero.highlights.item3': 'Privacy-first analytics and crash reporting',
        'hero.welcome': 'Welcome to CrazyCat Lab',
        'hero.subtitle': 'Where Quality Meets Creativity',
        'hero.features': '• Flutter Expert • Native Performance • Indie Spirit',
        'hero.status.badge': '🟢 Available for Projects',
        'hero.status.description': 'Currently accepting new mobile app development projects',
        
        // About Section
        'about.title': 'About CrazyCat Lab',
        'about.description': 'CrazyCat Lab is an indie developer building helpful everyday apps. The goal is simple: deliver fast, stable, and delightful experiences that people keep on their home screen.',
        'about.lean.title': 'Lean & Transparent',
        'about.lean.description': 'We share timelines early, cut scope when needed, and ship value in small increments.',
        'about.design.title': 'Design × Engineering',
        'about.design.description': 'From wireframes to pixel‑polish: UX flows, UI systems, and implementation under one roof.',
        'about.quality.title': 'Quality by Default',
        'about.quality.description': 'Type‑safe code, lint rules, automated builds, and meaningful monitoring to keep apps healthy.',
        
        // Services Section
        'services.title': 'What We Build',
        'services.description': 'Production mobile apps for everyday needs — utilities, lifestyle, education, and simple games.',
        'services.flutter.title': 'Cross‑platform Apps (Flutter)',
        'services.flutter.description': 'Single codebase targeting iOS and Android with native‑level performance and smooth animations.',
        'services.native.title': 'Native Android / iOS',
        'services.native.description': 'Kotlin + Jetpack on Android, Swift + SwiftUI/UIKit on iOS when platform‑specific features matter.',
        'services.monetization.title': 'Monetization & Growth',
        'services.monetization.description': 'AdMob & AppLovin MAX mediation, in‑app purchases, A/B testing, privacy‑friendly analytics.',
        
        // Portfolio Section
        'portfolio.title': 'Portfolio',
        'portfolio.description': 'Mobile applications we\'ve developed and launched for various companies and clients.',
        
        // Our Mobile Apps Section
        'ourapps.title': 'Our Mobile Apps',
        'ourapps.description': 'Innovative mobile applications we\'re developing and launching under our own brand.',
        'portfolio.calc.title': 'Every Calc',
        'portfolio.calc.description': 'Comprehensive calculator app with multiple calculation modes and beautiful design.',
        'portfolio.calc.progress': 'Released - Available on Google Play Store',
        'portfolio.calc.android': 'Android',
        'portfolio.weather.title': 'Weather Companion',
        'portfolio.weather.description': 'Smart weather forecasting with personalized insights and beautiful animations.',
        'portfolio.weather.progress': '90% Complete - In Development',
        'portfolio.health.title': 'Health Tracker',
        'portfolio.health.description': 'Comprehensive health monitoring with AI-powered insights and goal tracking.',
        'portfolio.health.progress': '70% Complete - In Development',
        'portfolio.daily.title': 'Daily Life Assistant',
        'portfolio.daily.description': 'Smart daily planner with habit tracking and productivity insights.',
        'portfolio.daily.progress': '70% Complete - In Development',
        
        // Tech Stack Section
        'stack.title': 'Tech Stack',
        'stack.description': 'Modern tools and technologies we use to build exceptional mobile experiences.',
        'stack.mobile.title': 'Mobile Development (Main)',
        'stack.backend.title': 'Server Development (Sub)',
        'stack.web.title': 'Web Development',
        'stack.cloud.title': 'Cloud & Deployment',
        'stack.tools.title': 'Development Tools',
        
        // Contact Section
        'contact.title': 'Contact',
        'contact.form.name': 'Your Name',
        'contact.form.email': 'Your Email',
        'contact.form.message': 'Tell me about your app idea...',
        'contact.form.submit': 'Send Message',
        'contact.info.title': 'Business Info',
        'contact.info.company': 'Company:',
        'contact.info.location': 'Location:',
        'contact.info.location.value': 'Korea (Republic of Korea)',
        'contact.info.focus': 'Focus:',
        'contact.info.focus.value': 'Mobile app development (iOS & Android)',
        'contact.info.email': 'Email:',
        'contact.info.note': 'References and additional materials available upon request.',
        
        // Footer
        'footer.rights': 'All rights reserved.',
        'footer.contact': 'Contact:',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service',
        
        // Form Messages
        'form.success': 'Message sent successfully! We\'ll get back to you soon.',
        'form.error': 'Failed to send message. Please try again or email us directly.',
        'form.sending': 'Sending message...'
    },
    ko: {
        // Navigation
        'nav.about': '소개',
        'nav.services': '서비스',
        'nav.portfolio': '포트폴리오',
        'nav.stack': '기술 스택',
        'nav.contact': '연락처',
        
        // Hero Section
        'hero.title': '한국의 인디 모바일 앱 스튜디오',
        'hero.description': '크레이지캣 랩(CrazyCat Lab)은 깔끔한 UX와 견고한 엔지니어링으로 실용적인 모바일 앱을 설계하고 출시합니다. 크로스 플랫폼 속도를 위해 Flutter에 중점을 두고, 네이티브 경험이 필요할 때는 Kotlin/Swift를 사용합니다.',
        'hero.cta.primary': '대화 시작하기',
        'hero.cta.secondary': '포트폴리오 보기',
        'hero.meta.location': '📍 한국 기반',
        'hero.meta.platforms': '📱 iOS & Android',
        'hero.meta.quality': '🧪 CI 준비된 테스트 가능한 코드',
        'hero.highlights.title': '주요 특징',
        'hero.highlights.item1': '제품 중심 개발: 빠른 실험 → 안정적인 릴리스',
        'hero.highlights.item2': '수익화: AdMob / AppLovin MAX 중재, IAP 구독',
        'hero.highlights.item3': '프라이버시 우선 분석 및 크래시 리포팅',
        'hero.welcome': '크레이지캣 랩에 오신 것을 환영합니다',
        'hero.subtitle': '품질과 창의성이 만나는 곳',
        'hero.features': '• Flutter 전문가 • 네이티브 성능 • 인디 정신',
        'hero.status.badge': '🟢 프로젝트 수주 가능',
        'hero.status.description': '현재 새로운 모바일 앱 개발 프로젝트를 받고 있습니다',
        
        // About Section
        'about.title': '크레이지캣 랩(CrazyCat Lab) 소개',
        'about.description': '크레이지캣 랩(CrazyCat Lab)은 유용한 일상 앱을 만드는 인디 개발 스튜디오입니다. 목표는 간단합니다: 사람들이 홈 화면에 계속 두고 싶어하는 빠르고 안정적이며 즐거운 경험을 제공하는 것입니다.',
        'about.lean.title': '린 & 투명성',
        'about.lean.description': '일정을 일찍 공유하고, 필요시 범위를 줄이며, 작은 단위로 가치를 제공합니다.',
        'about.design.title': '디자인 × 엔지니어링',
        'about.design.description': '와이어프레임부터 픽셀 완성까지: UX 플로우, UI 시스템, 구현을 한 곳에서.',
        'about.quality.title': '기본적인 품질',
        'about.quality.description': '타입 안전 코드, 린트 규칙, 자동화된 빌드, 앱을 건강하게 유지하는 의미있는 모니터링.',
        
        // Services Section
        'services.title': '우리가 만드는 것',
        'services.description': '일상적인 필요를 위한 프로덕션 모바일 앱 — 유틸리티, 라이프스타일, 교육, 간단한 게임.',
        'services.flutter.title': '크로스 플랫폼 앱 (Flutter)',
        'services.flutter.description': '네이티브 수준의 성능과 부드러운 애니메이션으로 iOS와 Android를 대상으로 하는 단일 코드베이스.',
        'services.native.title': '네이티브 Android / iOS',
        'services.native.description': '플랫폼별 기능이 중요할 때 Android의 Kotlin + Jetpack, iOS의 Swift + SwiftUI/UIKit.',
        'services.monetization.title': '수익화 & 성장',
        'services.monetization.description': 'AdMob & AppLovin MAX 중재, 인앱 구매, A/B 테스팅, 프라이버시 친화적 분석.',
        
        // Portfolio Section
        'portfolio.title': '모바일 앱 포트폴리오',
        'portfolio.description': '저희가 개발하고 출시한 혁신적인 모바일 애플리케이션들. 출시된 앱과 개발 중인 앱들을 확인해보세요.',
        'portfolio.calc.title': 'Every Calc',
        'portfolio.calc.description': '다양한 계산 모드와 아름다운 디자인을 갖춘 종합 계산기 앱.',
        'portfolio.calc.progress': '출시됨 - 구글 플레이 스토어에서 이용 가능',
        'portfolio.calc.android': 'Android',
        'portfolio.weather.title': '날씨 동반자',
        'portfolio.weather.description': '개인화된 인사이트와 아름다운 애니메이션이 있는 스마트 날씨 예보.',
        'portfolio.weather.progress': '90% 완료 - 개발 중',
        'portfolio.health.title': '건강 트래커',
        'portfolio.health.description': 'AI 기반 인사이트와 목표 추적이 있는 종합적인 건강 모니터링.',
        'portfolio.health.progress': '70% 완료 - 개발 중',
        'portfolio.daily.title': '일상 생활 도우미',
        'portfolio.daily.description': '습관 추적과 생산성 인사이트가 있는 스마트 일일 플래너.',
        'portfolio.daily.progress': '70% 완료 - 개발 중',
        
        // Tech Stack Section
        'stack.title': '기술 스택',
        'stack.description': '뛰어난 모바일 경험을 구축하기 위해 사용하는 현대적인 도구와 기술들.',
        'stack.mobile.title': '모바일 개발 (주력)',
        'stack.backend.title': '서버 개발 (보조)',
        'stack.web.title': '웹 개발',
        'stack.cloud.title': '클라우드 & 배포',
        'stack.tools.title': '개발 도구',
        
        // Contact Section
        'contact.title': '연락처',
        'contact.form.name': '이름',
        'contact.form.email': '이메일',
        'contact.form.message': '앱 아이디어에 대해 알려주세요...',
        'contact.form.submit': '메시지 보내기',
        'contact.info.title': '비즈니스 정보',
        'contact.info.company': '회사:',
        'contact.info.location': '위치:',
        'contact.info.location.value': '대한민국',
        'contact.info.focus': '전문 분야:',
        'contact.info.focus.value': '모바일 앱 개발 (iOS & Android)',
        'contact.info.email': '이메일:',
        'contact.info.note': '요청 시 참고 자료 및 추가 자료를 제공할 수 있습니다.',
        
        // Footer
        'footer.rights': '모든 권리 보유.',
        'footer.contact': '연락처:',
        'footer.privacy': '개인정보 처리방침',
        'footer.terms': '이용약관',
        
        // Form Messages
        'form.success': '메시지가 성공적으로 전송되었습니다! 곧 연락드리겠습니다.',
        'form.error': '메시지 전송에 실패했습니다. 다시 시도하거나 직접 이메일을 보내주세요.',
        'form.sending': '메시지 전송 중...'
    }
};

// Current language state
let currentLanguage = localStorage.getItem('language') || 'en';
console.log('Initial language from localStorage:', localStorage.getItem('language'));
console.log('Current language set to:', currentLanguage);
console.log('Available translations:', Object.keys(translations));
console.log('Korean translations sample:', translations.ko ? Object.keys(translations.ko).slice(0, 5) : 'NOT FOUND');

// Initialize i18n
function initI18n() {
    // Set initial language button state
    updateLanguageButtons();
    
    // Apply translations
    applyTranslations();
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
}

// Switch language
function switchLanguage(lang) {
    console.log('switchLanguage called with:', lang);
    console.log('Current language before switch:', currentLanguage);
    
    // Always update language and apply translations
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateLanguageButtons();
    applyTranslations();
    document.documentElement.lang = lang;
    
    console.log('Language switched to:', currentLanguage);
    console.log('Elements updated:', document.querySelectorAll('[data-i18n]').length);
}

// Update language button states
function updateLanguageButtons() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if ((btn.textContent === 'EN' && currentLanguage === 'en') ||
            (btn.textContent === '한국어' && currentLanguage === 'ko')) {
            btn.classList.add('active');
        }
    });
}

// Apply translations to all elements with data-i18n attribute
function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    console.log('Applying translations to', elements.length, 'elements');
    console.log('Current language:', currentLanguage);
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key);
        
        console.log('Translating key:', key, 'to:', translation);
        
        if (translation && translation !== key) {
            // Handle different element types
            if (element.tagName === 'INPUT' && element.type !== 'submit') {
                element.placeholder = translation;
            } else if (element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
}

// Get translation for a key
function getTranslation(key) {
    console.log('Getting translation for key:', key, 'in language:', currentLanguage);
    
    // Check if translations object exists
    if (!translations || !translations[currentLanguage]) {
        console.error('Translations not found for language:', currentLanguage);
        return key;
    }
    
    // Navigate through nested object using dot notation
    const keys = key.split('.');
    let translation = translations[currentLanguage];
    
    for (const k of keys) {
        if (translation && typeof translation === 'object' && translation[k] !== undefined) {
            translation = translation[k];
        } else {
            console.log('Translation not found for key:', key, 'trying English fallback');
            // Fallback to English
            translation = translations.en;
            for (const fallbackKey of keys) {
                if (translation && typeof translation === 'object' && translation[fallbackKey] !== undefined) {
                    translation = translation[fallbackKey];
                } else {
                    console.log('English fallback also failed for key:', key);
                    return key; // Return original key if no translation found
                }
            }
            break;
        }
    }
    
    console.log('Translation result:', translation);
    return translation;
}

// Make functions globally available
window.switchLanguage = switchLanguage;
window.getTranslation = getTranslation;
window.initI18n = initI18n;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initI18n);