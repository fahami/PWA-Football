importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
const CACHE_NAME = "footmatch-v1";
if (workbox) {
    console.log(`Workbox berhasil dimuat`);
    workbox.precaching.precacheAndRoute([
        { url: "/", revision: '1' },
        { url: "index.html", revision: '1' },
        { url: "nav.html", revision: '1' },
        { url: "team.html", revision: '1' },
        { url: "css/materialize.min.css", revision: '1' },
        { url: "css/style.css", revision: '1' },
        { url: "js/materialize.min.js", revision: '1' },
        { url: "js/idb.js", revision: '1' },
        { url: "js/db.js", revision: '1' },
        { url: "js/nav.js", revision: '1' },
        { url: "js/api.js", revision: '1' },
        { url: "js/notify.js", revision: '1' },
        { url: "js/team.js", revision: '1' },
        { url: "js/validate.js", revision: '1' },
        { url: "manifest.json", revision: '1' },
        { url: "images/icons/icon-512x512.png", revision: '1' },
        { url: "images/icons/icon-384x384.png", revision: '1' },
        { url: "images/icons/icon-192x192.png", revision: '1' },
        { url: "images/icons/icon-152x152.png", revision: '1' },
        { url: "images/icons/icon-144x144.png", revision: '1' },
        { url: "images/icons/icon-128x128.png", revision: '1' },
        { url: "images/icons/icon-96x96.png", revision: '1' },
        { url: "images/icons/icon-72x72.png", revision: '1' },
        { url: "images/maskable_icon.png", revision: '1' },
        { url: "favicon.ico", revision: '1' },
        { url: "pages/home.html", revision: '1' },
        { url: "pages/teams.html", revision: '1' },
        { url: "pages/saved.html", revision: '1' },
        { url: "https://fonts.googleapis.com/icon?family=Material+Icons", revision: '1' },
        { url: "https://fonts.gstatic.com/s/materialicons/v55/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2", revision: '1' }
    ], {
        ignoreUrlParametersMatching: [/.*/]
    });
    workbox.routing.registerRoute(
        new RegExp('https://api.football-data.org/'),
        workbox.strategies.staleWhileRevalidate()
    )

    workbox.routing.registerRoute(
        /.*(?:png|gif|jpg|jpeg|svg|ico)$/,
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'images',
            plugins: [
                new workbox.cacheableResponse.Plugin({
                    statuses: [0, 200]
                }),
                new workbox.expiration.Plugin({
                    maxEntries: 60,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
                }),
            ],
        }),
    );
    workbox.routing.registerRoute(
        /.*(?:googleapis|gstatic)\.com/,
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'google-fonts-stylesheets',
            plugins: [
                new workbox.cacheableResponse.Plugin({
                    statuses: [0, 200],
                }),
                new workbox.expiration.Plugin({
                    maxAgeSeconds: 60 * 60 * 24 * 365,
                    maxEntries: 30,
                }),
            ],
        })
    );

    workbox.routing.registerRoute(
        new RegExp('/pages/'),
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'pages'
        })
    );

} else {
    console.log(`Workbox berhasil dimuat`);
}

self.addEventListener('push', e => {
    var body;
    if (e.data) {
        body = e.data.text();
    } else {
        body = 'Push message no payload';
    }
    const options = {
        body: body,
        icon: 'img/maskable_icon.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };
    e.waitUntil(
        self.registration.showNotification('FootMatch Notification', options)
    );
});