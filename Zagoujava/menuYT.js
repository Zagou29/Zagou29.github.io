/* --------fonction pour gerer les menus glissants et afficher les videos si data existe---- */
function menuGlissant(bouton, menu, liens) {
  const titreMenu = document.querySelector("#choixMenu");
  const nav = document.querySelector(menu);
  const ancres = [... document.querySelectorAll(liens)];
  const bout = document.querySelector(bouton);
  let fermerAncres = (menu) => {
    ancres.forEach((a) => {
      a.addEventListener("click", () => {
        /* fermer le menu */
        menu.classList.remove("nav--open");
        /* Souligner en jaune la video sur la liste */
        /* si Dataset existe, afficher sous titre et video et choisi */
        if (a.dataset.id) {
          a.classList.add("choisi");
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
      bout.classList.add("actif")
    });
    /* cliquer sur l'overlay ferme le menu */
    
    document.querySelector(`${menu} .overlay`).addEventListener("click", () => {
      nav.classList.remove("nav--open");
      /* si on a dejà choisi une video, le bouton reste actif, sinon non */
      if([... document.querySelectorAll(".choisi")].length ===0)
      {bout.classList.remove("actif")}
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
