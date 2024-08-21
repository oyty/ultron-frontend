/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-08-21 17:45:49
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[8964],{46583:function(e,l,t){t.r(l),t.d(l,{default:function(){return _}});var a=t(72638),s=(t(25638),t(56197),t(24707)),o=(t(91697),t(29313)),d=(t(11501),t(20355)),i=(t(76869),t(14072),t(64635)),n=(t(70175),t(12118),t(35084)),r=(t(70752),t(57305)),u=t(75916);const m={class:"vab-tree-border"};function f(e,l,t,f,c,b){const k=n.WK,p=o.xE,h=i.q,v=d.dI,R=d.o5,_=o.US,C=s.S2,V=a.kZ;return(0,r.uX)(),(0,r.Wv)(V,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":l[3]||(l[3]=l=>e.dialogFormVisible=l),title:e.title,width:"500px",onClose:e.close},{footer:(0,r.k6)((()=>[(0,r.bF)(C,{onClick:e.close},{default:(0,r.k6)((()=>[(0,r.eW)("取 消")])),_:1},8,["onClick"]),(0,r.bF)(C,{type:"primary",onClick:e.save},{default:(0,r.k6)((()=>[(0,r.eW)("确 定")])),_:1},8,["onClick"])])),default:(0,r.k6)((()=>[(0,r.bF)(_,{ref:"formRef","label-width":"80px",model:e.form,rules:e.rules},{default:(0,r.k6)((()=>[(0,r.bF)(p,{label:"角色码",prop:"name"},{default:(0,r.k6)((()=>[(0,r.bF)(k,{modelValue:e.form.name,"onUpdate:modelValue":l[0]||(l[0]=l=>e.form.name=l)},null,8,["modelValue"])])),_:1}),(0,r.bF)(p,{label:"菜单"},{default:(0,r.k6)((()=>[(0,r.Lk)("div",m,[(0,r.bF)(h,{ref:"treeRef",modelValue:e.menuIds,"onUpdate:modelValue":l[1]||(l[1]=l=>e.menuIds=l),data:e.list,"default-expanded-keys":[],"node-key":"id","show-checkbox":""},{default:(0,r.k6)((({data:e})=>[(0,r.Lk)("span",null,(0,u.v_)(e.meta.title),1)])),_:1},8,["modelValue","data"])])])),_:1}),(0,r.bF)(p,{label:"按钮权限"},{default:(0,r.k6)((()=>[(0,r.bF)(R,{modelValue:e.form.btnRolesCheckedList,"onUpdate:modelValue":l[2]||(l[2]=l=>e.form.btnRolesCheckedList=l)},{default:(0,r.k6)((()=>[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.btnRoles,(e=>((0,r.uX)(),(0,r.Wv)(v,{key:e.value,label:e.value},{default:(0,r.k6)((()=>[(0,r.eW)((0,u.v_)(e.lable),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title","onClose"])}var c=t(27011),b=t(30345),k=t(70817),p=(0,r.pM)({name:"RoleManagementEdit",emits:["fetch-data"],setup(e,{emit:l}){const t=(0,r.WQ)("$baseMessage"),a=(0,k.Kh)({formRef:null,treeRef:null,form:{btnRolesCheckedList:[]},menuIds:[],rules:{name:[{required:!0,trigger:"blur",message:"请输入角色名称"}]},title:"",dialogFormVisible:!1,list:[],btnRoles:[{lable:"读",value:"read:system"},{lable:"写",value:"write:system"},{lable:"删",value:"delete:system"}]}),s=async e=>{e?(a.title="编辑",a.form=JSON.parse(JSON.stringify(e)),a.form.btnRolesCheckedList=e.permissions.split(","),(0,r.dY)((()=>{e.menu_ids.split(",").forEach((e=>{const l=a.treeRef.getNode(e);l.isLeaf&&a.treeRef.setChecked(l,!0)}))}))):a.title="添加",a.dialogFormVisible=!0},o=()=>{a["formRef"].resetFields(),a["treeRef"].setCheckedKeys([]),a.form={btnRolesCheckedList:[]},a.dialogFormVisible=!1},d=async()=>{const{data:{list:e}}=await(0,c.v)();a.list=e},i=()=>{a["formRef"].validate((async e=>{if(e){const e=a["treeRef"].getCheckedNodes(!1,!0).map((e=>e.id));a.form.permissions=a.form.btnRolesCheckedList.join(","),a.form.menu_ids=e.join(",");const{msg:s}=await(0,b.Ed)({...a.form});t(s,"success","vab-hey-message-success"),l("fetch-data"),o()}}))};return(0,r.sV)((()=>{d()})),{...(0,k.QW)(a),showEdit:s,close:o,fetchData:d,save:i}}});function h(e){e.__source="src/views/setting/role/components/RoleManagementEdit.vue"}var v=t(88093);"function"===typeof h&&h(p);const R=(0,v.A)(p,[["render",f],["__scopeId","data-v-88dbe2aa"]]);var _=R}}]);