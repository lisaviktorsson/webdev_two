import{S as ee,i as te,s as se,k as y,a as S,q as B,l as P,m as A,c as I,r as H,h as i,n as v,b as R,D as l,V,E as W,W as le,L as X,I as re,R as ae,J as Y,o as ne,u as C,K as oe}from"../chunks/index.562aea48.js";import{u as ue,c as Z}from"../chunks/register.95951ceb.js";function x(o,r,f){const a=o.slice();return a[3]=r[f],a}function $(o){let r,f=o[3].username+"",a,b,w,E=o[3].password+"",t,_,m,h=o[3].email+"",p,U,g,c=o[3].color+"",O,L,q;return{c(){r=y("p"),a=B(f),b=S(),w=y("p"),t=B(E),_=S(),m=y("p"),p=B(h),U=S(),g=y("p"),O=B(c),L=S(),q=y("br")},l(e){r=P(e,"P",{});var u=A(r);a=H(u,f),u.forEach(i),b=I(e),w=P(e,"P",{});var J=A(w);t=H(J,E),J.forEach(i),_=I(e),m=P(e,"P",{});var M=A(m);p=H(M,h),M.forEach(i),U=I(e),g=P(e,"P",{});var T=A(g);O=H(T,c),T.forEach(i),L=I(e),q=P(e,"BR",{})},m(e,u){R(e,r,u),l(r,a),R(e,b,u),R(e,w,u),l(w,t),R(e,_,u),R(e,m,u),l(m,p),R(e,U,u),R(e,g,u),l(g,O),R(e,L,u),R(e,q,u)},p(e,u){u&4&&f!==(f=e[3].username+"")&&C(a,f),u&4&&E!==(E=e[3].password+"")&&C(t,E),u&4&&h!==(h=e[3].email+"")&&C(p,h),u&4&&c!==(c=e[3].color+"")&&C(O,c)},d(e){e&&i(r),e&&i(b),e&&i(w),e&&i(_),e&&i(m),e&&i(U),e&&i(g),e&&i(L),e&&i(q)}}}function ie(o){let r,f,a,b,w,E,t,_,m,h,p,U,g,c,O,L,q,e,u,J,M,T,j,D=o[2],d=[];for(let n=0;n<D.length;n+=1)d[n]=$(x(o,D,n));return{c(){r=y("main");for(let n=0;n<d.length;n+=1)d[n].c();f=S(),a=y("div"),b=y("h1"),w=B("Login"),E=S(),t=y("form"),_=y("label"),m=B("Användarnamn"),h=S(),p=y("input"),U=S(),g=y("label"),c=B("Lösenord"),O=S(),L=y("input"),q=S(),e=y("input"),u=S(),J=y("a"),M=B("Har du inget konto? Registrera dig"),this.h()},l(n){r=P(n,"MAIN",{class:!0});var N=A(r);for(let K=0;K<d.length;K+=1)d[K].l(N);f=I(N),a=P(N,"DIV",{class:!0});var s=A(a);b=P(s,"H1",{class:!0});var F=A(b);w=H(F,"Login"),F.forEach(i),E=I(s),t=P(s,"FORM",{});var k=A(t);_=P(k,"LABEL",{for:!0,class:!0});var z=A(_);m=H(z,"Användarnamn"),z.forEach(i),h=I(k),p=P(k,"INPUT",{name:!0,id:!0,type:!0,class:!0}),U=I(k),g=P(k,"LABEL",{for:!0,class:!0});var G=A(g);c=H(G,"Lösenord"),G.forEach(i),O=I(k),L=P(k,"INPUT",{id:!0,type:!0,class:!0}),q=I(k),e=P(k,"INPUT",{type:!0,class:!0}),k.forEach(i),u=I(s),J=P(s,"A",{href:!0});var Q=A(J);M=H(Q,"Har du inget konto? Registrera dig"),Q.forEach(i),s.forEach(i),N.forEach(i),this.h()},h(){v(b,"class","svelte-1xd8gs1"),v(_,"for","username"),v(_,"class","svelte-1xd8gs1"),v(p,"name","username"),v(p,"id","username"),v(p,"type","text"),p.required=!0,v(p,"class","svelte-1xd8gs1"),v(g,"for","password"),v(g,"class","svelte-1xd8gs1"),v(L,"id","password"),v(L,"type","password"),v(L,"class","svelte-1xd8gs1"),v(e,"type","submit"),e.value="Logga in",v(e,"class","reg svelte-1xd8gs1"),v(J,"href","/registrering"),v(a,"class","container svelte-1xd8gs1"),v(r,"class","svelte-1xd8gs1")},m(n,N){R(n,r,N);for(let s=0;s<d.length;s+=1)d[s]&&d[s].m(r,null);l(r,f),l(r,a),l(a,b),l(b,w),l(a,E),l(a,t),l(t,_),l(_,m),l(t,h),l(t,p),V(p,o[0]),l(t,U),l(t,g),l(g,c),l(t,O),l(t,L),V(L,o[1]),l(t,q),l(t,e),l(a,u),l(a,J),l(J,M),T||(j=[W(p,"input",o[7]),W(L,"input",o[8]),W(t,"submit",le(o[4]))],T=!0)},p(n,[N]){if(N&4){D=n[2];let s;for(s=0;s<D.length;s+=1){const F=x(n,D,s);d[s]?d[s].p(F,N):(d[s]=$(F),d[s].c(),d[s].m(r,f))}for(;s<d.length;s+=1)d[s].d(1);d.length=D.length}N&1&&p.value!==n[0]&&V(p,n[0]),N&2&&L.value!==n[1]&&V(L,n[1])},i:X,o:X,d(n){n&&i(r),re(d,n),T=!1,ae(j)}}}function fe(o,r,f){let a,b,w,E;Y(o,ue,c=>f(5,w=c)),Y(o,Z,c=>f(6,E=c));let t="",_="",m=[],h;ne(()=>{console.log("onmount"),a.length>2&&(f(2,m=JSON.parse(a)),console.log(m)),b.length>2&&(f(3,h=JSON.parse(b)),console.log("user",h))});function p(){console.log(m,t,_),m.filter(c=>c.username===t&&c.password===_).length>0?(f(3,h=m.filter(c=>c.username===t)[0]),oe(Z,E=JSON.stringify(h),E),console.log(h),location.reload()):alert("Fel användarnamn eller lösenord")}function U(){t=this.value,f(0,t)}function g(){_=this.value,f(1,_)}return o.$$.update=()=>{o.$$.dirty&32&&(a=w),o.$$.dirty&64&&(b=E)},[t,_,m,h,p,w,E,U,g]}class ce extends ee{constructor(r){super(),te(this,r,fe,ie,se,{})}}export{ce as component};
