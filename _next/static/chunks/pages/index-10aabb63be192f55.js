(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1989)}])},8711:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var s=t(5893),i=t(5135),r=t(5301),c=t(665),a=t(4350);function o(e){let{effectiveness:n}=e,t=c.Z[500],o=a.Z[400];return(0,s.jsx)(s.Fragment,{children:function(e){switch(e){case"効果あり":return(0,s.jsx)("div",{children:(0,s.jsx)(i.Z,{sx:{color:t}})});case"効果なし":return(0,s.jsx)("svg",{style:{width:"1.7em",height:"1.7em",fill:"#e57373"},width:"256px",height:"256px",viewBox:"0 0 256 256",id:"Flat",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M152,128c0,14.85938-5.05469,40-24,40s-24-25.14062-24-40,5.05469-40,24-40S152,113.14063,152,128Zm80,0A104,104,0,1,1,128,24,104.12041,104.12041,0,0,1,232,128Zm-64,0c0-27.875-12.36719-56-40-56s-40,28.125-40,56,12.36719,56,40,56S168,155.875,168,128Z"})});case"不明":return(0,s.jsx)("div",{children:(0,s.jsx)(r.Z,{sx:{color:o}})});case"ミックス":return(0,s.jsxs)("svg",{version:"1.1",id:"layer_2",style:{width:"1.7em",height:"1.7em",fill:"#757575"},xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 256 256",children:[(0,s.jsx)("path",{id:"frame",d:"M128,24C70.7,24,24,70.7,24,128s46.7,104,104,104s104-46.7,104-104S185.3,24,128,24z M118.8,212.9 C74,210.6,38.2,173.4,38.2,128S74,45.4,118.8,43.1V212.9z M137.2,212.9V43.1c44.8,2.4,80.5,39.5,80.5,84.9S182,210.6,137.2,212.9z"}),(0,s.jsx)("polygon",{id:"plus",points:"183.9,121.8 183.9,99.6 171.1,99.6 171.1,121.8 150.1,121.8 150.1,134.2 171.1,134.2 171.1,156.4 183.9,156.4 183.9,134.2 204.9,134.2 204.9,121.8 "}),(0,s.jsx)("rect",{id:"minus",x:"51.1",y:"124.7",width:"54.8",height:"12.5"})]});default:return(0,s.jsx)("p",{children:"failed"})}}(n)})}},9644:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var s=t(5893),i=t(6400),r=t(329);function c(e){let{strength:n}=e,t=e=>e>5?5:e<=0?0:e;return(0,s.jsxs)("div",{children:[[...Array(t(n))].map((e,n)=>(0,s.jsx)(i.Z,{sx:{color:"orange"}},n)),[...Array(5-t(n))].map((e,n)=>(0,s.jsx)(r.Z,{sx:{color:"gray"}},n))]})}},6550:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var s=t(5893),i=t(9072),r=t(9630),c=t(8346),a=t(9644),o=t(8711),l=t(5301);function x(e){let{title:n,effectiveness:t,strength:x}=e.table;return(0,s.jsxs)(i.ZP,{container:!0,columns:10,component:"dl",sx:{py:{xs:2,md:1},flexDirection:{xs:"column",md:"row"},gap:{xs:"1rem",md:0}},className:"table-border",children:[(0,s.jsxs)(i.ZP,{item:!0,lg:5,md:12,sx:{display:{xs:"flex",md:"block"},justifyContent:"space-between"},children:[(0,s.jsx)(r.Z,{component:"dt",variant:"body1",sx:{display:{xs:"flex",md:"none"},alignItems:"center",flexBasis:"40%"},children:"評価指標"}),(0,s.jsx)(r.Z,{component:"h3",variant:"body1",sx:{fontWeight:"bold",display:{xs:"flex",md:"block"},flexBasis:"60%",justifyContent:"flex-end",alignItems:"center"},children:n})]}),(0,s.jsxs)(i.ZP,{item:!0,lg:2,md:12,sx:{px:{xs:0,md:"1rem"},display:{xs:"flex",md:"block"},justifyContent:"space-between"},children:[(0,s.jsxs)(r.Z,{component:"dt",variant:"body1",sx:{display:{xs:"flex",md:"none"}},children:["効果",(0,s.jsx)(c.Z,{href:"/EBPMDB/effectiveness",children:(0,s.jsx)(l.Z,{sx:{position:"relative",top:"3px",fontSize:"18px"}})})]}),(0,s.jsx)(o.Z,{effectiveness:t})]}),(0,s.jsxs)(i.ZP,{item:!0,lg:3,md:12,sx:{display:{xs:"flex",md:"block"},justifyContent:"space-between"},children:[(0,s.jsxs)(r.Z,{component:"dt",variant:"body1",sx:{display:{xs:"block",md:"none"}},children:["証拠の強さ",(0,s.jsx)(c.Z,{href:"/EBPMDB/sms",children:(0,s.jsx)(l.Z,{sx:{position:"relative",top:"3px",fontSize:"18px"}})})]}),(0,s.jsx)(a.Z,{strength:x})]})]})}},3447:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var s=t(5893),i=t(3114),r=t(8452),c=t(1953),a=t(6336),o=t(9072),l=t(8346),x=t(9630),d=t(6535);let m=(0,i.Z)({palette:{primary:{light:"#d6d6d6",main:"#fff",dark:"#8e8e8e",contrastText:"#fff"},secondary:{light:"#d6d6d6",main:"#cccccc",dark:"#8e8e8e",contrastText:"#000"}}});function h(){return(0,s.jsx)(r.Z,{theme:m,children:(0,s.jsx)(c.Z,{sx:{backgroundColor:d.Z[800]},children:(0,s.jsxs)(a.Z,{sx:{mx:"auto",mt:"4rem",pt:"2rem",pb:"1rem"},children:[(0,s.jsxs)(o.ZP,{container:!0,children:[(0,s.jsx)(o.ZP,{item:!0,xs:6,sx:{textAlign:"center"},children:(0,s.jsx)(l.Z,{href:"https://www.cyberagent.co.jp/privacy/",target:"_blank",children:(0,s.jsx)(x.Z,{children:"プライバシーポリシー"})})}),(0,s.jsx)(o.ZP,{item:!0,xs:6,sx:{textAlign:"center"},children:(0,s.jsx)(l.Z,{href:"/EBPMDB/committee",children:(0,s.jsx)(x.Z,{children:"運営主体"})})})]}),(0,s.jsx)(x.Z,{component:"p",variant:"body2",sx:{textAlign:"center",color:"#ffffff",mt:"3rem"},children:"Copyright \xa9 CyberAgent, Inc."})]})})})}},4320:function(e,n,t){"use strict";var s=t(5893),i=t(9008),r=t.n(i),c=t(4298),a=t.n(c);let o=e=>{let{title:n="",description:t="EBPMデータベースは、証拠に基づく政策を推進するためのプラットフォームです。",url:i="https://cyberagentailab.github.io/EBPMDB/",imgUrl:c="https://cyberagentailab.github.io/EBPMDB/EBPM_ogp_221107_01.png",imgWidth:o=1280,imgHeight:l=640}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r(),{children:[(0,s.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/EBPMDB/favicon-32x32.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/EBPMDB/favicon-16x16.png"}),(0,s.jsx)("link",{rel:"manifest",href:"/EBPMDB/site.webmanifest"}),(0,s.jsx)("link",{rel:"mask-icon",href:"/EBPMDB/safari-pinned-tab.svg",color:"#5bbad5"}),(0,s.jsx)("meta",{name:"msapplication-TileColor",content:"#da532c"}),(0,s.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,s.jsx)("meta",{property:"og:url",content:i}),(0,s.jsx)("meta",{property:"og:title",content:"".concat(n+(""!==n?" | ":""),"EBPMデータベース")}),(0,s.jsx)("meta",{property:"og:site_name",content:"".concat(n+(""!==n?" | ":""),"EBPMデータベース")}),(0,s.jsx)("meta",{property:"og:description",content:t}),(0,s.jsx)("meta",{property:"og:type",content:"website"}),(0,s.jsx)("meta",{property:"og:image",content:c}),(0,s.jsx)("meta",{property:"og:image:width",content:String(o)}),(0,s.jsx)("meta",{property:"og:image:height",content:String(l)}),(0,s.jsx)("title",{children:"".concat(n+(""!==n?" | ":""),"EBPMデータベース")}),(0,s.jsx)("meta",{name:"description",content:t})]}),(0,s.jsx)(a(),{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-PZVWLS7B4E"}),(0,s.jsx)(a(),{id:"google-analytics-script",dangerouslySetInnerHTML:{__html:"\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n        gtag('config', 'G-PZVWLS7B4E', {\n          page_path: window.location.pathname,\n        });"}})]})};n.Z=o},4416:function(e,n,t){"use strict";t.d(n,{M:function(){return a},n:function(){return o}});var s=t(5893),i=t(6336),r=t(9630),c=t(8346);function a(){return(0,s.jsx)("div",{className:"hero top-image",children:(0,s.jsxs)(i.Z,{sx:{m:"auto"},children:[(0,s.jsx)(r.Z,{component:"h1",variant:"h1",className:"headline",children:"EBPMデータベース"}),(0,s.jsx)(r.Z,{component:"p",variant:"body1",className:"lead",children:"過去の研究成果を確認して、証拠に基づく政策（Evidence Based Policy Making, EBPM）を進めましょう。気になった政策分野のタブをクリックすれば、世界中の研究者が実施した実験や研究成果が確認できます。"})]})})}function o(){return(0,s.jsx)("div",{className:"hero howto-image",children:(0,s.jsxs)(i.Z,{sx:{m:"auto"},children:[(0,s.jsx)(r.Z,{component:"h2",variant:"h2",className:"headline",children:"政策担当者の方へ"}),(0,s.jsxs)(r.Z,{component:"p",variant:"body1",className:"lead",children:["関心のある政策課題を選択すると過去に行われた政策の検証結果を調べることができます。星の数は検証結果の",(0,s.jsx)(c.Z,{href:"/EBPMDB/sms",children:"証拠としての強さ"}),"を示しています。さまざまな課題に対する政策のアイデアや、客観的なデータに基づく政策の優先づけ、議会や住民とのコンセンサスづくりなどにご活用できます。"]}),(0,s.jsx)(r.Z,{component:"p",variant:"body1",className:"lead",children:"専門家による詳しいアドバイスが必要な場合は、お気軽にebpm@cyberagent.co.jpまでお問い合わせください。"}),(0,s.jsx)(r.Z,{component:"h2",variant:"h2",className:"headline",children:"研究者の方へ"}),(0,s.jsxs)(r.Z,{component:"p",variant:"body1",className:"lead",children:["GitHubから新たな記事（レビュー）を自由に投稿することができます。新たな政策課題も大歓迎です。重要な研究やご自身の研究成果を簡単なレビューにして政策担当者に届けましょう。詳細は",(0,s.jsx)("a",{href:"https://github.com/CyberAgentAILab/EBPMDB/",children:"GitHubページ"}),"をご覧ください。"]})]})})}},5631:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var s=t(5893),i=t(5050),r=t(6336),c=t(784),a=t(5084),o=t(1953),l=t(3147);function x(){return(0,s.jsx)(i.Z,{position:"relative",color:"primary",children:(0,s.jsx)(r.Z,{sx:{m:"auto"},children:(0,s.jsxs)(c.Z,{disableGutters:!0,sx:{display:"flex",justifyContent:"space-between"},children:[(0,s.jsx)(a.Z,{sx:{color:"#ffffff"},href:"/EBPMDB/",children:"EBPMDB"}),(0,s.jsx)(o.Z,{sx:{flexGrow:0},children:(0,s.jsx)(a.Z,{href:"https://github.com/CyberAgentAILab/EBPMDB/",target:"_blank",rel:"noopener",children:(0,s.jsx)(l.Z,{sx:{color:"#ffffff"}})})})]})})})}},1989:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return _},default:function(){return D}});var s=t(5893),i=t(4416),r=t(5631),c=t(1953),a=t(918),o=t(9072),l=t(8346),x=t(5301),d=t(3454);function m(){return d.env.ENV,(0,s.jsx)(c.Z,{sx:{position:"sticky",top:0,display:{xs:"none",md:"block"}},children:(0,s.jsx)(a.Z,{elevation:4,children:(0,s.jsxs)(o.ZP,{container:!0,columns:20,children:[(0,s.jsx)(o.ZP,{item:!0,xs:2,sx:{p:"1rem"},children:"分野"}),(0,s.jsx)(o.ZP,{item:!0,xs:8,sx:{p:"1rem"},children:"介入"}),(0,s.jsx)(o.ZP,{item:!0,xs:5,sx:{p:"1rem"},children:"評価指標"}),(0,s.jsxs)(o.ZP,{item:!0,xs:2,sx:{p:"1rem"},children:["効果",(0,s.jsx)(l.Z,{href:"/EBPMDB/effectiveness",children:(0,s.jsx)(x.Z,{sx:{position:"relative",top:"3px",fontSize:"18px"}})})]}),(0,s.jsxs)(o.ZP,{item:!0,xs:3,sx:{p:"1rem"},children:["証拠の強さ",(0,s.jsx)(l.Z,{href:"/EBPMDB/sms",children:(0,s.jsx)(x.Z,{sx:{position:"relative",top:"3px",fontSize:"18px"}})})]})]})})})}var h=t(9630),p=t(6550);let j=e=>{let{doc:n}=e,{title:t,description:i,tables:r,categoryLabel:c}=n,x=n.slug;return(0,s.jsx)(a.Z,{elevation:1,sx:{my:"2rem"},children:(0,s.jsxs)(o.ZP,{container:!0,columns:20,children:[(0,s.jsx)(o.ZP,{item:!0,lg:2,md:12,sx:{px:"1rem",py:"2rem"},children:(0,s.jsx)(h.Z,{component:"div",variant:"body1",children:c})}),(0,s.jsxs)(o.ZP,{item:!0,lg:8,md:12,sx:{px:"1rem",py:{xs:"0",md:"2rem"}},children:[(0,s.jsx)(l.Z,{href:"/EBPMDB/doc/".concat(x),children:(0,s.jsx)(h.Z,{component:"h2",variant:"h5",children:t})}),(0,s.jsx)(h.Z,{component:"p",variant:"body1",sx:{mt:2},children:i})]}),(0,s.jsx)(o.ZP,{item:!0,xs:10,sx:{px:"1rem",py:"2rem",maxWidth:{xs:"100%",md:"50%"},flexBasis:{xs:"100%",md:"50%"}},children:r.map((e,n)=>(0,s.jsx)(p.Z,{table:e},n))})]})})};var f=t(3447),u=t(6336),g=t(9837),Z=t(1359);let y=()=>(0,s.jsx)(u.Z,{sx:{mt:4},children:(0,s.jsxs)(o.ZP,{container:!0,spacing:4,children:[(0,s.jsx)(o.ZP,{item:!0,lg:6,md:12,children:(0,s.jsxs)(g.Z,{children:[(0,s.jsx)(c.Z,{sx:{mt:2,display:{xs:"none",md:"block"}},className:"howto-image guidance-image"}),(0,s.jsxs)(Z.Z,{sx:{p:4},children:[(0,s.jsx)(h.Z,{component:"h2",variant:"h4",sx:{mb:2},children:"政策担当者の方へ"}),(0,s.jsxs)(h.Z,{component:"p",variant:"body1",children:["関心のある政策課題を選択すると過去に行われた政策の検証結果を調べることができます。星の数は検証結果の",(0,s.jsx)(l.Z,{href:"/EBPMDB/sms",children:"証拠としての強さ"}),"を示しています。さまざまな課題に対する政策のアイデアの発掘や、客観的なデータに基づく政策の優先づけ、議会や住民とのコンセンサスづくりなどにご活用できます。"]}),(0,s.jsx)(h.Z,{component:"p",variant:"body1",sx:{mt:1},children:"レビューの作成者による詳しいアドバイスが必要な場合は、お気軽にebpm@cyberagent.co.jpまでお問い合わせください。"})]})]})}),(0,s.jsx)(o.ZP,{item:!0,lg:6,md:12,children:(0,s.jsxs)(g.Z,{sx:{height:"100%"},children:[(0,s.jsx)(c.Z,{sx:{mt:2,display:{xs:"none",md:"block"}},className:"report-image guidance-image"}),(0,s.jsxs)(Z.Z,{sx:{p:4},children:[(0,s.jsx)(h.Z,{component:"h2",variant:"h4",sx:{mb:2},children:"研究者の方へ"}),(0,s.jsx)(h.Z,{component:"p",variant:"body1",children:"GitHubから新たな記事（レビュー）を自由に投稿したり、既存のレビューを修正することができます。政策的な含意のある国内外の研究成果・検証結果をわかりやすく伝えることで学術的知見にもとづいた政策コンサルティング、行政におけるフィールド実験などのコラボレーションが期待できます。今投稿されている政策課題に限らず、あらゆる政策分野のレビューを歓迎します。"}),(0,s.jsxs)(h.Z,{component:"p",variant:"body1",children:["詳細は",(0,s.jsx)(l.Z,{href:"https://github.com/CyberAgentAILab/EBPMDB/",children:"GitHubページ"}),"をご覧ください。"]})]})]})})]})});var b=t(2722),v=t(8661),B=t(5343),P=t(5515),w=t(7056),E=t(7294),M=t(4320);let k=e=>{let{docs:n}=e,t=Array.from(new Map(n.map(e=>[e.category,e])).values()).map(e=>[e.category,e.categoryLabel]),c=[["all","すべて"],...t],[a,o]=(0,E.useState)("all"),[l,x]=(0,E.useState)(n),d=(e,t)=>{o(t),x(n.filter(e=>"all"===t||e.category===t))};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(M.Z,{}),(0,s.jsx)(r.Z,{}),(0,s.jsx)(i.M,{}),(0,s.jsx)(y,{}),(0,s.jsxs)(u.Z,{sx:{m:"auto"},children:[(0,s.jsx)(b.Z,{value:a,onChange:d,sx:{my:{xs:0,md:"2rem"},visibility:{xs:"hidden",md:"visible"},height:{xs:"0",md:"100%"},width:{xs:"0",md:"100%"}},"aria-label":"cagerory select",children:c.map(e=>{let[n,t]=e;return(0,s.jsx)(v.Z,{value:n,label:t},n)})}),(0,s.jsx)(B.Z,{sx:{display:{xs:"block",md:"none"}},children:(0,s.jsx)(P.Z,{id:"category-select",value:a,onChange:e=>d(e,e.target.value),fullWidth:!0,children:c.map(e=>{let[n,t]=e;return(0,s.jsx)(w.Z,{value:n,children:t},n)})})}),(0,s.jsx)(m,{}),l.map((e,n)=>(0,s.jsx)(j,{doc:e},n))]}),(0,s.jsx)(f.Z,{})]})};var _=!0,D=k}},function(e){e.O(0,[527,488,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);