(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b980c74"],{"0879":function(e,t,n){},"7cc2":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"svg",staticClass:"主页2",on:{load:e.index}})},a=[],o=n("2909"),i=n("1da1"),s=(n("96cf"),n("d3b7"),n("159b"),n("d81d"),n("ddb0"),n("1984")),c={mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("./主页面.svg").then((function(e){return e.text()}));case 2:e.$refs.svg.innerHTML=t.sent,e.index(),e.event();case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{svg:""}},methods:{index:function(){var e=this.$refs.svg,t=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.querySelectorAll(n)},n=this.$anime;this.cloud(n,t),this.boom(n,t)},to:function(e){console.log("/"+e+"/index"),this.$router.push(encodeURI("/"+e+"/index"))},event:function(){var e=this,t=this.$refs.svg,n=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.querySelector(n)};["体育项目馆","中国馆","奥运风采馆"].forEach((function(t){var r=n("#"+t);r.classList.add("selector"),r.addEventListener("click",(function(){Object(s["a"])(r,"bounce"),e.to(t)})),r.addEventListener("mouseenter",(function(){Object(s["a"])(r,"bounce")}))}))},cloud:function(e,t){t("#云1","#云2").forEach((function(e){return e.style.opacity=0})),e({targets:t("#云1","#云2"),keyframes:[{translateX:[-300,300],duration:6e3,opacity:[0,1,0]}],loop:!0,direction:"reverse",easing:"linear",dalay:e.stagger(2e3)})},boom:function(e,t){e({targets:t("#气球1","#气球2","#气球3"),translateY:-200,duration:3e3,translateX:[5,-5,5,-5],opacity:[0,1,0],loop:!0,easing:"linear",dalay:e.stagger(200)}),e({targets:t("#气球阴影","#气球阴影-2"),keyframes:[{rx:0,ry:0,opacity:0}],duration:3e3,loop:!0,easing:"linear",dalay:e.stagger(2e3)}),e({targets:t("#横幅"),duration:3e3,translateY:[5,-5,5,-5],loop:!0,direction:"alternate",easing:"easeInOutQuad"}),e({targets:t("#波纹 > line"),duration:e.stagger(500),opacity:Object(o["a"])(Array(5).keys()).map((function(e){return e%2})),loop:!0,direction:"alternate",easing:"linear"}),e({targets:t("#波纹 > path"),duration:5e3,opacity:[0,1,0,1,0],translateX:20,loop:!0,easing:"linear",delay:e.stagger(500)})}}},u=c,l=(n("f95f"),n("2877")),d=Object(l["a"])(u,r,a,!1,null,null,null);t["default"]=d.exports},f95f:function(e,t,n){"use strict";n("0879")}}]);
//# sourceMappingURL=chunk-5b980c74.b9a8e7ce.js.map