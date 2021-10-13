import { menuGlissant } from "./menuYT.js";
/* transformer resizer en handler */
function resizer(element, cb) {
  /* appuyer sur l'élément */
  element.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    /* deplacer la souris en etant appuyé */
    document.addEventListener("pointermove", onPointerMove);
    /* en levant la souris on n'ecoute plus le mouvement. on s'arrete */
    document.addEventListener(
      "pointerup",
      () => {
        document.removeEventListener("pointermove", onPointerMove);
      },
      { once: true }
    );
  });
  /* en deplaçant la souris , le resizer se deplace Est Ouest */
  function onPointerMove(e) {
    e.preventDefault();
    cb(e.pageX);
  }
}
/* on cherche le resizer et on appuie sur la souris en se deplaçant */
resizer(document.querySelector(".resizer"), (x) => {
  document.body.style.setProperty("--glider", x + "px");
});

/* =============== menu principal smartphone */
/* import du menuYT */
/*  si menu principal smartphones, gerer le menu glissant */
  menuGlissant(".hamb", ".menu", ".lienMenuPrinc li");

