// Bump CACHE on every deploy so phones pick up the new files.
const CACHE = 'theo-langues-1';
const FILES = ['./', 'index.html', 'style.css', 'app.js', 'manifest.webmanifest', 'icon-180.png', 'icon-192.png', 'icon-512.png',
  ...[1, 2, 3, 4, 5, 6, 7, 8].map(n => `es/words${n}.js`), 'es/lessons.js', 'es/verbs.js', 'es/texts.js',
  ...[1, 2, 3, 4].map(n => `en/words${n}.js`), 'en/lessons.js', 'en/irregular.js', 'en/texts.js'];

self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request)));
});
