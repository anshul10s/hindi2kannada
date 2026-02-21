(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function _w(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ly={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oo=Symbol.for("react.element"),vw=Symbol.for("react.portal"),Ew=Symbol.for("react.fragment"),ww=Symbol.for("react.strict_mode"),Tw=Symbol.for("react.profiler"),Iw=Symbol.for("react.provider"),Sw=Symbol.for("react.context"),kw=Symbol.for("react.forward_ref"),Aw=Symbol.for("react.suspense"),Cw=Symbol.for("react.memo"),Rw=Symbol.for("react.lazy"),wp=Symbol.iterator;function Pw(t){return t===null||typeof t!="object"?null:(t=wp&&t[wp]||t["@@iterator"],typeof t=="function"?t:null)}var uy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cy=Object.assign,hy={};function rs(t,e,n){this.props=t,this.context=e,this.refs=hy,this.updater=n||uy}rs.prototype.isReactComponent={};rs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};rs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function dy(){}dy.prototype=rs.prototype;function qh(t,e,n){this.props=t,this.context=e,this.refs=hy,this.updater=n||uy}var Gh=qh.prototype=new dy;Gh.constructor=qh;cy(Gh,rs.prototype);Gh.isPureReactComponent=!0;var Tp=Array.isArray,fy=Object.prototype.hasOwnProperty,Kh={current:null},py={key:!0,ref:!0,__self:!0,__source:!0};function my(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)fy.call(e,r)&&!py.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Oo,type:t,key:s,ref:o,props:i,_owner:Kh.current}}function xw(t,e){return{$$typeof:Oo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Qh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oo}function Nw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ip=/\/+/g;function Hu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Nw(""+t.key):e.toString(36)}function Oa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Oo:case vw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Hu(o,0):r,Tp(i)?(n="",t!=null&&(n=t.replace(Ip,"$&/")+"/"),Oa(i,e,n,"",function(h){return h})):i!=null&&(Qh(i)&&(i=xw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ip,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Tp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Hu(s,l);o+=Oa(s,e,n,u,i)}else if(u=Pw(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Hu(s,l++),o+=Oa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function da(t,e,n){if(t==null)return t;var r=[],i=0;return Oa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Vw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ft={current:null},Ma={transition:null},Dw={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:Ma,ReactCurrentOwner:Kh};function gy(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:da,forEach:function(t,e,n){da(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return da(t,function(){e++}),e},toArray:function(t){return da(t,function(e){return e})||[]},only:function(t){if(!Qh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=rs;te.Fragment=Ew;te.Profiler=Tw;te.PureComponent=qh;te.StrictMode=ww;te.Suspense=Aw;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dw;te.act=gy;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=cy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Kh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)fy.call(e,u)&&!py.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Oo,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:Sw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Iw,_context:t},t.Consumer=t};te.createElement=my;te.createFactory=function(t){var e=my.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:kw,render:t}};te.isValidElement=Qh;te.lazy=function(t){return{$$typeof:Rw,_payload:{_status:-1,_result:t},_init:Vw}};te.memo=function(t,e){return{$$typeof:Cw,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=Ma.transition;Ma.transition={};try{t()}finally{Ma.transition=e}};te.unstable_act=gy;te.useCallback=function(t,e){return ft.current.useCallback(t,e)};te.useContext=function(t){return ft.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return ft.current.useDeferredValue(t)};te.useEffect=function(t,e){return ft.current.useEffect(t,e)};te.useId=function(){return ft.current.useId()};te.useImperativeHandle=function(t,e,n){return ft.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return ft.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return ft.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return ft.current.useMemo(t,e)};te.useReducer=function(t,e,n){return ft.current.useReducer(t,e,n)};te.useRef=function(t){return ft.current.useRef(t)};te.useState=function(t){return ft.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return ft.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return ft.current.useTransition()};te.version="18.3.1";ly.exports=te;var ae=ly.exports;const R=_w(ae);var yy={exports:{}},Rt={},_y={exports:{}},vy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,q){var X=j.length;j.push(q);e:for(;0<X;){var he=X-1>>>1,Ee=j[he];if(0<i(Ee,q))j[he]=q,j[X]=Ee,X=he;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var q=j[0],X=j.pop();if(X!==q){j[0]=X;e:for(var he=0,Ee=j.length,gn=Ee>>>1;he<gn;){var at=2*(he+1)-1,yn=j[at],ze=at+1,Yt=j[ze];if(0>i(yn,X))ze<Ee&&0>i(Yt,yn)?(j[he]=Yt,j[ze]=X,he=ze):(j[he]=yn,j[at]=X,he=at);else if(ze<Ee&&0>i(Yt,X))j[he]=Yt,j[ze]=X,he=ze;else break e}}return q}function i(j,q){var X=j.sortIndex-q.sortIndex;return X!==0?X:j.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,g=3,A=!1,x=!1,V=!1,M=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(j){for(var q=n(h);q!==null;){if(q.callback===null)r(h);else if(q.startTime<=j)r(h),q.sortIndex=q.expirationTime,e(u,q);else break;q=n(h)}}function D(j){if(V=!1,C(j),!x)if(n(u)!==null)x=!0,Jt(F);else{var q=n(h);q!==null&&mn(D,q.startTime-j)}}function F(j,q){x=!1,V&&(V=!1,I(y),y=-1),A=!0;var X=g;try{for(C(q),p=n(u);p!==null&&(!(p.expirationTime>q)||j&&!S());){var he=p.callback;if(typeof he=="function"){p.callback=null,g=p.priorityLevel;var Ee=he(p.expirationTime<=q);q=t.unstable_now(),typeof Ee=="function"?p.callback=Ee:p===n(u)&&r(u),C(q)}else r(u);p=n(u)}if(p!==null)var gn=!0;else{var at=n(h);at!==null&&mn(D,at.startTime-q),gn=!1}return gn}finally{p=null,g=X,A=!1}}var z=!1,_=null,y=-1,v=5,T=-1;function S(){return!(t.unstable_now()-T<v)}function k(){if(_!==null){var j=t.unstable_now();T=j;var q=!0;try{q=_(!0,j)}finally{q?w():(z=!1,_=null)}}else z=!1}var w;if(typeof E=="function")w=function(){E(k)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,Ut=be.port2;be.port1.onmessage=k,w=function(){Ut.postMessage(null)}}else w=function(){M(k,0)};function Jt(j){_=j,z||(z=!0,w())}function mn(j,q){y=M(function(){j(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){x||A||(x=!0,Jt(F))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(j){switch(g){case 1:case 2:case 3:var q=3;break;default:q=g}var X=g;g=q;try{return j()}finally{g=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,q){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var X=g;g=j;try{return q()}finally{g=X}},t.unstable_scheduleCallback=function(j,q,X){var he=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?he+X:he):X=he,j){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=X+Ee,j={id:f++,callback:q,priorityLevel:j,startTime:X,expirationTime:Ee,sortIndex:-1},X>he?(j.sortIndex=X,e(h,j),n(u)===null&&j===n(h)&&(V?(I(y),y=-1):V=!0,mn(D,X-he))):(j.sortIndex=Ee,e(u,j),x||A||(x=!0,Jt(F))),j},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(j){var q=g;return function(){var X=g;g=q;try{return j.apply(this,arguments)}finally{g=X}}}})(vy);_y.exports=vy;var bw=_y.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ow=ae,At=bw;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ey=new Set,uo={};function ni(t,e){$i(t,e),$i(t+"Capture",e)}function $i(t,e){for(uo[t]=e,t=0;t<e.length;t++)Ey.add(e[t])}var Cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pc=Object.prototype.hasOwnProperty,Mw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sp={},kp={};function Lw(t){return Pc.call(kp,t)?!0:Pc.call(Sp,t)?!1:Mw.test(t)?kp[t]=!0:(Sp[t]=!0,!1)}function Fw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Uw(t,e,n,r){if(e===null||typeof e>"u"||Fw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Je[t]=new pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Je[e]=new pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Je[t]=new pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Je[t]=new pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Je[t]=new pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Je[t]=new pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Je[t]=new pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Je[t]=new pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Je[t]=new pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jh=/[\-:]([a-z])/g;function Yh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jh,Yh);Je[e]=new pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jh,Yh);Je[e]=new pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jh,Yh);Je[e]=new pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Je[t]=new pt(t,1,!1,t.toLowerCase(),null,!1,!1)});Je.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Je[t]=new pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Xh(t,e,n,r){var i=Je.hasOwnProperty(e)?Je[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Uw(e,n,i,r)&&(n=null),r||i===null?Lw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ln=Ow.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fa=Symbol.for("react.element"),_i=Symbol.for("react.portal"),vi=Symbol.for("react.fragment"),Zh=Symbol.for("react.strict_mode"),xc=Symbol.for("react.profiler"),wy=Symbol.for("react.provider"),Ty=Symbol.for("react.context"),ed=Symbol.for("react.forward_ref"),Nc=Symbol.for("react.suspense"),Vc=Symbol.for("react.suspense_list"),td=Symbol.for("react.memo"),Kn=Symbol.for("react.lazy"),Iy=Symbol.for("react.offscreen"),Ap=Symbol.iterator;function xs(t){return t===null||typeof t!="object"?null:(t=Ap&&t[Ap]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,Wu;function Us(t){if(Wu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wu=e&&e[1]||""}return`
`+Wu+t}var qu=!1;function Gu(t,e){if(!t||qu)return"";qu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{qu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Us(t):""}function zw(t){switch(t.tag){case 5:return Us(t.type);case 16:return Us("Lazy");case 13:return Us("Suspense");case 19:return Us("SuspenseList");case 0:case 2:case 15:return t=Gu(t.type,!1),t;case 11:return t=Gu(t.type.render,!1),t;case 1:return t=Gu(t.type,!0),t;default:return""}}function Dc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vi:return"Fragment";case _i:return"Portal";case xc:return"Profiler";case Zh:return"StrictMode";case Nc:return"Suspense";case Vc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ty:return(t.displayName||"Context")+".Consumer";case wy:return(t._context.displayName||"Context")+".Provider";case ed:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case td:return e=t.displayName||null,e!==null?e:Dc(t.type)||"Memo";case Kn:e=t._payload,t=t._init;try{return Dc(t(e))}catch{}}return null}function jw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dc(e);case 8:return e===Zh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Sy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Bw(t){var e=Sy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function pa(t){t._valueTracker||(t._valueTracker=Bw(t))}function ky(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Sy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function rl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bc(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Cp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ay(t,e){e=e.checked,e!=null&&Xh(t,"checked",e,!1)}function Oc(t,e){Ay(t,e);var n=vr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Mc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Mc(t,e.type,vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Rp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Mc(t,e,n){(e!=="number"||rl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var zs=Array.isArray;function Ni(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+vr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Lc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Pp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(zs(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:vr(n)}}function Cy(t,e){var n=vr(e.value),r=vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function xp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ry(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ry(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ma,Py=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ma=ma||document.createElement("div"),ma.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ma.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function co(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$w=["Webkit","ms","Moz","O"];Object.keys(Gs).forEach(function(t){$w.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Gs[e]=Gs[t]})});function xy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Gs.hasOwnProperty(t)&&Gs[t]?(""+e).trim():e+"px"}function Ny(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Hw=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uc(t,e){if(e){if(Hw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function zc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jc=null;function nd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bc=null,Vi=null,Di=null;function Np(t){if(t=Fo(t)){if(typeof Bc!="function")throw Error(L(280));var e=t.stateNode;e&&(e=Yl(e),Bc(t.stateNode,t.type,e))}}function Vy(t){Vi?Di?Di.push(t):Di=[t]:Vi=t}function Dy(){if(Vi){var t=Vi,e=Di;if(Di=Vi=null,Np(t),e)for(t=0;t<e.length;t++)Np(e[t])}}function by(t,e){return t(e)}function Oy(){}var Ku=!1;function My(t,e,n){if(Ku)return t(e,n);Ku=!0;try{return by(t,e,n)}finally{Ku=!1,(Vi!==null||Di!==null)&&(Oy(),Dy())}}function ho(t,e){var n=t.stateNode;if(n===null)return null;var r=Yl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var $c=!1;if(Cn)try{var Ns={};Object.defineProperty(Ns,"passive",{get:function(){$c=!0}}),window.addEventListener("test",Ns,Ns),window.removeEventListener("test",Ns,Ns)}catch{$c=!1}function Ww(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Ks=!1,il=null,sl=!1,Hc=null,qw={onError:function(t){Ks=!0,il=t}};function Gw(t,e,n,r,i,s,o,l,u){Ks=!1,il=null,Ww.apply(qw,arguments)}function Kw(t,e,n,r,i,s,o,l,u){if(Gw.apply(this,arguments),Ks){if(Ks){var h=il;Ks=!1,il=null}else throw Error(L(198));sl||(sl=!0,Hc=h)}}function ri(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ly(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vp(t){if(ri(t)!==t)throw Error(L(188))}function Qw(t){var e=t.alternate;if(!e){if(e=ri(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Vp(i),t;if(s===r)return Vp(i),e;s=s.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function Fy(t){return t=Qw(t),t!==null?Uy(t):null}function Uy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Uy(t);if(e!==null)return e;t=t.sibling}return null}var zy=At.unstable_scheduleCallback,Dp=At.unstable_cancelCallback,Jw=At.unstable_shouldYield,Yw=At.unstable_requestPaint,Pe=At.unstable_now,Xw=At.unstable_getCurrentPriorityLevel,rd=At.unstable_ImmediatePriority,jy=At.unstable_UserBlockingPriority,ol=At.unstable_NormalPriority,Zw=At.unstable_LowPriority,By=At.unstable_IdlePriority,Gl=null,sn=null;function e1(t){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(Gl,t,void 0,(t.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:r1,t1=Math.log,n1=Math.LN2;function r1(t){return t>>>=0,t===0?32:31-(t1(t)/n1|0)|0}var ga=64,ya=4194304;function js(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function al(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=js(l):(s&=o,s!==0&&(r=js(s)))}else o=n&~i,o!==0?r=js(o):s!==0&&(r=js(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-qt(e),i=1<<n,r|=t[n],e&=~i;return r}function i1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function s1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-qt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=i1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Wc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $y(){var t=ga;return ga<<=1,!(ga&4194240)&&(ga=64),t}function Qu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Mo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qt(e),t[e]=n}function o1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-qt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function id(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-qt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ce=0;function Hy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Wy,sd,qy,Gy,Ky,qc=!1,_a=[],sr=null,or=null,ar=null,fo=new Map,po=new Map,Jn=[],a1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bp(t,e){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":fo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":po.delete(e.pointerId)}}function Vs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Fo(e),e!==null&&sd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function l1(t,e,n,r,i){switch(e){case"focusin":return sr=Vs(sr,t,e,n,r,i),!0;case"dragenter":return or=Vs(or,t,e,n,r,i),!0;case"mouseover":return ar=Vs(ar,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return fo.set(s,Vs(fo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,po.set(s,Vs(po.get(s)||null,t,e,n,r,i)),!0}return!1}function Qy(t){var e=Fr(t.target);if(e!==null){var n=ri(e);if(n!==null){if(e=n.tag,e===13){if(e=Ly(n),e!==null){t.blockedOn=e,Ky(t.priority,function(){qy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function La(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);jc=r,n.target.dispatchEvent(r),jc=null}else return e=Fo(n),e!==null&&sd(e),t.blockedOn=n,!1;e.shift()}return!0}function Op(t,e,n){La(t)&&n.delete(e)}function u1(){qc=!1,sr!==null&&La(sr)&&(sr=null),or!==null&&La(or)&&(or=null),ar!==null&&La(ar)&&(ar=null),fo.forEach(Op),po.forEach(Op)}function Ds(t,e){t.blockedOn===e&&(t.blockedOn=null,qc||(qc=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,u1)))}function mo(t){function e(i){return Ds(i,t)}if(0<_a.length){Ds(_a[0],t);for(var n=1;n<_a.length;n++){var r=_a[n];r.blockedOn===t&&(r.blockedOn=null)}}for(sr!==null&&Ds(sr,t),or!==null&&Ds(or,t),ar!==null&&Ds(ar,t),fo.forEach(e),po.forEach(e),n=0;n<Jn.length;n++)r=Jn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Jn.length&&(n=Jn[0],n.blockedOn===null);)Qy(n),n.blockedOn===null&&Jn.shift()}var bi=Ln.ReactCurrentBatchConfig,ll=!0;function c1(t,e,n,r){var i=ce,s=bi.transition;bi.transition=null;try{ce=1,od(t,e,n,r)}finally{ce=i,bi.transition=s}}function h1(t,e,n,r){var i=ce,s=bi.transition;bi.transition=null;try{ce=4,od(t,e,n,r)}finally{ce=i,bi.transition=s}}function od(t,e,n,r){if(ll){var i=Gc(t,e,n,r);if(i===null)sc(t,e,r,ul,n),bp(t,r);else if(l1(i,t,e,n,r))r.stopPropagation();else if(bp(t,r),e&4&&-1<a1.indexOf(t)){for(;i!==null;){var s=Fo(i);if(s!==null&&Wy(s),s=Gc(t,e,n,r),s===null&&sc(t,e,r,ul,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else sc(t,e,r,null,n)}}var ul=null;function Gc(t,e,n,r){if(ul=null,t=nd(r),t=Fr(t),t!==null)if(e=ri(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ly(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ul=t,null}function Jy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xw()){case rd:return 1;case jy:return 4;case ol:case Zw:return 16;case By:return 536870912;default:return 16}default:return 16}}var nr=null,ad=null,Fa=null;function Yy(){if(Fa)return Fa;var t,e=ad,n=e.length,r,i="value"in nr?nr.value:nr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Fa=i.slice(t,1<r?1-r:void 0)}function Ua(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function va(){return!0}function Mp(){return!1}function Pt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?va:Mp,this.isPropagationStopped=Mp,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=va)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=va)},persist:function(){},isPersistent:va}),e}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ld=Pt(is),Lo=Se({},is,{view:0,detail:0}),d1=Pt(Lo),Ju,Yu,bs,Kl=Se({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ud,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bs&&(bs&&t.type==="mousemove"?(Ju=t.screenX-bs.screenX,Yu=t.screenY-bs.screenY):Yu=Ju=0,bs=t),Ju)},movementY:function(t){return"movementY"in t?t.movementY:Yu}}),Lp=Pt(Kl),f1=Se({},Kl,{dataTransfer:0}),p1=Pt(f1),m1=Se({},Lo,{relatedTarget:0}),Xu=Pt(m1),g1=Se({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),y1=Pt(g1),_1=Se({},is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),v1=Pt(_1),E1=Se({},is,{data:0}),Fp=Pt(E1),w1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},T1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},I1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=I1[t])?!!e[t]:!1}function ud(){return S1}var k1=Se({},Lo,{key:function(t){if(t.key){var e=w1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ua(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?T1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ud,charCode:function(t){return t.type==="keypress"?Ua(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ua(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),A1=Pt(k1),C1=Se({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Up=Pt(C1),R1=Se({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ud}),P1=Pt(R1),x1=Se({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),N1=Pt(x1),V1=Se({},Kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),D1=Pt(V1),b1=[9,13,27,32],cd=Cn&&"CompositionEvent"in window,Qs=null;Cn&&"documentMode"in document&&(Qs=document.documentMode);var O1=Cn&&"TextEvent"in window&&!Qs,Xy=Cn&&(!cd||Qs&&8<Qs&&11>=Qs),zp=" ",jp=!1;function Zy(t,e){switch(t){case"keyup":return b1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function e_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ei=!1;function M1(t,e){switch(t){case"compositionend":return e_(e);case"keypress":return e.which!==32?null:(jp=!0,zp);case"textInput":return t=e.data,t===zp&&jp?null:t;default:return null}}function L1(t,e){if(Ei)return t==="compositionend"||!cd&&Zy(t,e)?(t=Yy(),Fa=ad=nr=null,Ei=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xy&&e.locale!=="ko"?null:e.data;default:return null}}var F1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!F1[t.type]:e==="textarea"}function t_(t,e,n,r){Vy(r),e=cl(e,"onChange"),0<e.length&&(n=new ld("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Js=null,go=null;function U1(t){d_(t,0)}function Ql(t){var e=Ii(t);if(ky(e))return t}function z1(t,e){if(t==="change")return e}var n_=!1;if(Cn){var Zu;if(Cn){var ec="oninput"in document;if(!ec){var $p=document.createElement("div");$p.setAttribute("oninput","return;"),ec=typeof $p.oninput=="function"}Zu=ec}else Zu=!1;n_=Zu&&(!document.documentMode||9<document.documentMode)}function Hp(){Js&&(Js.detachEvent("onpropertychange",r_),go=Js=null)}function r_(t){if(t.propertyName==="value"&&Ql(go)){var e=[];t_(e,go,t,nd(t)),My(U1,e)}}function j1(t,e,n){t==="focusin"?(Hp(),Js=e,go=n,Js.attachEvent("onpropertychange",r_)):t==="focusout"&&Hp()}function B1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ql(go)}function $1(t,e){if(t==="click")return Ql(e)}function H1(t,e){if(t==="input"||t==="change")return Ql(e)}function W1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qt=typeof Object.is=="function"?Object.is:W1;function yo(t,e){if(Qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Pc.call(e,i)||!Qt(t[i],e[i]))return!1}return!0}function Wp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qp(t,e){var n=Wp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wp(n)}}function i_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?i_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function s_(){for(var t=window,e=rl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=rl(t.document)}return e}function hd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function q1(t){var e=s_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&i_(n.ownerDocument.documentElement,n)){if(r!==null&&hd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=qp(n,s);var o=qp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var G1=Cn&&"documentMode"in document&&11>=document.documentMode,wi=null,Kc=null,Ys=null,Qc=!1;function Gp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qc||wi==null||wi!==rl(r)||(r=wi,"selectionStart"in r&&hd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ys&&yo(Ys,r)||(Ys=r,r=cl(Kc,"onSelect"),0<r.length&&(e=new ld("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=wi)))}function Ea(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ti={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionend:Ea("Transition","TransitionEnd")},tc={},o_={};Cn&&(o_=document.createElement("div").style,"AnimationEvent"in window||(delete Ti.animationend.animation,delete Ti.animationiteration.animation,delete Ti.animationstart.animation),"TransitionEvent"in window||delete Ti.transitionend.transition);function Jl(t){if(tc[t])return tc[t];if(!Ti[t])return t;var e=Ti[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in o_)return tc[t]=e[n];return t}var a_=Jl("animationend"),l_=Jl("animationiteration"),u_=Jl("animationstart"),c_=Jl("transitionend"),h_=new Map,Kp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(t,e){h_.set(t,e),ni(e,[t])}for(var nc=0;nc<Kp.length;nc++){var rc=Kp[nc],K1=rc.toLowerCase(),Q1=rc[0].toUpperCase()+rc.slice(1);Cr(K1,"on"+Q1)}Cr(a_,"onAnimationEnd");Cr(l_,"onAnimationIteration");Cr(u_,"onAnimationStart");Cr("dblclick","onDoubleClick");Cr("focusin","onFocus");Cr("focusout","onBlur");Cr(c_,"onTransitionEnd");$i("onMouseEnter",["mouseout","mouseover"]);$i("onMouseLeave",["mouseout","mouseover"]);$i("onPointerEnter",["pointerout","pointerover"]);$i("onPointerLeave",["pointerout","pointerover"]);ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ni("onBeforeInput",["compositionend","keypress","textInput","paste"]);ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bs));function Qp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Kw(r,e,void 0,t),t.currentTarget=null}function d_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Qp(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Qp(i,l,h),s=u}}}if(sl)throw t=Hc,sl=!1,Hc=null,t}function me(t,e){var n=e[eh];n===void 0&&(n=e[eh]=new Set);var r=t+"__bubble";n.has(r)||(f_(e,t,2,!1),n.add(r))}function ic(t,e,n){var r=0;e&&(r|=4),f_(n,t,r,e)}var wa="_reactListening"+Math.random().toString(36).slice(2);function _o(t){if(!t[wa]){t[wa]=!0,Ey.forEach(function(n){n!=="selectionchange"&&(J1.has(n)||ic(n,!1,t),ic(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wa]||(e[wa]=!0,ic("selectionchange",!1,e))}}function f_(t,e,n,r){switch(Jy(e)){case 1:var i=c1;break;case 4:i=h1;break;default:i=od}n=i.bind(null,e,n,t),i=void 0,!$c||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function sc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Fr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}My(function(){var h=s,f=nd(n),p=[];e:{var g=h_.get(t);if(g!==void 0){var A=ld,x=t;switch(t){case"keypress":if(Ua(n)===0)break e;case"keydown":case"keyup":A=A1;break;case"focusin":x="focus",A=Xu;break;case"focusout":x="blur",A=Xu;break;case"beforeblur":case"afterblur":A=Xu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=p1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=P1;break;case a_:case l_:case u_:A=y1;break;case c_:A=N1;break;case"scroll":A=d1;break;case"wheel":A=D1;break;case"copy":case"cut":case"paste":A=v1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Up}var V=(e&4)!==0,M=!V&&t==="scroll",I=V?g!==null?g+"Capture":null:g;V=[];for(var E=h,C;E!==null;){C=E;var D=C.stateNode;if(C.tag===5&&D!==null&&(C=D,I!==null&&(D=ho(E,I),D!=null&&V.push(vo(E,D,C)))),M)break;E=E.return}0<V.length&&(g=new A(g,x,null,n,f),p.push({event:g,listeners:V}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",g&&n!==jc&&(x=n.relatedTarget||n.fromElement)&&(Fr(x)||x[Rn]))break e;if((A||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,A?(x=n.relatedTarget||n.toElement,A=h,x=x?Fr(x):null,x!==null&&(M=ri(x),x!==M||x.tag!==5&&x.tag!==6)&&(x=null)):(A=null,x=h),A!==x)){if(V=Lp,D="onMouseLeave",I="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(V=Up,D="onPointerLeave",I="onPointerEnter",E="pointer"),M=A==null?g:Ii(A),C=x==null?g:Ii(x),g=new V(D,E+"leave",A,n,f),g.target=M,g.relatedTarget=C,D=null,Fr(f)===h&&(V=new V(I,E+"enter",x,n,f),V.target=C,V.relatedTarget=M,D=V),M=D,A&&x)t:{for(V=A,I=x,E=0,C=V;C;C=fi(C))E++;for(C=0,D=I;D;D=fi(D))C++;for(;0<E-C;)V=fi(V),E--;for(;0<C-E;)I=fi(I),C--;for(;E--;){if(V===I||I!==null&&V===I.alternate)break t;V=fi(V),I=fi(I)}V=null}else V=null;A!==null&&Jp(p,g,A,V,!1),x!==null&&M!==null&&Jp(p,M,x,V,!0)}}e:{if(g=h?Ii(h):window,A=g.nodeName&&g.nodeName.toLowerCase(),A==="select"||A==="input"&&g.type==="file")var F=z1;else if(Bp(g))if(n_)F=H1;else{F=B1;var z=j1}else(A=g.nodeName)&&A.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(F=$1);if(F&&(F=F(t,h))){t_(p,F,n,f);break e}z&&z(t,g,h),t==="focusout"&&(z=g._wrapperState)&&z.controlled&&g.type==="number"&&Mc(g,"number",g.value)}switch(z=h?Ii(h):window,t){case"focusin":(Bp(z)||z.contentEditable==="true")&&(wi=z,Kc=h,Ys=null);break;case"focusout":Ys=Kc=wi=null;break;case"mousedown":Qc=!0;break;case"contextmenu":case"mouseup":case"dragend":Qc=!1,Gp(p,n,f);break;case"selectionchange":if(G1)break;case"keydown":case"keyup":Gp(p,n,f)}var _;if(cd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ei?Zy(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Xy&&n.locale!=="ko"&&(Ei||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ei&&(_=Yy()):(nr=f,ad="value"in nr?nr.value:nr.textContent,Ei=!0)),z=cl(h,y),0<z.length&&(y=new Fp(y,t,null,n,f),p.push({event:y,listeners:z}),_?y.data=_:(_=e_(n),_!==null&&(y.data=_)))),(_=O1?M1(t,n):L1(t,n))&&(h=cl(h,"onBeforeInput"),0<h.length&&(f=new Fp("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=_))}d_(p,e)})}function vo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function cl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ho(t,n),s!=null&&r.unshift(vo(t,s,i)),s=ho(t,e),s!=null&&r.push(vo(t,s,i))),t=t.return}return r}function fi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=ho(n,s),u!=null&&o.unshift(vo(n,u,l))):i||(u=ho(n,s),u!=null&&o.push(vo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Y1=/\r\n?/g,X1=/\u0000|\uFFFD/g;function Yp(t){return(typeof t=="string"?t:""+t).replace(Y1,`
`).replace(X1,"")}function Ta(t,e,n){if(e=Yp(e),Yp(t)!==e&&n)throw Error(L(425))}function hl(){}var Jc=null,Yc=null;function Xc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zc=typeof setTimeout=="function"?setTimeout:void 0,Z1=typeof clearTimeout=="function"?clearTimeout:void 0,Xp=typeof Promise=="function"?Promise:void 0,eT=typeof queueMicrotask=="function"?queueMicrotask:typeof Xp<"u"?function(t){return Xp.resolve(null).then(t).catch(tT)}:Zc;function tT(t){setTimeout(function(){throw t})}function oc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),mo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);mo(e)}function lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ss=Math.random().toString(36).slice(2),rn="__reactFiber$"+ss,Eo="__reactProps$"+ss,Rn="__reactContainer$"+ss,eh="__reactEvents$"+ss,nT="__reactListeners$"+ss,rT="__reactHandles$"+ss;function Fr(t){var e=t[rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Rn]||n[rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zp(t);t!==null;){if(n=t[rn])return n;t=Zp(t)}return e}t=n,n=t.parentNode}return null}function Fo(t){return t=t[rn]||t[Rn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ii(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function Yl(t){return t[Eo]||null}var th=[],Si=-1;function Rr(t){return{current:t}}function _e(t){0>Si||(t.current=th[Si],th[Si]=null,Si--)}function fe(t,e){Si++,th[Si]=t.current,t.current=e}var Er={},st=Rr(Er),_t=Rr(!1),Wr=Er;function Hi(t,e){var n=t.type.contextTypes;if(!n)return Er;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function vt(t){return t=t.childContextTypes,t!=null}function dl(){_e(_t),_e(st)}function em(t,e,n){if(st.current!==Er)throw Error(L(168));fe(st,e),fe(_t,n)}function p_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(L(108,jw(t)||"Unknown",i));return Se({},n,r)}function fl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,Wr=st.current,fe(st,t),fe(_t,_t.current),!0}function tm(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=p_(t,e,Wr),r.__reactInternalMemoizedMergedChildContext=t,_e(_t),_e(st),fe(st,t)):_e(_t),fe(_t,n)}var vn=null,Xl=!1,ac=!1;function m_(t){vn===null?vn=[t]:vn.push(t)}function iT(t){Xl=!0,m_(t)}function Pr(){if(!ac&&vn!==null){ac=!0;var t=0,e=ce;try{var n=vn;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}vn=null,Xl=!1}catch(i){throw vn!==null&&(vn=vn.slice(t+1)),zy(rd,Pr),i}finally{ce=e,ac=!1}}return null}var ki=[],Ai=0,pl=null,ml=0,xt=[],Nt=0,qr=null,En=1,wn="";function Or(t,e){ki[Ai++]=ml,ki[Ai++]=pl,pl=t,ml=e}function g_(t,e,n){xt[Nt++]=En,xt[Nt++]=wn,xt[Nt++]=qr,qr=t;var r=En;t=wn;var i=32-qt(r)-1;r&=~(1<<i),n+=1;var s=32-qt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,En=1<<32-qt(e)+i|n<<i|r,wn=s+t}else En=1<<s|n<<i|r,wn=t}function dd(t){t.return!==null&&(Or(t,1),g_(t,1,0))}function fd(t){for(;t===pl;)pl=ki[--Ai],ki[Ai]=null,ml=ki[--Ai],ki[Ai]=null;for(;t===qr;)qr=xt[--Nt],xt[Nt]=null,wn=xt[--Nt],xt[Nt]=null,En=xt[--Nt],xt[Nt]=null}var kt=null,St=null,we=!1,$t=null;function y_(t,e){var n=Ot(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function nm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kt=t,St=lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kt=t,St=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qr!==null?{id:En,overflow:wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ot(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kt=t,St=null,!0):!1;default:return!1}}function nh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function rh(t){if(we){var e=St;if(e){var n=e;if(!nm(t,e)){if(nh(t))throw Error(L(418));e=lr(n.nextSibling);var r=kt;e&&nm(t,e)?y_(r,n):(t.flags=t.flags&-4097|2,we=!1,kt=t)}}else{if(nh(t))throw Error(L(418));t.flags=t.flags&-4097|2,we=!1,kt=t}}}function rm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kt=t}function Ia(t){if(t!==kt)return!1;if(!we)return rm(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xc(t.type,t.memoizedProps)),e&&(e=St)){if(nh(t))throw __(),Error(L(418));for(;e;)y_(t,e),e=lr(e.nextSibling)}if(rm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){St=lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}St=null}}else St=kt?lr(t.stateNode.nextSibling):null;return!0}function __(){for(var t=St;t;)t=lr(t.nextSibling)}function Wi(){St=kt=null,we=!1}function pd(t){$t===null?$t=[t]:$t.push(t)}var sT=Ln.ReactCurrentBatchConfig;function Os(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function Sa(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function im(t){var e=t._init;return e(t._payload)}function v_(t){function e(I,E){if(t){var C=I.deletions;C===null?(I.deletions=[E],I.flags|=16):C.push(E)}}function n(I,E){if(!t)return null;for(;E!==null;)e(I,E),E=E.sibling;return null}function r(I,E){for(I=new Map;E!==null;)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;return I}function i(I,E){return I=dr(I,E),I.index=0,I.sibling=null,I}function s(I,E,C){return I.index=C,t?(C=I.alternate,C!==null?(C=C.index,C<E?(I.flags|=2,E):C):(I.flags|=2,E)):(I.flags|=1048576,E)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,E,C,D){return E===null||E.tag!==6?(E=pc(C,I.mode,D),E.return=I,E):(E=i(E,C),E.return=I,E)}function u(I,E,C,D){var F=C.type;return F===vi?f(I,E,C.props.children,D,C.key):E!==null&&(E.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Kn&&im(F)===E.type)?(D=i(E,C.props),D.ref=Os(I,E,C),D.return=I,D):(D=qa(C.type,C.key,C.props,null,I.mode,D),D.ref=Os(I,E,C),D.return=I,D)}function h(I,E,C,D){return E===null||E.tag!==4||E.stateNode.containerInfo!==C.containerInfo||E.stateNode.implementation!==C.implementation?(E=mc(C,I.mode,D),E.return=I,E):(E=i(E,C.children||[]),E.return=I,E)}function f(I,E,C,D,F){return E===null||E.tag!==7?(E=$r(C,I.mode,D,F),E.return=I,E):(E=i(E,C),E.return=I,E)}function p(I,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return E=pc(""+E,I.mode,C),E.return=I,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case fa:return C=qa(E.type,E.key,E.props,null,I.mode,C),C.ref=Os(I,null,E),C.return=I,C;case _i:return E=mc(E,I.mode,C),E.return=I,E;case Kn:var D=E._init;return p(I,D(E._payload),C)}if(zs(E)||xs(E))return E=$r(E,I.mode,C,null),E.return=I,E;Sa(I,E)}return null}function g(I,E,C,D){var F=E!==null?E.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return F!==null?null:l(I,E,""+C,D);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case fa:return C.key===F?u(I,E,C,D):null;case _i:return C.key===F?h(I,E,C,D):null;case Kn:return F=C._init,g(I,E,F(C._payload),D)}if(zs(C)||xs(C))return F!==null?null:f(I,E,C,D,null);Sa(I,C)}return null}function A(I,E,C,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return I=I.get(C)||null,l(E,I,""+D,F);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case fa:return I=I.get(D.key===null?C:D.key)||null,u(E,I,D,F);case _i:return I=I.get(D.key===null?C:D.key)||null,h(E,I,D,F);case Kn:var z=D._init;return A(I,E,C,z(D._payload),F)}if(zs(D)||xs(D))return I=I.get(C)||null,f(E,I,D,F,null);Sa(E,D)}return null}function x(I,E,C,D){for(var F=null,z=null,_=E,y=E=0,v=null;_!==null&&y<C.length;y++){_.index>y?(v=_,_=null):v=_.sibling;var T=g(I,_,C[y],D);if(T===null){_===null&&(_=v);break}t&&_&&T.alternate===null&&e(I,_),E=s(T,E,y),z===null?F=T:z.sibling=T,z=T,_=v}if(y===C.length)return n(I,_),we&&Or(I,y),F;if(_===null){for(;y<C.length;y++)_=p(I,C[y],D),_!==null&&(E=s(_,E,y),z===null?F=_:z.sibling=_,z=_);return we&&Or(I,y),F}for(_=r(I,_);y<C.length;y++)v=A(_,I,y,C[y],D),v!==null&&(t&&v.alternate!==null&&_.delete(v.key===null?y:v.key),E=s(v,E,y),z===null?F=v:z.sibling=v,z=v);return t&&_.forEach(function(S){return e(I,S)}),we&&Or(I,y),F}function V(I,E,C,D){var F=xs(C);if(typeof F!="function")throw Error(L(150));if(C=F.call(C),C==null)throw Error(L(151));for(var z=F=null,_=E,y=E=0,v=null,T=C.next();_!==null&&!T.done;y++,T=C.next()){_.index>y?(v=_,_=null):v=_.sibling;var S=g(I,_,T.value,D);if(S===null){_===null&&(_=v);break}t&&_&&S.alternate===null&&e(I,_),E=s(S,E,y),z===null?F=S:z.sibling=S,z=S,_=v}if(T.done)return n(I,_),we&&Or(I,y),F;if(_===null){for(;!T.done;y++,T=C.next())T=p(I,T.value,D),T!==null&&(E=s(T,E,y),z===null?F=T:z.sibling=T,z=T);return we&&Or(I,y),F}for(_=r(I,_);!T.done;y++,T=C.next())T=A(_,I,y,T.value,D),T!==null&&(t&&T.alternate!==null&&_.delete(T.key===null?y:T.key),E=s(T,E,y),z===null?F=T:z.sibling=T,z=T);return t&&_.forEach(function(k){return e(I,k)}),we&&Or(I,y),F}function M(I,E,C,D){if(typeof C=="object"&&C!==null&&C.type===vi&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case fa:e:{for(var F=C.key,z=E;z!==null;){if(z.key===F){if(F=C.type,F===vi){if(z.tag===7){n(I,z.sibling),E=i(z,C.props.children),E.return=I,I=E;break e}}else if(z.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Kn&&im(F)===z.type){n(I,z.sibling),E=i(z,C.props),E.ref=Os(I,z,C),E.return=I,I=E;break e}n(I,z);break}else e(I,z);z=z.sibling}C.type===vi?(E=$r(C.props.children,I.mode,D,C.key),E.return=I,I=E):(D=qa(C.type,C.key,C.props,null,I.mode,D),D.ref=Os(I,E,C),D.return=I,I=D)}return o(I);case _i:e:{for(z=C.key;E!==null;){if(E.key===z)if(E.tag===4&&E.stateNode.containerInfo===C.containerInfo&&E.stateNode.implementation===C.implementation){n(I,E.sibling),E=i(E,C.children||[]),E.return=I,I=E;break e}else{n(I,E);break}else e(I,E);E=E.sibling}E=mc(C,I.mode,D),E.return=I,I=E}return o(I);case Kn:return z=C._init,M(I,E,z(C._payload),D)}if(zs(C))return x(I,E,C,D);if(xs(C))return V(I,E,C,D);Sa(I,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,E!==null&&E.tag===6?(n(I,E.sibling),E=i(E,C),E.return=I,I=E):(n(I,E),E=pc(C,I.mode,D),E.return=I,I=E),o(I)):n(I,E)}return M}var qi=v_(!0),E_=v_(!1),gl=Rr(null),yl=null,Ci=null,md=null;function gd(){md=Ci=yl=null}function yd(t){var e=gl.current;_e(gl),t._currentValue=e}function ih(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Oi(t,e){yl=t,md=Ci=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yt=!0),t.firstContext=null)}function Lt(t){var e=t._currentValue;if(md!==t)if(t={context:t,memoizedValue:e,next:null},Ci===null){if(yl===null)throw Error(L(308));Ci=t,yl.dependencies={lanes:0,firstContext:t}}else Ci=Ci.next=t;return e}var Ur=null;function _d(t){Ur===null?Ur=[t]:Ur.push(t)}function w_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,_d(e)):(n.next=i.next,i.next=n),e.interleaved=n,Pn(t,r)}function Pn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qn=!1;function vd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function T_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ur(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Pn(t,n)}return i=r.interleaved,i===null?(e.next=e,_d(r)):(e.next=i.next,i.next=e),r.interleaved=e,Pn(t,n)}function za(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,id(t,n)}}function sm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _l(t,e,n,r){var i=t.updateQueue;Qn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=h=u=null,l=s;do{var g=l.lane,A=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,V=l;switch(g=e,A=n,V.tag){case 1:if(x=V.payload,typeof x=="function"){p=x.call(A,p,g);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=V.payload,g=typeof x=="function"?x.call(A,p,g):x,g==null)break e;p=Se({},p,g);break e;case 2:Qn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else A={eventTime:A,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=A,u=p):f=f.next=A,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Kr|=o,t.lanes=o,t.memoizedState=p}}function om(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var Uo={},on=Rr(Uo),wo=Rr(Uo),To=Rr(Uo);function zr(t){if(t===Uo)throw Error(L(174));return t}function Ed(t,e){switch(fe(To,e),fe(wo,t),fe(on,Uo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fc(e,t)}_e(on),fe(on,e)}function Gi(){_e(on),_e(wo),_e(To)}function I_(t){zr(To.current);var e=zr(on.current),n=Fc(e,t.type);e!==n&&(fe(wo,t),fe(on,n))}function wd(t){wo.current===t&&(_e(on),_e(wo))}var Te=Rr(0);function vl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var lc=[];function Td(){for(var t=0;t<lc.length;t++)lc[t]._workInProgressVersionPrimary=null;lc.length=0}var ja=Ln.ReactCurrentDispatcher,uc=Ln.ReactCurrentBatchConfig,Gr=0,Ie=null,Me=null,$e=null,El=!1,Xs=!1,Io=0,oT=0;function Ze(){throw Error(L(321))}function Id(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qt(t[n],e[n]))return!1;return!0}function Sd(t,e,n,r,i,s){if(Gr=s,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ja.current=t===null||t.memoizedState===null?cT:hT,t=n(r,i),Xs){s=0;do{if(Xs=!1,Io=0,25<=s)throw Error(L(301));s+=1,$e=Me=null,e.updateQueue=null,ja.current=dT,t=n(r,i)}while(Xs)}if(ja.current=wl,e=Me!==null&&Me.next!==null,Gr=0,$e=Me=Ie=null,El=!1,e)throw Error(L(300));return t}function kd(){var t=Io!==0;return Io=0,t}function tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Ie.memoizedState=$e=t:$e=$e.next=t,$e}function Ft(){if(Me===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=Me.next;var e=$e===null?Ie.memoizedState:$e.next;if(e!==null)$e=e,Me=t;else{if(t===null)throw Error(L(310));Me=t,t={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},$e===null?Ie.memoizedState=$e=t:$e=$e.next=t}return $e}function So(t,e){return typeof e=="function"?e(t):e}function cc(t){var e=Ft(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=Me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Gr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ie.lanes|=f,Kr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,Qt(r,e.memoizedState)||(yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ie.lanes|=s,Kr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function hc(t){var e=Ft(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Qt(s,e.memoizedState)||(yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function S_(){}function k_(t,e){var n=Ie,r=Ft(),i=e(),s=!Qt(r.memoizedState,i);if(s&&(r.memoizedState=i,yt=!0),r=r.queue,Ad(R_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,ko(9,C_.bind(null,n,r,i,e),void 0,null),He===null)throw Error(L(349));Gr&30||A_(n,e,i)}return i}function A_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function C_(t,e,n,r){e.value=n,e.getSnapshot=r,P_(e)&&x_(t)}function R_(t,e,n){return n(function(){P_(e)&&x_(t)})}function P_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qt(t,n)}catch{return!0}}function x_(t){var e=Pn(t,1);e!==null&&Gt(e,t,1,-1)}function am(t){var e=tn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:t},e.queue=t,t=t.dispatch=uT.bind(null,Ie,t),[e.memoizedState,t]}function ko(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function N_(){return Ft().memoizedState}function Ba(t,e,n,r){var i=tn();Ie.flags|=t,i.memoizedState=ko(1|e,n,void 0,r===void 0?null:r)}function Zl(t,e,n,r){var i=Ft();r=r===void 0?null:r;var s=void 0;if(Me!==null){var o=Me.memoizedState;if(s=o.destroy,r!==null&&Id(r,o.deps)){i.memoizedState=ko(e,n,s,r);return}}Ie.flags|=t,i.memoizedState=ko(1|e,n,s,r)}function lm(t,e){return Ba(8390656,8,t,e)}function Ad(t,e){return Zl(2048,8,t,e)}function V_(t,e){return Zl(4,2,t,e)}function D_(t,e){return Zl(4,4,t,e)}function b_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function O_(t,e,n){return n=n!=null?n.concat([t]):null,Zl(4,4,b_.bind(null,e,t),n)}function Cd(){}function M_(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Id(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function L_(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Id(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function F_(t,e,n){return Gr&21?(Qt(n,e)||(n=$y(),Ie.lanes|=n,Kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yt=!0),t.memoizedState=n)}function aT(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=uc.transition;uc.transition={};try{t(!1),e()}finally{ce=n,uc.transition=r}}function U_(){return Ft().memoizedState}function lT(t,e,n){var r=hr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},z_(t))j_(e,n);else if(n=w_(t,e,n,r),n!==null){var i=dt();Gt(n,t,r,i),B_(n,e,r)}}function uT(t,e,n){var r=hr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(z_(t))j_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Qt(l,o)){var u=e.interleaved;u===null?(i.next=i,_d(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=w_(t,e,i,r),n!==null&&(i=dt(),Gt(n,t,r,i),B_(n,e,r))}}function z_(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function j_(t,e){Xs=El=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function B_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,id(t,n)}}var wl={readContext:Lt,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},cT={readContext:Lt,useCallback:function(t,e){return tn().memoizedState=[t,e===void 0?null:e],t},useContext:Lt,useEffect:lm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ba(4194308,4,b_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ba(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ba(4,2,t,e)},useMemo:function(t,e){var n=tn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=tn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=lT.bind(null,Ie,t),[r.memoizedState,t]},useRef:function(t){var e=tn();return t={current:t},e.memoizedState=t},useState:am,useDebugValue:Cd,useDeferredValue:function(t){return tn().memoizedState=t},useTransition:function(){var t=am(!1),e=t[0];return t=aT.bind(null,t[1]),tn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ie,i=tn();if(we){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),He===null)throw Error(L(349));Gr&30||A_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,lm(R_.bind(null,r,s,t),[t]),r.flags|=2048,ko(9,C_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=tn(),e=He.identifierPrefix;if(we){var n=wn,r=En;n=(r&~(1<<32-qt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Io++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=oT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},hT={readContext:Lt,useCallback:M_,useContext:Lt,useEffect:Ad,useImperativeHandle:O_,useInsertionEffect:V_,useLayoutEffect:D_,useMemo:L_,useReducer:cc,useRef:N_,useState:function(){return cc(So)},useDebugValue:Cd,useDeferredValue:function(t){var e=Ft();return F_(e,Me.memoizedState,t)},useTransition:function(){var t=cc(So)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:S_,useSyncExternalStore:k_,useId:U_,unstable_isNewReconciler:!1},dT={readContext:Lt,useCallback:M_,useContext:Lt,useEffect:Ad,useImperativeHandle:O_,useInsertionEffect:V_,useLayoutEffect:D_,useMemo:L_,useReducer:hc,useRef:N_,useState:function(){return hc(So)},useDebugValue:Cd,useDeferredValue:function(t){var e=Ft();return Me===null?e.memoizedState=t:F_(e,Me.memoizedState,t)},useTransition:function(){var t=hc(So)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:S_,useSyncExternalStore:k_,useId:U_,unstable_isNewReconciler:!1};function jt(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function sh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var eu={isMounted:function(t){return(t=t._reactInternals)?ri(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=dt(),i=hr(t),s=Sn(r,i);s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,i),e!==null&&(Gt(e,t,i,r),za(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=dt(),i=hr(t),s=Sn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,i),e!==null&&(Gt(e,t,i,r),za(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dt(),r=hr(t),i=Sn(n,r);i.tag=2,e!=null&&(i.callback=e),e=ur(t,i,r),e!==null&&(Gt(e,t,r,n),za(e,t,r))}};function um(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!yo(n,r)||!yo(i,s):!0}function $_(t,e,n){var r=!1,i=Er,s=e.contextType;return typeof s=="object"&&s!==null?s=Lt(s):(i=vt(e)?Wr:st.current,r=e.contextTypes,s=(r=r!=null)?Hi(t,i):Er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=eu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function cm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&eu.enqueueReplaceState(e,e.state,null)}function oh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},vd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Lt(s):(s=vt(e)?Wr:st.current,i.context=Hi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(sh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&eu.enqueueReplaceState(i,i.state,null),_l(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ki(t,e){try{var n="",r=e;do n+=zw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function dc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ah(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fT=typeof WeakMap=="function"?WeakMap:Map;function H_(t,e,n){n=Sn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Il||(Il=!0,yh=r),ah(t,e)},n}function W_(t,e,n){n=Sn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ah(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ah(t,e),typeof r!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function hm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new fT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=CT.bind(null,t,e,n),e.then(t,t))}function dm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function fm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sn(-1,1),e.tag=2,ur(n,e,1))),n.lanes|=1),t)}var pT=Ln.ReactCurrentOwner,yt=!1;function ht(t,e,n,r){e.child=t===null?E_(e,null,n,r):qi(e,t.child,n,r)}function pm(t,e,n,r,i){n=n.render;var s=e.ref;return Oi(e,i),r=Sd(t,e,n,r,s,i),n=kd(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xn(t,e,i)):(we&&n&&dd(e),e.flags|=1,ht(t,e,r,i),e.child)}function mm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Od(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,q_(t,e,s,r,i)):(t=qa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:yo,n(o,r)&&t.ref===e.ref)return xn(t,e,i)}return e.flags|=1,t=dr(s,r),t.ref=e.ref,t.return=e,e.child=t}function q_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(yo(s,r)&&t.ref===e.ref)if(yt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(yt=!0);else return e.lanes=t.lanes,xn(t,e,i)}return lh(t,e,n,r,i)}function G_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(Pi,It),It|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,fe(Pi,It),It|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,fe(Pi,It),It|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,fe(Pi,It),It|=r;return ht(t,e,i,n),e.child}function K_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function lh(t,e,n,r,i){var s=vt(n)?Wr:st.current;return s=Hi(e,s),Oi(e,i),n=Sd(t,e,n,r,s,i),r=kd(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xn(t,e,i)):(we&&r&&dd(e),e.flags|=1,ht(t,e,n,i),e.child)}function gm(t,e,n,r,i){if(vt(n)){var s=!0;fl(e)}else s=!1;if(Oi(e,i),e.stateNode===null)$a(t,e),$_(e,n,r),oh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Lt(h):(h=vt(n)?Wr:st.current,h=Hi(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&cm(e,o,r,h),Qn=!1;var g=e.memoizedState;o.state=g,_l(e,r,o,i),u=e.memoizedState,l!==r||g!==u||_t.current||Qn?(typeof f=="function"&&(sh(e,n,f,r),u=e.memoizedState),(l=Qn||um(e,n,l,r,g,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,T_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:jt(e.type,l),o.props=h,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Lt(u):(u=vt(n)?Wr:st.current,u=Hi(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&cm(e,o,r,u),Qn=!1,g=e.memoizedState,o.state=g,_l(e,r,o,i);var x=e.memoizedState;l!==p||g!==x||_t.current||Qn?(typeof A=="function"&&(sh(e,n,A,r),x=e.memoizedState),(h=Qn||um(e,n,h,r,g,x,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return uh(t,e,n,r,s,i)}function uh(t,e,n,r,i,s){K_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&tm(e,n,!1),xn(t,e,s);r=e.stateNode,pT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=qi(e,t.child,null,s),e.child=qi(e,null,l,s)):ht(t,e,l,s),e.memoizedState=r.state,i&&tm(e,n,!0),e.child}function Q_(t){var e=t.stateNode;e.pendingContext?em(t,e.pendingContext,e.pendingContext!==e.context):e.context&&em(t,e.context,!1),Ed(t,e.containerInfo)}function ym(t,e,n,r,i){return Wi(),pd(i),e.flags|=256,ht(t,e,n,r),e.child}var ch={dehydrated:null,treeContext:null,retryLane:0};function hh(t){return{baseLanes:t,cachePool:null,transitions:null}}function J_(t,e,n){var r=e.pendingProps,i=Te.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),fe(Te,i&1),t===null)return rh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ru(o,r,0,null),t=$r(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=hh(n),e.memoizedState=ch,t):Rd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return mT(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=dr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=dr(l,s):(s=$r(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?hh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ch,r}return s=t.child,t=s.sibling,r=dr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Rd(t,e){return e=ru({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ka(t,e,n,r){return r!==null&&pd(r),qi(e,t.child,null,n),t=Rd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function mT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=dc(Error(L(422))),ka(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ru({mode:"visible",children:r.children},i,0,null),s=$r(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&qi(e,t.child,null,o),e.child.memoizedState=hh(o),e.memoizedState=ch,s);if(!(e.mode&1))return ka(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(L(419)),r=dc(s,r,void 0),ka(t,e,o,r)}if(l=(o&t.childLanes)!==0,yt||l){if(r=He,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Pn(t,i),Gt(r,t,i,-1))}return bd(),r=dc(Error(L(421))),ka(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=RT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,St=lr(i.nextSibling),kt=e,we=!0,$t=null,t!==null&&(xt[Nt++]=En,xt[Nt++]=wn,xt[Nt++]=qr,En=t.id,wn=t.overflow,qr=e),e=Rd(e,r.children),e.flags|=4096,e)}function _m(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ih(t.return,e,n)}function fc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Y_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ht(t,e,r.children,n),r=Te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_m(t,n,e);else if(t.tag===19)_m(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(fe(Te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&vl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),fc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&vl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}fc(e,!0,n,null,s);break;case"together":fc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $a(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gT(t,e,n){switch(e.tag){case 3:Q_(e),Wi();break;case 5:I_(e);break;case 1:vt(e.type)&&fl(e);break;case 4:Ed(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;fe(gl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fe(Te,Te.current&1),e.flags|=128,null):n&e.child.childLanes?J_(t,e,n):(fe(Te,Te.current&1),t=xn(t,e,n),t!==null?t.sibling:null);fe(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Y_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,G_(t,e,n)}return xn(t,e,n)}var X_,dh,Z_,ev;X_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dh=function(){};Z_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,zr(on.current);var s=null;switch(n){case"input":i=bc(t,i),r=bc(t,r),s=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),s=[];break;case"textarea":i=Lc(t,i),r=Lc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=hl)}Uc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(uo.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(uo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&me("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};ev=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ms(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function yT(t,e,n){var r=e.pendingProps;switch(fd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(e),null;case 1:return vt(e.type)&&dl(),et(e),null;case 3:return r=e.stateNode,Gi(),_e(_t),_e(st),Td(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ia(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$t!==null&&(Eh($t),$t=null))),dh(t,e),et(e),null;case 5:wd(e);var i=zr(To.current);if(n=e.type,t!==null&&e.stateNode!=null)Z_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return et(e),null}if(t=zr(on.current),Ia(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[rn]=e,r[Eo]=s,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<Bs.length;i++)me(Bs[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":Cp(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":Pp(r,s),me("invalid",r)}Uc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ta(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ta(r.textContent,l,t),i=["children",""+l]):uo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":pa(r),Rp(r,s,!0);break;case"textarea":pa(r),xp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=hl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ry(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[rn]=e,t[Eo]=r,X_(t,e,!1,!1),e.stateNode=t;e:{switch(o=zc(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<Bs.length;i++)me(Bs[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":Cp(t,r),i=bc(t,r),me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),me("invalid",t);break;case"textarea":Pp(t,r),i=Lc(t,r),me("invalid",t);break;default:i=r}Uc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Ny(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Py(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&co(t,u):typeof u=="number"&&co(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(uo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&me("scroll",t):u!=null&&Xh(t,s,u,o))}switch(n){case"input":pa(t),Rp(t,r,!1);break;case"textarea":pa(t),xp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+vr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ni(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ni(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=hl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return et(e),null;case 6:if(t&&e.stateNode!=null)ev(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=zr(To.current),zr(on.current),Ia(e)){if(r=e.stateNode,n=e.memoizedProps,r[rn]=e,(s=r.nodeValue!==n)&&(t=kt,t!==null))switch(t.tag){case 3:Ta(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ta(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rn]=e,e.stateNode=r}return et(e),null;case 13:if(_e(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&St!==null&&e.mode&1&&!(e.flags&128))__(),Wi(),e.flags|=98560,s=!1;else if(s=Ia(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(L(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(L(317));s[rn]=e}else Wi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;et(e),s=!1}else $t!==null&&(Eh($t),$t=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Te.current&1?Fe===0&&(Fe=3):bd())),e.updateQueue!==null&&(e.flags|=4),et(e),null);case 4:return Gi(),dh(t,e),t===null&&_o(e.stateNode.containerInfo),et(e),null;case 10:return yd(e.type._context),et(e),null;case 17:return vt(e.type)&&dl(),et(e),null;case 19:if(_e(Te),s=e.memoizedState,s===null)return et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ms(s,!1);else{if(Fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=vl(t),o!==null){for(e.flags|=128,Ms(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return fe(Te,Te.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pe()>Qi&&(e.flags|=128,r=!0,Ms(s,!1),e.lanes=4194304)}else{if(!r)if(t=vl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ms(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!we)return et(e),null}else 2*Pe()-s.renderingStartTime>Qi&&n!==1073741824&&(e.flags|=128,r=!0,Ms(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pe(),e.sibling=null,n=Te.current,fe(Te,r?n&1|2:n&1),e):(et(e),null);case 22:case 23:return Dd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?It&1073741824&&(et(e),e.subtreeFlags&6&&(e.flags|=8192)):et(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function _T(t,e){switch(fd(e),e.tag){case 1:return vt(e.type)&&dl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gi(),_e(_t),_e(st),Td(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wd(e),null;case 13:if(_e(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));Wi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(Te),null;case 4:return Gi(),null;case 10:return yd(e.type._context),null;case 22:case 23:return Dd(),null;case 24:return null;default:return null}}var Aa=!1,rt=!1,vT=typeof WeakSet=="function"?WeakSet:Set,$=null;function Ri(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(t,e,r)}else n.current=null}function fh(t,e,n){try{n()}catch(r){Ce(t,e,r)}}var vm=!1;function ET(t,e){if(Jc=ll,t=s_(),hd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,g=null;t:for(;;){for(var A;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(A=p.firstChild)!==null;)g=p,p=A;for(;;){if(p===t)break t;if(g===n&&++h===i&&(l=o),g===s&&++f===r&&(u=o),(A=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yc={focusedElem:t,selectionRange:n},ll=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var V=x.memoizedProps,M=x.memoizedState,I=e.stateNode,E=I.getSnapshotBeforeUpdate(e.elementType===e.type?V:jt(e.type,V),M);I.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(D){Ce(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return x=vm,vm=!1,x}function Zs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&fh(e,n,s)}i=i.next}while(i!==r)}}function tu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ph(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function tv(t){var e=t.alternate;e!==null&&(t.alternate=null,tv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[rn],delete e[Eo],delete e[eh],delete e[nT],delete e[rT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function nv(t){return t.tag===5||t.tag===3||t.tag===4}function Em(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||nv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hl));else if(r!==4&&(t=t.child,t!==null))for(mh(t,e,n),t=t.sibling;t!==null;)mh(t,e,n),t=t.sibling}function gh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(gh(t,e,n),t=t.sibling;t!==null;)gh(t,e,n),t=t.sibling}var qe=null,Bt=!1;function qn(t,e,n){for(n=n.child;n!==null;)rv(t,e,n),n=n.sibling}function rv(t,e,n){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(Gl,n)}catch{}switch(n.tag){case 5:rt||Ri(n,e);case 6:var r=qe,i=Bt;qe=null,qn(t,e,n),qe=r,Bt=i,qe!==null&&(Bt?(t=qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(Bt?(t=qe,n=n.stateNode,t.nodeType===8?oc(t.parentNode,n):t.nodeType===1&&oc(t,n),mo(t)):oc(qe,n.stateNode));break;case 4:r=qe,i=Bt,qe=n.stateNode.containerInfo,Bt=!0,qn(t,e,n),qe=r,Bt=i;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&fh(n,e,o),i=i.next}while(i!==r)}qn(t,e,n);break;case 1:if(!rt&&(Ri(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ce(n,e,l)}qn(t,e,n);break;case 21:qn(t,e,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,qn(t,e,n),rt=r):qn(t,e,n);break;default:qn(t,e,n)}}function wm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vT),e.forEach(function(r){var i=PT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:qe=l.stateNode,Bt=!1;break e;case 3:qe=l.stateNode.containerInfo,Bt=!0;break e;case 4:qe=l.stateNode.containerInfo,Bt=!0;break e}l=l.return}if(qe===null)throw Error(L(160));rv(s,o,i),qe=null,Bt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Ce(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)iv(e,t),e=e.sibling}function iv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zt(e,t),en(t),r&4){try{Zs(3,t,t.return),tu(3,t)}catch(V){Ce(t,t.return,V)}try{Zs(5,t,t.return)}catch(V){Ce(t,t.return,V)}}break;case 1:zt(e,t),en(t),r&512&&n!==null&&Ri(n,n.return);break;case 5:if(zt(e,t),en(t),r&512&&n!==null&&Ri(n,n.return),t.flags&32){var i=t.stateNode;try{co(i,"")}catch(V){Ce(t,t.return,V)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Ay(i,s),zc(l,o);var h=zc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?Ny(i,p):f==="dangerouslySetInnerHTML"?Py(i,p):f==="children"?co(i,p):Xh(i,f,p,h)}switch(l){case"input":Oc(i,s);break;case"textarea":Cy(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?Ni(i,!!s.multiple,A,!1):g!==!!s.multiple&&(s.defaultValue!=null?Ni(i,!!s.multiple,s.defaultValue,!0):Ni(i,!!s.multiple,s.multiple?[]:"",!1))}i[Eo]=s}catch(V){Ce(t,t.return,V)}}break;case 6:if(zt(e,t),en(t),r&4){if(t.stateNode===null)throw Error(L(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(V){Ce(t,t.return,V)}}break;case 3:if(zt(e,t),en(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mo(e.containerInfo)}catch(V){Ce(t,t.return,V)}break;case 4:zt(e,t),en(t);break;case 13:zt(e,t),en(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Nd=Pe())),r&4&&wm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(rt=(h=rt)||f,zt(e,t),rt=h):zt(e,t),en(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(p=$=f;$!==null;){switch(g=$,A=g.child,g.tag){case 0:case 11:case 14:case 15:Zs(4,g,g.return);break;case 1:Ri(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(V){Ce(r,n,V)}}break;case 5:Ri(g,g.return);break;case 22:if(g.memoizedState!==null){Im(p);continue}}A!==null?(A.return=g,$=A):Im(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=xy("display",o))}catch(V){Ce(t,t.return,V)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(V){Ce(t,t.return,V)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:zt(e,t),en(t),r&4&&wm(t);break;case 21:break;default:zt(e,t),en(t)}}function en(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(nv(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(co(i,""),r.flags&=-33);var s=Em(t);gh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Em(t);mh(t,l,o);break;default:throw Error(L(161))}}catch(u){Ce(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function wT(t,e,n){$=t,sv(t)}function sv(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Aa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||rt;l=Aa;var h=rt;if(Aa=o,(rt=u)&&!h)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?Sm(i):u!==null?(u.return=o,$=u):Sm(i);for(;s!==null;)$=s,sv(s),s=s.sibling;$=i,Aa=l,rt=h}Tm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Tm(t)}}function Tm(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rt||tu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!rt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:jt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&om(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}om(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&mo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}rt||e.flags&512&&ph(e)}catch(g){Ce(e,e.return,g)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Im(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Sm(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{tu(4,e)}catch(u){Ce(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ce(e,i,u)}}var s=e.return;try{ph(e)}catch(u){Ce(e,s,u)}break;case 5:var o=e.return;try{ph(e)}catch(u){Ce(e,o,u)}}}catch(u){Ce(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var TT=Math.ceil,Tl=Ln.ReactCurrentDispatcher,Pd=Ln.ReactCurrentOwner,Mt=Ln.ReactCurrentBatchConfig,le=0,He=null,Ne=null,Qe=0,It=0,Pi=Rr(0),Fe=0,Ao=null,Kr=0,nu=0,xd=0,eo=null,gt=null,Nd=0,Qi=1/0,_n=null,Il=!1,yh=null,cr=null,Ca=!1,rr=null,Sl=0,to=0,_h=null,Ha=-1,Wa=0;function dt(){return le&6?Pe():Ha!==-1?Ha:Ha=Pe()}function hr(t){return t.mode&1?le&2&&Qe!==0?Qe&-Qe:sT.transition!==null?(Wa===0&&(Wa=$y()),Wa):(t=ce,t!==0||(t=window.event,t=t===void 0?16:Jy(t.type)),t):1}function Gt(t,e,n,r){if(50<to)throw to=0,_h=null,Error(L(185));Mo(t,n,r),(!(le&2)||t!==He)&&(t===He&&(!(le&2)&&(nu|=n),Fe===4&&Yn(t,Qe)),Et(t,r),n===1&&le===0&&!(e.mode&1)&&(Qi=Pe()+500,Xl&&Pr()))}function Et(t,e){var n=t.callbackNode;s1(t,e);var r=al(t,t===He?Qe:0);if(r===0)n!==null&&Dp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Dp(n),e===1)t.tag===0?iT(km.bind(null,t)):m_(km.bind(null,t)),eT(function(){!(le&6)&&Pr()}),n=null;else{switch(Hy(r)){case 1:n=rd;break;case 4:n=jy;break;case 16:n=ol;break;case 536870912:n=By;break;default:n=ol}n=fv(n,ov.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ov(t,e){if(Ha=-1,Wa=0,le&6)throw Error(L(327));var n=t.callbackNode;if(Mi()&&t.callbackNode!==n)return null;var r=al(t,t===He?Qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=kl(t,r);else{e=r;var i=le;le|=2;var s=lv();(He!==t||Qe!==e)&&(_n=null,Qi=Pe()+500,Br(t,e));do try{kT();break}catch(l){av(t,l)}while(!0);gd(),Tl.current=s,le=i,Ne!==null?e=0:(He=null,Qe=0,e=Fe)}if(e!==0){if(e===2&&(i=Wc(t),i!==0&&(r=i,e=vh(t,i))),e===1)throw n=Ao,Br(t,0),Yn(t,r),Et(t,Pe()),n;if(e===6)Yn(t,r);else{if(i=t.current.alternate,!(r&30)&&!IT(i)&&(e=kl(t,r),e===2&&(s=Wc(t),s!==0&&(r=s,e=vh(t,s))),e===1))throw n=Ao,Br(t,0),Yn(t,r),Et(t,Pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:Mr(t,gt,_n);break;case 3:if(Yn(t,r),(r&130023424)===r&&(e=Nd+500-Pe(),10<e)){if(al(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Zc(Mr.bind(null,t,gt,_n),e);break}Mr(t,gt,_n);break;case 4:if(Yn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-qt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*TT(r/1960))-r,10<r){t.timeoutHandle=Zc(Mr.bind(null,t,gt,_n),r);break}Mr(t,gt,_n);break;case 5:Mr(t,gt,_n);break;default:throw Error(L(329))}}}return Et(t,Pe()),t.callbackNode===n?ov.bind(null,t):null}function vh(t,e){var n=eo;return t.current.memoizedState.isDehydrated&&(Br(t,e).flags|=256),t=kl(t,e),t!==2&&(e=gt,gt=n,e!==null&&Eh(e)),t}function Eh(t){gt===null?gt=t:gt.push.apply(gt,t)}function IT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Qt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yn(t,e){for(e&=~xd,e&=~nu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qt(e),r=1<<n;t[n]=-1,e&=~r}}function km(t){if(le&6)throw Error(L(327));Mi();var e=al(t,0);if(!(e&1))return Et(t,Pe()),null;var n=kl(t,e);if(t.tag!==0&&n===2){var r=Wc(t);r!==0&&(e=r,n=vh(t,r))}if(n===1)throw n=Ao,Br(t,0),Yn(t,e),Et(t,Pe()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mr(t,gt,_n),Et(t,Pe()),null}function Vd(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(Qi=Pe()+500,Xl&&Pr())}}function Qr(t){rr!==null&&rr.tag===0&&!(le&6)&&Mi();var e=le;le|=1;var n=Mt.transition,r=ce;try{if(Mt.transition=null,ce=1,t)return t()}finally{ce=r,Mt.transition=n,le=e,!(le&6)&&Pr()}}function Dd(){It=Pi.current,_e(Pi)}function Br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Z1(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(fd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dl();break;case 3:Gi(),_e(_t),_e(st),Td();break;case 5:wd(r);break;case 4:Gi();break;case 13:_e(Te);break;case 19:_e(Te);break;case 10:yd(r.type._context);break;case 22:case 23:Dd()}n=n.return}if(He=t,Ne=t=dr(t.current,null),Qe=It=e,Fe=0,Ao=null,xd=nu=Kr=0,gt=eo=null,Ur!==null){for(e=0;e<Ur.length;e++)if(n=Ur[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ur=null}return t}function av(t,e){do{var n=Ne;try{if(gd(),ja.current=wl,El){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}El=!1}if(Gr=0,$e=Me=Ie=null,Xs=!1,Io=0,Pd.current=null,n===null||n.return===null){Fe=1,Ao=e,Ne=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Qe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=dm(o);if(A!==null){A.flags&=-257,fm(A,o,l,s,e),A.mode&1&&hm(s,h,e),e=A,u=h;var x=e.updateQueue;if(x===null){var V=new Set;V.add(u),e.updateQueue=V}else x.add(u);break e}else{if(!(e&1)){hm(s,h,e),bd();break e}u=Error(L(426))}}else if(we&&l.mode&1){var M=dm(o);if(M!==null){!(M.flags&65536)&&(M.flags|=256),fm(M,o,l,s,e),pd(Ki(u,l));break e}}s=u=Ki(u,l),Fe!==4&&(Fe=2),eo===null?eo=[s]:eo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=H_(s,u,e);sm(s,I);break e;case 1:l=u;var E=s.type,C=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(cr===null||!cr.has(C)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=W_(s,l,e);sm(s,D);break e}}s=s.return}while(s!==null)}cv(n)}catch(F){e=F,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function lv(){var t=Tl.current;return Tl.current=wl,t===null?wl:t}function bd(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),He===null||!(Kr&268435455)&&!(nu&268435455)||Yn(He,Qe)}function kl(t,e){var n=le;le|=2;var r=lv();(He!==t||Qe!==e)&&(_n=null,Br(t,e));do try{ST();break}catch(i){av(t,i)}while(!0);if(gd(),le=n,Tl.current=r,Ne!==null)throw Error(L(261));return He=null,Qe=0,Fe}function ST(){for(;Ne!==null;)uv(Ne)}function kT(){for(;Ne!==null&&!Jw();)uv(Ne)}function uv(t){var e=dv(t.alternate,t,It);t.memoizedProps=t.pendingProps,e===null?cv(t):Ne=e,Pd.current=null}function cv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=_T(n,e),n!==null){n.flags&=32767,Ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Fe=6,Ne=null;return}}else if(n=yT(n,e,It),n!==null){Ne=n;return}if(e=e.sibling,e!==null){Ne=e;return}Ne=e=t}while(e!==null);Fe===0&&(Fe=5)}function Mr(t,e,n){var r=ce,i=Mt.transition;try{Mt.transition=null,ce=1,AT(t,e,n,r)}finally{Mt.transition=i,ce=r}return null}function AT(t,e,n,r){do Mi();while(rr!==null);if(le&6)throw Error(L(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(o1(t,s),t===He&&(Ne=He=null,Qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ca||(Ca=!0,fv(ol,function(){return Mi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mt.transition,Mt.transition=null;var o=ce;ce=1;var l=le;le|=4,Pd.current=null,ET(t,n),iv(n,t),q1(Yc),ll=!!Jc,Yc=Jc=null,t.current=n,wT(n),Yw(),le=l,ce=o,Mt.transition=s}else t.current=n;if(Ca&&(Ca=!1,rr=t,Sl=i),s=t.pendingLanes,s===0&&(cr=null),e1(n.stateNode),Et(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Il)throw Il=!1,t=yh,yh=null,t;return Sl&1&&t.tag!==0&&Mi(),s=t.pendingLanes,s&1?t===_h?to++:(to=0,_h=t):to=0,Pr(),null}function Mi(){if(rr!==null){var t=Hy(Sl),e=Mt.transition,n=ce;try{if(Mt.transition=null,ce=16>t?16:t,rr===null)var r=!1;else{if(t=rr,rr=null,Sl=0,le&6)throw Error(L(331));var i=le;for(le|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for($=h;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:Zs(8,f,s)}var p=f.child;if(p!==null)p.return=f,$=p;else for(;$!==null;){f=$;var g=f.sibling,A=f.return;if(tv(f),f===h){$=null;break}if(g!==null){g.return=A,$=g;break}$=A}}}var x=s.alternate;if(x!==null){var V=x.child;if(V!==null){x.child=null;do{var M=V.sibling;V.sibling=null,V=M}while(V!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Zs(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,$=I;break e}$=s.return}}var E=t.current;for($=E;$!==null;){o=$;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,$=C;else e:for(o=E;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:tu(9,l)}}catch(F){Ce(l,l.return,F)}if(l===o){$=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,$=D;break e}$=l.return}}if(le=i,Pr(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(Gl,t)}catch{}r=!0}return r}finally{ce=n,Mt.transition=e}}return!1}function Am(t,e,n){e=Ki(n,e),e=H_(t,e,1),t=ur(t,e,1),e=dt(),t!==null&&(Mo(t,1,e),Et(t,e))}function Ce(t,e,n){if(t.tag===3)Am(t,t,n);else for(;e!==null;){if(e.tag===3){Am(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cr===null||!cr.has(r))){t=Ki(n,t),t=W_(e,t,1),e=ur(e,t,1),t=dt(),e!==null&&(Mo(e,1,t),Et(e,t));break}}e=e.return}}function CT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=dt(),t.pingedLanes|=t.suspendedLanes&n,He===t&&(Qe&n)===n&&(Fe===4||Fe===3&&(Qe&130023424)===Qe&&500>Pe()-Nd?Br(t,0):xd|=n),Et(t,e)}function hv(t,e){e===0&&(t.mode&1?(e=ya,ya<<=1,!(ya&130023424)&&(ya=4194304)):e=1);var n=dt();t=Pn(t,e),t!==null&&(Mo(t,e,n),Et(t,n))}function RT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),hv(t,n)}function PT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),hv(t,n)}var dv;dv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_t.current)yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yt=!1,gT(t,e,n);yt=!!(t.flags&131072)}else yt=!1,we&&e.flags&1048576&&g_(e,ml,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;$a(t,e),t=e.pendingProps;var i=Hi(e,st.current);Oi(e,n),i=Sd(null,e,r,t,i,n);var s=kd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vt(r)?(s=!0,fl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vd(e),i.updater=eu,e.stateNode=i,i._reactInternals=e,oh(e,r,t,n),e=uh(null,e,r,!0,s,n)):(e.tag=0,we&&s&&dd(e),ht(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch($a(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=NT(r),t=jt(r,t),i){case 0:e=lh(null,e,r,t,n);break e;case 1:e=gm(null,e,r,t,n);break e;case 11:e=pm(null,e,r,t,n);break e;case 14:e=mm(null,e,r,jt(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),lh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),gm(t,e,r,i,n);case 3:e:{if(Q_(e),t===null)throw Error(L(387));r=e.pendingProps,s=e.memoizedState,i=s.element,T_(t,e),_l(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ki(Error(L(423)),e),e=ym(t,e,r,n,i);break e}else if(r!==i){i=Ki(Error(L(424)),e),e=ym(t,e,r,n,i);break e}else for(St=lr(e.stateNode.containerInfo.firstChild),kt=e,we=!0,$t=null,n=E_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wi(),r===i){e=xn(t,e,n);break e}ht(t,e,r,n)}e=e.child}return e;case 5:return I_(e),t===null&&rh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Xc(r,i)?o=null:s!==null&&Xc(r,s)&&(e.flags|=32),K_(t,e),ht(t,e,o,n),e.child;case 6:return t===null&&rh(e),null;case 13:return J_(t,e,n);case 4:return Ed(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=qi(e,null,r,n):ht(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),pm(t,e,r,i,n);case 7:return ht(t,e,e.pendingProps,n),e.child;case 8:return ht(t,e,e.pendingProps.children,n),e.child;case 12:return ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,fe(gl,r._currentValue),r._currentValue=o,s!==null)if(Qt(s.value,o)){if(s.children===i.children&&!_t.current){e=xn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Sn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),ih(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(L(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ih(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ht(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Oi(e,n),i=Lt(i),r=r(i),e.flags|=1,ht(t,e,r,n),e.child;case 14:return r=e.type,i=jt(r,e.pendingProps),i=jt(r.type,i),mm(t,e,r,i,n);case 15:return q_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),$a(t,e),e.tag=1,vt(r)?(t=!0,fl(e)):t=!1,Oi(e,n),$_(e,r,i),oh(e,r,i,n),uh(null,e,r,!0,t,n);case 19:return Y_(t,e,n);case 22:return G_(t,e,n)}throw Error(L(156,e.tag))};function fv(t,e){return zy(t,e)}function xT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(t,e,n,r){return new xT(t,e,n,r)}function Od(t){return t=t.prototype,!(!t||!t.isReactComponent)}function NT(t){if(typeof t=="function")return Od(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ed)return 11;if(t===td)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=Ot(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function qa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Od(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vi:return $r(n.children,i,s,e);case Zh:o=8,i|=8;break;case xc:return t=Ot(12,n,e,i|2),t.elementType=xc,t.lanes=s,t;case Nc:return t=Ot(13,n,e,i),t.elementType=Nc,t.lanes=s,t;case Vc:return t=Ot(19,n,e,i),t.elementType=Vc,t.lanes=s,t;case Iy:return ru(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case wy:o=10;break e;case Ty:o=9;break e;case ed:o=11;break e;case td:o=14;break e;case Kn:o=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=Ot(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function $r(t,e,n,r){return t=Ot(7,t,r,e),t.lanes=n,t}function ru(t,e,n,r){return t=Ot(22,t,r,e),t.elementType=Iy,t.lanes=n,t.stateNode={isHidden:!1},t}function pc(t,e,n){return t=Ot(6,t,null,e),t.lanes=n,t}function mc(t,e,n){return e=Ot(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function VT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qu(0),this.expirationTimes=Qu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Md(t,e,n,r,i,s,o,l,u){return t=new VT(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ot(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vd(s),t}function DT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_i,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function pv(t){if(!t)return Er;t=t._reactInternals;e:{if(ri(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(vt(n))return p_(t,n,e)}return e}function mv(t,e,n,r,i,s,o,l,u){return t=Md(n,r,!0,t,i,s,o,l,u),t.context=pv(null),n=t.current,r=dt(),i=hr(n),s=Sn(r,i),s.callback=e??null,ur(n,s,i),t.current.lanes=i,Mo(t,i,r),Et(t,r),t}function iu(t,e,n,r){var i=e.current,s=dt(),o=hr(i);return n=pv(n),e.context===null?e.context=n:e.pendingContext=n,e=Sn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ur(i,e,o),t!==null&&(Gt(t,i,o,s),za(t,i,o)),o}function Al(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ld(t,e){Cm(t,e),(t=t.alternate)&&Cm(t,e)}function bT(){return null}var gv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Fd(t){this._internalRoot=t}su.prototype.render=Fd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));iu(t,e,null,null)};su.prototype.unmount=Fd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qr(function(){iu(null,t,null,null)}),e[Rn]=null}};function su(t){this._internalRoot=t}su.prototype.unstable_scheduleHydration=function(t){if(t){var e=Gy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Jn.length&&e!==0&&e<Jn[n].priority;n++);Jn.splice(n,0,t),n===0&&Qy(t)}};function Ud(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ou(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Rm(){}function OT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Al(o);s.call(h)}}var o=mv(e,r,t,0,null,!1,!1,"",Rm);return t._reactRootContainer=o,t[Rn]=o.current,_o(t.nodeType===8?t.parentNode:t),Qr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=Al(u);l.call(h)}}var u=Md(t,0,!1,null,null,!1,!1,"",Rm);return t._reactRootContainer=u,t[Rn]=u.current,_o(t.nodeType===8?t.parentNode:t),Qr(function(){iu(e,u,n,r)}),u}function au(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Al(o);l.call(u)}}iu(e,o,t,i)}else o=OT(n,e,t,i,r);return Al(o)}Wy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=js(e.pendingLanes);n!==0&&(id(e,n|1),Et(e,Pe()),!(le&6)&&(Qi=Pe()+500,Pr()))}break;case 13:Qr(function(){var r=Pn(t,1);if(r!==null){var i=dt();Gt(r,t,1,i)}}),Ld(t,1)}};sd=function(t){if(t.tag===13){var e=Pn(t,134217728);if(e!==null){var n=dt();Gt(e,t,134217728,n)}Ld(t,134217728)}};qy=function(t){if(t.tag===13){var e=hr(t),n=Pn(t,e);if(n!==null){var r=dt();Gt(n,t,e,r)}Ld(t,e)}};Gy=function(){return ce};Ky=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};Bc=function(t,e,n){switch(e){case"input":if(Oc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Yl(r);if(!i)throw Error(L(90));ky(r),Oc(r,i)}}}break;case"textarea":Cy(t,n);break;case"select":e=n.value,e!=null&&Ni(t,!!n.multiple,e,!1)}};by=Vd;Oy=Qr;var MT={usingClientEntryPoint:!1,Events:[Fo,Ii,Yl,Vy,Dy,Vd]},Ls={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},LT={bundleType:Ls.bundleType,version:Ls.version,rendererPackageName:Ls.rendererPackageName,rendererConfig:Ls.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Fy(t),t===null?null:t.stateNode},findFiberByHostInstance:Ls.findFiberByHostInstance||bT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ra.isDisabled&&Ra.supportsFiber)try{Gl=Ra.inject(LT),sn=Ra}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MT;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ud(e))throw Error(L(200));return DT(t,e,null,n)};Rt.createRoot=function(t,e){if(!Ud(t))throw Error(L(299));var n=!1,r="",i=gv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Md(t,1,!1,null,null,n,!1,r,i),t[Rn]=e.current,_o(t.nodeType===8?t.parentNode:t),new Fd(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=Fy(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return Qr(t)};Rt.hydrate=function(t,e,n){if(!ou(e))throw Error(L(200));return au(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!Ud(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=gv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=mv(e,null,t,1,n??null,i,!1,s,o),t[Rn]=e.current,_o(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new su(e)};Rt.render=function(t,e,n){if(!ou(e))throw Error(L(200));return au(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!ou(t))throw Error(L(40));return t._reactRootContainer?(Qr(function(){au(null,null,t,!1,function(){t._reactRootContainer=null,t[Rn]=null})}),!0):!1};Rt.unstable_batchedUpdates=Vd;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ou(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return au(t,e,n,!1,r)};Rt.version="18.3.1-next-f1338f8080-20240426";function yv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yv)}catch(t){console.error(t)}}yv(),yy.exports=Rt;var FT=yy.exports,_v,Pm=FT;_v=Pm.createRoot,Pm.hydrateRoot;/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=t=>{const e=zT(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=ae.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>ae.createElement("svg",{ref:u,...jT,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:vv("lucide",i),...!s&&!BT(l)&&{"aria-hidden":"true"},...l},[...o.map(([h,f])=>ae.createElement(h,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=(t,e)=>{const n=ae.forwardRef(({className:r,...i},s)=>ae.createElement($T,{ref:s,iconNode:e,className:vv(`lucide-${UT(xm(t))}`,`lucide-${t}`,r),...i}));return n.displayName=xm(t),n};/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Nm=ve("arrow-right",HT);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8.62 9.8A2.25 2.25 0 1 1 12 6.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z",key:"9v40y5"}]],qT=ve("book-heart",WT);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],KT=ve("book-open",GT);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],JT=ve("brain",QT);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],XT=ve("check",YT);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Vm=ve("chevron-left",ZT);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eI=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],tI=ve("chevron-right",eI);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nI=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],rI=ve("circle-alert",nI);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iI=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ev=ve("circle-check",iI);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sI=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],Dm=ve("clock",sI);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oI=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],aI=ve("eraser",oI);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lI=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],uI=ve("flame",lI);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cI=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],hI=ve("gamepad-2",cI);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dI=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],fI=ve("house",dI);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pI=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],bm=ve("loader-circle",pI);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mI=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],gI=ve("moon",mI);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yI=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]],_I=ve("pen-tool",yI);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vI=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],EI=ve("quote",vI);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wI=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],TI=ve("sparkles",wI);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const II=[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M8 3H3v5",key:"15dfkv"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3",key:"1qrqzj"}],["path",{d:"m15 9 6-6",key:"ko1vev"}]],SI=ve("split",II);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kI=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],AI=ve("sun",kI);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CI=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],RI=ve("target",CI);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PI=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],gc=ve("trophy",PI);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xI=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],NI=ve("volume-2",xI);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VI=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],DI=ve("zap",VI),bI=()=>{};var Om={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},OI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Tv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(g=64)),r.push(n[f],n[p],n[g],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):OI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new MI;const g=s<<2|l>>4;if(r.push(g),h!==64){const A=l<<4&240|h>>2;if(r.push(A),p!==64){const x=h<<6&192|p;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class MI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const LI=function(t){const e=wv(t);return Tv.encodeByteArray(e,!0)},Cl=function(t){return LI(t).replace(/\./g,"")},Iv=function(t){try{return Tv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=()=>FI().__FIREBASE_DEFAULTS__,zI=()=>{if(typeof process>"u"||typeof Om>"u")return;const t=Om.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Iv(t[1]);return e&&JSON.parse(e)},lu=()=>{try{return bI()||UI()||zI()||jI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Sv=t=>{var e,n;return(n=(e=lu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},BI=t=>{const e=Sv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},kv=()=>{var t;return(t=lu())==null?void 0:t.config},Av=t=>{var e;return(e=lu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Cv(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Cl(JSON.stringify(n)),Cl(JSON.stringify(o)),""].join(".")}const no={};function WI(){const t={prod:[],emulator:[]};for(const e of Object.keys(no))no[e]?t.emulator.push(e):t.prod.push(e);return t}function qI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Mm=!1;function Rv(t,e){if(typeof window>"u"||typeof document>"u"||!os(window.location.host)||no[t]===e||no[t]||Mm)return;no[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=WI().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,A){g.setAttribute("width","24"),g.setAttribute("id",A),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Mm=!0,o()},g}function f(g,A){g.setAttribute("id",A),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=qI(r),A=n("text"),x=document.getElementById(A)||document.createElement("span"),V=n("learnmore"),M=document.getElementById(V)||document.createElement("a"),I=n("preprendIcon"),E=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const C=g.element;l(C),f(M,V);const D=h();u(E,I),C.append(E,x,M,D),document.body.appendChild(C)}s?(x.innerText="Preview backend disconnected.",E.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(E.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function GI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function KI(){var e;const t=(e=lu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function QI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function JI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function YI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function XI(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ZI(){return!KI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function eS(){try{return typeof indexedDB=="object"}catch{return!1}}function tS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS="FirebaseError";class Fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=nS,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zo.prototype.create)}}class zo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?rS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Fn(i,l,r)}}function rS(t,e){return t.replace(iS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const iS=/\{\$([^}]+)}/g;function sS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Jr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Lm(s)&&Lm(o)){if(!Jr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Lm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function oS(t,e){const n=new aS(t,e);return n.subscribe.bind(n)}class aS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");lS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=yc),i.error===void 0&&(i.error=yc),i.complete===void 0&&(i.complete=yc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t){return t&&t._delegate?t._delegate:t}class Yr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new $I;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hS(e))try{this.getOrInitializeService({instanceIdentifier:Lr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lr){return this.instances.has(e)}getOptions(e=Lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Lr){return this.component?this.component.multipleInstances?e:Lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cS(t){return t===Lr?void 0:t}function hS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const fS={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},pS=ne.INFO,mS={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},gS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=mS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zd{constructor(e){this.name=e,this._logLevel=pS,this._logHandler=gS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const yS=(t,e)=>e.some(n=>t instanceof n);let Fm,Um;function _S(){return Fm||(Fm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vS(){return Um||(Um=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pv=new WeakMap,wh=new WeakMap,xv=new WeakMap,_c=new WeakMap,jd=new WeakMap;function ES(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(fr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Pv.set(n,t)}).catch(()=>{}),jd.set(e,t),e}function wS(t){if(wh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});wh.set(t,e)}let Th={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function TS(t){Th=t(Th)}function IS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vc(this),e,...n);return xv.set(r,e.sort?e.sort():[e]),fr(r)}:vS().includes(t)?function(...e){return t.apply(vc(this),e),fr(Pv.get(this))}:function(...e){return fr(t.apply(vc(this),e))}}function SS(t){return typeof t=="function"?IS(t):(t instanceof IDBTransaction&&wS(t),yS(t,_S())?new Proxy(t,Th):t)}function fr(t){if(t instanceof IDBRequest)return ES(t);if(_c.has(t))return _c.get(t);const e=SS(t);return e!==t&&(_c.set(t,e),jd.set(e,t)),e}const vc=t=>jd.get(t);function kS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=fr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(fr(o.result),u.oldVersion,u.newVersion,fr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const AS=["get","getKey","getAll","getAllKeys","count"],CS=["put","add","delete","clear"],Ec=new Map;function zm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ec.get(e))return Ec.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=CS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||AS.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Ec.set(e,s),s}TS(t=>({...t,get:(e,n,r)=>zm(e,n)||t.get(e,n,r),has:(e,n)=>!!zm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(PS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function PS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ih="@firebase/app",jm="0.14.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new zd("@firebase/app"),xS="@firebase/app-compat",NS="@firebase/analytics-compat",VS="@firebase/analytics",DS="@firebase/app-check-compat",bS="@firebase/app-check",OS="@firebase/auth",MS="@firebase/auth-compat",LS="@firebase/database",FS="@firebase/data-connect",US="@firebase/database-compat",zS="@firebase/functions",jS="@firebase/functions-compat",BS="@firebase/installations",$S="@firebase/installations-compat",HS="@firebase/messaging",WS="@firebase/messaging-compat",qS="@firebase/performance",GS="@firebase/performance-compat",KS="@firebase/remote-config",QS="@firebase/remote-config-compat",JS="@firebase/storage",YS="@firebase/storage-compat",XS="@firebase/firestore",ZS="@firebase/ai",ek="@firebase/firestore-compat",tk="firebase",nk="12.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="[DEFAULT]",rk={[Ih]:"fire-core",[xS]:"fire-core-compat",[VS]:"fire-analytics",[NS]:"fire-analytics-compat",[bS]:"fire-app-check",[DS]:"fire-app-check-compat",[OS]:"fire-auth",[MS]:"fire-auth-compat",[LS]:"fire-rtdb",[FS]:"fire-data-connect",[US]:"fire-rtdb-compat",[zS]:"fire-fn",[jS]:"fire-fn-compat",[BS]:"fire-iid",[$S]:"fire-iid-compat",[HS]:"fire-fcm",[WS]:"fire-fcm-compat",[qS]:"fire-perf",[GS]:"fire-perf-compat",[KS]:"fire-rc",[QS]:"fire-rc-compat",[JS]:"fire-gcs",[YS]:"fire-gcs-compat",[XS]:"fire-fst",[ek]:"fire-fst-compat",[ZS]:"fire-vertex","fire-js":"fire-js",[tk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl=new Map,ik=new Map,kh=new Map;function Bm(t,e){try{t.container.addComponent(e)}catch(n){Nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ji(t){const e=t.name;if(kh.has(e))return Nn.debug(`There were multiple attempts to register component ${e}.`),!1;kh.set(e,t);for(const n of Rl.values())Bm(n,t);for(const n of ik.values())Bm(n,t);return!0}function Bd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Vt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pr=new zo("app","Firebase",sk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=nk;function Nv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Sh,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw pr.create("bad-app-name",{appName:String(i)});if(n||(n=kv()),!n)throw pr.create("no-options");const s=Rl.get(i);if(s){if(Jr(n,s.options)&&Jr(r,s.config))return s;throw pr.create("duplicate-app",{appName:i})}const o=new dS(i);for(const u of kh.values())o.addComponent(u);const l=new ok(n,r,o);return Rl.set(i,l),l}function Vv(t=Sh){const e=Rl.get(t);if(!e&&t===Sh&&kv())return Nv();if(!e)throw pr.create("no-app",{appName:t});return e}function mr(t,e,n){let r=rk[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nn.warn(o.join(" "));return}Ji(new Yr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak="firebase-heartbeat-database",lk=1,Co="firebase-heartbeat-store";let wc=null;function Dv(){return wc||(wc=kS(ak,lk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Co)}catch(n){console.warn(n)}}}}).catch(t=>{throw pr.create("idb-open",{originalErrorMessage:t.message})})),wc}async function uk(t){try{const n=(await Dv()).transaction(Co),r=await n.objectStore(Co).get(bv(t));return await n.done,r}catch(e){if(e instanceof Fn)Nn.warn(e.message);else{const n=pr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nn.warn(n.message)}}}async function $m(t,e){try{const r=(await Dv()).transaction(Co,"readwrite");await r.objectStore(Co).put(e,bv(t)),await r.done}catch(n){if(n instanceof Fn)Nn.warn(n.message);else{const r=pr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Nn.warn(r.message)}}}function bv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck=1024,hk=30;class dk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Hm();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>hk){const o=mk(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Nn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hm(),{heartbeatsToSend:r,unsentEntries:i}=fk(this._heartbeatsCache.heartbeats),s=Cl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Nn.warn(n),""}}}function Hm(){return new Date().toISOString().substring(0,10)}function fk(t,e=ck){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Wm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eS()?tS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return $m(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return $m(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Wm(t){return Cl(JSON.stringify({version:2,heartbeats:t})).length}function mk(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(t){Ji(new Yr("platform-logger",e=>new RS(e),"PRIVATE")),Ji(new Yr("heartbeat",e=>new dk(e),"PRIVATE")),mr(Ih,jm,t),mr(Ih,jm,"esm2020"),mr("fire-js","")}gk("");var yk="firebase",_k="12.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mr(yk,_k,"app");function Ov(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vk=Ov,Mv=new zo("auth","Firebase",Ov());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=new zd("@firebase/auth");function Ek(t,...e){Pl.logLevel<=ne.WARN&&Pl.warn(`Auth (${as}): ${t}`,...e)}function Ga(t,...e){Pl.logLevel<=ne.ERROR&&Pl.error(`Auth (${as}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t,...e){throw $d(t,...e)}function an(t,...e){return $d(t,...e)}function Lv(t,e,n){const r={...vk(),[e]:n};return new zo("auth","Firebase",r).create(e,{appName:t.name})}function kn(t){return Lv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $d(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Mv.create(t,...e)}function J(t,e,...n){if(!t)throw $d(e,...n)}function Tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ga(e),new Error(e)}function Dn(t,e){t||Tn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function wk(){return qm()==="http:"||qm()==="https:"}function qm(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wk()||JI()||"connection"in navigator)?navigator.onLine:!0}function Ik(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dn(n>e,"Short delay should be less than long delay!"),this.isMobile=GI()||YI()}get(){return Tk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(t,e){Dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ak=new Bo(3e4,6e4);function $o(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ls(t,e,n,r,i={}){return Uv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=jo({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...s};return QI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&os(t.emulatorConfig.host)&&(h.credentials="include"),Fv.fetch()(await zv(t,t.config.apiHost,n,l),h)})}async function Uv(t,e,n){t._canInitEmulator=!1;const r={...Sk,...e};try{const i=new Ck(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Pa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Pa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Pa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Lv(t,f,h);Vn(t,f)}}catch(i){if(i instanceof Fn)throw i;Vn(t,"network-request-failed",{message:String(i)})}}async function Wd(t,e,n,r,i={}){const s=await ls(t,e,n,r,i);return"mfaPendingCredential"in s&&Vn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function zv(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Hd(t.config,i):`${t.config.apiScheme}://${i}`;return kk.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class Ck{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),Ak.get())})}}function Pa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=an(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rk(t,e){return ls(t,"POST","/v1/accounts:delete",e)}async function xl(t,e){return ls(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Pk(t,e=!1){const n=Ct(t),r=await n.getIdToken(e),i=qd(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ro(Tc(i.auth_time)),issuedAtTime:ro(Tc(i.iat)),expirationTime:ro(Tc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Tc(t){return Number(t)*1e3}function qd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ga("JWT malformed, contained fewer than 3 sections"),null;try{const i=Iv(n);return i?JSON.parse(i):(Ga("Failed to decode base64 JWT payload"),null)}catch(i){return Ga("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Gm(t){const e=qd(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Fn&&xk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function xk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ro(this.lastLoginAt),this.creationTime=ro(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nl(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Ro(t,xl(e,{idToken:n}));J(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?jv(i.providerUserInfo):[],o=Dk(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ch(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function Vk(t){const e=Ct(t);await Nl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Dk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function jv(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bk(t,e){const n=await Uv(t,{},async()=>{const r=jo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await zv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&os(t.emulatorConfig.host)&&(u.credentials="include"),Fv.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ok(t,e){return ls(t,"POST","/v2/accounts:revokeToken",$o(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=Gm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await bk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Li;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Li,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ht{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Nk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ch(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ro(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Pk(this,e)}reload(){return Vk(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ht({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Nl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vt(this.auth.app))return Promise.reject(kn(this.auth));const e=await this.getIdToken();return await Ro(this,Rk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:A,providerData:x,stsTokenManager:V}=n;J(p&&V,e,"internal-error");const M=Li.fromJSON(this.name,V);J(typeof p=="string",e,"internal-error"),Gn(r,e.name),Gn(i,e.name),J(typeof g=="boolean",e,"internal-error"),J(typeof A=="boolean",e,"internal-error"),Gn(s,e.name),Gn(o,e.name),Gn(l,e.name),Gn(u,e.name),Gn(h,e.name),Gn(f,e.name);const I=new Ht({uid:p,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:A,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:M,createdAt:h,lastLoginAt:f});return x&&Array.isArray(x)&&(I.providerData=x.map(E=>({...E}))),u&&(I._redirectEventId=u),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new Li;i.updateFromServerResponse(n);const s=new Ht({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Nl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?jv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Li;l.updateFromIdToken(r);const u=new Ht({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ch(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=new Map;function In(t){Dn(t instanceof Function,"Expected a class definition");let e=Km.get(t);return e?(Dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Km.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Bv.type="NONE";const Qm=Bv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(t,e,n){return`firebase:${t}:${e}:${n}`}class Fi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ka(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ka("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await xl(this.auth,{idToken:e}).catch(()=>{});return n?Ht._fromGetAccountInfoResponse(this.auth,n,e):null}return Ht._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fi(In(Qm),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||In(Qm);const o=Ka(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const g=await xl(e,{idToken:f}).catch(()=>{});if(!g)break;p=await Ht._fromGetAccountInfoResponse(e,g,f)}else p=Ht._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Fi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Fi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($v(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Kv(e))return"Blackberry";if(Qv(e))return"Webos";if(Hv(e))return"Safari";if((e.includes("chrome/")||Wv(e))&&!e.includes("edge/"))return"Chrome";if(Gv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $v(t=ot()){return/firefox\//i.test(t)}function Hv(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wv(t=ot()){return/crios\//i.test(t)}function qv(t=ot()){return/iemobile/i.test(t)}function Gv(t=ot()){return/android/i.test(t)}function Kv(t=ot()){return/blackberry/i.test(t)}function Qv(t=ot()){return/webos/i.test(t)}function Gd(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Mk(t=ot()){var e;return Gd(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Lk(){return XI()&&document.documentMode===10}function Jv(t=ot()){return Gd(t)||Gv(t)||Qv(t)||Kv(t)||/windows phone/i.test(t)||qv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(t,e=[]){let n;switch(t){case"Browser":n=Jm(ot());break;case"Worker":n=`${Jm(ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${as}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uk(t,e={}){return ls(t,"GET","/v2/passwordPolicy",$o(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=6;class jk{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??zk,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ym(this),this.idTokenSubscription=new Ym(this),this.beforeStateQueue=new Fk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=In(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Fi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await xl(this,{idToken:e}),r=await Ht._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Vt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ik()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vt(this.app))return Promise.reject(kn(this));const n=e?Ct(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vt(this.app)?Promise.reject(kn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vt(this.app)?Promise.reject(kn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(In(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Uk(this),n=new jk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new zo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ok(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&In(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Fi.create(this,[In(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Ek(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ho(t){return Ct(t)}class Ym{constructor(e){this.auth=e,this.observer=null,this.addObserver=oS(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $k(t){Kd=t}function Hk(t){return Kd.loadJS(t)}function Wk(){return Kd.gapiScript}function qk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gk(t,e){const n=Bd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Jr(s,e??{}))return i;Vn(i,"already-initialized")}return n.initialize({options:e})}function Kk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(In);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Qk(t,e,n){const r=Ho(t);J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Xv(e),{host:o,port:l}=Jk(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){J(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),J(Jr(h,r.config.emulator)&&Jr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,os(o)?(Cv(`${s}//${o}${u}`),Rv("Auth",!0)):Yk()}function Xv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Jk(t){const e=Xv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Xm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Xm(o)}}}function Xm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Yk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,n){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ui(t,e){return Wd(t,"POST","/v1/accounts:signInWithIdp",$o(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk="http://localhost";class Xr extends Zv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Xr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ui(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ui(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ui(e,n)}buildRequest(){const e={requestUri:Xk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=jo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo extends e0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Wo{constructor(){super("facebook.com")}static credential(e){return Xr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Wo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.GOOGLE_SIGN_IN_METHOD="google.com";Zn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Wo{constructor(){super("github.com")}static credential(e){return Xr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.GITHUB_SIGN_IN_METHOD="github.com";er.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends Wo{constructor(){super("twitter.com")}static credential(e,n){return Xr._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.TWITTER_SIGN_IN_METHOD="twitter.com";tr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zk(t,e){return Wd(t,"POST","/v1/accounts:signUp",$o(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ht._fromIdTokenResponse(e,r,i),o=Zm(r);return new bn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Zm(r);return new bn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Zm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eA(t){var i;if(Vt(t.app))return Promise.reject(kn(t));const e=Ho(t);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new bn({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await Zk(e,{returnSecureToken:!0}),r=await bn._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl extends Fn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Vl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Vl(e,n,r,i)}}function t0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Vl._fromErrorAndOperation(t,s,e,r):s})}async function tA(t,e,n=!1){const r=await Ro(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nA(t,e,n=!1){const{auth:r}=t;if(Vt(r.app))return Promise.reject(kn(r));const i="reauthenticate";try{const s=await Ro(t,t0(r,i,e,t),n);J(s.idToken,r,"internal-error");const o=qd(s.idToken);J(o,r,"internal-error");const{sub:l}=o;return J(t.uid===l,r,"user-mismatch"),bn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Vn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rA(t,e,n=!1){if(Vt(t.app))return Promise.reject(kn(t));const r="signIn",i=await t0(t,r,e),s=await bn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iA(t,e){return Wd(t,"POST","/v1/accounts:signInWithCustomToken",$o(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sA(t,e){if(Vt(t.app))return Promise.reject(kn(t));const n=Ho(t),r=await iA(n,{token:e,returnSecureToken:!0}),i=await bn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}function oA(t,e,n,r){return Ct(t).onIdTokenChanged(e,n,r)}function aA(t,e,n){return Ct(t).beforeAuthStateChanged(e,n)}function lA(t,e,n,r){return Ct(t).onAuthStateChanged(e,n,r)}const Dl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Dl,"1"),this.storage.removeItem(Dl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA=1e3,cA=10;class r0 extends n0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Jv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Lk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},uA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}r0.type="LOCAL";const hA=r0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0 extends n0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}i0.type="SESSION";const s0=i0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new uu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await dA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Qd("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return window}function pA(t){ln().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function mA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function yA(){return o0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0="firebaseLocalStorageDb",_A=1,bl="firebaseLocalStorage",l0="fbase_key";class qo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cu(t,e){return t.transaction([bl],e?"readwrite":"readonly").objectStore(bl)}function vA(){const t=indexedDB.deleteDatabase(a0);return new qo(t).toPromise()}function Rh(){const t=indexedDB.open(a0,_A);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(bl,{keyPath:l0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(bl)?e(r):(r.close(),await vA(),e(await Rh()))})})}async function eg(t,e,n){const r=cu(t,!0).put({[l0]:e,value:n});return new qo(r).toPromise()}async function EA(t,e){const n=cu(t,!1).get(e),r=await new qo(n).toPromise();return r===void 0?null:r.value}function tg(t,e){const n=cu(t,!0).delete(e);return new qo(n).toPromise()}const wA=800,TA=3;class u0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>TA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return o0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uu._getInstance(yA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await mA(),!this.activeServiceWorker)return;this.sender=new fA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rh();return await eg(e,Dl,"1"),await tg(e,Dl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>eg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>EA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>tg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=cu(i,!1).getAll();return new qo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}u0.type="LOCAL";const IA=u0;new Bo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(t,e){return e?In(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd extends Zv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ui(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ui(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ui(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kA(t){return rA(t.auth,new Jd(t),t.bypassAuthState)}function AA(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),nA(n,new Jd(t),t.bypassAuthState)}async function CA(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),tA(n,new Jd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kA;case"linkViaPopup":case"linkViaRedirect":return CA;case"reauthViaPopup":case"reauthViaRedirect":return AA;default:Vn(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA=new Bo(2e3,1e4);class xi extends c0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,xi.currentPopupAction&&xi.currentPopupAction.cancel(),xi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=Qd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RA.get())};e()}}xi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA="pendingRedirect",Qa=new Map;class xA extends c0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Qa.get(this.auth._key());if(!e){try{const r=await NA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Qa.set(this.auth._key(),e)}return this.bypassAuthState||Qa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NA(t,e){const n=bA(e),r=DA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function VA(t,e){Qa.set(t._key(),e)}function DA(t){return In(t._redirectPersistence)}function bA(t){return Ka(PA,t.config.apiKey,t.name)}async function OA(t,e,n=!1){if(Vt(t.app))return Promise.reject(kn(t));const r=Ho(t),i=SA(r,e),o=await new xA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=10*60*1e3;class LA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!h0(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(an(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MA&&this.cachedEventUids.clear(),this.cachedEventUids.has(ng(e))}saveEventToCache(e){this.cachedEventUids.add(ng(e)),this.lastProcessedEventTime=Date.now()}}function ng(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function h0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function FA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return h0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UA(t,e={}){return ls(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jA=/^https?/;async function BA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await UA(t);for(const n of e)try{if($A(n))return}catch{}Vn(t,"unauthorized-domain")}function $A(t){const e=Ah(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jA.test(n))return!1;if(zA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA=new Bo(3e4,6e4);function rg(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function WA(t){return new Promise((e,n)=>{var i,s,o;function r(){rg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rg(),n(an(t,"network-request-failed"))},timeout:HA.get()})}if((s=(i=ln().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=ln().gapi)!=null&&o.load)r();else{const l=qk("iframefcb");return ln()[l]=()=>{gapi.load?r():n(an(t,"network-request-failed"))},Hk(`${Wk()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ja=null,e})}let Ja=null;function qA(t){return Ja=Ja||WA(t),Ja}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=new Bo(5e3,15e3),KA="__/auth/iframe",QA="emulator/auth/iframe",JA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XA(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hd(e,QA):`https://${t.config.authDomain}/${KA}`,r={apiKey:e.apiKey,appName:t.name,v:as},i=YA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${jo(r).slice(1)}`}async function ZA(t){const e=await qA(t),n=ln().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:XA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),l=ln().setTimeout(()=>{s(o)},GA.get());function u(){ln().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tC=500,nC=600,rC="_blank",iC="http://localhost";class ig{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sC(t,e,n,r=tC,i=nC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...eC,width:r.toString(),height:i.toString(),top:s,left:o},h=ot().toLowerCase();n&&(l=Wv(h)?rC:n),$v(h)&&(e=e||iC,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[A,x])=>`${g}${A}=${x},`,"");if(Mk(h)&&l!=="_self")return oC(e||"",l),new ig(null);const p=window.open(e||"",l,f);J(p,t,"popup-blocked");try{p.focus()}catch{}return new ig(p)}function oC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC="__/auth/handler",lC="emulator/auth/handler",uC=encodeURIComponent("fac");async function sg(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:as,eventId:i};if(e instanceof e0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",sS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Wo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${uC}=${encodeURIComponent(u)}`:"";return`${cC(t)}?${jo(l).slice(1)}${h}`}function cC({config:t}){return t.emulator?Hd(t,lC):`https://${t.authDomain}/${aC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="webStorageSupport";class hC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=s0,this._completeRedirectFn=OA,this._overrideRedirectResult=VA}async _openPopup(e,n,r,i){var o;Dn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await sg(e,n,r,Ah(),i);return sC(e,s,Qd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await sg(e,n,r,Ah(),i);return pA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Dn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ZA(e),r=new LA(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ic,{type:Ic},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Ic];s!==void 0&&n(!!s),Vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Jv()||Hv()||Gd()}}const dC=hC;var og="@firebase/auth",ag="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mC(t){Ji(new Yr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yv(t)},h=new Bk(r,i,s,u);return Kk(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ji(new Yr("auth-internal",e=>{const n=Ho(e.getProvider("auth").getImmediate());return(r=>new fC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mr(og,ag,pC(t)),mr(og,ag,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC=5*60,yC=Av("authIdTokenMaxAge")||gC;let lg=null;const _C=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yC)return;const i=n==null?void 0:n.token;lg!==i&&(lg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function vC(t=Vv()){const e=Bd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Gk(t,{popupRedirectResolver:dC,persistence:[IA,hA,s0]}),r=Av("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=_C(s.toString());aA(n,o,()=>o(n.currentUser)),oA(n,l=>o(l))}}const i=Sv("auth");return i&&Qk(n,`http://${i}`),n}function EC(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}$k({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=an("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",EC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mC("Browser");var ug=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gr,d0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,y){function v(){}v.prototype=y.prototype,_.F=y.prototype,_.prototype=new v,_.prototype.constructor=_,_.D=function(T,S,k){for(var w=Array(arguments.length-2),be=2;be<arguments.length;be++)w[be-2]=arguments[be];return y.prototype[S].apply(T,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,y,v){v||(v=0);const T=Array(16);if(typeof y=="string")for(var S=0;S<16;++S)T[S]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(S=0;S<16;++S)T[S]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=_.g[0],v=_.g[1],S=_.g[2];let k=_.g[3],w;w=y+(k^v&(S^k))+T[0]+3614090360&4294967295,y=v+(w<<7&4294967295|w>>>25),w=k+(S^y&(v^S))+T[1]+3905402710&4294967295,k=y+(w<<12&4294967295|w>>>20),w=S+(v^k&(y^v))+T[2]+606105819&4294967295,S=k+(w<<17&4294967295|w>>>15),w=v+(y^S&(k^y))+T[3]+3250441966&4294967295,v=S+(w<<22&4294967295|w>>>10),w=y+(k^v&(S^k))+T[4]+4118548399&4294967295,y=v+(w<<7&4294967295|w>>>25),w=k+(S^y&(v^S))+T[5]+1200080426&4294967295,k=y+(w<<12&4294967295|w>>>20),w=S+(v^k&(y^v))+T[6]+2821735955&4294967295,S=k+(w<<17&4294967295|w>>>15),w=v+(y^S&(k^y))+T[7]+4249261313&4294967295,v=S+(w<<22&4294967295|w>>>10),w=y+(k^v&(S^k))+T[8]+1770035416&4294967295,y=v+(w<<7&4294967295|w>>>25),w=k+(S^y&(v^S))+T[9]+2336552879&4294967295,k=y+(w<<12&4294967295|w>>>20),w=S+(v^k&(y^v))+T[10]+4294925233&4294967295,S=k+(w<<17&4294967295|w>>>15),w=v+(y^S&(k^y))+T[11]+2304563134&4294967295,v=S+(w<<22&4294967295|w>>>10),w=y+(k^v&(S^k))+T[12]+1804603682&4294967295,y=v+(w<<7&4294967295|w>>>25),w=k+(S^y&(v^S))+T[13]+4254626195&4294967295,k=y+(w<<12&4294967295|w>>>20),w=S+(v^k&(y^v))+T[14]+2792965006&4294967295,S=k+(w<<17&4294967295|w>>>15),w=v+(y^S&(k^y))+T[15]+1236535329&4294967295,v=S+(w<<22&4294967295|w>>>10),w=y+(S^k&(v^S))+T[1]+4129170786&4294967295,y=v+(w<<5&4294967295|w>>>27),w=k+(v^S&(y^v))+T[6]+3225465664&4294967295,k=y+(w<<9&4294967295|w>>>23),w=S+(y^v&(k^y))+T[11]+643717713&4294967295,S=k+(w<<14&4294967295|w>>>18),w=v+(k^y&(S^k))+T[0]+3921069994&4294967295,v=S+(w<<20&4294967295|w>>>12),w=y+(S^k&(v^S))+T[5]+3593408605&4294967295,y=v+(w<<5&4294967295|w>>>27),w=k+(v^S&(y^v))+T[10]+38016083&4294967295,k=y+(w<<9&4294967295|w>>>23),w=S+(y^v&(k^y))+T[15]+3634488961&4294967295,S=k+(w<<14&4294967295|w>>>18),w=v+(k^y&(S^k))+T[4]+3889429448&4294967295,v=S+(w<<20&4294967295|w>>>12),w=y+(S^k&(v^S))+T[9]+568446438&4294967295,y=v+(w<<5&4294967295|w>>>27),w=k+(v^S&(y^v))+T[14]+3275163606&4294967295,k=y+(w<<9&4294967295|w>>>23),w=S+(y^v&(k^y))+T[3]+4107603335&4294967295,S=k+(w<<14&4294967295|w>>>18),w=v+(k^y&(S^k))+T[8]+1163531501&4294967295,v=S+(w<<20&4294967295|w>>>12),w=y+(S^k&(v^S))+T[13]+2850285829&4294967295,y=v+(w<<5&4294967295|w>>>27),w=k+(v^S&(y^v))+T[2]+4243563512&4294967295,k=y+(w<<9&4294967295|w>>>23),w=S+(y^v&(k^y))+T[7]+1735328473&4294967295,S=k+(w<<14&4294967295|w>>>18),w=v+(k^y&(S^k))+T[12]+2368359562&4294967295,v=S+(w<<20&4294967295|w>>>12),w=y+(v^S^k)+T[5]+4294588738&4294967295,y=v+(w<<4&4294967295|w>>>28),w=k+(y^v^S)+T[8]+2272392833&4294967295,k=y+(w<<11&4294967295|w>>>21),w=S+(k^y^v)+T[11]+1839030562&4294967295,S=k+(w<<16&4294967295|w>>>16),w=v+(S^k^y)+T[14]+4259657740&4294967295,v=S+(w<<23&4294967295|w>>>9),w=y+(v^S^k)+T[1]+2763975236&4294967295,y=v+(w<<4&4294967295|w>>>28),w=k+(y^v^S)+T[4]+1272893353&4294967295,k=y+(w<<11&4294967295|w>>>21),w=S+(k^y^v)+T[7]+4139469664&4294967295,S=k+(w<<16&4294967295|w>>>16),w=v+(S^k^y)+T[10]+3200236656&4294967295,v=S+(w<<23&4294967295|w>>>9),w=y+(v^S^k)+T[13]+681279174&4294967295,y=v+(w<<4&4294967295|w>>>28),w=k+(y^v^S)+T[0]+3936430074&4294967295,k=y+(w<<11&4294967295|w>>>21),w=S+(k^y^v)+T[3]+3572445317&4294967295,S=k+(w<<16&4294967295|w>>>16),w=v+(S^k^y)+T[6]+76029189&4294967295,v=S+(w<<23&4294967295|w>>>9),w=y+(v^S^k)+T[9]+3654602809&4294967295,y=v+(w<<4&4294967295|w>>>28),w=k+(y^v^S)+T[12]+3873151461&4294967295,k=y+(w<<11&4294967295|w>>>21),w=S+(k^y^v)+T[15]+530742520&4294967295,S=k+(w<<16&4294967295|w>>>16),w=v+(S^k^y)+T[2]+3299628645&4294967295,v=S+(w<<23&4294967295|w>>>9),w=y+(S^(v|~k))+T[0]+4096336452&4294967295,y=v+(w<<6&4294967295|w>>>26),w=k+(v^(y|~S))+T[7]+1126891415&4294967295,k=y+(w<<10&4294967295|w>>>22),w=S+(y^(k|~v))+T[14]+2878612391&4294967295,S=k+(w<<15&4294967295|w>>>17),w=v+(k^(S|~y))+T[5]+4237533241&4294967295,v=S+(w<<21&4294967295|w>>>11),w=y+(S^(v|~k))+T[12]+1700485571&4294967295,y=v+(w<<6&4294967295|w>>>26),w=k+(v^(y|~S))+T[3]+2399980690&4294967295,k=y+(w<<10&4294967295|w>>>22),w=S+(y^(k|~v))+T[10]+4293915773&4294967295,S=k+(w<<15&4294967295|w>>>17),w=v+(k^(S|~y))+T[1]+2240044497&4294967295,v=S+(w<<21&4294967295|w>>>11),w=y+(S^(v|~k))+T[8]+1873313359&4294967295,y=v+(w<<6&4294967295|w>>>26),w=k+(v^(y|~S))+T[15]+4264355552&4294967295,k=y+(w<<10&4294967295|w>>>22),w=S+(y^(k|~v))+T[6]+2734768916&4294967295,S=k+(w<<15&4294967295|w>>>17),w=v+(k^(S|~y))+T[13]+1309151649&4294967295,v=S+(w<<21&4294967295|w>>>11),w=y+(S^(v|~k))+T[4]+4149444226&4294967295,y=v+(w<<6&4294967295|w>>>26),w=k+(v^(y|~S))+T[11]+3174756917&4294967295,k=y+(w<<10&4294967295|w>>>22),w=S+(y^(k|~v))+T[2]+718787259&4294967295,S=k+(w<<15&4294967295|w>>>17),w=v+(k^(S|~y))+T[9]+3951481745&4294967295,_.g[0]=_.g[0]+y&4294967295,_.g[1]=_.g[1]+(S+(w<<21&4294967295|w>>>11))&4294967295,_.g[2]=_.g[2]+S&4294967295,_.g[3]=_.g[3]+k&4294967295}r.prototype.v=function(_,y){y===void 0&&(y=_.length);const v=y-this.blockSize,T=this.C;let S=this.h,k=0;for(;k<y;){if(S==0)for(;k<=v;)i(this,_,k),k+=this.blockSize;if(typeof _=="string"){for(;k<y;)if(T[S++]=_.charCodeAt(k++),S==this.blockSize){i(this,T),S=0;break}}else for(;k<y;)if(T[S++]=_[k++],S==this.blockSize){i(this,T),S=0;break}}this.h=S,this.o+=y},r.prototype.A=function(){var _=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);_[0]=128;for(var y=1;y<_.length-8;++y)_[y]=0;y=this.o*8;for(var v=_.length-8;v<_.length;++v)_[v]=y&255,y/=256;for(this.v(_),_=Array(16),y=0,v=0;v<4;++v)for(let T=0;T<32;T+=8)_[y++]=this.g[v]>>>T&255;return _};function s(_,y){var v=l;return Object.prototype.hasOwnProperty.call(v,_)?v[_]:v[_]=y(_)}function o(_,y){this.h=y;const v=[];let T=!0;for(let S=_.length-1;S>=0;S--){const k=_[S]|0;T&&k==y||(v[S]=k,T=!1)}this.g=v}var l={};function u(_){return-128<=_&&_<128?s(_,function(y){return new o([y|0],y<0?-1:0)}):new o([_|0],_<0?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return p;if(_<0)return M(h(-_));const y=[];let v=1;for(let T=0;_>=v;T++)y[T]=_/v|0,v*=4294967296;return new o(y,0)}function f(_,y){if(_.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(_.charAt(0)=="-")return M(f(_.substring(1),y));if(_.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=h(Math.pow(y,8));let T=p;for(let k=0;k<_.length;k+=8){var S=Math.min(8,_.length-k);const w=parseInt(_.substring(k,k+S),y);S<8?(S=h(Math.pow(y,S)),T=T.j(S).add(h(w))):(T=T.j(v),T=T.add(h(w)))}return T}var p=u(0),g=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(V(this))return-M(this).m();let _=0,y=1;for(let v=0;v<this.g.length;v++){const T=this.i(v);_+=(T>=0?T:4294967296+T)*y,y*=4294967296}return _},t.toString=function(_){if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(x(this))return"0";if(V(this))return"-"+M(this).toString(_);const y=h(Math.pow(_,6));var v=this;let T="";for(;;){const S=D(v,y).g;v=I(v,S.j(y));let k=((v.g.length>0?v.g[0]:v.h)>>>0).toString(_);if(v=S,x(v))return k+T;for(;k.length<6;)k="0"+k;T=k+T}},t.i=function(_){return _<0?0:_<this.g.length?this.g[_]:this.h};function x(_){if(_.h!=0)return!1;for(let y=0;y<_.g.length;y++)if(_.g[y]!=0)return!1;return!0}function V(_){return _.h==-1}t.l=function(_){return _=I(this,_),V(_)?-1:x(_)?0:1};function M(_){const y=_.g.length,v=[];for(let T=0;T<y;T++)v[T]=~_.g[T];return new o(v,~_.h).add(g)}t.abs=function(){return V(this)?M(this):this},t.add=function(_){const y=Math.max(this.g.length,_.g.length),v=[];let T=0;for(let S=0;S<=y;S++){let k=T+(this.i(S)&65535)+(_.i(S)&65535),w=(k>>>16)+(this.i(S)>>>16)+(_.i(S)>>>16);T=w>>>16,k&=65535,w&=65535,v[S]=w<<16|k}return new o(v,v[v.length-1]&-2147483648?-1:0)};function I(_,y){return _.add(M(y))}t.j=function(_){if(x(this)||x(_))return p;if(V(this))return V(_)?M(this).j(M(_)):M(M(this).j(_));if(V(_))return M(this.j(M(_)));if(this.l(A)<0&&_.l(A)<0)return h(this.m()*_.m());const y=this.g.length+_.g.length,v=[];for(var T=0;T<2*y;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(let S=0;S<_.g.length;S++){const k=this.i(T)>>>16,w=this.i(T)&65535,be=_.i(S)>>>16,Ut=_.i(S)&65535;v[2*T+2*S]+=w*Ut,E(v,2*T+2*S),v[2*T+2*S+1]+=k*Ut,E(v,2*T+2*S+1),v[2*T+2*S+1]+=w*be,E(v,2*T+2*S+1),v[2*T+2*S+2]+=k*be,E(v,2*T+2*S+2)}for(_=0;_<y;_++)v[_]=v[2*_+1]<<16|v[2*_];for(_=y;_<2*y;_++)v[_]=0;return new o(v,0)};function E(_,y){for(;(_[y]&65535)!=_[y];)_[y+1]+=_[y]>>>16,_[y]&=65535,y++}function C(_,y){this.g=_,this.h=y}function D(_,y){if(x(y))throw Error("division by zero");if(x(_))return new C(p,p);if(V(_))return y=D(M(_),y),new C(M(y.g),M(y.h));if(V(y))return y=D(_,M(y)),new C(M(y.g),y.h);if(_.g.length>30){if(V(_)||V(y))throw Error("slowDivide_ only works with positive integers.");for(var v=g,T=y;T.l(_)<=0;)v=F(v),T=F(T);var S=z(v,1),k=z(T,1);for(T=z(T,2),v=z(v,2);!x(T);){var w=k.add(T);w.l(_)<=0&&(S=S.add(v),k=w),T=z(T,1),v=z(v,1)}return y=I(_,S.j(y)),new C(S,y)}for(S=p;_.l(y)>=0;){for(v=Math.max(1,Math.floor(_.m()/y.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),k=h(v),w=k.j(y);V(w)||w.l(_)>0;)v-=T,k=h(v),w=k.j(y);x(k)&&(k=g),S=S.add(k),_=I(_,w)}return new C(S,_)}t.B=function(_){return D(this,_).h},t.and=function(_){const y=Math.max(this.g.length,_.g.length),v=[];for(let T=0;T<y;T++)v[T]=this.i(T)&_.i(T);return new o(v,this.h&_.h)},t.or=function(_){const y=Math.max(this.g.length,_.g.length),v=[];for(let T=0;T<y;T++)v[T]=this.i(T)|_.i(T);return new o(v,this.h|_.h)},t.xor=function(_){const y=Math.max(this.g.length,_.g.length),v=[];for(let T=0;T<y;T++)v[T]=this.i(T)^_.i(T);return new o(v,this.h^_.h)};function F(_){const y=_.g.length+1,v=[];for(let T=0;T<y;T++)v[T]=_.i(T)<<1|_.i(T-1)>>>31;return new o(v,_.h)}function z(_,y){const v=y>>5;y%=32;const T=_.g.length-v,S=[];for(let k=0;k<T;k++)S[k]=y>0?_.i(k+v)>>>y|_.i(k+v+1)<<32-y:_.i(k+v);return new o(S,_.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,d0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,gr=o}).apply(typeof ug<"u"?ug:typeof self<"u"?self:typeof window<"u"?window:{});var xa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var f0,$s,p0,Ya,Ph,m0,g0,y0;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof xa=="object"&&xa];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var P=a[m];if(!(P in d))break e;d=d[P]}a=a[a.length-1],m=d[a],c=c(m),c!=m&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(c){var d=[],m;for(m in c)Object.prototype.hasOwnProperty.call(c,m)&&d.push([m,c[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function f(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(m,P,N){for(var U=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)U[ee-2]=arguments[ee];return c.prototype[P].apply(m,U)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function A(a){const c=a.length;if(c>0){const d=Array(c);for(let m=0;m<c;m++)d[m]=a[m];return d}return[]}function x(a,c){for(let m=1;m<arguments.length;m++){const P=arguments[m];var d=typeof P;if(d=d!="object"?d:P?Array.isArray(P)?"array":d:"null",d=="array"||d=="object"&&typeof P.length=="number"){d=a.length||0;const N=P.length||0;a.length=d+N;for(let U=0;U<N;U++)a[d+U]=P[U]}else a.push(P)}}class V{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function M(a){o.setTimeout(()=>{throw a},0)}function I(){var a=_;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class E{constructor(){this.h=this.g=null}add(c,d){const m=C.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var C=new V(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let F,z=!1,_=new E,y=()=>{const a=Promise.resolve(void 0);F=()=>{a.then(v)}};function v(){for(var a;a=I();){try{a.h.call(a.g)}catch(d){M(d)}var c=C;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}z=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function S(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a}();function w(a){return/^[\s\xa0]*$/.test(a)}function be(a,c){S.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}p(be,S),be.prototype.init=function(a,c){const d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&be.Z.h.call(this)},be.prototype.h=function(){be.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ut="closure_listenable_"+(Math.random()*1e6|0),Jt=0;function mn(a,c,d,m,P){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=P,this.key=++Jt,this.da=this.fa=!1}function j(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function q(a,c,d){for(const m in a)c.call(d,a[m],m,a)}function X(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function he(a){const c={};for(const d in a)c[d]=a[d];return c}const Ee="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gn(a,c){let d,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(d in m)a[d]=m[d];for(let N=0;N<Ee.length;N++)d=Ee[N],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function at(a){this.src=a,this.g={},this.h=0}at.prototype.add=function(a,c,d,m,P){const N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);const U=ze(a,c,m,P);return U>-1?(c=a[U],d||(c.fa=!1)):(c=new mn(c,this.src,N,!!m,P),c.fa=d,a.push(c)),c};function yn(a,c){const d=c.type;if(d in a.g){var m=a.g[d],P=Array.prototype.indexOf.call(m,c,void 0),N;(N=P>=0)&&Array.prototype.splice.call(m,P,1),N&&(j(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function ze(a,c,d,m){for(let P=0;P<a.length;++P){const N=a[P];if(!N.da&&N.listener==c&&N.capture==!!d&&N.ha==m)return P}return-1}var Yt="closure_lm_"+(Math.random()*1e6|0),ui={};function fs(a,c,d,m,P){if(Array.isArray(c)){for(let N=0;N<c.length;N++)fs(a,c[N],d,m,P);return null}return d=Zo(d),a&&a[Ut]?a.J(c,d,l(m)?!!m.capture:!1,P):Au(a,c,d,!1,m,P)}function Au(a,c,d,m,P,N){if(!c)throw Error("Invalid event type");const U=l(P)?!!P.capture:!!P;let ee=We(a);if(ee||(a[Yt]=ee=new at(a)),d=ee.add(c,d,m,U,N),d.proxy)return d;if(m=Xo(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)k||(P=U),P===void 0&&(P=!1),a.addEventListener(c.toString(),m,P);else if(a.attachEvent)a.attachEvent(se(c.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Xo(){function a(d){return c.call(a.src,a.listener,d)}const c=lt;return a}function W(a,c,d,m,P){if(Array.isArray(c))for(var N=0;N<c.length;N++)W(a,c[N],d,m,P);else m=l(m)?!!m.capture:!!m,d=Zo(d),a&&a[Ut]?(a=a.i,N=String(c).toString(),N in a.g&&(c=a.g[N],d=ze(c,d,m,P),d>-1&&(j(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[N],a.h--)))):a&&(a=We(a))&&(c=a.g[c.toString()],a=-1,c&&(a=ze(c,d,m,P)),(d=a>-1?c[a]:null)&&Q(d))}function Q(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Ut])yn(c.i,a);else{var d=a.type,m=a.proxy;c.removeEventListener?c.removeEventListener(d,m,a.capture):c.detachEvent?c.detachEvent(se(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=We(c))?(yn(d,a),d.h==0&&(d.src=null,c[Yt]=null)):j(a)}}}function se(a){return a in ui?ui[a]:ui[a]="on"+a}function lt(a,c){if(a.da)a=!0;else{c=new be(c,this);const d=a.listener,m=a.ha||a.src;a.fa&&Q(a),a=d.call(m,c)}return a}function We(a){return a=a[Yt],a instanceof at?a:null}var Un="__closure_events_fn_"+(Math.random()*1e9>>>0);function Zo(a){return typeof a=="function"?a:(a[Un]||(a[Un]=function(c){return a.handleEvent(c)}),a[Un])}function Xe(){T.call(this),this.i=new at(this),this.M=this,this.G=null}p(Xe,T),Xe.prototype[Ut]=!0,Xe.prototype.removeEventListener=function(a,c,d,m){W(this,a,c,d,m)};function ut(a,c){var d,m=a.G;if(m)for(d=[];m;m=m.G)d.push(m);if(a=a.M,m=c.type||c,typeof c=="string")c=new S(c,a);else if(c instanceof S)c.target=c.target||a;else{var P=c;c=new S(m,a),gn(c,P)}P=!0;let N,U;if(d)for(U=d.length-1;U>=0;U--)N=c.g=d[U],P=ea(N,m,!0,c)&&P;if(N=c.g=a,P=ea(N,m,!0,c)&&P,P=ea(N,m,!1,c)&&P,d)for(U=0;U<d.length;U++)N=c.g=d[U],P=ea(N,m,!1,c)&&P}Xe.prototype.N=function(){if(Xe.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let m=0;m<d.length;m++)j(d[m]);delete a.g[c],a.h--}}this.G=null},Xe.prototype.J=function(a,c,d,m){return this.i.add(String(a),c,!1,d,m)},Xe.prototype.K=function(a,c,d,m){return this.i.add(String(a),c,!0,d,m)};function ea(a,c,d,m){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let P=!0;for(let N=0;N<c.length;++N){const U=c[N];if(U&&!U.da&&U.capture==d){const ee=U.listener,Oe=U.ha||U.src;U.fa&&yn(a.i,U),P=ee.call(Oe,m)!==!1&&P}}return P&&!m.defaultPrevented}function qE(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function Cf(a){a.g=qE(()=>{a.g=null,a.i&&(a.i=!1,Cf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class GE extends T{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Cf(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ps(a){T.call(this),this.h=a,this.g={}}p(ps,T);var Rf=[];function Pf(a){q(a.g,function(c,d){this.g.hasOwnProperty(d)&&Q(c)},a),a.g={}}ps.prototype.N=function(){ps.Z.N.call(this),Pf(this)},ps.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Cu=o.JSON.stringify,KE=o.JSON.parse,QE=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function xf(){}function Nf(){}var ms={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ru(){S.call(this,"d")}p(Ru,S);function Pu(){S.call(this,"c")}p(Pu,S);var xr={},Vf=null;function ta(){return Vf=Vf||new Xe}xr.Ia="serverreachability";function Df(a){S.call(this,xr.Ia,a)}p(Df,S);function gs(a){const c=ta();ut(c,new Df(c))}xr.STAT_EVENT="statevent";function bf(a,c){S.call(this,xr.STAT_EVENT,a),this.stat=c}p(bf,S);function ct(a){const c=ta();ut(c,new bf(c,a))}xr.Ja="timingevent";function Of(a,c){S.call(this,xr.Ja,a),this.size=c}p(Of,S);function ys(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function _s(){this.g=!0}_s.prototype.ua=function(){this.g=!1};function JE(a,c,d,m,P,N){a.info(function(){if(a.g)if(N){var U="",ee=N.split("&");for(let de=0;de<ee.length;de++){var Oe=ee[de].split("=");if(Oe.length>1){const je=Oe[0];Oe=Oe[1];const Zt=je.split("_");U=Zt.length>=2&&Zt[1]=="type"?U+(je+"="+Oe+"&"):U+(je+"=redacted&")}}}else U=null;else U=N;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+c+`
`+d+`
`+U})}function YE(a,c,d,m,P,N,U){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+c+`
`+d+`
`+N+" "+U})}function ci(a,c,d,m){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+ZE(a,d)+(m?" "+m:"")})}function XE(a,c){a.info(function(){return"TIMEOUT: "+c})}_s.prototype.info=function(){};function ZE(a,c){if(!a.g)return c;if(!c)return null;try{const N=JSON.parse(c);if(N){for(a=0;a<N.length;a++)if(Array.isArray(N[a])){var d=N[a];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var P=m[0];if(P!="noop"&&P!="stop"&&P!="close")for(let U=1;U<m.length;U++)m[U]=""}}}}return Cu(N)}catch{return c}}var na={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Mf={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Lf;function xu(){}p(xu,xf),xu.prototype.g=function(){return new XMLHttpRequest},Lf=new xu;function vs(a){return encodeURIComponent(String(a))}function ew(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function zn(a,c,d,m){this.j=a,this.i=c,this.l=d,this.S=m||1,this.V=new ps(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ff}function Ff(){this.i=null,this.g="",this.h=!1}var Uf={},Nu={};function Vu(a,c,d){a.M=1,a.A=ia(Xt(c)),a.u=d,a.R=!0,zf(a,null)}function zf(a,c){a.F=Date.now(),ra(a),a.B=Xt(a.A);var d=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),Zf(d.i,"t",m),a.C=0,d=a.j.L,a.h=new Ff,a.g=yp(a.j,d?c:null,!a.u),a.P>0&&(a.O=new GE(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,m=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(Rf[0]=P.toString()),P=Rf);for(let N=0;N<P.length;N++){const U=fs(d,P[N],m||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=a.J?he(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),gs(),JE(a.i,a.v,a.B,a.l,a.S,a.u)}zn.prototype.ba=function(a){a=a.target;const c=this.O;c&&$n(a)==3?c.j():this.Y(a)},zn.prototype.Y=function(a){try{if(a==this.g)e:{const ee=$n(this.g),Oe=this.g.ya(),de=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||op(this.g)))){this.K||ee!=4||Oe==7||(Oe==8||de<=0?gs(3):gs(2)),Du(this);var c=this.g.ca();this.X=c;var d=tw(this);if(this.o=c==200,YE(this.i,this.v,this.B,this.l,this.S,ee,c),this.o){if(this.U&&!this.L){t:{if(this.g){var m,P=this.g;if((m=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(m)){var N=m;break t}}N=null}if(a=N)ci(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,bu(this,a);else{this.o=!1,this.m=3,ct(12),Nr(this),Es(this);break e}}if(this.R){a=!0;let je;for(;!this.K&&this.C<d.length;)if(je=nw(this,d),je==Nu){ee==4&&(this.m=4,ct(14),a=!1),ci(this.i,this.l,null,"[Incomplete Response]");break}else if(je==Uf){this.m=4,ct(15),ci(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else ci(this.i,this.l,je,null),bu(this,je);if(jf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||d.length!=0||this.h.h||(this.m=1,ct(16),a=!1),this.o=this.o&&a,!a)ci(this.i,this.l,d,"[Invalid Chunked Response]"),Nr(this),Es(this);else if(d.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Bu(U),U.P=!0,ct(11))}}else ci(this.i,this.l,d,null),bu(this,d);ee==4&&Nr(this),this.o&&!this.K&&(ee==4?fp(this.j,this):(this.o=!1,ra(this)))}else gw(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,ct(12)):(this.m=0,ct(13)),Nr(this),Es(this)}}}catch{}finally{}};function tw(a){if(!jf(a))return a.g.la();const c=op(a.g);if(c==="")return"";let d="";const m=c.length,P=$n(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Nr(a),Es(a),"";a.h.i=new o.TextDecoder}for(let N=0;N<m;N++)a.h.h=!0,d+=a.h.i.decode(c[N],{stream:!(P&&N==m-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function jf(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function nw(a,c){var d=a.C,m=c.indexOf(`
`,d);return m==-1?Nu:(d=Number(c.substring(d,m)),isNaN(d)?Uf:(m+=1,m+d>c.length?Nu:(c=c.slice(m,m+d),a.C=m+d,c)))}zn.prototype.cancel=function(){this.K=!0,Nr(this)};function ra(a){a.T=Date.now()+a.H,Bf(a,a.H)}function Bf(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ys(h(a.aa,a),c)}function Du(a){a.D&&(o.clearTimeout(a.D),a.D=null)}zn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(XE(this.i,this.B),this.M!=2&&(gs(),ct(17)),Nr(this),this.m=2,Es(this)):Bf(this,this.T-a)};function Es(a){a.j.I==0||a.K||fp(a.j,a)}function Nr(a){Du(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,Pf(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function bu(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||Ou(d.h,a))){if(!a.L&&Ou(d.h,a)&&d.I==3){try{var m=d.Ba.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)ua(d),aa(d);else break e;ju(d),ct(18)}}else d.xa=P[1],0<d.xa-d.K&&P[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ys(h(d.Va,d),6e3));Wf(d.h)<=1&&d.ta&&(d.ta=void 0)}else Dr(d,11)}else if((a.L||d.g==a)&&ua(d),!w(c))for(P=d.Ba.g.parse(c),c=0;c<P.length;c++){let de=P[c];const je=de[0];if(!(je<=d.K))if(d.K=je,de=de[1],d.I==2)if(de[0]=="c"){d.M=de[1],d.ba=de[2];const Zt=de[3];Zt!=null&&(d.ka=Zt,d.j.info("VER="+d.ka));const br=de[4];br!=null&&(d.za=br,d.j.info("SVER="+d.za));const Hn=de[5];Hn!=null&&typeof Hn=="number"&&Hn>0&&(m=1.5*Hn,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Wn=a.g;if(Wn){const ha=Wn.g?Wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ha){var N=m.h;N.g||ha.indexOf("spdy")==-1&&ha.indexOf("quic")==-1&&ha.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Mu(N,N.h),N.h=null))}if(m.G){const $u=Wn.g?Wn.g.getResponseHeader("X-HTTP-Session-Id"):null;$u&&(m.wa=$u,pe(m.J,m.G,$u))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var U=a;if(m.na=gp(m,m.L?m.ba:null,m.W),U.L){qf(m.h,U);var ee=U,Oe=m.O;Oe&&(ee.H=Oe),ee.D&&(Du(ee),ra(ee)),m.g=U}else hp(m);d.i.length>0&&la(d)}else de[0]!="stop"&&de[0]!="close"||Dr(d,7);else d.I==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?Dr(d,7):zu(d):de[0]!="noop"&&d.l&&d.l.qa(de),d.A=0)}}gs(4)}catch{}}var rw=class{constructor(a,c){this.g=a,this.map=c}};function $f(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Hf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Wf(a){return a.h?1:a.g?a.g.size:0}function Ou(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Mu(a,c){a.g?a.g.add(c):a.h=c}function qf(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}$f.prototype.cancel=function(){if(this.i=Gf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Gf(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return A(a.i)}var Kf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function iw(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const m=a[d].indexOf("=");let P,N=null;m>=0?(P=a[d].substring(0,m),N=a[d].substring(m+1)):P=a[d],c(P,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function jn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof jn?(this.l=a.l,ws(this,a.j),this.o=a.o,this.g=a.g,Ts(this,a.u),this.h=a.h,Lu(this,ep(a.i)),this.m=a.m):a&&(c=String(a).match(Kf))?(this.l=!1,ws(this,c[1]||"",!0),this.o=Is(c[2]||""),this.g=Is(c[3]||"",!0),Ts(this,c[4]),this.h=Is(c[5]||"",!0),Lu(this,c[6]||"",!0),this.m=Is(c[7]||"")):(this.l=!1,this.i=new ks(null,this.l))}jn.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(Ss(c,Qf,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Ss(c,Qf,!0),"@"),a.push(vs(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ss(d,d.charAt(0)=="/"?aw:ow,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ss(d,uw)),a.join("")},jn.prototype.resolve=function(a){const c=Xt(this);let d=!!a.j;d?ws(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var m=a.h;if(d)Ts(c,a.u);else if(d=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var P=c.h.lastIndexOf("/");P!=-1&&(m=c.h.slice(0,P+1)+m)}if(P=m,P==".."||P==".")m="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){m=P.lastIndexOf("/",0)==0,P=P.split("/");const N=[];for(let U=0;U<P.length;){const ee=P[U++];ee=="."?m&&U==P.length&&N.push(""):ee==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),m&&U==P.length&&N.push("")):(N.push(ee),m=!0)}m=N.join("/")}else m=P}return d?c.h=m:d=a.i.toString()!=="",d?Lu(c,ep(a.i)):d=!!a.m,d&&(c.m=a.m),c};function Xt(a){return new jn(a)}function ws(a,c,d){a.j=d?Is(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Ts(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function Lu(a,c,d){c instanceof ks?(a.i=c,cw(a.i,a.l)):(d||(c=Ss(c,lw)),a.i=new ks(c,a.l))}function pe(a,c,d){a.i.set(c,d)}function ia(a){return pe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Is(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ss(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,sw),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function sw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Qf=/[#\/\?@]/g,ow=/[#\?:]/g,aw=/[#\?]/g,lw=/[#\?@]/g,uw=/#/g;function ks(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Vr(a){a.g||(a.g=new Map,a.h=0,a.i&&iw(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=ks.prototype,t.add=function(a,c){Vr(this),this.i=null,a=hi(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Jf(a,c){Vr(a),c=hi(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Yf(a,c){return Vr(a),c=hi(a,c),a.g.has(c)}t.forEach=function(a,c){Vr(this),this.g.forEach(function(d,m){d.forEach(function(P){a.call(c,P,m,this)},this)},this)};function Xf(a,c){Vr(a);let d=[];if(typeof c=="string")Yf(a,c)&&(d=d.concat(a.g.get(hi(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}t.set=function(a,c){return Vr(this),this.i=null,a=hi(this,a),Yf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=Xf(this,a),a.length>0?String(a[0]):c):c};function Zf(a,c,d){Jf(a,c),d.length>0&&(a.i=null,a.g.set(hi(a,c),A(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let m=0;m<c.length;m++){var d=c[m];const P=vs(d);d=Xf(this,d);for(let N=0;N<d.length;N++){let U=P;d[N]!==""&&(U+="="+vs(d[N])),a.push(U)}}return this.i=a.join("&")};function ep(a){const c=new ks;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function hi(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function cw(a,c){c&&!a.j&&(Vr(a),a.i=null,a.g.forEach(function(d,m){const P=m.toLowerCase();m!=P&&(Jf(this,m),Zf(this,P,d))},a)),a.j=c}function hw(a,c){const d=new _s;if(o.Image){const m=new Image;m.onload=f(Bn,d,"TestLoadImage: loaded",!0,c,m),m.onerror=f(Bn,d,"TestLoadImage: error",!1,c,m),m.onabort=f(Bn,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=f(Bn,d,"TestLoadImage: timeout",!1,c,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else c(!1)}function dw(a,c){const d=new _s,m=new AbortController,P=setTimeout(()=>{m.abort(),Bn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:m.signal}).then(N=>{clearTimeout(P),N.ok?Bn(d,"TestPingServer: ok",!0,c):Bn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),Bn(d,"TestPingServer: error",!1,c)})}function Bn(a,c,d,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(d)}catch{}}function fw(){this.g=new QE}function Fu(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Fu,xf),Fu.prototype.g=function(){return new sa(this.i,this.h)};function sa(a,c){Xe.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(sa,Xe),t=sa.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,Cs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,As(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Cs(this)),this.g&&(this.readyState=3,Cs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;tp(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function tp(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?As(this):Cs(this),this.readyState==3&&tp(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,As(this))},t.Na=function(a){this.g&&(this.response=a,As(this))},t.ga=function(){this.g&&As(this)};function As(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Cs(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function Cs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(sa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function np(a){let c="";return q(a,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function Uu(a,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=np(d),typeof a=="string"?d!=null&&vs(d):pe(a,c,d))}function Ae(a){Xe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ae,Xe);var pw=/^https?$/i,mw=["POST","PUT"];t=Ae.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Lf.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(N){rp(this,N);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)d.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())d.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(mw,c,void 0)>=0)||m||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,U]of d)this.g.setRequestHeader(N,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(N){rp(this,N)}};function rp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,ip(a),oa(a)}function ip(a){a.A||(a.A=!0,ut(a,"complete"),ut(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ut(this,"complete"),ut(this,"abort"),oa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),oa(this,!0)),Ae.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?sp(this):this.Xa())},t.Xa=function(){sp(this)};function sp(a){if(a.h&&typeof s<"u"){if(a.v&&$n(a)==4)setTimeout(a.Ca.bind(a),0);else if(ut(a,"readystatechange"),$n(a)==4){a.h=!1;try{const N=a.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=N===0){let U=String(a.D).match(Kf)[1]||null;!U&&o.self&&o.self.location&&(U=o.self.location.protocol.slice(0,-1)),m=!pw.test(U?U.toLowerCase():"")}d=m}if(d)ut(a,"complete"),ut(a,"success");else{a.o=6;try{var P=$n(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",ip(a)}}finally{oa(a)}}}}function oa(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||ut(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function $n(a){return a.g?a.g.readyState:0}t.ca=function(){try{return $n(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),KE(c)}};function op(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function gw(a){const c={};a=(a.g&&$n(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(w(a[m]))continue;var d=ew(a[m]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=c[P]||[];c[P]=N,N.push(d)}X(c,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Rs(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function ap(a){this.za=0,this.i=[],this.j=new _s,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Rs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Rs("baseRetryDelayMs",5e3,a),this.Za=Rs("retryDelaySeedMs",1e4,a),this.Ta=Rs("forwardChannelMaxRetries",2,a),this.va=Rs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new $f(a&&a.concurrentRequestLimit),this.Ba=new fw,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=ap.prototype,t.ka=8,t.I=1,t.connect=function(a,c,d,m){ct(0),this.W=a,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=gp(this,null,this.W),la(this)};function zu(a){if(lp(a),a.I==3){var c=a.V++,d=Xt(a.J);if(pe(d,"SID",a.M),pe(d,"RID",c),pe(d,"TYPE","terminate"),Ps(a,d),c=new zn(a,a.j,c),c.M=2,c.A=ia(Xt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=yp(c.j,null),c.g.ea(c.A)),c.F=Date.now(),ra(c)}mp(a)}function aa(a){a.g&&(Bu(a),a.g.cancel(),a.g=null)}function lp(a){aa(a),a.v&&(o.clearTimeout(a.v),a.v=null),ua(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function la(a){if(!Hf(a.h)&&!a.m){a.m=!0;var c=a.Ea;F||y(),z||(F(),z=!0),_.add(c,a),a.D=0}}function yw(a,c){return Wf(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ys(h(a.Ea,a,c),pp(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new zn(this,this.j,a);let N=this.o;if(this.U&&(N?(N=he(N),gn(N,this.U)):N=this.U),this.u!==null||this.R||(P.J=N,N=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=cp(this,P,c),d=Xt(this.J),pe(d,"RID",a),pe(d,"CVER",22),this.G&&pe(d,"X-HTTP-Session-Id",this.G),Ps(this,d),N&&(this.R?c="headers="+vs(np(N))+"&"+c:this.u&&Uu(d,this.u,N)),Mu(this.h,P),this.Ra&&pe(d,"TYPE","init"),this.S?(pe(d,"$req",c),pe(d,"SID","null"),P.U=!0,Vu(P,d,null)):Vu(P,d,c),this.I=2}}else this.I==3&&(a?up(this,a):this.i.length==0||Hf(this.h)||up(this))};function up(a,c){var d;c?d=c.l:d=a.V++;const m=Xt(a.J);pe(m,"SID",a.M),pe(m,"RID",d),pe(m,"AID",a.K),Ps(a,m),a.u&&a.o&&Uu(m,a.u,a.o),d=new zn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=cp(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Mu(a.h,d),Vu(d,m,c)}function Ps(a,c){a.H&&q(a.H,function(d,m){pe(c,m,d)}),a.l&&q({},function(d,m){pe(c,m,d)})}function cp(a,c,d){d=Math.min(a.i.length,d);const m=a.l?h(a.l.Ka,a.l,a):null;e:{var P=a.i;let ee=-1;for(;;){const Oe=["count="+d];ee==-1?d>0?(ee=P[0].g,Oe.push("ofs="+ee)):ee=0:Oe.push("ofs="+ee);let de=!0;for(let je=0;je<d;je++){var N=P[je].g;const Zt=P[je].map;if(N-=ee,N<0)ee=Math.max(0,P[je].g-100),de=!1;else try{N="req"+N+"_"||"";try{var U=Zt instanceof Map?Zt:Object.entries(Zt);for(const[br,Hn]of U){let Wn=Hn;l(Hn)&&(Wn=Cu(Hn)),Oe.push(N+br+"="+encodeURIComponent(Wn))}}catch(br){throw Oe.push(N+"type="+encodeURIComponent("_badmap")),br}}catch{m&&m(Zt)}}if(de){U=Oe.join("&");break e}}U=void 0}return a=a.i.splice(0,d),c.G=a,U}function hp(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;F||y(),z||(F(),z=!0),_.add(c,a),a.A=0}}function ju(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ys(h(a.Da,a),pp(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,dp(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ys(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ct(10),aa(this),dp(this))};function Bu(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function dp(a){a.g=new zn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=Xt(a.na);pe(c,"RID","rpc"),pe(c,"SID",a.M),pe(c,"AID",a.K),pe(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&pe(c,"TO",a.ia),pe(c,"TYPE","xmlhttp"),Ps(a,c),a.u&&a.o&&Uu(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=ia(Xt(c)),d.u=null,d.R=!0,zf(d,a)}t.Va=function(){this.C!=null&&(this.C=null,aa(this),ju(this),ct(19))};function ua(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function fp(a,c){var d=null;if(a.g==c){ua(a),Bu(a),a.g=null;var m=2}else if(Ou(a.h,c))d=c.G,qf(a.h,c),m=1;else return;if(a.I!=0){if(c.o)if(m==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var P=a.D;m=ta(),ut(m,new Of(m,d)),la(a)}else hp(a);else if(P=c.m,P==3||P==0&&c.X>0||!(m==1&&yw(a,c)||m==2&&ju(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),P){case 1:Dr(a,5);break;case 4:Dr(a,10);break;case 3:Dr(a,6);break;default:Dr(a,2)}}}function pp(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function Dr(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),m=a.Ua;const P=!m;m=new jn(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ws(m,"https"),ia(m),P?hw(m.toString(),d):dw(m.toString(),d)}else ct(2);a.I=0,a.l&&a.l.pa(c),mp(a),lp(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function mp(a){if(a.I=0,a.ja=[],a.l){const c=Gf(a.h);(c.length!=0||a.i.length!=0)&&(x(a.ja,c),x(a.ja,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.oa()}}function gp(a,c,d){var m=d instanceof jn?Xt(d):new jn(d);if(m.g!="")c&&(m.g=c+"."+m.g),Ts(m,m.u);else{var P=o.location;m=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;const N=new jn(null);m&&ws(N,m),c&&(N.g=c),P&&Ts(N,P),d&&(N.h=d),m=N}return d=a.G,c=a.wa,d&&c&&pe(m,d,c),pe(m,"VER",a.ka),Ps(a,m),m}function yp(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new Ae(new Fu({ab:d})):new Ae(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function _p(){}t=_p.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ca(){}ca.prototype.g=function(a,c){return new wt(a,c)};function wt(a,c){Xe.call(this),this.g=new ap(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!w(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!w(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new di(this)}p(wt,Xe),wt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){zu(this.g)},wt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Cu(a),a=d);c.i.push(new rw(c.Ya++,a)),c.I==3&&la(c)},wt.prototype.N=function(){this.g.l=null,delete this.j,zu(this.g),delete this.g,wt.Z.N.call(this)};function vp(a){Ru.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}p(vp,Ru);function Ep(){Pu.call(this),this.status=1}p(Ep,Pu);function di(a){this.g=a}p(di,_p),di.prototype.ra=function(){ut(this.g,"a")},di.prototype.qa=function(a){ut(this.g,new vp(a))},di.prototype.pa=function(a){ut(this.g,new Ep)},di.prototype.oa=function(){ut(this.g,"b")},ca.prototype.createWebChannel=ca.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,y0=function(){return new ca},g0=function(){return ta()},m0=xr,Ph={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},na.NO_ERROR=0,na.TIMEOUT=8,na.HTTP_ERROR=6,Ya=na,Mf.COMPLETE="complete",p0=Mf,Nf.EventType=ms,ms.OPEN="a",ms.CLOSE="b",ms.ERROR="c",ms.MESSAGE="d",Xe.prototype.listen=Xe.prototype.J,$s=Nf,Ae.prototype.listenOnce=Ae.prototype.K,Ae.prototype.getLastError=Ae.prototype.Ha,Ae.prototype.getLastErrorCode=Ae.prototype.ya,Ae.prototype.getStatus=Ae.prototype.ca,Ae.prototype.getResponseJson=Ae.prototype.La,Ae.prototype.getResponseText=Ae.prototype.la,Ae.prototype.send=Ae.prototype.ea,Ae.prototype.setWithCredentials=Ae.prototype.Fa,f0=Ae}).apply(typeof xa<"u"?xa:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let us="12.9.0";function wC(t){us=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=new zd("@firebase/firestore");function pi(){return Zr.logLevel}function B(t,...e){if(Zr.logLevel<=ne.DEBUG){const n=e.map(Yd);Zr.debug(`Firestore (${us}): ${t}`,...n)}}function On(t,...e){if(Zr.logLevel<=ne.ERROR){const n=e.map(Yd);Zr.error(`Firestore (${us}): ${t}`,...n)}}function ei(t,...e){if(Zr.logLevel<=ne.WARN){const n=e.map(Yd);Zr.warn(`Firestore (${us}): ${t}`,...n)}}function Yd(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,_0(t,r,n)}function _0(t,e,n){let r=`FIRESTORE (${us}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw On(r),new Error(r)}function ue(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||_0(e,i,r)}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class TC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class IC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class SC{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ue(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new yr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new yr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new yr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string",31837,{l:r}),new v0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string",2055,{h:e}),new nt(e)}}class kC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class AC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new kC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Vt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ue(this.o===void 0,3512);const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new cg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new cg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=RC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function xh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Sc(i)===Sc(s)?re(i,s):Sc(i)?1:-1}return re(t.length,e.length)}const PC=55296,xC=57343;function Sc(t){const e=t.charCodeAt(0);return e>=PC&&e<=xC}function Yi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="__name__";class nn{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&K(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return nn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof nn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=nn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return re(e.length,n.length)}static compareSegments(e,n){const r=nn.isNumericId(e),i=nn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?nn.extractNumericId(e).compare(nn.extractNumericId(n)):xh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return gr.fromString(e.substring(4,e.length-2))}}class ge extends nn{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const NC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends nn{construct(e,n,r){return new Ke(e,n,r)}static isValidIdentifier(e){return NC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===hg}static keyField(){return new Ke([hg])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new H(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(n)}static emptyPath(){return new Ke([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(ge.fromString(e))}static fromName(e){return new G(ge.fromString(e).popFirst(5))}static empty(){return new G(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new ge(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(t,e,n){if(!n)throw new H(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function VC(t,e,n,r){if(e===!0&&r===!0)throw new H(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function dg(t){if(!G.isDocumentKey(t))throw new H(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function fg(t){if(G.isDocumentKey(t))throw new H(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function w0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Zd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K(12329,{type:typeof t})}function An(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zd(t);throw new H(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t,e){const n={typeString:t};return e&&(n.value=e),n}function Go(t,e){if(!w0(t))throw new H(O.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new H(O.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=-62135596800,mg=1e6;class ye{static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*mg);return new ye(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<pg)throw new H(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/mg}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Go(e,ye._jsonSchema))return new ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-pg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ye._jsonSchemaVersion="firestore/timestamp/1.0",ye._jsonSchema={type:Ve("string",ye._jsonSchemaVersion),seconds:Ve("number"),nanoseconds:Ve("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new ye(0,0))}static max(){return new Y(new ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=-1;function DC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new ye(n+1,0):new ye(n,r));return new wr(i,G.empty(),e)}function bC(t){return new wr(t.readTime,t.key,Po)}class wr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new wr(Y.min(),G.empty(),Po)}static max(){return new wr(Y.max(),G.empty(),Po)}}function OC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==MC)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new b((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function FC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function hs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}hu.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef=-1;function du(t){return t==null}function Ol(t){return t===0&&1/t==-1/0}function UC(t){return typeof t=="number"&&Number.isInteger(t)&&!Ol(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0="";function zC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=gg(e)),e=jC(t.get(n),e);return gg(e)}function jC(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case T0:n+="";break;default:n+=s}}return n}function gg(t){return t+T0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ii(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function I0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Na(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Na(this.root,e,this.comparator,!1)}getReverseIterator(){return new Na(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Na(this.root,e,this.comparator,!0)}}class Na{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ge.RED,this.left=i??Ge.EMPTY,this.right=s??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ge(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ge.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ge(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _g(this.data.getIterator())}getIteratorFrom(e){return new _g(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ue)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ue(this.comparator);return n.data=e,n}}class _g{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new Ue(Ke.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Yi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new S0("Invalid base64 string: "+s):s}}(e);return new Ye(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const BC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tr(t){if(ue(!!t,39018),typeof t=="string"){let e=0;const n=BC.exec(t);if(ue(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ir(t){return typeof t=="string"?Ye.fromBase64String(t):Ye.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0="server_timestamp",A0="__type__",C0="__previous_value__",R0="__local_write_time__";function tf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[A0])==null?void 0:r.stringValue)===k0}function fu(t){const e=t.mapValue.fields[C0];return tf(e)?fu(e):e}function xo(t){const e=Tr(t.mapValue.fields[R0].timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e,n,r,i,s,o,l,u,h,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=p}}const Ml="(default)";class No{constructor(e,n){this.projectId=e,this.database=n||Ml}static empty(){return new No("","")}get isDefaultDatabase(){return this.database===Ml}isEqual(e){return e instanceof No&&e.projectId===this.projectId&&e.database===this.database}}function HC(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new H(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new No(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0="__type__",WC="__max__",Va={mapValue:{}},x0="__vector__",Ll="value";function Sr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?tf(t)?4:GC(t)?9007199254740991:qC(t)?10:11:K(28295,{value:t})}function fn(t,e){if(t===e)return!0;const n=Sr(t);if(n!==Sr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xo(t).isEqual(xo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Tr(i.timestampValue),l=Tr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ir(i.bytesValue).isEqual(Ir(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Re(i.geoPointValue.latitude)===Re(s.geoPointValue.latitude)&&Re(i.geoPointValue.longitude)===Re(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Re(i.integerValue)===Re(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Re(i.doubleValue),l=Re(s.doubleValue);return o===l?Ol(o)===Ol(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Yi(t.arrayValue.values||[],e.arrayValue.values||[],fn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(yg(o)!==yg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!fn(o[u],l[u])))return!1;return!0}(t,e);default:return K(52216,{left:t})}}function Vo(t,e){return(t.values||[]).find(n=>fn(n,e))!==void 0}function Xi(t,e){if(t===e)return 0;const n=Sr(t),r=Sr(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Re(s.integerValue||s.doubleValue),u=Re(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return vg(t.timestampValue,e.timestampValue);case 4:return vg(xo(t),xo(e));case 5:return xh(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Ir(s),u=Ir(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=re(l[h],u[h]);if(f!==0)return f}return re(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=re(Re(s.latitude),Re(o.latitude));return l!==0?l:re(Re(s.longitude),Re(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Eg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var g,A,x,V;const l=s.fields||{},u=o.fields||{},h=(g=l[Ll])==null?void 0:g.arrayValue,f=(A=u[Ll])==null?void 0:A.arrayValue,p=re(((x=h==null?void 0:h.values)==null?void 0:x.length)||0,((V=f==null?void 0:f.values)==null?void 0:V.length)||0);return p!==0?p:Eg(h,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Va.mapValue&&o===Va.mapValue)return 0;if(s===Va.mapValue)return 1;if(o===Va.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=xh(u[p],f[p]);if(g!==0)return g;const A=Xi(l[u[p]],h[f[p]]);if(A!==0)return A}return re(u.length,f.length)}(t.mapValue,e.mapValue);default:throw K(23264,{he:n})}}function vg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=Tr(t),r=Tr(e),i=re(n.seconds,r.seconds);return i!==0?i:re(n.nanos,r.nanos)}function Eg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Xi(n[i],r[i]);if(s)return s}return re(n.length,r.length)}function Zi(t){return Nh(t)}function Nh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Tr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ir(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Nh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Nh(n.fields[o])}`;return i+"}"}(t.mapValue):K(61005,{value:t})}function Xa(t){switch(Sr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=fu(t);return e?16+Xa(e):16;case 5:return 2*t.stringValue.length;case 6:return Ir(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Xa(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return ii(r.fields,(s,o)=>{i+=s.length+Xa(o)}),i}(t.mapValue);default:throw K(13486,{value:t})}}function Vh(t){return!!t&&"integerValue"in t}function nf(t){return!!t&&"arrayValue"in t}function wg(t){return!!t&&"nullValue"in t}function Tg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Za(t){return!!t&&"mapValue"in t}function qC(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[P0])==null?void 0:r.stringValue)===x0}function io(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ii(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=io(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=io(t.arrayValue.values[n]);return e}return{...t}}function GC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===WC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Za(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=io(n)}setAll(e){let n=Ke.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=io(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Za(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Za(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ii(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Dt(io(this.value))}}function N0(t){const e=[];return ii(t.fields,(n,r)=>{const i=new Ke([n]);if(Za(r)){const s=N0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new it(e,0,Y.min(),Y.min(),Y.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,i){return new it(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new it(e,2,n,Y.min(),Y.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new it(e,3,n,Y.min(),Y.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,n){this.position=e,this.inclusive=n}}function Ig(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=Xi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Sg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n="asc"){this.field=e,this.dir=n}}function KC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{}class Le extends V0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new JC(e,n,r):n==="array-contains"?new ZC(e,r):n==="in"?new e2(e,r):n==="not-in"?new t2(e,r):n==="array-contains-any"?new n2(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new YC(e,r):new XC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Xi(n,this.value)):n!==null&&Sr(this.value)===Sr(n)&&this.matchesComparison(Xi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pn extends V0{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new pn(e,n)}matches(e){return D0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function D0(t){return t.op==="and"}function b0(t){return QC(t)&&D0(t)}function QC(t){for(const e of t.filters)if(e instanceof pn)return!1;return!0}function Dh(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+Zi(t.value);if(b0(t))return t.filters.map(e=>Dh(e)).join(",");{const e=t.filters.map(n=>Dh(n)).join(",");return`${t.op}(${e})`}}function O0(t,e){return t instanceof Le?function(r,i){return i instanceof Le&&r.op===i.op&&r.field.isEqual(i.field)&&fn(r.value,i.value)}(t,e):t instanceof pn?function(r,i){return i instanceof pn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&O0(o,i.filters[l]),!0):!1}(t,e):void K(19439)}function M0(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${Zi(n.value)}`}(t):t instanceof pn?function(n){return n.op.toString()+" {"+n.getFilters().map(M0).join(" ,")+"}"}(t):"Filter"}class JC extends Le{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class YC extends Le{constructor(e,n){super(e,"in",n),this.keys=L0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class XC extends Le{constructor(e,n){super(e,"not-in",n),this.keys=L0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function L0(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class ZC extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return nf(n)&&Vo(n.arrayValue,this.value)}}class e2 extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vo(this.value.arrayValue,n)}}class t2 extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Vo(this.value.arrayValue,n)}}class n2 extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!nf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function kg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new r2(t,e,n,r,i,s,o)}function rf(t){const e=Z(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Dh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),du(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Zi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Zi(r)).join(",")),e.Te=n}return e.Te}function sf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!KC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!O0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Sg(t.startAt,e.startAt)&&Sg(t.endAt,e.endAt)}function bh(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function i2(t,e,n,r,i,s,o,l){return new pu(t,e,n,r,i,s,o,l)}function mu(t){return new pu(t)}function Ag(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function s2(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function o2(t){return t.collectionGroup!==null}function so(t){const e=Z(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ue(Ke.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Ul(s,r))}),n.has(Ke.keyField().canonicalString())||e.Ie.push(new Ul(Ke.keyField(),r))}return e.Ie}function un(t){const e=Z(t);return e.Ee||(e.Ee=a2(e,so(t))),e.Ee}function a2(t,e){if(t.limitType==="F")return kg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ul(i.field,s)});const n=t.endAt?new Fl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Fl(t.startAt.position,t.startAt.inclusive):null;return kg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Oh(t,e,n){return new pu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function gu(t,e){return sf(un(t),un(e))&&t.limitType===e.limitType}function F0(t){return`${rf(un(t))}|lt:${t.limitType}`}function mi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>M0(i)).join(", ")}]`),du(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Zi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Zi(i)).join(",")),`Target(${r})`}(un(t))}; limitType=${t.limitType})`}function yu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of so(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Ig(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,so(r),i)||r.endAt&&!function(o,l,u){const h=Ig(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,so(r),i))}(t,e)}function l2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function U0(t){return(e,n)=>{let r=!1;for(const i of so(t)){const s=u2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function u2(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Xi(u,h):K(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ii(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return I0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c2=new ke(G.comparator);function Mn(){return c2}const z0=new ke(G.comparator);function Hs(...t){let e=z0;for(const n of t)e=e.insert(n.key,n);return e}function j0(t){let e=z0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function jr(){return oo()}function B0(){return oo()}function oo(){return new si(t=>t.toString(),(t,e)=>t.isEqual(e))}const h2=new ke(G.comparator),d2=new Ue(G.comparator);function ie(...t){let e=d2;for(const n of t)e=e.add(n);return e}const f2=new Ue(re);function p2(){return f2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ol(e)?"-0":e}}function $0(t){return{integerValue:""+t}}function m2(t,e){return UC(e)?$0(e):of(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(){this._=void 0}}function g2(t,e,n){return t instanceof zl?function(i,s){const o={fields:{[A0]:{stringValue:k0},[R0]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&tf(s)&&(s=fu(s)),s&&(o.fields[C0]=s),{mapValue:o}}(n,e):t instanceof Do?W0(t,e):t instanceof bo?q0(t,e):function(i,s){const o=H0(i,s),l=Cg(o)+Cg(i.Ae);return Vh(o)&&Vh(i.Ae)?$0(l):of(i.serializer,l)}(t,e)}function y2(t,e,n){return t instanceof Do?W0(t,e):t instanceof bo?q0(t,e):n}function H0(t,e){return t instanceof jl?function(r){return Vh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class zl extends _u{}class Do extends _u{constructor(e){super(),this.elements=e}}function W0(t,e){const n=G0(e);for(const r of t.elements)n.some(i=>fn(i,r))||n.push(r);return{arrayValue:{values:n}}}class bo extends _u{constructor(e){super(),this.elements=e}}function q0(t,e){let n=G0(e);for(const r of t.elements)n=n.filter(i=>!fn(i,r));return{arrayValue:{values:n}}}class jl extends _u{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Cg(t){return Re(t.integerValue||t.doubleValue)}function G0(t){return nf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function _2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Do&&i instanceof Do||r instanceof bo&&i instanceof bo?Yi(r.elements,i.elements,fn):r instanceof jl&&i instanceof jl?fn(r.Ae,i.Ae):r instanceof zl&&i instanceof zl}(t.transform,e.transform)}class v2{constructor(e,n){this.version=e,this.transformResults=n}}class cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new cn}static exists(e){return new cn(void 0,e)}static updateTime(e){return new cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function el(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class vu{}function K0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new af(t.key,cn.none()):new Ko(t.key,t.data,cn.none());{const n=t.data,r=Dt.empty();let i=new Ue(Ke.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new oi(t.key,r,new Wt(i.toArray()),cn.none())}}function E2(t,e,n){t instanceof Ko?function(i,s,o){const l=i.value.clone(),u=Pg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof oi?function(i,s,o){if(!el(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Pg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Q0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ao(t,e,n,r){return t instanceof Ko?function(s,o,l,u){if(!el(s.precondition,o))return l;const h=s.value.clone(),f=xg(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof oi?function(s,o,l,u){if(!el(s.precondition,o))return l;const h=xg(s.fieldTransforms,u,o),f=o.data;return f.setAll(Q0(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return el(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function w2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=H0(r.transform,i||null);s!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,s))}return n||null}function Rg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Yi(r,i,(s,o)=>_2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ko extends vu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class oi extends vu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Q0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Pg(t,e,n){const r=new Map;ue(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,y2(o,l,n[i]))}return r}function xg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,g2(s,o,e))}return r}class af extends vu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class T2 extends vu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&E2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ao(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ao(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=B0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=K0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&Yi(this.mutations,e.mutations,(n,r)=>Rg(n,r))&&Yi(this.baseMutations,e.baseMutations,(n,r)=>Rg(n,r))}}class lf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ue(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return h2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new lf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe,oe;function A2(t){switch(t){case O.OK:return K(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return K(15467,{code:t})}}function J0(t){if(t===void 0)return On("GRPC error has no .code"),O.UNKNOWN;switch(t){case xe.OK:return O.OK;case xe.CANCELLED:return O.CANCELLED;case xe.UNKNOWN:return O.UNKNOWN;case xe.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case xe.INTERNAL:return O.INTERNAL;case xe.UNAVAILABLE:return O.UNAVAILABLE;case xe.UNAUTHENTICATED:return O.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case xe.NOT_FOUND:return O.NOT_FOUND;case xe.ALREADY_EXISTS:return O.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return O.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case xe.ABORTED:return O.ABORTED;case xe.OUT_OF_RANGE:return O.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return O.UNIMPLEMENTED;case xe.DATA_LOSS:return O.DATA_LOSS;default:return K(39323,{code:t})}}(oe=xe||(xe={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C2(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R2=new gr([4294967295,4294967295],0);function Ng(t){const e=C2().encode(t),n=new d0;return n.update(e),new Uint8Array(n.digest())}function Vg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new gr([n,r],0),new gr([i,s],0)]}class uf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ws(`Invalid padding: ${n}`);if(r<0)throw new Ws(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ws(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ws(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=gr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(gr.fromNumber(r)));return i.compare(R2)===1&&(i=new gr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Ng(e),[r,i]=Vg(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new uf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Ng(e),[r,i]=Vg(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ws extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Qo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Eu(Y.min(),i,new ke(re),Mn(),ie())}}class Qo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Qo(r,n,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=i}}class Y0{constructor(e,n){this.targetId=e,this.Ce=n}}class X0{constructor(e,n,r=Ye.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Dg{constructor(){this.ve=0,this.Fe=bg(),this.Me=Ye.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ie(),n=ie(),r=ie();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K(38017,{changeType:s})}}),new Qo(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=bg()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ue(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class P2{constructor(e){this.Ge=e,this.ze=new Map,this.je=Mn(),this.He=Da(),this.Je=Da(),this.Ze=new ke(re)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:K(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(bh(s))if(r===0){const o=new G(s.path);this.et(n,o,it.newNoDocument(o,Y.min()))}else ue(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Ir(r).toUint8Array()}catch(u){if(u instanceof S0)return ei("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new uf(o,i,s)}catch(u){return ei(u instanceof Ws?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&bh(l.target)){const u=new G(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,it.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.Ke())}});let r=ie();this.Je.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Eu(e,n,this.Ze,this.je,r);return this.je=Mn(),this.He=Da(),this.Je=Da(),this.Ze=new ke(re),i}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.qe(n,1):i.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Dg,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new Ue(re),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new Ue(re),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Dg),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Da(){return new ke(G.comparator)}function bg(){return new ke(G.comparator)}const x2={asc:"ASCENDING",desc:"DESCENDING"},N2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},V2={and:"AND",or:"OR"};class D2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mh(t,e){return t.useProto3Json||du(e)?e:{value:e}}function Bl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Z0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function b2(t,e){return Bl(t,e.toTimestamp())}function hn(t){return ue(!!t,49232),Y.fromTimestamp(function(n){const r=Tr(n);return new ye(r.seconds,r.nanos)}(t))}function cf(t,e){return Lh(t,e).canonicalString()}function Lh(t,e){const n=function(i){return new ge(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function eE(t){const e=ge.fromString(t);return ue(sE(e),10190,{key:e.toString()}),e}function Fh(t,e){return cf(t.databaseId,e.path)}function kc(t,e){const n=eE(e);if(n.get(1)!==t.databaseId.projectId)throw new H(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(nE(n))}function tE(t,e){return cf(t.databaseId,e)}function O2(t){const e=eE(t);return e.length===4?ge.emptyPath():nE(e)}function Uh(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function nE(t){return ue(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Og(t,e,n){return{name:Fh(t,e),fields:n.value.mapValue.fields}}function M2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:K(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ue(f===void 0||typeof f=="string",58123),Ye.fromBase64String(f||"")):(ue(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ye.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?O.UNKNOWN:J0(h.code);return new H(f,h.message||"")}(o);n=new X0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=kc(t,r.document.name),s=hn(r.document.updateTime),o=r.document.createTime?hn(r.document.createTime):Y.min(),l=new Dt({mapValue:{fields:r.document.fields}}),u=it.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new tl(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=kc(t,r.document),s=r.readTime?hn(r.readTime):Y.min(),o=it.newNoDocument(i,s),l=r.removedTargetIds||[];n=new tl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=kc(t,r.document),s=r.removedTargetIds||[];n=new tl([],s,i,null)}else{if(!("filter"in e))return K(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new k2(i,s),l=r.targetId;n=new Y0(l,o)}}return n}function L2(t,e){let n;if(e instanceof Ko)n={update:Og(t,e.key,e.value)};else if(e instanceof af)n={delete:Fh(t,e.key)};else if(e instanceof oi)n={update:Og(t,e.key,e.data),updateMask:q2(e.fieldMask)};else{if(!(e instanceof T2))return K(16599,{dt:e.type});n={verify:Fh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof zl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Do)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof bo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof jl)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw K(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:b2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K(27497)}(t,e.precondition)),n}function F2(t,e){return t&&t.length>0?(ue(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?hn(i.updateTime):hn(s);return o.isEqual(Y.min())&&(o=hn(s)),new v2(o,i.transformResults||[])}(n,e))):[]}function U2(t,e){return{documents:[tE(t,e.path)]}}function z2(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=tE(t,i);const s=function(h){if(h.length!==0)return iE(pn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:gi(g.field),direction:$2(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Mh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:i}}function j2(t){let e=O2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ue(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const g=rE(p);return g instanceof pn&&b0(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(x){return new Ul(yi(x.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,du(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,A=p.values||[];return new Fl(A,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,A=p.values||[];return new Fl(A,g)}(n.endAt)),i2(e,i,o,s,l,"F",u,h)}function B2(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function rE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=yi(n.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=yi(n.unaryFilter.field);return Le.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=yi(n.unaryFilter.field);return Le.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=yi(n.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(t):t.fieldFilter!==void 0?function(n){return Le.create(yi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return pn.create(n.compositeFilter.filters.map(r=>rE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(n.compositeFilter.op))}(t):K(30097,{filter:t})}function $2(t){return x2[t]}function H2(t){return N2[t]}function W2(t){return V2[t]}function gi(t){return{fieldPath:t.canonicalString()}}function yi(t){return Ke.fromServerFormat(t.fieldPath)}function iE(t){return t instanceof Le?function(n){if(n.op==="=="){if(Tg(n.value))return{unaryFilter:{field:gi(n.field),op:"IS_NAN"}};if(wg(n.value))return{unaryFilter:{field:gi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Tg(n.value))return{unaryFilter:{field:gi(n.field),op:"IS_NOT_NAN"}};if(wg(n.value))return{unaryFilter:{field:gi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gi(n.field),op:H2(n.op),value:n.value}}}(t):t instanceof pn?function(n){const r=n.getFilters().map(i=>iE(i));return r.length===1?r[0]:{compositeFilter:{op:W2(n.op),filters:r}}}(t):K(54877,{filter:t})}function q2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function sE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function oE(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=Ye.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(e){this.yt=e}}function K2(t){const e=j2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Oh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(){this.Sn=new J2}addToCollectionParentIndex(e,n){return this.Sn.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(wr.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(wr.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class J2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ue(ge.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ue(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},aE=41943040;class mt{static withCacheSize(e){return new mt(e,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mt.DEFAULT_COLLECTION_PERCENTILE=10,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,mt.DEFAULT=new mt(aE,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),mt.DISABLED=new mt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new es(0)}static ar(){return new es(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg="LruGarbageCollector",Y2=1048576;function Fg([t,e],[n,r]){const i=re(t,n);return i===0?re(e,r):i}class X2{constructor(e){this.Pr=e,this.buffer=new Ue(Fg),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Fg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Z2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){B(Lg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){hs(n)?B(Lg,"Ignoring IndexedDB error during garbage collection: ",n):await cs(n)}await this.Ar(3e5)})}}class eR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return b.resolve(hu.ce);const r=new X2(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(Mg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Mg):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),pi()<=ne.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function tR(t,e){return new eR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(){this.changes=new si(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ao(r.mutation,i,Wt.empty(),ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=jr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Hs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=jr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Mn();const o=oo(),l=function(){return oo()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof oi)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),ao(f.mutation,h,f.mutation.getFieldMask(),ye.now())):o.set(h.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>l.set(h,new rR(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=oo();let i=new ke((o,l)=>o-l),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Wt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||ie()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=B0();f.forEach(g=>{if(!s.has(g)){const A=K0(n.get(g),r.get(g));A!==null&&p.set(g,A),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return s2(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):o2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):b.resolve(jr());let l=Po,u=s;return o.next(h=>b.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?b.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ie())).next(f=>({batchId:l,changes:j0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=Hs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Hs();return this.indexManager.getCollectionParents(e,s).next(l=>b.forEach(l,u=>{const h=function(p,g){return new pu(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,it.newInvalidDocument(f)))});let l=Hs();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&ao(f.mutation,h,Wt.empty(),ye.now()),yu(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return b.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:hn(i.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:K2(i.bundledQuery),readTime:hn(i.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(){this.overlays=new ke(G.comparator),this.Lr=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=jr();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.bt(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=jr(),s=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ke((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=jr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=jr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return b.resolve(l)}bt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new S2(n,r));let s=this.Lr.get(n);s===void 0&&(s=ie(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(){this.sessionToken=Ye.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(){this.kr=new Ue(Be.Kr),this.qr=new Ue(Be.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Be(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Be(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new G(new ge([])),r=new Be(n,e),i=new Be(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new G(new ge([])),r=new Be(n,e),i=new Be(n,e+1);let s=ie();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Be(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return G.comparator(e.key,n.key)||re(e.Hr,n.Hr)}static Ur(e,n){return re(e.Hr,n.Hr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new Ue(Be.Kr)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new I2(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Jr=this.Jr.add(new Be(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?ef:this.Yn-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Be(n,0),i=new Be(n,Number.POSITIVE_INFINITY),s=[];return this.Jr.forEachInRange([r,i],o=>{const l=this.Zr(o.Hr);s.push(l)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ue(re);return n.forEach(i=>{const s=new Be(i,0),o=new Be(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([s,o],l=>{r=r.add(l.Hr)})}),b.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new Be(new G(s),0);let l=new Ue(re);return this.Jr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Hr)),!0)},o),b.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ue(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return b.forEach(n.mutations,i=>{const s=new Be(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new Be(n,0),i=this.Jr.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e){this.ti=e,this.docs=function(){return new ke(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():it.newInvalidDocument(n))}getEntries(e,n){let r=Mn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():it.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Mn();const o=n.path,l=new G(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||OC(bC(f),r)<=0||(i.has(f.key)||yu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K(9500)}ni(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new cR(this)}getSize(e){return b.resolve(this.size)}}class cR extends nR{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e){this.persistence=e,this.ri=new si(n=>rf(n),sf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.ii=0,this.si=new hf,this.targetCount=0,this.oi=es._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),b.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new es(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.lr(n),b.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n){this._i={},this.overlays={},this.ai=new hu(0),this.ui=!1,this.ui=!0,this.ci=new aR,this.referenceDelegate=e(this),this.li=new hR(this),this.indexManager=new Q2,this.remoteDocumentCache=function(i){return new uR(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new G2(n),this.Pi=new sR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new oR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new lR(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const i=new dR(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ii(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return b.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class dR extends LC{constructor(e){super(),this.currentSequenceNumber=e}}class df{constructor(e){this.persistence=e,this.Ri=new hf,this.Ai=null}static Vi(e){return new df(e)}get di(){if(this.Ai)return this.Ai;throw K(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),b.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.di,r=>{const i=G.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return b.or([()=>b.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class $l{constructor(e,n){this.persistence=e,this.fi=new si(r=>zC(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=tR(this,n)}static Vi(e,n){return new $l(e,n)}Ti(){}Ii(e){return b.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return b.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?b.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Y.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),b.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),b.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),b.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),b.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Xa(e.data.value)),n}wr(e,n,r){return b.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return b.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=i}static Es(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ff(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return ZI()?8:FC(ot())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new fR;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(pi()<=ne.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",mi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),b.resolve()):(pi()<=ne.DEBUG&&B("QueryEngine","Query:",mi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(pi()<=ne.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",mi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,un(n))):b.resolve())}gs(e,n){if(Ag(n))return b.resolve(null);let r=un(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Oh(n,null,"F"),r=un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.bs(n,l);return this.Ss(n,h,o,u.readTime)?this.gs(e,Oh(n,null,"F")):this.Ds(e,h,n,u)}))})))}ps(e,n,r,i){return Ag(n)||i.isEqual(Y.min())?b.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ss(n,o,r,i)?b.resolve(null):(pi()<=ne.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),mi(n)),this.Ds(e,o,n,DC(i,Po)).next(l=>l))})}bs(e,n){let r=new Ue(U0(e));return n.forEach((i,s)=>{yu(e,s)&&(r=r.add(s))}),r}Ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return pi()<=ne.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",mi(n)),this.fs.getDocumentsMatchingQuery(e,n,wr.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf="LocalStore",mR=3e8;class gR{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new ke(re),this.Fs=new si(s=>rf(s),sf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iR(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function yR(t,e,n,r){return new gR(t,e,n,r)}async function uE(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ie();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:l}))})})}function _R(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,g=p.keys();let A=b.resolve();return g.forEach(x=>{A=A.next(()=>f.getEntry(u,x)).next(V=>{const M=h.docVersions.get(x);ue(M!==null,48541),V.version.compareTo(M)<0&&(p.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ie();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function cE(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function vR(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((f,p)=>{const g=i.get(p);if(!g)return;l.push(n.li.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.li.addMatchingKeys(s,f.addedDocuments,p)));let A=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken(Ye.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(p,A),function(V,M,I){return V.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=mR?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(g,A,f)&&l.push(n.li.updateTargetData(s,A))});let u=Mn(),h=ie();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(ER(s,o,e.documentUpdates).next(f=>{u=f.Bs,h=f.Ls})),!r.isEqual(Y.min())){const f=n.li.getLastRemoteSnapshotVersion(s).next(p=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return b.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.vs=i,s))}function ER(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Mn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):B(pf,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function wR(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ef),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function TR(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new ir(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function zh(t,e,n){const r=Z(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!hs(o))throw o;B(pf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function Ug(t,e,n){const r=Z(t);let i=Y.min(),s=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=Z(u),g=p.Fs.get(f);return g!==void 0?b.resolve(p.vs.get(g)):p.li.getTargetData(h,f)}(r,o,un(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:ie())).next(l=>(IR(r,l2(e),l),{documents:l,ks:s})))}function IR(t,e,n){let r=t.Ms.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class zg{constructor(){this.activeTargetIds=p2()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class SR{constructor(){this.vo=new zg,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new zg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg="ConnectivityMonitor";class Bg{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){B(jg,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){B(jg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ba=null;function jh(){return ba===null?ba=function(){return 268435456+Math.round(2147483648*Math.random())}():ba++,"0x"+ba.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="RestConnection",AR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class CR{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Ml?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=jh(),l=this.Qo(e,n.toUriEncodedString());B(Ac,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:h}=new URL(l),f=os(h);return this.zo(e,l,u,r,f).then(p=>(B(Ac,`Received RPC '${e}' ${o}: `,p),p),p=>{throw ei(Ac,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+us}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=AR[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="WebChannelConnection",Fs=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class zi extends CR{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!zi.c_){const e=g0();Fs(e,m0.STAT_EVENT,n=>{n.stat===Ph.PROXY?B(tt,"STAT_EVENT: detected buffering proxy"):n.stat===Ph.NOPROXY&&B(tt,"STAT_EVENT: detected no buffering proxy")}),zi.c_=!0}}zo(e,n,r,i,s){const o=jh();return new Promise((l,u)=>{const h=new f0;h.setWithCredentials(!0),h.listenOnce(p0.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ya.NO_ERROR:const p=h.getResponseJson();B(tt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Ya.TIMEOUT:B(tt,`RPC '${e}' ${o} timed out`),u(new H(O.DEADLINE_EXCEEDED,"Request time out"));break;case Ya.HTTP_ERROR:const g=h.getStatus();if(B(tt,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const x=A==null?void 0:A.error;if(x&&x.status&&x.message){const V=function(I){const E=I.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(E)>=0?E:O.UNKNOWN}(x.status);u(new H(V,x.message))}else u(new H(O.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new H(O.UNAVAILABLE,"Connection failed."));break;default:K(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{B(tt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);B(tt,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",f,r,15)})}T_(e,n,r){const i=jh(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");B(tt,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);this.I_(f);let p=!1,g=!1;const A=new RR({Ho:x=>{g?B(tt,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(p||(B(tt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),B(tt,`RPC '${e}' stream ${i} sending:`,x),f.send(x))},Jo:()=>f.close()});return Fs(f,$s.EventType.OPEN,()=>{g||(B(tt,`RPC '${e}' stream ${i} transport opened.`),A.i_())}),Fs(f,$s.EventType.CLOSE,()=>{g||(g=!0,B(tt,`RPC '${e}' stream ${i} transport closed`),A.o_(),this.E_(f))}),Fs(f,$s.EventType.ERROR,x=>{g||(g=!0,ei(tt,`RPC '${e}' stream ${i} transport errored. Name:`,x.name,"Message:",x.message),A.o_(new H(O.UNAVAILABLE,"The operation could not be completed")))}),Fs(f,$s.EventType.MESSAGE,x=>{var V;if(!g){const M=x.data[0];ue(!!M,16349);const I=M,E=(I==null?void 0:I.error)||((V=I[0])==null?void 0:V.error);if(E){B(tt,`RPC '${e}' stream ${i} received error:`,E);const C=E.status;let D=function(_){const y=xe[_];if(y!==void 0)return J0(y)}(C),F=E.message;C==="NOT_FOUND"&&F.includes("database")&&F.includes("does not exist")&&F.includes(this.databaseId.database)&&ei(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=O.INTERNAL,F="Unknown error status: "+C+" with message "+E.message),g=!0,A.o_(new H(D,F)),f.close()}else B(tt,`RPC '${e}' stream ${i} received:`,M),A.__(M)}}),zi.u_(),setTimeout(()=>{A.s_()},0),A}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return y0()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PR(t){return new zi(t)}function Cc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(t){return new D2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zi.c_=!1;class hE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g="PersistentStream";class dE{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.b_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new hE(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(On(n.toString()),On("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new H(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.H_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return B($g,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(B($g,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xR extends dE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=M2(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?hn(o.readTime):Y.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=Uh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=bh(u)?{documents:U2(s,u)}:{query:z2(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Z0(s,o.resumeToken);const h=Mh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=Bl(s,o.snapshotVersion.toTimestamp());const h=Mh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=B2(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Uh(this.serializer),n.removeTarget=e,this.K_(n)}}class NR extends dE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=F2(e.writeResults,e.commitTime),r=hn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Uh(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>L2(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{}class DR extends VR{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new H(O.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Lh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(O.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Lh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(O.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function bR(t,e,n,r){return new DR(t,e,n,r)}class OR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(On(n),this.aa=!1):B("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti="RemoteStore";class MR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{ai(this)&&(B(ti,"Restarting streams for network reachability change."),await async function(u){const h=Z(u);h.Ea.add(4),await Jo(h),h.Va.set("Unknown"),h.Ea.delete(4),await Tu(h)}(this))})}),this.Va=new OR(r,i)}}async function Tu(t){if(ai(t))for(const e of t.Ra)await e(!0)}async function Jo(t){for(const e of t.Ra)await e(!1)}function fE(t,e){const n=Z(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),_f(n)?yf(n):ds(n).O_()&&gf(n,e))}function mf(t,e){const n=Z(t),r=ds(n);n.Ia.delete(e),r.O_()&&pE(n,e),n.Ia.size===0&&(r.O_()?r.L_():ai(n)&&n.Va.set("Unknown"))}function gf(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ds(t).Z_(e)}function pE(t,e){t.da.$e(e),ds(t).X_(e)}function yf(t){t.da=new P2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ds(t).start(),t.Va.ua()}function _f(t){return ai(t)&&!ds(t).x_()&&t.Ia.size>0}function ai(t){return Z(t).Ea.size===0}function mE(t){t.da=void 0}async function LR(t){t.Va.set("Online")}async function FR(t){t.Ia.forEach((e,n)=>{gf(t,e)})}async function UR(t,e){mE(t),_f(t)?(t.Va.ha(e),yf(t)):t.Va.set("Unknown")}async function zR(t,e,n){if(t.Va.set("Online"),e instanceof X0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.da.removeTarget(l))}(t,e)}catch(r){B(ti,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hl(t,r)}else if(e instanceof tl?t.da.Xe(e):e instanceof Y0?t.da.st(e):t.da.tt(e),!n.isEqual(Y.min()))try{const r=await cE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.da.Tt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ia.get(h);f&&s.Ia.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.Ia.get(u);if(!f)return;s.Ia.set(u,f.withResumeToken(Ye.EMPTY_BYTE_STRING,f.snapshotVersion)),pE(s,u);const p=new ir(f.target,u,h,f.sequenceNumber);gf(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){B(ti,"Failed to raise snapshot:",r),await Hl(t,r)}}async function Hl(t,e,n){if(!hs(e))throw e;t.Ea.add(1),await Jo(t),t.Va.set("Offline"),n||(n=()=>cE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B(ti,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Tu(t)})}function gE(t,e){return e().catch(n=>Hl(t,n,e))}async function Iu(t){const e=Z(t),n=kr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ef;for(;jR(e);)try{const i=await wR(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,BR(e,i)}catch(i){await Hl(e,i)}yE(e)&&_E(e)}function jR(t){return ai(t)&&t.Ta.length<10}function BR(t,e){t.Ta.push(e);const n=kr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function yE(t){return ai(t)&&!kr(t).x_()&&t.Ta.length>0}function _E(t){kr(t).start()}async function $R(t){kr(t).ra()}async function HR(t){const e=kr(t);for(const n of t.Ta)e.ea(n.mutations)}async function WR(t,e,n){const r=t.Ta.shift(),i=lf.from(r,e,n);await gE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Iu(t)}async function qR(t,e){e&&kr(t).Y_&&await async function(r,i){if(function(o){return A2(o)&&o!==O.ABORTED}(i.code)){const s=r.Ta.shift();kr(r).B_(),await gE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Iu(r)}}(t,e),yE(t)&&_E(t)}async function Hg(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),B(ti,"RemoteStore received new credentials");const r=ai(n);n.Ea.add(3),await Jo(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Tu(n)}async function GR(t,e){const n=Z(t);e?(n.Ea.delete(2),await Tu(n)):e||(n.Ea.add(2),await Jo(n),n.Va.set("Unknown"))}function ds(t){return t.ma||(t.ma=function(n,r,i){const s=Z(n);return s.sa(),new xR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:LR.bind(null,t),Yo:FR.bind(null,t),t_:UR.bind(null,t),J_:zR.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),_f(t)?yf(t):t.Va.set("Unknown")):(await t.ma.stop(),mE(t))})),t.ma}function kr(t){return t.fa||(t.fa=function(n,r,i){const s=Z(n);return s.sa(),new NR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:$R.bind(null,t),t_:qR.bind(null,t),ta:HR.bind(null,t),na:WR.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Iu(t)):(await t.fa.stop(),t.Ta.length>0&&(B(ti,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new yr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new vf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ef(t,e){if(On("AsyncQueue",`${e}: ${t}`),hs(t))return new H(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{static emptySet(e){return new ji(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=Hs(),this.sortedSet=new ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ji)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ji;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this.ga=new ke(G.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):K(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class ts{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ts(e,n,ji.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class QR{constructor(){this.queries=qg(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=qg(),s.forEach((o,l)=>{for(const u of l.ba)u.onError(r)})})(this,new H(O.ABORTED,"Firestore shutting down"))}}function qg(){return new si(t=>F0(t),gu)}async function vE(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.Da()&&(r=2):(s=new KR,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Ef(o,`Initialization of query '${mi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.ba.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&wf(n)}async function EE(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.ba.indexOf(e);o>=0&&(s.ba.splice(o,1),s.ba.length===0?i=e.Da()?0:1:!s.Sa()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function JR(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.ba)l.Fa(i)&&(r=!0);o.wa=i}}r&&wf(n)}function YR(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.ba)s.onError(n);r.queries.delete(e)}function wf(t){t.Ca.forEach(e=>{e.next()})}var Bh,Gg;(Gg=Bh||(Bh={})).Ma="default",Gg.Cache="cache";class wE{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ts(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=ts.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Bh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e){this.key=e}}class IE{constructor(e){this.key=e}}class XR{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ie(),this.mutatedKeys=ie(),this.eu=U0(e),this.tu=new ji(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new Wg,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const g=i.get(f),A=yu(this.query,p)?p:null,x=!!g&&this.mutatedKeys.has(g.key),V=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let M=!1;g&&A?g.data.isEqual(A.data)?x!==V&&(r.track({type:3,doc:A}),M=!0):this.su(g,A)||(r.track({type:2,doc:A}),M=!0,(u&&this.eu(A,u)>0||h&&this.eu(A,h)<0)&&(l=!0)):!g&&A?(r.track({type:0,doc:A}),M=!0):g&&!A&&(r.track({type:1,doc:g}),M=!0,(u||h)&&(l=!0)),M&&(A?(o=o.add(A),s=V?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Ss:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(A,x){const V=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{Vt:M})}};return V(A)-V(x)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,h=u!==this.Xa;return this.Xa=u,o.length!==0||h?{snapshot:new ts(this.query,e.tu,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Wg,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ie(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new IE(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new TE(r))}),n}cu(e){this.Za=e.ks,this.Ya=ie();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return ts.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Tf="SyncEngine";class ZR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class eP{constructor(e){this.key=e,this.hu=!1}}class tP{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new si(l=>F0(l),gu),this.Iu=new Map,this.Eu=new Set,this.Ru=new ke(G.comparator),this.Au=new Map,this.Vu=new hf,this.du={},this.mu=new Map,this.fu=es.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function nP(t,e,n=!0){const r=PE(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await SE(r,e,n,!0),i}async function rP(t,e){const n=PE(t);await SE(n,e,!0,!1)}async function SE(t,e,n,r){const i=await TR(t.localStore,un(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await iP(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&fE(t.remoteStore,i),l}async function iP(t,e,n,r,i){t.pu=(p,g,A)=>async function(V,M,I,E){let C=M.view.ru(I);C.Ss&&(C=await Ug(V.localStore,M.query,!1).then(({documents:_})=>M.view.ru(_,C)));const D=E&&E.targetChanges.get(M.targetId),F=E&&E.targetMismatches.get(M.targetId)!=null,z=M.view.applyChanges(C,V.isPrimaryClient,D,F);return Qg(V,M.targetId,z.au),z.snapshot}(t,p,g,A);const s=await Ug(t.localStore,e,!0),o=new XR(e,s.ks),l=o.ru(s.documents),u=Qo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);Qg(t,n,h.au);const f=new ZR(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function sP(t,e,n){const r=Z(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!gu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await zh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&mf(r.remoteStore,i.targetId),$h(r,i.targetId)}).catch(cs)):($h(r,i.targetId),await zh(r.localStore,i.targetId,!0))}async function oP(t,e){const n=Z(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),mf(n.remoteStore,r.targetId))}async function aP(t,e,n){const r=pP(t);try{const i=await function(o,l){const u=Z(o),h=ye.now(),f=l.reduce((A,x)=>A.add(x.key),ie());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let x=Mn(),V=ie();return u.xs.getEntries(A,f).next(M=>{x=M,x.forEach((I,E)=>{E.isValidDocument()||(V=V.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,x)).next(M=>{p=M;const I=[];for(const E of l){const C=w2(E,p.get(E.key).overlayedDocument);C!=null&&I.push(new oi(E.key,C,N0(C.value.mapValue),cn.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,I,l)}).next(M=>{g=M;const I=M.applyToLocalDocumentSet(p,V);return u.documentOverlayCache.saveOverlays(A,M.batchId,I)})}).then(()=>({batchId:g.batchId,changes:j0(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.du[o.currentUser.toKey()];h||(h=new ke(re)),h=h.insert(l,u),o.du[o.currentUser.toKey()]=h}(r,i.batchId,n),await Yo(r,i.changes),await Iu(r.remoteStore)}catch(i){const s=Ef(i,"Failed to persist write");n.reject(s)}}async function kE(t,e){const n=Z(t);try{const r=await vR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?ue(o.hu,14607):i.removedDocuments.size>0&&(ue(o.hu,42227),o.hu=!1))}),await Yo(n,r,e)}catch(r){await cs(r)}}function Kg(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const g of p.ba)g.va(l)&&(h=!0)}),h&&wf(u)}(r.eventManager,e),i.length&&r.Pu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function lP(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new ke(G.comparator);o=o.insert(s,it.newNoDocument(s,Y.min()));const l=ie().add(s),u=new Eu(Y.min(),new Map,new ke(re),o,l);await kE(r,u),r.Ru=r.Ru.remove(s),r.Au.delete(e),If(r)}else await zh(r.localStore,e,!1).then(()=>$h(r,e,n)).catch(cs)}async function uP(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await _R(n.localStore,e);CE(n,r,null),AE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Yo(n,i)}catch(i){await cs(i)}}async function cP(t,e,n){const r=Z(t);try{const i=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(ue(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);CE(r,e,n),AE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Yo(r,i)}catch(i){await cs(i)}}function AE(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function CE(t,e,n){const r=Z(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function $h(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||RE(t,r)})}function RE(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(mf(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),If(t))}function Qg(t,e,n){for(const r of n)r instanceof TE?(t.Vu.addReference(r.key,e),hP(t,r)):r instanceof IE?(B(Tf,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||RE(t,r.key)):K(19791,{wu:r})}function hP(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(B(Tf,"New document in limbo: "+n),t.Eu.add(r),If(t))}function If(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new G(ge.fromString(e)),r=t.fu.next();t.Au.set(r,new eP(n)),t.Ru=t.Ru.insert(n,r),fE(t.remoteStore,new ir(un(mu(n.path)),r,"TargetPurposeLimboResolution",hu.ce))}}async function Yo(t,e,n){const r=Z(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=ff.Es(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Pu.J_(i),await async function(u,h){const f=Z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>b.forEach(h,g=>b.forEach(g.Ts,A=>f.persistence.referenceDelegate.addReference(p,g.targetId,A)).next(()=>b.forEach(g.Is,A=>f.persistence.referenceDelegate.removeReference(p,g.targetId,A)))))}catch(p){if(!hs(p))throw p;B(pf,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const A=f.vs.get(g),x=A.snapshotVersion,V=A.withLastLimboFreeSnapshotVersion(x);f.vs=f.vs.insert(g,V)}}}(r.localStore,s))}async function dP(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){B(Tf,"User change. New user:",e.toKey());const r=await uE(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new H(O.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Yo(n,r.Ns)}}function fP(t,e){const n=Z(t),r=n.Au.get(e);if(r&&r.hu)return ie().add(r.key);{let i=ie();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function PE(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=kE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lP.bind(null,e),e.Pu.J_=JR.bind(null,e.eventManager),e.Pu.yu=YR.bind(null,e.eventManager),e}function pP(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=uP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cP.bind(null,e),e}class Wl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=wu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return yR(this.persistence,new pR,e.initialUser,this.serializer)}Cu(e){return new lE(df.Vi,this.serializer)}Du(e){return new SR}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Wl.provider={build:()=>new Wl};class mP extends Wl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ue(this.persistence.referenceDelegate instanceof $l,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Z2(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?mt.withCacheSize(this.cacheSizeBytes):mt.DEFAULT;return new lE(r=>$l.Vi(r,n),this.serializer)}}class Hh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Kg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=dP.bind(null,this.syncEngine),await GR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new QR}()}createDatastore(e){const n=wu(e.databaseInfo.databaseId),r=PR(e.databaseInfo);return bR(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new MR(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Kg(this.syncEngine,n,0),function(){return Bg.v()?new Bg:new kR}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const p=new tP(i,s,o,l,u,h);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);B(ti,"RemoteStore shutting down."),s.Ea.add(5),await Jo(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Hh.provider={build:()=>new Hh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):On("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="FirestoreClient";class gP{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=nt.UNAUTHENTICATED,this.clientId=Xd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{B(Ar,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(B(Ar,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ef(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Rc(t,e){t.asyncQueue.verifyOperationInProgress(),B(Ar,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await uE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Jg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await yP(t);B(Ar,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Hg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Hg(e.remoteStore,i)),t._onlineComponents=e}async function yP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B(Ar,"Using user provided OfflineComponentProvider");try{await Rc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ei("Error using user provided cache. Falling back to memory cache: "+n),await Rc(t,new Wl)}}else B(Ar,"Using default OfflineComponentProvider"),await Rc(t,new mP(void 0));return t._offlineComponents}async function NE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B(Ar,"Using user provided OnlineComponentProvider"),await Jg(t,t._uninitializedComponentsProvider._online)):(B(Ar,"Using default OnlineComponentProvider"),await Jg(t,new Hh))),t._onlineComponents}function _P(t){return NE(t).then(e=>e.syncEngine)}async function Wh(t){const e=await NE(t),n=e.eventManager;return n.onListen=nP.bind(null,e.syncEngine),n.onUnlisten=sP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=rP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=oP.bind(null,e.syncEngine),n}function vP(t,e,n,r){const i=new xE(r),s=new wE(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>vE(await Wh(t),s)),()=>{i.Nu(),t.asyncQueue.enqueueAndForget(async()=>EE(await Wh(t),s))}}function EP(t,e,n={}){const r=new yr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new xE({next:g=>{f.Nu(),o.enqueueAndForget(()=>EE(s,p));const A=g.docs.has(l);!A&&g.fromCache?h.reject(new H(O.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&g.fromCache&&u&&u.source==="server"?h.reject(new H(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new wE(mu(l.path),f,{includeMetadataChanges:!0,Ka:!0});return vE(s,p)}(await Wh(t),t.asyncQueue,e,n,r)),r.promise}function wP(t,e){const n=new yr;return t.asyncQueue.enqueueAndForget(async()=>aP(await _P(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP="ComponentProvider",Yg=new Map;function IP(t,e,n,r,i){return new $C(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,VE(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE="firestore.googleapis.com",Xg=!0;class Zg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new H(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=DE,this.ssl=Xg}else this.host=e.host,this.ssl=e.ssl??Xg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=aE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Y2)throw new H(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}VC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=VE(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new H(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new H(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new H(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Su{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new TC;switch(r.type){case"firstParty":return new AC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Yg.get(n);r&&(B(TP,"Removing Datastore"),Yg.delete(n),r.terminate())}(this),Promise.resolve()}}function SP(t,e,n,r={}){var h;t=An(t,Su);const i=os(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(Cv(`https://${l}`),Rv("Firestore",!0)),s.host!==DE&&s.host!==l&&ei("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!Jr(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=nt.MOCK_USER;else{f=HI(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new H(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new nt(g)}t._authCredentials=new IC(new v0(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ku(this.firestore,e,this._query)}}class De{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _r(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new De(this.firestore,e,this._key)}toJSON(){return{type:De._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Go(n,De._jsonSchema))return new De(e,r||null,new G(ge.fromString(n.referencePath)))}}De._jsonSchemaVersion="firestore/documentReference/1.0",De._jsonSchema={type:Ve("string",De._jsonSchemaVersion),referencePath:Ve("string")};class _r extends ku{constructor(e,n,r){super(e,n,mu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new De(this.firestore,null,new G(e))}withConverter(e){return new _r(this.firestore,e,this._path)}}function kP(t,e,...n){if(t=Ct(t),E0("collection","path",e),t instanceof Su){const r=ge.fromString(e,...n);return fg(r),new _r(t,null,r)}{if(!(t instanceof De||t instanceof _r))throw new H(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return fg(r),new _r(t.firestore,null,r)}}function ey(t,e,...n){if(t=Ct(t),arguments.length===1&&(e=Xd.newId()),E0("doc","path",e),t instanceof Su){const r=ge.fromString(e,...n);return dg(r),new De(t,null,new G(r))}{if(!(t instanceof De||t instanceof _r))throw new H(O.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return dg(r),new De(t.firestore,t instanceof _r?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="AsyncQueue";class ny{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new hE(this,"async_queue_retry"),this._c=()=>{const r=Cc();r&&B(ty,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Cc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Cc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new yr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!hs(e))throw e;B(ty,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,On("INTERNAL UNHANDLED ERROR: ",ry(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=vf.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&K(47125,{Pc:ry(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function ry(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ns extends Su{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new ny,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ny(e),this._firestoreClient=void 0,await e}}}function iy(t,e){const n=Vv(),r=Ml,i=Bd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=BI("firestore");s&&SP(i,...s)}return i}function Sf(t){if(t._terminated)throw new H(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||AP(t),t._firestoreClient}function AP(t){var r,i,s,o;const e=t._freezeSettings(),n=IP(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new gP(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bt(Ye.fromBase64String(e))}catch(n){throw new H(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bt(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:bt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Go(e,bt._jsonSchema))return bt.fromBase64String(e.bytes)}}bt._jsonSchemaVersion="firestore/bytes/1.0",bt._jsonSchema={type:Ve("string",bt._jsonSchemaVersion),bytes:Ve("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:dn._jsonSchemaVersion}}static fromJSON(e){if(Go(e,dn._jsonSchema))return new dn(e.latitude,e.longitude)}}dn._jsonSchemaVersion="firestore/geoPoint/1.0",dn._jsonSchema={type:Ve("string",dn._jsonSchemaVersion),latitude:Ve("number"),longitude:Ve("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Kt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Go(e,Kt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Kt(e.vectorValues);throw new H(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Kt._jsonSchemaVersion="firestore/vectorValue/1.0",Kt._jsonSchema={type:Ve("string",Kt._jsonSchemaVersion),vectorValues:Ve("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP=/^__.*__$/;class RP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new oi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ko(e,this.data,n,this.fieldTransforms)}}function ME(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{dataSource:t})}}class kf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new kf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return ql(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(ME(this.dataSource)&&CP.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class PP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||wu(e)}createContext(e,n,r,i=!1){return new kf({dataSource:e,methodName:n,targetDoc:r,path:Ke.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xP(t){const e=t._freezeSettings(),n=wu(t._databaseId);return new PP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function NP(t,e,n,r,i,s={}){const o=t.createContext(s.merge||s.mergeFields?2:0,e,n,i);zE("Data must be an object, but it was:",o,r);const l=FE(r,o);let u,h;if(s.merge)u=new Wt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const g=Af(e,p,n);if(!o.contains(g))throw new H(O.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);bP(f,g)||f.push(g)}u=new Wt(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new RP(new Dt(l),u,h)}function LE(t,e){if(UE(t=Ct(t)))return zE("Unsupported field value:",e,t),FE(t,e);if(t instanceof OE)return function(r,i){if(!ME(i.dataSource))throw i.createError(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=LE(l,i.childContextForArray(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ct(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return m2(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ye.fromDate(r);return{timestampValue:Bl(i.serializer,s)}}if(r instanceof ye){const s=new ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Bl(i.serializer,s)}}if(r instanceof dn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bt)return{bytesValue:Z0(i.serializer,r._byteString)};if(r instanceof De){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:cf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Kt)return function(o,l){const u=o instanceof Kt?o.toArray():o;return{mapValue:{fields:{[P0]:{stringValue:x0},[Ll]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.createError("VectorValues must only contain numeric values.");return of(l.serializer,f)})}}}}}}(r,i);if(oE(r))return r._toProto(i.serializer);throw i.createError(`Unsupported field value: ${Zd(r)}`)}(t,e)}function FE(t,e){const n={};return I0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ii(t,(r,i)=>{const s=LE(i,e.childContextForField(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function UE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ye||t instanceof dn||t instanceof bt||t instanceof De||t instanceof OE||t instanceof Kt||oE(t))}function zE(t,e,n){if(!UE(n)||!w0(n)){const r=Zd(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function Af(t,e,n){if((e=Ct(e))instanceof bE)return e._internalPath;if(typeof e=="string")return DP(t,e);throw ql("Field path arguments must be of type string or ",t,!1,void 0,n)}const VP=new RegExp("[~\\*/\\[\\]]");function DP(t,e,n){if(e.search(VP)>=0)throw ql(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bE(...e.split("."))._internalPath}catch{throw ql(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ql(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(O.INVALID_ARGUMENT,l+t+u)}function bP(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{convertValue(e,n="none"){switch(Sr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ir(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ii(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Ll].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Re(o.doubleValue));return new Kt(n)}convertGeoPoint(e){return new dn(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=fu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(xo(e));default:return null}}convertTimestamp(e){const n=Tr(e);return new ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);ue(sE(r),9688,{name:e});const i=new No(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||On(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE extends OP{constructor(e){super(),this.firestore=e}convertBytes(e){return new bt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new De(this.firestore,null,n)}}const sy="@firebase/firestore",oy="4.11.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new De(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Af("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class MP extends BE{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function FP(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class qs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Hr extends BE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new nl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Af("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Hr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Hr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Hr._jsonSchema={type:Ve("string",Hr._jsonSchemaVersion),bundleSource:Ve("string","DocumentSnapshot"),bundleName:Ve("string"),bundle:Ve("string")};class nl extends Hr{data(e={}){return super.data(e)}}class Bi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new qs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new nl(this._firestore,this._userDataWriter,r.key,r,new qs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new nl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new qs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new nl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new qs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:UP(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Bi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Xd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function UP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bi._jsonSchemaVersion="firestore/querySnapshot/1.0",Bi._jsonSchema={type:Ve("string",Bi._jsonSchemaVersion),bundleSource:Ve("string","QuerySnapshot"),bundleName:Ve("string"),bundle:Ve("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zP(t){t=An(t,De);const e=An(t.firestore,ns),n=Sf(e);return EP(n,t._key).then(r=>HE(e,t,r))}function jP(t,e,n){t=An(t,De);const r=An(t.firestore,ns),i=FP(t.converter,e),s=xP(r);return $E(r,[NP(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,cn.none())])}function BP(t){return $E(An(t.firestore,ns),[new af(t._key,cn.none())])}function $P(t,...e){var h,f,p;t=Ct(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||ay(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(ay(e[r])){const g=e[r];e[r]=(h=g.next)==null?void 0:h.bind(g),e[r+1]=(f=g.error)==null?void 0:f.bind(g),e[r+2]=(p=g.complete)==null?void 0:p.bind(g)}let s,o,l;if(t instanceof De)o=An(t.firestore,ns),l=mu(t._key.path),s={next:g=>{e[r]&&e[r](HE(o,t,g))},error:e[r+1],complete:e[r+2]};else{const g=An(t,ku);o=An(g.firestore,ns),l=g._query;const A=new jE(o);s={next:x=>{e[r]&&e[r](new Bi(o,A,g,x))},error:e[r+1],complete:e[r+2]},LP(t._query)}const u=Sf(o);return vP(u,l,i,s)}function $E(t,e){const n=Sf(t);return wP(n,e)}function HE(t,e,n){const r=n.docs.get(e._key),i=new jE(t);return new Hr(t,i,e._key,r,new qs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){wC(as),Ji(new Yr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ns(new SC(r.getProvider("auth-internal")),new CC(o,r.getProvider("app-check-internal")),HC(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),mr(sy,oy,e),mr(sy,oy,"esm2020")})();const HP={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_CONFIG:"",VITE_GEMINI_API_KEY:"AIzaSyC8SIyoU2jeu7wXwECF0bNHDatbQJKiluU"},li=typeof import.meta<"u"&&HP&&"AIzaSyC8SIyoU2jeu7wXwECF0bNHDatbQJKiluU"||"",WP=t=>{const e=window.atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n.buffer},qP=(t,e)=>{const n=new ArrayBuffer(44+t.length*2),r=new DataView(n),i=(s,o)=>{for(let l=0;l<o.length;l++)r.setUint8(s+l,o.charCodeAt(l))};i(0,"RIFF"),r.setUint32(4,36+t.length*2,!0),i(8,"WAVE"),i(12,"fmt "),r.setUint32(16,16,!0),r.setUint16(20,1,!0),r.setUint16(22,1,!0),r.setUint32(24,e,!0),r.setUint32(28,e*2,!0),r.setUint16(32,2,!0),r.setUint16(34,16,!0),i(36,"data"),r.setUint32(40,t.length*2,!0);for(let s=0;s<t.length;s++)r.setInt16(44+s*2,t[s],!0);return new Blob([n],{type:"audio/wav"})},lo=t=>{typeof window<"u"&&window.navigator&&window.navigator.vibrate&&window.navigator.vibrate(t)},WE=async(t,e=0)=>{var r,i,s,o,l;const n={contents:[{parts:[{text:t}]}],generationConfig:{responseModalities:["AUDIO"],speechConfig:{voiceConfig:{prebuiltVoiceConfig:{voiceName:"Kore"}}}}};try{const h=await(await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${li}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json(),f=(o=(s=(i=(r=h==null?void 0:h.candidates)==null?void 0:r[0])==null?void 0:i.content)==null?void 0:s.parts)==null?void 0:o.find(p=>p.inlineData);if((l=f==null?void 0:f.inlineData)!=null&&l.data){const p=new Int16Array(WP(f.inlineData.data));return URL.createObjectURL(qP(p,24e3))}throw new Error("No audio")}catch(u){if(e<2)return WE(t,e+1);throw u}},GP=async t=>{const e=`Write a short 2-sentence story for kids using character '${t.kannada}'. Output JSON format: { 
    "kannada_story": "string", 
    "hindi_script_story": "string (PHONETIC sound of the story in Hindi script, NOT translation)", 
    "hindi_translation": "string (Actual meaning in Hindi language)" 
  }`,r=await(await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${li}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:e}]}],generationConfig:{responseMimeType:"application/json"}})})).json();return JSON.parse(r.candidates[0].content.parts[0].text)},KP=async t=>{const e=`Generate a simple Kannada sentence with character '${t.kannada}'. Output JSON format: { 
    "sentence": "string (Kannada Script)", 
    "hindi_script_representation": "string (PHONETIC transcription of the Kannada sentence into Hindi letters - exactly how it sounds, NOT the translation)", 
    "transliteration": "string (English script sounds)", 
    "hindi_translation": "string (Actual meaning in Hindi language)" 
  }`,r=await(await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${li}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:e}]}],generationConfig:{responseMimeType:"application/json"}})})).json();return JSON.parse(r.candidates[0].content.parts[0].text)},QP=async(t,e)=>{const n=`Rate Kannada letter '${e.kannada}' handwriting 1-5. Tip in Hindi. JSON: { "rating": number, "feedback": "string" }`,i=await(await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${li}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:n},{inlineData:{mimeType:"image/png",data:t}}]}],generationConfig:{responseMimeType:"application/json"}})})).json();return JSON.parse(i.candidates[0].content.parts[0].text)},JP=async t=>{const e=`Mnemonic & 2 words for Kannada '${t.kannada}'. Hindi explanations. JSON: { "mnemonic": "string", "words": [{ "kannada": "string", "meaning": "string", "english_pronunciation": "string", "hindi_pronunciation": "string" }] }`,r=await(await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${li}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:e}]}],generationConfig:{responseMimeType:"application/json"}})})).json();return JSON.parse(r.candidates[0].content.parts[0].text)},YP=async t=>{const e=`Similar Kannada char to '${t.kannada}'. Diff in Hindi. JSON: { "similar_char": "string", "difference": "string" }`,r=await(await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${li}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:e}]}],generationConfig:{responseMimeType:"application/json"}})})).json();return JSON.parse(r.candidates[0].content.parts[0].text)},XP=async t=>{const e=`Create a MCQ for Kannada '${t.kannada}'. Expl in Hindi. JSON: { "question": "string", "options": ["string", "string", "string", "string"], "correctIndex": number, "explanation": "string" }`,r=await(await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${li}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:e}]}],generationConfig:{responseMimeType:"application/json"}})})).json();return JSON.parse(r.candidates[0].content.parts[0].text)},Tt=[{id:"v1",hindi:"अ",kannada:"ಅ",trans:"a",type:"vowel",subgroup:"Vowels"},{id:"v2",hindi:"आ",kannada:"ಆ",trans:"aa",type:"vowel",subgroup:"Vowels"},{id:"v3",hindi:"इ",kannada:"ಇ",trans:"i",type:"vowel",subgroup:"Vowels"},{id:"v4",hindi:"ई",kannada:"ಈ",trans:"ii",type:"vowel",subgroup:"Vowels"},{id:"v5",hindi:"उ",kannada:"ಉ",trans:"u",type:"vowel",subgroup:"Vowels"},{id:"v6",hindi:"ऊ",kannada:"ಊ",trans:"uu",type:"vowel",subgroup:"Vowels"},{id:"v7",hindi:"ऋ",kannada:"ಋ",trans:"ru",type:"vowel",subgroup:"Vowels"},{id:"v8",hindi:"ए",kannada:"ಎ",trans:"e",type:"vowel",subgroup:"Vowels",vowelType:"Short"},{id:"v9",hindi:"ए",kannada:"ಏ",trans:"ee",type:"vowel",subgroup:"Vowels",vowelType:"Long"},{id:"v10",hindi:"ऐ",kannada:"ಐ",trans:"ai",type:"vowel",subgroup:"Vowels"},{id:"v11",hindi:"ओ",kannada:"ಒ",trans:"o",type:"vowel",subgroup:"Vowels",vowelType:"Short"},{id:"v12",hindi:"ओ",kannada:"ಓ",trans:"oo",type:"vowel",subgroup:"Vowels",vowelType:"Long"},{id:"v13",hindi:"औ",kannada:"ಔ",trans:"au",type:"vowel",subgroup:"Vowels"},{id:"v14",hindi:"अं",kannada:"ಅಂ",trans:"am",type:"vowel",subgroup:"Vowels"},{id:"v15",hindi:"अः",kannada:"ಅಃ",trans:"ah",type:"vowel",subgroup:"Vowels"},{id:"c1",hindi:"क",kannada:"ಕ",trans:"ka",type:"consonant",subgroup:"Ka-Varga (क-वर्ग)"},{id:"c2",hindi:"ख",kannada:"ಖ",trans:"kha",type:"consonant",subgroup:"Ka-Varga (क-वर्ग)"},{id:"c3",hindi:"ग",kannada:"ಗ",trans:"ga",type:"consonant",subgroup:"Ka-Varga (क-वर्ग)"},{id:"c4",hindi:"घ",kannada:"ಘ",trans:"gha",type:"consonant",subgroup:"Ka-Varga (क-वर्ग)"},{id:"c5",hindi:"ङ",kannada:"ಙ",trans:"nga",type:"consonant",subgroup:"Ka-Varga (क-वर्ग)"},{id:"c6",hindi:"च",kannada:"ಚ",trans:"cha",type:"consonant",subgroup:"Cha-Varga (च-वर्ग)"},{id:"c7",hindi:"छ",kannada:"ಛ",trans:"chha",type:"consonant",subgroup:"Cha-Varga (च-वर्ग)"},{id:"c8",hindi:"ज",kannada:"ಜ",trans:"ja",type:"consonant",subgroup:"Cha-Varga (च-वर्ग)"},{id:"c9",hindi:"झ",kannada:"ಝ",trans:"jha",type:"consonant",subgroup:"Cha-Varga (च-वर्ग)"},{id:"c10",hindi:"ञ",kannada:"ಞ",trans:"nya",type:"consonant",subgroup:"Cha-Varga (च-वर्ग)"},{id:"c11",hindi:"ट",kannada:"ಟ",trans:"ta",type:"consonant",subgroup:"Ta-Varga (ट-वर्ग)"},{id:"c12",hindi:"ठ",kannada:"ಠ",trans:"tha",type:"consonant",subgroup:"Ta-Varga (ट-वर्ग)"},{id:"c13",hindi:"ड",kannada:"ಡ",trans:"da",type:"consonant",subgroup:"Ta-Varga (ट-वर्ग)"},{id:"c14",hindi:"ढ",kannada:"ಢ",trans:"dha",type:"consonant",subgroup:"Ta-Varga (ट-वर्ग)"},{id:"c15",hindi:"ण",kannada:"ಣ",trans:"na",type:"consonant",subgroup:"Ta-Varga (ट-वर्ग)"},{id:"c16",hindi:"त",kannada:"ತ",trans:"ta",type:"consonant",subgroup:"Ta-Varga (त-वर्ग)"},{id:"c17",hindi:"थ",kannada:"ಥ",trans:"tha",type:"consonant",subgroup:"Ta-Varga (त-वर्ग)"},{id:"c18",hindi:"द",kannada:"ದ",trans:"da",type:"consonant",subgroup:"Ta-Varga (त-वर्ग)"},{id:"c19",hindi:"ध",kannada:"ಧ",trans:"dha",type:"consonant",subgroup:"Ta-Varga (त-वर्ग)"},{id:"c20",hindi:"न",kannada:"ನ",trans:"na",type:"consonant",subgroup:"Ta-Varga (त-वर्ग)"},{id:"c21",hindi:"प",kannada:"ಪ",trans:"pa",type:"consonant",subgroup:"Pa-Varga (प-वर्ग)"},{id:"c22",hindi:"फ",kannada:"ಫ",trans:"pha",type:"consonant",subgroup:"Pa-Varga (प-वर्ग)"},{id:"c23",hindi:"ब",kannada:"ಬ",trans:"ba",type:"consonant",subgroup:"Pa-Varga (प-वर्ग)"},{id:"c24",hindi:"भ",kannada:"ಭ",trans:"bha",type:"consonant",subgroup:"Pa-Varga (प-वर्ग)"},{id:"c25",hindi:"म",kannada:"ಮ",trans:"ma",type:"consonant",subgroup:"Pa-Varga (प-वर्ग)"},{id:"c26",hindi:"य",kannada:"ಯ",trans:"ya",type:"consonant",subgroup:"Misc (अन्य)"},{id:"c27",hindi:"र",kannada:"ರ",trans:"ra",type:"consonant",subgroup:"Misc (अन्य)"},{id:"c28",hindi:"ल",kannada:"ಲ",trans:"la",type:"consonant",subgroup:"Misc (अन्य)"},{id:"c29",hindi:"व",kannada:"ವ",trans:"va",type:"consonant",subgroup:"Misc (अन्य)"},{id:"c30",hindi:"श",kannada:"ಶ",trans:"sha",type:"consonant",subgroup:"Misc (अन्य)"},{id:"c31",hindi:"ष",kannada:"ಷ",trans:"sha",type:"consonant",subgroup:"Misc (अन्य)"},{id:"c32",hindi:"स",kannada:"ಸ",trans:"sa",type:"consonant",subgroup:"Misc (अन्य)"},{id:"c33",hindi:"ह",kannada:"ಹ",trans:"ha",type:"consonant",subgroup:"Misc (अन्य)"},{id:"c34",hindi:"ळ",kannada:"ಳ",trans:"la",type:"consonant",subgroup:"Misc (अन्य)"}],ZP=ae.forwardRef(({character:t,onClear:e,theme:n},r)=>{const i=ae.useRef(null),s=ae.useRef(null),[o,l]=ae.useState(!1);ae.useImperativeHandle(r,()=>({getCanvasImage:()=>{const f=i.current;if(!f)return null;const p=document.createElement("canvas").getContext("2d");return p.canvas.width=f.width,p.canvas.height=f.height,p.fillStyle="#ffffff",p.fillRect(0,0,f.width,f.height),p.drawImage(f,0,0),p.canvas.toDataURL("image/png").split(",")[1]},clear:()=>{i.current&&i.current.getContext("2d").clearRect(0,0,9999,9999),lo(30)}})),ae.useEffect(()=>{if(!s.current||!i.current)return;const f=()=>{if(!s.current||!i.current)return;const g=i.current,A=window.devicePixelRatio||1,x=s.current.getBoundingClientRect();if(x.width===0||x.height===0)return;g.width=x.width*A,g.height=x.height*A;const V=g.getContext("2d");V.scale(A,A),V.lineCap="round",V.lineJoin="round",V.strokeStyle=n==="dark"?"#818cf8":"#2563eb",V.lineWidth=18},p=new ResizeObserver(f);return p.observe(s.current),f(),()=>p.disconnect()},[t,n]);const u=f=>{if(f.preventDefault(),!i.current)return;lo(15);const p=i.current.getBoundingClientRect(),g=(f.type.includes("touch")?f.touches[0].clientX:f.clientX)-p.left,A=(f.type.includes("touch")?f.touches[0].clientY:f.clientY)-p.top,x=i.current.getContext("2d");x.beginPath(),x.moveTo(g,A),l(!0)},h=f=>{if(!o||!i.current)return;f.preventDefault();const p=i.current.getBoundingClientRect(),g=(f.type.includes("touch")?f.touches[0].clientX:f.clientX)-p.left,A=(f.type.includes("touch")?f.touches[0].clientY:f.clientY)-p.top,x=i.current.getContext("2d");x.lineTo(g,A),x.stroke()};return R.createElement("div",{className:"flex flex-col items-center w-full px-2 mb-4 flex-none"},R.createElement("div",{ref:s,className:`relative w-full h-[320px] sm:h-[450px] rounded-3xl shadow-lg border-2 overflow-hidden select-none ${n==="dark"?"bg-slate-800 border-slate-700":"bg-white border-indigo-100"}`},R.createElement("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none"},R.createElement("span",{className:`font-bold transition-colors ${n==="dark"?"text-slate-700":"text-slate-50"}`,style:{fontSize:"260px",fontFamily:"serif"}},t)),R.createElement("canvas",{ref:i,onMouseDown:u,onMouseMove:h,onMouseUp:()=>l(!1),onMouseLeave:()=>l(!1),onTouchStart:u,onTouchMove:h,onTouchEnd:()=>l(!1),className:"absolute inset-0 w-full h-full cursor-crosshair touch-none z-10"}),R.createElement("button",{onClick:()=>{i.current&&(i.current.getContext("2d").clearRect(0,0,9999,9999),lo(30)),e&&e()},className:"absolute bottom-4 right-4 z-20 flex items-center gap-2 px-6 py-3 bg-slate-900/80 backdrop-blur text-white rounded-full text-sm font-bold shadow-2xl hover:bg-slate-700 active:scale-95 transition-all"},R.createElement(aI,{size:18})," Clear")))}),ex=({data:t,onClick:e,isCompleted:n,theme:r})=>R.createElement("button",{onClick:()=>e(t),className:`flex flex-col items-center justify-center p-2 sm:p-5 rounded-3xl shadow-sm border-2 transition-all group relative ${n?r==="dark"?"bg-green-900/20 border-green-800":"bg-green-50 border-green-200":r==="dark"?"bg-slate-800 border-slate-700 hover:border-indigo-500":"bg-white border-slate-100 hover:border-indigo-300"}`},R.createElement("div",{className:"flex flex-col items-center w-full"},R.createElement("div",{className:"flex items-center justify-center gap-3 sm:gap-6 mb-1"},R.createElement("span",{className:`text-lg sm:text-2xl font-serif font-medium ${r==="dark"?"text-slate-500":"text-slate-400"}`},t.hindi),R.createElement("div",{className:"relative"},R.createElement("span",{className:`text-3xl sm:text-5xl font-black group-hover:text-indigo-400 ${n?"text-green-700":r==="dark"?"text-slate-200":"text-slate-800"}`},t.kannada),t.vowelType&&R.createElement("span",{className:"absolute -top-2 -right-3 text-[9px] font-black uppercase text-indigo-500 tracking-tighter"},t.vowelType==="Short"?"1●":"2●"))),R.createElement("span",{className:`text-[10px] sm:text-xs font-mono font-bold tracking-widest ${r==="dark"?"text-slate-600":"text-slate-400"}`},"/",t.trans,"/")),n&&R.createElement("div",{className:"absolute top-2 right-2"},R.createElement(Ev,{size:14,className:"text-green-600 fill-green-100"})));function tx(){var Xo;const[t,e]=ae.useState("home"),[n,r]=ae.useState(null),[i,s]=ae.useState(null),[o,l]=ae.useState(!1),[u,h]=ae.useState(null),[f,p]=ae.useState({}),[g,A]=ae.useState(null),[x,V]=ae.useState(null),[M,I]=ae.useState({}),[E,C]=ae.useState({}),[D,F]=ae.useState(!1),[z,_]=ae.useState([]),[y,v]=ae.useState({target:null,options:[],wrongIds:[],isSolved:!1,isFirstAttempt:!0,isComplete:!1}),[T,S]=ae.useState({score:0,perfectGuesses:0,streak:0}),[k,w]=ae.useState("light"),[be,Ut]=ae.useState(0),Jt=ae.useRef(null),mn=ae.useRef(null),j=n?Tt.filter(W=>W.type===n):Tt,q=i?j.findIndex(W=>W.id===i.id):-1,X=q>0?j[q-1]:null,he=q<j.length-1?j[q+1]:null;ae.useEffect(()=>{if(!(typeof __firebase_config>"u"||!__firebase_config))try{const W=JSON.parse(__firebase_config),Q=Nv(W),se=vC(Q);(async()=>{typeof __initial_auth_token<"u"&&__initial_auth_token?await sA(se,__initial_auth_token):await eA(se)})(),lA(se,V)}catch(W){console.error("Firebase init failed:",W)}},[]),ae.useEffect(()=>{if(!x)return;const W=iy(),Q=typeof __app_id<"u"?__app_id:"default-app-id",se=$P(kP(W,"artifacts",Q,"users",x.uid,"progress"),We=>{const Un={};We.forEach(Zo=>Un[Zo.id]=!0),I(Un)}),lt=ey(W,"artifacts",Q,"users",x.uid,"profile","stats");return zP(lt).then(We=>{We.exists()&&Ut(We.data().streak||0)}),()=>se()},[x]),ae.useEffect(()=>{u&&mn.current&&mn.current.scrollIntoView({behavior:"smooth",block:"start"})},[u,f]);const Ee=W=>{s(W),p({}),h(null),A(null),e("practice")},gn=()=>{const W=n?Tt.filter(se=>se.type===n):Tt,Q={};return W.forEach(se=>{Q[se.subgroup]||(Q[se.subgroup]=[]),Q[se.subgroup].push(se)}),Q},at=W=>{const Q=n?Tt.filter(We=>We.type===n):Tt,lt=Q.findIndex(We=>We.id===i.id)+W;lt>=0&&lt<Q.length&&(Ee(Q[lt]),Jt.current&&Jt.current.clear())},yn=async W=>{if(E[i.id]){new Audio(E[i.id]).play();return}F(!0);try{const Q=await WE(W);C(se=>({...se,[i.id]:Q})),new Audio(Q).play()}catch{A("Audio failed.")}finally{F(!1)}},ze=async(W,Q)=>{A(null),h(W),l(!0);try{const se=await Q(i);p(lt=>({...lt,[W]:se}))}catch{A("AI error."),h(null)}finally{l(!1)}},Yt=async()=>{if(!x||!i)return;const W=iy(),se=ey(W,"artifacts",typeof __app_id<"u"?__app_id:"default-app-id","users",x.uid,"progress",i.id);M[i.id]?await BP(se):await jP(se,{learned:!0,updatedAt:new Date().toISOString()})},ui=()=>{const W=[...Tt].sort(()=>Math.random()-.5);_(W),fs(W),e("puzzle")},fs=(W=z)=>{if(W.length===0){v(We=>({...We,isComplete:!0}));return}const Q=W[0],se=W.slice(1);_(se);let lt=[Q];for(;lt.length<4;){const We=Tt[Math.floor(Math.random()*Tt.length)];lt.find(Un=>Un.id===We.id)||lt.push(We)}v({target:Q,options:lt.sort(()=>Math.random()-.5),wrongIds:[],isSolved:!1,isFirstAttempt:!0,isComplete:!1})},Au=W=>{W.id===y.target.id?(lo(50),S(Q=>({...Q,score:Q.score+2,perfectGuesses:Q.perfectGuesses+(y.isFirstAttempt?1:0),streak:Q.streak+1})),v(Q=>({...Q,isSolved:!0}))):(lo([100,50,100]),S(Q=>({...Q,score:Math.max(0,Q.score-1),streak:0})),v(Q=>({...Q,wrongIds:[...Q.wrongIds,W.id],isFirstAttempt:!1})))};return R.createElement("div",{className:`min-h-screen font-sans transition-colors duration-300 flex flex-col ${k==="dark"?"bg-slate-900 text-slate-100":"bg-slate-50 text-slate-800"}`},R.createElement("header",{className:`sticky top-0 z-30 shadow-sm px-4 h-16 flex items-center justify-between flex-none border-b ${k==="dark"?"bg-slate-800 border-slate-700":"bg-white border-slate-200"}`},R.createElement("div",{className:"flex items-center gap-2"},t!=="home"&&R.createElement("button",{onClick:()=>e(t==="list"?"home":"list"),className:"p-2 hover:bg-slate-700/50 rounded-full transition-colors"},R.createElement(Vm,{size:24})),R.createElement("h1",{className:"text-lg sm:text-xl font-bold bg-gradient-to-r from-indigo-500 to-violet-400 bg-clip-text text-transparent tracking-tight"},"Akshara Setu")),R.createElement("div",{className:"flex items-center gap-1 sm:gap-2"},t==="practice"&&i&&R.createElement("button",{onClick:Yt,className:`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border-2 text-xs sm:text-sm shadow-sm transition-all ${M[i.id]?"bg-green-500 border-green-400 text-white font-bold":k==="dark"?"bg-slate-700 border-slate-600 text-slate-400":"bg-white border-slate-200 text-slate-500"}`},M[i.id]?R.createElement(Ev,{size:16}):R.createElement("div",{className:"w-3 h-3 rounded-full border-2 border-slate-500"}),R.createElement("span",{className:"hidden sm:inline"},"Mastered")),R.createElement("button",{onClick:()=>w(k==="dark"?"light":"dark"),className:"p-2 rounded-full hover:bg-slate-700/30 transition-colors"},k==="dark"?R.createElement(AI,{size:20,className:"text-amber-400"}):R.createElement(gI,{size:20,className:"text-slate-400"})),R.createElement("button",{onClick:()=>{e("home"),r(null),s(null)},className:"p-2 text-slate-400 hover:text-indigo-500 transition-colors"},R.createElement(fI,{size:24})))),R.createElement("main",{className:"max-w-3xl mx-auto w-full px-3 py-4 flex-1 overflow-y-auto"},t==="home"&&R.createElement("div",{className:"space-y-4 sm:space-y-6 animate-in fade-in duration-300 pb-12"},R.createElement("div",{className:`p-4 sm:p-6 rounded-2xl shadow-sm border-2 flex items-center gap-4 sm:gap-5 ${k==="dark"?"bg-slate-800 border-slate-700":"bg-white border-slate-100"}`},R.createElement("div",{className:`p-3 sm:p-4 rounded-2xl flex items-center justify-center ${k==="dark"?"bg-indigo-900/30 text-indigo-400":"bg-green-100 text-green-600"}`},R.createElement(gc,{size:24})),R.createElement("div",{className:"flex-1"},R.createElement("div",{className:"flex justify-between text-[10px] sm:text-xs font-bold mb-1 sm:mb-2 text-slate-500 tracking-wider"},"LEARNING GOAL ",R.createElement("span",null,Object.keys(M).length," / ",Tt.length)),R.createElement("div",{className:`h-2 sm:h-3 rounded-full overflow-hidden ${k==="dark"?"bg-slate-700":"bg-slate-100"}`},R.createElement("div",{className:"h-full bg-indigo-500 transition-all duration-700 ease-out",style:{width:`${Object.keys(M).length/Tt.length*100}%`}}))),R.createElement("div",{className:"flex flex-col items-center px-2 sm:px-4 border-l border-slate-700"},R.createElement(uI,{className:"text-orange-500 fill-orange-500 animate-pulse",size:20}),R.createElement("span",{className:"text-base sm:text-lg font-black"},be))),R.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4"},R.createElement("button",{onClick:()=>{r("vowel"),e("list")},className:`p-6 sm:p-8 rounded-3xl border-2 text-left relative overflow-hidden group transition-all h-36 sm:h-44 shadow-lg ${k==="dark"?"bg-slate-800 border-slate-700 hover:border-indigo-500":"bg-white border-slate-100 hover:border-indigo-400"}`},R.createElement("div",{className:`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mb-2 sm:mb-4 ${k==="dark"?"bg-indigo-900/30 text-indigo-400":"bg-indigo-100 text-indigo-600"}`},R.createElement(KT,{size:24})),R.createElement("h3",{className:"text-xl sm:text-2xl font-bold"},"Vowels (Swar)"),R.createElement("p",{className:"text-xs sm:text-sm text-slate-500"},"ಅ - ಅಃ (15 Chars)"),R.createElement("span",{className:`absolute bottom-2 right-4 text-7xl sm:text-9xl opacity-5 font-serif select-none transition-transform group-hover:scale-110 pointer-events-none ${k==="dark"?"text-slate-200":"text-slate-900"}`},"ಅ")),R.createElement("button",{onClick:()=>{r("consonant"),e("list")},className:`p-6 sm:p-8 rounded-3xl border-2 text-left relative overflow-hidden group transition-all h-36 sm:h-44 shadow-lg ${k==="dark"?"bg-slate-800 border-slate-700 hover:border-orange-500":"bg-white border-slate-100 hover:border-orange-400"}`},R.createElement("div",{className:`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mb-2 sm:mb-4 ${k==="dark"?"bg-orange-900/30 text-orange-400":"bg-orange-100 text-orange-600"}`},R.createElement(_I,{size:24})),R.createElement("h3",{className:"text-xl sm:text-2xl font-bold"},"Consonants"),R.createElement("p",{className:"text-xs sm:text-sm text-slate-500"},"ಕ - ಳ (34 Chars)"),R.createElement("span",{className:`absolute bottom-2 right-4 text-7xl sm:text-9xl opacity-5 font-serif select-none transition-transform group-hover:scale-110 pointer-events-none ${k==="dark"?"text-slate-200":"text-slate-900"}`},"ಕ"))),R.createElement("button",{onClick:ui,className:"w-full bg-gradient-to-r from-indigo-600 to-violet-600 p-5 sm:p-6 rounded-3xl text-white flex items-center gap-4 shadow-2xl shadow-indigo-500/20 group hover:scale-[1.01] transition-all active:scale-95"},R.createElement("div",{className:"p-3 bg-white/20 rounded-2xl group-hover:rotate-12 transition-transform"},R.createElement(hI,{size:24})),R.createElement("div",{className:"text-left"},R.createElement("h4",{className:"font-bold text-lg sm:text-xl"},"Match Mastery"),R.createElement("p",{className:"text-xs sm:text-sm text-indigo-100 opacity-80"},"Test all 49 letters in a round")),R.createElement(Nm,{className:"ml-auto",size:20}))),t==="list"&&R.createElement("div",{className:"space-y-4 animate-in slide-in-from-right-4 duration-300 pb-12"},Object.entries(gn()).map(([W,Q])=>R.createElement("div",{key:W,className:"space-y-4"},R.createElement("h3",{className:`text-[10px] sm:text-xs font-bold uppercase tracking-widest pl-2 ${k==="dark"?"text-slate-500":"text-slate-400"}`},W),R.createElement("div",{className:"grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4"},Q.map(se=>R.createElement(ex,{key:se.id,data:se,onClick:Ee,isCompleted:!!M[se.id],theme:k})))))),t==="practice"&&i&&R.createElement("div",{className:"flex flex-col animate-in slide-in-from-bottom-4 duration-300 pb-24"},R.createElement("div",{className:"w-full flex items-center justify-between gap-2 max-w-lg mb-4 sm:mb-8"},R.createElement("button",{onClick:()=>at(-1),disabled:q===0,className:`w-14 h-14 sm:w-20 sm:h-20 flex flex-col items-center justify-center rounded-2xl border-2 shadow-md transition-all ${X?k==="dark"?"bg-slate-800 border-slate-700 text-slate-500":"bg-white text-indigo-400":"opacity-0 pointer-events-none"}`},R.createElement(Vm,{size:20}),X&&R.createElement("span",{className:`text-base sm:text-xl font-serif font-bold ${k==="dark"?"text-slate-400":"text-slate-700"}`},X.kannada)),R.createElement("div",{className:"text-center flex-1"},R.createElement("div",{className:"flex flex-col items-center"},R.createElement("div",{className:"flex items-center gap-3"},R.createElement("div",{className:"flex flex-col items-center"},R.createElement("span",{className:`text-4xl sm:text-6xl font-serif font-black ${k==="dark"?"text-slate-100":"text-slate-900"}`},i.hindi),i.vowelType&&R.createElement("div",{className:"flex items-center gap-1 bg-indigo-500/10 px-2 py-0.5 rounded-full"},R.createElement(Dm,{size:10,className:"text-indigo-500"}),R.createElement("span",{className:"text-[10px] font-black uppercase text-indigo-500 tracking-tighter"},i.vowelType==="Short"?"1 Beat":"2 Beats"))),R.createElement("div",{className:"flex items-center gap-2"},R.createElement("span",{className:"text-7xl sm:text-9xl text-indigo-500 font-serif font-black"},i.kannada),R.createElement("button",{onClick:()=>yn(i.kannada),disabled:D,className:`p-2 sm:p-3 rounded-2xl border-2 transition-all shadow-md ${k==="dark"?"bg-slate-800 border-slate-700 text-indigo-400 hover:bg-slate-700":"bg-white border-indigo-200 text-indigo-600 hover:bg-indigo-50"}`},D?R.createElement(bm,{className:"animate-spin",size:20}):R.createElement(NI,{size:24})))),R.createElement("div",{className:"flex items-center gap-3 mt-1"},R.createElement("span",{className:`px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold ${k==="dark"?"bg-indigo-950/40 text-indigo-400":"bg-indigo-100 text-indigo-600"}`},"/",i.trans,"/"),R.createElement("span",{className:`text-[9px] sm:text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${k==="dark"?"bg-slate-800 text-slate-500":"bg-slate-200 text-slate-400"}`},q+1," / ",j.length)))),R.createElement("button",{onClick:()=>at(1),disabled:q===j.length-1,className:`w-14 h-14 sm:w-20 sm:h-20 flex flex-col items-center justify-center rounded-2xl border-2 shadow-md transition-all ${he?k==="dark"?"bg-slate-800 border-slate-700 text-slate-500":"bg-white text-indigo-400":"opacity-0 pointer-events-none"}`},R.createElement(tI,{size:20}),he&&R.createElement("span",{className:`text-base sm:text-xl font-serif font-bold ${k==="dark"?"text-slate-400":"text-slate-700"}`},he.kannada))),R.createElement(ZP,{ref:Jt,character:i.kannada,theme:k}),R.createElement("div",{className:"w-full max-w-lg space-y-4 sm:space-y-6 pt-4 px-2"},R.createElement("div",{className:"grid grid-cols-3 sm:grid-cols-6 gap-2"},[{id:"tutor",icon:R.createElement(TI,{size:18}),label:"Explain",fn:()=>ze("tutor",JP)},{id:"story",icon:R.createElement(qT,{size:18}),label:"Story",fn:()=>ze("story",GP)},{id:"similar",icon:R.createElement(SI,{size:18}),label:"Similar",fn:()=>ze("similar",YP)},{id:"usage",icon:R.createElement(EI,{size:18}),label:"Usage",fn:()=>ze("usage",KP)},{id:"quiz",icon:R.createElement(JT,{size:18}),label:"Quiz",fn:()=>ze("quiz",XP)},{id:"feedback",icon:R.createElement(XT,{size:18}),label:"Verify",fn:async()=>ze("feedback",()=>QP(Jt.current.getCanvasImage(),i))}].map(W=>R.createElement("button",{key:W.id,onClick:W.fn,className:`flex flex-col items-center justify-center py-3 rounded-2xl border-2 transition-all active:scale-95 ${u===W.id?"bg-indigo-50 border-indigo-400 text-white shadow-xl":k==="dark"?"bg-slate-800 border-slate-700 text-slate-400 hover:border-indigo-500":"bg-white border-slate-100 text-slate-500 hover:border-indigo-300 shadow-sm"}`},W.icon,R.createElement("span",{className:"text-[8px] font-black mt-1 uppercase tracking-tighter"},W.label)))),o&&R.createElement("div",{className:"flex justify-center py-4"},R.createElement(bm,{className:"animate-spin text-indigo-400",size:32})),g&&R.createElement("div",{className:"p-3 bg-red-900/20 text-red-400 border-2 border-red-900/30 rounded-xl text-[10px] flex items-center gap-2"},R.createElement(rI,{size:16})," ",g),u&&R.createElement("div",{ref:mn,className:`p-5 sm:p-8 rounded-[2rem] border-2 shadow-xl animate-in slide-in-from-bottom-6 duration-300 ${k==="dark"?"bg-slate-800 border-slate-700":"bg-white border-slate-100"}`},u==="usage"&&f.usage&&R.createElement("div",{className:"text-center p-2 space-y-4 sm:space-y-6"},R.createElement("p",{className:"text-2xl sm:text-3xl font-serif text-indigo-500 font-black leading-tight"},f.usage.sentence),R.createElement("div",{className:`p-4 sm:p-6 rounded-[2rem] border-2 shadow-inner ${k==="dark"?"bg-slate-900/50 border-slate-700":"bg-slate-50 border-indigo-100"}`},R.createElement("p",{className:"text-[9px] sm:text-[10px] font-bold text-indigo-500 uppercase tracking-widest mb-2 sm:mb-3"},"Phonetic Guide (How it sounds)"),R.createElement("p",{className:`text-3xl sm:text-4xl font-black leading-relaxed ${k==="dark"?"text-white":"text-slate-950"}`},f.usage.hindi_script_representation)),R.createElement("div",{className:`p-4 rounded-2xl border-2 ${k==="dark"?"bg-indigo-900/20 border-indigo-800":"bg-cyan-50 border-cyan-100"}`},R.createElement("p",{className:"text-[9px] font-bold text-cyan-600 uppercase mb-1"},"Hindi Meaning (अर्थ)"),R.createElement("p",{className:`text-xl sm:text-2xl font-black ${k==="dark"?"text-indigo-300":"text-cyan-950"}`},f.usage.hindi_translation))),u==="tutor"&&f.tutor&&R.createElement("div",{className:"space-y-4"},R.createElement("p",{className:`italic text-lg sm:text-xl font-bold leading-relaxed ${k==="dark"?"text-slate-200":"text-slate-900"}`},'"',f.tutor.mnemonic,'"'),R.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3"},(Xo=f.tutor.words)==null?void 0:Xo.map((W,Q)=>R.createElement("div",{key:Q,className:`p-4 rounded-2xl border-2 ${k==="dark"?"bg-slate-700/50 border-slate-600":"bg-indigo-50 border-indigo-100"}`},R.createElement("div",{className:"font-bold text-2xl text-indigo-500"},W.kannada),R.createElement("div",{className:`text-sm sm:text-base font-black mt-1 ${k==="dark"?"text-slate-300":"text-slate-900"}`},"हिंदी: ",W.meaning)))))))),t==="puzzle"&&R.createElement("div",{className:"max-w-md mx-auto space-y-4 sm:space-y-6 animate-in fade-in duration-300 pb-32 pt-2 flex flex-col items-center"},R.createElement("div",{className:"w-full px-2 pt-2"},R.createElement("div",{className:`h-1 w-full rounded-full overflow-hidden ${k==="dark"?"bg-slate-800":"bg-slate-200"}`},R.createElement("div",{className:"h-full bg-indigo-500 transition-all duration-700 ease-out",style:{width:`${(Tt.length-z.length)/Tt.length*100}%`}}))),y.isComplete?R.createElement("div",{className:`w-full p-8 rounded-[2.5rem] border-2 text-center space-y-6 ${k==="dark"?"bg-slate-800 border-slate-700":"bg-white border-slate-100 shadow-xl"}`},R.createElement("div",{className:"w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600 mb-4"},R.createElement(gc,{size:40})),R.createElement("h2",{className:"text-3xl font-black text-slate-800 dark:text-white"},"Round Complete!"),R.createElement("p",{className:"text-slate-500 font-medium"},"You identified all 49 characters. Great work!"),R.createElement("div",{className:"grid grid-cols-2 gap-4"},R.createElement("div",{className:"p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600"},R.createElement("p",{className:"text-xs uppercase font-bold text-slate-500"},"Score"),R.createElement("p",{className:"text-2xl font-black"},T.score)),R.createElement("div",{className:"p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600"},R.createElement("p",{className:"text-xs uppercase font-bold text-slate-500"},"Perfects"),R.createElement("p",{className:"text-2xl font-black"},T.perfectGuesses))),R.createElement("button",{onClick:ui,className:"w-full py-5 bg-indigo-600 text-white rounded-3xl font-black text-xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all"},"Start New Round")):y.target&&R.createElement(R.Fragment,null,R.createElement("div",{className:`w-full grid grid-cols-3 gap-2 p-3 rounded-2xl border-2 shadow-sm ${k==="dark"?"bg-slate-800/50 border-slate-700":"bg-white border-slate-100"}`},R.createElement("div",{className:"flex flex-col items-center"},R.createElement(gc,{size:14,className:"text-amber-500 mb-0.5"}),R.createElement("span",{className:"text-base font-black"},T.score),R.createElement("span",{className:"text-[8px] uppercase font-bold text-slate-500"},"Score")),R.createElement("div",{className:"flex flex-col items-center border-x border-slate-200 dark:border-slate-700"},R.createElement(RI,{size:14,className:"text-indigo-500 mb-0.5"}),R.createElement("span",{className:"text-base font-black"},T.perfectGuesses),R.createElement("span",{className:"text-[8px] uppercase font-bold text-slate-500"},"Perfects")),R.createElement("div",{className:"flex flex-col items-center"},R.createElement(DI,{size:14,className:"text-orange-500 mb-0.5"}),R.createElement("span",{className:"text-base font-black"},T.streak),R.createElement("span",{className:"text-[8px] uppercase font-bold text-slate-500"},"Streak"))),R.createElement("div",{className:"text-center w-full"},R.createElement("p",{className:"text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2 italic"},"Identify Kannada for"),R.createElement("div",{className:`w-28 h-28 sm:w-36 sm:h-36 border-4 rounded-3xl mx-auto flex items-center justify-center text-7xl sm:text-8xl font-serif shadow-xl transition-all ${k==="dark"?"bg-slate-800 border-indigo-500 text-indigo-400":"bg-white border-indigo-100 text-indigo-600"}`},R.createElement("div",{className:"flex flex-col items-center"},R.createElement("span",null,y.target.hindi),y.target.vowelType&&R.createElement("div",{className:"flex items-center gap-0.5 text-indigo-500 -mt-2"},R.createElement(Dm,{size:8}),R.createElement("span",{className:"text-[9px] font-black"},y.target.vowelType==="Short"?"1●":"2●"))))),R.createElement("div",{className:"grid grid-cols-2 gap-3 py-1 w-full flex-1"},y.options.map(W=>{const Q=y.isSolved&&W.id===y.target.id,se=y.wrongIds.includes(W.id);return R.createElement("button",{key:W.id,disabled:y.isSolved||se,onClick:()=>Au(W),className:`w-full h-24 sm:h-36 rounded-2xl sm:rounded-[2rem] border-2 flex flex-col items-center justify-center transition-all ${Q?"bg-green-500 border-green-400 text-white shadow-xl scale-105 z-10":se?"bg-red-50/10 border-red-500/20 opacity-40 scale-95 cursor-not-allowed":k==="dark"?"bg-slate-800 border-slate-700 text-slate-200 hover:border-indigo-500 shadow-lg":"bg-white border-slate-200 text-slate-800 hover:border-indigo-400 shadow-sm"}`},R.createElement("span",{className:`${Q||se?"text-2xl sm:text-4xl":"text-5xl sm:text-6xl"} font-bold mb-1 transition-all`},W.kannada),(Q||se)&&R.createElement("div",{className:"animate-in fade-in zoom-in duration-300 flex flex-col items-center"},R.createElement("span",{className:"text-[8px] sm:text-[10px] font-bold uppercase tracking-widest opacity-60"},"is"),R.createElement("span",{className:`text-xl sm:text-4xl font-black font-serif ${Q?"text-white":"text-red-700"}`},W.hindi)))})),y.isSolved&&R.createElement("div",{className:"w-full animate-in zoom-in slide-in-from-bottom-2 duration-300 pt-2 pb-12"},R.createElement("button",{onClick:()=>fs(),className:"w-full py-4 bg-indigo-600 text-white rounded-3xl font-black text-lg shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"},"Continue ",R.createElement(Nm,{size:20})))))))}_v(document.getElementById("root")).render(R.createElement(R.StrictMode,null,R.createElement(tx,null)));
