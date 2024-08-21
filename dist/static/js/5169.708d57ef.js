/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-08-21 17:45:49
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[5169],{15169:function(e,l,a){a.r(l),a.d(l,{default:function(){return h}});var o=a(29313),t=(a(25638),a(11501),a(24707)),d=(a(91697),a(88149)),u=(a(8627),a(8248),a(20355)),r=(a(76869),a(14072),a(66572)),n=(a(54052),a(50449)),m=(a(27510),a(85999)),b=(a(27349),a(42210)),f=(a(5278),a(52659)),s=(a(61141),a(5881),a(12118),a(35084)),p=(a(70752),a(57305));function i(e,l,a,i,c,F){const V=s.WK,k=o.xE,h=f.P9,y=f.AV,_=b.MG,v=m.uD,U=n.Rt,g=r.qi,w=u.dI,C=u.o5,$=d.ll,S=d.MQ,j=t.S2,D=o.US;return(0,p.uX)(),(0,p.CE)("div",null,[(0,p.bF)(D,{ref:"form","label-width":"80px",model:e.form},{default:(0,p.k6)((()=>[(0,p.bF)(k,{label:"活动名称"},{default:(0,p.k6)((()=>[(0,p.bF)(V,{modelValue:e.form.name,"onUpdate:modelValue":l[0]||(l[0]=l=>e.form.name=l)},null,8,["modelValue"])])),_:1}),(0,p.bF)(k,{label:"活动区域"},{default:(0,p.k6)((()=>[(0,p.bF)(y,{modelValue:e.form.region,"onUpdate:modelValue":l[1]||(l[1]=l=>e.form.region=l),placeholder:"请选择活动区域"},{default:(0,p.k6)((()=>[(0,p.bF)(h,{label:"区域一",value:"shanghai"}),(0,p.bF)(h,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),(0,p.bF)(k,{label:"活动时间"},{default:(0,p.k6)((()=>[(0,p.bF)(v,{span:11},{default:(0,p.k6)((()=>[(0,p.bF)(_,{modelValue:e.form.date1,"onUpdate:modelValue":l[2]||(l[2]=l=>e.form.date1=l),placeholder:"选择日期",style:{width:"100%"},type:"date"},null,8,["modelValue"])])),_:1}),(0,p.bF)(v,{class:"line",span:2},{default:(0,p.k6)((()=>[(0,p.eW)("-")])),_:1}),(0,p.bF)(v,{span:11},{default:(0,p.k6)((()=>[(0,p.bF)(U,{modelValue:e.form.date2,"onUpdate:modelValue":l[3]||(l[3]=l=>e.form.date2=l),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),(0,p.bF)(k,{label:"即时配送"},{default:(0,p.k6)((()=>[(0,p.bF)(g,{modelValue:e.form.delivery,"onUpdate:modelValue":l[4]||(l[4]=l=>e.form.delivery=l)},null,8,["modelValue"])])),_:1}),(0,p.bF)(k,{label:"活动性质"},{default:(0,p.k6)((()=>[(0,p.bF)(C,{modelValue:e.form.type,"onUpdate:modelValue":l[5]||(l[5]=l=>e.form.type=l)},{default:(0,p.k6)((()=>[(0,p.bF)(w,{label:"美食/餐厅线上活动",name:"type"}),(0,p.bF)(w,{label:"地推活动",name:"type"}),(0,p.bF)(w,{label:"线下主题活动",name:"type"}),(0,p.bF)(w,{label:"单纯品牌曝光",name:"type"})])),_:1},8,["modelValue"])])),_:1}),(0,p.bF)(k,{label:"特殊资源"},{default:(0,p.k6)((()=>[(0,p.bF)(S,{modelValue:e.form.resource,"onUpdate:modelValue":l[6]||(l[6]=l=>e.form.resource=l)},{default:(0,p.k6)((()=>[(0,p.bF)($,{label:"线上品牌商赞助"}),(0,p.bF)($,{label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),(0,p.bF)(k,{label:"活动形式"},{default:(0,p.k6)((()=>[(0,p.bF)(V,{modelValue:e.form.desc,"onUpdate:modelValue":l[7]||(l[7]=l=>e.form.desc=l),type:"textarea"},null,8,["modelValue"])])),_:1}),(0,p.bF)(k,null,{default:(0,p.k6)((()=>[(0,p.bF)(j,{type:"primary",onClick:e.onSubmit},{default:(0,p.k6)((()=>[(0,p.eW)("保存")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])}var c=(0,p.pM)({props:{nodeData:{type:Object,default:()=>{}},lf:{type:Object||String,default:()=>{}}},emits:["onClose"],data(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},mounted(){const{properties:e}=this.$props.nodeData;e&&(this.$data.form=Object.assign({},this.$data.form,e))},methods:{onSubmit(){console.log("submit!");const{id:e}=this.$props.nodeData;this.$props.lf.setProperties(e,this.$data.form),this.$emit("onClose")}}});function F(e){e.__source="src/views/other/workflow/components/propertySetting/User.vue"}var V=a(88093);"function"===typeof F&&F(c);const k=(0,V.A)(c,[["render",i]]);var h=k}}]);