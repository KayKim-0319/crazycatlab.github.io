// Service Worker for offline support and caching
const CACHE_NAME = 'ddsoft-v1.2.0';
const OFFLINE_URL = '/index.html';

// Precached so the site still opens with no network
const urlsToCache = [
    '/',
    '/index.html',
    '/privacy.html',
    '/terms.html',
    '/css/style.css',
    '/js/main.js',
    '/js/i18n-simple.js',
    '/js/i18n-privacy.js',
    '/js/i18n-terms.js'
];

// Install event - cache resources
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
            .then(() => self.skipWaiting())
    );
});

// Documents, styles and scripts are unversioned here (no content hash in the
// filename), so cache-first would pin visitors to an old build until the cache
// name changes by hand. Network-first keeps them current and still works offline.
function isNetworkFirst(request) {
    return request.mode === 'navigate' ||
        request.destination === 'document' ||
        request.destination === 'style' ||
        request.destination === 'script';
}

async function networkFirst(request) {
    try {
        const response = await fetch(request);
        if (response && response.ok) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(request, response.clone());
        }
        return response;
    } catch (err) {
        const cached = await caches.match(request);
        if (cached) return cached;
        if (request.mode === 'navigate' || request.destination === 'document') {
            const fallback = await caches.match(OFFLINE_URL);
            if (fallback) return fallback;
        }
        throw err;
    }
}

// Images keep their filenames when artwork is replaced, so serve the cached copy
// for speed but refresh it in the background for the next visit.
async function staleWhileRevalidate(request) {
    const cached = await caches.match(request);
    const network = fetch(request).then(response => {
        if (response && response.ok) {
            caches.open(CACHE_NAME).then(cache => cache.put(request, response.clone()));
        }
        return response;
    }).catch(() => cached);
    return cached || network;
}

self.addEventListener('fetch', event => {
    const { request } = event;

    // Never interfere with non-GET or cross-origin traffic
    if (request.method !== 'GET') return;
    if (new URL(request.url).origin !== self.location.origin) return;

    event.respondWith(
        isNetworkFirst(request) ? networkFirst(request) : staleWhileRevalidate(request)
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(cacheNames => Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            ))
            .then(() => self.clients.claim())
    );
});
