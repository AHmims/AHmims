importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js"
);
//
workbox.routing.registerRoute(function ({ request }) {
  request.destination == "image";
}, new workbox.strategies.CacheFirst());
