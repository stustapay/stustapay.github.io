"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5730],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,y=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4327:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={},o="StuStaPay Simulator",l={unversionedId:"developer-documentation/simulator",id:"developer-documentation/simulator",title:"StuStaPay Simulator",description:"Setup",source:"@site/docs/developer-documentation/simulator.md",sourceDirName:"developer-documentation",slug:"/developer-documentation/simulator",permalink:"/docs/developer-documentation/simulator",draft:!1,editUrl:"https://github.com/stustapay/stustapay/tree/master/website/docs/developer-documentation/simulator.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Developer Documentation",permalink:"/docs/developer-documentation/"},next:{title:"Administration API",permalink:"/docs/api/administration"}},u={},s=[{value:"Setup",id:"setup",level:2},{value:"Simulate",id:"simulate",level:2}],p={toc:s},m="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stustapay-simulator"},"StuStaPay Simulator"),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set up core",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Follow instructions in ",(0,a.kt)("a",{parentName:"li",href:"/docs/administrator-documentation/installation/"},"Installation")," for setting up\nPostgres"),(0,a.kt)("li",{parentName:"ul"},"But no need for the ",(0,a.kt)("inlineCode",{parentName:"li"},"rebuild")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"add_data")," commands, this will be handled by the ",(0,a.kt)("inlineCode",{parentName:"li"},"festivalsimulator")))),(0,a.kt)("li",{parentName:"ul"},"Set up DB: ",(0,a.kt)("inlineCode",{parentName:"li"},"python3 -m stustapay -c server.yaml simulate setup"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Customize simulation parameters if necessary")))),(0,a.kt)("h2",{id:"simulate"},"Simulate"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start API in one terminal: ",(0,a.kt)("inlineCode",{parentName:"li"},"python3 -m stustapay -c server.yaml simulate api")),(0,a.kt)("li",{parentName:"ul"},"Simulate in second terminal: ",(0,a.kt)("inlineCode",{parentName:"li"},"python3 -m stustapay -c server.yaml simulate start"))))}c.isMDXComponent=!0}}]);