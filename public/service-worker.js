const CACHE_VERSION = 'v1.0.0';
const CACHE_NAME = `my-cache-name-${CACHE_VERSION}`;

const urlsToCache = [
  '/',
  '/index.html',
  '/logo-192x192.png',
  '/logo-512x512.png',
  '/manifest.json',
  '/img/6.svg',
  '/img/bergkross.jpg',
  '/img/bk-1.png',
  '/img/bs-1.png',
  '/img/c-1.png',
  '/img/gardsgrus.jpg',
  '/img/lastvaxlare_large.png',
  '/img/lastvaxlare_medium.png',
  '/img/lastvaxlare_small.png',
  '/img/lastvaxlare_xl.png',
  '/img/liftdumper_big.png',
  '/img/liftdumper_medium.png',
  '/img/liftdumper_small.png',
  '/img/logo.png',
  '/img/m-1.png',
  '/img/makadam-8-16-sackad-butik.jpg',
  '/img/Makadam-Flis-m-Bio-Lowres.jpg',
  '/img/rorgravsgrus.jpg',
  '/img/stenmjol.jpg',
  '/img/Tackbark-Lowres.jpg',
  '/img/Toppdress-Lowres.jpg',
  '/img/Vaxtjord_A.jpg',
];

self.addEventListener('install', (event) => {
    self.skipWaiting();
  
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
    );
});
  

self.addEventListener('fetch', (event) => {
    // Check if the request is for a JavaScript module
    if (event.request.destination === 'script' && event.request.mode === 'cors') {
      event.respondWith(fetch(event.request));
      return;
    }
  
    // Remove query parameters from the request URL
    const urlWithoutQueryParams = event.request.url.split('?')[0];
  
    // Create a new request without query parameters
    const requestWithoutQueryParams = new Request(urlWithoutQueryParams, event.request);
  
    event.respondWith(
      caches.match(requestWithoutQueryParams).then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
    );
  });
  

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
