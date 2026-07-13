const CACHE="preghiere-fsa-v2";
const FILES=["./","./index.html","./manifest.json",
 "./icons/icon-72.png","./icons/icon-96.png","./icons/icon-128.png","./icons/icon-144.png",
 "./icons/icon-152.png","./icons/icon-167.png","./icons/icon-180.png","./icons/icon-192.png",
 "./icons/icon-256.png","./icons/icon-384.png","./icons/icon-512.png","./icons/icon-maskable-512.png"];
self.addEventListener("install",e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate",e=>{
  e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET") return;
  e.respondWith(
    caches.match(e.request).then(r=> r || fetch(e.request).then(res=>{
      const copy=res.clone();
      caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{});
      return res;
    }).catch(()=> caches.match("./index.html")))
  );
});