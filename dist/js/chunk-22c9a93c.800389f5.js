(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22c9a93c"],{"1d85":function(t,e,n){"use strict";n("a338")},2935:function(t,e,n){},3835:function(t,e,n){"use strict";function a(t){if(Array.isArray(t))return t}n.d(e,"a",(function(){return s}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function r(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],a=!0,r=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(a=(o=s.next()).done);a=!0)if(n.push(o.value),e&&n.length===e)break}catch(c){r=!0,i=c}finally{try{a||null==s["return"]||s["return"]()}finally{if(r)throw i}}return n}}var i=n("06c5");function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,e){return a(t)||r(t,e)||Object(i["a"])(t,e)||o()}},"4b9f":function(t,e,n){"use strict";n("2935")},"980b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"Box",staticClass:"Box"},[n("div",{ref:"outer",attrs:{id:"WorldMap"}}),n("div",{staticClass:"tooltips"},[n("div",[t._v(t._s(t.tooltips.Year))]),n("div",[t._v(t._s(t.tooltips.举办时间))]),n("div",[t._v(t._s(t.tooltips.举办国家)+" "+t._s(t.tooltips.主办城市))]),n("div",[t._v(t._s(t.tooltips.口号||""))]),n("transition",[n("i",{class:{btn:!0,"el-icon-video-pause":t.timeline.paused,"el-icon-video-play":!t.timeline.paused},attrs:{circle:""},on:{click:t.pauseAndPlay}})])],1)])},r=[],i=n("3835"),o=n("2909"),s=n("1da1"),c=(n("96cf"),n("d3b7"),n("99af"),n("1276"),n("ac1f"),n("b0c0"),n("d81d"),n("159b"),n("1209")),u={data:function(){return{points:[],viewBox:[],svg:null,dataset:{},timeline:{},xLine:{},yLine:{},tooltips:{Year:1896,"届数":"第01届","赛事名称":"1896年雅典奥运会","举办国家":"希腊","主办城市":"雅典","举办时间":"1896年04月06日-1896年04月15日","口号":null,Season:"Summer",url:null,name:null,imgUrl:null,text:"1896年"}}},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("./奥运会赛事统一数据最终添加赛事介绍.json",{cache:"force-cache"}).then((function(t){return t.json()}));case 2:return t.dataset=e.sent,e.next=5,fetch("./worldMap.svg").then((function(t){return t.text()}));case 5:t.$refs.outer.innerHTML=e.sent,n=[].concat(Object(o["a"])(t.$refs.outer.querySelectorAll("[data-name$=summer]")),Object(o["a"])(t.$refs.outer.querySelectorAll("[data-name$=winter]"))).sort((function(t,e){return t.dataset.name.split("-")[0]-e.dataset.name.split("-")[0]})),a=n.map((function(t){var e=t.dataset.name.split("-"),n=Object(i["a"])(e,2),a=n[0],r=n[1];return t.style.opacity=0,{year:a,season:r}})),t.xLine=t.$refs.outer.querySelector("line#x"),t.yLine=t.$refs.outer.querySelector("line#y"),r=c["a"].timeline({duration:3e3}),t.points=a,t.timeline=r,t.svg=t.$refs.outer.children[0],t.viewBox=t.svg.getAttribute("viewBox").split(" "),s=t,n.forEach((function(t){r.add({targets:t,scale:[3,3,0],opacity:.7,begin:function(t){var e=t.animatables[0].target.getBBox(),n=e.x,a=e.y,r=e.width,o=e.height,u=Object(i["a"])(s.viewBox,4),l=u[2],d=u[3],f=n+r/2,p=a+o/2;parseInt(100*f/l)&&(s.svg.style.transformOrigin="".concat(parseInt(100*f/l),"% ").concat(parseInt(100*p/d),"% "),Object(c["a"])({targets:s.yLine,y1:p,y2:p,duation:500}),Object(c["a"])({targets:s.xLine,x1:f,x2:f,duation:500}),s.dataset.some((function(e){return e.Year==t.animatables[0].target.dataset.name.split("-")[0]&&(s.tooltips=e,!0)})))}},"+=0")}));case 17:case"end":return e.stop()}}),e)})))()},methods:{pauseAndPlay:function(){this.timeline[this.timeline.paused?"play":"pause"]()}}},l=u,d=(n("1d85"),n("4b9f"),n("2877")),f=Object(d["a"])(l,a,r,!1,null,"613552cb",null);e["default"]=f.exports},a338:function(t,e,n){}}]);
//# sourceMappingURL=chunk-22c9a93c.800389f5.js.map