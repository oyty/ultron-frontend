/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-08-21 17:45:49
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[7813],{70194:function(e,l,o){o.r(l),o.d(l,{default:function(){return p}});var a=o(72638),r=(o(25638),o(56197),o(24707)),i=(o(91697),o(29313)),t=(o(11501),o(12118),o(35084)),s=(o(70752),o(57305));function m(e,l,o,m,n,u){const d=t.WK,f=i.xE,c=i.US,b=r.S2,p=a.kZ;return(0,s.uX)(),(0,s.Wv)(p,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":l[2]||(l[2]=l=>e.dialogFormVisible=l),title:e.title,width:"500px",onClose:e.close},{footer:(0,s.k6)((()=>[(0,s.bF)(b,{onClick:e.close},{default:(0,s.k6)((()=>[(0,s.eW)("取 消")])),_:1},8,["onClick"]),(0,s.bF)(b,{type:"primary",onClick:e.save},{default:(0,s.k6)((()=>[(0,s.eW)("确 定")])),_:1},8,["onClick"])])),default:(0,s.k6)((()=>[(0,s.bF)(c,{ref:"formRef","label-width":"80px",model:e.form,rules:e.rules},{default:(0,s.k6)((()=>[(0,s.bF)(f,{label:"驾驶员",prop:"name"},{default:(0,s.k6)((()=>[(0,s.bF)(d,{modelValue:e.form.name,"onUpdate:modelValue":l[0]||(l[0]=l=>e.form.name=l)},null,8,["modelValue"])])),_:1}),(0,s.bF)(f,{label:"手机号",prop:"mobile"},{default:(0,s.k6)((()=>[(0,s.bF)(d,{modelValue:e.form.mobile,"onUpdate:modelValue":l[1]||(l[1]=l=>e.form.mobile=l)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title","onClose"])}var n=o(97316),u=o(70817),d=(0,s.pM)({name:"DriverManagement",emits:["fetch-data"],setup(e,{emit:l}){const o=(0,s.WQ)("$baseMessage"),a=(0,u.Kh)({formRef:null,treeRef:null,form:{id:"",name:"",mobile:""},rules:{name:[{required:!0,trigger:"blur",message:"请输入驾驶员名称"}],mobile:[{required:!0,trigger:"blur",message:"请输入手机号"}]},title:"",dialogFormVisible:!1,list:[]}),r=async e=>{e?(a.title="编辑",a.form=JSON.parse(JSON.stringify(e))):a.title="添加",a.dialogFormVisible=!0},i=()=>{a["formRef"].resetFields(),a.form={name:"",remark:""},a.dialogFormVisible=!1},t=()=>{a["formRef"].validate((async e=>{if(e){const{msg:e}=await(0,n.Ed)({...a.form});o(e,"success","vab-hey-message-success"),l("fetch-data"),i()}}))};return{...(0,u.QW)(a),showEdit:r,close:i,save:t}}});function f(e){e.__source="src/views/companyconfig/driver/components/DriverEdit.vue"}var c=o(88093);"function"===typeof f&&f(d);const b=(0,c.A)(d,[["render",m],["__scopeId","data-v-070adacd"]]);var p=b}}]);