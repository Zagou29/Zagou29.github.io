const fantom = document.querySelector(".fantom");
const bascule = document.querySelector(".bascule");

bascule.addEventListener("click", () => {
  fantom.style.display = fantom.style.display === "none" ? "block" : "none";
});
/* definir les dimensions du lecteur Iframe Youtube */
const cent = document.querySelector(".central");
const contUtube = document.querySelector(".l169");
const contUtube43 = document.querySelector(".l43");

/* frame 16_9 */
if (contUtube) {
  const dim = dimUtube(cent, 16 / 9);
  contUtube.style.width = dim[0] + "px";
  contUtube.style.height = dim[1] + "px";
  /*recalculer quand l'ecran change */
  window.addEventListener("resize", (e) => {
    const dim = dimUtube(cent, 16 / 9);
    contUtube.style.width = dim[0] + "px";
    contUtube.style.height = dim[1] + "px";
  });
}
/* frame 4_3 */
if (contUtube43) {
  const dim43 = dimUtube(cent, 4 / 3);
  contUtube43.style.width = dim43[0] + "px";
  contUtube43.style.height = dim43[1] + "px";
  /*recalculer quand l'ecran change */
  window.addEventListener("resize", (e) => {
    const dim43 = dimUtube(cent, 4 / 3);
    contUtube43.style.width = dim43[0] + "px";
    contUtube43.style.height = dim43[1] + "px";
  });
}

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
