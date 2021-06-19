const fantom = document.querySelector(".fantom");
const bascule = document.querySelector(".bascule");

bascule.addEventListener("click", () => {
  fantom.style.display = fantom.style.display === "none" ? "block" : "none";
});

