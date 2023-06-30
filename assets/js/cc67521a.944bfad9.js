"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[484],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=l(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,o(o({ref:e},p),{},{components:n})):r.createElement(g,o({ref:e},p))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[u]="string"==typeof t?t:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2649:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:3},o="Administrator Documentation",s={unversionedId:"administrator-documentation/index",id:"administrator-documentation/index",title:"Administrator Documentation",description:"Operating StuStaPay",source:"@site/docs/administrator-documentation/index.md",sourceDirName:"administrator-documentation",slug:"/administrator-documentation/",permalink:"/docs/administrator-documentation/",draft:!1,editUrl:"https://github.com/stustanet/stustapay/tree/master/website/docs/administrator-documentation/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"App",permalink:"/docs/user-guide/app"},next:{title:"Installation",permalink:"/docs/administrator-documentation/installation/"}},c={},l=[{value:"Operating StuStaPay",id:"operating-stustapay",level:2},{value:"Getting a postgres shell",id:"getting-a-postgres-shell",level:3},{value:"Starting the individual API backends",id:"starting-the-individual-api-backends",level:3}],p={toc:l},u="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"administrator-documentation"},"Administrator Documentation"),(0,a.kt)("h2",{id:"operating-stustapay"},"Operating StuStaPay"),(0,a.kt)("h3",{id:"getting-a-postgres-shell"},"Getting a postgres shell"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"python -m stustapay.core psql\n")),(0,a.kt)("h3",{id:"starting-the-individual-api-backends"},"Starting the individual API backends"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To run the administration backend run",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"python -m stustapay.administration -c server.yaml -vvv api\n")),"You can check out the api documentation at ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:8081/docs"),", (port subject to change depending on your dev config)"),(0,a.kt)("li",{parentName:"ul"},"To run the terminal backend run",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"python -m stustapay.terminalserver -c server.yaml -vvv api\n")),"You can check out the api documentation at ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:8082/docs"),", (port subject to change depending on your dev config)")))}d.isMDXComponent=!0}}]);