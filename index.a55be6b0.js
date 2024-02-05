const e=document.querySelector(".btn--roll"),t=document.querySelector(".dice");let n=0;e.addEventListener("click",(function(){const e=Math.floor(6*Math.random())+1;r=e,t.textContent=r,t.classList.remove("hidden"),function(e){1===e&&(n=1);currentPlayerValue+=e,document.querySelector(`#current--${n}`).textContent=currentPlayerValue}(e);var r}));
//# sourceMappingURL=index.a55be6b0.js.map
