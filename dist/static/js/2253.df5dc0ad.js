/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-08-22 16:46:40
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[2253,4634],{77644:function(e,o,t){t.d(o,{Qb:function(){return s},_R:function(){return r},gp:function(){return i},mn:function(){return l},zj:function(){return a}});var n=t(80484);function r(e){return(0,n.A)({url:"/config/update",method:"post",data:e})}function a(e){return(0,n.A)({url:"/config/fetch",method:"get",params:e})}function s(e){return(0,n.A)({url:"/config/reason/list",method:"get",params:e})}function l(e){return(0,n.A)({url:"/config/reason/destroy",method:"post",data:e})}function i(e){return(0,n.A)({url:"/config/reason/add",method:"post",data:e})}},62253:function(e,o,t){t.r(o),t.d(o,{default:function(){return g}});var n=t(72638),r=(t(25638),t(56197),t(24707)),a=(t(91697),t(29313)),s=(t(11501),t(12118),t(35084)),l=(t(70752),t(57305));function i(e,o,t,i,u,f){const c=s.WK,d=a.xE,m=a.US,p=r.S2,g=n.kZ;return(0,l.uX)(),(0,l.Wv)(g,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":o[1]||(o[1]=o=>e.dialogFormVisible=o),title:e.title,width:"500px",onClose:e.close},{footer:(0,l.k6)((()=>[(0,l.bF)(p,{onClick:e.close},{default:(0,l.k6)((()=>[(0,l.eW)("取 消")])),_:1},8,["onClick"]),(0,l.bF)(p,{type:"primary",onClick:e.save},{default:(0,l.k6)((()=>[(0,l.eW)("确 定")])),_:1},8,["onClick"])])),default:(0,l.k6)((()=>[(0,l.bF)(m,{ref:"formRef","label-width":"120px",model:e.form,rules:e.rules},{default:(0,l.k6)((()=>[(0,l.bF)(d,{label:"强制结束原因",prop:"reason"},{default:(0,l.k6)((()=>[(0,l.bF)(c,{modelValue:e.form.reason,"onUpdate:modelValue":o[0]||(o[0]=o=>e.form.reason=o)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title","onClose"])}var u=t(77644),f=t(70817),c=(0,l.pM)({name:"DriverManagement",emits:["fetch-data"],setup(e,{emit:o}){const t=(0,l.WQ)("$baseMessage"),n=(0,f.Kh)({formRef:null,form:{reason:""},rules:{reason:[{required:!0,trigger:"blur",message:"请输入强制结束原因"}]},title:"",dialogFormVisible:!1,list:[]}),r=async e=>{e?(n.title="编辑",n.form=JSON.parse(JSON.stringify(e))):n.title="添加",n.dialogFormVisible=!0},a=()=>{n["formRef"].resetFields(),n.form={name:"",remark:""},n.dialogFormVisible=!1},s=()=>{n["formRef"].validate((async e=>{if(e){const{msg:e}=await(0,u.gp)({...n.form});t(e,"success","vab-hey-message-success"),o("fetch-data"),a()}}))};return{...(0,f.QW)(n),showEdit:r,close:a,save:s}}});function d(e){e.__source="src/views/companyconfig/tconfig/components/ReasonEdit.vue"}var m=t(88093);"function"===typeof d&&d(c);const p=(0,m.A)(c,[["render",i],["__scopeId","data-v-6e6c95d0"]]);var g=p}}]);