(self["webpackChunklens_app"]=self["webpackChunklens_app"]||[]).push([[554],{1530:(e,t,n)=>{"use strict";var a=n(8710).charAt;e.exports=function(e,t,n){return t+(n?a(e,t).length:1)}},7007:(e,t,n)=>{"use strict";n(4916);var a=n(1470),r=n(8052),c=n(2261),o=n(7293),s=n(5112),i=n(8880),u=s("species"),l=RegExp.prototype;e.exports=function(e,t,n,h){var d=s(e),v=!o((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),f=v&&!o((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!v||!f||n){var g=a(/./[d]),p=t(d,""[e],(function(e,t,n,r,o){var s=a(e),i=t.exec;return i===c||i===l.exec?v&&!o?{done:!0,value:g(t,n,r)}:{done:!0,value:s(n,t,r)}:{done:!1}}));r(String.prototype,e,p[0]),r(l,d,p[1])}h&&i(l[d],"sham",!0)}},647:(e,t,n)=>{var a=n(1702),r=n(7908),c=Math.floor,o=a("".charAt),s=a("".replace),i=a("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,a,h,d){var v=n+e.length,f=a.length,g=l;return void 0!==h&&(h=r(h),g=u),s(d,g,(function(r,s){var u;switch(o(s,0)){case"$":return"$";case"&":return e;case"`":return i(t,0,n);case"'":return i(t,v);case"<":u=h[i(s,1,-1)];break;default:var l=+s;if(0===l)return r;if(l>f){var d=c(l/10);return 0===d?r:d<=f?void 0===a[d-1]?o(s,1):a[d-1]+o(s,1):r}u=a[l-1]}return void 0===u?"":u}))}},7651:(e,t,n)=>{var a=n(6916),r=n(9670),c=n(614),o=n(4326),s=n(2261),i=TypeError;e.exports=function(e,t){var n=e.exec;if(c(n)){var u=a(n,e,t);return null!==u&&r(u),u}if("RegExp"===o(e))return a(s,e,t);throw i("RegExp#exec called on incompatible receiver")}},8710:(e,t,n)=>{var a=n(1702),r=n(9303),c=n(1340),o=n(4488),s=a("".charAt),i=a("".charCodeAt),u=a("".slice),l=function(e){return function(t,n){var a,l,h=c(o(t)),d=r(n),v=h.length;return d<0||d>=v?e?"":void 0:(a=i(h,d),a<55296||a>56319||d+1===v||(l=i(h,d+1))<56320||l>57343?e?s(h,d):a:e?u(h,d,d+2):l-56320+(a-55296<<10)+65536)}};e.exports={codeAt:l(!1),charAt:l(!0)}},6699:(e,t,n)=>{"use strict";var a=n(2109),r=n(1318).includes,c=n(7293),o=n(1223),s=c((function(){return!Array(1).includes()}));a({target:"Array",proto:!0,forced:s},{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},5306:(e,t,n)=>{"use strict";var a=n(2104),r=n(6916),c=n(1702),o=n(7007),s=n(7293),i=n(9670),u=n(614),l=n(8554),h=n(9303),d=n(7466),v=n(1340),f=n(4488),g=n(1530),p=n(8173),_=n(647),m=n(7651),P=n(5112),b=P("replace"),k=Math.max,A=Math.min,T=c([].concat),w=c([].push),x=c("".indexOf),H=c("".slice),$=function(e){return void 0===e?e:String(e)},W=function(){return"$0"==="a".replace(/./,"$0")}(),I=function(){return!!/./[b]&&""===/./[b]("a","$0")}(),E=!s((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));o("replace",(function(e,t,n){var c=I?"$":"$0";return[function(e,n){var a=f(this),c=l(e)?void 0:p(e,b);return c?r(c,e,a,n):r(t,v(a),e,n)},function(e,r){var o=i(this),s=v(e);if("string"==typeof r&&-1===x(r,c)&&-1===x(r,"$<")){var l=n(t,o,s,r);if(l.done)return l.value}var f=u(r);f||(r=v(r));var p=o.global;if(p){var P=o.unicode;o.lastIndex=0}var b=[];while(1){var W=m(o,s);if(null===W)break;if(w(b,W),!p)break;var I=v(W[0]);""===I&&(o.lastIndex=g(s,d(o.lastIndex),P))}for(var E="",C=0,R=0;R<b.length;R++){W=b[R];for(var O=v(W[0]),y=k(A(h(W.index),s.length),0),M=[],L=1;L<W.length;L++)w(M,$(W[L]));var B=W.groups;if(f){var U=T([O],M,y,s);void 0!==B&&w(U,B);var G=v(a(r,void 0,U))}else G=_(O,s,y,M,B,r);y>=C&&(E+=H(s,C,y)+G,C=y+O.length)}return E+H(s,C)}]}),!E||!W||I)},9554:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var a=n(6252),r=n(9963),c=n(3577);const o={key:0,style:{position:"relative"}},s={class:"count-box"},i={class:"count"};function u(e,t){const n=(0,a.up)("ion-router-outlet"),u=(0,a.up)("ion-icon"),l=(0,a.up)("ion-label"),h=(0,a.up)("ion-tab-button"),d=(0,a.up)("ion-tab-bar"),v=(0,a.up)("ion-tabs"),f=(0,a.up)("ion-content"),g=(0,a.up)("ion-page");return(0,a.wg)(),(0,a.j4)(g,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f,{"scroll-y":!1},{default:(0,a.w5)((()=>[(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[(0,a.Wm)(n,{animated:!1}),(0,a.Wm)(d,{slot:"bottom",class:"tab-bar"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{selected:e.checkPath(e.PATH_HOME),onClick:t[0]||(t[0]=(0,r.iM)((t=>e.changePath(e.PATH_HOME)),["prevent"]))},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{icon:e.changeHome,class:"icon"},null,8,["icon"]),(0,a.Wm)(l,{class:"label"},{default:(0,a.w5)((()=>[(0,a.Uk)("Главная")])),_:1})])),_:1},8,["selected"]),(0,a.Wm)(h,{selected:e.checkPath(e.PATH_CATALOG),onClick:t[1]||(t[1]=(0,r.iM)((t=>e.changePath(e.PATH_CATALOG)),["prevent"]))},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{icon:e.changeCatalog,class:"icon"},null,8,["icon"]),(0,a.Wm)(l,{class:"label"},{default:(0,a.w5)((()=>[(0,a.Uk)("Каталог")])),_:1})])),_:1},8,["selected"]),(0,a.Wm)(h,{selected:e.checkPath(e.PATH_RECORDING),onClick:t[2]||(t[2]=(0,r.iM)((t=>e.changePath(e.PATH_RECORDING)),["prevent"]))},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{icon:e.changeRecording,class:"icon"},null,8,["icon"]),(0,a.Wm)(l,{class:"label"},{default:(0,a.w5)((()=>[(0,a.Uk)("Запись")])),_:1})])),_:1},8,["selected"]),(0,a.Wm)(h,{selected:e.checkPath(e.PATH_BASKET),onClick:t[3]||(t[3]=(0,r.iM)((t=>e.changePath(e.PATH_BASKET)),["prevent"]))},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{icon:e.changeBasket,class:"icon"},null,8,["icon"]),(0,a.Wm)(l,{class:"label"},{default:(0,a.w5)((()=>[(0,a.Uk)("Корзина")])),_:1}),0!==e.basket_count?((0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",s,[(0,a._)("p",i,(0,c.zw)(e.basket_count),1)])])):(0,a.kq)("",!0)])),_:1},8,["selected"]),(0,a.Wm)(h,{selected:e.checkPath(e.PATH_PROFILE),onClick:t[4]||(t[4]=(0,r.iM)((t=>e.changePath(e.PATH_PROFILE)),["prevent"]))},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{icon:e.changeProfile,class:"icon"},null,8,["icon"]),(0,a.Wm)(l,{class:"label"},{default:(0,a.w5)((()=>[(0,a.Uk)("Профиль")])),_:1})])),_:1},8,["selected"])])),_:1})])),_:1})])),_:1})])),_:1})}n(6699),n(4916),n(5306);var l=n(3687),h=n(8317),d=n(3907);const v=(0,a.aZ)({name:"LayoutHome",components:{IonLabel:l.Q$,IonTabs:l.UN,IonTabBar:l.yq,IonTabButton:l.ZU,IonIcon:l.gu,IonPage:l._i,IonRouterOutlet:l.jP,IonContent:l.W2},data:()=>({PATH_HOME:h.cR,PATH_CATALOG:h.hq,PATH_BASKET:h.ZY,PATH_RECORDING:h.Ej,PATH_PROFILE:h.i0}),computed:{...(0,d.Se)(["basket_count"]),changeHome(){return this.$route.path.includes(h.cR)?"assets/icon/home-active.svg":"assets/icon/home.svg"},changeCatalog(){return this.$route.path.includes(h.hq)?"assets/icon/catalog-active.svg":"assets/icon/catalog.svg"},changeRecording(){return this.$route.path.includes(h.Ej)?"assets/icon/recording-active.svg":"assets/icon/recording.svg"},changeBasket(){return this.$route.path.includes(h.ZY)?"assets/icon/basket-active.svg":"assets/icon/basket.svg"},changeProfile(){return this.$route.path.includes(h.i0)?"assets/icon/profile-active.svg":"assets/icon/profile.svg"}},methods:{checkPath(e){return!!this.$route.matched.find((t=>t.path===e))},changePath(e){this.$router.replace(e)}}});var f=n(3744);const g=(0,f.Z)(v,[["render",u],["__scopeId","data-v-97be3166"]]),p=g}}]);
//# sourceMappingURL=554.a51c3a9a.js.map