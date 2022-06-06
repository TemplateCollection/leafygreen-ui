(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4906],{83484:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return De}});var r=t(27378),a=t(23615),l=t.n(a),o=t(17231),i=t(52535),s=t.n(i),c=t(85289),u=t.n(c),d=t(79303),p=t(90440),f=t(83685),b=t(68087),g=t(92677),m=t(46817);function x(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h(){return h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},h.apply(this,arguments)}function y(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function v(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function j(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var D,C,w="light",k="dark";(C=D||(D={})).CompletedMultiple="completed-multiple",C.Completed="completed",C.Current="current",C.Upcoming="upcoming",C.UpcomingMultiple="upcoming-multiple";var O,S,M,N,z,_,I,P,U,T,A,E,L,$,Z,W,B,F,R,X,G,q,H,J=(0,r.createContext)({}),K=function(){return(0,r.useContext)(J)},Q=function(e){var n=e.darkMode,t=e.children,a=function(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,l=[],o=!0,i=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(l.push(r.value),!n||l.length!==n);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==t.return||t.return()}finally{if(i)throw a}}return l}}(e,n)||function(e,n){if(e){if("string"==typeof e)return j(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?j(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,r.useState)(n),2),l=a[0],o=a[1];return(0,r.useEffect)((function(){o(n)}),[n]),(0,b.jsx)(J.Provider,{value:{isDarkMode:l,setIsDarkMode:o}},t)},V=(0,g.hy)(),Y=(0,g.hy)(),ee=["state","size"],ne=function(e){var n=e.state,t=e.content;return n===D.Completed?(0,b.jsx)(s(),null):n===D.UpcomingMultiple||n===D.CompletedMultiple?(0,b.jsx)(u(),null):(0,b.jsx)(f.Lh,{className:(0,o.css)(O||(O=v(["\n          font-weight: 500;\n          color: inherit;\n        "])))},t)},te=(0,o.css)(S||(S=v(["\n  color: ",";\n  border-color: ",";\n  background-color: ",";\n"])),d.D.white,d.D.green.dark1,d.D.green.dark1),re=(0,o.css)(M||(M=v(["\n  color: ",";\n  background-color: ",";\n  border-color: ",";\n"])),d.D.green.dark2,d.D.white,d.D.green.dark1),ae=(0,o.css)(N||(N=v(["\n  color: ",";\n  background-color: ",";\n  border-color: ",";\n"])),d.D.gray.dark1,d.D.white,d.D.gray.dark1),le=(0,o.css)(z||(z=v(["\n  color: ",";\n  border-color: ",";\n  background-color: ",";\n"])),d.D.black,d.D.green.base,d.D.green.base),oe=(0,o.css)(_||(_=v(["\n  color: ",";\n  background-color: ",";\n  border-color: ",";\n"])),d.D.green.base,d.D.black,d.D.green.base),ie=(0,o.css)(I||(I=v(["\n  color: ",";\n  background-color: ",";\n  border-color: ",";\n"])),d.D.gray.light1,d.D.black,d.D.gray.light1),se=(x(T={},k,(x(P={},D.CompletedMultiple,le),x(P,D.Completed,le),x(P,D.Current,oe),x(P,D.Upcoming,ie),x(P,D.UpcomingMultiple,ie),P)),x(T,w,(x(U={},D.CompletedMultiple,te),x(U,D.Completed,te),x(U,D.Current,re),x(U,D.Upcoming,ae),x(U,D.UpcomingMultiple,ae),U)),T),ce=function(e){var n=e.state,t=e.size,r=y(e,ee),a=K().isDarkMode,l=(0,o.css)(A||(A=v(["\n    width: ","px;\n    height: ","px;\n    box-sizing: content-box;\n    margin-bottom: ","px;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid;\n    // TODO: use centralized transition prop\n    transition: 0.3s box-shadow ease;\n    z-index: 1;\n\n    svg {\n      width: 100%;\n    }\n  "])),t,t,p.W0[1]);return(0,b.jsx)("div",{className:(0,o.cx)(Y,l,se[a?k:w][n])},(0,b.jsx)(ne,h({state:n},r)))},ue=function(e){var n,t=e.children,r=e.state,a=r===D.Current,l=K().isDarkMode,i=(0,o.css)(E||(E=v(["\n    color: ",";\n    text-decoration-line: underline;\n    text-decoration-style: dotted;\n    text-underline-position: under;\n  "])),l?d.D.green.base:d.D.green.dark2),s=(0,o.css)(L||(L=v(["\n    color: ",";\n  "])),l?d.D.green.base:d.D.green.dark2),c=(0,o.css)($||($=v(["\n    color: ",";\n  "])),l?d.D.white:d.D.green.dark3),u=(0,o.css)(Z||(Z=v(["\n    color: ",";\n  "])),l?d.D.gray.light1:d.D.gray.dark1),p=(0,o.css)(W||(W=v(["\n    text-decoration-line: underline;\n    text-decoration-style: dotted;\n    text-underline-position: under;\n    color: ",";\n  "])),l?d.D.gray.light1:d.D.gray.dark1),g=(x(n={},D.CompletedMultiple,i),x(n,D.Completed,s),x(n,D.Current,c),x(n,D.Upcoming,u),x(n,D.UpcomingMultiple,p),n);return(0,b.jsx)(f.uT,{className:(0,o.cx)(g[r],V),weight:a?"medium":"regular"},t)},de=["children","index","state","ariaLabel","shouldDisplayLine","iconSize","className"],pe=function(e){var n,t=e.children,r=e.index,a=e.state,l=e.ariaLabel,i=void 0===l?"step".concat(r||""):l,s=e.shouldDisplayLine,c=void 0===s||s,u=e.iconSize,f=void 0===u?20:u,g=e.className,m=y(e,de),j=K().isDarkMode,C=a===D.Current,w=a===D.Completed||a===D.CompletedMultiple,k=(0,o.css)(B||(B=v(["\n    display: flex;\n    margin: auto;\n    flex-direction: column;\n    align-items: center;\n    padding-bottom: ","px;\n    position: relative; // for the :after line\n\n    &:focus-visible {\n      outline: none;\n      ."," {\n        // TODO: should use box-shadow utility for this.\n        box-shadow: 0px 0px 0px 2px\n            ",",\n          0px 0px 0px 4px ",";\n      }\n    }\n  "])),p.W0[1],Y,j?d.D.black:d.D.white,d.D.blue.light1),O=(0,o.css)(F||(F=v(["\n    &:after {\n      content: '';\n      height: 1px;\n      width: 100%;\n      position: absolute;\n      top: ","px;\n      left: 50%;\n      z-index: 0;\n      background-color: ",";\n    }\n  "])),f/2,j?d.D.gray.light1:d.D.gray.base),S=(0,o.css)(R||(R=v(["\n    &:after {\n      background-color: ",";\n    }\n  "])),j?d.D.green.base:d.D.green.dark1);return(0,b.jsx)("div",h({className:(0,o.cx)(k,(n={},x(n,O,c),x(n,S,w&&c),n),g),"aria-label":i,"aria-current":C&&"step"},m),(0,b.jsx)(ce,{state:a,content:r,size:f}),(0,b.jsx)(ue,{state:a},t))},fe=["state","children","tooltipContent","startingStepIndex"],be=function(e){var n,t=e.state,a=e.children,l=e.tooltipContent,i=e.startingStepIndex,s=y(e,fe),c=K().isDarkMode,u=(0,o.css)(X||(X=v(["\n    // TODO: this is an arbitrary value. It would be nice to have a separate component for <ol> that handles this spacing.\n    padding-inline-start: ","px;\n  "])),p.W0[4]),f=(0,o.css)(G||(G=v(["\n    &:hover ."," {\n      // TODO: use centralized box-shadow value\n      box-shadow: 0px 0px 0px 3px\n        ",";\n    }\n  "])),Y,c?d.D.green.dark1:d.D.green.light2),g=(0,o.css)(q||(q=v(["\n    &:hover ."," {\n      // TODO: use centralized box-shadow value\n      box-shadow: 0px 0px 0px 3px\n        ",";\n    }\n  "])),Y,c?d.D.gray.dark2:d.D.gray.light2),j=(x(n={},D.CompletedMultiple,f),x(n,D.UpcomingMultiple,g),n);return(0,b.jsx)(m.ZP,{align:m.xM.Top,justify:m.WD.Middle,darkMode:c,trigger:(0,b.jsx)("li",null,(0,b.jsx)(pe,h({className:j[t],state:t,tabIndex:0},s),a))},(0,b.jsx)("div",null,(0,b.jsx)("ol",{className:u},r.Children.map(l,(function(e,n){return(0,b.jsx)("li",{value:i+n},e)})))))},ge=["children","currentStep","maxDisplayedSteps","completedStepsShown","darkMode","className"],me=(0,o.css)(H||(H=v(["\n  list-style: none;\n  padding-inline-start: 0;\n  width: 100%;\n  display: flex;\n  & > * {\n    flex: 1;\n  }\n"]))),xe=function(e){var n=e.children,t=e.currentStep,a=e.maxDisplayedSteps,l=void 0===a?Array.isArray(n)?n.length:1:a,i=e.completedStepsShown,s=void 0===i?1:i,c=e.darkMode,u=void 0!==c&&c,d=e.className,p=y(e,ge),f=r.Children.count(n);l=Math.min(l,f);var g=r.Children.toArray(n),m=Math.min(Math.max(t-s,0),f-l),x=m+l,v=m>0,j=x<f;v&&m++,j&&x--;var C=function(e){return e+1===f},w=function(e,n){return 1===n-e?"Steps ".concat(e," and ").concat(n):"Steps ".concat(e," to ").concat(n)};return(0,b.jsx)(Q,{darkMode:u},(0,b.jsx)("ol",h({className:(0,o.cx)(me,d),"aria-label":"progress"},p),v&&(0,b.jsx)(be,{state:D.CompletedMultiple,startingStepIndex:1,shouldDisplayLine:l>1,tooltipContent:g.slice(0,m)},w(1,m)),r.Children.map(g.slice(m,x),(function(e,n){return(0,b.jsx)("li",null,(0,b.jsx)(pe,{state:(r=m+n,r<t?D.Completed:r===t?D.Current:D.Upcoming),shouldDisplayLine:!C(m+n),index:m+n+1},e));var r})),j&&(0,b.jsx)(be,{state:D.UpcomingMultiple,startingStepIndex:x+1,shouldDisplayLine:!1,tooltipContent:g.slice(x,f)},w(x+1,f))))};xe.propTypes={currentStep:l().number,maxDisplayedSteps:l().number,completedStepsShown:l().number};var he=r.Fragment,ye=t(91949),ve={currentStep:{type:"number",default:0,label:"Current Step"}};function je(e){var n=e.currentStep,t=n>6?6:n<0?0:n;return(0,b.jsx)("div",{style:{width:1e3}},(0,b.jsx)(xe,{currentStep:t,maxDisplayedSteps:5},(0,b.jsx)(he,null,"Overview"),(0,b.jsx)(he,null,"Configuration"),(0,b.jsx)(he,null,"Update"),(0,b.jsx)(he,null,"Install"),(0,b.jsx)(he,null,"Billing"),(0,b.jsx)(he,null,"Address"),(0,b.jsx)(he,null,"Confirmation")))}function De(){return(0,b.jsx)(ye.Z,{knobsConfig:ve},(function(e){return(0,b.jsx)(je,e)}))}},63217:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/stepper/example",function(){return t(83484)}])},58702:function(e,n){"use strict";var t=60103,r=60106,a=60107,l=60108,o=60114,i=60109,s=60110,c=60112,u=60113,d=60120,p=60115,f=60116,b=60121,g=60122,m=60117,x=60129,h=60131;if("function"===typeof Symbol&&Symbol.for){var y=Symbol.for;t=y("react.element"),r=y("react.portal"),a=y("react.fragment"),l=y("react.strict_mode"),o=y("react.profiler"),i=y("react.provider"),s=y("react.context"),c=y("react.forward_ref"),u=y("react.suspense"),d=y("react.suspense_list"),p=y("react.memo"),f=y("react.lazy"),b=y("react.block"),g=y("react.server.block"),m=y("react.fundamental"),x=y("react.debug_trace_mode"),h=y("react.legacy_hidden")}function v(e){if("object"===typeof e&&null!==e){var n=e.$$typeof;switch(n){case t:switch(e=e.type){case a:case o:case l:case u:case d:return e;default:switch(e=e&&e.$$typeof){case s:case c:case f:case p:case i:return e;default:return n}}case r:return n}}}n.isFragment=function(e){return v(e)===a}},19185:function(e,n,t){"use strict";e.exports=t(58702)},85289:function(e,n,t){e.exports=function(e,n,t,r){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=a(n);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function c(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var u,d,p={small:14,default:16,large:20,xlarge:24},f=["className","size","title","aria-label","aria-labelledby","fill","role"],b=function(e){var n,a=e.className,l=e.size,b=void 0===l?16:l,g=e.title,m=e["aria-label"],x=e["aria-labelledby"],h=e.fill,y=e.role,v=void 0===y?"img":y,j=s(e,f),D=t.css(u||(u=c(["\n    color: ",";\n  "])),h),C=t.css(d||(d=c(["\n    flex-shrink: 0;\n  "]))),w=function(e,n,t){var r,a,l=t["aria-label"],i=t["aria-labelledby"],s=t.title;switch(e){case"img":return l||i||s?(o(r={},"aria-labelledby",i),o(r,"aria-label",l),o(r,"title",s),r):{"aria-label":(a=n,"".concat(a.replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"))};case"presentation":return{"aria-hidden":!0,alt:""}}}(v,"Ellipsis",(o(n={title:g},"aria-label",m),o(n,"aria-labelledby",x),n));return r.jsx("svg",i({className:t.cx(o({},D,null!=h),C,a),height:"number"==typeof b?b:p[b],width:"number"==typeof b?b:p[b],role:v},w,j,{viewBox:"0 0 16 16"}),r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.75 6C3.7165 6 4.5 6.7835 4.5 7.75C4.5 8.7165 3.7165 9.5 2.75 9.5C1.7835 9.5 1 8.7165 1 7.75C1 6.7835 1.7835 6 2.75 6ZM7.75 6C8.7165 6 9.5 6.7835 9.5 7.75C9.5 8.7165 8.7165 9.5 7.75 9.5C6.7835 9.5 6 8.7165 6 7.75C6 6.7835 6.7835 6 7.75 6ZM14.5 7.75C14.5 6.7835 13.7165 6 12.75 6C11.7835 6 11 6.7835 11 7.75C11 8.7165 11.7835 9.5 12.75 9.5C13.7165 9.5 14.5 8.7165 14.5 7.75Z",fill:"currentColor"}))};return b.displayName="Ellipsis",b.isGlyph=!0,b.propTypes={fill:l.default.string,size:l.default.oneOfType([l.default.number,l.default.string]),className:l.default.string},b}(t(27378),t(23615),t(17231),t(68087))}},function(e){e.O(0,[7690,1949,2888,9774,179],(function(){return n=63217,e(e.s=n);var n}));var n=e.O();_N_E=n}]);