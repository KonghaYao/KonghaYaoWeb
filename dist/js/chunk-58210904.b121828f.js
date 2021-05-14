(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58210904"],{"07ac":function(t,e,n){var a=n("23e7"),i=n("6f53").values;a({target:"Object",stat:!0},{values:function(t){return i(t)}})},"1a57":function(t,e,n){"use strict";n.r(e);var a,i,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chart"},[n("h3",{staticClass:"left"},[t._v("中国奖牌旭日图"),n("br"),t._v(t._s(t.information.title))]),n("div",{staticClass:"middle"},[n("h3",[t._v("奖牌数据中的数字")]),n("div",{staticClass:"box"},[n("h2",{staticClass:"title",staticStyle:{color:"#9d00ff"}},[t._v(t._s(t.information.MaxMedalYear[0]))]),n("div",{staticClass:"description"},[t._v(t._s(t.information.MaxMedalYear[1]))])]),n("div",{staticClass:"box"},[n("h2",{staticClass:"title",staticStyle:{color:"#040892"}},[n("span",{staticStyle:{color:"gold"}},[t._v(t._s(t.information.MedalCount[0]))]),t._v(" + "),n("span",{staticStyle:{color:"#959595"}},[t._v(t._s(t.information.MedalCount[1]))]),t._v(" + "),n("span",{staticStyle:{color:"#cc6161"}},[t._v(t._s(t.information.MedalCount[2]))]),t._v(" = "),n("span",{staticStyle:{color:"#ff7878"}},[t._v(t._s(t.information.MedalCount.reduce((function(t,e){return t+e}),0)))])]),n("div",{staticClass:"description"},[t._v(" 在 1984 年至 2016 年间，我国共获得 "+t._s(t.information.MedalCount[0])+" 枚金牌, "+t._s(t.information.MedalCount[1])+" 枚银牌，"+t._s(t.information.MedalCount[2])+" 枚铜牌，总奖牌数为 "+t._s(t.information.MedalCount.reduce((function(t,e){return t+e}),0))+"枚。 ")])]),n("div",{staticClass:"box"},[n("h2",{staticClass:"title",staticStyle:{display:"flex",width:"100%","justify-content":"space-around"}},[n("span",{staticStyle:{color:"gold"}},[t._v(t._s(t.information.MedalMean[0])+" 枚")]),t._v(" "),n("span",{staticStyle:{color:"#959595"}},[t._v(t._s(t.information.MedalMean[1])+" 枚")]),n("span",{staticStyle:{color:"#cc6161"}},[t._v(t._s(t.information.MedalMean[2])+" 枚")])]),n("div",{staticClass:"description"},[t._v(" 在 1984 年至 2016 年间，我国平均每一届奥运会获得约 "+t._s(t.information.MedalMean[0])+" 枚金牌, "+t._s(t.information.MedalMean[1])+" 枚银牌,"+t._s(t.information.MedalMean[2])+" 枚铜牌 ")])])]),n("div",{staticClass:"echarts"},[n("el-switch",{class:{summerColor:t.switchValue},attrs:{"active-color":"#67C23A","inactive-color":"#409eff","active-text":"夏季奥运会","inactive-text":"冬季奥运会"},model:{value:t.switchValue,callback:function(e){t.switchValue=e},expression:"switchValue"}}),n("div",{ref:"sunchart",staticClass:"echarts",staticStyle:{width:"600px",height:"600px"}})],1)])},s=[],o=n("2909"),c=n("1da1"),l=(n("96cf"),n("d3b7"),n("07ac"),n("b0c0"),n("d81d"),n("6062"),n("3ca3"),n("ddb0"),n("4de4"),n("1984")),u={mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.myChart=echarts.init(t.$refs.sunchart,null,{renderer:"svg"}),e.next=3,fetch("./summer中国奖牌.json",{cache:"force-cache"}).then((function(t){return t.json()})).then((function(t){return Object.values(t)}));case 3:return n=e.sent,t.summerData=t.createData(n),e.next=7,fetch("./winter中国奖牌.json",{cache:"force-cache"}).then((function(t){return t.json()})).then((function(t){return Object.values(t)}));case 7:a=e.sent,t.winterData=t.createData(a),t.SelectSeason();case 10:case"end":return e.stop()}}),e)})))()},methods:{SelectSeason:function(){var t="Winter"===this.$route.query.Season?this.winterData:this.summerData;this.Draw(t)},Draw:function(t){this.option.series={type:"sunburst",position:"center",data:t,radius:[100,"90%"],itemStyle:{borderRadius:15,borderWidth:5},label:{normal:{textStyle:{fontSize:18}}},sort:null,levels:[{},{},{r0:"67%",r:"74%",label:{position:"outside",padding:3,silent:!1},itemStyle:{borderWidth:3,color:"#000"}}]},this.myChart.setOption(this.option),this.myChart.on("finished",this.RenderFinsished),this.myChart.on("click",(function(t){a.innerHTML=t.name?t.name+"年 中国奖牌数<br/>点击内圈返回":"中国奖牌旭日图<br/>点击年份查看",Object(l["a"])(a,"fadeIn")}))},RenderFinsished:function(){if(!this.myChart.$rendered){i=document.createElementNS("http://www.w3.org/2000/svg","foreignObject"),a=document.createElement("b"),i.appendChild(a),this.myChart._dom.querySelector("svg").appendChild(i),a.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),i.setAttribute("xml:space","preserve"),i.setAttribute("fill","#464646"),i.setAttribute("fill-opacity","1"),i.setAttribute("stroke","none"),i.setAttribute("dominant-baseline","central"),i.setAttribute("text-anchor","middle");var t=this.myChart._dom.querySelector("svg").getBBox(),e=t.width,n=t.height;i.setAttribute("x",e/2-100),i.setAttribute("y",n/2-30),i.setAttribute("width",200),i.setAttribute("height",80),i.setAttribute("style",'font: bold 22px "Microsoft YaHei";dominant-baseline: middle;'),a.innerHTML="中国奖牌旭日图<br/>点击年份查看",this.myChart.$rendered=!0}},createData:function(t){return Object(o["a"])(new Set(t.map((function(t){return t.Year})))).sort((function(t,e){return t-e})).map((function(e,n){return{name:e+"",children:t.filter((function(t){return e==t.Year})).map((function(t){var e="";switch(t.Medal){case"Gold":e="金牌";break;case"Silver":e="银牌";break;case"Bronze":e="铜牌";break}return{name:e+"-"+t.count,value:t.count,itemStyle:{color:"Bronze"==t.Medal?"#b87333":t.Medal},label:{color:"Bronze"==t.Medal?"#b87333":t.Medal}}})).sort((function(t,e){return t.index-e.index})),label:{color:"#fff"}}}))}},watch:{switchValue:function(t){this.$router.push({query:{Season:t?"Summer":"Winter"}})},"$route.query":function(){this.SelectSeason()}},computed:{information:function(){return this.info["Winter"==this.$route.query.Season?"Winter":"Summer"]}},data:function(){return{switchValue:"Winter"!==this.$route.query.Season,summerData:{},winterData:[],myChart:{},rendered:!1,info:{Summer:{title:"1984 年 - 2016 年",MaxMedalYear:["2008 年","2008 年北京奥运会，中国获得的奖牌总数和金牌数均达到历届的顶峰"],MedalCount:[227,162,153],MedalMean:[22.2,18,17]},Winter:{title:"1992 年 - 2014 年",MaxMedalYear:["2010 年 和 2006 年","2008 年北京奥运会，中国获得的奖牌总数和金牌数均达到历届的顶"],MedalCount:[12,22,19],MedalMean:[1.71,3.14,2.71]}},option:{label:{color:"#000"},tooltip:{trigger:"axis"},legend:{},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},series:[]}}}},d=u,h=(n("f654"),n("2877")),f=Object(h["a"])(d,r,s,!1,null,"de99db44",null);e["default"]=f.exports},"711e":function(t,e,n){},f654:function(t,e,n){"use strict";n("711e")}}]);