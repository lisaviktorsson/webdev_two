import"../chunks/disclose-version.Bg9kRutz.js";import"../chunks/legacy.kkaBD5aU.js";import{p as q,aC as D,a as L,Q as _,T as a,aB as b,s as p,c as n,aD as y,r as o,t as M}from"../chunks/runtime.D7Wnj0fX.js";import{s as $}from"../chunks/render.smxQznNC.js";import{e as z,i as E}from"../chunks/each.Btqh4Es0.js";import{a as f,t as d}from"../chunks/template.CvXheLdW.js";import{h as O}from"../chunks/svelte-head.CfOCrEO5.js";import{r as P}from"../chunks/attributes.BP_BnRfz.js";import{f as S}from"../chunks/events.DtDyvcPQ.js";import{a as T}from"../chunks/input.DjNZgpxg.js";import{p as U}from"../chunks/event-modifiers.CWmzcjye.js";import{i as B}from"../chunks/lifecycle.CL8LSRxO.js";import{o as C}from"../chunks/index-client.BXWsId-j.js";async function J({}){return{firstName:"John",password:"Doe"}}const te=Object.freeze(Object.defineProperty({__proto__:null,load:J},Symbol.toStringTag,{value:"Module"}));var N=d(`<link rel="stylesheet" href="/pico.min.css"> <style>nav {
      margin-left: 10%;
      margin-right: 10%;
    }</style>`,1),Q=d("<li> </li>"),R=d('<main><h1 class="svelte-gqd95k">Random Users</h1> <ul></ul></main> <h1 class="svelte-gqd95k">Login</h1> <form><div><label for="username">Username</label> <input id="username" name="username" type="text" required></div> <div><label for="password">Password</label> <input id="password" name="password" type="password"></div> <button type="submit">Login</button></form>',1);function re(w,x){q(x,!1);let u=[],i=y([]);C(async()=>{try{u=await(await fetch("https://random-data-api.com/api/v2/users?size=100&response_type=json")).json(),u.forEach(t=>{t.gender=="Male"&&_(i,[...a(i),t])})}catch(e){console.error("Error fetching data:",e)}});let r=y("");function j(){a(r)!=""&&(a(i).filter(e=>e.first_name===a(r)).length>0?alert("Welcome back "+a(r)):alert(""))}B();var c=R();O(e=>{var s=N();b(2),f(e,s)});var m=D(c),v=p(n(m),2);z(v,5,()=>a(i),E,(e,s)=>{var t=Q(),k=n(t);o(t),M(()=>$(k,`${a(s).first_name??""}+${a(s).gender??""}`)),f(e,t)}),o(v),o(m);var l=p(m,4),h=n(l),g=p(n(h),2);P(g),o(h),b(4),o(l),T(g,()=>a(r),e=>_(r,e)),S("submit",l,U(j)),f(w,c),L()}export{re as component,te as universal};
