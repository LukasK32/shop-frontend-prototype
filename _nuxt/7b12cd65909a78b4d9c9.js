(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{166:function(t,e,r){var content=r(168);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("069a991b",content,!0,{sourceMap:!1})},167:function(t,e,r){"use strict";var c=r(166);r.n(c).a},168:function(t,e,r){(e=r(17)(!1)).push([t.i,".card[data-v-57578aea]{display:block;background:#fff;box-shadow:0 5px 20px rgba(0,0,0,.1),0 6px 6px rgba(0,0,0,.1);transform:translateY(0);cursor:pointer;transition:all .13s ease-out}.card[data-v-57578aea]:hover{box-shadow:0 10px 20px rgba(0,0,0,.15),0 6px 6px rgba(0,0,0,.15);transform:translateY(-3px)}.card img[data-v-57578aea]{width:100%;height:auto}.card h3[data-v-57578aea]{padding:10px;margin:0}.card h3 small[data-v-57578aea]{display:block;margin-bottom:.3em;font-size:.9em}.card h3 small .new-price[data-v-57578aea]{color:#4caf50}.card h3 small .old-price[data-v-57578aea]{text-decoration:line-through;font-size:.8em}",""]),t.exports=e},183:function(t,e,r){var content=r(218);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("baceb838",content,!0,{sourceMap:!1})},184:function(t,e,r){"use strict";var c={props:{product:{type:Object,default:function(){return{name:"Brak nazwy",price:"0",discountedPrice:!1,image:r(67),description:"Brak opisu"}}}}},o=(r(167),r(4)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("img",{attrs:{src:t.product.image}}),t._v(" "),r("h3",[t.product.discountedPrice?r("small",[r("span",{staticClass:"new-price"},[t._v(t._s(t.product.discountedPrice)+" zł")]),t._v(" "),r("span",{staticClass:"old-price"},[t._v(t._s(t.product.price)+" zł")])]):r("small",[t._v(t._s(t.product.price)+" zł")]),t._v("\n    "+t._s(t.product.name)+"\n  ")])])}),[],!1,null,"57578aea",null);e.a=component.exports},217:function(t,e,r){"use strict";var c=r(183);r.n(c).a},218:function(t,e,r){(e=r(17)(!1)).push([t.i,"h2[data-v-06e6eec2]{padding:0 20px}.grid[data-v-06e6eec2]{display:grid;grid-template-columns:repeat(4,1fr);grid-gap:20px 20px;gap:20px 20px}.grid a[data-v-06e6eec2]{text-decoration:none;color:#000;color:initial}",""]),t.exports=e},231:function(t,e,r){"use strict";r.r(e);r(66),r(22);var c=r(30);r(23),r(13),r(44);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function n(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={components:{Card:r(184).a},computed:{products:function(){var t=this.$store.state.products,e={};return Object.keys(t).forEach((function(r){t[r].featured&&(e=n({},e,Object(c.a)({},r,n({},t[r]))))})),e}}},l=(r(217),r(4)),component=Object(l.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("h2",[this._v("Najpopularniejsze produkty")]),this._v(" "),e("div",{staticClass:"container grid"},this._l(this.products,(function(t,r){return e("nuxt-link",{key:r,attrs:{to:"/produkt/"+r}},[e("Card",{attrs:{product:t}})],1)})),1)])}),[],!1,null,"06e6eec2",null);e.default=component.exports}}]);