(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[93],{5020:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/committee",function(){return n(2374)}])},3801:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(5893),o=n(2293),i=n(7948),a=n(155),s=n(3321),l=n(7357),c=n(3147);function d(){return(0,r.jsx)(o.Z,{position:"relative",color:"primary",children:(0,r.jsx)(i.Z,{sx:{m:"auto"},children:(0,r.jsxs)(a.Z,{disableGutters:!0,sx:{display:"flex",justifyContent:"space-between"},children:[(0,r.jsx)(s.Z,{sx:{color:"#ffffff"},href:"/EBPMDB/",children:"EBPMDB"}),(0,r.jsx)(l.Z,{sx:{flexGrow:0},children:(0,r.jsx)(s.Z,{href:"https://github.com/CyberAgentAILab/EBPMDB/",target:"_blank",rel:"noopener",children:(0,r.jsx)(c.Z,{sx:{color:"#ffffff"}})})})]})})})}},2374:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r=n(5893),o=n(3801),i=n(7948),a=n(5861),s=n(1048),l=n(2793),c=n(7294),d=n(6010),p=n(7192);var h=c.createContext(),x=n(7623),m=n(1496),u=n(8979),f=n(6087);function g(e){return(0,u.Z)("MuiTable",e)}(0,f.Z)("MuiTable",["root","stickyHeader"]);const y=["className","component","padding","size","stickyHeader"],Z=(0,m.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.stickyHeader&&t.stickyHeader]}})((({theme:e,ownerState:t})=>(0,l.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,l.Z)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"}))),j="table";var v=c.forwardRef((function(e,t){const n=(0,x.Z)({props:e,name:"MuiTable"}),{className:o,component:i=j,padding:a="normal",size:m="medium",stickyHeader:u=!1}=n,f=(0,s.Z)(n,y),v=(0,l.Z)({},n,{component:i,padding:a,size:m,stickyHeader:u}),b=(e=>{const{classes:t,stickyHeader:n}=e,r={root:["root",n&&"stickyHeader"]};return(0,p.Z)(r,g,t)})(v),w=c.useMemo((()=>({padding:a,size:m,stickyHeader:u})),[a,m,u]);return(0,r.jsx)(h.Provider,{value:w,children:(0,r.jsx)(Z,(0,l.Z)({as:i,role:i===j?null:"table",ref:t,className:(0,d.Z)(b.root,o),ownerState:v},f))})})),b=n(1796),w=n(8216);var k=c.createContext();function M(e){return(0,u.Z)("MuiTableCell",e)}var C=(0,f.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);const z=["align","className","component","padding","scope","size","sortDirection","variant"],T=(0,m.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`size${(0,w.Z)(n.size)}`],"normal"!==n.padding&&t[`padding${(0,w.Z)(n.padding)}`],"inherit"!==n.align&&t[`align${(0,w.Z)(n.align)}`],n.stickyHeader&&t.stickyHeader]}})((({theme:e,ownerState:t})=>(0,l.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:`1px solid\n    ${"light"===e.palette.mode?(0,b.$n)((0,b.Fq)(e.palette.divider,1),.88):(0,b._j)((0,b.Fq)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},"head"===t.variant&&{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},"body"===t.variant&&{color:e.palette.text.primary},"footer"===t.variant&&{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},"small"===t.size&&{padding:"6px 16px",[`&.${C.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===t.padding&&{width:48,padding:"0 0 0 4px"},"none"===t.padding&&{padding:0},"left"===t.align&&{textAlign:"left"},"center"===t.align&&{textAlign:"center"},"right"===t.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===t.align&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:e.palette.background.default})));var H=c.forwardRef((function(e,t){const n=(0,x.Z)({props:e,name:"MuiTableCell"}),{align:o="inherit",className:i,component:a,padding:m,scope:u,size:f,sortDirection:g,variant:y}=n,Z=(0,s.Z)(n,z),j=c.useContext(h),v=c.useContext(k),b=v&&"head"===v.variant;let C;C=a||(b?"th":"td");let H=u;!H&&b&&(H="col");const R=y||v&&v.variant,N=(0,l.Z)({},n,{align:o,component:C,padding:m||(j&&j.padding?j.padding:"normal"),size:f||(j&&j.size?j.size:"medium"),sortDirection:g,stickyHeader:"head"===R&&j&&j.stickyHeader,variant:R}),S=(e=>{const{classes:t,variant:n,align:r,padding:o,size:i,stickyHeader:a}=e,s={root:["root",n,a&&"stickyHeader","inherit"!==r&&`align${(0,w.Z)(r)}`,"normal"!==o&&`padding${(0,w.Z)(o)}`,`size${(0,w.Z)(i)}`]};return(0,p.Z)(s,M,t)})(N);let P=null;return g&&(P="asc"===g?"ascending":"descending"),(0,r.jsx)(T,(0,l.Z)({as:C,ref:t,className:(0,d.Z)(S.root,i),"aria-sort":P,scope:H,ownerState:N},Z))}));function R(e){return(0,u.Z)("MuiTableContainer",e)}(0,f.Z)("MuiTableContainer",["root"]);const N=["className","component"],S=(0,m.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"});var P=c.forwardRef((function(e,t){const n=(0,x.Z)({props:e,name:"MuiTableContainer"}),{className:o,component:i="div"}=n,a=(0,s.Z)(n,N),c=(0,l.Z)({},n,{component:i}),h=(e=>{const{classes:t}=e;return(0,p.Z)({root:["root"]},R,t)})(c);return(0,r.jsx)(S,(0,l.Z)({ref:t,as:i,className:(0,d.Z)(h.root,o),ownerState:c},a))}));function _(e){return(0,u.Z)("MuiTableRow",e)}var E=(0,f.Z)("MuiTableRow",["root","selected","hover","head","footer"]);const B=["className","component","hover","selected"],$=(0,m.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.head&&t.head,n.footer&&t.footer]}})((({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${E.hover}:hover`]:{backgroundColor:e.palette.action.hover},[`&.${E.selected}`]:{backgroundColor:(0,b.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:(0,b.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}}))),A="tr";var F=c.forwardRef((function(e,t){const n=(0,x.Z)({props:e,name:"MuiTableRow"}),{className:o,component:i=A,hover:a=!1,selected:h=!1}=n,m=(0,s.Z)(n,B),u=c.useContext(k),f=(0,l.Z)({},n,{component:i,hover:a,selected:h,head:u&&"head"===u.variant,footer:u&&"footer"===u.variant}),g=(e=>{const{classes:t,selected:n,hover:r,head:o,footer:i}=e,a={root:["root",n&&"selected",r&&"hover",o&&"head",i&&"footer"]};return(0,p.Z)(a,_,t)})(f);return(0,r.jsx)($,(0,l.Z)({as:i,ref:t,className:(0,d.Z)(g.root,o),role:i===A?null:"row",ownerState:f},m))})),D=n(5113),O=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{}),(0,r.jsxs)(i.Z,{sx:{m:"auto"},children:[(0,r.jsx)(a.Z,{component:"h2",variant:"h4",sx:{my:2},children:"\u904b\u55b6\u4e3b\u4f53\u306b\u3064\u3044\u3066"}),(0,r.jsx)(a.Z,{component:"p",variant:"body1",sx:{my:8,fontSize:18},children:"EBPM\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u904b\u55b6\u306f\u6709\u5fd7\u306b\u3088\u3063\u3066\u884c\u308f\u308c\u3066\u3044\u307e\u3059\u3002"}),(0,r.jsx)(a.Z,{component:"h2",variant:"h4",sx:{my:2},children:"\u904b\u55b6\u4e3b\u4f53\u30c1\u30fc\u30e0"}),(0,r.jsx)(a.Z,{component:"p",variant:"body1",sx:{my:8,fontSize:18},children:"\u904b\u55b6\u30c1\u30fc\u30e0\u306fEBPM\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u901a\u3058\u305fEBPM\u306e\u666e\u53ca\u30fb\u767a\u5c55\u306b\u5c3d\u529b\u3057\u307e\u3059\u3002"}),(0,r.jsx)(P,{component:D.Z,children:(0,r.jsxs)(v,{sx:{minWidth:300},"aria-label":"simple table",children:[(0,r.jsxs)(F,{children:[(0,r.jsx)(H,{children:"\u6c60\u7530\u8cb4\u662d"}),(0,r.jsx)(H,{children:"\u4e09\u83f1UFJ\u30ea\u30b5\u30fc\u30c1&\u30b3\u30f3\u30b5\u30eb\u30c6\u30a3\u30f3\u30b0"})]}),(0,r.jsxs)(F,{children:[(0,r.jsx)(H,{children:"\u4f0a\u85e4\u5bdb\u6b66"}),(0,r.jsx)(H,{children:"\u682a\u5f0f\u4f1a\u793e\u30b5\u30a4\u30d0\u30fc\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8"})]}),(0,r.jsxs)(F,{children:[(0,r.jsx)(H,{children:"\u4e95\u4e0a\u9818\u4ecb"}),(0,r.jsx)(H,{children:"\u4e09\u83f1UFJ\u30ea\u30b5\u30fc\u30c1&\u30b3\u30f3\u30b5\u30eb\u30c6\u30a3\u30f3\u30b0"})]}),(0,r.jsxs)(F,{children:[(0,r.jsx)(H,{children:"\u5c0f\u6797\u5eb8\u5e73"}),(0,r.jsx)(H,{children:"\u4e09\u83f1UFJ\u30ea\u30b5\u30fc\u30c1&\u30b3\u30f3\u30b5\u30eb\u30c6\u30a3\u30f3\u30b0"})]}),(0,r.jsxs)(F,{children:[(0,r.jsx)(H,{children:"\u7af9\u6d6a\u826f\u5bdb"}),(0,r.jsx)(H,{children:"\u682a\u5f0f\u4f1a\u793e\u30b5\u30a4\u30d0\u30fc\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8"})]}),(0,r.jsxs)(F,{children:[(0,r.jsx)(H,{children:"\u68ee\u8107\u5927\u8f14"}),(0,r.jsx)(H,{children:"\u682a\u5f0f\u4f1a\u793e\u30b5\u30a4\u30d0\u30fc\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8"})]})]})}),(0,r.jsx)(a.Z,{component:"h2",variant:"h4",sx:{my:2},children:"\u30a2\u30c9\u30d0\u30a4\u30b6\u30fc"}),(0,r.jsx)(a.Z,{component:"p",variant:"body1",sx:{my:8,fontSize:18},children:"\u30a2\u30c9\u30d0\u30a4\u30b6\u30fc\u306fEBPM\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u95a2\u3059\u308b\u6280\u8853\u7684\u52a9\u8a00\u3092\u884c\u3044\u307e\u3059\u3002"}),(0,r.jsx)(P,{component:D.Z,children:(0,r.jsxs)(v,{sx:{minWidth:300},"aria-label":"simple table",children:[(0,r.jsxs)(F,{children:[(0,r.jsx)(H,{children:"\u6749\u8c37\u548c\u54c9"}),(0,r.jsx)(H,{children:"\u5ca9\u624b\u770c\u7acb\u5927\u5b66"})]}),(0,r.jsxs)(F,{children:[(0,r.jsx)(H,{children:"\u9ad9\u6a4b\u96c5\u751f"}),(0,r.jsx)(H,{children:"\u4e00\u6a4b\u5927\u5b66"})]}),(0,r.jsxs)(F,{children:[(0,r.jsx)(H,{children:"\u4e2d\u5ba4\u7267\u5b50"}),(0,r.jsx)(H,{children:"\u6176\u61c9\u7fa9\u587e\u5927\u5b66"})]}),(0,r.jsxs)(F,{children:[(0,r.jsx)(H,{children:"\u8302\u6728\u826f\u5e73"}),(0,r.jsx)(H,{children:"\u5357\u30c7\u30f3\u30de\u30fc\u30af\u5927\u5b66"})]}),(0,r.jsxs)(F,{children:[(0,r.jsx)(H,{children:"\u5c71\u53e3\u614e\u592a\u90ce"}),(0,r.jsx)(H,{children:"\u6771\u4eac\u5927\u5b66"})]})]})}),(0,r.jsx)(a.Z,{component:"h2",variant:"h4",sx:{my:2},children:"\u5354\u50cd\u6a5f\u95a2"}),(0,r.jsx)(a.Z,{component:"p",variant:"body1",sx:{my:8,fontSize:18},children:"\u5354\u50cd\u6a5f\u95a2\u306f\u6240\u5c5e\u793e\u54e1\u306eEBPM\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u95a2\u3059\u308b\u6d3b\u52d5\u3092\u652f\u63f4\u3057\u3066\u3044\u307e\u3059\u3002"})]})]})}}},function(e){e.O(0,[477,774,888,179],(function(){return t=5020,e(e.s=t);var t}));var t=e.O();_N_E=t}]);