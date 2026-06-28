const CACHE='hombro-trainer-v1';
const ASSETS=['./','index.html','manifest.json','assets/poster_hombro.png','assets/apoyo_lateral.png','assets/presion_pared.png','assets/estabilidad_balon.png','assets/apoyo_unilateral.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
