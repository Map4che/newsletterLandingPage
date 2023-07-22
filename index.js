const btn_hamburguer = document.querySelector(".container-hamburguer");
const prueba = document.getElementsByClassName("lista-item__link");
const palabra1 = document.querySelector(".opcion1");
const palabra2 = document.querySelector(".opcion2");
const palabra3 = document.querySelector(".opcion3");
const palabra4 = document.querySelector(".opcion4");
const menu_image = document.querySelector(".container-hamburguer");
const menu_hamburguer = document.querySelector(".lista-navbar");

const cambioDeMenu = () => {
  menu_hamburguer.classList.toggle("aparicion-menu");
  menu_image.classList.toggle("cambio");
  palabra1.classList.toggle("aparece");
  palabra2.classList.toggle("aparece");
  palabra3.classList.toggle("aparece");
  palabra4.classList.toggle("aparece");
  prueba.forEach((element) => {
    prueba.classList.add("probando");
  });
};

btn_hamburguer.addEventListener("click", cambioDeMenu);
