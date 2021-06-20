const fantom = document.querySelector(".fantom");
const bascule = document.querySelector(".bascule");

bascule.addEventListener("click", () => {
  fantom.style.display = fantom.style.display === "none" ? "block" : "none";
});

/* definir les dimensions du lecteur Iframe Youtube */
const container = document.querySelector(".central");
const contUtube169 = document.querySelector(".l169");
const contUtube43 = document.querySelector(".l43");

/* ecran 4/3 ou 16/9 en fonction du selecteur, null ou non */
ecranUt(contUtube169, 16 / 9);
ecranUt(contUtube43, 4 / 3);

/* donne les dimensions des ecrans en fonction du ratio */
function ecranUt(contDiv, ratio) {
  if (!contDiv) {
    return;
  }
  const dim = dimUtube(container, ratio);
  contDiv.style.width = dim[0] + "px";
  contDiv.style.height = dim[1] + "px";
  /*recalculer quand l'ecran change */
  window.addEventListener("resize", (e) => {
    const dim = dimUtube(container, ratio);
    contDiv.style.width = dim[0] + "px";
    contDiv.style.height = dim[1] + "px";
  });
}
/* calcul des dimensions de l'Iframe exterieure */
function dimUtube(cont, ratio) {
  let largCent = cont.clientWidth;
  let hautCent = cont.clientHeight;
  let largCalc = hautCent * ratio;
  if (largCalc > largCent) {
    largCalc = largCent;
    hautCent = largCalc / ratio;
  }
  return [largCalc, hautCent];
}
