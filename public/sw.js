/* Wellspect companion shell cache. Keep CACHE_NAME in sync when assets change. */
const CACHE_NAME = "wellspect-shell-v4";

function withBase(path) {
  const scopePath = new URL(self.registration.scope).pathname.replace(/\/$/, "");
  return `${scopePath}${path}`;
}

const PRECACHE = [
  "/",
  "/info/",
  "/innehallskarta/",
  "/rik-man/",
  "/rik-man/origo/",
  "/rik-man/origo/snabbguide/",
  "/rik-kvinnor/",
  "/navina/",
  "/manifest.webmanifest",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/products/origo-pack.png",
  "/products/primo-pack.png",
  "/products/classic-cath.png",
  "/products/sense-pack.png",
  "/products/elle-pack.png",
  "/products/hydrokit-pack.png",
  "/products/navina-smart.png",
  "/products/navina-classic.png",
].map(withBase);

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(request).then((cached) => {
      const fetched = fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            void caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached || caches.match(withBase("/")));

      return cached || fetched;
    }),
  );
});
