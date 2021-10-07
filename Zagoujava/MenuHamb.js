/* =============== menu principal smartphone */

const hamburg = document.querySelector(".hamb");
const menuH = document.querySelector(".menu ul");
hamburg.addEventListener("click", () => {
  menuH.style.transition = "opacity 0.5s  linear";
  menuH.style.opacity = menuH.style.opacity === "1" ? "0" : "1";
  menuH.style.visibility =
    menuH.style.visibility === "visible" ? "hidden" : "visible";
});
