'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "404.html": "aeb3bbc7fab123bb6bc81e5bb3e3846b",
"index.html": "f581795cb40b3dd50bae5200d6a3932c",
"/": "f581795cb40b3dd50bae5200d6a3932c",
"version.json": "7a2f38a1655ec6a5c1635886a8175fa7",
"main.dart.js": "e2ef99fb0f23c1a542924a721fae778f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/images/1.jpeg": "4ce0f285c7e1c7bef69b11b2c4f5ce68",
"assets/assets/images/banner.jpeg": "b963e969c501f5a5626afebf617f7447",
"assets/assets/images/7.jpeg": "354bdb3b5a2252471ad69f70a3679fca",
"assets/assets/images/11.jpg": "b98a4f643c79e2c79b331466840e12fb",
"assets/assets/images/5.jpeg": "988db8e995704539e6d5fe782e071bfb",
"assets/assets/images/10.jpg": "070e34da6902739c90237798b7fcc915",
"assets/assets/images/4.jpeg": "beb4fb9b176498eb2ea3c6363980e205",
"assets/assets/images/15.jpg": "a53fdc96bae5658db8ad53363be9d6b2",
"assets/assets/images/logo.png": "8ae8dd616d4b3d21e71025e1af2f28af",
"assets/assets/images/12.jpg": "ec2e6b2c2b4a9b3ea849ee6f5b1294da",
"assets/assets/images/9.jpg": "2e4fb712f1d728604f9eecfe2adcefa7",
"assets/assets/images/3.jpeg": "73aa2d7e193dd2f1b35d53148ce48d00",
"assets/assets/images/8.png": "1dfb33a71734ca9123875cfdd725032a",
"assets/assets/images/13.jpg": "99f7fd639ac60766036954a39cea8ac2",
"assets/assets/images/14.jpg": "4ede4853152f7d5ac55b8f49929c7f75",
"assets/assets/images/2.jpeg": "4c2ff156e1a1e93acf31a15815b5bd47",
"assets/assets/images/mobile.png": "8c67f5b7f1956ee98281bd18b6506e37",
"assets/assets/images/6.jpeg": "2f5c8b2847152d960d75c6fe5e0739c8",
"assets/assets/fonts/Handlee-Regular.ttf": "64bcfe1f13fce38e2ea26280157ff2ce",
"assets/loading.gif": "e98d92abd013504b8c129fa12069c9d2",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "f7a44bec62f247408fd406647ea65b02",
"assets/FontManifest.json": "13180cd9872e77c4c9dfb3e06081efe9",
"assets/shaders/ink_sparkle.frag": "b9f0df7abffde85f293515e0649d56e2",
"assets/NOTICES": "ed9544308afa21bf5cb5ab63c7619695",
"assets/moviex.png": "24f2e5327a4276496c14cd99515c843f",
"icons/Icon-512.png": "864d383bc05b14a77f25544e655adff9",
"icons/Icon-192.png": "c516ee9beed5004924f92ba920b92450",
"manifest.json": "f033b191868f975fcfb0ec0056398018",
"README.md": "572917a1407b7006d4a0b3fc05c681dc",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"CNAME": "92096f20627553f3403449beb2db12d7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/ORIG_HEAD": "ca68f037904165b6301d59a26939e40d",
".git/COMMIT_EDITMSG": "31b4ec8b0ad5044fb14110de881f6c08",
".git/objects/6c/a2a888fdd2c40931ef59bba66f8ad1c672a21b": "cdc2a8a73b8a766fff8299d33f54a596",
".git/objects/7f/4350949985c87bc3b188983e636dcbbdf99157": "33dcece2af32b0f712f2397eeef3164a",
".git/objects/bf/97515e1ce0cf6b65caa9b7037f8fa67c5b45aa": "475ccfc85d578675d59dc3b49ad57945",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/7d/bb191758db3565d7181087ab5418cef6ea504f": "993d2ddc784443c15c85e0eb5b6e40fc",
".git/objects/17/7bb86c9a77b94f808b9a0124a5f3e0799c03df": "36dfed6574a33db78c93c863954046e8",
".git/objects/d3/da963d99eeb41554cac1aee20eb961a4eb104b": "a040abf249987adffeae5a6665467f23",
".git/objects/2f/da62e2710d4ff7428c7b60c3e47441b52e737d": "f32a93921e8c1511a0297385972be4d3",
".git/objects/ca/a078a96485bafb0bc6636834d3317709bc8b52": "4c52f9e80c1b672e8553e853ddae2afa",
".git/objects/96/327c118a5c187b56d91760814f9095af5710c9": "3025c3893b961282bfa6ca446c2f54ef",
".git/objects/96/3b79eeef3a58e6a89322f4c900d285e0100982": "3574674f1bf2ba9b0f43c78bb90d205b",
".git/objects/5a/55cc5204aff02d976508d7d8b070233df8ee89": "c24f7a1963facf0e60474a9535d4d469",
".git/objects/23/3ee5051e1aaf3b64c4606f1cf1d734a97ea391": "a2300a3d10db79511925fbc5c4345585",
".git/objects/02/a94e14f721c60f0c4fd309eedfe4a4d8dbbf60": "fe8c02a60e7f64b69175995093bfb6af",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/f0/51bd89bbf67909d5dc315b267bf7d313d66321": "8a1956c4c4e4d5d8ae4c165c71e6e214",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/36/bf457f5feadd5cddd09477d3587920e7cabc8a": "039b0418c9e46b5761dcf5c07b34b2a0",
".git/objects/36/c12094c28b8991c3464b52ade94858513734c9": "2c367c412491789c40cc87ac9c55c6c2",
".git/objects/e4/255dd9811f2fa29fe1505d8d5cd811963f00b1": "973f75367fcb61a00a372e78e890494a",
".git/objects/bc/f4359868c81d8d38c157599a131a9d5c6e4d5f": "a95358bbf8874ad86c59345f4fa7c120",
".git/objects/2b/cc7e25d9540c720babae12daa6ffaafb7d1b5e": "bba04d2e5d24b18ea76e9e2d9222a594",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/b81757a404e3f73b5105c5bbbbc433e386f43d": "afd7ae9057f09cbe08fb6b52f22ad7ef",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/8a/d8cbbde8acbea262a64be931c558e91d4e2fcc": "17d4f29e9e3b07c06744c99ada4dd024",
".git/objects/dc/ac01e26b61b076e447b3f5e37dbdf0c0c45695": "b668f1f0c15060751bf0eb27b65ece6b",
".git/objects/ae/e2aff64112f5df02614ff313956b4929c01dcc": "5d8b50a83a030c6282947d2fe204ceb9",
".git/objects/f8/294102e6110b9e49715b62b701765987099b7f": "ec215c00969e0b224586d054516e7d99",
".git/objects/81/26efa78fe830f4645c44ec5ad9ec22ec15c5fa": "963c1c83768289503fb7137483b54ca5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ef/41e754b70bb28c8f6e425b3a7b55eb3ccc0c88": "bbc4c42c71f0baaa86a75af27c9b1412",
".git/objects/86/0640356629cad1776647735e83fbe833db5753": "098ae3b81e7e2958fff80a7aba8075ec",
".git/objects/fb/8394fc2da79ebeb4742bca5a77e2c7a0543d21": "cbf946d8c3391374deea0f02825d5bc8",
".git/objects/a5/b1fb6d074e793c998ffd11e183fd801438d9f1": "d9a7effd6a04e91319de0eda6caeb186",
".git/objects/08/b59e5fe83baebc8d5a82b338244a2cde618696": "266c3d0dbcae298cd998ab50769202dd",
".git/objects/ab/1e59c48c765a27b1d7748b7470125b97798df7": "a5af50e8c26d6f92e477bdd0b4a99599",
".git/objects/ab/0d415a1a3ffe4b2483c60e0e0cb16a74bb0e10": "c6893623ca28f0f9bec3aac85e289acb",
".git/objects/9a/94402f18c26e8351bd582a813b64422ed5327f": "adeeb18232a0d41de6ffe90440773e84",
".git/objects/16/b8ba8c833277da5795c820cb4f4ffe4630b177": "3e36dd05f10a262e100e08721f524c16",
".git/objects/6e/713a613c40aeeb1efb612a5a6dc7a3f43cc2fe": "e43bf77bbd7ac1d80fd3db6ac64b00a0",
".git/objects/59/68e8c20fe96d295668afe2df2a4c524530c305": "3c96e07c467462975a8060df6ea4738a",
".git/objects/ac/fb08fbf065eb380890eb372db6211eefa6d0e2": "8e1bb7ed2916166c3ab36a8c348f2062",
".git/objects/e8/e00551757af5298407ca45065a4c324bb85acc": "d1281cca9893465fc72151de0e6a776a",
".git/objects/c7/6fa0ca336cf9becdc4ca73aa0b85c7235efec7": "d4df180e43f61c2dd669442465ce2513",
".git/objects/b0/c3a63fad51108ec2c185e6142132104f6aeae9": "ea60eb834b7d2185a87a88be661e0375",
".git/objects/1f/275b3d35a3d7c3477d5063cb5c04c13dcee8a8": "4feca4edec3addcdf694dc686ba229c7",
".git/objects/39/03f6db4cba9f0a6131cc5fbebb21771b37bd6a": "6ad5772b211547a4957ab40f06dc52c6",
".git/objects/pack/pack-2bc3fa506977b3715299d4f3e526bb7d0e6235a9.pack": "171088eccce33da865edb1492e804e19",
".git/objects/pack/pack-2bc3fa506977b3715299d4f3e526bb7d0e6235a9.idx": "03253e9adfc1f157ad65fbc0ec281793",
".git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
".git/objects/85/f9445505b4f977e52b7740ed405e0acfb5fc8e": "32b89a3c4cf9a887bae7a3cacaa330af",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/98/2eac4b6093cafc2f0cc4885bf5d46af5768339": "2675508ed661c69f550dad1cd577faa2",
".git/objects/83/7d540a5bda7b528f8b8cc0e9775926d8847899": "d950794c9da1b2599d84ed32226ff787",
".git/objects/72/128df48d19b333281f677b3b05e35ad9aab4ec": "a518512c953edf44fd32788eb5bfe06b",
".git/objects/b1/3d088dcd1eed1a2b47954486cf8cfc9bd7a341": "49d921c28fc6a55b56783ec5a9bf850d",
".git/objects/0c/3a37d58c7d3e9393854166e5817dcb8d2900f6": "47d16987bbd0e4e6a86cc731898b3fd7",
".git/objects/29/2cd702a263e9295f4e9ea5d3e5c32a7faa3bef": "3eed954ba3b6fcefec42ab4886ec9a5a",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/index": "3aa681e03471a51d5ec7f562ffe61811",
".git/refs/heads/master": "ca68f037904165b6301d59a26939e40d",
".git/refs/heads/main": "117b9179bb38051863d078e1a97ad1d7",
".git/config": "d8739cf1a72c471c88621036ce3dd26c",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/FETCH_HEAD": "3ce4553426c3ca509ad678a7723ad288",
".git/logs/refs/heads/master": "3fd8f12cd0b28c5f7106883268762594",
".git/logs/refs/heads/main": "1e9592569ada8b934bad704303a47744",
".git/logs/HEAD": "ef2ec2682dfb76b438de227388b8073b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.ico": "e07dbcb2ac54b5f2c795687699ee4dd8"
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
