"use strict";(self["webpackChunklens_app"]=self["webpackChunklens_app"]||[]).push([[161],{5134:(t,e,a)=>{function l(t,e){return Number(t)-parseFloat(t)*parseFloat(e)/100}a.d(e,{O:()=>l})},8596:(t,e,a)=>{a.d(e,{Z:()=>u});var l=a(6252),n=a(3577);function i(t,e,a,i,d,o){const r=(0,l.up)("ion-button"),s=(0,l.up)("ion-buttons");return(0,l.wg)(),(0,l.j4)(s,{class:"btn"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{fill:"solid",class:"custom-btn",disabled:t.disabled},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t.title),1)])),_:1},8,["disabled"])])),_:1})}var d=a(3687);const o=(0,l.aZ)({name:"Button",props:{title:{type:String,default:""},disabled:{type:Boolean,default:!1}},components:{IonButton:d.YG,IonButtons:d.Sm}});var r=a(3744);const s=(0,r.Z)(o,[["render",i],["__scopeId","data-v-036daa60"]]),u=s},6785:(t,e,a)=>{a.r(e),a.d(e,{default:()=>O});var l=a(6252),n=a(3577);const i=["src"],d={class:"text"},o={class:"text"};function r(t,e,a,r,s,u){const c=(0,l.up)("Header"),_=(0,l.up)("Loading"),m=(0,l.up)("ion-label"),w=(0,l.up)("ion-row"),p=(0,l.up)("Badge"),f=(0,l.up)("ion-col"),g=(0,l.up)("ion-card-content"),T=(0,l.up)("ion-card"),E=(0,l.up)("Button"),v=(0,l.up)("ion-content"),k=(0,l.up)("ion-page");return(0,l.wg)(),(0,l.j4)(k,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,{title:t.$t("ORDER"),back:""},null,8,["title"]),t.loading?((0,l.wg)(),(0,l.j4)(_,{key:0})):(0,l.kq)("",!0),t.loading?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(v,{key:1,"scroll-y":!1,id:"order-item-history"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{class:"ion-margin-top ion-margin-start title"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t.$t("ORDER-NUMBER"))+" "+(0,n.zw)(t.order_item.id)+" от "+(0,n.zw)(t.formatDate(t.order_item.date,"LL")),1)])),_:1})])),_:1}),(0,l.Wm)(p,{status:t.order_item.status,background:"#ecebeb"},null,8,["status"]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.order_item.order_product_details,((e,a)=>((0,l.wg)(),(0,l.j4)(w,{class:"wrapper",key:a},{default:(0,l.w5)((()=>[(0,l.Wm)(T,{class:"card",style:{"margin-top":"10px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{class:"card-content"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Wm)(f,{style:{flex:"1"}},{default:(0,l.w5)((()=>[(0,l._)("img",{src:t.imageHandler(e.product.img[0])},null,8,i)])),_:2},1024),(0,l.Wm)(f,{class:"ion-margin-start",style:{flex:"2"}},{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{class:"title"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.product.title),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(w,{class:"ion-margin-top"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{class:"label"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t.$t("SPHERE"))+" ",1),(0,l._)("span",d,(0,n.zw)(e.sphere.title),1)])),_:2},1024),(0,l.Wm)(m,{class:"ion-margin-start label"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t.$t("RADIUS"))+" ",1),(0,l._)("span",o,(0,n.zw)(e.radius.title),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(w,{class:"ion-margin-top row-price"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{class:"ion-margin-end price"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.product.price)+" "+(0,n.zw)(t.$t("RUBLE-SIGN")),1)])),_:2},1024),(0,l.Wm)(m,{class:"ion-margin-end"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.count)+" "+(0,n.zw)(t.$t("PACKAGING")),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128)),(0,l.Wm)(w,{class:"ion-margin ion-align-items-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{class:"text"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t.$t("ORDER-PRICE")),1)])),_:1})])),_:1}),(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{class:"text-value"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t.order_item.total_discount)+" "+(0,n.zw)(t.$t("RUBLE-SIGN")),1)])),_:1})])),_:1})])),_:1}),(0,l.Wm)(w,{class:"ion-margin ion-align-items-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{class:"text"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t.$t("DELIVERY-METHOD")),1)])),_:1})])),_:1}),(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[t.order_item.deliverTo?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(m,{key:0,class:"text-value"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t.$t("PICKUP")),1)])),_:1})),t.order_item.deliverTo?((0,l.wg)(),(0,l.j4)(m,{key:1,class:"text-value"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t.$t("COURIER")),1)])),_:1})):(0,l.kq)("",!0)])),_:1})])),_:1}),t.order_item.deliverTo?((0,l.wg)(),(0,l.j4)(w,{key:0,class:"ion-margin ion-align-items-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{class:"text"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t.$t("DELIVERY-ADDRESS")),1)])),_:1})])),_:1}),(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{class:"text-value"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t.order_item.deliverTo.city)+" "+(0,n.zw)(t.order_item.deliverTo.street),1)])),_:1})])),_:1})])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(E,{title:t.$t("REPEAT-ORDER"),class:"repeat-button",onClick:t.repeatOrder},null,8,["title","onClick"])])),_:1}))])),_:1})}a(7658),a(4916),a(5306);var s=a(3687),u=a(4032),c=a(8596),_=a(7151),m=a(1908),w=a(323),p=a(5134),f=a(3907),g=a(6561),T=a(4045);const E=(0,l.aZ)({name:"OrderItemHistory",components:{Badge:g.Z,Header:u.Z,IonPage:s._i,IonContent:s.W2,IonRow:s.Nd,IonCard:s.PM,IonCardContent:s.FN,IonCol:s.wI,IonLabel:s.Q$,Button:c.Z,Loading:T.Z},data(){return{order_item:null,products:[]}},computed:{id(){return this.$route.params.id},...(0,f.Se)(["loading"])},methods:{...(0,f.nv)(["getProduct"]),...(0,f.OI)(["SET_ORDER_PRODUCT_DETAILS","SET_BASKET_COUNT","SET_TOTAL_AMOUNT","SET_TOTAL_DISCOUNT","SET_LOADING","SET_PRODUCTS"]),formatDate:w.p,imageHandler(t){return t.length?`http://24.199.110.103:1337${t}`:"assets/image/no-image.png"},async repeatOrder(){this.SET_LOADING(!0);const t=[];this.order_item.order_product_details.map((async e=>{var a,l,n,i,d,o,r;const s=await(0,m.gk)(e.product.id),u={product:s.id,categorie:s.categorie,radius:null===s||void 0===s||null===(a=s.radius[0])||void 0===a?void 0:a.id,sphere:null===s||void 0===s||null===(l=s.sphere[0])||void 0===l?void 0:l.id,cylinder:null===s||void 0===s||null===(n=s.cylinder[0])||void 0===n?void 0:n.id,add:null===s||void 0===s||null===(i=s.add[0])||void 0===i?void 0:i.id,ax:null===s||void 0===s||null===(d=s.ax[0])||void 0===d?void 0:d.id,dominant:null===s||void 0===s||null===(o=s.dominant[0])||void 0===o?void 0:o.id,product_count:e.count,product_amount:Number(s.price)*e.count,product_discount:(0,p.O)(s.price,null!==(r=s.discount)&&void 0!==r?r:0)*e.count};t.push(s),this.SET_ORDER_PRODUCT_DETAILS(u),this.SET_LOADING(!1)})),this.SET_PRODUCTS(t),this.SET_BASKET_COUNT(),this.SET_TOTAL_AMOUNT(),this.SET_TOTAL_DISCOUNT(),await this.$router.replace({name:"Basket"})}},async created(){this.SET_LOADING(!0),this.order_item=await(0,_.HG)(this.id),this.SET_LOADING(!1)}});var v=a(3744);const k=(0,v.Z)(E,[["render",r]]),O=k}}]);
//# sourceMappingURL=161.f62a4d28.js.map