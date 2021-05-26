const fantom = document.querySelector(".fantom");
const bascule = document.querySelector(".bascule");

bascule.addEventListener("mousedown", () => {
  fantom.style.display = "none"

});
bascule.addEventListener("mouseup", () => {
  fantom.style.display="block"
});
