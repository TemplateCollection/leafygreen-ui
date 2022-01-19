_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[34],{BAaP:function(e,r,n){"use strict";n.d(r,"a",(function(){return T}));var t=n("mXGw"),l=n.n(t),a=n("HV2J"),o=n.n(a),i=n("Ipgj"),c=n.n(i),s=n("4Ki5"),b=n.n(s),u=n("vFco"),f=n.n(u),d=n("hTs6"),p=n.n(d),g=n("5MD+"),h=n("G0rA"),m=n("6h0R");function y(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function x(){return(x=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function v(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var O,j,w,C,k,N,P,z,I,R,L,S,M,_=["variant","dismissible","onClose","image","children","className"],T={Info:"info",Warning:"warning",Danger:"danger",Success:"success"},W=Object(g.css)(O||(O=v(["\n  position: relative;\n  display: flex;\n  min-height: 40px;\n  padding: 9px 12px 9px 20px;\n  border-width: 1px 1px 1px 0px;\n  border-style: solid;\n  border-radius: 6px;\n  font-size: 14px;\n  line-height: 20px;\n\n  &:before {\n    content: '';\n    position: absolute;\n    width: 6px;\n    top: -1px;\n    bottom: -1px;\n    left: 0px;\n    border-radius: 6px 0px 0px 6px;\n  }\n\n  &:after {\n    content: '';\n    position: absolute;\n    left: 4px;\n    top: -1px;\n    bottom: -1px;\n    width: 2px;\n    border-top: 1px solid;\n    border-bottom: 1px solid;\n    border-radius: 0.5px 0px 0px 0.5px;\n  }\n"]))),E=Object(g.css)(j||(j=v(["\n  flex-shrink: 0;\n"]))),Z=Object(g.css)(w||(w=v(["\n  cursor: pointer;\n"]))),B=Object(g.css)(C||(C=v(["\n  // this margin is set to control text alignment with the base of the renderedImage\n  margin-top: 3px;\n  margin-bottom: 3px;\n\n  width: 32px;\n  height: 32px;\n  flex-shrink: 0;\n"]))),D=(y(I={},T.Info,Object(g.css)(k||(k=v(["\n    color: ",";\n    border-color: ",";\n    border-left-color: ",";\n    background-color: ",";\n\n    &:before {\n      background-color: ",";\n    }\n\n    &:after {\n      border-color: ",";\n      background-color: ",";\n    }\n  "])),h.b.blue.dark2,h.b.blue.light2,h.b.blue.base,h.b.blue.light3,h.b.blue.base,h.b.blue.light2,h.b.blue.light3)),y(I,T.Warning,Object(g.css)(N||(N=v(["\n    color: ",";\n    border-color: ",";\n    border-left-color: ",";\n    background-color: ",";\n\n    &:before {\n      background-color: ",";\n    }\n\n    &:after {\n      border-color: ",";\n      background-color: ",";\n    }\n  "])),h.b.yellow.dark2,h.b.yellow.light2,h.b.yellow.base,h.b.yellow.light3,h.b.yellow.base,h.b.yellow.light2,h.b.yellow.light3)),y(I,T.Danger,Object(g.css)(P||(P=v(["\n    color: ",";\n    border-color: ",";\n    border-left-color: ",";\n    background-color: ",";\n\n    &:before {\n      background-color: ",";\n    }\n\n    &:after {\n      border-color: ",";\n      background-color: ",";\n    }\n  "])),h.b.red.dark2,h.b.red.light2,h.b.red.base,h.b.red.light3,h.b.red.base,h.b.red.light2,h.b.red.light3)),y(I,T.Success,Object(g.css)(z||(z=v(["\n    color: ",";\n    border-color: ",";\n    border-left-color: ",";\n    background-color: ",";\n\n    &:before {\n      background-color: ",";\n    }\n\n    &:after {\n      border-color: ",";\n      background-color: ",";\n    }\n  "])),h.b.green.dark2,h.b.green.light2,h.b.green.base,h.b.green.light3,h.b.green.base,h.b.green.light2,h.b.green.light3)),I),G=(y(R={},T.Info,{color:h.b.blue.base,icon:c.a}),y(R,T.Warning,{color:h.b.yellow.dark2,icon:o.a}),y(R,T.Danger,{color:h.b.red.base,icon:b.a}),y(R,T.Success,{color:h.b.green.dark1,icon:f.a}),R),X=(y(L={},T.Info,{color:h.b.blue.dark2}),y(L,T.Warning,{color:h.b.yellow.dark2}),y(L,T.Danger,{color:h.b.red.dark1}),y(L,T.Success,{color:h.b.green.dark2}),L),H=function(e,r){var n={marginLeft:void 0,marginRight:void 0};return e?(n.marginLeft="15px",n.marginRight="4px",r&&(n.marginRight="".concat(28,"px"))):(n.marginLeft="".concat(15,"px"),n.marginRight="10px",r&&(n.marginRight="".concat(32,"px"))),Object(g.css)(S||(S=v(["\n    align-self: center;\n    flex-grow: 1;\n    margin-left: ",";\n    margin-right: ",";\n  "])),n.marginLeft,n.marginRight)};r.b=function(e){var r=e.variant,n=void 0===r?T.Info:r,t=e.dismissible,a=void 0!==t&&t,o=e.onClose,i=void 0===o?function(){}:o,c=e.image,s=e.children,b=e.className,u=function(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,_),f=G[n],d=f.icon,h=f.color,y=c?l.a.cloneElement(c,{className:B}):Object(m.jsx)(d,{fill:h,className:Object(g.cx)(E,Object(g.css)(M||(M=v(["\n          margin-top: 1px;\n        "]))))});return Object(m.jsx)("div",x({role:"alert",className:Object(g.cx)(W,D[n],b)},u),y,Object(m.jsx)("div",{className:H(null!=c,a)},s),a&&Object(m.jsx)(p.a,{fill:X[n].color,onClick:i,className:Object(g.cx)(E,Z)}))}},HV2J:function(e,r,n){e.exports=function(e,r,n,t){"use strict";function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=l(r);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(){return(i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function c(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function s(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var b,u,f={small:14,default:16,large:20,xlarge:24},d=["className","size","title","aria-label","aria-labelledby","fill","role"],p=function(e){var r,l=e.className,a=e.size,p=void 0===a?16:a,g=e.title,h=e["aria-label"],m=e["aria-labelledby"],y=e.fill,x=e.role,v=void 0===x?"img":x,O=c(e,d),j=n.css(b||(b=s(["\n    color: ",";\n  "])),y),w=n.css(u||(u=s(["\n    flex-shrink: 0;\n  "]))),C=function(e,r,n){var t,l,a=n["aria-label"],i=n["aria-labelledby"],c=n.title;switch(e){case"img":return a||i||c?(o(t={},"aria-labelledby",i),o(t,"aria-label",a),o(t,"title",c),t):{"aria-label":(l=r,"".concat(l.replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"))};case"presentation":return{"aria-hidden":!0,alt:""}}}(v,"ImportantWithCircle",(o(r={title:g},"aria-label",h),o(r,"aria-labelledby",m),r));return t.jsx("svg",i({className:n.cx(o({},j,null!=y),w,l),height:"number"==typeof p?p:f[p],width:"number"==typeof p?p:f[p],role:v},C,O,{viewBox:"0 0 16 16"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM7 4.5C7 3.94772 7.44772 3.5 8 3.5C8.55228 3.5 9 3.94772 9 4.5V8.5C9 9.05228 8.55228 9.5 8 9.5C7.44772 9.5 7 9.05228 7 8.5V4.5ZM9 11.5C9 12.0523 8.55228 12.5 8 12.5C7.44772 12.5 7 12.0523 7 11.5C7 10.9477 7.44772 10.5 8 10.5C8.55228 10.5 9 10.9477 9 11.5Z",fill:"currentColor"}))};return p.displayName="ImportantWithCircle",p.isGlyph=!0,p.propTypes={fill:a.default.string,size:a.default.oneOfType([a.default.number,a.default.string]),className:a.default.string},p}(n("mXGw"),n("W0B4"),n("5MD+"),n("6h0R"))},Ipgj:function(e,r,n){e.exports=function(e,r,n,t){"use strict";function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=l(r);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(){return(i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function c(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function s(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var b,u,f={small:14,default:16,large:20,xlarge:24},d=["className","size","title","aria-label","aria-labelledby","fill","role"],p=function(e){var r,l=e.className,a=e.size,p=void 0===a?16:a,g=e.title,h=e["aria-label"],m=e["aria-labelledby"],y=e.fill,x=e.role,v=void 0===x?"img":x,O=c(e,d),j=n.css(b||(b=s(["\n    color: ",";\n  "])),y),w=n.css(u||(u=s(["\n    flex-shrink: 0;\n  "]))),C=function(e,r,n){var t,l,a=n["aria-label"],i=n["aria-labelledby"],c=n.title;switch(e){case"img":return a||i||c?(o(t={},"aria-labelledby",i),o(t,"aria-label",a),o(t,"title",c),t):{"aria-label":(l=r,"".concat(l.replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"))};case"presentation":return{"aria-hidden":!0,alt:""}}}(v,"InfoWithCircle",(o(r={title:g},"aria-label",h),o(r,"aria-labelledby",m),r));return t.jsx("svg",i({className:n.cx(o({},j,null!=y),w,l),height:"number"==typeof p?p:f[p],width:"number"==typeof p?p:f[p],role:v},C,O,{viewBox:"0 0 16 16"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4ZM8 6C8.55228 6 9 6.44772 9 7V11H9.5C9.77614 11 10 11.2239 10 11.5C10 11.7761 9.77614 12 9.5 12H6.5C6.22386 12 6 11.7761 6 11.5C6 11.2239 6.22386 11 6.5 11H7V7H6.5C6.22386 7 6 6.77614 6 6.5C6 6.22386 6.22386 6 6.5 6H8Z",fill:"currentColor"}))};return p.displayName="InfoWithCircle",p.isGlyph=!0,p.propTypes={fill:a.default.string,size:a.default.oneOfType([a.default.number,a.default.string]),className:a.default.string},p}(n("mXGw"),n("W0B4"),n("5MD+"),n("6h0R"))},J2fh:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/banner/example",function(){return n("pRh7")}])},hTs6:function(e,r,n){e.exports=function(e,r,n,t){"use strict";function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=l(r);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(){return(i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function c(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function s(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var b,u,f={small:14,default:16,large:20,xlarge:24},d=["className","size","title","aria-label","aria-labelledby","fill","role"],p=function(e){var r,l=e.className,a=e.size,p=void 0===a?16:a,g=e.title,h=e["aria-label"],m=e["aria-labelledby"],y=e.fill,x=e.role,v=void 0===x?"img":x,O=c(e,d),j=n.css(b||(b=s(["\n    color: ",";\n  "])),y),w=n.css(u||(u=s(["\n    flex-shrink: 0;\n  "]))),C=function(e,r,n){var t,l,a=n["aria-label"],i=n["aria-labelledby"],c=n.title;switch(e){case"img":return a||i||c?(o(t={},"aria-labelledby",i),o(t,"aria-label",a),o(t,"title",c),t):{"aria-label":(l=r,"".concat(l.replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"))};case"presentation":return{"aria-hidden":!0,alt:""}}}(v,"X",(o(r={title:g},"aria-label",h),o(r,"aria-labelledby",m),r));return t.jsx("svg",i({className:n.cx(o({},j,null!=y),w,l),height:"number"==typeof p?p:f[p],width:"number"==typeof p?p:f[p],role:v},C,O,{viewBox:"0 0 16 16"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.2028 3.40381C11.8123 3.01329 11.1791 3.01329 10.7886 3.40381L8.3137 5.87869L5.83883 3.40381C5.44831 3.01329 4.81514 3.01329 4.42462 3.40381L3.71751 4.11092C3.32699 4.50144 3.32699 5.13461 3.71751 5.52513L6.19238 8.00001L3.71751 10.4749C3.32699 10.8654 3.32699 11.4986 3.71751 11.8891L4.42462 12.5962C4.81514 12.9867 5.44831 12.9867 5.83883 12.5962L8.3137 10.1213L10.7886 12.5962C11.1791 12.9867 11.8123 12.9867 12.2028 12.5962L12.9099 11.8891C13.3004 11.4986 13.3004 10.8654 12.9099 10.4749L10.435 8.00001L12.9099 5.52513C13.3004 5.13461 13.3004 4.50144 12.9099 4.11092L12.2028 3.40381Z",fill:"currentColor"}))};return p.displayName="X",p.isGlyph=!0,p.propTypes={fill:a.default.string,size:a.default.oneOfType([a.default.number,a.default.string]),className:a.default.string},p}(n("mXGw"),n("W0B4"),n("5MD+"),n("6h0R"))},pRh7:function(e,r,n){"use strict";n.r(r),n.d(r,"default",(function(){return i}));n("mXGw");var t=n("BAaP"),l=n("hnBo"),a=n("6h0R"),o={variant:{type:"select",options:Object.values(t.a),default:t.a.Success,label:"Variant"},dismissible:{type:"boolean",default:!1,label:"Dismissible"},children:{type:"area",default:"To avoid disrupting majority writes, new members are now added to replica sets as priority=0, votes=0 until they reach secondary state, after which Cloud Manager automatically updates the configuration to match the priority and votes value specified in the deployment.",label:"Children"}};function i(){return Object(a.jsx)(l.a,{knobsConfig:o},(function(e){return Object(a.jsx)(t.b,e)}))}}},[["J2fh",0,1,4,2,3,5,6,7,8,17]]]);