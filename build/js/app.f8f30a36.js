(function(){var e={5676:function(e,t,n){"use strict";var o=n(9963),r=n(1090),s=(n(8958),n(6252)),a=n(2262),i=n(8538),c=(0,s.aZ)({__name:"App",setup(e){return(0,s.bv)((()=>{})),(e,t)=>{const n=(0,s.up)("router-view"),o=r.BR;return(0,s.wg)(),(0,s.j4)(o,{locale:(0,a.SU)(i.Z)},{default:(0,s.w5)((()=>[(0,s.Wm)(n)])),_:1},8,["locale"])}}});const u=c;var d=u,l=n(238),f=n(1621),m=n(7484),p=n.n(m),h=n(178),g=n.n(h);function y(e,t="YYYY-MM-DD HH:mm:ss"){return p().utc(e).utcOffset(8).format(t)}function b(e){e.config.globalProperties.$filter={formatDate(e){return y(e)}}}function v(e){e.use(b)}p().extend(g());const w=(0,o.ri)(d);(0,f.zn)(),w.use(v).use(f.ZP).use(l.Z).mount("#app")},238:function(e,t,n){"use strict";var o=n(2119),r=n(4209),s=n(4114);const a=[{path:"/login",name:"login",component:()=>Promise.all([n.e(268),n.e(794),n.e(286),n.e(535)]).then(n.bind(n,5375))},{path:"/main",name:"main",component:()=>Promise.all([n.e(268),n.e(871),n.e(179)]).then(n.bind(n,8934))},{path:"/",redirect:"/main"},{path:"/:pathMatch(.*)*",name:"404",component:()=>n.e(978).then(n.bind(n,4978))}],i=(0,o.p7)({history:(0,o.r5)(),routes:a});i.beforeEach((e=>{if("/login"!==e.path){const e=s.Z.get("token");if(!e)return"/login"}if("/main"===e.path)return r.Sl.url})),t["Z"]=i},9570:function(e,t,n){"use strict";n.r(t);const o=()=>Promise.all([n.e(88),n.e(587)]).then(n.bind(n,4587));t["default"]={path:"/main/analysis/dashboard",name:"dashboard",component:o,children:[]}},1338:function(e,t,n){"use strict";n.r(t);const o=()=>n.e(975).then(n.bind(n,9975));t["default"]={path:"/main/analysis/dashborder",name:"dashborder",component:o,children:[]}},5768:function(e,t,n){"use strict";n.r(t);const o=()=>n.e(942).then(n.bind(n,5942));t["default"]={path:"/main/analysis/overview",name:"overview",component:o,children:[]}},5925:function(e,t,n){"use strict";n.r(t);const o=()=>n.e(303).then(n.bind(n,4303));t["default"]={path:"/main/product/category",name:"category",component:o,children:[]}},1250:function(e,t,n){"use strict";n.r(t);const o=()=>Promise.all([n.e(268),n.e(794),n.e(871),n.e(933),n.e(286),n.e(88),n.e(688),n.e(484)]).then(n.bind(n,3078));t["default"]={path:"/main/product/goods",name:"goods",component:o,children:[]}},4101:function(e,t,n){"use strict";n.r(t);const o=()=>n.e(246).then(n.bind(n,7246));t["default"]={path:"/main/story/chat",name:"chat",component:o,children:[]}},4411:function(e,t,n){"use strict";n.r(t);const o=()=>n.e(357).then(n.bind(n,9357));t["default"]={path:"/main/story/list",name:"list",component:o,children:[]}},4042:function(e,t,n){"use strict";n.r(t);const o=()=>n.e(726).then(n.bind(n,2726));t["default"]={path:"/main/system/department",name:"department",component:o,children:[]}},535:function(e,t,n){"use strict";n.r(t);const o=()=>Promise.all([n.e(268),n.e(794),n.e(871),n.e(933),n.e(989)]).then(n.bind(n,3989));t["default"]={path:"/main/system/menu",name:"menu",component:o,children:[]}},3222:function(e,t,n){"use strict";n.r(t);const o=()=>Promise.all([n.e(268),n.e(794),n.e(871),n.e(933),n.e(286),n.e(88),n.e(688),n.e(327),n.e(451)]).then(n.bind(n,3879));t["default"]={path:"/main/system/role",name:"role",component:o,children:[]}},8332:function(e,t,n){"use strict";n.r(t);const o=()=>Promise.all([n.e(268),n.e(794),n.e(871),n.e(933),n.e(286),n.e(88),n.e(688),n.e(327),n.e(894)]).then(n.bind(n,574));t["default"]={path:"/main/system/user",name:"user",component:o,children:[]}},1621:function(e,t,n){"use strict";n.d(t,{ZP:function(){return j},zn:function(){return _},oR:function(){return q}});var o=n(3907),r=n(2482),s=n(9669),a=n.n(s),i=n(2578);let c=!0;class u{constructor(e){(0,r.Z)(this,"instance",void 0),(0,r.Z)(this,"interceptors",void 0),(0,r.Z)(this,"loading",void 0),(0,r.Z)(this,"showLoading",!1),this.instance=a().create(e),this.interceptors=e.interceptors,this.showLoading=e.showLoading??c,this.instance.interceptors.request.use(this.interceptors?.requestInterceptor,this.interceptors?.requestErrorInterceptor),this.instance.interceptors.response.use(this.interceptors?.responseInterceptor,this.interceptors?.responseErrorInterceptor),this.instance.interceptors.request.use((e=>(this.showLoading&&(this.loading=i.kN.service({text:"加载中...",spinner:"el-icon-loading",background:"rgba(0,0,0,0.5)",lock:!0,body:!0})),e)),(e=>Promise.reject(e)));let t=this;this.instance.interceptors.response.use((e=>{if(setTimeout((()=>t.loading?.close()),3e3),"-1001"!==e.data.returnCode)return e;window.location.href="/login"}),(e=>Promise.reject(e)))}request(e){return new Promise(((t,n)=>{e.showLoading===!c&&(this.showLoading=!c),e.interceptors?.requestInterceptor&&(e=e.interceptors.requestInterceptor(e)),this.instance.request(e).then((n=>{e.interceptors?.responseInterceptor&&(n=e.interceptors.responseInterceptor(n)),this.showLoading=c,t(n.data)})).catch((e=>{this.showLoading=c,n(e)}))}))}get(e){return this.request({method:"get",...e})}post(e){return this.request({method:"post",...e})}patch(e){return this.request({method:"patch",...e})}delete(e){return this.request({method:"delete",...e})}}var d=u,l=n(4114);const f=new d({baseURL:"http://152.136.185.210:5000",timeout:1e4,showLoading:!0,interceptors:{requestInterceptor:e=>{const t=l.Z.get("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e}}});var m,p=f;function h(e){return p.post({url:m.accountLogin,data:e})}function g(e){return p.get({url:m.userInfo+e})}function y(e){return p.get({url:m.userMnus+e+"/menu"})}(function(e){e["accountLogin"]="/login",e["userInfo"]="/users/",e["userMnus"]="/role/"})(m||(m={}));var b=n(238),v=n(4209);const w={namespaced:!0,state:{token:"",info:{},menus:[],permissions:[]},actions:{async accountLoginAction({commit:e,dispatch:t},n){let o=await h(n);l.Z.set("token",o.data.token),l.Z.set("name",n.name),l.Z.set("password",n.password),e("setToken",o.data.token);let r=await g(o.data.id);l.Z.set("userInfo",r.data),e("setUserInfo",r.data);let s=await y(r.data.id);l.Z.set("userMenus",s.data),e("setUserMenus",s.data),t("getInitialDataAction",null,{root:!0}),await b.Z.push("/main")},getLocalCache({commit:e,dispatch:t}){let n=l.Z.get("token"),o=l.Z.get("userInfo"),r=l.Z.get("userMenus");n&&e("setToken",n),o&&e("setUserInfo",o),r&&e("setUserMenus",r),t("getInitialDataAction",null,{root:!0})}},mutations:{setToken(e,t){e.token=t},setUserInfo(e,t){e.info=t},setUserMenus(e,t){e.menus=t;const n=(0,v.bz)(t);n.forEach((e=>{b.Z.addRoute("main",e)})),e.permissions=(0,v.CZ)(t)}}},C=function(e,t){return p.post({url:e,data:t})},L=function(e,t){return console.log("addPageData",e,t),p.post({url:e,data:t})},k=function(e,t){return p.patch({url:e,data:t})},P=function(e){return p["delete"]({url:e})};function S(e){return e.toLowerCase().replace(/( |^)[a-z]/g,(e=>e.toUpperCase()))}const E={namespaced:!0,state(){return{usersList:[],usersTotalCount:0,roleList:[],roleTotalCount:0,menuList:[],menuTotalCount:0,goodsList:[],goodsTotalCount:0}},actions:{async getPageList({commit:e},t){const n=`/${t.pageName}/list`,{data:o}=await C(n,t.queryInfo);e(`set${S(t.pageName)}List`,o.list),e(`set${S(t.pageName)}TotalCount`,o.totalCount)},async createPageAction({dispatch:e},t){console.log("createPageAction",t);const n=`/${t.pageName}`;await L(n,t.data),e("getPageList",{pageName:t.pageName,queryInfo:{offset:0,size:10}})},async editPageAction({dispatch:e},t){console.log("editPageAction",t);const n=`/${t.pageName}/${t.id}`;await k(n,t.data),e("getPageList",{pageName:t.pageName,queryInfo:{offset:0,size:10}})},async deletePageAction({dispatch:e},t){console.log("deletePageAction",t);const n=`/${t.pageName}/${t.id}`;await P(n),e("getPageList",{pageName:t.pageName,queryInfo:{offset:0,size:10}})}},mutations:{setUsersList(e,t){e.usersList=t},setUsersTotalCount(e,t){e.usersTotalCount=t},setRoleList(e,t){e.roleList=t},setRoleTotalCount(e,t){e.roleTotalCount=t},setGoodsList(e,t){e.goodsList=t},setGoodsTotalCount(e,t){e.goodsTotalCount=t},setMenuList(e,t){e.menuList=t},setMenuTotalCount(e,t){e.menuTotalCount=t}}};var I,T=E;function G(){return p.get({url:I.categoryGoodsCount})}function N(){return p.get({url:I.categoryGoodsSale})}function O(){return p.get({url:I.categoryGoodsFavor})}function Z(){return p.get({url:I.addressGoodsSale})}(function(e){e["categoryGoodsCount"]="/goods/category/count",e["categoryGoodsSale"]="/goods/category/sale",e["categoryGoodsFavor"]="/goods/category/favor",e["addressGoodsSale"]="/goods/address/sale"})(I||(I={}));const D={namespaced:!0,state(){return{categoryGoodsCount:[],categoryGoodsSale:[],categoryGoodsFavor:[],addressGoodsSale:[]}},actions:{async getDashboardDataAction({commit:e},t){const n=await G(),o=await N(),r=await O(),s=await Z();e("setDashboardData",{categoryGoodsCount:n.data,categoryGoodsSale:o.data,categoryGoodsFavor:r.data,addressGoodsSale:s.data})}},mutations:{setDashboardData(e,t){e.categoryGoodsCount=t.categoryGoodsCount,e.categoryGoodsSale=t.categoryGoodsSale,e.categoryGoodsFavor=t.categoryGoodsFavor,e.addressGoodsSale=t.addressGoodsSale}}};var A=D;const M=(0,o.MT)({state:{name:"",age:"",entireDepartments:[],entireRoles:[],entireMenus:[]},getters:{},mutations:{setEntireDepartments(e,t){e.entireDepartments=t},setEntireRoles(e,t){e.entireRoles=t},setEntireMenus(e,t){e.entireMenus=t,e.entireMenus=t}},actions:{async getInitialDataAction({commit:e}){const t=await C("/department/list",{offset:0,size:1e3}),n=await C("/role/list",{offset:0,size:1e3}),o=await C("/menu/list",{});e("setEntireDepartments",t.data.list),e("setEntireRoles",n.data.list),e("setEntireMenus",o.data.list)}},modules:{login:w,system:T,dashboard:A}});function _(){M.dispatch("login/getLocalCache"),M.dispatch("getInitialDataAction")}function q(){return(0,o.oR)()}var j=M},4114:function(e,t){"use strict";class n{set(e,t){localStorage.setItem(e,JSON.stringify(t))}get(e){if(null!==localStorage.getItem(e))return JSON.parse(localStorage.getItem(e))}remove(e){localStorage.removeItem(e)}}t["Z"]=new n},4209:function(e,t,n){"use strict";n.d(t,{CZ:function(){return i},Sl:function(){return o},ZD:function(){return a},bz:function(){return r},fu:function(){return s},v_:function(){return c}});let o=null;function r(e){const t=[],r=[],s=n(4522);s.keys().forEach((e=>{const t=n(7259)("./main"+e.split(".")[1]);r.push(t.default)}));const a=e=>{e.forEach((e=>{if(2===e.type){const n=r.find((t=>t.path===e.url));n&&t.push(n),o||(o=e)}else a(e.children)}))};return a(e),t}function s(e,t,n){for(const o of e)if(1===o.type){const e=s(o.children??[],t);if(e)return n?.push({name:o.name,path:o.url}),n?.push({name:e.name,path:e.url}),e}else if(2===o.type&&o.url===t)return o}function a(e,t){const n=[];return s(e,t,n),n}function i(e){const t=[],n=e=>{e.forEach((e=>{2===e.type||1===e.type?n(e.children??[]):3===e.type&&t.push(e.permission)}))};return n(e),t}function c(e){const t=[],n=e=>{e.forEach((e=>{e.children?n(e.children??[]):t.push(e)}))};return n(e),t}},4522:function(e,t,n){var o={"./analysis/dashboard/dashboard.ts":9570,"./analysis/dashborder/dashborder.ts":1338,"./analysis/overview/overview.ts":5768,"./product/category/category.ts":5925,"./product/goods/goods.ts":1250,"./story/chat/chat.ts":4101,"./story/list/list.ts":4411,"./system/department/department.ts":4042,"./system/menu/menu.ts":535,"./system/role/role.ts":3222,"./system/user/user.ts":8332};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=s,e.exports=r,r.id=4522},7259:function(e,t,n){var o={"./main/analysis/dashboard/dashboard":9570,"./main/analysis/dashboard/dashboard.ts":9570,"./main/analysis/dashborder/dashborder":1338,"./main/analysis/dashborder/dashborder.ts":1338,"./main/analysis/overview/overview":5768,"./main/analysis/overview/overview.ts":5768,"./main/product/category/category":5925,"./main/product/category/category.ts":5925,"./main/product/goods/goods":1250,"./main/product/goods/goods.ts":1250,"./main/story/chat/chat":4101,"./main/story/chat/chat.ts":4101,"./main/story/list/list":4411,"./main/story/list/list.ts":4411,"./main/system/department/department":4042,"./main/system/department/department.ts":4042,"./main/system/menu/menu":535,"./main/system/menu/menu.ts":535,"./main/system/role/role":3222,"./main/system/role/role.ts":3222,"./main/system/user/user":8332,"./main/system/user/user.ts":8332};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=s,e.exports=r,r.id=7259}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={exports:{}};return e[o].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,s){if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],s=e[d][2];for(var i=!0,c=0;c<o.length;c++)(!1&s||a>=s)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(i=!1,s<a&&(a=s));if(i){e.splice(d--,1);var u=r();void 0!==u&&(t=u)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[o,r,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({179:"main",535:"login"}[e]||e)+"."+{88:"417778cd",179:"352cb443",246:"fd5e4449",268:"d501bd62",286:"bf59b9ef",303:"c8f35a21",327:"c0e6de2a",357:"74a12c7c",451:"b2c43523",484:"1e5d600b",535:"31a3c2da",587:"a5261011",688:"b83d5f46",726:"a3504183",794:"e12e5927",871:"4c4bbe29",894:"82f86d77",933:"0d121ed8",942:"21b79067",975:"5d3a1b82",978:"2dbe62d3",989:"ebfdac81"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+({179:"main",535:"login"}[e]||e)+"."+{88:"92581534",179:"e6b53d68",451:"682e953b",484:"08064e3a",535:"642cde41",587:"09cf51b0",688:"833ff043",794:"60775b24",894:"b70a5388",933:"3626b530",978:"805669c5"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="21_demo:";n.l=function(o,r,s,a){if(e[o])e[o].push(r);else{var i,c;if(void 0!==s)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+s){i=l;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+s),i.src=o),e[o]=[r];var f=function(t,n){i.onerror=i.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var s=function(s){if(r.onerror=r.onload=null,"load"===s.type)n();else{var a=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=i,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=s,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],s=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(s===e||s===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],s=r.getAttribute("data-href");if(s===e||s===t)return r}},o=function(o){return new Promise((function(r,s){var a=n.miniCssF(o),i=n.p+a;if(t(a,i))return r();e(o,i,r,s)}))},r={143:0};n.f.miniCss=function(e,t){var n={88:1,179:1,451:1,484:1,535:1,587:1,688:1,794:1,894:1,933:1,978:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else if(88!=t){var s=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=s);var a=n.p+n.u(t),i=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var s=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",i.name="ChunkLoadError",i.type=s,i.request=a,r[1](i)}};n.l(a,c,"chunk-"+t,t)}else e[t]=0},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,s,a=o[0],i=o[1],c=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(c)var d=c(n)}for(t&&t(o);u<a.length;u++)s=a[u],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},o=self["webpackChunk_21_demo"]=self["webpackChunk_21_demo"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(5676)}));o=n.O(o)})();
//# sourceMappingURL=app.f8f30a36.js.map