(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32bb59cb"],{1511:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"w-1/4 mx-auto mt-20 bg-gray-50 rounded-md shadow-md md:w-2/5 sm:w-1/2"},[e._m(0),a("div",{staticClass:"w-3/5 mx-auto pt-10 pb-8 grid grid-cols-3 gap-10 text-textColor-primary text-lg"},[a("div",{staticClass:"grid justify-items-start col-span-3"},[a("ValidationInput",{staticClass:"w-full",attrs:{rules:"required",name:"name",type:"name",autocomplete:"name",placeholder:"姓名或暱稱",className:[]},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1),a("div",{staticClass:"grid justify-items-start col-span-3"},[a("ValidationInput",{staticClass:"w-full",attrs:{rules:"required|email",name:"email",type:"email",autocomplete:"email",placeholder:"電子郵件",className:[]},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),e._m(1)])])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"px-10 pt-10 w-full flex justify-start text-textColor-primary font-semibold"},[a("span",{staticClass:"w-full pb-4 border-b border-primary text-2xl "},[e._v(" 個人檔案 ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"grid justify-items-start col-span-2"},[a("button",{staticClass:"inline-flex justify-center rounded-md border border-gray-300 shadow-sm mt-5 px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",attrs:{type:"button"}},[e._v(" 儲存變更 ")])])}],s=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),i=a("2f62"),l=a("dbbc");function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){Object(s["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var c={components:{ValidationInput:l["a"]},computed:o({},Object(i["d"])("user",{user:function(e){return e.user}}))},p=c,d=a("2877"),f=Object(d["a"])(p,r,n,!1,null,"371a500e",null);t["default"]=f.exports},"181a":function(e,t,a){"use strict";a("214f")},"214f":function(e,t,a){},dbbc:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ValidationObserver",{ref:"input",attrs:{slim:""},scopedSlots:e._u([{key:"default",fn:function(t){t.valid;return[a("ValidationProvider",{attrs:{tag:"div",rules:e.rules,name:e.name,vid:e.vid},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors,n=t.classes;return[a("div",{class:n},[a("t-input",{class:e.className,attrs:{type:e.type,autocomplete:e.autocomplete,placeholder:e.placeholder},model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}}),a("span",{staticClass:"float-left mt-1 text-sm"},[e._v(e._s(r[0]))])],1)]}}],null,!0)})]}}])})},n=[],s=a("7bb1"),i={components:{ValidationProvider:s["b"],ValidationObserver:s["a"]},props:{rules:{type:[String,Object],default:""},name:{type:String,default:""},vid:{type:String,default:void 0},type:{type:String,default:"text"},autocomplete:{type:String},className:{type:Array},placeholder:{type:String},value:{type:null,default:""}},created:function(){this.value&&(this.innerValue=this.value)},data:function(){return{innerValue:""}},watch:{innerValue:function(e){this.$emit("input",e)},value:function(e){e!==this.innerValue&&(this.innerValue=e)}}},l=i,u=(a("181a"),a("2877")),o=Object(u["a"])(l,r,n,!1,null,"da907d88",null);t["a"]=o.exports}}]);
//# sourceMappingURL=chunk-32bb59cb.b437a2a8.js.map