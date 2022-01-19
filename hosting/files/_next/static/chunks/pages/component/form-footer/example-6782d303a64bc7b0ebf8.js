_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[67],{BAaP:function(e,n,r){"use strict";r.d(n,"a",(function(){return S}));var t=r("mXGw"),a=r.n(t),l=r("HV2J"),o=r.n(l),i=r("Ipgj"),c=r.n(i),s=r("4Ki5"),b=r.n(s),u=r("vFco"),f=r.n(u),d=r("hTs6"),p=r.n(d),g=r("5MD+"),x=r("G0rA"),m=r("6h0R");function h(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function j(){return(j=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function y(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var O,v,w,C,k,N,B,P,z,T,I,R,M,L=["variant","dismissible","onClose","image","children","className"],S={Info:"info",Warning:"warning",Danger:"danger",Success:"success"},W=Object(g.css)(O||(O=y(["\n  position: relative;\n  display: flex;\n  min-height: 40px;\n  padding: 9px 12px 9px 20px;\n  border-width: 1px 1px 1px 0px;\n  border-style: solid;\n  border-radius: 6px;\n  font-size: 14px;\n  line-height: 20px;\n\n  &:before {\n    content: '';\n    position: absolute;\n    width: 6px;\n    top: -1px;\n    bottom: -1px;\n    left: 0px;\n    border-radius: 6px 0px 0px 6px;\n  }\n\n  &:after {\n    content: '';\n    position: absolute;\n    left: 4px;\n    top: -1px;\n    bottom: -1px;\n    width: 2px;\n    border-top: 1px solid;\n    border-bottom: 1px solid;\n    border-radius: 0.5px 0px 0px 0.5px;\n  }\n"]))),_=Object(g.css)(v||(v=y(["\n  flex-shrink: 0;\n"]))),E=Object(g.css)(w||(w=y(["\n  cursor: pointer;\n"]))),D=Object(g.css)(C||(C=y(["\n  // this margin is set to control text alignment with the base of the renderedImage\n  margin-top: 3px;\n  margin-bottom: 3px;\n\n  width: 32px;\n  height: 32px;\n  flex-shrink: 0;\n"]))),G=(h(z={},S.Info,Object(g.css)(k||(k=y(["\n    color: ",";\n    border-color: ",";\n    border-left-color: ",";\n    background-color: ",";\n\n    &:before {\n      background-color: ",";\n    }\n\n    &:after {\n      border-color: ",";\n      background-color: ",";\n    }\n  "])),x.b.blue.dark2,x.b.blue.light2,x.b.blue.base,x.b.blue.light3,x.b.blue.base,x.b.blue.light2,x.b.blue.light3)),h(z,S.Warning,Object(g.css)(N||(N=y(["\n    color: ",";\n    border-color: ",";\n    border-left-color: ",";\n    background-color: ",";\n\n    &:before {\n      background-color: ",";\n    }\n\n    &:after {\n      border-color: ",";\n      background-color: ",";\n    }\n  "])),x.b.yellow.dark2,x.b.yellow.light2,x.b.yellow.base,x.b.yellow.light3,x.b.yellow.base,x.b.yellow.light2,x.b.yellow.light3)),h(z,S.Danger,Object(g.css)(B||(B=y(["\n    color: ",";\n    border-color: ",";\n    border-left-color: ",";\n    background-color: ",";\n\n    &:before {\n      background-color: ",";\n    }\n\n    &:after {\n      border-color: ",";\n      background-color: ",";\n    }\n  "])),x.b.red.dark2,x.b.red.light2,x.b.red.base,x.b.red.light3,x.b.red.base,x.b.red.light2,x.b.red.light3)),h(z,S.Success,Object(g.css)(P||(P=y(["\n    color: ",";\n    border-color: ",";\n    border-left-color: ",";\n    background-color: ",";\n\n    &:before {\n      background-color: ",";\n    }\n\n    &:after {\n      border-color: ",";\n      background-color: ",";\n    }\n  "])),x.b.green.dark2,x.b.green.light2,x.b.green.base,x.b.green.light3,x.b.green.base,x.b.green.light2,x.b.green.light3)),z),Z=(h(T={},S.Info,{color:x.b.blue.base,icon:c.a}),h(T,S.Warning,{color:x.b.yellow.dark2,icon:o.a}),h(T,S.Danger,{color:x.b.red.base,icon:b.a}),h(T,S.Success,{color:x.b.green.dark1,icon:f.a}),T),X=(h(I={},S.Info,{color:x.b.blue.dark2}),h(I,S.Warning,{color:x.b.yellow.dark2}),h(I,S.Danger,{color:x.b.red.dark1}),h(I,S.Success,{color:x.b.green.dark2}),I),A=function(e,n){var r={marginLeft:void 0,marginRight:void 0};return e?(r.marginLeft="15px",r.marginRight="4px",n&&(r.marginRight="".concat(28,"px"))):(r.marginLeft="".concat(15,"px"),r.marginRight="10px",n&&(r.marginRight="".concat(32,"px"))),Object(g.css)(R||(R=y(["\n    align-self: center;\n    flex-grow: 1;\n    margin-left: ",";\n    margin-right: ",";\n  "])),r.marginLeft,r.marginRight)};n.b=function(e){var n=e.variant,r=void 0===n?S.Info:n,t=e.dismissible,l=void 0!==t&&t,o=e.onClose,i=void 0===o?function(){}:o,c=e.image,s=e.children,b=e.className,u=function(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,L),f=Z[r],d=f.icon,x=f.color,h=c?a.a.cloneElement(c,{className:D}):Object(m.jsx)(d,{fill:x,className:Object(g.cx)(_,Object(g.css)(M||(M=y(["\n          margin-top: 1px;\n        "]))))});return Object(m.jsx)("div",j({role:"alert",className:Object(g.cx)(W,G[r],b)},u),h,Object(m.jsx)("div",{className:A(null!=c,l)},s),l&&Object(m.jsx)(p.a,{fill:X[r].color,onClick:i,className:Object(g.cx)(_,E)}))}},HV2J:function(e,n,r){e.exports=function(e,n,r,t){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=a(n);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function s(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var b,u,f={small:14,default:16,large:20,xlarge:24},d=["className","size","title","aria-label","aria-labelledby","fill","role"],p=function(e){var n,a=e.className,l=e.size,p=void 0===l?16:l,g=e.title,x=e["aria-label"],m=e["aria-labelledby"],h=e.fill,j=e.role,y=void 0===j?"img":j,O=c(e,d),v=r.css(b||(b=s(["\n    color: ",";\n  "])),h),w=r.css(u||(u=s(["\n    flex-shrink: 0;\n  "]))),C=function(e,n,r){var t,a,l=r["aria-label"],i=r["aria-labelledby"],c=r.title;switch(e){case"img":return l||i||c?(o(t={},"aria-labelledby",i),o(t,"aria-label",l),o(t,"title",c),t):{"aria-label":(a=n,"".concat(a.replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"))};case"presentation":return{"aria-hidden":!0,alt:""}}}(y,"ImportantWithCircle",(o(n={title:g},"aria-label",x),o(n,"aria-labelledby",m),n));return t.jsx("svg",i({className:r.cx(o({},v,null!=h),w,a),height:"number"==typeof p?p:f[p],width:"number"==typeof p?p:f[p],role:y},C,O,{viewBox:"0 0 16 16"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM7 4.5C7 3.94772 7.44772 3.5 8 3.5C8.55228 3.5 9 3.94772 9 4.5V8.5C9 9.05228 8.55228 9.5 8 9.5C7.44772 9.5 7 9.05228 7 8.5V4.5ZM9 11.5C9 12.0523 8.55228 12.5 8 12.5C7.44772 12.5 7 12.0523 7 11.5C7 10.9477 7.44772 10.5 8 10.5C8.55228 10.5 9 10.9477 9 11.5Z",fill:"currentColor"}))};return p.displayName="ImportantWithCircle",p.isGlyph=!0,p.propTypes={fill:l.default.string,size:l.default.oneOfType([l.default.number,l.default.string]),className:l.default.string},p}(r("mXGw"),r("W0B4"),r("5MD+"),r("6h0R"))},Ipgj:function(e,n,r){e.exports=function(e,n,r,t){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=a(n);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function s(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var b,u,f={small:14,default:16,large:20,xlarge:24},d=["className","size","title","aria-label","aria-labelledby","fill","role"],p=function(e){var n,a=e.className,l=e.size,p=void 0===l?16:l,g=e.title,x=e["aria-label"],m=e["aria-labelledby"],h=e.fill,j=e.role,y=void 0===j?"img":j,O=c(e,d),v=r.css(b||(b=s(["\n    color: ",";\n  "])),h),w=r.css(u||(u=s(["\n    flex-shrink: 0;\n  "]))),C=function(e,n,r){var t,a,l=r["aria-label"],i=r["aria-labelledby"],c=r.title;switch(e){case"img":return l||i||c?(o(t={},"aria-labelledby",i),o(t,"aria-label",l),o(t,"title",c),t):{"aria-label":(a=n,"".concat(a.replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"))};case"presentation":return{"aria-hidden":!0,alt:""}}}(y,"InfoWithCircle",(o(n={title:g},"aria-label",x),o(n,"aria-labelledby",m),n));return t.jsx("svg",i({className:r.cx(o({},v,null!=h),w,a),height:"number"==typeof p?p:f[p],width:"number"==typeof p?p:f[p],role:y},C,O,{viewBox:"0 0 16 16"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4ZM8 6C8.55228 6 9 6.44772 9 7V11H9.5C9.77614 11 10 11.2239 10 11.5C10 11.7761 9.77614 12 9.5 12H6.5C6.22386 12 6 11.7761 6 11.5C6 11.2239 6.22386 11 6.5 11H7V7H6.5C6.22386 7 6 6.77614 6 6.5C6 6.22386 6.22386 6 6.5 6H8Z",fill:"currentColor"}))};return p.displayName="InfoWithCircle",p.isGlyph=!0,p.propTypes={fill:l.default.string,size:l.default.oneOfType([l.default.number,l.default.string]),className:l.default.string},p}(r("mXGw"),r("W0B4"),r("5MD+"),r("6h0R"))},WuQv:function(e,n,r){"use strict";r.r(n),r.d(n,"default",(function(){return B}));var t=r("mXGw"),a=r("BAaP"),l=r("l6ru"),o=r("5MD+"),i=r("G0rA"),c=r("QmRY"),s=r("+xY2"),b=r("9va6"),u=r("6h0R");function f(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var d,p,g,x,m,h=Object(o.css)(d||(d=f(["\n  min-height: 92px;\n  width: 100%;\n  padding: 24px;\n  border: 1px solid ",";\n  box-shadow: 0px -4px 4px 0px ",";\n"])),i.b.gray.light2,Object(s.d)(.9,i.b.black)),j=Object(o.css)(p||(p=f(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-inline: auto;\n  gap: 8px;\n"]))),y=Object(o.css)(g||(g=f(["\n  white-space: nowrap;\n"]))),O=Object(o.css)(x||(x=f(["\n  display: inline-flex;\n  gap: inherit;\n"]))),v=Object(o.css)(m||(m=f(["\n  flex-grow: 0;\n  min-height: unset;\n  padding-block: 7px;\n"])));var w=Object(b.once)(console.error),C=function(e){var n=e.primaryButton,r=e.onCancel,i=e.cancelButtonText,s=void 0===i?"Cancel":i,b=e.backButtonText,f=e.onBackClick,d=e.errorMessage,p=e.contentClassName,g=e.className,x=Object(t.useMemo)((function(){if(n){var e;if((r=n)&&null!=r.text)return Object(u.jsx)(l.c,{variant:null!==(e=n.variant)&&void 0!==e?e:"primary",disabled:n.disabled,onClick:n.onClick,type:n.type,className:y},n.text);if(Object(c.d)(n,"Button"))return n;w("`primaryButton` prop in `FormFooter` must be either a `Button` component, or object with at minumum a `text` property")}var r}),[n]);return Object(u.jsx)("footer",{className:Object(o.cx)(h,g)},Object(u.jsx)("div",{className:Object(o.cx)(j,p)},Object(u.jsx)("span",{className:O},b&&Object(u.jsx)(l.c,{variant:"default",onClick:f,className:y},b),d&&Object(u.jsx)(a.b,{className:v,variant:"danger"},d)),Object(u.jsx)("span",{className:O},Object(u.jsx)(l.c,{variant:"default",onClick:r,className:y},s||"Cancel"),n&&x)))},k=r("hnBo"),N={primaryButtonText:{type:"text",default:"Save Draft",label:"Primary button text"},cancelButtonText:{type:"text",default:"Cancel",label:"Cancel button text"},backButtonText:{type:"text",default:"",label:"Back button text"},errorMessage:{type:"text",default:"There's an error on this page.",label:"Error message"}};function B(){return Object(u.jsx)(k.a,{knobsConfig:N},(function(e){var n=e.primaryButtonText,r=e.cancelButtonText,t=e.backButtonText,a=e.errorMessage;return Object(u.jsx)(C,{primaryButton:{text:n},cancelButtonText:r,backButtonText:t,errorMessage:a})}))}},hTs6:function(e,n,r){e.exports=function(e,n,r,t){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=a(n);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function s(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var b,u,f={small:14,default:16,large:20,xlarge:24},d=["className","size","title","aria-label","aria-labelledby","fill","role"],p=function(e){var n,a=e.className,l=e.size,p=void 0===l?16:l,g=e.title,x=e["aria-label"],m=e["aria-labelledby"],h=e.fill,j=e.role,y=void 0===j?"img":j,O=c(e,d),v=r.css(b||(b=s(["\n    color: ",";\n  "])),h),w=r.css(u||(u=s(["\n    flex-shrink: 0;\n  "]))),C=function(e,n,r){var t,a,l=r["aria-label"],i=r["aria-labelledby"],c=r.title;switch(e){case"img":return l||i||c?(o(t={},"aria-labelledby",i),o(t,"aria-label",l),o(t,"title",c),t):{"aria-label":(a=n,"".concat(a.replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"))};case"presentation":return{"aria-hidden":!0,alt:""}}}(y,"X",(o(n={title:g},"aria-label",x),o(n,"aria-labelledby",m),n));return t.jsx("svg",i({className:r.cx(o({},v,null!=h),w,a),height:"number"==typeof p?p:f[p],width:"number"==typeof p?p:f[p],role:y},C,O,{viewBox:"0 0 16 16"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.2028 3.40381C11.8123 3.01329 11.1791 3.01329 10.7886 3.40381L8.3137 5.87869L5.83883 3.40381C5.44831 3.01329 4.81514 3.01329 4.42462 3.40381L3.71751 4.11092C3.32699 4.50144 3.32699 5.13461 3.71751 5.52513L6.19238 8.00001L3.71751 10.4749C3.32699 10.8654 3.32699 11.4986 3.71751 11.8891L4.42462 12.5962C4.81514 12.9867 5.44831 12.9867 5.83883 12.5962L8.3137 10.1213L10.7886 12.5962C11.1791 12.9867 11.8123 12.9867 12.2028 12.5962L12.9099 11.8891C13.3004 11.4986 13.3004 10.8654 12.9099 10.4749L10.435 8.00001L12.9099 5.52513C13.3004 5.13461 13.3004 4.50144 12.9099 4.11092L12.2028 3.40381Z",fill:"currentColor"}))};return p.displayName="X",p.isGlyph=!0,p.propTypes={fill:l.default.string,size:l.default.oneOfType([l.default.number,l.default.string]),className:l.default.string},p}(r("mXGw"),r("W0B4"),r("5MD+"),r("6h0R"))},nj0Q:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/form-footer/example",function(){return r("WuQv")}])}},[["nj0Q",0,1,4,2,3,5,6,7,8,17]]]);