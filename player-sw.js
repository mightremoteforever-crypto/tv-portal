var BLOCK=[
 /aliexpress\./i,
 /best\-deals/i,
 /doubleclick\.net/i,
 /googlesyndication\.com/i,
 /googleadservices\.com/i,
 /adservice\.google\.com/i,
 /2mdn\.net/i,
 /adnxs\.com/i,
 /pubmatic\.com/i,
 /rubiconproject\.com/i,
 /openx\.net/i,
 /criteo\.com/i,
 /scorecardresearch\.com/i,
 /outbrain\.com/i,
 /taboola\.com/i,
 /mgid\.com/i,
 /revcontent\.com/i,
 /popads\.net/i,
 /popcash\.net/i,
 /propellerads\.com/i,
 /amazon\-adsystem\.com/i,
 /adsystem\.com/i
];
self.addEventListener('install',function(e){self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim());});
self.addEventListener('fetch',function(e){
 if(e.request.method!=='GET')return;
 var u=e.request.url;
 for(var i=0;i<BLOCK.length;i++){if(BLOCK[i].test(u)){e.respondWith(new Response('',{status:403,statusText:'BlockedByPlayer'}));return;}}
});
