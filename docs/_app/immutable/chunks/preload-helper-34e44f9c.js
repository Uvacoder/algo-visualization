let l="",d="";function p(r){l=r.base,d=r.assets||l}const f=function(){const s=document.createElement("link").relList;return s&&s.supports&&s.supports("modulepreload")?"modulepreload":"preload"}(),m=function(r){return"/algo-visualization/"+r},i={},E=function(s,o,h){return!o||o.length===0?s():Promise.all(o.map(e=>{if(e=m(e),e in i)return;i[e]=!0;const n=e.endsWith(".css"),a=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const t=document.createElement("link");if(t.rel=n?"stylesheet":f,n||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),n)return new Promise((c,u)=>{t.addEventListener("load",c),t.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>s())};export{E as _,d as a,l as b,p as s};