const CACHE = 'ssb-pro-trainer-v9';
const ASSETS = [
  './','./index.html','./manifest.json','./sw.js',
  './assets/apoyo_lateral_raw.jpg','./assets/presion_pared_raw.jpg','./assets/estabilidad_balon_raw.jpg','./assets/apoyo_unilateral_raw.jpg',
  './assets/icon-192.png','./assets/icon-512.png'
];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; }).catch(() => caches.match(e.request)));
});
