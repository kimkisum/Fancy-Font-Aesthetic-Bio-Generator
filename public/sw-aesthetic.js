// Fancy Font Aesthetic Bio — Service Worker (offline support)
const CACHE_NAME = "aesthetic-bio-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll([
        "/aesthetic-bio-generator.html",
        "/aesthetic-bio-manifest.json",
      ]).catch(() => {})
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names
          .filter((n) => n.startsWith("aesthetic-bio") && n !== CACHE_NAME)
          .map((n) => caches.delete(n))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== "GET") return;
  if (url.origin !== self.location.origin && url.origin !== "https://cdn.tailwindcss.com" && url.origin !== "https://fonts.googleapis.com" && url.origin !== "https://fonts.gstatic.com") return;

  const path = url.pathname;

  // Same-origin: cache-first for app page and manifest
  if (url.origin === self.location.origin && (path === "/aesthetic-bio-generator.html" || path.endsWith("aesthetic-bio-manifest.json"))) {
    event.respondWith(
      caches.match(request).then((cached) =>
        cached || fetch(request).then((res) => {
          if (res.ok) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return res;
        })
      )
    );
    return;
  }

  // Tailwind CDN: network-first, cache for offline fallback
  if (url.origin === "https://cdn.tailwindcss.com") {
    event.respondWith(
      fetch(request)
        .then((res) => {
          if (res.ok && res.type === "basic") {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return res;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Google Fonts: optional cache (network-first)
  if (url.origin === "https://fonts.googleapis.com" || url.origin === "https://fonts.gstatic.com") {
    event.respondWith(
      fetch(request).catch(() => caches.match(request))
    );
    return;
  }
});
