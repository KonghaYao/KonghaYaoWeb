(function(e){function t(t){for(var a,c,o=t[0],s=t[1],u=t[2],d=0,l=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&l.push(i[c][0]),i[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(l.length)l.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var o=n[c];0!==i[o]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},c={app:0},i={app:0},r=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-13d0bd09":"845c1978","chunk-1609f927":"66dd7ad3","chunk-19ffab4d":"fecb5741","chunk-20db743f":"57080594","chunk-1333ca46":"06318e04","chunk-5d505045":"da9a688d","chunk-0bf04ce1":"2e3e205a","chunk-b521e938":"ffc51dd2","chunk-b5e31dc0":"22ab2077","chunk-72ad2dcc":"8ce214ba","chunk-3a5d8380":"caf88749","chunk-5b980c74":"43bd918a","chunk-6bba4862":"b5a77273","chunk-73ae5c84":"4fd06133","chunk-d7c177e0":"03ec7c66","chunk-ece50bec":"e06e0fda"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-13d0bd09":1,"chunk-1609f927":1,"chunk-19ffab4d":1,"chunk-0bf04ce1":1,"chunk-b521e938":1,"chunk-b5e31dc0":1,"chunk-72ad2dcc":1,"chunk-3a5d8380":1,"chunk-5b980c74":1,"chunk-6bba4862":1,"chunk-73ae5c84":1,"chunk-d7c177e0":1,"chunk-ece50bec":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-13d0bd09":"589d67ac","chunk-1609f927":"b8410fe6","chunk-19ffab4d":"6b31d824","chunk-20db743f":"31d6cfe0","chunk-1333ca46":"31d6cfe0","chunk-5d505045":"31d6cfe0","chunk-0bf04ce1":"a1830020","chunk-b521e938":"fccd7fae","chunk-b5e31dc0":"89fcbae3","chunk-72ad2dcc":"640e1c90","chunk-3a5d8380":"39806772","chunk-5b980c74":"9830de25","chunk-6bba4862":"82be24ed","chunk-73ae5c84":"6f9641c5","chunk-d7c177e0":"bf79bcf1","chunk-ece50bec":"7ab48249"}[e]+".css",i=s.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var u=r[o],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===a||d===i))return t()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){u=l[o],d=u.getAttribute("data-href");if(d===a||d===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete c[e],f.parentNode.removeChild(f),n(r)},f.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){c[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=r);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=o(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",l.name="ChunkLoadError",l.type=a,l.request=c,n[1](l)}i[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="https://cdn.jsdelivr.net/gh/KonghaYao/KonghaYaoWeb/dist/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1984:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("2909");n("d81d"),n("99af"),n("0481");function c(e,t){var n;return function(){var a=arguments,c=this;n&&clearTimeout(n),n=setTimeout((function(){n=void 0,e.apply(c,a)}),t||0)}}function i(e){for(var t,n=arguments.length,c=new Array(n>1?n-1:0),i=1;i<n;i++)c[i-1]=arguments[i];var r=["animated"].concat(Object(a["a"])(c.flat())).map((function(e){return"animate__"+e}));(t=e.classList).add.apply(t,Object(a["a"])(r)),e.$animate||(e.addEventListener("animationend",(function(){var t;(t=e.classList).remove.apply(t,Object(a["a"])(r))})),e.$animate=!0)}i=c(i,10)},"1e2d":function(e,t,n){},2395:function(e,t,n){},4882:function(e,t,n){},"49c3":function(e,t,n){"use strict";n("4b4e")},"4b4e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("loadingAnimation",{directives:[{name:"show",rawName:"v-show",value:e.loadingVisiable,expression:"loadingVisiable"}],ref:"loading",attrs:{clas:"mask"},on:{animationend:e.loaded}}),n("div",{staticClass:"header"},[n("MENU",{staticClass:"btn-fix"})],1),n("transition",{attrs:{name:"first","enter-active-class":"animate__animated animate__backInLeft","leave-active-class":"animate__animated animate__backOutRight"}},[n("router-view",{staticClass:"main"})],1)],1)},i=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loadingAnimation"},[n("div",{staticClass:"sameHeight"},[n("fiveRound",{staticClass:"fiveRound",attrs:{animateStart:e.fiveRoundAnimate}}),n("embed",{staticClass:"animate__animated animate__fadeInUp",attrs:{src:"./logo.svg"}})],1),n("signature",{attrs:{src:"./signature.svg"},on:{animationend:e.end}})],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 411.79 189.5"}},[n("g",{attrs:{id:"图层_2","data-name":"图层 2"}},[n("g",{ref:"奥运五环",attrs:{id:"成品层"}},[n("path",{staticClass:"cls-5",attrs:{"fill-opacity":"0","stroke-opacity":"0",d:"M129.31,60.11A64.5,64.5,0,1,0,65,129.5c1.26,0,2.5,0,3.74-.11-.13-1.61-.19-3.24-.19-4.89s.07-3.44.2-5.13c-1.24.09-2.49.13-3.75.13a54.5,54.5,0,1,1,54.38-58q.12,1.76.12,3.54a52.92,52.92,0,0,1-.43,6.82A54.65,54.65,0,0,1,79,117.68a52.92,52.92,0,0,0-.43,6.82q0,1.78.12,3.54a64.63,64.63,0,0,0,50.62-57.91q.21-2.53.21-5.13C129.5,63.36,129.44,61.73,129.31,60.11Z"}}),n("path",{staticClass:"cls-3",attrs:{"fill-opacity":"0","stroke-opacity":"0",d:"M197.4,128.94a64.49,64.49,0,0,1-128.65.45c-.13-1.61-.19-3.24-.19-4.89s.07-3.44.2-5.13a64.62,64.62,0,0,1,50.63-57.91,63.63,63.63,0,0,1,9.93-1.35c1.24-.07,2.48-.11,3.74-.11a64.47,64.47,0,0,1,64.25,58.82,54.1,54.1,0,0,1-10.4-2.73,54.67,54.67,0,0,0-34.86-42.68,54.57,54.57,0,0,0-19-3.41c-1.26,0-2.52,0-3.76.13a53.72,53.72,0,0,0-10.22,1.69A54.62,54.62,0,0,0,79,117.68a52.92,52.92,0,0,0-.43,6.82q0,1.78.12,3.54a54.5,54.5,0,0,0,108.83-1.21A64.58,64.58,0,0,0,197.4,128.94Z"}}),n("path",{staticClass:"cls-2",attrs:{"fill-opacity":"0","stroke-opacity":"0",d:"M270.4,65c0,1.8-.07,3.59-.23,5.36A64.63,64.63,0,0,1,222,127.46c-.05-1-.08-2-.08-3a54.21,54.21,0,0,1,.53-7.58A54.51,54.51,0,0,0,260.4,65c0-1,0-2-.08-3a54.5,54.5,0,0,0-108.87.63c0,.77,0,1.55,0,2.33a54.52,54.52,0,0,0,60.77,54.14c-.15,1.77-.22,3.56-.22,5.36,0,1.58.06,3.15.17,4.7q-3.08.3-6.22.3a64.47,64.47,0,0,1-64.25-58.82c-.17-1.87-.25-3.77-.25-5.68,0-1.49,0-3,.16-4.44a64.5,64.5,0,0,1,128.67-.26C270.34,61.85,270.4,63.42,270.4,65Z"}}),n("path",{staticClass:"cls-1",attrs:{"fill-opacity":"0","stroke-opacity":"0",d:"M340.73,119.16A64.66,64.66,0,0,0,292.38,62a63.32,63.32,0,0,0-9.91-1.71q-3-.28-6-.28t-6.22.3A63.36,63.36,0,0,0,260.32,62a64.64,64.64,0,0,0-48.15,57.1c-.15,1.77-.22,3.56-.22,5.36,0,1.58.06,3.15.17,4.7a64.5,64.5,0,0,0,128.66,0c.11-1.56.17-3.13.17-4.72C341,122.7,340.88,120.92,340.73,119.16Zm-9.86,8.35A54.5,54.5,0,0,1,222,127.46c-.05-1-.08-2-.08-3A54.47,54.47,0,0,1,276.45,70a52.92,52.92,0,0,1,6.07.34,54,54,0,0,1,10.3,2.17,54.51,54.51,0,0,1,38.13,52C331,125.51,330.92,126.51,330.87,127.51Z"}}),n("path",{staticClass:"cls-4",attrs:{"fill-opacity":"0","stroke-opacity":"0",d:"M346.79.5a64.58,64.58,0,0,0-64.33,59.78A63.32,63.32,0,0,1,292.37,62a54.5,54.5,0,1,1,54.42,57.51,52.92,52.92,0,0,1-6.07-.34,54,54,0,0,1-10.3-2.17,54.64,54.64,0,0,1-37.61-44.48,54,54,0,0,0-10.3-2.17,64.66,64.66,0,0,0,48.35,57.17,63.32,63.32,0,0,0,9.91,1.71q3,.28,6,.28a64.5,64.5,0,0,0,0-129Z"}})])])])},u=[],d={data:function(){return{start:{}}},mounted:function(){var e=this,t=this.$refs.奥运五环.querySelectorAll("path");this.targets=t,this.start=this.$anime({targets:t,delay:anime.stagger(200),"stroke-opacity":1,strokeDashoffset:[this.$anime.setDashoffset,0],easing:"easeInOutSine",duration:500,loop:1,complete:function(){e.$anime({targets:t,"fill-opacity":1,"stroke-opacity":0,easing:"easeInOutSine",duration:500,delay:anime.stagger(300),loop:1,complete:function(){console.log("Anime")}})}})},methods:{},props:["animateStart"],watch:{animateStart:function(e){var t=this;e&&this.$anime({targets:this.targets,"stroke-opacity":0,"fill-opacity":0,delay:anime.stagger(500),easing:"easeInOutSine",duration:3e3,loop:1,complete:function(){t.start.play()}})}}},l=d,f=(n("49c3"),n("2877")),h=Object(f["a"])(l,s,u,!1,null,"61bde130",null),m=h.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],ref:"svg",staticClass:"signature",on:{load:e.animate}})},b=[],v=n("2909"),g=n("1da1"),k=(n("96cf"),n("d3b7"),{props:["src"],data:function(){return{show:!1}},mounted:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.src).then((function(e){return e.text()}));case 2:e.$refs.svg.innerHTML=t.sent,e.animate();case 4:case"end":return t.stop()}}),t)})))()},methods:{animate:function(){var e=this,t=this;setTimeout((function(){e.show=!0,e.$anime({targets:Object(v["a"])(t.$refs.svg.querySelectorAll("path")).reverse(),strokeDashoffset:[e.$anime.setDashoffset,0],easing:"easeInOutSine",fill:"#000",duration:500,delay:function(e,t){return 50*t},loop:!1,complete:function(e){t.$emit("animationend")}})}),100)}}}),y=k,_=(n("ed4f"),Object(f["a"])(y,p,b,!1,null,"bce5ccda",null)),I=_.exports,w={name:"loadingAnimation",components:{signature:I,fiveRound:m},data:function(){return{fiveRoundAnimate:!1}},methods:{end:function(){this.$emit("animationend")}}},R=w,C=(n("db3a"),Object(f["a"])(R,r,o,!1,null,"2c59d6f4",null)),x=C.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-menu",{attrs:{mode:"horizontal",router:!0}},[n("el-menu-item",{attrs:{index:"/Index"}},[n("span",{staticClass:"header"},[n("embed",{staticClass:"logo",attrs:{src:"./logo.svg",type:"image/svg+xml"}}),e._v(" 奥运风采展览馆 ")])]),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("span",{staticClass:"header"},[n("i",{staticClass:"el-icon-location"}),e._v("奥运风采馆")])]),n("el-menu-item",{attrs:{index:encodeURI("/奥运风采馆")}},[n("div",[e._v("奥运会介绍")])]),n("el-menu-item-group",[n("template",{slot:"title"},[e._v("各国风采展示")]),n("el-menu-item",{attrs:{index:encodeURI("/奥运风采馆/各国风采展示/各国奖牌折线图")}},[n("div",{staticClass:"name"},[e._v("各国奖牌折线图")])]),n("el-menu-item",{attrs:{index:encodeURI("/奥运风采馆/各国风采展示/各国奖牌竞争图")}},[n("div",{staticClass:"name"},[e._v("各国奖牌竞争图")])])],2)],2),n("el-submenu",{attrs:{index:"3"}},[n("template",{slot:"title"},[n("span",{staticClass:"header"},[n("i",{staticClass:"el-icon-location"}),e._v("中国馆")])]),n("el-menu-item",{attrs:{index:encodeURI("/中国馆/BMI指数报告/中国BMI指数分布图")}},[n("div",[e._v("BMI指数报告")])]),n("el-menu-item",{attrs:{index:encodeURI("/中国馆/中国奖牌旭日图")}},[n("div",[e._v("中国奖牌旭日图")])])],2),n("el-submenu",{attrs:{index:"4"}},[n("template",{slot:"title"},[n("span",{staticClass:"header"},[n("i",{staticClass:"el-icon-location"}),e._v("体育项目馆")])]),n("div",{staticClass:"list"},e._l(e.project,(function(t,a){return n("el-menu-item",{key:"2-"+a,attrs:{index:encodeURI("/体育项目馆/"+t)}},[n("div",[e._v(e._s(t))])])})),1)],2),n("el-submenu",{attrs:{index:"5"}},[n("template",{slot:"title"},[n("div",{staticClass:"header"},[n("i",{staticClass:"el-icon-location"}),e._v("开发者相关")])]),n("el-menu-item",{attrs:{index:encodeURI("/感谢名单/")}},[e._v(" 感谢名单 ")])],2),n("div",{staticStyle:{flex:"1",outline:"none"}}),n("div",{staticClass:"box",staticStyle:{outline:"none"}},[n("routerBar")],1)],1)],1)},$=[],O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-breadcrumb",{staticClass:"bar",attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",{attrs:{to:encodeURI("/奥运风采展览馆")}},[e._v(" 奥运风采展览馆 ")]),e._l(e.levelList,(function(t,a){return n("el-breadcrumb-item",{key:t+a,attrs:{to:t.path}},[e._v(" "+e._s(t.name)+" ")])}))],2)},A=[],j=(n("d81d"),n("13d5"),n("1276"),n("ac1f"),n("99af"),{name:"RouterBar",data:function(){return{levelList:[]}},watch:{$route:function(e){this.getBreadcrumb()}},created:function(){this.getBreadcrumb()},methods:{getBreadcrumb:function(){var e=this.$route.path.split("/").reduce((function(e,t){return t&&(t=decodeURI(t),e.push({name:t,path:e.reduce((function(e,t){return"".concat(e.path,"/").concat(t)}),"")+"/"+t})),e}),[]).map((function(e){return e.path=encodeURI(e.path),e}));this.levelList=e}}}),M=j,S=(n("e8c2"),Object(f["a"])(M,O,A,!1,null,"3303673e",null)),B=S.exports,E={components:{routerBar:B},data:function(){return{project:["田径","赛艇","自行车","棒球","游泳","拳击","排球","皮划艇","马术","篮球","足球","体操","曲棍球","手球","举重","柔道","摔跤","羽毛球","垒球","现代五项","网球","击剑","乒乓球","射击","铁人三项","射箭","帆船","跆拳道","跳水","水球","花样游泳","艺术体操","橄榄球","蹦床","沙滩排球","高尔夫球","短道速滑","速度滑冰","花样滑冰","越野滑雪","高山滑雪","自由式滑雪","单板滑雪","跳台滑雪","有舵雪橇","雪橇","俯式冰橇","冰球","冰壶","冬季两项","北欧两项"]}},watch:{}},L=E,P=(n("fc8e"),Object(f["a"])(L,U,$,!1,null,"4738225c",null)),T=P.exports,q=n("1984"),N={components:{MENU:T,loadingAnimation:x},data:function(){return{background:"./logo.svg",show:!0,animate:!1,loadingAnimateEnd:!1,loadingVisiable:!0}},mounted:function(){document.body.scrollIntoView(),document.body.style.overflow="hidden",this.show=!this.$route.params.project},methods:{loaded:function(){this.$refs.loading.$el.classList.add("animate__animated","animate__fadeOut","animate__delay-1s"),this.$refs.loading.$el.addEventListener("animationend",function(){this.$refs.loading.$el.classList.remove("animate__animated","animate__fadeOut","animate__delay-1s"),this.loadingVisiable=!1,document.body.style.overflow="scroll"}.bind(this)),this.loadingAnimateEnd=!0},test:function(){Object(q["a"])(this.$refs.test.$el,"bounce")}},watch:{"$route.params.project":function(e){this.show=!e}}},D=N,Z=(n("7c55"),Object(f["a"])(D,c,i,!1,null,null,null)),G=Z.exports,V=(n("3ca3"),n("ddb0"),n("8c4f"));a["default"].use(V["a"]);var Y=[{path:encodeURI("/主页"),name:"主页",component:function(){return n.e("chunk-5b980c74").then(n.bind(null,"7cc2"))}},{path:encodeURI("/奥运风采馆"),name:"奥运风采馆",component:function(){return n.e("chunk-73ae5c84").then(n.bind(null,"b290"))},redirect:encodeURI("奥运风采馆/奥运会介绍/每年奖牌趋势/Summer/2016/Gold"),children:[{path:encodeURI("奥运会介绍"),name:"奥运会介绍",component:function(){return Promise.all([n.e("chunk-20db743f"),n.e("chunk-1333ca46"),n.e("chunk-b521e938"),n.e("chunk-b5e31dc0")]).then(n.bind(null,"8666"))},children:[{path:encodeURI("每年奖牌趋势")+"/:Season/:Year/:Medal",name:"奥林匹克运动会介绍",component:function(){return Promise.all([n.e("chunk-20db743f"),n.e("chunk-1333ca46"),n.e("chunk-b521e938")]).then(n.bind(null,"31ae"))},props:!0},{path:"*",redirect:encodeURI("每年奖牌趋势/Summer/2016/Gold")}]},{path:encodeURI("每年奖牌趋势")+"/:Season/:Year/:Medal",name:"每年奖牌趋势",component:function(){return Promise.all([n.e("chunk-20db743f"),n.e("chunk-1333ca46"),n.e("chunk-b521e938")]).then(n.bind(null,"31ae"))},props:!0},{path:encodeURI("各国风采展示")+"/:where",name:"各国风采展示",component:function(){return Promise.all([n.e("chunk-20db743f"),n.e("chunk-5d505045"),n.e("chunk-72ad2dcc")]).then(n.bind(null,"3a64"))},props:!0},{path:"*",redirect:encodeURI("奥运会介绍/每年奖牌趋势/Summer/2016/Gold")}]},{path:encodeURI("/中国馆"),name:"中国馆",component:function(){return n.e("chunk-3a5d8380").then(n.bind(null,"e9b2"))},redirect:encodeURI("/中国馆/中国奖牌旭日图"),children:[{path:encodeURI("BMI指数报告"),name:"BMI指数报告",component:function(){return n.e("chunk-1609f927").then(n.bind(null,"9691"))},children:[{path:encodeURI("中国BMI指数分布图"),name:"中国BMI指数分布图",component:function(){return n.e("chunk-ece50bec").then(n.bind(null,"46a2"))}},{path:encodeURI("体育项目BMI对比图"),name:"体育项目BMI对比图",component:function(){return n.e("chunk-13d0bd09").then(n.bind(null,"10bb"))}},{path:"*",redirect:encodeURI("中国BMI指数分布图")}]},{path:encodeURI("中国奖牌旭日图"),name:"中国奖牌旭日图",component:function(){return Promise.all([n.e("chunk-20db743f"),n.e("chunk-1333ca46"),n.e("chunk-5d505045"),n.e("chunk-0bf04ce1")]).then(n.bind(null,"1a57"))}},{path:"*",redirect:encodeURI("/中国馆/中国奖牌旭日图")}]},{name:"体育项目馆",path:encodeURI("/体育项目馆/:project"),component:function(){return n.e("chunk-19ffab4d").then(n.bind(null,"c484"))}},{name:"感谢名单",path:encodeURI("/感谢名单"),component:function(){return n.e("chunk-d7c177e0").then(n.bind(null,"77fb"))}},{name:"世界地图",path:encodeURI("/世界地图"),component:function(){return n.e("chunk-6bba4862").then(n.bind(null,"980b"))}},{path:"/中国馆",redirect:encodeURI("/中国馆/中国奖牌旭日图")},{path:encodeURI("/体育项目馆"),redirect:encodeURI("/体育项目馆/index")},{path:"*",redirect:encodeURI("/主页")}],H=V["a"].prototype.push;V["a"].prototype.push=function(e){return H.call(this,e).catch((function(e){ae.$message({duration:1e3,type:"warning",message:"您已经在这一页了！"})}))};var K=new V["a"]({routes:Y}),J=K,z=(n("77ed"),n("f5df1"),n("1209")),F=n("7212"),W=n.n(F),Q=(n("bbe3"),n("159b"),n("5c96")),X=[Q["Breadcrumb"],Q["BreadcrumbItem"],Q["Avatar"],Q["MenuItem"],Q["MenuItemGroup"],Q["Link"],Q["Switch"],Q["Menu"],Q["Radio"],Q["RadioGroup"],Q["RadioButton"],Q["Cascader"],Q["Button"],Q["Carousel"],Q["Dialog"],Q["Row"],Q["Col"],Q["Drawer"],Q["Submenu"],Q["Image"],Q["Card"],Q["CarouselItem"],Q["Option"],Q["Select"],Q["Tabs"],Q["TabPane"]],ee={install:function(e){X.forEach((function(t){return e.use(t)}))}};a["default"].use(Q["Loading"].directive),a["default"].prototype.$loading=Q["Loading"].service,a["default"].prototype.$message=Q["Message"];var te=ee;n("0fae");a["default"].use(W.a),a["default"].prototype.$anime=z["a"],window.anime=z["a"],a["default"].use(te),a["default"].config.productionTip=!1;var ne=new a["default"]({router:J,render:function(e){return e(G)}}).$mount("#app");window.app=ne;var ae=t["default"]=ne},"7c55":function(e,t,n){"use strict";n("2395")},"85d7":function(e,t,n){},b88b:function(e,t,n){},db3a:function(e,t,n){"use strict";n("85d7")},e8c2:function(e,t,n){"use strict";n("b88b")},ed4f:function(e,t,n){"use strict";n("1e2d")},fc8e:function(e,t,n){"use strict";n("4882")}});
//# sourceMappingURL=app.a661de84.js.map