import{g as S,w as h,r as L}from"./index.BuEqVMVQ.js";const d={};function w(e){return e==="local"?localStorage:sessionStorage}function u(e,n,a){const r=JSON,l="local";function f(s,i){w(l).setItem(s,r.stringify(i))}if(!d[e]){const s=h(n,t=>{const o=w(l).getItem(e);o&&t(r.parse(o));{const m=c=>{c.key===e&&t(c.newValue?r.parse(c.newValue):null)};return window.addEventListener("storage",m),()=>window.removeEventListener("storage",m)}}),{subscribe:i,set:g}=s;d[e]={set(t){f(e,t),g(t)},update(t){const o=t(S(s));f(e,o),g(o)},subscribe:i}}return d[e]}u("modeOsPrefers",!1);u("modeUserPrefers",void 0);u("modeCurrent",!1);const p="(prefers-reduced-motion: reduce)";function M(){return window.matchMedia(p).matches}L(M(),e=>{{const n=r=>{e(r.matches)},a=window.matchMedia(p);return a.addEventListener("change",n),()=>{a.removeEventListener("change",n)}}});
