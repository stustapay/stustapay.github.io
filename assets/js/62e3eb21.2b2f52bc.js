"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5131],{6298:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=t(5893),a=t(1151);const s={},r="NFC Tag Production",o={id:"user-guide/nfctags",title:"NFC Tag Production",description:"StuStaPay supports the following NFC tags:",source:"@site/docs/user-guide/nfctags.md",sourceDirName:"user-guide",slug:"/user-guide/nfctags",permalink:"/docs/user-guide/nfctags",draft:!1,unlisted:!1,editUrl:"https://github.com/stustapay/stustapay/tree/master/website/docs/user-guide/nfctags.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"User Guide",permalink:"/docs/user-guide/"},next:{title:"Installation",permalink:"/docs/administrator-documentation/installation"}},c={},d=[{value:"Secret Keys",id:"secret-keys",level:2},{value:"Per-Token Secrets",id:"per-token-secrets",level:2},{value:"Feedback from manufacturer",id:"feedback-from-manufacturer",level:2},{value:"Laser",id:"laser",level:2},{value:"Chip Programming",id:"chip-programming",level:2},{value:"MIFARE Ultralight AES MF0AES(H)20",id:"mifare-ultralight-aes-mf0aesh20",level:3},{value:"Programming MF0AES(H)20 with CMAC communication",id:"programming-mf0aesh20-with-cmac-communication",level:4},{value:"Testing",id:"testing",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"nfc-tag-production",children:"NFC Tag Production"}),"\n",(0,i.jsx)(n.p,{children:"StuStaPay supports the following NFC tags:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["MIFARE Ultralight AES (",(0,i.jsx)(n.code,{children:"MF0AES(H)20"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You can either program them using the StuStaPay Android App, or if you need larger quantities, find a supplier who can do the programming and id-lasering for you."}),"\n",(0,i.jsx)(n.h2,{id:"secret-keys",children:"Secret Keys"}),"\n",(0,i.jsx)(n.p,{children:"There are two secret keys (the same for all chips)."}),"\n",(0,i.jsx)(n.p,{children:"To generate those keys:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python3 -m stustapay -c <your-config>.yaml token generate-key\n"})}),"\n",(0,i.jsx)(n.p,{children:"This yields you the generated keys as output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-markdown",children:"Secret keys:\n\nkey0 = <16 bytes from `openssl rand -hex 16`>\nkey1 = <16 different bytes for key1>\n\nSo:\n- key0[0]: <for clarification, the first first byte of key0>\n- key0[15]: <key0 last byte>\n- key1[0]: <key1 first byte>\n- key1[15]: <key1 last byte>\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"key0"})," and ",(0,i.jsx)(n.code,{children:"key1"})," are then used during programming.\nThe file also describes the concrete bytes used in programming below (",(0,i.jsx)(n.code,{children:"key0[0]"}),", ",(0,i.jsx)(n.code,{children:"key1[0]"}),", ...).\nThe last lines are there so the byte order isn't swapped accidentially."]}),"\n",(0,i.jsx)(n.h2,{id:"per-token-secrets",children:"Per-Token Secrets"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python3 -m stustapay -c <your-config>.yaml token generate-nfc --count <number>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This yields a list of ",(0,i.jsx)(n.code,{children:"<number>"})," individual secrets, for example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"index,pin\n0,GKBQDPD3411A\n1,R71J6YEBCF54\n...\n"})}),"\n",(0,i.jsx)(n.p,{children:"This output should be supplied via a csv file to the NFC chip manufacturer.\nSo we provide for each chip:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["individual 12 character random ",(0,i.jsx)(n.code,{children:"pin"})," engraved on back of chip (also stored in chip memory)"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"feedback-from-manufacturer",children:"Feedback from manufacturer"}),"\n",(0,i.jsx)(n.p,{children:"No feedback is required (the list of pins we generated ourselves is used to verify chips and register them in the backend with an associated chip UID)."}),"\n",(0,i.jsx)(n.h2,{id:"laser",children:"Laser"}),"\n",(0,i.jsxs)(n.p,{children:["On the back of the chip, you can let your manufacturer engrave your payment event website url, and the PIN. Users can use this website to TopUp and see their status by logging in with the ",(0,i.jsx)(n.code,{children:"PIN"})," they see on the back of their NFC chip."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"pay.your-stustapay-event-name.de\n<<chip's PIN in uppercase>>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["and additionally, if possible, either a datamatrix or qr-code with this url: ",(0,i.jsx)(n.a,{href:"https://pay.your-stustapay-event-name.de",children:"https://pay.your-stustapay-event-name.de"})]}),"\n",(0,i.jsx)(n.h2,{id:"chip-programming",children:"Chip Programming"}),"\n",(0,i.jsx)(n.p,{children:"Depending on the Chip type the data needs to be flashed into each NFC tag."}),"\n",(0,i.jsx)(n.h3,{id:"mifare-ultralight-aes-mf0aesh20",children:"MIFARE Ultralight AES MF0AES(H)20"}),"\n",(0,i.jsxs)(n.p,{children:["This is the programming description for MIFARE's ",(0,i.jsx)(n.code,{children:"MF0AES(H)20"})," chip."]}),"\n",(0,i.jsxs)(n.p,{children:["To program each chip we need to write a custom message, an ",(0,i.jsx)(n.strong,{children:"individual chip pin"}),", and the ",(0,i.jsx)(n.strong,{children:"two keys"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The short custom message can be customized to whatever your users will read out when scanning their Chip with a smartphone - be creative :) The message is not write-protected intentionally, so user's can update the message to something they like! Other parts of the chip are of course write protected."}),"\n",(0,i.jsxs)(n.p,{children:["These are the necessary chip programming commands (for more info, see the ",(0,i.jsx)(n.code,{children:"MF0AES(H)20"})," data sheet):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plain",children:"Write a short custom message (that can be changed by curious event visitors intentionally):\n\na2 04 'S' 't' 'u' 'S'\na2 05 't' 'a' 'P' 'a'\na2 06 'y' ' ' '-' ' '\na2 07 'h' 'a' 'v' 'e'\na2 08 'f' 'u' 'n' '!'\na2 09 '\\n' 00 00  00\na2 0a 00  00  00  00\na2 0b 00  00  00  00\na2 0c 00  00  00  00\na2 0d 00  00  00  00\na2 0e 00  00  00  00\na2 0f 00  00  00  00\n\nWrite custom individual chip pin from (the `pin` column from the generated PIN list encoded as ASCII):\n\na2 10 pin[0] pin[1] pin[2] pin[3]\na2 11 pin[4] pin[5] pin[6] pin[7]\na2 12 pin[8] pin[9] pin[10] pin[11]\n\n\nWrite key (key0 from the secrets):\n\na2 30 key0[15] key0[14] key0[13] key0[12]\na2 31 key0[11] key0[10] key0[9] key0[8]\na2 32 key0[7] key0[6] key0[5] key0[4]\na2 33 key0[3] key0[2] key0[1] key0[0]\n\n\nWrite UID retrieval key (key1 from the secrets):\n\na2 34 key1[15] key1[14] key1[13] key1[12]\na2 35 key1[11] key1[10] key1[9] key1[8]\na2 36 key1[7] key1[6] key1[5] key1[4]\na2 37 key1[3] key1[2] key1[1] key1[0]\n\n\nNow the programming system has to go into AUTHENTICATED state using key0:\n\n<<AUTHENTICATE with key0>>\n\n\nWrite Configuration:\n\na2 28 03 00 00 00 (lock pages 0x10, 0x11, 0x12, 0x13)\na2 2d e0 00 00 00 (lock keys, lock key lock)\na2 2a 80 05 00 00 (disable reading without auth,\n                   disable access to counter without auth,\n                   set virtual card id to 0x05,\n                   disable failed auth limit)\na2 29 03 00 00 10 (enable cmac, enable random id, protect from page 0x10 onwards)\n"})}),"\n",(0,i.jsx)(n.p,{children:"That's it, the production test should now be quite happy!"}),"\n",(0,i.jsx)(n.p,{children:"This programming leaves the config unlocked, as any additional writes would require an exchange of CMAC-secured messages. See the following section for a sequence of writes that locks the config, but requires the writer to support CMAC."}),"\n",(0,i.jsx)(n.h4,{id:"programming-mf0aesh20-with-cmac-communication",children:"Programming MF0AES(H)20 with CMAC communication"}),"\n",(0,i.jsxs)(n.p,{children:["This is an alternative programming scheme that starts just after ",(0,i.jsx)(n.code,{children:"<<AUTHENTICATED>>"})," in the above commands."]}),"\n",(0,i.jsx)(n.p,{children:'Once CMAC is activated, all communication messages to the have to be "signed".\nSince a manufacturer\'s assembly line most likely does not support CMAC yet, this variant is likely to work in the future only - these programming instructions just have a swapped order for when to enable CMAC.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[... write keys, authenticate]\n\nWrite Configuration (if your assembly line supports CMAC):\n\na2 28 03 00 00 00 (lock pages 0x10, 0x11, 0x12, 0x13)\na2 29 03 00 00 10 (enable cmac, enable random id, protect from page 0x10 onwards)\n\n<Enable CMAC communication for the following NFC commands>\n\na2 2d e0 00 00 00 (lock keys, lock key lock)\na2 2a c0 05 00 00 (disable reading without auth,\n                   lock config,\n                   disable access to counter without auth,\n                   set virtual card id to 0x05,\n                   disable failed auth limit)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,i.jsx)(n.p,{children:"After configuring the secret keys in StuStaPay, you should be able to read and validate a correctly-programmed NFC tag."}),"\n",(0,i.jsx)(n.p,{children:"The StuStaPay App supports running a NFC tag production test which you can send to the manufacturer so they can validate the correct programming on-site before shipping the tags to you."})]})}function l(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var i=t(7294);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);