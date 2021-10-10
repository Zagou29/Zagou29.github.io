/* ------------------------------------------------------- */
/* dimension des images enfants du DIV */
let dimZoom = (el) => {
  const h = el.children[0].naturalHeight;
  const l = el.children[0].naturalWidth;
  const ratioI = l / h;
  /* ratio de la fenetre */
  const ratioW = window.innerWidth / window.innerHeight;
  /* si on compare les ratios,il faut inverser et definir d'abord la hauteur */
  if (ratioW > ratioI) {
    el.children[0].style.width = "auto";
    el.children[0].style.height = 95 + "vh";
  }
};
/* ------------------------------------------------------- */
/* crée une div de classe .zoom et l'insere sur le body */
let zoomImage = (image) => {
  const div = document.createElement("div");
  div.classList.add("zoom");
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
  /* ==============fait disparaitre la Div "image et la remplace par "blind */
  if (document.querySelector(".image") !== null) {
    document.querySelector(".image").classList.replace("image", "blind");
  } else {
    /* si on a cliqué sur une image (hors de zoom), stop et attente d'un click sur zoom ou une key pour fermer ou prec et suivant pour autres images*/
    return;
  }
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
    zoom.parentNode.removeChild(zoom);
    document.querySelector(".blind").classList.replace("blind", "image");
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
  /* ============== fermer en cliquant sur Zoomo une touche*/
  zoom.addEventListener("click", ferme);
  document.addEventListener("keypress", ferme);
});
/* =============== menu principal smartphone */
import { menuhamb } from "./menusHamb.js";
menuhamb();

