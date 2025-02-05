'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ad9235abb88576f2f435d1507b1a2866",
".git/config": "010540e98776be41e865b7bcfe44572a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f4a273a042faa7e14262b49cf32e13c1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "57befde5d4bc092787bcbde7905f5795",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "737607c3534eba03d5de4a01e799d595",
".git/logs/refs/heads/main": "737607c3534eba03d5de4a01e799d595",
".git/logs/refs/remotes/origin/HEAD": "1626151f5cd2b9fa49e2c290c0dbbe4d",
".git/logs/refs/remotes/origin/main": "b1ec8b0926f099c39ffdb28e71d3560c",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/00/7ddb03314eace54773f840dd08c3c4c415de02": "bd40d1cff4d12279412863871ffefb45",
".git/objects/01/9663a7f322b5b787ea48a9ada43da959bf3579": "b9f1f955209eedb7c0261ecfb9393725",
".git/objects/02/77933ce1fcfc7178a0fe880d3281c8659190e2": "f74aef05c414b1e5984b83b9578112d0",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/03/e736613a750cdd8d4f54bca28844e2d13257cb": "bd840ac16c281d81f004822f55e1db62",
".git/objects/05/7f784370c3d6a4282edc085931ed618a5990d7": "e94b52a7160e9ec339a416a62c01c871",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/0d/c8a934ea219d2430fb4161b337e82de6145537": "49d75e1ef31044829ac8438464d53f58",
".git/objects/0f/c07668a8458638a46853655cbaf93beecbfd91": "95ab8eeb11b3fafa1fa6fa55bc18e57b",
".git/objects/12/28344b5b87013cd17666d72d4b01108e2bfda4": "756b3e848d4bf29f077743aa520b4820",
".git/objects/12/b7b3c40b5c8dd7d90968d43bac7bc673a6c221": "c1ae18fde79c24e596087332de9a1b13",
".git/objects/14/d2b375dc0c2c4aec35b3d9d4bd89d7291c52dd": "ccfdd2e5d5fbb4633b77ee36ca291938",
".git/objects/16/1ae9c74860a4824536db1f30b4cf510de4e9be": "0fb471fe93ba55b7d136217758d8dce8",
".git/objects/1e/1e1d9d95f76d8944d3e8b46584d39a706e0177": "6dca6db9377691956dd8862d115e977f",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2b/7166888e1d813ff8a3e08083e1fbb682be28e3": "ed1c54091074b09c746c514373e988c4",
".git/objects/30/c02757838f65e29b5fa156b45bcc596d913b60": "6caa4510e51032e7352bcb69bd269b5c",
".git/objects/34/336700cbba9fbf3052501e1b25fd20f7a640ed": "84d39a499f10bf9b62a8ee2d23da11f9",
".git/objects/36/ceaca0ae09a4b8480d2f1244f39f9b38241c3a": "b86ac909eec66514a26e38f3aa88a526",
".git/objects/39/3395f4bc3d2b4f71d405593bf44d1d901ee4f8": "118ae9b006e1f7483c555a2281a696ba",
".git/objects/3a/016016f46d7feef170c44772337ab09b2d441f": "00731083d38843f0c94f54698937e133",
".git/objects/3d/e818f6ad180a559d62c69eba3d81cfb9ea3f3b": "f520c4f5567d04535f28569033d4d75a",
".git/objects/3e/6c942233c69f6b30cb8e8cdb4eea44b350586f": "a2e21b1c29619d5ed2b41322316f4ed6",
".git/objects/3f/d8a1ec44dee6fd80718ce6c6f7165a51031b35": "125f13771decb3c0660fc74108565b9c",
".git/objects/41/c96811bf2396d0348113f8702f2b09161ccd05": "86ec1cbfd191d0f106022a448bf3835b",
".git/objects/42/2d3af3c2e57982dad1d93fe56cb32968120183": "0e865477cddbf82c613551aea433a1f3",
".git/objects/4a/5ed1b832fb3df26c3d7cbcbb02227a6b0693c2": "9c60108dd3b170a1df8786d91a0caeae",
".git/objects/51/6ac89eb778580ffe148a1291f855d2cde313e6": "b7d68f28c7800b29fe7dc03d930563a7",
".git/objects/51/a20dd64de9c23aa6b39084757090a57bd317aa": "0ea6afd37a3f71e25ebda2811cd50ea2",
".git/objects/56/34138b9a6820c071266638618393c6002eaabe": "7a98c8fb7f91f034bb1d59615a1e4ffc",
".git/objects/56/7515411b9725eff629f087d78c569a02061755": "5e4ec2c9d727e4f7bbd90f1814bde722",
".git/objects/59/0082e294a064984e789a611932542fac92849f": "b6ef3646afe0c86421bd8fcfe4d60298",
".git/objects/5c/8fa416fc77ad531d073b8ef1833bd9c6c1ed31": "0242610f5ee67d7978ba667cf8c22bdd",
".git/objects/5e/23503b053ce7ec0de82325e997ef1637826dff": "06b3d8b3ce8e1b7de025776b28f957fd",
".git/objects/5e/695f77450ab987025b0b5e5b16707edd33ee18": "5ad62cc85f1eae82ae02679cd69fe283",
".git/objects/62/208dcb92629108800e46d87e42c97ee812621d": "0514e2eacc66e3c1dcc7c1dc903633b3",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/0540b1ddb9150fdac0e7d25f534ae9970522b6": "c5995fa03cc0d2166be89e213a5183dd",
".git/objects/69/305f536e4b29c98f1c386cb35c382e8da7f8e4": "3e22c532f52ae3259cd4a6a9fd93cc77",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/71/4192e2a27e007a08be50632646100f7e625463": "adb2258d3d1c18a8a9cf8cd886224aed",
".git/objects/71/c0f995ee64396f29a3d9ef283b5050f45d6e0f": "aa69ae6032786d8c915bfc9bd1c64c28",
".git/objects/72/057369258ef084bd600c782f1eb5d228fb080c": "a4e4112350b31359706f6066e436ce98",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/76/3ba7fa02c779b86f40a3bcf21dbbd3e7fec227": "202dda87602a2ae2413029eaafd774df",
".git/objects/78/5cc57fe1e48687342f9e3e9e4abaa205431f32": "34b36a000066aa666cab28161e29578d",
".git/objects/7a/eb58bd1b9436a814a50ee3539d38f7668908c8": "0b0114f1c99b0ed9088d544092449113",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/bacd0ca9702ddfe22707846e4468e435fd942c": "22548f5881d85bfe38dff27192a4ad33",
".git/objects/87/abfacf183bf3815d16e2fbdf83309bac177d04": "a9d54e1b453945c189ffdb9700261a02",
".git/objects/88/13348c1a8d4b0bdb4af7084f018f9c33a3cf43": "19856e7c8943abfe8efd20571adc120d",
".git/objects/89/513d94693ae8100315edbb982d7d243f5469f6": "1a977afa8c0dc3ca507a79160ba48a51",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/91/cc93df654e2d3f7daa3800cec28d715032ec4a": "e828997d73ffcd4286b34cd1e0abf867",
".git/objects/93/09a14fe78e7c260604ad6c5273b6d4ba673bc9": "c992eb12386c5a59bbf0b3e13c4eb557",
".git/objects/97/70cdb31a4d12913bccdb281625ec9910132163": "329cf78f2eadce0222968d1e4f4fb987",
".git/objects/97/7594edc125e2e8b324d1bd70c7148b7cd16c91": "417851a0c8f0ac30e8fcc501facb0d20",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9c/37a698784034e3edd868acdfe1bdaf757ff659": "1454b7cf51d686b8016991357d1bdeee",
".git/objects/9e/70be6a9ef052bd26e248428cb4db214663afca": "d5fbd6ae192ce2144bda4b1ab8f84862",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/9f/82ebfcba9ead07b4886e5ddb43c77c6e1cd62b": "1dd8b8d285c283123c97148f18132c0d",
".git/objects/a6/0b8eaf6dd65d9ca1cb54ccd0993168c1e84ecd": "1fe91f45b7fb641772219dd2a2ed6948",
".git/objects/a6/d47db2849edb97fcf633787a0033944f9ca0fc": "9f9ecc45defcab3e55d9477c56ae8f40",
".git/objects/a8/736bb24df14c290f89a86f0483aa4363229875": "9f4957a1403bf32e0f1df7bf6903440a",
".git/objects/a8/cfdec8d443290e4a9a1d82efd03f04b83bc8c4": "a80d89754c787f5d8711ed7f3b4609e3",
".git/objects/aa/2b2e60ed909388e768ff10b4b6400c8fcf72bc": "10162d2fecb8e162118499259769aa53",
".git/objects/ad/57a253a5cdceb4c6f745df686b8a03d53ccd39": "c0ac4f3b08dcb2fa26161439560c5b01",
".git/objects/af/27ec6865cd3c5bde351cb2d2f22dc972b9896c": "1fb2cb4a940150da1e30e7814cd91650",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b0/a125a35143a81e7dedfffd3e2ec699c4828fee": "dcc82ceac22cc2282344132762a03794",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b6/0950ef999e4ffca74ccf66ab009e5e19abc0a3": "6b1b262a4053b6c6ea76e7e6d7ad6d91",
".git/objects/b7/fa33008508becbb409166da06092373653c8cb": "14f5f1f3a590c2c16a91aad6916c0ca1",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/bc/94a1c656ee0359ab523e96fe34f6e50605becd": "6388075f339cf2942f1094d7435a7dd4",
".git/objects/be/67410fd0a5aaf22e118ff0dd3be2dcd441f34c": "6b6267f4eaa77a2f3de6d0252bfef1c8",
".git/objects/c2/438bdb0bdef8e73380f4facfbdbad89a349803": "7690c8eb80dfb62fe6bf5cf44e94f133",
".git/objects/c2/9695b60f3b4d1f2b5892d46cec0f6a8fd3c286": "c14b00a74e480702c4646ad442c14340",
".git/objects/c3/52a20317d010ba708b30507032388c5d9c8c3f": "7c4a7f3bcba00081499eb9a110c52abd",
".git/objects/c3/e23d302c416026dedd3cc7bdaefa9124be16f8": "255333b4f2c0f4211bd4952394dd72e7",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c5/5575e52aa5894ead02a6624d87e6525e1eba27": "617eb2953e00680204a3521d8989e347",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c8/ac383453025db99b4ef1b3cc2b5cbca43c3acb": "78461a35ce09e636e624a90c4266108e",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cc/030a7ff8d51b7f9c5758c1a3ebe40832f2f5cf": "5a265774445a251a415f381e01c75125",
".git/objects/cd/c2f7a85ba23fe23186eadf36b79d9eff86f3ce": "c4a08c02d8659adbd81c625244fccdc1",
".git/objects/cf/f9180659d1c90e93f3d96d835dd8c741074005": "233d6d59c64534779020add110d16324",
".git/objects/d2/f2314b872c249202e7aa647fc59d4ebd3cbab5": "9f5af53b1f0493a823e765c32c027ef7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/f6d1c30ee69083b24b11f95e8c9d8abd0cb08f": "b0d6525a03392364ea3ed9938c3d867d",
".git/objects/d9/959125ffa349bc9091cfde87790c61bbfd0d61": "72e5a7287dafafe8ba8b27bee83cb84c",
".git/objects/db/ad3164b9342b42364b7dd57c5c66f4e86e0010": "46a6f3bc947c562e639bda38d4aac0ef",
".git/objects/dc/2497b5004eeae4a3e2269e6c1b444b1490f158": "86f24263620652641f7f27dfe7b60f77",
".git/objects/de/4c092a8bf3ffaf0212549bb104b6f7f0124e9c": "680d9a1d17efe6ccc78830f1feef762a",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/e1/b3dc8cf197ee9fd7b1ad1daa9951a363827415": "add4070e2de1b92337f1233c9e210889",
".git/objects/e2/6db5dd3dbab6fcdb06f7fd9ab9347ead808f02": "2f6d76624a9dec9c6214eeab0f98202e",
".git/objects/e6/1e8e88bdc98d7edba0ba2a372dfd7b4e5c4b3f": "cdc5a17a6724bfcd899294f948824469",
".git/objects/e7/6ec69a650f1323fe9af6dafc55628ca1afc7e1": "cdc851a64d802b21a07c9e1291833911",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ed/8467f3b9abb42ef542d87a5e31114323163740": "f656ef41648ce8d735274f207fc3b384",
".git/objects/f1/1622116149e93316a34e462094cfbc1d0a1ce9": "ffcb9f30749140103a8e1b0009c19369",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/f45fdf9e20ff3205eac865e24315e65063f066": "f918f772c73f84f4ddb14e8d2db8da39",
".git/objects/f7/8130181c0bc2eaf837d07f217846d2b7921a8a": "705cc81be063587628c2462245297ea5",
".git/objects/fa/1785c009685fe2ebaa2717b620aaab82a3ba9d": "d2fb84d775a9c729af63201afe3c44fb",
".git/objects/fc/fe3e1ea32a7b94ad14a25ea0f309fcf4bf42bd": "5e42f0bdca708a35a2a8b4d6be44c257",
".git/objects/fe/6e59f850933d3dd278fa51ee81eee623b95a90": "6c8e6cd736564ba3961554544af0c976",
".git/objects/ff/cc05d0d974e87b52e6a65e86e058786fe86440": "8bfcf42bb79f2bb406e9886781ce4bf4",
".git/objects/pack/pack-6e4498c9ff77c14d1c1b4da45c0ba80004f8f36b.idx": "d5f8dd1e622b87ab671d671396e9eb76",
".git/objects/pack/pack-6e4498c9ff77c14d1c1b4da45c0ba80004f8f36b.pack": "f6818726b0fb5c4c63208d6c7feb0946",
".git/objects/pack/pack-6e4498c9ff77c14d1c1b4da45c0ba80004f8f36b.rev": "36d42f9948775fb5e55096e868b606a6",
".git/ORIG_HEAD": "358b2f4e206237f4f300701fd209cc26",
".git/packed-refs": "8df4195e4fe35a4b06f4db51acc5ab11",
".git/refs/heads/main": "9824d80e97e8f84453638b8ea319d891",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "9824d80e97e8f84453638b8ea319d891",
"assets/AssetManifest.bin": "e62e12ed89b50741861255552affff8d",
"assets/AssetManifest.bin.json": "f65ed2b9045bf965a1365a9e37c13004",
"assets/AssetManifest.json": "b453ab3a4bee758562537982958a1620",
"assets/FontManifest.json": "0a4b2ed66f93673690e85fe9177f5215",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/fonts/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/fonts/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/fonts/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/fonts/Poppins-ExtraLightitalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/fonts/Poppins-Lightitalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/fonts/Poppins-Mediumitalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/fonts/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/fonts/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/images/backend_development.svg": "5a9067ca3ec3b95822e854dad9fd490a",
"assets/images/c-sharp.svg": "4181f3943f6b1af6f84000c4c87e0280",
"assets/images/dart.svg": "31dd5ace0f85e41a3da95d3f0d28ffe0",
"assets/images/dotnet.svg": "f9dc01ef75f6dd3ffd3129e214d0235c",
"assets/images/figma.svg": "aead4c17e441f56b342ee8074ee7d1cf",
"assets/images/flutter.svg": "9a6e81be6ff5b09956f4f85fe1f0a89f",
"assets/images/github.svg": "515b57616287bb566905f1e82b3a25bf",
"assets/images/linkedin.svg": "c0b1f596616485a024f9782f6779fabf",
"assets/images/location.svg": "5eb884df9d57b0db40bae40644f652d1",
"assets/images/logo.svg": "6948698f8af83a46e7c5b138a3782fbb",
"assets/images/mail.svg": "f6dd81d3fde1ea09b7b9d78dd9c4ddfe",
"assets/images/me.png": "aa9af2a857001b863e74dbf43c17b31b",
"assets/images/memoji.png": "0d362a5e7bc0bc8ec3b3078033af36f0",
"assets/images/phone.svg": "49863840d946db0820d952b0bc2dad4b",
"assets/images/vbnet.svg": "f3f411467b4f0b02141175d398642983",
"assets/images/web_development.svg": "ccbf4d3ed3b31f45748e04309c2258d6",
"assets/NOTICES": "fc2813e7cb8e892c79e90d9e97ee685d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "c0fc20522847ca7d3b5ba948109307df",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "f824187112c48794762f4418a4dc7573",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b3a089ab9fe29e08ea852386308c661d",
"/": "b3a089ab9fe29e08ea852386308c661d",
"main.dart.js": "0a39ab7187ec00628729bfb7479dcf64",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"README.md": "3547a7f69560861df84c49cf5fcab017",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
