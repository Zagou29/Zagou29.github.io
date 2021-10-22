import { menuGlissant } from "./menuYT.js";
/* ------------------------------------------------------- */
/* dimension des images enfants du DIV */
let dimZoom = (el) => {
  const image = el.children[0];
  const h = image.naturalHeight;
  const l = image.naturalWidth;
  const ratioI = l / h;
  /* ratio de la fenetre */
  const ratioW = window.innerWidth / window.innerHeight;
  /* si on compare les ratios,il faut inverser et definir d'abord la hauteur */
  image.style.width = 95 + "vw";
  image.style.height = "auto";
  const hautIm = (window.innerWidth * 95) / 100 / ratioI;
  el.style.top = (window.innerHeight - hautIm) / 2 + "px";
  if (ratioW > ratioI) {
    image.style.width = "auto";
    image.style.height = 95 + "vh";
    el.style.top = 2.5 + "vh";
  }
};
/* ------------------------------------------------------- */
/* crée une div de classe .zoom et l'insere sur le body */
let zoomImage = (image) => {
  /* Si on clique sur l'overlay, rien */
  if (image === `<div class="overlay"></div>`) return;
  /* sinon créer la div Zoom, l'image choisie  et rajouter l'overlay*/
  const div = document.createElement("div");
  const overl = document.querySelector(".image");
  div.classList.add("zoom");
  /* rend visible overlay pour bloquer les images du dessous */
  overl.classList.add("nav--open");
  /* insere l'image et les fleches */
  div.innerHTML =
    image +
    ` <div class=" fleches precedent"><</div>
      <div class=" fleches suivant">></div>`;
  /* calculer les dimensions du zoom */
  dimZoom(div);
  /* afficher le Zoom */
  document.body.appendChild(div);
};
/* -------------------------------------------------------- */

const stockImages = document.querySelector(".image"); /* container des images */
const tab =
  document.querySelectorAll(".image img"); /* tableau des images img */

/* tableau des outerHTML des images */
const outers = [];
tab.forEach((el) => {
  outers.push(el.outerHTML);
});

/* si on pointe sur le container "image", on zoome, et si on releve le pointer on arrete le zoom */
stockImages.addEventListener("click", (e) => {
  e.preventDefault();
  /* ==============index de l'image cliquée */
  let numero = outers.indexOf(e.target.outerHTML);
  /* ==============zoomer l'image cliquée */
  zoomImage(
    e.target.outerHTML
  ); /* crée les div Zoom avec l'image cliquee et les fleches */
  const zoom = document.querySelector(".zoom"); /* le container zoom */
  const fleches =
    document.querySelectorAll(
      ".fleches"
    ); /* les deux div des fleches prec et suiv */
  /* ==============ferme la div Zoom et remet la classe à image */
  let ferme = (e) => {
    e.preventDefault();
    const zoome = document.querySelector(".zoom");
    const overl = document.querySelector(".image");
    if (zoome === null) {
      return;
    }
    zoome.parentNode.removeChild(zoome);
    overl.classList.remove("nav--open");
  };

  /* fonction changer de slide +1 suiv -1 prec */
  let ChangeSlide = (sens) => {
    numero = numero + sens;
    if (numero < 0) {
      numero = outers.length - 1;
    }
    if (numero > outers.length - 1) {
      numero = 0;
    }
    document.querySelector(".zoom img").outerHTML =
      outers[
        numero
      ]; /* remplace l'image en cours par la nouvelle choisie + ou - */
    dimZoom(zoom); /* retailler l'image */
  };
  /* ===== cliquer sur les fleches prec  ou suiv change les images */
  fleches.forEach((el) => {
    el.addEventListener("click", (e) => {
      if (el === fleches[0]) {
        ChangeSlide(-1);
        e.stopPropagation();
      } else {
        ChangeSlide(1);
        e.stopPropagation();
      }
    });
    /* ===idem sur touches droite et gauche */
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      ChangeSlide(-1);
    }
    if (e.key === "ArrowRight") {
      ChangeSlide(1);
    }
  });
  /* ============== fermer en cliquant sur Zoom ou une touche*/
  zoom.addEventListener("click", ferme);
  document.addEventListener("keypress", ferme);
});

/* =========Zommer ou dezoomer les images via les fleches haut et bas*/
const largHautImg = Array.from(document.querySelectorAll(".image img"));
/* dimensionner larg et haut des images, qui ensuite se wrappent en auto  */
let dimens = (larg) => {
  largHautImg.forEach((img) => {
    img.style.width = larg + "vw";
    img.style.height = (larg / 4) * 3 + "vw";
  });
};
let val = 8;
document.addEventListener("keydown", (e) => {
  /* valeurs de largeur des images qui coccupent le mieux l'ecran */
  const valLargeurs = [6, 7, 8, 9, 10, 13, 16, 19, 24, 32, 48, 90];
  e.preventDefault;
  if (e.key === "ArrowUp") {
    val += 1;
    if (val === 12) {
      val = 11;
      return;
    }
  }
  if (e.key === "ArrowDown") {
    val -= 1;
    if (val === -1) {
      val = 0;
      return;
    }
  }
  dimens(valLargeurs[val]);
});

/*  si menu principal smartphones, gerer le menu glissant */
menuGlissant(".hamb", ".menu", ".lienMenuPrinc li");
