if(!self.define){let s,i={};const l=(l,c)=>(l=new URL(l+".js",c).href,i[l]||new Promise((i=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=i,document.head.appendChild(s)}else s=l,importScripts(l),i()})).then((()=>{let s=i[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(c,n)=>{const u=s||("document"in self?document.currentScript.src:"")||location.href;if(i[u])return;let r={};const t=s=>l(s,u),e={module:{uri:u},exports:r,require:t};i[u]=Promise.all(c.map((s=>e[s]||t(s)))).then((s=>(n(...s),r)))}}define(["./workbox-25afbd6a"],(function(s){"use strict";s.setCacheNameDetails({prefix:"admin-plus"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"index.html",revision:"8525c8b37387985e3e5f78962dd23f85"},{url:"json/china.json",revision:"32a9d07a4892a8ad7666cb6c4d1a4bdb"},{url:"manifest.json",revision:"76b3625bb9dd0cf9b7e3873b860c21ed"},{url:"static/css/1019.81aab438.css",revision:null},{url:"static/css/1022.dfdec098.css",revision:null},{url:"static/css/104.a6aa434e.css",revision:null},{url:"static/css/1127.c2f02b07.css",revision:null},{url:"static/css/126.0a57c838.css",revision:null},{url:"static/css/1357.1dc68ddf.css",revision:null},{url:"static/css/1426.81aab438.css",revision:null},{url:"static/css/1440.ecfe03e8.css",revision:null},{url:"static/css/1499.96ef8efe.css",revision:null},{url:"static/css/1860.9695f869.css",revision:null},{url:"static/css/1921.eb212323.css",revision:null},{url:"static/css/1934.51760896.css",revision:null},{url:"static/css/194.fea04deb.css",revision:null},{url:"static/css/1972.a17eba0d.css",revision:null},{url:"static/css/2054.95bd3ba9.css",revision:null},{url:"static/css/2127.32745f4c.css",revision:null},{url:"static/css/213.4bbb511b.css",revision:null},{url:"static/css/222.cabeacdd.css",revision:null},{url:"static/css/2221.d147db46.css",revision:null},{url:"static/css/2242.fde071d7.css",revision:null},{url:"static/css/2253.4720fbef.css",revision:null},{url:"static/css/235.cef8fe15.css",revision:null},{url:"static/css/2371.1d981147.css",revision:null},{url:"static/css/2548.0dfe7bc6.css",revision:null},{url:"static/css/2553.96ef8efe.css",revision:null},{url:"static/css/2782.81aab438.css",revision:null},{url:"static/css/2802.96ef8efe.css",revision:null},{url:"static/css/2841.599bea43.css",revision:null},{url:"static/css/2847.84c2f75c.css",revision:null},{url:"static/css/2853.3f63c668.css",revision:null},{url:"static/css/287.df862185.css",revision:null},{url:"static/css/2881.96ef8efe.css",revision:null},{url:"static/css/2939.68e2049b.css",revision:null},{url:"static/css/2970.d89624fb.css",revision:null},{url:"static/css/2971.efe6ec7f.css",revision:null},{url:"static/css/2981.1fc4c9b5.css",revision:null},{url:"static/css/3086.96ef8efe.css",revision:null},{url:"static/css/3211.182b8f29.css",revision:null},{url:"static/css/3239.e525694c.css",revision:null},{url:"static/css/3321.7a5309d0.css",revision:null},{url:"static/css/335.96ef8efe.css",revision:null},{url:"static/css/3356.81aab438.css",revision:null},{url:"static/css/3375.e6d895a4.css",revision:null},{url:"static/css/346.bcdf2934.css",revision:null},{url:"static/css/3480.2d942ce3.css",revision:null},{url:"static/css/3599.81aab438.css",revision:null},{url:"static/css/3614.c99fb4c1.css",revision:null},{url:"static/css/3619.499f4e1f.css",revision:null},{url:"static/css/3718.9f4206e1.css",revision:null},{url:"static/css/3782.68e2049b.css",revision:null},{url:"static/css/3804.5211ab44.css",revision:null},{url:"static/css/3865.81aab438.css",revision:null},{url:"static/css/3875.66cc5758.css",revision:null},{url:"static/css/3878.48dd86ca.css",revision:null},{url:"static/css/3939.9ea7055d.css",revision:null},{url:"static/css/3963.81aab438.css",revision:null},{url:"static/css/4070.d7225660.css",revision:null},{url:"static/css/4151.ada63570.css",revision:null},{url:"static/css/4422.138a0e03.css",revision:null},{url:"static/css/4479.16955d1b.css",revision:null},{url:"static/css/452.35a96c77.css",revision:null},{url:"static/css/4552.b2aa2d37.css",revision:null},{url:"static/css/4634.4720fbef.css",revision:null},{url:"static/css/4682.2dd25eb8.css",revision:null},{url:"static/css/4790.b4bde06f.css",revision:null},{url:"static/css/4927.bd9eac4e.css",revision:null},{url:"static/css/4967.a281335f.css",revision:null},{url:"static/css/4993.78aa2fb4.css",revision:null},{url:"static/css/5035.192388c0.css",revision:null},{url:"static/css/5041.69e13d49.css",revision:null},{url:"static/css/5050.7b5ce752.css",revision:null},{url:"static/css/5170.8ef396cb.css",revision:null},{url:"static/css/5222.599bea43.css",revision:null},{url:"static/css/5523.eb5091ad.css",revision:null},{url:"static/css/5535.f1c570ef.css",revision:null},{url:"static/css/567.6171e32e.css",revision:null},{url:"static/css/5796.de5f8f8d.css",revision:null},{url:"static/css/5837.c4e33517.css",revision:null},{url:"static/css/5870.35b87612.css",revision:null},{url:"static/css/589.b54e7013.css",revision:null},{url:"static/css/5901.eaa2e529.css",revision:null},{url:"static/css/5964.96ef8efe.css",revision:null},{url:"static/css/6000.499f4e1f.css",revision:null},{url:"static/css/6060.40e47662.css",revision:null},{url:"static/css/627.5e1d03cf.css",revision:null},{url:"static/css/6307.3a26b61c.css",revision:null},{url:"static/css/6309.96ef8efe.css",revision:null},{url:"static/css/6317.d9970146.css",revision:null},{url:"static/css/6332.91a26582.css",revision:null},{url:"static/css/6344.d7b02499.css",revision:null},{url:"static/css/6434.d091e92f.css",revision:null},{url:"static/css/6527.1d2798ce.css",revision:null},{url:"static/css/6533.96ef8efe.css",revision:null},{url:"static/css/657.e59f2447.css",revision:null},{url:"static/css/6583.f2a5b056.css",revision:null},{url:"static/css/6622.102c4adb.css",revision:null},{url:"static/css/6656.96ef8efe.css",revision:null},{url:"static/css/6675.20a8f5e5.css",revision:null},{url:"static/css/669.71ed3c95.css",revision:null},{url:"static/css/6744.698da75e.css",revision:null},{url:"static/css/6910.96ef8efe.css",revision:null},{url:"static/css/7006.6dd7f3e6.css",revision:null},{url:"static/css/705.ff63e327.css",revision:null},{url:"static/css/7162.f6f65cdd.css",revision:null},{url:"static/css/7182.96ef8efe.css",revision:null},{url:"static/css/7272.96ef8efe.css",revision:null},{url:"static/css/7282.6638f454.css",revision:null},{url:"static/css/7425.d2eea675.css",revision:null},{url:"static/css/7443.13a1ca38.css",revision:null},{url:"static/css/7461.96ef8efe.css",revision:null},{url:"static/css/7464.ebebd4da.css",revision:null},{url:"static/css/7472.81aab438.css",revision:null},{url:"static/css/7495.1aa10634.css",revision:null},{url:"static/css/7535.68e2049b.css",revision:null},{url:"static/css/7595.c1e2c391.css",revision:null},{url:"static/css/7619.00325683.css",revision:null},{url:"static/css/7673.81aab438.css",revision:null},{url:"static/css/7787.81aab438.css",revision:null},{url:"static/css/7813.fea04deb.css",revision:null},{url:"static/css/7899.4bddd355.css",revision:null},{url:"static/css/7904.f21040fd.css",revision:null},{url:"static/css/7916.1e238329.css",revision:null},{url:"static/css/7938.7735e8a6.css",revision:null},{url:"static/css/8225.f21040fd.css",revision:null},{url:"static/css/827.6db0bf75.css",revision:null},{url:"static/css/8311.c1368562.css",revision:null},{url:"static/css/8447.9d9bd697.css",revision:null},{url:"static/css/8459.ff859e27.css",revision:null},{url:"static/css/8493.8189eb97.css",revision:null},{url:"static/css/8547.70bd3064.css",revision:null},{url:"static/css/8572.e1951d90.css",revision:null},{url:"static/css/8590.46589700.css",revision:null},{url:"static/css/8648.a988483c.css",revision:null},{url:"static/css/8730.e1951d90.css",revision:null},{url:"static/css/8941.96ef8efe.css",revision:null},{url:"static/css/8964.f2a5b056.css",revision:null},{url:"static/css/9046.96ef8efe.css",revision:null},{url:"static/css/906.81aab438.css",revision:null},{url:"static/css/9082.ba8148bd.css",revision:null},{url:"static/css/9096.f6ceb224.css",revision:null},{url:"static/css/9110.4b125f38.css",revision:null},{url:"static/css/9138.81aab438.css",revision:null},{url:"static/css/9337.4dfe8a55.css",revision:null},{url:"static/css/9343.9f289861.css",revision:null},{url:"static/css/9416.869959e7.css",revision:null},{url:"static/css/9466.e43861b5.css",revision:null},{url:"static/css/9490.25bdf978.css",revision:null},{url:"static/css/9586.998c6ca2.css",revision:null},{url:"static/css/9678.49ba0a57.css",revision:null},{url:"static/css/9779.aa1713d8.css",revision:null},{url:"static/css/9869.96ef8efe.css",revision:null},{url:"static/css/988.7ebb23fc.css",revision:null},{url:"static/css/9928.81aab438.css",revision:null},{url:"static/css/app.1539799b.css",revision:null},{url:"static/css/element-plus.d4686f58.css",revision:null},{url:"static/css/loading.css",revision:"deb843e8a179e15d936633e759d8d308"},{url:"static/fonts/remixicon.31d28485.f12fd1a0.eot",revision:null},{url:"static/fonts/remixicon.881fbc46.1e0fb76b.woff",revision:null},{url:"static/fonts/remixicon.888e61f0.e313410c.ttf",revision:null},{url:"static/fonts/remixicon.9915fef9.5400338c.woff2",revision:null},{url:"static/img/403.0b4fa510.png",revision:null},{url:"static/img/404.0c0cb43f.png",revision:null},{url:"static/img/background-1.3b338144.png",revision:null},{url:"static/img/background.d7764eb5.jpg",revision:null},{url:"static/img/login_form.be4a23a8.png",revision:null},{url:"static/img/mobile.0f467dc7.png",revision:null},{url:"static/img/remixicon.95138f36.2b2ee314.svg",revision:null},{url:"static/img/user.2e7840a2.png",revision:null},{url:"static/js/1005.6723c9e8.js",revision:null},{url:"static/js/1019.b568f33b.js",revision:null},{url:"static/js/1022.e6d8a18f.js",revision:null},{url:"static/js/104.d894b452.js",revision:null},{url:"static/js/1127.328a0535.js",revision:null},{url:"static/js/126.9c3e3c00.js",revision:null},{url:"static/js/1357.bd95e9ba.js",revision:null},{url:"static/js/1426.46ae29d5.js",revision:null},{url:"static/js/1440.f14efee5.js",revision:null},{url:"static/js/1499.beb1b465.js",revision:null},{url:"static/js/1860.041b24f9.js",revision:null},{url:"static/js/1934.d9bc2580.js",revision:null},{url:"static/js/194.5638afd1.js",revision:null},{url:"static/js/1972.c0c5aa98.js",revision:null},{url:"static/js/2054.8b331920.js",revision:null},{url:"static/js/2127.14ab6447.js",revision:null},{url:"static/js/213.16997d64.js",revision:null},{url:"static/js/222.1d8f6ea7.js",revision:null},{url:"static/js/2221.b994cec6.js",revision:null},{url:"static/js/2242.5b7ffa8a.js",revision:null},{url:"static/js/2253.df5dc0ad.js",revision:null},{url:"static/js/235.0e089db4.js",revision:null},{url:"static/js/2371.8bb7ee27.js",revision:null},{url:"static/js/2548.f821c6e6.js",revision:null},{url:"static/js/2553.4dbf3ca2.js",revision:null},{url:"static/js/2597.1ae72a6d.js",revision:null},{url:"static/js/2782.aa12f8ef.js",revision:null},{url:"static/js/2802.3368e4ee.js",revision:null},{url:"static/js/2841.2def6665.js",revision:null},{url:"static/js/2847.167414b2.js",revision:null},{url:"static/js/287.079f9eeb.js",revision:null},{url:"static/js/2881.3670fddd.js",revision:null},{url:"static/js/2939.4514a0d7.js",revision:null},{url:"static/js/2969.f0f2025a.js",revision:null},{url:"static/js/2970.4793414b.js",revision:null},{url:"static/js/2971.e847110c.js",revision:null},{url:"static/js/2981.422ce9e0.js",revision:null},{url:"static/js/3086.77dcef88.js",revision:null},{url:"static/js/3193.498ff7d1.js",revision:null},{url:"static/js/3211.1a8cd336.js",revision:null},{url:"static/js/3239.20e27700.js",revision:null},{url:"static/js/3321.81597dda.js",revision:null},{url:"static/js/335.96b6adbf.js",revision:null},{url:"static/js/3356.2473a0b2.js",revision:null},{url:"static/js/3375.488fa65c.js",revision:null},{url:"static/js/346.ac7e3bda.js",revision:null},{url:"static/js/3599.dd7ddac6.js",revision:null},{url:"static/js/3614.40ffc268.js",revision:null},{url:"static/js/3619.8c06a436.js",revision:null},{url:"static/js/3624.b2edd635.js",revision:null},{url:"static/js/3684.9204d612.js",revision:null},{url:"static/js/3718.861e5b36.js",revision:null},{url:"static/js/372.a0c4ad17.js",revision:null},{url:"static/js/3782.655f6b60.js",revision:null},{url:"static/js/3804.c9389d53.js",revision:null},{url:"static/js/3865.7ce450ae.js",revision:null},{url:"static/js/3875.3e9b02f0.js",revision:null},{url:"static/js/3878.ae4bd704.js",revision:null},{url:"static/js/3888.2cc22b69.js",revision:null},{url:"static/js/3939.fdccf984.js",revision:null},{url:"static/js/3963.1f173094.js",revision:null},{url:"static/js/405.f98ffbbf.js",revision:null},{url:"static/js/4070.522f6b03.js",revision:null},{url:"static/js/4139.240a19c9.js",revision:null},{url:"static/js/4151.aeee5575.js",revision:null},{url:"static/js/4300.cb34dda8.js",revision:null},{url:"static/js/4422.6e498700.js",revision:null},{url:"static/js/4479.7532c8fb.js",revision:null},{url:"static/js/452.a81ce6af.js",revision:null},{url:"static/js/4552.33baa9b9.js",revision:null},{url:"static/js/4634.80292a11.js",revision:null},{url:"static/js/4682.e4e55018.js",revision:null},{url:"static/js/4790.68af1200.js",revision:null},{url:"static/js/4901.1b3a1e62.js",revision:null},{url:"static/js/4927.efeb592c.js",revision:null},{url:"static/js/4967.d581e9b2.js",revision:null},{url:"static/js/4978.03a4a0cc.js",revision:null},{url:"static/js/4993.5fd0865a.js",revision:null},{url:"static/js/5011.3ef23d10.js",revision:null},{url:"static/js/5035.441c9543.js",revision:null},{url:"static/js/5041.a73c0103.js",revision:null},{url:"static/js/5050.9a4fc058.js",revision:null},{url:"static/js/5169.708d57ef.js",revision:null},{url:"static/js/5170.cdaca608.js",revision:null},{url:"static/js/5222.907aad93.js",revision:null},{url:"static/js/5523.cd191f5b.js",revision:null},{url:"static/js/5535.c11a9373.js",revision:null},{url:"static/js/567.80fbe88f.js",revision:null},{url:"static/js/5796.e9bb8ea1.js",revision:null},{url:"static/js/5837.b0a6c255.js",revision:null},{url:"static/js/5870.e936632f.js",revision:null},{url:"static/js/589.7cb94127.js",revision:null},{url:"static/js/5901.bea1dd37.js",revision:null},{url:"static/js/5964.b2952d10.js",revision:null},{url:"static/js/6000.1ed87880.js",revision:null},{url:"static/js/6035.66cc3d1c.js",revision:null},{url:"static/js/6060.bb87b143.js",revision:null},{url:"static/js/6148.bc95e204.js",revision:null},{url:"static/js/6181.89a9a434.js",revision:null},{url:"static/js/627.c61fc30c.js",revision:null},{url:"static/js/6307.651f2331.js",revision:null},{url:"static/js/6309.3e7d793c.js",revision:null},{url:"static/js/6317.70e1dc33.js",revision:null},{url:"static/js/6332.747d5e03.js",revision:null},{url:"static/js/6344.601910b6.js",revision:null},{url:"static/js/6434.388caa11.js",revision:null},{url:"static/js/6527.0d8e5140.js",revision:null},{url:"static/js/6533.6b10bcdd.js",revision:null},{url:"static/js/657.17575949.js",revision:null},{url:"static/js/6581.fbb1c41d.js",revision:null},{url:"static/js/6583.3100ecc9.js",revision:null},{url:"static/js/6622.94f71b28.js",revision:null},{url:"static/js/6656.edfc720b.js",revision:null},{url:"static/js/6675.63e4f205.js",revision:null},{url:"static/js/669.2e9c98a9.js",revision:null},{url:"static/js/6705.c23a860d.js",revision:null},{url:"static/js/6744.e69d56bd.js",revision:null},{url:"static/js/6763.e7cb1ea7.js",revision:null},{url:"static/js/6910.2e9bf61c.js",revision:null},{url:"static/js/7006.75f9b3bb.js",revision:null},{url:"static/js/705.df900eb1.js",revision:null},{url:"static/js/7162.a7a14d92.js",revision:null},{url:"static/js/7182.9324d76a.js",revision:null},{url:"static/js/7272.52cba0d6.js",revision:null},{url:"static/js/7282.f3978f63.js",revision:null},{url:"static/js/7425.557abff9.js",revision:null},{url:"static/js/7443.5bfdca0a.js",revision:null},{url:"static/js/7461.c99d3ced.js",revision:null},{url:"static/js/7472.ae0d35a9.js",revision:null},{url:"static/js/7495.c7da7eef.js",revision:null},{url:"static/js/7506.79da1b92.js",revision:null},{url:"static/js/7535.876fbcf5.js",revision:null},{url:"static/js/7581.0c4264ca.js",revision:null},{url:"static/js/7595.92bd231d.js",revision:null},{url:"static/js/7638.ec7af11d.js",revision:null},{url:"static/js/7673.e6da931a.js",revision:null},{url:"static/js/7787.7b71cf02.js",revision:null},{url:"static/js/7813.5c07315a.js",revision:null},{url:"static/js/7899.f2d89074.js",revision:null},{url:"static/js/7916.bbbf6b17.js",revision:null},{url:"static/js/7931.d5803dd4.js",revision:null},{url:"static/js/7938.2827e59e.js",revision:null},{url:"static/js/7991.5ce870f3.js",revision:null},{url:"static/js/8184.0885c4d2.js",revision:null},{url:"static/js/8225.a5659cb7.js",revision:null},{url:"static/js/827.8c8edaf1.js",revision:null},{url:"static/js/8311.510fb304.js",revision:null},{url:"static/js/8344.4d1d64f4.js",revision:null},{url:"static/js/8447.4ba11935.js",revision:null},{url:"static/js/8459.ee9fc771.js",revision:null},{url:"static/js/8493.2c2986fb.js",revision:null},{url:"static/js/8501.a0bb7d38.js",revision:null},{url:"static/js/8547.9d79f99e.js",revision:null},{url:"static/js/8590.482d2d36.js",revision:null},{url:"static/js/8648.bbf0b17d.js",revision:null},{url:"static/js/8730.97661e9c.js",revision:null},{url:"static/js/882.abf0145d.js",revision:null},{url:"static/js/8837.bff6d3cf.js",revision:null},{url:"static/js/8941.305e704a.js",revision:null},{url:"static/js/8964.1c84520a.js",revision:null},{url:"static/js/9024.7e7c260b.js",revision:null},{url:"static/js/9046.3e98f5be.js",revision:null},{url:"static/js/906.c8ce950b.js",revision:null},{url:"static/js/9082.414f6932.js",revision:null},{url:"static/js/9096.8df67efe.js",revision:null},{url:"static/js/9110.35cc031b.js",revision:null},{url:"static/js/9138.55f9aaf2.js",revision:null},{url:"static/js/9189.9856e170.js",revision:null},{url:"static/js/9337.b8b97549.js",revision:null},{url:"static/js/9343.1b459472.js",revision:null},{url:"static/js/9415.e55424b2.js",revision:null},{url:"static/js/9416.4909e9f7.js",revision:null},{url:"static/js/9466.37017e11.js",revision:null},{url:"static/js/9490.2ef54b62.js",revision:null},{url:"static/js/9586.167d004d.js",revision:null},{url:"static/js/9678.66846f04.js",revision:null},{url:"static/js/9689.1fddedae.js",revision:null},{url:"static/js/9779.43939172.js",revision:null},{url:"static/js/9869.23a8243f.js",revision:null},{url:"static/js/988.b6ab3ce0.js",revision:null},{url:"static/js/9928.f8f7a2f2.js",revision:null},{url:"static/js/app.31a939fa.js",revision:null},{url:"static/js/element-plus.2af4f3ce.js",revision:null},{url:"static/js/vab-chunk-06cc3d7a.2f9ceeaf.js",revision:null},{url:"static/js/vab-chunk-38a5945b.a438f07c.js",revision:null},{url:"static/js/vab-chunk-46fad5cf.13f9218f.js",revision:null},{url:"static/js/vab-chunk-6d9e887a.faffb4d7.js",revision:null},{url:"static/js/vab-chunk-8472e8e8.d694cded.js",revision:null},{url:"static/js/vab-chunk-a1a9c712.7b7a4947.js",revision:null},{url:"static/js/vab-chunk-ab8f4994.5c05b598.js",revision:null},{url:"static/js/vab-chunk-ad1faa74.04154619.js",revision:null},{url:"static/js/vab-chunk-ad5b1b1e.d2420caf.js",revision:null},{url:"static/js/vab-chunk-b25886d6.4bc56389.js",revision:null},{url:"static/js/vab-chunk-b4d5e0bd.a79c0691.js",revision:null},{url:"static/js/vab-chunk-c1b8f04b.da9938af.js",revision:null},{url:"static/js/vab-chunk-fa70753b.3aa95762.js",revision:null},{url:"static/js/vab-chunk-fb83519c.29aa5458.js",revision:null},{url:"static/js/vab-plugins.d33064f0.js",revision:null},{url:"static/js/vue.53a39f63.js",revision:null}],{})}));
