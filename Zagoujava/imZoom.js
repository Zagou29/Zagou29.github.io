import { menuGlissant } from "./menuYT.js";
/* -------------------------------------------------------- */
const fix_men = document.querySelector(".fixmenu");
const entete = document.querySelector(".entete");
const fleches = document.querySelectorAll(".fleches");
const full = document.querySelector(".fullscreen");
const pied = document.querySelector(".pied");
const fix_fond = document.querySelector(".sided");
const boiteImg = document.querySelector(".image");
const tab = document.querySelectorAll(".image img");
const stop_prec = document.querySelector(".prec");
const stop_suiv= document.querySelector(".suiv");
/* --------------------------------------------- */
/* Zoom quand on clicke sur une image en changeant les classes */
let zoome = false;
const zoom = (e) => {
  zoome = zoome === true ? false : true;
  /* revenir en mode normal si on est en fullscreen +retour iamges */
  stop_fullScreen();
  /* passer les bandeaux entete, menu et footer en dessous */
  fix_men.classList.toggle("fixmenu_sous");
  entete.classList.toggle("entete_sous");
  pied.classList.toggle("pied_sous");
  fleches.forEach((fl) => fl.classList.toggle("show_grid"));
  /* montrer les fleche f pour fullscreen */
  const alert = () => full.classList.remove("show_grid");
  if (zoome) {
    full.classList.add("show_grid");
    setTimeout(alert, 5000);
  }

  /* ramener toutes les images en plein ecran et definelemnt horizontal */
  boiteImg.classList.toggle("image_mod");
  fix_fond.classList.toggle("just_mod");
  /* pointer sur l'image sur laquelle on a cliqué */
  boiteImg.scrollTo({
    left: e.target.x,
  });
  /* rajouter le stop au debut et la la fin des images */
  boiteImg.addEventListener("scroll", () => {
    if (boiteImg.scrollLeft === 0) stop_prec.classList.add("show");
    else {
      stop_prec.classList.remove("show");
    }
    if (boiteImg.scrollLeft === (boiteImg.scrollWidth-boiteImg.offsetWidth)) stop_suiv.classList.add("show");
    else {
      stop_suiv.classList.remove("show");
    }
    
  });
};

/* --------------------------------------------- */
/* cliquer sur av et ar pour passer d'une image a une autre à la souris*/
const av_ar = () => {
  fleches.forEach((el) => {
    el.addEventListener("click", (e) => {
      if (el === fleches[0]) {
        /* aller à position gauche de l'image- largeur de l'image*/
        boiteImg.scrollTo({
          left: boiteImg.scrollLeft - boiteImg.offsetWidth,
        });
      } else {
        boiteImg.scrollTo({
          left: boiteImg.scrollLeft + boiteImg.offsetWidth,
        });
      }
      e.stopPropagation();
    });
  });
};

/* ------------------------------------------ */
const go_fullScreen = (elem) => {
  let not_fs =
    !document.fullscreenElement &&
    !document.mozFullScreen &&
    !document.webkitIsFullScreen &&
    !document.msFullscreenElement;
  if (not_fs) {
    if (elem.requestFullscreen) elem.requestFullscreen();
    else if (elem.mozRequestFullScreen) elem.mozRequestFullScreen();
    else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
    else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
  } else stop_fullScreen();
};

const stop_fullScreen = () => {
  let fs =
    document.fullscreenElement ||
    document.mozFullScreen ||
    document.webkitIsFullScreen ||
    document.msFullscreenElement;
  if (fs) {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
  }
};

const fulls = () => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "f") go_fullScreen(fix_fond);
    e.stopPropagation;
  });
};

/* ------------------------------------------ */
/*  quand on clique sur une image, zoomer , utiliser les fleches et fullscreen*/
tab.forEach((img) => {
  img.addEventListener("click", (e) => {
    zoom(e);
  });
});
av_ar();
fulls();

/*  si menu principal smartphones, gerer le menu glissant */
menuGlissant(".hamb", ".menu", ".lienMenuPrinc li");
