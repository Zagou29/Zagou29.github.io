import { menuGlissant } from "./menuYT.js";
import { go_fullScreen, stop_fullScreen } from "./fullScreen.js";
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
const stop_suiv = document.querySelector(".suiv");
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
    left: e.target.offsetLeft,
  });
  /* rajouter le stop au debut et la la fin des images */
  boiteImg.addEventListener("scroll", () => {
    boiteImg.scrollLeft === 0
      ? stop_prec.classList.add("show")
      : stop_prec.classList.remove("show");

    boiteImg.scrollLeft === boiteImg.scrollWidth - boiteImg.offsetWidth
      ? stop_suiv.classList.add("show")
      : stop_suiv.classList.remove("show");
  });
};

/* --------------------------------------------- */
/* cliquer sur av et ar pour passer d'une image a une autre à la souris*/
const av_ar = () => {
  fleches.forEach((el) => {
    el.addEventListener("click", (e) => {
      /* aller à position gauche de l'image- largeur de l'image*/
      el === fleches[0]
        ? boiteImg.scrollTo({
            left: boiteImg.scrollLeft - boiteImg.offsetWidth,
          })
        : boiteImg.scrollTo({
            left: boiteImg.scrollLeft + boiteImg.offsetWidth,
          });

      e.stopPropagation();
    });
  });
};

/* ------------------------------------------ */
const drGa = (gauche, droite, retour, fs) => {
  document.addEventListener("keydown", (e) => {
    if (e.preventDefault()) return;
    /* image de droite ou image de gauche */
    switch (e.code) {
      /* aller à position gauche de l'image- largeur de l'image*/
      case gauche: {
        boiteImg.scrollTo({ left: boiteImg.scrollLeft - boiteImg.offsetWidth });
        break;
      }
      case droite: {
        boiteImg.scrollTo({ left: boiteImg.scrollLeft + boiteImg.offsetWidth });
        break;
      }
      case retour: {
        zoom(e);
        break;
      }
      /* Toggle Fullscreen */
      case fs: {
        go_fullScreen(document.querySelector(".just_mod"));
        break;
      }
    }
    e.stopPropagation();
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
drGa("ArrowLeft", "ArrowRight", "Enter", "KeyF");

/*  si menu principal smartphones, gerer le menu glissant */
const hambP = {
  bouton: ".hamb",
  menu: ".menu",
  liens: ".lienMenuPrinc li",
};
menuGlissant(hambP);
