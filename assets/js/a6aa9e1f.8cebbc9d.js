"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7643],{1937:(e,t,a)=>{a.d(t,{A:()=>B});a(3696);var r=a(1750),s=a(2646),n=a(2540);function i(e){var t=e.children,a=e.className;return(0,n.jsx)("article",{className:a,children:t})}var l=a(9985);const o={title:"title_Kdtz"};function c(e){var t=e.className,a=(0,s.e7)(),i=a.metadata,c=a.isBlogPostPage,d=i.permalink,m=i.title,g=c?"h1":"h2";return(0,n.jsx)(g,{className:(0,r.A)(o.title,t),children:c?m:(0,n.jsx)(l.A,{to:d,children:m})})}var d=a(7963),m=a(3510),g=a(2393);const u={container:"container_iZB2"};function h(e){var t,a=e.readingTime,r=(t=(0,m.W)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))});return(0,n.jsx)(n.Fragment,{children:r(a)})}function x(e){var t=e.date,a=e.formattedDate;return(0,n.jsx)("time",{dateTime:t,children:a})}function j(){return(0,n.jsx)(n.Fragment,{children:" \xb7 "})}function p(e){var t,a=e.className,i=(0,s.e7)().metadata,l=i.date,o=i.readingTime,c=(0,g.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,n.jsxs)("div",{className:(0,r.A)(u.container,"margin-vert--md",a),children:[(0,n.jsx)(x,{date:l,formattedDate:(t=l,c.format(new Date(t)))}),void 0!==o&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(j,{}),(0,n.jsx)(h,{readingTime:o})]})]})}var v=a(2021);const b={authorCol:"authorCol_v1VX",imageOnlyAuthorRow:"imageOnlyAuthorRow_RxZ1",imageOnlyAuthorCol:"imageOnlyAuthorCol_iWtj"};function A(e){var t=e.className,a=(0,s.e7)(),i=a.metadata.authors,l=a.assets;if(0===i.length)return null;var o=i.every((function(e){return!e.name})),c=1===i.length;return(0,n.jsx)("div",{className:(0,r.A)("margin-top--md margin-bottom--sm",o?b.imageOnlyAuthorRow:"row",t),children:i.map((function(e,t){var a;return(0,n.jsx)("div",{className:(0,r.A)(!o&&(c?"col col--12":"col col--6"),o?b.imageOnlyAuthorCol:b.authorCol),children:(0,n.jsx)(v.A,{author:Object.assign({},e,{imageURL:null!=(a=l.authorsImageUrls[t])?a:e.imageURL})})},t)}))})}function f(){return(0,n.jsxs)("header",{children:[(0,n.jsx)(c,{}),(0,n.jsx)(p,{}),(0,n.jsx)(A,{})]})}var N=a(99),T=a(5543);function w(e){var t=e.children,a=e.className,i=(0,s.e7)().isBlogPostPage;return(0,n.jsx)("div",{id:i?N.LU:void 0,className:(0,r.A)("markdown",a),children:(0,n.jsx)(T.A,{children:t})})}var P=a(7404),k=a(5979),y=a(1864),O=a(9257),R=["blogPostTitle"];function U(){return(0,n.jsx)("b",{children:(0,n.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function C(e){var t=e.blogPostTitle,a=(0,O.A)(e,R);return(0,n.jsx)(l.A,Object.assign({"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a,{children:(0,n.jsx)(U,{})}))}function _(){var e=(0,s.e7)(),t=e.metadata,a=e.isBlogPostPage,i=t.tags,l=t.title,o=t.editUrl,c=t.hasTruncateMarker,d=t.lastUpdatedBy,m=t.lastUpdatedAt,g=!a&&c,u=i.length>0;if(!(u||g||o))return null;if(a){var h=!!(o||m||d);return(0,n.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,n.jsx)("div",{className:(0,r.A)("row","margin-top--sm",P.G.blog.blogFooterEditMetaRow),children:(0,n.jsx)("div",{className:"col",children:(0,n.jsx)(y.A,{tags:i})})}),h&&(0,n.jsx)(k.A,{className:(0,r.A)("margin-top--sm",P.G.blog.blogFooterEditMetaRow),editUrl:o,lastUpdatedAt:m,lastUpdatedBy:d})]})}return(0,n.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,n.jsx)("div",{className:(0,r.A)("col",{"col--9":g}),children:(0,n.jsx)(y.A,{tags:i})}),g&&(0,n.jsx)("div",{className:(0,r.A)("col text--right",{"col--3":u}),children:(0,n.jsx)(C,{blogPostTitle:l,to:t.permalink})})]})}function B(e){var t=e.children,a=e.className,l=(0,s.e7)().isBlogPostPage?void 0:"margin-bottom--xl";return(0,n.jsxs)(i,{className:(0,r.A)(l,a),children:[(0,n.jsx)(f,{}),(0,n.jsx)(w,{children:t}),(0,n.jsx)(_,{})]})}},2629:(e,t,a)=>{a.d(t,{A:()=>i});a(3696);var r=a(2646),s=a(1937),n=a(2540);function i(e){var t=e.items,a=e.component,i=void 0===a?s.A:a;return(0,n.jsx)(n.Fragment,{children:t.map((function(e){var t=e.content;return(0,n.jsx)(r.in,{content:t,children:(0,n.jsx)(i,{children:(0,n.jsx)(t,{})})},t.metadata.permalink)}))})}},5592:(e,t,a)=>{a.d(t,{A:()=>i});a(3696);var r=a(7963),s=a(6217),n=a(2540);function i(e){var t=e.metadata,a=t.previousPage,i=t.nextPage;return(0,n.jsxs)("nav",{className:"pagination-nav","aria-label":(0,r.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,n.jsx)(s.A,{permalink:a,title:(0,n.jsx)(r.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),i&&(0,n.jsx)(s.A,{permalink:i,title:(0,n.jsx)(r.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},7391:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});a(3696);var r=a(1750),s=a(4669),n=a(9066),i=a(7404),l=a(1710),o=a(5592),c=a(8004),d=a(2629),m=a(7943),g=a(2646),u=a(2540);function h(e){var t=(0,g.kJ)(e);return(0,u.jsx)(m.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function x(e){var t=e.metadata,a=(0,s.A)().siteConfig.title,r=t.blogDescription,i=t.blogTitle,l="/"===t.permalink?a:i;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n.be,{title:l,description:r}),(0,u.jsx)(c.A,{tag:"blog_posts_list"})]})}function j(e){var t=e.metadata,a=e.items,r=e.sidebar;return(0,u.jsxs)(l.A,{sidebar:r,children:[(0,u.jsx)(d.A,{items:a}),(0,u.jsx)(o.A,{metadata:t})]})}function p(e){return(0,u.jsxs)(n.e3,{className:(0,r.A)(i.G.wrapper.blogPages,i.G.page.blogListPage),children:[(0,u.jsx)(x,Object.assign({},e)),(0,u.jsx)(h,Object.assign({},e)),(0,u.jsx)(j,Object.assign({},e))]})}}}]);