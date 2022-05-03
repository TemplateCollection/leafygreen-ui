(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1606],{45371:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return z}});r(27378);var t=r(55492),a=r(19463),l=r(17231),o=r(79303),i=r(92677),c=r(2998),s=r(33729),u=r.n(s),f=r(68087);function b(){return b=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},b.apply(this,arguments)}function d(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var p,g,x,m,y,h=["variant","text"],v=function(e){var n;(n=e)&&null!=n.text||i.X3.error("`primaryButton` prop in `FormFooter` must be either a `Button` component, or object with at minumum a `text` property");var r=e.variant,t=e.text,l=function(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,h);return(0,f.jsx)(a.ZP,b({variant:r||"primary"},l),t)},O=(0,l.css)(p||(p=d(["\n  min-height: 92px;\n  width: 100%;\n  padding: 24px;\n  border: 1px solid ",";\n  box-shadow: 0px -4px 4px 0px ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])),o.s.gray.light2,(0,c.DZ)(.9,o.s.black)),j=(0,l.css)(g||(g=d(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n"]))),w=(0,l.css)(x||(x=d(["\n  margin-left: auto;\n  display: inline-flex;\n  align-items: center;\n  gap: inherit;\n"]))),k=(0,l.css)(m||(m=d(["\n  flex-grow: 0;\n  min-height: unset;\n  padding-block: 7px;\n  max-width: 700px;\n"]))),C=(0,l.css)(y||(y=d(["\n  white-space: nowrap;\n"])));function D(e){var n=e.primaryButton,r=e.onCancel,o=e.cancelButtonText,c=void 0===o?"Cancel":o,s=e.backButtonText,b=e.onBackClick,d=e.errorMessage,p=e.contentClassName,g=e.className;return(0,f.jsx)("footer",{className:(0,l.cx)(O,g)},(0,f.jsx)("div",{className:(0,l.cx)(j,p)},s&&(0,f.jsx)(a.ZP,{variant:"default",onClick:b,className:C,leftGlyph:(0,f.jsx)(u(),null)},s),(0,f.jsx)("div",{className:w},d&&(0,f.jsx)(t.Z,{className:k,variant:"danger"},d),c&&(0,f.jsx)(a.ZP,{variant:"default",onClick:r,className:C},c||"Cancel"),(0,i.Kf)(n,"Button")?n:(0,f.jsx)(v,n))))}var N=r(91949),P=r(24246),B={primaryButtonText:{type:"text",default:"Save Draft",label:"Primary button text"},cancelButtonText:{type:"text",default:"Cancel",label:"Cancel button text"},backButtonText:{type:"text",default:"",label:"Back button text"},errorMessage:{type:"text",default:"There's an error on this page.",label:"Error message"}};function z(){return(0,P.jsx)(N.Z,{knobsConfig:B,children:function(e){var n=e.primaryButtonText,r=e.cancelButtonText,t=e.backButtonText,a=e.errorMessage;return(0,P.jsx)(D,{primaryButton:{text:n},cancelButtonText:r,backButtonText:t,errorMessage:a})}})}},39349:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/form-footer/example",function(){return r(45371)}])},58702:function(e,n){"use strict";var r=60103,t=60106,a=60107,l=60108,o=60114,i=60109,c=60110,s=60112,u=60113,f=60120,b=60115,d=60116,p=60121,g=60122,x=60117,m=60129,y=60131;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;r=h("react.element"),t=h("react.portal"),a=h("react.fragment"),l=h("react.strict_mode"),o=h("react.profiler"),i=h("react.provider"),c=h("react.context"),s=h("react.forward_ref"),u=h("react.suspense"),f=h("react.suspense_list"),b=h("react.memo"),d=h("react.lazy"),p=h("react.block"),g=h("react.server.block"),x=h("react.fundamental"),m=h("react.debug_trace_mode"),y=h("react.legacy_hidden")}function v(e){if("object"===typeof e&&null!==e){var n=e.$$typeof;switch(n){case r:switch(e=e.type){case a:case o:case l:case u:case f:return e;default:switch(e=e&&e.$$typeof){case c:case s:case d:case b:case i:return e;default:return n}}case t:return n}}}n.isFragment=function(e){return v(e)===a}},19185:function(e,n,r){"use strict";e.exports=r(58702)},55492:function(e,n,r){"use strict";r.d(n,{$:function(){return $},Z:function(){return q}});var t=r(27378),a=r(73007),l=r.n(a),o=r(4951),i=r.n(o),c=r(67604),s=r.n(c),u=r(81635),f=r.n(u),b=r(47364),d=r.n(b),p=r(17231),g=r(79303),x=r(37414),m=r(68087);function y(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function h(){return h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},h.apply(this,arguments)}function v(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var O,j,w,k,C,D,N,P,B,z,T,Z,_,I,S,L,E,R,M=["variant","dismissible","onClose","image","children","className"],$={Info:"info",Warning:"warning",Danger:"danger",Success:"success"},W=(0,p.css)(O||(O=v(["\n  position: relative;\n  display: flex;\n  min-height: 40px;\n  padding: 10px 12px 10px 20px;\n  border-width: 1px 1px 1px 0px;\n  border-style: solid;\n  border-radius: 12px;\n  font-size: 13px;\n  line-height: 20px;\n  font-family: 'Euclid Circular A', Helvetica, Arial, sans-serif; // TODO: Refresh \u2013 remove when fonts are updated\n\n  &:before {\n    content: '';\n    position: absolute;\n    width: 13px;\n    top: -1px;\n    bottom: -1px;\n    left: 0px;\n    border-radius: 12px 0px 0px 12px;\n  }\n"]))),H=(0,p.css)(j||(j=v(["\n  &:focus {\n    color: ",";\n    outline: 2px solid ",";\n    border: 2px solid ",";\n  }\n"])),g.D.gray.dark3,g.D.blue.light1,g.D.white),A=(0,p.css)(w||(w=v(["\n  flex-shrink: 0;\n"]))),X=(0,p.css)(k||(k=v(["\n  cursor: pointer;\n"]))),G=(0,p.css)(C||(C=v(["\n  // this margin is set to control text alignment with the base of the renderedImage\n  margin-top: 3px;\n  margin-bottom: 3px;\n\n  width: 32px;\n  height: 32px;\n  flex-shrink: 0;\n"]))),V=(y(I={},$.Info,{body:(0,p.css)(D||(D=v(["\n      color: ",";\n      border-color: ",";\n      border-left-color: ",";\n      background-color: ",";\n\n      &:before {\n        background: linear-gradient(\n          to left,\n          transparent 6px,\n          "," 6px\n        );\n      }\n    "])),g.D.blue.dark2,g.D.blue.light2,g.D.blue.base,g.D.blue.light3,g.D.blue.base),dismissButton:(0,p.css)(N||(N=v(["\n      color: ",";\n\n      &:active,\n      &:hover {\n        color: ",";\n\n        &:before {\n          background-color: ",";\n        }\n      }\n\n      &:focus {\n        &:before {\n          background-color: ",";\n        }\n      }\n    "])),g.D.blue.dark2,g.D.blue.dark2,g.D.blue.light2,g.D.blue.light2)}),y(I,$.Warning,{body:(0,p.css)(P||(P=v(["\n      color: ",";\n      border-color: ",";\n      border-left-color: ",";\n      background-color: ",";\n\n      &:before {\n        background: linear-gradient(\n          to left,\n          transparent 6px,\n          "," 6px\n        );\n      }\n    "])),g.D.yellow.dark2,g.D.yellow.light2,g.D.yellow.base,g.D.yellow.light3,g.D.yellow.base),dismissButton:(0,p.css)(B||(B=v(["\n      color: ",";\n\n      &:active,\n      &:hover {\n        color: ",";\n\n        &:before {\n          background-color: ",";\n        }\n      }\n\n      &:focus {\n        &:before {\n          background-color: ",";\n        }\n      }\n    "])),g.D.yellow.dark2,g.D.yellow.dark2,g.D.yellow.light2,g.D.yellow.light2)}),y(I,$.Danger,{body:(0,p.css)(z||(z=v(["\n      color: ",";\n      border-color: ",";\n      border-left-color: ",";\n      background-color: ",";\n\n      &:before {\n        background: linear-gradient(\n          to left,\n          transparent 6px,\n          "," 6px\n        );\n      }\n    "])),g.D.red.dark2,g.D.red.light2,g.D.red.base,g.D.red.light3,g.D.red.base),dismissButton:(0,p.css)(T||(T=v(["\n      color: ",";\n\n      &:active,\n      &:hover {\n        color: ",";\n\n        &:before {\n          background-color: ",";\n        }\n      }\n\n      &:focus {\n        &:before {\n          background-color: ",";\n        }\n      }\n    "])),g.D.red.dark2,g.D.red.dark2,g.D.red.light2,g.D.red.light2)}),y(I,$.Success,{body:(0,p.css)(Z||(Z=v(["\n      color: ",";\n      border-color: ",";\n      border-left-color: ",";\n      background-color: ",";\n\n      &:before {\n        background: linear-gradient(\n          to left,\n          transparent 6px,\n          "," 6px\n        );\n      }\n    "])),g.D.green.dark2,g.D.green.light2,g.D.green.base,g.D.green.light3,g.D.green.dark1),dismissButton:(0,p.css)(_||(_=v(["\n      color: ",";\n\n      &:active,\n      &:hover {\n        color: ",";\n\n        &:before {\n          background-color: ",";\n        }\n      }\n\n      &:focus {\n        &:before {\n          background-color: ",";\n        }\n      }\n    "])),g.D.green.dark2,g.D.green.dark2,g.D.green.light2,g.D.green.light2)}),I),F=(y(S={},$.Info,{color:g.D.blue.base,icon:i()}),y(S,$.Warning,{color:g.D.yellow.dark2,icon:l()}),y(S,$.Danger,{color:g.D.red.base,icon:s()}),y(S,$.Success,{color:g.D.green.dark1,icon:f()}),S),K=function(e,n){var r={marginLeft:void 0,marginRight:void 0};return e?(r.marginLeft="17px",r.marginRight="4px",n&&(r.marginRight="".concat(28,"px"))):(r.marginLeft="13px",r.marginRight="10px",n&&(r.marginRight="".concat(32,"px"))),(0,p.css)(L||(L=v(["\n    align-self: center;\n    flex-grow: 1;\n    margin-left: ",";\n    margin-right: ",";\n  "])),r.marginLeft,r.marginRight)};function q(e){var n=e.variant,r=void 0===n?$.Info:n,a=e.dismissible,l=void 0!==a&&a,o=e.onClose,i=void 0===o?function(){}:o,c=e.image,s=e.children,u=e.className,f=function(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,M),b=F[r],g=b.icon,y=b.color,O=c?t.cloneElement(c,{className:G}):(0,m.jsx)(g,{fill:y,className:(0,p.cx)(A,(0,p.css)(E||(E=v(["\n          margin-top: 3px;\n        "]))))});return(0,m.jsx)("div",h({role:"alert",className:(0,p.cx)(W,V[r].body,u)},f),O,(0,m.jsx)("div",{className:K(null!=c,l)},s),l&&(0,m.jsx)(x.Z,{className:(0,p.cx)(A,X,(0,p.css)(R||(R=v(["\n              margin-top: -3px;\n              left: 8px;\n            "]))),V[r].dismissButton,H),"aria-label":"Close Message",onClick:i},(0,m.jsx)(d(),null)))}},73007:function(e,n,r){e.exports=function(e,n,r,t){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=a(n);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},i.apply(this,arguments)}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function s(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var u,f,b={small:14,default:16,large:20,xlarge:24},d=["className","size","title","aria-label","aria-labelledby","fill","role"],p=function(e){var n,a=e.className,l=e.size,p=void 0===l?16:l,g=e.title,x=e["aria-label"],m=e["aria-labelledby"],y=e.fill,h=e.role,v=void 0===h?"img":h,O=c(e,d),j=r.css(u||(u=s(["\n    color: ",";\n  "])),y),w=r.css(f||(f=s(["\n    flex-shrink: 0;\n  "]))),k=function(e,n,r){var t,a,l=r["aria-label"],i=r["aria-labelledby"],c=r.title;switch(e){case"img":return l||i||c?(o(t={},"aria-labelledby",i),o(t,"aria-label",l),o(t,"title",c),t):{"aria-label":(a=n,"".concat(a.replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"))};case"presentation":return{"aria-hidden":!0,alt:""}}}(v,"ImportantWithCircle",(o(n={title:g},"aria-label",x),o(n,"aria-labelledby",m),n));return t.jsx("svg",i({className:r.cx(o({},j,null!=y),w,a),height:"number"==typeof p?p:b[p],width:"number"==typeof p?p:b[p],role:v},k,O,{viewBox:"0 0 16 16"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM7 4.5C7 3.94772 7.44772 3.5 8 3.5C8.55228 3.5 9 3.94772 9 4.5V8.5C9 9.05228 8.55228 9.5 8 9.5C7.44772 9.5 7 9.05228 7 8.5V4.5ZM9 11.5C9 12.0523 8.55228 12.5 8 12.5C7.44772 12.5 7 12.0523 7 11.5C7 10.9477 7.44772 10.5 8 10.5C8.55228 10.5 9 10.9477 9 11.5Z",fill:"currentColor"}))};return p.displayName="ImportantWithCircle",p.isGlyph=!0,p.propTypes={fill:l.default.string,size:l.default.oneOfType([l.default.number,l.default.string]),className:l.default.string},p}(r(27378),r(23615),r(17231),r(68087))},4951:function(e,n,r){e.exports=function(e,n,r,t){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=a(n);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},i.apply(this,arguments)}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function s(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var u,f,b={small:14,default:16,large:20,xlarge:24},d=["className","size","title","aria-label","aria-labelledby","fill","role"],p=function(e){var n,a=e.className,l=e.size,p=void 0===l?16:l,g=e.title,x=e["aria-label"],m=e["aria-labelledby"],y=e.fill,h=e.role,v=void 0===h?"img":h,O=c(e,d),j=r.css(u||(u=s(["\n    color: ",";\n  "])),y),w=r.css(f||(f=s(["\n    flex-shrink: 0;\n  "]))),k=function(e,n,r){var t,a,l=r["aria-label"],i=r["aria-labelledby"],c=r.title;switch(e){case"img":return l||i||c?(o(t={},"aria-labelledby",i),o(t,"aria-label",l),o(t,"title",c),t):{"aria-label":(a=n,"".concat(a.replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"))};case"presentation":return{"aria-hidden":!0,alt:""}}}(v,"InfoWithCircle",(o(n={title:g},"aria-label",x),o(n,"aria-labelledby",m),n));return t.jsx("svg",i({className:r.cx(o({},j,null!=y),w,a),height:"number"==typeof p?p:b[p],width:"number"==typeof p?p:b[p],role:v},k,O,{viewBox:"0 0 16 16"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4ZM8 6C8.55228 6 9 6.44772 9 7V11H9.5C9.77614 11 10 11.2239 10 11.5C10 11.7761 9.77614 12 9.5 12H6.5C6.22386 12 6 11.7761 6 11.5C6 11.2239 6.22386 11 6.5 11H7V7H6.5C6.22386 7 6 6.77614 6 6.5C6 6.22386 6.22386 6 6.5 6H8Z",fill:"currentColor"}))};return p.displayName="InfoWithCircle",p.isGlyph=!0,p.propTypes={fill:l.default.string,size:l.default.oneOfType([l.default.number,l.default.string]),className:l.default.string},p}(r(27378),r(23615),r(17231),r(68087))},47364:function(e,n,r){e.exports=function(e,n,r,t){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=a(n);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},i.apply(this,arguments)}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function s(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var u,f,b={small:14,default:16,large:20,xlarge:24},d=["className","size","title","aria-label","aria-labelledby","fill","role"],p=function(e){var n,a=e.className,l=e.size,p=void 0===l?16:l,g=e.title,x=e["aria-label"],m=e["aria-labelledby"],y=e.fill,h=e.role,v=void 0===h?"img":h,O=c(e,d),j=r.css(u||(u=s(["\n    color: ",";\n  "])),y),w=r.css(f||(f=s(["\n    flex-shrink: 0;\n  "]))),k=function(e,n,r){var t,a,l=r["aria-label"],i=r["aria-labelledby"],c=r.title;switch(e){case"img":return l||i||c?(o(t={},"aria-labelledby",i),o(t,"aria-label",l),o(t,"title",c),t):{"aria-label":(a=n,"".concat(a.replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"))};case"presentation":return{"aria-hidden":!0,alt:""}}}(v,"X",(o(n={title:g},"aria-label",x),o(n,"aria-labelledby",m),n));return t.jsx("svg",i({className:r.cx(o({},j,null!=y),w,a),height:"number"==typeof p?p:b[p],width:"number"==typeof p?p:b[p],role:v},k,O,{viewBox:"0 0 16 16"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.2028 3.40381C11.8123 3.01329 11.1791 3.01329 10.7886 3.40381L8.3137 5.87869L5.83883 3.40381C5.44831 3.01329 4.81514 3.01329 4.42462 3.40381L3.71751 4.11092C3.32699 4.50144 3.32699 5.13461 3.71751 5.52513L6.19238 8.00001L3.71751 10.4749C3.32699 10.8654 3.32699 11.4986 3.71751 11.8891L4.42462 12.5962C4.81514 12.9867 5.44831 12.9867 5.83883 12.5962L8.3137 10.1213L10.7886 12.5962C11.1791 12.9867 11.8123 12.9867 12.2028 12.5962L12.9099 11.8891C13.3004 11.4986 13.3004 10.8654 12.9099 10.4749L10.435 8.00001L12.9099 5.52513C13.3004 5.13461 13.3004 4.50144 12.9099 4.11092L12.2028 3.40381Z",fill:"currentColor"}))};return p.displayName="X",p.isGlyph=!0,p.propTypes={fill:l.default.string,size:l.default.oneOfType([l.default.number,l.default.string]),className:l.default.string},p}(r(27378),r(23615),r(17231),r(68087))}},function(e){e.O(0,[7690,1949,9774,2888,179],(function(){return n=39349,e(e.s=n);var n}));var n=e.O();_N_E=n}]);