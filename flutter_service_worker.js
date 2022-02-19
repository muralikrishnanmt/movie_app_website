'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "10577711d5a1be10a1eadfd67664f58b",
"favicon.ico": "e07dbcb2ac54b5f2c795687699ee4dd8",
".git/FETCH_HEAD": "292ac99a7f3143e923ad1366fc7188a9",
".git/config": "d8739cf1a72c471c88621036ce3dd26c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9fe4ff7f714b88b193ff8fcd09f59f7b",
".git/logs/refs/heads/main": "e98f3467e6806c29c1f6fb2ca9032502",
".git/logs/refs/remotes/origin/main": "73b581a0c3f73b42b0432f3c7e7e868f",
".git/objects/be/1c83fc41092aeb2f7285cbbcb62379ed34bbed": "daae4a903a5d5f8db0727162ca0dc9e8",
".git/objects/4e/2e2aa7852c800fa70f1d87703e48208c373875": "14945c432d00bfd5dd27a433d8cebd51",
".git/objects/6f/cc9b32883ea4667e59b243ad071b77c9c97d9d": "c0f0c45069d469b6e77dbb109bac4dd3",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/de/5cc7091f16ff08598185973877a09838ad4c54": "9e24f4920ff8d403cc2f5ed4fe121529",
".git/objects/de/5ab1fc5da94c5cdd7642950f7c0c6588c839c4": "338145ab962b74ad8e867a2432f8b2bf",
".git/objects/ff/cbcdeee1f684e9a1476ad2c246435be99dc2d8": "a2722bd4f73cfd2f756bc80d4f2de769",
".git/objects/14/316cbf23ecad09fdcaab59f208c5e8d56bc72e": "f0a563940c093c8f5142bece8428e40e",
".git/objects/51/10bcef7befaf1afbf6bbd691fca06308833da7": "9bb9c906d660540a1afdfbb74f2bad4c",
".git/objects/51/7b4a40b8ebef4c1107635a7d65060ca15a15ed": "5a0189a92d4a1e0f0d82e4af820c26e9",
".git/objects/51/7145305757bca04d0b851cb5c0a00087f03ae7": "6b5c3b3b72b59b4f35c3656de8467559",
".git/objects/51/3d49d07eb0bf35086a1ecf167a24f22bdc966f": "0e6929a968b94fab2b39aec2cd91fd42",
".git/objects/60/b5a28f73d23b1cfa238bde5f0e01c619cb58e5": "b764f4d3df8bca6e678991b14e9ab654",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/48/3190ab74f62e077c28d0baf6ebc088b3e357c3": "4ae51db79bc7d2010eaf4f11d6b67d62",
".git/objects/48/3aad6378a2b5a4fcb06b7af156b3e32f983b47": "4b2d280656b8669df98e035525140878",
".git/objects/31/0fd93ea370946bb8bb11d87348b600167b6f4d": "547b974d4d7d3b8afe1070855ab077fb",
".git/objects/31/8bec2e221283c378a9fab1a41ecd438fc201f1": "fe5196e99c849c912d0a4a69f8882d20",
".git/objects/2f/da62e2710d4ff7428c7b60c3e47441b52e737d": "f32a93921e8c1511a0297385972be4d3",
".git/objects/2f/609c5994d33003450a22863c77b062fc2bc70d": "95fc5d1944d9e451d7afe5a374f709b2",
".git/objects/1e/0ded8b113b2c808c1fad32561bbe74b6b55416": "bdc7042857bde59c6aa3add2e07912ac",
".git/objects/29/2cd702a263e9295f4e9ea5d3e5c32a7faa3bef": "3eed954ba3b6fcefec42ab4886ec9a5a",
".git/objects/29/cb8c6a56cf7b85454fa640d984e8059d59a235": "d9c23a249081448df8d335b6af5baf5d",
".git/objects/98/c70471367898745879037caca3f89347e4f7e2": "35077386b42b688317e99b5dc6107f7f",
".git/objects/98/2eac4b6093cafc2f0cc4885bf5d46af5768339": "2675508ed661c69f550dad1cd577faa2",
".git/objects/98/b708c0026def5ae093a7bb90a70e12993df305": "6e797cb7e2f57a1d8946ce7d88eb67b5",
".git/objects/1d/1153ac371278c8ec4b006eb61c32b863bc0821": "aa545a2e69bf37ceb25c644ce1673d8d",
".git/objects/a5/b1fb6d074e793c998ffd11e183fd801438d9f1": "d9a7effd6a04e91319de0eda6caeb186",
".git/objects/a5/a87ae0934392c3b26923e96504a7d98113d2a6": "602fa75356453a3557ddc3ef4605bce8",
".git/objects/1c/f073191a869e97ccf19dd72cd460ee16403908": "1f3ee324e08aee9c3b90bbdff09781e5",
".git/objects/1c/c99d628ff1f8d99796ca60d4e1807207dba05b": "b95153c4982d46007c0e4ca5002708ca",
".git/objects/cc/8aa77206442a780c189205b2534562611e20c7": "b6a38e6ce0ac37b8808de79da0d2164d",
".git/objects/6d/cc6b999211b50da73e67fe1143c34df5fcc243": "82fdf2376f107be553a6e99b120fd689",
".git/objects/86/0640356629cad1776647735e83fbe833db5753": "098ae3b81e7e2958fff80a7aba8075ec",
".git/objects/9d/6b2f8582c259db3e9dc16ad157816fa18dbc94": "a803f8dd8b0d1abf358d3c5bc3733bbd",
".git/objects/5b/2ea9f6828d6a167fab065a1530960ba55eedbd": "aad4375e935c604dede11d8508ff2ee1",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/54/51b643f959eade09c0b2706041f63df3807f0d": "6e8494d81c0a6b62b69112e0dbf4b81b",
".git/objects/54/70fed7c8b6dcb4e269c3724d15dcdd2be20b56": "2b59198ecae3f671e95de12648cfb70d",
".git/objects/ca/708e3884272173057832d02410a061dfd75db1": "bbd004ba10efe6aee70b9875c80b89b5",
".git/objects/1f/275b3d35a3d7c3477d5063cb5c04c13dcee8a8": "4feca4edec3addcdf694dc686ba229c7",
".git/objects/1f/5b83e78234d2d30e0b0ecd9d3f1529add54ab1": "6b1301dcce2378c5d35384c6e581d08b",
".git/objects/70/a66deae9beae45a684885cb3957550db443063": "acfd9f1ae302ab0ecfddf52836b9939e",
".git/objects/70/994a06ce106ebbffa0fbf6aecc81000006bfe3": "e6ade84b330aa528dcf26e92b80408bd",
".git/objects/d6/b4e254839bfb1e30b07fcb9e234a83e6b58119": "6e8f82fe0a0e0ac85e501d09510bc5d3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/8049b056df73c4a1a8becc1fefc67ddcfa2c4a": "d8bf3f807ba24378bf049c90a200a938",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/b8/650c8ce825e03d0d358676887a92500ab113cd": "b8502ba9bb92f49894902d22306a7e84",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/ac/3401351403365cf5652d57434fee6d5a161313": "6b05777e1138cab0093252942fbf6d8b",
".git/objects/ac/fb08fbf065eb380890eb372db6211eefa6d0e2": "8e1bb7ed2916166c3ab36a8c348f2062",
".git/objects/45/4fd23aa0bd8cb40d461b69230c9dc54128cb43": "91a5b76914eed679993c5ed38056c97b",
".git/objects/62/00cd7d22a793499215cc8d196b38047097c16c": "906f838b572345cb6074cf50ef046e26",
".git/objects/62/c614c13ff1e974f45514d877ab9fa636a1b25d": "ad8bd3dcb10fe2e1929774ffa7fcbfdb",
".git/objects/5e/15ba6c84c471993dc07e77ffd8021965be0733": "5d2338a08922a5a1df4b9c72d76105fe",
".git/objects/a9/b3b3f6e50262b21780587c15d62015c8497907": "6caaa2af3129849ff9a6dc04ff812cd8",
".git/objects/ef/1cfe079a5fe813f2706825d5c4dbb2fe299c0f": "1f566192849f58cd03b980d129bc0fd5",
".git/objects/ef/8627b7d670efd20d78972a849c133b4b1432b8": "ab1940597b67e4c8b22415abcaa150ee",
".git/objects/f9/1b244b3dbec3775fe53a2c0913047a8cacdf4f": "83c82a9d479452dba840b143fd1e112d",
".git/objects/9c/980f324ce16eef863c4447faa6a55e62233cca": "dc7f13dca029ee4bc5564df751a1f260",
".git/objects/9c/2a2c32c86ed239662c39d2f643fe845621408f": "89381a78f479741b098e34c44fe0b85e",
".git/objects/ce/5e18db59ec6f56cf71a685236060760eb4ce23": "2b2b0fc8ed4eda5f678f6370420ebe91",
".git/objects/74/aab2bcc5612e50280b0de284f75d786b4e2bc3": "ecf2aecc8ff7ed3a76c6e63be1a9eb8c",
".git/objects/42/6cfdfe906098e9fb76244ad0f0fc9db4c61472": "29b841965df271d838c63d924c2fe9e9",
".git/objects/44/b98152a62c25493230995017c8a8098d32f7db": "f5ec1c8b08c07e25746111233888d6c3",
".git/objects/44/4b107fc40abf29eb83c79f4b342e21fd8696ee": "4c45599620aa4f3d84b41044e92c55dc",
".git/objects/0e/63ea008ea83ffb1c524350636498ed9c1439be": "487b2598a8c6715eff006551a5110501",
".git/objects/0e/5c636d2cf3f0b7d14c50e5dfcf35f90e3a6c83": "7526f53b5f22f485d1470701e9538866",
".git/objects/f0/51bd89bbf67909d5dc315b267bf7d313d66321": "8a1956c4c4e4d5d8ae4c165c71e6e214",
".git/objects/e0/6a9f99f4e0153f8b03e0a36210dee0deabcc6b": "b548c58499ecf1bd783dc0085b79df83",
".git/objects/e0/41cffc8a89110c347c9e13ded2d4788ec52fb5": "6dd3f20e33bdccb273bd2268274da982",
".git/objects/e0/fe68236f5efcec06f596599ec8626c596aa592": "6a9b01452977cd8896748925606b1087",
".git/objects/6e/713a613c40aeeb1efb612a5a6dc7a3f43cc2fe": "e43bf77bbd7ac1d80fd3db6ac64b00a0",
".git/objects/b0/04d94acd073f03ce622c9ef793f3f27a18c875": "a7dda841df45bace594a79cef38d3224",
".git/objects/c0/f3b1284a5c13d3357f41427266b7bd06b0524d": "0cfd00c3b95dbe00d62f4f16f8a5dc33",
".git/objects/c0/d1f6897e5410d85ec01827fc3861f9b8738f39": "0d6a303d3a3c5ef0b14953733ca8d7ba",
".git/objects/c0/3d847ca521620be66f821b502fe7b1f426c10c": "bfe2196cdcad0dabaf0c6479437a44f4",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/7f/ccb7a4f7677aabc6aafeee0f6a2cdc7620be64": "dec95750663d3ec493aacbe36fd80de3",
".git/objects/7f/f81aa003d780b1eb49164cc1729ba62f98a503": "3eacd918609f577c97fa2add249a7b73",
".git/objects/7f/4350949985c87bc3b188983e636dcbbdf99157": "33dcece2af32b0f712f2397eeef3164a",
".git/objects/84/c331cc52d6d71e32fbc54abf13aecacf139c58": "84673e9164d1cc83583ea15995a6618d",
".git/objects/0c/9a948ddab3e6403440c55a6fb01c2048e8a1f4": "3963e9ec9fd62690e0eb71bd50adc6b3",
".git/objects/0c/60d5399281692919167b88b0554ca638b86234": "95169a5845e1e0be0d779f03c3762b41",
".git/objects/0c/e26dd78e7da6b5f03ddb6f0ab9d413d98ec75f": "2aa100855fe38647895655a7c90f017e",
".git/objects/30/d69dbe57560d13a1b9d4756922dadc49824f23": "3891bbc70a8b3e5a08515417c0f2dbe3",
".git/objects/50/1361c43fd2d754c9e40f7eb91540b0dfa27f4c": "18ca83366710fb15e4d257f646aa592b",
".git/objects/b7/7f34d2f2d7de362565737e3ba0d03aeb8c666f": "0b0d8c11132802e6c83f2a4ef03d5d9f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/57/996ee3d9c762f72aef80d74371786dc0319cc4": "869402cc6478ba638acaa078627c87bb",
".git/objects/57/bb5c84f15a51c7f27a1a1717ea5e75d940de4b": "f151ce9ac2f2c50286eace692f92d2fa",
".git/objects/73/d0fc5e435ce63cb0445607b93850a9e0020f7b": "ca56ec2ea02983a1f8585119fc722ce0",
".git/objects/9f/0b11d75a9f0f27dc9cfbdf68a21da13b2683d6": "7f08c50744ffe248977e7feec5e9e8c5",
".git/objects/b6/88b0770becf454001661ce382dd90a75bf1b0f": "635ab0f3821669516a9a00d7c2a5b6d8",
".git/objects/b6/6ed2ac727d82ddb5c3fe1f322c778fb29675be": "0a190d768d39307dad20b5a0e1f14477",
".git/objects/36/236f7ebef28fe3799014c60890cd870f6e0489": "29b7e21fe06bd88e2fd0ff65653f547e",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/36/b5420f7b7394839b244355e43521249d17455f": "020c278c391082150ad8cbdd5bac8edb",
".git/objects/3c/f66396f0946ea20e4f77d3418ada4eb4c3a8a7": "bd97a6317aa5009c681efc7f5d4038c5",
".git/objects/68/a8d960e6f126dd16607f45e5a2f118d2900a42": "9d24cdea3f6cf6dde324b1954e624ae0",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/e7/e9778203c8c8fb347b6413b74da61dc0a727dd": "3aa4f5a8cae49c286f5287e10481849b",
".git/objects/e7/c5fef3b89dc7e2d0cf513624c2ae1c19447fc8": "b87f3e9857ec41c7c20e5ce3c5d935af",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/5c/fdc5910290338bc340c3313be371eda7d84d02": "ca7522c06e4d9321d44d341f2ee08fae",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/49/7d8df5ea844596645ba1a06eba5222b8c07384": "cf49e445e5b1f85c99840665108c8766",
".git/objects/49/2ccd0e03f6f4af5e987f17eb3a130159c6f0ed": "03e3ea2a16a676ac81443359d8281d12",
".git/objects/d7/336277634acae1e80ac2b138269cdccdb267e7": "ed7e9a91573ea48cbc208bccc3677d82",
".git/objects/da/18286d80991682b5f28f16324eabecdf6324a4": "61533fa4efd398d9f123ce3f35b95771",
".git/objects/da/edb4379daa5a280d89909798a00ad3d2502a59": "35206865df5763a466b9e782f33cc380",
".git/objects/fb/8bb2bc541fb916672d8861424b88be6ed2c26d": "0248d3a2dd6cc3ddf069f4472f4b2819",
".git/objects/b3/d5c1f5c48a19c643db7b4b260f132b46420316": "a2c079c53259cad023220eaae4a07fee",
".git/objects/b3/d7fc9790f49a275a58cd214e0af450db506daf": "525b30bdb9965bca15efdb7ec8ebeae3",
".git/objects/05/044f23ee260fa84b5945dfb592f89d70d872d9": "bdf80c158b30d12a1a062daa6669d799",
".git/objects/af/fffbc03fcf1de0c000ca2a63a96af745d82128": "d1816e2437e703cf276caf2e7df27a99",
".git/objects/bd/b347c6f7476aac7af12e008e6f091a2e1b283a": "572fbd217388e78298dfe99e20a3f495",
".git/objects/c6/c954ca78ecbd25aba6d2118c50f359a6d420aa": "44679fee3af56857bb37a25e70d1b8b0",
".git/objects/9a/94402f18c26e8351bd582a813b64422ed5327f": "adeeb18232a0d41de6ffe90440773e84",
".git/objects/20/e5526c301cccbf2f1bab75f1e6c90870a413fe": "34d1841e7208f5dc385b79650eae955d",
".git/objects/69/ed7add900bc305fcc259a808ef2df14bf1fa94": "5b257fd144e36d42833602f582ecec9a",
".git/objects/32/9a757fe6368f503b49783bb17110f57b6487bf": "da5cf1ab14c8b3f30667b55345a8d245",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/a935138c495591e45aea7a9a101a8e3d846c6a": "0e382fa074dc9d71240f150b8e75582b",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/27/c98279fba331078c6bb5101d8795da838a460c": "d8e2a20f277ae3f9e8ba64064fd6dd01",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/15/d4c53250a17dfc9f67a8887b114da14f3ea70f": "4f899ed444cf0cedbc6909772cc56900",
".git/objects/15/38e1df810b9de7611dc8cbe6ab24bb423a9b88": "1340bdc6ce3b98a93e98d314318fe088",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/e8/e00551757af5298407ca45065a4c324bb85acc": "d1281cca9893465fc72151de0e6a776a",
".git/objects/83/15960e95a88320d481cf43436e38f723cecfd1": "a735df52c03612c12ccecb39c0f030cc",
".git/objects/aa/775f90719f95645347d6e0558fab5d7044fff5": "0fd97afc86d11daab35addf42ba2681d",
".git/objects/aa/e4ce8b8cb05159c2d46f25875b62c2f2ee98a8": "3f4fea65c42c03813ef65614aa765693",
".git/objects/85/44b475fda043575ed41f2a2775779bfc227d80": "ea45ea6d9a1d70eb0270d98301703452",
".git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/f3/b00df417061bda50637a7d73bff77252f5db47": "b48f49ceb75b936ad22fa3a89830b301",
".git/objects/21/0a10ec495fbbd17c2a38f8f67cb5f925919ece": "79b081a2e22b7aa4388308c2723cb85a",
".git/objects/21/ecaf90bb704bb6ac640a65ba8294bc0e35a87c": "d92cb8185f85b56343c149204669f8b3",
".git/objects/c3/73227f2483e8463a40393a20107196f1dc723a": "a2788b6b289bdff605f69c341c9d9e32",
".git/objects/a3/5874d02de6dc7d72901f01316f890d19d35e41": "c4f67c3eee594274dcf6ae4539146eff",
".git/objects/f1/9bc0df23be211a3bba511f584af512c10970b4": "d7f837069cc6d7135eb48f0b4df02590",
".git/objects/f1/b328bd00bcf8e70e017c301f7caeb79e3ae6e6": "c58960b5bde984f4f882a84c2dc01447",
".git/objects/12/b766c37f1c77fa50612e8d80a1e0c67c401398": "09d8090a055c99194cb124dac4e2d53f",
".git/objects/df/830e6dd092463b594c54118ab274391aea7a4b": "c6b4cc34fb0b4829339d572250300a93",
".git/objects/19/056dd820ba3dd8b814d915bbb8a738b9b9423c": "41bcc92df720d92f11a447a6e6e01f58",
".git/objects/8b/6aa527eca8da1952e8f3e2bac18a150575c04c": "31951b9147d8ef1d016e266af8f16f30",
".git/objects/3f/83ae1b86b92a4aad1fb8420283a0928cc558fc": "48d0a91062ef0c6a91e06cb36773c243",
".git/objects/56/86cac1fad7d2033604e3f129b7e4f77c0cacec": "52c7ee9322a776dc7bf0191fa0510d1c",
".git/objects/56/465ec735a5df7892f6871961401348fe11d21c": "343a64edf748149fccbee723a7893549",
".git/objects/c7/6fa0ca336cf9becdc4ca73aa0b85c7235efec7": "d4df180e43f61c2dd669442465ce2513",
".git/objects/c7/d8554c746f4ac5f7b1308cc2d65624222b2810": "d7779aa7e61243dc62dbec6627238d6e",
".git/objects/92/25e46703787b5b6d972e31e9449f35073342d1": "0b087cd8f8646447ee605aec5aa945dd",
".git/objects/ba/2f592461bae9b8967f0adc4aa12b06492363ed": "f6047dbc1b2396218bb106810fd1246d",
".git/objects/43/9fd57385204ae39bc1da0c45ec7234cba8c9d1": "58c5a2ea4419bc404cabd753e04a2e29",
".git/objects/53/60b70839f493f5ef2d32540679791bfe94c0c3": "c5a3719e5f23b9269567d013ca843d10",
".git/objects/08/b59e5fe83baebc8d5a82b338244a2cde618696": "266c3d0dbcae298cd998ab50769202dd",
".git/objects/40/62fc7f04280ff8cbb8db758e6d4db23ad593d9": "ec25952d03cc8c364785515cb0888236",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/99/1a0d469fef0382484fd6b7c91a0baf7e2112be": "dab8fef3732dac20719d83420021edf1",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/262efac38977a1d250e09d2027562da738cb25": "9176cf7472a4f3e954b2eeee00c50c46",
".git/objects/a4/e14bb3704006ce04b1aebc921a6b267342f96b": "120338fa34c12e3a6b55b5ebb6b2b200",
".git/objects/d3/da963d99eeb41554cac1aee20eb961a4eb104b": "a040abf249987adffeae5a6665467f23",
".git/objects/d3/33caa737e6e26a37af9553461061226061d2d6": "7c759618f4fb803d5768bb25125720a0",
".git/objects/02/a94e14f721c60f0c4fd309eedfe4a4d8dbbf60": "fe8c02a60e7f64b69175995093bfb6af",
".git/objects/02/7e6f3e54762b4b55d65d748542676c9e1cd51e": "6a5b2c35dd186943916a1899c27b23c4",
".git/objects/e5/d40bb8c901c50328926dae8629d7d52fb0f1d6": "b2e925dbea16675895751a782b496f9c",
".git/objects/e5/d1e8459eb7a24c78e467566de9b7f2df664148": "3b57bb4e4585e514b83b49ea41047117",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/9c3596fb3d3f1017b136583dbe430899c9afd9": "3ad126979d9414ad26c6aacfabb3f59a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/97/f48d448bf9ec3d7c49fe8ae3bfb3ebb280ad2d": "2b2d0efaec7f8761f984157e12df1214",
".git/objects/f2/6ca4d7fce5e0a9986b993ded5c6c560b58a38f": "ed79650ab786a7a1c99f737e66ea27ae",
".git/objects/e6/a48bd5d9aa009e522148d2f1bc3b9e6f3a3640": "dbf28a1ae73730ea3097a81de6481174",
".git/objects/b4/6b3b343c1b7fd4d579423cc421da94813b9b91": "11236c1c88123a13b04b1f6c86873ec0",
".git/objects/d8/765f51b565d710e8fa5ef8abc4475480120b9f": "252560c3c1776ab47784cae90c4f4955",
".git/objects/d8/90f83762a2c4c8ae58fab1c17c6beff0784acb": "8fec993393d4a8dc43c3ec3f7da815b5",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/90/575ccf53d35ad58532b519e420aa99e45408fc": "c4f20bfdd732645082df950329a7c169",
".git/objects/f6/66db7288a4a6bb939dd890194d4d10382484a1": "b6addcd2b1e930e860965fccdce239cd",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/3e/6d63d1ff8b8d3035e9304f050fd3dfae215667": "c935d26851fa45f0cbdfbc1b8ade3fff",
".git/objects/5f/e66d0e5aefcc1a2d6f8e39053c2dde34865c44": "d311c21f829413554ff7394d951c28f6",
".git/objects/89/dae4ff870a6d7d4bb0ccf5fc5d1f7e56d0614e": "f185acf8a51e643c402b81e1b7cf5aae",
".git/objects/7b/ff81d6d4661df76569afa0e597295a6f531e70": "5bce14016d171acb400a05b822eccedd",
".git/objects/7b/0a844e5cfe079ceb309b655064d51f6600143e": "b83b5416ccc6d624771726d8d709321b",
".git/objects/b5/868884e193a16d20ba7ef0b012ff7ce27bbb1d": "1328a393c23ee184beed6f343895ac11",
".git/objects/cf/0485fc0f008c10a46b782724d09b09c380f5ea": "d56996c4231c76d913b0f85301ccdc2f",
".git/objects/cf/3cbba6dc639b66945069febd7813c5c4e520bd": "baa8f381c1e468099493933fcd5626d4",
".git/objects/7a/02b65b4b3c75b63851def85dbcf7fadf413275": "4d49fb7ab681a8256e1f5124307dc07c",
".git/objects/8a/d8cbbde8acbea262a64be931c558e91d4e2fcc": "17d4f29e9e3b07c06744c99ada4dd024",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/849f41fb7ae0744b9374b85d9284b8b2728955": "59dbfa6f5cf51b8c84d4fa805f904c6a",
".git/objects/72/128df48d19b333281f677b3b05e35ad9aab4ec": "a518512c953edf44fd32788eb5bfe06b",
".git/objects/ea/ee482b3b6dedb8f950fefd5300990ad8ab7495": "4bac254751fac51bf9eaab8a7954e1fe",
".git/objects/c1/4339ffe4b8b134c7caf178f5577e92258c729e": "51b8e37a6d738b8193dd6d7547e132c3",
".git/objects/c2/a9c578a8c887e29c7203bb1aca527baae3f59e": "59ac58a77f811a22318aca472c29896c",
".git/objects/76/a1f8f9c78b9c184b72a2a1e118809cb545a24d": "0e9dbe269075653fc0c00d6c55c921d7",
".git/objects/63/f6d90e4ed526bd5f9d44645dc25715711c5088": "da32028e0332c9f66ffa8822f9da4f75",
".git/objects/f4/e295d3014825b8cf7e691164acdedf1b921db4": "6097ec90340aa94fdde1e4d325f0203e",
".git/objects/e2/d47199505df600d8c9ccb290653678c40aac0b": "74cb28a9543754894ee5cf9f0c5f48c6",
".git/objects/17/7bb86c9a77b94f808b9a0124a5f3e0799c03df": "36dfed6574a33db78c93c863954046e8",
".git/objects/7d/562885505e8c74893f6dc544d01ce5eae67468": "dc14e1c7cf4bea13cb0ae2465bc80f95",
".git/objects/f5/ac226075e6d362860771587fdc39b45026a0d5": "e7e06ca274fa894e570ad64ca2d2a3a7",
".git/objects/09/404e8b12c39efe5ee75b16f5616a221a0a6ef4": "b16adb32641edfb56166a49c2f2eeed4",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/e0c82f6acac002889273d50ba77e50d8000502": "9ed2bea190cf1a97f09327c571c6ef9a",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/2a/a5f1d6ceed4075fe5c2309bc041d411523c47d": "1a1421e18d07daedc4730182dc02e46c",
".git/objects/96/d6ee402b92461cf08862c068f95dbf89885c17": "b45f0bee4092a1b4bcecf3abfb64d08d",
".git/objects/96/a34ae2b563e30243615bba6857aeba28dc82ed": "8db114c5af673eed907fae52c7d494d5",
".git/objects/96/3b79eeef3a58e6a89322f4c900d285e0100982": "3574674f1bf2ba9b0f43c78bb90d205b",
".git/objects/d1/2efc2c72395fc1761c2611173e8302f999aeae": "4522d6d6571d596e0e733a53098a14de",
".git/objects/d1/f3f33fd0315d15861c5a771808b7f621e93fec": "29469d529236a28e4115142a4b8f6454",
".git/objects/77/0f0126e9fab2ad798a5c1814bdfa746af04174": "6ae5c74d34d4463a5b8af9b305b5f5b2",
".git/objects/77/af8f88f40f28d6ac06178d53ca35e62939b2d0": "947d0653437e92c3015db7471fa94968",
".git/ORIG_HEAD": "2810e87ac645983212cf7fff124ff358",
".git/index": "6844ba8691f39dabc4f087e0ad54841a",
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
".git/COMMIT_EDITMSG": "31b4ec8b0ad5044fb14110de881f6c08",
".git/refs/heads/main": "a40e5ecd72700e6f821392a9b73fab3d",
".git/refs/remotes/origin/main": "a40e5ecd72700e6f821392a9b73fab3d",
"README.md": "572917a1407b7006d4a0b3fc05c681dc",
"index.html": "0b5a369315bf8355ea4b6dd8ffb3d284",
"/": "0b5a369315bf8355ea4b6dd8ffb3d284",
"CNAME": "2dd0d0b58bb5590409733a3b4d9c1acc",
"icons/Icon-192.png": "c516ee9beed5004924f92ba920b92450",
"icons/Icon-512.png": "864d383bc05b14a77f25544e655adff9",
"version.json": "7a2f38a1655ec6a5c1635886a8175fa7",
"manifest.json": "f033b191868f975fcfb0ec0056398018",
"assets/AssetManifest.json": "c09b7350613bd41ba7d8760f6ecd9d2c",
"assets/NOTICES": "d8f3de96b416be8f28cc60e2f0778bf8",
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
"assets/assets/images/banner.jpeg": "b963e969c501f5a5626afebf617f7447",
"assets/assets/images/6.jpeg": "2f5c8b2847152d960d75c6fe5e0739c8",
"assets/assets/images/mobile.png": "8ff9206045093b6b1fc4a6c2b28f52b8",
"assets/assets/images/2.jpeg": "4c2ff156e1a1e93acf31a15815b5bd47",
"assets/assets/images/8.png": "1dfb33a71734ca9123875cfdd725032a",
"assets/assets/images/7.jpeg": "354bdb3b5a2252471ad69f70a3679fca",
"assets/assets/images/1.jpeg": "4ce0f285c7e1c7bef69b11b2c4f5ce68",
"assets/assets/images/4.jpeg": "beb4fb9b176498eb2ea3c6363980e205",
"assets/loading.gif": "e98d92abd013504b8c129fa12069c9d2",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"404.html": "aeb3bbc7fab123bb6bc81e5bb3e3846b"
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
