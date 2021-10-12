/* import du menuYT */
import { menuGlissant } from "./menuYT.js";


/* =============== menu principal smartphone */
import { menuhamb } from "./menusHamb.js";
menuhamb();

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
/* ===============gestion des Iframes YT============================= */
menuGlissant("#hamburger", ".menuGliss", ".liens li");
/* selection des ancres , puis fonction pour fermer le menu quand on selectionne une ancre */

