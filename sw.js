if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let d={};const o=e=>i(e,t),l={module:{uri:t},exports:d,require:o};s[t]=Promise.all(n.map((e=>l[e]||o(e)))).then((e=>(r(...e),d)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-48ae38ac.css",revision:null},{url:"assets/index-f7877ede.js",revision:null},{url:"assets/web-vitals-60d3425a.js",revision:null},{url:"index.html",revision:"218d50526d386c552d6dc1ada4f01de6"},{url:"registerSW.js",revision:"e3edacfdb1a5b2d79360d35f306c0da9"},{url:"manifest.webmanifest",revision:"93bdbda0cf9ef65fc7822a13fb67a951"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
