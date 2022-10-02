/* import du menuYT */
import { menuGlissant, tog_fantom } from "./menuYT.js";

/* bascule Iframe YT vers image de fond */
tog_fantom()

/*  si menu principal smartphones, gerer le menu glissant */
menuGlissant(".hamb", ".menu", ".lienMenuPrinc li");
/* menu pour les  videos des playLists*/
menuGlissant("#hamburger", ".menuGliss", ".liens li");
