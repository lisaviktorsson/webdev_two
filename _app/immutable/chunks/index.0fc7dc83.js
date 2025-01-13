import{c as x}from"./index.40b40403.js";import{af as _,ag as f}from"./index.562aea48.js";function U(t,{delay:o=0,duration:s=400,easing:n=_}={}){const a=+getComputedStyle(t).opacity;return{delay:o,duration:s,easing:n,css:c=>`opacity: ${c*a}`}}function V(t,{delay:o=0,duration:s=400,easing:n=x,x:a=0,y:c=0,opacity:y=0}={}){const r=getComputedStyle(t),e=+r.opacity,p=r.transform==="none"?"":r.transform,u=e*(1-y),[m,l]=f(a),[$,d]=f(c);return{delay:o,duration:s,easing:n,css:(i,g)=>`
			transform: ${p} translate(${(1-i)*m}${l}, ${(1-i)*$}${d});
			opacity: ${e-u*g}`}}export{U as a,V as f};
