const CACHE='golf-games-v1.9-gps';
const ASSETS=['./','./index.html','./manifest.webmanifest','./service-worker.js','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>event.respondWith(caches.match(event.request).then(r=>r||fetch(event.request).then(resp=>{
 const copy=resp.clone(); caches.open(CACHE).then(c=>c.put(event.request,copy)); return resp;
}).catch(()=>caches.match('./index.html')))));
