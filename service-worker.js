"use strict";var precacheConfig=[["/index.html","d0ab9444b97659126304b14e9ee13133"],["/static/css/main.f854f3ee.css","f7e4f5f2bd35306b12c791842ff8d01b"],["/static/js/main.43d0c18b.js","38ce10118b9aa72a6a337b9361350f0b"],["/static/media/ChimeraLogo.135de76d.svg","135de76d30e296053285fc368e975ac5"],["/static/media/atom.fa1c3b01.svg","fa1c3b01af903c9cb48d1db839cc27f3"],["/static/media/bg-banner2.aad46efc.png","aad46efcc964aadfa0a266b9a917e8f0"],["/static/media/cabin.56ec4ee7.png","56ec4ee72a91e8f3d954db6cccbf8ab2"],["/static/media/github.555e5f18.svg","555e5f1867d4028f7a0564f4e31c6d30"],["/static/media/kickstarter.84b857ae.svg","84b857ae5ba586b6edb2a7acdcf8b013"],["/static/media/krishnaFoundersPhoto.850a7e89.png","850a7e8936747bfc0213dca8747f4f22"],["/static/media/linkedin.ca56e46d.svg","ca56e46d0b49a8866366874a7ffe7488"],["/static/media/map-image.f40ed5b1.png","f40ed5b1e791e9d2479ba8b5e67f2df8"],["/static/media/pen.b912c120.svg","b912c120a99a9ddee6da2d2ddee7c7aa"],["/static/media/rocket.0e760841.svg","0e760841950924d518cbada120d95e40"],["/static/media/services-icon.fc81310f.svg","fc81310f78356d95e8a104d7eaebf075"],["/static/media/softwareIcon.a1807f17.svg","a1807f17ac346a224724e97dda843805"],["/static/media/swimmer.613ed101.svg","613ed101e4fb5dca4414980f36320bc4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});