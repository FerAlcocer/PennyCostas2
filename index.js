const btn__desplegable = document.querySelector(".btn__desplegable");
const barra__submenu = document.querySelector(".barra__submenu");

const body = document.querySelector("body");
const navMenu = document.querySelector("header");
const links = document.querySelectorAll('.barra__submenu a[href^="#"]');

btn__desplegable.addEventListener("click", () => {
  barra__submenu.classList.toggle("barra__submenu__visible");
  body.classList.toggle("subMenu__activo");

  if (barra__submenu.classList.contains("barra__submenu__visible")) {
    btn__desplegable.setAttribute("aria-label", "Cerrar menu");
  } else {
    btn__desplegable.setAttribute("aria-label", "Abrir menu");
  }
});

links.forEach((links) => {
  links.addEventListener("click", function () {
    body.classList.remove("subMenu__activo");
    barra__submenu.classList.remove("barra__submenu__visible");
  });
});

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.add("scroll-down");
    body.classList.remove("scroll-up");
  }

  if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
    body.classList.add("scroll-up");
    body.classList.remove("scroll-down");
  }

  lastScroll = currentScroll;
});
