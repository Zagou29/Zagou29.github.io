/* fonction toggle effacer la video ou non */
const tog_fantom = () => {
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
function menuGlissant(bouton, menu, liens) {
  const titreMenu = document.querySelector("#choixMenu");
  const nav = document.querySelector(menu);
  const ancres = [...document.querySelectorAll(liens)];
  const bout = document.querySelector(bouton);

  /* --------gere le preload -----*/
  window.addEventListener("load", () => {
    document.body.classList.remove("preload");
  });
  /* quand le document est lancé, cliquer sur le bouton fait apparaitre le menu */
  document.addEventListener("DOMContentLoaded", () => {
    bout.addEventListener("click", () => {
      if (document.querySelector(".videoCadre")) {
        document.querySelector(".videoCadre").style.display = "block";
      }
      nav.classList.add("nav--open");
      bout.classList.add("actif");
    });
  });
  /* cliquer sur l'overlay ferme le menu */
  document.querySelector(`${menu} .overlay`).addEventListener("click", () => {
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
  let larg = "larg169";
  let l = "l169";
  if (ec === "43") {
    larg = "larg43";
    l = "l43";
  }
  document.querySelector(".central").innerHTML = ` <div class="${larg}">
  <div class="${l} videoCadre">
  <iframe
  class="lect"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen=""
  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
  src="https://www.youtube-nocookie.com/embed/${id}?rel=0&amp;modestbranding=1"
></iframe>
</div>
</div>`;
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
/* exporter */
export { menuGlissant, tog_fantom };
