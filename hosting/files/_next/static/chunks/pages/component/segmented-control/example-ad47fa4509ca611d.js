(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9738],{62369:function(n,e,r){var o=r(47991);n.exports=function(n,e){var r;if("function"!=typeof e)throw new TypeError("Expected a function");return n=o(n),function(){return--n>0&&(r=e.apply(this,arguments)),n<=1&&(e=void 0),r}}},23954:function(n){n.exports=function(n){return null===n}},87721:function(n,e,r){var o=r(62369);n.exports=function(n){return o(2,n)}},94919:function(n,e,r){var o=r(91936),t=1/0;n.exports=function(n){return n?(n=o(n))===t||n===-1/0?17976931348623157e292*(n<0?-1:1):n===n?n:0:0===n?n:0}},47991:function(n,e,r){var o=r(94919);n.exports=function(n){var e=o(n),r=e%1;return e===e?r?e-r:e:0}},40341:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return Hn}});var o=r(27378),t=r(2998),a=r(23954),i=r.n(a),c=r(87721),s=r.n(c),l=r(68397),d=r(17231),u=r(59726),p=r(92677),f=r(79303),g=r(90440),h=r(83685),v=r(68087),b=r(81659);function x(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function m(){return m=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},m.apply(this,arguments)}function w(n,e){if(null==n)return{};var r,o,t=function(n,e){if(null==n)return{};var r,o,t={},a=Object.keys(n);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(t[r]=n[r]);return t}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function y(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function k(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var o,t,a=[],i=!0,c=!1;try{for(r=r.call(n);!(i=(o=r.next()).done)&&(a.push(o.value),!e||a.length!==e);i=!0);}catch(n){c=!0,t=n}finally{try{i||null==r.return||r.return()}finally{if(c)throw t}}return a}}(n,e)||function(n,e){if(n){if("string"==typeof n)return _(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=n[r];return o}var C,j,z,D,S,O,E,N,F,M,A,I,P,L,R,H,K,V,Z,T,$="small",B="default",X="large",q="dark",G="light",U=["children","name","size","darkMode","defaultValue","value","onChange","className","label","followFocus","aria-controls"],J=(0,p.zB)("selection-indicator"),Q=(0,p.zB)("hover-indicator"),W=(0,d.css)(C||(C=y(["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  z-index: 0;\n  font-family: ",";\n"])),g.Vl.default),Y={light:(0,d.css)(j||(j=y(["\n    letter-spacing: 1.4px;\n    color: ",";\n  "])),f.D.gray.dark1),dark:(0,d.css)(z||(z=y(["\n    color: ",";\n  "])),f.s.gray.light1)},nn=(x(E={},$,(0,d.css)(D||(D=y(["\n    --segment-gap: 1px; // space between segments\n    --wrapper-padding: 0px;\n    --outer-radius: 6px;\n    --indicator-radius: 6px;\n    --indicator-height: 100%;\n  "])))),x(E,B,(0,d.css)(S||(S=y(["\n    --segment-gap: 5px; // space between segments\n    --wrapper-padding: 3px;\n    --outer-radius: 8px;\n    --indicator-radius: 6px;\n    --indicator-height: calc(100% - 2 * var(--wrapper-padding));\n  "])))),x(E,X,(0,d.css)(O||(O=y(["\n    --segment-gap: 5px; // space between segments\n    --wrapper-padding: 3px;\n    --outer-radius: 12px;\n    --indicator-radius: 6px;\n    --indicator-height: calc(100% - 2 * var(--wrapper-padding));\n  "])))),E),en=(x(M={},G,(0,d.css)(N||(N=y(["\n    --background-color: ",";\n    --border-color: transparent;\n    --border-width: 0px;\n    --inner-shadow: 0px 1px 2px "," inset;\n    --outer-shadow: 0px 1px 1px ",";\n    // Hover indicator\n    --hover-background-color: ",";\n    // Selection indicator\n    --indicator-background-color: ",";\n    --indicator-border-color: ",";\n    --indicator-shadow: 0px 1px 2px ",";\n  "])),f.D.gray.light3,(0,t.DZ)(.7,f.D.black),f.D.gray.light2,f.D.white,f.D.black,f.D.black,(0,t.DZ)(.7,f.D.gray.dark3))),x(M,q,(0,d.css)(F||(F=y(["\n    --background-color: ",";\n    --border-color: ",";\n    --border-width: 1px;\n    --inner-shadow: unset;\n    --outer-shadow: unset;\n    --hover-background-color: ",";\n    --indicator-background-color: ",";\n    --indicator-border-color: ",";\n    --indicator-shadow: 0px 1px 2px ",";\n  "])),f.s.gray.dark3,f.s.gray.dark1,f.s.gray.dark2,f.s.gray.dark1,f.s.gray.base,(0,t.DZ)(.7,f.s.gray.dark3))),M),rn=(x(L={},$,(0,d.css)(A||(A=y(["\n    --segment-gap: 1px;\n    --wrapper-padding: 0px;\n    --outer-radius: 4px;\n    --indicator-radius: 4px;\n    --indicator-height: 100%;\n  "])))),x(L,B,(0,d.css)(I||(I=y(["\n    --segment-gap: 5px;\n    --wrapper-padding: 3px;\n    --outer-radius: 6px;\n    --indicator-radius: 6px;\n    --indicator-height: calc(100% - 2 * var(--wrapper-padding));\n  "])))),x(L,X,(0,d.css)(P||(P=y(["\n    --segment-gap: 5px;\n    --wrapper-padding: 3px;\n    --outer-radius: 6px;\n    --indicator-radius: 6px;\n    --indicator-height: calc(100% - 2 * var(--wrapper-padding));\n  "])))),L),on=function(n){var e=n.mode,r=void 0===e?"light":e,o=n.size,t=void 0===o?"default":o;return(0,d.cx)(nn[t],en[r],(0,d.css)(R||(R=y(["\n      position: relative;\n      display: grid;\n      grid-auto-flow: column;\n      grid-auto-columns: 1fr;\n      gap: var(--segment-gap);\n      align-items: center;\n      padding: var(--wrapper-padding);\n      border: var(--border-width) solid var(--border-color);\n      border-radius: var(--outer-radius);\n      --indicator-radius: 6px;\n      background-color: var(--background-color);\n\n      &:focus {\n        outline: none;\n      }\n\n      // Frame shadow\n      &:after {\n        content: '';\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        border-radius: inherit;\n        box-shadow: var(--inner-shadow), var(--outer-shadow);\n        z-index: 1;\n        pointer-events: none;\n      }\n    "]))),x({},rn[t],"dark"===r))},tn=(0,d.css)(H||(H=y(["\n  position: absolute;\n  width: 100%;\n  height: var(--indicator-height);\n  z-index: 2;\n  box-shadow: var(--indicator-shadow-color);\n  border-radius: var(--indicator-radius);\n  border-width: 1px;\n  border-style: solid;\n  background-color: var(--indicator-background-color);\n  border-color: var(--indicator-border-color);\n  transition: transform 150ms ease-in-out;\n"]))),an=(0,d.css)(K||(K=y(["\n  position: absolute;\n  height: var(--indicator-height);\n  width: 100%;\n  border-radius: var(--indicator-radius);\n  background-color: var(--hover-background-color);\n  z-index: 0;\n  opacity: 0;\n  transition: opacity 100ms ease-in-out;\n"]))),cn=o.createContext({size:"default",mode:"light",name:"",followFocus:!0}),sn=o.forwardRef((function(n,e){var r,t,a=n.children,c=n.name,s=n.size,f=void 0===s?"default":s,b=n.darkMode,_=void 0!==b&&b,C=n.defaultValue,j=n.value,z=n.onChange,D=n.className,S=n.label,O=n.followFocus,E=void 0===O||O,N=n["aria-controls"],F=w(n,U),M=(0,u.LB)().usingKeyboard,A=(0,o.useRef)(null),I=k((0,o.useState)(!1),2),P=I[0],L=I[1],R=(0,l.DK)({prefix:"option"}),H=_?"dark":"light",K=(0,l.ue)({prefix:"segmented-control",id:null!=c?c:S}),$=(0,o.useMemo)((function(){return null!=j}),[j]),B=k((0,o.useState)(null!=C?C:j),2),X=B[0],q=B[1],G=k((0,o.useState)(null!=C?C:j),2),nn=G[0],en=G[1];r=function(){var n=o.Children.toArray(a)[0];!X&&(0,p.Kf)(n,"SegmentedControlOption")&&(q(n.props.value),en(n.props.value))},t=(0,o.useRef)(!1),(0,o.useEffect)((function(){t.current||(t.current=!0,r())}),[r]);var rn=(0,o.useCallback)((function(){var n;null!==(n=A.current)&&void 0!==n&&n.contains(document.activeElement)?L(!0):L(!1)}),[]);(0,o.useEffect)((function(){return document.addEventListener("focusin",rn),function(){document.removeEventListener("focusin",rn)}}),[rn]);var sn=(0,o.useCallback)((function(n){X!==n&&(q(n),null==z||z(n))}),[X,z]),ln=(0,o.useMemo)((function(){return o.Children.map(a,(function(n,e){var r,t;if(!(0,p.Kf)(n,"SegmentedControlOption"))return jn("Error in Segmented Control: ".concat(n," is not a SegmentedControlOption")),n;N||n.props["aria-controls"]||zn("The property `aria-controls` is required on each Segmented Control option, or on the Segmented Control parent.");var a=null!==(r=n.props.id)&&void 0!==r?r:"".concat(K,"-").concat(e),i=$?n.props.value===j||!!n.props.checked:n.props.value===X,c=n.props.value===nn;return o.cloneElement(n,{_id:a,_checked:i,_focused:c,_index:e,"aria-controls":null!==(t=n.props["aria-controls"])&&void 0!==t?t:N,_onClick:sn,_onHover:function(n){fn(n?e:null)},ref:R("".concat(e)),isfocusInComponent:P})}))}),[a,$,j,X,nn,K,N,sn,R,P]),dn=(0,o.useMemo)((function(){return ln?o.Children.map(ln,(function(n){var e;return null==n||null===(e=n.props)||void 0===e?void 0:e._id})).join(" "):""}),[ln]),un=k((0,o.useState)(null),2),pn=un[0],fn=un[1],gn=(0,o.useMemo)((function(){return o.Children.toArray(ln).findIndex((function(n){return $?n.props.value===j:n.props.value===X}))}),[j,$,ln,X]),hn=(0,o.useMemo)((function(){return o.Children.toArray(ln).findIndex((function(n){return n.props.value===nn}))}),[ln,nn]),vn=function(n){var e=o.Children.toArray(ln).filter((function(n){return!n.props.disabled})),r=e.length,t=e[n=n>=r?n%r:n<0?r+n:n].props.value;en(t)};(0,o.useEffect)((function(){M||en(X)}),[X,M]);var bn=(0,o.useCallback)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(i()(n))return(0,d.css)(V||(V=y(["\n          width: 0;\n        "])));var e=o.Children.count(ln),r=1/e*100,t=100*n;return(0,d.css)(Z||(Z=y(["\n        opacity: 1;\n        width: calc(","% - 2 * var(--wrapper-padding));\n        transform: translateX(\n          calc(","% + "," * var(--wrapper-padding))\n        );\n      "])),r,t,2*n+1)}),[ln]);return(0,v.jsx)(cn.Provider,{value:{size:f,mode:H,name:K,followFocus:E}},(0,v.jsx)("div",m({ref:A,className:(0,d.cx)(W,x({},(0,d.css)(T||(T=y(["\n              font-family: ",";\n            "])),g.Vl.legacy),_),D)},F),S&&(0,v.jsx)(h.Lh,{className:Y[H]},S),(0,v.jsx)("div",{role:"tablist","aria-label":K,"aria-owns":dn,className:(0,d.cx)(on({mode:H,size:f})),ref:e,onKeyDownCapture:function(n){switch(n.stopPropagation(),n.key){case"ArrowRight":vn(hn+1);break;case"ArrowLeft":vn(hn-1)}}},ln,(0,v.jsx)("div",m({},J.prop,{className:(0,d.cx)(tn,bn(gn))})),(0,v.jsx)("div",m({},Q.prop,{className:(0,d.cx)(an,bn(pn))})))))}));sn.displayName="SegmentedControl";var ln,dn,un,pn,fn,gn,hn,vn,bn,xn,mn,wn,yn,kn,_n,Cn,jn=s()(console.error),zn=s()(console.warn),Dn=["value","children","disabled","as","className","aria-controls","_id","_checked","_focused","_index","_onClick","_onHover","isfocusInComponent"],Sn=(x(un={},G,(0,d.css)(ln||(ln=y(["\n    --base-text-color: ",";\n    --base-background-color: transparent;\n    --base-shadow-color: transparent;\n    // Hover\n    --hover-text-color: ",";\n    --hover-background-color: ",";\n    // Selected\n    --active-text-color: ",";\n    // Disabled\n    --disabled-text-color: ",";\n    // Divider\n    --divider-background-color: ",";\n  "])),f.D.gray.dark1,f.D.gray.dark3,f.D.white,f.D.white,f.D.gray.light1,f.D.gray.light1)),x(un,q,(0,d.css)(dn||(dn=y(["\n    --base-text-color: ",";\n    --base-background-color: transparent;\n    --base-shadow-color: transparent;\n    // Hover\n    --hover-text-color: ",";\n    --hover-background-color: ",";\n    // Selected\n    --active-text-color: ",";\n    // Disabled\n    --disabled-text-color: ",";\n    // Divider\n    --divider-background-color: ",";\n  "])),f.s.gray.light1,f.s.gray.light2,f.s.gray.dark2,f.s.white,f.s.gray.dark1,f.s.gray.light1)),un),On=(x(hn={},$,(0,d.css)(pn||(pn=y(["\n    --font-size: 12px;\n    --line-height: 16px;\n    --padding-block: 3px;\n    --padding-inline: 12px;\n    --text-transform: uppercase;\n    --font-weight: 700;\n    --divider-height: 12px;\n  "])))),x(hn,B,(0,d.css)(fn||(fn=y(["\n    --font-size: 13px;\n    --line-height: 24px;\n    --padding-block: 3px; // top/bottom\n    --padding-inline: 12px; // left/right\n    --text-transform: none;\n    --font-weight: 500;\n    --divider-height: 18px;\n  "])))),x(hn,X,(0,d.css)(gn||(gn=y(["\n    --font-size: 16px;\n    --line-height: 28px;\n    --padding-block: 6px;\n    --padding-inline: 12px;\n    --text-transform: none;\n    --font-weight: 500;\n    --divider-height: 20px;\n  "])))),hn),En=function(n){var e=n.mode,r=void 0===e?"light":e,o=n.size,t=void 0===o?"default":o,a=n.baseFontSize,i=void 0===a?14:a;return(0,d.cx)(Sn[r],On[t],(0,d.css)(vn||(vn=y(["\n      position: relative;\n      display: flex;\n      width: 100%;\n      align-items: center;\n      justify-content: center;\n      z-index: 3;\n\n      &:first-child,\n      &[data-lg-checked='true'],\n      &[data-lg-checked='true'] + [data-lg-checked='false'],\n      &:focus-within + :not(:focus-within) {\n        --divider-background-color: transparent;\n      }\n\n      /* \n      * Adds the divider line to unselected segments \n      */\n      &:before {\n        --divider-width: 1px;\n        content: '';\n        position: absolute;\n        height: var(--divider-height);\n        width: var(--divider-width);\n        left: calc(0px - (var(--segment-gap) + var(--divider-width)) / 2);\n        top: calc(\n          (\n              var(--line-height) + var(--padding-block) * 2 -\n                var(--divider-height)\n            ) / 2\n        );\n        transition: background-color 150ms ease-in-out;\n        background-color: var(--divider-background-color);\n      }\n    "]))),x({},(0,d.css)(bn||(bn=y(["\n        --font-size: 16px;\n      "]))),"default"===t&&16===i))},Nn=(0,d.css)(xn||(xn=y(["\n  width: 100%;\n  height: 100%;\n  text-decoration: none;\n"]))),Fn=(0,d.css)(mn||(mn=y(["\n  font-family: ",";\n  display: inline-flex;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  padding: var(--padding-block) var(--padding-inline);\n  background-color: var(--base-background-color);\n  border-radius: var(--indicator-radius);\n  text-align: center;\n  font-size: var(--font-size);\n  line-height: var(--line-height);\n  text-transform: var(--text-transform, none);\n  font-weight: var(--font-weight);\n  color: var(--base-text-color);\n  box-shadow: 0px 1px 2px var(--base-shadow-color);\n  cursor: pointer;\n  transition: 150ms ease-in-out;\n  transition-property: color, box-shadow;\n  text-decoration: none;\n  outline: none;\n  border: none;\n\n  &:hover {\n    color: var(--hover-text-color);\n  }\n\n  &[aria-selected='true'] {\n    color: var(--active-text-color);\n  }\n\n  &:disabled {\n    color: var(--disabled-text-color);\n    cursor: not-allowed;\n  }\n"])),g.Vl.default),Mn=(x(kn={},G,(0,d.css)(wn||(wn=y(["\n    &:focus {\n      box-shadow: 0 0 0 2px ",", 0 0 0 4px ",";\n    }\n  "])),f.D.white,f.D.blue.light1)),x(kn,q,(0,d.css)(yn||(yn=y(["\n    &:focus {\n      box-shadow: 0 0 0 2px ",";\n    }\n  "])),f.s.focus)),kn),An=(0,d.css)(_n||(_n=y(["\n  display: inline-flex;\n  min-height: var(--line-height);\n  align-items: center;\n  gap: calc(var(--font-size) / 2);\n"]))),In=o.forwardRef((function(n,e){var r=n.value,t=n.children,a=n.disabled,i=void 0!==a&&a,c=n.as,s=n.className,l=n["aria-controls"],p=n._id,f=n._checked,h=n._focused;n._index;var k=n._onClick,_=n._onHover,C=n.isfocusInComponent,j=w(n,Dn),z=(0,o.useContext)(cn),D=z.size,S=z.mode,O=z.followFocus,E=(0,u.LB)().usingKeyboard,N=(0,u.Zn)(),F=(0,o.useRef)(!1),M=(0,o.useRef)(null);return(0,o.useEffect)((function(){var n,e;F.current&&E&&h&&C&&(null==M||null===(n=M.current)||void 0===n||n.focus(),O&&(null==M||null===(e=M.current)||void 0===e||e.click())),F.current=!0}),[h,O,E,C]),(0,v.jsx)("div",{className:(0,d.cx)(En({mode:S,size:D,baseFontSize:N}),s),ref:e,"data-lg-checked":f},(0,v.jsx)(b.Z,m({as:c,tabIndex:-1,className:Nn},j),(0,v.jsx)("button",{role:"tab",id:p,tabIndex:h?0:-1,"aria-selected":f,"aria-controls":l,disabled:i,className:(0,d.cx)(Fn,x({},Mn[S],E)),ref:M,onClick:function(){null==k||k(r)},onMouseEnter:function(){null==_||_(!0)},onMouseLeave:function(){null==_||_(!1)}},(0,v.jsx)("span",{className:(0,d.cx)(An,x({},(0,d.css)(Cn||(Cn=y(["\n                  font-family: ",";\n                "])),g.Vl.legacy),"dark"===S))},t))))}));In.displayName="SegmentedControlOption";var Pn=r(91949),Ln=r(24246),Rn={size:{type:"select",default:"default",options:["small","default","large"],label:"Size"},darkMode:{type:"boolean",default:!1,label:"Dark Mode"},label:{type:"text",default:"Fruit",label:"Label"},followFocus:{type:"boolean",default:!0,label:"Follow focus"},disabled:{type:"boolean",default:!1,label:"Disabled"}};function Hn(){return(0,Ln.jsx)(Pn.Z,{knobsConfig:Rn,children:function(n){var e=n.darkMode,r=n.size,o=n.label,t=n.followFocus,a=n.disabled;return(0,Ln.jsxs)(sn,{label:o,name:"fruit",size:r,darkMode:e,followFocus:t,onChange:function(n){return console.log(n)},"aria-controls":"",children:[(0,Ln.jsx)(In,{value:"dragonfruit",children:"Dragonfruit"}),(0,Ln.jsx)(In,{value:"eggplant",children:"Eggplant"}),(0,Ln.jsx)(In,{value:"fig",children:"Fig"}),(0,Ln.jsx)(In,{disabled:a,value:"grape",children:"Grape"})]})}})}},45924:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/segmented-control/example",function(){return r(40341)}])},58702:function(n,e){"use strict";var r=60103,o=60106,t=60107,a=60108,i=60114,c=60109,s=60110,l=60112,d=60113,u=60120,p=60115,f=60116,g=60121,h=60122,v=60117,b=60129,x=60131;if("function"===typeof Symbol&&Symbol.for){var m=Symbol.for;r=m("react.element"),o=m("react.portal"),t=m("react.fragment"),a=m("react.strict_mode"),i=m("react.profiler"),c=m("react.provider"),s=m("react.context"),l=m("react.forward_ref"),d=m("react.suspense"),u=m("react.suspense_list"),p=m("react.memo"),f=m("react.lazy"),g=m("react.block"),h=m("react.server.block"),v=m("react.fundamental"),b=m("react.debug_trace_mode"),x=m("react.legacy_hidden")}function w(n){if("object"===typeof n&&null!==n){var e=n.$$typeof;switch(e){case r:switch(n=n.type){case t:case i:case a:case d:case u:return n;default:switch(n=n&&n.$$typeof){case s:case l:case f:case p:case c:return n;default:return e}}case o:return e}}}e.isFragment=function(n){return w(n)===t}},19185:function(n,e,r){"use strict";n.exports=r(58702)}},function(n){n.O(0,[7690,1949,9774,2888,179],(function(){return e=45924,n(n.s=e);var e}));var e=n.O();_N_E=e}]);