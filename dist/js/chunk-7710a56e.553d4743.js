(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7710a56e"],{"980b":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:59!==t.PosData.length,expression:"PosData.length !== 59"}],staticClass:"main"},[i("div",{ref:"map",staticClass:"map"}),59==t.PosData.length&&t.timeline?i("div",{staticClass:"name title"},[t._v(" "+t._s(t.tooltips.举办国家)+" "+t._s(t.tooltips.主办城市)+" ")]):t._e(),59==t.PosData.length&&t.timeline?i("div",{staticClass:"tooltips"},[i("div",{staticClass:"textBox"},[i("div",{staticClass:"title",staticStyle:{"font-size":"1em"}},[t._v(" "+t._s(t.tooltips.届数)+t._s(t.tooltips.Year<1923?"":"Summer"==t.tooltips.Season?"夏季":"冬季")+"奥运会 ")]),i("div",{staticClass:"title",staticStyle:{"border-bottom":"1px solid #636363"}},[t._v(" "+t._s(t.tooltips.Year+"年"+t.tooltips.主办城市+"奥运会")+" ")]),i("div",{staticClass:"simple"},[t._v(t._s(t.tooltips.举办时间))]),i("div",{staticClass:"simple"},[t._v(" "+t._s(t.tooltips.举办国家)+" "+t._s(t.tooltips.主办城市)+" ")]),i("div",{staticClass:"simple"},[t._v(t._s(t.tooltips.口号||""))])]),i("router-link",{staticClass:"link",attrs:{to:{path:encodeURI("/奥运风采馆/奥运会介绍/每年奖牌趋势"),query:{Season:t.tooltips.Season,Year:t.tooltips.Year,Medal:"Gold",opened:!0}}}},[t._v(" 查看图表详情 ")]),i("div",{staticClass:"control"},[i("div",{staticClass:"row"},[i("div",{staticClass:"simple"},[t._v("播放控制")]),i("i",{class:{icon:!0,"el-icon-video-pause":!t.timeline.paused,"el-icon-video-play":t.timeline.paused},attrs:{circle:""},on:{click:t.timeline.toggle}})]),i("div",{staticClass:"simple"},[t._v("时间轴")]),i("div",{staticClass:"timeline"},[i("i",{staticClass:"el-icon-d-arrow-left icon"}),i("el-slider",{staticClass:"slider",attrs:{min:0,max:t.timeline.list.length,step:1,"format-tooltip":t.formatTooltip},model:{value:t.timeline.now,callback:function(e){t.$set(t.timeline,"now",e)},expression:"timeline.now"}}),i("i",{staticClass:"el-icon-d-arrow-right icon"})],1)])],1):t._e()])},s=[],o=i("1da1"),a=i("2909");i("96cf"),i("d3b7"),i("d81d"),i("159b"),i("ddb0");function l(t,e){return new Promise((function(i){return setTimeout((function(){i(e&&e())}),t)}))}var r={data:function(){return{dataset:{},PosData:[],timeline:{now:0}}},watch:{PosData:function(t){59===t.length&&this.animeInit()}},computed:{tooltips:function(){return this.dataset[this.timeline.now]}},methods:{formatTooltip:function(t){return this.timeline.now+this.dataset[t].Year+("summer"==this.dataset[t].season?"夏":"冬")},init:function(){var t=this;return new Promise((function(e){var i=new BMapGL.Map(t.$refs.map);t.map=i,i.centerAndZoom(new BMapGL.Point(116.404,39.915),2),i.addControl(new BMapGL.MapTypeControl({mapTypes:[BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]})),t.map.addEventListener("tilesloaded",(function(){e()}))}))},animeInit:function(){var t=this;this.timeline={list:this.PosData.map((function(t){return t.point=new BMapGL.Point(t.point.lng,t.point.lat),t.point})),now:0,paused:!1,play:function(){t.timeline.paused=!1;var e=t.timeline.moveTo(1);Object(a["a"])(Array(t.timeline.list.length-t.timeline.now-2).keys()).forEach((function(i){e=e.then((function(){return t.timeline.moveTo(1)}))}))},pause:function(){t.timeline.paused=!0},toggle:function(){t.timeline.paused?t.timeline.play():t.timeline.pause()},restart:function(){t.timeline.now=-1;var e=t.timeline.moveTo(1);return Object(a["a"])(Array(t.timeline.list.length-2).keys()).forEach((function(i){e=e.then((function(){return t.timeline.moveTo(1)}))})),e},moveTo:function(e,i){if(t.timeline.paused)return new Promise((function(t){return t(!1)}));void 0===i&&(i=t.timeline.now);var n=i+e;n=n>=0?n<t.timeline.list.length?n:t.timeline.list.length-1:0,console.log(n);var s=t.timeline.list[n],o=new BMapGL.Circle(s,5e4,{strokeColor:"blue",strokeWeight:2,strokeOpacity:.5});return t.map.addOverlay(o),t.timeline.now++,t.map.centerAndZoom(s,2),l(2e3,(function(){return t.map.centerAndZoom(s,10)})).then((function(){return l(1e4,(function(){t.map.removeOverlay(o)})),l(9e3)}))}},window.timeline=this.timeline,this.timeline.restart()}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("./奥运会赛事统一数据最终添加赛事介绍.json",{cache:"force-cache"}).then((function(t){return t.json()}));case 2:return t.dataset=e.sent,e.next=5,t.init();case 5:return e.next=7,fetch("./地理位置.json",{cache:"force-cache"}).then((function(t){return t.json()}));case 7:t.PosData=e.sent,console.log(t.PosData);case 9:case"end":return e.stop()}}),e)})))()}},c=r,m=(i("eb3a"),i("2877")),u=Object(m["a"])(c,n,s,!1,null,"35df836e",null);e["default"]=u.exports},d3c0:function(t,e,i){},eb3a:function(t,e,i){"use strict";i("d3c0")}}]);