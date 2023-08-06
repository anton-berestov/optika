"use strict";(self["webpackChunklens_app"]=self["webpackChunklens_app"]||[]).push([[480],{6699:(t,e,n)=>{var o=n(2109),s=n(1318).includes,a=n(7293),l=n(1223),r=a((function(){return!Array(1).includes()}));o({target:"Array",proto:!0,forced:r},{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),l("includes")},8596:(t,e,n)=>{n.d(e,{Z:()=>c});var o=n(6252),s=n(3577);function a(t,e,n,a,l,r){const i=(0,o.up)("ion-button"),u=(0,o.up)("ion-buttons");return(0,o.wg)(),(0,o.j4)(u,{class:"btn"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{fill:"solid",class:"custom-btn",disabled:t.disabled},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(t.title),1)])),_:1},8,["disabled"])])),_:1})}var l=n(3687);const r=(0,o.aZ)({name:"Button",props:{title:{type:String,default:""},disabled:{type:Boolean,default:!1}},components:{IonButton:l.YG,IonButtons:l.Sm}});var i=n(3744);const u=(0,i.Z)(r,[["render",a],["__scopeId","data-v-036daa60"]]),c=u},9438:(t,e,n)=>{n.d(e,{Z:()=>f});n(1817);var o=n(6252),s=n(3577);const a={class:"vector"},l=["src"],r={class:"text"},i={class:"title"},u={class:"description"};function c(t,e,n,c,d,p){const h=(0,o.up)("ion-content");return(0,o.wg)(),(0,o.j4)(h,{class:"info-wrapper","scroll-y":!1},{default:(0,o.w5)((()=>[(0,o._)("div",a,[(0,o._)("img",{src:t.icon},null,8,l)]),(0,o._)("div",r,[(0,o._)("p",i,(0,s.zw)(t.title),1),(0,o._)("p",u,(0,s.zw)(t.description),1)])])),_:1})}var d=n(3687);const p=(0,o.aZ)({name:"Info",props:{icon:{type:String,default:""},title:{type:String,default:""},description:{type:String,default:""}},emits:["update"],components:{IonContent:d.W2}});var h=n(3744);const m=(0,h.Z)(p,[["render",c],["__scopeId","data-v-7e5b1674"]]),f=m},9059:(t,e,n)=>{n.r(e),n.d(e,{default:()=>m});n(4916),n(7658);var o=n(6252),s=n(3577);function a(t,e){const n=(0,o.up)("ion-searchbar"),a=(0,o.up)("ion-row"),l=(0,o.up)("Header"),r=(0,o.up)("Info"),i=(0,o.up)("ion-img"),u=(0,o.up)("ion-thumbnail"),c=(0,o.up)("ion-label"),d=(0,o.up)("ion-item"),p=(0,o.up)("ion-list"),h=(0,o.up)("Button"),m=(0,o.up)("ion-content"),f=(0,o.up)("ion-page");return(0,o.wg)(),(0,o.j4)(f,null,{default:(0,o.w5)((()=>[(0,o.Wm)(l,{back:""},{search:(0,o.w5)((()=>[(0,o.Wm)(a,{class:"ion-align-items-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(n,{ref:"inputRef",placeholder:t.$t("CATALOG-SEARCH"),class:"searchbar",modelValue:t.search,"onUpdate:modelValue":e[0]||(e[0]=e=>t.search=e)},null,8,["placeholder","modelValue"])])),_:1})])),_:1}),(0,o.Wm)(m,{fullscreen:!0,id:"search"},{default:(0,o.w5)((()=>[t.search.length&&!t.onProducts.length?((0,o.wg)(),(0,o.j4)(r,{key:0,icon:"assets/icon/empty.svg",title:t.$t("SEARCH-EMPTY"),description:t.$t("SEARCH-EMPTY-DESCRIPTION"),onUpdate:t.update},null,8,["title","description","onUpdate"])):(0,o.kq)("",!0),(0,o.Wm)(p,{class:"ion-margin-top list"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.onProducts,(e=>((0,o.wg)(),(0,o.j4)(d,{key:e.id,onClick:n=>t.$router.push({name:"Categorie",params:{id:e.id}})},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{slot:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{src:e.image[0].thumbnailUrl},null,8,["src"])])),_:2},1024),(0,o.Wm)(a,{class:"ion-wrap"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{class:"title"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.title)+" "+(0,s.zw)(t.$t(e.type)),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1}),t.search.length&&!t.onProducts.length?((0,o.wg)(),(0,o.j4)(h,{key:1,title:t.$t("TO-CATALOG"),class:"button",onClick:e[1]||(e[1]=e=>t.$router.push({name:"Catalog"}))},null,8,["title"])):(0,o.kq)("",!0)])),_:1})])),_:1})}n(6699);var l=n(3687),r=n(4032),i=n(9438),u=n(3907),c=n(8596);const d=(0,o.aZ)({name:"Search",components:{Button:c.Z,Info:i.Z,Header:r.Z,IonPage:l._i,IonSearchbar:l.VI,IonRow:l.Nd,IonList:l.q_,IonItem:l.Ie,IonContent:l.W2,IonImg:l.Xz,IonThumbnail:l.Bs,IonLabel:l.Q$},data(){return{search:""}},mounted(){setTimeout((()=>this.$refs.inputRef.$el.setFocus()),20)},computed:{...(0,u.Se)(["products","categories"]),onProducts(){return this.search.length?this.categories.filter((t=>t.title.toLowerCase().includes(this.search.toLowerCase())||t.short_title.toLowerCase().includes(this.search.toLowerCase()))):this.categories}},methods:{update(){this.$router.push({name:"Catalog"}),this.search=""}}});var p=n(3744);const h=(0,p.Z)(d,[["render",a]]),m=h}}]);
//# sourceMappingURL=480-legacy.08d4ea03.js.map