import{d as C,e as f,m as b}from"/build/_shared/chunk-KZP2U325.js";import"/build/_shared/chunk-YUKHGJXU.js";import"/build/_shared/chunk-TR6XEMTR.js";import"/build/_shared/chunk-B6TYS4GM.js";import{b as u,d as x,e,f as r}from"/build/_shared/chunk-YEUHU3IX.js";r();r();r();r();var n=u(x());r();r();var m=({className:t,children:o})=>e.createElement("div",{className:C([t,"flex","items-center","justify-center","p-4"])},o);r();var B=()=>e.createElement("div",{className:"absolute top-0 bottom-0 left-0 right-0  bg-theme-black bg-opacity-70 backdrop-blur-sm z-10 rounded-sm"}),l=({children:t})=>e.createElement("div",{role:"dialog",className:"absolute top-0 bottom-0 left-0 right-0"},e.createElement(B,null),e.createElement("div",{className:"relative h-full w-full"},e.createElement("div",{className:"absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center z-20"},e.createElement("span",{className:"text-theme-white"},t))));r();var s=({children:t})=>e.createElement("li",{className:"relative border-2 rounded-md border-theme-dteal p-5"},t);var y=t=>{let o=t.length,a;for(;o!=0;)a=Math.floor(Math.random()*o),o--,[t[o],t[a]]=[t[a],t[o]];return t},T=()=>{let t=["mythical"];for(let o=0;o<20;o++)t.push("legendary");for(let o=0;o<106;o++)t.push("epic");for(let o=0;o<380;o++)t.push("rare");for(let o=0;o<2e3-380-106-20-1;o++)t.push("common");return y(t)},h=()=>{let[t,o]=(0,n.useState)([]);(0,n.useEffect)(()=>{let i=T();o(i)},[]);let[a,d]=(0,n.useState)(void 0),c=()=>{let i=Math.floor(Math.random()*2e3),I=t[i];d(I)};return(0,n.useEffect)(()=>{a&&setTimeout(()=>{d(void 0)},2*1e3)},[a]),e.createElement(s,null,e.createElement("h1",{className:"mb-5 text-2xl"},"Naive Bag Implementation Box"),e.createElement("div",{className:"grid grid-cols-2 mb-5"},e.createElement(m,{className:"bg-theme-orange"},"Mythical (0.05%)"),e.createElement("div",{className:"grid grid-rows-4"},e.createElement(m,{className:"bg-theme-blue row-span-2"},"Legendary (1%)"),e.createElement(m,{className:"bg-theme-lteal2"},"Epic (5.3%)"),e.createElement("div",{className:"grid grid-cols-2"},e.createElement(m,{className:"dark:bg-theme-dgray bg-theme-lgray"},"Rare (19%)"),e.createElement(m,{className:"dark:bg-theme-dteal bg-theme-lteal"},"Common (74.65%)")))),e.createElement("div",null,e.createElement(f,{className:"bg-theme-lteal hover:bg-theme-lteal2 w-full",onClick:c},"Open")),a?e.createElement(l,null,a.toLocaleUpperCase()):null)};r();var g=u(x());r();var v=t=>{let o=0,a=Math.random();for(let d in t)if(o+=t[d]/100,a<=o)return d};var w={common:74,rare:19,epic:5.3,legendary:1.3,mythical:.4},p=()=>{let[t,o]=(0,g.useState)(void 0),a=()=>{o(v(w))};return(0,g.useEffect)(()=>{t&&setTimeout(()=>{o(void 0)},2*1e3)},[t]),e.createElement(s,null,e.createElement("h1",{className:"mb-5 text-2xl"},"Weighted-Random Box"),e.createElement("div",{className:"grid grid-cols-2 mb-5"},e.createElement(m,{className:"bg-theme-orange"},"Mythical (0.4%)"),e.createElement("div",{className:"grid grid-rows-4"},e.createElement(m,{className:"bg-theme-blue row-span-2"},"Legendary (1.3%)"),e.createElement(m,{className:"bg-theme-lteal2"},"Epic (5.3%)"),e.createElement("div",{className:"grid grid-cols-2"},e.createElement(m,{className:"dark:bg-theme-dgray bg-theme-lgray"},"Rare (19%)"),e.createElement(m,{className:"dark:bg-theme-dteal bg-theme-lteal"},"Common (74%)")))),e.createElement("div",null,e.createElement(f,{className:"bg-theme-lteal hover:bg-theme-lteal2 w-full",onClick:a},"Open")),t?e.createElement(l,null,t.toLocaleUpperCase()):null)};function N(){return e.createElement(b,null,e.createElement("div",{className:"h-full w-full flex justify-center items-center"},e.createElement("ul",{className:"dark:text-theme-white grid gap-5 md:grid-cols-2"},e.createElement(p,null),e.createElement(h,null))))}export{N as default};
