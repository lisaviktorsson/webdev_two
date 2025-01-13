import"../chunks/disclose-version.Bg9kRutz.js";import"../chunks/legacy.kkaBD5aU.js";import{Y as $e,p as Qe,aE as et,aF as tt,t as z,a as nt,Q as U,T as d,s as P,c as C,aD as W,aC as rt,r as A,aB as ee,aI as st}from"../chunks/runtime.D7Wnj0fX.js";import{s as F}from"../chunks/render.smxQznNC.js";import{e as _e,i as ge}from"../chunks/each.Btqh4Es0.js";import{a as te,t as fe}from"../chunks/template.CvXheLdW.js";import{r as at,s as it}from"../chunks/attributes.BP_BnRfz.js";import{l as ot,f as ct}from"../chunks/events.DtDyvcPQ.js";import{a as lt}from"../chunks/input.DjNZgpxg.js";import{i as ut}from"../chunks/proxy.BNybM6p5.js";import{p as ht}from"../chunks/event-modifiers.CWmzcjye.js";import{i as dt}from"../chunks/lifecycle.CL8LSRxO.js";import{s as ft,a as be,b as pt}from"../chunks/store._img2h1m.js";import{u as ve,c as mt}from"../chunks/register.tFz9CjiA.js";import{o as _t}from"../chunks/index-client.BXWsId-j.js";function Me(t,e,n){if(t.multiple)return vt(t,e);for(var s of t.options){var r=H(s);if(ut(r,e)){s.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function gt(t,e){$e(()=>{var n=new MutationObserver(()=>{var s=t.__value;Me(t,s)});return n.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{n.disconnect()}})}function bt(t,e,n=e){var s=!0;ot(t,"change",r=>{var a=r?"[selected]":":checked",i;if(t.multiple)i=[].map.call(t.querySelectorAll(a),H);else{var o=t.querySelector(a)??t.querySelector("option:not([disabled])");i=o&&H(o)}n(i)}),$e(()=>{var r=e();if(Me(t,r,s),s&&r===void 0){var a=t.querySelector(":checked");a!==null&&(r=H(a),n(r))}t.__value=r,s=!1}),gt(t)}function vt(t,e){for(var n of t.options)n.selected=~e.indexOf(H(n))}function H(t){return"__value"in t?t.__value:t.value}var Ee={};/**
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
 */const xe=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Et=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const a=t[n++];e[s++]=String.fromCharCode((r&31)<<6|a&63)}else if(r>239&&r<365){const a=t[n++],i=t[n++],o=t[n++],c=((r&7)<<18|(a&63)<<12|(i&63)<<6|o&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const a=t[n++],i=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(a&63)<<6|i&63)}}return e.join("")},Le={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const a=t[r],i=r+1<t.length,o=i?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,_=a>>2,p=(a&3)<<4|o>>4;let f=(o&15)<<2|l>>6,b=l&63;c||(b=64,i||(f=64)),s.push(n[_],n[p],n[f],n[b])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xe(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Et(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const a=n[t.charAt(r++)],o=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const p=r<t.length?n[t.charAt(r)]:64;if(++r,a==null||o==null||l==null||p==null)throw new yt;const f=a<<2|o>>4;if(s.push(f),l!==64){const b=o<<4&240|l>>2;if(s.push(b),p!==64){const w=l<<6&192|p;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class yt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const It=function(t){const e=xe(t);return Le.encodeByteArray(e,!0)},K=function(t){return It(t).replace(/\./g,"")},Dt=function(t){try{return Le.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function wt(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const At=()=>wt().__FIREBASE_DEFAULTS__,Tt=()=>{if(typeof process>"u"||typeof Ee>"u")return;const t=Ee.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Rt=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Dt(t[1]);return e&&JSON.parse(e)},Ue=()=>{try{return At()||Tt()||Rt()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},St=t=>{var e,n;return(n=(e=Ue())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ct=t=>{const e=St(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Fe=()=>{var t;return(t=Ue())===null||t===void 0?void 0:t.config};/**
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
 */class Ot{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Nt(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,a=t.sub||t.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},t);return[K(JSON.stringify(n)),K(JSON.stringify(i)),""].join(".")}function kt(){try{return typeof indexedDB=="object"}catch{return!1}}function Bt(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var a;e(((a=r.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){e(n)}})}/**
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
 */const Pt="FirebaseError";class x extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Pt,Object.setPrototypeOf(this,x.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,He.prototype.create)}}class He{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,a=this.errors[e],i=a?$t(a,s):"Error",o=`${this.serviceName}: ${i} (${r}).`;return new x(r,o,s)}}function $t(t,e){return t.replace(Mt,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Mt=/\{\$([^}]+)}/g;function oe(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const a=t[r],i=e[r];if(ye(a)&&ye(i)){if(!oe(a,i))return!1}else if(a!==i)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function ye(t){return t!==null&&typeof t=="object"}/**
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
 */function xt(t){return t&&t._delegate?t._delegate:t}class j{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const $="[DEFAULT]";/**
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
 */class Lt{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ot;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(a){if(r)return null;throw a}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ft(e))try{this.getOrInitializeService({instanceIdentifier:$})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:r});s.resolve(a)}catch{}}}}clearInstance(e=$){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$){return this.instances.has(e)}getOptions(e=$){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[a,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(a);s===o&&i.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),a=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;a.add(e),this.onInitCallbacks.set(r,a);const i=this.instances.get(r);return i&&e(i,r),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ut(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=$){return this.component?this.component.multipleInstances?e:$:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ut(t){return t===$?void 0:t}function Ft(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ht{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Lt(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var u;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(u||(u={}));const jt={debug:u.DEBUG,verbose:u.VERBOSE,info:u.INFO,warn:u.WARN,error:u.ERROR,silent:u.SILENT},Vt=u.INFO,zt={[u.DEBUG]:"log",[u.VERBOSE]:"log",[u.INFO]:"info",[u.WARN]:"warn",[u.ERROR]:"error"},Wt=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=zt[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gt{constructor(e){this.name=e,this._logLevel=Vt,this._logHandler=Wt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in u))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,u.DEBUG,...e),this._logHandler(this,u.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,u.VERBOSE,...e),this._logHandler(this,u.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,u.INFO,...e),this._logHandler(this,u.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,u.WARN,...e),this._logHandler(this,u.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,u.ERROR,...e),this._logHandler(this,u.ERROR,...e)}}const Kt=(t,e)=>e.some(n=>t instanceof n);let Ie,De;function qt(){return Ie||(Ie=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jt(){return De||(De=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const je=new WeakMap,ce=new WeakMap,Ve=new WeakMap,ne=new WeakMap,pe=new WeakMap;function Yt(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",a),t.removeEventListener("error",i)},a=()=>{n(O(t.result)),r()},i=()=>{s(t.error),r()};t.addEventListener("success",a),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&je.set(n,t)}).catch(()=>{}),pe.set(e,t),e}function Xt(t){if(ce.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",i),t.removeEventListener("abort",i)},a=()=>{n(),r()},i=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",a),t.addEventListener("error",i),t.addEventListener("abort",i)});ce.set(t,e)}let le={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ce.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ve.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return O(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Zt(t){le=t(le)}function Qt(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(re(this),e,...n);return Ve.set(s,e.sort?e.sort():[e]),O(s)}:Jt().includes(t)?function(...e){return t.apply(re(this),e),O(je.get(this))}:function(...e){return O(t.apply(re(this),e))}}function en(t){return typeof t=="function"?Qt(t):(t instanceof IDBTransaction&&Xt(t),Kt(t,qt())?new Proxy(t,le):t)}function O(t){if(t instanceof IDBRequest)return Yt(t);if(ne.has(t))return ne.get(t);const e=en(t);return e!==t&&(ne.set(t,e),pe.set(e,t)),e}const re=t=>pe.get(t);function tn(t,e,{blocked:n,upgrade:s,blocking:r,terminated:a}={}){const i=indexedDB.open(t,e),o=O(i);return s&&i.addEventListener("upgradeneeded",c=>{s(O(i.result),c.oldVersion,c.newVersion,O(i.transaction),c)}),n&&i.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),o.then(c=>{a&&c.addEventListener("close",()=>a()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),o}const nn=["get","getKey","getAll","getAllKeys","count"],rn=["put","add","delete","clear"],se=new Map;function we(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(se.get(e))return se.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=rn.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||nn.includes(n)))return;const a=async function(i,...o){const c=this.transaction(i,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),r&&c.done]))[0]};return se.set(e,a),a}Zt(t=>({...t,get:(e,n,s)=>we(e,n)||t.get(e,n,s),has:(e,n)=>!!we(e,n)||t.has(e,n)}));/**
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
 */class sn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(an(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function an(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ue="@firebase/app",Ae="0.10.13";/**
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
 */const T=new Gt("@firebase/app"),on="@firebase/app-compat",cn="@firebase/analytics-compat",ln="@firebase/analytics",un="@firebase/app-check-compat",hn="@firebase/app-check",dn="@firebase/auth",fn="@firebase/auth-compat",pn="@firebase/database",mn="@firebase/data-connect",_n="@firebase/database-compat",gn="@firebase/functions",bn="@firebase/functions-compat",vn="@firebase/installations",En="@firebase/installations-compat",yn="@firebase/messaging",In="@firebase/messaging-compat",Dn="@firebase/performance",wn="@firebase/performance-compat",An="@firebase/remote-config",Tn="@firebase/remote-config-compat",Rn="@firebase/storage",Sn="@firebase/storage-compat",Cn="@firebase/firestore",On="@firebase/vertexai-preview",Nn="@firebase/firestore-compat",kn="firebase",Bn="10.14.1";/**
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
 */const he="[DEFAULT]",Pn={[ue]:"fire-core",[on]:"fire-core-compat",[ln]:"fire-analytics",[cn]:"fire-analytics-compat",[hn]:"fire-app-check",[un]:"fire-app-check-compat",[dn]:"fire-auth",[fn]:"fire-auth-compat",[pn]:"fire-rtdb",[mn]:"fire-data-connect",[_n]:"fire-rtdb-compat",[gn]:"fire-fn",[bn]:"fire-fn-compat",[vn]:"fire-iid",[En]:"fire-iid-compat",[yn]:"fire-fcm",[In]:"fire-fcm-compat",[Dn]:"fire-perf",[wn]:"fire-perf-compat",[An]:"fire-rc",[Tn]:"fire-rc-compat",[Rn]:"fire-gcs",[Sn]:"fire-gcs-compat",[Cn]:"fire-fst",[Nn]:"fire-fst-compat",[On]:"fire-vertex","fire-js":"fire-js",[kn]:"fire-js-all"};/**
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
 */const q=new Map,$n=new Map,de=new Map;function Te(t,e){try{t.container.addComponent(e)}catch(n){T.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function J(t){const e=t.name;if(de.has(e))return T.debug(`There were multiple attempts to register component ${e}.`),!1;de.set(e,t);for(const n of q.values())Te(n,t);for(const n of $n.values())Te(n,t);return!0}function Mn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const xn={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},N=new He("app","Firebase",xn);/**
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
 */class Ln{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new j("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw N.create("app-deleted",{appName:this._name})}}/**
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
 */const Un=Bn;function ze(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:he,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw N.create("bad-app-name",{appName:String(r)});if(n||(n=Fe()),!n)throw N.create("no-options");const a=q.get(r);if(a){if(oe(n,a.options)&&oe(s,a.config))return a;throw N.create("duplicate-app",{appName:r})}const i=new Ht(r);for(const c of de.values())i.addComponent(c);const o=new Ln(n,s,i);return q.set(r,o),o}function Fn(t=he){const e=q.get(t);if(!e&&t===he&&Fe())return ze();if(!e)throw N.create("no-app",{appName:t});return e}function M(t,e,n){var s;let r=(s=Pn[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const a=r.match(/\s|\//),i=e.match(/\s|\//);if(a||i){const o=[`Unable to register library "${r}" with version "${e}":`];a&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),a&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),T.warn(o.join(" "));return}J(new j(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Hn="firebase-heartbeat-database",jn=1,V="firebase-heartbeat-store";let ae=null;function We(){return ae||(ae=tn(Hn,jn,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(V)}catch(n){console.warn(n)}}}}).catch(t=>{throw N.create("idb-open",{originalErrorMessage:t.message})})),ae}async function Vn(t){try{const n=(await We()).transaction(V),s=await n.objectStore(V).get(Ge(t));return await n.done,s}catch(e){if(e instanceof x)T.warn(e.message);else{const n=N.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});T.warn(n.message)}}}async function Re(t,e){try{const s=(await We()).transaction(V,"readwrite");await s.objectStore(V).put(e,Ge(t)),await s.done}catch(n){if(n instanceof x)T.warn(n.message);else{const s=N.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});T.warn(s.message)}}}function Ge(t){return`${t.name}!${t.options.appId}`}/**
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
 */const zn=1024,Wn=30*24*60*60*1e3;class Gn{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qn(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Se();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(i=>i.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=Wn}),this._storage.overwrite(this._heartbeatsCache))}catch(s){T.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Se(),{heartbeatsToSend:s,unsentEntries:r}=Kn(this._heartbeatsCache.heartbeats),a=K(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return T.warn(n),""}}}function Se(){return new Date().toISOString().substring(0,10)}function Kn(t,e=zn){const n=[];let s=t.slice();for(const r of t){const a=n.find(i=>i.agent===r.agent);if(a){if(a.dates.push(r.date),Ce(n)>e){a.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ce(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class qn{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kt()?Bt().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Vn(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Re(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Re(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ce(t){return K(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Jn(t){J(new j("platform-logger",e=>new sn(e),"PRIVATE")),J(new j("heartbeat",e=>new Gn(e),"PRIVATE")),M(ue,Ae,t),M(ue,Ae,"esm2017"),M("fire-js","")}Jn("");var Yn="firebase",Xn="10.14.1";/**
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
 */M(Yn,Xn,"app");/**
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
 */const Ke="firebasestorage.googleapis.com",Zn="storageBucket",Qn=2*60*1e3,er=10*60*1e3;/**
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
 */class D extends x{constructor(e,n,s=0){super(ie(e),`Firebase Storage: ${n} (${ie(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,D.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ie(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var I;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(I||(I={}));function ie(t){return"storage/"+t}function tr(){const t="An unknown error occurred, please check the error payload for server response.";return new D(I.UNKNOWN,t)}function nr(){return new D(I.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function rr(){return new D(I.CANCELED,"User canceled the upload/download.")}function sr(t){return new D(I.INVALID_URL,"Invalid URL '"+t+"'.")}function ar(t){return new D(I.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Oe(t){return new D(I.INVALID_ARGUMENT,t)}function qe(){return new D(I.APP_DELETED,"The Firebase app was deleted.")}function ir(t){return new D(I.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class E{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=E.makeFromUrl(e,n)}catch{return new E(e,"")}if(s.path==="")return s;throw ar(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function a(h){h.path.charAt(h.path.length-1)==="/"&&(h.path_=h.path_.slice(0,-1))}const i="(/(.*))?$",o=new RegExp("^gs://"+r+i,"i"),c={bucket:1,path:3};function l(h){h.path_=decodeURIComponent(h.path)}const _="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",b=new RegExp(`^https?://${p}/${_}/b/${r}/o${f}`,"i"),w={bucket:1,path:3},k=n===Ke?"(?:storage.googleapis.com|storage.cloud.google.com)":n,m="([^?#]*)",R=new RegExp(`^https?://${k}/${r}/${m}`,"i"),y=[{regex:o,indices:c,postModify:a},{regex:b,indices:w,postModify:l},{regex:R,indices:{bucket:1,path:2},postModify:l}];for(let h=0;h<y.length;h++){const g=y[h],v=g.regex.exec(e);if(v){const S=v[g.indices.bucket];let B=v[g.indices.path];B||(B=""),s=new E(S,B),g.postModify(s);break}}if(s==null)throw sr(e);return s}}class or{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function cr(t,e,n){let s=1,r=null,a=null,i=!1,o=0;function c(){return o===2}let l=!1;function _(...m){l||(l=!0,e.apply(null,m))}function p(m){r=setTimeout(()=>{r=null,t(b,c())},m)}function f(){a&&clearTimeout(a)}function b(m,...R){if(l){f();return}if(m){f(),_.call(null,m,...R);return}if(c()||i){f(),_.call(null,m,...R);return}s<64&&(s*=2);let y;o===1?(o=2,y=0):y=(s+Math.random())*1e3,p(y)}let w=!1;function k(m){w||(w=!0,f(),!l&&(r!==null?(m||(o=2),clearTimeout(r),p(0)):m||(o=1)))}return p(0),a=setTimeout(()=>{i=!0,k(!0)},n),k}function lr(t){t(!1)}/**
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
 */function ur(t){return t!==void 0}function Ne(t,e,n,s){if(s<e)throw Oe(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Oe(`Invalid value for '${t}'. Expected ${n} or less.`)}function hr(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var Y;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Y||(Y={}));/**
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
 */function dr(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,a=e.indexOf(t)!==-1;return n||r||a}/**
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
 */class fr{constructor(e,n,s,r,a,i,o,c,l,_,p,f=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=a,this.additionalRetryCodes_=i,this.callback_=o,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=_,this.connectionFactory_=p,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,w)=>{this.resolve_=b,this.reject_=w,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new G(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const i=o=>{const c=o.loaded,l=o.lengthComputable?o.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&a.addUploadProgressListener(i),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(i),this.pendingConnection_=null;const o=a.getErrorCode()===Y.NO_ERROR,c=a.getStatus();if(!o||dr(c,this.additionalRetryCodes_)&&this.retry){const _=a.getErrorCode()===Y.ABORT;s(!1,new G(!1,null,_));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new G(l,a))})},n=(s,r)=>{const a=this.resolve_,i=this.reject_,o=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(o,o.getResponse());ur(c)?a(c):a()}catch(c){i(c)}else if(o!==null){const c=tr();c.serverResponse=o.getErrorText(),this.errorCallback_?i(this.errorCallback_(o,c)):i(c)}else if(r.canceled){const c=this.appDelete_?qe():rr();i(c)}else{const c=nr();i(c)}};this.canceled_?n(!1,new G(!1,null,!0)):this.backoffId_=cr(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&lr(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class G{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function pr(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function mr(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function _r(t,e){e&&(t["X-Firebase-GMPID"]=e)}function gr(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function br(t,e,n,s,r,a,i=!0){const o=hr(t.urlParams),c=t.url+o,l=Object.assign({},t.headers);return _r(l,e),pr(l,n),mr(l,a),gr(l,s),new fr(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,i)}/**
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
 */function vr(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Er(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class X{constructor(e,n){this._service=e,n instanceof E?this._location=n:this._location=E.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new X(e,n)}get root(){const e=new E(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Er(this._location.path)}get storage(){return this._service}get parent(){const e=vr(this._location.path);if(e===null)return null;const n=new E(this._location.bucket,e);return new X(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw ir(e)}}function ke(t,e){const n=e==null?void 0:e[Zn];return n==null?null:E.makeFromBucketSpec(n,t)}function yr(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Nt(r,t.app.options.projectId))}class Ir{constructor(e,n,s,r,a){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=a,this._bucket=null,this._host=Ke,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Qn,this._maxUploadRetryTime=er,this._requests=new Set,r!=null?this._bucket=E.makeFromBucketSpec(r,this._host):this._bucket=ke(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=E.makeFromBucketSpec(this._url,e):this._bucket=ke(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ne("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ne("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new X(this,e)}_makeRequest(e,n,s,r,a=!0){if(this._deleted)return new or(qe());{const i=br(e,this._appId,s,r,n,this._firebaseVersion,a);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Be="@firebase/storage",Pe="0.13.2";/**
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
 */const Je="storage";function Dr(t=Fn(),e){t=xt(t);const s=Mn(t,Je).getImmediate({identifier:e}),r=Ct("storage");return r&&wr(s,...r),s}function wr(t,e,n,s={}){yr(t,e,n,s)}function Ar(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Ir(n,s,r,e,Un)}function Tr(){J(new j(Je,Ar,"PUBLIC").setMultipleInstances(!0)),M(Be,Pe,""),M(Be,Pe,"esm2017")}Tr();const Rr={apiKey:"AIzaSyD-bgH7w81Tth31Kosd7OSoLlUANWE2JAc",authDomain:"register-test-62721.firebaseapp.com",projectId:"register-test-62721",storageBucket:"register-test-62721.appspot.com",messagingSenderId:"362771793802",appId:"1:362771793802:web:ace071d13099eaba43ea73",measurementId:"G-XDXVGRQKVW"},Sr=ze(Rr);Dr(Sr);var Cr=fe("<p> </p> <p> </p> <p> </p> <p> </p> <br>",1),Or=fe("<option> </option>"),Nr=fe('<main class="svelte-16jbu8v"><!> <div class="container svelte-16jbu8v"><div></div> <h1 class="svelte-16jbu8v">Registrering</h1> <form><label for="username" class="svelte-16jbu8v">Användarnamn</label> <input name="username" id="username" type="text" required class="svelte-16jbu8v"> <label for="password" class="svelte-16jbu8v">Lösenord</label> <input id="password" type="password" class="svelte-16jbu8v"> <label for="email" class="svelte-16jbu8v">Email</label> <input id="email" type="email" class="svelte-16jbu8v"> <label for="hair" class="svelte-16jbu8v">Favoritfärg</label> <select id="hair"></select> <br> <input type="submit" value="Registrera" class="reg svelte-16jbu8v"></form> <a href="/login">Har du redan ett konto? Logga in</a></div></main>');function Kr(t,e){Qe(e,!1);const n=ft(),s=()=>be(mt,"$currentUser_store",n),r=()=>be(ve,"$users_store",n),a=W();let i=W(""),o=W("blue"),c=[{color:"blue",namn:"Blå"},{color:"red",namn:"Röd"},{color:"green",namn:"Grön"},{color:"yellow",namn:"Gul"},{color:"purple",namn:"Lila"},{color:"pink",namn:"Rosa"},{color:"orange",namn:"Orange"},{color:"brown",namn:"Brun"},{color:"black",namn:"Svart"}],l=W([]),_;_t(()=>{r().length>2&&U(l,JSON.parse(r())),d(a).length>2&&(_=JSON.parse(d(a)),console.log("user",_))});function p(){if(console.log(d(l)),d(l).filter(h=>h.username===d(i)&&h.username.length===d(i).length).length>0)alert("Användarnamnet är upptaget");else{let h={username:d(i),password:document.getElementById("password").value,email:document.getElementById("email").value,color:d(o)};U(l,[...d(l),h]),pt(ve,JSON.stringify(d(l)))}}et(()=>s(),()=>{U(a,s())}),tt(),dt();var f=Nr(),b=C(f);_e(b,1,()=>d(l),ge,(h,g)=>{var v=Cr(),S=rt(v),B=C(S,!0);A(S);var Z=P(S,2),Ye=C(Z,!0);A(Z);var Q=P(Z,2),Xe=C(Q,!0);A(Q);var me=P(Q,2),Ze=C(me,!0);A(me),ee(2),z(()=>{F(B,d(g).username),F(Ye,d(g).password),F(Xe,d(g).email),F(Ze,d(g).color)}),te(h,v)});var k=P(b,2),m=C(k),R=P(m,4),L=P(C(R),2);at(L);var y=P(L,12);z(()=>{d(o),st(()=>{})}),_e(y,5,()=>c,ge,(h,g)=>{var v=Or(),S={},B=C(v,!0);A(v),z(()=>{S!==(S=d(g).color)&&(v.value=(v.__value=d(g).color)==null?"":d(g).color),F(B,d(g).namn)}),te(h,v)}),A(y),ee(4),A(R),ee(2),A(k),A(f),z(()=>it(m,"style",`width: 100px; height: 100px; border-radius: 50%; overflow:hidden; background-color:${d(o)??""};`)),lt(L,()=>d(i),h=>U(i,h)),bt(y,()=>d(o),h=>U(o,h)),ct("submit",R,ht(p)),te(t,f),nt()}export{Kr as component};
