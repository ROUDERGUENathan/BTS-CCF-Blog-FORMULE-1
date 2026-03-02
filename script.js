let currentLang = localStorage.getItem("lang") || "fr";
document.documentElement.lang = currentLang;

function applyLanguage(){
document.querySelectorAll("[data-fr]").forEach(el=>{
el.textContent = el.getAttribute("data-"+currentLang);
});
}

function toggleLanguage(){
currentLang = currentLang === "fr" ? "en" : "fr";
localStorage.setItem("lang", currentLang);
document.documentElement.lang = currentLang;
applyLanguage();
}

window.addEventListener("DOMContentLoaded", applyLanguage);
