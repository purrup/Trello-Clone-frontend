(function(e){function t(t){for(var r,s,c=t[0],u=t[1],i=t[2],f=0,d=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},1174:function(e,t,n){"use strict";var r=n("eb17"),o=n.n(r);o.a},"158c":function(e,t,n){"use strict";var r=n("5410"),o=n.n(r);o.a},"17ad":function(e,t,n){},5410:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("ecee"),a=n("c074"),s=n("b702"),c=n("f2d1"),u=n("ad3d");o["c"].add(a["a"],s["a"],c["a"]),r["a"].component("AppIcon",u["a"]);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},l=[],f=(n("034f"),n("2877")),d={},p=Object(f["a"])(d,i,l,!1,null,null,null),m=p.exports,b=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"board bg-blue-500"},[n("AppHeader"),n("div",{staticClass:"flex flex-row items-start"},[n("draggable",e._b({model:{value:e.columns,callback:function(t){e.columns=t},expression:"columns"}},"draggable",e.dragOptions,!1),[n("transition-group",{staticClass:"flex flex-row items-start"},e._l(e.board.columns,(function(t,r){return n("BoardColumn",{key:t.name,attrs:{column:t,columnIndex:r,board:e.board}})})),1)],1),n("div",{staticClass:"column flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newColumnName,expression:"newColumnName"}],staticClass:"p-2 mr-2 flex-grow bg-white border-none text-base",attrs:{type:"text",placeholder:"+ Add New Column"},domProps:{value:e.newColumnName},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.createColumn(t)},input:function(t){t.target.composing||(e.newColumnName=t.target.value)}}})])],1),e.isTaskOpen?n("div",{staticClass:"task-bg w-screen h-screen absolute",on:{click:function(t){return t.target!==t.currentTarget?null:e.close(t)}}},[n("router-view")],1):e._e()],1)},h=[],y=(n("8e6e"),n("ac6a"),n("456d"),n("7f7f"),n("bd86")),g=n("2f62"),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"column cursor-pointer"},[n("div",{staticClass:"flex justify-between items-center mb-2 font-bold",on:{mouseover:function(t){e.showRemoveIcon=!0},mouseout:function(t){e.showRemoveIcon=!1}}},[e._v("\n    "+e._s(e.column.name)+"\n    "),n("AppIcon",{directives:[{name:"show",rawName:"v-show",value:e.showRemoveIcon,expression:"showRemoveIcon"}],staticClass:"removeIcon hover:text-red-500 transition duration-500 ease-in-out",attrs:{icon:["far","trash-alt"]},on:{click:function(t){return t.stopPropagation(),e.removeColumn(t)}}})],1),n("div",[n("draggable",e._b({attrs:{group:"tasks-group","empty-insert-threshold":200},model:{value:e.columnTasks,callback:function(t){e.columnTasks=t},expression:"columnTasks"}},"draggable",e.dragOptions,!1),[n("transition-group",e._l(e.column.tasks,(function(t,r){return n("ColumnTask",{key:t.id,attrs:{task:t,taskIndex:r,column:e.column,columnIndex:e.columnIndex,board:e.board}})})),1)],1),n("input",{staticClass:"block h-10 w-full bg-transparent border-none text-base text-gray-600 placeholder-gray-700",attrs:{type:"text",placeholder:"+ Add New Task"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.createTask(t,e.column.tasks)}}})],1)])},k=[],w=(n("c5f6"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"task cursor-pointer transition duration-300 ease-in-out bg-white hover:bg-gray-300",on:{click:function(t){return e.goToTask(e.task)},mouseover:function(t){e.showRemoveIcon=!0},mouseout:function(t){e.showRemoveIcon=!1}}},[n("div",{staticClass:"head-wrapper w-full flex flex-row justify-between"},[n("span",{staticClass:"w-auto flex-shrink-0 font-bold"},[e._v("\n    "+e._s(e.task.name)+"\n    ")]),n("AppIcon",{directives:[{name:"show",rawName:"v-show",value:e.showRemoveIcon,expression:"showRemoveIcon"}],staticClass:"removeIcon hover:text-red-500 transition duration-500 ease-in-out",attrs:{icon:["far","trash-alt"]},on:{click:function(t){return t.stopPropagation(),e.removeTask(t)}}})],1),e.task.description?n("AppIcon",{staticClass:"mt-2",attrs:{icon:"bars"}}):e._e()],1)}),x=[],j={props:{column:{type:Object,required:!0},columnIndex:{type:Number,required:!0},task:{type:Object,required:!0},taskIndex:{type:Number,required:!0}},data:function(){return{showRemoveIcon:!1}},methods:{goToTask:function(e){return this.$router.push({name:"task",params:{id:e.id}})},removeTask:function(){var e=this.columnIndex,t=this.taskIndex;this.$store.commit("REMOVE_TASK",{columnIndex:e,taskIndex:t})}}},C=j,_=(n("5804"),Object(f["a"])(C,w,x,!1,null,null,null)),P=_.exports,T=n("310e"),A=n.n(T),E={components:{ColumnTask:P,draggable:A.a},data:function(){return{showRemoveIcon:!1}},props:{column:{type:Object,required:!0},columnIndex:{type:Number,required:!0},board:{type:Object,required:!0}},computed:{columnTasks:{get:function(){return this.column.tasks},set:function(e){var t=this.columnIndex;this.$store.commit("MOVE_TASK",{columnIndex:t,value:e})}},dragOptions:function(){return{animation:200}}},methods:{createTask:function(e,t){this.$store.commit("CREATE_TASK",{tasks:t,name:e.target.value}),e.target.value=""},removeColumn:function(){var e=this.columnIndex;this.$store.commit("REMOVE_COLUMN",e)}}},I=E,S=(n("f9e1"),Object(f["a"])(I,O,k,!1,null,null,null)),N=S.exports;function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){Object(y["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $={components:{BoardColumn:N,draggable:A.a},data:function(){return{newColumnName:""}},computed:R(R({},Object(g["c"])(["board"])),{},{isTaskOpen:function(){return"task"===this.$route.name},columns:{get:function(){return this.board.columns},set:function(e){this.$store.commit("UPDATE_BOARD",e)}},dragOptions:function(){return{animation:100}}}),methods:{close:function(){return this.$router.push({name:"board"})},createColumn:function(){this.$store.commit("CREATE_COLUMN",{name:this.newColumnName}),this.newColumnName=""}}},M=$,U=(n("158c"),Object(f["a"])(M,v,h,!1,null,null,null)),K=U.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"task-view"},[n("div",{staticClass:"flex flex-col flex-grow items-start justify-between px-4"},[n("input",{staticClass:"p-2 w-full mr-2 flex-grow text-xl font-bold",attrs:{type:"text"},domProps:{value:e.task.name},on:{change:function(t){return e.updateTaskProperty(t,"name")},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updateTaskProperty(t,"name")}}}),n("textarea",{staticClass:"relative w-full bg-transparent px-2 border mt-2 h-64 border-none leading-normal",domProps:{value:e.task.description},on:{change:function(t){return e.updateTaskProperty(t,"description")}}})])])},B=[];function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){Object(y["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L={computed:J(J({},Object(g["b"])(["getTask"])),{},{task:function(){return this.getTask(this.$route.params.id)}}),methods:{updateTaskProperty:function(e,t){this.$store.commit("UPDATE_TASK",{task:this.task,key:t,value:e.target.value})}}},H=L,z=(n("6ce9"),Object(f["a"])(H,q,B,!1,null,"1a77a404",null)),F=z.exports;r["a"].use(b["a"]);var G=new b["a"]({mode:"history",base:"/",routes:[{path:"/",name:"board",component:K,children:[{path:"task/:id",name:"task",component:F}]}]});n("ac4d"),n("8a81"),n("5df3"),n("1c4c"),n("6b54");function Q(){return Math.random().toString(16).slice(2)}function W(e){e.subscribe((function(e,t){localStorage.setItem("board",JSON.stringify(t.board))}))}var X={name:"workshop",columns:[{name:"todo",tasks:[{description:"",name:"first task",id:Q(),userAssigned:null},{description:"",name:"second task",id:Q(),userAssigned:null},{description:"",name:"and thrid",id:Q(),userAssigned:null}]},{name:"in-progress",tasks:[{description:"",name:"first task",id:Q(),userAssigned:null}]},{name:"done",tasks:[{description:"",name:"first task",id:Q(),userAssigned:null}]}]};function Y(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Z(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){c=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw a}}}}function Z(e,t){if(e){if("string"===typeof e)return ee(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ee(e,t):void 0}}function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}r["a"].use(g["a"]);var te=JSON.parse(localStorage.getItem("board"))||X,ne=new g["a"].Store({plugins:[W],state:{board:te},getters:{getTask:function(e){return function(t){var n,r=Y(e.board.columns);try{for(r.s();!(n=r.n()).done;){var o,a=n.value,s=Y(a.tasks);try{for(s.s();!(o=s.n()).done;){var c=o.value;if(c.id===t)return c}}catch(u){s.e(u)}finally{s.f()}}}catch(u){r.e(u)}finally{r.f()}}}},mutations:{CREATE_TASK:function(e,t){var n=t.tasks,r=t.name;n.push({name:r,id:Q(),description:""})},CREATE_COLUMN:function(e,t){var n=t.name;e.board.columns.push({name:n,tasks:[]})},UPDATE_TASK:function(e,t){var n=t.task,r=t.key,o=t.value;n[r]=o},MOVE_TASK:function(e,t){var n=t.columnIndex,r=t.value;e.board.columns[n].tasks=r},UPDATE_BOARD:function(e,t){e.board.columns=t},REMOVE_TASK:function(e,t){var n=t.columnIndex,r=t.taskIndex,o=e.board.columns[n].tasks;o.splice(r,1)},REMOVE_COLUMN:function(e,t){e.board.columns.splice(t,1)},UPDATE_BOARD_NAME:function(e,t){e.board.name=t}}}),re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"button",class:e.typeClasses,attrs:{type:"button"}},[e._t("default")],2)},oe=[],ae={props:{type:{type:String}},computed:{typeClasses:function(){switch(this.type){case"danger":return"bg-red";default:return"bg-teal"}}}},se=ae,ce=(n("c104"),Object(f["a"])(se,re,oe,!1,null,"71c3aecb",null)),ue=ce.exports,ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header h-12 flex justify-between items-center overflow-auto pb-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.boardName,expression:"boardName"}],staticClass:"w-auto bg-blue-500 focus:bg-white focus:text-black focus:font-medium text-white border-none font-bold text-2xl",attrs:{type:"text"},domProps:{value:e.boardName},on:{input:function(t){t.target.composing||(e.boardName=t.target.value)}}})])},le=[];function fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(n),!0).forEach((function(t){Object(y["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var pe={computed:de(de({},Object(g["c"])(["board"])),{},{boardName:{get:function(){return this.board.name},set:function(e){this.$store.commit("UPDATE_BOARD_NAME",e)}}})},me=pe,be=(n("1174"),Object(f["a"])(me,ie,le,!1,null,"1c78abc1",null)),ve=be.exports;n("def6");r["a"].component("AppButton",ue),r["a"].component("AppHeader",ve),r["a"].config.productionTip=!1,new r["a"]({router:G,store:ne,render:function(e){return e(m)}}).$mount("#app")},5804:function(e,t,n){"use strict";var r=n("bc54"),o=n.n(r);o.a},"64a9":function(e,t,n){},"6ce9":function(e,t,n){"use strict";var r=n("f4a4"),o=n.n(r);o.a},"85ec":function(e,t,n){},bc54:function(e,t,n){},c104:function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},def6:function(e,t,n){},eb17:function(e,t,n){},f4a4:function(e,t,n){},f9e1:function(e,t,n){"use strict";var r=n("17ad"),o=n.n(r);o.a}});
//# sourceMappingURL=app.9c43839e.js.map