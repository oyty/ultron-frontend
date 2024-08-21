/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-08-21 17:45:49
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[9490],{25216:function(e,a,l){l.d(a,{A:function(){return f}});var t=l(58388),o=(l(25638),l(74808),l(66855)),n=(l(19482),l(57305)),u=l(70817),d=l(75916),s=l(5879),r=(0,n.pM)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let a=null;const l=(0,u.KR)(!0);return a=setTimeout((()=>{l.value=!1}),500),(0,s.JZ)(((e,l,t)=>{clearInterval(a),t()})),(a,s)=>{const r=o.d1,c=t.Ik;return(0,n.uX)(),(0,n.Wv)(c,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,n.eX)({default:(0,n.k6)((()=>[e.skeleton?((0,n.uX)(),(0,n.Wv)(r,{key:0,animated:"",loading:(0,u.R1)(l),rows:e.skeletonRows},{default:(0,n.k6)((()=>[(0,n.RG)(a.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,n.RG)(a.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[a.$slots.header||e.header?{name:"header",fn:(0,n.k6)((()=>[(0,n.RG)(a.$slots,"header",{},(()=>[(0,n.eW)((0,d.v_)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function c(e){e.__source="library/components/VabCard/index.vue"}var i=l(88093);"function"===typeof c&&c(r);const v=(0,i.A)(r,[["__scopeId","data-v-391150ea"]]);var f=v},89490:function(e,a,l){l.r(a),l.d(a,{default:function(){return b}});var t=l(25216),o=l(66572),n=(l(25638),l(54052),l(57305));const u=e=>((0,n.Qi)("data-v-194c1e20"),e=e(),(0,n.jt)(),e),d={class:"switch-container"},s=u((()=>(0,n.Lk)("span",null,"基础用法",-1))),r=u((()=>(0,n.Lk)("span",null,"文字描述",-1))),c=u((()=>(0,n.Lk)("span",null,"禁用状态",-1)));function i(e,a,l,u,i,v){const f=o.qi,p=t.A;return(0,n.uX)(),(0,n.CE)("div",d,[(0,n.bF)(p,{shadow:"hover"},{header:(0,n.k6)((()=>[s])),default:(0,n.k6)((()=>[(0,n.bF)(f,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=a=>e.value=a),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])])),_:1}),(0,n.bF)(p,{shadow:"hover"},{header:(0,n.k6)((()=>[r])),default:(0,n.k6)((()=>[(0,n.bF)(f,{modelValue:e.value1,"onUpdate:modelValue":a[1]||(a[1]=a=>e.value1=a),"active-text":"按月付费","inactive-text":"按年付费"},null,8,["modelValue"])])),_:1}),(0,n.bF)(p,{shadow:"hover"},{header:(0,n.k6)((()=>[c])),default:(0,n.k6)((()=>[(0,n.bF)(f,{modelValue:e.value2,"onUpdate:modelValue":a[2]||(a[2]=a=>e.value2=a),disabled:"",style:{"margin-right":"10px"}},null,8,["modelValue"]),(0,n.bF)(f,{modelValue:e.value3,"onUpdate:modelValue":a[3]||(a[3]=a=>e.value3=a),disabled:""},null,8,["modelValue"])])),_:1})])}var v=l(70817),f=(0,n.pM)({name:"Switch",setup(){const e=(0,v.Kh)({value:!0,value1:!0,value2:!0,value3:!1});return{...(0,v.QW)(e)}}});function p(e){e.__source="src/views/vab/form/switch.vue"}var h=l(88093);"function"===typeof p&&p(f);const k=(0,h.A)(f,[["render",i],["__scopeId","data-v-194c1e20"]]);var b=k}}]);