"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8502],{4218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=n(5893),a=n(1151);const i={},r="Installation",o={id:"administrator-documentation/installation",title:"Installation",description:"Currently only installations on Debian 11 (bookworm) are supported.",source:"@site/docs/administrator-documentation/installation.md",sourceDirName:"administrator-documentation",slug:"/administrator-documentation/installation",permalink:"/docs/administrator-documentation/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/stustapay/stustapay/tree/master/website/docs/administrator-documentation/installation.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"NFC Tag Production",permalink:"/docs/user-guide/nfctags"},next:{title:"TSE",permalink:"/docs/administrator-documentation/tse/"}},l={},d=[{value:"Setup Postgres database",id:"setup-postgres-database",level:2},{value:"Configure StuStaPay",id:"configure-stustapay",level:2},{value:"Configure Bon Generation",id:"configure-bon-generation",level:3},{value:"Test Mode",id:"test-mode",level:3},{value:"Migrate the database",id:"migrate-the-database",level:2},{value:"Configure Nginx",id:"configure-nginx",level:2},{value:"Start the Services",id:"start-the-services",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Currently only installations on ",(0,s.jsx)(t.strong,{children:"Debian 11 (bookworm)"})," are supported."]})}),"\n",(0,s.jsxs)(t.p,{children:["Head over to the ",(0,s.jsx)(t.a,{href:"https://github.com/stustapay/stustapay/releases",children:"GitHub Release Page"})," and download the debian package for the respective version."]}),"\n",(0,s.jsx)(t.p,{children:"Install the debian package"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sudo apt install ./stustapay_<version>+bookworm1_amd64.deb\n"})}),"\n",(0,s.jsx)(t.h2,{id:"setup-postgres-database",children:"Setup Postgres database"}),"\n",(0,s.jsx)(t.p,{children:"Install postgres (either on the same server or on a different server)."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sudo apt install postgresql\n"})}),"\n",(0,s.jsx)(t.p,{children:"Create a new user and database (names can be altered)."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"$ sudo -u postres psql\n> create role stustapay with password '<secure password';\n> create database stustapay owner stustapay;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Update ",(0,s.jsx)(t.code,{children:"/etc/stustapay/config.yaml"})," and update the database connection information."]}),"\n",(0,s.jsxs)(t.p,{children:["In case postgres is not running on the same server as your stustapay installation make sure to configure tls encryption in postgres.\nYou can turn on tls encryption for the stustapay database connection by configuring the tls root certificate and setting ",(0,s.jsx)(t.code,{children:"require_ssl: true"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",metastring:'title="/etc/stustapay/config.yaml"',children:"database:\n  # ...\n  require_ssl: true\n  sslrootcert: </path/to/rootcert>\n"})}),"\n",(0,s.jsx)(t.h2,{id:"configure-stustapay",children:"Configure StuStaPay"}),"\n",(0,s.jsxs)(t.p,{children:["Generate a production application secret e.g. via ",(0,s.jsx)(t.code,{children:"pwgen -s 64 1"})," and configure it."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",metastring:'title="/etc/stustapay/config.yaml"',children:'core:\n  secret_key: "<your secret>"\n'})}),"\n",(0,s.jsx)(t.h3,{id:"configure-bon-generation",children:"Configure Bon Generation"}),"\n",(0,s.jsx)(t.p,{children:"The StuStaPay bon generation is based on rendering Latex templates, it is therefore required to install the respective latex packages"}),"\n",(0,s.jsx)(t.p,{children:"TODO: the following list of texlive package requirements is not up to date and should be added to the debian package"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sudo apt install texlive latexmk\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Additionally you need to decide how many bon generator workers should be spawned. In our testing the bon generation took\nabout ~0.5 seconds per bon. Depending on the number of orders per second you are expecting set the ",(0,s.jsx)(t.code,{children:"n_workers"})," setting accordingly."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",metastring:'title="/etc/stustapay/config.yaml"',children:"bon:\n  n_workers: 4\n"})}),"\n",(0,s.jsx)(t.h3,{id:"test-mode",children:"Test Mode"}),"\n",(0,s.jsxs)(t.p,{children:["The default config will contain the key ",(0,s.jsx)(t.code,{children:"test_mode"})," set to ",(0,s.jsx)(t.code,{children:"true"}),".\nThis is essentially just a flag to enable a red banner in both the administration UI and the customer portal to differentiate between production and test setups. We recommend leaving this enabled for the time being until you're comfortable with the setup and are ready to switch to production mode.\nAn optional message can be configured in this test mode banner via ",(0,s.jsx)(t.code,{children:"test_mode_message"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"migrate-the-database",children:"Migrate the database"}),"\n",(0,s.jsx)(t.p,{children:"Simply run"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sudo -u stustapay stustapay db migrate\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You can always open a ",(0,s.jsx)(t.code,{children:"psql"})," shell to the currently configured database by running"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sudo -u stustapay stustapay db attach\n"})}),"\n",(0,s.jsx)(t.h2,{id:"configure-nginx",children:"Configure Nginx"}),"\n",(0,s.jsx)(t.p,{children:"Installing the debian package will also install some initial nginx config files for the terminal api, admin portal and customer portal."}),"\n",(0,s.jsxs)(t.p,{children:["These can be found under ",(0,s.jsx)(t.code,{children:"/etc/nginx/sites-available/stustapay-*"}),".\nThey are mostly ready, you just need to configure TLS certificates and update the ",(0,s.jsx)(t.code,{children:"server_name"})," settings with your desired domains."]}),"\n",(0,s.jsx)(t.p,{children:"Then just activate them via"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"ln -s /etc/nginx/sites-available/stustapay-* /etc/nginx/sites-enabled/\n"})}),"\n",(0,s.jsx)(t.h2,{id:"start-the-services",children:"Start the Services"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sudo systemctl enable --now stustapay-administration-api.service\nsudo systemctl enable --now stustapay-terminal-api.service\nsudo systemctl enable --now stustapay-customerportal-api.service\nsudo systemctl enable --now stustapay-tse-controller.service\nsudo systemctl enable --now stustapay-payment-processor.service\n# start and enable as many bon generator instances as you've configured bon workers\nsudo systemctl enable --now stustapay-bon-generator@0.service\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var s=n(7294);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);