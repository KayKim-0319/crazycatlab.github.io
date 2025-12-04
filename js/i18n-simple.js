// Complete i18n implementation
const simpleTranslations = {
    en: {
        // Navigation
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.portfolio': 'Portfolio',
        'nav.ourapps': 'Our Apps',
        'nav.stack': 'Tech Stack',
        
        // Hero
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
        
        // About
        'about.title': 'About CrazyCat Lab',
        'about.description': 'CrazyCat Lab is an indie developer building helpful everyday apps. The goal is simple: deliver fast, stable, and delightful experiences that people keep on their home screen.',
        'about.lean.title': 'Lean & Transparent',
        'about.lean.description': 'We share timelines early, cut scope when needed, and ship value in small increments.',
        'about.design.title': 'Design × Engineering',
        'about.design.description': 'From wireframes to pixel‑polish: UX flows, UI systems, and implementation under one roof.',
        'about.quality.title': 'Quality by Default',
        'about.quality.description': 'Type‑safe code, lint rules, automated builds, and meaningful monitoring to keep apps healthy.',
        
        // Services
        'services.title': 'What We Build',
        'services.description': 'Production mobile apps for everyday needs — utilities, lifestyle, education, and simple games.',
        'services.flutter.title': 'Cross‑platform Apps (Flutter)',
        'services.flutter.description': 'Single codebase targeting iOS and Android with native‑level performance and smooth animations.',
        'services.native.title': 'Native Android / iOS',
        'services.native.description': 'Kotlin + Jetpack on Android, Swift + SwiftUI/UIKit on iOS when platform‑specific features matter.',
        'services.monetization.title': 'Monetization & Growth',
        'services.monetization.description': 'AdMob & AppLovin MAX mediation, in‑app purchases, A/B testing, privacy‑friendly analytics.',
        
        // Portfolio
        'portfolio.title': 'Portfolio',
        'portfolio.description': 'Mobile applications we\'ve developed and launched for various companies and clients.',
        
        // Our Mobile Apps Section
        'ourapps.title': 'Our Mobile Apps',
        'ourapps.description': 'Innovative mobile applications we\'re developing and launching under our own brand.',
        'portfolio.wallypto.title': 'Wallypto Beta',
        'portfolio.wallypto.description': 'Blockchain wallet developed by LG Electronics, Inc. for secure digital asset management. Flutter app with Android and iOS development.',
        'portfolio.wallypto.android': 'Android',
        'portfolio.wallypto.ios': 'iOS',
        'portfolio.wallypto.progress': 'Released - Available on App Stores',
        
        'portfolio.kkl.title': 'MyData KKL',
        'portfolio.kkl.description': 'Personalized financial data integration and asset management service mobile app by Kyobo Securities. Flutter app with Android and iOS development and maintenance.',
        'portfolio.kkl.android': 'Android',
        'portfolio.kkl.ios': 'iOS',
        'portfolio.kkl.progress': 'Released - Available on App Stores',
        
        'portfolio.funnc.title': 'Cat & Dog President',
        'portfolio.funnc.description': 'Pet shopping mall apps featuring cat and dog characters, providing users with a friendly and fun shopping experience. Native app with Android renewal development.',
        'portfolio.funnc.android': 'Android',
        'portfolio.funnc.ios': 'iOS',
        'portfolio.funnc.progress': 'Released - Available on App Stores',
        
        'portfolio.favoriit.title': 'Favoriit',
        'portfolio.favoriit.description': 'Innovative secondhand trading platform with instant sales, real-time auctions, and story features for beloved items. Native app with Android and iOS development.',
        'portfolio.favoriit.android': 'Android',
        'portfolio.favoriit.ios': 'iOS',
        'portfolio.favoriit.progress': 'Released - Available on App Stores',
        
        'portfolio.style.title': 'StyleSeller',
        'portfolio.style.description': 'Easy and fast SNS product sales platform for side hustlers with free multi-links, recommended products, and data-driven group buying. Native Android development and maintenance.',
        'portfolio.style.android': 'Android',
        'portfolio.style.ios': 'iOS',
        'portfolio.style.progress': 'Released - Available on App Stores',
        'portfolio.smarthq.title': 'Smart HQ',
        'portfolio.smarthq.description': 'Smart home device management app provided by GE (General Electric). Developed Water Heater and Air Product (WAC, PAC, DFS, Dehum, Central Controller) Android functionality and Flutter migration.',
        'portfolio.smarthq.progress': 'Released - Available on US App Store (VPN required for access)',
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
        
        // Tech Stack
        'stack.title': 'Tech Stack',
        'stack.description': 'Modern tools and technologies we use to build exceptional mobile experiences.',
        'stack.mobile.title': 'Mobile Development (Main)',
        'stack.backend.title': 'Server Development (Sub)',
        'stack.web.title': 'Web Development',
        'stack.cloud.title': 'Cloud & Deployment',
        'stack.tools.title': 'Development Tools',
        
        // Footer
        'footer.rights': 'All rights reserved.',
        'footer.contact': 'Contact:',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service'
    },
    ko: {
        // Navigation
        'nav.about': '소개',
        'nav.services': '서비스',
        'nav.portfolio': '포트폴리오',
        'nav.ourapps': '자체 앱',
        'nav.stack': '기술 스택',
        
        // Hero
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
        
        // About
        'about.title': '크레이지캣 랩(CrazyCat Lab) 소개',
        'about.description': '크레이지캣 랩(CrazyCat Lab)은 유용한 일상 앱을 만드는 인디 개발 스튜디오입니다. 목표는 간단합니다: 사람들이 홈 화면에 계속 두고 싶어하는 빠르고 안정적이며 즐거운 경험을 제공하는 것입니다.',
        'about.lean.title': '린 & 투명성',
        'about.lean.description': '일정을 일찍 공유하고, 필요시 범위를 줄이며, 작은 단위로 가치를 제공합니다.',
        'about.design.title': '디자인 × 엔지니어링',
        'about.design.description': '와이어프레임부터 픽셀 완성까지: UX 플로우, UI 시스템, 구현을 한 곳에서.',
        'about.quality.title': '기본적인 품질',
        'about.quality.description': '타입 안전 코드, 린트 규칙, 자동화된 빌드, 앱을 건강하게 유지하는 의미있는 모니터링.',
        
        // Services
        'services.title': '우리가 만드는 것',
        'services.description': '일상적인 필요를 위한 프로덕션 모바일 앱 — 유틸리티, 라이프스타일, 교육, 간단한 게임.',
        'services.flutter.title': '크로스 플랫폼 앱 (Flutter)',
        'services.flutter.description': '네이티브 수준의 성능과 부드러운 애니메이션으로 iOS와 Android를 대상으로 하는 단일 코드베이스.',
        'services.native.title': '네이티브 Android / iOS',
        'services.native.description': '플랫폼별 기능이 중요할 때 Android의 Kotlin + Jetpack, iOS의 Swift + SwiftUI/UIKit.',
        'services.monetization.title': '수익화 & 성장',
        'services.monetization.description': 'AdMob & AppLovin MAX 중재, 인앱 구매, A/B 테스팅, 프라이버시 친화적 분석.',
        
        // Portfolio
        'portfolio.title': '포트폴리오',
        'portfolio.description': '다양한 회사와 클라이언트를 위해 개발하고 출시한 모바일 애플리케이션들입니다.',
        
        // Our Mobile Apps Section
        'ourapps.title': '자체 모바일 앱',
        'ourapps.description': '저희 브랜드로 개발하고 출시하는 혁신적인 모바일 애플리케이션들입니다.',
        'portfolio.wallypto.title': 'Wallypto Beta',
        'portfolio.wallypto.description': 'LG Electronics, Inc.에서 개발한 안전한 디지털 자산 관리를 위한 블록체인 지갑. Flutter 앱으로 Android와 iOS 담당 개발.',
        'portfolio.wallypto.android': 'Android',
        'portfolio.wallypto.ios': 'iOS',
        'portfolio.wallypto.progress': '출시됨 - 앱스토어에서 이용 가능',
        
        'portfolio.kkl.title': '마이데이터 끌',
        'portfolio.kkl.description': '교보증권에서 제공하는 사용자 맞춤형 금융 데이터 통합 및 자산 관리 서비스 모바일 앱. Flutter 앱으로 Android와 iOS 담당 개발 및 유지보수.',
        'portfolio.kkl.android': 'Android',
        'portfolio.kkl.ios': 'iOS',
        'portfolio.kkl.progress': '출시됨 - 앱스토어에서 이용 가능',
        
        'portfolio.funnc.title': '고양이 대통령, 강아지 대통령',
        'portfolio.funnc.description': '고양이와 강아지 캐릭터를 활용한 펫 쇼핑몰 앱으로, 사용자에게 친근하고 재미있는 쇼핑 경험을 제공합니다. Native앱으로 Android 리뉴얼 개발 담당.',
        'portfolio.funnc.android': 'Android',
        'portfolio.funnc.ios': 'iOS',
        'portfolio.funnc.progress': '출시됨 - 앱스토어에서 이용 가능',
        
        'portfolio.favoriit.title': '페이보릿',
        'portfolio.favoriit.description': '애장템 중고거래를 위한 즉시판매, 실시간 경매, 스토리 기능을 갖춘 혁신적인 중고거래 플랫폼입니다. Native앱으로 Android와 iOS 개발 담당.',
        'portfolio.favoriit.android': 'Android',
        'portfolio.favoriit.ios': 'iOS',
        'portfolio.favoriit.progress': '출시됨 - 앱스토어에서 이용 가능',
        
        'portfolio.style.title': '스타일셀러',
        'portfolio.style.description': 'N잡러를 위한 쉽고 빠른 SNS 상품 판매 플랫폼입니다. 무료 멀티링크, 추천상품, 매주 발행 셀러레터, 데이터 기반 공동구매 매칭 등 다양한 혜택을 제공합니다. Native앱으로 Android 개발 및 유지보수 담당.',
        'portfolio.style.android': 'Android',
        'portfolio.style.ios': 'iOS',
        'portfolio.style.progress': '출시됨 - 앱스토어에서 이용 가능',
        'portfolio.wallypto.store': 'Google Play에서 보기',
        'portfolio.smarthq.title': 'Smart HQ',
        'portfolio.smarthq.description': 'GE(General Electric)에서 제공하는 스마트 홈 기기 관리 앱입니다. Water Heater와 Air Product(WAC, PAC, DFS, Dehum, Central Controller) Android 담당 및 Flutter 리뉴얼(마이그레이션)을 진행했습니다.',
        'portfolio.smarthq.progress': '출시됨 - 미국 앱 스토어에서 이용 가능 (VPN 필요)',
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
        
        // Tech Stack
        'stack.title': '기술 스택',
        'stack.description': '뛰어난 모바일 경험을 구축하기 위해 사용하는 현대적인 도구와 기술들.',
        'stack.mobile.title': '모바일 개발 (주력)',
        'stack.backend.title': '서버 개발 (보조)',
        'stack.web.title': '웹 개발',
        'stack.cloud.title': '클라우드 & 배포',
        'stack.tools.title': '개발 도구',
        
        // Footer
        'footer.rights': '모든 권리 보유.',
        'footer.contact': '연락처:',
        'footer.privacy': '개인정보 처리방침',
        'footer.terms': '이용약관'
    }
};

let currentLang = localStorage.getItem('language') || 'en';

function simpleTranslate(key) {
    if (currentLang === 'ko' && simpleTranslations.ko[key]) {
        return simpleTranslations.ko[key];
    } else if (currentLang === 'en' && simpleTranslations.en[key]) {
        return simpleTranslations.en[key];
    }
    return key; // Return original if no translation
}

function updateLanguageButtons() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if ((btn.textContent === 'EN' && currentLang === 'en') ||
            (btn.textContent === '한국어' && currentLang === 'ko')) {
            btn.classList.add('active');
        }
    });
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = simpleTranslate(key);
        
        if (translation && translation !== key) {
            element.textContent = translation;
        }
    });
}

function switchToKorean() {
    currentLang = 'ko';
    localStorage.setItem('language', 'ko');
    console.log('Switching to Korean');
    
    applyTranslations();
    updateLanguageButtons();
}

function switchToEnglish() {
    currentLang = 'en';
    localStorage.setItem('language', 'en');
    console.log('Switching to English');
    
    applyTranslations();
    updateLanguageButtons();
}

// Initialize language buttons and translations on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, current language:', currentLang);
    applyTranslations();
    updateLanguageButtons();
});

// Make functions globally available
window.switchToKorean = switchToKorean;
window.switchToEnglish = switchToEnglish;
window.updateLanguageButtons = updateLanguageButtons;
window.applyTranslations = applyTranslations;