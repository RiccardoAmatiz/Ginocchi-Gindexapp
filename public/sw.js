// A minimal service worker to enable "Add to Home Screen" functionality.
// It doesn't implement caching, but its presence is required for PWA installation.

self.addEventListener('install', (event) => {
  // Perform install steps
  console.log('Service Worker installing.');
});

self.addEventListener('fetch', (event) => {
  // This is a pass-through fetch handler.
  // It doesn't cache anything, just fetches from the network.
  event.respondWith(fetch(event.request));
});
