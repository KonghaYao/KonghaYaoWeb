(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-563cff50"],{"6d8f":function(t,e,a){"use strict";a("b83b")},8666:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"all"},[a("el-button",{on:{click:t.random}},[t._v("随机一个")]),a("el-carousel",{ref:"carouselOly",staticClass:"carousel",attrs:{autoplay:!1,type:"card",height:"350px","indicator-position":"none"},on:{change:t.carouselChange},nativeOn:{click:function(e){return t.selected(e)}}},t._l(t.dataset,(function(e){return a("el-carousel-item",{key:e.Year+e.Season},[a("el-card",{staticClass:"box-card",attrs:{shadow:"always"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(" "+t._s(e.Year+"年"+e.主办城市+"奥运会")+" ")])]),a("el-image",{attrs:{src:e.imgUrl}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("fiveRound",{staticStyle:{width:"141px",height:"141px"},attrs:{name:e.Year+"年"+e.主办城市+"奥运会"}})],1)]),a("div",[t._v("点击查看详情")])],1)],1)})),1),a("div",{staticClass:"tips"},[t._v("左右滑动可选择赛事哦！")]),a("swiper",{ref:"swiper",staticClass:"swiper",attrs:{options:t.swiperOption},on:{touchEnd:t.transitionStart}},t._l(t.dataset,(function(e,s){return a("swiper-slide",{key:"步骤条-"+e.Year+e.Season},[a("div",{class:{text:!0,Summer:"Summer"==e.Season,Winter:"Winter"==e.Season}},[t._v(" "+t._s(("Summer"==e.Season?"夏季 ":"冬季 ")+e.Year+"年"+e.主办城市+"奥运会")+" ")])])})),1),a("el-dialog",{staticClass:"cursive",attrs:{title:t.dataset[t.select].Year+"年"+t.dataset[t.select].主办城市+"奥运会",visible:t.dialogVisible,width:"70%",modal:!1,"custom-class":"animate__animated animate__bounceIn","close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:" description"},[t._v(" "+t._s(t.dataset[t.select].届数)+" "+t._s(t.dataset[t.select].主办城市)+" "+t._s(t.dataset[t.select].举办国家)+" "+t._s(t.dataset[t.select].举办时间)+" "+t._s(t.dataset[t.select].口号)+" "+t._s(t.dataset[t.select].Year>=1994?"Summer"==t.dataset[t.select].Season?"夏季奥运会":"冬季奥运会":"")+" ")]),a("el-row",[a("el-col",{attrs:{span:16}},[a("p",{staticClass:" description"},[t._v(t._s(t.dataset[t.select].text||""))]),a("el-link",{staticStyle:{float:"right"},attrs:{type:"success",href:"https://baike.baidu.com/item/"+t.dataset[t.select].赛事名称}},[t._v(" ——来自百度百科 "),a("i",{staticClass:"el-icon-link"})])],1),a("el-col",{staticClass:"centerBox",attrs:{span:8}},[a("el-image",{attrs:{src:t.dataset[t.select].imgUrl}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("fiveRound",{staticStyle:{width:"141px",height:"141px"},attrs:{name:t.dataset[t.select].赛事名称}})],1)])],1)],1),a("div",{staticClass:"tips"},[t._v("点击图例可以切换显示状态哦")]),a("el-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[a("el-radio-button",{attrs:{label:"金牌"}}),a("el-radio-button",{attrs:{label:"银牌"}}),a("el-radio-button",{attrs:{label:"铜牌"}})],1),a("router-view",{staticClass:"animate__animated "}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("关 闭")])],1)],1)],1)},i=[],r=a("1da1"),l=(a("96cf"),a("d3b7"),a("31ae")),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 411.79 189.5"}},[a("g",{attrs:{id:"图层_2","data-name":"图层 2"}},[a("g",{ref:"奥运五环",attrs:{id:"成品层"}},[a("path",{staticClass:"cls-5",attrs:{d:"M129.31,60.11A64.5,64.5,0,1,0,65,129.5c1.26,0,2.5,0,3.74-.11-.13-1.61-.19-3.24-.19-4.89s.07-3.44.2-5.13c-1.24.09-2.49.13-3.75.13a54.5,54.5,0,1,1,54.38-58q.12,1.76.12,3.54a52.92,52.92,0,0,1-.43,6.82A54.65,54.65,0,0,1,79,117.68a52.92,52.92,0,0,0-.43,6.82q0,1.78.12,3.54a64.63,64.63,0,0,0,50.62-57.91q.21-2.53.21-5.13C129.5,63.36,129.44,61.73,129.31,60.11Z"}}),a("path",{staticClass:"cls-3",attrs:{d:"M197.4,128.94a64.49,64.49,0,0,1-128.65.45c-.13-1.61-.19-3.24-.19-4.89s.07-3.44.2-5.13a64.62,64.62,0,0,1,50.63-57.91,63.63,63.63,0,0,1,9.93-1.35c1.24-.07,2.48-.11,3.74-.11a64.47,64.47,0,0,1,64.25,58.82,54.1,54.1,0,0,1-10.4-2.73,54.67,54.67,0,0,0-34.86-42.68,54.57,54.57,0,0,0-19-3.41c-1.26,0-2.52,0-3.76.13a53.72,53.72,0,0,0-10.22,1.69A54.62,54.62,0,0,0,79,117.68a52.92,52.92,0,0,0-.43,6.82q0,1.78.12,3.54a54.5,54.5,0,0,0,108.83-1.21A64.58,64.58,0,0,0,197.4,128.94Z"}}),a("path",{staticClass:"cls-2",attrs:{d:"M270.4,65c0,1.8-.07,3.59-.23,5.36A64.63,64.63,0,0,1,222,127.46c-.05-1-.08-2-.08-3a54.21,54.21,0,0,1,.53-7.58A54.51,54.51,0,0,0,260.4,65c0-1,0-2-.08-3a54.5,54.5,0,0,0-108.87.63c0,.77,0,1.55,0,2.33a54.52,54.52,0,0,0,60.77,54.14c-.15,1.77-.22,3.56-.22,5.36,0,1.58.06,3.15.17,4.7q-3.08.3-6.22.3a64.47,64.47,0,0,1-64.25-58.82c-.17-1.87-.25-3.77-.25-5.68,0-1.49,0-3,.16-4.44a64.5,64.5,0,0,1,128.67-.26C270.34,61.85,270.4,63.42,270.4,65Z"}}),a("path",{staticClass:"cls-1",attrs:{d:"M340.73,119.16A64.66,64.66,0,0,0,292.38,62a63.32,63.32,0,0,0-9.91-1.71q-3-.28-6-.28t-6.22.3A63.36,63.36,0,0,0,260.32,62a64.64,64.64,0,0,0-48.15,57.1c-.15,1.77-.22,3.56-.22,5.36,0,1.58.06,3.15.17,4.7a64.5,64.5,0,0,0,128.66,0c.11-1.56.17-3.13.17-4.72C341,122.7,340.88,120.92,340.73,119.16Zm-9.86,8.35A54.5,54.5,0,0,1,222,127.46c-.05-1-.08-2-.08-3A54.47,54.47,0,0,1,276.45,70a52.92,52.92,0,0,1,6.07.34,54,54,0,0,1,10.3,2.17,54.51,54.51,0,0,1,38.13,52C331,125.51,330.92,126.51,330.87,127.51Z"}}),a("path",{staticClass:"cls-4",attrs:{d:"M346.79.5a64.58,64.58,0,0,0-64.33,59.78A63.32,63.32,0,0,1,292.37,62a54.5,54.5,0,1,1,54.42,57.51,52.92,52.92,0,0,1-6.07-.34,54,54,0,0,1-10.3-2.17,54.64,54.64,0,0,1-37.61-44.48,54,54,0,0,0-10.3-2.17,64.66,64.66,0,0,0,48.35,57.17,63.32,63.32,0,0,0,9.91,1.71q3,.28,6,.28a64.5,64.5,0,0,0,0-129Z"}})])])]),a("p",[t._v(t._s(t.name))])])},o=[],n={props:["name"]},d=n,u=(a("a6cb"),a("2877")),h=Object(u["a"])(d,c,o,!1,null,"180ee0c5",null),p=h.exports,f={components:{fiveRound:p,meinian:l["default"]},data:function(){return{swiperOption:{slidesPerView:21,freeMode:!0,height:400,centeredSlides:!0},radio:"金牌",Medal:"Gold",dataset:[{}],select:0,dialogVisible:!1,active:1}},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("./奥运会赛事统一数据最终添加赛事介绍.json",{cache:"force-cache"}).then((function(t){return t.json()}));case 2:t.dataset=e.sent,t.random();case 4:case"end":return e.stop()}}),e)})))()},methods:{carouselChange:function(t){this.$refs.swiper.$swiper.slideTo(t,1e3,!1)},random:function(){this.$refs.carouselOly.setActiveItem(Math.floor(Math.random()*(this.dataset.length+1)))},selected:function(){this.select=this.$refs.carouselOly.activeIndex;var t=this.$route.query,e=t.Season,a=t.Year,s=t.Medal;e==this.dataset[this.select].Season&&this.dataset[this.select].Year==a&&this.Medal==s||this.$router.push({query:{Season:this.dataset[this.select].Season,Year:this.dataset[this.select].Year,Medal:this.Medal,opened:!0}}),this.dialogVisible=!0},transitionStart:function(t){console.log(t.activeIndex),this.$refs.carouselOly.setActiveItem(t.activeIndex)}},props:[],watch:{radio:function(t){switch(t){case"金牌":this.Medal="Gold";break;case"银牌":this.Medal="Silver";break;case"铜牌":this.Medal="Bronze";break}this.$router.push({query:{Medal:this.Medal}})},"$route.query":function(t){var e=t.opened,a=void 0!==e&&e;console.log(a),this.dialogVisible=!!a}}},m=f,v=(a("6d8f"),Object(u["a"])(m,s,i,!1,null,"099a7418",null));e["default"]=v.exports},a6cb:function(t,e,a){"use strict";a("de1e")},b83b:function(t,e,a){},de1e:function(t,e,a){}}]);