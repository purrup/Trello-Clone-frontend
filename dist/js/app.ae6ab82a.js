(function(e){function t(t){for(var n,a,s=t[0],i=t[1],u=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o={app:0},c=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2855c197":"ced3436b","chunk-2cf527b6":"ab121658","chunk-2d0e5e97":"5f35605b","chunk-32bb59cb":"ef77082c","chunk-3eec072e":"ea63940e","chunk-5cc018c9":"b1580d7a","chunk-9a4c20d4":"2655de41","chunk-ace216c4":"e03d313d"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-2855c197":1,"chunk-2cf527b6":1,"chunk-32bb59cb":1,"chunk-3eec072e":1,"chunk-5cc018c9":1,"chunk-9a4c20d4":1,"chunk-ace216c4":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-2855c197":"d6b04c9e","chunk-2cf527b6":"1a394251","chunk-2d0e5e97":"31d6cfe0","chunk-32bb59cb":"a37ba1cc","chunk-3eec072e":"a37ba1cc","chunk-5cc018c9":"d94f66d9","chunk-9a4c20d4":"572cbd4e","chunk-ace216c4":"a37ba1cc"}[e]+".css",o=i.p+n,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[e],p.parentNode.removeChild(p),r(c)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},1644:function(e,t,r){},4163:function(e,t,r){"use strict";r("fb66")},"482d":function(e,t,r){"use strict";r("1644")},"56d7":function(e,t,r){"use strict";r.r(t);r("96cf");var n=r("3b8d"),a=(r("cadf"),r("551c"),r("f751"),r("097d"),r("2b0e")),o=r("ecee"),c=r("c074"),s=r("b702"),i=r("f2d1"),u=r("ad3d");o["c"].add(c["a"],s["a"],i["a"]),a["default"].component("AppIcon",u["a"]);var l=r("2a13"),d=r.n(l),p=r("481d"),f={"t-input":{component:p["TInput"],props:{fixedClasses:"block w-full px-3 py-2 border-gray-400 transition duration-100 ease-in-out border rounded shadow-sm disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 focus:ring-blue-400",classes:"focus:border-blue-400",variants:{danger:"border-red-300 bg-red-50 placeholder-red-200 text-red-900",success:"border-green-300 bg-green-50 placeholder-gray-400 text-green-900"}}},"t-button":{component:p["TButton"],props:{fixedClasses:"block px-4 py-2 transition duration-100 ease-in-out focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",classes:"text-white bg-blue-600 border border-transparent shadow-sm rounded hover:bg-blue-500",variants:{secondary:"text-blue-600 bg-white border border-blue-500 rounded shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none focus:ring-opacity-50 hover:bg-gray-50",error:"text-white bg-red-500 border border-transparent rounded shadow-sm hover:bg-red-600",success:"text-white bg-green-500 border border-transparent rounded shadow-sm hover:bg-green-600",link:"text-blue-500 underline hover:text-blue-600"}}},"t-alert":{component:p["TAlert"],props:{fixedClasses:{wrapper:"relative flex items-center p-4 border-l-4  rounded shadow-sm",body:"flex-grow",close:"absolute relative flex items-center justify-center ml-4 flex-shrink-0 w-6 h-6 transition duration-100 ease-in-out rounded  focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",closeIcon:"fill-current h-4 w-4"},classes:{wrapper:"bg-blue-50 border-blue-500",body:"text-blue-700",close:"text-blue-500 hover:bg-blue-200"},variants:{danger:{wrapper:"bg-red-50 border-red-500",body:"text-red-700",close:"text-red-500 hover:bg-red-200"},success:{wrapper:"bg-green-50 border-green-500",body:"text-green-700",close:"text-green-500 hover:bg-green-200"}}}},"t-card":{component:p["TCard"],props:{fixedClasses:{wrapper:"border rounded shadow-sm ",body:"p-3",header:"border-b p-3 rounded-t",footer:"border-t p-3 rounded-b"},classes:{wrapper:"bg-white border-gray-100",body:"",header:"border-gray-100",footer:"border-gray-100"},variants:{danger:{wrapper:"bg-red-50 text-red-700 border-red-200",header:"border-red-200 text-red-700",footer:"border-red-200 text-red-700"}}}}};a["default"].use(d.a,f);r("8e6e"),r("ac6a"),r("456d");var b=r("bd86"),h=r("7bb1"),g=r("4c93");function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){Object(b["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}Object(h["e"])("lazy"),Object(h["c"])({classes:{valid:"valid",invalid:"invalid"}}),Object(h["d"])("email",v(v({},g["a"]),{},{message:"email格式有誤"})),Object(h["d"])("required",v(v({},g["b"]),{},{message:"請填寫{_field_}"})),Object(h["d"])("min",{validate:function(e,t){var r=t.length;return e.length>=r},params:["length"],message:"{_field_}必須至少有 {length} 字元"}),Object(h["d"])("max",{validate:function(e,t){var r=t.length;return e.length<=r},params:["length"],message:"{_field_}無法超過 {length} 字元"});var w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e.$route.meta.showNavbar?r("Navbar"):e._e(),r("router-view"),r("Notification",{attrs:{successMessage:e.successMessage,errorMessage:e.errorMessage}})],1)},O=[],y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar flex justify-between items-center bg-navbar-blue w-screen p-1 px-4"},[r("router-link",{staticClass:"home flex justify-center items-center bg-navbar-light rounded h-8 w-8 text-white text-base hover:bg-navbar-iconHover",attrs:{to:{name:"home"}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"-2 -2 28 28",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}})])]),r("router-link",{staticClass:"trello-icon text-xl text-navbar-icon mt-1",attrs:{to:{name:"home"}}},[r("AppIcon",{attrs:{icon:["fab","trello"]}}),r("span",{staticClass:"font-bold"},[e._v(" Trello ")])],1),r("div",{staticClass:"user flex justify-center items-center bg-navbar-light rounded-full h-8 w-8 text-white text-base hover:bg-navbar-iconHover cursor-pointer",on:{click:function(t){e.isUserPanelOpen=!e.isUserPanelOpen}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"-1 -1 22 22",fill:"currentColor"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z","clip-rule":"evenodd"}})]),e.isUserPanelOpen?r("div",{staticClass:"origin-top-right absolute right-5 mt-32 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"},[r("router-link",{staticClass:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",attrs:{to:{name:"user"}}},[e._v(" 個人檔案 ")]),r("div",{staticClass:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer",on:{click:e.logout}},[e._v(" 登出 ")])],1):e._e()])],1)},E=[],x=r("2f62");function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){Object(b["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j={data:function(){return{isUserPanelOpen:!1}},computed:k({},Object(x["d"])("user",{user:function(e){return e.user},isLogin:function(e){return e.isLogin}})),methods:{logout:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("user/logout");case 2:this.$store.commit("user/SET_logout"),this.$router.push({name:"login"});case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},_=j,R=(r("482d"),r("2877")),T=Object(R["a"])(_,y,E,!1,null,"64b48fb7",null),D=T.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fade"}},[r("t-alert",{staticClass:"alert",attrs:{variant:e.variant,show:e.show,timeout:e.timeout}},[e._v(" "+e._s(e.message)+" ")])],1)},P=[];function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){Object(b["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L={props:{successMessage:String,errorMessage:String},data:function(){return{timeout:6e3}},computed:M(M({},Object(x["d"])("notification",{show:function(e){return e.showNotification}})),{},{variant:function(){return this.successMessage?"success":"danger"},message:function(){return this.successMessage?this.successMessage:this.errorMessage}}),methods:M(M({},Object(x["c"])("notification",["DELETE_MESSAGE"])),{},{hidden:function(){this.DELETE_MESSAGE()}})},I=L,N=(r("4163"),Object(R["a"])(I,A,P,!1,null,"7b55ce20",null)),B=N.exports,U=r("bc3a"),G=r.n(U),$={baseURL:"https://trello-clone-backend-2021.herokuapp.com/",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},withCredentials:!0},z=G.a.create($),q=z;function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){Object(b["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var H={components:{Navbar:D,Notification:B},computed:F(F({},Object(x["d"])("notification",{successMessage:function(e){return e.successMessage},errorMessage:function(e){return e.errorMessage}})),Object(x["d"])("user",{token:function(e){return e.token}})),created:function(){var e=this;q.interceptors.request.use((function(t){return t.headers.Authorization="Bearer "+e.token,t}))}},W=H,J=(r("034f"),Object(R["a"])(W,w,O,!1,null,null,null)),V=J.exports,Q=r("8c4f");r("ac4d"),r("8a81"),r("5df3"),r("1c4c"),r("7f7f"),r("6b54");function X(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=Y(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){s=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(s)throw o}}}}function Y(e,t){if(e){if("string"===typeof e)return Z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Z(e,t):void 0}}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ee={board:[],boards:[]},te={getCard:function(e){return function(t){var r,n=X(e.board.lists);try{for(n.s();!(r=n.n()).done;){var a,o=r.value,c=X(o.cards);try{for(c.s();!(a=c.n()).done;){var s=a.value;if(s._id===t)return s}}catch(i){c.e(i)}finally{c.f()}}}catch(i){n.e(i)}finally{n.f()}}}},re={SET_BOARD:function(e,t){e.board=t},SET_BOARDS:function(e,t){e.boards=t},UPDATE_BOARD_TITLE:function(e,t){e.board.title=t},UPDATE_BOARD_LIST:function(e,t){e.board.lists=t},ADD_NEW_BOARD:function(e,t){console.log("ADD_NEW_BOARD",t),e.boards.push(t)},DELETE_BOARD:function(e,t){e.boards=e.boards.filter((function(e){return e._id!==t}))},RESET_BOARD:function(e){e.board=[],e.boards=[]}},ne={getBoards:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,t.rootState,e.prev=1,e.next=4,q.get("/boards");case 4:n=e.sent,r("SET_BOARDS",n.data),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](1),404===e.t0.response.status&&(r("SET_BOARDS",[]),console.log(e.t0.response.data)),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(t){return e.apply(this,arguments)}return t}(),getBoard:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,q.get("/boards/".concat(r));case 4:a=e.sent,o=a.data,n("SET_BOARD",o),n("list/SET_LIST",o.lists,{root:!0}),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](1),404===e.t0.response.status&&(console.log(e.t0.response.data),Ae.push({name:"NotFound"})),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));function t(t,r){return e.apply(this,arguments)}return t}(),createBoard:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.data,e.prev=2,e.next=5,q.post("/boards",{data:a});case 5:o=e.sent,n("ADD_NEW_BOARD",o.data),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));function t(t,r){return e.apply(this,arguments)}return t}(),updateBoard:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.id,a=r.data,e.prev=2,e.next=5,q.put("/boards/".concat(n),{data:a});case 5:o=e.sent,console.log("updatedBoard:",o.data),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));function t(t,r){return e.apply(this,arguments)}return t}(),deleteBoard:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,q.delete("/boards/".concat(r));case 4:a=e.sent,n("notification/SET_SUCCESS_MESSAGE","已刪除看板: ".concat(a.data.title),{root:!0}),n("DELETE_BOARD",r),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));function t(t,r){return e.apply(this,arguments)}return t}()},ae={namespaced:!0,state:ee,getters:te,mutations:re,actions:ne},oe={list:[{}]},ce={},se={SET_LIST:function(e,t){e.list=t},MOVE_LIST:function(e,t){e.list=t},UPDATE_LIST_TITLE:function(e,t){var r=t.id,n=t.data;e.list.forEach((function(e){e._id===r&&(e.title=n)}))},CREATE_LIST:function(e,t){var r=t.data;e.list.push(r)},DELETE_LIST:function(e,t){var r=t.id;e.list=e.list.filter((function(e){return e._id!==r}))},ADD_CARD:function(e,t){var r=t.data;e.list.forEach((function(e){e._id===r.listId&&e.cards.push(r)}))},MOVE_CARD:function(e,t){var r=t.listId,n=t.data;e.list.forEach((function(e){e._id===r&&(e.cards=n)}))},DELETE_CARD:function(e,t){var r=t.id;e.list.forEach((function(t,n){var a=t.cards.filter((function(e){return e._id!==r}));e.list[n].cards=a}))}},ie={updateList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.id,a=r.data,e.prev=2,e.next=5,q.put("/lists/".concat(n),{data:a});case 5:o=e.sent,console.log("updatedList:",o.data),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));function t(t,r){return e.apply(this,arguments)}return t}(),createList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.data,e.prev=2,e.next=5,q.post("/lists",{data:a});case 5:o=e.sent,console.log("created list:",o.data),n("CREATE_LIST",{data:o.data}),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));function t(t,r){return e.apply(this,arguments)}return t}(),deleteList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.id,e.prev=2,n("DELETE_LIST",{id:a}),e.next=6,q.delete("/lists/".concat(a));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));function t(t,r){return e.apply(this,arguments)}return t}()},ue={namespaced:!0,state:oe,getters:ce,mutations:se,actions:ie};function le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function de(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?le(Object(r),!0).forEach((function(t){Object(b["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):le(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var pe={card:{}},fe={},be={SET_CARD:function(e,t){var r=t.data;e.card=de(de({},e.card),r)}},he={getCard:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.id,e.prev=2,e.next=5,q.get("/cards/".concat(a));case 5:o=e.sent,c=o.data,n("SET_CARD",{data:c}),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));function t(t,r){return e.apply(this,arguments)}return t}(),createCard:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.data,e.prev=2,e.next=5,q.post("/cards",{data:a});case 5:o=e.sent,n("list/ADD_CARD",{data:o.data},{root:!0}),console.log("createdCard:",o.data),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));function t(t,r){return e.apply(this,arguments)}return t}(),updateCard:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.id,o=r.data,e.prev=2,e.next=5,q.put("/cards/".concat(a),{data:o});case 5:c=e.sent,console.log("updatedCard:",c.data),n("SET_CARD",{data:c}),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));function t(t,r){return e.apply(this,arguments)}return t}(),deleteCard:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.id,e.prev=2,e.next=5,q.delete("/cards/".concat(a));case 5:n("list/DELETE_CARD",{id:a},{root:!0}),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));function t(t,r){return e.apply(this,arguments)}return t}()},ge={namespaced:!0,state:pe,getters:fe,mutations:be,actions:he},me={user:{},isLogin:localStorage.getItem("isLogin")||!1,expiration:new Date(localStorage.getItem("expiration"))||!1,token:localStorage.getItem("token")||!1},ve={getUser:function(e){return e.user},getToken:function(e){return e.token}},we={SET_USER:function(e,t){e.user=t},SET_login:function(e){localStorage.setItem("expiration",new Date(Date.now()+864e5)),localStorage.setItem("isLogin",!0),e.isLogin=!0},SET_TOKEN:function(e,t){localStorage.setItem("token",t),e.token=t},SET_logout:function(e){e.isLogin=!1,localStorage.setItem("isLogin",!1),localStorage.removeItem("token"),e.user={},e.token=!1,e.expiration=!1}},Oe={signup:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,q.post("/signup",r);case 4:a=e.sent,n("SET_USER",a.data.user),n("SET_TOKEN",a.data.token),n("notification/SET_SUCCESS_MESSAGE","註冊成功！歡迎".concat(a.data.user.name,"！"),{root:!0}),n("SET_login"),Ae.push({name:"home"}),e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](1),e.t0.response.status&&n("notification/SET_ERROR_MESSAGE",e.t0.response.data.message,{root:!0}),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));function t(t,r){return e.apply(this,arguments)}return t}(),login:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,q.post("/login",r);case 4:a=e.sent,n("SET_USER",a.data.user),n("SET_TOKEN",a.data.token),n("SET_login"),n("notification/SET_SUCCESS_MESSAGE","登入成功！",{root:!0}),Ae.push({name:"home"}),e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](1),401===e.t0.response.status&&n("notification/SET_ERROR_MESSAGE",e.t0.response.data.message,{root:!0}),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));function t(t,r){return e.apply(this,arguments)}return t}(),logout:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,q.post("/logout");case 4:r("notification/SET_SUCCESS_MESSAGE","登出成功！",{root:!0}),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));function t(t){return e.apply(this,arguments)}return t}(),getUser:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,q.get("/users");case 4:n=e.sent,a=n.data,r("SET_USER",a),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));function t(t){return e.apply(this,arguments)}return t}()},ye={namespaced:!0,state:me,getters:ve,mutations:we,actions:Oe},Ee={showNotification:!1,successMessage:"",errorMessage:""},xe={},Se={SET_SUCCESS_MESSAGE:function(e,t){e.showNotification=!0,e.successMessage=t},SET_ERROR_MESSAGE:function(e,t){e.showNotification=!0,e.errorMessage=t},DELETE_MESSAGE:function(e){e.showNotification=!1,e.successMessage="",e.errorMessage=""}},ke={},je={namespaced:!0,state:Ee,getters:xe,mutations:Se,actions:ke};a["default"].use(x["a"]);var _e=new x["a"].Store({modules:{board:ae,list:ue,card:ge,user:ye,notification:je}}),Re=r("323e"),Te=r.n(Re);a["default"].use(Q["a"]);var De=new Q["a"]({mode:"history",base:"/",routes:[{path:"/",name:"landing",meta:{showNavbar:!1},component:function(){return r.e("chunk-5cc018c9").then(r.bind(null,"bede"))}},{path:"/home",name:"home",meta:{showNavbar:!0},component:function(){return r.e("chunk-2855c197").then(r.bind(null,"bb51"))},beforeEnter:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_e.dispatch("board/getBoards");case 3:n(),e.next=9;break;case 6:throw e.prev=6,e.t0=e["catch"](0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));function t(t,r,n){return e.apply(this,arguments)}return t}()},{path:"/boards/:boardId",name:"board",meta:{showNavbar:!0},component:function(){return r.e("chunk-2cf527b6").then(r.bind(null,"5d6d"))},beforeEnter:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_e.dispatch("board/getBoard",t.params.boardId);case 3:n(),e.next=9;break;case 6:throw e.prev=6,e.t0=e["catch"](0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));function t(t,r,n){return e.apply(this,arguments)}return t}(),children:[{path:"cards/:id",name:"card",meta:{showNavbar:!0},component:function(){return r.e("chunk-9a4c20d4").then(r.bind(null,"7cd5"))}}]},{path:"/users",name:"user",meta:{showNavbar:!0},component:function(){return r.e("chunk-32bb59cb").then(r.bind(null,"1511"))},beforeEnter:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_e.dispatch("user/getUser");case 3:n(),e.next=9;break;case 6:throw e.prev=6,e.t0=e["catch"](0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));function t(t,r,n){return e.apply(this,arguments)}return t}()},{path:"/login",name:"login",meta:{showNavbar:!1},component:function(){return r.e("chunk-3eec072e").then(r.bind(null,"a55b"))}},{path:"/signup",name:"signup",meta:{showNavbar:!1},component:function(){return r.e("chunk-ace216c4").then(r.bind(null,"34c3"))}},{path:"*",name:"NotFound",meta:{showNavbar:!0},component:function(){return r.e("chunk-2d0e5e97").then(r.bind(null,"9703"))}}]});De.beforeEach((function(e,t,r){Te.a.start(),r()})),De.afterEach((function(){Te.a.done()}));var Ae=De;r("b972"),r("def6"),r("a5d8");a["default"].config.productionTip=!1,new a["default"]({router:Ae,store:_e,render:function(e){return e(V)}}).$mount("#app"),Ae.beforeResolve(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r,n){var a,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=localStorage.getItem("isLogin"),o=new Date(localStorage.getItem("expiration")),c=new Date,"true"!==a){e.next=10;break}if(!(o>c)){e.next=9;break}return e.next=7,_e.dispatch("user/getUser");case 7:e.next=10;break;case 9:_e.commit("account/SET_logout");case 10:n();case 11:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}())},"85ec":function(e,t,r){},def6:function(e,t,r){},fb66:function(e,t,r){}});
//# sourceMappingURL=app.ae6ab82a.js.map