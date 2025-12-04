// Privacy Policy translations
const privacyTranslations = {
    en: {
        // Navigation (reuse from main)
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.portfolio': 'Portfolio',
        'nav.stack': 'Tech Stack',
        'nav.contact': 'Contact',
        
        // Privacy Policy
        'privacy.title': 'Privacy Policy',
        'privacy.updated': 'Last updated: ',
        
        'privacy.intro.title': 'Introduction',
        'privacy.intro.content': 'CrazyCat Lab ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our mobile applications.',
        
        'privacy.collection.title': 'Information We Collect',
        'privacy.collection.personal.title': 'Personal Information',
        'privacy.collection.personal.content': 'We may collect personal information that you voluntarily provide to us when you:',
        'privacy.collection.personal.item1': 'Contact us through our website contact form',
        'privacy.collection.personal.item2': 'Subscribe to our newsletter or updates',
        'privacy.collection.personal.item3': 'Use our mobile applications',
        'privacy.collection.personal.item4': 'Provide feedback or support requests',
        
        'privacy.collection.auto.title': 'Automatically Collected Information',
        'privacy.collection.auto.content': 'When you visit our website or use our apps, we may automatically collect certain information, including:',
        'privacy.collection.auto.item1': 'Device information (device type, operating system, browser type)',
        'privacy.collection.auto.item2': 'Usage data (pages visited, time spent, features used)',
        'privacy.collection.auto.item3': 'IP address and location data (with your consent)',
        'privacy.collection.auto.item4': 'Crash reports and performance data',
        
        'privacy.use.title': 'How We Use Your Information',
        'privacy.use.content': 'We use the collected information for the following purposes:',
        'privacy.use.item1': 'To provide and maintain our services',
        'privacy.use.item2': 'To improve our applications and user experience',
        'privacy.use.item3': 'To respond to your inquiries and provide customer support',
        'privacy.use.item4': 'To send you updates and marketing communications (with your consent)',
        'privacy.use.item5': 'To analyze usage patterns and optimize performance',
        'privacy.use.item6': 'To comply with legal obligations',
        
        'privacy.sharing.title': 'Information Sharing',
        'privacy.sharing.content': 'We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:',
        'privacy.sharing.item1': 'With your explicit consent',
        'privacy.sharing.item2': 'To comply with legal requirements or court orders',
        'privacy.sharing.item3': 'With third-party service providers as described in the "Third-Party Services" section below',
        'privacy.sharing.item4': 'In case of business transfer or merger',

        // Third-Party Services
        'privacy.thirdparty.title': 'Third-Party Services',
        'privacy.thirdparty.content': 'Our apps use the following third-party services that may collect information:',
        'privacy.thirdparty.analytics.title': 'Google Firebase Analytics',
        'privacy.thirdparty.analytics.content': 'We use Firebase Analytics to understand how users interact with our apps. This service may collect:',
        'privacy.thirdparty.analytics.item1': 'Device information (device model, operating system version)',
        'privacy.thirdparty.analytics.item2': 'App usage data (screens viewed, features used, session duration)',
        'privacy.thirdparty.analytics.item3': 'App events and interactions',
        'privacy.thirdparty.analytics.item4': 'Approximate location (country/region level)',
        'privacy.thirdparty.admob.title': 'Google AdMob',
        'privacy.thirdparty.admob.content': 'We use Google AdMob to display advertisements. This service may collect:',
        'privacy.thirdparty.admob.item1': 'Advertising ID',
        'privacy.thirdparty.admob.item2': 'Device information and identifiers',
        'privacy.thirdparty.admob.item3': 'IP address',
        'privacy.thirdparty.admob.item4': 'Ad interaction data',
        'privacy.thirdparty.billing.title': 'Google Play Billing',
        'privacy.thirdparty.billing.content': 'We use Google Play Billing for in-app purchases. This service may collect:',
        'privacy.thirdparty.billing.item1': 'Purchase and transaction history',
        'privacy.thirdparty.billing.item2': 'Google Account information',
        'privacy.thirdparty.billing.item3': 'Payment method information (processed by Google)',
        'privacy.thirdparty.billing.item4': 'Order ID and purchase tokens',
        'privacy.thirdparty.billing.note': 'Note: We do not have access to your payment details (such as credit card numbers). All payment processing is handled securely by Google.',
        'privacy.thirdparty.links': 'For more information about how Google handles your data, please visit:',
        'privacy.thirdparty.links.google': 'Google Privacy Policy',
        'privacy.thirdparty.links.firebase': 'Firebase Privacy and Security',

        // Data Retention
        'privacy.retention.title': 'Data Retention',
        'privacy.retention.local.title': 'Local Data',
        'privacy.retention.local.content': 'We do not store your personal information on our servers. All app-related data is stored locally on your device only. When you uninstall the app, all local data is automatically and permanently deleted from your device.',
        'privacy.retention.thirdparty.title': 'Third-Party Service Data',
        'privacy.retention.thirdparty.content': 'Data collected through Firebase Analytics and Google AdMob is processed and retained according to Google\'s data retention policies. Please refer to Google\'s privacy policy for more information about their data retention practices.',

        'privacy.security.title': 'Data Security',
        'privacy.security.content': 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.',
        
        'privacy.rights.title': 'Your Rights',
        'privacy.rights.content': 'Depending on your location, you may have the following rights regarding your personal information:',
        'privacy.rights.item1': 'Right to access your personal data',
        'privacy.rights.item2': 'Right to rectify inaccurate data',
        'privacy.rights.item3': 'Right to erase your data',
        'privacy.rights.item4': 'Right to restrict processing',
        'privacy.rights.item5': 'Right to data portability',
        'privacy.rights.item6': 'Right to object to processing',

        // Data Deletion
        'privacy.rights.deletion.title': 'How to Delete Your Data',
        'privacy.rights.deletion.local': 'Simply uninstall the app from your device. All locally stored data will be automatically and permanently deleted.',
        'privacy.rights.deletion.local.label': 'Local Data:',
        'privacy.rights.deletion.thirdparty': 'To manage or delete data collected by Google services (Firebase Analytics, AdMob), you can:',
        'privacy.rights.deletion.thirdparty.label': 'Third-Party Service Data:',
        'privacy.rights.deletion.thirdparty.item1': 'Reset your Advertising ID in your device settings',
        'privacy.rights.deletion.thirdparty.item2': 'Opt out of personalized ads in your Google Account settings',
        'privacy.rights.deletion.thirdparty.item3': 'Visit Google My Activity to view and delete your activity data',
        'privacy.rights.deletion.contact': 'For any additional requests regarding your data, please contact us at support@crazycatlab.com.',

        'privacy.cookies.title': 'Cookies and Tracking',
        'privacy.cookies.content': 'Our website uses cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.',
        
        'privacy.children.title': 'Children\'s Privacy',
        'privacy.children.content': 'Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.',
        
        'privacy.changes.title': 'Changes to This Policy',
        'privacy.changes.content': 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.',
        
        'privacy.contact.title': 'Contact Us',
        'privacy.contact.content': 'If you have any questions about this Privacy Policy, please contact us at:',
        'privacy.contact.company': 'Company:',
        'privacy.contact.location': 'Location:',
        'privacy.contact.location.value': 'Korea (Republic of Korea)',
        
        // Footer
        'footer.rights': 'All rights reserved.',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service'
    },
    ko: {
        // Navigation (reuse from main)
        'nav.about': '소개',
        'nav.services': '서비스',
        'nav.portfolio': '포트폴리오',
        'nav.stack': '기술 스택',
        'nav.contact': '연락처',
        
        // Privacy Policy
        'privacy.title': '개인정보 처리방침',
        'privacy.updated': '최종 업데이트: ',
        
        'privacy.intro.title': '소개',
        'privacy.intro.content': '크레이지캣 랩(CrazyCat Lab)("당사", "저희" 또는 "우리")는 귀하의 개인정보 보호에 최선을 다하고 있습니다. 본 개인정보 처리방침은 귀하가 당사 웹사이트를 방문하거나 모바일 애플리케이션을 사용할 때 당사가 정보를 수집, 사용, 공개 및 보호하는 방법을 설명합니다.',
        
        'privacy.collection.title': '수집하는 정보',
        'privacy.collection.personal.title': '개인정보',
        'privacy.collection.personal.content': '다음과 같은 경우 귀하가 자발적으로 제공하는 개인정보를 수집할 수 있습니다:',
        'privacy.collection.personal.item1': '웹사이트 연락처 양식을 통해 연락하는 경우',
        'privacy.collection.personal.item2': '뉴스레터나 업데이트를 구독하는 경우',
        'privacy.collection.personal.item3': '모바일 애플리케이션을 사용하는 경우',
        'privacy.collection.personal.item4': '피드백이나 지원 요청을 제공하는 경우',
        
        'privacy.collection.auto.title': '자동으로 수집되는 정보',
        'privacy.collection.auto.content': '웹사이트를 방문하거나 앱을 사용할 때 다음을 포함한 특정 정보를 자동으로 수집할 수 있습니다:',
        'privacy.collection.auto.item1': '기기 정보 (기기 유형, 운영 체제, 브라우저 유형)',
        'privacy.collection.auto.item2': '사용 데이터 (방문한 페이지, 소요 시간, 사용한 기능)',
        'privacy.collection.auto.item3': 'IP 주소 및 위치 데이터 (귀하의 동의 하에)',
        'privacy.collection.auto.item4': '충돌 보고서 및 성능 데이터',
        
        'privacy.use.title': '정보 사용 방법',
        'privacy.use.content': '수집된 정보를 다음 목적으로 사용합니다:',
        'privacy.use.item1': '서비스 제공 및 유지',
        'privacy.use.item2': '애플리케이션 및 사용자 경험 개선',
        'privacy.use.item3': '문의 응답 및 고객 지원 제공',
        'privacy.use.item4': '업데이트 및 마케팅 커뮤니케이션 발송 (귀하의 동의 하에)',
        'privacy.use.item5': '사용 패턴 분석 및 성능 최적화',
        'privacy.use.item6': '법적 의무 준수',
        
        'privacy.sharing.title': '정보 공유',
        'privacy.sharing.content': '당사는 귀하의 개인정보를 제3자에게 판매, 거래 또는 임대하지 않습니다. 다음 상황에서만 정보를 공유할 수 있습니다:',
        'privacy.sharing.item1': '귀하의 명시적 동의가 있는 경우',
        'privacy.sharing.item2': '법적 요구사항이나 법원 명령을 준수하기 위해',
        'privacy.sharing.item3': '아래 "제3자 서비스" 섹션에 설명된 제3자 서비스 제공업체와',
        'privacy.sharing.item4': '사업 양도나 합병의 경우',

        // 제3자 서비스
        'privacy.thirdparty.title': '제3자 서비스',
        'privacy.thirdparty.content': '당사 앱은 다음과 같은 제3자 서비스를 사용하며, 이러한 서비스는 정보를 수집할 수 있습니다:',
        'privacy.thirdparty.analytics.title': 'Google Firebase Analytics',
        'privacy.thirdparty.analytics.content': '당사는 사용자가 앱과 어떻게 상호작용하는지 이해하기 위해 Firebase Analytics를 사용합니다. 이 서비스는 다음을 수집할 수 있습니다:',
        'privacy.thirdparty.analytics.item1': '기기 정보 (기기 모델, 운영 체제 버전)',
        'privacy.thirdparty.analytics.item2': '앱 사용 데이터 (조회한 화면, 사용한 기능, 세션 시간)',
        'privacy.thirdparty.analytics.item3': '앱 이벤트 및 상호작용',
        'privacy.thirdparty.analytics.item4': '대략적인 위치 (국가/지역 수준)',
        'privacy.thirdparty.admob.title': 'Google AdMob',
        'privacy.thirdparty.admob.content': '당사는 광고를 표시하기 위해 Google AdMob을 사용합니다. 이 서비스는 다음을 수집할 수 있습니다:',
        'privacy.thirdparty.admob.item1': '광고 ID',
        'privacy.thirdparty.admob.item2': '기기 정보 및 식별자',
        'privacy.thirdparty.admob.item3': 'IP 주소',
        'privacy.thirdparty.admob.item4': '광고 상호작용 데이터',
        'privacy.thirdparty.billing.title': 'Google Play 결제',
        'privacy.thirdparty.billing.content': '당사는 인앱 구매를 위해 Google Play 결제를 사용합니다. 이 서비스는 다음을 수집할 수 있습니다:',
        'privacy.thirdparty.billing.item1': '구매 및 거래 내역',
        'privacy.thirdparty.billing.item2': 'Google 계정 정보',
        'privacy.thirdparty.billing.item3': '결제 수단 정보 (Google에서 처리)',
        'privacy.thirdparty.billing.item4': '주문 ID 및 구매 토큰',
        'privacy.thirdparty.billing.note': '참고: 당사는 귀하의 결제 세부 정보(예: 신용카드 번호)에 접근할 수 없습니다. 모든 결제 처리는 Google에서 안전하게 처리됩니다.',
        'privacy.thirdparty.links': 'Google이 귀하의 데이터를 어떻게 처리하는지에 대한 자세한 내용은 다음을 방문하세요:',
        'privacy.thirdparty.links.google': 'Google 개인정보처리방침',
        'privacy.thirdparty.links.firebase': 'Firebase 개인정보 및 보안',

        // 데이터 보관
        'privacy.retention.title': '데이터 보관',
        'privacy.retention.local.title': '로컬 데이터',
        'privacy.retention.local.content': '당사는 서버에 귀하의 개인정보를 저장하지 않습니다. 모든 앱 관련 데이터는 귀하의 기기에만 로컬로 저장됩니다. 앱을 삭제하면 모든 로컬 데이터가 자동으로 영구 삭제됩니다.',
        'privacy.retention.thirdparty.title': '제3자 서비스 데이터',
        'privacy.retention.thirdparty.content': 'Firebase Analytics 및 Google AdMob을 통해 수집된 데이터는 Google의 데이터 보관 정책에 따라 처리 및 보관됩니다. 데이터 보관 관행에 대한 자세한 내용은 Google 개인정보처리방침을 참조하세요.',

        'privacy.security.title': '데이터 보안',
        'privacy.security.content': '당사는 무단 액세스, 변경, 공개 또는 파괴로부터 귀하의 개인정보를 보호하기 위해 적절한 기술적, 조직적 보안 조치를 구현합니다. 그러나 인터넷을 통한 전송 방법은 100% 안전하지 않습니다.',
        
        'privacy.rights.title': '귀하의 권리',
        'privacy.rights.content': '거주 지역에 따라 개인정보와 관련하여 다음 권리를 가질 수 있습니다:',
        'privacy.rights.item1': '개인 데이터에 대한 액세스 권리',
        'privacy.rights.item2': '부정확한 데이터 수정 권리',
        'privacy.rights.item3': '데이터 삭제 권리',
        'privacy.rights.item4': '처리 제한 권리',
        'privacy.rights.item5': '데이터 이동성 권리',
        'privacy.rights.item6': '처리에 대한 이의 제기 권리',

        // 데이터 삭제
        'privacy.rights.deletion.title': '데이터 삭제 방법',
        'privacy.rights.deletion.local': '기기에서 앱을 삭제하기만 하면 됩니다. 로컬에 저장된 모든 데이터가 자동으로 영구 삭제됩니다.',
        'privacy.rights.deletion.local.label': '로컬 데이터:',
        'privacy.rights.deletion.thirdparty': 'Google 서비스(Firebase Analytics, AdMob)가 수집한 데이터를 관리하거나 삭제하려면 다음을 수행할 수 있습니다:',
        'privacy.rights.deletion.thirdparty.label': '제3자 서비스 데이터:',
        'privacy.rights.deletion.thirdparty.item1': '기기 설정에서 광고 ID 재설정',
        'privacy.rights.deletion.thirdparty.item2': 'Google 계정 설정에서 맞춤형 광고 사용 중지',
        'privacy.rights.deletion.thirdparty.item3': 'Google 내 활동에서 활동 데이터 조회 및 삭제',
        'privacy.rights.deletion.contact': '데이터에 관한 추가 요청은 support@crazycatlab.com으로 문의해 주세요.',

        'privacy.cookies.title': '쿠키 및 추적',
        'privacy.cookies.content': '당사 웹사이트는 브라우징 경험을 향상시키기 위해 쿠키 및 유사한 추적 기술을 사용합니다. 브라우저 설정을 통해 쿠키 설정을 제어할 수 있습니다.',
        
        'privacy.children.title': '아동의 개인정보 보호',
        'privacy.children.content': '당사 서비스는 13세 미만의 아동을 대상으로 하지 않습니다. 당사는 13세 미만 아동의 개인정보를 고의로 수집하지 않습니다.',
        
        'privacy.changes.title': '정책 변경',
        'privacy.changes.content': '당사는 수시로 본 개인정보 처리방침을 업데이트할 수 있습니다. 새로운 개인정보 처리방침을 이 페이지에 게시하고 "최종 업데이트" 날짜를 업데이트하여 변경 사항을 알려드립니다.',
        
        'privacy.contact.title': '연락처',
        'privacy.contact.content': '본 개인정보 처리방침에 대한 질문이 있으시면 다음으로 연락해 주세요:',
        'privacy.contact.company': '회사:',
        'privacy.contact.location': '위치:',
        'privacy.contact.location.value': '대한민국',
        
        // Footer
        'footer.rights': '모든 권리 보유.',
        'footer.privacy': '개인정보 처리방침',
        'footer.terms': '이용약관'
    }
};

// Use privacy translations directly
const translations = privacyTranslations;

// Current language state
let currentLanguage = localStorage.getItem('language') || 'en';

// Initialize i18n
function initI18n() {
    // 페이지 로드 시 localStorage에서 언어 다시 확인
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage && storedLanguage !== currentLanguage) {
        currentLanguage = storedLanguage;
    }
    
    updateLanguageButtons();
    applyTranslations();
    document.documentElement.lang = currentLanguage;
    
    // Set current year
    if (document.getElementById('currentYear')) {
        document.getElementById('currentYear').textContent = new Date().getFullYear();
    }
}

// Switch language functions
function switchToEnglish() {
    currentLanguage = 'en';
    localStorage.setItem('language', 'en');
    updateLanguageButtons();
    applyTranslations();
    document.documentElement.lang = 'en';
}

function switchToKorean() {
    currentLanguage = 'ko';
    localStorage.setItem('language', 'ko');
    updateLanguageButtons();
    applyTranslations();
    document.documentElement.lang = 'ko';
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
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key);
        
        if (translation && translation !== key) {
            // 특별한 경우 처리 (날짜가 포함된 텍스트)
            if (key === 'privacy.updated' && element.querySelector('#privacy-date')) {
                element.innerHTML = translation + '<span id="privacy-date">December 4, 2025</span>';
            } else if (key === 'terms.updated' && element.querySelector('#terms-date')) {
                element.innerHTML = translation + '<span id="terms-date">December 4, 2025</span>';
            } else {
                element.textContent = translation;
            }
        }
    });
}

// Get translation for a key
function getTranslation(key) {
    // Check if translations object exists
    if (!translations || !translations[currentLanguage]) {
        return key;
    }
    
    // Direct key lookup first (for simple keys like 'nav.about')
    if (translations[currentLanguage][key]) {
        return translations[currentLanguage][key];
    }
    
    // Navigate through nested object using dot notation
    const keys = key.split('.');
    let translation = translations[currentLanguage];
    
    for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        
        if (translation && typeof translation === 'object' && translation.hasOwnProperty(k)) {
            translation = translation[k];
        } else {
            // Fallback to English
            translation = translations.en;
            if (translation) {
                for (let j = 0; j < keys.length; j++) {
                    const fallbackKey = keys[j];
                    if (translation && typeof translation === 'object' && translation.hasOwnProperty(fallbackKey)) {
                        translation = translation[fallbackKey];
                    } else {
                        return key;
                    }
                }
            } else {
                return key;
            }
            break;
        }
    }
    
    return typeof translation === 'string' ? translation : key;
}

// Make functions globally available
window.switchToEnglish = switchToEnglish;
window.switchToKorean = switchToKorean;
window.updateLanguageButtons = updateLanguageButtons;
window.applyTranslations = applyTranslations;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initI18n);

// 추가 초기화 - 페이지가 완전히 로드된 후에도 실행
window.addEventListener('load', function() {
    // 함수가 덮어쓰여졌는지 다시 확인
    if (window.switchLanguage !== switchLanguage) {
        window.switchLanguage = switchLanguage;
        window.updateLanguageButtons = updateLanguageButtons;
        window.applyTranslations = applyTranslations;
    }
    
    // 약간의 지연 후 다시 번역 적용
    setTimeout(() => {
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
            currentLanguage = storedLanguage;
            updateLanguageButtons();
            applyTranslations();
        }
    }, 100);
});