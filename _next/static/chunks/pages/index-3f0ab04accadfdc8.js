(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(9605)}])},8711:function(e,n,s){"use strict";s.d(n,{Z:function(){return l}});var t=s(5893),i=s(5135),r=s(5301),c=s(665),a=s(4350);function l(e){let{effectiveness:n}=e,s=c.Z[500],l=a.Z[400];return(0,t.jsx)(t.Fragment,{children:function(e){switch(e){case"効果あり":return(0,t.jsx)("div",{children:(0,t.jsx)(i.Z,{sx:{color:s}})});case"効果なし":return(0,t.jsx)("svg",{style:{width:"1.7em",height:"1.7em",fill:"#e57373"},width:"256px",height:"256px",viewBox:"0 0 256 256",id:"Flat",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M152,128c0,14.85938-5.05469,40-24,40s-24-25.14062-24-40,5.05469-40,24-40S152,113.14063,152,128Zm80,0A104,104,0,1,1,128,24,104.12041,104.12041,0,0,1,232,128Zm-64,0c0-27.875-12.36719-56-40-56s-40,28.125-40,56,12.36719,56,40,56S168,155.875,168,128Z"})});case"不明":return(0,t.jsx)("div",{children:(0,t.jsx)(r.Z,{sx:{color:l}})});case"ミックス":return(0,t.jsxs)("svg",{version:"1.1",id:"layer_2",style:{width:"1.7em",height:"1.7em",fill:"#757575"},xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 256 256",children:[(0,t.jsx)("path",{id:"frame",d:"M128,24C70.7,24,24,70.7,24,128s46.7,104,104,104s104-46.7,104-104S185.3,24,128,24z M118.8,212.9 C74,210.6,38.2,173.4,38.2,128S74,45.4,118.8,43.1V212.9z M137.2,212.9V43.1c44.8,2.4,80.5,39.5,80.5,84.9S182,210.6,137.2,212.9z"}),(0,t.jsx)("polygon",{id:"plus",points:"183.9,121.8 183.9,99.6 171.1,99.6 171.1,121.8 150.1,121.8 150.1,134.2 171.1,134.2 171.1,156.4 183.9,156.4 183.9,134.2 204.9,134.2 204.9,121.8 "}),(0,t.jsx)("rect",{id:"minus",x:"51.1",y:"124.7",width:"54.8",height:"12.5"})]});default:return(0,t.jsx)("p",{children:"failed"})}}(n)})}},9644:function(e,n,s){"use strict";s.d(n,{Z:function(){return c}});var t=s(5893),i=s(6400),r=s(329);function c(e){let{strength:n}=e,s=e=>e>5?5:e<=0?0:e;return(0,t.jsxs)("div",{children:[[...Array(s(n))].map((e,n)=>(0,t.jsx)(i.Z,{sx:{color:"orange"}},n)),[...Array(5-s(n))].map((e,n)=>(0,t.jsx)(r.Z,{sx:{color:"gray"}},n))]})}},6550:function(e,n,s){"use strict";s.d(n,{Z:function(){return o}});var t=s(5893),i=s(9072),r=s(9630),c=s(8346),a=s(9644),l=s(8711),x=s(5301);function o(e){let{title:n,effectiveness:s,strength:o}=e.table;return(0,t.jsxs)(i.ZP,{container:!0,columns:10,component:"dl",sx:{py:{xs:2,md:1},flexDirection:{xs:"column",md:"row"},gap:{xs:"1rem",md:0}},className:"table-border",children:[(0,t.jsxs)(i.ZP,{item:!0,lg:5,md:12,sx:{display:{xs:"flex",md:"block"},justifyContent:"space-between"},children:[(0,t.jsx)(r.Z,{component:"dt",variant:"body1",sx:{display:{xs:"flex",md:"none"},alignItems:"center",flexBasis:"40%"},children:"評価指標"}),(0,t.jsx)(r.Z,{component:"h3",variant:"body1",sx:{fontWeight:"bold",display:{xs:"flex",md:"block"},flexBasis:"60%",justifyContent:"flex-end",alignItems:"center"},children:n})]}),(0,t.jsxs)(i.ZP,{item:!0,lg:2,md:12,sx:{px:{xs:0,md:"1rem"},display:{xs:"flex",md:"block"},justifyContent:"space-between"},children:[(0,t.jsxs)(r.Z,{component:"dt",variant:"body1",sx:{display:{xs:"flex",md:"none"}},children:["効果",(0,t.jsx)(c.Z,{href:"/EBPMDB/effectiveness",children:(0,t.jsx)(x.Z,{sx:{position:"relative",top:"3px",fontSize:"18px"}})})]}),(0,t.jsx)(l.Z,{effectiveness:s})]}),(0,t.jsxs)(i.ZP,{item:!0,lg:3,md:12,sx:{display:{xs:"flex",md:"block"},justifyContent:"space-between"},children:[(0,t.jsxs)(r.Z,{component:"dt",variant:"body1",sx:{display:{xs:"block",md:"none"}},children:["証拠の強さ",(0,t.jsx)(c.Z,{href:"/EBPMDB/sms",children:(0,t.jsx)(x.Z,{sx:{position:"relative",top:"3px",fontSize:"18px"}})})]}),(0,t.jsx)(a.Z,{strength:o})]})]})}},3447:function(e,n,s){"use strict";s.d(n,{Z:function(){return m}});var t=s(5893),i=s(3114),r=s(8452),c=s(1953),a=s(6336),l=s(9072),x=s(8346),o=s(9630),d=s(6535);let h=(0,i.Z)({palette:{primary:{light:"#d6d6d6",main:"#fff",dark:"#8e8e8e",contrastText:"#fff"},secondary:{light:"#d6d6d6",main:"#cccccc",dark:"#8e8e8e",contrastText:"#000"}}});function m(){return(0,t.jsx)(r.Z,{theme:h,children:(0,t.jsx)(c.Z,{sx:{backgroundColor:d.Z[800]},children:(0,t.jsxs)(a.Z,{sx:{mx:"auto",mt:"4rem",pt:"2rem",pb:"1rem"},children:[(0,t.jsxs)(l.ZP,{container:!0,children:[(0,t.jsx)(l.ZP,{item:!0,xs:6,sx:{textAlign:"center"},children:(0,t.jsx)(x.Z,{href:"https://www.cyberagent.co.jp/privacy/",target:"_blank",children:(0,t.jsx)(o.Z,{children:"プライバシーポリシー"})})}),(0,t.jsx)(l.ZP,{item:!0,xs:6,sx:{textAlign:"center"},children:(0,t.jsx)(x.Z,{href:"/EBPMDB/committee",children:(0,t.jsx)(o.Z,{children:"運営主体"})})})]}),(0,t.jsx)(o.Z,{component:"p",variant:"body2",sx:{textAlign:"center",color:"#ffffff",mt:"3rem"},children:"Copyright \xa9 CyberAgent, Inc."})]})})})}},4416:function(e,n,s){"use strict";s.d(n,{M:function(){return a},n:function(){return l}});var t=s(5893),i=s(6336),r=s(9630),c=s(8346);function a(){return(0,t.jsx)("div",{className:"hero top-image",children:(0,t.jsxs)(i.Z,{sx:{m:"auto"},children:[(0,t.jsx)(r.Z,{component:"h1",variant:"h1",className:"headline",children:"EBPMデータベース"}),(0,t.jsx)(r.Z,{component:"p",variant:"body1",className:"lead",children:"過去の研究成果を確認して、証拠に基づく政策（Evidence Based Policy Making, EBPM）を進めましょう。気になった政策分野のタブをクリックすれば、世界中の研究者が実施した実験や研究成果が確認できます。"})]})})}function l(){return(0,t.jsx)("div",{className:"hero howto-image",children:(0,t.jsxs)(i.Z,{sx:{m:"auto"},children:[(0,t.jsx)(r.Z,{component:"h2",variant:"h2",className:"headline",children:"政策担当者の方へ"}),(0,t.jsxs)(r.Z,{component:"p",variant:"body1",className:"lead",children:["関心のある政策課題を選択すると過去に行われた政策の検証結果を調べることができます。星の数は検証結果の",(0,t.jsx)(c.Z,{href:"/EBPMDB/sms",children:"証拠としての強さ"}),"を示しています。さまざまな課題に対する政策のアイデアや、客観的なデータに基づく政策の優先づけ、議会や住民とのコンセンサスづくりなどにご活用できます。"]}),(0,t.jsx)(r.Z,{component:"p",variant:"body1",className:"lead",children:"専門家による詳しいアドバイスが必要な場合は、お気軽にebpm@cyberagent.co.jpまでお問い合わせください。"}),(0,t.jsx)(r.Z,{component:"h2",variant:"h2",className:"headline",children:"研究者の方へ"}),(0,t.jsxs)(r.Z,{component:"p",variant:"body1",className:"lead",children:["GitHubから新たな記事（レビュー）を自由に投稿することができます。新たな政策課題も大歓迎です。重要な研究やご自身の研究成果を簡単なレビューにして政策担当者に届けましょう。詳細は",(0,t.jsx)("a",{href:"https://github.com/CyberAgentAILab/EBPMDB/",children:"GitHubページ"}),"をご覧ください。"]})]})})}},5631:function(e,n,s){"use strict";s.d(n,{Z:function(){return o}});var t=s(5893),i=s(5050),r=s(6336),c=s(784),a=s(5084),l=s(1953),x=s(3147);function o(){return(0,t.jsx)(i.Z,{position:"relative",color:"primary",children:(0,t.jsx)(r.Z,{sx:{m:"auto"},children:(0,t.jsxs)(c.Z,{disableGutters:!0,sx:{display:"flex",justifyContent:"space-between"},children:[(0,t.jsx)(a.Z,{sx:{color:"#ffffff"},href:"/EBPMDB/",children:"EBPMDB"}),(0,t.jsx)(l.Z,{sx:{flexGrow:0},children:(0,t.jsx)(a.Z,{href:"https://github.com/CyberAgentAILab/EBPMDB/",target:"_blank",rel:"noopener",children:(0,t.jsx)(x.Z,{sx:{color:"#ffffff"}})})})]})})})}},9605:function(e,n,s){"use strict";s.r(n),s.d(n,{__N_SSG:function(){return N},default:function(){return C}});var t=s(5893),i=s(4416),r=s(5631),c=s(1953),a=s(918),l=s(9072),x=s(8346),o=s(5301),d=s(3454);function h(){return d.env.ENV,(0,t.jsx)(c.Z,{sx:{position:"sticky",top:0,display:{xs:"none",md:"block"}},children:(0,t.jsx)(a.Z,{elevation:4,children:(0,t.jsxs)(l.ZP,{container:!0,columns:20,children:[(0,t.jsx)(l.ZP,{item:!0,xs:2,sx:{p:"1rem"},children:"分野"}),(0,t.jsx)(l.ZP,{item:!0,xs:8,sx:{p:"1rem"},children:"介入"}),(0,t.jsx)(l.ZP,{item:!0,xs:5,sx:{p:"1rem"},children:"評価指標"}),(0,t.jsxs)(l.ZP,{item:!0,xs:2,sx:{p:"1rem"},children:["効果",(0,t.jsx)(x.Z,{href:"/EBPMDB/effectiveness",children:(0,t.jsx)(o.Z,{sx:{position:"relative",top:"3px",fontSize:"18px"}})})]}),(0,t.jsxs)(l.ZP,{item:!0,xs:3,sx:{p:"1rem"},children:["証拠の強さ",(0,t.jsx)(x.Z,{href:"/EBPMDB/sms",children:(0,t.jsx)(o.Z,{sx:{position:"relative",top:"3px",fontSize:"18px"}})})]})]})})})}var m=s(9630),p=s(6550);let j=e=>{let{doc:n}=e,{title:s,description:i,tables:r,categoryLabel:c}=n,o=n.slug;return(0,t.jsx)(a.Z,{elevation:1,sx:{my:"2rem"},children:(0,t.jsxs)(l.ZP,{container:!0,columns:20,children:[(0,t.jsx)(l.ZP,{item:!0,lg:2,md:12,sx:{px:"1rem",py:"2rem"},children:(0,t.jsx)(m.Z,{component:"div",variant:"body1",children:c})}),(0,t.jsxs)(l.ZP,{item:!0,lg:8,md:12,sx:{px:"1rem",py:{xs:"0",md:"2rem"}},children:[(0,t.jsx)(x.Z,{href:"/EBPMDB/doc/".concat(o),children:(0,t.jsx)(m.Z,{component:"h2",variant:"h5",children:s})}),(0,t.jsx)(m.Z,{component:"p",variant:"body1",sx:{mt:2},children:i})]}),(0,t.jsx)(l.ZP,{item:!0,xs:10,sx:{px:"1rem",py:"2rem",maxWidth:{xs:"100%",md:"50%"},flexBasis:{xs:"100%",md:"50%"}},children:r.map((e,n)=>(0,t.jsx)(p.Z,{table:e},n))})]})})};var f=s(3447),u=s(6336),Z=s(9837),g=s(1359);let y=()=>(0,t.jsx)(u.Z,{sx:{mt:4},children:(0,t.jsxs)(l.ZP,{container:!0,spacing:4,children:[(0,t.jsx)(l.ZP,{item:!0,lg:6,md:12,children:(0,t.jsxs)(Z.Z,{children:[(0,t.jsx)(c.Z,{sx:{mt:2,display:{xs:"none",md:"block"}},className:"howto-image guidance-image"}),(0,t.jsxs)(g.Z,{sx:{p:4},children:[(0,t.jsx)(m.Z,{component:"h2",variant:"h4",sx:{mb:2},children:"政策担当者の方へ"}),(0,t.jsxs)(m.Z,{component:"p",variant:"body1",children:["関心のある政策課題を選択すると過去に行われた政策の検証結果を調べることができます。星の数は検証結果の",(0,t.jsx)(x.Z,{href:"/EBPMDB/sms",children:"証拠としての強さ"}),"を示しています。さまざまな課題に対する政策のアイデアの発掘や、客観的なデータに基づく政策の優先づけ、議会や住民とのコンセンサスづくりなどにご活用できます。"]}),(0,t.jsx)(m.Z,{component:"p",variant:"body1",sx:{mt:1},children:"レビューの作成者による詳しいアドバイスが必要な場合は、お気軽にebpm@cyberagent.co.jpまでお問い合わせください。"})]})]})}),(0,t.jsx)(l.ZP,{item:!0,lg:6,md:12,children:(0,t.jsxs)(Z.Z,{sx:{height:"100%"},children:[(0,t.jsx)(c.Z,{sx:{mt:2,display:{xs:"none",md:"block"}},className:"report-image guidance-image"}),(0,t.jsxs)(g.Z,{sx:{p:4},children:[(0,t.jsx)(m.Z,{component:"h2",variant:"h4",sx:{mb:2},children:"研究者の方へ"}),(0,t.jsx)(m.Z,{component:"p",variant:"body1",children:"GitHubから新たな記事（レビュー）を自由に投稿したり、既存のレビューを修正することができます。政策的な含意のある国内外の研究成果・検証結果をわかりやすく伝えることで学術的知見にもとづいた政策コンサルティング、行政におけるフィールド実験などのコラボレーションが期待できます。今投稿されている政策課題に限らず、あらゆる政策分野のレビューを歓迎します。"}),(0,t.jsxs)(m.Z,{component:"p",variant:"body1",children:["詳細は",(0,t.jsx)(x.Z,{href:"https://github.com/CyberAgentAILab/EBPMDB/",children:"GitHubページ"}),"をご覧ください。"]})]})]})})]})});var b=s(2722),v=s(8661),w=s(5343),B=s(5515),P=s(7056),E=s(7294),M=s(9008),k=s.n(M);let _=()=>(0,t.jsx)("div",{children:(0,t.jsxs)(k(),{children:[(0,t.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-PZVWLS7B4E"}),(0,t.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n                  window.dataLayer = window.dataLayer || [];\n                  function gtag(){dataLayer.push(arguments);}\n                  gtag('js', new Date());\n                  gtag('config', 'G-PZVWLS7B4E', {\n                    page_path: window.location.pathname,\n                  });"}}),(0,t.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/EBPMDB/favicon-32x32.png"}),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/EBPMDB/favicon-16x16.png"}),(0,t.jsx)("link",{rel:"manifest",href:"/EBPMDB/site.webmanifest"}),(0,t.jsx)("link",{rel:"mask-icon",href:"/EBPMDB/safari-pinned-tab.svg",color:"#5bbad5"}),(0,t.jsx)("meta",{name:"msapplication-TileColor",content:"#da532c"}),(0,t.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,t.jsx)("title",{children:"EBPMデータベース"})]})}),D=e=>{let{docs:n}=e,s=Array.from(new Map(n.map(e=>[e.category,e])).values()).map(e=>[e.category,e.categoryLabel]),c=[["all","すべて"],...s],[a,l]=(0,E.useState)("all"),[x,o]=(0,E.useState)(n),d=(e,s)=>{l(s),o(n.filter(e=>"all"===s||e.category===s))};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(_,{}),(0,t.jsx)(r.Z,{}),(0,t.jsx)(i.M,{}),(0,t.jsx)(y,{}),(0,t.jsxs)(u.Z,{sx:{m:"auto"},children:[(0,t.jsx)(b.Z,{value:a,onChange:d,sx:{my:{xs:0,md:"2rem"},visibility:{xs:"hidden",md:"visible"},height:{xs:"0",md:"100%"},width:{xs:"0",md:"100%"}},"aria-label":"cagerory select",children:c.map(e=>{let[n,s]=e;return(0,t.jsx)(v.Z,{value:n,label:s},n)})}),(0,t.jsx)(w.Z,{sx:{display:{xs:"block",md:"none"}},children:(0,t.jsx)(B.Z,{id:"category-select",value:a,onChange:e=>d(e,e.target.value),fullWidth:!0,children:c.map(e=>{let[n,s]=e;return(0,t.jsx)(P.Z,{value:n,children:s},n)})})}),(0,t.jsx)(h,{}),x.map((e,n)=>(0,t.jsx)(j,{doc:e},n))]}),(0,t.jsx)(f.Z,{})]})};var N=!0,C=D}},function(e){e.O(0,[527,854,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);