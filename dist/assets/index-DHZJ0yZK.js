function sw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ow(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Up={exports:{}},fa={},Fp={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Is=Symbol.for("react.element"),aw=Symbol.for("react.portal"),lw=Symbol.for("react.fragment"),uw=Symbol.for("react.strict_mode"),cw=Symbol.for("react.profiler"),hw=Symbol.for("react.provider"),fw=Symbol.for("react.context"),dw=Symbol.for("react.forward_ref"),pw=Symbol.for("react.suspense"),mw=Symbol.for("react.memo"),gw=Symbol.for("react.lazy"),yf=Symbol.iterator;function yw(t){return t===null||typeof t!="object"?null:(t=yf&&t[yf]||t["@@iterator"],typeof t=="function"?t:null)}var bp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vp=Object.assign,zp={};function si(t,e,n){this.props=t,this.context=e,this.refs=zp,this.updater=n||bp}si.prototype.isReactComponent={};si.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};si.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Bp(){}Bp.prototype=si.prototype;function Ju(t,e,n){this.props=t,this.context=e,this.refs=zp,this.updater=n||bp}var Xu=Ju.prototype=new Bp;Xu.constructor=Ju;Vp(Xu,si.prototype);Xu.isPureReactComponent=!0;var vf=Array.isArray,$p=Object.prototype.hasOwnProperty,Qu={current:null},Hp={key:!0,ref:!0,__self:!0,__source:!0};function Wp(t,e,n){var r,i={},s=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)$p.call(e,r)&&!Hp.hasOwnProperty(r)&&(i[r]=e[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var c=Array(u),f=0;f<u;f++)c[f]=arguments[f+2];i.children=c}if(t&&t.defaultProps)for(r in u=t.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:Is,type:t,key:s,ref:a,props:i,_owner:Qu.current}}function vw(t,e){return{$$typeof:Is,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Yu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Is}function ww(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wf=/\/+/g;function rl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ww(""+t.key):e.toString(36)}function fo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Is:case aw:a=!0}}if(a)return a=t,i=i(a),t=r===""?"."+rl(a,0):r,vf(i)?(n="",t!=null&&(n=t.replace(wf,"$&/")+"/"),fo(i,e,n,"",function(f){return f})):i!=null&&(Yu(i)&&(i=vw(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(wf,"$&/")+"/")+t)),e.push(i)),1;if(a=0,r=r===""?".":r+":",vf(t))for(var u=0;u<t.length;u++){s=t[u];var c=r+rl(s,u);a+=fo(s,e,n,c,i)}else if(c=yw(t),typeof c=="function")for(t=c.call(t),u=0;!(s=t.next()).done;)s=s.value,c=r+rl(s,u++),a+=fo(s,e,n,c,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Gs(t,e,n){if(t==null)return t;var r=[],i=0;return fo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function _w(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Fe={current:null},po={transition:null},Sw={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:po,ReactCurrentOwner:Qu};function Gp(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:Gs,forEach:function(t,e,n){Gs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Gs(t,function(){e++}),e},toArray:function(t){return Gs(t,function(e){return e})||[]},only:function(t){if(!Yu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};G.Component=si;G.Fragment=lw;G.Profiler=cw;G.PureComponent=Ju;G.StrictMode=uw;G.Suspense=pw;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sw;G.act=Gp;G.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Vp({},t.props),i=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Qu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var u=t.type.defaultProps;for(c in e)$p.call(e,c)&&!Hp.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&u!==void 0?u[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){u=Array(c);for(var f=0;f<c;f++)u[f]=arguments[f+2];r.children=u}return{$$typeof:Is,type:t.type,key:i,ref:s,props:r,_owner:a}};G.createContext=function(t){return t={$$typeof:fw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:hw,_context:t},t.Consumer=t};G.createElement=Wp;G.createFactory=function(t){var e=Wp.bind(null,t);return e.type=t,e};G.createRef=function(){return{current:null}};G.forwardRef=function(t){return{$$typeof:dw,render:t}};G.isValidElement=Yu;G.lazy=function(t){return{$$typeof:gw,_payload:{_status:-1,_result:t},_init:_w}};G.memo=function(t,e){return{$$typeof:mw,type:t,compare:e===void 0?null:e}};G.startTransition=function(t){var e=po.transition;po.transition={};try{t()}finally{po.transition=e}};G.unstable_act=Gp;G.useCallback=function(t,e){return Fe.current.useCallback(t,e)};G.useContext=function(t){return Fe.current.useContext(t)};G.useDebugValue=function(){};G.useDeferredValue=function(t){return Fe.current.useDeferredValue(t)};G.useEffect=function(t,e){return Fe.current.useEffect(t,e)};G.useId=function(){return Fe.current.useId()};G.useImperativeHandle=function(t,e,n){return Fe.current.useImperativeHandle(t,e,n)};G.useInsertionEffect=function(t,e){return Fe.current.useInsertionEffect(t,e)};G.useLayoutEffect=function(t,e){return Fe.current.useLayoutEffect(t,e)};G.useMemo=function(t,e){return Fe.current.useMemo(t,e)};G.useReducer=function(t,e,n){return Fe.current.useReducer(t,e,n)};G.useRef=function(t){return Fe.current.useRef(t)};G.useState=function(t){return Fe.current.useState(t)};G.useSyncExternalStore=function(t,e,n){return Fe.current.useSyncExternalStore(t,e,n)};G.useTransition=function(){return Fe.current.useTransition()};G.version="18.3.1";Fp.exports=G;var j=Fp.exports;const Kp=ow(j),Ew=sw({__proto__:null,default:Kp},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iw=j,Tw=Symbol.for("react.element"),kw=Symbol.for("react.fragment"),Cw=Object.prototype.hasOwnProperty,Pw=Iw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Aw={key:!0,ref:!0,__self:!0,__source:!0};function qp(t,e,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)Cw.call(e,r)&&!Aw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Tw,type:t,key:s,ref:a,props:i,_owner:Pw.current}}fa.Fragment=kw;fa.jsx=qp;fa.jsxs=qp;Up.exports=fa;var A=Up.exports,$l={},Jp={exports:{}},Xe={},Xp={exports:{}},Qp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,$){var H=V.length;V.push($);e:for(;0<H;){var ie=H-1>>>1,ce=V[ie];if(0<i(ce,$))V[ie]=$,V[H]=ce,H=ie;else break e}}function n(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var $=V[0],H=V.pop();if(H!==$){V[0]=H;e:for(var ie=0,ce=V.length,Fn=ce>>>1;ie<Fn;){var Ye=2*(ie+1)-1,bn=V[Ye],at=Ye+1,Yt=V[at];if(0>i(bn,H))at<ce&&0>i(Yt,bn)?(V[ie]=Yt,V[at]=H,ie=at):(V[ie]=bn,V[Ye]=H,ie=Ye);else if(at<ce&&0>i(Yt,H))V[ie]=Yt,V[at]=H,ie=at;else break e}}return $}function i(V,$){var H=V.sortIndex-$.sortIndex;return H!==0?H:V.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,u=a.now();t.unstable_now=function(){return a.now()-u}}var c=[],f=[],_=1,m=null,v=3,N=!1,x=!1,O=!1,L=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(V){for(var $=n(f);$!==null;){if($.callback===null)r(f);else if($.startTime<=V)r(f),$.sortIndex=$.expirationTime,e(c,$);else break;$=n(f)}}function D(V){if(O=!1,k(V),!x)if(n(c)!==null)x=!0,hi(F);else{var $=n(f);$!==null&&fi(D,$.startTime-V)}}function F(V,$){x=!1,O&&(O=!1,E(p),p=-1),N=!0;var H=v;try{for(k($),m=n(c);m!==null&&(!(m.expirationTime>$)||V&&!T());){var ie=m.callback;if(typeof ie=="function"){m.callback=null,v=m.priorityLevel;var ce=ie(m.expirationTime<=$);$=t.unstable_now(),typeof ce=="function"?m.callback=ce:m===n(c)&&r(c),k($)}else r(c);m=n(c)}if(m!==null)var Fn=!0;else{var Ye=n(f);Ye!==null&&fi(D,Ye.startTime-$),Fn=!1}return Fn}finally{m=null,v=H,N=!1}}var b=!1,g=null,p=-1,y=5,I=-1;function T(){return!(t.unstable_now()-I<y)}function C(){if(g!==null){var V=t.unstable_now();I=V;var $=!0;try{$=g(!0,V)}finally{$?S():(b=!1,g=null)}}else b=!1}var S;if(typeof w=="function")S=function(){w(C)};else if(typeof MessageChannel<"u"){var Ee=new MessageChannel,Mt=Ee.port2;Ee.port1.onmessage=C,S=function(){Mt.postMessage(null)}}else S=function(){L(C,0)};function hi(V){g=V,b||(b=!0,S())}function fi(V,$){p=L(function(){V(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){x||N||(x=!0,hi(F))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(V){switch(v){case 1:case 2:case 3:var $=3;break;default:$=v}var H=v;v=$;try{return V()}finally{v=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,$){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var H=v;v=V;try{return $()}finally{v=H}},t.unstable_scheduleCallback=function(V,$,H){var ie=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ie+H:ie):H=ie,V){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=H+ce,V={id:_++,callback:$,priorityLevel:V,startTime:H,expirationTime:ce,sortIndex:-1},H>ie?(V.sortIndex=H,e(f,V),n(c)===null&&V===n(f)&&(O?(E(p),p=-1):O=!0,fi(D,H-ie))):(V.sortIndex=ce,e(c,V),x||N||(x=!0,hi(F))),V},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(V){var $=v;return function(){var H=v;v=$;try{return V.apply(this,arguments)}finally{v=H}}}})(Qp);Xp.exports=Qp;var Rw=Xp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nw=j,Je=Rw;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yp=new Set,ts={};function pr(t,e){Xr(t,e),Xr(t+"Capture",e)}function Xr(t,e){for(ts[t]=e,t=0;t<e.length;t++)Yp.add(e[t])}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hl=Object.prototype.hasOwnProperty,xw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_f={},Sf={};function Ow(t){return Hl.call(Sf,t)?!0:Hl.call(_f,t)?!1:xw.test(t)?Sf[t]=!0:(_f[t]=!0,!1)}function Dw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Lw(t,e,n,r){if(e===null||typeof e>"u"||Dw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function be(t,e,n,r,i,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ke[t]=new be(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ke[e]=new be(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ke[t]=new be(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ke[t]=new be(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ke[t]=new be(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ke[t]=new be(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ke[t]=new be(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ke[t]=new be(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ke[t]=new be(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zu=/[\-:]([a-z])/g;function ec(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zu,ec);ke[e]=new be(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zu,ec);ke[e]=new be(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zu,ec);ke[e]=new be(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ke[t]=new be(t,1,!1,t.toLowerCase(),null,!1,!1)});ke.xlinkHref=new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ke[t]=new be(t,1,!1,t.toLowerCase(),null,!0,!0)});function tc(t,e,n,r){var i=ke.hasOwnProperty(e)?ke[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Lw(e,n,i,r)&&(n=null),r||i===null?Ow(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Qt=Nw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ks=Symbol.for("react.element"),Cr=Symbol.for("react.portal"),Pr=Symbol.for("react.fragment"),nc=Symbol.for("react.strict_mode"),Wl=Symbol.for("react.profiler"),Zp=Symbol.for("react.provider"),em=Symbol.for("react.context"),rc=Symbol.for("react.forward_ref"),Gl=Symbol.for("react.suspense"),Kl=Symbol.for("react.suspense_list"),ic=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),tm=Symbol.for("react.offscreen"),Ef=Symbol.iterator;function Ri(t){return t===null||typeof t!="object"?null:(t=Ef&&t[Ef]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,il;function Ui(t){if(il===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);il=e&&e[1]||""}return`
`+il+t}var sl=!1;function ol(t,e){if(!t||sl)return"";sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(f){var r=f}Reflect.construct(t,[],e)}else{try{e.call()}catch(f){r=f}t.call(e.prototype)}else{try{throw Error()}catch(f){r=f}t()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,u=s.length-1;1<=a&&0<=u&&i[a]!==s[u];)u--;for(;1<=a&&0<=u;a--,u--)if(i[a]!==s[u]){if(a!==1||u!==1)do if(a--,u--,0>u||i[a]!==s[u]){var c=`
`+i[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=u);break}}}finally{sl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ui(t):""}function Mw(t){switch(t.tag){case 5:return Ui(t.type);case 16:return Ui("Lazy");case 13:return Ui("Suspense");case 19:return Ui("SuspenseList");case 0:case 2:case 15:return t=ol(t.type,!1),t;case 11:return t=ol(t.type.render,!1),t;case 1:return t=ol(t.type,!0),t;default:return""}}function ql(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Pr:return"Fragment";case Cr:return"Portal";case Wl:return"Profiler";case nc:return"StrictMode";case Gl:return"Suspense";case Kl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case em:return(t.displayName||"Context")+".Consumer";case Zp:return(t._context.displayName||"Context")+".Provider";case rc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ic:return e=t.displayName||null,e!==null?e:ql(t.type)||"Memo";case un:e=t._payload,t=t._init;try{return ql(t(e))}catch{}}return null}function jw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ql(e);case 8:return e===nc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function nm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Uw(t){var e=nm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qs(t){t._valueTracker||(t._valueTracker=Uw(t))}function rm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=nm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function No(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Jl(t,e){var n=e.checked;return le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function If(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=xn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function im(t,e){e=e.checked,e!=null&&tc(t,"checked",e,!1)}function Xl(t,e){im(t,e);var n=xn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ql(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ql(t,e.type,xn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Tf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ql(t,e,n){(e!=="number"||No(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fi=Array.isArray;function br(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+xn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Yl(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function kf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(Fi(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xn(n)}}function sm(t,e){var n=xn(e.value),r=xn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Cf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function om(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zl(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?om(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Js,am=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Js=Js||document.createElement("div"),Js.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Js.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ns(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fw=["Webkit","ms","Moz","O"];Object.keys(zi).forEach(function(t){Fw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zi[e]=zi[t]})});function lm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zi.hasOwnProperty(t)&&zi[t]?(""+e).trim():e+"px"}function um(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=lm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var bw=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eu(t,e){if(e){if(bw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function tu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nu=null;function sc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ru=null,Vr=null,zr=null;function Pf(t){if(t=Cs(t)){if(typeof ru!="function")throw Error(M(280));var e=t.stateNode;e&&(e=ya(e),ru(t.stateNode,t.type,e))}}function cm(t){Vr?zr?zr.push(t):zr=[t]:Vr=t}function hm(){if(Vr){var t=Vr,e=zr;if(zr=Vr=null,Pf(t),e)for(t=0;t<e.length;t++)Pf(e[t])}}function fm(t,e){return t(e)}function dm(){}var al=!1;function pm(t,e,n){if(al)return t(e,n);al=!0;try{return fm(t,e,n)}finally{al=!1,(Vr!==null||zr!==null)&&(dm(),hm())}}function rs(t,e){var n=t.stateNode;if(n===null)return null;var r=ya(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var iu=!1;if(Ht)try{var Ni={};Object.defineProperty(Ni,"passive",{get:function(){iu=!0}}),window.addEventListener("test",Ni,Ni),window.removeEventListener("test",Ni,Ni)}catch{iu=!1}function Vw(t,e,n,r,i,s,a,u,c){var f=Array.prototype.slice.call(arguments,3);try{e.apply(n,f)}catch(_){this.onError(_)}}var Bi=!1,xo=null,Oo=!1,su=null,zw={onError:function(t){Bi=!0,xo=t}};function Bw(t,e,n,r,i,s,a,u,c){Bi=!1,xo=null,Vw.apply(zw,arguments)}function $w(t,e,n,r,i,s,a,u,c){if(Bw.apply(this,arguments),Bi){if(Bi){var f=xo;Bi=!1,xo=null}else throw Error(M(198));Oo||(Oo=!0,su=f)}}function mr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function mm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Af(t){if(mr(t)!==t)throw Error(M(188))}function Hw(t){var e=t.alternate;if(!e){if(e=mr(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Af(i),t;if(s===r)return Af(i),e;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,u=i.child;u;){if(u===n){a=!0,n=i,r=s;break}if(u===r){a=!0,r=i,n=s;break}u=u.sibling}if(!a){for(u=s.child;u;){if(u===n){a=!0,n=s,r=i;break}if(u===r){a=!0,r=s,n=i;break}u=u.sibling}if(!a)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function gm(t){return t=Hw(t),t!==null?ym(t):null}function ym(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ym(t);if(e!==null)return e;t=t.sibling}return null}var vm=Je.unstable_scheduleCallback,Rf=Je.unstable_cancelCallback,Ww=Je.unstable_shouldYield,Gw=Je.unstable_requestPaint,fe=Je.unstable_now,Kw=Je.unstable_getCurrentPriorityLevel,oc=Je.unstable_ImmediatePriority,wm=Je.unstable_UserBlockingPriority,Do=Je.unstable_NormalPriority,qw=Je.unstable_LowPriority,_m=Je.unstable_IdlePriority,da=null,Nt=null;function Jw(t){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(da,t,void 0,(t.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:Yw,Xw=Math.log,Qw=Math.LN2;function Yw(t){return t>>>=0,t===0?32:31-(Xw(t)/Qw|0)|0}var Xs=64,Qs=4194304;function bi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Lo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var u=a&~i;u!==0?r=bi(u):(s&=a,s!==0&&(r=bi(s)))}else a=n&~i,a!==0?r=bi(a):s!==0&&(r=bi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-mt(e),i=1<<n,r|=t[n],e&=~i;return r}function Zw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function e0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-mt(s),u=1<<a,c=i[a];c===-1?(!(u&n)||u&r)&&(i[a]=Zw(u,e)):c<=e&&(t.expiredLanes|=u),s&=~u}}function ou(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Sm(){var t=Xs;return Xs<<=1,!(Xs&4194240)&&(Xs=64),t}function ll(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ts(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mt(e),t[e]=n}function t0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-mt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ac(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-mt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Y=0;function Em(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Im,lc,Tm,km,Cm,au=!1,Ys=[],_n=null,Sn=null,En=null,is=new Map,ss=new Map,hn=[],n0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nf(t,e){switch(t){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":is.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ss.delete(e.pointerId)}}function xi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Cs(e),e!==null&&lc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function r0(t,e,n,r,i){switch(e){case"focusin":return _n=xi(_n,t,e,n,r,i),!0;case"dragenter":return Sn=xi(Sn,t,e,n,r,i),!0;case"mouseover":return En=xi(En,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return is.set(s,xi(is.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ss.set(s,xi(ss.get(s)||null,t,e,n,r,i)),!0}return!1}function Pm(t){var e=Jn(t.target);if(e!==null){var n=mr(e);if(n!==null){if(e=n.tag,e===13){if(e=mm(n),e!==null){t.blockedOn=e,Cm(t.priority,function(){Tm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function mo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=lu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);nu=r,n.target.dispatchEvent(r),nu=null}else return e=Cs(n),e!==null&&lc(e),t.blockedOn=n,!1;e.shift()}return!0}function xf(t,e,n){mo(t)&&n.delete(e)}function i0(){au=!1,_n!==null&&mo(_n)&&(_n=null),Sn!==null&&mo(Sn)&&(Sn=null),En!==null&&mo(En)&&(En=null),is.forEach(xf),ss.forEach(xf)}function Oi(t,e){t.blockedOn===e&&(t.blockedOn=null,au||(au=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,i0)))}function os(t){function e(i){return Oi(i,t)}if(0<Ys.length){Oi(Ys[0],t);for(var n=1;n<Ys.length;n++){var r=Ys[n];r.blockedOn===t&&(r.blockedOn=null)}}for(_n!==null&&Oi(_n,t),Sn!==null&&Oi(Sn,t),En!==null&&Oi(En,t),is.forEach(e),ss.forEach(e),n=0;n<hn.length;n++)r=hn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<hn.length&&(n=hn[0],n.blockedOn===null);)Pm(n),n.blockedOn===null&&hn.shift()}var Br=Qt.ReactCurrentBatchConfig,Mo=!0;function s0(t,e,n,r){var i=Y,s=Br.transition;Br.transition=null;try{Y=1,uc(t,e,n,r)}finally{Y=i,Br.transition=s}}function o0(t,e,n,r){var i=Y,s=Br.transition;Br.transition=null;try{Y=4,uc(t,e,n,r)}finally{Y=i,Br.transition=s}}function uc(t,e,n,r){if(Mo){var i=lu(t,e,n,r);if(i===null)vl(t,e,r,jo,n),Nf(t,r);else if(r0(i,t,e,n,r))r.stopPropagation();else if(Nf(t,r),e&4&&-1<n0.indexOf(t)){for(;i!==null;){var s=Cs(i);if(s!==null&&Im(s),s=lu(t,e,n,r),s===null&&vl(t,e,r,jo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else vl(t,e,r,null,n)}}var jo=null;function lu(t,e,n,r){if(jo=null,t=sc(r),t=Jn(t),t!==null)if(e=mr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=mm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return jo=t,null}function Am(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kw()){case oc:return 1;case wm:return 4;case Do:case qw:return 16;case _m:return 536870912;default:return 16}default:return 16}}var yn=null,cc=null,go=null;function Rm(){if(go)return go;var t,e=cc,n=e.length,r,i="value"in yn?yn.value:yn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[s-r];r++);return go=i.slice(t,1<r?1-r:void 0)}function yo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Zs(){return!0}function Of(){return!1}function Qe(t){function e(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(n=t[u],this[u]=n?n(s):s[u]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Zs:Of,this.isPropagationStopped=Of,this}return le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zs)},persist:function(){},isPersistent:Zs}),e}var oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hc=Qe(oi),ks=le({},oi,{view:0,detail:0}),a0=Qe(ks),ul,cl,Di,pa=le({},ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Di&&(Di&&t.type==="mousemove"?(ul=t.screenX-Di.screenX,cl=t.screenY-Di.screenY):cl=ul=0,Di=t),ul)},movementY:function(t){return"movementY"in t?t.movementY:cl}}),Df=Qe(pa),l0=le({},pa,{dataTransfer:0}),u0=Qe(l0),c0=le({},ks,{relatedTarget:0}),hl=Qe(c0),h0=le({},oi,{animationName:0,elapsedTime:0,pseudoElement:0}),f0=Qe(h0),d0=le({},oi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),p0=Qe(d0),m0=le({},oi,{data:0}),Lf=Qe(m0),g0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},y0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},v0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function w0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=v0[t])?!!e[t]:!1}function fc(){return w0}var _0=le({},ks,{key:function(t){if(t.key){var e=g0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=yo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?y0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fc,charCode:function(t){return t.type==="keypress"?yo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),S0=Qe(_0),E0=le({},pa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mf=Qe(E0),I0=le({},ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fc}),T0=Qe(I0),k0=le({},oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),C0=Qe(k0),P0=le({},pa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),A0=Qe(P0),R0=[9,13,27,32],dc=Ht&&"CompositionEvent"in window,$i=null;Ht&&"documentMode"in document&&($i=document.documentMode);var N0=Ht&&"TextEvent"in window&&!$i,Nm=Ht&&(!dc||$i&&8<$i&&11>=$i),jf=" ",Uf=!1;function xm(t,e){switch(t){case"keyup":return R0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Om(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ar=!1;function x0(t,e){switch(t){case"compositionend":return Om(e);case"keypress":return e.which!==32?null:(Uf=!0,jf);case"textInput":return t=e.data,t===jf&&Uf?null:t;default:return null}}function O0(t,e){if(Ar)return t==="compositionend"||!dc&&xm(t,e)?(t=Rm(),go=cc=yn=null,Ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Nm&&e.locale!=="ko"?null:e.data;default:return null}}var D0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ff(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!D0[t.type]:e==="textarea"}function Dm(t,e,n,r){cm(r),e=Uo(e,"onChange"),0<e.length&&(n=new hc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Hi=null,as=null;function L0(t){Hm(t,0)}function ma(t){var e=xr(t);if(rm(e))return t}function M0(t,e){if(t==="change")return e}var Lm=!1;if(Ht){var fl;if(Ht){var dl="oninput"in document;if(!dl){var bf=document.createElement("div");bf.setAttribute("oninput","return;"),dl=typeof bf.oninput=="function"}fl=dl}else fl=!1;Lm=fl&&(!document.documentMode||9<document.documentMode)}function Vf(){Hi&&(Hi.detachEvent("onpropertychange",Mm),as=Hi=null)}function Mm(t){if(t.propertyName==="value"&&ma(as)){var e=[];Dm(e,as,t,sc(t)),pm(L0,e)}}function j0(t,e,n){t==="focusin"?(Vf(),Hi=e,as=n,Hi.attachEvent("onpropertychange",Mm)):t==="focusout"&&Vf()}function U0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ma(as)}function F0(t,e){if(t==="click")return ma(e)}function b0(t,e){if(t==="input"||t==="change")return ma(e)}function V0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var yt=typeof Object.is=="function"?Object.is:V0;function ls(t,e){if(yt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Hl.call(e,i)||!yt(t[i],e[i]))return!1}return!0}function zf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bf(t,e){var n=zf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zf(n)}}function jm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?jm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Um(){for(var t=window,e=No();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=No(t.document)}return e}function pc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function z0(t){var e=Um(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&jm(n.ownerDocument.documentElement,n)){if(r!==null&&pc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Bf(n,s);var a=Bf(n,r);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var B0=Ht&&"documentMode"in document&&11>=document.documentMode,Rr=null,uu=null,Wi=null,cu=!1;function $f(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cu||Rr==null||Rr!==No(r)||(r=Rr,"selectionStart"in r&&pc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wi&&ls(Wi,r)||(Wi=r,r=Uo(uu,"onSelect"),0<r.length&&(e=new hc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Rr)))}function eo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Nr={animationend:eo("Animation","AnimationEnd"),animationiteration:eo("Animation","AnimationIteration"),animationstart:eo("Animation","AnimationStart"),transitionend:eo("Transition","TransitionEnd")},pl={},Fm={};Ht&&(Fm=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function ga(t){if(pl[t])return pl[t];if(!Nr[t])return t;var e=Nr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Fm)return pl[t]=e[n];return t}var bm=ga("animationend"),Vm=ga("animationiteration"),zm=ga("animationstart"),Bm=ga("transitionend"),$m=new Map,Hf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mn(t,e){$m.set(t,e),pr(e,[t])}for(var ml=0;ml<Hf.length;ml++){var gl=Hf[ml],$0=gl.toLowerCase(),H0=gl[0].toUpperCase()+gl.slice(1);Mn($0,"on"+H0)}Mn(bm,"onAnimationEnd");Mn(Vm,"onAnimationIteration");Mn(zm,"onAnimationStart");Mn("dblclick","onDoubleClick");Mn("focusin","onFocus");Mn("focusout","onBlur");Mn(Bm,"onTransitionEnd");Xr("onMouseEnter",["mouseout","mouseover"]);Xr("onMouseLeave",["mouseout","mouseover"]);Xr("onPointerEnter",["pointerout","pointerover"]);Xr("onPointerLeave",["pointerout","pointerover"]);pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vi));function Wf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,$w(r,e,void 0,t),t.currentTarget=null}function Hm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var a=r.length-1;0<=a;a--){var u=r[a],c=u.instance,f=u.currentTarget;if(u=u.listener,c!==s&&i.isPropagationStopped())break e;Wf(i,u,f),s=c}else for(a=0;a<r.length;a++){if(u=r[a],c=u.instance,f=u.currentTarget,u=u.listener,c!==s&&i.isPropagationStopped())break e;Wf(i,u,f),s=c}}}if(Oo)throw t=su,Oo=!1,su=null,t}function ne(t,e){var n=e[mu];n===void 0&&(n=e[mu]=new Set);var r=t+"__bubble";n.has(r)||(Wm(e,t,2,!1),n.add(r))}function yl(t,e,n){var r=0;e&&(r|=4),Wm(n,t,r,e)}var to="_reactListening"+Math.random().toString(36).slice(2);function us(t){if(!t[to]){t[to]=!0,Yp.forEach(function(n){n!=="selectionchange"&&(W0.has(n)||yl(n,!1,t),yl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[to]||(e[to]=!0,yl("selectionchange",!1,e))}}function Wm(t,e,n,r){switch(Am(e)){case 1:var i=s0;break;case 4:i=o0;break;default:i=uc}n=i.bind(null,e,n,t),i=void 0,!iu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function vl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;u!==null;){if(a=Jn(u),a===null)return;if(c=a.tag,c===5||c===6){r=s=a;continue e}u=u.parentNode}}r=r.return}pm(function(){var f=s,_=sc(n),m=[];e:{var v=$m.get(t);if(v!==void 0){var N=hc,x=t;switch(t){case"keypress":if(yo(n)===0)break e;case"keydown":case"keyup":N=S0;break;case"focusin":x="focus",N=hl;break;case"focusout":x="blur",N=hl;break;case"beforeblur":case"afterblur":N=hl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Df;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=u0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=T0;break;case bm:case Vm:case zm:N=f0;break;case Bm:N=C0;break;case"scroll":N=a0;break;case"wheel":N=A0;break;case"copy":case"cut":case"paste":N=p0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Mf}var O=(e&4)!==0,L=!O&&t==="scroll",E=O?v!==null?v+"Capture":null:v;O=[];for(var w=f,k;w!==null;){k=w;var D=k.stateNode;if(k.tag===5&&D!==null&&(k=D,E!==null&&(D=rs(w,E),D!=null&&O.push(cs(w,D,k)))),L)break;w=w.return}0<O.length&&(v=new N(v,x,null,n,_),m.push({event:v,listeners:O}))}}if(!(e&7)){e:{if(v=t==="mouseover"||t==="pointerover",N=t==="mouseout"||t==="pointerout",v&&n!==nu&&(x=n.relatedTarget||n.fromElement)&&(Jn(x)||x[Wt]))break e;if((N||v)&&(v=_.window===_?_:(v=_.ownerDocument)?v.defaultView||v.parentWindow:window,N?(x=n.relatedTarget||n.toElement,N=f,x=x?Jn(x):null,x!==null&&(L=mr(x),x!==L||x.tag!==5&&x.tag!==6)&&(x=null)):(N=null,x=f),N!==x)){if(O=Df,D="onMouseLeave",E="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(O=Mf,D="onPointerLeave",E="onPointerEnter",w="pointer"),L=N==null?v:xr(N),k=x==null?v:xr(x),v=new O(D,w+"leave",N,n,_),v.target=L,v.relatedTarget=k,D=null,Jn(_)===f&&(O=new O(E,w+"enter",x,n,_),O.target=k,O.relatedTarget=L,D=O),L=D,N&&x)t:{for(O=N,E=x,w=0,k=O;k;k=Tr(k))w++;for(k=0,D=E;D;D=Tr(D))k++;for(;0<w-k;)O=Tr(O),w--;for(;0<k-w;)E=Tr(E),k--;for(;w--;){if(O===E||E!==null&&O===E.alternate)break t;O=Tr(O),E=Tr(E)}O=null}else O=null;N!==null&&Gf(m,v,N,O,!1),x!==null&&L!==null&&Gf(m,L,x,O,!0)}}e:{if(v=f?xr(f):window,N=v.nodeName&&v.nodeName.toLowerCase(),N==="select"||N==="input"&&v.type==="file")var F=M0;else if(Ff(v))if(Lm)F=b0;else{F=U0;var b=j0}else(N=v.nodeName)&&N.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(F=F0);if(F&&(F=F(t,f))){Dm(m,F,n,_);break e}b&&b(t,v,f),t==="focusout"&&(b=v._wrapperState)&&b.controlled&&v.type==="number"&&Ql(v,"number",v.value)}switch(b=f?xr(f):window,t){case"focusin":(Ff(b)||b.contentEditable==="true")&&(Rr=b,uu=f,Wi=null);break;case"focusout":Wi=uu=Rr=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,$f(m,n,_);break;case"selectionchange":if(B0)break;case"keydown":case"keyup":$f(m,n,_)}var g;if(dc)e:{switch(t){case"compositionstart":var p="onCompositionStart";break e;case"compositionend":p="onCompositionEnd";break e;case"compositionupdate":p="onCompositionUpdate";break e}p=void 0}else Ar?xm(t,n)&&(p="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(p="onCompositionStart");p&&(Nm&&n.locale!=="ko"&&(Ar||p!=="onCompositionStart"?p==="onCompositionEnd"&&Ar&&(g=Rm()):(yn=_,cc="value"in yn?yn.value:yn.textContent,Ar=!0)),b=Uo(f,p),0<b.length&&(p=new Lf(p,t,null,n,_),m.push({event:p,listeners:b}),g?p.data=g:(g=Om(n),g!==null&&(p.data=g)))),(g=N0?x0(t,n):O0(t,n))&&(f=Uo(f,"onBeforeInput"),0<f.length&&(_=new Lf("onBeforeInput","beforeinput",null,n,_),m.push({event:_,listeners:f}),_.data=g))}Hm(m,e)})}function cs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Uo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=rs(t,n),s!=null&&r.unshift(cs(t,s,i)),s=rs(t,e),s!=null&&r.push(cs(t,s,i))),t=t.return}return r}function Tr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Gf(t,e,n,r,i){for(var s=e._reactName,a=[];n!==null&&n!==r;){var u=n,c=u.alternate,f=u.stateNode;if(c!==null&&c===r)break;u.tag===5&&f!==null&&(u=f,i?(c=rs(n,s),c!=null&&a.unshift(cs(n,c,u))):i||(c=rs(n,s),c!=null&&a.push(cs(n,c,u)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var G0=/\r\n?/g,K0=/\u0000|\uFFFD/g;function Kf(t){return(typeof t=="string"?t:""+t).replace(G0,`
`).replace(K0,"")}function no(t,e,n){if(e=Kf(e),Kf(t)!==e&&n)throw Error(M(425))}function Fo(){}var hu=null,fu=null;function du(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var pu=typeof setTimeout=="function"?setTimeout:void 0,q0=typeof clearTimeout=="function"?clearTimeout:void 0,qf=typeof Promise=="function"?Promise:void 0,J0=typeof queueMicrotask=="function"?queueMicrotask:typeof qf<"u"?function(t){return qf.resolve(null).then(t).catch(X0)}:pu;function X0(t){setTimeout(function(){throw t})}function wl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),os(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);os(e)}function In(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Jf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ai=Math.random().toString(36).slice(2),Pt="__reactFiber$"+ai,hs="__reactProps$"+ai,Wt="__reactContainer$"+ai,mu="__reactEvents$"+ai,Q0="__reactListeners$"+ai,Y0="__reactHandles$"+ai;function Jn(t){var e=t[Pt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wt]||n[Pt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Jf(t);t!==null;){if(n=t[Pt])return n;t=Jf(t)}return e}t=n,n=t.parentNode}return null}function Cs(t){return t=t[Pt]||t[Wt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function ya(t){return t[hs]||null}var gu=[],Or=-1;function jn(t){return{current:t}}function re(t){0>Or||(t.current=gu[Or],gu[Or]=null,Or--)}function ee(t,e){Or++,gu[Or]=t.current,t.current=e}var On={},Ne=jn(On),Be=jn(!1),sr=On;function Qr(t,e){var n=t.type.contextTypes;if(!n)return On;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function $e(t){return t=t.childContextTypes,t!=null}function bo(){re(Be),re(Ne)}function Xf(t,e,n){if(Ne.current!==On)throw Error(M(168));ee(Ne,e),ee(Be,n)}function Gm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(M(108,jw(t)||"Unknown",i));return le({},n,r)}function Vo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||On,sr=Ne.current,ee(Ne,t),ee(Be,Be.current),!0}function Qf(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=Gm(t,e,sr),r.__reactInternalMemoizedMergedChildContext=t,re(Be),re(Ne),ee(Ne,t)):re(Be),ee(Be,n)}var Ut=null,va=!1,_l=!1;function Km(t){Ut===null?Ut=[t]:Ut.push(t)}function Z0(t){va=!0,Km(t)}function Un(){if(!_l&&Ut!==null){_l=!0;var t=0,e=Y;try{var n=Ut;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ut=null,va=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(t+1)),vm(oc,Un),i}finally{Y=e,_l=!1}}return null}var Dr=[],Lr=0,zo=null,Bo=0,et=[],tt=0,or=null,bt=1,Vt="";function Wn(t,e){Dr[Lr++]=Bo,Dr[Lr++]=zo,zo=t,Bo=e}function qm(t,e,n){et[tt++]=bt,et[tt++]=Vt,et[tt++]=or,or=t;var r=bt;t=Vt;var i=32-mt(r)-1;r&=~(1<<i),n+=1;var s=32-mt(e)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,bt=1<<32-mt(e)+i|n<<i|r,Vt=s+t}else bt=1<<s|n<<i|r,Vt=t}function mc(t){t.return!==null&&(Wn(t,1),qm(t,1,0))}function gc(t){for(;t===zo;)zo=Dr[--Lr],Dr[Lr]=null,Bo=Dr[--Lr],Dr[Lr]=null;for(;t===or;)or=et[--tt],et[tt]=null,Vt=et[--tt],et[tt]=null,bt=et[--tt],et[tt]=null}var Ke=null,Ge=null,se=!1,ht=null;function Jm(t,e){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Yf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ke=t,Ge=In(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ke=t,Ge=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=or!==null?{id:bt,overflow:Vt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ke=t,Ge=null,!0):!1;default:return!1}}function yu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vu(t){if(se){var e=Ge;if(e){var n=e;if(!Yf(t,e)){if(yu(t))throw Error(M(418));e=In(n.nextSibling);var r=Ke;e&&Yf(t,e)?Jm(r,n):(t.flags=t.flags&-4097|2,se=!1,Ke=t)}}else{if(yu(t))throw Error(M(418));t.flags=t.flags&-4097|2,se=!1,Ke=t}}}function Zf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ke=t}function ro(t){if(t!==Ke)return!1;if(!se)return Zf(t),se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!du(t.type,t.memoizedProps)),e&&(e=Ge)){if(yu(t))throw Xm(),Error(M(418));for(;e;)Jm(t,e),e=In(e.nextSibling)}if(Zf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ge=In(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ge=null}}else Ge=Ke?In(t.stateNode.nextSibling):null;return!0}function Xm(){for(var t=Ge;t;)t=In(t.nextSibling)}function Yr(){Ge=Ke=null,se=!1}function yc(t){ht===null?ht=[t]:ht.push(t)}var e_=Qt.ReactCurrentBatchConfig;function Li(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var u=i.refs;a===null?delete u[s]:u[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function io(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ed(t){var e=t._init;return e(t._payload)}function Qm(t){function e(E,w){if(t){var k=E.deletions;k===null?(E.deletions=[w],E.flags|=16):k.push(w)}}function n(E,w){if(!t)return null;for(;w!==null;)e(E,w),w=w.sibling;return null}function r(E,w){for(E=new Map;w!==null;)w.key!==null?E.set(w.key,w):E.set(w.index,w),w=w.sibling;return E}function i(E,w){return E=Pn(E,w),E.index=0,E.sibling=null,E}function s(E,w,k){return E.index=k,t?(k=E.alternate,k!==null?(k=k.index,k<w?(E.flags|=2,w):k):(E.flags|=2,w)):(E.flags|=1048576,w)}function a(E){return t&&E.alternate===null&&(E.flags|=2),E}function u(E,w,k,D){return w===null||w.tag!==6?(w=Al(k,E.mode,D),w.return=E,w):(w=i(w,k),w.return=E,w)}function c(E,w,k,D){var F=k.type;return F===Pr?_(E,w,k.props.children,D,k.key):w!==null&&(w.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===un&&ed(F)===w.type)?(D=i(w,k.props),D.ref=Li(E,w,k),D.return=E,D):(D=To(k.type,k.key,k.props,null,E.mode,D),D.ref=Li(E,w,k),D.return=E,D)}function f(E,w,k,D){return w===null||w.tag!==4||w.stateNode.containerInfo!==k.containerInfo||w.stateNode.implementation!==k.implementation?(w=Rl(k,E.mode,D),w.return=E,w):(w=i(w,k.children||[]),w.return=E,w)}function _(E,w,k,D,F){return w===null||w.tag!==7?(w=tr(k,E.mode,D,F),w.return=E,w):(w=i(w,k),w.return=E,w)}function m(E,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Al(""+w,E.mode,k),w.return=E,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ks:return k=To(w.type,w.key,w.props,null,E.mode,k),k.ref=Li(E,null,w),k.return=E,k;case Cr:return w=Rl(w,E.mode,k),w.return=E,w;case un:var D=w._init;return m(E,D(w._payload),k)}if(Fi(w)||Ri(w))return w=tr(w,E.mode,k,null),w.return=E,w;io(E,w)}return null}function v(E,w,k,D){var F=w!==null?w.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return F!==null?null:u(E,w,""+k,D);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ks:return k.key===F?c(E,w,k,D):null;case Cr:return k.key===F?f(E,w,k,D):null;case un:return F=k._init,v(E,w,F(k._payload),D)}if(Fi(k)||Ri(k))return F!==null?null:_(E,w,k,D,null);io(E,k)}return null}function N(E,w,k,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return E=E.get(k)||null,u(w,E,""+D,F);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ks:return E=E.get(D.key===null?k:D.key)||null,c(w,E,D,F);case Cr:return E=E.get(D.key===null?k:D.key)||null,f(w,E,D,F);case un:var b=D._init;return N(E,w,k,b(D._payload),F)}if(Fi(D)||Ri(D))return E=E.get(k)||null,_(w,E,D,F,null);io(w,D)}return null}function x(E,w,k,D){for(var F=null,b=null,g=w,p=w=0,y=null;g!==null&&p<k.length;p++){g.index>p?(y=g,g=null):y=g.sibling;var I=v(E,g,k[p],D);if(I===null){g===null&&(g=y);break}t&&g&&I.alternate===null&&e(E,g),w=s(I,w,p),b===null?F=I:b.sibling=I,b=I,g=y}if(p===k.length)return n(E,g),se&&Wn(E,p),F;if(g===null){for(;p<k.length;p++)g=m(E,k[p],D),g!==null&&(w=s(g,w,p),b===null?F=g:b.sibling=g,b=g);return se&&Wn(E,p),F}for(g=r(E,g);p<k.length;p++)y=N(g,E,p,k[p],D),y!==null&&(t&&y.alternate!==null&&g.delete(y.key===null?p:y.key),w=s(y,w,p),b===null?F=y:b.sibling=y,b=y);return t&&g.forEach(function(T){return e(E,T)}),se&&Wn(E,p),F}function O(E,w,k,D){var F=Ri(k);if(typeof F!="function")throw Error(M(150));if(k=F.call(k),k==null)throw Error(M(151));for(var b=F=null,g=w,p=w=0,y=null,I=k.next();g!==null&&!I.done;p++,I=k.next()){g.index>p?(y=g,g=null):y=g.sibling;var T=v(E,g,I.value,D);if(T===null){g===null&&(g=y);break}t&&g&&T.alternate===null&&e(E,g),w=s(T,w,p),b===null?F=T:b.sibling=T,b=T,g=y}if(I.done)return n(E,g),se&&Wn(E,p),F;if(g===null){for(;!I.done;p++,I=k.next())I=m(E,I.value,D),I!==null&&(w=s(I,w,p),b===null?F=I:b.sibling=I,b=I);return se&&Wn(E,p),F}for(g=r(E,g);!I.done;p++,I=k.next())I=N(g,E,p,I.value,D),I!==null&&(t&&I.alternate!==null&&g.delete(I.key===null?p:I.key),w=s(I,w,p),b===null?F=I:b.sibling=I,b=I);return t&&g.forEach(function(C){return e(E,C)}),se&&Wn(E,p),F}function L(E,w,k,D){if(typeof k=="object"&&k!==null&&k.type===Pr&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case Ks:e:{for(var F=k.key,b=w;b!==null;){if(b.key===F){if(F=k.type,F===Pr){if(b.tag===7){n(E,b.sibling),w=i(b,k.props.children),w.return=E,E=w;break e}}else if(b.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===un&&ed(F)===b.type){n(E,b.sibling),w=i(b,k.props),w.ref=Li(E,b,k),w.return=E,E=w;break e}n(E,b);break}else e(E,b);b=b.sibling}k.type===Pr?(w=tr(k.props.children,E.mode,D,k.key),w.return=E,E=w):(D=To(k.type,k.key,k.props,null,E.mode,D),D.ref=Li(E,w,k),D.return=E,E=D)}return a(E);case Cr:e:{for(b=k.key;w!==null;){if(w.key===b)if(w.tag===4&&w.stateNode.containerInfo===k.containerInfo&&w.stateNode.implementation===k.implementation){n(E,w.sibling),w=i(w,k.children||[]),w.return=E,E=w;break e}else{n(E,w);break}else e(E,w);w=w.sibling}w=Rl(k,E.mode,D),w.return=E,E=w}return a(E);case un:return b=k._init,L(E,w,b(k._payload),D)}if(Fi(k))return x(E,w,k,D);if(Ri(k))return O(E,w,k,D);io(E,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,w!==null&&w.tag===6?(n(E,w.sibling),w=i(w,k),w.return=E,E=w):(n(E,w),w=Al(k,E.mode,D),w.return=E,E=w),a(E)):n(E,w)}return L}var Zr=Qm(!0),Ym=Qm(!1),$o=jn(null),Ho=null,Mr=null,vc=null;function wc(){vc=Mr=Ho=null}function _c(t){var e=$o.current;re($o),t._currentValue=e}function wu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function $r(t,e){Ho=t,vc=Mr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ze=!0),t.firstContext=null)}function st(t){var e=t._currentValue;if(vc!==t)if(t={context:t,memoizedValue:e,next:null},Mr===null){if(Ho===null)throw Error(M(308));Mr=t,Ho.dependencies={lanes:0,firstContext:t}}else Mr=Mr.next=t;return e}var Xn=null;function Sc(t){Xn===null?Xn=[t]:Xn.push(t)}function Zm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Sc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Gt(t,r)}function Gt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var cn=!1;function Ec(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function eg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function $t(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Tn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Gt(t,n)}return i=r.interleaved,i===null?(e.next=e,Sc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Gt(t,n)}function vo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ac(t,n)}}function td(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wo(t,e,n,r){var i=t.updateQueue;cn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var c=u,f=c.next;c.next=null,a===null?s=f:a.next=f,a=c;var _=t.alternate;_!==null&&(_=_.updateQueue,u=_.lastBaseUpdate,u!==a&&(u===null?_.firstBaseUpdate=f:u.next=f,_.lastBaseUpdate=c))}if(s!==null){var m=i.baseState;a=0,_=f=c=null,u=s;do{var v=u.lane,N=u.eventTime;if((r&v)===v){_!==null&&(_=_.next={eventTime:N,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var x=t,O=u;switch(v=e,N=n,O.tag){case 1:if(x=O.payload,typeof x=="function"){m=x.call(N,m,v);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=O.payload,v=typeof x=="function"?x.call(N,m,v):x,v==null)break e;m=le({},m,v);break e;case 2:cn=!0}}u.callback!==null&&u.lane!==0&&(t.flags|=64,v=i.effects,v===null?i.effects=[u]:v.push(u))}else N={eventTime:N,lane:v,tag:u.tag,payload:u.payload,callback:u.callback,next:null},_===null?(f=_=N,c=m):_=_.next=N,a|=v;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;v=u,u=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);if(_===null&&(c=m),i.baseState=c,i.firstBaseUpdate=f,i.lastBaseUpdate=_,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);lr|=a,t.lanes=a,t.memoizedState=m}}function nd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var Ps={},xt=jn(Ps),fs=jn(Ps),ds=jn(Ps);function Qn(t){if(t===Ps)throw Error(M(174));return t}function Ic(t,e){switch(ee(ds,e),ee(fs,t),ee(xt,Ps),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zl(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zl(e,t)}re(xt),ee(xt,e)}function ei(){re(xt),re(fs),re(ds)}function tg(t){Qn(ds.current);var e=Qn(xt.current),n=Zl(e,t.type);e!==n&&(ee(fs,t),ee(xt,n))}function Tc(t){fs.current===t&&(re(xt),re(fs))}var oe=jn(0);function Go(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Sl=[];function kc(){for(var t=0;t<Sl.length;t++)Sl[t]._workInProgressVersionPrimary=null;Sl.length=0}var wo=Qt.ReactCurrentDispatcher,El=Qt.ReactCurrentBatchConfig,ar=0,ae=null,ye=null,_e=null,Ko=!1,Gi=!1,ps=0,t_=0;function Pe(){throw Error(M(321))}function Cc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!yt(t[n],e[n]))return!1;return!0}function Pc(t,e,n,r,i,s){if(ar=s,ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wo.current=t===null||t.memoizedState===null?s_:o_,t=n(r,i),Gi){s=0;do{if(Gi=!1,ps=0,25<=s)throw Error(M(301));s+=1,_e=ye=null,e.updateQueue=null,wo.current=a_,t=n(r,i)}while(Gi)}if(wo.current=qo,e=ye!==null&&ye.next!==null,ar=0,_e=ye=ae=null,Ko=!1,e)throw Error(M(300));return t}function Ac(){var t=ps!==0;return ps=0,t}function Tt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?ae.memoizedState=_e=t:_e=_e.next=t,_e}function ot(){if(ye===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=ye.next;var e=_e===null?ae.memoizedState:_e.next;if(e!==null)_e=e,ye=t;else{if(t===null)throw Error(M(310));ye=t,t={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},_e===null?ae.memoizedState=_e=t:_e=_e.next=t}return _e}function ms(t,e){return typeof e=="function"?e(t):e}function Il(t){var e=ot(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=ye,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var u=a=null,c=null,f=s;do{var _=f.lane;if((ar&_)===_)c!==null&&(c=c.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:t(r,f.action);else{var m={lane:_,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};c===null?(u=c=m,a=r):c=c.next=m,ae.lanes|=_,lr|=_}f=f.next}while(f!==null&&f!==s);c===null?a=r:c.next=u,yt(r,e.memoizedState)||(ze=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ae.lanes|=s,lr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Tl(t){var e=ot(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=t(s,a.action),a=a.next;while(a!==i);yt(s,e.memoizedState)||(ze=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function ng(){}function rg(t,e){var n=ae,r=ot(),i=e(),s=!yt(r.memoizedState,i);if(s&&(r.memoizedState=i,ze=!0),r=r.queue,Rc(og.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,gs(9,sg.bind(null,n,r,i,e),void 0,null),Se===null)throw Error(M(349));ar&30||ig(n,e,i)}return i}function ig(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function sg(t,e,n,r){e.value=n,e.getSnapshot=r,ag(e)&&lg(t)}function og(t,e,n){return n(function(){ag(e)&&lg(t)})}function ag(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!yt(t,n)}catch{return!0}}function lg(t){var e=Gt(t,1);e!==null&&gt(e,t,1,-1)}function rd(t){var e=Tt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:t},e.queue=t,t=t.dispatch=i_.bind(null,ae,t),[e.memoizedState,t]}function gs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ug(){return ot().memoizedState}function _o(t,e,n,r){var i=Tt();ae.flags|=t,i.memoizedState=gs(1|e,n,void 0,r===void 0?null:r)}function wa(t,e,n,r){var i=ot();r=r===void 0?null:r;var s=void 0;if(ye!==null){var a=ye.memoizedState;if(s=a.destroy,r!==null&&Cc(r,a.deps)){i.memoizedState=gs(e,n,s,r);return}}ae.flags|=t,i.memoizedState=gs(1|e,n,s,r)}function id(t,e){return _o(8390656,8,t,e)}function Rc(t,e){return wa(2048,8,t,e)}function cg(t,e){return wa(4,2,t,e)}function hg(t,e){return wa(4,4,t,e)}function fg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function dg(t,e,n){return n=n!=null?n.concat([t]):null,wa(4,4,fg.bind(null,e,t),n)}function Nc(){}function pg(t,e){var n=ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function mg(t,e){var n=ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function gg(t,e,n){return ar&21?(yt(n,e)||(n=Sm(),ae.lanes|=n,lr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ze=!0),t.memoizedState=n)}function n_(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=El.transition;El.transition={};try{t(!1),e()}finally{Y=n,El.transition=r}}function yg(){return ot().memoizedState}function r_(t,e,n){var r=Cn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},vg(t))wg(e,n);else if(n=Zm(t,e,n,r),n!==null){var i=Me();gt(n,t,r,i),_g(n,e,r)}}function i_(t,e,n){var r=Cn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(vg(t))wg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,u=s(a,n);if(i.hasEagerState=!0,i.eagerState=u,yt(u,a)){var c=e.interleaved;c===null?(i.next=i,Sc(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=Zm(t,e,i,r),n!==null&&(i=Me(),gt(n,t,r,i),_g(n,e,r))}}function vg(t){var e=t.alternate;return t===ae||e!==null&&e===ae}function wg(t,e){Gi=Ko=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _g(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ac(t,n)}}var qo={readContext:st,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},s_={readContext:st,useCallback:function(t,e){return Tt().memoizedState=[t,e===void 0?null:e],t},useContext:st,useEffect:id,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_o(4194308,4,fg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _o(4194308,4,t,e)},useInsertionEffect:function(t,e){return _o(4,2,t,e)},useMemo:function(t,e){var n=Tt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Tt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=r_.bind(null,ae,t),[r.memoizedState,t]},useRef:function(t){var e=Tt();return t={current:t},e.memoizedState=t},useState:rd,useDebugValue:Nc,useDeferredValue:function(t){return Tt().memoizedState=t},useTransition:function(){var t=rd(!1),e=t[0];return t=n_.bind(null,t[1]),Tt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ae,i=Tt();if(se){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),Se===null)throw Error(M(349));ar&30||ig(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,id(og.bind(null,r,s,t),[t]),r.flags|=2048,gs(9,sg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Tt(),e=Se.identifierPrefix;if(se){var n=Vt,r=bt;n=(r&~(1<<32-mt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ps++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=t_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},o_={readContext:st,useCallback:pg,useContext:st,useEffect:Rc,useImperativeHandle:dg,useInsertionEffect:cg,useLayoutEffect:hg,useMemo:mg,useReducer:Il,useRef:ug,useState:function(){return Il(ms)},useDebugValue:Nc,useDeferredValue:function(t){var e=ot();return gg(e,ye.memoizedState,t)},useTransition:function(){var t=Il(ms)[0],e=ot().memoizedState;return[t,e]},useMutableSource:ng,useSyncExternalStore:rg,useId:yg,unstable_isNewReconciler:!1},a_={readContext:st,useCallback:pg,useContext:st,useEffect:Rc,useImperativeHandle:dg,useInsertionEffect:cg,useLayoutEffect:hg,useMemo:mg,useReducer:Tl,useRef:ug,useState:function(){return Tl(ms)},useDebugValue:Nc,useDeferredValue:function(t){var e=ot();return ye===null?e.memoizedState=t:gg(e,ye.memoizedState,t)},useTransition:function(){var t=Tl(ms)[0],e=ot().memoizedState;return[t,e]},useMutableSource:ng,useSyncExternalStore:rg,useId:yg,unstable_isNewReconciler:!1};function ut(t,e){if(t&&t.defaultProps){e=le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function _u(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _a={isMounted:function(t){return(t=t._reactInternals)?mr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Me(),i=Cn(t),s=$t(r,i);s.payload=e,n!=null&&(s.callback=n),e=Tn(t,s,i),e!==null&&(gt(e,t,i,r),vo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Me(),i=Cn(t),s=$t(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Tn(t,s,i),e!==null&&(gt(e,t,i,r),vo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Me(),r=Cn(t),i=$t(n,r);i.tag=2,e!=null&&(i.callback=e),e=Tn(t,i,r),e!==null&&(gt(e,t,r,n),vo(e,t,r))}};function sd(t,e,n,r,i,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,a):e.prototype&&e.prototype.isPureReactComponent?!ls(n,r)||!ls(i,s):!0}function Sg(t,e,n){var r=!1,i=On,s=e.contextType;return typeof s=="object"&&s!==null?s=st(s):(i=$e(e)?sr:Ne.current,r=e.contextTypes,s=(r=r!=null)?Qr(t,i):On),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_a,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function od(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&_a.enqueueReplaceState(e,e.state,null)}function Su(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ec(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=st(s):(s=$e(e)?sr:Ne.current,i.context=Qr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(_u(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&_a.enqueueReplaceState(i,i.state,null),Wo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ti(t,e){try{var n="",r=e;do n+=Mw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function kl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Eu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var l_=typeof WeakMap=="function"?WeakMap:Map;function Eg(t,e,n){n=$t(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Xo||(Xo=!0,Ou=r),Eu(t,e)},n}function Ig(t,e,n){n=$t(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Eu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Eu(t,e),typeof r!="function"&&(kn===null?kn=new Set([this]):kn.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function ad(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new l_;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=E_.bind(null,t,e,n),e.then(t,t))}function ld(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ud(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=$t(-1,1),e.tag=2,Tn(n,e,1))),n.lanes|=1),t)}var u_=Qt.ReactCurrentOwner,ze=!1;function De(t,e,n,r){e.child=t===null?Ym(e,null,n,r):Zr(e,t.child,n,r)}function cd(t,e,n,r,i){n=n.render;var s=e.ref;return $r(e,i),r=Pc(t,e,n,r,s,i),n=Ac(),t!==null&&!ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kt(t,e,i)):(se&&n&&mc(e),e.flags|=1,De(t,e,r,i),e.child)}function hd(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Fc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Tg(t,e,s,r,i)):(t=To(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ls,n(a,r)&&t.ref===e.ref)return Kt(t,e,i)}return e.flags|=1,t=Pn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Tg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ls(s,r)&&t.ref===e.ref)if(ze=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ze=!0);else return e.lanes=t.lanes,Kt(t,e,i)}return Iu(t,e,n,r,i)}function kg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Ur,We),We|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ee(Ur,We),We|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ee(Ur,We),We|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ee(Ur,We),We|=r;return De(t,e,i,n),e.child}function Cg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Iu(t,e,n,r,i){var s=$e(n)?sr:Ne.current;return s=Qr(e,s),$r(e,i),n=Pc(t,e,n,r,s,i),r=Ac(),t!==null&&!ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kt(t,e,i)):(se&&r&&mc(e),e.flags|=1,De(t,e,n,i),e.child)}function fd(t,e,n,r,i){if($e(n)){var s=!0;Vo(e)}else s=!1;if($r(e,i),e.stateNode===null)So(t,e),Sg(e,n,r),Su(e,n,r,i),r=!0;else if(t===null){var a=e.stateNode,u=e.memoizedProps;a.props=u;var c=a.context,f=n.contextType;typeof f=="object"&&f!==null?f=st(f):(f=$e(n)?sr:Ne.current,f=Qr(e,f));var _=n.getDerivedStateFromProps,m=typeof _=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==r||c!==f)&&od(e,a,r,f),cn=!1;var v=e.memoizedState;a.state=v,Wo(e,r,a,i),c=e.memoizedState,u!==r||v!==c||Be.current||cn?(typeof _=="function"&&(_u(e,n,_,r),c=e.memoizedState),(u=cn||sd(e,n,u,r,v,c,f))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),a.props=r,a.state=c,a.context=f,r=u):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,eg(t,e),u=e.memoizedProps,f=e.type===e.elementType?u:ut(e.type,u),a.props=f,m=e.pendingProps,v=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=st(c):(c=$e(n)?sr:Ne.current,c=Qr(e,c));var N=n.getDerivedStateFromProps;(_=typeof N=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==m||v!==c)&&od(e,a,r,c),cn=!1,v=e.memoizedState,a.state=v,Wo(e,r,a,i);var x=e.memoizedState;u!==m||v!==x||Be.current||cn?(typeof N=="function"&&(_u(e,n,N,r),x=e.memoizedState),(f=cn||sd(e,n,f,r,v,x,c)||!1)?(_||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),a.props=r,a.state=x,a.context=c,r=f):(typeof a.componentDidUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),r=!1)}return Tu(t,e,n,r,s,i)}function Tu(t,e,n,r,i,s){Cg(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return i&&Qf(e,n,!1),Kt(t,e,s);r=e.stateNode,u_.current=e;var u=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=Zr(e,t.child,null,s),e.child=Zr(e,null,u,s)):De(t,e,u,s),e.memoizedState=r.state,i&&Qf(e,n,!0),e.child}function Pg(t){var e=t.stateNode;e.pendingContext?Xf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Xf(t,e.context,!1),Ic(t,e.containerInfo)}function dd(t,e,n,r,i){return Yr(),yc(i),e.flags|=256,De(t,e,n,r),e.child}var ku={dehydrated:null,treeContext:null,retryLane:0};function Cu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ag(t,e,n){var r=e.pendingProps,i=oe.current,s=!1,a=(e.flags&128)!==0,u;if((u=a)||(u=t!==null&&t.memoizedState===null?!1:(i&2)!==0),u?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ee(oe,i&1),t===null)return vu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,s?(r=e.mode,s=e.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ia(a,r,0,null),t=tr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Cu(n),e.memoizedState=ku,t):xc(e,a));if(i=t.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return c_(t,e,a,r,u,i,n);if(s){s=r.fallback,a=e.mode,i=t.child,u=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=Pn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?s=Pn(u,s):(s=tr(s,a,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,a=t.child.memoizedState,a=a===null?Cu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=ku,r}return s=t.child,t=s.sibling,r=Pn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function xc(t,e){return e=Ia({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function so(t,e,n,r){return r!==null&&yc(r),Zr(e,t.child,null,n),t=xc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function c_(t,e,n,r,i,s,a){if(n)return e.flags&256?(e.flags&=-257,r=kl(Error(M(422))),so(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ia({mode:"visible",children:r.children},i,0,null),s=tr(s,i,a,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Zr(e,t.child,null,a),e.child.memoizedState=Cu(a),e.memoizedState=ku,s);if(!(e.mode&1))return so(t,e,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,s=Error(M(419)),r=kl(s,r,void 0),so(t,e,a,r)}if(u=(a&t.childLanes)!==0,ze||u){if(r=Se,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Gt(t,i),gt(r,t,i,-1))}return Uc(),r=kl(Error(M(421))),so(t,e,a,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=I_.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ge=In(i.nextSibling),Ke=e,se=!0,ht=null,t!==null&&(et[tt++]=bt,et[tt++]=Vt,et[tt++]=or,bt=t.id,Vt=t.overflow,or=e),e=xc(e,r.children),e.flags|=4096,e)}function pd(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),wu(t.return,e,n)}function Pl(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Rg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(De(t,e,r.children,n),r=oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pd(t,n,e);else if(t.tag===19)pd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ee(oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Go(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Pl(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Go(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Pl(e,!0,n,null,s);break;case"together":Pl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function So(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Kt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),lr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=Pn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function h_(t,e,n){switch(e.tag){case 3:Pg(e),Yr();break;case 5:tg(e);break;case 1:$e(e.type)&&Vo(e);break;case 4:Ic(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ee($o,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ee(oe,oe.current&1),e.flags|=128,null):n&e.child.childLanes?Ag(t,e,n):(ee(oe,oe.current&1),t=Kt(t,e,n),t!==null?t.sibling:null);ee(oe,oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Rg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(oe,oe.current),r)break;return null;case 22:case 23:return e.lanes=0,kg(t,e,n)}return Kt(t,e,n)}var Ng,Pu,xg,Og;Ng=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pu=function(){};xg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Qn(xt.current);var s=null;switch(n){case"input":i=Jl(t,i),r=Jl(t,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=Yl(t,i),r=Yl(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Fo)}eu(n,r);var a;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var u=i[f];for(a in u)u.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(ts.hasOwnProperty(f)?s||(s=[]):(s=s||[]).push(f,null));for(f in r){var c=r[f];if(u=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&c!==u&&(c!=null||u!=null))if(f==="style")if(u){for(a in u)!u.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&u[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(f,n)),n=c;else f==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,u=u?u.__html:void 0,c!=null&&u!==c&&(s=s||[]).push(f,c)):f==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(f,""+c):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(ts.hasOwnProperty(f)?(c!=null&&f==="onScroll"&&ne("scroll",t),s||u===c||(s=[])):(s=s||[]).push(f,c))}n&&(s=s||[]).push("style",n);var f=s;(e.updateQueue=f)&&(e.flags|=4)}};Og=function(t,e,n,r){n!==r&&(e.flags|=4)};function Mi(t,e){if(!se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ae(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function f_(t,e,n){var r=e.pendingProps;switch(gc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(e),null;case 1:return $e(e.type)&&bo(),Ae(e),null;case 3:return r=e.stateNode,ei(),re(Be),re(Ne),kc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ro(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ht!==null&&(Mu(ht),ht=null))),Pu(t,e),Ae(e),null;case 5:Tc(e);var i=Qn(ds.current);if(n=e.type,t!==null&&e.stateNode!=null)xg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return Ae(e),null}if(t=Qn(xt.current),ro(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Pt]=e,r[hs]=s,t=(e.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<Vi.length;i++)ne(Vi[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":If(r,s),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ne("invalid",r);break;case"textarea":kf(r,s),ne("invalid",r)}eu(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var u=s[a];a==="children"?typeof u=="string"?r.textContent!==u&&(s.suppressHydrationWarning!==!0&&no(r.textContent,u,t),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(s.suppressHydrationWarning!==!0&&no(r.textContent,u,t),i=["children",""+u]):ts.hasOwnProperty(a)&&u!=null&&a==="onScroll"&&ne("scroll",r)}switch(n){case"input":qs(r),Tf(r,s,!0);break;case"textarea":qs(r),Cf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Fo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=om(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[Pt]=e,t[hs]=r,Ng(t,e,!1,!1),e.stateNode=t;e:{switch(a=tu(n,r),n){case"dialog":ne("cancel",t),ne("close",t),i=r;break;case"iframe":case"object":case"embed":ne("load",t),i=r;break;case"video":case"audio":for(i=0;i<Vi.length;i++)ne(Vi[i],t);i=r;break;case"source":ne("error",t),i=r;break;case"img":case"image":case"link":ne("error",t),ne("load",t),i=r;break;case"details":ne("toggle",t),i=r;break;case"input":If(t,r),i=Jl(t,r),ne("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),ne("invalid",t);break;case"textarea":kf(t,r),i=Yl(t,r),ne("invalid",t);break;default:i=r}eu(n,i),u=i;for(s in u)if(u.hasOwnProperty(s)){var c=u[s];s==="style"?um(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&am(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ns(t,c):typeof c=="number"&&ns(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ts.hasOwnProperty(s)?c!=null&&s==="onScroll"&&ne("scroll",t):c!=null&&tc(t,s,c,a))}switch(n){case"input":qs(t),Tf(t,r,!1);break;case"textarea":qs(t),Cf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+xn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?br(t,!!r.multiple,s,!1):r.defaultValue!=null&&br(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Fo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ae(e),null;case 6:if(t&&e.stateNode!=null)Og(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=Qn(ds.current),Qn(xt.current),ro(e)){if(r=e.stateNode,n=e.memoizedProps,r[Pt]=e,(s=r.nodeValue!==n)&&(t=Ke,t!==null))switch(t.tag){case 3:no(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&no(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=e,e.stateNode=r}return Ae(e),null;case 13:if(re(oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(se&&Ge!==null&&e.mode&1&&!(e.flags&128))Xm(),Yr(),e.flags|=98560,s=!1;else if(s=ro(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(M(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[Pt]=e}else Yr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ae(e),s=!1}else ht!==null&&(Mu(ht),ht=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||oe.current&1?ve===0&&(ve=3):Uc())),e.updateQueue!==null&&(e.flags|=4),Ae(e),null);case 4:return ei(),Pu(t,e),t===null&&us(e.stateNode.containerInfo),Ae(e),null;case 10:return _c(e.type._context),Ae(e),null;case 17:return $e(e.type)&&bo(),Ae(e),null;case 19:if(re(oe),s=e.memoizedState,s===null)return Ae(e),null;if(r=(e.flags&128)!==0,a=s.rendering,a===null)if(r)Mi(s,!1);else{if(ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Go(t),a!==null){for(e.flags|=128,Mi(s,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ee(oe,oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&fe()>ni&&(e.flags|=128,r=!0,Mi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Go(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Mi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!se)return Ae(e),null}else 2*fe()-s.renderingStartTime>ni&&n!==1073741824&&(e.flags|=128,r=!0,Mi(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=fe(),e.sibling=null,n=oe.current,ee(oe,r?n&1|2:n&1),e):(Ae(e),null);case 22:case 23:return jc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?We&1073741824&&(Ae(e),e.subtreeFlags&6&&(e.flags|=8192)):Ae(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function d_(t,e){switch(gc(e),e.tag){case 1:return $e(e.type)&&bo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ei(),re(Be),re(Ne),kc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Tc(e),null;case 13:if(re(oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));Yr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return re(oe),null;case 4:return ei(),null;case 10:return _c(e.type._context),null;case 22:case 23:return jc(),null;case 24:return null;default:return null}}var oo=!1,Re=!1,p_=typeof WeakSet=="function"?WeakSet:Set,z=null;function jr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(t,e,r)}else n.current=null}function Au(t,e,n){try{n()}catch(r){ue(t,e,r)}}var md=!1;function m_(t,e){if(hu=Mo,t=Um(),pc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,u=-1,c=-1,f=0,_=0,m=t,v=null;t:for(;;){for(var N;m!==n||i!==0&&m.nodeType!==3||(u=a+i),m!==s||r!==0&&m.nodeType!==3||(c=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(N=m.firstChild)!==null;)v=m,m=N;for(;;){if(m===t)break t;if(v===n&&++f===i&&(u=a),v===s&&++_===r&&(c=a),(N=m.nextSibling)!==null)break;m=v,v=m.parentNode}m=N}n=u===-1||c===-1?null:{start:u,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(fu={focusedElem:t,selectionRange:n},Mo=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var O=x.memoizedProps,L=x.memoizedState,E=e.stateNode,w=E.getSnapshotBeforeUpdate(e.elementType===e.type?O:ut(e.type,O),L);E.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(D){ue(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return x=md,md=!1,x}function Ki(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Au(e,n,s)}i=i.next}while(i!==r)}}function Sa(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ru(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Dg(t){var e=t.alternate;e!==null&&(t.alternate=null,Dg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Pt],delete e[hs],delete e[mu],delete e[Q0],delete e[Y0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Lg(t){return t.tag===5||t.tag===3||t.tag===4}function gd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Lg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Fo));else if(r!==4&&(t=t.child,t!==null))for(Nu(t,e,n),t=t.sibling;t!==null;)Nu(t,e,n),t=t.sibling}function xu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(xu(t,e,n),t=t.sibling;t!==null;)xu(t,e,n),t=t.sibling}var Ie=null,ct=!1;function on(t,e,n){for(n=n.child;n!==null;)Mg(t,e,n),n=n.sibling}function Mg(t,e,n){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(da,n)}catch{}switch(n.tag){case 5:Re||jr(n,e);case 6:var r=Ie,i=ct;Ie=null,on(t,e,n),Ie=r,ct=i,Ie!==null&&(ct?(t=Ie,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(ct?(t=Ie,n=n.stateNode,t.nodeType===8?wl(t.parentNode,n):t.nodeType===1&&wl(t,n),os(t)):wl(Ie,n.stateNode));break;case 4:r=Ie,i=ct,Ie=n.stateNode.containerInfo,ct=!0,on(t,e,n),Ie=r,ct=i;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Au(n,e,a),i=i.next}while(i!==r)}on(t,e,n);break;case 1:if(!Re&&(jr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){ue(n,e,u)}on(t,e,n);break;case 21:on(t,e,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,on(t,e,n),Re=r):on(t,e,n);break;default:on(t,e,n)}}function yd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new p_),e.forEach(function(r){var i=T_.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,a=e,u=a;e:for(;u!==null;){switch(u.tag){case 5:Ie=u.stateNode,ct=!1;break e;case 3:Ie=u.stateNode.containerInfo,ct=!0;break e;case 4:Ie=u.stateNode.containerInfo,ct=!0;break e}u=u.return}if(Ie===null)throw Error(M(160));Mg(s,a,i),Ie=null,ct=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(f){ue(i,e,f)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)jg(e,t),e=e.sibling}function jg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(lt(e,t),It(t),r&4){try{Ki(3,t,t.return),Sa(3,t)}catch(O){ue(t,t.return,O)}try{Ki(5,t,t.return)}catch(O){ue(t,t.return,O)}}break;case 1:lt(e,t),It(t),r&512&&n!==null&&jr(n,n.return);break;case 5:if(lt(e,t),It(t),r&512&&n!==null&&jr(n,n.return),t.flags&32){var i=t.stateNode;try{ns(i,"")}catch(O){ue(t,t.return,O)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,u=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{u==="input"&&s.type==="radio"&&s.name!=null&&im(i,s),tu(u,a);var f=tu(u,s);for(a=0;a<c.length;a+=2){var _=c[a],m=c[a+1];_==="style"?um(i,m):_==="dangerouslySetInnerHTML"?am(i,m):_==="children"?ns(i,m):tc(i,_,m,f)}switch(u){case"input":Xl(i,s);break;case"textarea":sm(i,s);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var N=s.value;N!=null?br(i,!!s.multiple,N,!1):v!==!!s.multiple&&(s.defaultValue!=null?br(i,!!s.multiple,s.defaultValue,!0):br(i,!!s.multiple,s.multiple?[]:"",!1))}i[hs]=s}catch(O){ue(t,t.return,O)}}break;case 6:if(lt(e,t),It(t),r&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(O){ue(t,t.return,O)}}break;case 3:if(lt(e,t),It(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{os(e.containerInfo)}catch(O){ue(t,t.return,O)}break;case 4:lt(e,t),It(t);break;case 13:lt(e,t),It(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Lc=fe())),r&4&&yd(t);break;case 22:if(_=n!==null&&n.memoizedState!==null,t.mode&1?(Re=(f=Re)||_,lt(e,t),Re=f):lt(e,t),It(t),r&8192){if(f=t.memoizedState!==null,(t.stateNode.isHidden=f)&&!_&&t.mode&1)for(z=t,_=t.child;_!==null;){for(m=z=_;z!==null;){switch(v=z,N=v.child,v.tag){case 0:case 11:case 14:case 15:Ki(4,v,v.return);break;case 1:jr(v,v.return);var x=v.stateNode;if(typeof x.componentWillUnmount=="function"){r=v,n=v.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(O){ue(r,n,O)}}break;case 5:jr(v,v.return);break;case 22:if(v.memoizedState!==null){wd(m);continue}}N!==null?(N.return=v,z=N):wd(m)}_=_.sibling}e:for(_=null,m=t;;){if(m.tag===5){if(_===null){_=m;try{i=m.stateNode,f?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(u=m.stateNode,c=m.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,u.style.display=lm("display",a))}catch(O){ue(t,t.return,O)}}}else if(m.tag===6){if(_===null)try{m.stateNode.nodeValue=f?"":m.memoizedProps}catch(O){ue(t,t.return,O)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;_===m&&(_=null),m=m.return}_===m&&(_=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:lt(e,t),It(t),r&4&&yd(t);break;case 21:break;default:lt(e,t),It(t)}}function It(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Lg(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ns(i,""),r.flags&=-33);var s=gd(t);xu(t,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,u=gd(t);Nu(t,u,a);break;default:throw Error(M(161))}}catch(c){ue(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function g_(t,e,n){z=t,Ug(t)}function Ug(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var i=z,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||oo;if(!a){var u=i.alternate,c=u!==null&&u.memoizedState!==null||Re;u=oo;var f=Re;if(oo=a,(Re=c)&&!f)for(z=i;z!==null;)a=z,c=a.child,a.tag===22&&a.memoizedState!==null?_d(i):c!==null?(c.return=a,z=c):_d(i);for(;s!==null;)z=s,Ug(s),s=s.sibling;z=i,oo=u,Re=f}vd(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,z=s):vd(t)}}function vd(t){for(;z!==null;){var e=z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Re||Sa(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Re)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ut(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&nd(e,s,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}nd(e,a,n)}break;case 5:var u=e.stateNode;if(n===null&&e.flags&4){n=u;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var f=e.alternate;if(f!==null){var _=f.memoizedState;if(_!==null){var m=_.dehydrated;m!==null&&os(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Re||e.flags&512&&Ru(e)}catch(v){ue(e,e.return,v)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function wd(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function _d(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Sa(4,e)}catch(c){ue(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){ue(e,i,c)}}var s=e.return;try{Ru(e)}catch(c){ue(e,s,c)}break;case 5:var a=e.return;try{Ru(e)}catch(c){ue(e,a,c)}}}catch(c){ue(e,e.return,c)}if(e===t){z=null;break}var u=e.sibling;if(u!==null){u.return=e.return,z=u;break}z=e.return}}var y_=Math.ceil,Jo=Qt.ReactCurrentDispatcher,Oc=Qt.ReactCurrentOwner,rt=Qt.ReactCurrentBatchConfig,X=0,Se=null,de=null,Te=0,We=0,Ur=jn(0),ve=0,ys=null,lr=0,Ea=0,Dc=0,qi=null,Ve=null,Lc=0,ni=1/0,jt=null,Xo=!1,Ou=null,kn=null,ao=!1,vn=null,Qo=0,Ji=0,Du=null,Eo=-1,Io=0;function Me(){return X&6?fe():Eo!==-1?Eo:Eo=fe()}function Cn(t){return t.mode&1?X&2&&Te!==0?Te&-Te:e_.transition!==null?(Io===0&&(Io=Sm()),Io):(t=Y,t!==0||(t=window.event,t=t===void 0?16:Am(t.type)),t):1}function gt(t,e,n,r){if(50<Ji)throw Ji=0,Du=null,Error(M(185));Ts(t,n,r),(!(X&2)||t!==Se)&&(t===Se&&(!(X&2)&&(Ea|=n),ve===4&&fn(t,Te)),He(t,r),n===1&&X===0&&!(e.mode&1)&&(ni=fe()+500,va&&Un()))}function He(t,e){var n=t.callbackNode;e0(t,e);var r=Lo(t,t===Se?Te:0);if(r===0)n!==null&&Rf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Rf(n),e===1)t.tag===0?Z0(Sd.bind(null,t)):Km(Sd.bind(null,t)),J0(function(){!(X&6)&&Un()}),n=null;else{switch(Em(r)){case 1:n=oc;break;case 4:n=wm;break;case 16:n=Do;break;case 536870912:n=_m;break;default:n=Do}n=Wg(n,Fg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Fg(t,e){if(Eo=-1,Io=0,X&6)throw Error(M(327));var n=t.callbackNode;if(Hr()&&t.callbackNode!==n)return null;var r=Lo(t,t===Se?Te:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Yo(t,r);else{e=r;var i=X;X|=2;var s=Vg();(Se!==t||Te!==e)&&(jt=null,ni=fe()+500,er(t,e));do try{__();break}catch(u){bg(t,u)}while(!0);wc(),Jo.current=s,X=i,de!==null?e=0:(Se=null,Te=0,e=ve)}if(e!==0){if(e===2&&(i=ou(t),i!==0&&(r=i,e=Lu(t,i))),e===1)throw n=ys,er(t,0),fn(t,r),He(t,fe()),n;if(e===6)fn(t,r);else{if(i=t.current.alternate,!(r&30)&&!v_(i)&&(e=Yo(t,r),e===2&&(s=ou(t),s!==0&&(r=s,e=Lu(t,s))),e===1))throw n=ys,er(t,0),fn(t,r),He(t,fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:Gn(t,Ve,jt);break;case 3:if(fn(t,r),(r&130023424)===r&&(e=Lc+500-fe(),10<e)){if(Lo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Me(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=pu(Gn.bind(null,t,Ve,jt),e);break}Gn(t,Ve,jt);break;case 4:if(fn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var a=31-mt(r);s=1<<a,a=e[a],a>i&&(i=a),r&=~s}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*y_(r/1960))-r,10<r){t.timeoutHandle=pu(Gn.bind(null,t,Ve,jt),r);break}Gn(t,Ve,jt);break;case 5:Gn(t,Ve,jt);break;default:throw Error(M(329))}}}return He(t,fe()),t.callbackNode===n?Fg.bind(null,t):null}function Lu(t,e){var n=qi;return t.current.memoizedState.isDehydrated&&(er(t,e).flags|=256),t=Yo(t,e),t!==2&&(e=Ve,Ve=n,e!==null&&Mu(e)),t}function Mu(t){Ve===null?Ve=t:Ve.push.apply(Ve,t)}function v_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!yt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fn(t,e){for(e&=~Dc,e&=~Ea,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mt(e),r=1<<n;t[n]=-1,e&=~r}}function Sd(t){if(X&6)throw Error(M(327));Hr();var e=Lo(t,0);if(!(e&1))return He(t,fe()),null;var n=Yo(t,e);if(t.tag!==0&&n===2){var r=ou(t);r!==0&&(e=r,n=Lu(t,r))}if(n===1)throw n=ys,er(t,0),fn(t,e),He(t,fe()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gn(t,Ve,jt),He(t,fe()),null}function Mc(t,e){var n=X;X|=1;try{return t(e)}finally{X=n,X===0&&(ni=fe()+500,va&&Un())}}function ur(t){vn!==null&&vn.tag===0&&!(X&6)&&Hr();var e=X;X|=1;var n=rt.transition,r=Y;try{if(rt.transition=null,Y=1,t)return t()}finally{Y=r,rt.transition=n,X=e,!(X&6)&&Un()}}function jc(){We=Ur.current,re(Ur)}function er(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,q0(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(gc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bo();break;case 3:ei(),re(Be),re(Ne),kc();break;case 5:Tc(r);break;case 4:ei();break;case 13:re(oe);break;case 19:re(oe);break;case 10:_c(r.type._context);break;case 22:case 23:jc()}n=n.return}if(Se=t,de=t=Pn(t.current,null),Te=We=e,ve=0,ys=null,Dc=Ea=lr=0,Ve=qi=null,Xn!==null){for(e=0;e<Xn.length;e++)if(n=Xn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}Xn=null}return t}function bg(t,e){do{var n=de;try{if(wc(),wo.current=qo,Ko){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ko=!1}if(ar=0,_e=ye=ae=null,Gi=!1,ps=0,Oc.current=null,n===null||n.return===null){ve=1,ys=e,de=null;break}e:{var s=t,a=n.return,u=n,c=e;if(e=Te,u.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var f=c,_=u,m=_.tag;if(!(_.mode&1)&&(m===0||m===11||m===15)){var v=_.alternate;v?(_.updateQueue=v.updateQueue,_.memoizedState=v.memoizedState,_.lanes=v.lanes):(_.updateQueue=null,_.memoizedState=null)}var N=ld(a);if(N!==null){N.flags&=-257,ud(N,a,u,s,e),N.mode&1&&ad(s,f,e),e=N,c=f;var x=e.updateQueue;if(x===null){var O=new Set;O.add(c),e.updateQueue=O}else x.add(c);break e}else{if(!(e&1)){ad(s,f,e),Uc();break e}c=Error(M(426))}}else if(se&&u.mode&1){var L=ld(a);if(L!==null){!(L.flags&65536)&&(L.flags|=256),ud(L,a,u,s,e),yc(ti(c,u));break e}}s=c=ti(c,u),ve!==4&&(ve=2),qi===null?qi=[s]:qi.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=Eg(s,c,e);td(s,E);break e;case 1:u=c;var w=s.type,k=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(kn===null||!kn.has(k)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=Ig(s,u,e);td(s,D);break e}}s=s.return}while(s!==null)}Bg(n)}catch(F){e=F,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function Vg(){var t=Jo.current;return Jo.current=qo,t===null?qo:t}function Uc(){(ve===0||ve===3||ve===2)&&(ve=4),Se===null||!(lr&268435455)&&!(Ea&268435455)||fn(Se,Te)}function Yo(t,e){var n=X;X|=2;var r=Vg();(Se!==t||Te!==e)&&(jt=null,er(t,e));do try{w_();break}catch(i){bg(t,i)}while(!0);if(wc(),X=n,Jo.current=r,de!==null)throw Error(M(261));return Se=null,Te=0,ve}function w_(){for(;de!==null;)zg(de)}function __(){for(;de!==null&&!Ww();)zg(de)}function zg(t){var e=Hg(t.alternate,t,We);t.memoizedProps=t.pendingProps,e===null?Bg(t):de=e,Oc.current=null}function Bg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=d_(n,e),n!==null){n.flags&=32767,de=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ve=6,de=null;return}}else if(n=f_(n,e,We),n!==null){de=n;return}if(e=e.sibling,e!==null){de=e;return}de=e=t}while(e!==null);ve===0&&(ve=5)}function Gn(t,e,n){var r=Y,i=rt.transition;try{rt.transition=null,Y=1,S_(t,e,n,r)}finally{rt.transition=i,Y=r}return null}function S_(t,e,n,r){do Hr();while(vn!==null);if(X&6)throw Error(M(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(t0(t,s),t===Se&&(de=Se=null,Te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ao||(ao=!0,Wg(Do,function(){return Hr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=rt.transition,rt.transition=null;var a=Y;Y=1;var u=X;X|=4,Oc.current=null,m_(t,n),jg(n,t),z0(fu),Mo=!!hu,fu=hu=null,t.current=n,g_(n),Gw(),X=u,Y=a,rt.transition=s}else t.current=n;if(ao&&(ao=!1,vn=t,Qo=i),s=t.pendingLanes,s===0&&(kn=null),Jw(n.stateNode),He(t,fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Xo)throw Xo=!1,t=Ou,Ou=null,t;return Qo&1&&t.tag!==0&&Hr(),s=t.pendingLanes,s&1?t===Du?Ji++:(Ji=0,Du=t):Ji=0,Un(),null}function Hr(){if(vn!==null){var t=Em(Qo),e=rt.transition,n=Y;try{if(rt.transition=null,Y=16>t?16:t,vn===null)var r=!1;else{if(t=vn,vn=null,Qo=0,X&6)throw Error(M(331));var i=X;for(X|=4,z=t.current;z!==null;){var s=z,a=s.child;if(z.flags&16){var u=s.deletions;if(u!==null){for(var c=0;c<u.length;c++){var f=u[c];for(z=f;z!==null;){var _=z;switch(_.tag){case 0:case 11:case 15:Ki(8,_,s)}var m=_.child;if(m!==null)m.return=_,z=m;else for(;z!==null;){_=z;var v=_.sibling,N=_.return;if(Dg(_),_===f){z=null;break}if(v!==null){v.return=N,z=v;break}z=N}}}var x=s.alternate;if(x!==null){var O=x.child;if(O!==null){x.child=null;do{var L=O.sibling;O.sibling=null,O=L}while(O!==null)}}z=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,z=a;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ki(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,z=E;break e}z=s.return}}var w=t.current;for(z=w;z!==null;){a=z;var k=a.child;if(a.subtreeFlags&2064&&k!==null)k.return=a,z=k;else e:for(a=w;z!==null;){if(u=z,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Sa(9,u)}}catch(F){ue(u,u.return,F)}if(u===a){z=null;break e}var D=u.sibling;if(D!==null){D.return=u.return,z=D;break e}z=u.return}}if(X=i,Un(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(da,t)}catch{}r=!0}return r}finally{Y=n,rt.transition=e}}return!1}function Ed(t,e,n){e=ti(n,e),e=Eg(t,e,1),t=Tn(t,e,1),e=Me(),t!==null&&(Ts(t,1,e),He(t,e))}function ue(t,e,n){if(t.tag===3)Ed(t,t,n);else for(;e!==null;){if(e.tag===3){Ed(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kn===null||!kn.has(r))){t=ti(n,t),t=Ig(e,t,1),e=Tn(e,t,1),t=Me(),e!==null&&(Ts(e,1,t),He(e,t));break}}e=e.return}}function E_(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Me(),t.pingedLanes|=t.suspendedLanes&n,Se===t&&(Te&n)===n&&(ve===4||ve===3&&(Te&130023424)===Te&&500>fe()-Lc?er(t,0):Dc|=n),He(t,e)}function $g(t,e){e===0&&(t.mode&1?(e=Qs,Qs<<=1,!(Qs&130023424)&&(Qs=4194304)):e=1);var n=Me();t=Gt(t,e),t!==null&&(Ts(t,e,n),He(t,n))}function I_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$g(t,n)}function T_(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),$g(t,n)}var Hg;Hg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Be.current)ze=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ze=!1,h_(t,e,n);ze=!!(t.flags&131072)}else ze=!1,se&&e.flags&1048576&&qm(e,Bo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;So(t,e),t=e.pendingProps;var i=Qr(e,Ne.current);$r(e,n),i=Pc(null,e,r,t,i,n);var s=Ac();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$e(r)?(s=!0,Vo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ec(e),i.updater=_a,e.stateNode=i,i._reactInternals=e,Su(e,r,t,n),e=Tu(null,e,r,!0,s,n)):(e.tag=0,se&&s&&mc(e),De(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(So(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=C_(r),t=ut(r,t),i){case 0:e=Iu(null,e,r,t,n);break e;case 1:e=fd(null,e,r,t,n);break e;case 11:e=cd(null,e,r,t,n);break e;case 14:e=hd(null,e,r,ut(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),Iu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),fd(t,e,r,i,n);case 3:e:{if(Pg(e),t===null)throw Error(M(387));r=e.pendingProps,s=e.memoizedState,i=s.element,eg(t,e),Wo(e,r,null,n);var a=e.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ti(Error(M(423)),e),e=dd(t,e,r,n,i);break e}else if(r!==i){i=ti(Error(M(424)),e),e=dd(t,e,r,n,i);break e}else for(Ge=In(e.stateNode.containerInfo.firstChild),Ke=e,se=!0,ht=null,n=Ym(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yr(),r===i){e=Kt(t,e,n);break e}De(t,e,r,n)}e=e.child}return e;case 5:return tg(e),t===null&&vu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,du(r,i)?a=null:s!==null&&du(r,s)&&(e.flags|=32),Cg(t,e),De(t,e,a,n),e.child;case 6:return t===null&&vu(e),null;case 13:return Ag(t,e,n);case 4:return Ic(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Zr(e,null,r,n):De(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),cd(t,e,r,i,n);case 7:return De(t,e,e.pendingProps,n),e.child;case 8:return De(t,e,e.pendingProps.children,n),e.child;case 12:return De(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,a=i.value,ee($o,r._currentValue),r._currentValue=a,s!==null)if(yt(s.value,a)){if(s.children===i.children&&!Be.current){e=Kt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var u=s.dependencies;if(u!==null){a=s.child;for(var c=u.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=$t(-1,n&-n),c.tag=2;var f=s.updateQueue;if(f!==null){f=f.shared;var _=f.pending;_===null?c.next=c:(c.next=_.next,_.next=c),f.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),wu(s.return,n,e),u.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(M(341));a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),wu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}De(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,$r(e,n),i=st(i),r=r(i),e.flags|=1,De(t,e,r,n),e.child;case 14:return r=e.type,i=ut(r,e.pendingProps),i=ut(r.type,i),hd(t,e,r,i,n);case 15:return Tg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),So(t,e),e.tag=1,$e(r)?(t=!0,Vo(e)):t=!1,$r(e,n),Sg(e,r,i),Su(e,r,i,n),Tu(null,e,r,!0,t,n);case 19:return Rg(t,e,n);case 22:return kg(t,e,n)}throw Error(M(156,e.tag))};function Wg(t,e){return vm(t,e)}function k_(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(t,e,n,r){return new k_(t,e,n,r)}function Fc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function C_(t){if(typeof t=="function")return Fc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===rc)return 11;if(t===ic)return 14}return 2}function Pn(t,e){var n=t.alternate;return n===null?(n=nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function To(t,e,n,r,i,s){var a=2;if(r=t,typeof t=="function")Fc(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Pr:return tr(n.children,i,s,e);case nc:a=8,i|=8;break;case Wl:return t=nt(12,n,e,i|2),t.elementType=Wl,t.lanes=s,t;case Gl:return t=nt(13,n,e,i),t.elementType=Gl,t.lanes=s,t;case Kl:return t=nt(19,n,e,i),t.elementType=Kl,t.lanes=s,t;case tm:return Ia(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Zp:a=10;break e;case em:a=9;break e;case rc:a=11;break e;case ic:a=14;break e;case un:a=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=nt(a,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function tr(t,e,n,r){return t=nt(7,t,r,e),t.lanes=n,t}function Ia(t,e,n,r){return t=nt(22,t,r,e),t.elementType=tm,t.lanes=n,t.stateNode={isHidden:!1},t}function Al(t,e,n){return t=nt(6,t,null,e),t.lanes=n,t}function Rl(t,e,n){return e=nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function P_(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ll(0),this.expirationTimes=ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ll(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bc(t,e,n,r,i,s,a,u,c){return t=new P_(t,e,n,u,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=nt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ec(s),t}function A_(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Gg(t){if(!t)return On;t=t._reactInternals;e:{if(mr(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($e(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if($e(n))return Gm(t,n,e)}return e}function Kg(t,e,n,r,i,s,a,u,c){return t=bc(n,r,!0,t,i,s,a,u,c),t.context=Gg(null),n=t.current,r=Me(),i=Cn(n),s=$t(r,i),s.callback=e??null,Tn(n,s,i),t.current.lanes=i,Ts(t,i,r),He(t,r),t}function Ta(t,e,n,r){var i=e.current,s=Me(),a=Cn(i);return n=Gg(n),e.context===null?e.context=n:e.pendingContext=n,e=$t(s,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Tn(i,e,a),t!==null&&(gt(t,i,a,s),vo(t,i,a)),a}function Zo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Id(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vc(t,e){Id(t,e),(t=t.alternate)&&Id(t,e)}function R_(){return null}var qg=typeof reportError=="function"?reportError:function(t){console.error(t)};function zc(t){this._internalRoot=t}ka.prototype.render=zc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));Ta(t,e,null,null)};ka.prototype.unmount=zc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ur(function(){Ta(null,t,null,null)}),e[Wt]=null}};function ka(t){this._internalRoot=t}ka.prototype.unstable_scheduleHydration=function(t){if(t){var e=km();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hn.length&&e!==0&&e<hn[n].priority;n++);hn.splice(n,0,t),n===0&&Pm(t)}};function Bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ca(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Td(){}function N_(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var f=Zo(a);s.call(f)}}var a=Kg(e,r,t,0,null,!1,!1,"",Td);return t._reactRootContainer=a,t[Wt]=a.current,us(t.nodeType===8?t.parentNode:t),ur(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var f=Zo(c);u.call(f)}}var c=bc(t,0,!1,null,null,!1,!1,"",Td);return t._reactRootContainer=c,t[Wt]=c.current,us(t.nodeType===8?t.parentNode:t),ur(function(){Ta(e,c,n,r)}),c}function Pa(t,e,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var u=i;i=function(){var c=Zo(a);u.call(c)}}Ta(e,a,t,i)}else a=N_(n,e,t,i,r);return Zo(a)}Im=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=bi(e.pendingLanes);n!==0&&(ac(e,n|1),He(e,fe()),!(X&6)&&(ni=fe()+500,Un()))}break;case 13:ur(function(){var r=Gt(t,1);if(r!==null){var i=Me();gt(r,t,1,i)}}),Vc(t,1)}};lc=function(t){if(t.tag===13){var e=Gt(t,134217728);if(e!==null){var n=Me();gt(e,t,134217728,n)}Vc(t,134217728)}};Tm=function(t){if(t.tag===13){var e=Cn(t),n=Gt(t,e);if(n!==null){var r=Me();gt(n,t,e,r)}Vc(t,e)}};km=function(){return Y};Cm=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};ru=function(t,e,n){switch(e){case"input":if(Xl(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ya(r);if(!i)throw Error(M(90));rm(r),Xl(r,i)}}}break;case"textarea":sm(t,n);break;case"select":e=n.value,e!=null&&br(t,!!n.multiple,e,!1)}};fm=Mc;dm=ur;var x_={usingClientEntryPoint:!1,Events:[Cs,xr,ya,cm,hm,Mc]},ji={findFiberByHostInstance:Jn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},O_={bundleType:ji.bundleType,version:ji.version,rendererPackageName:ji.rendererPackageName,rendererConfig:ji.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=gm(t),t===null?null:t.stateNode},findFiberByHostInstance:ji.findFiberByHostInstance||R_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lo.isDisabled&&lo.supportsFiber)try{da=lo.inject(O_),Nt=lo}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x_;Xe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bc(e))throw Error(M(200));return A_(t,e,null,n)};Xe.createRoot=function(t,e){if(!Bc(t))throw Error(M(299));var n=!1,r="",i=qg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=bc(t,1,!1,null,null,n,!1,r,i),t[Wt]=e.current,us(t.nodeType===8?t.parentNode:t),new zc(e)};Xe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=gm(e),t=t===null?null:t.stateNode,t};Xe.flushSync=function(t){return ur(t)};Xe.hydrate=function(t,e,n){if(!Ca(e))throw Error(M(200));return Pa(null,t,e,!0,n)};Xe.hydrateRoot=function(t,e,n){if(!Bc(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=qg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Kg(e,null,t,1,n??null,i,!1,s,a),t[Wt]=e.current,us(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ka(e)};Xe.render=function(t,e,n){if(!Ca(e))throw Error(M(200));return Pa(null,t,e,!1,n)};Xe.unmountComponentAtNode=function(t){if(!Ca(t))throw Error(M(40));return t._reactRootContainer?(ur(function(){Pa(null,null,t,!1,function(){t._reactRootContainer=null,t[Wt]=null})}),!0):!1};Xe.unstable_batchedUpdates=Mc;Xe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ca(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return Pa(t,e,n,!1,r)};Xe.version="18.3.1-next-f1338f8080-20240426";function Jg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jg)}catch(t){console.error(t)}}Jg(),Jp.exports=Xe;var D_=Jp.exports,kd=D_;$l.createRoot=kd.createRoot,$l.hydrateRoot=kd.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vs(){return vs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vs.apply(this,arguments)}var wn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(wn||(wn={}));const Cd="popstate";function L_(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:a,hash:u}=r.location;return ju("",{pathname:s,search:a,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ea(i)}return j_(e,n,null,t)}function me(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function $c(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function M_(){return Math.random().toString(36).substr(2,8)}function Pd(t,e){return{usr:t.state,key:t.key,idx:e}}function ju(t,e,n,r){return n===void 0&&(n=null),vs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?li(e):e,{state:n,key:e&&e.key||r||M_()})}function ea(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function li(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function j_(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,u=wn.Pop,c=null,f=_();f==null&&(f=0,a.replaceState(vs({},a.state,{idx:f}),""));function _(){return(a.state||{idx:null}).idx}function m(){u=wn.Pop;let L=_(),E=L==null?null:L-f;f=L,c&&c({action:u,location:O.location,delta:E})}function v(L,E){u=wn.Push;let w=ju(O.location,L,E);f=_()+1;let k=Pd(w,f),D=O.createHref(w);try{a.pushState(k,"",D)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(D)}s&&c&&c({action:u,location:O.location,delta:1})}function N(L,E){u=wn.Replace;let w=ju(O.location,L,E);f=_();let k=Pd(w,f),D=O.createHref(w);a.replaceState(k,"",D),s&&c&&c({action:u,location:O.location,delta:0})}function x(L){let E=i.location.origin!=="null"?i.location.origin:i.location.href,w=typeof L=="string"?L:ea(L);return w=w.replace(/ $/,"%20"),me(E,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,E)}let O={get action(){return u},get location(){return t(i,a)},listen(L){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Cd,m),c=L,()=>{i.removeEventListener(Cd,m),c=null}},createHref(L){return e(i,L)},createURL:x,encodeLocation(L){let E=x(L);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:v,replace:N,go(L){return a.go(L)}};return O}var Ad;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ad||(Ad={}));function U_(t,e,n){return n===void 0&&(n="/"),F_(t,e,n)}function F_(t,e,n,r){let i=typeof e=="string"?li(e):e,s=Hc(i.pathname||"/",n);if(s==null)return null;let a=Xg(t);b_(a);let u=null;for(let c=0;u==null&&c<a.length;++c){let f=Q_(s);u=q_(a[c],f)}return u}function Xg(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,u)=>{let c={relativePath:u===void 0?s.path||"":u,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};c.relativePath.startsWith("/")&&(me(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let f=An([r,c.relativePath]),_=n.concat(c);s.children&&s.children.length>0&&(me(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),Xg(s.children,e,_,f)),!(s.path==null&&!s.index)&&e.push({path:f,score:G_(f,s.index),routesMeta:_})};return t.forEach((s,a)=>{var u;if(s.path===""||!((u=s.path)!=null&&u.includes("?")))i(s,a);else for(let c of Qg(s.path))i(s,a,c)}),e}function Qg(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=Qg(r.join("/")),u=[];return u.push(...a.map(c=>c===""?s:[s,c].join("/"))),i&&u.push(...a),u.map(c=>t.startsWith("/")&&c===""?"/":c)}function b_(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:K_(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const V_=/^:[\w-]+$/,z_=3,B_=2,$_=1,H_=10,W_=-2,Rd=t=>t==="*";function G_(t,e){let n=t.split("/"),r=n.length;return n.some(Rd)&&(r+=W_),e&&(r+=B_),n.filter(i=>!Rd(i)).reduce((i,s)=>i+(V_.test(s)?z_:s===""?$_:H_),r)}function K_(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function q_(t,e,n){let{routesMeta:r}=t,i={},s="/",a=[];for(let u=0;u<r.length;++u){let c=r[u],f=u===r.length-1,_=s==="/"?e:e.slice(s.length)||"/",m=J_({path:c.relativePath,caseSensitive:c.caseSensitive,end:f},_),v=c.route;if(!m)return null;Object.assign(i,m.params),a.push({params:i,pathname:An([s,m.pathname]),pathnameBase:n1(An([s,m.pathnameBase])),route:v}),m.pathnameBase!=="/"&&(s=An([s,m.pathnameBase]))}return a}function J_(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=X_(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),u=i.slice(1);return{params:r.reduce((f,_,m)=>{let{paramName:v,isOptional:N}=_;if(v==="*"){let O=u[m]||"";a=s.slice(0,s.length-O.length).replace(/(.)\/+$/,"$1")}const x=u[m];return N&&!x?f[v]=void 0:f[v]=(x||"").replace(/%2F/g,"/"),f},{}),pathname:s,pathnameBase:a,pattern:t}}function X_(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),$c(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,u,c)=>(r.push({paramName:u,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Q_(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return $c(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Hc(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const Y_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Z_=t=>Y_.test(t);function e1(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?li(t):t,s;if(n)if(Z_(n))s=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),$c(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=Nd(n.substring(1),"/"):s=Nd(n,e)}else s=e;return{pathname:s,search:r1(r),hash:i1(i)}}function Nd(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Nl(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function t1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Yg(t,e){let n=t1(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Zg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=li(t):(i=vs({},t),me(!i.pathname||!i.pathname.includes("?"),Nl("?","pathname","search",i)),me(!i.pathname||!i.pathname.includes("#"),Nl("#","pathname","hash",i)),me(!i.search||!i.search.includes("#"),Nl("#","search","hash",i)));let s=t===""||i.pathname==="",a=s?"/":i.pathname,u;if(a==null)u=n;else{let m=e.length-1;if(!r&&a.startsWith("..")){let v=a.split("/");for(;v[0]==="..";)v.shift(),m-=1;i.pathname=v.join("/")}u=m>=0?e[m]:"/"}let c=e1(i,u),f=a&&a!=="/"&&a.endsWith("/"),_=(s||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(f||_)&&(c.pathname+="/"),c}const An=t=>t.join("/").replace(/\/\/+/g,"/"),n1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),r1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,i1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function s1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const ey=["post","put","patch","delete"];new Set(ey);const o1=["get",...ey];new Set(o1);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ws(){return ws=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ws.apply(this,arguments)}const Wc=j.createContext(null),a1=j.createContext(null),gr=j.createContext(null),Aa=j.createContext(null),yr=j.createContext({outlet:null,matches:[],isDataRoute:!1}),ty=j.createContext(null);function l1(t,e){let{relative:n}=e===void 0?{}:e;As()||me(!1);let{basename:r,navigator:i}=j.useContext(gr),{hash:s,pathname:a,search:u}=ry(t,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:An([r,a])),i.createHref({pathname:c,search:u,hash:s})}function As(){return j.useContext(Aa)!=null}function Rs(){return As()||me(!1),j.useContext(Aa).location}function ny(t){j.useContext(gr).static||j.useLayoutEffect(t)}function Gc(){let{isDataRoute:t}=j.useContext(yr);return t?S1():u1()}function u1(){As()||me(!1);let t=j.useContext(Wc),{basename:e,future:n,navigator:r}=j.useContext(gr),{matches:i}=j.useContext(yr),{pathname:s}=Rs(),a=JSON.stringify(Yg(i,n.v7_relativeSplatPath)),u=j.useRef(!1);return ny(()=>{u.current=!0}),j.useCallback(function(f,_){if(_===void 0&&(_={}),!u.current)return;if(typeof f=="number"){r.go(f);return}let m=Zg(f,JSON.parse(a),s,_.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:An([e,m.pathname])),(_.replace?r.replace:r.push)(m,_.state,_)},[e,r,a,s,t])}function ry(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=j.useContext(gr),{matches:i}=j.useContext(yr),{pathname:s}=Rs(),a=JSON.stringify(Yg(i,r.v7_relativeSplatPath));return j.useMemo(()=>Zg(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function c1(t,e){return h1(t,e)}function h1(t,e,n,r){As()||me(!1);let{navigator:i}=j.useContext(gr),{matches:s}=j.useContext(yr),a=s[s.length-1],u=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let f=Rs(),_;if(e){var m;let L=typeof e=="string"?li(e):e;c==="/"||(m=L.pathname)!=null&&m.startsWith(c)||me(!1),_=L}else _=f;let v=_.pathname||"/",N=v;if(c!=="/"){let L=c.replace(/^\//,"").split("/");N="/"+v.replace(/^\//,"").split("/").slice(L.length).join("/")}let x=U_(t,{pathname:N}),O=g1(x&&x.map(L=>Object.assign({},L,{params:Object.assign({},u,L.params),pathname:An([c,i.encodeLocation?i.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?c:An([c,i.encodeLocation?i.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),s,n,r);return e&&O?j.createElement(Aa.Provider,{value:{location:ws({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:wn.Pop}},O):O}function f1(){let t=_1(),e=s1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:i},n):null,null)}const d1=j.createElement(f1,null);class p1 extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement(yr.Provider,{value:this.props.routeContext},j.createElement(ty.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function m1(t){let{routeContext:e,match:n,children:r}=t,i=j.useContext(Wc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(yr.Provider,{value:e},r)}function g1(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,u=(i=n)==null?void 0:i.errors;if(u!=null){let _=a.findIndex(m=>m.route.id&&(u==null?void 0:u[m.route.id])!==void 0);_>=0||me(!1),a=a.slice(0,Math.min(a.length,_+1))}let c=!1,f=-1;if(n&&r&&r.v7_partialHydration)for(let _=0;_<a.length;_++){let m=a[_];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(f=_),m.route.id){let{loaderData:v,errors:N}=n,x=m.route.loader&&v[m.route.id]===void 0&&(!N||N[m.route.id]===void 0);if(m.route.lazy||x){c=!0,f>=0?a=a.slice(0,f+1):a=[a[0]];break}}}return a.reduceRight((_,m,v)=>{let N,x=!1,O=null,L=null;n&&(N=u&&m.route.id?u[m.route.id]:void 0,O=m.route.errorElement||d1,c&&(f<0&&v===0?(E1("route-fallback"),x=!0,L=null):f===v&&(x=!0,L=m.route.hydrateFallbackElement||null)));let E=e.concat(a.slice(0,v+1)),w=()=>{let k;return N?k=O:x?k=L:m.route.Component?k=j.createElement(m.route.Component,null):m.route.element?k=m.route.element:k=_,j.createElement(m1,{match:m,routeContext:{outlet:_,matches:E,isDataRoute:n!=null},children:k})};return n&&(m.route.ErrorBoundary||m.route.errorElement||v===0)?j.createElement(p1,{location:n.location,revalidation:n.revalidation,component:O,error:N,children:w(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):w()},null)}var iy=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(iy||{}),sy=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(sy||{});function y1(t){let e=j.useContext(Wc);return e||me(!1),e}function v1(t){let e=j.useContext(a1);return e||me(!1),e}function w1(t){let e=j.useContext(yr);return e||me(!1),e}function oy(t){let e=w1(),n=e.matches[e.matches.length-1];return n.route.id||me(!1),n.route.id}function _1(){var t;let e=j.useContext(ty),n=v1(),r=oy();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function S1(){let{router:t}=y1(iy.UseNavigateStable),e=oy(sy.UseNavigateStable),n=j.useRef(!1);return ny(()=>{n.current=!0}),j.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ws({fromRouteId:e},s)))},[t,e])}const xd={};function E1(t,e,n){xd[t]||(xd[t]=!0)}function I1(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function ln(t){me(!1)}function T1(t){let{basename:e="/",children:n=null,location:r,navigationType:i=wn.Pop,navigator:s,static:a=!1,future:u}=t;As()&&me(!1);let c=e.replace(/^\/*/,"/"),f=j.useMemo(()=>({basename:c,navigator:s,static:a,future:ws({v7_relativeSplatPath:!1},u)}),[c,u,s,a]);typeof r=="string"&&(r=li(r));let{pathname:_="/",search:m="",hash:v="",state:N=null,key:x="default"}=r,O=j.useMemo(()=>{let L=Hc(_,c);return L==null?null:{location:{pathname:L,search:m,hash:v,state:N,key:x},navigationType:i}},[c,_,m,v,N,x,i]);return O==null?null:j.createElement(gr.Provider,{value:f},j.createElement(Aa.Provider,{children:n,value:O}))}function k1(t){let{children:e,location:n}=t;return c1(Uu(e),n)}new Promise(()=>{});function Uu(t,e){e===void 0&&(e=[]);let n=[];return j.Children.forEach(t,(r,i)=>{if(!j.isValidElement(r))return;let s=[...e,i];if(r.type===j.Fragment){n.push.apply(n,Uu(r.props.children,s));return}r.type!==ln&&me(!1),!r.props.index||!r.props.children||me(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Uu(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fu(){return Fu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fu.apply(this,arguments)}function C1(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function P1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function A1(t,e){return t.button===0&&(!e||e==="_self")&&!P1(t)}const R1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],N1="6";try{window.__reactRouterVersion=N1}catch{}const x1="startTransition",Od=Ew[x1];function O1(t){let{basename:e,children:n,future:r,window:i}=t,s=j.useRef();s.current==null&&(s.current=L_({window:i,v5Compat:!0}));let a=s.current,[u,c]=j.useState({action:a.action,location:a.location}),{v7_startTransition:f}=r||{},_=j.useCallback(m=>{f&&Od?Od(()=>c(m)):c(m)},[c,f]);return j.useLayoutEffect(()=>a.listen(_),[a,_]),j.useEffect(()=>I1(r),[r]),j.createElement(T1,{basename:e,children:n,location:u.location,navigationType:u.action,navigator:a,future:r})}const D1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",L1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kr=j.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:a,state:u,target:c,to:f,preventScrollReset:_,viewTransition:m}=e,v=C1(e,R1),{basename:N}=j.useContext(gr),x,O=!1;if(typeof f=="string"&&L1.test(f)&&(x=f,D1))try{let k=new URL(window.location.href),D=f.startsWith("//")?new URL(k.protocol+f):new URL(f),F=Hc(D.pathname,N);D.origin===k.origin&&F!=null?f=F+D.search+D.hash:O=!0}catch{}let L=l1(f,{relative:i}),E=M1(f,{replace:a,state:u,target:c,preventScrollReset:_,relative:i,viewTransition:m});function w(k){r&&r(k),k.defaultPrevented||E(k)}return j.createElement("a",Fu({},v,{href:x||L,onClick:O||s?r:w,ref:n,target:c}))});var Dd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Dd||(Dd={}));var Ld;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ld||(Ld={}));function M1(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:a,viewTransition:u}=e===void 0?{}:e,c=Gc(),f=Rs(),_=ry(t,{relative:a});return j.useCallback(m=>{if(A1(m,n)){m.preventDefault();let v=r!==void 0?r:ea(f)===ea(_);c(t,{replace:v,state:i,preventScrollReset:s,relative:a,viewTransition:u})}},[f,c,_,r,i,n,t,s,a,u])}const Hn=({children:t})=>{const e=Gc(),n=Rs(),[r,i]=j.useState(!1),[s,a]=j.useState(()=>typeof window>"u"?!1:localStorage.getItem("ts-dark")==="1"),[u,c]=j.useState(!1);j.useEffect(()=>{document.body.classList.toggle("dark-mode",s),localStorage.setItem("ts-dark",s?"1":"0")},[s]),j.useEffect(()=>{const m=v=>{v.ctrlKey&&v.shiftKey&&v.code==="KeyC"&&c(N=>!N)};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[]);const f=m=>n.pathname===m?"sidebar-link active":"sidebar-link",_=()=>i(!1);return A.jsxs("div",{className:"app-root",children:[A.jsxs("header",{className:"top-bar",children:[A.jsxs("div",{className:"top-left",children:[A.jsx("button",{className:"menu-toggle",onClick:()=>i(m=>!m),"aria-label":"Toggle sidebar",children:"☰"}),A.jsx("div",{className:"logo",onClick:()=>e("/"),children:"TextSpeeder"})]}),A.jsxs("div",{className:"user-info",children:[A.jsx("div",{className:"user-avatar",style:{backgroundImage:'url("https://api.dicebear.com/7.x/shapes/svg?seed=User")'}}),A.jsx("div",{className:"premium-badge",children:"⭐ Premium"})]}),A.jsxs("div",{className:"top-controls",children:[A.jsxs("button",{className:"theme-toggle",onClick:()=>a(m=>!m),children:["🌓 ",s?"Light":"Dark"]}),A.jsx("button",{className:"theme-toggle",onClick:()=>c(m=>!m),children:"⚙ Controls"})]})]}),A.jsxs("aside",{className:`sidebar ${r?"sidebar-open":""}`,children:[A.jsx("div",{className:"sidebar-title",children:"Navigation"}),A.jsxs("nav",{className:"sidebar-content",children:[A.jsx(kr,{to:"/",className:f("/"),onClick:_,children:"🏠 Home"}),A.jsx(kr,{to:"/reading",className:f("/reading"),onClick:_,children:"🚀 Speed Reader"}),A.jsx(kr,{to:"/classic",className:f("/classic"),onClick:_,children:"📚 Classic View"}),A.jsx(kr,{to:"/leaderboard",className:f("/leaderboard"),onClick:_,children:"🏆 Leaderboard"}),A.jsx(kr,{to:"/results",className:f("/results"),onClick:_,children:"📊 Results"}),A.jsx(kr,{to:"/profile",className:f("/profile"),onClick:_,children:"👤 Profile"})]}),A.jsx("button",{className:"close-sidebar",onClick:_,children:"✖ Close"})]}),A.jsx("main",{className:"main-content",children:t}),A.jsxs("footer",{className:"footer",children:["© ",new Date().getFullYear()," TextSpeeder · All Rights Reserved"]}),A.jsx("section",{className:`control-grid ${u?"open":""}`,children:A.jsxs("div",{className:"grid-inner",children:[A.jsxs("div",{children:[A.jsx("label",{children:"Mode"}),A.jsxs("select",{defaultValue:"flow",children:[A.jsx("option",{value:"flow",children:"Flow"}),A.jsx("option",{value:"rsvp",children:"RSVP"})]})]}),A.jsxs("div",{children:[A.jsx("label",{children:"WPM"}),A.jsx("input",{type:"number",defaultValue:300,min:50,max:2e3})]}),A.jsxs("div",{children:[A.jsx("label",{children:"Highlight"}),A.jsx("input",{type:"checkbox",defaultChecked:!0})]}),A.jsxs("div",{className:"grid-buttons",children:[A.jsx("button",{type:"button",children:"Pause"}),A.jsx("button",{type:"button",children:"Restart"})]}),A.jsxs("div",{className:"grid-hint",children:["Tip: Press ",A.jsx("strong",{children:"Ctrl + Shift + C"})," to toggle controls"]})]})})]})};function Md(){const t=Gc();return A.jsxs("div",{className:"landing-page",children:[A.jsx("h1",{children:"Welcome to TextSpeeder v15.1"}),A.jsx("p",{children:"Increase reading speed, generate summaries, and improve memory retention."}),A.jsx("button",{className:"landing-btn",onClick:()=>t("/reading"),children:"Start Reading"})]})}const j1={name:"Mutlu Akgün",email:"mutlu@example.com",plan:"Premium",avatar:"https://api.dicebear.com/7.x/shapes/svg?seed=Mutlu",totalSessions:128,bestWPM:520,minutesRead:947},U1=()=>{const t=j1;return A.jsxs("div",{className:"profile-container",children:[A.jsx("h1",{className:"profile-title",children:"👤 Profile"}),A.jsxs("div",{className:"profile-card",children:[A.jsx("img",{src:t.avatar,alt:"avatar",className:"profile-avatar"}),A.jsx("h2",{className:"profile-name",children:t.name}),A.jsx("p",{className:"profile-email",children:t.email}),A.jsxs("div",{className:"profile-badge",children:["⭐ Plan: ",A.jsx("strong",{children:t.plan})]}),A.jsxs("div",{className:"profile-stats",children:[A.jsxs("div",{className:"stat-box",children:[A.jsx("div",{className:"stat-number",children:t.totalSessions}),A.jsx("div",{className:"stat-label",children:"Sessions"})]}),A.jsxs("div",{className:"stat-box",children:[A.jsx("div",{className:"stat-number",children:t.bestWPM}),A.jsx("div",{className:"stat-label",children:"Best WPM"})]}),A.jsxs("div",{className:"stat-box",children:[A.jsx("div",{className:"stat-number",children:t.minutesRead}),A.jsx("div",{className:"stat-label",children:"Minutes Read"})]})]}),A.jsxs("div",{className:"profile-actions",children:[A.jsx("button",{className:"btn-primary",children:"Upgrade Plan"}),A.jsx("button",{className:"btn-secondary",children:"Logout"})]})]})]})},F1=[{id:"1",name:"Aurelius",wpm:520,sessions:43},{id:"2",name:"Cassia",wpm:480,sessions:38},{id:"3",name:"Maximus",wpm:455,sessions:26},{id:"4",name:"Nova",wpm:410,sessions:19},{id:"5",name:"Livia",wpm:390,sessions:22}],b1=()=>{const[t,e]=j.useState([]);return j.useEffect(()=>{e(F1)},[]),A.jsxs("div",{className:"leader-container",children:[A.jsx("h1",{className:"leader-title",children:"🏆 Leaderboard"}),A.jsx("p",{className:"leader-subtitle",children:"Top speed-readers ranked by their highest WPM."}),A.jsxs("table",{className:"leader-table",children:[A.jsx("thead",{children:A.jsxs("tr",{children:[A.jsx("th",{children:"#"}),A.jsx("th",{children:"Reader"}),A.jsx("th",{children:"Best WPM"}),A.jsx("th",{children:"Sessions"})]})}),A.jsx("tbody",{children:t.map((n,r)=>A.jsxs("tr",{children:[A.jsx("td",{children:r+1}),A.jsx("td",{children:n.name}),A.jsx("td",{children:n.wpm}),A.jsx("td",{children:n.sessions})]},n.id))})]})]})},V1="Welcome to TextSpeeder! This is a sample text. Upload your own file or paste a paragraph in the future updates.",z1=()=>{const[t,e]=j.useState("flow"),[n,r]=j.useState(300),[i,s]=j.useState(!1),[a,u]=j.useState(!0),[c,f]=j.useState(0),_=V1.split(/\s+/),m=j.useRef(null),v=6e4/n;j.useEffect(()=>{if(!i)return m.current=setInterval(()=>{f(E=>(E+1)%_.length)},v),()=>{m.current&&clearInterval(m.current)}},[n,i]);const N=()=>s(E=>!E),x=()=>{f(0),s(!1)},O=()=>A.jsx("div",{className:"flow-box",children:_.map((E,w)=>A.jsxs("span",{className:`flow-word ${w===c&&a?"highlight-word":""}`,children:[E," "]},w))}),L=()=>A.jsx("div",{className:"rsvp-box",children:A.jsx("span",{className:`rsvp-word ${a?"highlight-word":""}`,children:_[c]})});return A.jsxs("div",{className:"reader-container",children:[A.jsx("h2",{className:"reader-title",children:"Reading Session"}),A.jsxs("div",{className:"reader-controls",children:[A.jsxs("label",{children:["Mode:",A.jsxs("select",{value:t,onChange:E=>{e(E.target.value),f(0)},children:[A.jsx("option",{value:"flow",children:"Flow"}),A.jsx("option",{value:"rsvp",children:"RSVP"})]})]}),A.jsxs("label",{children:["WPM:",A.jsx("input",{type:"number",value:n,min:50,max:2e3,onChange:E=>r(Number(E.target.value))})]}),A.jsxs("label",{children:["Highlight:",A.jsx("input",{type:"checkbox",checked:a,onChange:E=>u(E.target.checked)})]}),A.jsx("button",{onClick:N,children:i?"Resume":"Pause"}),A.jsx("button",{onClick:x,children:"Restart"})]}),A.jsx("div",{className:"reader-display",children:t==="flow"?O():L()})]})},B1={wpm:340,totalWords:1250,duration:212,mode:"RSVP",timestamp:new Date().toISOString()},$1=()=>{const t=B1;return A.jsxs("div",{className:"results-container",children:[A.jsx("h1",{className:"results-title",children:"📊 Reading Results"}),A.jsxs("div",{className:"results-card",children:[A.jsxs("div",{className:"result-row",children:[A.jsx("span",{className:"label",children:"Mode:"}),A.jsx("span",{className:"value",children:t.mode})]}),A.jsxs("div",{className:"result-row",children:[A.jsx("span",{className:"label",children:"Words Per Minute:"}),A.jsx("span",{className:"value highlight",children:t.wpm})]}),A.jsxs("div",{className:"result-row",children:[A.jsx("span",{className:"label",children:"Total Words:"}),A.jsx("span",{className:"value",children:t.totalWords})]}),A.jsxs("div",{className:"result-row",children:[A.jsx("span",{className:"label",children:"Duration:"}),A.jsxs("span",{className:"value",children:[Math.round(t.duration)," sec"]})]}),A.jsxs("div",{className:"result-row",children:[A.jsx("span",{className:"label",children:"Finished At:"}),A.jsx("span",{className:"value small",children:t.timestamp})]})]}),A.jsxs("div",{className:"results-buttons",children:[A.jsx("button",{className:"btn-primary",onClick:()=>window.location.href="/reading",children:"🔁 Restart Reading"}),A.jsx("button",{className:"btn-secondary",onClick:()=>window.location.href="/",children:"🏠 Back to Home"})]})]})},H1=Cl;function W1(){return A.jsxs(k1,{children:[A.jsx(ln,{path:"/",element:A.jsx(Hn,{children:A.jsx(Md,{})})}),A.jsx(ln,{path:"/reading",element:A.jsx(Hn,{children:A.jsx(z1,{})})}),A.jsx(ln,{path:"/profile",element:A.jsx(Hn,{children:A.jsx(U1,{})})}),A.jsx(ln,{path:"/leaderboard",element:A.jsx(Hn,{children:A.jsx(b1,{})})}),A.jsx(ln,{path:"/results",element:A.jsx(Hn,{children:A.jsx($1,{})})}),A.jsx(ln,{path:"/classic",element:A.jsx(Hn,{children:A.jsx(H1,{})})}),A.jsx(ln,{path:"*",element:A.jsx(Hn,{children:A.jsx(Md,{})})})]})}const G1=()=>{};var jd={};/**
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
 */const ay=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},K1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],u=t[n++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},ly={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,u=a?t[i+1]:0,c=i+2<t.length,f=c?t[i+2]:0,_=s>>2,m=(s&3)<<4|u>>4;let v=(u&15)<<2|f>>6,N=f&63;c||(N=64,a||(v=64)),r.push(n[_],n[m],n[v],n[N])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ay(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):K1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],u=i<t.length?n[t.charAt(i)]:0;++i;const f=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||u==null||f==null||m==null)throw new q1;const v=s<<2|u>>4;if(r.push(v),f!==64){const N=u<<4&240|f>>2;if(r.push(N),m!==64){const x=f<<6&192|m;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class q1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const J1=function(t){const e=ay(t);return ly.encodeByteArray(e,!0)},ta=function(t){return J1(t).replace(/\./g,"")},uy=function(t){try{return ly.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function X1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Q1=()=>X1().__FIREBASE_DEFAULTS__,Y1=()=>{if(typeof process>"u"||typeof jd>"u")return;const t=jd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Z1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&uy(t[1]);return e&&JSON.parse(e)},Kc=()=>{try{return G1()||Q1()||Y1()||Z1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cy=t=>{var e,n;return(n=(e=Kc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},eS=t=>{const e=cy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},hy=()=>{var t;return(t=Kc())==null?void 0:t.config},fy=t=>{var e;return(e=Kc())==null?void 0:e[`_${t}`]};/**
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
 */class tS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ns(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function dy(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function nS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ta(JSON.stringify(n)),ta(JSON.stringify(a)),""].join(".")}const Xi={};function rS(){const t={prod:[],emulator:[]};for(const e of Object.keys(Xi))Xi[e]?t.emulator.push(e):t.prod.push(e);return t}function iS(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Ud=!1;function py(t,e){if(typeof window>"u"||typeof document>"u"||!Ns(window.location.host)||Xi[t]===e||Xi[t]||Ud)return;Xi[t]=e;function n(v){return`__firebase__banner__${v}`}const r="__firebase__banner",s=rS().prod.length>0;function a(){const v=document.getElementById(r);v&&v.remove()}function u(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function c(v,N){v.setAttribute("width","24"),v.setAttribute("id",N),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function f(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{Ud=!0,a()},v}function _(v,N){v.setAttribute("id",N),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function m(){const v=iS(r),N=n("text"),x=document.getElementById(N)||document.createElement("span"),O=n("learnmore"),L=document.getElementById(O)||document.createElement("a"),E=n("preprendIcon"),w=document.getElementById(E)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const k=v.element;u(k),_(L,O);const D=f();c(w,E),k.append(w,x,L,D),document.body.appendChild(k)}s?(x.innerText="Preview backend disconnected.",w.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(w.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",N)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function oS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function aS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lS(){const t=Ue();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Jc(){try{return typeof indexedDB=="object"}catch{return!1}}function Xc(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function my(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const uS="FirebaseError";class wt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=uS,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vr.prototype.create)}}class vr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?cS(s,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new wt(i,u,r)}}function cS(t,e){return t.replace(hS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const hS=/\{\$([^}]+)}/g;function fS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Dn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(Fd(s)&&Fd(a)){if(!Dn(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Fd(t){return t!==null&&typeof t=="object"}/**
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
 */function xs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function dS(t,e){const n=new pS(t,e);return n.subscribe.bind(n)}class pS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");mS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=xl),i.error===void 0&&(i.error=xl),i.complete===void 0&&(i.complete=xl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xl(){}/**
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
 */const gS=1e3,yS=2,vS=4*60*60*1e3,wS=.5;function bd(t,e=gS,n=yS){const r=e*Math.pow(n,t),i=Math.round(wS*r*(Math.random()-.5)*2);return Math.min(vS,r+i)}/**
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
 */function _t(t){return t&&t._delegate?t._delegate:t}class vt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Kn="[DEFAULT]";/**
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
 */class _S{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new tS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ES(e))try{this.getOrInitializeService({instanceIdentifier:Kn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Kn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kn){return this.instances.has(e)}getOptions(e=Kn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(s);r===u&&a.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:SS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kn){return this.component?this.component.multipleInstances?e:Kn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function SS(t){return t===Kn?void 0:t}function ES(t){return t.instantiationMode==="EAGER"}/**
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
 */class IS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _S(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const TS={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},kS=Q.INFO,CS={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},PS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=CS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ra{constructor(e){this.name=e,this._logLevel=kS,this._logHandler=PS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?TS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const AS=(t,e)=>e.some(n=>t instanceof n);let Vd,zd;function RS(){return Vd||(Vd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function NS(){return zd||(zd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gy=new WeakMap,bu=new WeakMap,yy=new WeakMap,Ol=new WeakMap,Qc=new WeakMap;function xS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(Rn(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&gy.set(n,t)}).catch(()=>{}),Qc.set(e,t),e}function OS(t){if(bu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});bu.set(t,e)}let Vu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function DS(t){Vu=t(Vu)}function LS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Dl(this),e,...n);return yy.set(r,e.sort?e.sort():[e]),Rn(r)}:NS().includes(t)?function(...e){return t.apply(Dl(this),e),Rn(gy.get(this))}:function(...e){return Rn(t.apply(Dl(this),e))}}function MS(t){return typeof t=="function"?LS(t):(t instanceof IDBTransaction&&OS(t),AS(t,RS())?new Proxy(t,Vu):t)}function Rn(t){if(t instanceof IDBRequest)return xS(t);if(Ol.has(t))return Ol.get(t);const e=MS(t);return e!==t&&(Ol.set(t,e),Qc.set(e,t)),e}const Dl=t=>Qc.get(t);function vy(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),u=Rn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Rn(a.result),c.oldVersion,c.newVersion,Rn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),u.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),u}const jS=["get","getKey","getAll","getAllKeys","count"],US=["put","add","delete","clear"],Ll=new Map;function Bd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ll.get(e))return Ll.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=US.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||jS.includes(n)))return;const s=async function(a,...u){const c=this.transaction(a,i?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(u.shift())),(await Promise.all([f[n](...u),i&&c.done]))[0]};return Ll.set(e,s),s}DS(t=>({...t,get:(e,n,r)=>Bd(e,n)||t.get(e,n,r),has:(e,n)=>!!Bd(e,n)||t.has(e,n)}));/**
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
 */class FS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zu="@firebase/app",$d="0.14.6";/**
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
 */const qt=new Ra("@firebase/app"),VS="@firebase/app-compat",zS="@firebase/analytics-compat",BS="@firebase/analytics",$S="@firebase/app-check-compat",HS="@firebase/app-check",WS="@firebase/auth",GS="@firebase/auth-compat",KS="@firebase/database",qS="@firebase/data-connect",JS="@firebase/database-compat",XS="@firebase/functions",QS="@firebase/functions-compat",YS="@firebase/installations",ZS="@firebase/installations-compat",eE="@firebase/messaging",tE="@firebase/messaging-compat",nE="@firebase/performance",rE="@firebase/performance-compat",iE="@firebase/remote-config",sE="@firebase/remote-config-compat",oE="@firebase/storage",aE="@firebase/storage-compat",lE="@firebase/firestore",uE="@firebase/ai",cE="@firebase/firestore-compat",hE="firebase",fE="12.6.0";/**
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
 */const Bu="[DEFAULT]",dE={[zu]:"fire-core",[VS]:"fire-core-compat",[BS]:"fire-analytics",[zS]:"fire-analytics-compat",[HS]:"fire-app-check",[$S]:"fire-app-check-compat",[WS]:"fire-auth",[GS]:"fire-auth-compat",[KS]:"fire-rtdb",[qS]:"fire-data-connect",[JS]:"fire-rtdb-compat",[XS]:"fire-fn",[QS]:"fire-fn-compat",[YS]:"fire-iid",[ZS]:"fire-iid-compat",[eE]:"fire-fcm",[tE]:"fire-fcm-compat",[nE]:"fire-perf",[rE]:"fire-perf-compat",[iE]:"fire-rc",[sE]:"fire-rc-compat",[oE]:"fire-gcs",[aE]:"fire-gcs-compat",[lE]:"fire-fst",[cE]:"fire-fst-compat",[uE]:"fire-vertex","fire-js":"fire-js",[hE]:"fire-js-all"};/**
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
 */const na=new Map,pE=new Map,$u=new Map;function Hd(t,e){try{t.container.addComponent(e)}catch(n){qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Lt(t){const e=t.name;if($u.has(e))return qt.debug(`There were multiple attempts to register component ${e}.`),!1;$u.set(e,t);for(const n of na.values())Hd(n,t);for(const n of pE.values())Hd(n,t);return!0}function wr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function At(t){return t==null?!1:t.settings!==void 0}/**
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
 */const mE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nn=new vr("app","Firebase",mE);/**
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
 */class gE{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nn.create("app-deleted",{appName:this._name})}}/**
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
 */const ui=fE;function wy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Bu,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Nn.create("bad-app-name",{appName:String(i)});if(n||(n=hy()),!n)throw Nn.create("no-options");const s=na.get(i);if(s){if(Dn(n,s.options)&&Dn(r,s.config))return s;throw Nn.create("duplicate-app",{appName:i})}const a=new IS(i);for(const c of $u.values())a.addComponent(c);const u=new gE(n,r,a);return na.set(i,u),u}function Yc(t=Bu){const e=na.get(t);if(!e&&t===Bu&&hy())return wy();if(!e)throw Nn.create("no-app",{appName:t});return e}function it(t,e,n){let r=dE[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qt.warn(a.join(" "));return}Lt(new vt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const yE="firebase-heartbeat-database",vE=1,_s="firebase-heartbeat-store";let Ml=null;function _y(){return Ml||(Ml=vy(yE,vE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_s)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nn.create("idb-open",{originalErrorMessage:t.message})})),Ml}async function wE(t){try{const n=(await _y()).transaction(_s),r=await n.objectStore(_s).get(Sy(t));return await n.done,r}catch(e){if(e instanceof wt)qt.warn(e.message);else{const n=Nn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qt.warn(n.message)}}}async function Wd(t,e){try{const r=(await _y()).transaction(_s,"readwrite");await r.objectStore(_s).put(e,Sy(t)),await r.done}catch(n){if(n instanceof wt)qt.warn(n.message);else{const r=Nn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qt.warn(r.message)}}}function Sy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const _E=1024,SE=30;class EE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Gd();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>SE){const a=kE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){qt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gd(),{heartbeatsToSend:r,unsentEntries:i}=IE(this._heartbeatsCache.heartbeats),s=ta(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return qt.warn(n),""}}}function Gd(){return new Date().toISOString().substring(0,10)}function IE(t,e=_E){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Kd(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Kd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class TE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jc()?Xc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Wd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Wd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Kd(t){return ta(JSON.stringify({version:2,heartbeats:t})).length}function kE(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function CE(t){Lt(new vt("platform-logger",e=>new FS(e),"PRIVATE")),Lt(new vt("heartbeat",e=>new EE(e),"PRIVATE")),it(zu,$d,t),it(zu,$d,"esm2020"),it("fire-js","")}CE("");var PE="firebase",AE="12.6.0";/**
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
 */it(PE,AE,"app");function Ey(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RE=Ey,Iy=new vr("auth","Firebase",Ey());/**
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
 */const ra=new Ra("@firebase/auth");function NE(t,...e){ra.logLevel<=Q.WARN&&ra.warn(`Auth (${ui}): ${t}`,...e)}function ko(t,...e){ra.logLevel<=Q.ERROR&&ra.error(`Auth (${ui}): ${t}`,...e)}/**
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
 */function Jt(t,...e){throw Zc(t,...e)}function Ot(t,...e){return Zc(t,...e)}function Ty(t,e,n){const r={...RE(),[e]:n};return new vr("auth","Firebase",r).create(e,{appName:t.name})}function nr(t){return Ty(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Iy.create(t,...e)}function B(t,e,...n){if(!t)throw Zc(e,...n)}function zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ko(e),new Error(e)}function Xt(t,e){t||zt(e)}/**
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
 */function Hu(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function xE(){return qd()==="http:"||qd()==="https:"}function qd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function OE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xE()||qc()||"connection"in navigator)?navigator.onLine:!0}function DE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Os{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xt(n>e,"Short delay should be less than long delay!"),this.isMobile=sS()||aS()}get(){return OE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function eh(t,e){Xt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ky{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const LE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ME=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],jE=new Os(3e4,6e4);function th(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ci(t,e,n,r,i={}){return Cy(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const u=xs({key:t.config.apiKey,...a}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const f={method:e,headers:c,...s};return oS()||(f.referrerPolicy="no-referrer"),t.emulatorConfig&&Ns(t.emulatorConfig.host)&&(f.credentials="include"),ky.fetch()(await Py(t,t.config.apiHost,n,u),f)})}async function Cy(t,e,n){t._canInitEmulator=!1;const r={...LE,...e};try{const i=new FE(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw uo(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const u=s.ok?a.errorMessage:a.error.message,[c,f]=u.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw uo(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw uo(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw uo(t,"user-disabled",a);const _=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Ty(t,_,f);Jt(t,_)}}catch(i){if(i instanceof wt)throw i;Jt(t,"network-request-failed",{message:String(i)})}}async function UE(t,e,n,r,i={}){const s=await ci(t,e,n,r,i);return"mfaPendingCredential"in s&&Jt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Py(t,e,n,r){const i=`${e}${n}?${r}`,s=t,a=s.config.emulator?eh(t.config,i):`${t.config.apiScheme}://${i}`;return ME.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}class FE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ot(this.auth,"network-request-failed")),jE.get())})}}function uo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ot(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function bE(t,e){return ci(t,"POST","/v1/accounts:delete",e)}async function ia(t,e){return ci(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Qi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VE(t,e=!1){const n=_t(t),r=await n.getIdToken(e),i=nh(r);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Qi(jl(i.auth_time)),issuedAtTime:Qi(jl(i.iat)),expirationTime:Qi(jl(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function jl(t){return Number(t)*1e3}function nh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ko("JWT malformed, contained fewer than 3 sections"),null;try{const i=uy(n);return i?JSON.parse(i):(ko("Failed to decode base64 JWT payload"),null)}catch(i){return ko("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Jd(t){const e=nh(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ss(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wt&&zE(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class BE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Wu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qi(this.lastLoginAt),this.creationTime=Qi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function sa(t){var m;const e=t.auth,n=await t.getIdToken(),r=await Ss(t,ia(e,{idToken:n}));B(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?Ay(i.providerUserInfo):[],a=HE(t.providerData,s),u=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=u?c:!1,_={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Wu(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,_)}async function $E(t){const e=_t(t);await sa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HE(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ay(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function WE(t,e){const n=await Cy(t,{},async()=>{const r=xs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=await Py(t,i,"/v1/token",`key=${s}`),u=await t._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:u,body:r};return t.emulatorConfig&&Ns(t.emulatorConfig.host)&&(c.credentials="include"),ky.fetch()(a,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function GE(t,e){return ci(t,"POST","/v2/accounts:revokeToken",th(t,e))}/**
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
 */class Wr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){B(e.length!==0,"internal-error");const n=Jd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await WE(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new Wr;return r&&(B(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(B(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wr,this.toJSON())}_performRefresh(){return zt("not implemented")}}/**
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
 */function an(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class dt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new BE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Wu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ss(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return VE(this,e)}reload(){return $E(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new dt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await sa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(At(this.auth.app))return Promise.reject(nr(this.auth));const e=await this.getIdToken();return await Ss(this,bE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,a=n.photoURL??void 0,u=n.tenantId??void 0,c=n._redirectEventId??void 0,f=n.createdAt??void 0,_=n.lastLoginAt??void 0,{uid:m,emailVerified:v,isAnonymous:N,providerData:x,stsTokenManager:O}=n;B(m&&O,e,"internal-error");const L=Wr.fromJSON(this.name,O);B(typeof m=="string",e,"internal-error"),an(r,e.name),an(i,e.name),B(typeof v=="boolean",e,"internal-error"),B(typeof N=="boolean",e,"internal-error"),an(s,e.name),an(a,e.name),an(u,e.name),an(c,e.name),an(f,e.name),an(_,e.name);const E=new dt({uid:m,auth:e,email:i,emailVerified:v,displayName:r,isAnonymous:N,photoURL:a,phoneNumber:s,tenantId:u,stsTokenManager:L,createdAt:f,lastLoginAt:_});return x&&Array.isArray(x)&&(E.providerData=x.map(w=>({...w}))),c&&(E._redirectEventId=c),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Wr;i.updateFromServerResponse(n);const s=new dt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await sa(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];B(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Ay(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),u=new Wr;u.updateFromIdToken(r);const c=new dt({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Wu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,f),c}}/**
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
 */const Xd=new Map;function Bt(t){Xt(t instanceof Function,"Expected a class definition");let e=Xd.get(t);return e?(Xt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xd.set(t,e),e)}/**
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
 */class Ry{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ry.type="NONE";const Qd=Ry;/**
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
 */function Co(t,e,n){return`firebase:${t}:${e}:${n}`}class Gr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Co(this.userKey,i.apiKey,s),this.fullPersistenceKey=Co("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ia(this.auth,{idToken:e}).catch(()=>{});return n?dt._fromGetAccountInfoResponse(this.auth,n,e):null}return dt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Gr(Bt(Qd),e,r);const i=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let s=i[0]||Bt(Qd);const a=Co(r,e.config.apiKey,e.name);let u=null;for(const f of n)try{const _=await f._get(a);if(_){let m;if(typeof _=="string"){const v=await ia(e,{idToken:_}).catch(()=>{});if(!v)break;m=await dt._fromGetAccountInfoResponse(e,v,_)}else m=dt._fromJSON(e,_);f!==s&&(u=m),s=f;break}}catch{}const c=i.filter(f=>f._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Gr(s,e,r):(s=c[0],u&&await s._set(a,u.toJSON()),await Promise.all(n.map(async f=>{if(f!==s)try{await f._remove(a)}catch{}})),new Gr(s,e,r))}}/**
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
 */function Yd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ny(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(My(e))return"Blackberry";if(jy(e))return"Webos";if(xy(e))return"Safari";if((e.includes("chrome/")||Oy(e))&&!e.includes("edge/"))return"Chrome";if(Ly(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ny(t=Ue()){return/firefox\//i.test(t)}function xy(t=Ue()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Oy(t=Ue()){return/crios\//i.test(t)}function Dy(t=Ue()){return/iemobile/i.test(t)}function Ly(t=Ue()){return/android/i.test(t)}function My(t=Ue()){return/blackberry/i.test(t)}function jy(t=Ue()){return/webos/i.test(t)}function rh(t=Ue()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function KE(t=Ue()){var e;return rh(t)&&!!((e=window.navigator)!=null&&e.standalone)}function qE(){return lS()&&document.documentMode===10}function Uy(t=Ue()){return rh(t)||Ly(t)||jy(t)||My(t)||/windows phone/i.test(t)||Dy(t)}/**
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
 */function Fy(t,e=[]){let n;switch(t){case"Browser":n=Yd(Ue());break;case"Worker":n=`${Yd(Ue())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ui}/${r}`}/**
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
 */class JE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,u)=>{try{const c=e(s);a(c)}catch(c){u(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function XE(t,e={}){return ci(t,"GET","/v2/passwordPolicy",th(t,e))}/**
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
 */const QE=6;class YE{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??QE,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class ZE{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zd(this),this.idTokenSubscription=new Zd(this),this.beforeStateQueue=new JE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Iy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bt(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Gr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ia(this,{idToken:e}),r=await dt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(At(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(s=this.redirectUser)==null?void 0:s._redirectEventId,u=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===u)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await sa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(At(this.app))return Promise.reject(nr(this));const n=e?_t(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return At(this.app)?Promise.reject(nr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return At(this.app)?Promise.reject(nr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await XE(this),n=new YE(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new vr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await GE(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bt(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await Gr.create(this,[Bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(u,this,"internal-error"),u.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(At(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&NE(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ih(t){return _t(t)}class Zd{constructor(e){this.auth=e,this.observer=null,this.addObserver=dS(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let sh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function eI(t){sh=t}function tI(t){return sh.loadJS(t)}function nI(){return sh.gapiScript}function rI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function iI(t,e){const n=wr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Dn(s,e??{}))return i;Jt(i,"already-initialized")}return n.initialize({options:e})}function sI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Bt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function oI(t,e,n){const r=ih(t);B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=by(e),{host:a,port:u}=aI(e),c=u===null?"":`:${u}`,f={url:`${s}//${a}${c}/`},_=Object.freeze({host:a,port:u,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){B(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),B(Dn(f,r.config.emulator)&&Dn(_,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=_,r.settings.appVerificationDisabledForTesting=!0,Ns(a)?(dy(`${s}//${a}${c}`),py("Auth",!0)):lI()}function by(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function aI(t){const e=by(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ep(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:ep(a)}}}function ep(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Vy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zt("not implemented")}_getIdTokenResponse(e){return zt("not implemented")}_linkToIdToken(e,n){return zt("not implemented")}_getReauthenticationResolver(e){return zt("not implemented")}}/**
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
 */async function Kr(t,e){return UE(t,"POST","/v1/accounts:signInWithIdp",th(t,e))}/**
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
 */const uI="http://localhost";class cr extends Vy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const a=new cr(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Kr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Kr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kr(e,n)}buildRequest(){const e={requestUri:uI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xs(n)}return e}}/**
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
 */class zy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ds extends zy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class dn extends Ds{constructor(){super("facebook.com")}static credential(e){return cr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";dn.PROVIDER_ID="facebook.com";/**
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
 */class pn extends Ds{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
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
 */class mn extends Ds{constructor(){super("github.com")}static credential(e){return cr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com";mn.PROVIDER_ID="github.com";/**
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
 */class gn extends Ds{constructor(){super("twitter.com")}static credential(e,n){return cr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gn.credential(n,r)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
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
 */class ri{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await dt._fromIdTokenResponse(e,r,i),a=tp(r);return new ri({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=tp(r);return new ri({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function tp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class oa extends wt{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,oa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new oa(e,n,r,i)}}function By(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?oa._fromErrorAndOperation(t,s,e,r):s})}async function cI(t,e,n=!1){const r=await Ss(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ri._forOperation(t,"link",r)}/**
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
 */async function hI(t,e,n=!1){const{auth:r}=t;if(At(r.app))return Promise.reject(nr(r));const i="reauthenticate";try{const s=await Ss(t,By(r,i,e,t),n);B(s.idToken,r,"internal-error");const a=nh(s.idToken);B(a,r,"internal-error");const{sub:u}=a;return B(t.uid===u,r,"user-mismatch"),ri._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Jt(r,"user-mismatch"),s}}/**
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
 */async function fI(t,e,n=!1){if(At(t.app))return Promise.reject(nr(t));const r="signIn",i=await By(t,r,e),s=await ri._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function dI(t,e,n,r){return _t(t).onIdTokenChanged(e,n,r)}function pI(t,e,n){return _t(t).beforeAuthStateChanged(e,n)}function mI(t,e,n,r){return _t(t).onAuthStateChanged(e,n,r)}function gI(t){return _t(t).signOut()}const aa="__sak";/**
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
 */class $y{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(aa,"1"),this.storage.removeItem(aa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const yI=1e3,vI=10;class Hy extends $y{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Uy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,u,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);qE()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,vI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hy.type="LOCAL";const wI=Hy;/**
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
 */class Wy extends $y{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wy.type="SESSION";const Gy=Wy;/**
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
 */function _I(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Na(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(a).map(async f=>f(n.origin,s)),c=await _I(u);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Na.receivers=[];/**
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
 */function oh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class SI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((u,c)=>{const f=oh("",20);i.port1.start();const _=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(m){const v=m;if(v.data.eventId===f)switch(v.data.status){case"ack":clearTimeout(_),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),u(v.data.response);break;default:clearTimeout(_),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Dt(){return window}function EI(t){Dt().location.href=t}/**
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
 */function Ky(){return typeof Dt().WorkerGlobalScope<"u"&&typeof Dt().importScripts=="function"}async function II(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function kI(){return Ky()?self:null}/**
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
 */const qy="firebaseLocalStorageDb",CI=1,la="firebaseLocalStorage",Jy="fbase_key";class Ls{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xa(t,e){return t.transaction([la],e?"readwrite":"readonly").objectStore(la)}function PI(){const t=indexedDB.deleteDatabase(qy);return new Ls(t).toPromise()}function Gu(){const t=indexedDB.open(qy,CI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(la,{keyPath:Jy})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(la)?e(r):(r.close(),await PI(),e(await Gu()))})})}async function np(t,e,n){const r=xa(t,!0).put({[Jy]:e,value:n});return new Ls(r).toPromise()}async function AI(t,e){const n=xa(t,!1).get(e),r=await new Ls(n).toPromise();return r===void 0?null:r.value}function rp(t,e){const n=xa(t,!0).delete(e);return new Ls(n).toPromise()}const RI=800,NI=3;class Xy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>NI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ky()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Na._getInstance(kI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await II(),!this.activeServiceWorker)return;this.sender=new SI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gu();return await np(e,aa,"1"),await rp(e,aa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>np(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>AI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>rp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=xa(i,!1).getAll();return new Ls(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xy.type="LOCAL";const xI=Xy;new Os(3e4,6e4);/**
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
 */function OI(t,e){return e?Bt(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ah extends Vy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function DI(t){return fI(t.auth,new ah(t),t.bypassAuthState)}function LI(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),hI(n,new ah(t),t.bypassAuthState)}async function MI(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),cI(n,new ah(t),t.bypassAuthState)}/**
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
 */class Qy{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:u}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(c))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DI;case"linkViaPopup":case"linkViaRedirect":return MI;case"reauthViaPopup":case"reauthViaRedirect":return LI;default:Jt(this.auth,"internal-error")}}resolve(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const jI=new Os(2e3,1e4);class Fr extends Qy{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Fr.currentPopupAction&&Fr.currentPopupAction.cancel(),Fr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Xt(this.filter.length===1,"Popup operations only handle one event");const e=oh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jI.get())};e()}}Fr.currentPopupAction=null;/**
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
 */const UI="pendingRedirect",Po=new Map;class FI extends Qy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Po.get(this.auth._key());if(!e){try{const r=await bI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Po.set(this.auth._key(),e)}return this.bypassAuthState||Po.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bI(t,e){const n=BI(e),r=zI(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function VI(t,e){Po.set(t._key(),e)}function zI(t){return Bt(t._redirectPersistence)}function BI(t){return Co(UI,t.config.apiKey,t.name)}async function $I(t,e,n=!1){if(At(t.app))return Promise.reject(nr(t));const r=ih(t),i=OI(r,e),a=await new FI(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const HI=10*60*1e3;class WI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!GI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Yy(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ot(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HI&&this.cachedEventUids.clear(),this.cachedEventUids.has(ip(e))}saveEventToCache(e){this.cachedEventUids.add(ip(e)),this.lastProcessedEventTime=Date.now()}}function ip(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Yy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function GI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yy(t);default:return!1}}/**
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
 */async function KI(t,e={}){return ci(t,"GET","/v1/projects",e)}/**
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
 */const qI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JI=/^https?/;async function XI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await KI(t);for(const n of e)try{if(QI(n))return}catch{}Jt(t,"unauthorized-domain")}function QI(t){const e=Hu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!JI.test(n))return!1;if(qI.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const YI=new Os(3e4,6e4);function sp(){const t=Dt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ZI(t){return new Promise((e,n)=>{var i,s,a;function r(){sp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sp(),n(Ot(t,"network-request-failed"))},timeout:YI.get()})}if((s=(i=Dt().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((a=Dt().gapi)!=null&&a.load)r();else{const u=rI("iframefcb");return Dt()[u]=()=>{gapi.load?r():n(Ot(t,"network-request-failed"))},tI(`${nI()}?onload=${u}`).catch(c=>n(c))}}).catch(e=>{throw Ao=null,e})}let Ao=null;function eT(t){return Ao=Ao||ZI(t),Ao}/**
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
 */const tT=new Os(5e3,15e3),nT="__/auth/iframe",rT="emulator/auth/iframe",iT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oT(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?eh(e,rT):`https://${t.config.authDomain}/${nT}`,r={apiKey:e.apiKey,appName:t.name,v:ui},i=sT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${xs(r).slice(1)}`}async function aT(t){const e=await eT(t),n=Dt().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:oT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Ot(t,"network-request-failed"),u=Dt().setTimeout(()=>{s(a)},tT.get());function c(){Dt().clearTimeout(u),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
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
 */const lT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uT=500,cT=600,hT="_blank",fT="http://localhost";class op{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dT(t,e,n,r=uT,i=cT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const c={...lT,width:r.toString(),height:i.toString(),top:s,left:a},f=Ue().toLowerCase();n&&(u=Oy(f)?hT:n),Ny(f)&&(e=e||fT,c.scrollbars="yes");const _=Object.entries(c).reduce((v,[N,x])=>`${v}${N}=${x},`,"");if(KE(f)&&u!=="_self")return pT(e||"",u),new op(null);const m=window.open(e||"",u,_);B(m,t,"popup-blocked");try{m.focus()}catch{}return new op(m)}function pT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const mT="__/auth/handler",gT="emulator/auth/handler",yT=encodeURIComponent("fac");async function ap(t,e,n,r,i,s){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ui,eventId:i};if(e instanceof zy){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",fS(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,m]of Object.entries({}))a[_]=m}if(e instanceof Ds){const _=e.getScopes().filter(m=>m!=="");_.length>0&&(a.scopes=_.join(","))}t.tenantId&&(a.tid=t.tenantId);const u=a;for(const _ of Object.keys(u))u[_]===void 0&&delete u[_];const c=await t._getAppCheckToken(),f=c?`#${yT}=${encodeURIComponent(c)}`:"";return`${vT(t)}?${xs(u).slice(1)}${f}`}function vT({config:t}){return t.emulator?eh(t,gT):`https://${t.authDomain}/${mT}`}/**
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
 */const Ul="webStorageSupport";class wT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gy,this._completeRedirectFn=$I,this._overrideRedirectResult=VI}async _openPopup(e,n,r,i){var a;Xt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const s=await ap(e,n,r,Hu(),i);return dT(e,s,oh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ap(e,n,r,Hu(),i);return EI(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Xt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await aT(e),r=new WI(e);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ul,{type:Ul},i=>{var a;const s=(a=i==null?void 0:i[0])==null?void 0:a[Ul];s!==void 0&&n(!!s),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=XI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Uy()||xy()||rh()}}const _T=wT;var lp="@firebase/auth",up="1.11.1";/**
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
 */class ST{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ET(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function IT(t){Lt(new vt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;B(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fy(t)},f=new ZE(r,i,s,c);return sI(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Lt(new vt("auth-internal",e=>{const n=ih(e.getProvider("auth").getImmediate());return(r=>new ST(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),it(lp,up,ET(t)),it(lp,up,"esm2020")}/**
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
 */const TT=5*60,kT=fy("authIdTokenMaxAge")||TT;let cp=null;const CT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>kT)return;const i=n==null?void 0:n.token;cp!==i&&(cp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function PT(t=Yc()){const e=wr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=iI(t,{popupRedirectResolver:_T,persistence:[xI,wI,Gy]}),r=fy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=CT(s.toString());pI(n,a,()=>a(n.currentUser)),dI(n,u=>a(u))}}const i=cy("auth");return i&&oI(n,`http://${i}`),n}function AT(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}eI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ot("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",AT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});IT("Browser");var hp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lh;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,p){function y(){}y.prototype=p.prototype,g.F=p.prototype,g.prototype=new y,g.prototype.constructor=g,g.D=function(I,T,C){for(var S=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)S[Ee-2]=arguments[Ee];return p.prototype[T].apply(I,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(g,p,y){y||(y=0);const I=Array(16);if(typeof p=="string")for(var T=0;T<16;++T)I[T]=p.charCodeAt(y++)|p.charCodeAt(y++)<<8|p.charCodeAt(y++)<<16|p.charCodeAt(y++)<<24;else for(T=0;T<16;++T)I[T]=p[y++]|p[y++]<<8|p[y++]<<16|p[y++]<<24;p=g.g[0],y=g.g[1],T=g.g[2];let C=g.g[3],S;S=p+(C^y&(T^C))+I[0]+3614090360&4294967295,p=y+(S<<7&4294967295|S>>>25),S=C+(T^p&(y^T))+I[1]+3905402710&4294967295,C=p+(S<<12&4294967295|S>>>20),S=T+(y^C&(p^y))+I[2]+606105819&4294967295,T=C+(S<<17&4294967295|S>>>15),S=y+(p^T&(C^p))+I[3]+3250441966&4294967295,y=T+(S<<22&4294967295|S>>>10),S=p+(C^y&(T^C))+I[4]+4118548399&4294967295,p=y+(S<<7&4294967295|S>>>25),S=C+(T^p&(y^T))+I[5]+1200080426&4294967295,C=p+(S<<12&4294967295|S>>>20),S=T+(y^C&(p^y))+I[6]+2821735955&4294967295,T=C+(S<<17&4294967295|S>>>15),S=y+(p^T&(C^p))+I[7]+4249261313&4294967295,y=T+(S<<22&4294967295|S>>>10),S=p+(C^y&(T^C))+I[8]+1770035416&4294967295,p=y+(S<<7&4294967295|S>>>25),S=C+(T^p&(y^T))+I[9]+2336552879&4294967295,C=p+(S<<12&4294967295|S>>>20),S=T+(y^C&(p^y))+I[10]+4294925233&4294967295,T=C+(S<<17&4294967295|S>>>15),S=y+(p^T&(C^p))+I[11]+2304563134&4294967295,y=T+(S<<22&4294967295|S>>>10),S=p+(C^y&(T^C))+I[12]+1804603682&4294967295,p=y+(S<<7&4294967295|S>>>25),S=C+(T^p&(y^T))+I[13]+4254626195&4294967295,C=p+(S<<12&4294967295|S>>>20),S=T+(y^C&(p^y))+I[14]+2792965006&4294967295,T=C+(S<<17&4294967295|S>>>15),S=y+(p^T&(C^p))+I[15]+1236535329&4294967295,y=T+(S<<22&4294967295|S>>>10),S=p+(T^C&(y^T))+I[1]+4129170786&4294967295,p=y+(S<<5&4294967295|S>>>27),S=C+(y^T&(p^y))+I[6]+3225465664&4294967295,C=p+(S<<9&4294967295|S>>>23),S=T+(p^y&(C^p))+I[11]+643717713&4294967295,T=C+(S<<14&4294967295|S>>>18),S=y+(C^p&(T^C))+I[0]+3921069994&4294967295,y=T+(S<<20&4294967295|S>>>12),S=p+(T^C&(y^T))+I[5]+3593408605&4294967295,p=y+(S<<5&4294967295|S>>>27),S=C+(y^T&(p^y))+I[10]+38016083&4294967295,C=p+(S<<9&4294967295|S>>>23),S=T+(p^y&(C^p))+I[15]+3634488961&4294967295,T=C+(S<<14&4294967295|S>>>18),S=y+(C^p&(T^C))+I[4]+3889429448&4294967295,y=T+(S<<20&4294967295|S>>>12),S=p+(T^C&(y^T))+I[9]+568446438&4294967295,p=y+(S<<5&4294967295|S>>>27),S=C+(y^T&(p^y))+I[14]+3275163606&4294967295,C=p+(S<<9&4294967295|S>>>23),S=T+(p^y&(C^p))+I[3]+4107603335&4294967295,T=C+(S<<14&4294967295|S>>>18),S=y+(C^p&(T^C))+I[8]+1163531501&4294967295,y=T+(S<<20&4294967295|S>>>12),S=p+(T^C&(y^T))+I[13]+2850285829&4294967295,p=y+(S<<5&4294967295|S>>>27),S=C+(y^T&(p^y))+I[2]+4243563512&4294967295,C=p+(S<<9&4294967295|S>>>23),S=T+(p^y&(C^p))+I[7]+1735328473&4294967295,T=C+(S<<14&4294967295|S>>>18),S=y+(C^p&(T^C))+I[12]+2368359562&4294967295,y=T+(S<<20&4294967295|S>>>12),S=p+(y^T^C)+I[5]+4294588738&4294967295,p=y+(S<<4&4294967295|S>>>28),S=C+(p^y^T)+I[8]+2272392833&4294967295,C=p+(S<<11&4294967295|S>>>21),S=T+(C^p^y)+I[11]+1839030562&4294967295,T=C+(S<<16&4294967295|S>>>16),S=y+(T^C^p)+I[14]+4259657740&4294967295,y=T+(S<<23&4294967295|S>>>9),S=p+(y^T^C)+I[1]+2763975236&4294967295,p=y+(S<<4&4294967295|S>>>28),S=C+(p^y^T)+I[4]+1272893353&4294967295,C=p+(S<<11&4294967295|S>>>21),S=T+(C^p^y)+I[7]+4139469664&4294967295,T=C+(S<<16&4294967295|S>>>16),S=y+(T^C^p)+I[10]+3200236656&4294967295,y=T+(S<<23&4294967295|S>>>9),S=p+(y^T^C)+I[13]+681279174&4294967295,p=y+(S<<4&4294967295|S>>>28),S=C+(p^y^T)+I[0]+3936430074&4294967295,C=p+(S<<11&4294967295|S>>>21),S=T+(C^p^y)+I[3]+3572445317&4294967295,T=C+(S<<16&4294967295|S>>>16),S=y+(T^C^p)+I[6]+76029189&4294967295,y=T+(S<<23&4294967295|S>>>9),S=p+(y^T^C)+I[9]+3654602809&4294967295,p=y+(S<<4&4294967295|S>>>28),S=C+(p^y^T)+I[12]+3873151461&4294967295,C=p+(S<<11&4294967295|S>>>21),S=T+(C^p^y)+I[15]+530742520&4294967295,T=C+(S<<16&4294967295|S>>>16),S=y+(T^C^p)+I[2]+3299628645&4294967295,y=T+(S<<23&4294967295|S>>>9),S=p+(T^(y|~C))+I[0]+4096336452&4294967295,p=y+(S<<6&4294967295|S>>>26),S=C+(y^(p|~T))+I[7]+1126891415&4294967295,C=p+(S<<10&4294967295|S>>>22),S=T+(p^(C|~y))+I[14]+2878612391&4294967295,T=C+(S<<15&4294967295|S>>>17),S=y+(C^(T|~p))+I[5]+4237533241&4294967295,y=T+(S<<21&4294967295|S>>>11),S=p+(T^(y|~C))+I[12]+1700485571&4294967295,p=y+(S<<6&4294967295|S>>>26),S=C+(y^(p|~T))+I[3]+2399980690&4294967295,C=p+(S<<10&4294967295|S>>>22),S=T+(p^(C|~y))+I[10]+4293915773&4294967295,T=C+(S<<15&4294967295|S>>>17),S=y+(C^(T|~p))+I[1]+2240044497&4294967295,y=T+(S<<21&4294967295|S>>>11),S=p+(T^(y|~C))+I[8]+1873313359&4294967295,p=y+(S<<6&4294967295|S>>>26),S=C+(y^(p|~T))+I[15]+4264355552&4294967295,C=p+(S<<10&4294967295|S>>>22),S=T+(p^(C|~y))+I[6]+2734768916&4294967295,T=C+(S<<15&4294967295|S>>>17),S=y+(C^(T|~p))+I[13]+1309151649&4294967295,y=T+(S<<21&4294967295|S>>>11),S=p+(T^(y|~C))+I[4]+4149444226&4294967295,p=y+(S<<6&4294967295|S>>>26),S=C+(y^(p|~T))+I[11]+3174756917&4294967295,C=p+(S<<10&4294967295|S>>>22),S=T+(p^(C|~y))+I[2]+718787259&4294967295,T=C+(S<<15&4294967295|S>>>17),S=y+(C^(T|~p))+I[9]+3951481745&4294967295,g.g[0]=g.g[0]+p&4294967295,g.g[1]=g.g[1]+(T+(S<<21&4294967295|S>>>11))&4294967295,g.g[2]=g.g[2]+T&4294967295,g.g[3]=g.g[3]+C&4294967295}r.prototype.v=function(g,p){p===void 0&&(p=g.length);const y=p-this.blockSize,I=this.C;let T=this.h,C=0;for(;C<p;){if(T==0)for(;C<=y;)i(this,g,C),C+=this.blockSize;if(typeof g=="string"){for(;C<p;)if(I[T++]=g.charCodeAt(C++),T==this.blockSize){i(this,I),T=0;break}}else for(;C<p;)if(I[T++]=g[C++],T==this.blockSize){i(this,I),T=0;break}}this.h=T,this.o+=p},r.prototype.A=function(){var g=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);g[0]=128;for(var p=1;p<g.length-8;++p)g[p]=0;p=this.o*8;for(var y=g.length-8;y<g.length;++y)g[y]=p&255,p/=256;for(this.v(g),g=Array(16),p=0,y=0;y<4;++y)for(let I=0;I<32;I+=8)g[p++]=this.g[y]>>>I&255;return g};function s(g,p){var y=u;return Object.prototype.hasOwnProperty.call(y,g)?y[g]:y[g]=p(g)}function a(g,p){this.h=p;const y=[];let I=!0;for(let T=g.length-1;T>=0;T--){const C=g[T]|0;I&&C==p||(y[T]=C,I=!1)}this.g=y}var u={};function c(g){return-128<=g&&g<128?s(g,function(p){return new a([p|0],p<0?-1:0)}):new a([g|0],g<0?-1:0)}function f(g){if(isNaN(g)||!isFinite(g))return m;if(g<0)return L(f(-g));const p=[];let y=1;for(let I=0;g>=y;I++)p[I]=g/y|0,y*=4294967296;return new a(p,0)}function _(g,p){if(g.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(g.charAt(0)=="-")return L(_(g.substring(1),p));if(g.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=f(Math.pow(p,8));let I=m;for(let C=0;C<g.length;C+=8){var T=Math.min(8,g.length-C);const S=parseInt(g.substring(C,C+T),p);T<8?(T=f(Math.pow(p,T)),I=I.j(T).add(f(S))):(I=I.j(y),I=I.add(f(S)))}return I}var m=c(0),v=c(1),N=c(16777216);t=a.prototype,t.m=function(){if(O(this))return-L(this).m();let g=0,p=1;for(let y=0;y<this.g.length;y++){const I=this.i(y);g+=(I>=0?I:4294967296+I)*p,p*=4294967296}return g},t.toString=function(g){if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(x(this))return"0";if(O(this))return"-"+L(this).toString(g);const p=f(Math.pow(g,6));var y=this;let I="";for(;;){const T=D(y,p).g;y=E(y,T.j(p));let C=((y.g.length>0?y.g[0]:y.h)>>>0).toString(g);if(y=T,x(y))return C+I;for(;C.length<6;)C="0"+C;I=C+I}},t.i=function(g){return g<0?0:g<this.g.length?this.g[g]:this.h};function x(g){if(g.h!=0)return!1;for(let p=0;p<g.g.length;p++)if(g.g[p]!=0)return!1;return!0}function O(g){return g.h==-1}t.l=function(g){return g=E(this,g),O(g)?-1:x(g)?0:1};function L(g){const p=g.g.length,y=[];for(let I=0;I<p;I++)y[I]=~g.g[I];return new a(y,~g.h).add(v)}t.abs=function(){return O(this)?L(this):this},t.add=function(g){const p=Math.max(this.g.length,g.g.length),y=[];let I=0;for(let T=0;T<=p;T++){let C=I+(this.i(T)&65535)+(g.i(T)&65535),S=(C>>>16)+(this.i(T)>>>16)+(g.i(T)>>>16);I=S>>>16,C&=65535,S&=65535,y[T]=S<<16|C}return new a(y,y[y.length-1]&-2147483648?-1:0)};function E(g,p){return g.add(L(p))}t.j=function(g){if(x(this)||x(g))return m;if(O(this))return O(g)?L(this).j(L(g)):L(L(this).j(g));if(O(g))return L(this.j(L(g)));if(this.l(N)<0&&g.l(N)<0)return f(this.m()*g.m());const p=this.g.length+g.g.length,y=[];for(var I=0;I<2*p;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(let T=0;T<g.g.length;T++){const C=this.i(I)>>>16,S=this.i(I)&65535,Ee=g.i(T)>>>16,Mt=g.i(T)&65535;y[2*I+2*T]+=S*Mt,w(y,2*I+2*T),y[2*I+2*T+1]+=C*Mt,w(y,2*I+2*T+1),y[2*I+2*T+1]+=S*Ee,w(y,2*I+2*T+1),y[2*I+2*T+2]+=C*Ee,w(y,2*I+2*T+2)}for(g=0;g<p;g++)y[g]=y[2*g+1]<<16|y[2*g];for(g=p;g<2*p;g++)y[g]=0;return new a(y,0)};function w(g,p){for(;(g[p]&65535)!=g[p];)g[p+1]+=g[p]>>>16,g[p]&=65535,p++}function k(g,p){this.g=g,this.h=p}function D(g,p){if(x(p))throw Error("division by zero");if(x(g))return new k(m,m);if(O(g))return p=D(L(g),p),new k(L(p.g),L(p.h));if(O(p))return p=D(g,L(p)),new k(L(p.g),p.h);if(g.g.length>30){if(O(g)||O(p))throw Error("slowDivide_ only works with positive integers.");for(var y=v,I=p;I.l(g)<=0;)y=F(y),I=F(I);var T=b(y,1),C=b(I,1);for(I=b(I,2),y=b(y,2);!x(I);){var S=C.add(I);S.l(g)<=0&&(T=T.add(y),C=S),I=b(I,1),y=b(y,1)}return p=E(g,T.j(p)),new k(T,p)}for(T=m;g.l(p)>=0;){for(y=Math.max(1,Math.floor(g.m()/p.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),C=f(y),S=C.j(p);O(S)||S.l(g)>0;)y-=I,C=f(y),S=C.j(p);x(C)&&(C=v),T=T.add(C),g=E(g,S)}return new k(T,g)}t.B=function(g){return D(this,g).h},t.and=function(g){const p=Math.max(this.g.length,g.g.length),y=[];for(let I=0;I<p;I++)y[I]=this.i(I)&g.i(I);return new a(y,this.h&g.h)},t.or=function(g){const p=Math.max(this.g.length,g.g.length),y=[];for(let I=0;I<p;I++)y[I]=this.i(I)|g.i(I);return new a(y,this.h|g.h)},t.xor=function(g){const p=Math.max(this.g.length,g.g.length),y=[];for(let I=0;I<p;I++)y[I]=this.i(I)^g.i(I);return new a(y,this.h^g.h)};function F(g){const p=g.g.length+1,y=[];for(let I=0;I<p;I++)y[I]=g.i(I)<<1|g.i(I-1)>>>31;return new a(y,g.h)}function b(g,p){const y=p>>5;p%=32;const I=g.g.length-y,T=[];for(let C=0;C<I;C++)T[C]=p>0?g.i(C+y)>>>p|g.i(C+y+1)<<32-p:g.i(C+y);return new a(T,g.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=_,lh=a}).apply(typeof hp<"u"?hp:typeof self<"u"?self:typeof window<"u"?window:{});var co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=Object.defineProperty;function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof co=="object"&&co];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function i(o,l){if(l)e:{var h=r;o=o.split(".");for(var d=0;d<o.length-1;d++){var P=o[d];if(!(P in h))break e;h=h[P]}o=o[o.length-1],d=h[o],l=l(d),l!=d&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}i("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(o){return o||function(l){var h=[],d;for(d in l)Object.prototype.hasOwnProperty.call(l,d)&&h.push([d,l[d]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function u(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function c(o,l,h){return o.call.apply(o.bind,arguments)}function f(o,l,h){return f=c,f.apply(null,arguments)}function _(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var d=h.slice();return d.push.apply(d,arguments),o.apply(this,d)}}function m(o,l){function h(){}h.prototype=l.prototype,o.Z=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(d,P,R){for(var U=Array(arguments.length-2),W=2;W<arguments.length;W++)U[W-2]=arguments[W];return l.prototype[P].apply(d,U)}}var v=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function N(o){const l=o.length;if(l>0){const h=Array(l);for(let d=0;d<l;d++)h[d]=o[d];return h}return[]}function x(o,l){for(let d=1;d<arguments.length;d++){const P=arguments[d];var h=typeof P;if(h=h!="object"?h:P?Array.isArray(P)?"array":h:"null",h=="array"||h=="object"&&typeof P.length=="number"){h=o.length||0;const R=P.length||0;o.length=h+R;for(let U=0;U<R;U++)o[h+U]=P[U]}else o.push(P)}}class O{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function L(o){a.setTimeout(()=>{throw o},0)}function E(){var o=g;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class w{constructor(){this.h=this.g=null}add(l,h){const d=k.get();d.set(l,h),this.h?this.h.next=d:this.g=d,this.h=d}}var k=new O(()=>new D,o=>o.reset());class D{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let F,b=!1,g=new w,p=()=>{const o=Promise.resolve(void 0);F=()=>{o.then(y)}};function y(){for(var o;o=E();){try{o.h.call(o.g)}catch(h){L(h)}var l=k;l.j(o),l.h<100&&(l.h++,o.next=l.g,l.g=o)}b=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,l),a.removeEventListener("test",h,l)}catch{}return o}();function S(o){return/^[\s\xa0]*$/.test(o)}function Ee(o,l){T.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,l)}m(Ee,T),Ee.prototype.init=function(o,l){const h=this.type=o.type,d=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget,l||(h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement)),this.relatedTarget=l,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Ee.Z.h.call(this)},Ee.prototype.h=function(){Ee.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Mt="closure_listenable_"+(Math.random()*1e6|0),hi=0;function fi(o,l,h,d,P){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!d,this.ha=P,this.key=++hi,this.da=this.fa=!1}function V(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function $(o,l,h){for(const d in o)l.call(h,o[d],d,o)}function H(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function ie(o){const l={};for(const h in o)l[h]=o[h];return l}const ce="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Fn(o,l){let h,d;for(let P=1;P<arguments.length;P++){d=arguments[P];for(h in d)o[h]=d[h];for(let R=0;R<ce.length;R++)h=ce[R],Object.prototype.hasOwnProperty.call(d,h)&&(o[h]=d[h])}}function Ye(o){this.src=o,this.g={},this.h=0}Ye.prototype.add=function(o,l,h,d,P){const R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);const U=at(o,l,d,P);return U>-1?(l=o[U],h||(l.fa=!1)):(l=new fi(l,this.src,R,!!d,P),l.fa=h,o.push(l)),l};function bn(o,l){const h=l.type;if(h in o.g){var d=o.g[h],P=Array.prototype.indexOf.call(d,l,void 0),R;(R=P>=0)&&Array.prototype.splice.call(d,P,1),R&&(V(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function at(o,l,h,d){for(let P=0;P<o.length;++P){const R=o[P];if(!R.da&&R.listener==l&&R.capture==!!h&&R.ha==d)return P}return-1}var Yt="closure_lm_"+(Math.random()*1e6|0),La={};function _h(o,l,h,d,P){if(Array.isArray(l)){for(let R=0;R<l.length;R++)_h(o,l[R],h,d,P);return null}return h=Ih(h),o&&o[Mt]?o.J(l,h,u(d)?!!d.capture:!1,P):Av(o,l,h,!1,d,P)}function Av(o,l,h,d,P,R){if(!l)throw Error("Invalid event type");const U=u(P)?!!P.capture:!!P;let W=ja(o);if(W||(o[Yt]=W=new Ye(o)),h=W.add(l,h,d,U,R),h.proxy)return h;if(d=Rv(),h.proxy=d,d.src=o,d.listener=h,o.addEventListener)C||(P=U),P===void 0&&(P=!1),o.addEventListener(l.toString(),d,P);else if(o.attachEvent)o.attachEvent(Eh(l.toString()),d);else if(o.addListener&&o.removeListener)o.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Rv(){function o(h){return l.call(o.src,o.listener,h)}const l=Nv;return o}function Sh(o,l,h,d,P){if(Array.isArray(l))for(var R=0;R<l.length;R++)Sh(o,l[R],h,d,P);else d=u(d)?!!d.capture:!!d,h=Ih(h),o&&o[Mt]?(o=o.i,R=String(l).toString(),R in o.g&&(l=o.g[R],h=at(l,h,d,P),h>-1&&(V(l[h]),Array.prototype.splice.call(l,h,1),l.length==0&&(delete o.g[R],o.h--)))):o&&(o=ja(o))&&(l=o.g[l.toString()],o=-1,l&&(o=at(l,h,d,P)),(h=o>-1?l[o]:null)&&Ma(h))}function Ma(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Mt])bn(l.i,o);else{var h=o.type,d=o.proxy;l.removeEventListener?l.removeEventListener(h,d,o.capture):l.detachEvent?l.detachEvent(Eh(h),d):l.addListener&&l.removeListener&&l.removeListener(d),(h=ja(l))?(bn(h,o),h.h==0&&(h.src=null,l[Yt]=null)):V(o)}}}function Eh(o){return o in La?La[o]:La[o]="on"+o}function Nv(o,l){if(o.da)o=!0;else{l=new Ee(l,this);const h=o.listener,d=o.ha||o.src;o.fa&&Ma(o),o=h.call(d,l)}return o}function ja(o){return o=o[Yt],o instanceof Ye?o:null}var Ua="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ih(o){return typeof o=="function"?o:(o[Ua]||(o[Ua]=function(l){return o.handleEvent(l)}),o[Ua])}function Ce(){I.call(this),this.i=new Ye(this),this.M=this,this.G=null}m(Ce,I),Ce.prototype[Mt]=!0,Ce.prototype.removeEventListener=function(o,l,h,d){Sh(this,o,l,h,d)};function xe(o,l){var h,d=o.G;if(d)for(h=[];d;d=d.G)h.push(d);if(o=o.M,d=l.type||l,typeof l=="string")l=new T(l,o);else if(l instanceof T)l.target=l.target||o;else{var P=l;l=new T(d,o),Fn(l,P)}P=!0;let R,U;if(h)for(U=h.length-1;U>=0;U--)R=l.g=h[U],P=Us(R,d,!0,l)&&P;if(R=l.g=o,P=Us(R,d,!0,l)&&P,P=Us(R,d,!1,l)&&P,h)for(U=0;U<h.length;U++)R=l.g=h[U],P=Us(R,d,!1,l)&&P}Ce.prototype.N=function(){if(Ce.Z.N.call(this),this.i){var o=this.i;for(const l in o.g){const h=o.g[l];for(let d=0;d<h.length;d++)V(h[d]);delete o.g[l],o.h--}}this.G=null},Ce.prototype.J=function(o,l,h,d){return this.i.add(String(o),l,!1,h,d)},Ce.prototype.K=function(o,l,h,d){return this.i.add(String(o),l,!0,h,d)};function Us(o,l,h,d){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();let P=!0;for(let R=0;R<l.length;++R){const U=l[R];if(U&&!U.da&&U.capture==h){const W=U.listener,ge=U.ha||U.src;U.fa&&bn(o.i,U),P=W.call(ge,d)!==!1&&P}}return P&&!d.defaultPrevented}function xv(o,l){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=f(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(o,l||0)}function Th(o){o.g=xv(()=>{o.g=null,o.i&&(o.i=!1,Th(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Ov extends I{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Th(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function di(o){I.call(this),this.h=o,this.g={}}m(di,I);var kh=[];function Ch(o){$(o.g,function(l,h){this.g.hasOwnProperty(h)&&Ma(l)},o),o.g={}}di.prototype.N=function(){di.Z.N.call(this),Ch(this)},di.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fa=a.JSON.stringify,Dv=a.JSON.parse,Lv=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Ph(){}function Mv(){}var pi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ba(){T.call(this,"d")}m(ba,T);function Va(){T.call(this,"c")}m(Va,T);var _r={},Ah=null;function za(){return Ah=Ah||new Ce}_r.Ia="serverreachability";function Rh(o){T.call(this,_r.Ia,o)}m(Rh,T);function mi(o){const l=za();xe(l,new Rh(l))}_r.STAT_EVENT="statevent";function Nh(o,l){T.call(this,_r.STAT_EVENT,o),this.stat=l}m(Nh,T);function Oe(o){const l=za();xe(l,new Nh(l,o))}_r.Ja="timingevent";function xh(o,l){T.call(this,_r.Ja,o),this.size=l}m(xh,T);function gi(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},l)}function yi(){this.g=!0}yi.prototype.ua=function(){this.g=!1};function jv(o,l,h,d,P,R){o.info(function(){if(o.g)if(R){var U="",W=R.split("&");for(let Z=0;Z<W.length;Z++){var ge=W[Z].split("=");if(ge.length>1){const we=ge[0];ge=ge[1];const Et=we.split("_");U=Et.length>=2&&Et[1]=="type"?U+(we+"="+ge+"&"):U+(we+"=redacted&")}}}else U=null;else U=R;return"XMLHTTP REQ ("+d+") [attempt "+P+"]: "+l+`
`+h+`
`+U})}function Uv(o,l,h,d,P,R,U){o.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+P+"]: "+l+`
`+h+`
`+R+" "+U})}function Sr(o,l,h,d){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+bv(o,h)+(d?" "+d:"")})}function Fv(o,l){o.info(function(){return"TIMEOUT: "+l})}yi.prototype.info=function(){};function bv(o,l){if(!o.g)return l;if(!l)return null;try{const R=JSON.parse(l);if(R){for(o=0;o<R.length;o++)if(Array.isArray(R[o])){var h=R[o];if(!(h.length<2)){var d=h[1];if(Array.isArray(d)&&!(d.length<1)){var P=d[0];if(P!="noop"&&P!="stop"&&P!="close")for(let U=1;U<d.length;U++)d[U]=""}}}}return Fa(R)}catch{return l}}var Ba={NO_ERROR:0,TIMEOUT:8},Vv={},Oh;function $a(){}m($a,Ph),$a.prototype.g=function(){return new XMLHttpRequest},Oh=new $a;function vi(o){return encodeURIComponent(String(o))}function zv(o){var l=1;o=o.split(":");const h=[];for(;l>0&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function Zt(o,l,h,d){this.j=o,this.i=l,this.l=h,this.S=d||1,this.V=new di(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Dh}function Dh(){this.i=null,this.g="",this.h=!1}var Lh={},Ha={};function Wa(o,l,h){o.M=1,o.A=bs(St(l)),o.u=h,o.R=!0,Mh(o,null)}function Mh(o,l){o.F=Date.now(),Fs(o),o.B=St(o.A);var h=o.B,d=o.S;Array.isArray(d)||(d=[String(d)]),qh(h.i,"t",d),o.C=0,h=o.j.L,o.h=new Dh,o.g=df(o.j,h?l:null,!o.u),o.P>0&&(o.O=new Ov(f(o.Y,o,o.g),o.P)),l=o.V,h=o.g,d=o.ba;var P="readystatechange";Array.isArray(P)||(P&&(kh[0]=P.toString()),P=kh);for(let R=0;R<P.length;R++){const U=_h(h,P[R],d||l.handleEvent,!1,l.h||l);if(!U)break;l.g[U.key]=U}l=o.J?ie(o.J):{},o.u?(o.v||(o.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,l)):(o.v="GET",o.g.ea(o.B,o.v,null,l)),mi(),jv(o.i,o.v,o.B,o.l,o.S,o.u)}Zt.prototype.ba=function(o){o=o.target;const l=this.O;l&&nn(o)==3?l.j():this.Y(o)},Zt.prototype.Y=function(o){try{if(o==this.g)e:{const W=nn(this.g),ge=this.g.ya(),Z=this.g.ca();if(!(W<3)&&(W!=3||this.g&&(this.h.h||this.g.la()||tf(this.g)))){this.K||W!=4||ge==7||(ge==8||Z<=0?mi(3):mi(2)),Ga(this);var l=this.g.ca();this.X=l;var h=Bv(this);if(this.o=l==200,Uv(this.i,this.v,this.B,this.l,this.S,W,l),this.o){if(this.U&&!this.L){t:{if(this.g){var d,P=this.g;if((d=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(d)){var R=d;break t}}R=null}if(o=R)Sr(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ka(this,o);else{this.o=!1,this.m=3,Oe(12),Vn(this),wi(this);break e}}if(this.R){o=!0;let we;for(;!this.K&&this.C<h.length;)if(we=$v(this,h),we==Ha){W==4&&(this.m=4,Oe(14),o=!1),Sr(this.i,this.l,null,"[Incomplete Response]");break}else if(we==Lh){this.m=4,Oe(15),Sr(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else Sr(this.i,this.l,we,null),Ka(this,we);if(jh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),W!=4||h.length!=0||this.h.h||(this.m=1,Oe(16),o=!1),this.o=this.o&&o,!o)Sr(this.i,this.l,h,"[Invalid Chunked Response]"),Vn(this),wi(this);else if(h.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),tl(U),U.P=!0,Oe(11))}}else Sr(this.i,this.l,h,null),Ka(this,h);W==4&&Vn(this),this.o&&!this.K&&(W==4?uf(this.j,this):(this.o=!1,Fs(this)))}else rw(this.g),l==400&&h.indexOf("Unknown SID")>0?(this.m=3,Oe(12)):(this.m=0,Oe(13)),Vn(this),wi(this)}}}catch{}finally{}};function Bv(o){if(!jh(o))return o.g.la();const l=tf(o.g);if(l==="")return"";let h="";const d=l.length,P=nn(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Vn(o),wi(o),"";o.h.i=new a.TextDecoder}for(let R=0;R<d;R++)o.h.h=!0,h+=o.h.i.decode(l[R],{stream:!(P&&R==d-1)});return l.length=0,o.h.g+=h,o.C=0,o.h.g}function jh(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function $v(o,l){var h=o.C,d=l.indexOf(`
`,h);return d==-1?Ha:(h=Number(l.substring(h,d)),isNaN(h)?Lh:(d+=1,d+h>l.length?Ha:(l=l.slice(d,d+h),o.C=d+h,l)))}Zt.prototype.cancel=function(){this.K=!0,Vn(this)};function Fs(o){o.T=Date.now()+o.H,Uh(o,o.H)}function Uh(o,l){if(o.D!=null)throw Error("WatchDog timer not null");o.D=gi(f(o.aa,o),l)}function Ga(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Zt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Fv(this.i,this.B),this.M!=2&&(mi(),Oe(17)),Vn(this),this.m=2,wi(this)):Uh(this,this.T-o)};function wi(o){o.j.I==0||o.K||uf(o.j,o)}function Vn(o){Ga(o);var l=o.O;l&&typeof l.dispose=="function"&&l.dispose(),o.O=null,Ch(o.V),o.g&&(l=o.g,o.g=null,l.abort(),l.dispose())}function Ka(o,l){try{var h=o.j;if(h.I!=0&&(h.g==o||qa(h.h,o))){if(!o.L&&qa(h.h,o)&&h.I==3){try{var d=h.Ba.g.parse(l)}catch{d=null}if(Array.isArray(d)&&d.length==3){var P=d;if(P[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)Hs(h),Bs(h);else break e;el(h),Oe(18)}}else h.xa=P[1],0<h.xa-h.K&&P[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=gi(f(h.Va,h),6e3));Vh(h.h)<=1&&h.ta&&(h.ta=void 0)}else Bn(h,11)}else if((o.L||h.g==o)&&Hs(h),!S(l))for(P=h.Ba.g.parse(l),l=0;l<P.length;l++){let Z=P[l];const we=Z[0];if(!(we<=h.K))if(h.K=we,Z=Z[1],h.I==2)if(Z[0]=="c"){h.M=Z[1],h.ba=Z[2];const Et=Z[3];Et!=null&&(h.ka=Et,h.j.info("VER="+h.ka));const $n=Z[4];$n!=null&&(h.za=$n,h.j.info("SVER="+h.za));const rn=Z[5];rn!=null&&typeof rn=="number"&&rn>0&&(d=1.5*rn,h.O=d,h.j.info("backChannelRequestTimeoutMs_="+d)),d=h;const sn=o.g;if(sn){const Ws=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ws){var R=d.h;R.g||Ws.indexOf("spdy")==-1&&Ws.indexOf("quic")==-1&&Ws.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Ja(R,R.h),R.h=null))}if(d.G){const nl=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;nl&&(d.wa=nl,te(d.J,d.G,nl))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),d=h;var U=o;if(d.na=ff(d,d.L?d.ba:null,d.W),U.L){zh(d.h,U);var W=U,ge=d.O;ge&&(W.H=ge),W.D&&(Ga(W),Fs(W)),d.g=U}else af(d);h.i.length>0&&$s(h)}else Z[0]!="stop"&&Z[0]!="close"||Bn(h,7);else h.I==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?Bn(h,7):Za(h):Z[0]!="noop"&&h.l&&h.l.qa(Z),h.A=0)}}mi(4)}catch{}}var Hv=class{constructor(o,l){this.g=o,this.map=l}};function Fh(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function bh(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Vh(o){return o.h?1:o.g?o.g.size:0}function qa(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Ja(o,l){o.g?o.g.add(l):o.h=l}function zh(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Fh.prototype.cancel=function(){if(this.i=Bh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Bh(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.G);return l}return N(o.i)}var $h=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wv(o,l){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const d=o[h].indexOf("=");let P,R=null;d>=0?(P=o[h].substring(0,d),R=o[h].substring(d+1)):P=o[h],l(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function en(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;o instanceof en?(this.l=o.l,_i(this,o.j),this.o=o.o,this.g=o.g,Si(this,o.u),this.h=o.h,Xa(this,Jh(o.i)),this.m=o.m):o&&(l=String(o).match($h))?(this.l=!1,_i(this,l[1]||"",!0),this.o=Ei(l[2]||""),this.g=Ei(l[3]||"",!0),Si(this,l[4]),this.h=Ei(l[5]||"",!0),Xa(this,l[6]||"",!0),this.m=Ei(l[7]||"")):(this.l=!1,this.i=new Ti(null,this.l))}en.prototype.toString=function(){const o=[];var l=this.j;l&&o.push(Ii(l,Hh,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Ii(l,Hh,!0),"@"),o.push(vi(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Ii(h,h.charAt(0)=="/"?qv:Kv,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Ii(h,Xv)),o.join("")},en.prototype.resolve=function(o){const l=St(this);let h=!!o.j;h?_i(l,o.j):h=!!o.o,h?l.o=o.o:h=!!o.g,h?l.g=o.g:h=o.u!=null;var d=o.h;if(h)Si(l,o.u);else if(h=!!o.h){if(d.charAt(0)!="/")if(this.g&&!this.h)d="/"+d;else{var P=l.h.lastIndexOf("/");P!=-1&&(d=l.h.slice(0,P+1)+d)}if(P=d,P==".."||P==".")d="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){d=P.lastIndexOf("/",0)==0,P=P.split("/");const R=[];for(let U=0;U<P.length;){const W=P[U++];W=="."?d&&U==P.length&&R.push(""):W==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),d&&U==P.length&&R.push("")):(R.push(W),d=!0)}d=R.join("/")}else d=P}return h?l.h=d:h=o.i.toString()!=="",h?Xa(l,Jh(o.i)):h=!!o.m,h&&(l.m=o.m),l};function St(o){return new en(o)}function _i(o,l,h){o.j=h?Ei(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Si(o,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);o.u=l}else o.u=null}function Xa(o,l,h){l instanceof Ti?(o.i=l,Qv(o.i,o.l)):(h||(l=Ii(l,Jv)),o.i=new Ti(l,o.l))}function te(o,l,h){o.i.set(l,h)}function bs(o){return te(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Ei(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ii(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,Gv),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Gv(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Hh=/[#\/\?@]/g,Kv=/[#\?:]/g,qv=/[#\?]/g,Jv=/[#\?@]/g,Xv=/#/g;function Ti(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function zn(o){o.g||(o.g=new Map,o.h=0,o.i&&Wv(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}t=Ti.prototype,t.add=function(o,l){zn(this),this.i=null,o=Er(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function Wh(o,l){zn(o),l=Er(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Gh(o,l){return zn(o),l=Er(o,l),o.g.has(l)}t.forEach=function(o,l){zn(this),this.g.forEach(function(h,d){h.forEach(function(P){o.call(l,P,d,this)},this)},this)};function Kh(o,l){zn(o);let h=[];if(typeof l=="string")Gh(o,l)&&(h=h.concat(o.g.get(Er(o,l))));else for(o=Array.from(o.g.values()),l=0;l<o.length;l++)h=h.concat(o[l]);return h}t.set=function(o,l){return zn(this),this.i=null,o=Er(this,o),Gh(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},t.get=function(o,l){return o?(o=Kh(this,o),o.length>0?String(o[0]):l):l};function qh(o,l,h){Wh(o,l),h.length>0&&(o.i=null,o.g.set(Er(o,l),N(h)),o.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(let d=0;d<l.length;d++){var h=l[d];const P=vi(h);h=Kh(this,h);for(let R=0;R<h.length;R++){let U=P;h[R]!==""&&(U+="="+vi(h[R])),o.push(U)}}return this.i=o.join("&")};function Jh(o){const l=new Ti;return l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),l}function Er(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Qv(o,l){l&&!o.j&&(zn(o),o.i=null,o.g.forEach(function(h,d){const P=d.toLowerCase();d!=P&&(Wh(this,d),qh(this,P,h))},o)),o.j=l}function Yv(o,l){const h=new yi;if(a.Image){const d=new Image;d.onload=_(tn,h,"TestLoadImage: loaded",!0,l,d),d.onerror=_(tn,h,"TestLoadImage: error",!1,l,d),d.onabort=_(tn,h,"TestLoadImage: abort",!1,l,d),d.ontimeout=_(tn,h,"TestLoadImage: timeout",!1,l,d),a.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=o}else l(!1)}function Zv(o,l){const h=new yi,d=new AbortController,P=setTimeout(()=>{d.abort(),tn(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:d.signal}).then(R=>{clearTimeout(P),R.ok?tn(h,"TestPingServer: ok",!0,l):tn(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(P),tn(h,"TestPingServer: error",!1,l)})}function tn(o,l,h,d,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),d(h)}catch{}}function ew(){this.g=new Lv}function Qa(o){this.i=o.Sb||null,this.h=o.ab||!1}m(Qa,Ph),Qa.prototype.g=function(){return new Vs(this.i,this.h)};function Vs(o,l){Ce.call(this),this.H=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Vs,Ce),t=Vs.prototype,t.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=l,this.readyState=1,Ci(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(l.body=o),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ki(this)),this.readyState=0},t.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ci(this)),this.g&&(this.readyState=3,Ci(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Xh(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Xh(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}t.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?ki(this):Ci(this),this.readyState==3&&Xh(this)}},t.Oa=function(o){this.g&&(this.response=this.responseText=o,ki(this))},t.Na=function(o){this.g&&(this.response=o,ki(this))},t.ga=function(){this.g&&ki(this)};function ki(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Ci(o)}t.setRequestHeader=function(o,l){this.A.append(o,l)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function Ci(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Vs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Qh(o){let l="";return $(o,function(h,d){l+=d,l+=":",l+=h,l+=`\r
`}),l}function Ya(o,l,h){e:{for(d in h){var d=!1;break e}d=!0}d||(h=Qh(h),typeof o=="string"?h!=null&&vi(h):te(o,l,h))}function he(o){Ce.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(he,Ce);var tw=/^https?$/i,nw=["POST","PUT"];t=he.prototype,t.Fa=function(o){this.H=o},t.ea=function(o,l,h,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Oh.g(),this.g.onreadystatechange=v(f(this.Ca,this));try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(R){Yh(this,R);return}if(o=h||"",h=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var P in d)h.set(P,d[P]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const R of d.keys())h.set(R,d.get(R));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),P=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(nw,l,void 0)>=0)||d||P||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,U]of h)this.g.setRequestHeader(R,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(R){Yh(this,R)}};function Yh(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.o=5,Zh(o),zs(o)}function Zh(o){o.A||(o.A=!0,xe(o,"complete"),xe(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,xe(this,"complete"),xe(this,"abort"),zs(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zs(this,!0)),he.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?ef(this):this.Xa())},t.Xa=function(){ef(this)};function ef(o){if(o.h&&typeof s<"u"){if(o.v&&nn(o)==4)setTimeout(o.Ca.bind(o),0);else if(xe(o,"readystatechange"),nn(o)==4){o.h=!1;try{const R=o.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var d;if(d=R===0){let U=String(o.D).match($h)[1]||null;!U&&a.self&&a.self.location&&(U=a.self.location.protocol.slice(0,-1)),d=!tw.test(U?U.toLowerCase():"")}h=d}if(h)xe(o,"complete"),xe(o,"success");else{o.o=6;try{var P=nn(o)>2?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.ca()+"]",Zh(o)}}finally{zs(o)}}}}function zs(o,l){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,l||xe(o,"ready");try{h.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function nn(o){return o.g?o.g.readyState:0}t.ca=function(){try{return nn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Dv(l)}};function tf(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function rw(o){const l={};o=(o.g&&nn(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<o.length;d++){if(S(o[d]))continue;var h=zv(o[d]);const P=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=l[P]||[];l[P]=R,R.push(h)}H(l,function(d){return d.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Pi(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function nf(o){this.za=0,this.i=[],this.j=new yi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Pi("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Pi("baseRetryDelayMs",5e3,o),this.Za=Pi("retryDelaySeedMs",1e4,o),this.Ta=Pi("forwardChannelMaxRetries",2,o),this.va=Pi("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Fh(o&&o.concurrentRequestLimit),this.Ba=new ew,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=nf.prototype,t.ka=8,t.I=1,t.connect=function(o,l,h,d){Oe(0),this.W=o,this.H=l||{},h&&d!==void 0&&(this.H.OSID=h,this.H.OAID=d),this.F=this.X,this.J=ff(this,null,this.W),$s(this)};function Za(o){if(rf(o),o.I==3){var l=o.V++,h=St(o.J);if(te(h,"SID",o.M),te(h,"RID",l),te(h,"TYPE","terminate"),Ai(o,h),l=new Zt(o,o.j,l),l.M=2,l.A=bs(St(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=l.A,h=!0),h||(l.g=df(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Fs(l)}hf(o)}function Bs(o){o.g&&(tl(o),o.g.cancel(),o.g=null)}function rf(o){Bs(o),o.v&&(a.clearTimeout(o.v),o.v=null),Hs(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function $s(o){if(!bh(o.h)&&!o.m){o.m=!0;var l=o.Ea;F||p(),b||(F(),b=!0),g.add(l,o),o.D=0}}function iw(o,l){return Vh(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=l.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=gi(f(o.Ea,o,l),cf(o,o.D)),o.D++,!0)}t.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const P=new Zt(this,this.j,o);let R=this.o;if(this.U&&(R?(R=ie(R),Fn(R,this.U)):R=this.U),this.u!==null||this.R||(P.J=R,R=null),this.S)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var d=this.i[h];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(l+=d,l>4096){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=of(this,P,l),h=St(this.J),te(h,"RID",o),te(h,"CVER",22),this.G&&te(h,"X-HTTP-Session-Id",this.G),Ai(this,h),R&&(this.R?l="headers="+vi(Qh(R))+"&"+l:this.u&&Ya(h,this.u,R)),Ja(this.h,P),this.Ra&&te(h,"TYPE","init"),this.S?(te(h,"$req",l),te(h,"SID","null"),P.U=!0,Wa(P,h,null)):Wa(P,h,l),this.I=2}}else this.I==3&&(o?sf(this,o):this.i.length==0||bh(this.h)||sf(this))};function sf(o,l){var h;l?h=l.l:h=o.V++;const d=St(o.J);te(d,"SID",o.M),te(d,"RID",h),te(d,"AID",o.K),Ai(o,d),o.u&&o.o&&Ya(d,o.u,o.o),h=new Zt(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),l&&(o.i=l.G.concat(o.i)),l=of(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Ja(o.h,h),Wa(h,d,l)}function Ai(o,l){o.H&&$(o.H,function(h,d){te(l,d,h)}),o.l&&$({},function(h,d){te(l,d,h)})}function of(o,l,h){h=Math.min(o.i.length,h);const d=o.l?f(o.l.Ka,o.l,o):null;e:{var P=o.i;let W=-1;for(;;){const ge=["count="+h];W==-1?h>0?(W=P[0].g,ge.push("ofs="+W)):W=0:ge.push("ofs="+W);let Z=!0;for(let we=0;we<h;we++){var R=P[we].g;const Et=P[we].map;if(R-=W,R<0)W=Math.max(0,P[we].g-100),Z=!1;else try{R="req"+R+"_"||"";try{var U=Et instanceof Map?Et:Object.entries(Et);for(const[$n,rn]of U){let sn=rn;u(rn)&&(sn=Fa(rn)),ge.push(R+$n+"="+encodeURIComponent(sn))}}catch($n){throw ge.push(R+"type="+encodeURIComponent("_badmap")),$n}}catch{d&&d(Et)}}if(Z){U=ge.join("&");break e}}U=void 0}return o=o.i.splice(0,h),l.G=o,U}function af(o){if(!o.g&&!o.v){o.Y=1;var l=o.Da;F||p(),b||(F(),b=!0),g.add(l,o),o.A=0}}function el(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=gi(f(o.Da,o),cf(o,o.A)),o.A++,!0)}t.Da=function(){if(this.v=null,lf(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=gi(f(this.Wa,this),o)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Oe(10),Bs(this),lf(this))};function tl(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function lf(o){o.g=new Zt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var l=St(o.na);te(l,"RID","rpc"),te(l,"SID",o.M),te(l,"AID",o.K),te(l,"CI",o.F?"0":"1"),!o.F&&o.ia&&te(l,"TO",o.ia),te(l,"TYPE","xmlhttp"),Ai(o,l),o.u&&o.o&&Ya(l,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=bs(St(l)),h.u=null,h.R=!0,Mh(h,o)}t.Va=function(){this.C!=null&&(this.C=null,Bs(this),el(this),Oe(19))};function Hs(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function uf(o,l){var h=null;if(o.g==l){Hs(o),tl(o),o.g=null;var d=2}else if(qa(o.h,l))h=l.G,zh(o.h,l),d=1;else return;if(o.I!=0){if(l.o)if(d==1){h=l.u?l.u.length:0,l=Date.now()-l.F;var P=o.D;d=za(),xe(d,new xh(d,h)),$s(o)}else af(o);else if(P=l.m,P==3||P==0&&l.X>0||!(d==1&&iw(o,l)||d==2&&el(o)))switch(h&&h.length>0&&(l=o.h,l.i=l.i.concat(h)),P){case 1:Bn(o,5);break;case 4:Bn(o,10);break;case 3:Bn(o,6);break;default:Bn(o,2)}}}function cf(o,l){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*l}function Bn(o,l){if(o.j.info("Error code "+l),l==2){var h=f(o.bb,o),d=o.Ua;const P=!d;d=new en(d||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||_i(d,"https"),bs(d),P?Yv(d.toString(),h):Zv(d.toString(),h)}else Oe(2);o.I=0,o.l&&o.l.pa(l),hf(o),rf(o)}t.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))};function hf(o){if(o.I=0,o.ja=[],o.l){const l=Bh(o.h);(l.length!=0||o.i.length!=0)&&(x(o.ja,l),x(o.ja,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.oa()}}function ff(o,l,h){var d=h instanceof en?St(h):new en(h);if(d.g!="")l&&(d.g=l+"."+d.g),Si(d,d.u);else{var P=a.location;d=P.protocol,l=l?l+"."+P.hostname:P.hostname,P=+P.port;const R=new en(null);d&&_i(R,d),l&&(R.g=l),P&&Si(R,P),h&&(R.h=h),d=R}return h=o.G,l=o.wa,h&&l&&te(d,h,l),te(d,"VER",o.ka),Ai(o,d),d}function df(o,l,h){if(l&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Aa&&!o.ma?new he(new Qa({ab:h})):new he(o.ma),l.Fa(o.L),l}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function pf(){}t=pf.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ze(o,l){Ce.call(this),this.g=new nf(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(o?o["X-WebChannel-Client-Profile"]=l.sa:o={"X-WebChannel-Client-Profile":l.sa}),this.g.U=o,(o=l&&l.Qb)&&!S(o)&&(this.g.u=o),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!S(l)&&(this.g.G=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Ir(this)}m(Ze,Ce),Ze.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ze.prototype.close=function(){Za(this.g)},Ze.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=Fa(o),o=h);l.i.push(new Hv(l.Ya++,o)),l.I==3&&$s(l)},Ze.prototype.N=function(){this.g.l=null,delete this.j,Za(this.g),delete this.g,Ze.Z.N.call(this)};function mf(o){ba.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}m(mf,ba);function gf(){Va.call(this),this.status=1}m(gf,Va);function Ir(o){this.g=o}m(Ir,pf),Ir.prototype.ra=function(){xe(this.g,"a")},Ir.prototype.qa=function(o){xe(this.g,new mf(o))},Ir.prototype.pa=function(o){xe(this.g,new gf)},Ir.prototype.oa=function(){xe(this.g,"b")},Ze.prototype.send=Ze.prototype.o,Ze.prototype.open=Ze.prototype.m,Ze.prototype.close=Ze.prototype.close,Ba.NO_ERROR=0,Ba.TIMEOUT=8,Ba.HTTP_ERROR=6,Vv.COMPLETE="complete",Mv.EventType=pi,pi.OPEN="a",pi.CLOSE="b",pi.ERROR="c",pi.MESSAGE="d",Ce.prototype.listen=Ce.prototype.J,he.prototype.listenOnce=he.prototype.K,he.prototype.getLastError=he.prototype.Ha,he.prototype.getLastErrorCode=he.prototype.ya,he.prototype.getStatus=he.prototype.ca,he.prototype.getResponseJson=he.prototype.La,he.prototype.getResponseText=he.prototype.la,he.prototype.send=he.prototype.ea,he.prototype.setWithCredentials=he.prototype.Fa}).apply(typeof co<"u"?co:typeof self<"u"?self:typeof window<"u"?window:{});const fp="@firebase/firestore",dp="4.9.2";/**
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
 */class Le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
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
 */let Ms="12.3.0";/**
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
 */const ii=new Ra("@firebase/firestore");function pt(t,...e){if(ii.logLevel<=Q.DEBUG){const n=e.map(uh);ii.debug(`Firestore (${Ms}): ${t}`,...n)}}function Zy(t,...e){if(ii.logLevel<=Q.ERROR){const n=e.map(uh);ii.error(`Firestore (${Ms}): ${t}`,...n)}}function RT(t,...e){if(ii.logLevel<=Q.WARN){const n=e.map(uh);ii.warn(`Firestore (${Ms}): ${t}`,...n)}}function uh(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Es(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,ev(t,r,n)}function ev(t,e,n){let r=`FIRESTORE (${Ms}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Zy(r),new Error(r)}function Yi(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||ev(e,i,r)}/**
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
 */const q={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class J extends wt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Zi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class tv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class NT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Le.UNAUTHENTICATED))}shutdown(){}}class xT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class OT{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Yi(this.o===void 0,42304);let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Zi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Zi,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},u=c=>{pt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(pt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Zi)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(pt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Yi(typeof r.accessToken=="string",31837,{l:r}),new tv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Yi(e===null||typeof e=="string",2055,{h:e}),new Le(e)}}class DT{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class LT{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new DT(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MT{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,At(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Yi(this.o===void 0,3512);const r=s=>{s.error!=null&&pt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,pt("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{pt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):pt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new pp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Yi(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new pp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function jT(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class UT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=jT(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function Ln(t,e){return t<e?-1:t>e?1:0}function FT(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Fl(i)===Fl(s)?Ln(i,s):Fl(i)?1:-1}return Ln(t.length,e.length)}const bT=55296,VT=57343;function Fl(t){const e=t.charCodeAt(0);return e>=bT&&e<=VT}/**
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
 */const mp="__name__";class kt{constructor(e,n,r){n===void 0?n=0:n>e.length&&Es(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Es(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return kt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof kt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=kt.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return Ln(e.length,n.length)}static compareSegments(e,n){const r=kt.isNumericId(e),i=kt.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?kt.extractNumericId(e).compare(kt.extractNumericId(n)):FT(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return lh.fromString(e.substring(4,e.length-2))}}class ft extends kt{construct(e,n,r){return new ft(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ft(n)}static emptyPath(){return new ft([])}}const zT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qn extends kt{construct(e,n,r){return new qn(e,n,r)}static isValidIdentifier(e){return zT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===mp}static keyField(){return new qn([mp])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new J(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new J(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new J(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(s(),i++)}if(s(),a)throw new J(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qn(n)}static emptyPath(){return new qn([])}}/**
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
 */class Yn{constructor(e){this.path=e}static fromPath(e){return new Yn(ft.fromString(e))}static fromName(e){return new Yn(ft.fromString(e).popFirst(5))}static empty(){return new Yn(ft.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ft.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ft.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Yn(new ft(e.slice()))}}function BT(t,e,n,r){if(e===!0&&r===!0)throw new J(q.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $T(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function HT(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Es(12329,{type:typeof t})}function WT(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=HT(t);throw new J(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function pe(t,e){const n={typeString:t};return e&&(n.value=e),n}function js(t,e){if(!$T(t))throw new J(q.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(i&&typeof a!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new J(q.INVALID_ARGUMENT,n);return!0}/**
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
 */const gp=-62135596800,yp=1e6;class Ct{static now(){return Ct.fromMillis(Date.now())}static fromDate(e){return Ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*yp);return new Ct(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<gp)throw new J(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/yp}_compareTo(e){return this.seconds===e.seconds?Ln(this.nanoseconds,e.nanoseconds):Ln(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ct._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(js(e,Ct._jsonSchema))return new Ct(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-gp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ct._jsonSchemaVersion="firestore/timestamp/1.0",Ct._jsonSchema={type:pe("string",Ct._jsonSchemaVersion),seconds:pe("number"),nanoseconds:pe("number")};function GT(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class KT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class hr{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new KT("Invalid base64 string: "+s):s}}(e);return new hr(n)}static fromUint8Array(e){const n=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new hr(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ln(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}hr.EMPTY_BYTE_STRING=new hr("");const Ku="(default)";class ua{constructor(e,n){this.projectId=e,this.database=n||Ku}static empty(){return new ua("","")}get isDefaultDatabase(){return this.database===Ku}isEqual(e){return e instanceof ua&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class qT{constructor(e,n=null,r=[],i=[],s=null,a="F",u=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=u,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function JT(t){return new qT(t)}/**
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
 */var vp,K;(K=vp||(vp={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new lh([4294967295,4294967295],0);/**
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
 */const XT=41943040;/**
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
 */const QT=1048576;function bl(){return typeof document<"u"?document:null}/**
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
 */class YT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&pt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */class ch{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Zi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const a=Date.now()+r,u=new ch(e,n,a,i,s);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var wp,_p;(_p=wp||(wp={})).Ma="default",_p.Cache="cache";/**
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
 */function ZT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Sp=new Map;/**
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
 */const nv="firestore.googleapis.com",Ep=!0;class Ip{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new J(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=nv,this.ssl=Ep}else this.host=e.host,this.ssl=e.ssl??Ep;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=XT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<QT)throw new J(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}BT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ZT(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new J(q.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new J(q.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new J(q.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rv{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ip({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ip(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new NT;switch(r.type){case"firstParty":return new LT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Sp.get(n);r&&(pt("ComponentProvider","Removing Datastore"),Sp.delete(n),r.terminate())}(this),Promise.resolve()}}function ek(t,e,n,r={}){var f;t=WT(t,rv);const i=Ns(e),s=t._getSettings(),a={...s,emulatorOptions:t._getEmulatorOptions()},u=`${e}:${n}`;i&&(dy(`https://${u}`),py("Firestore",!0)),s.host!==nv&&s.host!==u&&RT("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...s,host:u,ssl:i,emulatorOptions:r};if(!Dn(c,a)&&(t._setSettings(c),r.mockUserToken)){let _,m;if(typeof r.mockUserToken=="string")_=r.mockUserToken,m=Le.MOCK_USER;else{_=nS(r.mockUserToken,(f=t._app)==null?void 0:f.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new J(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Le(v)}t._authCredentials=new xT(new tv(_,m))}}/**
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
 */class hh{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hh(this.firestore,e,this._query)}}class Rt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fh(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}toJSON(){return{type:Rt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(js(n,Rt._jsonSchema))return new Rt(e,r||null,new Yn(ft.fromString(n.referencePath)))}}Rt._jsonSchemaVersion="firestore/documentReference/1.0",Rt._jsonSchema={type:pe("string",Rt._jsonSchemaVersion),referencePath:pe("string")};class fh extends hh{constructor(e,n,r){super(e,n,JT(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new Yn(e))}withConverter(e){return new fh(this.firestore,e,this._path)}}/**
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
 */const Tp="AsyncQueue";class kp{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new YT(this,"async_queue_retry"),this._c=()=>{const r=bl();r&&pt(Tp,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=bl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=bl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Zi;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!GT(e))throw e;pt(Tp,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Zy("INTERNAL UNHANDLED ERROR: ",Cp(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=ch.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&Es(47125,{Pc:Cp(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Cp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class tk extends rv{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new kp,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new kp(e),this._firestoreClient=void 0,await e}}}function nk(t,e){const n=typeof t=="object"?t:Yc(),r=typeof t=="string"?t:Ku,i=wr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=eS("firestore");s&&ek(i,...s)}return i}/**
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
 */class Ft{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ft(hr.fromBase64String(e))}catch(n){throw new J(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ft(hr.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ft._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(js(e,Ft._jsonSchema))return Ft.fromBase64String(e.bytes)}}Ft._jsonSchemaVersion="firestore/bytes/1.0",Ft._jsonSchema={type:pe("string",Ft._jsonSchemaVersion),bytes:pe("string")};/**
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
 */class iv{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class rr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ln(this._lat,e._lat)||Ln(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rr._jsonSchemaVersion}}static fromJSON(e){if(js(e,rr._jsonSchema))return new rr(e.latitude,e.longitude)}}rr._jsonSchemaVersion="firestore/geoPoint/1.0",rr._jsonSchema={type:pe("string",rr._jsonSchemaVersion),latitude:pe("number"),longitude:pe("number")};/**
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
 */class ir{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ir._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(js(e,ir._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new ir(e.vectorValues);throw new J(q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ir._jsonSchemaVersion="firestore/vectorValue/1.0",ir._jsonSchema={type:pe("string",ir._jsonSchemaVersion),vectorValues:pe("object")};const rk=new RegExp("[~\\*/\\[\\]]");function ik(t,e,n){if(e.search(rk)>=0)throw Pp(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new iv(...e.split("."))._internalPath}catch{throw Pp(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function Pp(t,e,n,r,i){let s=`Function ${e}() called with invalid data`;s+=". ";let a="";return new J(q.INVALID_ARGUMENT,s+t+a)}/**
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
 */class sv{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ov("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class sk extends sv{data(){return super.data()}}function ov(t,e){return typeof e=="string"?ik(t,e):e instanceof iv?e._internalPath:e._delegate._internalPath}class ho{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qr extends sv{constructor(e,n,r,i,s,a){super(e,n,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ro(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ov("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new J(q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=qr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}qr._jsonSchemaVersion="firestore/documentSnapshot/1.0",qr._jsonSchema={type:pe("string",qr._jsonSchemaVersion),bundleSource:pe("string","DocumentSnapshot"),bundleName:pe("string"),bundle:pe("string")};class Ro extends qr{data(e={}){return super.data(e)}}class es{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ho(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ro(this._firestore,this._userDataWriter,r.key,r,new ho(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{const c=new Ro(i._firestore,i._userDataWriter,u.doc.key,u.doc,new ho(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>s||u.type!==3).map(u=>{const c=new Ro(i._firestore,i._userDataWriter,u.doc.key,u.doc,new ho(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,_=-1;return u.type!==0&&(f=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),_=a.indexOf(u.doc.key)),{type:ok(u.type),doc:c,oldIndex:f,newIndex:_}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new J(q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=es._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=UT.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ok(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Es(61501,{type:t})}}es._jsonSchemaVersion="firestore/querySnapshot/1.0",es._jsonSchema={type:pe("string",es._jsonSchemaVersion),bundleSource:pe("string","QuerySnapshot"),bundleName:pe("string"),bundle:pe("string")};(function(e,n=!0){(function(i){Ms=i})(ui),Lt(new vt("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),u=new tk(new OT(r.getProvider("auth-internal")),new MT(a,r.getProvider("app-check-internal")),function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new J(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ua(f.options.projectId,_)}(a,i),a);return s={useFetchStreams:n,...s},u._setSettings(s),u},"PUBLIC").setMultipleInstances(!0)),it(fp,dp,e),it(fp,dp,"esm2020")})();const av="@firebase/installations",dh="0.6.19";/**
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
 */const lv=1e4,uv=`w:${dh}`,cv="FIS_v2",ak="https://firebaseinstallations.googleapis.com/v1",lk=60*60*1e3,uk="installations",ck="Installations";/**
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
 */const hk={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},fr=new vr(uk,ck,hk);function hv(t){return t instanceof wt&&t.code.includes("request-failed")}/**
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
 */function fv({projectId:t}){return`${ak}/projects/${t}/installations`}function dv(t){return{token:t.token,requestStatus:2,expiresIn:dk(t.expiresIn),creationTime:Date.now()}}async function pv(t,e){const r=(await e.json()).error;return fr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function mv({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function fk(t,{refreshToken:e}){const n=mv(t);return n.append("Authorization",pk(e)),n}async function gv(t){const e=await t();return e.status>=500&&e.status<600?t():e}function dk(t){return Number(t.replace("s","000"))}function pk(t){return`${cv} ${t}`}/**
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
 */async function mk({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=fv(t),i=mv(t),s=e.getImmediate({optional:!0});if(s){const f=await s.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const a={fid:n,authVersion:cv,appId:t.appId,sdkVersion:uv},u={method:"POST",headers:i,body:JSON.stringify(a)},c=await gv(()=>fetch(r,u));if(c.ok){const f=await c.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:dv(f.authToken)}}else throw await pv("Create Installation",c)}/**
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
 */function yv(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function gk(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const yk=/^[cdef][\w-]{21}$/,qu="";function vk(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=wk(t);return yk.test(n)?n:qu}catch{return qu}}function wk(t){return gk(t).substr(0,22)}/**
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
 */function Oa(t){return`${t.appName}!${t.appId}`}/**
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
 */const vv=new Map;function wv(t,e){const n=Oa(t);_v(n,e),_k(n,e)}function _v(t,e){const n=vv.get(t);if(n)for(const r of n)r(e)}function _k(t,e){const n=Sk();n&&n.postMessage({key:t,fid:e}),Ek()}let Zn=null;function Sk(){return!Zn&&"BroadcastChannel"in self&&(Zn=new BroadcastChannel("[Firebase] FID Change"),Zn.onmessage=t=>{_v(t.data.key,t.data.fid)}),Zn}function Ek(){vv.size===0&&Zn&&(Zn.close(),Zn=null)}/**
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
 */const Ik="firebase-installations-database",Tk=1,dr="firebase-installations-store";let Vl=null;function ph(){return Vl||(Vl=vy(Ik,Tk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(dr)}}})),Vl}async function ca(t,e){const n=Oa(t),i=(await ph()).transaction(dr,"readwrite"),s=i.objectStore(dr),a=await s.get(n);return await s.put(e,n),await i.done,(!a||a.fid!==e.fid)&&wv(t,e.fid),e}async function Sv(t){const e=Oa(t),r=(await ph()).transaction(dr,"readwrite");await r.objectStore(dr).delete(e),await r.done}async function Da(t,e){const n=Oa(t),i=(await ph()).transaction(dr,"readwrite"),s=i.objectStore(dr),a=await s.get(n),u=e(a);return u===void 0?await s.delete(n):await s.put(u,n),await i.done,u&&(!a||a.fid!==u.fid)&&wv(t,u.fid),u}/**
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
 */async function mh(t){let e;const n=await Da(t.appConfig,r=>{const i=kk(r),s=Ck(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===qu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function kk(t){const e=t||{fid:vk(),registrationStatus:0};return Ev(e)}function Ck(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(fr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Pk(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Ak(t)}:{installationEntry:e}}async function Pk(t,e){try{const n=await mk(t,e);return ca(t.appConfig,n)}catch(n){throw hv(n)&&n.customData.serverCode===409?await Sv(t.appConfig):await ca(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Ak(t){let e=await Ap(t.appConfig);for(;e.registrationStatus===1;)await yv(100),e=await Ap(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await mh(t);return r||n}return e}function Ap(t){return Da(t,e=>{if(!e)throw fr.create("installation-not-found");return Ev(e)})}function Ev(t){return Rk(t)?{fid:t.fid,registrationStatus:0}:t}function Rk(t){return t.registrationStatus===1&&t.registrationTime+lv<Date.now()}/**
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
 */async function Nk({appConfig:t,heartbeatServiceProvider:e},n){const r=xk(t,n),i=fk(t,n),s=e.getImmediate({optional:!0});if(s){const f=await s.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const a={installation:{sdkVersion:uv,appId:t.appId}},u={method:"POST",headers:i,body:JSON.stringify(a)},c=await gv(()=>fetch(r,u));if(c.ok){const f=await c.json();return dv(f)}else throw await pv("Generate Auth Token",c)}function xk(t,{fid:e}){return`${fv(t)}/${e}/authTokens:generate`}/**
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
 */async function gh(t,e=!1){let n;const r=await Da(t.appConfig,s=>{if(!Iv(s))throw fr.create("not-registered");const a=s.authToken;if(!e&&Lk(a))return s;if(a.requestStatus===1)return n=Ok(t,e),s;{if(!navigator.onLine)throw fr.create("app-offline");const u=jk(s);return n=Dk(t,u),u}});return n?await n:r.authToken}async function Ok(t,e){let n=await Rp(t.appConfig);for(;n.authToken.requestStatus===1;)await yv(100),n=await Rp(t.appConfig);const r=n.authToken;return r.requestStatus===0?gh(t,e):r}function Rp(t){return Da(t,e=>{if(!Iv(e))throw fr.create("not-registered");const n=e.authToken;return Uk(n)?{...e,authToken:{requestStatus:0}}:e})}async function Dk(t,e){try{const n=await Nk(t,e),r={...e,authToken:n};return await ca(t.appConfig,r),n}catch(n){if(hv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Sv(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await ca(t.appConfig,r)}throw n}}function Iv(t){return t!==void 0&&t.registrationStatus===2}function Lk(t){return t.requestStatus===2&&!Mk(t)}function Mk(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+lk}function jk(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function Uk(t){return t.requestStatus===1&&t.requestTime+lv<Date.now()}/**
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
 */async function Fk(t){const e=t,{installationEntry:n,registrationPromise:r}=await mh(e);return r?r.catch(console.error):gh(e).catch(console.error),n.fid}/**
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
 */async function bk(t,e=!1){const n=t;return await Vk(n),(await gh(n,e)).token}async function Vk(t){const{registrationPromise:e}=await mh(t);e&&await e}/**
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
 */function zk(t){if(!t||!t.options)throw zl("App Configuration");if(!t.name)throw zl("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw zl(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function zl(t){return fr.create("missing-app-config-values",{valueName:t})}/**
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
 */const Tv="installations",Bk="installations-internal",$k=t=>{const e=t.getProvider("app").getImmediate(),n=zk(e),r=wr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Hk=t=>{const e=t.getProvider("app").getImmediate(),n=wr(e,Tv).getImmediate();return{getId:()=>Fk(n),getToken:i=>bk(n,i)}};function Wk(){Lt(new vt(Tv,$k,"PUBLIC")),Lt(new vt(Bk,Hk,"PRIVATE"))}Wk();it(av,dh);it(av,dh,"esm2020");/**
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
 */const ha="analytics",Gk="firebase_id",Kk="origin",qk=60*1e3,Jk="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",yh="https://www.googletagmanager.com/gtag/js";/**
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
 */const je=new Ra("@firebase/analytics");/**
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
 */const Xk={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},qe=new vr("analytics","Analytics",Xk);/**
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
 */function Qk(t){if(!t.startsWith(yh)){const e=qe.create("invalid-gtag-resource",{gtagURL:t});return je.warn(e.message),""}return t}function kv(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Yk(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Zk(t,e){const n=Yk("firebase-js-sdk-policy",{createScriptURL:Qk}),r=document.createElement("script"),i=`${yh}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function eC(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function tC(t,e,n,r,i,s){const a=r[i];try{if(a)await e[a];else{const c=(await kv(n)).find(f=>f.measurementId===i);c&&await e[c.appId]}}catch(u){je.error(u)}t("config",i,s)}async function nC(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const u=await kv(n);for(const c of a){const f=u.find(m=>m.measurementId===c),_=f&&e[f.appId];if(_)s.push(_);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){je.error(s)}}function rC(t,e,n,r){async function i(s,...a){try{if(s==="event"){const[u,c]=a;await nC(t,e,n,u,c)}else if(s==="config"){const[u,c]=a;await tC(t,e,n,r,u,c)}else if(s==="consent"){const[u,c]=a;t("consent",u,c)}else if(s==="get"){const[u,c,f]=a;t("get",u,c,f)}else if(s==="set"){const[u]=a;t("set",u)}else t(s,...a)}catch(u){je.error(u)}}return i}function iC(t,e,n,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=rC(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function sC(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(yh)&&n.src.includes(t))return n;return null}/**
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
 */const oC=30,aC=1e3;class lC{constructor(e={},n=aC){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Cv=new lC;function uC(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function cC(t){var a;const{appId:e,apiKey:n}=t,r={method:"GET",headers:uC(n)},i=Jk.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let u="";try{const c=await s.json();(a=c.error)!=null&&a.message&&(u=c.error.message)}catch{}throw qe.create("config-fetch-failed",{httpStatus:s.status,responseMessage:u})}return s.json()}async function hC(t,e=Cv,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw qe.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw qe.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new pC;return setTimeout(async()=>{u.abort()},qk),Pv({appId:r,apiKey:i,measurementId:s},a,u,e)}async function Pv(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Cv){var u;const{appId:s,measurementId:a}=t;try{await fC(r,e)}catch(c){if(a)return je.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:a};throw c}try{const c=await cC(t);return i.deleteThrottleMetadata(s),c}catch(c){const f=c;if(!dC(f)){if(i.deleteThrottleMetadata(s),a)return je.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:s,measurementId:a};throw c}const _=Number((u=f==null?void 0:f.customData)==null?void 0:u.httpStatus)===503?bd(n,i.intervalMillis,oC):bd(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+_,backoffCount:n+1};return i.setThrottleMetadata(s,m),je.debug(`Calling attemptFetch again in ${_} millis`),Pv(t,m,r,i)}}function fC(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(qe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function dC(t){if(!(t instanceof wt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class pC{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function mC(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,a={...r,send_to:s};t("event",n,a)}}async function gC(t,e,n,r){if(r&&r.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
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
 */async function yC(){if(Jc())try{await Xc()}catch(t){return je.warn(qe.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return je.warn(qe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function vC(t,e,n,r,i,s,a){const u=hC(t);u.then(v=>{n[v.measurementId]=v.appId,t.options.measurementId&&v.measurementId!==t.options.measurementId&&je.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>je.error(v)),e.push(u);const c=yC().then(v=>{if(v)return r.getId()}),[f,_]=await Promise.all([u,c]);sC(s)||Zk(s,f.measurementId),i("js",new Date);const m=(a==null?void 0:a.config)??{};return m[Kk]="firebase",m.update=!0,_!=null&&(m[Gk]=_),i("config",f.measurementId,m),f.measurementId}/**
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
 */class wC{constructor(e){this.app=e}_delete(){return delete Jr[this.app.options.appId],Promise.resolve()}}let Jr={},Np=[];const xp={};let Bl="dataLayer",_C="gtag",Op,vh,Dp=!1;function SC(){const t=[];if(qc()&&t.push("This is a browser extension environment."),my()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=qe.create("invalid-analytics-context",{errorInfo:e});je.warn(n.message)}}function EC(t,e,n){SC();const r=t.options.appId;if(!r)throw qe.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)je.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw qe.create("no-api-key");if(Jr[r]!=null)throw qe.create("already-exists",{id:r});if(!Dp){eC(Bl);const{wrappedGtag:s,gtagCore:a}=iC(Jr,Np,xp,Bl,_C);vh=s,Op=a,Dp=!0}return Jr[r]=vC(t,Np,xp,e,Op,Bl,n),new wC(t)}function IC(t=Yc()){t=_t(t);const e=wr(t,ha);return e.isInitialized()?e.getImmediate():TC(t)}function TC(t,e={}){const n=wr(t,ha);if(n.isInitialized()){const i=n.getImmediate();if(Dn(e,n.getOptions()))return i;throw qe.create("already-initialized")}return n.initialize({options:e})}async function kC(){if(qc()||!my()||!Jc())return!1;try{return await Xc()}catch{return!1}}function CC(t,e,n){t=_t(t),gC(vh,Jr[t.app.options.appId],e,n).catch(r=>je.error(r))}function PC(t,e,n,r){t=_t(t),mC(vh,Jr[t.app.options.appId],e,n,r).catch(i=>je.error(i))}const Lp="@firebase/analytics",Mp="0.10.19";function AC(){Lt(new vt(ha,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return EC(r,i,n)},"PUBLIC")),Lt(new vt("analytics-internal",t,"PRIVATE")),it(Lp,Mp),it(Lp,Mp,"esm2020");function t(e){try{const n=e.getProvider(ha).getImmediate();return{logEvent:(r,i,s)=>PC(n,r,i,s),setUserProperties:(r,i)=>CC(n,r,i)}}catch(n){throw qe.create("interop-component-reg-failed",{reason:n})}}}AC();const RC={apiKey:"AIzaSyDpn44ddZKUSb0yETvfOvZ-77aDj1zrCBA",authDomain:"text-speeder-v15-1-34174.firebaseapp.com",projectId:"text-speeder-v15-1-34174",storageBucket:"text-speeder-v15-1-34174.firebasestorage.app",messagingSenderId:"989685433998",appId:"1:989685433998:web:6e7a4b3f7f1ebb861c6bdf",measurementId:"G-G0P7748WHF"},wh=wy(RC),jp=PT(wh);nk(wh);kC().then(t=>{t&&IC(wh)});const NC=j.createContext();function xC({children:t}){const[e,n]=j.useState(null),[r,i]=j.useState(!0);j.useEffect(()=>mI(jp,u=>{n(u),i(!1)}),[]);const s=()=>gI(jp);return A.jsx(NC.Provider,{value:{currentUser:e,loading:r,logout:s},children:t})}$l.createRoot(document.getElementById("root")).render(A.jsx(Kp.StrictMode,{children:A.jsx(O1,{children:A.jsx(xC,{children:A.jsx(W1,{})})})}));
