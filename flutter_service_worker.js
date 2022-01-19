'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "7ea0bf6798cd3cf359656a87c04070d4",
"favicon.ico": "e07dbcb2ac54b5f2c795687699ee4dd8",
".git/FETCH_HEAD": "88de38666496be86be95fe0c9bd618f8",
".git/config": "d8739cf1a72c471c88621036ce3dd26c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "08a2e4d0b41c25b32f61c410267d8e8d",
".git/logs/refs/heads/main": "a34d64d40e03fcfbd870b9e6db8dab89",
".git/logs/refs/remotes/origin/main": "7a4fe0976ff54a804bae1177c3508223",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/de/5cc7091f16ff08598185973877a09838ad4c54": "9e24f4920ff8d403cc2f5ed4fe121529",
".git/objects/de/5ab1fc5da94c5cdd7642950f7c0c6588c839c4": "338145ab962b74ad8e867a2432f8b2bf",
".git/objects/51/10bcef7befaf1afbf6bbd691fca06308833da7": "9bb9c906d660540a1afdfbb74f2bad4c",
".git/objects/51/7b4a40b8ebef4c1107635a7d65060ca15a15ed": "5a0189a92d4a1e0f0d82e4af820c26e9",
".git/objects/60/b5a28f73d23b1cfa238bde5f0e01c619cb58e5": "b764f4d3df8bca6e678991b14e9ab654",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/48/3aad6378a2b5a4fcb06b7af156b3e32f983b47": "4b2d280656b8669df98e035525140878",
".git/objects/29/2cd702a263e9295f4e9ea5d3e5c32a7faa3bef": "3eed954ba3b6fcefec42ab4886ec9a5a",
".git/objects/29/cb8c6a56cf7b85454fa640d984e8059d59a235": "d9c23a249081448df8d335b6af5baf5d",
".git/objects/98/c70471367898745879037caca3f89347e4f7e2": "35077386b42b688317e99b5dc6107f7f",
".git/objects/98/2eac4b6093cafc2f0cc4885bf5d46af5768339": "2675508ed661c69f550dad1cd577faa2",
".git/objects/98/b708c0026def5ae093a7bb90a70e12993df305": "6e797cb7e2f57a1d8946ce7d88eb67b5",
".git/objects/a5/b1fb6d074e793c998ffd11e183fd801438d9f1": "d9a7effd6a04e91319de0eda6caeb186",
".git/objects/86/0640356629cad1776647735e83fbe833db5753": "098ae3b81e7e2958fff80a7aba8075ec",
".git/objects/1f/275b3d35a3d7c3477d5063cb5c04c13dcee8a8": "4feca4edec3addcdf694dc686ba229c7",
".git/objects/1f/5b83e78234d2d30e0b0ecd9d3f1529add54ab1": "6b1301dcce2378c5d35384c6e581d08b",
".git/objects/70/994a06ce106ebbffa0fbf6aecc81000006bfe3": "e6ade84b330aa528dcf26e92b80408bd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/8049b056df73c4a1a8becc1fefc67ddcfa2c4a": "d8bf3f807ba24378bf049c90a200a938",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/ac/fb08fbf065eb380890eb372db6211eefa6d0e2": "8e1bb7ed2916166c3ab36a8c348f2062",
".git/objects/62/00cd7d22a793499215cc8d196b38047097c16c": "906f838b572345cb6074cf50ef046e26",
".git/objects/ef/1cfe079a5fe813f2706825d5c4dbb2fe299c0f": "1f566192849f58cd03b980d129bc0fd5",
".git/objects/9c/980f324ce16eef863c4447faa6a55e62233cca": "dc7f13dca029ee4bc5564df751a1f260",
".git/objects/42/6cfdfe906098e9fb76244ad0f0fc9db4c61472": "29b841965df271d838c63d924c2fe9e9",
".git/objects/e0/6a9f99f4e0153f8b03e0a36210dee0deabcc6b": "b548c58499ecf1bd783dc0085b79df83",
".git/objects/c0/3d847ca521620be66f821b502fe7b1f426c10c": "bfe2196cdcad0dabaf0c6479437a44f4",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/7f/4350949985c87bc3b188983e636dcbbdf99157": "33dcece2af32b0f712f2397eeef3164a",
".git/objects/0c/e26dd78e7da6b5f03ddb6f0ab9d413d98ec75f": "2aa100855fe38647895655a7c90f017e",
".git/objects/50/1361c43fd2d754c9e40f7eb91540b0dfa27f4c": "18ca83366710fb15e4d257f646aa592b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/57/996ee3d9c762f72aef80d74371786dc0319cc4": "869402cc6478ba638acaa078627c87bb",
".git/objects/57/bb5c84f15a51c7f27a1a1717ea5e75d940de4b": "f151ce9ac2f2c50286eace692f92d2fa",
".git/objects/b6/6ed2ac727d82ddb5c3fe1f322c778fb29675be": "0a190d768d39307dad20b5a0e1f14477",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/49/2ccd0e03f6f4af5e987f17eb3a130159c6f0ed": "03e3ea2a16a676ac81443359d8281d12",
".git/objects/d7/336277634acae1e80ac2b138269cdccdb267e7": "ed7e9a91573ea48cbc208bccc3677d82",
".git/objects/b3/d5c1f5c48a19c643db7b4b260f132b46420316": "a2c079c53259cad023220eaae4a07fee",
".git/objects/05/044f23ee260fa84b5945dfb592f89d70d872d9": "bdf80c158b30d12a1a062daa6669d799",
".git/objects/af/fffbc03fcf1de0c000ca2a63a96af745d82128": "d1816e2437e703cf276caf2e7df27a99",
".git/objects/bd/b347c6f7476aac7af12e008e6f091a2e1b283a": "572fbd217388e78298dfe99e20a3f495",
".git/objects/9a/94402f18c26e8351bd582a813b64422ed5327f": "adeeb18232a0d41de6ffe90440773e84",
".git/objects/69/ed7add900bc305fcc259a808ef2df14bf1fa94": "5b257fd144e36d42833602f582ecec9a",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/a935138c495591e45aea7a9a101a8e3d846c6a": "0e382fa074dc9d71240f150b8e75582b",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/15/d4c53250a17dfc9f67a8887b114da14f3ea70f": "4f899ed444cf0cedbc6909772cc56900",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/e8/e00551757af5298407ca45065a4c324bb85acc": "d1281cca9893465fc72151de0e6a776a",
".git/objects/aa/775f90719f95645347d6e0558fab5d7044fff5": "0fd97afc86d11daab35addf42ba2681d",
".git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/f3/b00df417061bda50637a7d73bff77252f5db47": "b48f49ceb75b936ad22fa3a89830b301",
".git/objects/21/0a10ec495fbbd17c2a38f8f67cb5f925919ece": "79b081a2e22b7aa4388308c2723cb85a",
".git/objects/19/056dd820ba3dd8b814d915bbb8a738b9b9423c": "41bcc92df720d92f11a447a6e6e01f58",
".git/objects/8b/6aa527eca8da1952e8f3e2bac18a150575c04c": "31951b9147d8ef1d016e266af8f16f30",
".git/objects/3f/83ae1b86b92a4aad1fb8420283a0928cc558fc": "48d0a91062ef0c6a91e06cb36773c243",
".git/objects/c7/6fa0ca336cf9becdc4ca73aa0b85c7235efec7": "d4df180e43f61c2dd669442465ce2513",
".git/objects/c7/d8554c746f4ac5f7b1308cc2d65624222b2810": "d7779aa7e61243dc62dbec6627238d6e",
".git/objects/ba/2f592461bae9b8967f0adc4aa12b06492363ed": "f6047dbc1b2396218bb106810fd1246d",
".git/objects/43/9fd57385204ae39bc1da0c45ec7234cba8c9d1": "58c5a2ea4419bc404cabd753e04a2e29",
".git/objects/08/b59e5fe83baebc8d5a82b338244a2cde618696": "266c3d0dbcae298cd998ab50769202dd",
".git/objects/40/62fc7f04280ff8cbb8db758e6d4db23ad593d9": "ec25952d03cc8c364785515cb0888236",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/87/262efac38977a1d250e09d2027562da738cb25": "9176cf7472a4f3e954b2eeee00c50c46",
".git/objects/d3/da963d99eeb41554cac1aee20eb961a4eb104b": "a040abf249987adffeae5a6665467f23",
".git/objects/d3/33caa737e6e26a37af9553461061226061d2d6": "7c759618f4fb803d5768bb25125720a0",
".git/objects/02/a94e14f721c60f0c4fd309eedfe4a4d8dbbf60": "fe8c02a60e7f64b69175995093bfb6af",
".git/objects/e5/d40bb8c901c50328926dae8629d7d52fb0f1d6": "b2e925dbea16675895751a782b496f9c",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/97/f48d448bf9ec3d7c49fe8ae3bfb3ebb280ad2d": "2b2d0efaec7f8761f984157e12df1214",
".git/objects/b4/6b3b343c1b7fd4d579423cc421da94813b9b91": "11236c1c88123a13b04b1f6c86873ec0",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/90/575ccf53d35ad58532b519e420aa99e45408fc": "c4f20bfdd732645082df950329a7c169",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/3e/6d63d1ff8b8d3035e9304f050fd3dfae215667": "c935d26851fa45f0cbdfbc1b8ade3fff",
".git/objects/89/dae4ff870a6d7d4bb0ccf5fc5d1f7e56d0614e": "f185acf8a51e643c402b81e1b7cf5aae",
".git/objects/7b/ff81d6d4661df76569afa0e597295a6f531e70": "5bce14016d171acb400a05b822eccedd",
".git/objects/b5/868884e193a16d20ba7ef0b012ff7ce27bbb1d": "1328a393c23ee184beed6f343895ac11",
".git/objects/cf/3cbba6dc639b66945069febd7813c5c4e520bd": "baa8f381c1e468099493933fcd5626d4",
".git/objects/8a/d8cbbde8acbea262a64be931c558e91d4e2fcc": "17d4f29e9e3b07c06744c99ada4dd024",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/63/f6d90e4ed526bd5f9d44645dc25715711c5088": "da32028e0332c9f66ffa8822f9da4f75",
".git/objects/17/7bb86c9a77b94f808b9a0124a5f3e0799c03df": "36dfed6574a33db78c93c863954046e8",
".git/objects/7d/562885505e8c74893f6dc544d01ce5eae67468": "dc14e1c7cf4bea13cb0ae2465bc80f95",
".git/objects/f5/ac226075e6d362860771587fdc39b45026a0d5": "e7e06ca274fa894e570ad64ca2d2a3a7",
".git/objects/09/404e8b12c39efe5ee75b16f5616a221a0a6ef4": "b16adb32641edfb56166a49c2f2eeed4",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/e0c82f6acac002889273d50ba77e50d8000502": "9ed2bea190cf1a97f09327c571c6ef9a",
".git/objects/2a/a5f1d6ceed4075fe5c2309bc041d411523c47d": "1a1421e18d07daedc4730182dc02e46c",
".git/objects/96/d6ee402b92461cf08862c068f95dbf89885c17": "b45f0bee4092a1b4bcecf3abfb64d08d",
".git/objects/96/a34ae2b563e30243615bba6857aeba28dc82ed": "8db114c5af673eed907fae52c7d494d5",
".git/objects/96/3b79eeef3a58e6a89322f4c900d285e0100982": "3574674f1bf2ba9b0f43c78bb90d205b",
".git/objects/d1/f3f33fd0315d15861c5a771808b7f621e93fec": "29469d529236a28e4115142a4b8f6454",
".git/ORIG_HEAD": "11bc4490684cd7bb90fc6e996c3c246c",
".git/index": "0245aa829bda5938012805d107abdca4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/COMMIT_EDITMSG": "76b3a6509e6215d8a2b43cf495c8a0cb",
".git/refs/heads/main": "4129b71a696fdfdc7636c0ef5c6d1e85",
".git/refs/remotes/origin/main": "4129b71a696fdfdc7636c0ef5c6d1e85",
"index.html": "70f89fec9632b70a42a9ad5dc2a3de5e",
"/": "70f89fec9632b70a42a9ad5dc2a3de5e",
"CNAME": "2dd0d0b58bb5590409733a3b4d9c1acc",
"icons/Icon-192.png": "c516ee9beed5004924f92ba920b92450",
"icons/Icon-512.png": "864d383bc05b14a77f25544e655adff9",
"version.json": "7a2f38a1655ec6a5c1635886a8175fa7",
"manifest.json": "f033b191868f975fcfb0ec0056398018",
"assets/AssetManifest.json": "4c3c1feee4a0e478b7a721df2faa53c8",
"assets/NOTICES": "6476442e2ea5595d9939941b4a757d60",
"assets/FontManifest.json": "13180cd9872e77c4c9dfb3e06081efe9",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/assets/fonts/Handlee-Regular.ttf": "64bcfe1f13fce38e2ea26280157ff2ce",
"assets/assets/images/3.jpeg": "73aa2d7e193dd2f1b35d53148ce48d00",
"assets/assets/images/logo.png": "8ae8dd616d4b3d21e71025e1af2f28af",
"assets/assets/images/5.jpeg": "988db8e995704539e6d5fe782e071bfb",
"assets/assets/images/6.jpeg": "2f5c8b2847152d960d75c6fe5e0739c8",
"assets/assets/images/mobile.png": "8ff9206045093b6b1fc4a6c2b28f52b8",
"assets/assets/images/2.jpeg": "4c2ff156e1a1e93acf31a15815b5bd47",
"assets/assets/images/8.png": "1dfb33a71734ca9123875cfdd725032a",
"assets/assets/images/7.jpeg": "354bdb3b5a2252471ad69f70a3679fca",
"assets/assets/images/1.jpeg": "4ce0f285c7e1c7bef69b11b2c4f5ce68",
"assets/assets/images/4.jpeg": "beb4fb9b176498eb2ea3c6363980e205",
"assets/loading.gif": "e98d92abd013504b8c129fa12069c9d2",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
