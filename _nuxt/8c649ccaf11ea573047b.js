(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{180:function(t,e,r){var content=r(212);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("9d445fb6",content,!0,{sourceMap:!1})},211:function(t,e,r){"use strict";var n=r(180);r.n(n).a},212:function(t,e,r){(e=r(17)(!1)).push([t.i,"h1 small[data-v-79a69e06]{display:block;font-size:.5em}",""]),t.exports=e},230:function(t,e,r){"use strict";r.r(e);r(66),r(22),r(23),r(13),r(44);var n=r(30);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={layout:"dashboard",computed:{product:function(){var t=this.$route.params.ref,e=this.$store.state.products;for(var r in e)if(e[r].ref===t)return c({slug:r},e[r]);return null}},mounted:function(){this.$router.push({path:"/produkt/".concat(this.product.slug)})}},l=(r(211),r(4)),component=Object(l.a)(f,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,"79a69e06",null);e.default=component.exports}}]);