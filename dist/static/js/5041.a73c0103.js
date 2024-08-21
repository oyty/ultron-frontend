/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-08-21 17:45:49
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[5041],{50368:function(e,a,o){o.d(a,{s:function(){return t}});var n=o(80484);function t(e){return(0,n.A)({url:"/remixIcon/getList",method:"get",params:e})}},41035:function(e,a,o){o.d(a,{A:function(){return u}});var n=o(20736),t=o(31914);function l(e){n.gp.$baseMessage(`拷贝${e}成功`,"success","vab-hey-message-success",!1)}function r(e){n.gp.$baseMessage(`拷贝${e}失败`,"error","vab-hey-message-success",!1)}function u(e){const{isSupported:a,copy:o}=(0,t.iDZ)();a||(0,t.JTT)("clipboard-write"),o(e).then((()=>{l(e)})).catch((a=>{console.log(a),r(e)}))}},25216:function(e,a,o){o.d(a,{A:function(){return y}});var n=o(58388),t=(o(25638),o(74808),o(66855)),l=(o(19482),o(57305)),r=o(70817),u=o(75916),s=o(5879),c=(0,l.pM)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let a=null;const o=(0,r.KR)(!0);return a=setTimeout((()=>{o.value=!1}),500),(0,s.JZ)(((e,o,n)=>{clearInterval(a),n()})),(a,s)=>{const c=t.d1,i=n.Ik;return(0,l.uX)(),(0,l.Wv)(i,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,l.eX)({default:(0,l.k6)((()=>[e.skeleton?((0,l.uX)(),(0,l.Wv)(c,{key:0,animated:"",loading:(0,r.R1)(o),rows:e.skeletonRows},{default:(0,l.k6)((()=>[(0,l.RG)(a.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,l.RG)(a.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[a.$slots.header||e.header?{name:"header",fn:(0,l.k6)((()=>[(0,l.RG)(a.$slots,"header",{},(()=>[(0,l.eW)((0,u.v_)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function i(e){e.__source="library/components/VabCard/index.vue"}var d=o(88093);"function"===typeof i&&i(c);const p=(0,d.A)(c,[["__scopeId","data-v-391150ea"]]);var y=p},95041:function(e,a,o){o.r(a),o.d(a,{default:function(){return I}});var n=o(514),t=(o(25638),o(78759),o(13143)),l=(o(951),o(25216)),r=o(88163),u=(o(10444),o(85999)),s=(o(27349),o(29313)),c=(o(11501),o(20355)),i=(o(14072),o(46392)),d=(o(7773),o(24707)),p=(o(91697),o(12118),o(35084)),y=(o(70752),o(57305)),m=o(27450),f=o(75916);const h={class:"remix-icon-container"},b=["onClick"];function g(e,a,o,g,v,k){const F=p.WK,C=s.xE,_=d.S2,S=i.lq,q=c.dI,w=s.US,x=u.uD,I=r.x0,z=(0,y.g2)("vab-icon"),V=l.A,$=t.aQ,W=n.S2;return(0,y.uX)(),(0,y.CE)("div",h,[(0,y.bF)(W,{gutter:20},{default:(0,y.k6)((()=>[(0,y.bF)(x,{span:24},{default:(0,y.k6)((()=>[(0,y.bF)(w,{inline:"","label-width":"80px",onSubmit:a[3]||(a[3]=(0,m.D$)((()=>{}),["prevent"]))},{default:(0,y.k6)((()=>[(0,y.bF)(C,{label:"图标名称"},{default:(0,y.k6)((()=>[(0,y.bF)(F,{modelValue:e.queryForm.title,"onUpdate:modelValue":a[0]||(a[0]=a=>e.queryForm.title=a)},null,8,["modelValue"])])),_:1}),(0,y.bF)(C,{"label-width":"0"},{default:(0,y.k6)((()=>[(0,y.bF)(_,{icon:e.Search,"native-type":"submit",type:"primary",onClick:e.queryData},{default:(0,y.k6)((()=>[(0,y.eW)(" 查询 ")])),_:1},8,["icon","onClick"]),(0,y.bF)(C,{label:"文字大小"},{default:(0,y.k6)((()=>[(0,y.bF)(S,{modelValue:e.queryForm.num,"onUpdate:modelValue":a[1]||(a[1]=a=>e.queryForm.num=a),max:40,min:12,style:{width:"120px","margin-right":"10px"}},null,8,["modelValue"]),(0,y.eW)(" px ")])),_:1}),(0,y.bF)(C,{"label-width":0},{default:(0,y.k6)((()=>[(0,y.bF)(q,{modelValue:e.queryForm.colorful,"onUpdate:modelValue":a[2]||(a[2]=a=>e.queryForm.colorful=a),label:"多彩图标",onChange:e.queryData},null,8,["modelValue","onChange"])])),_:1})])),_:1})])),_:1})])),_:1}),e.emptyShow?((0,y.uX)(),(0,y.Wv)(x,{key:0,span:24},{default:(0,y.k6)((()=>[(0,y.bF)(I,{class:"vab-data-empty",description:"暂无数据"})])),_:1})):(0,y.Q3)("",!0),((0,y.uX)(!0),(0,y.CE)(y.FK,null,(0,y.pI)(e.queryIcon,((a,o)=>((0,y.uX)(),(0,y.Wv)(x,{key:o,lg:2,md:3,sm:8,xl:2,xs:6},{default:(0,y.k6)((()=>[(0,y.bF)(V,{shadow:"hover",onClick:o=>e.handleCopyIcon(a.icon,o)},{default:(0,y.k6)((()=>[(0,y.bF)(z,{icon:a.icon,style:(0,f.Tr)({color:e.queryForm.colorful?a.color:"var(--el-color-grey)",fontSize:e.queryForm.num+"px"})},null,8,["icon","style"])])),_:2},1032,["onClick"]),(0,y.Lk)("div",{class:"icon-text",onClick:o=>e.handleCopyText(a.icon,o)},(0,f.v_)(a.icon),9,b)])),_:2},1024)))),128)),(0,y.bF)(x,{span:24},{default:(0,y.k6)((()=>[(0,y.bF)($,{background:"","current-page":e.queryForm.pageNo,layout:e.layout,"page-size":e.queryForm.pageSize,"page-sizes":[72,144,216,288],total:e.total,onCurrentChange:e.handleCurrentChange,onSizeChange:e.handleSizeChange},null,8,["current-page","layout","page-size","total","onCurrentChange","onSizeChange"])])),_:1})])),_:1})])}var v=o(50368),k=o(41035),F=o(71516),C=o(70817),S=(0,y.pM)({name:"RemixIcon",setup(){const e=(0,C.Kh)({queryIcon:[],total:0,queryForm:{pageNo:1,pageSize:72,title:"",colorful:!1,num:28},layout:"total, sizes, prev, pager, next, jumper",emptyShow:!0}),a=async()=>{const{data:{list:a,total:o}}=await(0,v.s)(e.queryForm);e.queryIcon=a.map((e=>({icon:e,color:u()}))),e.total=o,e.emptyShow=!1},o=o=>{e.queryForm.pageSize=o,a()},n=o=>{e.queryForm.pageNo=o,a()},t=()=>{e.queryForm.pageNo=1,a()},l=(e,a)=>{(0,k.A)(e,a)},r=(e,a)=>{(0,k.A)(`<vab-icon icon="${e}" />`,a)},u=()=>_.shuffle(["#1890FF","#36CBCB","#4ECB73","#FBD437","#F2637B","#975FE5"]);return(0,y.sV)((()=>{a()})),{...(0,C.QW)(e),handleSizeChange:o,handleCurrentChange:n,queryData:t,handleCopyText:l,handleCopyIcon:r,Search:F.Search}}});function q(e){e.__source="src/views/vab/icon/remixIcon.vue"}var w=o(88093);"function"===typeof q&&q(S);const x=(0,w.A)(S,[["render",g],["__scopeId","data-v-76ba5541"]]);var I=x}}]);