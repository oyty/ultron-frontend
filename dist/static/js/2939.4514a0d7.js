/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-08-21 17:45:49
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[2939,7787,3782,1440],{25610:function(e,l,o){o.d(l,{DB:function(){return n},Ed:function(){return d},pL:function(){return r},vS:function(){return t}});var a=o(80484);function t(e){return(0,a.A)({url:"/menu/getList",method:"get",params:e})}function n(){return(0,a.A)({url:"/menu/getNodes",method:"get"})}function d(e){return(0,a.A)({url:"/menu/doEdit",method:"post",data:e})}function r(e){return(0,a.A)({url:"/menu/doDelete",method:"post",data:e})}},25216:function(e,l,o){o.d(l,{A:function(){return c}});var a=o(58388),t=(o(25638),o(74808),o(66855)),n=(o(19482),o(57305)),d=o(70817),r=o(75916),u=o(5879),m=(0,n.pM)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let l=null;const o=(0,d.KR)(!0);return l=setTimeout((()=>{o.value=!1}),500),(0,u.JZ)(((e,o,a)=>{clearInterval(l),a()})),(l,u)=>{const m=t.d1,s=a.Ik;return(0,n.uX)(),(0,n.Wv)(s,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,n.eX)({default:(0,n.k6)((()=>[e.skeleton?((0,n.uX)(),(0,n.Wv)(m,{key:0,animated:"",loading:(0,d.R1)(o),rows:e.skeletonRows},{default:(0,n.k6)((()=>[(0,n.RG)(l.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,n.RG)(l.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[l.$slots.header||e.header?{name:"header",fn:(0,n.k6)((()=>[(0,n.RG)(l.$slots,"header",{},(()=>[(0,n.eW)((0,r.v_)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function s(e){e.__source="library/components/VabCard/index.vue"}var i=o(88093);"function"===typeof s&&s(m);const f=(0,i.A)(m,[["__scopeId","data-v-391150ea"]]);var c=f},73727:function(e,l,o){o.d(l,{A:function(){return i}});var a=o(85999),t=(o(25638),o(27349),o(57305));const n={class:"top-panel"};function d(e,l){const o=a.uD;return(0,t.uX)(),(0,t.Wv)(o,{span:24},{default:(0,t.k6)((()=>[(0,t.Lk)("div",n,[(0,t.RG)(e.$slots,"default")])])),_:3})}function r(e){e.__source="library/components/VabQueryForm/components/VabQueryFormTopPanel.vue"}var u=o(88093);const m={};"function"===typeof r&&r(m);const s=(0,u.A)(m,[["render",d]]);var i=s},46017:function(e,l,o){o.d(l,{A:function(){return s}});var a=o(514),t=(o(25638),o(78759),o(57305));function n(e,l){const o=a.S2;return(0,t.uX)(),(0,t.Wv)(o,{class:"vab-query-form",gutter:0},{default:(0,t.k6)((()=>[(0,t.RG)(e.$slots,"default",{},void 0,!0)])),_:3})}function d(e){e.__source="library/components/VabQueryForm/index.vue"}var r=o(88093);const u={};"function"===typeof d&&d(u);const m=(0,r.A)(u,[["render",n],["__scopeId","data-v-172989c8"]]);var s=m},88340:function(e,l,o){o.r(l),o.d(l,{default:function(){return F}});var a=o(72638),t=(o(25638),o(56197),o(24707)),n=(o(91697),o(29313)),d=(o(11501),o(66572)),r=(o(54052),o(28409)),u=(o(92699),o(46392)),m=(o(7773),o(35084)),s=(o(70752),o(12118),o(89601)),i=(o(15808),o(57305));function f(e,l,o,f,c,b){const p=s._m,V=n.xE,v=m.WK,g=u.lq,k=(0,i.g2)("vab-icon-selector"),F=r.Vc,h=d.qi,_=n.US,y=t.S2,C=a.kZ;return(0,i.uX)(),(0,i.Wv)(C,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":l[15]||(l[15]=l=>e.dialogFormVisible=l),title:e.title,width:"60%",onClose:e.close},{footer:(0,i.k6)((()=>[(0,i.bF)(y,{onClick:e.close},{default:(0,i.k6)((()=>[(0,i.eW)("取 消")])),_:1},8,["onClick"]),(0,i.bF)(y,{type:"primary",onClick:e.save},{default:(0,i.k6)((()=>[(0,i.eW)("确 定")])),_:1},8,["onClick"])])),default:(0,i.k6)((()=>[(0,i.bF)(_,{ref:"formRef",inline:"","label-width":"140px",model:e.form,rules:e.rules},{default:(0,i.k6)((()=>[(0,i.bF)(V,{label:"选择父级",prop:"parentId"},{default:(0,i.k6)((()=>[(0,i.bF)(p,{clearable:"",options:e.menuNodes,props:{checkStrictly:!0},style:{width:"172px"},onChange:e.handleMenuNodeChange},null,8,["options","onChange"])])),_:1}),(0,i.bF)(V,{label:"name",prop:"name"},{default:(0,i.k6)((()=>[(0,i.bF)(v,{modelValue:e.form.name,"onUpdate:modelValue":l[0]||(l[0]=l=>e.form.name=l)},null,8,["modelValue"])])),_:1}),(0,i.bF)(V,{label:"路径",prop:"path"},{default:(0,i.k6)((()=>[(0,i.bF)(v,{modelValue:e.form.path,"onUpdate:modelValue":l[1]||(l[1]=l=>e.form.path=l)},null,8,["modelValue"])])),_:1}),(0,i.bF)(V,{label:"vue文件路径",prop:"component"},{default:(0,i.k6)((()=>[(0,i.bF)(v,{modelValue:e.form.component,"onUpdate:modelValue":l[2]||(l[2]=l=>e.form.component=l)},null,8,["modelValue"])])),_:1}),(0,i.bF)(V,{label:"重定向",prop:"redirect"},{default:(0,i.k6)((()=>[(0,i.bF)(v,{modelValue:e.form.redirect,"onUpdate:modelValue":l[3]||(l[3]=l=>e.form.redirect=l)},null,8,["modelValue"])])),_:1}),(0,i.bF)(V,{label:"标题",prop:"meta.title"},{default:(0,i.k6)((()=>[(0,i.bF)(v,{modelValue:e.form.meta.title,"onUpdate:modelValue":l[4]||(l[4]=l=>e.form.meta.title=l)},null,8,["modelValue"])])),_:1}),(0,i.bF)(V,{label:"排序"},{default:(0,i.k6)((()=>[(0,i.bF)(g,{modelValue:e.form.order,"onUpdate:modelValue":l[5]||(l[5]=l=>e.form.order=l),max:20,min:1},null,8,["modelValue"])])),_:1}),(0,i.bF)(V,{label:"图标"},{default:(0,i.k6)((()=>[(0,i.bF)(F,{"popper-class":"icon-selector-popper",trigger:"hover",width:292},{reference:(0,i.k6)((()=>[(0,i.bF)(v,{modelValue:e.form.meta.icon,"onUpdate:modelValue":l[6]||(l[6]=l=>e.form.meta.icon=l)},null,8,["modelValue"])])),default:(0,i.k6)((()=>[(0,i.bF)(k,{onHandleIcon:e.handleIcon},null,8,["onHandleIcon"])])),_:1})])),_:1}),(0,i.bF)(V,{label:"badge"},{default:(0,i.k6)((()=>[(0,i.bF)(v,{modelValue:e.form.meta.badge,"onUpdate:modelValue":l[7]||(l[7]=l=>e.form.meta.badge=l)},null,8,["modelValue"])])),_:1}),(0,i.bF)(V,{label:"dot"},{default:(0,i.k6)((()=>[(0,i.bF)(h,{modelValue:e.form.meta.dot,"onUpdate:modelValue":l[8]||(l[8]=l=>e.form.meta.dot=l)},null,8,["modelValue"])])),_:1}),(0,i.bF)(V,{label:"隐藏"},{default:(0,i.k6)((()=>[(0,i.bF)(h,{modelValue:e.form.meta.hidden,"onUpdate:modelValue":l[9]||(l[9]=l=>e.form.meta.hidden=l)},null,8,["modelValue"])])),_:1}),(0,i.bF)(V,{label:"始终显示当前节点"},{default:(0,i.k6)((()=>[(0,i.bF)(h,{modelValue:e.form.meta.levelHidden,"onUpdate:modelValue":l[10]||(l[10]=l=>e.form.meta.levelHidden=l)},null,8,["modelValue"])])),_:1}),(0,i.bF)(V,{label:"自定义svg图标"},{default:(0,i.k6)((()=>[(0,i.bF)(h,{modelValue:e.form.meta.isCustomSvg,"onUpdate:modelValue":l[11]||(l[11]=l=>e.form.meta.isCustomSvg=l)},null,8,["modelValue"])])),_:1}),(0,i.bF)(V,{label:"固定"},{default:(0,i.k6)((()=>[(0,i.bF)(h,{modelValue:e.form.meta.noClosable,"onUpdate:modelValue":l[12]||(l[12]=l=>e.form.meta.noClosable=l)},null,8,["modelValue"])])),_:1}),(0,i.bF)(V,{label:"无缓存"},{default:(0,i.k6)((()=>[(0,i.bF)(h,{modelValue:e.form.meta.noKeepAlive,"onUpdate:modelValue":l[13]||(l[13]=l=>e.form.meta.noKeepAlive=l)},null,8,["modelValue"])])),_:1}),(0,i.bF)(V,{label:"不显示当前标签页"},{default:(0,i.k6)((()=>[(0,i.bF)(h,{modelValue:e.form.meta.tabHidden,"onUpdate:modelValue":l[14]||(l[14]=l=>e.form.meta.tabHidden=l)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title","onClose"])}var c=o(75238),b=o(25610),p=o(70817),V=(0,i.pM)({name:"MenuManagementEdit",components:{VabIconSelector:c["default"]},emits:["fetch-data"],setup(e,{emit:l}){const o=(0,i.WQ)("$baseMessage"),a=(0,p.Kh)({formRef:null,form:{order:1,id:"",meta:{title:"",icon:"",badge:"",dot:!1,hidden:!1,levelHidden:!1,isCustomSvg:!1,noClosable:!1,noKeepAlive:!1,tabHidden:!1}},nodeValue:[],menuNodes:[],rules:{parentId:[{required:!0,trigger:"blur",message:"请输入父级id"}],name:[{required:!0,trigger:"blur",message:"请输入name"}],path:[{required:!0,trigger:"blur",message:"请输入path"}],component:[{required:!0,trigger:"blur",message:"请输入component"}],"meta.title":[{required:!0,trigger:"blur",message:"请输入标题"}]},title:"",dialogFormVisible:!1}),t=e=>{a.form.meta.icon=e},n=e=>{e?(a.title="编辑",a.form=JSON.parse(JSON.stringify(e))):a.title="添加",d(),a.dialogFormVisible=!0},d=async()=>{const{data:e}=await(0,b.DB)();a.menuNodes=e},r=()=>{a["formRef"].resetFields(),a.form={meta:{icon:""},order:1},a.dialogFormVisible=!1},u=()=>{a["formRef"].validate((async e=>{if(e){const{msg:e}=await(0,b.Ed)(a.form);o(e,"success","vab-hey-message-success"),l("fetch-data"),r()}}))},m=e=>{console.log(e),a.form.parentId=e[e.length-1]};return{...(0,p.QW)(a),handleIcon:t,showEdit:n,close:r,save:u,handleMenuNodeChange:m}}});function v(e){e.__source="src/views/setting/menu/components/MenuManagementEdit.vue"}var g=o(88093);"function"===typeof v&&v(V);const k=(0,g.A)(V,[["render",f]]);var F=k}}]);