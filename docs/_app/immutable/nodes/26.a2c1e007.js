import{S as Ct,i as Ot,s as St,k as w,a as N,q as F,l as A,m as B,c as k,h as b,r as $,p as se,n as E,a7 as Nt,b as x,D as d,V as Ge,a8 as Ke,E as we,W as kt,L as Se,I as Je,R as Bt,J as Xe,o as Pt,u as le,K as Lt,a9 as Mt}from"../chunks/index.562aea48.js";import{u as Ye,c as Ut}from"../chunks/register.95951ceb.js";/**
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
 */const mt=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},xt=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},_t={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,c=a?t[s+1]:0,l=s+2<t.length,o=l?t[s+2]:0,m=i>>2,I=(i&3)<<4|c>>4;let y=(c&15)<<2|o>>6,p=o&63;l||(p=64,a||(y=64)),r.push(n[m],n[I],n[y],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mt(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xt(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const o=s<t.length?n[t.charAt(s)]:64;++s;const I=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||o==null||I==null)throw new Ft;const y=i<<2|c>>4;if(r.push(y),o!==64){const p=c<<4&240|o>>2;if(r.push(p),I!==64){const g=o<<6&192|I;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ft extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $t=function(t){const e=mt(t);return _t.encodeByteArray(e,!0)},he=function(t){return $t(t).replace(/\./g,"")},Ht=function(t){try{return _t.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function jt(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vt=()=>jt().__FIREBASE_DEFAULTS__,zt=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Wt=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ht(t[1]);return e&&JSON.parse(e)},gt=()=>{try{return Vt()||zt()||Wt()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Gt=t=>{var e,n;return(n=(e=gt())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Kt=t=>{const e=Gt(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},bt=()=>{var t;return(t=gt())===null||t===void 0?void 0:t.config};/**
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
 */class Jt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Xt(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[he(JSON.stringify(n)),he(JSON.stringify(a)),c].join(".")}function Yt(){try{return typeof indexedDB=="object"}catch{return!1}}function qt(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Zt="FirebaseError";class ae extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Zt,Object.setPrototypeOf(this,ae.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Et.prototype.create)}}class Et{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Qt(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new ae(s,c,r)}}function Qt(t,e){return t.replace(en,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const en=/\{\$([^}]+)}/g;function Ne(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(qe(i)&&qe(a)){if(!Ne(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function qe(t){return t!==null&&typeof t=="object"}/**
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
 */function tn(t){return t&&t._delegate?t._delegate:t}class oe{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Z="[DEFAULT]";/**
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
 */class nn{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Jt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sn(e))try{this.getOrInitializeService({instanceIdentifier:Z})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Z){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Z){return this.instances.has(e)}getOptions(e=Z){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rn(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Z){return this.component?this.component.multipleInstances?e:Z:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rn(t){return t===Z?void 0:t}function sn(t){return t.instantiationMode==="EAGER"}/**
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
 */class an{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nn(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var v;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(v||(v={}));const on={debug:v.DEBUG,verbose:v.VERBOSE,info:v.INFO,warn:v.WARN,error:v.ERROR,silent:v.SILENT},cn=v.INFO,ln={[v.DEBUG]:"log",[v.VERBOSE]:"log",[v.INFO]:"info",[v.WARN]:"warn",[v.ERROR]:"error"},un=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=ln[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hn{constructor(e){this.name=e,this._logLevel=cn,this._logHandler=un,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in v))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?on[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,v.DEBUG,...e),this._logHandler(this,v.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,v.VERBOSE,...e),this._logHandler(this,v.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,v.INFO,...e),this._logHandler(this,v.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,v.WARN,...e),this._logHandler(this,v.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,v.ERROR,...e),this._logHandler(this,v.ERROR,...e)}}const dn=(t,e)=>e.some(n=>t instanceof n);let Ze,Qe;function fn(){return Ze||(Ze=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pn(){return Qe||(Qe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vt=new WeakMap,ke=new WeakMap,It=new WeakMap,Ae=new WeakMap,Ue=new WeakMap;function mn(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(G(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&vt.set(n,t)}).catch(()=>{}),Ue.set(e,t),e}function _n(t){if(ke.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});ke.set(t,e)}let Be={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ke.get(t);if(e==="objectStoreNames")return t.objectStoreNames||It.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return G(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gn(t){Be=t(Be)}function bn(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Te(this),e,...n);return It.set(r,e.sort?e.sort():[e]),G(r)}:pn().includes(t)?function(...e){return t.apply(Te(this),e),G(vt.get(this))}:function(...e){return G(t.apply(Te(this),e))}}function En(t){return typeof t=="function"?bn(t):(t instanceof IDBTransaction&&_n(t),dn(t,fn())?new Proxy(t,Be):t)}function G(t){if(t instanceof IDBRequest)return mn(t);if(Ae.has(t))return Ae.get(t);const e=En(t);return e!==t&&(Ae.set(t,e),Ue.set(e,t)),e}const Te=t=>Ue.get(t);function vn(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),c=G(a);return r&&a.addEventListener("upgradeneeded",l=>{r(G(a.result),l.oldVersion,l.newVersion,G(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",o=>s(o.oldVersion,o.newVersion,o))}).catch(()=>{}),c}const In=["get","getKey","getAll","getAllKeys","count"],yn=["put","add","delete","clear"],Re=new Map;function et(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Re.get(e))return Re.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=yn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||In.includes(n)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let o=l.store;return r&&(o=o.index(c.shift())),(await Promise.all([o[n](...c),s&&l.done]))[0]};return Re.set(e,i),i}gn(t=>({...t,get:(e,n,r)=>et(e,n)||t.get(e,n,r),has:(e,n)=>!!et(e,n)||t.has(e,n)}));/**
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
 */class Dn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wn(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wn(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pe="@firebase/app",tt="0.10.1";/**
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
 */const Q=new hn("@firebase/app"),An="@firebase/app-compat",Tn="@firebase/analytics-compat",Rn="@firebase/analytics",Cn="@firebase/app-check-compat",On="@firebase/app-check",Sn="@firebase/auth",Nn="@firebase/auth-compat",kn="@firebase/database",Bn="@firebase/database-compat",Pn="@firebase/functions",Ln="@firebase/functions-compat",Mn="@firebase/installations",Un="@firebase/installations-compat",xn="@firebase/messaging",Fn="@firebase/messaging-compat",$n="@firebase/performance",Hn="@firebase/performance-compat",jn="@firebase/remote-config",Vn="@firebase/remote-config-compat",zn="@firebase/storage",Wn="@firebase/storage-compat",Gn="@firebase/firestore",Kn="@firebase/firestore-compat",Jn="firebase",Xn="10.11.0";/**
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
 */const Le="[DEFAULT]",Yn={[Pe]:"fire-core",[An]:"fire-core-compat",[Rn]:"fire-analytics",[Tn]:"fire-analytics-compat",[On]:"fire-app-check",[Cn]:"fire-app-check-compat",[Sn]:"fire-auth",[Nn]:"fire-auth-compat",[kn]:"fire-rtdb",[Bn]:"fire-rtdb-compat",[Pn]:"fire-fn",[Ln]:"fire-fn-compat",[Mn]:"fire-iid",[Un]:"fire-iid-compat",[xn]:"fire-fcm",[Fn]:"fire-fcm-compat",[$n]:"fire-perf",[Hn]:"fire-perf-compat",[jn]:"fire-rc",[Vn]:"fire-rc-compat",[zn]:"fire-gcs",[Wn]:"fire-gcs-compat",[Gn]:"fire-fst",[Kn]:"fire-fst-compat","fire-js":"fire-js",[Jn]:"fire-js-all"};/**
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
 */const de=new Map,qn=new Map,Me=new Map;function nt(t,e){try{t.container.addComponent(e)}catch(n){Q.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fe(t){const e=t.name;if(Me.has(e))return Q.debug(`There were multiple attempts to register component ${e}.`),!1;Me.set(e,t);for(const n of de.values())nt(n,t);for(const n of qn.values())nt(n,t);return!0}function Zn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Qn={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},K=new Et("app","Firebase",Qn);/**
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
 */class er{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new oe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw K.create("app-deleted",{appName:this._name})}}/**
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
 */const tr=Xn;function yt(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Le,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw K.create("bad-app-name",{appName:String(s)});if(n||(n=bt()),!n)throw K.create("no-options");const i=de.get(s);if(i){if(Ne(n,i.options)&&Ne(r,i.config))return i;throw K.create("duplicate-app",{appName:s})}const a=new an(s);for(const l of Me.values())a.addComponent(l);const c=new er(n,r,a);return de.set(s,c),c}function nr(t=Le){const e=de.get(t);if(!e&&t===Le&&bt())return yt();if(!e)throw K.create("no-app",{appName:t});return e}function ie(t,e,n){var r;let s=(r=Yn[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Q.warn(c.join(" "));return}fe(new oe(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const rr="firebase-heartbeat-database",sr=1,ce="firebase-heartbeat-store";let Ce=null;function Dt(){return Ce||(Ce=vn(rr,sr,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ce)}catch(n){console.warn(n)}}}}).catch(t=>{throw K.create("idb-open",{originalErrorMessage:t.message})})),Ce}async function ir(t){try{const n=(await Dt()).transaction(ce),r=await n.objectStore(ce).get(wt(t));return await n.done,r}catch(e){if(e instanceof ae)Q.warn(e.message);else{const n=K.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Q.warn(n.message)}}}async function rt(t,e){try{const r=(await Dt()).transaction(ce,"readwrite");await r.objectStore(ce).put(e,wt(t)),await r.done}catch(n){if(n instanceof ae)Q.warn(n.message);else{const r=K.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Q.warn(r.message)}}}function wt(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ar=1024,or=30*24*60*60*1e3;class cr{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ur(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=st();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=or}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=st(),{heartbeatsToSend:r,unsentEntries:s}=lr(this._heartbeatsCache.heartbeats),i=he(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function st(){return new Date().toISOString().substring(0,10)}function lr(t,e=ar){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),it(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),it(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ur{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yt()?qt().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ir(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function it(t){return he(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function hr(t){fe(new oe("platform-logger",e=>new Dn(e),"PRIVATE")),fe(new oe("heartbeat",e=>new cr(e),"PRIVATE")),ie(Pe,tt,t),ie(Pe,tt,"esm2017"),ie("fire-js","")}hr("");var dr="firebase",fr="10.11.0";/**
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
 */ie(dr,fr,"app");/**
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
 */const At="firebasestorage.googleapis.com",pr="storageBucket",mr=2*60*1e3,_r=10*60*1e3;/**
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
 */class z extends ae{constructor(e,n,r=0){super(Oe(e),`Firebase Storage: ${n} (${Oe(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,z.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Oe(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var V;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(V||(V={}));function Oe(t){return"storage/"+t}function gr(){const t="An unknown error occurred, please check the error payload for server response.";return new z(V.UNKNOWN,t)}function br(){return new z(V.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Er(){return new z(V.CANCELED,"User canceled the upload/download.")}function vr(t){return new z(V.INVALID_URL,"Invalid URL '"+t+"'.")}function Ir(t){return new z(V.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function at(t){return new z(V.INVALID_ARGUMENT,t)}function Tt(){return new z(V.APP_DELETED,"The Firebase app was deleted.")}function yr(t){return new z(V.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class H{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=H.makeFromUrl(e,n)}catch{return new H(e,"")}if(r.path==="")return r;throw Ir(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+s+a,"i"),l={bucket:1,path:3};function o(D){D.path_=decodeURIComponent(D.path)}const m="v[A-Za-z0-9_]+",I=n.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",p=new RegExp(`^https?://${I}/${m}/b/${s}/o${y}`,"i"),g={bucket:1,path:3},C=n===At?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",L=new RegExp(`^https?://${C}/${s}/${T}`,"i"),_=[{regex:c,indices:l,postModify:i},{regex:p,indices:g,postModify:o},{regex:L,indices:{bucket:1,path:2},postModify:o}];for(let D=0;D<_.length;D++){const M=_[D],j=M.regex.exec(e);if(j){const W=j[M.indices.bucket];let J=j[M.indices.path];J||(J=""),r=new H(W,J),M.postModify(r);break}}if(r==null)throw vr(e);return r}}class Dr{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function wr(t,e,n){let r=1,s=null,i=null,a=!1,c=0;function l(){return c===2}let o=!1;function m(...T){o||(o=!0,e.apply(null,T))}function I(T){s=setTimeout(()=>{s=null,t(p,l())},T)}function y(){i&&clearTimeout(i)}function p(T,...L){if(o){y();return}if(T){y(),m.call(null,T,...L);return}if(l()||a){y(),m.call(null,T,...L);return}r<64&&(r*=2);let _;c===1?(c=2,_=0):_=(r+Math.random())*1e3,I(_)}let g=!1;function C(T){g||(g=!0,y(),!o&&(s!==null?(T||(c=2),clearTimeout(s),I(0)):T||(c=1)))}return I(0),i=setTimeout(()=>{a=!0,C(!0)},n),C}function Ar(t){t(!1)}/**
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
 */function Tr(t){return t!==void 0}function ot(t,e,n,r){if(r<e)throw at(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw at(`Invalid value for '${t}'. Expected ${n} or less.`)}function Rr(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var pe;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(pe||(pe={}));/**
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
 */function Cr(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class Or{constructor(e,n,r,s,i,a,c,l,o,m,I,y=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=l,this.timeout_=o,this.progressCallback_=m,this.connectionFactory_=I,this.retry=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ue(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=c=>{const l=c.loaded,o=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,o)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const c=i.getErrorCode()===pe.NO_ERROR,l=i.getStatus();if(!c||Cr(l,this.additionalRetryCodes_)&&this.retry){const m=i.getErrorCode()===pe.ABORT;r(!1,new ue(!1,null,m));return}const o=this.successCodes_.indexOf(l)!==-1;r(!0,new ue(o,i))})},n=(r,s)=>{const i=this.resolve_,a=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());Tr(l)?i(l):i()}catch(l){a(l)}else if(c!==null){const l=gr();l.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,l)):a(l)}else if(s.canceled){const l=this.appDelete_?Tt():Er();a(l)}else{const l=br();a(l)}};this.canceled_?n(!1,new ue(!1,null,!0)):this.backoffId_=wr(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Ar(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ue{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Sr(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Nr(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function kr(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Br(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Pr(t,e,n,r,s,i,a=!0){const c=Rr(t.urlParams),l=t.url+c,o=Object.assign({},t.headers);return kr(o,e),Sr(o,n),Nr(o,i),Br(o,r),new Or(l,t.method,o,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,a)}/**
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
 */function Lr(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Mr(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class me{constructor(e,n){this._service=e,n instanceof H?this._location=n:this._location=H.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new me(e,n)}get root(){const e=new H(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Mr(this._location.path)}get storage(){return this._service}get parent(){const e=Lr(this._location.path);if(e===null)return null;const n=new H(this._location.bucket,e);return new me(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw yr(e)}}function ct(t,e){const n=e==null?void 0:e[pr];return n==null?null:H.makeFromBucketSpec(n,t)}function Ur(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Xt(s,t.app.options.projectId))}class xr{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=At,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=mr,this._maxUploadRetryTime=_r,this._requests=new Set,s!=null?this._bucket=H.makeFromBucketSpec(s,this._host):this._bucket=ct(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=H.makeFromBucketSpec(this._url,e):this._bucket=ct(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ot("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ot("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new me(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new Dr(Tt());{const a=Pr(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const lt="@firebase/storage",ut="0.12.4";/**
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
 */const Rt="storage";function Fr(t=nr(),e){t=tn(t);const r=Zn(t,Rt).getImmediate({identifier:e}),s=Kt("storage");return s&&$r(r,...s),r}function $r(t,e,n,r={}){Ur(t,e,n,r)}function Hr(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new xr(n,r,s,e,tr)}function jr(){fe(new oe(Rt,Hr,"PUBLIC").setMultipleInstances(!0)),ie(lt,ut,""),ie(lt,ut,"esm2017")}jr();const Vr={apiKey:"AIzaSyD-bgH7w81Tth31Kosd7OSoLlUANWE2JAc",authDomain:"register-test-62721.firebaseapp.com",projectId:"register-test-62721",storageBucket:"register-test-62721.appspot.com",messagingSenderId:"362771793802",appId:"1:362771793802:web:ace071d13099eaba43ea73",measurementId:"G-XDXVGRQKVW"},zr=yt(Vr);Fr(zr);function ht(t,e,n){const r=t.slice();return r[11]=e[n],r}function dt(t,e,n){const r=t.slice();return r[3]=e[n],r}function ft(t){let e,n=t[3].username+"",r,s,i,a=t[3].password+"",c,l,o,m=t[3].email+"",I,y,p,g=t[3].color+"",C,T,L;return{c(){e=w("p"),r=F(n),s=N(),i=w("p"),c=F(a),l=N(),o=w("p"),I=F(m),y=N(),p=w("p"),C=F(g),T=N(),L=w("br")},l(h){e=A(h,"P",{});var _=B(e);r=$(_,n),_.forEach(b),s=k(h),i=A(h,"P",{});var D=B(i);c=$(D,a),D.forEach(b),l=k(h),o=A(h,"P",{});var M=B(o);I=$(M,m),M.forEach(b),y=k(h),p=A(h,"P",{});var j=B(p);C=$(j,g),j.forEach(b),T=k(h),L=A(h,"BR",{})},m(h,_){x(h,e,_),d(e,r),x(h,s,_),x(h,i,_),d(i,c),x(h,l,_),x(h,o,_),d(o,I),x(h,y,_),x(h,p,_),d(p,C),x(h,T,_),x(h,L,_)},p(h,_){_&4&&n!==(n=h[3].username+"")&&le(r,n),_&4&&a!==(a=h[3].password+"")&&le(c,a),_&4&&m!==(m=h[3].email+"")&&le(I,m),_&4&&g!==(g=h[3].color+"")&&le(C,g)},d(h){h&&b(e),h&&b(s),h&&b(i),h&&b(l),h&&b(o),h&&b(y),h&&b(p),h&&b(T),h&&b(L)}}}function pt(t){let e,n=t[11].namn+"",r;return{c(){e=w("option"),r=F(n),this.h()},l(s){e=A(s,"OPTION",{});var i=B(e);r=$(i,n),i.forEach(b),this.h()},h(){e.__value=t[11].color,e.value=e.__value},m(s,i){x(s,e,i),d(e,r)},p:Se,d(s){s&&b(e)}}}function Wr(t){let e,n,r,s,i,a,c,l,o,m,I,y,p,g,C,T,L,h,_,D,M,j,W,J,X,_e,ge,U,be,Ee,ve,ee,Ie,te,ye,De,xe,ne=t[2],O=[];for(let f=0;f<ne.length;f+=1)O[f]=ft(dt(t,ne,f));let re=t[4],S=[];for(let f=0;f<re.length;f+=1)S[f]=pt(ht(t,re,f));return{c(){e=w("main");for(let f=0;f<O.length;f+=1)O[f].c();n=N(),r=w("div"),s=w("div"),i=N(),a=w("h1"),c=F("Registrering"),l=N(),o=w("form"),m=w("label"),I=F("Användarnamn"),y=N(),p=w("input"),g=N(),C=w("label"),T=F("Lösenord"),L=N(),h=w("input"),_=N(),D=w("label"),M=F("Email"),j=N(),W=w("input"),J=N(),X=w("label"),_e=F("Favoritfärg"),ge=N(),U=w("select");for(let f=0;f<S.length;f+=1)S[f].c();be=N(),Ee=w("br"),ve=N(),ee=w("input"),Ie=N(),te=w("a"),ye=F("Har du redan ett konto? Logga in"),this.h()},l(f){e=A(f,"MAIN",{class:!0});var P=B(e);for(let q=0;q<O.length;q+=1)O[q].l(P);n=k(P),r=A(P,"DIV",{class:!0});var u=B(r);s=A(u,"DIV",{style:!0});var Y=B(s);Y.forEach(b),i=k(u),a=A(u,"H1",{class:!0});var Fe=B(a);c=$(Fe,"Registrering"),Fe.forEach(b),l=k(u),o=A(u,"FORM",{});var R=B(o);m=A(R,"LABEL",{for:!0,class:!0});var $e=B(m);I=$($e,"Användarnamn"),$e.forEach(b),y=k(R),p=A(R,"INPUT",{name:!0,id:!0,type:!0,class:!0}),g=k(R),C=A(R,"LABEL",{for:!0,class:!0});var He=B(C);T=$(He,"Lösenord"),He.forEach(b),L=k(R),h=A(R,"INPUT",{id:!0,type:!0,class:!0}),_=k(R),D=A(R,"LABEL",{for:!0,class:!0});var je=B(D);M=$(je,"Email"),je.forEach(b),j=k(R),W=A(R,"INPUT",{id:!0,type:!0,class:!0}),J=k(R),X=A(R,"LABEL",{for:!0,class:!0});var Ve=B(X);_e=$(Ve,"Favoritfärg"),Ve.forEach(b),ge=k(R),U=A(R,"SELECT",{id:!0});var ze=B(U);for(let q=0;q<S.length;q+=1)S[q].l(ze);ze.forEach(b),be=k(R),Ee=A(R,"BR",{}),ve=k(R),ee=A(R,"INPUT",{type:!0,class:!0}),R.forEach(b),Ie=k(u),te=A(u,"A",{href:!0});var We=B(te);ye=$(We,"Har du redan ett konto? Logga in"),We.forEach(b),u.forEach(b),P.forEach(b),this.h()},h(){se(s,"width","100px"),se(s,"height","100px"),se(s,"border-radius","50%"),se(s,"overflow","hidden"),se(s,"background-color",t[1]),E(a,"class","svelte-16jbu8v"),E(m,"for","username"),E(m,"class","svelte-16jbu8v"),E(p,"name","username"),E(p,"id","username"),E(p,"type","text"),p.required=!0,E(p,"class","svelte-16jbu8v"),E(C,"for","password"),E(C,"class","svelte-16jbu8v"),E(h,"id","password"),E(h,"type","password"),E(h,"class","svelte-16jbu8v"),E(D,"for","email"),E(D,"class","svelte-16jbu8v"),E(W,"id","email"),E(W,"type","email"),E(W,"class","svelte-16jbu8v"),E(X,"for","hair"),E(X,"class","svelte-16jbu8v"),E(U,"id","hair"),t[1]===void 0&&Nt(()=>t[8].call(U)),E(ee,"type","submit"),ee.value="Registrera",E(ee,"class","reg svelte-16jbu8v"),E(te,"href","/login"),E(r,"class","container svelte-16jbu8v"),E(e,"class","svelte-16jbu8v")},m(f,P){x(f,e,P);for(let u=0;u<O.length;u+=1)O[u]&&O[u].m(e,null);d(e,n),d(e,r),d(r,s),d(r,i),d(r,a),d(a,c),d(r,l),d(r,o),d(o,m),d(m,I),d(o,y),d(o,p),Ge(p,t[0]),d(o,g),d(o,C),d(C,T),d(o,L),d(o,h),d(o,_),d(o,D),d(D,M),d(o,j),d(o,W),d(o,J),d(o,X),d(X,_e),d(o,ge),d(o,U);for(let u=0;u<S.length;u+=1)S[u]&&S[u].m(U,null);Ke(U,t[1],!0),d(o,be),d(o,Ee),d(o,ve),d(o,ee),d(r,Ie),d(r,te),d(te,ye),De||(xe=[we(p,"input",t[7]),we(U,"change",t[8]),we(o,"submit",kt(t[5]))],De=!0)},p(f,[P]){if(P&4){ne=f[2];let u;for(u=0;u<ne.length;u+=1){const Y=dt(f,ne,u);O[u]?O[u].p(Y,P):(O[u]=ft(Y),O[u].c(),O[u].m(e,n))}for(;u<O.length;u+=1)O[u].d(1);O.length=ne.length}if(P&2&&se(s,"background-color",f[1]),P&1&&p.value!==f[0]&&Ge(p,f[0]),P&16){re=f[4];let u;for(u=0;u<re.length;u+=1){const Y=ht(f,re,u);S[u]?S[u].p(Y,P):(S[u]=pt(Y),S[u].c(),S[u].m(U,null))}for(;u<S.length;u+=1)S[u].d(1);S.length=re.length}P&18&&Ke(U,f[1])},i:Se,o:Se,d(f){f&&b(e),Je(O,f),Je(S,f),De=!1,Bt(xe)}}}function Gr(t,e,n){let r,s,i;Xe(t,Ye,g=>n(10,s=g)),Xe(t,Ut,g=>n(6,i=g));let a="",c="blue",l=[{color:"blue",namn:"Blå"},{color:"red",namn:"Röd"},{color:"green",namn:"Grön"},{color:"yellow",namn:"Gul"},{color:"purple",namn:"Lila"},{color:"pink",namn:"Rosa"},{color:"orange",namn:"Orange"},{color:"brown",namn:"Brun"},{color:"black",namn:"Svart"}],o=[],m;Pt(()=>{s.length>2&&n(2,o=JSON.parse(s)),r.length>2&&(n(3,m=JSON.parse(r)),console.log("user",m))});function I(){if(console.log(o),o.filter(g=>g.username===a&&g.username.length===a.length).length>0)alert("Användarnamnet är upptaget");else{let g={username:a,password:document.getElementById("password").value,email:document.getElementById("email").value,color:c};n(2,o=[...o,g]),Lt(Ye,s=JSON.stringify(o),s)}}function y(){a=this.value,n(0,a)}function p(){c=Mt(this),n(1,c),n(4,l)}return t.$$.update=()=>{t.$$.dirty&64&&(r=i)},[a,c,o,m,l,I,i,y,p]}class Xr extends Ct{constructor(e){super(),Ot(this,e,Gr,Wr,St,{})}}export{Xr as component};
