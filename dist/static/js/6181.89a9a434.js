/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-08-22 16:46:40
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[6181],{46181:function(a,t,e){e.r(t),e.d(t,{default:function(){return y}});var i=e(24707),u=(e(25638),e(91697),e(86043),e(57305)),s=e(70817),l=e(70679),n=e(74863),c=e(5879),r=e(11544);const p={class:"tabs-container"};var d={__name:"index",setup(a){const t=(0,c.lq)(),e=(0,c.rd)(),d=(0,n.Z)(),{getVisitedRoutes:o}=(0,r.bP)(d),{delVisitedRoute:w,delOthersVisitedRoutes:y,delLeftVisitedRoutes:h,delRightVisitedRoutes:v,delAllVisitedRoutes:f}=d,k=(0,s.KR)(null),_=async a=>{F(a)&&await V(),await w(a)},b=async()=>{k.value?(await e.push(k.value),await y(k.value.path)):await y((0,l.QG)(t,!0))},R=async()=>{k.value?(await e.push(k.value),await h(k.value.path)):await h((0,l.QG)(t,!0))},m=async()=>{k.value?(await e.push(k.value),await v(k.value.path)):await v((0,l.QG)(t,!0))},C=async()=>{await f(),await V()},V=async()=>{const a=o.value.filter((a=>a.path!==(0,l.QG)(t,!0))).slice(-1)[0];a?await e.push(a):await e.push("/")},F=a=>a===(0,l.QG)(t,!0);return(a,e)=>{const l=i.S2;return(0,u.uX)(),(0,u.CE)("div",p,[(0,u.bF)(l,{type:"primary",onClick:b},{default:(0,u.k6)((()=>[(0,u.eW)("关闭其他")])),_:1}),(0,u.bF)(l,{type:"primary",onClick:R},{default:(0,u.k6)((()=>[(0,u.eW)("关闭左侧")])),_:1}),(0,u.bF)(l,{type:"primary",onClick:m},{default:(0,u.k6)((()=>[(0,u.eW)("关闭右侧")])),_:1}),(0,u.bF)(l,{type:"primary",onClick:C},{default:(0,u.k6)((()=>[(0,u.eW)("关闭全部")])),_:1}),(0,u.bF)(l,{type:"primary",onClick:e[0]||(e[0]=a=>_((0,s.R1)(t).path))},{default:(0,u.k6)((()=>[(0,u.eW)(" 关闭当前 ")])),_:1})])}}};function o(a){a.__source="src/views/other/tabs/index.vue"}"function"===typeof o&&o(d);const w=d;var y=w}}]);