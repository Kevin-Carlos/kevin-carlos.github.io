import{b as m,c as s,e as a}from"/build/_shared/chunk-FOGSAFZ3.js";a();var e=m(s()),c=()=>{let[d,t]=(0,e.useState)("dark"),r=(0,e.useCallback)(o=>{o==="dark"?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark"),t("dark")):o==="light"&&(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"),t("light"))},[]);return(0,e.useEffect)(()=>{localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.classList.add("dark"),t("dark")):(document.documentElement.classList.remove("dark"),t("light"))},[]),[d,r]};a();export{c as a};
