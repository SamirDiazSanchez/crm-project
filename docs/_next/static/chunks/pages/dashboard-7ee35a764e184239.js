(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{5058:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return r(4804)}])},184:function(e,n,r){"use strict";r.d(n,{A:function(){return u}});var t=r(5893),a=r(1159),s=function(e){var n=e.title,r=(0,a.a)().removeUser;return(0,t.jsxs)("nav",{className:"main-header navbar navbar-expand navbar-white navbar-light",children:[(0,t.jsxs)("ul",{className:"navbar-nav",children:[(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)("a",{className:"nav-link","data-widget":"pushmenu",href:"#",role:"button",children:(0,t.jsx)("i",{className:"fas fa-bars"})})}),(0,t.jsx)("li",{className:"nav-item d-none d-sm-inline-block",children:(0,t.jsx)("a",{className:"nav-link",children:n})})]}),(0,t.jsx)("ul",{className:"navbar-nav ml-auto",children:(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsxs)("a",{href:"",className:"nav-link",onClick:function(e){e.preventDefault(),r()},children:[(0,t.jsx)("i",{className:"ion-log-out pe-2"}),"LogOut"]})})})]})},i=r(1664),o=r.n(i),l=r(1163),c=function(){var e=(0,l.useRouter)(),n=function(n){return"nav-link "+(e.pathname==n?"active":"")};return(0,t.jsxs)("aside",{className:"main-sidebar sidebar-dark-primary elevation-4",children:[(0,t.jsxs)("a",{className:"brand-link",children:[(0,t.jsx)("img",{src:"dist/img/sipe.png",alt:"AdminLTE Logo",className:"brand-image img-circle elevation-3",style:{opacity:".8"}}),(0,t.jsx)("span",{className:"brand-text font-weight-light",children:"CRM"})]}),(0,t.jsx)("div",{className:"sidebar",children:(0,t.jsx)("nav",{className:"mt-2",children:(0,t.jsxs)("ul",{className:"nav nav-pills nav-sidebar flex-column","data-widget":"treeview",role:"menu","data-accordion":"false",children:[(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(o(),{href:"/dashboard",children:(0,t.jsxs)("a",{className:n("/dashboard"),children:[(0,t.jsx)("i",{className:"nav-icon ion-home"}),(0,t.jsx)("p",{children:"Home"})]})})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(o(),{href:"/clients",children:(0,t.jsxs)("a",{className:n("/clients"),children:[(0,t.jsx)("i",{className:"nav-icon ion-person-stalker"}),(0,t.jsx)("p",{children:"Clients"})]})})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(o(),{href:"/projects",children:(0,t.jsxs)("a",{className:n("/projects"),children:[(0,t.jsx)("i",{className:"nav-icon ion-document"}),(0,t.jsx)("p",{children:"Projects"})]})})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(o(),{href:"/users",children:(0,t.jsxs)("a",{className:n("/users"),children:[(0,t.jsx)("i",{className:"nav-icon ion-person"}),(0,t.jsx)("p",{children:"Users"})]})})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(o(),{href:"/account",children:(0,t.jsxs)("a",{className:n("/account"),children:[(0,t.jsx)("i",{className:"nav-icon ion-ios-gear"}),(0,t.jsx)("p",{children:"Account"})]})})})]})})})]})},u=function(e){var n=e.children,r=e.title;return(0,t.jsxs)("div",{className:"wrapper",children:[(0,t.jsx)(s,{title:r}),(0,t.jsx)(c,{}),(0,t.jsx)("div",{className:"content-wrapper",children:(0,t.jsx)("div",{className:"content",children:(0,t.jsx)("div",{className:"container-fluid pt-1",children:n})})}),(0,t.jsxs)("footer",{className:"main-footer",children:[(0,t.jsxs)("strong",{children:["Copyright \xa9 2014-2021 ",(0,t.jsx)("a",{href:"https://adminlte.io",children:"AdminLTE.io"}),"."]}),"All rights reserved.",(0,t.jsxs)("div",{className:"float-right d-none d-sm-inline-block",children:[(0,t.jsx)("b",{children:"Version"})," 3.2.0"]})]})]})}},1159:function(e,n,r){"use strict";r.d(n,{a:function(){return s}});var t=r(1163),a=r(7294),s=function(){var e=(0,a.useState)(null),n=e[0],r=e[1],s=(0,t.useRouter)().push,i=function(){var e=window.localStorage.getItem("CRMProject");try{e=JSON.parse(e),r((function(n){return e}))}catch(n){console.error(n)}};return(0,a.useEffect)((function(){i()}),[]),{userData:n,setUser:function(e){var n=JSON.stringify(e);window.localStorage.setItem("CRMProject",n),i()},removeUser:function(){window.localStorage.removeItem("CRMProject"),i(),s("/")}}}},1551:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,a,s=[],i=!0,o=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(s.push(t.value),!n||s.length!==n);i=!0);}catch(l){o=!0,a=l}finally{try{i||null==r.return||r.return()}finally{if(o)throw a}}return s}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s,i=(s=r(7294))&&s.__esModule?s:{default:s},o=r(1003),l=r(880),c=r(9246);var u={};function f(e,n,r,t){if(e&&o.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;u[n+"%"+r+(a?"%"+a:"")]=!0}}var d=function(e){var n,r=!1!==e.prefetch,t=l.useRouter(),s=i.default.useMemo((function(){var n=a(o.resolveHref(t,e.href,!0),2),r=n[0],s=n[1];return{href:r,as:e.as?o.resolveHref(t,e.as):s||r}}),[t,e.href,e.as]),d=s.href,h=s.as,m=i.default.useRef(d),v=i.default.useRef(h),p=e.children,j=e.replace,x=e.shallow,y=e.scroll,b=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var g=(n=i.default.Children.only(p))&&"object"===typeof n&&n.ref,N=a(c.useIntersection({rootMargin:"200px"}),3),w=N[0],k=N[1],E=N[2],C=i.default.useCallback((function(e){v.current===h&&m.current===d||(E(),v.current=h,m.current=d),w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[h,g,d,E,w]);i.default.useEffect((function(){var e=k&&r&&o.isLocalURL(d),n="undefined"!==typeof b?b:t&&t.locale,a=u[d+"%"+h+(n?"%"+n:"")];e&&!a&&f(t,d,h,{locale:n})}),[h,d,k,b,r,t]);var A={ref:C,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,a,s,i,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(r))&&(e.preventDefault(),n[a?"replace":"push"](r,t,{shallow:s,locale:l,scroll:i}))}(e,t,d,h,j,x,y,b)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),o.isLocalURL(d)&&f(t,d,h,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var M="undefined"!==typeof b?b:t&&t.locale,_=t&&t.isLocaleDomain&&o.getDomainLocale(h,M,t&&t.locales,t&&t.domainLocales);A.href=_||o.addBasePath(o.addLocale(h,M,t&&t.defaultLocale))}return i.default.cloneElement(n,A)};n.default=d,("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),e.exports=n.default)},9246:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,a,s=[],i=!0,o=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(s.push(t.value),!n||s.length!==n);i=!0);}catch(l){o=!0,a=l}finally{try{i||null==r.return||r.return()}finally{if(o)throw a}}return s}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,r=e.rootMargin,t=e.disabled||!o,u=s.useRef(),f=a(s.useState(!1),2),d=f[0],h=f[1],m=a(s.useState(n?n.current:null),2),v=m[0],p=m[1],j=s.useCallback((function(e){u.current&&(u.current(),u.current=void 0),t||d||e&&e.tagName&&(u.current=function(e,n,r){var t=function(e){var n,r={root:e.root||null,margin:e.rootMargin||""},t=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));t?n=l.get(t):(n=l.get(r),c.push(r));if(n)return n;var a=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var n=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return l.set(r,n={id:r,observer:s,elements:a}),n}(r),a=t.id,s=t.observer,i=t.elements;return i.set(e,n),s.observe(e),function(){if(i.delete(e),s.unobserve(e),0===i.size){s.disconnect(),l.delete(a);var n=c.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));n>-1&&c.splice(n,1)}}}(e,(function(e){return e&&h(e)}),{root:v,rootMargin:r}))}),[t,v,r,d]),x=s.useCallback((function(){h(!1)}),[]);return s.useEffect((function(){if(!o&&!d){var e=i.requestIdleCallback((function(){return h(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),s.useEffect((function(){n&&p(n.current)}),[n]),[j,d,x]};var s=r(7294),i=r(4686),o="undefined"!==typeof IntersectionObserver;var l=new Map,c=[];("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),e.exports=n.default)},4804:function(e,n,r){"use strict";r.r(n);var t=r(5893),a=r(184),s=r(7294),i=r(1163);n.default=function(){(0,i.useRouter)().push;return(0,s.useEffect)((function(){}),[]),(0,t.jsx)(a.A,{title:"Dashboard"})}},1664:function(e,n,r){e.exports=r(1551)},1163:function(e,n,r){e.exports=r(880)}},function(e){e.O(0,[774,888,179],(function(){return n=5058,e(e.s=n);var n}));var n=e.O();_N_E=n}]);