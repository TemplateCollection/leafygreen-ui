(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"+JCL":function(t,e){t.exports=function(t,e,n){return t===t&&(void 0!==n&&(t=t<=n?t:n),void 0!==e&&(t=t>=e?t:e)),t}},"0grs":function(t,e,n){var o=n("ijvI"),r=n("kLwA"),c=n("BNq/"),a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(c(t))return NaN;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=o(t);var n=i.test(t);return n||l.test(t)?s(t.slice(2),n?2:8):a.test(t)?NaN:+t}},"3UaM":function(t,e,n){var o=n("kLwA"),r=n("6y3U"),c=n("0grs"),a=Math.max,i=Math.min;t.exports=function(t,e,n){var l,s,u,p,f,b,d=0,v=!1,g=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function j(e){var n=l,o=s;return l=s=void 0,d=e,p=t.apply(o,n)}function O(t){return d=t,f=setTimeout(y,e),v?j(t):p}function x(t){var n=t-b;return void 0===b||n>=e||n<0||g&&t-d>=u}function y(){var t=r();if(x(t))return m(t);f=setTimeout(y,function(t){var n=e-(t-b);return g?i(n,u-(t-d)):n}(t))}function m(t){return f=void 0,h&&l?j(t):(l=s=void 0,p)}function w(){var t=r(),n=x(t);if(l=arguments,s=this,b=t,n){if(void 0===f)return O(b);if(g)return clearTimeout(f),f=setTimeout(y,e),j(b)}return void 0===f&&(f=setTimeout(y,e)),p}return e=c(e)||0,o(n)&&(v=!!n.leading,u=(g="maxWait"in n)?a(c(n.maxWait)||0,e):u,h="trailing"in n?!!n.trailing:h),w.cancel=function(){void 0!==f&&clearTimeout(f),d=0,l=b=s=f=void 0},w.flush=function(){return void 0===f?p:m(r())},w}},"4+7a":function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},"6M5B":function(t,e,n){var o=n("Rpx7"),r=Object.prototype,c=r.hasOwnProperty,a=r.toString,i=o?o.toStringTag:void 0;t.exports=function(t){var e=c.call(t,i),n=t[i];try{t[i]=void 0;var o=!0}catch(l){}var r=a.call(t);return o&&(e?t[i]=n:delete t[i]),r}},"6y3U":function(t,e,n){var o=n("B3M4");t.exports=function(){return o.Date.now()}},B3M4:function(t,e,n){var o=n("UZQZ"),r="object"==typeof self&&self&&self.Object===Object&&self,c=o||r||Function("return this")();t.exports=c},"BNq/":function(t,e,n){var o=n("J7g5"),r=n("xvoH");t.exports=function(t){return"symbol"==typeof t||r(t)&&"[object Symbol]"==o(t)}},J7g5:function(t,e,n){var o=n("Rpx7"),r=n("6M5B"),c=n("4+7a"),a=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?r(t):c(t)}},Rpx7:function(t,e,n){var o=n("B3M4").Symbol;t.exports=o},UZQZ:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("dm4u"))},ijvI:function(t,e,n){var o=n("t+ph"),r=/^\s+/;t.exports=function(t){return t?t.slice(0,o(t)+1).replace(r,""):t}},kLwA:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},m2NX:function(t,e,n){"use strict";n.d(e,"a",(function(){return Q})),n.d(e,"c",(function(){return Y}));var o=n("mXGw"),r=n.n(o),c=n("W0B4"),a=n.n(c),i=n("+xY2"),l=n("3UaM"),s=n.n(l),u=n("ZmRa");n.d(e,"b",(function(){return u.b}));var p,f,b,d=n("WM7k"),v=n("5MD+"),g=n("G0rA"),h=n("5iLb"),j=n("QmRY"),O=n("kI+E"),x=n("C1Ma"),y=n("mWRn"),m=n.n(y),w=n("6h0R");function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(Object(n),!0).forEach((function(e){N(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function N(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function M(){return(M=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function E(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function P(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,c=[],a=!0,i=!1;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(c.push(o.value),!e||c.length!==e);a=!0);}catch(t){i=!0,r=t}finally{try{a||null==n.return||n.return()}finally{if(i)throw r}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return S(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var T,I,B,L,A,R,U,Z,D,F,H,J,W=["open","setOpen","className","children","trigger","triggerEvent","darkMode","enabled","align","justify","spacing","id","shouldClose","usePortal","portalClassName","portalContainer","scrollContainer","popoverZIndex","refEl"],z=Object(v.css)(T||(T=E(["\n  margin: unset;\n  font-family: ",";\n  color: ",";\n  font-weight: 400;\n"])),h.b.default,g.b.gray.dark3),G=Object(v.css)(I||(I=E(["\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0px;\n"]))),X=Object(v.css)(B||(B=E(["\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0px;\n"]))),Y={Hover:"hover",Click:"click"},$="light",_="dark",Q={Top:u.a.Top,Bottom:u.a.Bottom,Left:u.a.Left,Right:u.a.Right},q=Object(v.css)(L||(L=E(["\n  padding: 14px 16px;\n  border-radius: 3px;\n  box-shadow: 0px 2px 4px -1px ",";\n  cursor: default;\n  overflow-wrap: break-word;\n"])),Object(i.d)(.8,g.b.black)),K=Object(v.css)(A||(A=E(["\n  position: relative;\n"]))),V=(N(J={},_,{tooltip:Object(v.css)(R||(R=E(["\n      background-color: ",";\n      color: ",";\n    "])),g.b.gray.dark3,g.b.gray.light1),children:Object(v.css)(U||(U=E(["\n      color: ",";\n    "])),g.b.gray.light1),notch:Object(v.css)(Z||(Z=E(["\n      background-color: ",";\n      box-shadow: 2px 2px 4px ",";\n    "])),g.b.gray.dark3,Object(i.d)(.9,g.b.black))}),N(J,$,{tooltip:Object(v.css)(D||(D=E(["\n      background-color: ",";\n      color: ",";\n      border: 1px solid ",";\n    "])),g.b.gray.light3,g.b.gray.dark2,g.b.gray.light2),children:Object(v.css)(F||(F=E(["\n      color: ",";\n    "])),g.b.gray.dark2),notch:Object(v.css)(H||(H=E(["\n      background-color: ",";\n      border: 1px solid ",";\n      box-shadow: 2px 2px 4px ",";\n    "])),g.b.gray.light3,g.b.gray.light2,Object(i.d)(.9,g.b.black))}),J),tt=function(t){t.stopPropagation()};function et(t){var e=t.open,n=t.setOpen,c=t.className,a=t.children,i=t.trigger,l=t.triggerEvent,g=void 0===l?Y.Hover:l,h=t.darkMode,y=void 0!==h&&h,k=t.enabled,N=void 0===k||k,S=t.align,T=void 0===S?"top":S,I=t.justify,B=void 0===I?"start":I,L=t.spacing,A=void 0===L?12:L,R=t.id,U=t.shouldClose,Z=t.usePortal,D=void 0===Z||Z,F=t.portalClassName,H=t.portalContainer,J=t.scrollContainer,Q=t.popoverZIndex,et=t.refEl,nt=function(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},c=Object.keys(t);for(o=0;o<c.length;o++)n=c[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(o=0;o<c.length;o++)n=c[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}(t,W),ot="boolean"==typeof e,rt=P(Object(o.useState)(!1),2),ct=rt[0],at=rt[1],it=Object(O.b)(),lt=ot?e:ct,st=ot&&n?n:at,ut=P(Object(o.useState)(null),2),pt=ut[0],ft=ut[1],bt=null!=R?R:null==pt?void 0:pt.id,dt=Object(d.e)({prefix:"tooltip",id:bt});Object(o.useEffect)((function(){(i&&Object(j.d)(i,"Icon")||Object(x.d)(i))&&console.warn("Using a LeafyGreenUI Icon or Glyph component as a trigger will not render a Tooltip, as these components do not render their children. To use, please wrap your trigger element in another HTML tag.")}),[i]);var vt=Object(o.useCallback)((function(){("function"!=typeof U||U())&&st(!1)}),[st,U]),gt=Object(o.useCallback)((function(t,e){switch(t){case Y.Hover:return{onMouseEnter:s()((function(t){n("onMouseEnter",t),st(!0)}),35),onMouseLeave:s()((function(t){n("onMouseLeave",t),vt()}),35),onFocus:function(t){n("onFocus",t),st(!0)},onBlur:function(t){n("onBlur",t),vt()}};case Y.Click:default:return{onClick:function(t){t.target!==pt&&(n("onClick",t),st((function(t){return!t})))}}}function n(t,n){e&&e[t]&&"function"==typeof e[t]&&e[t](n)}}),[vt,st,pt]);Object(d.b)(vt,{enabled:lt});var ht=Object(o.useCallback)((function(t){pt&&!pt.contains(t.target)&&vt()}),[vt,pt]);Object(d.c)("click",ht,{enabled:lt&&"click"===g});var jt=C({refEl:et,popoverZIndex:Q},D?{spacing:A,usePortal:D,portalClassName:F,portalContainer:H,scrollContainer:J}:{spacing:A,usePortal:D}),Ot=y?_:$,xt=N&&lt,yt=Object(w.jsx)(u.c,M({key:"tooltip",active:xt,align:T,justify:B,adjustOnMutation:!0,onClick:tt},jt),(function(t){var e=function(t,e,n){if(!t||!e||!n)return{notchContainer:"",notch:"",tooltip:""};var o,r,c={},a={},i=10,l=0,s="";switch(t){case"top":case"bottom":switch(i=15,o=n.width/2-10,l=m()(o,5,i),r=o<=5,c.left="0px",c.right="0px","top"===t?(a.top="calc(100% - 1px)",c.top="".concat(-5,"px")):(a.bottom="calc(100% - 1px)",c.bottom="".concat(-5,"px")),e){case u.b.Start:a.left="".concat(l,"px"),r&&(s="translateX(-".concat(5-o,"px)"));break;case u.b.Middle:case u.b.Fit:a.left="0px",a.right="0px";break;case u.b.End:a.right="".concat(l,"px"),r&&(s="translateX(".concat(5-o,"px)"))}break;case"left":case"right":switch(i=10,o=n.height/2-10,l=m()(o,5,i),r=o<=5,c.top="0px",c.bottom="0px","left"===t?(c.left="".concat(-5,"px"),a.left="100%"):(c.right="".concat(-5,"px"),a.right="100%"),e){case u.b.Start:a.top="".concat(l,"px"),r&&(s="translateY(-".concat(5-o,"px)"));break;case u.b.Middle:case u.b.Fit:a.top="0px",a.bottom="0px";break;case u.b.End:a.bottom="".concat(l,"px"),r&&(s="translateY(".concat(5-o,"px)"))}}return{notchContainer:Object(v.css)(p||(p=E(["\n      position: absolute;\n      width: ","px;\n      height: ","px;\n      overflow: hidden;\n      margin: auto;\n      pointer-events: none;\n      ",";\n    "])),20,20,Object(v.css)(a)),notch:Object(v.css)(f||(f=E(["\n      ",";\n      position: absolute;\n      transform: rotate(45deg);\n      width: ","px;\n      height: ","px;\n      margin: auto;\n    "])),Object(v.css)(c),10,10),tooltip:Object(v.css)(b||(b=E(["\n      min-width: ","px;\n      transform: ",";\n    "])),2*l+20,s)}}(t.align,t.justify,t.referenceElPos),n=e.notchContainer,o=e.notch,r=e.tooltip;return Object(w.jsx)("div",M({},nt,{role:"tooltip",id:dt,className:Object(v.cx)(q,r,V[Ot].tooltip,c),ref:ft}),Object(w.jsx)("div",{className:Object(v.cx)(z,16===it?X:G,V[Ot].children)},a),Object(w.jsx)("div",{className:n},Object(w.jsx)("div",{className:Object(v.cx)(o,V[Ot].notch)})))}));return i?"function"==typeof i?i(C(C({},gt(g)),{},{className:K,"aria-describedby":xt?dt:void 0,children:yt})):r.a.cloneElement(i,C(C({},gt(g,i.props)),{},{"aria-describedby":xt?dt:void 0,children:Object(w.jsx)(r.a.Fragment,null,i.props.children,yt),className:Object(v.cx)(K,i.props.className)})):yt}et.displayName="Tooltip",et.propTypes={children:a.a.node,className:a.a.string,align:a.a.oneOf(Object.values(Q)),justify:a.a.oneOf(Object.values(u.b)),trigger:a.a.oneOfType([a.a.node,a.a.func]),triggerEvent:a.a.oneOf(Object.values(Y)),darkMode:a.a.bool,enabled:a.a.bool,open:a.a.bool,setOpen:a.a.func,id:a.a.string,shouldClose:a.a.func,usePortal:a.a.bool,portalClassName:a.a.string},e.d=et},mWRn:function(t,e,n){var o=n("+JCL"),r=n("0grs");t.exports=function(t,e,n){return void 0===n&&(n=e,e=void 0),void 0!==n&&(n=(n=r(n))===n?n:0),void 0!==e&&(e=(e=r(e))===e?e:0),o(r(t),e,n)}},"t+ph":function(t,e){var n=/\s/;t.exports=function(t){for(var e=t.length;e--&&n.test(t.charAt(e)););return e}},xvoH:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}}}]);