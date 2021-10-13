/* import du menuYT */
import { menuGlissant } from "./menuYT.js";

/* bascule Iframe YT vers image de fond */
const bascule = document.querySelector(".bascule");
const fantom = document.querySelector(".videoCadre");
bascule.addEventListener("click", () => {
  fantom.style.display = fantom.style.display === "none" ? "block" : "none";
  if (fantom.style.display === "none") {
    bascule.classList.add("actif");
  } else {
    bascule.classList.remove("actif");
  }
});

/*  si menu principal smartphones, gerer le menu glissant */
menuGlissant(".hamb", ".menu", ".lienMenuPrinc li");
/* menu pour les  videos des playLists*/
menuGlissant("#hamburger", ".menuGliss", ".liens li");
