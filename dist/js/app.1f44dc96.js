(function(i){function e(e){for(var t,o,a=e[0],u=e[1],c=e[2],l=0,v=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&v.push(r[o][0]),r[o]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(i[t]=u[t]);A&&A(e);while(v.length)v.shift()();return I.push.apply(I,c||[]),n()}function n(){for(var i,e=0;e<I.length;e++){for(var n=I[e],t=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(t=!1)}t&&(I.splice(e--,1),i=o(o.s=n[0]))}return i}var t={},r={app:0},I=[];function o(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return i[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=i,o.c=t,o.d=function(i,e,n){o.o(i,e)||Object.defineProperty(i,e,{enumerable:!0,get:n})},o.r=function(i){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},o.t=function(i,e){if(1&e&&(i=o(i)),8&e)return i;if(4&e&&"object"===typeof i&&i&&i.__esModule)return i;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:i}),2&e&&"string"!=typeof i)for(var t in i)o.d(n,t,function(e){return i[e]}.bind(null,t));return n},o.n=function(i){var e=i&&i.__esModule?function(){return i["default"]}:function(){return i};return o.d(e,"a",e),e},o.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var A=u;I.push([0,"chunk-vendors"]),n()})({0:function(i,e,n){i.exports=n("56d7")},"17b5":function(i,e){i.exports="data:image/png;base64,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"},"56d7":function(i,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("2b0e"),r=function(){var i=this,e=i.$createElement,n=i._self._c||e;return n("ul",[n("Search",{attrs:{query:i.query},on:{"input-Search-Text":i.setSelectedQuery}}),n("Card",{attrs:{moviesSelected:i.moviesSelected}})],1)},I=[],o=function(){var i=this,e=i.$createElement,n=i._self._c||e;return n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:i.newQuery,expression:"newQuery"}],attrs:{type:"text",placeholder:"Cerca.."},domProps:{value:i.newQuery},on:{input:function(e){e.target.composing||(i.newQuery=e.target.value)}}}),n("button",{on:{click:i.inputSearch}},[i._v("Cerca")])])},a=[],u={name:"Search",props:["query"],data:function(){return{newQuery:""}},methods:{inputSearch:function(){this.$emit("input-Search-Text",this.newQuery)}}},c=u,A=n("2877"),l=Object(A["a"])(c,o,a,!1,null,"180bd068",null),v=l.exports,s=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",i._l(i.moviesSelected,(function(e,r){return t("li",{key:e.id||r},[t("h2",[i._v(i._s(e.title))]),t("h3",[i._v(i._s(e.original_title))]),t("div",[t("p",[i._v("Language:")]),i._v(i._s(e.original_language)),"it"==e.original_language||"en"==e.original_language?t("img",{attrs:{src:n("b967")("./"+e.original_language+".png"),alt:""}}):i._e()]),t("h6",[i._v("Rating: "+i._s(e.vote_average))])])})),0)},f=[],p={name:"Card",props:["moviesSelected"],methods:{}},g=p,d=Object(A["a"])(g,s,f,!1,null,null,null),h=d.exports,w=n("bc3a"),y=n.n(w),m={components:{Search:v,Card:h},name:"App",data:function(){return{moviesSelected:[],api_key:"dfe0b56363d3d8cf312014e87a1dc974",query:""}},computed:{searchMovieFiltered:function(){return this.searchMovie()}},methods:{searchMovie:function(){var i=this,e={params:{api_key:this.api_key,query:this.query}};y.a.get("https://api.themoviedb.org/3/search/movie",e).then((function(e){i.moviesSelected=e.data.results}))},setSelectedQuery:function(i){this.query=i}}},E=m,C=Object(A["a"])(E,r,I,!1,null,null,null),O=C.exports;t["a"].config.productionTip=!1,new t["a"]({render:function(i){return i(O)}}).$mount("#app")},b967:function(i,e,n){var t={"./en.png":"17b5","./it.png":"e33f"};function r(i){var e=I(i);return n(e)}function I(i){if(!n.o(t,i)){var e=new Error("Cannot find module '"+i+"'");throw e.code="MODULE_NOT_FOUND",e}return t[i]}r.keys=function(){return Object.keys(t)},r.resolve=I,i.exports=r,r.id="b967"},e33f:function(i,e){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAELBAMAAAAFMM1/AAAAFVBMVEX///8AkkbOKzf10tWY07QAjT7NJTJXwIMQAAAA8UlEQVR42u3PwQAAAAgEsBRSCCKS/FmCuO9msOrYVWwnJiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIikniFNUdjvhgMbwAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=app.1f44dc96.js.map