const o=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");e.disabled=!0,o.addEventListener("click",(function(){o.disabled=!0,e.disabled=!1;const t=document.body;changeColor=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),console.log("Start change color")})),e.addEventListener("click",(function(){o.disabled=!1,e.disabled=!0,clearInterval(changeColor),console.log("Stop change color")}));
//# sourceMappingURL=01-color-switcher.1f658a6f.js.map
