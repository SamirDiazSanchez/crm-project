(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{4478:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n(9587)}])},184:function(e,s,n){"use strict";n.d(s,{A:function(){return d}});var a=n(5893),i=n(1159),r=function(e){var s=e.title,n=(0,i.a)().removeUser;return(0,a.jsxs)("nav",{className:"main-header navbar navbar-expand navbar-white navbar-light",children:[(0,a.jsxs)("ul",{className:"navbar-nav",children:[(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)("a",{className:"nav-link","data-widget":"pushmenu",href:"#",role:"button",children:(0,a.jsx)("i",{className:"fas fa-bars"})})}),(0,a.jsx)("li",{className:"nav-item d-none d-sm-inline-block",children:(0,a.jsx)("a",{className:"nav-link",children:s})})]}),(0,a.jsx)("ul",{className:"navbar-nav ml-auto",children:(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsxs)("a",{href:"",className:"nav-link",onClick:function(e){e.preventDefault(),n()},children:[(0,a.jsx)("i",{className:"ion-log-out pe-2"}),"LogOut"]})})})]})},c=n(1664),l=n.n(c),t=n(1163),o=function(){var e=(0,t.useRouter)(),s=function(s){return"nav-link "+(e.pathname==s?"active":"")};return(0,a.jsxs)("aside",{className:"main-sidebar sidebar-dark-primary elevation-4",children:[(0,a.jsxs)("a",{className:"brand-link",children:[(0,a.jsx)("img",{src:"dist/img/sipe.png",alt:"AdminLTE Logo",className:"brand-image img-circle elevation-3",style:{opacity:".8"}}),(0,a.jsx)("span",{className:"brand-text font-weight-light",children:"CRM"})]}),(0,a.jsx)("div",{className:"sidebar",children:(0,a.jsx)("nav",{className:"mt-2",children:(0,a.jsxs)("ul",{className:"nav nav-pills nav-sidebar flex-column","data-widget":"treeview",role:"menu","data-accordion":"false",children:[(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(l(),{href:"/dashboard",children:(0,a.jsxs)("a",{className:s("/dashboard"),children:[(0,a.jsx)("i",{className:"nav-icon ion-home"}),(0,a.jsx)("p",{children:"Home"})]})})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(l(),{href:"/clients",children:(0,a.jsxs)("a",{className:s("/clients"),children:[(0,a.jsx)("i",{className:"nav-icon ion-person-stalker"}),(0,a.jsx)("p",{children:"Clients"})]})})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(l(),{href:"/projects",children:(0,a.jsxs)("a",{className:s("/projects"),children:[(0,a.jsx)("i",{className:"nav-icon ion-document"}),(0,a.jsx)("p",{children:"Projects"})]})})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(l(),{href:"/users",children:(0,a.jsxs)("a",{className:s("/users"),children:[(0,a.jsx)("i",{className:"nav-icon ion-person"}),(0,a.jsx)("p",{children:"Users"})]})})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(l(),{href:"/account",children:(0,a.jsxs)("a",{className:s("/account"),children:[(0,a.jsx)("i",{className:"nav-icon ion-ios-gear"}),(0,a.jsx)("p",{children:"Account"})]})})})]})})})]})},d=function(e){var s=e.children,n=e.title;return(0,a.jsxs)("div",{className:"wrapper",children:[(0,a.jsx)(r,{title:n}),(0,a.jsx)(o,{}),(0,a.jsx)("div",{className:"content-wrapper",children:(0,a.jsx)("div",{className:"content",children:(0,a.jsx)("div",{className:"container-fluid pt-1",children:s})})}),(0,a.jsxs)("footer",{className:"main-footer",children:[(0,a.jsxs)("strong",{children:["Copyright \xa9 2014-2021 ",(0,a.jsx)("a",{href:"https://adminlte.io",children:"AdminLTE.io"}),"."]}),"All rights reserved.",(0,a.jsxs)("div",{className:"float-right d-none d-sm-inline-block",children:[(0,a.jsx)("b",{children:"Version"})," 3.2.0"]})]})]})}},1159:function(e,s,n){"use strict";n.d(s,{a:function(){return r}});var a=n(1163),i=n(7294),r=function(){var e=(0,i.useState)(null),s=e[0],n=e[1],r=(0,a.useRouter)().push,c=function(){var e=window.localStorage.getItem("CRMProject");try{e=JSON.parse(e),n((function(s){return e}))}catch(s){console.error(s)}};return(0,i.useEffect)((function(){c()}),[]),{userData:s,setUser:function(e){var s=JSON.stringify(e);window.localStorage.setItem("CRMProject",s),c()},removeUser:function(){window.localStorage.removeItem("CRMProject"),c(),r("/")}}}},9587:function(e,s,n){"use strict";n.r(s);var a=n(5893),i=n(184),r=n(450),c=n(7294);s.default=function(){var e=(0,c.useState)(!1),s=e[0],n=e[1],l=(0,c.useState)(!1),t=l[0],o=l[1],d=function(){n(!s)};return(0,a.jsxs)(i.A,{title:"Projects",children:[(0,a.jsx)(r.X2,{className:"py-2 justify-content-end",children:(0,a.jsxs)(r.JX,{md:2,children:[(0,a.jsx)(r.zx,{color:"info",size:"sm",block:!0,onClick:d,children:"Add Project"}),(0,a.jsxs)(r.u_,{isOpen:s,children:[(0,a.jsx)(r.xB,{toggle:d,children:"Add Project"}),(0,a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o(!0),setTimeout((function(){o(!1),d()}),1e3),console.log(e.target)},children:[(0,a.jsxs)(r.fe,{children:[(0,a.jsx)(r.II,{name:"name",bsSize:"sm",placeholder:"Name",className:"mb-1",required:!0}),(0,a.jsx)(r.II,{name:"client",bsSize:"sm",className:"mb-1",type:"select",required:!0,children:(0,a.jsx)("option",{value:"1",children:"option 1"})}),(0,a.jsx)(r.II,{name:"description",type:"textarea",bsSize:"sm",placeholder:"Description",className:"mb-1",rows:5,required:!0})]}),(0,a.jsx)(r.mz,{children:t?(0,a.jsx)(r.$j,{color:"primary",type:"grow",children:"Loading..."}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.zx,{color:"success",children:"Save"}),(0,a.jsx)(r.zx,{type:"reset",color:"danger",children:"Reset"})]})})]})]})]})}),(0,a.jsx)(r.X2,{className:"pt-1",children:(0,a.jsx)(r.JX,{children:(0,a.jsx)(r.iA,{bordered:!0,children:(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"#"}),(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Client"}),(0,a.jsx)("th",{children:"Description"}),(0,a.jsx)("th",{children:"Actions"})]})})})})})]})}}},function(e){e.O(0,[260,437,774,888,179],(function(){return s=4478,e(e.s=s);var s}));var s=e.O();_N_E=s}]);