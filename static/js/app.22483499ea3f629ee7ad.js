webpackJsonp([1],{"+hAf":function(e,t){},"60Pi":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"main-title"},[this._v("CheckPlz")]),t("router-view")],1)},staticRenderFns:[]},s=n("VU/8")({name:"App",data:function(){return{}}},a,!1,null,null,null).exports,r=n("/ocq"),l=n("mvHQ"),o=n.n(l),c=n("Ql0Q"),u=n.n(c),d={props:["menu","friends","percent","getTableWidth"],name:"MainTable",data:function(){return{}},created:function(){this.activeControls="Save"===this.$route.name},methods:{isMenuInFriend:function(e,t){return e.menus.find(function(e){return e.id===t})},updateFriendMenu:function(e,t){if(e.menus.find(function(e){return e.id===t}))e.menus=e.menus.filter(function(e){return e.id!==t});else{var n=this.menu.find(function(e){return e.id===t});e.menus.push(n)}},getDividedPrice:function(e,t){return parseInt(e)/this.getNumOfFriendsEatThis(t)},getSum:function(e){var t=this;return e.reduce(function(e,n){return e+parseInt(n.price)/t.getNumOfFriendsEatThis(n.id)},0)},getNumOfFriendsEatThis:function(e){var t=0;return this.friends.forEach(function(n){t=n.menus.find(function(t){return t.id===e})?t+1:t}),t},getSumPercent:function(e){var t=this.getSum(e);return t+t*this.percent/100},getSumTotal:function(){return this.menu.reduce(function(e,t){return e+parseInt(t.price)},0)},getSumTotalPercent:function(){var e=this.getSumTotal();return e+e*this.percent/100}}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table-container",attrs:{id:"table"}},[e.menu&&e.menu.length>0&&e.friends&&e.friends.length>0?n("div",{staticClass:"table",style:{width:e.getTableWidth+"px"}},[e._m(0),n("div",{staticClass:"table-row table-row_title"},[n("div",{staticClass:"table-cell"},[e._v("Позиция | Цена")]),e._l(e.friends,function(t){return n("div",{key:t.id,staticClass:"table-cell"},[e._v(e._s(t.name))])}),n("div",{staticClass:"table-cell"},[e._v("Позиция | Цена")])],2),e._l(e.menu,function(t){return n("div",{key:t.id,staticClass:"table-row"},[n("div",{staticClass:"table-cell"},[e._v(e._s(t.name)+" | "+e._s(t.price))]),e._l(e.friends,function(i){return n("div",{key:i.id,staticClass:"table-cell cursor-pointer",class:e.isMenuInFriend(i,t.id)?"check-yes":"check-no",on:{click:function(n){e.updateFriendMenu(i,t.id)}}},[n("span",[e._v(e._s(e.isMenuInFriend(i,t.id)?"Да":"Нет"))]),n("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(e._f("noInfinityAndFixed")(e.isMenuInFriend(i,t.id)?e.getDividedPrice(t.price,t.id):0)))])])}),n("div",{staticClass:"table-cell"},[e._v(e._s(t.name)+" | "+e._s(t.price))])],2)}),n("div",{staticClass:"table-row"},[n("div",{staticClass:"table-cell"},[e._v("Итого")]),e._l(e.friends,function(t){return n("div",{key:t.id,staticClass:"table-cell"},[e._v(e._s(e._f("noInfinityAndFixed")(e.getSum(t.menus))))])}),n("div",{staticClass:"table-cell"},[e._v(e._s(e._f("noInfinityAndFixed")(e.getSumTotal())))])],2),n("div",{staticClass:"table-row"},[n("div",{staticClass:"table-cell"},[e._v("Итого с процентом"),n("el-input",{staticClass:"percent",attrs:{type:"number",max:"100",min:"0",placeholder:"Percent"},model:{value:e.percent,callback:function(t){e.percent=t},expression:"percent"}}),n("span",[e._v("%")])],1),e._l(e.friends,function(t){return n("div",{key:t.id,staticClass:"table-cell"},[e._v(e._s(e._f("noInfinityAndFixed")(e.getSumPercent(t.menus))))])}),n("div",{staticClass:"table-cell"},[e._v(e._s(e._f("noInfinityAndFixed")(e.getSumTotalPercent())))])],2)],2):e._e()])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"table-row table-row_main"},[t("div",{staticClass:"table-cell"},[this._v("CheckPlz")])])}]},f={name:"MainPage",components:{MainTable:n("VU/8")(d,m,!1,null,null,null).exports},data:function(){return{menuName:"",menuPrice:"",friendName:"",menu:[],friends:[],percent:10,dialogSave:!1,dialogLoad:!1,loading:!1,activeControls:!1}},computed:{getTableWidth:function(){return 200*this.friends.length+200}},created:function(){this.activeControls="Save"===this.$route.name},methods:{addMenu:function(){if(this.menuName&&this.menuPrice){var e={id:Date.now(),name:this.menuName,price:this.menuPrice};this.menu.push(e),this.menuName="",this.menuPrice=""}else this.$message({message:"Заполните наименование и цену",type:"warning"})},addFriend:function(){if(this.friendName){var e={id:Date.now(),name:this.friendName,menus:[]};this.friends.push(e),this.friendName=""}else this.$message({message:"Заполните имя",type:"warning"})},removeMenu:function(e){this.menu=this.menu.filter(function(t){return t.id!==e})},removeFriend:function(e){this.friends=this.friends.filter(function(t){return t.id!==e})},saveToLocalStorage:function(){this.friends.length>0&&this.menu.length>0?(localStorage.setItem("friends",o()(this.friends)),localStorage.setItem("menu",o()(this.menu)),localStorage.setItem("percent",this.percent)):this.$message({message:"Таблица пуста",type:"warning"}),this.dialogSave=!1},loadFromLocalStorage:function(){this.friends=JSON.parse(localStorage.getItem("friends"))||[],this.menu=JSON.parse(localStorage.getItem("menu"))||[],this.percent=localStorage.getItem("percent")||10,this.dialogLoad=!1},saveImage:function(){var e=this;if(this.friends.length>0&&this.menu.length>0){this.loading=!0;var t=window.innerWidth>this.getTableWidth?window.innerWidth:this.getTableWidth;u.a.toPng(document.getElementById("table"),{width:t}).then(function(e){var t=document.createElement("a");t.download="checkplz.png",t.href=e,t.click()}).finally(function(){return e.loading=!1})}else this.$message({message:"Таблица пуста",type:"warning"})}}},v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"main-page"}},[n("el-dialog",{attrs:{title:"Сохранить таблицу?",visible:e.dialogSave},on:{"update:visible":function(t){e.dialogSave=t}}},[n("span",[e._v("Вы уверены что хотите перезаписать данные?")]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogSave=!1}}},[e._v("Отмена")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.saveToLocalStorage()}}},[e._v("ОК")])],1)]),n("el-dialog",{attrs:{title:"Загрузить таблицу?",visible:e.dialogLoad},on:{"update:visible":function(t){e.dialogLoad=t}}},[n("span",[e._v("Вы потеряете текущие значения в таблице.")]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogLoad=!1}}},[e._v("Отмена")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.loadFromLocalStorage()}}},[e._v("ОК")])],1)]),n("div",{staticClass:"page-container"},[n("div",{attrs:{id:"forms"}},[n("div",{attrs:{id:"form-menu"}},[n("p",{staticClass:"sub-title"},[e._v("Добавить элемент меню:")]),n("el-form",{attrs:{"label-width":"120px","label-position":"top"}},[n("el-form-item",[n("el-input",{attrs:{placeholder:"Наименование"},model:{value:e.menuName,callback:function(t){e.menuName=t},expression:"menuName"}})],1),n("el-form-item",[n("el-input",{attrs:{type:"number",placeholder:"Цена"},model:{value:e.menuPrice,callback:function(t){e.menuPrice=t},expression:"menuPrice"}})],1),n("el-form-item",[n("el-button",{on:{click:e.addMenu}},[e._v("Добавить в меню")])],1)],1)],1),n("div",{attrs:{id:"form-friends"}},[n("p",{staticClass:"sub-title"},[e._v("Добавить друга:")]),n("el-form",{attrs:{"label-width":"120px","label-position":"top"}},[n("el-form-item",[n("el-input",{attrs:{placeholder:"Имя"},model:{value:e.friendName,callback:function(t){e.friendName=t},expression:"friendName"}})],1),n("el-form-item",[n("el-button",{on:{click:e.addFriend}},[e._v("Добавить в таблицу")])],1)],1)],1)]),e.menu&&e.menu.length>0?n("div",{staticClass:"container"},[n("div",{staticClass:"title"},[e._v("Еда:")]),n("div",{staticClass:"menu"},e._l(e.menu,function(t,i){return n("div",{key:t.id,staticClass:"menu-item"},[n("p",{staticStyle:{"margin-bottom":"8px"}},[e._v(e._s(i+1)+" позиция"),n("el-button",{staticClass:"btn-remove",attrs:{size:"mini"},on:{click:function(n){e.removeMenu(t.id)}}},[e._v("удалить")])],1),n("el-input",{model:{value:t.name,callback:function(n){e.$set(t,"name",n)},expression:"item.name"}}),n("el-input",{attrs:{type:"number"},model:{value:t.price,callback:function(n){e.$set(t,"price",n)},expression:"item.price"}})],1)}))]):e._e(),e.friends&&e.friends.length>0?n("div",{staticClass:"container"},[n("div",{staticClass:"title"},[e._v("Попали в эксельку:")]),n("div",{staticClass:"friends"},e._l(e.friends,function(t,i){return n("div",{key:t.id,staticClass:"friend"},[n("p",{staticStyle:{"margin-bottom":"8px"}},[e._v(e._s(i+1)+" друг"),n("el-button",{staticClass:"btn-remove",attrs:{size:"mini"},on:{click:function(n){e.removeFriend(t.id)}}},[e._v("удалить")])],1),n("el-input",{model:{value:t.name,callback:function(n){e.$set(t,"name",n)},expression:"item.name"}})],1)}))]):e._e(),n("main-table",{attrs:{menu:e.menu,friends:e.friends,percent:e.percent,"get-table-width":e.getTableWidth}}),n("div",{staticClass:"controls"},[e.activeControls?n("el-button",{on:{click:function(t){e.dialogSave=!0}}},[e._v("Сохранить таблицу")]):e._e(),e.activeControls?n("el-button",{on:{click:function(t){e.dialogLoad=!0}}},[e._v("Загрузить таблицу")]):e._e(),n("el-button",{attrs:{loading:e.loading},on:{click:e.saveImage}},[e._v("Сохранить картинку")])],1)],1)],1)},staticRenderFns:[]},p=n("VU/8")(f,v,!1,null,null,null).exports,h={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"friends"}},[this._v("Friends")])},staticRenderFns:[]},g=n("VU/8")({name:"Friends",data:function(){return{friends:[]}}},h,!1,null,null,null).exports;i.default.use(r.a);var _=new r.a({routes:[{path:"/",name:"MainPage",component:p},{path:"/save",name:"Save",component:p},{path:"/friends",name:"Friends",component:g},{path:"/:page",redirect:"/"}]}),b=n("NYxO");i.default.use(b.a);var C=new b.a.Store({state:{userLoading:!0},getters:{getUserLoading:function(e){return e.userLoading}},mutations:{setUserLoading:function(e,t){e.userLoading=t}},actions:{actionSetUserLoading:function(e,t){(0,e.commit)("setUserLoading",t)}},modules:{}}),S=(n("feh2"),n("ypWw"),n("e0XP"),n("zL8q")),y=n.n(S),k=(n("+hAf"),n("wUZ8")),w=n.n(k),F=n("hlPV"),x=n.n(F),P=n("n8qV"),I=n.n(P);n("60Pi"),n("VK60");i.default.use(y.a,{locale:w.a}),i.default.use(x.a),i.default.use(I.a),i.default.filter("noInfinityAndFixed",function(e){return e===1/0?"":e.toFixed(2)}),i.default.config.productionTip=!1,new i.default({el:"#app",router:_,store:C,components:{App:s},template:"<App/>"})},VK60:function(e,t){},e0XP:function(e,t){},feh2:function(e,t){},ypWw:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.22483499ea3f629ee7ad.js.map