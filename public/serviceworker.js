var CACHE_NAME = 'sinxe-site-cache';

var urlsToCache = [
  '/',
  '/assets/*',
  '/img/*'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return fetch(event.request);
        // // Cache hit - return response
        // if (response) {
        //   return response;
        // }
        //
        // // IMPORTANT: Clone the request. A request is a stream and
        // // can only be consumed once. Since we are consuming this
        // // once by cache and once by the browser for fetch, we need
        // // to clone the request.
        // var fetchRequest = event.request.clone();
        //
        // return fetch(fetchRequest).then(
        //   function(response) {
        //     // Check if we received a valid response
        //     if(!response || response.status !== 200 || response.type !== 'basic') {
        //       return response;
        //     }
        //
        //     // IMPORTANT: Clone the response. A response is a stream
        //     // and because we want the browser to consume the response
        //     // as well as the cache consuming the response, we need
        //     // to clone it so we have 2 stream.
        //     var responseToCache = response.clone();
        //
        //     caches.open(CACHE_NAME)
        //       .then(function(cache) {
        //         cache.put(event.request, responseToCache);
        //       });
        //
        //     return response;
          }
        );
      })
    );
});

self.addEventListener('push', function(event) {
  console.log('Push message received');
  var notificationTitle = 'New Message';
  const notificationOptions = {
    body: 'You have a new message!',
    icon: 'icons/launcher-icon-3x.png',
    tag: 'simple-push-notification',
    data: {
      url: 'https://sinxe-d61e7.firebaseapp.com/'
    }
  };

  event.waitUntil(
    Promise.all([
      self.registration.showNotification(
        notificationTitle, notificationOptions)
    ])
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();

  var clickResponsePromise = Promise.resolve();
  if (event.notification.data && event.notification.data.url) {
    clickResponsePromise = clients.openWindow(event.notification.data.url);
  }

  event.waitUntil(
    Promise.all([
      clickResponsePromise
    ])
  );
});
