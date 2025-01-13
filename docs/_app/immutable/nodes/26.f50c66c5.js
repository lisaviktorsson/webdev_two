import{S as Ct,i as Ot,s as St,k as w,a as N,q as $,l as A,m as B,c as k,h as b,r as F,p as se,n as v,a7 as Nt,b as x,D as d,V as Ge,a8 as Ke,E as we,W as kt,L as Se,I as Je,R as Bt,J as qe,o as Pt,u as le,K as Lt,a9 as Mt}from"../chunks/index.562aea48.js";import{u as Xe,c as Ut}from"../chunks/register.95951ceb.js";/**
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
 */const mt=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},xt=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=t[n++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=t[n++],i=t[n++],c=t[n++],l=((s&7)<<18|(a&63)<<12|(i&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const a=t[n++],i=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|i&63)}}return e.join("")},_t={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const a=t[s],i=s+1<t.length,c=i?t[s+1]:0,l=s+2<t.length,o=l?t[s+2]:0,m=a>>2,I=(a&3)<<4|c>>4;let y=(c&15)<<2|o>>6,p=o&63;l||(p=64,i||(y=64)),r.push(n[m],n[I],n[y],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mt(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xt(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const a=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const o=s<t.length?n[t.charAt(s)]:64;++s;const I=s<t.length?n[t.charAt(s)]:64;if(++s,a==null||c==null||o==null||I==null)throw new $t;const y=a<<2|c>>4;if(r.push(y),o!==64){const p=c<<4&240|o>>2;if(r.push(p),I!==64){const g=o<<6&192|I;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $t extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ft=function(t){const e=mt(t);return _t.encodeByteArray(e,!0)},he=function(t){return Ft(t).replace(/\./g,"")},Ht=function(t){try{return _t.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qt(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,a=t.sub||t.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[he(JSON.stringify(n)),he(JSON.stringify(i)),c].join(".")}function Xt(){try{return typeof indexedDB=="object"}catch{return!1}}function Yt(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){e(n)}})}/**
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
 */const Zt="FirebaseError";class ie extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Zt,Object.setPrototypeOf(this,ie.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vt.prototype.create)}}class vt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,a=this.errors[e],i=a?Qt(a,r):"Error",c=`${this.serviceName}: ${i} (${s}).`;return new ie(s,c,r)}}function Qt(t,e){return t.replace(en,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const en=/\{\$([^}]+)}/g;function Ne(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const a=t[s],i=e[s];if(Ye(a)&&Ye(i)){if(!Ne(a,i))return!1}else if(a!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ye(t){return t!==null&&typeof t=="object"}/**
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
 */const Q="[DEFAULT]";/**
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
 */class nn{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Jt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sn(e))try{this.getOrInitializeService({instanceIdentifier:Q})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=Q){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Q){return this.instances.has(e)}getOptions(e=Q){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,i]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(a);r===c&&i.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(s,a);const i=this.instances.get(s);return i&&e(i,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rn(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Q){return this.component?this.component.multipleInstances?e:Q:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rn(t){return t===Q?void 0:t}function sn(t){return t.instantiationMode==="EAGER"}/**
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
 */var E;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(E||(E={}));const on={debug:E.DEBUG,verbose:E.VERBOSE,info:E.INFO,warn:E.WARN,error:E.ERROR,silent:E.SILENT},cn=E.INFO,ln={[E.DEBUG]:"log",[E.VERBOSE]:"log",[E.INFO]:"info",[E.WARN]:"warn",[E.ERROR]:"error"},un=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=ln[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hn{constructor(e){this.name=e,this._logLevel=cn,this._logHandler=un,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in E))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?on[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,E.DEBUG,...e),this._logHandler(this,E.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,E.VERBOSE,...e),this._logHandler(this,E.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,E.INFO,...e),this._logHandler(this,E.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,E.WARN,...e),this._logHandler(this,E.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,E.ERROR,...e),this._logHandler(this,E.ERROR,...e)}}const dn=(t,e)=>e.some(n=>t instanceof n);let Ze,Qe;function fn(){return Ze||(Ze=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pn(){return Qe||(Qe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Et=new WeakMap,ke=new WeakMap,It=new WeakMap,Ae=new WeakMap,Ue=new WeakMap;function mn(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",a),t.removeEventListener("error",i)},a=()=>{n(K(t.result)),s()},i=()=>{r(t.error),s()};t.addEventListener("success",a),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&Et.set(n,t)}).catch(()=>{}),Ue.set(e,t),e}function _n(t){if(ke.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",i),t.removeEventListener("abort",i)},a=()=>{n(),s()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",a),t.addEventListener("error",i),t.addEventListener("abort",i)});ke.set(t,e)}let Be={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ke.get(t);if(e==="objectStoreNames")return t.objectStoreNames||It.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return K(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gn(t){Be=t(Be)}function bn(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Te(this),e,...n);return It.set(r,e.sort?e.sort():[e]),K(r)}:pn().includes(t)?function(...e){return t.apply(Te(this),e),K(Et.get(this))}:function(...e){return K(t.apply(Te(this),e))}}function vn(t){return typeof t=="function"?bn(t):(t instanceof IDBTransaction&&_n(t),dn(t,fn())?new Proxy(t,Be):t)}function K(t){if(t instanceof IDBRequest)return mn(t);if(Ae.has(t))return Ae.get(t);const e=vn(t);return e!==t&&(Ae.set(t,e),Ue.set(e,t)),e}const Te=t=>Ue.get(t);function En(t,e,{blocked:n,upgrade:r,blocking:s,terminated:a}={}){const i=indexedDB.open(t,e),c=K(i);return r&&i.addEventListener("upgradeneeded",l=>{r(K(i.result),l.oldVersion,l.newVersion,K(i.transaction),l)}),n&&i.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{a&&l.addEventListener("close",()=>a()),s&&l.addEventListener("versionchange",o=>s(o.oldVersion,o.newVersion,o))}).catch(()=>{}),c}const In=["get","getKey","getAll","getAllKeys","count"],yn=["put","add","delete","clear"],Re=new Map;function et(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Re.get(e))return Re.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=yn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||In.includes(n)))return;const a=async function(i,...c){const l=this.transaction(i,s?"readwrite":"readonly");let o=l.store;return r&&(o=o.index(c.shift())),(await Promise.all([o[n](...c),s&&l.done]))[0]};return Re.set(e,a),a}gn(t=>({...t,get:(e,n,r)=>et(e,n)||t.get(e,n,r),has:(e,n)=>!!et(e,n)||t.has(e,n)}));/**
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
 */class Dn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wn(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wn(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pe="@firebase/app",tt="0.10.13";/**
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
 */const W=new hn("@firebase/app"),An="@firebase/app-compat",Tn="@firebase/analytics-compat",Rn="@firebase/analytics",Cn="@firebase/app-check-compat",On="@firebase/app-check",Sn="@firebase/auth",Nn="@firebase/auth-compat",kn="@firebase/database",Bn="@firebase/data-connect",Pn="@firebase/database-compat",Ln="@firebase/functions",Mn="@firebase/functions-compat",Un="@firebase/installations",xn="@firebase/installations-compat",$n="@firebase/messaging",Fn="@firebase/messaging-compat",Hn="@firebase/performance",jn="@firebase/performance-compat",Vn="@firebase/remote-config",zn="@firebase/remote-config-compat",Wn="@firebase/storage",Gn="@firebase/storage-compat",Kn="@firebase/firestore",Jn="@firebase/vertexai-preview",qn="@firebase/firestore-compat",Xn="firebase",Yn="10.14.1";/**
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
 */const Le="[DEFAULT]",Zn={[Pe]:"fire-core",[An]:"fire-core-compat",[Rn]:"fire-analytics",[Tn]:"fire-analytics-compat",[On]:"fire-app-check",[Cn]:"fire-app-check-compat",[Sn]:"fire-auth",[Nn]:"fire-auth-compat",[kn]:"fire-rtdb",[Bn]:"fire-data-connect",[Pn]:"fire-rtdb-compat",[Ln]:"fire-fn",[Mn]:"fire-fn-compat",[Un]:"fire-iid",[xn]:"fire-iid-compat",[$n]:"fire-fcm",[Fn]:"fire-fcm-compat",[Hn]:"fire-perf",[jn]:"fire-perf-compat",[Vn]:"fire-rc",[zn]:"fire-rc-compat",[Wn]:"fire-gcs",[Gn]:"fire-gcs-compat",[Kn]:"fire-fst",[qn]:"fire-fst-compat",[Jn]:"fire-vertex","fire-js":"fire-js",[Xn]:"fire-js-all"};/**
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
 */const de=new Map,Qn=new Map,Me=new Map;function nt(t,e){try{t.container.addComponent(e)}catch(n){W.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fe(t){const e=t.name;if(Me.has(e))return W.debug(`There were multiple attempts to register component ${e}.`),!1;Me.set(e,t);for(const n of de.values())nt(n,t);for(const n of Qn.values())nt(n,t);return!0}function er(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const tr={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},J=new vt("app","Firebase",tr);/**
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
 */class nr{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new oe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw J.create("app-deleted",{appName:this._name})}}/**
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
 */const rr=Yn;function yt(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Le,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw J.create("bad-app-name",{appName:String(s)});if(n||(n=bt()),!n)throw J.create("no-options");const a=de.get(s);if(a){if(Ne(n,a.options)&&Ne(r,a.config))return a;throw J.create("duplicate-app",{appName:s})}const i=new an(s);for(const l of Me.values())i.addComponent(l);const c=new nr(n,r,i);return de.set(s,c),c}function sr(t=Le){const e=de.get(t);if(!e&&t===Le&&bt())return yt();if(!e)throw J.create("no-app",{appName:t});return e}function ae(t,e,n){var r;let s=(r=Zn[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const a=s.match(/\s|\//),i=e.match(/\s|\//);if(a||i){const c=[`Unable to register library "${s}" with version "${e}":`];a&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&i&&c.push("and"),i&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),W.warn(c.join(" "));return}fe(new oe(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ar="firebase-heartbeat-database",ir=1,ce="firebase-heartbeat-store";let Ce=null;function Dt(){return Ce||(Ce=En(ar,ir,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ce)}catch(n){console.warn(n)}}}}).catch(t=>{throw J.create("idb-open",{originalErrorMessage:t.message})})),Ce}async function or(t){try{const n=(await Dt()).transaction(ce),r=await n.objectStore(ce).get(wt(t));return await n.done,r}catch(e){if(e instanceof ie)W.warn(e.message);else{const n=J.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});W.warn(n.message)}}}async function rt(t,e){try{const r=(await Dt()).transaction(ce,"readwrite");await r.objectStore(ce).put(e,wt(t)),await r.done}catch(n){if(n instanceof ie)W.warn(n.message);else{const r=J.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});W.warn(r.message)}}}function wt(t){return`${t.name}!${t.options.appId}`}/**
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
 */const cr=1024,lr=30*24*60*60*1e3;class ur{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dr(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=st();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(i=>i.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const c=new Date(i.date).valueOf();return Date.now()-c<=lr}),this._storage.overwrite(this._heartbeatsCache))}catch(r){W.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=st(),{heartbeatsToSend:r,unsentEntries:s}=hr(this._heartbeatsCache.heartbeats),a=he(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return W.warn(n),""}}}function st(){return new Date().toISOString().substring(0,10)}function hr(t,e=cr){const n=[];let r=t.slice();for(const s of t){const a=n.find(i=>i.agent===s.agent);if(a){if(a.dates.push(s.date),at(n)>e){a.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),at(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xt()?Yt().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await or(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function at(t){return he(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function fr(t){fe(new oe("platform-logger",e=>new Dn(e),"PRIVATE")),fe(new oe("heartbeat",e=>new ur(e),"PRIVATE")),ae(Pe,tt,t),ae(Pe,tt,"esm2017"),ae("fire-js","")}fr("");var pr="firebase",mr="10.14.1";/**
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
 */ae(pr,mr,"app");/**
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
 */const At="firebasestorage.googleapis.com",_r="storageBucket",gr=2*60*1e3,br=10*60*1e3;/**
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
 */class z extends ie{constructor(e,n,r=0){super(Oe(e),`Firebase Storage: ${n} (${Oe(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,z.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Oe(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var V;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(V||(V={}));function Oe(t){return"storage/"+t}function vr(){const t="An unknown error occurred, please check the error payload for server response.";return new z(V.UNKNOWN,t)}function Er(){return new z(V.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ir(){return new z(V.CANCELED,"User canceled the upload/download.")}function yr(t){return new z(V.INVALID_URL,"Invalid URL '"+t+"'.")}function Dr(t){return new z(V.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function it(t){return new z(V.INVALID_ARGUMENT,t)}function Tt(){return new z(V.APP_DELETED,"The Firebase app was deleted.")}function wr(t){return new z(V.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class H{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=H.makeFromUrl(e,n)}catch{return new H(e,"")}if(r.path==="")return r;throw Dr(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function a(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const i="(/(.*))?$",c=new RegExp("^gs://"+s+i,"i"),l={bucket:1,path:3};function o(D){D.path_=decodeURIComponent(D.path)}const m="v[A-Za-z0-9_]+",I=n.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",p=new RegExp(`^https?://${I}/${m}/b/${s}/o${y}`,"i"),g={bucket:1,path:3},C=n===At?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",L=new RegExp(`^https?://${C}/${s}/${T}`,"i"),_=[{regex:c,indices:l,postModify:a},{regex:p,indices:g,postModify:o},{regex:L,indices:{bucket:1,path:2},postModify:o}];for(let D=0;D<_.length;D++){const M=_[D],j=M.regex.exec(e);if(j){const G=j[M.indices.bucket];let q=j[M.indices.path];q||(q=""),r=new H(G,q),M.postModify(r);break}}if(r==null)throw yr(e);return r}}class Ar{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Tr(t,e,n){let r=1,s=null,a=null,i=!1,c=0;function l(){return c===2}let o=!1;function m(...T){o||(o=!0,e.apply(null,T))}function I(T){s=setTimeout(()=>{s=null,t(p,l())},T)}function y(){a&&clearTimeout(a)}function p(T,...L){if(o){y();return}if(T){y(),m.call(null,T,...L);return}if(l()||i){y(),m.call(null,T,...L);return}r<64&&(r*=2);let _;c===1?(c=2,_=0):_=(r+Math.random())*1e3,I(_)}let g=!1;function C(T){g||(g=!0,y(),!o&&(s!==null?(T||(c=2),clearTimeout(s),I(0)):T||(c=1)))}return I(0),a=setTimeout(()=>{i=!0,C(!0)},n),C}function Rr(t){t(!1)}/**
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
 */function Cr(t){return t!==void 0}function ot(t,e,n,r){if(r<e)throw it(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw it(`Invalid value for '${t}'. Expected ${n} or less.`)}function Or(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var pe;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(pe||(pe={}));/**
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
 */function Sr(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,a=e.indexOf(t)!==-1;return n||s||a}/**
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
 */class Nr{constructor(e,n,r,s,a,i,c,l,o,m,I,y=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=a,this.additionalRetryCodes_=i,this.callback_=c,this.errorCallback_=l,this.timeout_=o,this.progressCallback_=m,this.connectionFactory_=I,this.retry=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ue(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const i=c=>{const l=c.loaded,o=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,o)};this.progressCallback_!==null&&a.addUploadProgressListener(i),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(i),this.pendingConnection_=null;const c=a.getErrorCode()===pe.NO_ERROR,l=a.getStatus();if(!c||Sr(l,this.additionalRetryCodes_)&&this.retry){const m=a.getErrorCode()===pe.ABORT;r(!1,new ue(!1,null,m));return}const o=this.successCodes_.indexOf(l)!==-1;r(!0,new ue(o,a))})},n=(r,s)=>{const a=this.resolve_,i=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());Cr(l)?a(l):a()}catch(l){i(l)}else if(c!==null){const l=vr();l.serverResponse=c.getErrorText(),this.errorCallback_?i(this.errorCallback_(c,l)):i(l)}else if(s.canceled){const l=this.appDelete_?Tt():Ir();i(l)}else{const l=Er();i(l)}};this.canceled_?n(!1,new ue(!1,null,!0)):this.backoffId_=Tr(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Rr(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ue{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function kr(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Br(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Pr(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Lr(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Mr(t,e,n,r,s,a,i=!0){const c=Or(t.urlParams),l=t.url+c,o=Object.assign({},t.headers);return Pr(o,e),kr(o,n),Br(o,a),Lr(o,r),new Nr(l,t.method,o,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,i)}/**
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
 */function Ur(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function xr(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class me{constructor(e,n){this._service=e,n instanceof H?this._location=n:this._location=H.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new me(e,n)}get root(){const e=new H(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return xr(this._location.path)}get storage(){return this._service}get parent(){const e=Ur(this._location.path);if(e===null)return null;const n=new H(this._location.bucket,e);return new me(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw wr(e)}}function ct(t,e){const n=e==null?void 0:e[_r];return n==null?null:H.makeFromBucketSpec(n,t)}function $r(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:qt(s,t.app.options.projectId))}class Fr{constructor(e,n,r,s,a){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=a,this._bucket=null,this._host=At,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gr,this._maxUploadRetryTime=br,this._requests=new Set,s!=null?this._bucket=H.makeFromBucketSpec(s,this._host):this._bucket=ct(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=H.makeFromBucketSpec(this._url,e):this._bucket=ct(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ot("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ot("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new me(this,e)}_makeRequest(e,n,r,s,a=!0){if(this._deleted)return new Ar(Tt());{const i=Mr(e,this._appId,r,s,n,this._firebaseVersion,a);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const lt="@firebase/storage",ut="0.13.2";/**
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
 */const Rt="storage";function Hr(t=sr(),e){t=tn(t);const r=er(t,Rt).getImmediate({identifier:e}),s=Kt("storage");return s&&jr(r,...s),r}function jr(t,e,n,r={}){$r(t,e,n,r)}function Vr(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Fr(n,r,s,e,rr)}function zr(){fe(new oe(Rt,Vr,"PUBLIC").setMultipleInstances(!0)),ae(lt,ut,""),ae(lt,ut,"esm2017")}zr();const Wr={apiKey:"AIzaSyD-bgH7w81Tth31Kosd7OSoLlUANWE2JAc",authDomain:"register-test-62721.firebaseapp.com",projectId:"register-test-62721",storageBucket:"register-test-62721.appspot.com",messagingSenderId:"362771793802",appId:"1:362771793802:web:ace071d13099eaba43ea73",measurementId:"G-XDXVGRQKVW"},Gr=yt(Wr);Hr(Gr);function ht(t,e,n){const r=t.slice();return r[11]=e[n],r}function dt(t,e,n){const r=t.slice();return r[3]=e[n],r}function ft(t){let e,n=t[3].username+"",r,s,a,i=t[3].password+"",c,l,o,m=t[3].email+"",I,y,p,g=t[3].color+"",C,T,L;return{c(){e=w("p"),r=$(n),s=N(),a=w("p"),c=$(i),l=N(),o=w("p"),I=$(m),y=N(),p=w("p"),C=$(g),T=N(),L=w("br")},l(h){e=A(h,"P",{});var _=B(e);r=F(_,n),_.forEach(b),s=k(h),a=A(h,"P",{});var D=B(a);c=F(D,i),D.forEach(b),l=k(h),o=A(h,"P",{});var M=B(o);I=F(M,m),M.forEach(b),y=k(h),p=A(h,"P",{});var j=B(p);C=F(j,g),j.forEach(b),T=k(h),L=A(h,"BR",{})},m(h,_){x(h,e,_),d(e,r),x(h,s,_),x(h,a,_),d(a,c),x(h,l,_),x(h,o,_),d(o,I),x(h,y,_),x(h,p,_),d(p,C),x(h,T,_),x(h,L,_)},p(h,_){_&4&&n!==(n=h[3].username+"")&&le(r,n),_&4&&i!==(i=h[3].password+"")&&le(c,i),_&4&&m!==(m=h[3].email+"")&&le(I,m),_&4&&g!==(g=h[3].color+"")&&le(C,g)},d(h){h&&b(e),h&&b(s),h&&b(a),h&&b(l),h&&b(o),h&&b(y),h&&b(p),h&&b(T),h&&b(L)}}}function pt(t){let e,n=t[11].namn+"",r;return{c(){e=w("option"),r=$(n),this.h()},l(s){e=A(s,"OPTION",{});var a=B(e);r=F(a,n),a.forEach(b),this.h()},h(){e.__value=t[11].color,e.value=e.__value},m(s,a){x(s,e,a),d(e,r)},p:Se,d(s){s&&b(e)}}}function Kr(t){let e,n,r,s,a,i,c,l,o,m,I,y,p,g,C,T,L,h,_,D,M,j,G,q,X,_e,ge,U,be,ve,Ee,ee,Ie,te,ye,De,xe,ne=t[2],O=[];for(let f=0;f<ne.length;f+=1)O[f]=ft(dt(t,ne,f));let re=t[4],S=[];for(let f=0;f<re.length;f+=1)S[f]=pt(ht(t,re,f));return{c(){e=w("main");for(let f=0;f<O.length;f+=1)O[f].c();n=N(),r=w("div"),s=w("div"),a=N(),i=w("h1"),c=$("Registrering"),l=N(),o=w("form"),m=w("label"),I=$("Användarnamn"),y=N(),p=w("input"),g=N(),C=w("label"),T=$("Lösenord"),L=N(),h=w("input"),_=N(),D=w("label"),M=$("Email"),j=N(),G=w("input"),q=N(),X=w("label"),_e=$("Favoritfärg"),ge=N(),U=w("select");for(let f=0;f<S.length;f+=1)S[f].c();be=N(),ve=w("br"),Ee=N(),ee=w("input"),Ie=N(),te=w("a"),ye=$("Har du redan ett konto? Logga in"),this.h()},l(f){e=A(f,"MAIN",{class:!0});var P=B(e);for(let Z=0;Z<O.length;Z+=1)O[Z].l(P);n=k(P),r=A(P,"DIV",{class:!0});var u=B(r);s=A(u,"DIV",{style:!0});var Y=B(s);Y.forEach(b),a=k(u),i=A(u,"H1",{class:!0});var $e=B(i);c=F($e,"Registrering"),$e.forEach(b),l=k(u),o=A(u,"FORM",{});var R=B(o);m=A(R,"LABEL",{for:!0,class:!0});var Fe=B(m);I=F(Fe,"Användarnamn"),Fe.forEach(b),y=k(R),p=A(R,"INPUT",{name:!0,id:!0,type:!0,class:!0}),g=k(R),C=A(R,"LABEL",{for:!0,class:!0});var He=B(C);T=F(He,"Lösenord"),He.forEach(b),L=k(R),h=A(R,"INPUT",{id:!0,type:!0,class:!0}),_=k(R),D=A(R,"LABEL",{for:!0,class:!0});var je=B(D);M=F(je,"Email"),je.forEach(b),j=k(R),G=A(R,"INPUT",{id:!0,type:!0,class:!0}),q=k(R),X=A(R,"LABEL",{for:!0,class:!0});var Ve=B(X);_e=F(Ve,"Favoritfärg"),Ve.forEach(b),ge=k(R),U=A(R,"SELECT",{id:!0});var ze=B(U);for(let Z=0;Z<S.length;Z+=1)S[Z].l(ze);ze.forEach(b),be=k(R),ve=A(R,"BR",{}),Ee=k(R),ee=A(R,"INPUT",{type:!0,class:!0}),R.forEach(b),Ie=k(u),te=A(u,"A",{href:!0});var We=B(te);ye=F(We,"Har du redan ett konto? Logga in"),We.forEach(b),u.forEach(b),P.forEach(b),this.h()},h(){se(s,"width","100px"),se(s,"height","100px"),se(s,"border-radius","50%"),se(s,"overflow","hidden"),se(s,"background-color",t[1]),v(i,"class","svelte-16jbu8v"),v(m,"for","username"),v(m,"class","svelte-16jbu8v"),v(p,"name","username"),v(p,"id","username"),v(p,"type","text"),p.required=!0,v(p,"class","svelte-16jbu8v"),v(C,"for","password"),v(C,"class","svelte-16jbu8v"),v(h,"id","password"),v(h,"type","password"),v(h,"class","svelte-16jbu8v"),v(D,"for","email"),v(D,"class","svelte-16jbu8v"),v(G,"id","email"),v(G,"type","email"),v(G,"class","svelte-16jbu8v"),v(X,"for","hair"),v(X,"class","svelte-16jbu8v"),v(U,"id","hair"),t[1]===void 0&&Nt(()=>t[8].call(U)),v(ee,"type","submit"),ee.value="Registrera",v(ee,"class","reg svelte-16jbu8v"),v(te,"href","/login"),v(r,"class","container svelte-16jbu8v"),v(e,"class","svelte-16jbu8v")},m(f,P){x(f,e,P);for(let u=0;u<O.length;u+=1)O[u]&&O[u].m(e,null);d(e,n),d(e,r),d(r,s),d(r,a),d(r,i),d(i,c),d(r,l),d(r,o),d(o,m),d(m,I),d(o,y),d(o,p),Ge(p,t[0]),d(o,g),d(o,C),d(C,T),d(o,L),d(o,h),d(o,_),d(o,D),d(D,M),d(o,j),d(o,G),d(o,q),d(o,X),d(X,_e),d(o,ge),d(o,U);for(let u=0;u<S.length;u+=1)S[u]&&S[u].m(U,null);Ke(U,t[1],!0),d(o,be),d(o,ve),d(o,Ee),d(o,ee),d(r,Ie),d(r,te),d(te,ye),De||(xe=[we(p,"input",t[7]),we(U,"change",t[8]),we(o,"submit",kt(t[5]))],De=!0)},p(f,[P]){if(P&4){ne=f[2];let u;for(u=0;u<ne.length;u+=1){const Y=dt(f,ne,u);O[u]?O[u].p(Y,P):(O[u]=ft(Y),O[u].c(),O[u].m(e,n))}for(;u<O.length;u+=1)O[u].d(1);O.length=ne.length}if(P&2&&se(s,"background-color",f[1]),P&1&&p.value!==f[0]&&Ge(p,f[0]),P&16){re=f[4];let u;for(u=0;u<re.length;u+=1){const Y=ht(f,re,u);S[u]?S[u].p(Y,P):(S[u]=pt(Y),S[u].c(),S[u].m(U,null))}for(;u<S.length;u+=1)S[u].d(1);S.length=re.length}P&18&&Ke(U,f[1])},i:Se,o:Se,d(f){f&&b(e),Je(O,f),Je(S,f),De=!1,Bt(xe)}}}function Jr(t,e,n){let r,s,a;qe(t,Xe,g=>n(10,s=g)),qe(t,Ut,g=>n(6,a=g));let i="",c="blue",l=[{color:"blue",namn:"Blå"},{color:"red",namn:"Röd"},{color:"green",namn:"Grön"},{color:"yellow",namn:"Gul"},{color:"purple",namn:"Lila"},{color:"pink",namn:"Rosa"},{color:"orange",namn:"Orange"},{color:"brown",namn:"Brun"},{color:"black",namn:"Svart"}],o=[],m;Pt(()=>{s.length>2&&n(2,o=JSON.parse(s)),r.length>2&&(n(3,m=JSON.parse(r)),console.log("user",m))});function I(){if(console.log(o),o.filter(g=>g.username===i&&g.username.length===i.length).length>0)alert("Användarnamnet är upptaget");else{let g={username:i,password:document.getElementById("password").value,email:document.getElementById("email").value,color:c};n(2,o=[...o,g]),Lt(Xe,s=JSON.stringify(o),s)}}function y(){i=this.value,n(0,i)}function p(){c=Mt(this),n(1,c),n(4,l)}return t.$$.update=()=>{t.$$.dirty&64&&(r=a)},[i,c,o,m,l,I,a,y,p]}class Yr extends Ct{constructor(e){super(),Ot(this,e,Jr,Kr,St,{})}}export{Yr as component};
