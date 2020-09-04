/*! For license information please see 3.95ffaf8b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{118:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(113),o=n(102),i=n(109),l=n(10),s="light",u="dark",d=function(e){return e===u?u:s},f=function(){return l.a.canUseDOM?d(document.documentElement.getAttribute("data-theme")):s},m=function(e){try{localStorage.setItem("theme",d(e))}catch(t){console.error(t)}},h=function(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,n=(t=void 0===t?{}:t).colorMode,r=(n=void 0===n?{}:n).disableSwitch,c=void 0!==r&&r,i=Object(a.useState)(f),l=i[0],h=i[1],v=Object(a.useCallback)((function(){h(s),m(s)}),[]),b=Object(a.useCallback)((function(){h(u),m(u)}),[]);return Object(a.useEffect)((function(){document.documentElement.setAttribute("data-theme",d(l))}),[l]),Object(a.useEffect)((function(){if(!c)try{var e=localStorage.getItem("theme");null!==e&&h(d(e))}catch(t){console.error(t)}}),[h]),Object(a.useEffect)((function(){c||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;h(t?u:s)}))}),[]),{isDarkTheme:l===u,setLightTheme:v,setDarkTheme:b}},v=n(147);var b=function(e){var t=h(),n=t.isDarkTheme,a=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(v.a.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:c}},e.children)},p=function(){var e=Object(a.useState)({}),t=e[0],n=e[1],r=Object(a.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(n){console.error(n)}}),[]);return Object(a.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var a=localStorage.key(t);if(a.startsWith("docusaurus.tab."))e[a.substring("docusaurus.tab.".length)]=localStorage.getItem(a)}n(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}},g=function(){var e=Object(o.a)().siteConfig.themeConfig.announcementBar,t=Object(a.useState)(!0),n=t[0],r=t[1],c=Object(a.useCallback)((function(){localStorage.setItem("docusaurus.announcement.dismiss","true"),r(!0)}),[]);return Object(a.useEffect)((function(){if(e){var t=e.id,n=localStorage.getItem("docusaurus.announcement.id");"annoucement-bar"===n&&(n="announcement-bar");var a=t!==n;localStorage.setItem("docusaurus.announcement.id",t),a&&localStorage.setItem("docusaurus.announcement.dismiss","false"),(a||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&r(!1)}}),[]),{isAnnouncementBarClosed:n,closeAnnouncementBar:c}},k=n(148);var E=function(e){var t=p(),n=t.tabGroupChoices,a=t.setTabGroupChoices,c=g(),o=c.isAnnouncementBarClosed,i=c.closeAnnouncementBar;return r.a.createElement(k.a.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a,isAnnouncementBarClosed:o,closeAnnouncementBar:i}},e.children)},O=n(106),y=n(127),j=n(49),C=n.n(j);var w=function(){var e,t=Object(o.a)().siteConfig,n=(t=void 0===t?{}:t).themeConfig,a=(n=void 0===n?{}:n).announcementBar,c=void 0===a?{}:a,i=c.content,l=c.backgroundColor,s=c.textColor,u=c.isCloseable,d=Object(y.a)(),f=d.isAnnouncementBarClosed,m=d.closeAnnouncementBar;return!i||u&&f?null:r.a.createElement("div",{className:C.a.announcementBar,style:{backgroundColor:l,color:s},role:"banner"},r.a.createElement("div",{className:Object(O.a)(C.a.announcementBarContent,(e={},e[C.a.announcementBarCloseable]=u,e)),dangerouslySetInnerHTML:{__html:i}}),u?r.a.createElement("button",{type:"button",className:C.a.announcementBarClose,onClick:m,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},_=n(2),S=n(107),N=n(23),T=n(110),L=n(149);function I(){return r.a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var M=n(150);function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(l){r=!0,c=l}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function x(){return"undefined"==typeof navigator?"Ctrl":/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)}var A=r.a.forwardRef((function(e,t){var n=D(Object(a.useState)((function(){return x()?"\u2318":"Ctrl"})),2),c=n[0],o=n[1];return Object(a.useEffect)((function(){x()&&o("\u2318")}),[]),r.a.createElement("button",B({type:"button",className:"DocSearch DocSearch-Button","aria-label":"Search"},e,{ref:t}),r.a.createElement(M.a,null),r.a.createElement("span",{className:"DocSearch-Button-Placeholder"},"Search"),r.a.createElement("span",{className:"DocSearch-Button-Key"},"Ctrl"===c?r.a.createElement(I,null):c),r.a.createElement("span",{className:"DocSearch-Button-Key"},"K"))})),R=null;function U(e){var t=e.hit,n=e.children;return r.a.createElement(S.a,{to:t.url},n)}function V(e){var t=e.state,n=e.onClose,a=Object(L.a)().generateSearchPageLink;return r.a.createElement(S.a,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function F(e){var t=Object(o.a)().siteMetadata,l=Object(i.b)().withBaseUrl,s=Object(T.useHistory)(),u=Object(a.useRef)(null),d=Object(a.useState)(!1),f=d[0],m=d[1],h=Object(a.useState)(null),v=h[0],b=h[1],p=Object(a.useCallback)((function(){return R?Promise.resolve():Promise.all([n.e(39).then(n.bind(null,407)),Promise.all([n.e(0),n.e(40)]).then(n.bind(null,406)),n.e(0).then(n.t.bind(null,97,7))]).then((function(e){var t=e[0].DocSearchModal;R=t}))}),[]),g=Object(a.useCallback)((function(){p().then((function(){m(!0)}))}),[p,m]),k=Object(a.useCallback)((function(){m(!1)}),[m]),E=Object(a.useCallback)((function(e){p().then((function(){m(!0),b(e.key)}))}),[p,m,b]),O=Object(a.useRef)({navigate:function(e){var t=e.suggestionUrl;s.push(t)}}).current,y=Object(a.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:l(""+t.pathname+t.hash)})}))})).current,j=Object(a.useMemo)((function(){return function(e){return r.a.createElement(V,Object(_.a)({},e,{onClose:k}))}}),[k]),C=Object(a.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",t.docusaurusVersion),e}),[t.docusaurusVersion]);return function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,c=e.onInput,o=e.searchButtonRef;r.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),o&&o.current===document.activeElement&&c&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&c(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,c,o])}({isOpen:f,onOpen:g,onClose:k,onInput:E,searchButtonRef:u}),r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("link",{rel:"preconnect",href:"https://"+e.appId+"-dsn.algolia.net",crossOrigin:!0})),r.a.createElement(A,{onTouchStart:p,onFocus:p,onMouseOver:p,onClick:g,ref:u}),f&&Object(N.createPortal)(r.a.createElement(R,Object(_.a)({onClose:k,initialScrollY:window.scrollY,initialQuery:v,navigator:O,transformItems:y,hitComponent:U,resultsFooterComponent:j,transformSearchClient:C},e)),document.body))}var X=function(){var e=Object(o.a)().siteConfig;return r.a.createElement(F,e.themeConfig.algolia)},H=n(200),K=n.n(H),Y=n(50),q=n.n(Y),G=function(e){var t=e.icon,n=e.style;return r.a.createElement("span",{className:Object(O.a)(q.a.toggle,q.a.dark),style:n},t)},W=function(e){var t=e.icon,n=e.style;return r.a.createElement("span",{className:Object(O.a)(q.a.toggle,q.a.light),style:n},t)},z=function(e){var t=Object(o.a)(),n=t.siteConfig.themeConfig.colorMode.switchConfig,a=n.darkIcon,c=n.darkIconStyle,i=n.lightIcon,l=n.lightIconStyle,s=t.isClient;return r.a.createElement(K.a,Object(_.a)({disabled:!s,icons:{checked:r.a.createElement(G,{icon:a,style:c}),unchecked:r.a.createElement(W,{icon:i,style:l})}},e))},J=n(128);var Q=function(e){var t=Object(a.useState)(e),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[n,r]},Z=n(151),$=function(e){var t=Object(a.useState)(!0),n=t[0],r=t[1],c=Object(a.useState)(!1),o=c[0],i=c[1],l=Object(a.useState)(0),s=l[0],u=l[1],d=Object(a.useState)(0),f=d[0],m=d[1],h=Object(a.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]),v=Object(T.useLocation)(),b=Q(v.hash),p=b[0],g=b[1];return Object(Z.a)((function(t){var n=t.scrollY;if(e&&(0===n&&r(!0),!(n<f))){if(o)return i(!1),r(!1),void u(n);var a=document.documentElement.scrollHeight-f,c=window.innerHeight;s&&n>=s?r(!1):n+c<a&&r(!0),u(n)}}),[s,f]),Object(a.useEffect)((function(){e&&(r(!0),g(v.hash))}),[v]),Object(a.useEffect)((function(){e&&p&&i(!0)}),[p]),{navbarRef:h,isNavbarVisible:n}},ee=n(152),te=n(153),ne=n(154),ae=n(51),re=n.n(ae),ce=n(6),oe=n(145),ie={default:function(){return oe.a},docsVersion:function(){return n(205).default},docsVersionDropdown:function(){return n(209).default}};function le(e){var t=e.type,n=Object(ce.a)(e,["type"]),a=function(e){void 0===e&&(e="default");var t=ie[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.a.createElement(a,n)}var se=function(){var e,t,n=Object(o.a)(),c=n.siteConfig.themeConfig,i=c.navbar,l=(i=void 0===i?{}:i).title,s=void 0===l?"":l,u=i.items,d=void 0===u?[]:u,f=i.hideOnScroll,m=void 0!==f&&f,h=c.colorMode,v=(h=void 0===h?{}:h).disableSwitch,b=void 0!==v&&v,p=n.isClient,g=Object(a.useState)(!1),k=g[0],E=g[1],y=Object(a.useState)(!1),j=y[0],C=y[1],w=Object(J.a)(),N=w.isDarkTheme,T=w.setLightTheme,L=w.setDarkTheme,I=$(m),M=I.navbarRef,B=I.isNavbarVisible,D=Object(ne.a)(),P=D.logoLink,x=D.logoLinkProps,A=D.logoImageUrl,R=D.logoAlt;Object(ee.a)(k);var U=Object(a.useCallback)((function(){E(!0)}),[E]),V=Object(a.useCallback)((function(){E(!1)}),[E]),F=Object(a.useCallback)((function(e){return e.target.checked?L():T()}),[T,L]),H=Object(te.a)();Object(a.useEffect)((function(){H===te.b.desktop&&E(!1)}),[H]);var K=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:"right")})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:"right")}))}}(d),Y=K.leftItems,q=K.rightItems;return r.a.createElement("nav",{ref:M,className:Object(O.a)("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":k},e[re.a.navbarHideable]=m,e[re.a.navbarHidden]=!B,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=d&&0!==d.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:U,onKeyDown:U},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(S.a,Object(_.a)({className:"navbar__brand",to:P},x),null!=A&&r.a.createElement("img",{key:p,className:"navbar__logo",src:A,alt:R}),null!=s&&r.a.createElement("strong",{className:Object(O.a)("navbar__title",(t={},t[re.a.hideLogoText]=j,t))},s)),Y.map((function(e,t){return r.a.createElement(le,Object(_.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},q.map((function(e,t){return r.a.createElement(le,Object(_.a)({},e,{key:t}))})),!b&&r.a.createElement(z,{className:re.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:N,onChange:F}),r.a.createElement(X,{handleSearchBarToggle:C,isSearchBarExpanded:j}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:V}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(S.a,Object(_.a)({className:"navbar__brand",onClick:V,to:P},x),null!=A&&r.a.createElement("img",{key:p,className:"navbar__logo",src:A,alt:R}),null!=s&&r.a.createElement("strong",{className:"navbar__title"},s)),!b&&k&&r.a.createElement(z,{"aria-label":"Dark mode toggle in sidebar",checked:N,onChange:F})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},d.map((function(e,t){return r.a.createElement(le,Object(_.a)({mobile:!0},e,{onClick:V,key:t}))})))))))};function ue(e){var t=e.to,n=e.href,a=e.label,c=Object(ce.a)(e,["to","href","label"]),o=Object(i.a)(t);return r.a.createElement(S.a,Object(_.a)({},n?{target:"_blank",rel:"noopener noreferrer",href:n}:{to:o},c),a)}var de=function(){var e=Object(o.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,n=((void 0===t?{}:t).footer||{}).links;return r.a.createElement("footer",{className:"container p-0 m-0"},r.a.createElement("div",{className:"row bg-light no-gutters justify-content-center"},n&&n.length>0&&r.a.createElement(r.a.Fragment,null,n.map((function(e,t){return r.a.createElement("div",{className:"col col-xs-1 col-xl-1 mx-4 my-4",key:t},null!=e.title&&r.a.createElement("h5",null,e.title),r.a.createElement("ul",{className:"list-unstyled"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"mb-2",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{className:"mb-1",key:e.href||e.to},r.a.createElement(ue,e))}))))})))))};n(52);function fe(e){var t=e.children;return r.a.createElement(b,null,r.a.createElement(E,null,t))}t.a=function(e){var t=Object(o.a)().siteConfig,n=void 0===t?{}:t,a=n.favicon,l=n.title,s=n.themeConfig.image,u=n.url,d=e.children,f=e.title,m=e.noFooter,h=e.description,v=e.image,b=e.keywords,p=e.permalink,g=f?f+" | "+l:l,k=v||s,E=Object(i.a)(k,{absolute:!0}),O=Object(i.a)(a);return r.a.createElement(fe,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),g&&r.a.createElement("title",null,g),g&&r.a.createElement("meta",{property:"og:title",content:g}),a&&r.a.createElement("link",{rel:"shortcut icon",href:O}),h&&r.a.createElement("meta",{name:"description",content:h}),h&&r.a.createElement("meta",{property:"og:description",content:h}),b&&b.length&&r.a.createElement("meta",{name:"keywords",content:b.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:E}),k&&r.a.createElement("meta",{property:"twitter:image",content:E}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+g}),p&&r.a.createElement("meta",{property:"og:url",content:u+p}),p&&r.a.createElement("link",{rel:"canonical",href:u+p}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(w,null),r.a.createElement(se,null),r.a.createElement("div",{className:"main-wrapper"},d),!m&&r.a.createElement(de,null))}},128:function(e,t,n){"use strict";var a=n(0),r=n(147);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},145:function(e,t,n){"use strict";var a,r=n(2),c=n(6),o=n(0),i=n.n(o),l=n(106),s=n(107),u=n(109);var d=function(){if(void 0!==a)return a;var e=!1,t={get passive(){e=!0}},n=function(){};return window.addEventListener("t",n,t),window.removeEventListener("t",n,t),a=e,e},f=o.useLayoutEffect,m=function(e){var t=Object(o.useRef)(e);return f((function(){t.current=e})),t},h=["mousedown","touchstart"],v=function(e){if("touchstart"===e)return d()?{passive:!0}:void 0};var b=function(e,t){var n=m(t);Object(o.useEffect)((function(){if(t){var a=function(t){e.current&&n.current&&!e.current.contains(t.target)&&n.current(t)};return h.forEach((function(e){document.addEventListener(e,a,v(e))})),function(){h.forEach((function(e){document.removeEventListener(e,a,v(e))}))}}}),[!t])};function p(e){var t=e.activeBasePath,n=e.activeBaseRegex,a=e.to,o=e.href,l=e.label,d=e.activeClassName,f=void 0===d?"navbar__link--active":d,m=e.prependBaseUrlToHref,h=Object(c.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),v=Object(u.a)(a),b=Object(u.a)(t),p=Object(u.a)(o,{forcePrependBaseUrl:!0});return i.a.createElement(s.a,Object(r.a)({},o?{target:"_blank",rel:"noopener noreferrer",href:m?p:o}:Object.assign({isNavLink:!0,activeClassName:f,to:v},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(b)}}:null),h),l)}function g(e){var t=e.items,n=e.position,a=e.className,s=Object(c.a)(e,["items","position","className"]),u=i.a.useRef(null),d=i.a.useRef(null),f=Object(o.useState)(!1),m=f[0],h=f[1];function v(e){if(e){var t,n,a=null==d||null===(t=d.current)||void 0===t||null===(n=t.firstChild)||void 0===n?void 0:n.firstChild;a&&a.focus()}h(e)}b(u,(function(){return v(!1)}));var g=function(e,t){return void 0===t&&(t=!1),Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?i.a.createElement("div",{ref:u,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===n,"dropdown--right":"right"===n,"dropdown--show":m})},i.a.createElement(p,Object(r.a)({className:g(a)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){("Enter"===e.key&&!s.to||"Tab"===e.key)&&(e.preventDefault(),v(!0))}}),s.label),i.a.createElement("ul",{ref:d,className:"dropdown__menu"},t.map((function(e,n){var a=e.className,o=Object(c.a)(e,["className"]);return i.a.createElement("li",{key:n},i.a.createElement(p,Object(r.a)({onKeyDown:function(e){n===t.length-1&&"Tab"===e.key&&(e.preventDefault(),v(!1))},activeClassName:"dropdown__link--active",className:g(a,!0)},o)))})))):i.a.createElement(p,Object(r.a)({className:g(a)},s))}function k(e){var t=e.items,n=(e.position,e.className),a=Object(c.a)(e,["items","position","className"]),o=function(e,t){return void 0===t&&(t=!1),Object(l.a)("menu__link",{"menu__link--sublist":t},e)};return t?i.a.createElement("li",{className:"menu__list-item"},i.a.createElement(p,Object(r.a)({className:o(n,!0)},a),a.label),i.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var n=e.className,l=Object(c.a)(e,["className"]);return i.a.createElement("li",{className:"menu__list-item",key:t},i.a.createElement(p,Object(r.a)({activeClassName:"menu__link--active",className:o(n)},l,{onClick:a.onClick})))})))):i.a.createElement("li",{className:"menu__list-item"},i.a.createElement(p,Object(r.a)({className:o(n)},a)))}t.a=function(e){var t=e.mobile,n=void 0!==t&&t,a=Object(c.a)(e,["mobile"]),r=n?k:g;return i.a.createElement(r,a)}},147:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(void 0);t.a=r},149:function(e,t,n){"use strict";var a=n(110),r=n(10),c=n(102);t.a=function(){var e=Object(a.useHistory)(),t=Object(a.useLocation)(),n=Object(c.a)().siteConfig,o=(n=void 0===n?{}:n).baseUrl;return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return o+"search?q="+encodeURIComponent(e)}}}},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a);function c(){return r.a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},151:function(e,t,n){"use strict";var a=n(0),r=n(10),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var n=Object(a.useState)(c()),r=n[0],o=n[1],i=function(){var t=c();o(t),e&&e(t)};return Object(a.useEffect)((function(){return window.addEventListener("scroll",i),function(){return window.removeEventListener("scroll",i,{passive:!0})}}),t),r}},152:function(e,t,n){"use strict";var a=n(0);t.a=function(e){void 0===e&&(e=!0),Object(a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},153:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var a=n(0),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var n=Object(a.useState)(t),c=n[0],o=n[1];return Object(a.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){o(t())}}),[]),c}},154:function(e,t,n){"use strict";var a=n(102),r=n(128),c=n(109),o=n(119);t.a=function(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,n=(t=void 0===t?{}:t).navbar,i=(n=void 0===n?{}:n).logo,l=void 0===i?{}:i,s=Object(r.a)().isDarkTheme,u=Object(c.a)(l.href||"/"),d={};l.target?d={target:l.target}:Object(o.a)(u)||(d={rel:"noopener noreferrer",target:"_blank"});var f=l.srcDark&&s?l.srcDark:l.src;return{logoLink:u,logoLinkProps:d,logoImageUrl:Object(c.a)(f),logoAlt:l.alt}}},200:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(0),o=f(c),i=f(n(201)),l=f(n(7)),s=f(n(202)),u=f(n(203)),d=n(204);function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=(t.icons,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["className","icons"])),c=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",a({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},m.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},201:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===c)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},202:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),c=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},203:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),c=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},204:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}},205:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),c=n(0),o=n.n(c),i=n(145),l=n(120);function s(e){var t=e.label,n=e.to,c=e.docsPluginId,s=Object(r.a)(e,["label","to","docsPluginId"]),u=Object(l.useActiveVersion)(c),d=Object(l.useLatestVersion)(c),f=null!=u?u:d,m=null!=t?t:f.label,h=null!=n?n:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(f).path;return o.a.createElement(i.a,Object(a.a)({},s,{label:m,to:h}))}},209:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),c=n(0),o=n.n(c),i=n(145),l=n(120),s=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function u(e){var t,n=e.mobile,c=e.docsPluginId,u=Object(r.a)(e,["mobile","docsPluginId"]),d=Object(l.useActiveDocContext)(c),f=Object(l.useVersions)(c),m=Object(l.useLatestVersion)(c);var h=null!==(t=d.activeVersion)&&void 0!==t?t:m,v=n?"Versions":h.label,b=n?void 0:s(h).path;return o.a.createElement(i.a,Object(a.a)({},u,{mobile:n,label:v,to:b,items:function(){if(!(f.length<=2))return f.map((function(e){var t=(null==d?void 0:d.alternateDocVersions[e.name])||s(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==d?void 0:d.activeVersion)}}}))}()}))}}}]);