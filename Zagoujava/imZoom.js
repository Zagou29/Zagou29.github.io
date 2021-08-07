/* crée une div de classe .zoom et l'insere sur le body */
let zoomImage = (image) => {
  const div = document.createElement("div");
  div.classList.add("zoom");
  div.innerHTML = image;
  /* si on clique sur le bord du container image, on targette sur <aside> => stop */
  if (image.search("aside") === 1) {
    return;
  }
  /* dimension des images enfants du DIV */
  const h = div.children[0].naturalHeight;
  const l = div.children[0].naturalWidth;
  const ratioI = l / h;
  /* ratio de la fenetre */
  const ratioW = window.innerWidth / window.innerHeight;
  /* si on compare les ratios,il faut inverser et definir d'abord la hauteur */
  if (ratioW > ratioI) {
    div.children[0].style.width = "auto";
    div.children[0].style.height = 95 + "vh";
  }
/* afficher l'image zoom */
  document.body.appendChild(div);
};
/* cherche la div class="zoom" et la ferme, si elle existe */
let ferme = () => {
  const div = document.querySelector(".zoom");
  /* si on clique sur ailleurs que les images, div est null car la div n'a pas été crée */
  if (div != null) {
    div.parentNode.removeChild(div);
  }
};
/* si on pointe sur le container "image", on zoome, et si on releve le pointer on arrete le zoom */
document.getElementById("image").addEventListener("pointerdown", (e) => {
  e.preventDefault();
  zoomImage(e.target.outerHTML);
  const image = document.querySelector(".zoom").children;

  document.addEventListener("pointerup", ferme);
});
/*  */
