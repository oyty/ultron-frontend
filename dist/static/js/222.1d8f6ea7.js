/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-08-22 16:46:40
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[222],{25216:function(e,l,a){a.d(l,{A:function(){return b}});var d=a(58388),o=(a(25638),a(74808),a(66855)),t=(a(19482),a(57305)),u=a(70817),c=a(75916),n=a(5879),s=(0,t.pM)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let l=null;const a=(0,u.KR)(!0);return l=setTimeout((()=>{a.value=!1}),500),(0,n.JZ)(((e,a,d)=>{clearInterval(l),d()})),(l,n)=>{const s=o.d1,k=d.Ik;return(0,t.uX)(),(0,t.Wv)(k,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,t.eX)({default:(0,t.k6)((()=>[e.skeleton?((0,t.uX)(),(0,t.Wv)(s,{key:0,animated:"",loading:(0,u.R1)(a),rows:e.skeletonRows},{default:(0,t.k6)((()=>[(0,t.RG)(l.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,t.RG)(l.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[l.$slots.header||e.header?{name:"header",fn:(0,t.k6)((()=>[(0,t.RG)(l.$slots,"header",{},(()=>[(0,t.eW)((0,c.v_)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function k(e){e.__source="library/components/VabCard/index.vue"}var r=a(88093);"function"===typeof k&&k(s);const h=(0,r.A)(s,[["__scopeId","data-v-391150ea"]]);var b=h},222:function(e,l,a){a.r(l),a.d(l,{default:function(){return y}});var d=a(20355),o=(a(25638),a(63223),a(76869),a(25216)),t=(a(14072),a(57305)),u=a(75916);const c=e=>((0,t.Qi)("data-v-221ddeb9"),e=e(),(0,t.jt)(),e),n={class:"checkbox-container"},s=c((()=>(0,t.Lk)("span",null,"基础用法",-1))),k=c((()=>(0,t.Lk)("span",null,"禁用状态",-1))),r=c((()=>(0,t.Lk)("span",null,"多选框组",-1))),h=c((()=>(0,t.Lk)("span",null,"可选项目数量的限制",-1))),b=c((()=>(0,t.Lk)("span",null,"按钮样式",-1))),i=c((()=>(0,t.Lk)("span",null,"带有边框",-1)));function p(e,l,a,c,p,f){const m=d.dI,v=o.A,_=d.o5,V=d.$n;return(0,t.uX)(),(0,t.CE)("div",n,[(0,t.bF)(v,{shadow:"hover"},{header:(0,t.k6)((()=>[s])),default:(0,t.k6)((()=>[(0,t.bF)(m,{modelValue:e.checked,"onUpdate:modelValue":l[0]||(l[0]=l=>e.checked=l)},{default:(0,t.k6)((()=>[(0,t.eW)("备选项")])),_:1},8,["modelValue"])])),_:1}),(0,t.bF)(v,{shadow:"hover"},{header:(0,t.k6)((()=>[k])),default:(0,t.k6)((()=>[(0,t.bF)(m,{modelValue:e.checked1,"onUpdate:modelValue":l[1]||(l[1]=l=>e.checked1=l),disabled:""},{default:(0,t.k6)((()=>[(0,t.eW)("备选项1")])),_:1},8,["modelValue"]),(0,t.bF)(m,{modelValue:e.checked2,"onUpdate:modelValue":l[2]||(l[2]=l=>e.checked2=l),disabled:""},{default:(0,t.k6)((()=>[(0,t.eW)("备选项")])),_:1},8,["modelValue"])])),_:1}),(0,t.bF)(v,{shadow:"hover"},{header:(0,t.k6)((()=>[r])),default:(0,t.k6)((()=>[(0,t.bF)(_,{modelValue:e.checkList,"onUpdate:modelValue":l[3]||(l[3]=l=>e.checkList=l)},{default:(0,t.k6)((()=>[(0,t.bF)(m,{label:"复选框 A"}),(0,t.bF)(m,{label:"复选框 B"}),(0,t.bF)(m,{label:"复选框 C"}),(0,t.bF)(m,{disabled:"",label:"禁用"}),(0,t.bF)(m,{disabled:"",label:"选中且禁用"})])),_:1},8,["modelValue"])])),_:1}),(0,t.bF)(v,{shadow:"hover"},{header:(0,t.k6)((()=>[h])),default:(0,t.k6)((()=>[(0,t.bF)(_,{modelValue:e.checkedCities,"onUpdate:modelValue":l[4]||(l[4]=l=>e.checkedCities=l),max:2,min:1},{default:(0,t.k6)((()=>[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.cities,(e=>((0,t.uX)(),(0,t.Wv)(m,{key:e,label:e},{default:(0,t.k6)((()=>[(0,t.eW)((0,u.v_)(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,t.bF)(v,{shadow:"hover"},{header:(0,t.k6)((()=>[b])),default:(0,t.k6)((()=>[(0,t.bF)(_,{modelValue:e.checkboxGroup1,"onUpdate:modelValue":l[5]||(l[5]=l=>e.checkboxGroup1=l)},{default:(0,t.k6)((()=>[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.cities,(e=>((0,t.uX)(),(0,t.Wv)(V,{key:e,label:e},{default:(0,t.k6)((()=>[(0,t.eW)((0,u.v_)(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,t.bF)(v,{shadow:"hover"},{header:(0,t.k6)((()=>[i])),default:(0,t.k6)((()=>[(0,t.bF)(m,{modelValue:e.checked3,"onUpdate:modelValue":l[6]||(l[6]=l=>e.checked3=l),border:"",label:"备选项1"},null,8,["modelValue"]),(0,t.bF)(m,{modelValue:e.checked4,"onUpdate:modelValue":l[7]||(l[7]=l=>e.checked4=l),border:"",label:"备选项2"},null,8,["modelValue"])])),_:1})])}var f=a(70817),m=(0,t.pM)({name:"Checkbox",setup(){const e=["上海","北京","广州","深圳"],l=(0,f.Kh)({checked:!0,checked1:!1,checked2:!0,checkList:["选中且禁用","复选框 A"],checkedCities:["上海","北京"],cities:e,checkboxGroup1:["上海"],checked3:!0,checked4:!1});return{...(0,f.QW)(l)}}});function v(e){e.__source="src/views/vab/form/checkbox.vue"}var _=a(88093);"function"===typeof v&&v(m);const V=(0,_.A)(m,[["render",p],["__scopeId","data-v-221ddeb9"]]);var y=V}}]);