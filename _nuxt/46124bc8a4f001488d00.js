(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{178:function(t,e,n){var content=n(208);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("6c1df6e4",content,!0,{sourceMap:!1})},207:function(t,e,n){"use strict";var o=n(178);n.n(o).a},208:function(t,e,n){(e=n(17)(!1)).push([t.i,".login-container[data-v-23037994]{background:#264e42;padding:20px;position:absolute;top:0;left:0;bottom:0;right:0;overflow:hidden;overflow-y:auto;display:flex;flex-direction:row;align-items:center;justify-content:center}.login-container .card[data-v-23037994]{width:500px;background:#fff;box-shadow:0 10px 20px rgba(0,0,0,.15),0 6px 6px rgba(0,0,0,.15);padding:20px}.login-container .card h1[data-v-23037994]{margin-top:0}.login-container .card input[data-v-23037994],.login-container .card label[data-v-23037994]{display:block;font-size:1.15em;margin:.5em 0}.login-container .card input[data-v-23037994]{width:100%;padding:.25em .5em}",""]),t.exports=e},227:function(t,e,n){"use strict";n.r(e);var o={layout:"blank",data:function(){return{username:"andrzej@koronapol.pl",password:"zaq1@WSX",err:!1}},methods:{login:function(){"andrzej@koronapol.pl"===this.username&&"zaq1@WSX"===this.password?this.$router.push({path:"/dashboard"}):this.err=!0}}},r=(n(207),n(4)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-container"},[n("div",{staticClass:"card"},[n("h1",[t._v("Logowanie")]),t._v(" "),t._m(0),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"Nazwa użytkownika",required:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),t._m(1),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Hasło",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),t.err?n("p",{staticStyle:{"text-align":"right",color:"red"}},[t._v("\n      Nazwa użytkownika lub hasło niepoprawne!\n    ")]):t._e(),t._v(" "),n("div",{staticStyle:{"text-align":"right"}},[n("div",{staticClass:"btn dash",on:{click:t.login}},[t._v("\n        Zaloguj się\n      ")])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"uname"}},[e("b",[this._v("Nazwa użytkownika")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"psw"}},[e("b",[this._v("Hasło")])])}],!1,null,"23037994",null);e.default=component.exports}}]);