const fantom = document.querySelector(".fantom");
const bascule = document.querySelector(".bascule");

bascule.addEventListener("click", () => {
  fantom.style.display = fantom.style.display === "none" ? "block" : "none";
});
/* definir les dimensions du lecteur Iframe Youtube */
/* const cent = document.querySelector(".central")
let largCent = cent.clientWidth 
let hautCent = cent.clientHeight
let ratioV= 4 / 3
let largCalc = hautCent * ratioV
if (largCalc > largCent) {
  largCalc = largCent
  hautCent= largCalc / ratioV
}
// largCalc = largCalc - 4
// hautCent = hautCent - 4
console.log("larg Central = "+ largCent + "haut = "+ hautCent)
console.log("L frame = " + largCalc + "  H = " + hautCent)

const lect = document.querySelector(".lect")
let rect = lect.getBoundingClientRect()
console.log(rect)
console.log(rect.width +"      " +rect.clientWidth)
lect.style.width = rect.width
console.log("largeur lect forcée = "+lect.style.width)
console.log("largeur style = "+lect.style.width)
console.log("largeur lect = " + lect.clientWidth + "  hauteur lect =" + lect.clientHeight) */
