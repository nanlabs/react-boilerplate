!function(){"use strict";var e,t,n,r,l,a={3491:function(e,t,n){var r=n(7294),l=n(745),a=n(37),o=n(5538),i=n(6071),c=n(8718);a.ZP.use(o.Z).use(i.Z).use(c.Db).init({fallbackLng:"en",load:"languageOnly",backend:{loadPath:"/react-webpack-boilerplate/locales/{{lng}}/{{ns}}.json",addPath:"/react-webpack-boilerplate/locales/{{lng}}/{{ns}}"},ns:["translations","config"],defaultNS:"translations",debug:!1,interpolation:{escapeValue:!1},react:{defaultTransParent:"div"}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=e=>{e&&e instanceof Function&&n.e(131).then(n.bind(n,2131)).then((({getCLS:t,getFID:n,getFCP:r,getLCP:l,getTTFB:a})=>{t(e),n(e),r(e),l(e),a(e)}))},d=n(9711),m=n(8804);const p=m.F4`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;var u=m.ZP.div`
  animation: ${p} 1s linear infinite;
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #09f;
`,f=n(6974);const v=m.ZP.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
`,h=m.ZP.nav`
  display: flex;
  flex: 1;
  justify-content: center;
  color: black;
  background-color: #fefefe;
  transition: all 0.2s ease-in-out 0s;
  padding: ${({condensed:e})=>e?"20px 0":"40px 0px"};
  box-shadow: ${({condensed:e})=>e?"0 2px 10px 0 rgba(36, 50, 66, 0.075)":"none"};

  .desktop-nav {
    display: flex;
  }

  .mobile-nav {
    display: none;
  }

  @media (max-width: 768px) {
    .desktop-nav {
      display: none;
    }

    .mobile-nav {
      display: flex;
    }
  }
`;var g=(e=20)=>{const[t,n]=(0,r.useState)(!1),l=()=>window.scrollY>=e?n(!0):n(!1);return(0,r.useEffect)((()=>(window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)})),[]),t};const x=m.ZP.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  max-width: 1240px;
  padding: 0 20px;
`,E=m.ZP.div`
  padding-right: 20px;
`,b=m.ZP.ul`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  padding: 0 40px;
`,w=m.ZP.li`
  font-size: 20px;
  font-weight: normal;
  margin: 0 14px;
  cursor: pointer;
  list-style: none;

  a {
    text-decoration: none;
    color: black;
  }
`;var y=n(2327);const C="/",k="/links-examples",P="/api-examples",Z="/users/:userId",z="/powered-by",O="/css-examples";var j=m.ZP.button`
  font-size: 18px;
  color: black;
  border: 2px solid black;
  padding: 10px 40px;
  border-radius: 0px;
  background-color: transparent;
  line-height: 1;
  cursor: pointer;
  transition: all 0.2s linear;
  text-decoration: none;

  &:hover {
    color: #ffffff;
    background-color: #000000;
    border-color: #000000;
  }
`;const L=(e,t)=>Math.floor(Math.random()*(t-e))+e;var $=(e,t,n)=>{const l=(0,r.useRef)(null),a=(0,r.useRef)(e);(0,r.useEffect)((()=>{a.current=e}),[e]),(0,r.useEffect)((()=>{if(t&&n){const e=()=>{l.current&&window.clearTimeout(l.current);const r=L(Number(t),Number(n));l.current=window.setTimeout((()=>{a.current(),e()}),r)};e()}return()=>{l.current&&window.clearTimeout(l.current)}}),[t,n]);return(0,r.useCallback)((function(){l.current&&window.clearTimeout(l.current)}),[])};const V=m.F4`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`,F=m.F4`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`,H=m.ZP.span`
  display: inline-block;
  position: relative;
`,M=m.ZP.span`
  position: absolute;
  display: block;
  z-index: 2;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${V} 700ms forwards;
  }
`,_=m.ZP.svg`
  display: block;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${F} 1000ms linear;
  }
`,A=m.ZP.strong`
  position: relative;
  z-index: 1;
  font-weight: bold;
`;var T=Object.defineProperty,N=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,D=(e,t,n)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const W="#FFC700",U=e=>e[L(0,e.length-1)],R=e=>({id:String(L(1e4,99999)),createdAt:Date.now(),color:e,size:L(15,30),style:{top:L(-50,90)+"%",left:L(-20,100)+"%"}}),B=({size:e,color:t,style:n})=>r.createElement(M,{style:n},r.createElement(_,{width:e,height:e,viewBox:"0 0 68 68",fill:"none"},r.createElement("path",{d:"M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z",fill:t})));var Q=e=>{var t=e,{colors:n=[W],children:l}=t,a=((e,t)=>{var n={};for(var r in e)S.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&N)for(var r of N(e))t.indexOf(r)<0&&I.call(e,r)&&(n[r]=e[r]);return n})(t,["colors","children"]);const[o,i]=r.useState((()=>((e=0,t=0,n=1)=>Array(Math.ceil((t-e)/n)+1).fill(e).map(((e,t)=>e+t*n)))(1,3).map((()=>R(U(n))))));return $((()=>{const e=R(U(n));i([...o,e])}),50,250),$((()=>{const e=Date.now(),t=o.filter((t=>e-t.createdAt<750));i(t)}),50,550),r.createElement(H,((e,t)=>{for(var n in t||(t={}))S.call(t,n)&&D(e,n,t[n]);if(N)for(var n of N(t))I.call(t,n)&&D(e,n,t[n]);return e})({},a),o.map((e=>r.createElement(B,{key:e.id,color:e.color,size:e.size,style:e.style}))),r.createElement(A,null,l))},q=n(5697);const G="#FFFFFF",J=({inverse:e=!1})=>{const t=e?G:"#5D73F5",n=e?G:"#4A4A4A";return r.createElement("svg",{width:"137",height:"28",viewBox:"0 0 137 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M59.8207 21.7313C60.3669 21.7313 60.8729 21.7113 61.298 21.6707C61.6646 21.6427 62.0295 21.5956 62.3911 21.5295V17.8867C62.0522 17.7907 61.7074 17.7166 61.3589 17.665C60.9352 17.6074 60.5077 17.5812 60.08 17.5867C59.6799 17.5893 59.2807 17.6229 58.8858 17.6872C58.5185 17.7433 58.1631 17.8591 57.8336 18.03C57.5411 18.1811 57.2855 18.3939 57.0845 18.6537C56.8765 18.9323 56.7694 19.2726 56.7806 19.6194C56.7806 20.4241 57.0437 20.968 57.5898 21.2901C58.1568 21.5923 58.8851 21.7335 59.8192 21.7335L59.8207 21.7313ZM59.5963 10.502C60.5274 10.502 61.2965 10.6224 61.9445 10.8441C62.5717 11.0657 63.0986 11.3872 63.4827 11.8098C63.8785 12.2311 64.1629 12.7435 64.3106 13.301C64.4773 13.9247 64.559 14.5679 64.5536 15.2133V22.9187C64.0274 22.9992 63.3594 23.1197 62.5093 23.2409C61.6433 23.3635 60.7697 23.4248 59.895 23.4241C59.2296 23.4256 58.5656 23.365 57.9116 23.2431C57.3088 23.137 56.7276 22.933 56.1913 22.6394C55.6983 22.3419 55.2886 21.9256 55.0001 21.429C54.6962 20.9059 54.5542 20.2616 54.5542 19.4569C54.5542 18.7527 54.7162 18.149 55.0194 17.6657C55.3214 17.1845 55.7301 16.7783 56.2143 16.4783C56.7299 16.1628 57.2994 15.9443 57.8945 15.834C58.5271 15.6962 59.1731 15.6288 59.8207 15.633C60.6864 15.633 61.5492 15.7344 62.3911 15.9352V15.3315C62.392 14.9658 62.3513 14.6012 62.27 14.2446C62.1929 13.9006 62.0407 13.5777 61.8241 13.2988C61.5785 13.0029 61.2664 12.7685 60.9131 12.6145C60.5281 12.4534 60.0429 12.3529 59.4357 12.3529C58.7635 12.348 58.0921 12.4019 57.4293 12.514C56.9838 12.5903 56.5442 12.698 56.114 12.8362L55.851 11.0251C56.1546 10.8842 56.6607 10.7635 57.3691 10.663C58.1073 10.5555 58.8524 10.5017 59.5985 10.502",fill:n}),r.createElement("path",{d:"M77.6286 18.8726L71.4756 6.45508H68.8643V22.9181H71.0305V10.4999L77.1835 22.9181H79.7948V6.45508H77.6286V18.8726Z",fill:n}),r.createElement("path",{d:"M49.3324 18.8726L43.1794 6.45508H42.7544H40.5889V22.9181H42.7544V10.4999L48.8873 22.9181H51.4986V6.45508H49.3324V18.8726Z",fill:n}),r.createElement("path",{d:"M85.9678 6.45508H84.6518V22.9181H92.7889V21.7307V21.6302H85.9678V6.45508Z",fill:n}),r.createElement("path",{d:"M101.31 6.45508L96.0474 22.9181H97.4036L98.7798 18.39H105.034L106.451 22.9181H107.807L102.524 6.45508H101.31ZM101.917 8.56838L104.65 17.1021H99.1848L101.917 8.56838Z",fill:n}),r.createElement("path",{d:"M118.11 14.3246C118.785 14.0569 119.358 13.5852 119.749 12.976C120.134 12.3524 120.336 11.6076 120.336 10.7593C120.336 9.35018 119.951 8.26397 119.182 7.53909C118.413 6.81422 117.28 6.45215 115.782 6.45215H111.592V22.9152H116.268C117.725 22.9152 118.838 22.4925 119.627 21.6672C120.416 20.8418 120.801 19.715 120.801 18.2682C120.801 17.2817 120.558 16.4364 120.052 15.7122C119.566 14.9876 118.918 14.5248 118.109 14.3238L118.11 14.3246ZM115.903 13.76H112.968V7.76299H115.802C116.854 7.76299 117.664 8.00461 118.19 8.48786C118.716 8.97111 118.959 9.7152 118.959 10.7423C118.959 11.7487 118.696 12.5157 118.17 13.0167C117.624 13.4999 116.875 13.7615 115.903 13.7615V13.76ZM116.328 21.6502H112.969V15.0687H116.531C117.442 15.0886 118.171 15.3908 118.677 15.9553C119.183 16.5199 119.446 17.3039 119.446 18.2903C119.446 19.3366 119.163 20.162 118.616 20.7457C118.049 21.3494 117.278 21.6517 116.328 21.6517",fill:n}),r.createElement("path",{d:"M134.12 16.6792C133.785 16.0527 133.298 15.5193 132.703 15.1275C132.075 14.6842 131.144 14.2615 129.91 13.8595C128.696 13.4568 127.805 12.9943 127.258 12.4911C126.712 11.9879 126.449 11.3435 126.449 10.5388C126.449 9.69352 126.732 8.98712 127.319 8.44549C127.886 7.90239 128.696 7.64081 129.708 7.64081C130.74 7.64081 131.57 7.96298 132.16 8.62726C132.767 9.2913 133.071 10.1568 133.071 11.2238V11.3058H134.504V11.2253C134.504 9.79623 134.058 8.60879 133.166 7.68293C132.274 6.77702 131.122 6.31445 129.725 6.31445C128.349 6.31445 127.216 6.71716 126.366 7.50189C125.496 8.28662 125.051 9.33367 125.051 10.581C125.051 11.8489 125.496 12.8753 126.388 13.66C127.057 14.2438 128.108 14.7869 129.526 15.2701C130.922 15.7327 131.894 16.2359 132.4 16.7391C132.906 17.2423 133.149 17.9465 133.149 18.8324C133.149 19.7184 132.845 20.4425 132.238 20.9856C131.631 21.5287 130.821 21.7903 129.809 21.7903C128.655 21.7903 127.725 21.4682 127.06 20.8246C126.395 20.181 126.048 19.295 126.048 18.1881V18.0876H124.631V18.1682C124.631 19.1746 124.854 20.0598 125.299 20.7847C125.745 21.526 126.399 22.1208 127.182 22.4953C127.971 22.898 128.862 23.079 129.833 23.079C131.27 23.079 132.424 22.6763 133.295 21.8916C134.166 21.1068 134.61 20.0598 134.61 18.7718C134.57 17.9871 134.428 17.2622 134.124 16.6785",fill:n}),r.createElement("path",{d:"M15.6559 0.994141C7.95647 0.994141 1.70391 7.21138 1.70391 14.8673C1.70391 22.5232 7.95647 28.7434 15.6559 28.7434C23.3553 28.7434 29.6078 22.5262 29.6078 14.8702C29.6078 7.21434 23.3553 0.994141 15.6559 0.994141ZM19.8411 4.59119V20.2111L12.0131 4.38577C13.1843 3.98188 14.4147 3.77364 15.6544 3.76951C17.091 3.76376 18.5144 4.0431 19.8411 4.59119ZM4.4943 14.8673C4.49168 13.2035 4.86673 11.5606 5.59151 10.061C6.31629 8.56143 7.37211 7.24384 8.68027 6.20646V23.5252C7.3725 22.4881 6.31692 21.171 5.59216 19.6719C4.86739 18.1729 4.49212 16.5306 4.4943 14.8673ZM11.4439 25.1434V9.52345L19.2734 25.3496C18.1021 25.7535 16.8717 25.9617 15.6321 25.9658C14.1949 25.9715 12.771 25.6919 11.4439 25.1434ZM22.6315 23.5252V6.20646C23.9379 7.24479 24.9926 8.56213 25.7174 10.0609C26.4422 11.5596 26.8186 13.2013 26.8186 14.8643C26.8186 16.5274 26.4422 18.1691 25.7174 19.6678C24.9926 21.1665 23.9379 22.4839 22.6315 23.5222V23.5252Z",fill:t}))};J.propTypes={inverse:n.n(q)().bool};var Y=J;var K=({links:e})=>{const{t:t}=(0,y.$)(["config","translations"]);return r.createElement(x,{className:"desktop-nav"},r.createElement(d.rU,{to:C},r.createElement(E,null,r.createElement(Y,null))),r.createElement(b,null,e.map((e=>r.createElement(w,{key:e.to},r.createElement(d.OL,{to:e.to},e.title(t)))))),r.createElement(Q,{colors:["#FFC700","#22d0b6","#22d0b6","#80a6e9","#f280b9","#e35da0","#0cea86"]},r.createElement(d.OL,{to:z},r.createElement(j,null,"Powered"))))};const X=m.ZP.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  display: none;
  background-color: #fefefe;
`,ee=m.ZP.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  max-width: 1240px;
  padding: 0 20px;

  .side-menu:checked ~ ${X} {
    display: flex;
  }

  .side-menu:checked ~ body {
    overflow: hidden;
  }
`,te=m.ZP.input.attrs({type:"checkbox"})`
  display: none;
`,ne=m.ZP.label`
  z-index: 1001;
`,re=(m.ZP.div`
  display: flex;
`,m.ZP.div`
  padding-right: 20px;
`),le=m.ZP.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 150px 0 0 0;
`,ae=m.ZP.li`
  font-size: 20px;
  font-weight: normal;
  margin: 7px 0;
  cursor: pointer;
  list-style: none;

  a {
    text-decoration: none;
    color: black;
  }
`;var oe=n(6386);var ie=({links:e})=>{const{t:t}=(0,y.$)(["config","translations"]);return r.createElement(ee,{className:"mobile-nav"},r.createElement(d.rU,{style:{zIndex:1001},to:C},r.createElement(re,null,r.createElement(Y,null))),r.createElement(te,{className:"side-menu",id:"side-menu"}),r.createElement(ne,{htmlFor:"side-menu"},r.createElement(oe.p,null)),r.createElement(X,null,r.createElement(le,null,e.map((e=>r.createElement(ae,{key:e.to},r.createElement(d.OL,{to:e.to},e.title(t))))))))};const ce=[{to:k,title:e=>e("header.routerLinkExample",{ns:"translations"})},{to:P,title:e=>e("header.integrations",{ns:"translations"})},{to:O,title:e=>e("header.cssExample",{ns:"translations"})}];var se=()=>{const e=g(50);return r.createElement(v,null,r.createElement(h,{condensed:e},r.createElement(K,{links:ce}),r.createElement(ie,{links:ce})))};const de=m.ZP.div`
  display: flex;
  flex: 1;
  min-height: 100%;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,me=m.ZP.main`
  flex: 1 1 auto;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: var(--navbar-offset);
`;var pe=({children:e})=>r.createElement(de,{"data-component":"full-width-layout"},r.createElement(se,null),r.createElement(me,null,e)),ue=n.p+"assets/images/react.6ce24c58.svg",fe=Object.defineProperty,ve=Object.getOwnPropertySymbols,he=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable,xe=(e,t,n)=>t in e?fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ee=e=>r.createElement("svg",((e,t)=>{for(var n in t||(t={}))he.call(t,n)&&xe(e,n,t[n]);if(ve)for(var n of ve(t))ge.call(t,n)&&xe(e,n,t[n]);return e})({xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 108 108"},e),r.createElement("path",{d:"m54 0c-29.8 0-54 24.2-54 54s24.2 54 54 54 54-24.2 54-54-24.2-54-54-54zm16.2 14v60.8l-30.3-61.6c4.4-1.5 9.1-2.4 14.1-2.4 5.7 0 11.2 1.1 16.2 3.2zm-59.4 40c0-13.6 6.3-25.8 16.2-33.7v67.4c-9.9-7.9-16.2-20.1-16.2-33.7zm26.9 40v-60.8l30.3 61.6c-4.4 1.5-9.1 2.4-14.1 2.4-5.7 0-11.2-1.1-16.2-3.2zm43.3-6.3v-67.4c9.9 7.9 16.2 20.1 16.2 33.7s-6.4 25.8-16.2 33.7z"}));const be=m.ZP.div`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
`,we=m.ZP.div`
  display: block;
  position: absolute;
  ${e=>e};
`;var ye=m.ZP.div`
  position: relative;
  background-image: linear-gradient(${e=>`${e.deg}, ${e.primary}, ${e.secondary}`});
  border-radius: 9999px;
  z-index: 1;
  height: 100px;
  width: 100px;
  ${e=>e};
`;var Ce=m.ZP.div`
  position: relative;
  background-color: transparent;
  z-index: 1;
  border-width: 20px;
  border-style: solid;
  border-radius: 9999px;
  height: ${e=>e.size||"100px"};
  width: ${e=>e.size||"100px"};
  border-color: ${e=>e.color||"teal"};
  border-width: ${e=>e.ring||"20px"};
  ${e=>e};
`;m.F4`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;const ke=m.F4`
  from {
    transform: translate3d(0,25px,0);
  }
  to {
    transform: translate3d(0,-50px,0);
  }
`,Pe=m.F4`
  from {
    transform: translate3d(0,0,0);
  }
  to {
    transform: translate3d(0,-150px,0);
  }
`,Ze=m.iv`
  animation: ${ke} 7s ease-in-out infinite alternate;
`,ze=m.iv`
  animation: ${Pe} 15s ease-in-out infinite alternate;
`,Oe=m.ZP.div`
  ${Ze};
  position: relative;
  ${e=>e}
`,je=m.ZP.div`
  ${ze};
  position: relative;
  ${e=>e}
`;var Le=()=>{const[e,t]=(0,r.useState)({width:void 0,height:void 0});return(0,r.useEffect)((()=>{const e=()=>{t({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]),e};const $e="#805ad5",Ve="#38b2ac",Fe="#f56565",He=()=>r.createElement(r.Fragment,null,r.createElement(we,{top:"180px",left:"-200px"},r.createElement(Oe,{animationDuration:"15s"},r.createElement(Ce,{size:"225px",ring:"50px",color:Ve}))),r.createElement(we,{top:"180px",left:"-115px"},r.createElement(je,null,r.createElement(Ce,{size:"30px",ring:"5px",color:Fe}))),r.createElement(we,{top:"20px",left:"600px"},r.createElement(je,null,r.createElement(Ce,{size:"30px",ring:"5px",color:Ve}))),r.createElement(we,{top:"50px",left:"700px"},r.createElement(je,{animationDirection:"alternate-reverse"},r.createElement(Ce,{size:"30px",ring:"5px",color:Fe}))),r.createElement(we,{top:"240px",left:"500px"},r.createElement(je,null,r.createElement(Ce,{size:"30px",ring:"5px",color:$e}))),r.createElement(we,{top:"70px",left:"100px"},r.createElement(Oe,null,r.createElement(Ce,{size:"30px",ring:"5px",color:Ve}))),r.createElement(we,{top:"100px",left:"0px"},r.createElement(Oe,null,r.createElement(Ce,{size:"30px",ring:"5px",color:$e}))),r.createElement(we,{top:"270px",left:"300px"},r.createElement(je,{animationDuration:"7s"},r.createElement(Ce,{size:"30px",ring:"5px",color:Fe}))),r.createElement(we,{top:"150px",left:"200px"},r.createElement(je,{animationDirection:"alternate-reverse"},r.createElement(Ce,{size:"30px",ring:"5px",color:$e}))),r.createElement(we,{top:"30px",left:"400px"},r.createElement(Oe,{animationDirection:"alternate-reverse"},r.createElement(Ce,{size:"30px",ring:"5px",color:Ve}))),r.createElement(we,{top:"-180px",left:"-150px"},r.createElement(ye,{height:"200px",width:"200px",deg:"135deg",primary:"#a0aec0",secondary:"#4a5568"}))," "),Me=()=>r.createElement(r.Fragment,null,r.createElement(we,{top:"10.41vw",right:"7.8vw"},r.createElement(Ce,{size:"3.2vw",ring:"0.6vw",color:Ve})),r.createElement(we,{top:"9.89vw",right:"0"},r.createElement(Ce,{size:"1.4vw",ring:"0.3vw",color:Ve})),r.createElement(we,{top:"13.2vw",right:"3.9vw"},r.createElement(Ce,{size:"1.4vw",ring:"0.3vw",color:Ve})),r.createElement(we,{top:"-6.51vw",right:"1vw"},r.createElement(Ce,{size:"3.5vw",ring:"0.6vw",color:Fe})),r.createElement(we,{top:"2.82vw",right:"6.25vw"},r.createElement(Ce,{size:"1.3vw",ring:"0.3vw",color:Fe})),r.createElement(we,{top:"5vw",right:"1vw"},r.createElement(Oe,null,r.createElement(ye,{height:"7vw",width:"7vw",deg:"135deg",primary:$e,secondary:"#d6bcfa"}))),r.createElement(we,{top:"-5vw",right:"17vw"},r.createElement(Oe,{animationDirection:"alternate-reverse"},r.createElement(ye,{height:"7vw",width:"7vw",deg:"225deg",primary:"#9ae6b4",secondary:"#48bb78"}))));var _e=()=>{const e=Le().width>1200;return r.createElement(be,null,r.createElement(He,null),e&&r.createElement(Me,null))};const Ae=m.ZP.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  background-color: var(--background-color);
`,Te=m.ZP.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  height: 100%;
  max-width: 1500px;
  min-height: 250px;
  margin: 60px 100px;
  position: relative;

  @media (max-width: var(--breakpoint-mobile)px) {
    margin: 60px 30px;
  }
`,Ne=m.ZP.div`
  display: flex;
  width: ${e=>e.fullWidth?"100%":"50%"};
  flex-direction: column;
  z-index: 100;
`,Se=m.ZP.h1`
  color: var(--text-color-primary);
  font-size: 48px;
  font-weight: 700;
  text-align: left;
  line-height: 1.25;
  margin: 4px 0;

  @media (max-width: var(--breakpoint-mobile)px) {
    font-size: 26px;
  }
`,Ie=m.ZP.h2`
  color: var(--text-color-secondary);
  font-size: 20px;
  font-weight: 400;
  text-align: left;
  line-height: 1.65;
  margin: 10px 0;

  @media (max-width: var(--breakpoint-mobile)px) {
    font-size: 18px;
  }
`,De=m.ZP.div`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
`,We=m.ZP.img`
  position: absolute;
  z-index: 10;
  ${e=>e};
`,Ue=m.ZP.div`
  position: absolute;
  z-index: 10;
  ${e=>e};
`;var Re=()=>{const e=Le().width>1200;return r.createElement(Ae,null,r.createElement(Te,null,r.createElement(Ne,{fullWidth:!e},r.createElement(Se,null,"NaNLabs"),r.createElement(Ie,null,"React Webpack Template demo")),e&&r.createElement(De,null,r.createElement(We,{src:ue,position:"absolute",alt:"logo",top:"-12vw",right:"-5vw",height:"21vw"}),r.createElement(Ue,{top:"1vw",right:"10vw"},r.createElement(Ee,{fill:"#5d73f5",width:"17vw",height:"17vw",filter:"drop-shadow( 3px 3px 2px rgba(0, 0, 0, .4))"}))),r.createElement(_e,null)))};var Be=()=>r.createElement(pe,null,r.createElement(Re,null));const Qe=m.ZP.div`
  display: flex;
  flex: 1;
  min-height: 100%;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,qe=m.ZP.main`
  flex: 1 1 auto;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 1240px;
  margin-top: var(--navbar-offset);
`;var Ge=({children:e})=>r.createElement(Qe,{"data-component":"default-layout"},r.createElement(se,null),r.createElement(qe,null,e));var Je=()=>{const{userId:e}=(0,f.UO)();return r.createElement(Ge,null,r.createElement("div",null,"hello ",e))};const Ye=[{name:"root",path:C},{name:"powered-by",path:z},{name:"user 1",path:(0,f.Gn)(Z,{userId:"1"})},{name:"user 2",path:(0,f.Gn)(Z,{userId:"2"})}];var Ke=()=>r.createElement(Ge,null,r.createElement("h1",null,"This is an example page"),r.createElement("hr",null),r.createElement("h3",null,"In this section we show how to generate links and dynamic links component."),r.createElement("p",null,"Check how the links are generated in the ",r.createElement("code",null,"src/pages/Links")," component."),r.createElement("hr",null),Ye.map((e=>r.createElement("li",{key:e.path},r.createElement(d.rU,{to:e.path},e.name)))));var Xe=({children:e})=>r.createElement("div",{className:"bg-text"},r.createElement("div",{className:"slicer-gradient"},new Array(40).fill(1).map(((t,n)=>r.createElement("div",{key:`slice-${n+1}`,className:"text"},e)))));const et=m.ZP.div`
  background: linear-gradient(to right top, rgb(0, 18, 143) 0%, rgb(49, 57, 193) 51%, rgb(111, 100, 245) 100%);
  flex: 1;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  perspective: 800px;
`,tt=m.ZP.div`
  display: flex;
`;var nt=({children:e})=>r.createElement(et,null,r.createElement(tt,null,r.createElement(Xe,null,e)));var rt=()=>{const{t:e}=(0,y.$)();return r.createElement(pe,null,r.createElement(nt,null,e("brand")))};var lt=()=>r.createElement("div",null,"404"),at=n(9669),ot=n.n(at);const it={baseURL:{NODE_ENV:"production",PUBLIC_URL:"/react-webpack-boilerplate"}.REACT_APP_API_URL,headers:{Accept:"application/json","Content-Type":"application/json"}};ot().CancelToken.source;var ct=(()=>{const e=ot().create(it);var t;return t=e,console.log("axiosInstance",t),e})(),st=(e,t,n)=>new Promise(((r,l)=>{var a=e=>{try{i(n.next(e))}catch(e){l(e)}},o=e=>{try{i(n.throw(e))}catch(e){l(e)}},i=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,o);i((n=n.apply(e,t)).next())}));var dt=n(8767);const mt="tannerlinsley/react-query",pt=(...e)=>{return t=void 0,n=[...e],r=function*(e=mt){const{data:t}=yield(n=`https://api.github.com/repos/${e}`,st(void 0,null,(function*(){return ct.get(n,{params:r,cancelToken:l})})));var n,r,l;return t},new Promise(((e,l)=>{var a=e=>{try{i(r.next(e))}catch(e){l(e)}},o=e=>{try{i(r.throw(e))}catch(e){l(e)}},i=t=>t.done?e(t.value):Promise.resolve(t.value).then(a,o);i((r=r.apply(t,n)).next())}));var t,n,r},ut=m.ZP.div`
  margin: 20px 0;
`;var ft=({name:e})=>{const{isLoading:t,error:n,data:l,isFetching:a}=((e=mt)=>(0,dt.useQuery)(["githubRepository",e],(()=>pt(e))))(e);return r.createElement(ut,null,t?r.createElement(u,null):n?r.createElement("p",null,"An error has occurred: "+n.message):r.createElement("div",null,r.createElement("h1",null,null==l?void 0:l.name),r.createElement("p",null,null==l?void 0:l.description),r.createElement("strong",null,"👀 ",null==l?void 0:l.subscribers_count)," ",r.createElement("strong",null,"✨ ",null==l?void 0:l.stargazers_count)," ",r.createElement("strong",null,"🍴 ",null==l?void 0:l.forks_count),r.createElement("div",null,a?"Updating...":"")))};var vt=()=>r.createElement(Ge,null,r.createElement(ft,{name:"tannerlinsley/react-query"}),r.createElement(ft,{name:"react-hook-form/react-hook-form"}),r.createElement(ft,{name:"pmndrs/jotai"}),r.createElement(ft,{name:"radix-ui/primitives"})),ht=n(4184),gt=n.n(ht),xt={btn:"btn___mLhol"},Et={"btn-nan":"btn-nan___MUMZl",large:"large___CJa6m"};console.log("styles",xt,Et);var bt=()=>r.createElement(pe,null,r.createElement("span",{className:xt.btn},"Hello"),r.createElement("span",{className:gt()(Et["btn-nan"],Et.large)},"nanlabs"));var wt=()=>r.createElement(f.Z5,null,r.createElement(f.AW,{path:C,element:r.createElement(Be,null)}),r.createElement(f.AW,{path:z,element:r.createElement(rt,null)}),r.createElement(f.AW,{path:k,element:r.createElement(Ke,null)}),r.createElement(f.AW,{path:P,element:r.createElement(vt,null)}),r.createElement(f.AW,{path:Z,element:r.createElement(Je,null)}),r.createElement(f.AW,{path:O,element:r.createElement(bt,null)}),r.createElement(f.AW,{path:"*",element:r.createElement(lt,null)})),yt=n(938);const Ct=new dt.QueryClient;var kt=({children:e})=>r.createElement(dt.QueryClientProvider,{client:Ct},e,r.createElement(yt.ReactQueryDevtools,{initialIsOpen:!1}));window.toggleTheme=()=>{const e="light"===document.documentElement.getAttribute("data-theme")?"dark":"light";document.documentElement.setAttribute("data-theme",e)};var Pt=()=>r.createElement(r.Suspense,{fallback:r.createElement(u,null)},r.createElement(kt,null,r.createElement(d.UT,null,r.createElement(wt,null))));(0,l.s)(document.getElementById("app")).render(r.createElement(r.StrictMode,null,r.createElement(Pt,null))),s(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()})).catch((e=>{console.error(e.message)}))}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return a[e].call(n.exports,n,n.exports,i),n.exports}i.m=a,e=[],i.O=function(t,n,r,l){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],l=e[d][2];for(var o=!0,c=0;c<n.length;c++)(!1&l||a>=l)&&Object.keys(i.O).every((function(e){return i.O[e](n[c])}))?n.splice(c--,1):(o=!1,l<a&&(a=l));if(o){e.splice(d--,1);var s=r();void 0!==s&&(t=s)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[n,r,l]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var l=Object.create(null);i.r(l);var a={};t=t||[null,n({}),n([]),n(n)];for(var o=2&r&&e;"object"==typeof o&&!~t.indexOf(o);o=n(o))Object.getOwnPropertyNames(o).forEach((function(t){a[t]=function(){return e[t]}}));return a.default=function(){return e},i.d(l,a),l},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))},i.u=function(e){return"assets/js/"+e+".24b459bf.js"},i.miniCssF=function(e){},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},l="app:",i.l=function(e,t,n,a){if(r[e])r[e].push(t);else{var o,c;if(void 0!==n)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var m=s[d];if(m.getAttribute("src")==e||m.getAttribute("data-webpack")==l+n){o=m;break}}o||(c=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.setAttribute("data-webpack",l+n),o.src=e),r[e]=[t];var p=function(t,n){o.onerror=o.onload=null,clearTimeout(u);var l=r[e];if(delete r[e],o.parentNode&&o.parentNode.removeChild(o),l&&l.forEach((function(e){return e(n)})),t)return t(n)},u=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),c&&document.head.appendChild(o)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/react-webpack-boilerplate/",function(){var e={179:0};i.f.j=function(t,n){var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var l=new Promise((function(n,l){r=e[t]=[n,l]}));n.push(r[2]=l);var a=i.p+i.u(t),o=new Error;i.l(a,(function(n){if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var l=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+l+": "+a+")",o.name="ChunkLoadError",o.type=l,o.request=a,r[1](o)}}),"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,l,a=n[0],o=n[1],c=n[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(r in o)i.o(o,r)&&(i.m[r]=o[r]);if(c)var d=c(i)}for(t&&t(n);s<a.length;s++)l=a[s],i.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return i.O(d)},n=self.webpackChunkapp=self.webpackChunkapp||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var c=i.O(void 0,[465],(function(){return i(3491)}));c=i.O(c)}();