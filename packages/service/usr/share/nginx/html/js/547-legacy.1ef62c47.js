(self["webpackChunklens_app"]=self["webpackChunklens_app"]||[]).push([[547],{1530:(e,t,n)=>{"use strict";var a=n(8710).charAt;e.exports=function(e,t,n){return t+(n?a(e,t).length:1)}},7007:(e,t,n)=>{"use strict";n(4916);var a=n(1470),r=n(8052),u=n(2261),l=n(7293),o=n(5112),s=n(8880),i=o("species"),c=RegExp.prototype;e.exports=function(e,t,n,p){var d=o(e),h=!l((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),m=h&&!l((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[i]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!h||!m||n){var v=a(/./[d]),f=t(d,""[e],(function(e,t,n,r,l){var o=a(e),s=t.exec;return s===u||s===c.exec?h&&!l?{done:!0,value:v(t,n,r)}:{done:!0,value:o(n,t,r)}:{done:!1}}));r(String.prototype,e,f[0]),r(c,d,f[1])}p&&s(c[d],"sham",!0)}},647:(e,t,n)=>{var a=n(1702),r=n(7908),u=Math.floor,l=a("".charAt),o=a("".replace),s=a("".slice),i=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,a,p,d){var h=n+e.length,m=a.length,v=c;return void 0!==p&&(p=r(p),v=i),o(d,v,(function(r,o){var i;switch(l(o,0)){case"$":return"$";case"&":return e;case"`":return s(t,0,n);case"'":return s(t,h);case"<":i=p[s(o,1,-1)];break;default:var c=+o;if(0===c)return r;if(c>m){var d=u(c/10);return 0===d?r:d<=m?void 0===a[d-1]?l(o,1):a[d-1]+l(o,1):r}i=a[c-1]}return void 0===i?"":i}))}},7651:(e,t,n)=>{var a=n(6916),r=n(9670),u=n(614),l=n(4326),o=n(2261),s=TypeError;e.exports=function(e,t){var n=e.exec;if(u(n)){var i=a(n,e,t);return null!==i&&r(i),i}if("RegExp"===l(e))return a(o,e,t);throw s("RegExp#exec called on incompatible receiver")}},8710:(e,t,n)=>{var a=n(1702),r=n(9303),u=n(1340),l=n(4488),o=a("".charAt),s=a("".charCodeAt),i=a("".slice),c=function(e){return function(t,n){var a,c,p=u(l(t)),d=r(n),h=p.length;return d<0||d>=h?e?"":void 0:(a=s(p,d),a<55296||a>56319||d+1===h||(c=s(p,d+1))<56320||c>57343?e?o(p,d):a:e?i(p,d,d+2):c-56320+(a-55296<<10)+65536)}};e.exports={codeAt:c(!1),charAt:c(!0)}},5306:(e,t,n)=>{"use strict";var a=n(2104),r=n(6916),u=n(1702),l=n(7007),o=n(7293),s=n(9670),i=n(614),c=n(8554),p=n(9303),d=n(7466),h=n(1340),m=n(4488),v=n(1530),f=n(8173),g=n(647),y=n(7651),w=n(5112),O=w("replace"),I=Math.max,b=Math.min,k=u([].concat),C=u([].push),T=u("".indexOf),x=u("".slice),S=function(e){return void 0===e?e:String(e)},$=function(){return"$0"==="a".replace(/./,"$0")}(),D=function(){return!!/./[O]&&""===/./[O]("a","$0")}(),_=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));l("replace",(function(e,t,n){var u=D?"$":"$0";return[function(e,n){var a=m(this),u=c(e)?void 0:f(e,O);return u?r(u,e,a,n):r(t,h(a),e,n)},function(e,r){var l=s(this),o=h(e);if("string"==typeof r&&-1===T(r,u)&&-1===T(r,"$<")){var c=n(t,l,o,r);if(c.done)return c.value}var m=i(r);m||(r=h(r));var f=l.global;if(f){var w=l.unicode;l.lastIndex=0}var O=[];while(1){var $=y(l,o);if(null===$)break;if(C(O,$),!f)break;var D=h($[0]);""===D&&(l.lastIndex=v(o,d(l.lastIndex),w))}for(var _="",B=0,P=0;P<O.length;P++){$=O[P];for(var A=h($[0]),F=I(b(p($.index),o.length),0),E=[],j=1;j<$.length;j++)C(E,S($[j]));var W=$.groups;if(m){var H=k([A],E,F,o);void 0!==W&&C(H,W);var K=h(a(r,void 0,H))}else K=g(A,o,F,E,W,r);F>=B&&(_+=x(o,B,F)+K,B=F+A.length)}return _+x(o,B)}]}),!_||!$||D)},8596:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(6252),r=n(3577);function u(e,t,n,u,l,o){const s=(0,a.up)("ion-button"),i=(0,a.up)("ion-buttons");return(0,a.wg)(),(0,a.j4)(i,{class:"btn"},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{fill:"solid",class:"custom-btn",disabled:e.disabled},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.title),1)])),_:1},8,["disabled"])])),_:1})}var l=n(3687);const o=(0,a.aZ)({name:"Button",props:{title:{type:String,default:""},disabled:{type:Boolean,default:!1}},components:{IonButton:l.YG,IonButtons:l.Sm}});var s=n(3744);const i=(0,s.Z)(o,[["render",u],["__scopeId","data-v-036daa60"]]),c=i},2379:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>_});var a=n(6252),r=n(3577);function u(e,t,n,u,l,o){const s=(0,a.up)("Header"),i=(0,a.up)("ion-label"),c=(0,a.up)("ion-row"),p=(0,a.up)("v-otp-input"),d=(0,a.up)("ion-item"),h=(0,a.up)("Button"),m=(0,a.up)("ion-list"),v=(0,a.up)("ion-content"),f=(0,a.up)("ion-page");return(0,a.wg)(),(0,a.j4)(f,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,{title:e.$t("AUTH"),back:""},null,8,["title"]),(0,a.Wm)(v,{"scroll-y":!1,id:"check-sms"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{class:"list"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{class:"ion-margin"},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{class:"text"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.$t("SMS-TITLE")),1)])),_:1})])),_:1}),(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{lines:"none",class:"input-item"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{ref:"code","input-classes":"input",separator:"",inputmode:"tel","num-inputs":6,"should-auto-focus":!0,"is-input-num":!0,conditionalClass:["one","two","three","four"],onOnComplete:e.handleOnComplete},null,8,["onOnComplete"])])),_:1})])),_:1}),e.repeat?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(c,{key:0,class:"ion-margin row"},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{class:"repeat-title"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.$t("RESENDING-TEXT"))+" "+(0,r.zw)(e.currentTime)+" "+(0,r.zw)(e.$t("SEC")),1)])),_:1})])),_:1})),e.repeat?((0,a.wg)(),(0,a.j4)(c,{key:1,class:"row"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{title:e.$t("REPEAT-CODE"),class:"button-code",onClick:e.repeatCode},null,8,["title","onClick"])])),_:1})):(0,a.kq)("",!0)])),_:1})])),_:1})])),_:1})}n(4916),n(5306);var l=n(3687),o=n(4032),s=n(8596),i=n(2262),c=n(9963),p=(0,a.aZ)({name:"SingleOtpInput",props:{inputType:{type:String,validator:e=>["number","tel","letter-numeric","password"].includes(e),default:"tel"},inputmode:{type:String,default:"numeric"},value:{type:[String,Number]},separator:{type:String},focus:{type:Boolean},inputClasses:{type:[String,Array]},conditionalClass:{type:String},shouldAutoFocus:{type:Boolean},isLastChild:{type:Boolean},placeholder:{type:String},isDisabled:{type:Boolean}},emits:["on-change","on-keydown","on-paste","on-focus","on-blur"],setup(e,t){let{emit:n}=t;const r=(0,i.iH)(e.value||""),u=(0,i.iH)(null),l=()=>(r.value=r.value.toString(),r.value.length>1&&(r.value=r.value.slice(0,1)),n("on-change",r.value)),o=e=>e>=65&&e<=90,s=e=>e>=48&&e<=57||e>=96&&e<=105,c=t=>{e.isDisabled&&t.preventDefault();const a=t||window.event,r=a.which?a.which:a.keyCode;s(r)||"letter-numeric"===e.inputType&&o(r)||[8,9,13,37,39,46,86].includes(r)?n("on-keydown",t):a.preventDefault()},p=e=>n("on-paste",e),d=()=>(u.value.select(),n("on-focus")),h=()=>n("on-blur");return(0,a.YP)((()=>e.value),((e,t)=>{e!==t&&(r.value=e)})),(0,a.YP)((()=>e.focus),((t,n)=>{n!==t&&u.value&&e.focus&&(u.value.focus(),u.value.select())})),(0,a.bv)((()=>{u.value&&e.focus&&e.shouldAutoFocus&&(u.value.focus(),u.value.select())})),{handleOnChange:l,handleOnKeyDown:c,handleOnPaste:p,handleOnFocus:d,handleOnBlur:h,input:u,model:r,inputTypeValue:"letter-numeric"===e.inputType?"text":e.inputType}}});const d={style:{display:"flex","align-items":"center"}},h=["type","inputmode","placeholder","disabled"],m={key:0},v=["innerHTML"];function f(e,t,n,u,l,o){return(0,a.wg)(),(0,a.iD)("div",d,[(0,a.wy)((0,a._)("input",{type:e.inputTypeValue,inputmode:e.inputmode,placeholder:e.placeholder,disabled:e.isDisabled,ref:"input",min:"0",max:"9",maxlength:"1",pattern:"[0-9]","onUpdate:modelValue":t[0]||(t[0]=t=>e.model=t),class:(0,r.C_)([e.inputClasses,e.conditionalClass,{"is-complete":e.model}]),onInput:t[1]||(t[1]=function(){return e.handleOnChange&&e.handleOnChange(...arguments)}),onKeydown:t[2]||(t[2]=function(){return e.handleOnKeyDown&&e.handleOnKeyDown(...arguments)}),onPaste:t[3]||(t[3]=function(){return e.handleOnPaste&&e.handleOnPaste(...arguments)}),onFocus:t[4]||(t[4]=function(){return e.handleOnFocus&&e.handleOnFocus(...arguments)}),onBlur:t[5]||(t[5]=function(){return e.handleOnBlur&&e.handleOnBlur(...arguments)})},null,42,h),[[c.YZ,e.model]]),!e.isLastChild&&e.separator?((0,a.wg)(),(0,a.iD)("span",m,[(0,a._)("span",{innerHTML:e.separator},null,8,v)])):(0,a.kq)("",!0)])}p.render=f;const g=8,y=37,w=39,O=46;var I=(0,a.aZ)({name:"Vue3OtpInput",components:{SingleOtpInput:p},props:{numInputs:{default:4},separator:{type:String,default:"**"},inputClasses:{type:[String,Array]},conditionalClass:{type:Array,default:[]},inputType:{type:String,validator:e=>["number","tel","letter-numeric","password"].includes(e)},inputmode:{type:String,validator:e=>["numeric","text","tel","none"].includes(e),default:"numeric"},shouldAutoFocus:{type:Boolean,default:!1},placeholder:{type:Array,default:[]},isDisabled:{type:Boolean,default:!1}},setup(e,t){let{emit:n}=t;const a=(0,i.iH)(0),r=(0,i.iH)([]),u=(0,i.iH)([]),l=e=>{a.value=e},o=()=>{a.value=-1},s=()=>r.value.join("").length===e.numInputs?n("on-complete",r.value.join("")):"Wait until the user enters the required number of characters",c=t=>{a.value=Math.max(Math.min(e.numInputs-1,t),0)},p=()=>{c(a.value+1)},d=()=>{c(a.value-1)},h=e=>{u.value=Object.assign([],r.value),r.value[a.value]=e,u.value.join("")!==r.value.join("")&&(n("on-change",r.value.join("")),s())},m=t=>{t.preventDefault();const n=t.clipboardData.getData("text/plain").slice(0,e.numInputs-a.value).split("");if("number"===e.inputType&&!n.join("").match(/^\d+$/))return"Invalid pasted data";if("letter-numeric"===e.inputType&&!n.join("").match(/^\w+$/))return"Invalid pasted data";const u=r.value.slice(0,a.value),l=u.concat(n);return l.slice(0,e.numInputs).forEach((function(e,t){r.value[t]=e})),c(l.slice(0,e.numInputs).length),s()},v=e=>{h(e),p()},f=()=>{r.value.length>0&&n("on-change",""),r.value=[],a.value=0},I=e=>{switch(e.keyCode){case g:e.preventDefault(),h(""),d();break;case O:e.preventDefault(),h("");break;case y:e.preventDefault(),d();break;case w:e.preventDefault(),p();break}};return{activeInput:a,otp:r,oldOtp:u,clearInput:f,handleOnPaste:m,handleOnKeyDown:I,handleOnBlur:o,changeCodeAtFocus:h,focusInput:c,focusNextInput:p,focusPrevInput:d,handleOnFocus:l,checkFilledAllInputs:s,handleOnChange:v}}});const b={style:{display:"flex"}},k={key:0,autocomplete:"off",name:"hidden",type:"text",style:{display:"none"}};function C(e,t,n,r,u,l){const o=(0,a.up)("SingleOtpInput");return(0,a.wg)(),(0,a.iD)("div",b,["password"===e.inputType?((0,a.wg)(),(0,a.iD)("input",k)):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.numInputs,((t,n)=>((0,a.wg)(),(0,a.j4)(o,{key:n,focus:e.activeInput===n,value:e.otp[n],separator:e.separator,"input-type":e.inputType,inputmode:e.inputmode,"input-classes":e.inputClasses,conditionalClass:e.conditionalClass[n],"is-last-child":n===e.numInputs-1,"should-auto-focus":e.shouldAutoFocus,placeholder:e.placeholder[n],"is-disabled":e.isDisabled,onOnChange:e.handleOnChange,onOnKeydown:e.handleOnKeyDown,onOnPaste:e.handleOnPaste,onOnFocus:t=>e.handleOnFocus(n),onOnBlur:e.handleOnBlur},null,8,["focus","value","separator","input-type","inputmode","input-classes","conditionalClass","is-last-child","should-auto-focus","placeholder","is-disabled","onOnChange","onOnKeydown","onOnPaste","onOnFocus","onOnBlur"])))),128))])}I.render=C;var T=(()=>{const e=I;return e.install=t=>{t.component("Vue3OtpInput",e)},e})(),x=n(3907);const S=(0,a.aZ)({name:"CheckSms",components:{Button:s.Z,Header:o.Z,IonPage:l._i,IonContent:l.W2,IonList:l.q_,IonItem:l.Ie,IonLabel:l.Q$,IonRow:l.Nd,VOtpInput:T},data(){return{repeat:!1,currentTime:60,timer:null}},watch:{currentTime(e){0===e&&(this.repeat=!0,this.stopTimer())}},computed:{...(0,x.Se)(["token","user"]),redirect(){return this.$route.params.redirect}},methods:{...(0,x.OI)(["SET_TOKEN"]),...(0,x.nv)(["sendPhone","checkSmsCode"]),setFocus(){this.$refs.code.focusInput(0)},async handleOnComplete(e){const t=localStorage.getItem("phone");await this.checkSmsCode({phone:t,message:e}),this.handlerRoute()},handlerRoute(){console.log(this.redirect),"Pickup"===this.redirect&&this.token&&this.user.firstname&&this.user.lastname&&this.user.patronymic?this.$router.replace({name:"Pickup"}):this.$router.replace({name:"FillProfile",params:{redirect:this.redirect}}),"Profile"===this.redirect&&this.token&&this.user.firstname&&this.user.lastname&&this.user.patronymic?this.$router.replace({name:this.redirect}):this.$router.replace({name:"FillProfile",params:{redirect:this.redirect}})},repeatCode(){this.currentTime=60,this.startTimer(),this.repeat=!1;const e=localStorage.getItem("phone");this.sendPhone({phone:e})},startTimer(){this.timer=setInterval((()=>{this.currentTime--}),1e3)},stopTimer(){clearTimeout(this.timer)}},mounted(){setTimeout((()=>{this.$nextTick((()=>this.setFocus()))}),1e3),this.startTimer()},unmounted(){this.stopTimer()}});var $=n(3744);const D=(0,$.Z)(S,[["render",u]]),_=D}}]);
//# sourceMappingURL=547-legacy.1ef62c47.js.map