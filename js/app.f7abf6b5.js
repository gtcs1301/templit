(function(e){function t(t){for(var r,o,i=t[0],c=t[1],f=t[2],s=0,l=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&l.push(u[o][0]),u[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(l.length)l.shift()();return a.push.apply(a,f||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==u[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={3:0},u={3:0},a=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{1:"e259f5ec",2:"ffe1c2d3",4:"b75abdfe",5:"c3113be6"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={2:1,4:1,5:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{1:"31d6cfe0",2:"aa46c36f",4:"a2ba890f",5:"43692b51"}[e]+".css",u=c.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var f=a[i],s=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(s===r||s===u))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){f=l[i],s=f.getAttribute("data-href");if(s===r||s===u)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],p.parentNode.removeChild(p),n(a)},p.href=u;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var r=u[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=u[e]=[t,n]}));t.push(r[2]=a);var f,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var l=new Error;f=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=u[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}u[e]=void 0}};var p=setTimeout((function(){f({type:"timeout",target:s})}),12e4);s.onerror=s.onload=f,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],s=f.push.bind(f);f.push=t,f=f.slice();for(var l=0;l<f.length;l++)t(f[l]);var p=s;a.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},2:function(e,t){},2153:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return f}));var r=n("1c46"),o="auth-cache",u=function(e){try{var t=r.createHash("sha1").update(e).digest("hex");return"9157f1888595cb6a50c1898f1f95d17861480a5c"===t.toLowerCase()}catch(n){return!1}},a=function(){var e={expirationTime:Date.now()+12096e5};localStorage.setItem(o,JSON.stringify(e))},i=function(){var e=localStorage.getItem(o);try{return e?JSON.parse(e):null}catch(t){return null}},c=function(){localStorage.removeItem(o)},f=function(){var e=i();return!!(e&&e.expirationTime>Date.now())||(c(),!1)}},"2f39":function(e,t,n){"use strict";n.r(t);n("ac1f"),n("5319"),n("96cf");var r=n("c973"),o=n.n(r),u=(n("5c7d"),n("7d6e"),n("e54f"),n("985d"),n("31cd"),n("2b0e")),a=n("1f91"),i=n("42d2"),c=n("b05d"),f=n("436b"),s=n("2a19"),l=n("f508");u["default"].use(c["a"],{config:{},lang:a["a"],iconSet:i["a"],plugins:{Dialog:f["a"],Notify:s["a"],Loading:l["a"]}});var p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},d=[],m={name:"App"},h=m,b=n("2877"),v=Object(b["a"])(h,p,d,!1,null,null,null),g=v.exports,y=n("2f62"),E=(n("99af"),n("4de4"),{uid:"",users:[],timestamp:0,isOffline:!1,readOnly:!1}),w={UPDATE_UID:function(e,t){e.uid=t},UPDATE_USERS:function(e,t){e.users=t},ADD_USER:function(e,t){e.users=e.users.concat(t)},REMOVE_USER:function(e,t){e.users=e.users.filter((function(e){return e.key!==t.key}))},UPDATE_TIMESTAMP:function(e,t){e.timestamp=t},UPDATE_IS_OFFLINE:function(e,t){e.isOffline=t},UPDATE_READONLY:function(e,t){e.readOnly=t}},O={setUser:function(e,t){var n=e.commit;n("UPDATE_UID",t)},setUsers:function(e,t){var n=e.commit;n("UPDATE_USERS",t)},addUser:function(e,t){var n=e.commit;n("ADD_USER",t)},removeUser:function(e,t){var n=e.commit;n("REMOVE_USER",t)},setTimestamp:function(e,t){var n=e.commit;n("UPDATE_TIMESTAMP",t)},setIsOffline:function(e,t){var n=e.commit;n("UPDATE_IS_OFFLINE",t)},setReadOnly:function(e,t){var n=e.commit;n("UPDATE_READONLY",t)}},P={uid:function(e){return e.uid},users:function(e){return e.users},timestamp:function(e){return e.timestamp},isOffline:function(e){return e.isOffline},readOnly:function(e){return e.readOnly}},x={namespaced:!0,state:E,mutations:w,actions:O,getters:P};u["default"].use(y["a"]);var S=function(){var e=new y["a"].Store({modules:{store:x},strict:!1});return e},_=n("8c4f"),T=(n("d3b7"),n("e6cf"),n("2153")),A=[{path:"/",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b"))},children:[{path:"",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"8b24"))}}],beforeEnter:function(e,t,n){Object(T["b"])()?n():n("/login")}},{path:"/login",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"013f"))},beforeEnter:function(e,t,n){Object(T["b"])()?n("/"):n()}},{path:"/doc/:docId",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b"))},children:[{path:"",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"cabd"))},props:!0}],beforeEnter:function(e,t,n){Object(T["b"])()?n():n("/login")}},{path:"*",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b"))},children:[{path:"",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"8b24"))}}],beforeEnter:function(e,t,n){Object(T["b"])()?n("/"):n("/login")}}],D=A;u["default"].use(_["a"]);var U=function(){var e=new _["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:D,mode:"hash",base:""});return e},k=function(){return j.apply(this,arguments)};function j(){return j=o()(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof S){e.next=6;break}return e.next=3,S({Vue:u["default"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=S;case 7:if(t=e.t0,"function"!==typeof U){e.next=14;break}return e.next=11,U({Vue:u["default"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=U;case 15:return n=e.t1,t.$router=n,r={router:n,store:t,render:function(e){return e(g)}},r.el="#q-app",e.abrupt("return",{app:r,store:t,router:n});case 20:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}var R=n("bc3a"),I=n.n(R);u["default"].prototype.$axios=I.a;var N="";function L(){return M.apply(this,arguments)}function M(){return M=o()(regeneratorRuntime.mark((function e(){var t,n,r,o,a,i,c,f,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,n=t.app,r=t.store,o=t.router,a=!1,i=function(e){a=!0;var t=Object(e)===e?o.resolve(e).route.fullPath:e;window.location.href=t},c=window.location.href.replace(window.location.origin,""),f=[void 0],s=0;case 11:if(!(!1===a&&s<f.length)){e.next=29;break}if("function"===typeof f[s]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,f[s]({app:n,router:o,store:r,Vue:u["default"],ssrContext:null,redirect:i,urlPath:c,publicPath:N});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:s++,e.next=11;break;case 29:if(!0!==a){e.next=31;break}return e.abrupt("return");case 31:new u["default"](n);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),M.apply(this,arguments)}L()},3:function(e,t){},"31cd":function(e,t,n){},4:function(e,t){},5:function(e,t){},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){}});