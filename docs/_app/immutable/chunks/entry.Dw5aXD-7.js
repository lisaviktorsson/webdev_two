var Ze=e=>{throw TypeError(e)};var Ft=(e,t,n)=>t.has(e)||Ze("Cannot "+n);var b=(e,t,n)=>(Ft(e,t,"read from private field"),n?n.call(e):t.get(e)),P=(e,t,n)=>t.has(e)?Ze("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n);import{aZ as O,T as C,Q as N,aY as Ne}from"./runtime.D7Wnj0fX.js";import{w as Ve}from"./index.BuEqVMVQ.js";import{a as Vt,b as x}from"./paths.D7mHAxGO.js";import{H as ve,S as Be,R as dt}from"./control.CYgJF_JY.js";import{o as Qe}from"./index-client.BXWsId-j.js";new URL("sveltekit-internal://");function Bt(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function Gt(e){return e.split("%25").map(decodeURI).join("%25")}function Mt(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function Te({href:e}){return e.split("#")[0]}function qt(e,t,n,a=!1){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(i,s){if(s==="get"||s==="getAll"||s==="has")return f=>(n(f),i[s](f));t();const c=Reflect.get(i,s);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const o=["href","pathname","search","toString","toJSON"];a&&o.push("hash");for(const i of o)Object.defineProperty(r,i,{get(){return t(),e[i]},enumerable:!0,configurable:!0});return r}const Ht="/__data.json",Kt=".html__data.json";function Yt(e){return e.endsWith(".html")?e.replace(/\.html$/,Kt):e.replace(/\/$/,"")+Ht}function Wt(...e){let t=5381;for(const n of e)if(typeof n=="string"){let a=n.length;for(;a;)t=t*33^n.charCodeAt(--a)}else if(ArrayBuffer.isView(n)){const a=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let r=a.length;for(;r;)t=t*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function Jt(e){const t=atob(e),n=new Uint8Array(t.length);for(let a=0;a<t.length;a++)n[a]=t.charCodeAt(a);return n.buffer}const ht=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:(t==null?void 0:t.method)||"GET")!=="GET"&&W.delete(Ge(e)),ht(e,t));const W=new Map;function zt(e,t){const n=Ge(e,t),a=document.querySelector(n);if(a!=null&&a.textContent){let{body:r,...o}=JSON.parse(a.textContent);const i=a.getAttribute("data-ttl");return i&&W.set(n,{body:r,init:o,ttl:1e3*Number(i)}),a.getAttribute("data-b64")!==null&&(r=Jt(r)),Promise.resolve(new Response(r,o))}return window.fetch(e,t)}function Xt(e,t,n){if(W.size>0){const a=Ge(e,n),r=W.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(r.body,r.init);W.delete(a)}}return window.fetch(t,n)}function Ge(e,t){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t!=null&&t.headers||t!=null&&t.body){const r=[];t.headers&&r.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&r.push(t.body),a+=`[data-hash="${Wt(...r)}"]`}return a}const Zt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Qt(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${tn(e).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return t.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(o)return t.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const i=a.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return Pe(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Pe(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const d=Zt.exec(c),[,h,y,u,g]=d;return t.push({name:u,matcher:g,optional:!!h,rest:!!y,chained:y?f===1&&i[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return Pe(c)}).join("")}).join("")}/?$`),params:t}}function en(e){return!/^\([^)]+\)$/.test(e)}function tn(e){return e.slice(1).split("/").filter(en)}function nn(e,t,n){const a={},r=e.slice(1),o=r.filter(s=>s!==void 0);let i=0;for(let s=0;s<t.length;s+=1){const c=t[s];let f=r[s-i];if(c.chained&&c.rest&&i&&(f=r.slice(s-i,s+1).filter(d=>d).join("/"),i=0),f===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||n[c.matcher](f)){a[c.name]=f;const d=t[s+1],h=r[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(a).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return a}function Pe(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function rn({nodes:e,server_loads:t,dictionary:n,matchers:a}){const r=new Set(t);return Object.entries(n).map(([s,[c,f,d]])=>{const{pattern:h,params:y}=Qt(s),u={id:s,exec:g=>{const l=h.exec(g);if(l)return nn(l,y,a)},errors:[1,...d||[]].map(g=>e[g]),layouts:[0,...f||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[r.has(s),e[s]]}}function pt(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function et(e,t,n=JSON.stringify){const a=n(t);try{sessionStorage[e]=a}catch{}}const an="1736803464336",gt="sveltekit:snapshot",mt="sveltekit:scroll",yt="sveltekit:states",on="sveltekit:pageurl",B="sveltekit:history",X="sveltekit:navigation",he={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},de=location.origin;function wt(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function Me(){return{x:pageXOffset,y:pageYOffset}}function V(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const tt={...he,"":he.hover};function _t(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function vt(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=_t(e)}}function je(e,t,n){let a;try{a=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,o=!a||!!r||be(a,t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(a==null?void 0:a.origin)===de&&e.hasAttribute("download");return{url:a,external:o,target:r,download:i}}function pe(e){let t=null,n=null,a=null,r=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)a===null&&(a=V(s,"preload-code")),r===null&&(r=V(s,"preload-data")),t===null&&(t=V(s,"keepfocus")),n===null&&(n=V(s,"noscroll")),o===null&&(o=V(s,"reload")),i===null&&(i=V(s,"replacestate")),s=_t(s);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:tt[a??"off"],preload_data:tt[r??"off"],keepfocus:c(t),noscroll:c(n),reload:c(o),replace_state:c(i)}}function nt(e){const t=Ve(e);let n=!0;function a(){n=!0,t.update(i=>i)}function r(i){n=!1,t.set(i)}function o(i){let s;return t.subscribe(c=>{(s===void 0||n&&c!==s)&&i(s=c)})}return{notify:a,set:r,subscribe:o}}const bt={v:()=>{}};function sn(){const{set:e,subscribe:t}=Ve(!1);let n;async function a(){clearTimeout(n);try{const r=await fetch(`${Vt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const i=(await r.json()).version!==an;return i&&(e(!0),bt.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:a}}function be(e,t,n){return e.origin!==de||!e.pathname.startsWith(t)?!0:n?!(e.pathname===t+"/"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===t):!1}function rt(e){const t=ln(e),n=new ArrayBuffer(t.length),a=new DataView(n);for(let r=0;r<n.byteLength;r++)a.setUint8(r,t.charCodeAt(r));return n}const cn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function ln(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,a=0;for(let r=0;r<e.length;r++)n<<=6,n|=cn.indexOf(e[r]),a+=6,a===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=a=0);return a===12?(n>>=4,t+=String.fromCharCode(n)):a===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const fn=-1,un=-2,dn=-3,hn=-4,pn=-5,gn=-6;function Dn(e,t){return At(JSON.parse(e),t)}function At(e,t){if(typeof e=="number")return r(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,a=Array(n.length);function r(o,i=!1){if(o===fn)return;if(o===dn)return NaN;if(o===hn)return 1/0;if(o===pn)return-1/0;if(o===gn)return-0;if(i)throw new Error("Invalid input");if(o in a)return a[o];const s=n[o];if(!s||typeof s!="object")a[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],f=t==null?void 0:t[c];if(f)return a[o]=f(r(s[1]));switch(c){case"Date":a[o]=new Date(s[1]);break;case"Set":const d=new Set;a[o]=d;for(let u=1;u<s.length;u+=1)d.add(r(s[u]));break;case"Map":const h=new Map;a[o]=h;for(let u=1;u<s.length;u+=2)h.set(r(s[u]),r(s[u+1]));break;case"RegExp":a[o]=new RegExp(s[1],s[2]);break;case"Object":a[o]=Object(s[1]);break;case"BigInt":a[o]=BigInt(s[1]);break;case"null":const y=Object.create(null);a[o]=y;for(let u=1;u<s.length;u+=2)y[s[u]]=r(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=s[1],l=rt(g),p=new u(l);a[o]=p;break}case"ArrayBuffer":{const u=s[1],g=rt(u);a[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);a[o]=c;for(let f=0;f<s.length;f+=1){const d=s[f];d!==un&&(c[f]=r(d))}}else{const c={};a[o]=c;for(const f in s){const d=s[f];c[f]=r(d)}}return a[o]}return r(0)}const St=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...St];const mn=new Set([...St]);[...mn];function yn(e){return e.filter(t=>t!=null)}const wn="x-sveltekit-invalidated",_n="x-sveltekit-trailing-slash";function ge(e){return e instanceof ve||e instanceof Be?e.status:500}function vn(e){return e instanceof Be?e.text:"Internal Error"}let E,Z,xe;const bn=Qe.toString().includes("$$")||/function \w+\(\) \{\}/.test(Qe.toString());var ne,re,ae,oe,se,ie,ce,le,lt,fe,ft,ue,ut;bn?(E={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},Z={current:null},xe={current:!1}):(E=new(lt=class{constructor(){P(this,ne,O({}));P(this,re,O(null));P(this,ae,O(null));P(this,oe,O({}));P(this,se,O({id:null}));P(this,ie,O({}));P(this,ce,O(-1));P(this,le,O(new URL("https://example.com")))}get data(){return C(b(this,ne))}set data(t){N(b(this,ne),t)}get form(){return C(b(this,re))}set form(t){N(b(this,re),t)}get error(){return C(b(this,ae))}set error(t){N(b(this,ae),t)}get params(){return C(b(this,oe))}set params(t){N(b(this,oe),t)}get route(){return C(b(this,se))}set route(t){N(b(this,se),t)}get state(){return C(b(this,ie))}set state(t){N(b(this,ie),t)}get status(){return C(b(this,ce))}set status(t){N(b(this,ce),t)}get url(){return C(b(this,le))}set url(t){N(b(this,le),t)}},ne=new WeakMap,re=new WeakMap,ae=new WeakMap,oe=new WeakMap,se=new WeakMap,ie=new WeakMap,ce=new WeakMap,le=new WeakMap,lt),Z=new(ft=class{constructor(){P(this,fe,O(null))}get current(){return C(b(this,fe))}set current(t){N(b(this,fe),t)}},fe=new WeakMap,ft),xe=new(ut=class{constructor(){P(this,ue,O(!1))}get current(){return C(b(this,ue))}set current(t){N(b(this,ue),t)}},ue=new WeakMap,ut),bt.v=()=>xe.current=!0);function qe(e){Object.assign(E,e)}const An=new Set(["icon","shortcut icon","apple-touch-icon"]),F=pt(mt)??{},Q=pt(gt)??{},$={url:nt({}),page:nt({}),navigating:Ve(null),updated:sn()};function He(e){F[e]=Me()}function Sn(e,t){let n=e+1;for(;F[n];)delete F[n],n+=1;for(n=t+1;Q[n];)delete Q[n],n+=1}function q(e){return location.href=e.href,new Promise(()=>{})}async function kt(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(x||"/");e&&await e.update()}}function at(){}let Ae,$e,me,j,De,S;const Et=[],ye=[];let L=null;const Rt=new Set,kn=new Set,J=new Set;let w={branch:[],error:null,url:null},Ke=!1,we=!1,ot=!0,ee=!1,K=!1,It=!1,Se=!1,G,U,T,H;const z=new Set;let Oe;async function Gn(e,t,n){var r,o,i,s;document.URL!==location.href&&(location.href=location.href),S=e,await((o=(r=e.hooks).init)==null?void 0:o.call(r)),Ae=rn(e),j=document.documentElement,De=t,$e=e.nodes[0],me=e.nodes[1],$e(),me(),U=(i=history.state)==null?void 0:i[B],T=(s=history.state)==null?void 0:s[X],U||(U=T=Date.now(),history.replaceState({...history.state,[B]:U,[X]:T},""));const a=F[U];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),n?await Pn(De,n):Ln(location.href,{replaceState:!0}),Tn()}async function En(){if(await(Oe||(Oe=Promise.resolve())),!Oe)return;Oe=null;const e=Re(w.url,!0);L=null;const t=H={},n=e&&await Je(e);if(!(!n||t!==H)){if(n.type==="redirect")return ke(new URL(n.location,w.url).href,{},1,t);n.props.page&&Object.assign(E,n.props.page),w=n.state,Ut(),G.$set(n.props),qe(n.props.page)}}function Ut(){Et.length=0,Se=!1}function Lt(e){ye.some(t=>t==null?void 0:t.snapshot)&&(Q[e]=ye.map(t=>{var n;return(n=t==null?void 0:t.snapshot)==null?void 0:n.capture()}))}function Tt(e){var t;(t=Q[e])==null||t.forEach((n,a)=>{var r,o;(o=(r=ye[a])==null?void 0:r.snapshot)==null||o.restore(n)})}function st(){He(U),et(mt,F),Lt(T),et(gt,Q)}async function ke(e,t,n,a){return Y({type:"goto",url:wt(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:a,accept:()=>{t.invalidateAll&&(Se=!0)}})}async function Rn(e){if(e.id!==(L==null?void 0:L.id)){const t={};z.add(t),L={id:e.id,token:t,promise:Je({...e,preload:t}).then(n=>(z.delete(t),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function Ce(e){const t=Ae.find(n=>n.exec(Ot(e)));t&&await Promise.all([...t.layouts,t.leaf].map(n=>n==null?void 0:n[1]()))}function Pt(e,t,n){var o;w=e.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),Object.assign(E,e.props.page),G=new S.root({target:t,props:{...e.props,stores:$,components:ye},hydrate:n,sync:!1}),Tt(T);const r={from:null,to:{params:w.params,route:{id:((o=w.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};J.forEach(i=>i(r)),we=!0}function te({url:e,params:t,branch:n,status:a,error:r,route:o,form:i}){let s="never";if(x&&(e.pathname===x||e.pathname===x+"/"))s="always";else for(const u of n)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);e.pathname=Bt(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:r,route:o},props:{constructors:yn(n).map(u=>u.node.component),page:Ie(E)}};i!==void 0&&(c.props.form=i);let f={},d=!E,h=0;for(let u=0;u<Math.max(n.length,w.branch.length);u+=1){const g=n[u],l=w.branch[u];(g==null?void 0:g.data)!==(l==null?void 0:l.data)&&(d=!0),g&&(f={...f,...g.data},d&&(c.props[`data_${h}`]=f),h+=1)}return(!w.url||e.href!==w.url.href||w.error!==r||i!==void 0&&i!==E.form||d)&&(c.props.page={error:r,params:t,route:{id:(o==null?void 0:o.id)??null},state:{},status:a,url:new URL(e),form:i??null,data:d?f:E.data}),c}async function Ye({loader:e,parent:t,url:n,params:a,route:r,server_data_node:o}){var d,h,y;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if((d=f.universal)!=null&&d.load){let u=function(...l){for(const p of l){const{href:A}=new URL(p,n);c.dependencies.add(A)}};const g={route:new Proxy(r,{get:(l,p)=>(s&&(c.route=!0),l[p])}),params:new Proxy(a,{get:(l,p)=>(s&&c.params.add(p),l[p])}),data:(o==null?void 0:o.data)??null,url:qt(n,()=>{s&&(c.url=!0)},l=>{s&&c.search_params.add(l)},S.hash),async fetch(l,p){let A;l instanceof Request?(A=l.url,p={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:[...l.headers].length?l.headers:void 0,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...p}):A=l;const R=new URL(A,n);return s&&u(R.href),R.origin===n.origin&&(A=R.href.slice(n.origin.length)),we?Xt(A,R.href,p):zt(A,p)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),t()},untrack(l){s=!1;try{return l()}finally{s=!0}}};i=await f.universal.load.call(null,g)??null}return{node:f,loader:e,server:o,universal:(h=f.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((y=f.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function it(e,t,n,a,r,o){if(Se)return!0;if(!r)return!1;if(r.parent&&e||r.route&&t||r.url&&n)return!0;for(const i of r.search_params)if(a.has(i))return!0;for(const i of r.params)if(o[i]!==w.params[i])return!0;for(const i of r.dependencies)if(Et.some(s=>s(new URL(i))))return!0;return!1}function We(e,t){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?t??null:null}function In(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const a of n){const r=e.searchParams.getAll(a),o=t.searchParams.getAll(a);r.every(i=>o.includes(i))&&o.every(i=>r.includes(i))&&n.delete(a)}return n}function ct({error:e,url:t,route:n,params:a}){return{type:"loaded",state:{error:e,url:t,route:n,params:a,branch:[]},props:{page:Ie(E),constructors:[]}}}async function Je({id:e,invalidating:t,url:n,params:a,route:r,preload:o}){if((L==null?void 0:L.id)===e)return z.delete(L.token),L.promise;const{errors:i,layouts:s,leaf:c}=r,f=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),f.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let d=null;const h=w.url?e!==_e(w.url):!1,y=w.route?r.id!==w.route.id:!1,u=In(w.url,n);let g=!1;const l=f.map((m,_)=>{var D;const k=w.branch[_],I=!!(m!=null&&m[0])&&((k==null?void 0:k.loader)!==m[1]||it(g,y,h,u,(D=k.server)==null?void 0:D.uses,a));return I&&(g=!0),I});if(l.some(Boolean)){try{d=await jt(n,l)}catch(m){const _=await M(m,{url:n,params:a,route:{id:e}});return z.has(o)?ct({error:_,url:n,params:a,route:r}):Ee({status:ge(m),error:_,url:n,route:r})}if(d.type==="redirect")return d}const p=d==null?void 0:d.nodes;let A=!1;const R=f.map(async(m,_)=>{var Ue;if(!m)return;const k=w.branch[_],I=p==null?void 0:p[_];if((!I||I.type==="skip")&&m[1]===(k==null?void 0:k.loader)&&!it(A,y,h,u,(Ue=k.universal)==null?void 0:Ue.uses,a))return k;if(A=!0,(I==null?void 0:I.type)==="error")throw I;return Ye({loader:m[1],url:n,params:a,route:r,parent:async()=>{var Xe;const ze={};for(let Le=0;Le<_;Le+=1)Object.assign(ze,(Xe=await R[Le])==null?void 0:Xe.data);return ze},server_data_node:We(I===void 0&&m[0]?{type:"skip"}:I??null,m[0]?k==null?void 0:k.server:void 0)})});for(const m of R)m.catch(()=>{});const v=[];for(let m=0;m<f.length;m+=1)if(f[m])try{v.push(await R[m])}catch(_){if(_ instanceof dt)return{type:"redirect",location:_.location};if(z.has(o))return ct({error:await M(_,{params:a,url:n,route:{id:r.id}}),url:n,params:a,route:r});let k=ge(_),I;if(p!=null&&p.includes(_))k=_.status??k,I=_.error;else if(_ instanceof ve)I=_.body;else{if(await $.updated.check())return await kt(),await q(n);I=await M(_,{params:a,url:n,route:{id:r.id}})}const D=await xt(m,v,i);return D?te({url:n,params:a,branch:v.slice(0,D.idx).concat(D.node),status:k,error:I,route:r}):await Nt(n,{id:r.id},I,k)}else v.push(void 0);return te({url:n,params:a,branch:v,status:200,error:null,route:r,form:t?void 0:null})}async function xt(e,t,n){for(;e--;)if(n[e]){let a=e;for(;!t[a];)a-=1;try{return{idx:a+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function Ee({status:e,error:t,url:n,route:a}){const r={};let o=null;if(S.server_loads[0]===0)try{const f=await jt(n,[!0]);if(f.type!=="data"||f.nodes[0]&&f.nodes[0].type!=="data")throw 0;o=f.nodes[0]??null}catch{(n.origin!==de||n.pathname!==location.pathname||Ke)&&await q(n)}const s=await Ye({loader:$e,url:n,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:We(o)}),c={node:await me(),loader:me,universal:null,server:null,data:null};return te({url:n,params:r,branch:[s,c],status:e,error:t,route:null})}function Re(e,t){if(!e||be(e,x,S.hash))return;let n;try{if(n=S.hooks.reroute({url:new URL(e)})??e,typeof n=="string"){const r=new URL(e);S.hash?r.hash=n:r.pathname=n,n=r}}catch{return}const a=Ot(n);for(const r of Ae){const o=r.exec(a);if(o)return{id:_e(e),invalidating:t,route:r,params:Mt(o),url:e}}}function Ot(e){return Gt(S.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(x.length))||"/"}function _e(e){return(S.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function Ct({url:e,type:t,intent:n,delta:a}){let r=!1;const o=Dt(w,n,e,t);a!==void 0&&(o.navigation.delta=a);const i={...o.navigation,cancel:()=>{r=!0,o.reject(new Error("navigation cancelled"))}};return ee||Rt.forEach(s=>s(i)),r?null:o}async function Y({type:e,url:t,popped:n,keepfocus:a,noscroll:r,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:f=at,block:d=at}){const h=Re(t,!1),y=Ct({url:t,type:e,delta:n==null?void 0:n.delta,intent:h});if(!y){d();return}const u=U,g=T;f(),ee=!0,we&&$.navigating.set(Z.current=y.navigation),H=c;let l=h&&await Je(h);if(!l){if(be(t,x,S.hash))return await q(t);l=await Nt(t,{id:null},await M(new Be(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(h==null?void 0:h.url)||t,H!==c)return y.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(s>=20)l=await Ee({status:500,error:await M(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return ke(new URL(l.location,t).href,{},s+1,c),!1;else l.props.page.status>=400&&await $.updated.check()&&(await kt(),await q(t));if(Ut(),He(u),Lt(g),l.props.page.url.pathname!==t.pathname&&(t.pathname=l.props.page.url.pathname),i=n?n.state:i,!n){const v=o?0:1,m={[B]:U+=v,[X]:T+=v,[yt]:i};(o?history.replaceState:history.pushState).call(history,m,"",t),o||Sn(U,T)}if(L=null,l.props.page.state=i,we){w=l.state,l.props.page&&(l.props.page.url=t);const v=(await Promise.all(Array.from(kn,m=>m(y.navigation)))).filter(m=>typeof m=="function");if(v.length>0){let m=function(){v.forEach(_=>{J.delete(_)})};v.push(m),v.forEach(_=>{J.add(_)})}G.$set(l.props),qe(l.props.page),It=!0}else Pt(l,De,!1);const{activeElement:p}=document;await Ne();const A=n?n.scroll:r?Me():null;if(ot){const v=t.hash&&document.getElementById(decodeURIComponent(S.hash?t.hash.split("#")[2]??"":t.hash.slice(1)));A?scrollTo(A.x,A.y):v?v.scrollIntoView():scrollTo(0,0)}const R=document.activeElement!==p&&document.activeElement!==document.body;!a&&!R&&Fe(),ot=!0,l.props.page&&Object.assign(E,l.props.page),ee=!1,e==="popstate"&&Tt(T),y.fulfil(void 0),J.forEach(v=>v(y.navigation)),$.navigating.set(Z.current=null)}async function Nt(e,t,n,a){return e.origin===de&&e.pathname===location.pathname&&!Ke?await Ee({status:a,error:n,url:e,route:t}):await q(e)}function Un(){let e;j.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{a(i,2)},20)});function t(o){o.defaultPrevented||a(o.composedPath()[0],1)}j.addEventListener("mousedown",t),j.addEventListener("touchstart",t,{passive:!0});const n=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(Ce(new URL(i.target.href)),n.unobserve(i.target))},{threshold:0});function a(o,i){const s=vt(o,j);if(!s)return;const{url:c,external:f,download:d}=je(s,x,S.hash);if(f||d)return;const h=pe(s),y=c&&_e(w.url)===_e(c);if(!h.reload&&!y)if(i<=h.preload_data){const u=Re(c,!1);u&&Rn(u)}else i<=h.preload_code&&Ce(c)}function r(){n.disconnect();for(const o of j.querySelectorAll("a")){const{url:i,external:s,download:c}=je(o,x,S.hash);if(s||c)continue;const f=pe(o);f.reload||(f.preload_code===he.viewport&&n.observe(o),f.preload_code===he.eager&&Ce(i))}}J.add(r),r()}function M(e,t){if(e instanceof ve)return e.body;const n=ge(e),a=vn(e);return S.hooks.handleError({error:e,event:t,status:n,message:a})??{message:a}}function Ln(e,t={}){return e=new URL(wt(e)),e.origin!==de?Promise.reject(new Error("goto: invalid URL")):ke(e,t,0)}function Mn(){return Se=!0,En()}async function qn(e){if(e.type==="error"){const t=new URL(location.href),{branch:n,route:a}=w;if(!a)return;const r=await xt(w.branch.length,n,a.errors);if(r){const o=te({url:t,params:w.params,branch:n.slice(0,r.idx).concat(r.node),status:e.status??500,error:e.error,route:a});w=o.state,G.$set(o.props),qe(o.props.page),Ne().then(Fe)}}else e.type==="redirect"?ke(e.location,{invalidateAll:!0},0):(E.form=e.data,E.status=e.status,G.$set({form:null,page:Ie(E)}),await Ne(),G.$set({form:e.data}),e.type==="success"&&Fe())}function Tn(){var t;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let a=!1;if(st(),!ee){const r=Dt(w,void 0,null,"leave"),o={...r.navigation,cancel:()=>{a=!0,r.reject(new Error("navigation cancelled"))}};Rt.forEach(i=>i(o))}a?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&st()}),(t=navigator.connection)!=null&&t.saveData||Un(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const a=vt(n.composedPath()[0],j);if(!a)return;const{url:r,external:o,target:i,download:s}=je(a,x,S.hash);if(!r)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=pe(a);if(!(a instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||s)return;const[d,h]=(S.hash?r.hash.replace(/^#/,""):r.href).split("#"),y=d===Te(location);if(o||c.reload&&(!y||!h)){Ct({url:r,type:"link"})?ee=!0:n.preventDefault();return}if(h!==void 0&&y){const[,u]=w.url.href.split("#");if(u===h){if(n.preventDefault(),h===""||h==="top"&&a.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const g=a.ownerDocument.getElementById(decodeURIComponent(h));g&&(g.scrollIntoView(),g.focus())}return}if(K=!0,He(U),e(r),!c.replace_state)return;K=!1}n.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),Y({type:"link",url:r,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??r.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(n.target),r=n.submitter;if(((r==null?void 0:r.formTarget)||a.target)==="_blank"||((r==null?void 0:r.formMethod)||a.method)!=="get")return;const s=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||a.action);if(be(s,x,!1))return;const c=n.target,f=pe(c);if(f.reload)return;n.preventDefault(),n.stopPropagation();const d=new FormData(c),h=r==null?void 0:r.getAttribute("name");h&&d.append(h,(r==null?void 0:r.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),Y({type:"form",url:s,keepfocus:f.keepfocus,noscroll:f.noscroll,replace_state:f.replace_state??s.href===location.href})}),addEventListener("popstate",async n=>{var a;if((a=n.state)!=null&&a[B]){const r=n.state[B];if(H={},r===U)return;const o=F[r],i=n.state[yt]??{},s=new URL(n.state[on]??location.href),c=n.state[X],f=Te(location)===Te(w.url);if(c===T&&(It||f)){i!==E.state&&(E.state=i),e(s),F[U]=Me(),o&&scrollTo(o.x,o.y),U=r;return}const h=r-U;await Y({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{U=r,T=c},block:()=>{history.go(-h)},nav_token:H})}else if(!K){const r=new URL(location.href);e(r)}}),addEventListener("hashchange",()=>{K?(K=!1,history.replaceState({...history.state,[B]:++U,[X]:T},"",location.href)):S.hash&&w.url.hash===location.hash&&Y({type:"goto",url:w.url})});for(const n of document.querySelectorAll("link"))An.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&$.navigating.set(Z.current=null)});function e(n){w.url=E.url=n,$.page.set(Ie(E)),$.page.notify()}}async function Pn(e,{status:t=200,error:n,node_ids:a,params:r,route:o,data:i,form:s}){Ke=!0;const c=new URL(location.href);({params:r={},route:o={id:null}}=Re(c,!1)||{});let f,d=!0;try{const h=a.map(async(g,l)=>{const p=i[l];return p!=null&&p.uses&&(p.uses=$t(p.uses)),Ye({loader:S.nodes[g],url:c,params:r,route:o,parent:async()=>{const A={};for(let R=0;R<l;R+=1)Object.assign(A,(await h[R]).data);return A},server_data_node:We(p)})}),y=await Promise.all(h),u=Ae.find(({id:g})=>g===o.id);if(u){const g=u.layouts;for(let l=0;l<g.length;l++)g[l]||y.splice(l,0,void 0)}f=te({url:c,params:r,branch:y,status:t,error:n,form:s,route:u??null})}catch(h){if(h instanceof dt){await q(new URL(h.location,location.href));return}f=await Ee({status:ge(h),error:await M(h,{url:c,params:r,route:o}),url:c,route:o}),e.textContent="",d=!1}f.props.page&&(f.props.page.state={}),Pt(f,e,d)}async function jt(e,t){var r;const n=new URL(e);n.pathname=Yt(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(_n,"1"),n.searchParams.append(wn,t.map(o=>o?"1":"0").join(""));const a=await ht(n.href);if(!a.ok){let o;throw(r=a.headers.get("content-type"))!=null&&r.includes("application/json")?o=await a.json():a.status===404?o="Not Found":a.status===500&&(o="Internal Error"),new ve(a.status,o)}return new Promise(async o=>{var h;const i=new Map,s=a.body.getReader(),c=new TextDecoder;function f(y){return At(y,{...S.decoders,Promise:u=>new Promise((g,l)=>{i.set(u,{fulfil:g,reject:l})})})}let d="";for(;;){const{done:y,value:u}=await s.read();if(y&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const g=d.indexOf(`
`);if(g===-1)break;const l=JSON.parse(d.slice(0,g));if(d=d.slice(g+1),l.type==="redirect")return o(l);if(l.type==="data")(h=l.nodes)==null||h.forEach(p=>{(p==null?void 0:p.type)==="data"&&(p.uses=$t(p.uses),p.data=f(p.data))}),o(l);else if(l.type==="chunk"){const{id:p,data:A,error:R}=l,v=i.get(p);i.delete(p),R?v.reject(f(R)):v.fulfil(f(A))}}}})}function $t(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function Fe(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let o=0;o<a.rangeCount;o+=1)r.push(a.getRangeAt(o));setTimeout(()=>{if(a.rangeCount===r.length){for(let o=0;o<a.rangeCount;o+=1){const i=r[o],s=a.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}a.removeAllRanges()}})}}}function Dt(e,t,n,a){var c,f;let r,o;const i=new Promise((d,h)=>{r=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:n&&{params:(t==null?void 0:t.params)??null,route:{id:((f=t==null?void 0:t.route)==null?void 0:f.id)??null},url:n},willUnload:!t,type:a,complete:i},fulfil:r,reject:o}}function Ie(e){return{data:e.data,error:e.error,form:e.form,params:e.params,route:e.route,state:e.state,status:e.status,url:e.url}}export{Dn as a,S as b,qn as c,Gn as d,Ln as g,Mn as i,E as p,$ as s,xe as u};
