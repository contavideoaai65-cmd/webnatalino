/* SiteOps / NBWEBX Service Worker
   - NÃO cacheia status.json
   - NÃO trava modo manutenção
   - Atualiza imediatamente
*/

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

// Regra de ouro: nunca interferir no status.json
self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);

  if (url.pathname.endsWith("/status.json")) {
    return;
  }

  if (url.pathname.endsWith("/maintenance.html")) {
    return;
  }
});