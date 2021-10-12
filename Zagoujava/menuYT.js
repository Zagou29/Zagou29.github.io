/* --------fonction pour gerer les menus glissants et afficher les videos si data existe---- */
function menuGlissant(bouton, menu, liens) {
  const titreMenu = document.querySelector("#choixMenu");
  const nav = document.querySelector(menu);
  const ancres = Array.from(document.querySelectorAll(liens));
  const bout = document.querySelector(bouton);
  let fermerAncres = (menu) => {
    ancres.forEach((a) => {
      a.addEventListener("click", () => {
        /* fermer le menu */
        menu.classList.remove("nav--open");
        /* Souligner en jaune la video sur la liste */
        a.classList.add("choisi");
        /* si Dataset existe, afficher sous titre et video */
        if (a.dataset.id) {
          titreMenu.innerHTML = a.innerHTML;
          affVideo(a.dataset.id);
        }
      });
    });
  };
  /* --------gere le preload -----*/
  window.addEventListener("load", () => {
    document.body.classList.remove("preload");
  });
  /* quand le document est lancé, cliquer sur le bouton fait apparaitre le menu */
  document.addEventListener("DOMContentLoaded", () => {
    bout.addEventListener("click", () => {
      nav.classList.add("nav--open");
    });
    /* cliquer sur l'overlay ferme le menu */
    document.querySelector(".overlay").addEventListener("click", () => {
      nav.classList.remove("nav--open");
    });
    /* cliquer sur une ancre ferme le menu */
    fermerAncres(nav);
  });
}

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
/* exporter */
export { menuGlissant };
