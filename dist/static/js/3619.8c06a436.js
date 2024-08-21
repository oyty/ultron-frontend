/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-08-21 17:45:49
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[3619,6e3],{78215:function(e,l,a){a.d(l,{Jt:function(){return t},pL:function(){return n},vS:function(){return r}});var o=a(80484);function t(e){return(0,o.A)({url:"/task/taskAdd",method:"post",data:e})}function r(e){return(0,o.A)({url:"/task/getList",method:"get",params:e})}function n(e){return(0,o.A)({url:"/task/doDelete",method:"post",data:e})}},63619:function(e,l,a){a.r(l),a.d(l,{default:function(){return b}});var o=a(72638),t=(a(25638),a(56197),a(29313)),r=(a(11501),a(74645)),n=(a(58548),a(24707)),s=(a(91697),a(88307)),i=(a(38976),a(12118),a(35084)),d=(a(70752),a(57305));function u(e,l,a,u,m,f){const c=i.WK,p=t.xE,g=s.fR,h=n.S2,b=r.j5,k=t.US,v=o.kZ;return(0,d.uX)(),(0,d.Wv)(v,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":l[4]||(l[4]=l=>e.dialogFormVisible=l),title:e.title,width:"500px",onClose:e.close},{footer:(0,d.k6)((()=>[(0,d.bF)(h,{onClick:e.close},{default:(0,d.k6)((()=>[(0,d.eW)("取 消")])),_:1},8,["onClick"]),(0,d.bF)(h,{type:"primary",onClick:e.save},{default:(0,d.k6)((()=>[(0,d.eW)("确 定")])),_:1},8,["onClick"])])),default:(0,d.k6)((()=>[(0,d.bF)(k,{ref:"formRef","label-width":"140px",model:e.form,rules:e.rules},{default:(0,d.k6)((()=>[(0,d.bF)(p,{label:"任务名称",prop:"name"},{default:(0,d.k6)((()=>[(0,d.bF)(c,{modelValue:e.form.name,"onUpdate:modelValue":l[0]||(l[0]=l=>e.form.name=l)},null,8,["modelValue"])])),_:1}),(0,d.bF)(p,{label:"设计底部平台标高",prop:"height"},{default:(0,d.k6)((()=>[(0,d.bF)(c,{modelValue:e.form.height,"onUpdate:modelValue":l[1]||(l[1]=l=>e.form.height=l)},null,8,["modelValue"])])),_:1}),(0,d.bF)(p,{label:"超深",prop:"deep"},{default:(0,d.k6)((()=>[(0,d.bF)(c,{modelValue:e.form.deep,"onUpdate:modelValue":l[2]||(l[2]=l=>e.form.deep=l)},null,8,["modelValue"])])),_:1}),(0,d.bF)(p,{label:"孔径",prop:"hole_size"},{default:(0,d.k6)((()=>[(0,d.bF)(c,{modelValue:e.form.hole_size,"onUpdate:modelValue":l[3]||(l[3]=l=>e.form.hole_size=l)},null,8,["modelValue"])])),_:1}),(0,d.bF)(g),(0,d.bF)(b,{ref:"uploadRef",class:"upload-demo",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15","auto-upload":!1,"on-change":e.handleFileChange,"on-remove":e.handleFileRemove,limit:1},{trigger:(0,d.k6)((()=>[(0,d.bF)(h,{style:{"margin-left":"20px"},type:"primary",disabled:null!==e.file},{default:(0,d.k6)((()=>[(0,d.eW)(" 选择孔位文件(dat/txt/csv) ")])),_:1},8,["disabled"])])),_:1},8,["on-change","on-remove"])])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title","onClose"])}var m=a(78215),f=a(70817),c=(0,d.pM)({name:"DriverManagement",emits:["fetch-data"],setup(e,{emit:l}){const a=(0,d.WQ)("$baseMessage"),o=(0,f.Kh)({formRef:null,uploadRef:null,form:{id:"",name:"",height:"",deep:"",hole_size:"",datas:[]},file:null,rules:{name:[{required:!0,trigger:"blur",message:"请输入任务名称"}],height:[{required:!0,trigger:"blur",message:"请输入设计底部平台标高"}],deep:[{required:!0,trigger:"blur",message:"请输入超深"}],hole_size:[{required:!0,trigger:"blur",message:"请输入孔径"}]},title:"",dialogFormVisible:!1,list:[]}),t=e=>{o.file=e,console.log(e),p(e)&&i(o.file)},r=()=>{o.file=null},n=async e=>{e?(o.title="编辑",o.form=JSON.parse(JSON.stringify(e))):o.title="添加",o.dialogFormVisible=!0},s=()=>{o["formRef"].resetFields(),o.form={name:"",remark:""},o.dialogFormVisible=!1},i=e=>{const l=new FileReader;l.onload=e=>{const l=e.target.result;o.form.datas=u(l),console.log(o.parsedData)},l.readAsText(e.raw)},u=e=>{const l=e.split("\n");return l.map((e=>e.split(",")))},c=()=>{if(null===o.file)return void a("请上传孔位文件","error","vab-hey-message-error");const e=p(o.file);e&&(console.log(o.parsedData),o["formRef"].validate((async e=>{if(e){const{msg:e}=await(0,m.Jt)({...o.form});a(e,"success","vab-hey-message-success"),l("fetch-data"),s()}})))},p=e=>{const l=e.name.endsWith(".dat"),o=e.name.endsWith(".txt"),t=e.name.endsWith(".csv");return console.log(e.name),l||o||t?l||o||t:(a("上传文件格式不正确，请上传dat/txt/csv文件!","error","vab-hey-message-error"),!1)};return{...(0,f.QW)(o),showEdit:n,handleFileChange:t,handleFileRemove:r,beforeUpload:p,close:s,save:c}}});function p(e){e.__source="src/views/companyconfig/task/components/TaskEdit.vue"}var g=a(88093);"function"===typeof p&&p(c);const h=(0,g.A)(c,[["render",u],["__scopeId","data-v-3e1464a2"]]);var b=h}}]);