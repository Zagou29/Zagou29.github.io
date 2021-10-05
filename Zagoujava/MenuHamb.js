/* =============== menu principal smartphone */

const hamburg = document.querySelector(".hamb");
const menuH = document.querySelector(".menu ul");
hamburg.addEventListener("click", () => {
  menuH.style.display = menuH.style.display === "block" ? "none" : "block";
});
