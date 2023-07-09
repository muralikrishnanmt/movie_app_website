'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"README.md": "572917a1407b7006d4a0b3fc05c681dc",
"404.html": "aeb3bbc7fab123bb6bc81e5bb3e3846b",
"favicon.ico": "e07dbcb2ac54b5f2c795687699ee4dd8",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js": "98cdb4b15ca112d8825b22105f1b596c",
"index.html": "0e4495a8a94f663733c35bc234bf6d8b",
"/": "0e4495a8a94f663733c35bc234bf6d8b",
"icons/Icon-192.png": "c516ee9beed5004924f92ba920b92450",
"icons/Icon-512.png": "864d383bc05b14a77f25544e655adff9",
"manifest.json": "2b7739e0e7557b8aa1ab73cda12f9b49",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "c2281cf0a22c29917ebf755ba9d11e50",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "8e0542a7d7eec9dbada78c8605db3ccd",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "7d8d4306237845212974af924b1ab33d",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/AssetManifest.smcbin": "3fa3d3a70969eb6ea6d592833fc7701f",
"assets/moviex.png": "24f2e5327a4276496c14cd99515c843f",
"assets/loading.gif": "e98d92abd013504b8c129fa12069c9d2",
"assets/FontManifest.json": "13180cd9872e77c4c9dfb3e06081efe9",
"assets/assets/images/15.jpg": "a53fdc96bae5658db8ad53363be9d6b2",
"assets/assets/images/1.jpeg": "4ce0f285c7e1c7bef69b11b2c4f5ce68",
"assets/assets/images/3.jpeg": "73aa2d7e193dd2f1b35d53148ce48d00",
"assets/assets/images/6.jpeg": "2f5c8b2847152d960d75c6fe5e0739c8",
"assets/assets/images/10.jpg": "070e34da6902739c90237798b7fcc915",
"assets/assets/images/2.jpeg": "4c2ff156e1a1e93acf31a15815b5bd47",
"assets/assets/images/4.jpeg": "beb4fb9b176498eb2ea3c6363980e205",
"assets/assets/images/mobile.png": "8c67f5b7f1956ee98281bd18b6506e37",
"assets/assets/images/5.jpeg": "988db8e995704539e6d5fe782e071bfb",
"assets/assets/images/12.jpg": "ec2e6b2c2b4a9b3ea849ee6f5b1294da",
"assets/assets/images/13.jpg": "99f7fd639ac60766036954a39cea8ac2",
"assets/assets/images/11.jpg": "b98a4f643c79e2c79b331466840e12fb",
"assets/assets/images/14.jpg": "4ede4853152f7d5ac55b8f49929c7f75",
"assets/assets/images/logo.png": "8ae8dd616d4b3d21e71025e1af2f28af",
"assets/assets/images/7.jpeg": "354bdb3b5a2252471ad69f70a3679fca",
"assets/assets/images/8.png": "1dfb33a71734ca9123875cfdd725032a",
"assets/assets/images/banner.jpeg": "b963e969c501f5a5626afebf617f7447",
"assets/assets/images/9.jpg": "2e4fb712f1d728604f9eecfe2adcefa7",
"assets/assets/fonts/Handlee-Regular.ttf": "64bcfe1f13fce38e2ea26280157ff2ce",
"assets/AssetManifest.json": "f7a44bec62f247408fd406647ea65b02",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/NOTICES": "6662e764a2c8d5dd6251b6bc5fa5cc3c",
"version.json": "7a2f38a1655ec6a5c1635886a8175fa7",
"CNAME": "92096f20627553f3403449beb2db12d7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2ce0aeb31c40af61e097c5d67e28316d",
".git/logs/refs/heads/main": "007012a0d7219ac6d21dfa7e6b3a9c8a",
".git/logs/refs/heads/master": "7d30997906e3578e521db2b69f72f61e",
".git/logs/refs/remotes/origin/main": "78c4c5b86b93d6c3fff004c9aae3f993",
".git/objects/94/d0245236ac96c7560c583ccad98e9e3ba84044": "c1742fd49a90a8259ce4dd1c3a59422e",
".git/objects/b9/0f4b6cde756b318dc7d8f97fe76cf34538d276": "e91eb3bb7afcd6f68e2c2ad346eee4ed",
".git/objects/b9/c292cab4ac7aa48f0a6f5bf7393cb56f9c3a1b": "ee7cd5151bc23e41e6cca4f1d6f3a6dc",
".git/objects/1f/275b3d35a3d7c3477d5063cb5c04c13dcee8a8": "4feca4edec3addcdf694dc686ba229c7",
".git/objects/f4/a852226bf2e25c69080479b894917703f14ff8": "4d3f3c0a5dc1737866f07542712bb28d",
".git/objects/b4/6b3b343c1b7fd4d579423cc421da94813b9b91": "11236c1c88123a13b04b1f6c86873ec0",
".git/objects/b4/313f02c2313ee473a7ad08a39c878a8e9002b0": "c7b93ad5ef716fa7264f58e8d66af857",
".git/objects/bd/787941eee83aded64ebbb3f98cb2d09ce045b4": "5e3ab427883a0526dbaff434a094c4f0",
".git/objects/75/5e19ad6b355a65bc2bf0e5fc40127ff65d551a": "74fa9051b2732ebd600a9b1e44755c58",
".git/objects/75/3820aa383e375752cf45b6539230e6a85784d0": "188d1235f4a2e310886101779ff4e3d2",
".git/objects/75/8704ac6ea326287b69767565bbbba4d052a3b4": "8e74b4b61370398642cdc469bd6bc247",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/c5/738108d2bfe822be920f2b739c737b8a100250": "e17c3187eac5422660207e6c8c1a5f43",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/57/8405ae8eeedc3f590a8b1c842a3f43741863b4": "7de70695837db63b6cf8ac8d5bb81d9a",
".git/objects/17/3737dd6a4292b3c468113bd4e897b411394ae1": "77fbbcb65ed9b14b0b91b4ca7bb95750",
".git/objects/17/7bb86c9a77b94f808b9a0124a5f3e0799c03df": "36dfed6574a33db78c93c863954046e8",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/69/8c428acab030be50b168ad95c8010ece874ff7": "848c240573eb91fe8c67d7ee183dd5eb",
".git/objects/69/76cc9d87355fcc06815ffdc47f575157907f41": "79b1a6b11872c52fa760fbe3f25288ab",
".git/objects/69/5e7e9c5b7880de15c98d275112439777c711df": "f2bfed3de3e0d0caa76cfb23f99c6bb6",
".git/objects/18/390bc7ade122e0a6a18ee8a6ebe5e105fa1c4d": "b40b4059c218add84c326a62942f8216",
".git/objects/e2/c3349c641fb98b2bab6a2eccee04468154eb7d": "20d909a581d4dcd44acad06721e75cca",
".git/objects/e2/f767d748cf32dd6a8567a852433515b00d300e": "1220cd8321c7bd64154229dd6306cdf3",
".git/objects/e2/3e6964d4010de760ce3c20d9cc9cab1ede0140": "7c8c67107215da77b57573a403b279e2",
".git/objects/2a/bfabcf69f36fee5839f70e38444d03121d09f4": "d5cf905206e1e72ea2c921bb3010c4c5",
".git/objects/88/67c0c73bbfbedd9517274266777e6a86d4428e": "5a2bd733983dbbacb153510b983f1117",
".git/objects/6c/d49b3693b6cd52f2a32c41f64cfac7a3b8fac8": "1e72c845f8793f22aa6555586f183764",
".git/objects/f9/a3d3149338fda8c27a71086aa2793facb22d43": "f68789abcd89e475f363d09be09009da",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/9f/ad118d7802d6affd760b92ff391ef4c4447815": "4976ed709800d8ed2479899864bf556d",
".git/objects/9f/2fcd7aa14d365ad95103b7ec3372302c813932": "e9f9caa8a826592fec4724959e2be314",
".git/objects/85/be627dc1b281639158cb6c80a24d736f0e7d06": "fd084cc6740480a14f7b3df5ef79dd62",
".git/objects/85/f9445505b4f977e52b7740ed405e0acfb5fc8e": "32b89a3c4cf9a887bae7a3cacaa330af",
".git/objects/7d/bb191758db3565d7181087ab5418cef6ea504f": "993d2ddc784443c15c85e0eb5b6e40fc",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/96/3b79eeef3a58e6a89322f4c900d285e0100982": "3574674f1bf2ba9b0f43c78bb90d205b",
".git/objects/05/04f8fc894af4eb4767852f0b7ba8f08d898658": "bd46c2920128ecf428ba088b18beca79",
".git/objects/33/c85da0338b2671faa894fd08cfb0e8b349b427": "bc1a9cbb87d85b6a2fb7d87261c410ce",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/b81757a404e3f73b5105c5bbbbc433e386f43d": "afd7ae9057f09cbe08fb6b52f22ad7ef",
".git/objects/2b/cc7e25d9540c720babae12daa6ffaafb7d1b5e": "bba04d2e5d24b18ea76e9e2d9222a594",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/c8/dfe7ed6ab4fb2c334d77b21e810580e94326ff": "689339a7e1e975967300f269529c8078",
".git/objects/c8/7d8d3e8149fc9cda5763e5c42f5464de064c3a": "1f831572457aaa3c8de8ce951a0189d8",
".git/objects/59/68e8c20fe96d295668afe2df2a4c524530c305": "3c96e07c467462975a8060df6ea4738a",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/49/660c4011a2f77b931a6fe7d050161d736b9e3d": "62ba095d82b078bdc5b25b04c8fbfeb7",
".git/objects/49/9ff92191b107c8d22dd56aaa27e2a0ae616fda": "6b40cab21d037371a4a53a9bb7deaf81",
".git/objects/31/7050687c517def888c5b9c4e08513b425240db": "ef0e2ee035ef431b055140711f81b038",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/ea/3e36ed2c6ecd4ca79b9865a07fdd54f7caa143": "31a167dafb21e1ec3c54a11fa4126cd7",
".git/objects/02/fb140dc7a4bf0f7f32aed36f644164251f207d": "1de4a3bbfa6592b4e02ca07da002bbd8",
".git/objects/02/a94e14f721c60f0c4fd309eedfe4a4d8dbbf60": "fe8c02a60e7f64b69175995093bfb6af",
".git/objects/9b/3a35e50bba91e51b6a34b5dbca4b3c1f67ac0f": "91bfd38ce4d8ff17958f12f8a862eb50",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/1c/b0a83f5313b06d8616904460817ab6107a417c": "933813025cc189d354ca8ead3967cd20",
".git/objects/ba/bca4ef43181a585a594f8bbf5dc81a6a9dbe07": "d54bb1583a8bad0bdb3bc930590ff8d7",
".git/objects/ba/17527002788c95958a133a82dcc541ab1aea32": "796bbce49ea8e5dddf4abf97bde10124",
".git/objects/21/47c337219d8881e8b8319c23518c2cc8c31c1d": "0db00ee6b633d179c8aed464eebe1dae",
".git/objects/21/ef0f5635ca53934774e9b7df2e3e5155ed6a8a": "db1352990b6c26838bd92193f04d0d87",
".git/objects/44/b5b8d2bcb48b6ac5cd49ae8460ee323df71065": "2e8f268af6e78ea07020fb87ad44ee52",
".git/objects/7b/787cb4459eeadcc84c00f269b03736656e42b2": "976317f5ef0df4ea9515674a35b2f09b",
".git/objects/5a/a2d6cf992222689c7c550d9353694e52ef19d9": "55eeecb4f4bebb89f50c316f75635a6a",
".git/objects/5a/4c036e6cd39aaf5d104aa7df1d80e4064f351f": "e2b7ae7a769d9fb6c0f4c1f461a1bdaf",
".git/objects/24/d981ef90308e63c439d98fea579bce214a251f": "a7780653a807913c0bb5f96f6d25c194",
".git/objects/24/21147f5b042f806683bfe5d0d2c61398e66a5f": "efea67e8a1100e4d609cd0f1a58e84b6",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/5470764f64e5ae291247207d116082c8bcb96a": "4041f3c119b732790f6200bc1ae9f1da",
".git/objects/d3/cd4603222574070a87be1d90129dc749f9bfd6": "2164112b35d26adec0b1f7fb9f1fe586",
".git/objects/d3/da963d99eeb41554cac1aee20eb961a4eb104b": "a040abf249987adffeae5a6665467f23",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/bb/d4e6a7fa03ccfad57fbf53f8fb574523d869c2": "dd58f5d36c6bd9ef0d7a712c28d21253",
".git/objects/bb/add49b3102e4c29e935c5d8a6c6dc408cc43ce": "074b110eefc659a97cf9c795cff25ca1",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/pack/pack-10341b396c9f5565ba202e8aadcb48b109e22b01.pack": "e4a62d56b74d83290b01fe4834e16911",
".git/objects/pack/pack-10341b396c9f5565ba202e8aadcb48b109e22b01.idx": "d4edfe41cb3d71c613c6333a9c87ac44",
".git/objects/2f/da62e2710d4ff7428c7b60c3e47441b52e737d": "f32a93921e8c1511a0297385972be4d3",
".git/objects/f5/b0c26b566bc804d09254c83049cc026e1f865b": "287e9b19f451499eb86e264120762047",
".git/objects/1d/b416df74a61911c1d404bd522e4bf8fc50ad0d": "b2925b19f5cb66e644e5ddcbff621c8c",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/72/128df48d19b333281f677b3b05e35ad9aab4ec": "a518512c953edf44fd32788eb5bfe06b",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3a/d1e0b39d5d6eb7ea000b85b18a4480b6d7e41a": "84805614ec101c87fa55ef911120b769",
".git/objects/00/9e4d569a164f62d7e2564a15a40e41b7f19075": "ba56a823e4323ef254c355bb0acd4777",
".git/objects/00/a7e01b9233fa17151819e2a8fb12020a44216e": "ad1ff9ac479d80ed2ecbdd4351f612ba",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/f0/757a9ef1bc7cb37f18d0bb6c91b60f1cdd1596": "dd0144d285e5aa0aea6568d1d5e6af63",
".git/objects/f0/51bd89bbf67909d5dc315b267bf7d313d66321": "8a1956c4c4e4d5d8ae4c165c71e6e214",
".git/objects/11/267c2310577e8b34d036ff34dbdd7d3c7f3db0": "f7a6e3db6394cbd55294f83c2dd8c406",
".git/objects/5d/294564c2d2ab75f2c942a35b3dcb31ffe35c99": "ab6d07b3eb76f91c50effd85dff4437a",
".git/objects/f7/9cf834d3c973eeca9e3d076f5e868612436fda": "30beb178cdf6a8b6c061c0abc9bb7bcb",
".git/objects/f7/29b95bc41023aadb95ae810bcaaa1fe7433916": "45208899bb7420548c24e880a567055c",
".git/objects/34/3ea96ef962f6d66dcbb135e0ec7022f8522b8b": "1793fd70f22228b521bfd5d6f68a4c5a",
".git/objects/8f/d0166ffbd35080c6cca68baba5fd81260dfd7a": "75d74a790882b713ef6ce6c5d2159dae",
".git/objects/25/b417f66ca88ac2da0627877086d6d3a0ace290": "480581bd69b47d568704e3a95bb96d16",
".git/objects/ad/cf9a3a8990389bc02c50d80f17e4f29e5c48f7": "58e42893934f867bc0e4fd14c4a1fdf5",
".git/objects/ad/a017a321fe865bbcae036959a1a234786b0373": "24eb6a823d2a1dd98b567be0fded853b",
".git/objects/62/43453efd7741c2848aabef32a2bf0fa67b1a26": "bee5f20aac70a8bee56624d9c3052d09",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e4/255dd9811f2fa29fe1505d8d5cd811963f00b1": "973f75367fcb61a00a372e78e890494a",
".git/objects/e4/98408ad681f8ff366f880f30399505b6ae8a32": "d78c54e66ae64856535a932a6e81f2ec",
".git/objects/99/032e788652d2816b348d96b2890d29ecf8d11f": "8826a94ec2db4119bec86ddcf535253d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e1/e6b4ea295265281cd4c93834b143cd8e005ce7": "b3ddf3c5ab0e1d5ccdf56bd46ab3204a",
".git/objects/48/33b8d72422288c261d627428f819b0db15b48e": "5fcca7d3b098405fdd33593e4ab4d7bf",
".git/objects/10/ac0fb201958c3518023ec32532f5a37cdd9255": "5b6848342347fbe9638f6934e6644629",
".git/objects/67/606a4af1b60c4477333980b97b67c21c5d33e8": "8836c0eaada9ccb6def3f69fd7c1695a",
".git/objects/67/c0aafec7a14becfbd4aa561abb77763ce550d9": "9ec669a104af33c56da16f22bcc4cb19",
".git/objects/67/7032b559ff7b332caf139db5a01c839009903d": "e3d887830d8bba92284303768897f342",
".git/objects/e6/d10dc7ebb8d57b86ec3ae6a223c597e85c57bb": "535a11154c158304ad84a3f3a77d84bc",
".git/objects/e6/2c6474e817a69d733cb13f5add57dc309fc329": "68f04939682e23b99b302fe2199903e7",
".git/objects/ab/1e59c48c765a27b1d7748b7470125b97798df7": "a5af50e8c26d6f92e477bdd0b4a99599",
".git/objects/ca/6fa89d6c6c4c78bbf9dcdb48e3e646c0194cc6": "72a2f5bfde6e001bfe9efcda3de3fd77",
".git/objects/ca/4a0bf4ab9305b94ce5e485d9b0c40d22e9a04f": "da5ee412f3e889a7f3091937d1f21976",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/5c/9b000482b4d2d7118ddee5d4af70559969ee8c": "8da0a580073cecbccf80f3b301ba3106",
".git/objects/5c/06ceefbc0403fa80e2da8decb0f5c95d06e7e9": "08366196760aa17c7edcbcf6e5547468",
".git/objects/5c/d1816a2f34aca6953e4d278c9415b106b1c7ab": "5d7ae2217a70514efc761c7ee322e51b",
".git/objects/64/79a5388fdd153ba484567f1b9461d4966ed77b": "171c23925edc9184c7ad9fa896cfd8dd",
".git/objects/58/2d80310655aa98376243b223c99407e8a5344e": "11fe1edda889ccc39e372a6252e94f9e",
".git/objects/66/83a953c827f3552195f1578c1fcce4c42937ca": "b514e33440e7b4651b07b78b7a765613",
".git/objects/66/471379ec258d2ec1009cd1785a94d6e863e88d": "fcf37c2de2a70ed1ad9461a6903d3d86",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/3d/3ee4a025d1a1fec87536562b0afd3dfab395d8": "218dfe4f265f5332ac4dc38e673346cc",
".git/objects/dc/ac01e26b61b076e447b3f5e37dbdf0c0c45695": "b668f1f0c15060751bf0eb27b65ece6b",
".git/objects/13/fde13233d061649304ec3c74a2662b44286450": "9c452f0182e57c1a2a75e8127dd78ab2",
".git/objects/6e/713a613c40aeeb1efb612a5a6dc7a3f43cc2fe": "e43bf77bbd7ac1d80fd3db6ac64b00a0",
".git/objects/6e/17a8074bca53be7af6421739b44d78dbbe60a1": "c922cbc44c3b9fb1d0ef0939f3abe5ac",
".git/objects/c7/6fa0ca336cf9becdc4ca73aa0b85c7235efec7": "d4df180e43f61c2dd669442465ce2513",
".git/objects/c7/9db35e60eeca1694c0140cbe79d0489beb8a64": "f9c156e86cab5b4295f2cbfd3ca96702",
".git/objects/fa/458490832a3a7a90a8f3a36317964f92002b3a": "396ff3cd03374bc275d651eb7ccf7b6b",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/ef/a870e135d738311756732fcefe95c3b26f6247": "d1c10d71483940244a8285190449d5f8",
".git/objects/ef/41e754b70bb28c8f6e425b3a7b55eb3ccc0c88": "bbc4c42c71f0baaa86a75af27c9b1412",
".git/objects/53/859709a8ca9e5f9a6c78fd32f34e8d904fc20d": "09bde10f9428f9b140a3457148ac6d88",
".git/objects/4f/2fe2f4d17b9917072b1f2191ce019f8b5403bd": "4bf9074545dfbb1ea50707383742bb4b",
".git/objects/e8/e00551757af5298407ca45065a4c324bb85acc": "d1281cca9893465fc72151de0e6a776a",
".git/objects/86/0640356629cad1776647735e83fbe833db5753": "098ae3b81e7e2958fff80a7aba8075ec",
".git/objects/76/040df52b652b13da835687f8a8203523237f7e": "d0e45371b8dcd90b3d27d4453cdff24a",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/39/e86980893ba2f5fff45afab80ecd79d4cd3ed1": "94fbdc9a39e83f4c010e7cea35d27deb",
".git/objects/f1/bd0a84d3cfaa877b740424cbb2fc3f1a9ffa34": "11d485191dca1cca6de7e087415921e6",
".git/objects/f1/83f27a32b611d47a487e5035f426d45e6133e8": "68d8d7bbd04a40ec8ae148d013bda69e",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/ee/f15462ccfca683617987ffafddacd60bd57e67": "a9c35b0c8869b82cd5230bea7a5a6cc2",
".git/objects/bf/93ef4519ae8683d468922d530ead7dcf3d87bf": "536e4e94ff7ac177b941a7941137812f",
".git/objects/bf/b34b1d678c1de94ad5a4c659a165e3a8018c38": "1eff6aa3b513324b37786ae0a4a4accf",
".git/objects/04/d26ea7b71c8059e31a7d68e3aca323abacbac7": "0d0572c4fabce5ca0899a7151cd03ea0",
".git/objects/29/871cee0d1f2618280eecb2a217c2fd2ba55918": "e67c59f2125a52833b931d35698e46bd",
".git/objects/29/2cd702a263e9295f4e9ea5d3e5c32a7faa3bef": "3eed954ba3b6fcefec42ab4886ec9a5a",
".git/objects/c4/450c734b9b2286f4ca8984a65b9b0c554db573": "d330c42f6194f6e89e132c3ab9efbed4",
".git/objects/8a/d8cbbde8acbea262a64be931c558e91d4e2fcc": "17d4f29e9e3b07c06744c99ada4dd024",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/c6417d57bc32150655b231be6233494c4b7ff8": "0e78e8181ece9c8f7b5c42a23fa6cf2d",
".git/objects/23/a412ad687e2525b359b14062edecf1964a5407": "0c26ebe82a98645717fee62acda2ca8a",
".git/objects/23/3ee5051e1aaf3b64c4606f1cf1d734a97ea391": "a2300a3d10db79511925fbc5c4345585",
".git/objects/d1/f3f33fd0315d15861c5a771808b7f621e93fec": "29469d529236a28e4115142a4b8f6454",
".git/objects/d1/e62fc0ecf85769a6ae17ebf284a5e656a9796f": "4de329fef69ef28d01b4fed1969effac",
".git/objects/0e/1b16b929df2c8f2ed28ffcdcdbaa6f7cdf5a7d": "c188fece68947ce0350f6c9f4363a2e2",
".git/objects/98/2eac4b6093cafc2f0cc4885bf5d46af5768339": "2675508ed661c69f550dad1cd577faa2",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/31f4d3ff03895dbfc24dd869f82f2db2338a78": "74e47a2833ba844d0cac104ad89bc228",
".git/objects/70/7da27af6af10247b74adf981d29fe2bce16d5d": "612b9c4dc6a2a964bdcc72990ffd31d6",
".git/objects/16/b8ba8c833277da5795c820cb4f4ffe4630b177": "3e36dd05f10a262e100e08721f524c16",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/36/c12094c28b8991c3464b52ade94858513734c9": "2c367c412491789c40cc87ac9c55c6c2",
".git/objects/36/664c1e273b00917d09e1ef9b8367ee809d4432": "523608833ee6bdd227f5fd445ee29ee1",
".git/objects/a5/b1fb6d074e793c998ffd11e183fd801438d9f1": "d9a7effd6a04e91319de0eda6caeb186",
".git/objects/a5/47d7530b17547f40e077669375b1875461b335": "9e2b85de372e6f80ffa977145f86f3c4",
".git/objects/77/0c894a8fe627a335a04338f4b86e5536168cd1": "654c238e63e66849d64f06d7ba69a920",
".git/objects/a8/e088b7c503291ed0f681f8f1e3e10446718fc0": "2c7a25445fe37fc03af3cdcad7fc47fd",
".git/objects/08/b59e5fe83baebc8d5a82b338244a2cde618696": "266c3d0dbcae298cd998ab50769202dd",
".git/objects/08/c0ebb214cbbd921a81bba28a907a513d6cdf9b": "ef4ca18341a05e8c6c31f6f0ade237f0",
".git/objects/6d/473cd7d8f37d3c058109245806537b40c4679b": "94b567ad15900022724349b48e7507ae",
".git/objects/6d/0d72f9787baa8b15545162aca1e68d4d461345": "2599882365e035132d80938af9cde214",
".git/objects/6d/3201dbc87c4635ac036687ab768f8456b938d2": "e0aecff7ebc24a01695ade8f7e98b47f",
".git/objects/38/7a452e87686818d2c649bd7e7c5b308478ba6d": "d5709e73ac643225616a708799e2ad89",
".git/objects/38/070d1be488b02bdf9e385db77379d97ea0a445": "35d24c42d8e04e65dd7fc917a3b75e3a",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/dfc0f0002941581b85d42af21129a64c0b1fe6": "98d5dd797ec82e80f107f37ca4e69426",
".git/objects/56/34f807c81bd1c070962a57d34e6138c39a2e7c": "1da16095993031540ffc7c0fbab0fd9e",
".git/objects/30/b18d32720f307cfa2a6ea5ad4629750e967e62": "3c77512c1afb6aa53365e358aadfa917",
".git/objects/c6/cfd24714c1594fc257c78e414e3b129317b659": "b84b3b95b86ff939ea46e7d6f7336872",
".git/objects/7f/4350949985c87bc3b188983e636dcbbdf99157": "33dcece2af32b0f712f2397eeef3164a",
".git/objects/0c/3a37d58c7d3e9393854166e5817dcb8d2900f6": "47d16987bbd0e4e6a86cc731898b3fd7",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ae/e2aff64112f5df02614ff313956b4929c01dcc": "5d8b50a83a030c6282947d2fe204ceb9",
".git/objects/ac/fb08fbf065eb380890eb372db6211eefa6d0e2": "8e1bb7ed2916166c3ab36a8c348f2062",
".git/objects/0f/ba75bdbb992d899c1829f150c5d325cda4e082": "e7a7b0b87be2580b52c9ccb9bb4949e2",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/25df3933e6dad283061d56c4bf31347891a5cb": "ec17f4dc496f2daabca00405a3489b12",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "56133b8783c98a99f91a4b7f873ce4d0",
".git/refs/heads/main": "44d5e4ce54b6b0b480c83b58bbdd487e",
".git/refs/heads/master": "0b1356e0fc783dfff61d2ffdc0f96e32",
".git/refs/remotes/origin/main": "aa936f56f2d9b09a03365eca17cadf3a",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/ORIG_HEAD": "aa936f56f2d9b09a03365eca17cadf3a",
".git/FETCH_HEAD": "a7547099388c5a3a8c8525a815ef5d2d",
".git/index": "bd10361a9730165647fcc2cb82f416f2",
".git/config": "c3a9fe6d55499558f41446514a91f6c6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
