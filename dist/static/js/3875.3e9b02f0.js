/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-08-22 16:46:40
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[3875],{25216:function(e,t,a){a.d(t,{A:function(){return v}});var o=a(58388),n=(a(25638),a(74808),a(66855)),r=(a(19482),a(57305)),l=a(70817),u=a(75916),s=a(5879),d=(0,r.pM)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let t=null;const a=(0,l.KR)(!0);return t=setTimeout((()=>{a.value=!1}),500),(0,s.JZ)(((e,a,o)=>{clearInterval(t),o()})),(t,s)=>{const d=n.d1,i=o.Ik;return(0,r.uX)(),(0,r.Wv)(i,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,r.eX)({default:(0,r.k6)((()=>[e.skeleton?((0,r.uX)(),(0,r.Wv)(d,{key:0,animated:"",loading:(0,l.R1)(a),rows:e.skeletonRows},{default:(0,r.k6)((()=>[(0,r.RG)(t.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,r.RG)(t.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[t.$slots.header||e.header?{name:"header",fn:(0,r.k6)((()=>[(0,r.RG)(t.$slots,"header",{},(()=>[(0,r.eW)((0,u.v_)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function i(e){e.__source="library/components/VabCard/index.vue"}var c=a(88093);"function"===typeof i&&i(d);const p=(0,c.A)(d,[["__scopeId","data-v-391150ea"]]);var v=p},32946:function(e,t,a){a.d(t,{A:function(){return d}});var o=a(85999),n=(a(25638),a(27349),a(57305));const r={class:"right-panel"};var l=(0,n.pM)({__name:"VabQueryFormRightPanel",props:{span:{type:Number,default:10}},setup(e){return(t,a)=>{const l=o.uD;return(0,n.uX)(),(0,n.Wv)(l,{lg:e.span,md:24,sm:24,xl:e.span,xs:24},{default:(0,n.k6)((()=>[(0,n.Lk)("div",r,[(0,n.RG)(t.$slots,"default")])])),_:3},8,["lg","xl"])}}});function u(e){e.__source="library/components/VabQueryForm/components/VabQueryFormRightPanel.vue"}"function"===typeof u&&u(l);const s=l;var d=s},46017:function(e,t,a){a.d(t,{A:function(){return i}});var o=a(514),n=(a(25638),a(78759),a(57305));function r(e,t){const a=o.S2;return(0,n.uX)(),(0,n.Wv)(a,{class:"vab-query-form",gutter:0},{default:(0,n.k6)((()=>[(0,n.RG)(e.$slots,"default",{},void 0,!0)])),_:3})}function l(e){e.__source="library/components/VabQueryForm/index.vue"}var u=a(88093);const s={};"function"===typeof l&&l(s);const d=(0,u.A)(s,[["render",r],["__scopeId","data-v-172989c8"]]);var i=d},3875:function(e,t,a){a.r(t),a.d(t,{default:function(){return I}});var o=a(13143),n=(a(25638),a(951),a(514)),r=(a(78759),a(85999)),l=(a(27349),a(25216)),u=a(19507),s=(a(84651),a(32713)),d=(a(67657),a(46017)),i=a(32946),c=a(29313),p=(a(11501),a(24707)),v=(a(91697),a(12118),a(35084)),g=(a(70752),a(57305)),f=a(27450),y=a(75916);const m={class:"goods-container"},k={class:"goods-card-body"},h={class:"goods-tag-group"},_={class:"goods-image-group"},b={class:"goods-image"},F={class:"goods-title"},C={class:"goods-price"},S={class:"goods-description"},W={class:"goods-detail"},w=["href"];function q(e,t,a,q,x,X){const L=v.WK,R=c.xE,z=p.S2,A=c.US,V=i.A,Q=d.A,I=s.u,$=(0,g.g2)("vab-icon"),G=u.Zq,N=l.A,D=r.uD,K=n.S2,E=o.aQ;return(0,g.uX)(),(0,g.CE)("div",m,[(0,g.bF)(Q,null,{default:(0,g.k6)((()=>[(0,g.bF)(V,{span:24},{default:(0,g.k6)((()=>[(0,g.bF)(A,{ref:"form",inline:"",model:e.queryForm,onSubmit:t[1]||(t[1]=(0,f.D$)((()=>{}),["prevent"]))},{default:(0,g.k6)((()=>[(0,g.bF)(R,null,{default:(0,g.k6)((()=>[(0,g.bF)(L,{modelValue:e.queryForm.title,"onUpdate:modelValue":t[0]||(t[0]=t=>e.queryForm.title=t),placeholder:"请输入商品名称"},null,8,["modelValue"])])),_:1}),(0,g.bF)(R,null,{default:(0,g.k6)((()=>[(0,g.bF)(z,{icon:e.Search,"native-type":"submit",type:"primary",onClick:e.queryData},{default:(0,g.k6)((()=>[(0,g.eW)(" 查询 ")])),_:1},8,["icon","onClick"])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1}),(0,g.bF)(K,{gutter:20},{default:(0,g.k6)((()=>[((0,g.uX)(!0),(0,g.CE)(g.FK,null,(0,g.pI)(e.list,((e,t)=>((0,g.uX)(),(0,g.Wv)(D,{key:t,lg:8,md:8,sm:8,xl:6,xs:24},{default:(0,g.k6)((()=>[(0,g.bF)(N,{"body-style":{padding:"0px"},shadow:"hover"},{default:(0,g.k6)((()=>[(0,g.Lk)("div",k,[(0,g.Lk)("div",h,[(0,g.bF)(I,{hit:""},{default:(0,g.k6)((()=>[(0,g.eW)((0,y.v_)(e.company),1)])),_:2},1024)]),(0,g.Lk)("div",_,[(0,g.Lk)("div",b,[e.icon?((0,g.uX)(),(0,g.Wv)($,{key:0,icon:e.icon},null,8,["icon"])):(0,g.Q3)("",!0),e.image||e.svg?((0,g.uX)(),(0,g.Wv)(G,{key:1,class:(0,y.C4)({isSvg:e.svg}),src:e.image||e.svg},null,8,["class","src"])):(0,g.Q3)("",!0)])]),(0,g.Lk)("div",F,(0,y.v_)(e.title),1),(0,g.Lk)("div",C,[(0,g.bF)(I,{hit:"",type:"warning"},{default:(0,g.k6)((()=>[(0,g.eW)((0,y.v_)(e.price),1)])),_:2},1024),((0,g.uX)(!0),(0,g.CE)(g.FK,null,(0,g.pI)(e.label,(e=>((0,g.uX)(),(0,g.Wv)(I,{key:e,hit:""},{default:(0,g.k6)((()=>[(0,g.eW)((0,y.v_)(e),1)])),_:2},1024)))),128))]),(0,g.Lk)("div",S,(0,y.v_)(e.description),1),(0,g.Lk)("div",W,[(0,g.Lk)("a",{href:e.url+"?hmsr=admin-plus&hmpl=&hmcu=&hmkw=&hmci=",target:"_blank"},[(0,g.bF)(z,{text:"",type:"primary"},{default:(0,g.k6)((()=>[(0,g.eW)("查看详情")])),_:1})],8,w)])])])),_:2},1024)])),_:2},1024)))),128))])),_:1}),(0,g.bF)(E,{background:"","current-page":e.queryForm.pageNo,layout:e.layout,"page-size":e.queryForm.pageSize,total:e.total,onCurrentChange:e.handleCurrentChange,onSizeChange:e.handleSizeChange},null,8,["current-page","layout","page-size","total","onCurrentChange","onSizeChange"])])}var x=a(80484);function X(e){return(0,x.A)({url:"/goods/getList",method:"get",params:e})}var L=a(71516),R=a(70817),z=(0,g.pM)({name:"Goods",setup(){const e=(0,R.Kh)({list:[],total:0,queryForm:{pageNo:1,pageSize:10,title:""},layout:"total, sizes, prev, pager, next, jumper"}),t=async()=>{const{data:{list:t,total:a}}=await X(e.queryForm);e.list=t,e.total=a},a=a=>{e.queryForm.pageSize=a,t()},o=a=>{e.queryForm.pageNo=a,t()},n=()=>{e.queryForm.pageNo=1,t()};return(0,g.sV)((()=>{t()})),{...(0,R.QW)(e),handleSizeChange:a,handleCurrentChange:o,queryData:n,Search:L.Search}}});function A(e){e.__source="src/views/mall/goods/index.vue"}var V=a(88093);"function"===typeof A&&A(z);const Q=(0,V.A)(z,[["render",q],["__scopeId","data-v-757a9fbe"]]);var I=Q}}]);