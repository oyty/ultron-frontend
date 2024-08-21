/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-08-21 17:45:49
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[9337,3480,335,6910,5035,8493,2553],{25216:function(e,t,a){a.d(t,{A:function(){return b}});var n=a(58388),o=(a(25638),a(74808),a(66855)),r=(a(19482),a(57305)),i=a(70817),s=a(75916),l=a(5879),d=(0,r.pM)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let t=null;const a=(0,i.KR)(!0);return t=setTimeout((()=>{a.value=!1}),500),(0,l.JZ)(((e,a,n)=>{clearInterval(t),n()})),(t,l)=>{const d=o.d1,c=n.Ik;return(0,r.uX)(),(0,r.Wv)(c,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,r.eX)({default:(0,r.k6)((()=>[e.skeleton?((0,r.uX)(),(0,r.Wv)(d,{key:0,animated:"",loading:(0,i.R1)(a),rows:e.skeletonRows},{default:(0,r.k6)((()=>[(0,r.RG)(t.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,r.RG)(t.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[t.$slots.header||e.header?{name:"header",fn:(0,r.k6)((()=>[(0,r.RG)(t.$slots,"header",{},(()=>[(0,r.eW)((0,s.v_)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function c(e){e.__source="library/components/VabCard/index.vue"}var u=a(88093);"function"===typeof c&&c(d);const p=(0,u.A)(d,[["__scopeId","data-v-391150ea"]]);var b=p},36612:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(25216),o=a(57305);function r(e,t,a,r,i,s){const l=(0,o.g2)("vab-icon"),d=(0,o.g2)("vab-chart"),c=n.A;return(0,o.uX)(),(0,o.Wv)(c,{class:"branch",shadow:"hover",skeleton:""},{header:(0,o.k6)((()=>[(0,o.Lk)("span",null,[(0,o.bF)(l,{icon:"donut-chart-fill"}),(0,o.eW)(" 分布 ")])])),default:(0,o.k6)((()=>[(0,o.bF)(d,{class:"branch-echart","init-options":e.initOptions,option:e.option,theme:"vab-echarts-theme"},null,8,["init-options","option"])])),_:1})}var i=a(71141),s=(0,o.pM)({components:{VabChart:i["default"]},data(){return{initOptions:{renderer:"svg"},option:{tooltip:{trigger:"item"},series:[{name:"访问来源",type:"pie",radius:["50%","70%"],itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},emphasis:{label:{show:!0}},data:[{value:1048,name:"搜索引擎"},{value:735,name:"直接访问"},{value:580,name:"邮件营销"},{value:484,name:"联盟广告"},{value:300,name:"视频广告"}]}]}}}});function l(e){e.__source="src/views/index/components/Branch.vue"}var d=a(88093);"function"===typeof l&&l(s);const c=(0,d.A)(s,[["render",r]]);var u=c},2723:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(25216),o=a(57305);function r(e,t,a,r,i,s){const l=(0,o.g2)("vab-icon"),d=(0,o.g2)("vab-chart"),c=n.A;return(0,o.uX)(),(0,o.Wv)(c,{class:"rank",shadow:"hover",skeleton:""},{header:(0,o.k6)((()=>[(0,o.Lk)("span",null,[(0,o.bF)(l,{icon:"align-top"}),(0,o.eW)(" 消費排行 ")])])),default:(0,o.k6)((()=>[(0,o.bF)(d,{class:"rank-echart","init-options":e.initOptions,option:e.option,theme:"vab-echarts-theme"},null,8,["init-options","option"])])),_:1})}var i=a(71141),s=(0,o.pM)({components:{VabChart:i["default"]},data(){return{initOptions:{renderer:"svg"},option:{tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"0%",left:"2%",right:"20%",bottom:"0%",containLabel:!0},xAxis:[{splitLine:{show:!1},type:"value",show:!1}],yAxis:[{splitLine:{show:!1},axisLine:{show:!1},type:"category",axisTick:{show:!1},data:["good luck","曲丽丽","付小小","林东东","周星星","朱偏右"]}],series:[{name:"累计消费",type:"bar",barWidth:15,label:{show:!0,position:"right",fontSize:12,formatter:({data:e})=>`${e}万元`},itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},data:[23,54,68,76,87,99]}]}}}});function l(e){e.__source="src/views/index/components/Rank.vue"}var d=a(88093);"function"===typeof l&&l(s);const c=(0,d.A)(s,[["render",r]]);var u=c},95035:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(25216),o=a(53299),r=(a(25638),a(60770),a(89141),a(98026)),i=(a(50151),a(88163)),s=(a(10444),a(50529),a(57305));const l={class:"tabs"};function d(e,t,a,d,c,u){const p=r.o8,b=i.x0,f=r.Up,v=o.v$,m=o.q,h=n.A;return(0,s.uX)(),(0,s.CE)("div",l,[(0,s.bF)(h,{class:"tabs-card",shadow:"hover"},{default:(0,s.k6)((()=>[(0,s.bF)(m,{modelValue:e.activeName,"onUpdate:modelValue":t[0]||(t[0]=t=>e.activeName=t)},{default:(0,s.k6)((()=>[(0,s.bF)(v,{label:"配送管理",name:"first"},{default:(0,s.k6)((()=>[(0,s.bF)(f,{data:e.tableData,height:"280"},{empty:(0,s.k6)((()=>[(0,s.bF)(b,{class:"vab-data-empty",description:"暂无数据"})])),default:(0,s.k6)((()=>[(0,s.bF)(p,{label:"日期",prop:"date"}),(0,s.bF)(p,{label:"配送信息"},{default:(0,s.k6)((()=>[(0,s.bF)(p,{label:"姓名",prop:"name"}),(0,s.bF)(p,{label:"省份",prop:"province"}),(0,s.bF)(p,{label:"市区",prop:"city"}),(0,s.bF)(p,{label:"地址",prop:"address"}),(0,s.bF)(p,{label:"邮编",prop:"zip"})])),_:1})])),_:1},8,["data"])])),_:1}),(0,s.bF)(v,{label:"区域管理",name:"second"},{default:(0,s.k6)((()=>[(0,s.bF)(f,{data:e.tableData,height:"280"},{empty:(0,s.k6)((()=>[(0,s.bF)(b,{class:"vab-data-empty",description:"暂无数据"})])),default:(0,s.k6)((()=>[(0,s.bF)(p,{label:"日期",prop:"date"}),(0,s.bF)(p,{label:"区域信息"},{default:(0,s.k6)((()=>[(0,s.bF)(p,{label:"姓名",prop:"name"}),(0,s.bF)(p,{label:"省份",prop:"province"}),(0,s.bF)(p,{label:"市区",prop:"city"}),(0,s.bF)(p,{label:"地址",prop:"address"}),(0,s.bF)(p,{label:"邮编",prop:"zip"})])),_:1})])),_:1},8,["data"])])),_:1})])),_:1},8,["modelValue"])])),_:1})])}var c=(0,s.pM)({data(){return{activeName:"first",tableData:[{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-08",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-06",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-07",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333}]}}});function u(e){e.__source="src/views/index/components/Tabs.vue"}var p=a(88093);"function"===typeof u&&u(c);const b=(0,p.A)(c,[["render",d],["__scopeId","data-v-53e6f2a4"]]);var f=b},38493:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=a(25216),o=a(57305),r=a(75916);const i={class:"right-icon"},s={class:"bottom"};function l(e,t,a,l,d,c){const u=(0,o.g2)("vab-count"),p=(0,o.g2)("vab-icon"),b=n.A;return(0,o.uX)(),(0,o.Wv)(b,{class:(0,r.C4)(["top-card","top-card-"+e.background]),shadow:"hover"},{default:(0,o.k6)((()=>[(0,o.Lk)("span",null,(0,r.v_)(e.title),1),(0,o.Lk)("p",null,[(0,o.bF)(u,{decimals:e.countConfig.decimals,duration:e.countConfig.duration,"end-val":e.countConfig.endVal,prefix:e.countConfig.prefix,separator:e.countConfig.separator,"start-val":e.countConfig.startVal,suffix:e.countConfig.suffix},null,8,["decimals","duration","end-val","prefix","separator","start-val","suffix"])]),(0,o.Lk)("div",i,[(0,o.bF)(p,{icon:e.icon},null,8,["icon"])]),(0,o.Lk)("div",s,[(0,o.eW)(" 自上周以来 "),(0,o.bF)(p,{icon:"arrow-up-line"}),(0,o.Lk)("span",null,(0,r.v_)(e.percentage),1)])])),_:1},8,["class"])}var d=a(92935),c=a.n(d),u=a(95672),p=a(70817),b=(0,o.pM)({name:"TopCard",components:{VabCount:u["default"]},props:{background:{type:String,default:"white"},title:{type:String,default:"Test"},icon:{type:String,default:"album-line"},percentage:{type:String,default:"10%"},countConfig:{type:Object,default:()=>({startVal:0,endVal:c().random(1e3,2e4),decimals:0,prefix:"",suffix:"",separator:",",duration:8e3})}},setup(){const e=(0,p.Kh)({});return{...(0,p.QW)(e)}}});function f(e){e.__source="src/views/index/components/TopCard.vue"}var v=a(88093);"function"===typeof f&&f(b);const m=(0,v.A)(b,[["render",l],["__scopeId","data-v-44f98028"]]);var h=m},45034:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var n=a(25216),o=a(57305);function r(e,t,a,r,i,s){const l=(0,o.g2)("vab-icon"),d=(0,o.g2)("vab-chart"),c=n.A;return(0,o.uX)(),(0,o.Wv)(c,{class:"trend",shadow:"hover",skeleton:""},{header:(0,o.k6)((()=>[(0,o.Lk)("span",null,[(0,o.bF)(l,{icon:"line-chart-fill"}),(0,o.eW)(" 趋势 ")])])),default:(0,o.k6)((()=>[(0,o.bF)(d,{class:"trend-echart","init-options":e.initOptions,option:e.option,theme:"vab-echarts-theme"},null,8,["init-options","option"])])),_:1})}var i=a(71141),s=a(70817),l=(0,o.pM)({components:{VabChart:i["default"]},setup(){const e=(0,s.Kh)({initOptions:{renderer:"svg"},option:{tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"4%",left:"2%",right:"2%",bottom:"0%",containLabel:!0},xAxis:[{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],boundaryGap:!1}],yAxis:[{type:"value"}],series:[{name:"签单",type:"line",data:[1295,3020,1330,512,4463,2214,3330,2412,1205,820,3330,912],symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,areaStyle:{opacity:.8}},{name:"回款",type:"line",data:[2905,2020,1730,128,963,4614,630,1912,1005,1782,1530,912],symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,areaStyle:{opacity:.8}}]}});return{...(0,s.QW)(e)}}});function d(e){e.__source="src/views/index/components/Trend.vue"}var c=a(88093);"function"===typeof d&&d(l);const u=(0,c.A)(l,[["render",r]]);var p=u},99178:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var n=a(514),o=(a(25638),a(78759),a(85999)),r=(a(27349),a(57305));const i={class:"dashboard-container"};function s(e,t,a,s,l,d){const c=(0,r.g2)("top-card"),u=o.uD,p=(0,r.g2)("trend"),b=(0,r.g2)("branch"),f=(0,r.g2)("rank"),v=(0,r.g2)("tabs"),m=n.S2;return(0,r.uX)(),(0,r.CE)("div",i,[(0,r.bF)(m,{gutter:20},{default:(0,r.k6)((()=>[(0,r.bF)(u,{lg:6,md:12,sm:24,xl:6,xs:24},{default:(0,r.k6)((()=>[(0,r.bF)(c,{background:"blue","count-config":e.countConfig1,icon:"money-cny-circle-line",percentage:"10%",title:"总销量"},null,8,["count-config"])])),_:1}),(0,r.bF)(u,{lg:6,md:12,sm:24,xl:6,xs:24},{default:(0,r.k6)((()=>[(0,r.bF)(c,{background:"white",icon:"money-cny-box-line",percentage:"44%",title:"总成交"})])),_:1}),(0,r.bF)(u,{lg:6,md:12,sm:24,xl:6,xs:24},{default:(0,r.k6)((()=>[(0,r.bF)(c,{background:"white",icon:"user-search-line",percentage:"30%",title:"活跃用户"})])),_:1}),(0,r.bF)(u,{lg:6,md:12,sm:24,xl:6,xs:24},{default:(0,r.k6)((()=>[(0,r.bF)(c,{background:"white",icon:"passport-line",percentage:"10%",title:"订单"})])),_:1}),(0,r.bF)(u,{lg:12,md:12,sm:24,xl:12,xs:24},{default:(0,r.k6)((()=>[(0,r.bF)(p)])),_:1}),(0,r.bF)(u,{lg:6,md:12,sm:24,xl:6,xs:24},{default:(0,r.k6)((()=>[(0,r.bF)(b)])),_:1}),(0,r.bF)(u,{lg:6,md:12,sm:24,xl:6,xs:24},{default:(0,r.k6)((()=>[(0,r.bF)(f)])),_:1}),(0,r.bF)(u,{lg:24,md:24,sm:24,xl:24,xs:24},{default:(0,r.k6)((()=>[(0,r.bF)(v)])),_:1})])),_:1})])}var l=a(92935),d=a.n(l),c=a(45034),u=a(36612),p=a(2723),b=a(95035),f=a(38493),v=a(70817),m=(0,r.pM)({name:"Dashboard",components:{Trend:c["default"],Branch:u["default"],Rank:p["default"],Tabs:b["default"],TopCard:f["default"]},setup(){const e=(0,v.Kh)({countConfig1:{startVal:0,endVal:d().random(1e3,2e4),decimals:2,prefix:"￥",suffix:"",separator:",",duration:8e3}});return{...(0,v.QW)(e)}}});function h(e){e.__source="src/views/index/dashboard.vue"}var g=a(88093);"function"===typeof h&&h(m);const y=(0,g.A)(m,[["render",s],["__scopeId","data-v-3d9dc912"]]);var k=y}}]);