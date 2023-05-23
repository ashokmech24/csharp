"use strict";(self.webpackChunkport=self.webpackChunkport||[]).push([[189],{189:(ee,R,g)=>{g.r(R),g.d(R,{startInputShims:()=>E});var y=g(5861),C=g(2055),h=g(3577),m=g(3457),D=(()=>{return(e=D||(D={})).Body="body",e.Ionic="ionic",e.Native="native",e.None="none",D;var e})();const W={getEngine(){var e;return(null===(e=null==m.w?void 0:m.w.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Keyboard"))&&(null==m.w?void 0:m.w.Capacitor.Plugins.Keyboard)},getResizeMode(){const e=this.getEngine();return e&&e.getResizeMode?e.getResizeMode():Promise.resolve(void 0)}},I=new WeakMap,P=(e,t,n,o=0,r=!1)=>{I.has(e)!==n&&(n?Z(e,t,o,r):G(e,t))},Z=(e,t,n,o=!1)=>{const r=t.parentNode,s=t.cloneNode(!1);s.classList.add("cloned-input"),s.tabIndex=-1,o&&(s.disabled=!0),r.appendChild(s),I.set(e,s);const d="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${d}px,${n}px,0) scale(0)`},G=(e,t)=>{const n=I.get(e);n&&(I.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},p="input, textarea, [no-blur], [contenteditable]",U="$ionPaddingTimer",T=(e,t,n)=>{const o=e[U];o&&clearTimeout(o),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[U]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),n&&n()},120)},j=(e,t,n)=>{e.addEventListener("focusout",()=>{t&&T(t,0,n)},{once:!0})};let b=0;const B="data-ionic-skip-scroll-assist",Q=(e,t,n,o,r,s,a,d=!1)=>{const i=s&&(void 0===a||a.mode===D.None),S=function(){var u=(0,y.Z)(function*(){t.hasAttribute(B)?t.removeAttribute(B):X(e,t,n,o,r,i,d)});return function(){return u.apply(this,arguments)}}();return e.addEventListener("focusin",S,!0),()=>{e.removeEventListener("focusin",S,!0)}},x=e=>{document.activeElement!==e&&(e.setAttribute(B,"true"),e.focus())},X=function(){var e=(0,y.Z)(function*(t,n,o,r,s,a,d=!1){if(!o&&!r)return;const i=((e,t,n)=>{var o;return((e,t,n,o)=>{const r=e.top,s=e.bottom,a=t.top,i=a+15,u=Math.min(t.bottom,o-n)-50-s,_=i-r,l=Math.round(u<0?-u:_>0?-_:0),v=Math.min(l,r-a),M=Math.abs(v)/.3;return{scrollAmount:v,scrollDuration:Math.min(400,Math.max(150,M)),scrollPadding:n,inputSafeY:4-(r-i)}})((null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e).getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)})(t,o||r,s);if(o&&Math.abs(i.scrollAmount)<4)return x(n),void(a&&null!==o&&(T(o,b),j(n,o,()=>b=0)));if(P(t,n,!0,i.inputSafeY,d),x(n),(0,h.r)(()=>t.click()),a&&o&&(b=i.scrollPadding,T(o,b)),typeof window<"u"){let S;const u=function(){var l=(0,y.Z)(function*(){void 0!==S&&clearTimeout(S),window.removeEventListener("ionKeyboardDidShow",_),window.removeEventListener("ionKeyboardDidShow",u),o&&(yield(0,C.c)(o,0,i.scrollAmount,i.scrollDuration)),P(t,n,!1,i.inputSafeY),x(n),a&&j(n,o,()=>b=0)});return function(){return l.apply(this,arguments)}}(),_=()=>{window.removeEventListener("ionKeyboardDidShow",_),window.addEventListener("ionKeyboardDidShow",u)};if(o){const l=yield(0,C.g)(o);if(i.scrollAmount>l.scrollHeight-l.clientHeight-l.scrollTop)return"password"===n.type?(i.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",_)):window.addEventListener("ionKeyboardDidShow",u),void(S=setTimeout(u,1e3))}u()}});return function(n,o,r,s,a,d){return e.apply(this,arguments)}}(),E=function(){var e=(0,y.Z)(function*(t,n){const o=document,r="ios"===n,s="android"===n,a=t.getNumber("keyboardHeight",290),d=t.getBoolean("scrollAssist",!0),i=t.getBoolean("hideCaretOnScroll",r),S=t.getBoolean("inputBlurring",r),u=t.getBoolean("scrollPadding",!0),_=Array.from(o.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,v=new WeakMap,F=yield W.getResizeMode(),M=function(){var f=(0,y.Z)(function*(c){yield new Promise(A=>(0,h.c)(c,A));const K=c.shadowRoot||c,L=K.querySelector("input")||K.querySelector("textarea"),w=(0,C.f)(c),H=w?null:c.closest("ion-footer");if(L){if(w&&i&&!l.has(c)){const A=((e,t,n)=>{if(!n||!t)return()=>{};const o=d=>{(e=>e===e.getRootNode().activeElement)(t)&&P(e,t,d)},r=()=>P(e,t,!1),s=()=>o(!0),a=()=>o(!1);return(0,h.a)(n,"ionScrollStart",s),(0,h.a)(n,"ionScrollEnd",a),t.addEventListener("blur",r),()=>{(0,h.b)(n,"ionScrollStart",s),(0,h.b)(n,"ionScrollEnd",a),t.removeEventListener("blur",r)}})(c,L,w);l.set(c,A)}if("date"!==L.type&&"datetime-local"!==L.type&&(w||H)&&d&&!v.has(c)){const A=Q(c,L,w,H,a,u,F,s);v.set(c,A)}}});return function(K){return f.apply(this,arguments)}}();S&&(()=>{let e=!0,t=!1;const n=document;(0,h.a)(n,"ionScrollStart",()=>{t=!0}),n.addEventListener("focusin",()=>{e=!0},!0),n.addEventListener("touchend",a=>{if(t)return void(t=!1);const d=n.activeElement;if(!d||d.matches(p))return;const i=a.target;i!==d&&(i.matches(p)||i.closest(p)||(e=!1,setTimeout(()=>{e||d.blur()},50)))},!1)})();for(const f of _)M(f);o.addEventListener("ionInputDidLoad",f=>{M(f.detail)}),o.addEventListener("ionInputDidUnload",f=>{(f=>{if(i){const c=l.get(f);c&&c(),l.delete(f)}if(d){const c=v.get(f);c&&c(),v.delete(f)}})(f.detail)})});return function(n,o){return e.apply(this,arguments)}}()}}]);