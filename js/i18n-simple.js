// Complete i18n implementation
const simpleTranslations = {
    en: {
        // Navigation
        'nav.about': 'About',
        'nav.portfolio': 'Portfolio',
        'nav.ourapps': 'My Apps',
        'nav.indev': 'In Dev',

        // Hero
        'hero.title': 'Indie Developer from Korea',
        'hero.description': 'Hi, I\'m Kay — a mobile developer who builds side projects with care. By day I work at a company, by night I craft apps that I actually need and use.',
        'hero.cta.primary': 'See My Apps',
        'hero.cta.secondary': 'View Portfolio',
        'hero.meta.location': '📍 Based in Korea',
        'hero.meta.platforms': '📱 iOS & Android',
        'hero.meta.quality': '🌙 Building apps after work',
        'hero.highlights.title': 'What I Do',
        'hero.highlights.item1': 'Day job: Mobile developer at a company',
        'hero.highlights.item2': 'Side projects: Apps I need, built with care',
        'hero.highlights.item3': 'Philosophy: Minimal ads, maximum quality',
        'hero.welcome': 'Welcome to CrazyCat Lab',
        'hero.subtitle': 'Indie Developer from Korea',
        'hero.features': '• Mobile Developer • Side Project Maker • Quality First',

        // About
        'about.title': 'About Me',
        'about.description': 'I\'m an indie developer who takes side projects seriously. I build apps that I personally need and want to use every day.',
        'about.indie.title': 'Indie & Independent',
        'about.indie.description': 'One-person studio running side projects with passion. I make what I need, not what\'s trendy.',
        'about.dayjob.title': 'Day Job + Side Projects',
        'about.dayjob.description': 'By day, I work as a mobile developer at a company. By night, I craft personal apps in my spare time.',
        'about.quality.title': 'Quality Over Ads',
        'about.quality.description': 'Minimal ads, maximum usability. I build apps that I want to use myself — clean, fast, and respectful.',

        // Portfolio
        'portfolio.title': 'Professional Work',
        'portfolio.description': 'Projects from my career — apps built while working at various companies as a mobile developer. I\'m still working in the industry.',

        // Our Mobile Apps Section
        'ourapps.title': 'My Personal Apps',
        'ourapps.description': 'Apps I build because I need them — minimal ads, high quality, crafted in my spare time after work.',

        // In Development Section
        'indev.title': 'Currently Building',
        'indev.description': 'What I\'m working on right now — progress updates on upcoming apps.',
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
        'portfolio.watercoach.title': 'Water Coach',
        'portfolio.watercoach.description': 'Smart Water Tracker. Personalized water goals, smart alerts, and analytics to build healthy hydration.',
        'portfolio.watercoach.progress': 'Released - Available on Google Play Store',
        'portfolio.watercoach.android': 'Android',
        'portfolio.windowclose.title': 'Window Close',
        'portfolio.windowclose.description': 'Fine dust/Ultra-fine dust alerts, Real-time air quality information and weather data.',
        'portfolio.windowclose.progress': 'Released - Available on Google Play Store',
        'portfolio.windowclose.android': 'Android',
        'portfolio.calc.title': 'Every Calc',
        'portfolio.calc.description': 'Comprehensive calculator app with multiple calculation modes and beautiful design.',
        'portfolio.calc.progress': 'Released - Available on Google Play Store',
        'portfolio.calc.android': 'Android',
        'portfolio.dodoeq.title': 'Dodo EQ',
        'portfolio.dodoeq.description': 'Elevate your music listening experience with professional audio equalizer. Intuitive controls and powerful sound engine.',
        'portfolio.dodoeq.progress': 'Released - Available on Google Play Store',
        'portfolio.dodoeq.android': 'Android',
        'portfolio.dodomusicplayer.title': 'Dodo Music Player',
        'portfolio.dodomusicplayer.description': 'Automatically adjusts equalizer settings based on genre tags for optimal sound quality.',
        'portfolio.dodomusicplayer.progress': 'Released - Available on Google Play Store',
        'portfolio.dodomusicplayer.android': 'Android',
        'portfolio.dodograin.title': 'Dodo Grain',
        'portfolio.dodograin.description': 'Film photo filter with vintage editing. Authentic film LUTs, grain, light leaks and polaroid frames in just three taps.',
        'portfolio.dodograin.progress': 'Released - Available on Google Play Store',
        'portfolio.dodograin.android': 'Android',
        'portfolio.dodofocus.title': 'Dodo Focus',
        'portfolio.dodofocus.description': 'Pomodoro timer for study and work. Customizable focus cycles, goal D-day countdowns, focus score and streaks.',
        'portfolio.dodofocus.progress': 'Released - Available on Google Play Store',
        'portfolio.dodofocus.android': 'Android',
        'portfolio.catwalk.title': 'CatWalk',
        'portfolio.catwalk.description': 'Simple and beautiful pedometer app that tracks your daily steps and walking distance.',
        'portfolio.catwalk.progress': '90% Complete - In Development',
        'portfolio.daily.title': 'Daily Life Assistant',
        'portfolio.daily.description': 'Smart daily planner with habit tracking and productivity insights.',
        'portfolio.daily.progress': '70% Complete - In Development',

        // Footer
        'footer.rights': 'All rights reserved.',
        'footer.contact': 'Contact:',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service'
    },
    ko: {
        // Navigation
        'nav.about': '소개',
        'nav.portfolio': '포트폴리오',
        'nav.ourapps': '자체 앱',
        'nav.indev': '개발 중',

        // Hero
        'hero.title': '한국의 인디 개발자',
        'hero.description': '안녕하세요, Kay입니다. 낮에는 회사에서 모바일 개발자로 일하고, 저녁에는 제가 실제로 필요한 앱들을 만들고 있습니다.',
        'hero.cta.primary': '자체 앱 보기',
        'hero.cta.secondary': '포트폴리오 보기',
        'hero.meta.location': '📍 한국 기반',
        'hero.meta.platforms': '📱 iOS & Android',
        'hero.meta.quality': '🌙 퇴근 후 앱 만들기',
        'hero.highlights.title': '저는 이런 사람입니다',
        'hero.highlights.item1': '본업: 회사에서 모바일 개발자로 근무',
        'hero.highlights.item2': '사이드 프로젝트: 제가 필요한 앱을 정성껏 제작',
        'hero.highlights.item3': '철학: 광고는 최소화, 품질은 최대화',
        'hero.welcome': '크레이지캣 랩에 오신 것을 환영합니다',
        'hero.subtitle': '한국의 인디 개발자',
        'hero.features': '• 모바일 개발자 • 사이드 프로젝트 메이커 • 품질 우선',

        // About
        'about.title': '소개',
        'about.description': '사이드 프로젝트를 진지하게 만드는 인디 개발자입니다. 제가 직접 매일 사용하고 싶은 앱들을 만들고 있습니다.',
        'about.indie.title': '인디 & 독립 개발',
        'about.indie.description': '열정으로 사이드 프로젝트를 운영하는 1인 스튜디오입니다. 트렌드가 아닌, 제가 필요한 것을 만듭니다.',
        'about.dayjob.title': '본업 + 사이드 프로젝트',
        'about.dayjob.description': '낮에는 회사에서 모바일 개발자로 일하고, 저녁 틈틈이 개인 앱을 만들고 있습니다.',
        'about.quality.title': '광고보다 품질',
        'about.quality.description': '광고는 최소화, 사용성은 최대화. 제가 직접 쓰고 싶은 앱 — 깔끔하고, 빠르고, 배려있는 앱을 만듭니다.',

        // Portfolio
        'portfolio.title': '직장 경력',
        'portfolio.description': '여러 회사에서 모바일 개발자로 일하며 만든 프로젝트들입니다. 현재도 회사에 소속되어 개발자로 일하고 있습니다.',

        // Our Mobile Apps Section
        'ourapps.title': '자체 앱',
        'ourapps.description': '내가 필요해서 만드는 앱들 — 광고는 최소화하고 품질은 높게, 저녁 틈틈이 만들고 있습니다.',

        // In Development Section
        'indev.title': '현재 개발 중',
        'indev.description': '지금 만들고 있는 것들 — 곧 출시될 앱들의 개발 현황입니다.',
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
        'portfolio.watercoach.title': 'Water Coach',
        'portfolio.watercoach.description': '스마트 물 섭취 트래커. 개인화된 물 목표, 스마트 알림, 건강한 수분 섭취 습관을 위한 분석 기능을 제공합니다.',
        'portfolio.watercoach.progress': '출시됨 - 구글 플레이 스토어에서 이용 가능',
        'portfolio.watercoach.android': 'Android',
        'portfolio.windowclose.title': 'Window Close',
        'portfolio.windowclose.description': '미세먼지/초미세먼지 알림, 실시간 대기질 정보와 날씨 정보를 제공합니다.',
        'portfolio.windowclose.progress': '출시됨 - 구글 플레이 스토어에서 이용 가능',
        'portfolio.windowclose.android': 'Android',
        'portfolio.calc.title': 'Every Calc',
        'portfolio.calc.description': '다양한 계산 모드와 아름다운 디자인을 갖춘 종합 계산기 앱.',
        'portfolio.calc.progress': '출시됨 - 구글 플레이 스토어에서 이용 가능',
        'portfolio.calc.android': 'Android',
        'portfolio.dodoeq.title': 'Dodo EQ',
        'portfolio.dodoeq.description': '프로페셔널 오디오 이퀄라이저로 음악 감상 경험을 향상시키세요. 직관적인 컨트롤과 강력한 사운드 엔진.',
        'portfolio.dodoeq.progress': '출시됨 - 구글 플레이 스토어에서 이용 가능',
        'portfolio.dodoeq.android': 'Android',
        'portfolio.dodomusicplayer.title': 'Dodo Music Player',
        'portfolio.dodomusicplayer.description': '장르 태그를 기반으로 이퀄라이저 설정을 자동으로 조절하여 최적의 음질을 제공합니다.',
        'portfolio.dodomusicplayer.progress': '출시됨 - 구글 플레이 스토어에서 이용 가능',
        'portfolio.dodomusicplayer.android': 'Android',
        'portfolio.dodograin.title': 'Dodo Grain',
        'portfolio.dodograin.description': '필름 사진 필터 · 빈티지 감성 보정. 진짜 같은 필름 LUT, 그레인, 라이트 릭, 폴라로이드 프레임을 단 3탭으로 적용합니다.',
        'portfolio.dodograin.progress': '출시됨 - 구글 플레이 스토어에서 이용 가능',
        'portfolio.dodograin.android': 'Android',
        'portfolio.dodofocus.title': 'Dodo Focus',
        'portfolio.dodofocus.description': '공부와 업무를 위한 포모도로 타이머. 집중 사이클 조절, 목표 디데이 관리, 집중 점수와 연속 기록을 제공합니다.',
        'portfolio.dodofocus.progress': '출시됨 - 구글 플레이 스토어에서 이용 가능',
        'portfolio.dodofocus.android': 'Android',
        'portfolio.catwalk.title': 'CatWalk',
        'portfolio.catwalk.description': '하루 걸음 수와 걸은 거리를 추적하는 심플하고 아름다운 만보기 앱.',
        'portfolio.catwalk.progress': '90% 완료 - 개발 중',
        'portfolio.daily.title': '일상 생활 도우미',
        'portfolio.daily.description': '습관 추적과 생산성 인사이트가 있는 스마트 일일 플래너.',
        'portfolio.daily.progress': '70% 완료 - 개발 중',

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
        const isActive = (btn.textContent === 'EN' && currentLang === 'en') ||
            (btn.textContent === '한국어' && currentLang === 'ko');
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
    });
    document.documentElement.lang = currentLang;
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
    applyTranslations();
    updateLanguageButtons();
    // 모달이 열려 있으면 본문도 새 언어로 다시 그린다 (data-i18n 대상이 아님)
    if (typeof window.refreshOpenModal === 'function') window.refreshOpenModal();
}

function switchToEnglish() {
    currentLang = 'en';
    localStorage.setItem('language', 'en');
    applyTranslations();
    updateLanguageButtons();
    // 모달이 열려 있으면 본문도 새 언어로 다시 그린다 (data-i18n 대상이 아님)
    if (typeof window.refreshOpenModal === 'function') window.refreshOpenModal();
}

// Initialize language buttons and translations on page load
document.addEventListener('DOMContentLoaded', function() {
    applyTranslations();
    updateLanguageButtons();
});

// Make functions globally available
window.switchToKorean = switchToKorean;
window.switchToEnglish = switchToEnglish;
window.updateLanguageButtons = updateLanguageButtons;
window.applyTranslations = applyTranslations;