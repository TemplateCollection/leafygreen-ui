_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[52],{"/FXl":function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var r=t("mXGw"),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"===typeof e?e(n):i(i({},n),e)),t},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(t),b=r,d=p["".concat(c,".").concat(b)]||p[b]||f[b]||a;return t?o.a.createElement(d,i(i({ref:n},s),{},{components:t})):o.a.createElement(d,i({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var a=t.length,c=new Array(a);c[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"===typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},Ff2n:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,"a",(function(){return r}))},eHHq:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return l}));var r=t("rePB"),o=t("Ff2n"),a=(t("mXGw"),t("/FXl")),c=t("pGnS");function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var s={};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.a)("wrapper",u(u(u({},s),t),{},{components:n,mdxType:"MDXLayout"}),Object(a.a)("h3",null,"The code component can be used in any area where you want to surface snippets of code to the user. Code components are often found in University & Documentation, but can also be used in product."),Object(a.a)("h5",null,'IMPORTANT: This component uses the font Source Code Pro in Regular, Italic, Bold, and Bold Italic weights. You can download these fonts here. Additionally, in order to view or change syntax highlighting you will need to install the Sketch Syntax Highlighter plugin. Unfortunately, there\'s no way (yet) to emulate the exact syntax highlighting that occurs in production \u2014 in production we use highlight.js. The syntax highlighter theme used in light mode is "Docco" and the one used in dark mode is "Agate", but feel free to use whichever one you prefer.'),Object(a.a)("p",null,"The default code component you should use most of the time is the sidebar version you see below. (The code snippet in this component does not wrap within its container. Instead, when code gets long, the user can scroll to see the rest of it. We decided on this interaction in order to keep the original structure of the code intact.)"),Object(a.a)("h4",null,"Stateless (default)"),Object(a.a)(c.b,{language:"js",mdxType:"Code"},"console.log('hello world')"),Object(a.a)("p",null,"This sidebar on the right can contain actions that the user can perform on the snippet of code, such as copying it to their clipboard. Eventually, we\u2019ll be able to extend new actions and functions to the code component, such as linking out a GitHub page or enlarging the code component viewport."),Object(a.a)("p",null,"Only use Source Code Pro within the code component. Do not use Akzidenz-Grotesk or any other font."))}l.isMDXComponent=!0},lBpq:function(e,n,t){"use strict";t.d(n,"a",(function(){return M}));var r,o,a,c,i=t("mXGw"),u=t.n(i),s=t("5MD+"),l=t("W0B4"),f=t.n(l),p=t("jGqM"),b=t("QmRY"),d=t("G0rA"),h=t("C1Ma"),g=t("726h");function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function O(){return(O=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function j(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function v(){var e=j(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return v=function(){return e},e}function w(){var e=j(["\n    color: ",";\n    background-color: ",";\n\n    &:before {\n      background-color: ",";\n    }\n  "]);return w=function(){return e},e}function k(){var e=j(["\n    color: ",";\n    background-color: ",";\n\n    &:before {\n      background-color: ",";\n    }\n  "]);return k=function(){return e},e}function P(){var e=j(["\n    color: ",";\n    pointer-events: none;\n  "]);return P=function(){return e},e}function x(){var e=j(["\n    color: ",";\n    pointer-events: none;\n  "]);return x=function(){return e},e}function E(){var e=j(["\n    &:active,\n    &:hover {\n      color: ",";\n\n      &:before {\n        background-color: ",";\n      }\n    }\n\n    &:focus:before {\n      background-color: ",";\n    }\n  "]);return E=function(){return e},e}function S(){var e=j(["\n    &:active,\n    &:hover {\n      color: ",";\n\n      &:before {\n        background-color: ",";\n      }\n    }\n\n    &:focus {\n      color: ",";\n\n      &:before {\n        background-color: ",";\n      }\n    }\n  "]);return S=function(){return e},e}function D(){var e=j(["\n    height: 42px;\n    width: 42px;\n  "]);return D=function(){return e},e}function T(){var e=j(["\n    height: 35px;\n    width: 35px;\n  "]);return T=function(){return e},e}function N(){var e=j(["\n    height: 28px;\n    width: 28px;\n  "]);return N=function(){return e},e}function C(){var e=j(["\n  display: inline-block;\n  border-radius: 100px;\n  color: ",";\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: color 150ms ease-in-out;\n\n  // Set background to fully-transparent white for cross-browser compatability with Safari\n  //\n  // Safari treats \"transparent\" values in CSS as transparent black instead of white\n  // which can make things render differently across browsers if not defined explicitly.\n  background-color: rgba(255, 255, 255, 0);\n\n  &:before {\n    content: '';\n    transition: 150ms all ease-in-out;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    border-radius: 100%;\n    opacity: 0;\n    transform: scale(0.8);\n  }\n\n  &:active:before,\n  &:hover:before,\n  &:focus:before {\n    opacity: 1;\n    transform: scale(1);\n  }\n\n  &:focus {\n    outline: none;\n  }\n"]);return C=function(){return e},e}function X(){var e=j(["\n  border: none;\n  -webkit-appearance: unset;\n  padding: unset;\n"]);return X=function(){return e},e}var _="light",I="dark",M={Default:"default",Large:"large",XLarge:"xlarge"},z=Object(s.css)(X()),G=Object(s.css)(C(),d.a.gray.base),B=(y(r={},M.Default,Object(s.css)(N())),y(r,M.Large,Object(s.css)(T())),y(r,M.XLarge,Object(s.css)(D())),r),A=(y(o={},_,Object(s.css)(S(),d.a.gray.dark2,d.a.gray.light2,d.a.blue.base,d.a.blue.light2)),y(o,I,Object(s.css)(E(),d.a.white,d.a.gray.dark2,d.a.blue.dark2)),o),H=(y(a={},_,Object(s.css)(x(),d.a.gray.light2)),y(a,I,Object(s.css)(P(),d.a.gray.dark2)),a),F=(y(c={},_,Object(s.css)(k(),d.a.gray.dark2,d.a.gray.light2,d.a.gray.light2)),y(c,I,Object(s.css)(w(),d.a.white,d.a.gray.dark2,d.a.gray.dark2)),c),L=Object(s.css)(v()),R=u.a.forwardRef((function(e,n){var t,r,o=e.size,a=void 0===o?M.Default:o,c=e.darkMode,i=void 0!==c&&c,l=e.disabled,f=void 0!==l&&l,d=e.active,j=void 0!==d&&d,v=e.className,w=e.children,k=function(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,["size","darkMode","disabled","active","className","children"]),P=i?"dark":"light";Object(g.c)(k,"IconButton");var x=u.a.Children.map(w,(function(e){if(!e)return null;if(Object(b.e)(e,"Icon")||Object(h.d)(e)){var n=e.props,t=n.size,r=n.title,o={size:t||a};return"string"==typeof r&&0!==r.length||(o.title=!1),u.a.cloneElement(e,o)}return e})),E=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){y(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},k,(y(r={ref:n,tabIndex:f?-1:0},"aria-disabled",f),y(r,"className",Object(s.cx)(z,G,B[a],A[P],(y(t={},H[P],f),y(t,F[P],j),t),v)),r));return"string"==typeof k.href?u.a.createElement(p.a,O({as:"a"},E),u.a.createElement("div",{className:L},x)):u.a.createElement(p.a,O({as:"button"},E),u.a.createElement("div",{className:L},x))}));R.displayName="IconButton",R.propTypes={darkMode:f.a.bool,size:f.a.oneOf(Object.values(M)),className:f.a.string,children:f.a.node,disabled:f.a.bool,href:f.a.string,active:f.a.bool},n.b=R},xsda:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/code/guidelines",function(){return t("eHHq")}])}},[["xsda",0,1,2,3,4,5,8,9,11,15]]]);