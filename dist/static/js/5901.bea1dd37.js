/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-08-21 17:45:49
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[5901],{65257:function(o,t,e){e.d(t,{A:function(){return d}});var n=e(58388),r=(e(25638),e(74808),e(57305)),c=e(75916),i=(0,r.pM)({__name:"index",props:{shadow:{type:String,default:""},colorFrom:{type:String,default:""},colorTo:{type:String,default:""},title:{type:String,default:""},icon:{type:String,default:""}},setup(o){return(t,e)=>{const i=(0,r.g2)("vab-icon"),l=n.Ik;return(0,r.uX)(),(0,r.Wv)(l,{class:"vab-colorful-card",shadow:o.shadow,style:(0,c.Tr)({background:`linear-gradient(50deg, ${o.colorFrom}, ${o.colorTo})`})},{header:(0,r.k6)((()=>[(0,r.eW)((0,c.v_)(o.title),1)])),default:(0,r.k6)((()=>[o.icon?((0,r.uX)(),(0,r.Wv)(i,{key:0,icon:o.icon},null,8,["icon"])):(0,r.Q3)("",!0),(0,r.RG)(t.$slots,"default")])),_:3},8,["shadow","style"])}}});function l(o){o.__source="library/components/VabColorfulCard/index.vue"}var a=e(88093);"function"===typeof l&&l(i);const u=(0,a.A)(i,[["__scopeId","data-v-18dc2024"]]);var d=u},85901:function(o,t,e){e.r(t),e.d(t,{default:function(){return v}});var n=e(514),r=(e(25638),e(78759),e(85999)),c=(e(27349),e(65257)),i=e(57305),l=e(75916);const a={class:"project-card-description"};function u(o,t,e,u,d,s){const f=c.A,p=r.uD,v=n.S2;return(0,i.uX)(),(0,i.Wv)(v,{gutter:20},{default:(0,i.k6)((()=>[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(o.list,((t,e)=>((0,i.uX)(),(0,i.Wv)(p,{key:e,lg:12,md:12,sm:24,xl:12,xs:24},{default:(0,i.k6)((()=>[(0,i.bF)(f,{"color-from":t.colorFrom,"color-to":t.colorTo,icon:t.icon,shadow:"hover",title:t.title,onClick:e=>o.handleOpenWindow(t.url)},{default:(0,i.k6)((()=>[(0,i.Lk)("div",a,(0,l.v_)(t.description),1)])),_:2},1032,["color-from","color-to","icon","title","onClick"])])),_:2},1024)))),128))])),_:1})}var d=(0,i.pM)({setup(){const o=[{title:"学习必备",description:"查看更多 >>>",colorFrom:"#1890ffb3",colorTo:"#1890ff",icon:"mac-line",url:"https://vue-admin-beautiful.com/authorization"},{title:"分享讨论",description:"查看更多 >>> ",colorFrom:"#1bea7ab3",colorTo:"#1bea7a",icon:"chat-heart-line",url:"https://vue-admin-beautiful.com/authorization"}],t=o=>{window.open(o)};return{list:o,handleOpenWindow:t}}});function s(o){o.__source="src/views/index/components/StoreHeader.vue"}var f=e(88093);"function"===typeof s&&s(d);const p=(0,f.A)(d,[["render",u],["__scopeId","data-v-3008e5b6"]]);var v=p}}]);