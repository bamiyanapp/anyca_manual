/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "edff2439c91fd5b67042e27ed5740ad8"
  },
  {
    "url": "assets/css/0.styles.9ee70a5d.css",
    "revision": "2d76472062b79fe4a84077d3ec50ceb0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.59bef501.js",
    "revision": "87c9d91a1352139ef86184512aa2a5a8"
  },
  {
    "url": "assets/js/11.3355cd57.js",
    "revision": "681e9cdc2030317bef340c8c8efd547a"
  },
  {
    "url": "assets/js/2.363d521c.js",
    "revision": "6f823a8206da2bb6d882eaa53f0b2680"
  },
  {
    "url": "assets/js/3.cbf8ef3a.js",
    "revision": "5e127890a558c609b25ae23ebee2165d"
  },
  {
    "url": "assets/js/4.8efc9fb2.js",
    "revision": "771d7003e68ee37a513aec68792d6a6e"
  },
  {
    "url": "assets/js/5.e7b85e59.js",
    "revision": "14591a1ec6e9aed037ab841397963221"
  },
  {
    "url": "assets/js/6.d59e93a1.js",
    "revision": "c37e8f284102f3c4fab1ec1da90d334e"
  },
  {
    "url": "assets/js/7.6e472555.js",
    "revision": "0bd44e684657317ad2efae64899190d1"
  },
  {
    "url": "assets/js/8.3d7dc162.js",
    "revision": "efab8e031b3154f38e713b024380dcc4"
  },
  {
    "url": "assets/js/9.7824a814.js",
    "revision": "4bec13314fbdbd81bf838aae96634c01"
  },
  {
    "url": "assets/js/app.c5be15c3.js",
    "revision": "8afaa04e7b9b0c1dacd5b74b8c3f56ad"
  },
  {
    "url": "guideline.html",
    "revision": "2ef4a3e07b99abdbd7ffc00a25f242d7"
  },
  {
    "url": "i3.html",
    "revision": "a05123e74c3e70bd47afe69bc3c57794"
  },
  {
    "url": "icon.png",
    "revision": "5b5698a3cb2d912a89c0319ad98dacb6"
  },
  {
    "url": "images/0-1.png",
    "revision": "eeae977f1d64954994b8ead9e086f978"
  },
  {
    "url": "images/0-2.png",
    "revision": "fb9d6ccb2812dc49781bc89ac2df8e62"
  },
  {
    "url": "images/1-1.png",
    "revision": "40e39b06e80c51c278c2424b82c87ed0"
  },
  {
    "url": "images/1-2.png",
    "revision": "48c30fd1ddd898eb823e334a8924ba92"
  },
  {
    "url": "images/1-3.png",
    "revision": "b606497c156b570440eef57f69a011a3"
  },
  {
    "url": "images/1-4.png",
    "revision": "ed27b67ecdcbd747714cafe8924ee87a"
  },
  {
    "url": "images/1-5.png",
    "revision": "6e6daa88148b2fe63ff82f1c6c29feeb"
  },
  {
    "url": "images/1-6.png",
    "revision": "b5c8868b97af0683a7ee165375b2748d"
  },
  {
    "url": "images/1-7.png",
    "revision": "7fa539071146b7a7b3004276b4e1ba53"
  },
  {
    "url": "images/1-8.png",
    "revision": "40d1e6be891867c1845199e333d001e2"
  },
  {
    "url": "images/2-1.png",
    "revision": "1c5ab20f1a5cddfe1b9c3b5534673c30"
  },
  {
    "url": "images/2-10.png",
    "revision": "ea94032126a865f42f4ee1334dfcbf5a"
  },
  {
    "url": "images/2-2.png",
    "revision": "cecb0ed235cbb3aaf5944c04627c329a"
  },
  {
    "url": "images/2-3.png",
    "revision": "b1589e4582baee2b447ed1750b34603f"
  },
  {
    "url": "images/2-4.png",
    "revision": "7dc9ec9e27ab45323b241a5f40c76576"
  },
  {
    "url": "images/2-5.png",
    "revision": "e63052b6aac639463c5d2bbde5e7f6dd"
  },
  {
    "url": "images/2-6.png",
    "revision": "3c4953f818bc1a67b279dad922cc1580"
  },
  {
    "url": "images/2-7.png",
    "revision": "6f406972eba8eb1c5f7dddf86a70ded9"
  },
  {
    "url": "images/2-8.png",
    "revision": "5f9f903fe34138c5155c8a88ed97b8dc"
  },
  {
    "url": "images/2-9.png",
    "revision": "920e9ae82ce715fc5bf83f919cf63604"
  },
  {
    "url": "images/3-1.png",
    "revision": "eeae977f1d64954994b8ead9e086f978"
  },
  {
    "url": "images/3-10.png",
    "revision": "e2c77d6c07f39c56a816b5276c52669b"
  },
  {
    "url": "images/3-11.png",
    "revision": "f392de934e38e45047f3218eef754cb0"
  },
  {
    "url": "images/3-12.png",
    "revision": "1a0a2b8f608f32770a26d0c0a2ba87b7"
  },
  {
    "url": "images/3-13.gif",
    "revision": "6372295b768042be5e30f40c21577c97"
  },
  {
    "url": "images/3-2.png",
    "revision": "75a3e1ee97eb2d2391fefeb27a15a850"
  },
  {
    "url": "images/3-3.png",
    "revision": "2d18d509108edf8c5f909547043b3a3d"
  },
  {
    "url": "images/3-4.png",
    "revision": "968ccbf441f7d89e08464a28efbd585a"
  },
  {
    "url": "images/3-5.png",
    "revision": "82609bf1a18a63e3d1be491e344cd2d0"
  },
  {
    "url": "images/3-6.png",
    "revision": "af690c1329c58324a713ade3d8ee424e"
  },
  {
    "url": "images/3-7.png",
    "revision": "09de8a99a42cc29d0554e3a693bb9ede"
  },
  {
    "url": "images/3-8.png",
    "revision": "ba653405dc75b3ac067efd1dc6acbaaf"
  },
  {
    "url": "images/3-9.png",
    "revision": "a40f3d3e2c9a25c1b51385a41f1279a3"
  },
  {
    "url": "images/4-1.png",
    "revision": "3a4ac88bf7aa3985325fd68d0d4f4e3a"
  },
  {
    "url": "images/4-10.png",
    "revision": "498a2f99a3b8a45f33c50f35f856c078"
  },
  {
    "url": "images/4-11.png",
    "revision": "27bb7ba6915cd1f84227f5d395bf07cb"
  },
  {
    "url": "images/4-12.png",
    "revision": "e1618fd281b0a68bbf24eeedb08dd484"
  },
  {
    "url": "images/4-13.png",
    "revision": "fea19229b55d24af1db1d9b40ac55b62"
  },
  {
    "url": "images/4-14.png",
    "revision": "2abbdc0a6aa21dc1e43a8cf8c2c82be4"
  },
  {
    "url": "images/4-15.png",
    "revision": "63a7a599799140ca66c275ff8412f496"
  },
  {
    "url": "images/4-16.png",
    "revision": "6625743e335e0cf738ab7b91ac426880"
  },
  {
    "url": "images/4-17.png",
    "revision": "302256d495a9494159523be5c8e0447c"
  },
  {
    "url": "images/4-18.png",
    "revision": "c0d91eb330f07c9f5698ed71e34f9972"
  },
  {
    "url": "images/4-19.png",
    "revision": "ce777bf30d854038fb5eff02cbe91edb"
  },
  {
    "url": "images/4-2.png",
    "revision": "abd3344ca032d2ed1e55e6403dfc8868"
  },
  {
    "url": "images/4-20.png",
    "revision": "8ef4c6fd5757ff313a722a4dc0bc566a"
  },
  {
    "url": "images/4-21.png",
    "revision": "f4ff6a97f2cd8348858b8b0fffd49e78"
  },
  {
    "url": "images/4-22.png",
    "revision": "ce422f31bc8418578ce4b8fb1ffbc7cd"
  },
  {
    "url": "images/4-23.png",
    "revision": "175dde68c677d510f70373aa57be4979"
  },
  {
    "url": "images/4-24.gif",
    "revision": "82057c83565c7e073869f5ab6396527a"
  },
  {
    "url": "images/4-3.png",
    "revision": "1a104363cf4e0274b506f90c5fd3b426"
  },
  {
    "url": "images/4-4.png",
    "revision": "6d5da87167d9f69eb055b6f62293b09e"
  },
  {
    "url": "images/4-5.png",
    "revision": "d123b3264ffd65741c59b58ef1856e00"
  },
  {
    "url": "images/4-6.png",
    "revision": "32bf1e323ad730863b7994b9c10e410d"
  },
  {
    "url": "images/4-7.png",
    "revision": "2682178ab630558616325b5c0946da43"
  },
  {
    "url": "images/4-8.png",
    "revision": "ff9c30a80da61cd8663e55aa3fc71d0c"
  },
  {
    "url": "images/4-9.png",
    "revision": "01f9eae67b012af822c109e4fe0e6ae4"
  },
  {
    "url": "images/5-1.png",
    "revision": "1c5ab20f1a5cddfe1b9c3b5534673c30"
  },
  {
    "url": "images/5-10.png",
    "revision": "d6cf0e48b84987e9642bc21a0e7cee9d"
  },
  {
    "url": "images/5-11.png",
    "revision": "f65f4f5be43e454b0e190110c10f7437"
  },
  {
    "url": "images/5-12.png",
    "revision": "a722e08a0fd9ef76c868a4a65bdb2b43"
  },
  {
    "url": "images/5-2.png",
    "revision": "dc0a7dd54ab95e8fe121b78a21ff0608"
  },
  {
    "url": "images/5-3.png",
    "revision": "20ffcd001369a55f08e84bee686daa07"
  },
  {
    "url": "images/5-4.png",
    "revision": "83a308333d1067e0f1b9b9643b539eed"
  },
  {
    "url": "images/5-5.png",
    "revision": "585ed7b536fe7d68f1e06422e205c24c"
  },
  {
    "url": "images/5-6.png",
    "revision": "3f4e0525e0b6edf8e54a99d0949dcd82"
  },
  {
    "url": "images/5-7.png",
    "revision": "233afe742530b6592b0a2c4b2f01ed1e"
  },
  {
    "url": "images/5-8.png",
    "revision": "a77cec1c3bfa22d2e41927d4cbf4602e"
  },
  {
    "url": "images/5-9.png",
    "revision": "362e2a9bb0b1a5f8f3d388edf3c9e7d3"
  },
  {
    "url": "images/6-1.png",
    "revision": "3c7da526749e129a5e9112be8eb74819"
  },
  {
    "url": "images/6-2.png",
    "revision": "849d1279a783ae97985334b5d58e9df2"
  },
  {
    "url": "images/6-3.png",
    "revision": "b6075e40be513cf4f1775f640e5d7040"
  },
  {
    "url": "images/6-4.png",
    "revision": "f301baa94a67988fc25abeebf4bc4937"
  },
  {
    "url": "images/6-5.png",
    "revision": "41c11c019095ed1db20d21cb952ba05c"
  },
  {
    "url": "images/6-6.png",
    "revision": "f8429c651102b69bec6756f923d52deb"
  },
  {
    "url": "images/6-7.png",
    "revision": "b941c9d757f47ba972e951c9daab4518"
  },
  {
    "url": "images/6-8.png",
    "revision": "b536955a9f91f5445cce9423deb5b7c0"
  },
  {
    "url": "index.html",
    "revision": "c334d0252995b1b3653d96f365dfb716"
  },
  {
    "url": "outlander.html",
    "revision": "248bbc63eb8ddc88a322585ffad91566"
  },
  {
    "url": "process.html",
    "revision": "64bfb1e09086d960d126239772821da4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})