(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-098af7ce"],{"1e15":function(e,t,n){},"55e4":function(e,t,n){"use strict";n("1e15")},"5c7f":function(e,t,n){},dd64:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"timeline"},[n("h1",[e._v("奥运金牌榜")]),n("el-timeline",{staticClass:"line"},e._l(e.message,(function(t,s){return n("el-timeline-item",{key:t.name+s,attrs:{timestamp:t.year+"",placement:"top"}},[n("div",{staticClass:"timeline-item"},e._l(t.table,(function(t,s){return n("div",{key:t["运动员/运动队"]+s,staticClass:"goldMan"},[n("div",{staticClass:"nameBox",domProps:{innerHTML:e._s(t["运动员/运动队"])}}),n("div",{domProps:{innerHTML:e._s(t["大项"])}})])})),0)])})),1)],1)},i=[],r=n("1da1"),a=(n("96cf"),n("d3b7"),{mounted:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("./中国奖牌信息.json").then((function(e){return e.json()}));case 2:e.message=t.sent.sort((function(e,t){return e.year-t.year})),e.$notify({type:"success",title:"加载成功",message:"点击运动员名称可以跳转到对应的百度百科查看介绍哦！",position:"bottom-right",duration:0});case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{message:[]}}}),c=a,o=(n("f248"),n("55e4"),n("2877")),u=Object(o["a"])(c,s,i,!1,null,"1e5394a3",null);t["default"]=u.exports},f248:function(e,t,n){"use strict";n("5c7f")}}]);