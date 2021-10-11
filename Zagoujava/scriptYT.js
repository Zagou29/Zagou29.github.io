/* =============== menu principal smartphone */
import { menuhamb } from "./menusHamb.js";
menuhamb()


/* bascule Iframe YT vers image de fond */
const bascule = document.querySelector(".bascule");
const fantom = document.querySelector(".videoCadre");
bascule.addEventListener("click", () => {
  fantom.style.display = fantom.style.display === "none" ? "block" : "none";
  if (fantom.style.display === "none") {
    bascule.classList.add("actif")
  } else {
    bascule.classList.remove("actif")
  }
});
/* ===============gestion des Iframes YT============================= */
/* selection des ancres , puis fonction pour fermer le menu quand on selectionne une ancre */
const ancres = Array.from(document.querySelectorAll(".liens li"));
const titreMenu = document.querySelector("#choixMenu");
let fermerAncres = (nav) => {
  ancres.forEach((a) => {
    a.addEventListener("click", () => {
      nav.classList.remove("nav--open"); /* fermer le menu */
      a.classList.add("choisi"); /* Sélectionner la video sur la liste */
      if(a.dataset.id) /* si Dataset non nul, affihcer sous titre et video */
      titreMenu.innerHTML = a.innerHTML; /* afficher le menu dans l'entete */
     { affVideo(a.dataset.id);} /* afficher la video */
    });
  });
};
/* gere le preload */
window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});
/* quand le document est lancé, cliquer sur le hamburger fait apparaitre le menu */
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".menuGliss");

  document.querySelector("#hamburger").addEventListener("click", () => {
    nav.classList.add("nav--open");
  });
  /* cliquer sur l'overlay ferme le menu */
  document.querySelector(".overlay").addEventListener("click", () => {
    nav.classList.remove("nav--open");
  });
  /* cliquer sur une ancre ferme le menu */
  fermerAncres(nav);
});
/* afficher une video Youtube avec le video_id= ID */
function affVideo(id) {
  document.querySelector(".videoCadre").innerHTML = ` <iframe
  class="lect"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen=""
  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
  src="https://www.youtube-nocookie.com/embed/${id}?rel=0&amp;modestbranding=1"
></iframe>`;
}
/* fonction pour afficher une play List YouTube */
function affPlay(id) {
  document.querySelector(".videoCadre").innerHTML = ` <iframe
  class="lect"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen=""
  sandbox="allow-forms  allow-scripts allow-pointer-lock  allow-same-origin allow-top-navigation"
  src="https://www.youtube-nocookie.com/embed/videoseries?list=${id}&amp;rel=0&amp;modestbranding=1"
  ></iframe>`;
}
