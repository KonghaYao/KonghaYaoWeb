(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d866214c"],{"07ac":function(t,e,n){var r=n("23e7"),i=n("6f53").values;r({target:"Object",stat:!0},{values:function(t){return i(t)}})},"13d5":function(t,e,n){"use strict";var r=n("23e7"),i=n("d58f").left,a=n("a640"),o=n("2d00"),s=n("605d"),c=a("reduce"),u=!s&&o>79&&o<83;r({target:"Array",proto:!0,forced:!c||u},{reduce:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,a=n("1dde"),o=a("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},6062:function(t,e,n){"use strict";var r=n("6d61"),i=n("6566");t.exports=r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},6566:function(t,e,n){"use strict";var r=n("9bf2").f,i=n("7c73"),a=n("e2cc"),o=n("0366"),s=n("19aa"),c=n("2266"),u=n("7dd0"),f=n("2626"),d=n("83ab"),l=n("f183").fastKey,h=n("69f3"),v=h.set,x=h.getterFor;t.exports={getConstructor:function(t,e,n,u){var f=t((function(t,r){s(t,f,e),v(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=r&&c(r,t[u],{that:t,AS_ENTRIES:n})})),h=x(e),p=function(t,e,n){var r,i,a=h(t),o=m(t,e);return o?o.value=n:(a.last=o={index:i=l(e,!0),key:e,value:n,previous:r=a.last,next:void 0,removed:!1},a.first||(a.first=o),r&&(r.next=o),d?a.size++:t.size++,"F"!==i&&(a.index[i]=o)),t},m=function(t,e){var n,r=h(t),i=l(e);if("F"!==i)return r.index[i];for(n=r.first;n;n=n.next)if(n.key==e)return n};return a(f.prototype,{clear:function(){var t=this,e=h(t),n=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=h(e),r=m(e,t);if(r){var i=r.next,a=r.previous;delete n.index[r.index],r.removed=!0,a&&(a.next=i),i&&(i.previous=a),n.first==r&&(n.first=i),n.last==r&&(n.last=a),d?n.size--:e.size--}return!!r},forEach:function(t){var e,n=h(this),r=o(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!m(this,t)}}),a(f.prototype,n?{get:function(t){var e=m(this,t);return e&&e.value},set:function(t,e){return p(this,0===t?0:t,e)}}:{add:function(t){return p(this,t=0===t?0:t,t)}}),d&&r(f.prototype,"size",{get:function(){return h(this).size}}),f},setStrong:function(t,e,n){var r=e+" Iterator",i=x(e),a=x(r);u(t,e,(function(t,e){v(this,{type:r,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=a(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),f(e)}}},"6d61":function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),a=n("94ca"),o=n("6eeb"),s=n("f183"),c=n("2266"),u=n("19aa"),f=n("861d"),d=n("d039"),l=n("1c7e"),h=n("d44e"),v=n("7156");t.exports=function(t,e,n){var x=-1!==t.indexOf("Map"),p=-1!==t.indexOf("Weak"),m=x?"set":"add",g=i[t],y=g&&g.prototype,b=g,w={},I=function(t){var e=y[t];o(y,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(p&&!f(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return p&&!f(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(p&&!f(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})},A=a(t,"function"!=typeof g||!(p||y.forEach&&!d((function(){(new g).entries().next()}))));if(A)b=n.getConstructor(e,t,x,m),s.REQUIRED=!0;else if(a(t,!0)){var D=new b,S=D[m](p?{}:-0,1)!=D,O=d((function(){D.has(1)})),j=l((function(t){new g(t)})),k=!p&&d((function(){var t=new g,e=5;while(e--)t[m](e,e);return!t.has(-0)}));j||(b=e((function(e,n){u(e,b,t);var r=v(new g,e,b);return void 0!=n&&c(n,r[m],{that:r,AS_ENTRIES:x}),r})),b.prototype=y,y.constructor=b),(O||k)&&(I("delete"),I("has"),x&&I("get")),(k||S)&&I(m),p&&y.clear&&delete y.clear}return w[t]=b,r({global:!0,forced:b!=g},w),h(b,t),p||n.setStrong(b,t,x),b}},"6f53":function(t,e,n){var r=n("83ab"),i=n("df75"),a=n("fc6a"),o=n("d1e7").f,s=function(t){return function(e){var n,s=a(e),c=i(s),u=c.length,f=0,d=[];while(u>f)n=c[f++],r&&!o.call(s,n)||d.push(t?[n,s[n]]:s[n]);return d}};t.exports={entries:s(!0),values:s(!1)}},7156:function(t,e,n){var r=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var a,o;return i&&"function"==typeof(a=e.constructor)&&a!==n&&r(o=a.prototype)&&o!==n.prototype&&i(t,o),t}},"7dcc":function(t,e,n){},"8d00":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"echarts",staticClass:"chart"},[n("div",{staticClass:"left"},[n("h3",[t._v(t._s(t.PieYear)+" 年中国参赛数据")]),n("el-switch",{class:{summerColor:t.switchValue},attrs:{"active-color":"#67C23A","inactive-color":"#409eff","active-text":"夏季奥运会","inactive-text":"冬季奥运会"},model:{value:t.switchValue,callback:function(e){t.switchValue=e},expression:"switchValue"}})],1),n("div",{ref:"chart",staticClass:"echarts"})])},i=[],a=n("ade3"),o=n("2909"),s=n("1da1"),c=(n("96cf"),n("99af"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("d81d"),n("4de4"),n("13d5"),n("07ac"),{mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,r,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=document.body.getBoundingClientRect(),r=n.height,i=n.width,t.$refs.chart.setAttribute("style","width:".concat(.8*i,"px;height:").concat(.9*r,"px")),t.myChart=echarts.init(t.$refs.chart,null,{renderer:"svg"}),e.next=5,fetch("./中国参赛人数.json").then((function(t){return t.json()}));case 5:a=e.sent,t.Data=a.time,t.Data.sort((function(t,e){return t[2]-e[2]})),t.Data.unshift(["性别","季节","年份","人数","平均年龄"]),t.AgeData=a.age,t.YearList={Summer:Object(o["a"])(new Set(t.Data.filter((function(t,e){return e&&"Summer"==t[1]})).map((function(t){return t[2]})))),Winter:Object(o["a"])(new Set(t.Data.filter((function(t,e){return e&&"Winter"==t[1]})).map((function(t){return t[2]}))))},t.option.dataset[0].source=t.Data,t.option.dataset[3].source=t.Data.filter((function(t,e){return!e||2016===t[2]})),t.option.dataset[4].source=t.AgeCount(2016),t.Draw(),t.myChart.on("updateAxisPointer",{axisIndex:0},t.reDrawPie),t.switchValue=!0;case 17:case"end":return e.stop()}}),e)})))()},methods:{Draw:function(){this.myChart.setOption(this.option)},AgeCount:function(t){var e=this,n=this.AgeData.filter((function(n,r){return!r||n[1]===e.Season&&n[2]==t})).reduce((function(t,e){var n=e[3];return t.hasOwnProperty(n)?t[n][4]++:t[n]=[].concat(Object(o["a"])(e),[1]),t}),{}),r=Object.values(n).sort((function(t,e){return t[3]-e[3]}));return r.unshift(["性别","季节","年份","年龄","人数"]),r},reDrawPie:function(t){var e=t.axesInfo[0],n=this.YearList[this.Season][t.dataIndexInside];if(e&&this.PieYear!=n){if(t.axesInfo[0].axisIndex)return null;this.PieYear=n;var r=this.Data.filter((function(t){return t[2]===n})).reduce((function(t,e){return t[e[0]]=e[4],t}),{M:0,F:0});r.M,r.F;this.myChart.setOption({dataset:[{id:"MandF",fromDatasetId:"origin",transform:{type:"filter",config:{dimension:"年份",value:n}}},{id:"Age",source:this.AgeCount(n)}]})}}},watch:{switchValue:function(t){var e=this;this.Season=t?"Summer":"Winter",this.myChart.setOption({dataset:[{id:"origin",source:this.Data.filter((function(t,n){return!n||t[1]===e.Season}))}]})}},data:function(){var t;return{Season:"Summer",PieYear:2016,myChart:{},switchValue:!1,option:(t={legend:{},tooltip:{trigger:"axis",showContent:!0},title:[{text:"运动员男女比例",left:"25%",top:"5%",textAlign:"center"},{text:"运动员年龄分布",subtext:"横向虚线为平均人数哦，颜色表示性别",top:"2%",left:"75%",textAlign:"center",subtextStyle:{color:"#ec12b3"}},{text:"奥运会参赛人数",subtext:"鼠标移动到点上时，饼图会自动更新哦。",left:"50%",top:"48%",textAlign:"center",subtextStyle:{color:"#ec12b3"}}],dataset:[{id:"origin",source:[]},{id:"Man",fromDatasetId:"origin",transform:{type:"filter",config:{dimension:"性别",value:"M"}}},{id:"Woman",fromDatasetId:"origin",transform:{type:"filter",config:{dimension:"性别",value:"F"}}},{id:"MandF",source:[]},{id:"Age",source:[]},{id:"AgeMan",fromDatasetId:"Age",transform:{type:"filter",config:{dimension:"性别",value:"M"}}},{id:"AgeWoman",fromDatasetId:"Age",transform:{type:"filter",config:{dimension:"性别",value:"F"}}}]},Object(a["a"])(t,"legend",{x:"5%",y:"50%"}),Object(a["a"])(t,"xAxis",[{gridIndex:0,type:"category",name:"年份"},{gridIndex:1,name:"年龄",min:10}]),Object(a["a"])(t,"yAxis",[{gridIndex:0,name:"人数"},{gridIndex:1,name:"人数"}]),Object(a["a"])(t,"grid",[{top:"60%"},{right:"5%",top:"15%",width:"40%",height:"30%"}]),Object(a["a"])(t,"series",[{itemStyle:{normal:{color:"#eac953"}},xAxisIndex:0,yAxisIndex:0,name:"男性人数",type:"line",datasetId:"Man",encode:{x:"年份",y:"人数"}},{itemStyle:{normal:{color:"#ff98be"}},xAxisIndex:0,yAxisIndex:0,name:"女性人数",type:"line",datasetId:"Woman",encode:{x:"年份",y:"人数"}},Object(a["a"])({xAxisIndex:0,yAxisIndex:0,type:"pie",datasetId:"MandF",radius:["20%","30%"],itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},center:["25%","25%"],emphasis:{focus:"data"},label:{formatter:function(t){var e=t.value;return"".concat("M"==e[0]?"男性":"女性","\n").concat(e[3],"人")}},encode:{itemName:"性别",value:"人数",tooltip:"人数"}},"emphasis",{label:{show:!0,fontWeight:"bold"}}),{type:"line",datasetId:"AgeMan",encode:{x:"年龄",y:"人数"},name:"男性人数",xAxisIndex:1,yAxisIndex:1,connectNulls:!0,itemStyle:{normal:{color:"#eac953"}},tooltip:{trigger:"item",formatter:function(t){var e=t.seriesName,n=t.data;return"".concat(n[3]," 岁 ").concat(e,"为 ").concat(n[4]," 人")},textStyle:{color:"#c5a945"}},markPoint:{data:[{name:"最高",type:"max"},{name:"最低",type:"min"}]}},{name:"女性人数",xAxisIndex:1,yAxisIndex:1,type:"line",datasetId:"AgeWoman",itemStyle:{normal:{color:"#ff98be"}},tooltip:{trigger:"item",formatter:function(t){var e=t.seriesName,n=t.data;return"".concat(n[3]," 岁 ").concat(e,"为 ").concat(n[4]," 人")},textStyle:{color:"#ff98be"}},encode:{x:"年龄",y:"人数"},connectNulls:!0,markPoint:{data:[{name:"最高",type:"max"}]}}]),t)}}}),u=c,f=(n("9aa7"),n("2877")),d=Object(f["a"])(u,r,i,!1,null,"5b9290fe",null);e["default"]=d.exports},"9aa7":function(t,e,n){"use strict";n("7dcc")},ade3:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},bb2f:function(t,e,n){var r=n("d039");t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},d58f:function(t,e,n){var r=n("1c0b"),i=n("7b0b"),a=n("44ad"),o=n("50c4"),s=function(t){return function(e,n,s,c){r(n);var u=i(e),f=a(u),d=o(u.length),l=t?d-1:0,h=t?-1:1;if(s<2)while(1){if(l in f){c=f[l],l+=h;break}if(l+=h,t?l<0:d<=l)throw TypeError("Reduce of empty array with no initial value")}for(;t?l>=0:d>l;l+=h)l in f&&(c=n(c,f[l],l,u));return c}};t.exports={left:s(!1),right:s(!0)}},f183:function(t,e,n){var r=n("d012"),i=n("861d"),a=n("5135"),o=n("9bf2").f,s=n("90e3"),c=n("bb2f"),u=s("meta"),f=0,d=Object.isExtensible||function(){return!0},l=function(t){o(t,u,{value:{objectID:"O"+ ++f,weakData:{}}})},h=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,u)){if(!d(t))return"F";if(!e)return"E";l(t)}return t[u].objectID},v=function(t,e){if(!a(t,u)){if(!d(t))return!0;if(!e)return!1;l(t)}return t[u].weakData},x=function(t){return c&&p.REQUIRED&&d(t)&&!a(t,u)&&l(t),t},p=t.exports={REQUIRED:!1,fastKey:h,getWeakData:v,onFreeze:x};r[u]=!0}}]);