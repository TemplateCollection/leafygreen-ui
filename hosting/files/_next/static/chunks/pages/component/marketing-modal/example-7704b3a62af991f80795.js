_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[82],{EyKB:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return ee}));var r=t("mXGw"),o=t.n(r),a=t("OVsn"),c=t("l6ru"),i=t("W0B4"),l=t.n(i),s=t("5MD+"),b=t("/zgD"),u=t("xriA"),d=t("G0rA"),f=t("6h0R");function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function g(){return(g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function j(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var O,h,y,x,k,m,v,w,C,N,P,T,S,M,z,E,_,B=["children","title","graphic","graphicStyle","onButtonClick","onLinkClick","onClose","buttonText","linkText","darkMode"],D="dark",L="light",R={Center:"center",Fill:"fill"},I=Object(s.css)(O||(O=j(["\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 25px;\n  margin-bottom: 10px;\n"]))),q=(p(x={},L,Object(s.css)(h||(h=j(["\n    color: ",";\n  "])),d.b.gray.dark2)),p(x,D,Object(s.css)(y||(y=j(["\n    color: ",";\n  "])),d.b.white)),x),A=Object(s.css)(k||(k=j(["\n  width: 600px;\n  padding: initial;\n  overflow: auto;\n"]))),G=Object(s.css)(m||(m=j(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),X=Object(s.css)(v||(v=j(["\n  display: block;\n"]))),F=Object(s.css)(w||(w=j(["\n  padding-top: 20px;\n  padding-bottom: 8px;\n"]))),H=Object(s.css)(C||(C=j(["\n  padding-bottom: 24px;\n"]))),J=Object(s.css)(N||(N=j(["\n  width: 100%;\n"]))),K=Object(s.css)(P||(P=j(["\n  font-family: Akzidenz, \u2018Helvetica Neue\u2019, Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0;\n  text-align: center;\n  padding: 0 92px;\n  padding-bottom: 24px;\n"]))),W=(p(M={},L,Object(s.css)(T||(T=j(["\n    color: ",";\n  "])),d.b.gray.dark1)),p(M,D,Object(s.css)(S||(S=j(["\n    color: ",";\n  "])),d.b.gray.light2)),M),Q=Object(s.css)(z||(z=j(["\n  line-height: 24px;\n  padding-bottom: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),V=function(e){var n,t,r=e.children,a=e.title,i=e.graphic,l=e.graphicStyle,d=void 0===l?"center":l,O=e.onButtonClick,h=e.onLinkClick,y=e.onClose,x=e.buttonText,k=e.linkText,m=e.darkMode,v=function(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,B),w=m?D:L;return Object(f.jsx)(u.c,g({},v,{contentClassName:A,setOpen:y,darkMode:m}),Object(f.jsx)("div",{className:Object(s.cx)(G,(n={},p(n,F,d===R.Center),p(n,H,d===R.Fill),n))},o.a.cloneElement(i,{className:"".concat(null!==(t=i.props.className)&&void 0!==t?t:""," ").concat(Object(s.cx)(X,p({},J,d===R.Fill)))})),Object(f.jsx)("div",{className:Object(s.cx)(K,W[w])},Object(f.jsx)("div",{className:Object(s.cx)(I,q[w])},a),r),Object(f.jsx)("div",{className:Q},Object(f.jsx)(c.c,{variant:"primary",onClick:O,darkMode:m},x),Object(f.jsx)(b.j,{tabIndex:0,onClick:h,hideExternalIcon:!0,className:Object(s.cx)(Object(s.css)(E||(E=j(["\n              margin-top: 24px;\n            "]))),p({},Object(s.css)(_||(_=j(["\n                color: #41c6ff;\n              "]))),m))},k)))};V.displayName="MarketingModal",V.propTypes={title:l.a.string.isRequired,graphic:l.a.element.isRequired,graphicStyle:l.a.oneOf(Object.values(R)),open:l.a.bool,onButtonClick:l.a.func,onLinkClick:l.a.func,onClose:l.a.func,children:l.a.node,className:l.a.string,buttonText:l.a.string.isRequired,linkText:l.a.string.isRequired};var Y=V,U=t("hnBo"),Z=t("eHoq");var $={title:{type:"text",default:"New Feature",label:"Title"},graphicStyle:{type:"select",options:Object.values(R),default:R.Center,label:"Graphic Style"},buttonText:{type:"text",default:"Okay",label:"Button Text"},linkText:{type:"text",default:"Cancel",label:"Link Text"},children:{type:"area",default:"This is some description text, and it is extra long so it fills up this modal. Another thing about the modals here.",label:"Children"},darkMode:{type:"boolean",default:!1,label:"Dark Mode"}};function ee(){var e=Object(r.useState)(!1),n=e[0],t=e[1];return Object(f.jsx)(U.a,{knobsConfig:$},(function(e){var r=e.title,i=e.graphicStyle,l=e.buttonText,s=e.linkText,b=e.children,u=e.darkMode;return Object(f.jsx)(o.a.Fragment,null,Object(f.jsx)(c.c,{onClick:function(){return t(!n)}},"Open Modal"),Object(f.jsx)(Y,{darkMode:u,open:n,onButtonClick:function(){return t(!1)},onLinkClick:function(){return t(!1)},onClose:function(){return t(!1)},title:r,className:Object(a.a)({name:"1739oy8",styles:"z-index:1"}),graphic:i===R.Center?Object(f.jsx)("img",{alt:"",src:"".concat(Z.a,"/images/examples/DataLake.png"),width:275,height:220}):Object(f.jsx)("img",{alt:"",src:"".concat(Z.a,"/images/examples/Realm_Rebrand_Image.png.png")}),graphicStyle:i,buttonText:l,linkText:s},b))}))}},eHoq:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return o}));var r="/",o="https://d2va9gm4j17fy9.cloudfront.net"},lBpq:function(e,n,t){"use strict";t.d(n,"a",(function(){return I}));var r=t("mXGw"),o=t.n(r),a=t("5MD+"),c=t("W0B4"),i=t.n(c),l=t("jGqM"),s=t("QmRY"),b=t("G0rA"),u=t("C1Ma"),d=t("726h"),f=t("6h0R");function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){j(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function j(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function O(){return(O=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function h(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var y,x,k,m,v,w,C,N,P,T,S,M,z,E,_,B,D=["size","darkMode","disabled","active","className","children"],L="light",R="dark",I={Default:"default",Large:"large",XLarge:"xlarge"},q=Object(a.css)(y||(y=h(["\n  border: none;\n  -webkit-appearance: unset;\n  padding: unset;\n"]))),A=Object(a.css)(x||(x=h(["\n  display: inline-block;\n  border-radius: 100px;\n  color: ",";\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: color 150ms ease-in-out;\n\n  // Set background to fully-transparent white for cross-browser compatability with Safari\n  //\n  // Safari treats \"transparent\" values in CSS as transparent black instead of white\n  // which can make things render differently across browsers if not defined explicitly.\n  background-color: rgba(255, 255, 255, 0);\n\n  &:before {\n    content: '';\n    transition: 150ms all ease-in-out;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    border-radius: 100%;\n    opacity: 0;\n    transform: scale(0.8);\n  }\n\n  &:active:before,\n  &:hover:before,\n  &:focus:before {\n    opacity: 1;\n    transform: scale(1);\n  }\n\n  &:focus {\n    outline: none;\n  }\n"])),b.b.gray.base),G=(j(w={},I.Default,Object(a.css)(k||(k=h(["\n    height: 28px;\n    width: 28px;\n  "])))),j(w,I.Large,Object(a.css)(m||(m=h(["\n    height: 35px;\n    width: 35px;\n  "])))),j(w,I.XLarge,Object(a.css)(v||(v=h(["\n    height: 42px;\n    width: 42px;\n  "])))),w),X=(j(P={},L,Object(a.css)(C||(C=h(["\n    &:active,\n    &:hover {\n      color: ",";\n\n      &:before {\n        background-color: ",";\n      }\n    }\n\n    &:focus {\n      color: ",";\n\n      &:before {\n        background-color: ",";\n      }\n    }\n  "])),b.b.gray.dark2,b.b.gray.light2,b.b.blue.dark2,b.b.blue.light2)),j(P,R,Object(a.css)(N||(N=h(["\n    &:active,\n    &:hover {\n      color: ",";\n\n      &:before {\n        background-color: ",";\n      }\n    }\n\n    &:focus {\n      color: ",";\n\n      &:before {\n        background-color: ",";\n      }\n    }\n  "])),b.b.white,b.b.gray.dark2,b.b.blue.light1,b.b.blue.dark2)),P),F=(j(M={},L,Object(a.css)(T||(T=h(["\n    color: ",";\n    pointer-events: none;\n    background-color: rgba(255, 255, 255, 0);\n\n    &:focus {\n      color: ",";\n      &:before {\n        background-color: ",";\n      }\n    }\n  "])),b.b.gray.light2,b.b.gray.light2,b.b.gray.light1)),j(M,R,Object(a.css)(S||(S=h(["\n    color: ",";\n    pointer-events: none;\n    background-color: rgba(255, 255, 255, 0);\n\n    &:focus {\n      color: ",";\n\n      &:before {\n        background-color: ",";\n      }\n    }\n  "])),b.b.gray.dark2,b.b.gray.dark2,b.b.gray.dark1)),M),H=(j(_={},L,Object(a.css)(z||(z=h(["\n    color: ",";\n    background-color: ",";\n\n    &:before {\n      background-color: ",";\n    }\n  "])),b.b.gray.dark2,b.b.gray.light2,b.b.gray.light2)),j(_,R,Object(a.css)(E||(E=h(["\n    color: ",";\n    background-color: ",";\n\n    &:before {\n      background-color: ",";\n    }\n  "])),b.b.white,b.b.gray.dark2,b.b.gray.dark2)),_),J=Object(a.css)(B||(B=h(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),K=o.a.forwardRef((function(e,n){var t,r,c=e.size,i=void 0===c?I.Default:c,b=e.darkMode,p=void 0!==b&&b,h=e.disabled,y=void 0!==h&&h,x=e.active,k=void 0!==x&&x,m=e.className,v=e.children,w=function(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,D),C=p?"dark":"light";Object(d.c)(w,"IconButton");var N=o.a.Children.map(v,(function(e){if(!e)return null;if(Object(s.d)(e,"Icon")||Object(u.d)(e)){var n=e.props,t=n.size,r=n.title,a={size:t||i};return"string"==typeof r&&0!==r.length||(a.title=!1),o.a.cloneElement(e,a)}return e})),P=g(g({},w),{},(j(r={ref:n,tabIndex:0},"aria-disabled",y),j(r,"href",y?void 0:w.href),j(r,"onClick",y?void 0:w.onClick),j(r,"className",Object(a.cx)(q,A,G[i],X[C],(j(t={},H[C],k),j(t,F[C],y),t),m)),r));return"string"==typeof w.href?Object(f.jsx)(l.a,O({as:"a"},P),Object(f.jsx)("div",{className:J},N)):Object(f.jsx)(l.a,O({as:"button"},P),Object(f.jsx)("div",{className:J},N))}));K.displayName="IconButton",K.propTypes={darkMode:i.a.bool,size:i.a.oneOf(Object.values(I)),className:i.a.string,children:i.a.node,disabled:i.a.bool,href:i.a.string,active:i.a.bool},n.b=K},x2mt:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/marketing-modal/example",function(){return t("EyKB")}])}},[["x2mt",0,1,4,2,3,5,6,7,8,9,13,17]]]);