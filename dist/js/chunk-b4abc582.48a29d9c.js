(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b4abc582"],{"91c7":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"sport"},[e("div",{staticStyle:{width:"100%"}},[t._v("预留")]),e("div",[e("div",[e("img",{staticClass:"picture",attrs:{src:"https://cdn.jsdelivr.net/gh/KonghaYao/KonghaYaoWeb/dist/project/"+(t.project||"田径")+".jpg",alt:""}})]),e("div",{staticClass:"box"},[e("div",{staticClass:"header"},[t._v("简介")]),e("div",[e("div",{staticClass:"description"},[t._v(" "+t._s(t.description)+" "),t.showAll?e("el-link",{staticClass:"infoBtn",attrs:{type:"success"},on:{click:function(s){t.showAll=!1}}},[t._v("收起")]):e("el-link",{staticClass:"infoBtn",attrs:{type:"success"},on:{click:function(s){t.showAll=!0}}},[t._v("查看更多")])],1),e("el-link",{staticStyle:{float:"right","margin-top":"7px"},attrs:{type:"success",href:"https://baike.baidu.com/item/"+t.project}},[t._v(" ——来自百度百科 "),e("i",{staticClass:"el-icon-link"})])],1)]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.single.易受伤害,expression:"single.易受伤害"}],staticClass:"box"},[e("div",{staticClass:"header"},[t._v("体育活动注意")]),e("div",{staticClass:"description"},[t._v(" "+t._s(t.damage)+" "),t.showDamageAll?e("el-link",{staticClass:"infoBtn",attrs:{type:"success"},on:{click:function(s){t.showDamageAll=!1}}},[t._v("收起")]):e("el-link",{staticClass:"infoBtn",attrs:{type:"success"},on:{click:function(s){t.showDamageAll=!0}}},[t._v("查看更多")])],1)])])])},a=[],n=e("1da1"),c=(e("96cf"),e("d3b7"),e("a4d3"),e("e01a"),e("fb6a"),{props:["project"],data:function(){return{dataset:{},single:{"易受伤害":"",description:""},showAll:!1,showDamageAll:!1,textNumber:70}},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,fetch("./51大项运动-人工补完.json",{cache:"force-cache"}).then((function(t){return t.json()}));case 2:t.dataset=s.sent,t.single=t.dataset["田径"];case 4:case"end":return s.stop()}}),s)})))()},computed:{description:function(){var t=this.single.description;return this.showAll?t:t.length>this.textNumber?t.slice(0,this.textNumber)+"...":t},damage:function(){var t=this.single.易受伤害;return this.showDamageAll?t:t.length>this.textNumber?t.slice(0,this.textNumber)+"...":t}},watch:{project:function(t){this.single=this.dataset[t]}}}),l=c,o=(e("a055"),e("2877")),r=Object(o["a"])(l,i,a,!1,null,"509fefdc",null);s["default"]=r.exports},a055:function(t,s,e){"use strict";e("a420")},a420:function(t,s,e){}}]);