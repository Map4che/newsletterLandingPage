const btn_hamburguer = document.querySelector(".container-hamburguer");
const menu_image = document.querySelector(".container-hamburguer");
const menu_hamburguer = document.querySelector(".lista-navbar");
const palabras_menu = document.getElementsByClassName("lista-item__link");

const cambioDeMenu = () => {
  menu_hamburguer.classList.toggle("aparicion-menu");
  menu_image.classList.toggle("cambio");

  for (let i = 0; i < palabras_menu.length; i++) {
    palabras_menu[i].classList.toggle("aparece");
  }
};

btn_hamburguer.addEventListener("click", cambioDeMenu);
