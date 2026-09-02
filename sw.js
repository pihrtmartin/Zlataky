self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request).catch(() => {
        // Pokud fetch selže (např. chybí připojení), vracíme prázdnou odpověď nebo fallback
        return new Response('Offline / Chyba sítě', {
          status: 503,
          statusText: 'Service Unavailable'
        });
      });
    })
  );
});
