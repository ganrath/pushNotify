(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(6),c=n.n(i),l=(n(12),n(1)),o=n.n(l),s=n(2),u=n(3);var d=r.a.createContext(),f=r.a.createContext(),p={list:[],listerror:null,sortResult:[],filterResult:[]};function h(e,t){switch(t.type){case"FETCH_SUCCESS":return Object.assign({},e,{list:t.payload,sortResult:t.payload,listerror:"false"});case"FETCH_ERROR":return Object.assign({},e,{listerror:t.payload});case"FETCH_SEARCH_RESULT":var n="";return 0===e.filterResult.length?e:(n=e.list.filter((function(t){for(var n in e.filterResult)if("unknown"==e.filterResult[n]||"Post-Apocalyptic Earth"==e.filterResult[n]||"Nuptia 4"==e.filterResult[n]||"Other origins"==e.filterResult[n]){if(t.origin.name===e.filterResult[n])return!0}else if("Male"==e.filterResult[n]||"Female"==e.filterResult[n]){if(t.gender===e.filterResult[n])return!0}else if("Human"==e.filterResult[n]||"Mytholog"==e.filterResult[n]){if(t.species===e.filterResult[n])return!0}else if("Other Species"==e.filterResult[n]&&"Human"!==t.species&&"Mytholog"!==t.species)return!0})),Object.assign({},e,{sortResult:n}));case"CHECKBOX_SELECT":return e.filterResult.push(t.payload),e;case"CHECKBOX_REMOVE":var a=e.filterResult.indexOf(t.payload);return e.filterResult.splice(a,1),e;default:return e}}function m(e){var t=e.children,n="https://rickandmortyapi.com/api/character/",i=Object(a.useReducer)(h,p),c=Object(u.a)(i,2),l=c[0],m=c[1];return Object(a.useEffect)((function(){function e(){return(e=Object(s.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().then((function(e){m({type:"FETCH_SUCCESS",payload:e})})).catch((function(e){m({type:"FETCH_ERROR",payload:!0})}))}),[]),r.a.createElement(f.Provider,{value:m},r.a.createElement(d.Provider,{value:l},t))}var E=function(){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("img",{"data-testid":"img-id",src:"https://www.publicissapient.com/content/dam/ps-rebrand/brand/ps-logo-NEW.svg"})))};var g=function(e){var t=Object(a.useContext)(f);return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"container",role:"checkbox","data-testid":"input-checkbox-".concat(e.details),"aria-checked":"false"},e.details,r.a.createElement("input",{type:"checkbox",id:e.details,name:e.name,onChange:function(e){e.target.checked?t({type:"CHECKBOX_SELECT",payload:e.target.id}):t({type:"CHECKBOX_REMOVE",payload:e.target.id}),t({type:"FETCH_SEARCH_RESULT"})},"data-testid":"input-checkbox-checking"}),r.a.createElement("span",{className:"checkmark"})))};var v=function(e){return r.a.createElement("div",{className:"filter-head"},r.a.createElement("h2",null,e.head),r.a.createElement("ul",null,e.checkbox.map((function(t,n){return r.a.createElement("li",{key:n},r.a.createElement(g,{details:t,name:e.head}))}))))};var y=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Filter"),r.a.createElement(v,{head:"Species",checkbox:["Human","Mytholog","Other Species"]}),r.a.createElement(v,{head:"Gender",checkbox:["Male","Female"]}),r.a.createElement(v,{head:"Origin",checkbox:["unknown","Post-Apocalyptic Earth","Nuptia 4","Other origins"]}))};var w=function(e){return r.a.createElement("div",{className:"text-cont"},r.a.createElement("p",null,e.lefthead),r.a.createElement("p",null,e.righthead))};var b=function(e){return r.a.createElement("div",{className:"List-cont"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:e.details.image}),r.a.createElement("div",{className:"text-overlay"},r.a.createElement("h2",{"data-testid":"name-h1"},e.details.name),r.a.createElement("p",null,"id - ",e.details.id," - created ",function(e){var t=new Date,n=new Date(e);return t.getFullYear()-n.getFullYear()}(e.details.created)," ","years ago"))),r.a.createElement(w,{lefthead:"Status",righthead:e.details.status}),r.a.createElement(w,{lefthead:"Species",righthead:e.details.species}),r.a.createElement(w,{lefthead:"Gender",righthead:e.details.gender}),r.a.createElement(w,{lefthead:"ORIGIN",righthead:e.details.origin.name}),r.a.createElement(w,{lefthead:"Last Location",righthead:e.details.location.name}))};var R=function(){var e=Object(a.useContext)(d);return r.a.createElement("div",{className:"list-parent"},e.sortResult.map((function(e){return r.a.createElement(b,{details:e,key:e.id})})))},k=(n(14),function(){return r.a.createElement("div",null,r.a.createElement(m,null,r.a.createElement(E,null),r.a.createElement("div",{className:"layout-plz"},r.a.createElement(y,null),r.a.createElement(R,null))))}),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}function x(){return(x=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(s.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Notification.requestPermission((function(e){t(e)}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()).then((function(e){if("granted"!==e)throw new Error("We weren't granted permission.")})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(s.a)(o.a.mark((function e(t){var n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/pushNotify"}).WP_PUBLIC_KEY),n={userVisibleOnly:!0,applicationServerKey:"BEJugkYk_jWJ9wNsjvZhba8_CNN-ss1pvqBECcUuQ4tGgqx-EXtoYA1YTkkle07rqNpzPCgehm9M38C3N3zmCxc"},e.next=4,navigator.serviceWorker.ready;case 4:return a=e.sent,e.next=7,a.pushManager.subscribe(n);case 7:r=e.sent,console.log(r);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(15).config();c.a.render(r.a.createElement(k,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pushNotify",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/pushNotify","/service-worker.js");C?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):(O(t,e),function(){x.apply(this,arguments)}(),function(e){N.apply(this,arguments)}(t))}))}}()},7:function(e,t,n){e.exports=n(18)}},[[7,1,2]]]);
//# sourceMappingURL=main.fe95caf2.chunk.js.map