import{S as C,i as H,s as P,k,q as v,a as O,l as L,m as T,r as E,h as p,c as R,n as M,b as d,D as g,E as q,u as z,L as y,I as Q,o as U,p as m,Q as B}from"../chunks/index.562aea48.js";function D(a,e,n){const f=a.slice();return f[8]=e[n].letter,f[9]=e[n].top,f[10]=e[n].left,f[11]=e[n].ani,f[13]=n,f}function N(a){let e,n=a[8]+"",f,o,i,u;function _(){return a[4](a[8],a[13])}return{c(){e=k("button"),f=v(n),o=O(),this.h()},l(c){e=L(c,"BUTTON",{style:!0,class:!0});var l=T(e);f=E(l,n),o=R(l),l.forEach(p),this.h()},h(){m(e,"position","sticky"),m(e,"top",a[9]+"%"),m(e,"left",a[10]+"%"),M(e,"class","svelte-159r2j4"),B(e,"ani",a[11])},m(c,l){d(c,e,l),g(e,f),g(e,o),i||(u=q(e,"click",_),i=!0)},p(c,l){a=c,l&1&&n!==(n=a[8]+"")&&z(f,n),l&1&&m(e,"top",a[9]+"%"),l&1&&m(e,"left",a[10]+"%"),l&1&&B(e,"ani",a[11])},d(c){c&&p(e),i=!1,u()}}}function V(a){let e,n,f,o,i,u,_,c=a[0],l=[];for(let s=0;s<c.length;s+=1)l[s]=N(D(a,c,s));return{c(){e=k("button"),n=v("Logga in som "),f=v(a[1]),o=O(),i=k("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=L(s,"BUTTON",{class:!0});var r=T(e);n=E(r,"Logga in som "),f=E(r,a[1]),r.forEach(p),o=R(s),i=L(s,"DIV",{class:!0});var t=T(i);for(let h=0;h<l.length;h+=1)l[h].l(t);t.forEach(p),this.h()},h(){M(e,"class","login svelte-159r2j4"),M(i,"class","container svelte-159r2j4")},m(s,r){d(s,e,r),g(e,n),g(e,f),d(s,o,r),d(s,i,r);for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(i,null);u||(_=q(e,"click",a[3]),u=!0)},p(s,[r]){if(r&2&&z(f,s[1]),r&5){c=s[0];let t;for(t=0;t<c.length;t+=1){const h=D(s,c,t);l[t]?l[t].p(h,r):(l[t]=N(h),l[t].c(),l[t].m(i,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=c.length}},i:y,o:y,d(s){s&&p(e),s&&p(o),s&&p(i),Q(l,s),u=!1,_()}}}let W=100,w=100;function A(a,e,n){let f="ABCDEFGHIJKLMNOPQRSTVWXYZ<".split(""),o=[],i="";function u(r){let t,h,I,S,j=0;t=W*Math.random(),I=o.filter(b=>Math.abs(b.left-t)<10);do j++,h=w*Math.random(),S=I.filter(b=>Math.abs(b.top-h)<5);while(S.length>0&&j<10);return{letter:r,top:h,left:t,ani:!1}}function _(){n(0,o=[]);for(let r of f)o.push(u(r))}U(()=>{_(),console.log(o),setInterval(()=>{_()},3e3)});function c(r,t){if(r==="<"){n(1,i=i.substring(0,i.length-1));return}n(1,i+=r),n(0,o[t]=u(r),o),n(0,o[t].ani=!0,o),n(0,o),setTimeout(()=>{n(0,o[t].ani=!1,o)},1e3)}return[o,i,c,()=>{alert(i!=""?"logged in as "+i:"Enter username!")},(r,t)=>c(r,t)]}class G extends C{constructor(e){super(),H(this,e,A,V,P,{})}}export{G as component};
