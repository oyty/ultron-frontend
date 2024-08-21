/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-08-21 17:45:49
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[6309,3480],{25216:function(e,t,a){a.d(t,{A:function(){return f}});var n=a(58388),o=(a(25638),a(74808),a(66855)),r=(a(19482),a(57305)),s=a(70817),l=a(75916),u=a(5879),d=(0,r.pM)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let t=null;const a=(0,s.KR)(!0);return t=setTimeout((()=>{a.value=!1}),500),(0,u.JZ)(((e,a,n)=>{clearInterval(t),n()})),(t,u)=>{const d=o.d1,i=n.Ik;return(0,r.uX)(),(0,r.Wv)(i,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,r.eX)({default:(0,r.k6)((()=>[e.skeleton?((0,r.uX)(),(0,r.Wv)(d,{key:0,animated:"",loading:(0,s.R1)(a),rows:e.skeletonRows},{default:(0,r.k6)((()=>[(0,r.RG)(t.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,r.RG)(t.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[t.$slots.header||e.header?{name:"header",fn:(0,r.k6)((()=>[(0,r.RG)(t.$slots,"header",{},(()=>[(0,r.eW)((0,l.v_)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function i(e){e.__source="library/components/VabCard/index.vue"}var p=a(88093);"function"===typeof i&&i(d);const c=(0,p.A)(d,[["__scopeId","data-v-391150ea"]]);var f=c},31598:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(85999),o=(a(25638),a(27349),a(25216)),r=a(57305),s=a(75916);function l(e,t,a,l,u,d){const i=(0,r.g2)("vab-chart"),p=o.A,c=n.uD;return(0,r.uX)(),(0,r.Wv)(c,{lg:8,md:12,sm:24,xl:6,xs:24},{default:(0,r.k6)((()=>[(0,r.bF)(p,{shadow:"hover",skeleton:""},{header:(0,r.k6)((()=>[(0,r.Lk)("span",null,(0,s.v_)(e.title),1)])),default:(0,r.k6)((()=>[(0,r.bF)(i,{"init-options":e.initOptions,option:e.option,theme:"vab-echarts-theme"},null,8,["init-options","option"])])),_:1})])),_:1})}var u=a(71141),d=(0,r.pM)({name:"VabChartGauge",components:{VabChart:u["default"]},props:{title:{type:String,default:""}},data(){return{initOptions:{renderer:"svg"},option:{grid:{top:20,right:20,bottom:20,left:20},tooltip:{formatter:"{a} <br/>{b} : {c}%"},series:{name:"Pressure",type:"gauge",radius:"100%",progress:{show:!0},detail:{formatter:"{value}",valueAnimation:!0,fontSize:14,offsetCenter:[0,"70%"]},data:[{value:50,name:"SCORE"}]}}}}});function i(e){e.__source="src/views/other/echarts/components/VabChartGauge.vue"}var p=a(88093);"function"===typeof i&&i(d);const c=(0,p.A)(d,[["render",l]]);var f=c}}]);