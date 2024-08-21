/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2024-08-21 17:45:49
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[2054],{25216:function(e,t,i){i.d(t,{A:function(){return v}});var n=i(58388),l=(i(25638),i(74808),i(66855)),s=(i(19482),i(57305)),r=i(70817),a=i(75916),o=i(5879),u=(0,s.pM)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let t=null;const i=(0,r.KR)(!0);return t=setTimeout((()=>{i.value=!1}),500),(0,o.JZ)(((e,i,n)=>{clearInterval(t),n()})),(t,o)=>{const u=l.d1,c=n.Ik;return(0,s.uX)(),(0,s.Wv)(c,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,s.eX)({default:(0,s.k6)((()=>[e.skeleton?((0,s.uX)(),(0,s.Wv)(u,{key:0,animated:"",loading:(0,r.R1)(i),rows:e.skeletonRows},{default:(0,s.k6)((()=>[(0,s.RG)(t.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,s.RG)(t.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[t.$slots.header||e.header?{name:"header",fn:(0,s.k6)((()=>[(0,s.RG)(t.$slots,"header",{},(()=>[(0,s.eW)((0,a.v_)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function c(e){e.__source="library/components/VabCard/index.vue"}var p=i(88093);"function"===typeof c&&c(u);const d=(0,p.A)(u,[["__scopeId","data-v-391150ea"]]);var v=d},62054:function(e,t,i){i.r(t),i.d(t,{default:function(){return _}});var n=i(25216),l=i(54400),s=(i(25638),i(90494),i(24707)),r=(i(91697),i(28409)),a=(i(92699),i(32713)),o=(i(67657),i(57305)),u=i(75916),c=i(70817);const p=e=>((0,o.Qi)("data-v-4444b120"),e=e(),(0,o.jt)(),e),d={class:"table"},v=p((()=>(0,o.Lk)("td",null,"vue-router",-1))),m=p((()=>(0,o.Lk)("td",null,"授权渠道",-1))),g={colspan:"3"},b={href:"https://vue-admin-beautiful.com/authorization",target:"_blank"},k={href:"https://github.com/chuzhixin/vue-admin-better/",target:"_blank"};var f=(0,o.pM)({__name:"VersionInformation",setup(e){const{dependencies:t,devDependencies:i,lastBuildTime:p,version:f}={name:"admin-plus",version:"13.3.0",private:!0,author:"vue-admin-better",scripts:{serve:"vue-cli-service serve",build:"vue-cli-service build","test:unit":"vue-cli-service test:unit --detectOpenHandles",lint:"vue-cli-service lint","build:report":"vue-cli-service build --report","build:test":"vue-cli-service build --mode test","global:install":"npm install -g nrm,cnpm,npm-check-updates,rimraf --registry=https://registry.npmmirror.com","globle:update":"ncu -g","lint:eslint":"eslint {src,mock,library}/**/*.{vue,js,ts} --fix","lint:prettier":"prettier {src,mock,library}/**/*.{html,vue,css,sass,scss,js,ts,md} --write","lint:stylelint":"stylelint {src,mock,library}/**/*.{vue,css,sass,scss} --fix --cache --cache-location node_modules/.cache/stylelint/","module:install":"pnpm i && cnpm i image-webpack-loader -D","module:reinstall":"rimraf node_modules && npm run module:install","module:update":"ncu -u --reject chalk,unplugin-auto-import,eslint-plugin-vue --registry=https://registry.npmmirror.com&&npm run module:install","nrm:npm":"nrm use npm","nrm:taobao":"nrm use taobao",template:"plop",git:"start ./git.sh"},dependencies:{"@amap/amap-jsapi-loader":"^1.0.1","@element-plus/icons-vue":"^2.3.1","@logicflow/core":"^1.2.18","@logicflow/extension":"^1.2.19","@vueuse/core":"^10.6.1","@vueuse/head":"^2.0.0","@wangeditor/editor":"^5.1.23","@wangeditor/editor-for-vue":"^5.1.12",axios:"^1.6.2","core-js":"^3.33.3",dayjs:"^1.11.10",echarts:"^5.4.3","element-plus":"^2.4.3","file-saver":"^2.0.5","image-conversion":"^2.1.1","js-cookie":"^3.0.5",jsencrypt:"^3.3.2",lodash:"^4.17.21",mitt:"^3.0.1",mockjs:"^1.1.0",nprogress:"^0.2.0","path-browserify":"^1.0.1",pinia:"^2.1.7",qs:"^6.11.2","register-service-worker":"^1.7.2","resize-detector":"^0.3.0","vab-icons":"file:vab-icons",vue:"^3.3.9","vue-i18n":"^9.8.0","vue-json-viewer":"^3.0.4","vue-qr":"^4.0.9","vue-router":"^4.2.5",vuedraggable:"^4.0.1",xlsx:"0.18.5"},devDependencies:{"@babel/core":"^7.23.5","@rushstack/eslint-patch":"^1.6.0","@types/file-saver":"^2.0.7","@types/js-cookie":"^3.0.6","@types/lodash-es":"^4.17.12","@types/node":"^20.10.2","@types/nprogress":"^0.2.3","@vue/cli-plugin-babel":"^5.0.8","@vue/cli-plugin-eslint":"^5.0.8","@vue/cli-plugin-pwa":"^5.0.8","@vue/cli-plugin-router":"^5.0.8","@vue/cli-plugin-typescript":"^5.0.8","@vue/cli-service":"^5.0.8","@vue/eslint-config-prettier":"^8.0.0","@vue/eslint-config-typescript":"^12.0.0","@vue/test-utils":"^2.4.3","body-parser":"^1.20.2","call-rely":"^1.3.2",chalk:"4.1.2",chokidar:"^3.5.3","compression-webpack-plugin":"^10.0.0",eslint:"^8.54.0","eslint-plugin-prettier":"^5.0.1","eslint-plugin-vue":"9.18.1","filemanager-webpack-plugin":"^8.0.0","image-webpack-loader":"^8.1.0","lint-staged":"^15.1.0",plop:"^4.0.0","plop-templates":"^0.0.9","postcss-html":"^1.5.0",prettier:"^3.1.0","raw-loader":"^4.0.2",sass:"^1.69.5","sass-loader":"^13.3.2",stylelint:"^15.11.0","stylelint-config-recess-order":"^4.4.0","stylelint-config-recommended-scss":"^13.1.0","stylelint-config-recommended-vue":"^1.5.0","svg-sprite-loader":"^6.0.11",typescript:"^5.3.2","unplugin-auto-import":"^0.16.7","unplugin-element-plus":"^0.8.0","unplugin-vue-components":"^0.25.2","unplugin-vue-define-options":"^1.4.0","vue-eslint-parser":"^9.3.2","vue-global-api":"^0.4.1","vue-unplugins":"^1.0.6",webpack:"^5.89.0",webpackbar:"^5.0.2"},gitHooks:{"pre-commit":"lint-staged"},homepage:"https://chu1204505056.gitee.io/admin-plus",license:"Mozilla Public License Version 2.0","lint-staged":{"*.{js,jsx,vue}":["vue-cli-service lint","git add"]},participants:["FlowPeakFish"],repository:{type:"git",url:"git+https://github.com/vue-admin-beautiful/admin-plus.git"},lastBuildTime:"2024-08-21 17:45:49"},h=e=>{window.open(`https://github.com/${e}/releases`)};return(e,y)=>{const w=(0,o.g2)("vab-icon"),_=a.u,L=r.Vc,j=s.S2,R=l.kA,x=n.A;return(0,o.uX)(),(0,o.Wv)(x,{class:"version-information",shadow:"hover"},{header:(0,o.k6)((()=>[(0,o.bF)(w,{icon:"information-line"}),(0,o.eW)(" 信息 "),(0,o.bF)(_,{class:"card-header-tag"},{default:(0,o.k6)((()=>[(0,o.eW)(" 当前版本：V"+(0,u.v_)((0,c.R1)(f))+"   部署时间："+(0,u.v_)((0,c.R1)(p)),1)])),_:1})])),default:(0,o.k6)((()=>[(0,o.bF)(R,null,{default:(0,o.k6)((()=>[(0,o.Lk)("table",d,[(0,o.Lk)("tr",null,[(0,o.Lk)("td",{onDblclick:y[0]||(y[0]=e=>h("vuejs/core"))},"vue",32),(0,o.Lk)("td",null,[(0,o.eW)((0,u.v_)((0,c.R1)(t)["vue"])+" ",1),(0,o.bF)(L,{content:"已升级至最新版本",placement:"top-start",trigger:"hover",width:200},{reference:(0,o.k6)((()=>[(0,o.bF)(w,{icon:"arrow-up-line"})])),_:1})]),(0,o.Lk)("td",{onDblclick:y[1]||(y[1]=e=>h("antfu/unplugin-auto-import"))}," unplugin-auto-import ",32),(0,o.Lk)("td",null,(0,u.v_)((0,c.R1)(i)["unplugin-auto-import"]),1)]),(0,o.Lk)("tr",null,[(0,o.Lk)("td",{onDblclick:y[2]||(y[2]=e=>h("vuejs/pinia"))},"pinia",32),(0,o.Lk)("td",null,(0,u.v_)((0,c.R1)(t)["pinia"]),1),v,(0,o.Lk)("td",null,(0,u.v_)((0,c.R1)(t)["vue-router"]),1)]),(0,o.Lk)("tr",null,[(0,o.Lk)("td",{onDblclick:y[3]||(y[3]=e=>h("microsoft/TypeScript"))},"typescript",32),(0,o.Lk)("td",null,(0,u.v_)((0,c.R1)(i)["typescript"]),1),(0,o.Lk)("td",{onDblclick:y[4]||(y[4]=e=>h("element-plus/element-plus"))}," element-plus ",32),(0,o.Lk)("td",null,[(0,o.eW)((0,u.v_)((0,c.R1)(t)["element-plus"])+" ",1),(0,o.bF)(L,{content:"已升级至最新版本",placement:"top-start",trigger:"hover",width:200},{reference:(0,o.k6)((()=>[(0,o.bF)(w,{icon:"arrow-up-line"})])),_:1})])]),(0,o.Lk)("tr",null,[m,(0,o.Lk)("td",g,[(0,o.Lk)("a",b,[(0,o.bF)(j,{type:"primary"},{default:(0,o.k6)((()=>[(0,o.eW)("购买源码 ￥799")])),_:1})]),(0,o.Lk)("a",k,[(0,o.bF)(j,{type:"warning"},{default:(0,o.k6)((()=>[(0,o.eW)("开源免费版")])),_:1})])])])])])),_:1})])),_:1})}}});function h(e){e.__source="src/views/index/components/VersionInformation.vue"}var y=i(88093);"function"===typeof h&&h(f);const w=(0,y.A)(f,[["__scopeId","data-v-4444b120"]]);var _=w}}]);