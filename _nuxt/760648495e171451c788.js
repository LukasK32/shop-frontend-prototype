(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{176:function(t,r,n){var content=n(204);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("0da13352",content,!0,{sourceMap:!1})},203:function(t,r,n){"use strict";var e=n(176);n.n(e).a},204:function(t,r,n){(r=n(17)(!1)).push([t.i,".addComment[data-v-f96b56d4]{margin-top:90px;padding:20px 30px;width:500px;background:#fff;box-shadow:0 5px 20px rgba(0,0,0,.1),0 6px 6px rgba(0,0,0,.1);transform:translateY(0)}.addButton[data-v-f96b56d4]{margin-top:14px}.btn.dash.dodaj[data-v-f96b56d4]{display:inline-block;padding:.3em 1em}",""]),t.exports=r},225:function(t,r,n){"use strict";n.r(r);var e={layout:"dashboard",data:function(){return{promocja:!1}}},o=(n(203),n(4)),component=Object(o.a)(e,(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"addComment"},[n("h2",[t._v("Dodaj produkt")]),t._v(" "),n("div",{staticClass:"inputContainer"},[n("label",{attrs:{for:"nazwa"}},[t._v("Nazwa produktu:")]),t._v(" "),n("input",{staticClass:"nazwa",attrs:{type:"text",maxlength:"50"}}),t._v(" "),n("label",{attrs:{for:"cena"}},[t._v("Cena:")]),t._v(" "),n("input",{staticClass:"cenap",attrs:{type:"number",min:"0"}}),t._v(" "),n("label",{attrs:{for:"cenap"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.promocja,expression:"promocja"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.promocja)?t._i(t.promocja,null)>-1:t.promocja},on:{change:function(r){var n=t.promocja,e=r.target,o=!!e.checked;if(Array.isArray(n)){var c=t._i(n,null);e.checked?c<0&&(t.promocja=n.concat([null])):c>-1&&(t.promocja=n.slice(0,c).concat(n.slice(c+1)))}else t.promocja=o}}}),t._v(" Cena promocyjna:")]),t._v(" "),n("input",{staticClass:"cenap",attrs:{type:"number",min:"0",disabled:!t.promocja}}),t._v(" "),n("label",{attrs:{for:"cena"}},[t._v("Ilość:")]),t._v(" "),n("input",{staticClass:"cenap",attrs:{type:"number",min:"0"}}),t._v(" "),n("label",{attrs:{for:"opis"}},[t._v("Opis: ")]),t._v(" "),n("textarea",{attrs:{rows:"5"}}),t._v(" "),t._m(0)]),t._v(" "),n("div",{staticClass:"addButton"},[n("n-link",{staticClass:"btn dash",attrs:{to:"/dashboard/asortyment"}},[t._v("\n      Zatwierdź\n    ")])],1)])}),[function(){var t=this.$createElement,r=this._self._c||t;return r("label",{attrs:{for:"btn dash dodaj"}},[this._v("Zdjęcie:\n      "),r("input",{attrs:{type:"file"}})])}],!1,null,"f96b56d4",null);r.default=component.exports}}]);