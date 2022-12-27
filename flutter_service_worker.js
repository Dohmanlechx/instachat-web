'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "814a9f0892ce1e994c5a78e82337dfa7",
"index.html": "2ffc2b451fc102c8b3d98166659ae03c",
"/": "2ffc2b451fc102c8b3d98166659ae03c",
"main.dart.js": "bda1a24bfa72315da610b5587e2632e7",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6aafc102d67c0d12ecc64e3bfafe86ef",
".git/ORIG_HEAD": "7ce51c7123ff4096a7ecb953aa2019f0",
".git/config": "ef393840fb38c812b83a04184dddc607",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/69/4bb27c4f8fdc6b2a1b57463f9a98e5412b5654": "3bfb1bae33f26fabe0666d2cb37b0638",
".git/objects/51/ea7e727e03215ca75514bf4fb22cd2d76169bd": "3bce4ab5c583b879d9b1d4f199a988df",
".git/objects/0b/964775cea8759a609f0bca128afaca959acbbd": "d408e3a907c71308d5efd47f411b6913",
".git/objects/94/4332b9041061261e8cc066d4beef9b5b73fd00": "c3e77eaad59d652729b4b260080bc50a",
".git/objects/5a/389c578835e18d1edb311e4fafda8f6211d0ab": "c49cb092640f490b96ee6cf9b7c06bae",
".git/objects/5f/4a44b53bee61f6762638e550c2607cb8128dd8": "2667413a945f2dc761dd07188b3d6e8a",
".git/objects/9d/9478d3d65203459cf3b54bacb501fe03fcd63e": "f1f143db5407c223aa61c50ccbbd55c5",
".git/objects/a3/11074659f1877969f13cdace9034283e9753a3": "69248b71d105c46355dbd9206b5fc902",
".git/objects/b5/b64e768aa9c44deb84729d42832b26c2b92a09": "ae50e9e8a7ad998a78c6582e225ca21e",
".git/objects/b2/82557b7dcc47c6251b7807096ccea7ff1be383": "4c678d72713adf0294320bc4654c7dce",
".git/objects/bb/953da169388de0016a0d3f0b51d4d7a37f3aa8": "614e686fac5795248769f1c3714d8374",
".git/objects/da/d9fe33648971db9977af33b02ea907454c7963": "b4bfb5bb04599e5bb8392cfd6d08e166",
".git/objects/da/9ef4648478b8cdc92aebdfe42629e8e5f47c43": "c9eb819838d36271980c6543b60a2de8",
".git/objects/bd/3a9060652537185e2b297cd5e702380a881684": "559f88047c93f7661ca5aa172570e860",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/e3/537be0fdcb1e495fc69f12d33d2511c95debca": "9f8db42e9f0d1404756b3f5b7f1cd43f",
".git/objects/e3/4159e53b5eb5427f0d4f24418067a8def7c914": "02478cdd77adc96e2cb4e5d0df49d996",
".git/objects/cf/36e8ed5e0c021ad9b4e95f64b375aecbacf646": "4f930c5cc3979395f0ed9a712340fd67",
".git/objects/ca/b5538cefa00ef7bd409b468f963bd5b714b76b": "bad58bfe122a2cc2020a61ce5207d186",
".git/objects/7d/a51fdb3e4be4c0c1ef48e85c3755647088effc": "734a17b38d07ede64dee8a82cd01c46f",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/42/56a987236fb0a0bdb641fd5d79e691f1609c1e": "dec5f65cd98bb435868ca760f287739c",
".git/objects/45/6fddd731788e5c3f622a6c98767af89ee3f7b9": "38c01f323fdc554f3fee6987c87fa9c1",
".git/objects/1f/10f87e95649eae002e407c601289dfd61ac1d8": "0d51d7e1e7b719e65d70fc694dc387f5",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/28/85333f9d02c01ef534f15eb9324aeeafbed8b1": "b12813997e018c825aafc5e7d5007444",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/4bafb95f7f00aac02c4edd4f8db56b9d646d02": "67bc1070ea9a620874877d8c00efbab2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/b35f32beb5f9268b8f7a0f134c432996932713": "27933a9c6903b7cfaf13a50983b2c180",
".git/objects/5c/7e178daec1db7d540aef6594a21a856097de88": "21a5219eb780ece82c43953a7d20e78a",
".git/objects/65/e7b7c0acd5debeab1c9078d5b03ebcd3a5acbe": "4d38405c77075745ad3ecb37779936a9",
".git/objects/96/1a8dd9f1ed1e09bcf3885fab411d3e4a579a48": "6e6612c23032bb980490a46559e628e5",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/6c/1cbe7788fb57c39dcf2387f9086928d68ca0af": "405726fd73965c9701637ba7c8b4bd8b",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/0a/1d1e507b1913c69b58558d0d04323a6c9f03ee": "1d7e45b2003992551f946e5b6979b076",
".git/objects/90/9256a1a6ae327d6e4ca1b37a86cd2557888929": "66e314b4086c73704a1496c69456547e",
".git/objects/d3/307ada07a2be21cffd76f7e0d8fb796bdf09d7": "a5452e1aa33445365b46896215073c75",
".git/objects/b1/c33d21997a9a4be19061057c9e5b02a7e4a7f7": "d9b0689d241a868c9712ecb3759ebfd4",
".git/objects/af/b4496435fb9e7eeef2f8164e5bf10663c4622a": "b4a1a8ba5195cf4cf63188b3bc714a20",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/56d813c8a397d7ed06840bdb78b0814c5195cf": "0962b9188afe4ba188daff8ea5dca344",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/fcbca7b63d1b32401d780ca4c403ad24e6ad2d": "b1887ff7821dd76af9224c4a2454e5e9",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f9/1f48f6d674b5deb6ec12af8f50f27395902678": "e10fd8d9476a81d9cc0450a24f00032c",
".git/objects/f7/eff7ac64b7be87eeedc15e44f19a533c9ae8f8": "bc93e78a5c15660508489eb9a5a83935",
".git/objects/f7/1cd0886289b65c8a32160bad3373245ee98a6b": "05623235243e4ec44e4298e5399060d1",
".git/objects/f6/30777bd48360c8c135d0ff8533c446dd47fbe9": "6f9ce1d85f078c14a919a6e6582f65fd",
".git/objects/cb/b98484e18307d30077db7a31104961dbc85112": "4b0551804e1dc46842df50e2f8482ade",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/77/6cbf89cc58dfbc07d56bf02e449f457c51204d": "3ddd12dc92b5b81ca9d875bfacdd13ba",
".git/objects/23/884ebfa9f218662281d06198aa9d03acbc928b": "9b1d849de1f65452571f0446c7ad0de5",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/78/3d73a2170b9836e45cb72e6dbdfa1ccd971b3d": "2d344921f486d203cc2e5398c81ab67a",
".git/objects/13/1962a95f747f974364f68184d2ea6f5af81500": "626b64296f5d61fca96e6344cb64da5e",
".git/objects/14/672f5736d25a3b5e2b1a592e94c02ff6e06925": "ac66cba354b16bdb59f59e86ffd98e25",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cd1576088b44de515d6f7d9463209fb9",
".git/logs/refs/heads/main": "cd1576088b44de515d6f7d9463209fb9",
".git/logs/refs/remotes/origin/main": "cb30200a4792fafd49ea26b2b5856e53",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "bc10df86e0cdb0d3d41d707a011b1352",
".git/refs/remotes/origin/main": "bc10df86e0cdb0d3d41d707a011b1352",
".git/index": "7cc3ac62705a8186b7ec8cd97a846b75",
".git/COMMIT_EDITMSG": "01d8dbbeb2e678cdbca8ff34dec3601f",
".git/FETCH_HEAD": "e300d2e13a0bd4dfb30065fcd0b70612",
"assets/AssetManifest.json": "ef0ec3c9120cb3d78306ffa0f479d323",
"assets/NOTICES": "4708b1c4ed5c49503b85c422de70ddf6",
"assets/FontManifest.json": "8a64d67510ee0b2bd769dc0f69085885",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "cdc7f170e865f719d165f1c5b6244f71",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/fonts/stereofidelic.ttf": "02e66a101c09e8fad8c94a0f9147c51e",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
