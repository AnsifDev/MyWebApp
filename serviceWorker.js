self.addEventListener("install", function(event){
  event.waitUntil(caches.open("static").then(function(cache){
    return cache.addAll(["./", "https://ansifdev.github.io/MyWeb/img512.png"]);
  }));
});
self.addEventListener("fetch", function(event){
  event.respondWith(caches.match(event.request).then(function(response){
    return response || fetch(event.request);
  }));
});