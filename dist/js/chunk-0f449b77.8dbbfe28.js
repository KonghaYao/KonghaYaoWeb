(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f449b77"],{1276:function(t,e,n){"use strict";var i=n("d784"),r=n("44e7"),a=n("825a"),o=n("1d80"),s=n("4840"),l=n("8aa5"),c=n("50c4"),u=n("14c3"),d=n("9263"),f=n("d039"),p=[].push,h=Math.min,v=4294967295,x=!f((function(){return!RegExp(v,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(o(this)),a=void 0===n?v:n>>>0;if(0===a)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,a);var s,l,c,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,x=new RegExp(t.source,f+"g");while(s=d.call(x,i)){if(l=x.lastIndex,l>h&&(u.push(i.slice(h,s.index)),s.length>1&&s.index<i.length&&p.apply(u,s.slice(1)),c=s[0].length,h=l,u.length>=a))break;x.lastIndex===s.index&&x.lastIndex++}return h===i.length?!c&&x.test("")||u.push(""):u.push(i.slice(h)),u.length>a?u.slice(0,a):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=o(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,r,n):i.call(String(r),e,n)},function(t,r){var o=n(i,t,this,r,i!==e);if(o.done)return o.value;var d=a(t),f=String(this),p=s(d,RegExp),g=d.unicode,m=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(x?"y":"g"),b=new p(x?d:"^(?:"+d.source+")",m),y=void 0===r?v:r>>>0;if(0===y)return[];if(0===f.length)return null===u(b,f)?[f]:[];var S=0,E=0,w=[];while(E<f.length){b.lastIndex=x?E:0;var R,_=u(b,x?f:f.slice(E));if(null===_||(R=h(c(b.lastIndex+(x?0:E)),f.length))===S)E=l(f,E,g);else{if(w.push(f.slice(S,E)),w.length===y)return w;for(var I=1;I<=_.length-1;I++)if(w.push(_[I]),w.length===y)return w;E=S=R}}return w.push(f.slice(S)),w}]}),!x)},"14c3":function(t,e,n){var i=n("c6b6"),r=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==i(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},2935:function(t,e,n){},3835:function(t,e,n){"use strict";function i(t){if(Array.isArray(t))return t}n.d(e,"a",(function(){return s}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function r(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],i=!0,r=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(i=(o=s.next()).done);i=!0)if(n.push(o.value),e&&n.length===e)break}catch(l){r=!0,a=l}finally{try{i||null==s["return"]||s["return"]()}finally{if(r)throw a}}return n}}var a=n("06c5");function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,e){return i(t)||r(t,e)||Object(a["a"])(t,e)||o()}},"44e7":function(t,e,n){var i=n("861d"),r=n("c6b6"),a=n("b622"),o=a("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==r(t))}},"4b9f":function(t,e,n){"use strict";n("2935")},"524f":function(t,e,n){"use strict";n("88af")},"88af":function(t,e,n){},"8aa5":function(t,e,n){"use strict";var i=n("6547").charAt;t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},9263:function(t,e,n){"use strict";var i=n("ad6d"),r=n("9f7f"),a=RegExp.prototype.exec,o=String.prototype.replace,s=a,l=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),c=r.UNSUPPORTED_Y||r.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=l||u||c;d&&(s=function(t){var e,n,r,s,d=this,f=c&&d.sticky,p=i.call(d),h=d.source,v=0,x=t;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),x=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(h="(?: "+h+")",x=" "+x,v++),n=new RegExp("^(?:"+h+")",p)),u&&(n=new RegExp("^"+h+"$(?!\\s)",p)),l&&(e=d.lastIndex),r=a.call(f?n:d,x),f?r?(r.input=r.input.slice(v),r[0]=r[0].slice(v),r.index=d.lastIndex,d.lastIndex+=r[0].length):d.lastIndex=0:l&&r&&(d.lastIndex=d.global?r.index+r[0].length:e),u&&r&&r.length>1&&o.call(r[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(r[s]=void 0)})),r}),t.exports=s},"980b":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"Box",staticClass:"Box"},[n("div",{ref:"outer",attrs:{id:"WorldMap"}}),n("div",{staticClass:"tooltips"},[n("div",[t._v(t._s(t.tooltips.届数+t.tooltips.Year+"年"+t.tooltips.主办城市+("winter"==t.tooltips.Season?"冬季":"夏季")+"奥运会"))]),n("div",[t._v(t._s(t.tooltips.举办时间))]),n("div",[t._v(t._s(t.tooltips.举办国家)+" "+t._s(t.tooltips.主办城市))]),n("div",[t._v(t._s(t.tooltips.口号||""))]),n("router-link",{staticClass:"link",attrs:{to:encodeURI("/奥运风采馆/奥运会介绍/每年奖牌趋势/"+t.tooltips.Season+"/"+t.tooltips.Year+"/Gold")}},[t._v("查看详情")]),n("div",{staticClass:"scale"},[n("i",{class:{btn:!0,"el-icon-video-pause":!t.timeline.paused,"el-icon-video-play":t.timeline.paused},attrs:{circle:""},on:{click:t.pauseAndPlay}}),n("div",[t._v("时间轴")]),n("el-slider",{staticClass:"slider",attrs:{min:3,max:t.maxSize,step:3,"format-tooltip":t.formatTooltip},on:{change:t.timeControl},model:{value:t.progress,callback:function(e){t.progress=e},expression:"progress"}})],1),n("div",{staticClass:"scale"},[n("div",[t._v("地图大小")]),n("el-slider",{staticClass:"slider",staticStyle:{flex:"1"},attrs:{min:1,max:5,step:1},on:{change:t.SVGScaleChange},model:{value:t.SVGScale,callback:function(e){t.SVGScale=e},expression:"SVGScale"}})],1)],1)])},r=[],a=n("3835"),o=n("2909"),s=n("1da1"),l=(n("96cf"),n("d3b7"),n("99af"),n("1276"),n("ac1f"),n("b0c0"),n("d81d"),n("159b"),n("ddb0"),n("1209")),c={data:function(){return{maxSize:0,progress:0,allPoints:[],points:[],viewBox:[],svg:null,dataset:{},timeline:{},xLine:{},SVGScale:5,yLine:{},tooltips:{Year:1896,"届数":"第01届","赛事名称":"1896年雅典奥运会","举办国家":"希腊","主办城市":"雅典","举办时间":"1896年04月06日-1896年04月15日","口号":null,Season:"Summer",url:null,name:null,imgUrl:null,text:"1896年"}}},watch:{"timeline.paused":function(t){this.$notify({type:"success",title:t?"暂停播放动画":"开始播放动画",position:"bottom-right",duration:1e3})}},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("./奥运会赛事统一数据最终添加赛事介绍.json",{cache:"force-cache"}).then((function(t){return t.json()}));case 2:return t.dataset=e.sent,e.next=5,fetch("./worldMap.svg").then((function(t){return t.text()}));case 5:t.$refs.outer.innerHTML=e.sent,n=[].concat(Object(o["a"])(t.$refs.outer.querySelectorAll("[data-name$=summer]")),Object(o["a"])(t.$refs.outer.querySelectorAll("[data-name$=winter]"))).sort((function(t,e){return t.dataset.name.split("-")[0]-e.dataset.name.split("-")[0]})),i=n.map((function(t){var e=t.dataset.name.split("-"),n=Object(a["a"])(e,2),i=n[0],r=n[1];return t.style.opacity=0,{year:i,season:r}})),t.maxSize=3*(n.length-1),t.xLine=t.$refs.outer.querySelector("line#x"),t.yLine=t.$refs.outer.querySelector("line#y"),t.points=i,t.allPoints=n,t.svg=t.$refs.outer.children[0],t.text=document.createElementNS("http://www.w3.org/2000/svg","text"),t.text.classList.add("Text"),t.svg.appendChild(t.text),t.text2=document.createElementNS("http://www.w3.org/2000/svg","text"),t.text2.classList.add("Text2"),t.svg.appendChild(t.text2),t.viewBox=t.svg.getAttribute("viewBox").split(" "),t.timelineSetting();case 22:case"end":return e.stop()}}),e)})))()},methods:{timelineSetting:function(){var t=this,e=this;this.timeline=l["a"].timeline(),this.timeline.pause(),this.allPoints.forEach((function(n,i){t.timeline.add({targets:n,scale:[1,2,1],opacity:.7,duration:3e3,begin:function(t){var n=t.animatables[0].target.getBBox(),r=n.x,o=n.y,s=n.width,c=n.height,u=Object(a["a"])(e.viewBox,4),d=u[2],f=u[3],p=r+s/2,h=o+c/2;if(parseInt(100*p/d)){var v=100*p/d,x=100*h/f;e.svg.style.transformOrigin="".concat(v,"% ").concat(x,"% "),Object(l["a"])({targets:e.yLine,y1:h,y2:h,duation:500}),Object(l["a"])({targets:e.xLine,x1:p,x2:p,duation:500}),e.dataset.some((function(n){var i=t.animatables[0].target.dataset.name.split("-"),s=Object(a["a"])(i,2),l=s[0],c=s[1];return n.Year==l&&n.Season.toLowerCase()===c&&(e.tooltips=n,e.textAlert(e.text,"".concat(n.Year,"年").concat(n.主办城市).concat("winter"==c?"冬季":"夏季","奥运会"),[r,o]),e.textAlert(e.text2,"".concat(n.举办国家," ").concat(n.主办城市),[r,o]),!0)}))}e.progress=3*(i+1)}})}))},textAlert:function(t,e,n){t.innerHTML=e,t.setAttribute("x",n[0]),t.setAttribute("y",n[1])},pauseAndPlay:function(){this.timeline[this.timeline.paused?"play":"pause"]()},formatTooltip:function(t){return this.points[t/3-1].year+("summer"==this.points[t/3-1].season?"夏":"冬")},SVGScaleChange:function(t){this.svg.style.transform="scale(".concat(t,")")},timeControl:function(t){this.timeline.restart(),this.timeline.pause();var e=1e3*(t-1)-1e3,n=this;Object(o["a"])(Array(20).keys()).forEach((function(t,i){setTimeout((function(){n.timeline.seek(e+100*t)}),100*i)}))}}},u=c,d=(n("524f"),n("4b9f"),n("2877")),f=Object(d["a"])(u,i,r,!1,null,"b43c1b42",null);e["default"]=f.exports},"9f7f":function(t,e,n){"use strict";var i=n("d039");function r(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=i((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=i((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var i=n("23e7"),r=n("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(t,e,n){"use strict";var i=n("825a");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,n){"use strict";n("ac1f");var i=n("6eeb"),r=n("d039"),a=n("b622"),o=n("9263"),s=n("9112"),l=a("species"),c=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=a("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!r((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var h=a(t),v=!r((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),x=v&&!r((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!v||!x||"replace"===t&&(!c||!u||f)||"split"===t&&!p){var g=/./[h],m=n(h,""[t],(function(t,e,n,i,r){return e.exec===o?v&&!r?{done:!0,value:g.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),b=m[0],y=m[1];i(String.prototype,t,b),i(RegExp.prototype,h,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}d&&s(RegExp.prototype[h],"sham",!0)}}}]);
//# sourceMappingURL=chunk-0f449b77.8dbbfe28.js.map