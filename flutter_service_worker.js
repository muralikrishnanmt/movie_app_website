'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-192.png": "c516ee9beed5004924f92ba920b92450",
"icons/Icon-512.png": "864d383bc05b14a77f25544e655adff9",
"version.json": "7a2f38a1655ec6a5c1635886a8175fa7",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"index.html": "3992b668ceaf757523d8905cc9ffebfd",
"/": "3992b668ceaf757523d8905cc9ffebfd",
"CNAME": "92096f20627553f3403449beb2db12d7",
"assets/AssetManifest.json": "f7a44bec62f247408fd406647ea65b02",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "b9f0df7abffde85f293515e0649d56e2",
"assets/FontManifest.json": "13180cd9872e77c4c9dfb3e06081efe9",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/moviex.png": "24f2e5327a4276496c14cd99515c843f",
"assets/assets/fonts/Handlee-Regular.ttf": "64bcfe1f13fce38e2ea26280157ff2ce",
"assets/assets/images/7.jpeg": "354bdb3b5a2252471ad69f70a3679fca",
"assets/assets/images/12.jpg": "ec2e6b2c2b4a9b3ea849ee6f5b1294da",
"assets/assets/images/2.jpeg": "4c2ff156e1a1e93acf31a15815b5bd47",
"assets/assets/images/10.jpg": "070e34da6902739c90237798b7fcc915",
"assets/assets/images/3.jpeg": "73aa2d7e193dd2f1b35d53148ce48d00",
"assets/assets/images/9.jpg": "2e4fb712f1d728604f9eecfe2adcefa7",
"assets/assets/images/mobile.png": "8c67f5b7f1956ee98281bd18b6506e37",
"assets/assets/images/8.png": "1dfb33a71734ca9123875cfdd725032a",
"assets/assets/images/4.jpeg": "beb4fb9b176498eb2ea3c6363980e205",
"assets/assets/images/6.jpeg": "2f5c8b2847152d960d75c6fe5e0739c8",
"assets/assets/images/5.jpeg": "988db8e995704539e6d5fe782e071bfb",
"assets/assets/images/11.jpg": "b98a4f643c79e2c79b331466840e12fb",
"assets/assets/images/banner.jpeg": "b963e969c501f5a5626afebf617f7447",
"assets/assets/images/14.jpg": "4ede4853152f7d5ac55b8f49929c7f75",
"assets/assets/images/1.jpeg": "4ce0f285c7e1c7bef69b11b2c4f5ce68",
"assets/assets/images/15.jpg": "a53fdc96bae5658db8ad53363be9d6b2",
"assets/assets/images/logo.png": "8ae8dd616d4b3d21e71025e1af2f28af",
"assets/assets/images/13.jpg": "99f7fd639ac60766036954a39cea8ac2",
"assets/loading.gif": "e98d92abd013504b8c129fa12069c9d2",
"assets/NOTICES": "57112a78aaa1c03375aa8b8341fbcc7a",
"404.html": "aeb3bbc7fab123bb6bc81e5bb3e3846b",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
".git/index": "072429ebfdaf493ade49228937412ad9",
".git/FETCH_HEAD": "9c7f304ed4aa69618cec3455b41746a5",
".git/config": "c3a9fe6d55499558f41446514a91f6c6",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/5c/06ceefbc0403fa80e2da8decb0f5c95d06e7e9": "08366196760aa17c7edcbcf6e5547468",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/pack/pack-10341b396c9f5565ba202e8aadcb48b109e22b01.pack": "e4a62d56b74d83290b01fe4834e16911",
".git/objects/pack/pack-10341b396c9f5565ba202e8aadcb48b109e22b01.idx": "d4edfe41cb3d71c613c6333a9c87ac44",
".git/objects/c4/450c734b9b2286f4ca8984a65b9b0c554db573": "d330c42f6194f6e89e132c3ab9efbed4",
".git/objects/d1/f3f33fd0315d15861c5a771808b7f621e93fec": "29469d529236a28e4115142a4b8f6454",
".git/objects/72/128df48d19b333281f677b3b05e35ad9aab4ec": "a518512c953edf44fd32788eb5bfe06b",
".git/objects/f0/51bd89bbf67909d5dc315b267bf7d313d66321": "8a1956c4c4e4d5d8ae4c165c71e6e214",
".git/objects/96/3b79eeef3a58e6a89322f4c900d285e0100982": "3574674f1bf2ba9b0f43c78bb90d205b",
".git/objects/23/3ee5051e1aaf3b64c4606f1cf1d734a97ea391": "a2300a3d10db79511925fbc5c4345585",
".git/objects/c7/6fa0ca336cf9becdc4ca73aa0b85c7235efec7": "d4df180e43f61c2dd669442465ce2513",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/75/5e19ad6b355a65bc2bf0e5fc40127ff65d551a": "74fa9051b2732ebd600a9b1e44755c58",
".git/objects/d3/da963d99eeb41554cac1aee20eb961a4eb104b": "a040abf249987adffeae5a6665467f23",
".git/objects/59/68e8c20fe96d295668afe2df2a4c524530c305": "3c96e07c467462975a8060df6ea4738a",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/85/f9445505b4f977e52b7740ed405e0acfb5fc8e": "32b89a3c4cf9a887bae7a3cacaa330af",
".git/objects/1f/275b3d35a3d7c3477d5063cb5c04c13dcee8a8": "4feca4edec3addcdf694dc686ba229c7",
".git/objects/0c/3a37d58c7d3e9393854166e5817dcb8d2900f6": "47d16987bbd0e4e6a86cc731898b3fd7",
".git/objects/86/0640356629cad1776647735e83fbe833db5753": "098ae3b81e7e2958fff80a7aba8075ec",
".git/objects/2f/da62e2710d4ff7428c7b60c3e47441b52e737d": "f32a93921e8c1511a0297385972be4d3",
".git/objects/36/c12094c28b8991c3464b52ade94858513734c9": "2c367c412491789c40cc87ac9c55c6c2",
".git/objects/17/7bb86c9a77b94f808b9a0124a5f3e0799c03df": "36dfed6574a33db78c93c863954046e8",
".git/objects/e2/f767d748cf32dd6a8567a852433515b00d300e": "1220cd8321c7bd64154229dd6306cdf3",
".git/objects/6e/713a613c40aeeb1efb612a5a6dc7a3f43cc2fe": "e43bf77bbd7ac1d80fd3db6ac64b00a0",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/7d/bb191758db3565d7181087ab5418cef6ea504f": "993d2ddc784443c15c85e0eb5b6e40fc",
".git/objects/ef/41e754b70bb28c8f6e425b3a7b55eb3ccc0c88": "bbc4c42c71f0baaa86a75af27c9b1412",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/a5/b1fb6d074e793c998ffd11e183fd801438d9f1": "d9a7effd6a04e91319de0eda6caeb186",
".git/objects/a5/47d7530b17547f40e077669375b1875461b335": "9e2b85de372e6f80ffa977145f86f3c4",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/88/67c0c73bbfbedd9517274266777e6a86d4428e": "5a2bd733983dbbacb153510b983f1117",
".git/objects/b4/6b3b343c1b7fd4d579423cc421da94813b9b91": "11236c1c88123a13b04b1f6c86873ec0",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/cc7e25d9540c720babae12daa6ffaafb7d1b5e": "bba04d2e5d24b18ea76e9e2d9222a594",
".git/objects/2b/b81757a404e3f73b5105c5bbbbc433e386f43d": "afd7ae9057f09cbe08fb6b52f22ad7ef",
".git/objects/0e/1b16b929df2c8f2ed28ffcdcdbaa6f7cdf5a7d": "c188fece68947ce0350f6c9f4363a2e2",
".git/objects/3d/3ee4a025d1a1fec87536562b0afd3dfab395d8": "218dfe4f265f5332ac4dc38e673346cc",
".git/objects/bf/93ef4519ae8683d468922d530ead7dcf3d87bf": "536e4e94ff7ac177b941a7941137812f",
".git/objects/bf/b34b1d678c1de94ad5a4c659a165e3a8018c38": "1eff6aa3b513324b37786ae0a4a4accf",
".git/objects/dc/ac01e26b61b076e447b3f5e37dbdf0c0c45695": "b668f1f0c15060751bf0eb27b65ece6b",
".git/objects/7f/4350949985c87bc3b188983e636dcbbdf99157": "33dcece2af32b0f712f2397eeef3164a",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/ca/4a0bf4ab9305b94ce5e485d9b0c40d22e9a04f": "da5ee412f3e889a7f3091937d1f21976",
".git/objects/11/267c2310577e8b34d036ff34dbdd7d3c7f3db0": "f7a6e3db6394cbd55294f83c2dd8c406",
".git/objects/ae/e2aff64112f5df02614ff313956b4929c01dcc": "5d8b50a83a030c6282947d2fe204ceb9",
".git/objects/69/76cc9d87355fcc06815ffdc47f575157907f41": "79b1a6b11872c52fa760fbe3f25288ab",
".git/objects/98/2eac4b6093cafc2f0cc4885bf5d46af5768339": "2675508ed661c69f550dad1cd577faa2",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/16/b8ba8c833277da5795c820cb4f4ffe4630b177": "3e36dd05f10a262e100e08721f524c16",
".git/objects/29/2cd702a263e9295f4e9ea5d3e5c32a7faa3bef": "3eed954ba3b6fcefec42ab4886ec9a5a",
".git/objects/29/871cee0d1f2618280eecb2a217c2fd2ba55918": "e67c59f2125a52833b931d35698e46bd",
".git/objects/ab/1e59c48c765a27b1d7748b7470125b97798df7": "a5af50e8c26d6f92e477bdd0b4a99599",
".git/objects/ac/fb08fbf065eb380890eb372db6211eefa6d0e2": "8e1bb7ed2916166c3ab36a8c348f2062",
".git/objects/02/a94e14f721c60f0c4fd309eedfe4a4d8dbbf60": "fe8c02a60e7f64b69175995093bfb6af",
".git/objects/8a/d8cbbde8acbea262a64be931c558e91d4e2fcc": "17d4f29e9e3b07c06744c99ada4dd024",
".git/objects/c5/738108d2bfe822be920f2b739c737b8a100250": "e17c3187eac5422660207e6c8c1a5f43",
".git/objects/77/0c894a8fe627a335a04338f4b86e5536168cd1": "654c238e63e66849d64f06d7ba69a920",
".git/objects/08/b59e5fe83baebc8d5a82b338244a2cde618696": "266c3d0dbcae298cd998ab50769202dd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/49/660c4011a2f77b931a6fe7d050161d736b9e3d": "62ba095d82b078bdc5b25b04c8fbfeb7",
".git/objects/e4/255dd9811f2fa29fe1505d8d5cd811963f00b1": "973f75367fcb61a00a372e78e890494a",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/e8/e00551757af5298407ca45065a4c324bb85acc": "d1281cca9893465fc72151de0e6a776a",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/refs/remotes/origin/main": "554dbcbca021e577bd36ca3a36855042",
".git/logs/refs/heads/master": "7d30997906e3578e521db2b69f72f61e",
".git/logs/refs/heads/main": "7ea3e5f5397919c77f320bed7b7b85db",
".git/logs/HEAD": "ba77148fafd0844ca633f0a2bbd7fdfd",
".git/ORIG_HEAD": "0b1356e0fc783dfff61d2ffdc0f96e32",
".git/refs/remotes/origin/main": "18632a9793aea3def142525d2025f944",
".git/refs/heads/master": "0b1356e0fc783dfff61d2ffdc0f96e32",
".git/refs/heads/main": "18632a9793aea3def142525d2025f944",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "9b935f11545c81a8bc8609fa14fe3b49",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"favicon.ico": "e07dbcb2ac54b5f2c795687699ee4dd8",
"README.md": "572917a1407b7006d4a0b3fc05c681dc",
"main.dart.js": "20f96325cd9313fa5492d649f5991df3",
"manifest.json": "2b7739e0e7557b8aa1ab73cda12f9b49"
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
