(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2dbc0ffc"],{"07ac":function(e,t,n){var r=n("23e7"),i=n("6f53").values;r({target:"Object",stat:!0},{values:function(e){return i(e)}})},1327:function(e,t,n){"use strict";n("cdfc")},"13d5":function(e,t,n){"use strict";var r=n("23e7"),i=n("d58f").left,a=n("a640"),o=n("2d00"),s=n("605d"),c=a("reduce"),u=!s&&o>79&&o<83;r({target:"Array",proto:!0,forced:!c||u},{reduce:function(e){return i(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"4de4":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").filter,a=n("1dde"),o=a("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},6062:function(e,t,n){"use strict";var r=n("6d61"),i=n("6566");e.exports=r("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),i)},6566:function(e,t,n){"use strict";var r=n("9bf2").f,i=n("7c73"),a=n("e2cc"),o=n("0366"),s=n("19aa"),c=n("2266"),u=n("7dd0"),f=n("2626"),d=n("83ab"),l=n("f183").fastKey,h=n("69f3"),v=h.set,p=h.getterFor;e.exports={getConstructor:function(e,t,n,u){var f=e((function(e,r){s(e,f,t),v(e,{type:t,index:i(null),first:void 0,last:void 0,size:0}),d||(e.size=0),void 0!=r&&c(r,e[u],{that:e,AS_ENTRIES:n})})),h=p(t),x=function(e,t,n){var r,i,a=h(e),o=m(e,t);return o?o.value=n:(a.last=o={index:i=l(t,!0),key:t,value:n,previous:r=a.last,next:void 0,removed:!1},a.first||(a.first=o),r&&(r.next=o),d?a.size++:e.size++,"F"!==i&&(a.index[i]=o)),e},m=function(e,t){var n,r=h(e),i=l(t);if("F"!==i)return r.index[i];for(n=r.first;n;n=n.next)if(n.key==t)return n};return a(f.prototype,{clear:function(){var e=this,t=h(e),n=t.index,r=t.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;t.first=t.last=void 0,d?t.size=0:e.size=0},delete:function(e){var t=this,n=h(t),r=m(t,e);if(r){var i=r.next,a=r.previous;delete n.index[r.index],r.removed=!0,a&&(a.next=i),i&&(i.previous=a),n.first==r&&(n.first=i),n.last==r&&(n.last=a),d?n.size--:t.size--}return!!r},forEach:function(e){var t,n=h(this),r=o(e,arguments.length>1?arguments[1]:void 0,3);while(t=t?t.next:n.first){r(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!m(this,e)}}),a(f.prototype,n?{get:function(e){var t=m(this,e);return t&&t.value},set:function(e,t){return x(this,0===e?0:e,t)}}:{add:function(e){return x(this,e=0===e?0:e,e)}}),d&&r(f.prototype,"size",{get:function(){return h(this).size}}),f},setStrong:function(e,t,n){var r=t+" Iterator",i=p(t),a=p(r);u(e,t,(function(e,t){v(this,{type:r,target:e,state:i(e),kind:t,last:void 0})}),(function(){var e=a(this),t=e.kind,n=e.last;while(n&&n.removed)n=n.previous;return e.target&&(e.last=n=n?n.next:e.state.first)?"keys"==t?{value:n.key,done:!1}:"values"==t?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),f(t)}}},"6d61":function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),a=n("94ca"),o=n("6eeb"),s=n("f183"),c=n("2266"),u=n("19aa"),f=n("861d"),d=n("d039"),l=n("1c7e"),h=n("d44e"),v=n("7156");e.exports=function(e,t,n){var p=-1!==e.indexOf("Map"),x=-1!==e.indexOf("Weak"),m=p?"set":"add",g=i[e],y=g&&g.prototype,b=g,w={},I=function(e){var t=y[e];o(y,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(x&&!f(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return x&&!f(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(x&&!f(e))&&t.call(this,0===e?0:e)}:function(e,n){return t.call(this,0===e?0:e,n),this})},A=a(e,"function"!=typeof g||!(x||y.forEach&&!d((function(){(new g).entries().next()}))));if(A)b=n.getConstructor(t,e,p,m),s.REQUIRED=!0;else if(a(e,!0)){var D=new b,S=D[m](x?{}:-0,1)!=D,O=d((function(){D.has(1)})),k=l((function(e){new g(e)})),j=!x&&d((function(){var e=new g,t=5;while(t--)e[m](t,t);return!e.has(-0)}));k||(b=t((function(t,n){u(t,b,e);var r=v(new g,t,b);return void 0!=n&&c(n,r[m],{that:r,AS_ENTRIES:p}),r})),b.prototype=y,y.constructor=b),(O||j)&&(I("delete"),I("has"),p&&I("get")),(j||S)&&I(m),x&&y.clear&&delete y.clear}return w[e]=b,r({global:!0,forced:b!=g},w),h(b,e),x||n.setStrong(b,e,p),b}},"6f53":function(e,t,n){var r=n("83ab"),i=n("df75"),a=n("fc6a"),o=n("d1e7").f,s=function(e){return function(t){var n,s=a(t),c=i(s),u=c.length,f=0,d=[];while(u>f)n=c[f++],r&&!o.call(s,n)||d.push(e?[n,s[n]]:s[n]);return d}};e.exports={entries:s(!0),values:s(!1)}},7156:function(e,t,n){var r=n("861d"),i=n("d2bb");e.exports=function(e,t,n){var a,o;return i&&"function"==typeof(a=t.constructor)&&a!==n&&r(o=a.prototype)&&o!==n.prototype&&i(e,o),e}},"8d00":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"echarts",staticClass:"chart"},[n("div",{staticClass:"left"},[n("h3",[e._v(e._s(e.PieYear)+" 年中国参赛数据")]),n("el-switch",{class:{summerColor:e.switchValue},attrs:{"active-color":"#67C23A","inactive-color":"#409eff","active-text":"夏季奥运会","inactive-text":"冬季奥运会"},model:{value:e.switchValue,callback:function(t){e.switchValue=t},expression:"switchValue"}})],1),n("div",{ref:"chart",staticClass:"echarts"})])},i=[],a=n("ade3"),o=n("2909"),s=n("1da1"),c=(n("96cf"),n("99af"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("d81d"),n("4de4"),n("13d5"),n("07ac"),{mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.$refs.echarts.getBoundingClientRect(),r=n.height,i=n.width,console.log(r,i),e.$refs.chart.setAttribute("style","width:".concat(.8*i,"px;height:").concat(1*r,"px")),e.myChart=echarts.init(e.$refs.chart,null,{renderer:"svg"}),t.next=6,fetch("./中国参赛人数.json").then((function(e){return e.json()}));case 6:a=t.sent,e.Data=a.time,e.Data.sort((function(e,t){return e[2]-t[2]})),e.Data.unshift(["性别","季节","年份","人数","平均年龄"]),e.AgeData=a.age,e.YearList={Summer:Object(o["a"])(new Set(e.Data.filter((function(e,t){return t&&"Summer"==e[1]})).map((function(e){return e[2]})))),Winter:Object(o["a"])(new Set(e.Data.filter((function(e,t){return t&&"Winter"==e[1]})).map((function(e){return e[2]}))))},e.option.dataset[0].source=e.Data,e.option.dataset[3].source=e.Data.filter((function(e,t){return!t||2016===e[2]})),console.log(e.Data),e.option.dataset[4].source=e.AgeCount(2016),e.Draw(),e.myChart.on("updateAxisPointer",{axisIndex:0},e.reDrawPie),e.switchValue=!0;case 19:case"end":return t.stop()}}),t)})))()},methods:{Draw:function(){this.myChart.setOption(this.option)},AgeCount:function(e){var t=this,n=this.AgeData.filter((function(n,r){return!r||n[1]===t.Season&&n[2]==e})).reduce((function(e,t){var n=t[3];return e.hasOwnProperty(n)?e[n][4]++:e[n]=[].concat(Object(o["a"])(t),[1]),e}),{}),r=Object.values(n).sort((function(e,t){return e[3]-t[3]}));return r.unshift(["性别","季节","年份","年龄","人数"]),r},reDrawPie:function(e){var t=e.axesInfo[0],n=this.YearList[this.Season][e.dataIndexInside];if(t&&this.PieYear!=n){if(e.axesInfo[0].axisIndex)return null;this.PieYear=n,this.myChart.setOption({dataset:[{id:"MandF",fromDatasetId:"origin",transform:{type:"filter",config:{dimension:"年份",value:n}}},{id:"Age",source:this.AgeCount(n)}]})}}},watch:{switchValue:function(e){var t=this;this.Season=e?"Summer":"Winter",this.myChart.setOption({dataset:[{id:"origin",source:this.Data.filter((function(e,n){return!n||e[1]===t.Season}))}]})}},data:function(){var e;return{Season:"Summer",PieYear:2016,myChart:{},switchValue:!1,option:(e={legend:{},tooltip:{trigger:"axis",showContent:!0},title:[{text:"运动员男女比例",left:"25%",top:"5%",textAlign:"center"},{text:"运动员平均年龄",top:"5%",left:"75%",textAlign:"center"},{text:"奥运会参赛人数",subtext:"鼠标移动到点上时，饼图会自动更新哦。",left:"25%",top:"45%",textAlign:"center",subtextStyle:{color:"#ec12b3"}}],dataset:[{id:"origin",source:[]},{id:"Man",fromDatasetId:"origin",transform:{type:"filter",config:{dimension:"性别",value:"M"}}},{id:"Woman",fromDatasetId:"origin",transform:{type:"filter",config:{dimension:"性别",value:"F"}}},{id:"MandF",source:[]},{id:"Age",source:[]},{id:"AgeMan",fromDatasetId:"Age",transform:{type:"filter",config:{dimension:"性别",value:"M"}}},{id:"AgeWoman",fromDatasetId:"Age",transform:{type:"filter",config:{dimension:"性别",value:"F"}}}]},Object(a["a"])(e,"legend",{x:"center",y:"center"}),Object(a["a"])(e,"xAxis",[{gridIndex:0,type:"category"},{gridIndex:1}]),Object(a["a"])(e,"yAxis",[{gridIndex:0},{gridIndex:1}]),Object(a["a"])(e,"grid",[{top:"60%"},{right:"5%",top:"15%",width:"40%",height:"30%"}]),Object(a["a"])(e,"series",[{itemStyle:{normal:{color:"#eac953"}},xAxisIndex:0,yAxisIndex:0,name:"男性人数",type:"line",datasetId:"Man",encode:{x:"年份",y:"人数"}},{itemStyle:{normal:{color:"#ff98be"}},xAxisIndex:0,yAxisIndex:0,name:"女性人数",type:"line",datasetId:"Woman",encode:{x:"年份",y:"人数"}},Object(a["a"])({xAxisIndex:0,yAxisIndex:0,type:"pie",datasetId:"MandF",radius:["20%","30%"],itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},center:["25%","25%"],emphasis:{focus:"data"},label:{formatter:function(e){var t=e.value;return"".concat("M"==t[0]?"男性":"女性","\n").concat(t[3],"人")}},encode:{itemName:"性别",value:"人数",tooltip:"人数"}},"emphasis",{label:{show:!0,fontWeight:"bold"}}),{type:"line",datasetId:"AgeMan",encode:{x:"年龄",y:"人数"},name:"男性人数",xAxisIndex:1,yAxisIndex:1,connectNulls:!0,itemStyle:{normal:{color:"#eac953"}},markPoint:{data:[{name:"最高",type:"max"},{name:"最低",type:"min"}]},markLine:{data:[{type:"average",name:"平均值"}]}},{name:"女性人数",xAxisIndex:1,yAxisIndex:1,type:"line",datasetId:"AgeWoman",itemStyle:{normal:{color:"#ff98be"}},encode:{x:"年龄",y:"人数"},connectNulls:!0,markPoint:{data:[{name:"最高",type:"max"},{name:"最低",type:"min"}]},markLine:{data:[{type:"average",name:"平均值"}]}}]),e)}}}),u=c,f=(n("1327"),n("2877")),d=Object(f["a"])(u,r,i,!1,null,"8db67d58",null);t["default"]=d.exports},ade3:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},bb2f:function(e,t,n){var r=n("d039");e.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},cdfc:function(e,t,n){},d58f:function(e,t,n){var r=n("1c0b"),i=n("7b0b"),a=n("44ad"),o=n("50c4"),s=function(e){return function(t,n,s,c){r(n);var u=i(t),f=a(u),d=o(u.length),l=e?d-1:0,h=e?-1:1;if(s<2)while(1){if(l in f){c=f[l],l+=h;break}if(l+=h,e?l<0:d<=l)throw TypeError("Reduce of empty array with no initial value")}for(;e?l>=0:d>l;l+=h)l in f&&(c=n(c,f[l],l,u));return c}};e.exports={left:s(!1),right:s(!0)}},f183:function(e,t,n){var r=n("d012"),i=n("861d"),a=n("5135"),o=n("9bf2").f,s=n("90e3"),c=n("bb2f"),u=s("meta"),f=0,d=Object.isExtensible||function(){return!0},l=function(e){o(e,u,{value:{objectID:"O"+ ++f,weakData:{}}})},h=function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!a(e,u)){if(!d(e))return"F";if(!t)return"E";l(e)}return e[u].objectID},v=function(e,t){if(!a(e,u)){if(!d(e))return!0;if(!t)return!1;l(e)}return e[u].weakData},p=function(e){return c&&x.REQUIRED&&d(e)&&!a(e,u)&&l(e),e},x=e.exports={REQUIRED:!1,fastKey:h,getWeakData:v,onFreeze:p};r[u]=!0}}]);