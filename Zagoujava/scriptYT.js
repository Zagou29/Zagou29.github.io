/* import du menuYT */
import { menuGlissant, tog_fantom } from "./menuYT.js";

/* bascule Iframe YT vers image de fond */
tog_fantom();

/*  si menu principal smartphones, gerer le menu glissant */
const hambP = {
  bouton: ".hamb",
  menu: ".menu",
  liens: ".lienMenuPrinc li",
};
menuGlissant(hambP);
/* menu pour les  videos des playLists*/
const hambV = {
  bouton: "#hamburger",
  menu: ".menuGliss",
  liens: ".liens li",
};

menuGlissant(hambV);
