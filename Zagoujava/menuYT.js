/* fonction toggle effacer la video ou non */
const tog_fantom = () => {
  const bascule = document.querySelector(".bascule");
  const fantom = document.querySelector(".videoCadre");
  bascule.addEventListener("click", () => {
    fantom.style.display = fantom.style.display === "none" ? "block" : "none";
    fantom.style.display === "none"
      ? bascule.classList.add("actif")
      : bascule.classList.remove("actif");
  });
};
/* -------Ecoute des clicks sur les items de menu et fermeture puis affichage video */
const fermerAncres = (nav, items, titre) => {
  items.forEach((a) => {
    a.addEventListener("click", () => {
      /* fermer le menu */
      nav.classList.remove("nav--open");
      /* Souligner en jaune la video sur la liste */
      /* si Dataset existe, afficher sous titre et video et choisi */
      if (a.dataset.id) {
        a.classList.add("choisi");
        titre.innerHTML = a.innerHTML;
        affVideo(a.dataset.id, a.dataset.ec);
      }
      tog_fantom();
    });
  });
};
/* --------fonction pour gerer les menus glissants et afficher les videos si data existe---- */
function menuGlissant(hamburger) {
  const titreMenu = document.querySelector("#choixMenu");
  const nav = document.querySelector(hamburger.menu);
  const ancres = [...document.querySelectorAll(hamburger.liens)];
  const bout = document.querySelector(hamburger.bouton);

  /* --------gere le preload -----*/
  //  window.addEventListener("load", () => {
  //    document.body.classList.remove("preload");
  //  });
  /* quand le document est lancé, cliquer sur le bouton fait apparaitre le menu */
  // document.addEventListener("DOMContentLoaded", () => {
  bout.addEventListener("click", () => {
    if (document.querySelector(".videoCadre")) {
      document.querySelector(".videoCadre").style.display = "block";
    }
    nav.classList.add("nav--open");
    bout.classList.add("actif");
  });
  // });
  /* cliquer sur l'overlay ferme le menu */
  document.querySelector(`${hamburger.menu} .overlay`).addEventListener("click", () => {
    nav.classList.remove("nav--open");
    /* si on a dejà choisi une video, le bouton reste actif, sinon non */
    if ([...document.querySelectorAll(".choisi")].length === 0) {
      bout.classList.remove("actif");
    }
  });
  /* cliquer sur une ancre ferme le menu  et ouvre la page ou la video*/
  fermerAncres(nav, ancres, titreMenu);
}

/* afficher une video Youtube avec le video_id= ID */
function affVideo(id, ec) {
  let larg = ec === "43" ? "larg43" : "larg169";
  let l = ec === "43" ? "l43" : "l169";

  document.querySelector(".central").innerHTML = "";
  document.querySelector(".central").insertAdjacentHTML(
    "beforeend",
    ` <div class="${larg}">
  <div class="${l} videoCadre">
  <iframe
  class="lect"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen=""
  sandbox="allow-scripts allow-same-origin"
  src="https://www.youtube-nocookie.com/embed/${id}?rel=0&amp;modestbranding=1"
></iframe>
</div>
</div>`
  );
}
/* exporter */
export { menuGlissant, tog_fantom };
