import { menuGlissant } from "./menuYT.js";
/* ------------------------------------------------------- */
/* dimension des images enfants du DIV */
let dimZoom = (el) => {
  const h = el.children[0].naturalHeight;
  const l = el.children[0].naturalWidth;
  const ratioI = l / h;
  /* ratio de la fenetre */
  const ratioW = window.innerWidth / window.innerHeight;
  /* si on compare les ratios,il faut inverser et definir d'abord la hauteur */
  el.children[0].style.width = 95 + "vw";
  el.children[0].style.height = "auto";
  if (ratioW > ratioI) {
    el.children[0].style.width = "auto";
    el.children[0].style.height = 95 + "vh";
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
  overl.classList.add("nav--open");
  div.innerHTML =
    image +
    ` <div id="precedent"><</div>
      <div id="suivant">></div>`;
  /* si on clique sur le bord du container image, on targette sur <aside> => stop */
  dimZoom(div); /* calculer les dimensions du zoom */
  document.body.appendChild(div); /* afficher le Zoom */
};
/* -------------------------------------------------------- */
/* Tableau des images img */
const tab = document.querySelectorAll(".image img");
/* tableau des outerHTML des images */
const outers = [];
tab.forEach((el) => {
  outers.push(el.outerHTML);
});
/* ---------------------------------------------------------- */
/* si on pointe sur le container "image", on zoome, et si on releve le pointer on arrete le zoom */
const stockImages = document.querySelector(".image");
stockImages.addEventListener("click", (e) => {
  e.preventDefault();
  /* ==============index de l'image cliquée */
  let numero = outers.indexOf(e.target.outerHTML);
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
      outers[numero]; /* remplacer l'image par celle de numero +/-1 */
    dimZoom(zoom); /* retailler l'image */
  };
  /* ==============zoomer l'image cliquée */
  zoomImage(e.target.outerHTML);

  const prec = document.getElementById("precedent");
  const suiv = document.getElementById("suivant");
  const zoom = document.querySelector(".zoom");

  /* ==============ferme la div Zoom et remet la classe à image */
  let ferme = (e) => {
    e.preventDefault();
    const zoome = document.querySelector(".zoom");
    const overl = document.querySelector(".image");
     if (zoome !== null) {
      zoome.parentNode.removeChild(zoome);
      overl.classList.remove("nav--open");
     }
  };
  /* ==============click fleche Gauche => Précédent */
  prec.addEventListener("click", (e) => {
    ChangeSlide(-1);
    /* l'event reste sur la div prec, et ne remonte pas dans "blind" */
    e.stopPropagation();
  });
  /* ==============click fleche droite => Suivant */
  suiv.addEventListener("click", (e) => {
    ChangeSlide(1);
    e.stopPropagation();
  });
  /* ==============fleche droite =>Prec, fleche gauche=>suiv */
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

/*  si menu principal smartphones, gerer le menu glissant */
menuGlissant(".hamb", ".menu", ".lienMenuPrinc li");

/* =========Zommer ou dezoomer les images via les fleches haut et bas*/
const largHautImg = Array.from(document.querySelectorAll(".image img"));
/* dimensionner larg et haut des images, qui ensuite se wrappent en auto  */
let dimens = (val) => {
  document.body.style.setProperty("--largImg", val + "vw");
  let wid = getComputedStyle(document.body).getPropertyValue("--largImg");
  largHautImg.forEach((img) => {
    img.style.width = wid;
    img.style.height = (parseFloat(wid) / 4 * 3) + "vw";
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
