"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[804],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return a?n.createElement(y,i(i({ref:t},u),{},{components:a})):n.createElement(y,i({ref:t},u))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4722:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={},i="Installation",l={unversionedId:"administrator-documentation/installation/index",id:"administrator-documentation/installation/index",title:"Installation",description:"Core Setup",source:"@site/docs/administrator-documentation/installation/index.md",sourceDirName:"administrator-documentation/installation",slug:"/administrator-documentation/installation/",permalink:"/docs/administrator-documentation/installation/",draft:!1,editUrl:"https://github.com/stustanet/stustapay/tree/master/website/docs/administrator-documentation/installation/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Administrator Documentation",permalink:"/docs/administrator-documentation/"},next:{title:"TSE",permalink:"/docs/administrator-documentation/tse/"}},s={},c=[{value:"Core Setup",id:"core-setup",level:2},{value:"Admin UI Backend",id:"admin-ui-backend",level:2},{value:"Customer Portal Backend",id:"customer-portal-backend",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("h2",{id:"core-setup"},"Core Setup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copy ",(0,r.kt)("inlineCode",{parentName:"li"},"etc/server.yaml")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"server.yaml")," and edit accordingly"),(0,r.kt)("li",{parentName:"ul"},"Setup Postgres role and DB:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"$ sudo -u postgres psql\n> create role <username> with login;\n> create database stustapay owner <username>;\n> \\c stustapay\n> alter schema public owner to <username>;\n"))),(0,r.kt)("li",{parentName:"ul"},"Apply the stustapay schema",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"python -m stustapay.core -c server.yaml -vvv database rebuild\n"))),(0,r.kt)("li",{parentName:"ul"},"To load some test data run the following command. Test data is defined in ",(0,r.kt)("inlineCode",{parentName:"li"},"stustapay/core/schema/example_data/example_data.sql"),".",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"python -m stustapay.core -c server.yaml -vvv database add_data\n")))),(0,r.kt)("h2",{id:"admin-ui-backend"},"Admin UI Backend"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run the backend API server")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"python -m stustapay.administration -c server.yaml -vvv api\n")),(0,r.kt)("h2",{id:"customer-portal-backend"},"Customer Portal Backend"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start API")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"python -m stustapay.customer_portal -c server.yaml -vvv api\n")))}m.isMDXComponent=!0}}]);