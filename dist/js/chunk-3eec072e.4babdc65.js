(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3eec072e"],{"181a":function(t,e,a){"use strict";a("214f")},"214f":function(t,e,a){},a55b:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"min-h-screen flex items-start justify-center bg-gray-50"},[a("div",{staticClass:"lg:w-30% lg:mt-36 mx-auto mt-24 space-y-7 sm:w-1/2  2xl:w-1/4 2xl:mt-40"},[a("div",{staticClass:"logo mx-auto h-12 w-auto text-primary text-5xl"},[a("AppIcon",{attrs:{icon:["fab","trello"]}}),a("span",{staticClass:"font-bold"},[t._v(" Trello ")])],1),a("t-card",{staticClass:"shadow-md"},[a("h2",{staticClass:"mt-6 text-center text-lg font-extrabold text-texColor-priamry"},[t._v(" 登入 Trello ")]),a("div",{staticClass:"flex flex-col justify-start items-start p-8"},[a("div",{staticClass:"form-group w-full flex flex-col justify-center items-start space-y-6"},[a("ValidationInput",{staticClass:"w-full",attrs:{rules:"required|email",name:"email",type:"email",autocomplete:"email",placeholder:"電子郵件",className:["signup-login-input"]},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("ValidationInput",{staticClass:"w-full",attrs:{rules:"required|min:3",name:"password",type:"password",autocomplete:"current-password",placeholder:"密碼",className:["signup-login-input"]},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("t-button",{staticClass:"w-full mt-12",attrs:{type:"button"},on:{click:t.login}},[t._v(" 登入 ")]),a("router-link",{staticClass:"w-full text-blue-500 border-t border-gray-300 mt-10 pt-6",attrs:{to:{name:"signup"}}},[t._v(" 註冊帳號 ")])],1)])],1)])},l=[],n=(a("96cf"),a("3b8d")),r=a("dbbc"),i={components:{ValidationInput:r["a"]},data:function(){return{email:"",password:""}},methods:{login:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={email:this.email,password:this.password},t.next=3,this.$store.dispatch("user/login",e);case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},o=i,u=a("2877"),c=Object(u["a"])(o,s,l,!1,null,"20865f42",null);e["default"]=c.exports},dbbc:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ValidationObserver",{ref:"input",attrs:{slim:""},scopedSlots:t._u([{key:"default",fn:function(e){e.valid;return[a("ValidationProvider",{attrs:{tag:"div",rules:t.rules,name:t.name,vid:t.vid},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,l=e.classes;return[a("div",{class:l},[a("t-input",{class:t.className,attrs:{type:t.type,autocomplete:t.autocomplete,placeholder:t.placeholder},model:{value:t.innerValue,callback:function(e){t.innerValue=e},expression:"innerValue"}}),a("span",{staticClass:"float-left mt-1 text-sm"},[t._v(t._s(s[0]))])],1)]}}],null,!0)})]}}])})},l=[],n=a("7bb1"),r={components:{ValidationProvider:n["b"],ValidationObserver:n["a"]},props:{rules:{type:[String,Object],default:""},name:{type:String,default:""},vid:{type:String,default:void 0},type:{type:String,default:"text"},autocomplete:{type:String},className:{type:Array},placeholder:{type:String},value:{type:null,default:""}},created:function(){this.value&&(this.innerValue=this.value)},data:function(){return{innerValue:""}},watch:{innerValue:function(t){this.$emit("input",t)},value:function(t){t!==this.innerValue&&(this.innerValue=t)}}},i=r,o=(a("181a"),a("2877")),u=Object(o["a"])(i,s,l,!1,null,"da907d88",null);e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-3eec072e.4babdc65.js.map