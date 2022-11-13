const btn__desplegable = document.querySelector(".btn__desplegable");
const barra__submenu = document.querySelector(".barra__submenu");

btn__desplegable.addEventListener("click", () => {
  barra__submenu.classList.toggle("barra__submenu__visible");
});
