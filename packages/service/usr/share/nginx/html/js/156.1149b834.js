"use strict";(self["webpackChunklens_app"]=self["webpackChunklens_app"]||[]).push([[156],{3226:(e,t,l)=>{function s(){return this.fields={...this.emptyFields},this.errorFields={},this.error="",!0}function i(e){var t,l;let s=!1;if("object"===typeof e&&null!==e&&void 0!==e&&null!==(t=e.response)&&void 0!==t&&null!==(l=t.data)&&void 0!==l&&l.errors){const{errors:t}=e.response.data;Object.keys(t).forEach((e=>{this.errorFields[e]=t[e].join(", ")}))}else Object.keys(this.fields).forEach((e=>{this.requiredFields.indexOf(e)>=0&&!this.fields[e]&&0!==this.fields[e]?(this.errorFields[e]="Обязательно для заполнения",s=!0):this.errorFields[e]=!1}));return s}function r(e){var t,l;let s=!1;if("object"===typeof e&&null!==e&&void 0!==e&&null!==(t=e.response)&&void 0!==t&&null!==(l=t.data)&&void 0!==l&&l.errors){const{errors:t}=e.response.data;Object.keys(t).forEach((e=>{this.errorFields[e]=t[e].join(", ")}))}else Object.keys(this.fields).forEach((e=>{this.requiredFields.indexOf(e)>=0&&!Object.keys(this.fields[e]).length&&0!==this.fields[e]?(this.errorFields[e]="Обязательно для заполнения",s=!0):this.errorFields[e]=!1}));return s}function a(e){var t,l;let s=!1;if("object"===typeof e&&null!==e&&void 0!==e&&null!==(t=e.response)&&void 0!==t&&null!==(l=t.data)&&void 0!==l&&l.errors){const{errors:t}=e.response.data;Object.keys(t).forEach((e=>{this.errorFieldsTwo[e]=t[e].join(", ")}))}else Object.keys(this.fieldsTwo).forEach((e=>{this.requiredFieldsTwo.indexOf(e)>=0&&!Object.keys(this.fieldsTwo[e]).length&&0!==this.fieldsTwo[e]?(this.errorFieldsTwo[e]="Обязательно для заполнения",s=!0):this.errorFieldsTwo[e]=!1}));return s}function o(e){var t,l;let s=!1;if("object"===typeof e&&null!==e&&void 0!==e&&null!==(t=e.response)&&void 0!==t&&null!==(l=t.data)&&void 0!==l&&l.errors){const{errors:t}=e.response.data;Object.keys(t).forEach((e=>{this.errorFields[e]=t[e].join(", ")}))}else Object.keys(this.address).forEach((e=>{this.requiredFieldsAddress.indexOf(e)>=0&&!this.address[e]&&0!==this.address[e]?(this.errorFields[e]="Обязательно для заполнения",s=!0):this.errorFields[e]=!1}));return s}l.d(t,{Ee:()=>s,d6:()=>i,fB:()=>o,ph:()=>a,q9:()=>r})},1688:(e,t,l)=>{l.r(t),l.d(t,{default:()=>v});var s=l(6252),i=l(3577),r=l(9963);const a={class:"label"},o={href:"#"};function n(e,t,l,n,d,u){const c=(0,s.up)("Loading"),h=(0,s.up)("Header"),f=(0,s.up)("ion-label"),m=(0,s.up)("ion-row"),p=(0,s.up)("ItemInput"),b=(0,s.up)("ion-input"),w=(0,s.up)("ion-icon"),E=(0,s.up)("ItemDate"),y=(0,s.up)("ion-list"),g=(0,s.up)("Button"),k=(0,s.up)("ion-text"),v=(0,s.up)("ion-content"),F=(0,s.up)("ion-page"),I=(0,s.Q2)("maska");return(0,s.wg)(),(0,s.j4)(F,{id:"check-data"},{default:(0,s.w5)((()=>[e.loading?((0,s.wg)(),(0,s.j4)(c,{key:0})):(0,s.kq)("",!0),(0,s.Wm)(h,{title:e.$t("DATA-CHECKING")},null,8,["title"]),e.loading?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(v,{key:1,"scroll-y":!1,class:"content"},{default:(0,s.w5)((()=>[(0,s.Wm)(y,{class:"ion-margin-end list"},{default:(0,s.w5)((()=>[(0,s.Wm)(f,{class:"ion-margin title"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.$t("CONTACT-DETAILS")),1)])),_:1}),(0,s.Wm)(p,{lines:"",error:e.errorFields.phone,class:"ion-margin-top"},{default:(0,s.w5)((()=>[(0,s.Wm)(m,null,{default:(0,s.w5)((()=>[(0,s._)("span",a,(0,i.zw)(e.$t("PHONE-NUMBER"))+"*",1),(0,s.wy)((0,s._)("input",{disabled:"",inputmode:"tel",ref:"phone",class:"input","onUpdate:modelValue":t[0]||(t[0]=t=>e.fields.phone=t)},null,512),[[r.nr,e.fields.phone],[I,{mask:"+7 (###) ###-##-##"}]])])),_:1})])),_:1},8,["error"]),(0,s.Wm)(p,{lines:"",error:e.errorFields.firstname},{default:(0,s.w5)((()=>[(0,s.Wm)(b,{modelValue:e.fields.firstname,"onUpdate:modelValue":t[1]||(t[1]=t=>e.fields.firstname=t),"label-placement":"floating",label:e.$t("FIRSTNAME-REQUIRED")},null,8,["modelValue","label"])])),_:1},8,["error"]),(0,s.Wm)(p,{lines:"",error:e.errorFields.lastname},{default:(0,s.w5)((()=>[(0,s.Wm)(b,{modelValue:e.fields.lastname,"onUpdate:modelValue":t[2]||(t[2]=t=>e.fields.lastname=t),"label-placement":"floating",label:e.$t("LASTNAME-REQUIRED")},null,8,["modelValue","label"])])),_:1},8,["error"]),(0,s.Wm)(p,{lines:"",error:e.errorFields.patronymic},{default:(0,s.w5)((()=>[(0,s.Wm)(b,{modelValue:e.fields.patronymic,"onUpdate:modelValue":t[3]||(t[3]=t=>e.fields.patronymic=t),"label-placement":"floating",label:e.$t("PATRONYMIC-REQUIRED")},null,8,["modelValue","label"])])),_:1},8,["error"]),(0,s.Wm)(p,{lines:"",id:"click-trigger",class:"ion-align-items-end"},{default:(0,s.w5)((()=>[(0,s.Wm)(b,{value:e.formatDate(e.fields.birthday,"DD.MM.YYYY"),disabled:"","label-placement":"floating",label:e.$t("DATE-BIRTH")},null,8,["value","label"]),(0,s.Wm)(w,{icon:"assets/icon/calendar-courier.svg",class:"icon"})])),_:1}),(0,s.Wm)(E,{modelValue:e.fields.birthday,"onUpdate:modelValue":t[4]||(t[4]=t=>e.fields.birthday=t)},null,8,["modelValue"])])),_:1}),(0,s.Wm)(g,{title:e.$t("SAVE"),class:"button",onClick:e.saveUser},null,8,["title","onClick"]),(0,s.Wm)(m,{class:"ion-margin-start"},{default:(0,s.w5)((()=>[(0,s.Wm)(k,{class:"text"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.$t("AGREEMENT-TEXT"))+" ",1),(0,s._)("a",o,(0,i.zw)(e.$t("PERSONAL-DATA")),1)])),_:1})])),_:1}),(0,s.Wm)(m,{class:"ion-margin"},{default:(0,s.w5)((()=>[(0,s.Wm)(k,{class:"text"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.$t("REQUIRED-TEXT")),1)])),_:1})])),_:1})])),_:1}))])),_:1})}l(4916),l(5306);var d=l(3687),u=l(4032),c=l(7906),h=l(8596),f=l(5344),m=l(4045),p=l(3907),b=l(323),w=l(3226),E=l(2778);const y=(0,s.aZ)({name:"CheckData",components:{Loading:m.Z,ItemDate:f.Z,Button:h.Z,ItemInput:c.Z,Header:u.Z,IonPage:d._i,IonContent:d.W2,IonInput:d.pK,IonList:d.q_,IonRow:d.Nd,IonText:d.yW,IonLabel:d.Q$,IonIcon:d.gu},data(){return{fields:{id:0,firstname:null,lastname:null,patronymic:null,phone:null,birthday:null,email:null},loading:!1,errorFields:{},requiredFields:["phone","firstname","lastname","patronymic"]}},computed:{...(0,p.Se)(["user","doctor","time","date","service"])},methods:{...(0,p.nv)(["updateUser"]),...(0,p.OI)(["SET_USER"]),formatDate:b.p,formatPhone:b.C,clearFields:w.Ee,checkFields:w.d6,handlerPhone(e){this.fields.phone=e},async saveUser(){this.checkFields()||(this.loading=!0,this.SET_USER(this.fields),this.$router.replace({name:"Profile"}),await this.updateUser(this.fields),this.clearFields(),await(0,E.m2)({date:this.date,reserved:!0,doctor:this.doctor.id,optic:this.doctor.optica.data.id,recording:this.time.id,service:this.service,user:this.user.id}),this.loading=!1,this.$router.replace({name:"OrderRecording"}))}},mounted(){this.fields={id:this.user.id,firstname:this.user.firstname,lastname:this.user.lastname,patronymic:this.user.patronymic,phone:this.user.phone,birthday:this.user.birthday}}});var g=l(3744);const k=(0,g.Z)(y,[["render",n],["__scopeId","data-v-382b324c"]]),v=k}}]);
//# sourceMappingURL=156.1149b834.js.map