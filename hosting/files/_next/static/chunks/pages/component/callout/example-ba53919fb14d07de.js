(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[794],{29753:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return u}});var a=t(31099),n=t(90089),l=(t(27378),t(49766)),i=t(91949),o=t(68087),s=["title"],c={variant:{type:"select",default:l.$.Note,options:Object.values(l.$),label:"Variant",isRequired:!0},children:{type:"area",default:"If you are running your mongod instance with the default host (localhost) and port (27017), you can leave those parameters out when running mongo shell.",label:"Children"},title:{type:"boolean",default:!1,label:"Title"},baseFontSize:{type:"select",default:13,label:"Base Font Size",options:[13,16]}};function u(){return(0,o.jsx)(i.Z,{knobsConfig:c},(function(e){var r=e.title,t=(0,n.Z)(e,s);return(0,o.jsx)(l.Z,(0,a.Z)({},t,{title:r?"This is a title":void 0}))}))}},30923:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/callout/example",function(){return t(29753)}])},58702:function(e,r){"use strict";var t=60103,a=60106,n=60107,l=60108,i=60114,o=60109,s=60110,c=60112,u=60113,f=60120,p=60115,b=60116,d=60121,y=60122,g=60117,h=60129,x=60131;if("function"===typeof Symbol&&Symbol.for){var m=Symbol.for;t=m("react.element"),a=m("react.portal"),n=m("react.fragment"),l=m("react.strict_mode"),i=m("react.profiler"),o=m("react.provider"),s=m("react.context"),c=m("react.forward_ref"),u=m("react.suspense"),f=m("react.suspense_list"),p=m("react.memo"),b=m("react.lazy"),d=m("react.block"),y=m("react.server.block"),g=m("react.fundamental"),h=m("react.debug_trace_mode"),x=m("react.legacy_hidden")}function v(e){if("object"===typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:switch(e=e.type){case n:case i:case l:case u:case f:return e;default:switch(e=e&&e.$$typeof){case s:case c:case b:case p:case o:return e;default:return r}}case a:return r}}}r.isFragment=function(e){return v(e)===n}},19185:function(e,r,t){"use strict";e.exports=t(58702)},49766:function(e,r,t){"use strict";t.d(r,{$:function(){return S},Z:function(){return G}});t(27378);var a=t(23615),n=t.n(a),l=t(17231),i=t(79303),o=t(89707),s=t.n(o),c=t(73007),u=t.n(c),f=t(4951),p=t.n(f),b=t(67604),d=t.n(b),y=t(78846),g=t.n(y),h=t(83685),x=t(90440),m=t(68087);function v(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function C(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var O,j,w,N,k,z,D,P,Z,H,T,I,_,E,S={Note:"note",Tip:"tip",Important:"important",Warning:"warning",Example:"example"},V=(0,l.css)(O||(O=C(["\n  font-family: Euclid Circular A, \u2018Helvetica Neue\u2019, Helvetica, Arial, sans-serif; // TODO: Refresh \u2013 update to fontFamilies.default\n  background-color: ",";\n  border-radius: 16px;\n  position: relative;\n\n  &:after {\n    content: '';\n    position: absolute;\n    width: 16px;\n    left: -2px;\n    top: -2px;\n    bottom: -2px;\n    border-radius: 16px 0px 0px 16px;\n  }\n"])),i.D.white),$=(0,l.css)(j||(j=C(["\n  padding: 12px 24px 12px 52px;\n  position: relative;\n  text-transform: uppercase;\n  width: 100%;\n  border-top-left-radius: 14px;\n  border-top-right-radius: 14px;\n"]))),M=(0,l.css)(w||(w=C(["\n  left: 20px;\n  position: absolute;\n"]))),R=(0,l.css)(N||(N=C(["\n  font-weight: 600;\n  letter-spacing: inherit;\n  color: inherit;\n"]))),B=(0,l.css)(k||(k=C(["\n  display: flex;\n  flex-direction: column;\n  padding: 16px 24px 16px 52px;\n  font-weight: 400;\n"]))),L=(v(P={},13,(0,l.css)(z||(z=C(["\n    font-size: 13px;\n    line-height: 20px;\n  "])))),v(P,16,(0,l.css)(D||(D=C(["\n    font-size: 16px;\n    line-height: 28px;\n  "])))),P),W=(v(Z={},S.Note,"Note"),v(Z,S.Tip,"Tip"),v(Z,S.Important,"Important"),v(Z,S.Warning,"Warning"),v(Z,S.Example,"Example"),Z),A=(v(H={},S.Note,p()),v(H,S.Tip,s()),v(H,S.Important,u()),v(H,S.Warning,d()),v(H,S.Example,g()),H),F=(v(T={},S.Note,{header:{background:i.D.blue.light3,text:i.D.blue.dark1},text:i.D.blue.dark3,bar:i.D.blue.base,icon:i.D.blue.base,border:i.D.blue.light2}),v(T,S.Tip,{header:{background:i.D.purple.light3,text:i.D.purple.dark2},text:i.D.purple.dark3,bar:i.D.purple.base,icon:i.D.purple.base,border:i.D.purple.light2}),v(T,S.Important,{header:{background:i.D.yellow.light3,text:i.D.yellow.dark2},text:i.D.yellow.dark3,bar:i.D.yellow.base,icon:i.D.yellow.dark2,border:i.D.yellow.light2}),v(T,S.Warning,{header:{background:i.D.red.light3,text:i.D.red.dark2},text:i.D.red.dark3,bar:i.D.red.base,icon:i.D.red.base,border:i.D.red.light2}),v(T,S.Example,{header:{background:i.D.gray.light2,text:i.D.gray.dark2},text:i.D.gray.dark3,bar:i.D.gray.dark1,icon:i.D.gray.dark3,border:i.D.gray.light1}),T);function G(e){var r=e.variant,t=e.title,a=e.baseFontSize,n=void 0===a?13:a,i=e.className,o=e.children,s=F[r],c=A[r];return(0,m.jsx)("div",{role:"note",className:(0,l.cx)(V,(0,l.css)(I||(I=C(["\n          color: ",";\n          border: 2px solid ",";\n          box-shadow: inset 0px 2px 0px 0px ","; // hides gap between the border and the header div when zoomed in.\n\n          &:after {\n            background: linear-gradient(\n              to left,\n              transparent 9px,\n              "," 9px\n            );\n          }\n        "])),s.text,s.border,s.header.background,s.bar),i)},(0,m.jsx)("div",{className:(0,l.cx)($,(0,l.css)(_||(_=C(["\n            background-color: ",";\n            color: ",";\n          "])),s.header.background,s.header.text))},(0,m.jsx)(c,{fill:s.icon,className:M,role:"presentation"}),(0,m.jsx)(h.Lh,{as:"h2",className:(0,l.cx)((0,l.css)(E||(E=C(["\n              color: inherit;\n              letter-spacing: 0.6px;\n            "]))))},W[r])),(0,m.jsx)("div",{className:B},t&&(0,m.jsx)(h.QE,{as:"h3",className:(0,l.cx)(R,L[n])},t),(0,m.jsx)("div",{className:L[n]},o)))}G.propTypes={variant:n().oneOf(Object.values(S)).isRequired,title:n().string,children:n().node.isRequired,className:n().string,baseFontSize:n().oneOf(Object.values(x.Y2))}},78846:function(e,r,t){e.exports=function(e,r,t,a){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=n(r);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function c(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var u,f,p={small:14,default:16,large:20,xlarge:24},b=["className","size","title","aria-label","aria-labelledby","fill","role"],d=function(e){var r,n=e.className,l=e.size,d=void 0===l?16:l,y=e.title,g=e["aria-label"],h=e["aria-labelledby"],x=e.fill,m=e.role,v=void 0===m?"img":m,C=s(e,b),O=t.css(u||(u=c(["\n    color: ",";\n  "])),x),j=t.css(f||(f=c(["\n    flex-shrink: 0;\n  "]))),w=function(e,r,t){var a,n,l=t["aria-label"],o=t["aria-labelledby"],s=t.title;switch(e){case"img":return l||o||s?(i(a={},"aria-labelledby",o),i(a,"aria-label",l),i(a,"title",s),a):{"aria-label":(n=r,"".concat(n.replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"))};case"presentation":return{"aria-hidden":!0,alt:""}}}(v,"Beaker",(i(r={title:y},"aria-label",g),i(r,"aria-labelledby",h),r));return a.jsx("svg",o({className:t.cx(i({},O,null!=x),j,n),height:"number"==typeof d?d:p[d],width:"number"==typeof d?d:p[d],role:v},w,C,{viewBox:"0 0 16 16"}),a.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.95288 1.8C5.95288 1.51997 5.95288 1.37996 6.00738 1.273C6.05532 1.17892 6.13181 1.10243 6.22589 1.0545C6.33284 1 6.47286 1 6.75288 1H9.15288C9.43291 1 9.57292 1 9.67988 1.0545C9.77396 1.10243 9.85045 1.17892 9.89839 1.273C9.95288 1.37996 9.95288 1.51997 9.95288 1.8V2.2C9.95288 2.48003 9.95288 2.62004 9.89839 2.727C9.85045 2.82108 9.77396 2.89757 9.67988 2.9455C9.57292 3 9.43291 3 9.15288 3H6.75288C6.47286 3 6.33284 3 6.22589 2.9455C6.13181 2.89757 6.05532 2.82108 6.00738 2.727C5.95288 2.62004 5.95288 2.48003 5.95288 2.2V1.8ZM6.00919 4.26951C5.95289 4.37788 5.95289 4.52025 5.95289 4.805V6H5.95288L2.94611 11.4122C2.28339 12.6051 1.95203 13.2015 2.01416 13.6895C2.06606 14.097 2.28284 14.4654 2.61388 14.7087C3.01025 15 3.69257 15 5.0572 15H10.8485C12.2132 15 12.8955 15 13.2919 14.7087C13.6229 14.4654 13.8397 14.097 13.8916 13.6895C13.9537 13.2015 13.6224 12.6051 12.9596 11.4122L12.9596 11.4122L9.95289 6.00003V4.805C9.95289 4.52025 9.95289 4.37788 9.8966 4.26951C9.84916 4.17819 9.7747 4.10373 9.68338 4.05629C9.57501 4 9.43264 4 9.14789 4H6.75789C6.47315 4 6.33077 4 6.2224 4.05629C6.13108 4.10373 6.05662 4.17819 6.00919 4.26951ZM9.33288 9L6.30288 9.5L5.01554 11.8106C4.79758 12.2019 4.6886 12.3975 4.70716 12.5576C4.72336 12.6973 4.79764 12.8237 4.9118 12.9059C5.04264 13 5.26656 13 5.71439 13H10.1939C10.641 13 10.8646 13 10.9954 12.906C11.1095 12.824 11.1838 12.6977 11.2001 12.5582C11.2189 12.3982 11.1104 12.2027 10.8934 11.8118L9.33288 9Z",fill:"currentColor"}))};return d.displayName="Beaker",d.isGlyph=!0,d.propTypes={fill:l.default.string,size:l.default.oneOfType([l.default.number,l.default.string]),className:l.default.string},d}(t(27378),t(23615),t(17231),t(68087))},89707:function(e,r,t){e.exports=function(e,r,t,a){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=n(r);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function c(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var u,f,p={small:14,default:16,large:20,xlarge:24},b=["className","size","title","aria-label","aria-labelledby","fill","role"],d=function(e){var r,n=e.className,l=e.size,d=void 0===l?16:l,y=e.title,g=e["aria-label"],h=e["aria-labelledby"],x=e.fill,m=e.role,v=void 0===m?"img":m,C=s(e,b),O=t.css(u||(u=c(["\n    color: ",";\n  "])),x),j=t.css(f||(f=c(["\n    flex-shrink: 0;\n  "]))),w=function(e,r,t){var a,n,l=t["aria-label"],o=t["aria-labelledby"],s=t.title;switch(e){case"img":return l||o||s?(i(a={},"aria-labelledby",o),i(a,"aria-label",l),i(a,"title",s),a):{"aria-label":(n=r,"".concat(n.replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"))};case"presentation":return{"aria-hidden":!0,alt:""}}}(v,"Bulb",(i(r={title:y},"aria-label",g),i(r,"aria-labelledby",h),r));return a.jsx("svg",o({className:t.cx(i({},O,null!=x),j,n),height:"number"==typeof d?d:p[d],width:"number"==typeof d?d:p[d],role:v},w,C,{viewBox:"0 0 16 16"}),a.jsx("path",{d:"M12.3311 8.5C12.7565 7.76457 13 6.91072 13 6C13 3.23858 10.7614 1 8 1C5.23858 1 3 3.23858 3 6C3 6.94628 3.26287 7.83117 3.71958 8.58561L5.40749 11.501C5.58628 11.8099 5.91607 12 6.27291 12H6.5V6C6.5 5.17157 7.17157 4.5 8 4.5C8.82843 4.5 9.5 5.17157 9.5 6V12H9.72368C10.0793 12 10.4082 11.8111 10.5874 11.5039L12.34 8.5H12.3311Z",fill:"currentColor"}),a.jsx("path",{d:"M7.5 6V12H8.5V6C8.5 5.72386 8.27614 5.5 8 5.5C7.72386 5.5 7.5 5.72386 7.5 6Z",fill:"currentColor"}),a.jsx("path",{d:"M10 14V13H6V14C6 14.5523 6.44772 15 7 15H9C9.55228 15 10 14.5523 10 14Z",fill:"currentColor"}))};return d.displayName="Bulb",d.isGlyph=!0,d.propTypes={fill:l.default.string,size:l.default.oneOfType([l.default.number,l.default.string]),className:l.default.string},d}(t(27378),t(23615),t(17231),t(68087))},73007:function(e,r,t){e.exports=function(e,r,t,a){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=n(r);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function c(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var u,f,p={small:14,default:16,large:20,xlarge:24},b=["className","size","title","aria-label","aria-labelledby","fill","role"],d=function(e){var r,n=e.className,l=e.size,d=void 0===l?16:l,y=e.title,g=e["aria-label"],h=e["aria-labelledby"],x=e.fill,m=e.role,v=void 0===m?"img":m,C=s(e,b),O=t.css(u||(u=c(["\n    color: ",";\n  "])),x),j=t.css(f||(f=c(["\n    flex-shrink: 0;\n  "]))),w=function(e,r,t){var a,n,l=t["aria-label"],o=t["aria-labelledby"],s=t.title;switch(e){case"img":return l||o||s?(i(a={},"aria-labelledby",o),i(a,"aria-label",l),i(a,"title",s),a):{"aria-label":(n=r,"".concat(n.replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"))};case"presentation":return{"aria-hidden":!0,alt:""}}}(v,"ImportantWithCircle",(i(r={title:y},"aria-label",g),i(r,"aria-labelledby",h),r));return a.jsx("svg",o({className:t.cx(i({},O,null!=x),j,n),height:"number"==typeof d?d:p[d],width:"number"==typeof d?d:p[d],role:v},w,C,{viewBox:"0 0 16 16"}),a.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM7 4.5C7 3.94772 7.44772 3.5 8 3.5C8.55228 3.5 9 3.94772 9 4.5V8.5C9 9.05228 8.55228 9.5 8 9.5C7.44772 9.5 7 9.05228 7 8.5V4.5ZM9 11.5C9 12.0523 8.55228 12.5 8 12.5C7.44772 12.5 7 12.0523 7 11.5C7 10.9477 7.44772 10.5 8 10.5C8.55228 10.5 9 10.9477 9 11.5Z",fill:"currentColor"}))};return d.displayName="ImportantWithCircle",d.isGlyph=!0,d.propTypes={fill:l.default.string,size:l.default.oneOfType([l.default.number,l.default.string]),className:l.default.string},d}(t(27378),t(23615),t(17231),t(68087))},4951:function(e,r,t){e.exports=function(e,r,t,a){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=n(r);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function c(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var u,f,p={small:14,default:16,large:20,xlarge:24},b=["className","size","title","aria-label","aria-labelledby","fill","role"],d=function(e){var r,n=e.className,l=e.size,d=void 0===l?16:l,y=e.title,g=e["aria-label"],h=e["aria-labelledby"],x=e.fill,m=e.role,v=void 0===m?"img":m,C=s(e,b),O=t.css(u||(u=c(["\n    color: ",";\n  "])),x),j=t.css(f||(f=c(["\n    flex-shrink: 0;\n  "]))),w=function(e,r,t){var a,n,l=t["aria-label"],o=t["aria-labelledby"],s=t.title;switch(e){case"img":return l||o||s?(i(a={},"aria-labelledby",o),i(a,"aria-label",l),i(a,"title",s),a):{"aria-label":(n=r,"".concat(n.replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"))};case"presentation":return{"aria-hidden":!0,alt:""}}}(v,"InfoWithCircle",(i(r={title:y},"aria-label",g),i(r,"aria-labelledby",h),r));return a.jsx("svg",o({className:t.cx(i({},O,null!=x),j,n),height:"number"==typeof d?d:p[d],width:"number"==typeof d?d:p[d],role:v},w,C,{viewBox:"0 0 16 16"}),a.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4ZM8 6C8.55228 6 9 6.44772 9 7V11H9.5C9.77614 11 10 11.2239 10 11.5C10 11.7761 9.77614 12 9.5 12H6.5C6.22386 12 6 11.7761 6 11.5C6 11.2239 6.22386 11 6.5 11H7V7H6.5C6.22386 7 6 6.77614 6 6.5C6 6.22386 6.22386 6 6.5 6H8Z",fill:"currentColor"}))};return d.displayName="InfoWithCircle",d.isGlyph=!0,d.propTypes={fill:l.default.string,size:l.default.oneOfType([l.default.number,l.default.string]),className:l.default.string},d}(t(27378),t(23615),t(17231),t(68087))}},function(e){e.O(0,[7690,1949,2888,9774,179],(function(){return r=30923,e(e.s=r);var r}));var r=e.O();_N_E=r}]);